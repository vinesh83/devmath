/* =========================================================
   Ellie's walkie-talkie: Dev holds the button and talks through a problem; Ellie (Claude, via a small
   server that keeps the key and a $1/day cap) answers with one short coaching question, read aloud.
   A grown-up switches it on in the Report screen (parent PIN + the device code). Every exchange is
   saved to state.ellieLog, which syncs to the private coach reports.
   ========================================================= */
const Walkie={
  URL:'https://ellie-walkie.vercel.app/api/ellie',
  on(){return !!state.ellieCode;},
  hist:[],key:null,busy:false,
  // what's on screen right now, for Ellie's context
  ctx(){if(!run||!run.queue||$('#scr-level').hidden)return {text:'(on the island map, no problem open)'};const p=run.queue[run.idx];if(!p)return {};
    let text='';try{text=describe(p);}catch(e){}const f=Pad.active;const typed=f&&f.val?f.val:'';
    const tries=(typeof ATT!=='undefined'&&ATT&&ATT.tries)?ATT.tries.length:0;
    let slip='';try{const e=ATT&&ATT.errors&&ATT.errors[ATT.errors.length-1];if(e&&e.tags)slip='last wrong answer '+e.a+'; tags: '+e.tags.join(', ');}catch(e){}
    const ans=p.kind==='div'&&p.rem?`${p.answer} remainder ${p.rem}`:p.answer!=null?p.answer:(p.f&&p.f.ans);
    return {text:text||p.kind,answer:ans,typed,tries,slip};},
  btn(){let b=document.querySelector('.ellie-btn');if(b)return b;
    b=el('button',{class:'ellie-btn',type:'button','aria-label':'Talk to Ellie'},el('span',{class:'ellie-ico'},'📻'),el('b',null,'Hold to talk'));
    const panel=el('div',{class:'ellie-panel',hidden:true});document.body.append(b,panel);this.panel=panel;
    b.addEventListener('pointerdown',e=>{e.preventDefault();this.down();});['pointerup','pointercancel','pointerleave'].forEach(t=>b.addEventListener(t,()=>this.up()));
    return b;},
  show(){const b=this.btn();const lvl=!$('#scr-level').hidden,map=!$('#scr-map').hidden&&$('#overlay').hidden;b.hidden=!this.on()||!(lvl||map);b.classList.toggle('on-map',map&&!lvl);if(this.panel)this.panel.classList.toggle('on-map',map&&!lvl);if(!(lvl||map)&&this.panel)this.panel.hidden=true;},
  // on a problem, the chat sits on the empty right side of the problem card, clear of the scratch paper
  place(){const p=this.panel,c=$('#card');if(!p)return;if($('#scr-level').hidden||!c){p.style.cssText='';return;}const r=c.getBoundingClientRect();if(!r.width){p.style.cssText='';return;}
    const w=Math.min(420,r.width*0.52);p.style.cssText=`left:${r.right-w-14}px;top:${r.top+14}px;bottom:auto;width:${w}px;transform:none`;},
  bubble(who,text){const p=this.panel;p.hidden=false;this.place();const row=el('div',{class:'ellie-row '+who},who==='ellie'?el('span',{class:'ellie-face'},'🐶'):null,el('p',null,text));
    p.append(row);while(p.children.length>4)p.firstChild.remove();clearTimeout(this.hideT);this.hideT=setTimeout(()=>{p.hidden=true;},20000);return row.querySelector('p');},
  // ---- listening (iPad dictation through Safari)
  // Dev talks over Ellie: she stops at once, and her queued sentences are dropped
  hush(){this.gen=(this.gen||0)+1;this.q=null;try{speechSynthesis.cancel();}catch(e){}try{this.src&&this.src.stop();}catch(e){}this.src=null;this.duck(false);},
  down(){if(this.busy)return;Snd.init&&Snd.init();this.hush();
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;const b=this.btn();b.classList.add('talking');b.querySelector('b').textContent='Listening…';
    if(!SR||this.noMic){this.typeIt();return;}
    this.heard='';const r=this.rec=new SR();r.lang='en-US';r.interimResults=true;r.continuous=true;
    r.onresult=e=>{let s='';for(const x of e.results)s+=x[0].transcript;this.heard=s;if(this.live)this.live.textContent=s;else this.live=this.bubble('dev',s);};
    r.onerror=e=>{if(/not-allowed|service-not-allowed|audio-capture/.test(e.error||'')){this.rec=null;this.noMic=true;r.onend=null;this.typeIt();}};r.onend=()=>{const s=(this.heard||'').trim();this.live=null;b.classList.remove('talking');b.querySelector('b').textContent='Hold to talk';if(s)this.send(s);};
    try{r.start();}catch(e){this.rec=null;this.typeIt();}},
  up(){if(this.rec){try{this.rec.stop();}catch(e){}this.rec=null;}},
  typeIt(){const b=this.btn();b.classList.remove('talking');b.querySelector('b').textContent='Hold to talk';
    const s=prompt('Type what you want to tell Ellie:');if(s&&s.trim()){this.bubble('dev',s.trim());this.send(s.trim());}},
  // ---- talking back (iPad voice, pitched up so it sounds like Ellie)
  voice(){if(this._v!==undefined)return this._v;const vs=(window.speechSynthesis&&speechSynthesis.getVoices())||[];
    this._v=vs.find(v=>/Samantha|Nicky|Karen|Moira|Tessa/i.test(v.name)&&/^en/i.test(v.lang))||vs.find(v=>/^en-US/i.test(v.lang))||null;return this._v;},
  clean(t){return this.words(t).replace(/\[[^\]]*\]\s*/g,'').replace(/[*_#]/g,'');},
  // the spoken part of a reply: everything before Ellie's <mark .../> tag (or a tag still arriving)
  words(t){return t.replace(/<mark[\s\S]*$/,'').replace(/<[^>]*$/,'');},
  // ---- seeing his scratch paper
  snap(){try{if(typeof Scratch==='undefined'||!Scratch.cv||!Scratch.strokes.some(x=>x.t==='p')||$('#scr-level').hidden)return null;
    const c=Scratch.cv,k=Math.min(1,900/c.width),o=document.createElement('canvas');o.width=Math.round(c.width*k);o.height=Math.round(c.height*k);
    const x=o.getContext('2d');x.fillStyle='#fffaf0';x.fillRect(0,0,o.width,o.height);x.drawImage(c,0,0,o.width,o.height);this.snapWH=[c.clientWidth,c.clientHeight];return o.toDataURL('image/jpeg',0.72);}catch(e){return null;}},
  markOf(t){const m=t.match(/<mark\b([^>]*)\/?>/);if(!m)return null;const v=n=>{const r=m[1].match(new RegExp(n+'\\s*=\\s*"?([0-9.]+)'));return r?Math.max(0,Math.min(1,+r[1])):null;};
    const o={x:v('x'),y:v('y'),w:v('w')||0.12,h:v('h')||0.1};return o.x==null||o.y==null?null:o;},
  // a soft golden "look here" ring on the scratch paper; goes away when he writes again or after 25 seconds
  ring(m){this.unring();if(!m||typeof Scratch==='undefined'||!Scratch.cv)return;const cv=Scratch.cv,par=cv.offsetParent;if(!par||!cv.offsetWidth)return;
    // pinned to the paper's top-left corner in the same units as his strokes, so it stays on his writing if the paper resizes
    const [W,H]=this.snapWH||[cv.offsetWidth,cv.offsetHeight],w=Math.max(70,m.w*W+36),h=Math.max(56,m.h*H+30);
    const L=el('div',{class:'ellie-mark-layer',style:`left:${cv.offsetLeft}px;top:${cv.offsetTop}px`});
    L.append(el('div',{class:'ellie-mark',style:`left:${m.x*W-w/2}px;top:${m.y*H-h/2}px;width:${w}px;height:${h}px`},el('span',null,'🐾')));
    par.append(L);this.ringEl=L;this.ringT=setTimeout(()=>this.unring(),25000);
    if(!this.ringHook){this.ringHook=1;cv.addEventListener('pointerdown',()=>{this.unring();if(this.panel&&!this.busy)this.panel.hidden=true;});}},
  unring(){clearTimeout(this.ringT);if(this.ringEl){this.ringEl.remove();this.ringEl=null;}},
  say(t){t=this.clean(t);if(!t.trim()||state.mute)return Promise.resolve();return new Promise(done=>{try{const u=new SpeechSynthesisUtterance(t);const v=this.voice();if(v)u.voice=v;u.pitch=1.55;u.rate=1.04;u.volume=1;u.onend=u.onerror=()=>done();speechSynthesis.speak(u);setTimeout(done,600+t.length*90);}catch(e){done();}});},
  // the puppy voice (server: /api/voice). Fetches start right away; clips play in order.
  speak(t,first){t=this.words(t);if(!t.trim()||state.mute)return;
    const code=state.ellieCode,go=()=>this.noVoice||!code?Promise.reject(0):fetch(this.URL.replace(/ellie$/,'voice'),{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({code,text:t.trim()})})
      .then(r=>r.ok?r.arrayBuffer():Promise.reject(r.status)).then(b=>{this.voiceOk=true;return b;});
    // until one clip has worked (the server designs the voice on first use), ask one at a time
    const got=this.voiceOk?go():(this.vlast=(this.vlast||Promise.resolve()).catch(()=>{}).then(go));
    got.catch(()=>{});
    const g=this.gen||0;
    this.q=(this.q||Promise.resolve()).then(async()=>{if(g!==(this.gen||0))return;this.duck(true);
      try{const buf=await got;if(g!==(this.gen||0))return;if(first)await this.chirp();await this.play(buf);}
      catch(st){if(st===503||st===401||(st===0&&code))this.noVoice=true;if(g===(this.gen||0))await this.say(t);}
      if(g===(this.gen||0))this.duck(false);});},
  play(buf){const c=Snd.ctx;if(!c)return Promise.reject(-1);return c.decodeAudioData(buf.slice(0)).then(ab=>new Promise(done=>{const s=c.createBufferSource();s.buffer=ab;s.connect(c.destination);s.onended=done;this.src=s;s.start();setTimeout(done,ab.duration*1000+500);}));},
  // walkie-talkie "kshh" before Ellie's first words
  chirp(){const c=Snd.ctx;if(!c)return Promise.resolve();try{const n=c.createBuffer(1,c.sampleRate*0.16,c.sampleRate),d=n.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*(1-i/d.length);
    const s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=n;f.type='bandpass';f.frequency.value=2200;g.gain.value=0.25;s.connect(f).connect(g).connect(c.destination);s.start();
    const o=c.createOscillator(),og=c.createGain();o.frequency.value=1400;og.gain.setValueAtTime(0.06,c.currentTime+0.16);og.gain.setValueAtTime(0,c.currentTime+0.22);og.gain.setValueAtTime(0,c.currentTime);og.gain.setValueAtTime(0.06,c.currentTime+0.16);o.connect(og).connect(c.destination);o.start();o.stop(c.currentTime+0.23);}catch(e){}
    return new Promise(r=>setTimeout(r,260));},
  // music drops while Ellie talks
  duck(on){try{if(Snd.musG)Snd.musG.gain.value=on?0.25:1;}catch(e){}try{const a=typeof Isle!=='undefined'&&Isle.aud;if(a)a.volume=on?0.15:0.55;}catch(e){}},
  async send(said){this.mark=null;const c=this.ctx(),k=(run&&run.idx)+'|'+c.text;if(k!==this.key){this.key=k;this.hist=[];}
    this.busy=true;this.unring();const out=this.bubble('ellie','…');let reply='',spoken=0;const image=this.snap();
    try{const body=JSON.stringify({code:state.ellieCode,problem:c,history:this.hist,said,image}),ask=()=>fetch(this.URL,{method:'POST',headers:{'content-type':'application/json'},body});
      // one quiet retry if the Wi-Fi blips
      const r=await ask().catch(()=>new Promise(ok=>setTimeout(ok,900)).then(ask));
      if(r.status===429){reply='I’ve talked a lot today! Let’s chat again tomorrow. You’ve got this. Woof!';out.textContent=reply;this.speak(reply,1);}
      else if(!r.ok||!r.body){reply=r.status===401?'Ask a grown-up to check my walkie-talkie code.':'My walkie-talkie is crackly. Try again in a moment!';out.textContent=reply;this.speak(reply,1);}
      else{const rd=r.body.getReader(),dec=new TextDecoder();
        for(;;){const {value,done}=await rd.read();if(done)break;reply+=dec.decode(value,{stream:true});out.textContent=this.clean(reply);
          // speak each finished sentence as soon as it arrives
          const m=this.words(reply).slice(spoken).match(/^[\s\S]*?[.!?](\s|$)/);if(m){this.speak(m[0],!spoken);spoken+=m[0].length;}}
        const rest=this.words(reply).slice(spoken);if(rest.trim())this.speak(rest,!spoken);this.mark=this.markOf(reply);this.ring(this.mark);}}
    catch(e){console.warn('ellie',e);reply='My walkie-talkie is crackly. Try again in a moment!';out.textContent=reply;this.say(reply);}
    this.busy=false;this.hist.push({role:'user',content:said},{role:'assistant',content:this.words(reply).trim()||'…'});
    state.ellieLog=(state.ellieLog||[]).concat([{t:new Date().toISOString(),day:dayStr(),q:c.text,typed:c.typed||'',said,reply:this.clean(reply),saw:!!image,mark:this.markOf(reply)}]).slice(-200);
    if(typeof ATT!=='undefined'&&ATT)ATT.ellie=(ATT.ellie||0)+1;saveState();},
  // grown-up setup, from the Report screen
  setup(){Parent.guard(()=>{const inp=el('input',{class:'syncin',placeholder:'Walkie-talkie code',value:state.ellieCode||'',autocomplete:'off',autocapitalize:'characters'});
    overlay(el('div',{class:'modal'},el('h2',null,'📻 Ellie’s walkie-talkie'),el('p',null,'Dev can hold the walkie-talkie button and talk a problem through with Ellie. She coaches with questions and never just gives answers. Every chat is saved to your coach reports. Turn it off by clearing the code.'),
      inp,el('div',{class:'btns'},el('button',{class:'btn',type:'button',onclick:()=>{state.ellieCode=inp.value.trim().toUpperCase()||null;saveState();overlay(null);Walkie.show();}},'Save'),el('button',{class:'btn btn-dark',type:'button',onclick:()=>{Snd.init();const c=state.ellieCode;state.ellieCode=inp.value.trim().toUpperCase()||c;Walkie.noVoice=false;Walkie.speak('[excited] Hi! I’m Ellie! Hold the walkie-talkie button and tell me what you’re thinking. Woof!',1);state.ellieCode=c;}},'🔊 Test voice'),el('button',{class:'btn btn-dark',type:'button',onclick:()=>overlay(null)},'Cancel'))));});}
};
setInterval(()=>{try{Walkie.show();}catch(e){}},400);
{const _sr=showReport;showReport=function(){const r=_sr.apply(this,arguments);try{const m=document.querySelector('#overlay .modal');if(m&&!m.querySelector('.ellie-setup')){const b=el('button',{class:'btn btn-dark ellie-setup',type:'button',onclick:()=>Walkie.setup()},state.ellieCode?'📻 Ellie walkie-talkie: on':'📻 Set up Ellie’s walkie-talkie');m.append(b);}}catch(e){}return r;};}
window.__walkie=Walkie;
Object.defineProperty(window,'__scratch',{get:()=>Scratch});
