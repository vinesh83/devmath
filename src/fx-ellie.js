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
  tfetch(url,o,ms){const ac=new AbortController(),t=setTimeout(()=>ac.abort(),ms);return fetch(url,Object.assign({},o,{signal:ac.signal})).finally(()=>clearTimeout(t));},
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
    b.addEventListener('pointerdown',e=>{e.preventDefault();this.holding=true;this.down();});['pointerup','pointercancel','pointerleave'].forEach(t=>b.addEventListener(t,()=>{this.holding=false;this.up();}));
    return b;},
  // battles, mini-games and videos have their own buttons: the walkie-talkie steps aside
  inFight(){return [...document.querySelectorAll('.bb-ctl,.ag-pad,.ap-grid,.spd-wrap,#catch,#dash,#whack,.vp,#cine3d,.adv-panel')].some(x=>x.getClientRects().length);},
  show(){const b=this.btn();const fight=this.inFight(),lvl=!$('#scr-level').hidden&&$('#overlay').hidden&&!fight,map=!$('#scr-map').hidden&&$('#overlay').hidden&&!fight;b.hidden=!this.on()||!(lvl||map);if(fight&&!this.busy){this.hush();this.unring();}if(!b.hidden&&!this.fillT){this.fillSeen=(this.fillSeen||0)+1;if(this.fillSeen>8)this.fillLoad();}b.classList.toggle('on-map',map&&!lvl);if(this.panel)this.panel.classList.toggle('on-map',map&&!lvl);if(!(lvl||map)&&this.panel)this.panel.hidden=true;if(!b.hidden)this.dock(b,map&&!lvl);},
  // the button never sits on anything he needs: it takes the first spot (home first) with no button, answer box,
  // keypad, Pencil paper or joystick under it, and shrinks to a small round button away from home
  SPOTS:[{k:'home'},{k:'br',r:12,b:12},{k:'tr',r:12,t:76},{k:'tl',l:12,t:76},{k:'mr',r:8,m:1},{k:'ml',l:8,m:1},{k:'tc',c:1,t:8},{k:'bc',c:1,b:8}],
  NEED:'button,a[href],input,select,textarea,[role=button],[tabindex],#scratch,.scratch-wrap,.ink,.ink-cv,.mk-cv,.story,.field,.items,.w3d-joy,.w3d-btn,.w3d-card,.adv-panel,.tut-ask,#actions,#keys,.pad,.keys,label',
  spotRect(sp,map){const W=innerWidth,H=innerHeight;if(sp.k==='home')return map?{x:W-132-200,y:H-30-68,w:200,h:68}:{x:16,y:H-16-68,w:200,h:68};
    const w=64,h=64;const x=sp.c?(W-w)/2:sp.l!=null?sp.l:W-sp.r-w,y=sp.m?(H-h)/2:sp.t!=null?sp.t:H-sp.b-h;return {x,y,w,h};},
  blocked(R,b){let n=0;for(let i=0;i<4;i++)for(let j=0;j<3;j++){const x=R.x+4+(R.w-8)*i/3,y=R.y+4+(R.h-8)*j/2;
      for(const e of document.elementsFromPoint(x,y)){if(e===b||b.contains(e)||(this.panel&&this.panel.contains(e)))continue;if(e===document.body||e===document.documentElement)break;
        const t=e.closest(this.NEED),cd=e.closest('.card');if((t&&!t.contains(b))||(cd&&e!==cd)){n++;break;}}}return n;},   // empty card space is fine, its words are not
  dock(b,map){if(this.holding||this.rec)return;const cur=this.spot||'home';let best=null,bn=1e9;
    for(const sp of this.SPOTS){const n=this.blocked(this.spotRect(sp,map),b);if(n===0){best=sp;bn=0;break;}if(n<bn){bn=n;best=sp;}}
    if(!best||best.k===cur&&this.spotMap===map)return;this.spot=best.k;this.spotMap=map;
    const st=b.style;st.left=st.right=st.top=st.bottom=st.transform='';b.classList.toggle('mini',best.k!=='home');
    if(best.k!=='home'){if(best.c){st.left='50%';st.transform='translateX(-50%)';}else if(best.l!=null)st.left=best.l+'px';else{st.left='auto';st.right=best.r+'px';}
      if(best.m){st.top='50%';st.bottom='auto';st.transform=(st.transform?st.transform+' ':'')+'translateY(-50%)';}else if(best.t!=null){st.top=best.t+'px';st.bottom='auto';}else st.bottom=best.b+'px';}},
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
  words(t){return t.replace(/<mark\b[^>]*>\s*/g,'').replace(/<[^>]*$/,'');},
  // ---- instant replies: short lines in Ellie's voice that play the moment he lets go, while she reads and thinks.
  // Made once with the puppy voice and kept on the iPad.
  FILL:{look:['[curious] Ooh, let me look at your paper!','[happily] Hmm, let me sniff this out!','[gently] Okay, let me see your work!'],
    talk:['[happily] Hmm, good thinking, let me think!','[curious] Ooh, okay, one sec!','[gently] Mm-hmm, let me think about that!']},
  fillLoad(){if(this.fillT||!state.ellieCode||this.noVoice)return;this.fillT=1;let store={};try{store=JSON.parse(localStorage.getItem('ellie-fill-v1')||'{}');}catch(e){}
    this.fillBuf={};const all=[...this.FILL.look,...this.FILL.talk];
    const b64=buf=>{let s='';const u=new Uint8Array(buf);for(let i=0;i<u.length;i+=8192)s+=String.fromCharCode.apply(null,u.subarray(i,i+8192));return btoa(s);};
    const idle=()=>new Promise(ok=>{const w=()=>this.busy||this.talking?setTimeout(w,700):ok();w();});
    (async()=>{for(const t of all){if(store[t]){const bin=atob(store[t]),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);this.fillBuf[t]=u.buffer;continue;}
      // never compete with a live question: wait until Ellie is idle
      await idle();
      try{const r=await fetch(this.URL.replace(/ellie$/,'voice'),{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({code:state.ellieCode,text:t})});if(!r.ok){this.fillT=0;break;}
        const buf=await r.arrayBuffer();this.fillBuf[t]=buf;store[t]=b64(buf);try{localStorage.setItem('ellie-fill-v1',JSON.stringify(store));}catch(e){}}catch(e){this.fillT=0;break;}}})();},
  fill(kind){if(state.mute)return false;const L=this.FILL[kind],t=L[Math.floor(Math.random()*L.length)],buf=this.fillBuf&&this.fillBuf[t];
    // not downloaded yet: stay quiet rather than switch voices mid-chat
    if(!buf&&state.ellieCode&&!this.noVoice)return false;
    const g=this.gen||0;this.q=(this.q||Promise.resolve()).then(async()=>{if(g!==(this.gen||0))return;this.duck(true);await this.chirp();
      if(buf&&!this.noVoice){try{await this.play(buf);}catch(e){await this.say(t);}}else await this.say(t);});return true;},
  // ---- seeing his scratch paper
  snap(){try{if(typeof Scratch==='undefined'||!Scratch.cv||$('#scr-level').hidden)return null;const ink=Scratch.strokes.filter(x=>x.t==='p');if(!ink.length)return null;
    // crop to his writing (plus a margin): a smaller picture reads faster and more accurately
    const c=Scratch.cv,W=c.clientWidth,H=c.clientHeight;let x0=W,y0=H,x1=0,y1=0;for(const s of ink)for(const p of s.pts){x0=Math.min(x0,p[0]);y0=Math.min(y0,p[1]);x1=Math.max(x1,p[0]);y1=Math.max(y1,p[1]);}
    const m=40;x0=Math.max(0,x0-m);y0=Math.max(0,y0-m);x1=Math.min(W,x1+m);y1=Math.min(H,y1+m);
    if(x1-x0<240){const cx=(x0+x1)/2;x0=Math.max(0,cx-120);x1=Math.min(W,x0+240);}if(y1-y0<140){const cy=(y0+y1)/2;y0=Math.max(0,cy-70);y1=Math.min(H,y0+140);}
    const d=c.width/W,k=Math.min(1,700/((x1-x0)*d)),o=document.createElement('canvas');o.width=Math.round((x1-x0)*d*k);o.height=Math.round((y1-y0)*d*k);
    const g=o.getContext('2d');g.fillStyle='#fffaf0';g.fillRect(0,0,o.width,o.height);g.drawImage(c,x0*d,y0*d,(x1-x0)*d,(y1-y0)*d,0,0,o.width,o.height);
    this.snapBox={x:x0,y:y0,w:x1-x0,h:y1-y0};return o.toDataURL('image/jpeg',0.75);}catch(e){return null;}},
  markOf(t){const m=t.match(/<mark\b([^>]*)\/?>/);if(!m)return null;const v=n=>{const r=m[1].match(new RegExp(n+'\\s*=\\s*"?([0-9.]+)'));return r?Math.max(0,Math.min(1,+r[1])):null;};
    const o={x:v('x'),y:v('y'),w:v('w')||0.12,h:v('h')||0.1};return o.x==null||o.y==null?null:o;},
  // a soft golden "look here" ring on the scratch paper; goes away when he writes again or after 25 seconds
  ring(m){this.unring();if(!m||typeof Scratch==='undefined'||!Scratch.cv)return;const cv=Scratch.cv,par=cv.offsetParent;if(!par||!cv.offsetWidth)return;
    // pinned to the paper's top-left corner in the same units as his strokes, so it stays on his writing if the paper resizes
    const B=this.snapBox||{x:0,y:0,w:cv.offsetWidth,h:cv.offsetHeight},w=Math.max(70,m.w*B.w+36),h=Math.max(56,m.h*B.h+30),cx=B.x+m.x*B.w,cy=B.y+m.y*B.h;
    const L=el('div',{class:'ellie-mark-layer',style:`left:${cv.offsetLeft}px;top:${cv.offsetTop}px`});
    L.append(el('div',{class:'ellie-mark',style:`left:${cx-w/2}px;top:${cy-h/2}px;width:${w}px;height:${h}px`},el('span',null,'🐾')));
    par.append(L);this.ringEl=L;this.ringT=setTimeout(()=>this.unring(),25000);
    if(!this.ringHook){this.ringHook=1;cv.addEventListener('pointerdown',()=>{this.unring();if(this.panel&&!this.busy)this.panel.hidden=true;});}},
  unring(){clearTimeout(this.ringT);if(this.ringEl){this.ringEl.remove();this.ringEl=null;}},
  say(t){t=this.clean(t);if(!t.trim()||state.mute)return Promise.resolve();return new Promise(done=>{try{const u=new SpeechSynthesisUtterance(t);const v=this.voice();if(v)u.voice=v;u.pitch=1.55;u.rate=1.04;u.volume=1;u.onend=u.onerror=()=>done();speechSynthesis.speak(u);setTimeout(done,600+t.length*90);}catch(e){done();}});},
  // the puppy voice (server: /api/voice). Fetches start right away; clips play in order.
  speak(t,first){t=this.words(t);if(!t.trim()||state.mute)return;
    // a piece with no words (only a mood cue or an emoji) has nothing to say; the voice server rejects it
    if(!/[\p{L}\p{N}]/u.test(t.replace(/\[[^\]]*\]/g,'')))return;
    const code=state.ellieCode,go=()=>this.noVoice||!code?Promise.reject(0):this.tfetch(this.URL.replace(/ellie$/,'voice'),{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({code,text:t.trim()})},7000)
      .then(r=>r.ok?r.arrayBuffer():Promise.reject(r.status)).then(b=>{this.voiceOk=true;this.vmiss=0;return b;});
    // until one clip has worked (the server designs the voice on first use), ask one at a time
    const got=this.voiceOk?go():(this.vlast=(this.vlast||Promise.resolve()).catch(()=>{}).then(go));
    got.catch(()=>{});
    const g=this.gen||0;
    this.q=(this.q||Promise.resolve()).then(async()=>{if(g!==(this.gen||0))return;this.duck(true);
      try{const buf=await got;if(g!==(this.gen||0))return;if(first)await this.chirp();await this.play(buf);}
      catch(st){if(st===503||st===401)this.noVoice=true;else if(typeof st!=='number'&&(this.vmiss=(this.vmiss||0)+1)>=3)this.noVoice=true;if(g===(this.gen||0))await this.say(t);}
      if(g===(this.gen||0))this.duck(false);});},
  play(buf){const c=Snd.ctx;if(!c)return Promise.reject(-1);return c.decodeAudioData(buf.slice(0)).then(ab=>new Promise(done=>{const s=c.createBufferSource();s.buffer=ab;s.connect(c.destination);s.onended=done;this.src=s;s.start();setTimeout(done,ab.duration*1000+500);}));},
  // walkie-talkie "kshh" before Ellie's first words
  chirp(){const c=Snd.ctx;if(!c)return Promise.resolve();try{const n=c.createBuffer(1,c.sampleRate*0.16,c.sampleRate),d=n.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*(1-i/d.length);
    const s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=n;f.type='bandpass';f.frequency.value=2200;g.gain.value=0.25;s.connect(f).connect(g).connect(c.destination);s.start();
    const o=c.createOscillator(),og=c.createGain();o.frequency.value=1400;og.gain.setValueAtTime(0.06,c.currentTime+0.16);og.gain.setValueAtTime(0,c.currentTime+0.22);og.gain.setValueAtTime(0,c.currentTime);og.gain.setValueAtTime(0.06,c.currentTime+0.16);o.connect(og).connect(c.destination);o.start();o.stop(c.currentTime+0.23);}catch(e){}
    return new Promise(r=>setTimeout(r,260));},
  // music drops while Ellie talks
  duck(on){this.talking=on;try{Snd.levels();if(on&&Snd.musG)Snd.musG.gain.value*=0.3;}catch(e){}try{const a=typeof Isle!=='undefined'&&Isle.aud;if(a)a.volume=on?0.15:0.55;}catch(e){}},
  async send(said){this.mark=null;const c=this.ctx(),k=(run&&run.idx)+'|'+c.text;if(k!==this.key){this.key=k;this.hist=[];}
    this.busy=true;this.unring();this.snapBox=null;const image=this.snap();const out=this.bubble('ellie',image?'👀 Looking at your paper…':'…');let reply='',spoken=0,ringed=false;const filled=this.fill(image?'look':'talk');
    try{const body=JSON.stringify({code:state.ellieCode,problem:c,history:this.hist,said,image}),ask=()=>this.tfetch(this.URL,{method:'POST',headers:{'content-type':'application/json'},body},15000);
      // one quiet retry if the Wi-Fi blips
      const r=await ask().catch(()=>new Promise(ok=>setTimeout(ok,900)).then(ask));
      if(r.status===429){reply='I’ve talked a lot today! Let’s chat again tomorrow. You’ve got this. Woof!';out.textContent=reply;this.speak(reply,1);}
      else if(!r.ok||!r.body){reply=r.status===401?'Ask a grown-up to check my walkie-talkie code.':'My walkie-talkie is crackly. Try again in a moment!';out.textContent=reply;this.speak(reply,1);}
      else{const rd=r.body.getReader(),dec=new TextDecoder();
        for(;;){const {value,done}=await rd.read();if(done)break;reply+=dec.decode(value,{stream:true});const shown=this.clean(reply);if(shown.trim())out.textContent=shown;
          if(!ringed&&/<mark\b[^>]*>/.test(reply)){ringed=true;this.mark=this.markOf(reply);this.ring(this.mark);}
          // speak each finished sentence as soon as it arrives
          const m=this.words(reply).slice(spoken).match(/^[\s\S]*?[.!?](\s|$)/);if(m){this.speak(m[0],!spoken&&!filled);spoken+=m[0].length;}}
        const rest=this.words(reply).slice(spoken);if(rest.trim())this.speak(rest,!spoken&&!filled);if(!ringed){this.mark=this.markOf(reply);this.ring(this.mark);}}}
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
