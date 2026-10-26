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
  bubble(who,text){const p=this.panel;p.hidden=false;const row=el('div',{class:'ellie-row '+who},who==='ellie'?el('span',{class:'ellie-face'},'🐶'):null,el('p',null,text));
    p.append(row);while(p.children.length>4)p.firstChild.remove();clearTimeout(this.hideT);this.hideT=setTimeout(()=>{p.hidden=true;},20000);return row.querySelector('p');},
  // ---- listening (iPad dictation through Safari)
  down(){if(this.busy)return;Snd.init&&Snd.init();try{speechSynthesis.cancel();}catch(e){}
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
  clean(t){return t.replace(/\[[^\]]*\]\s*/g,'').replace(/[*_#]/g,'');},
  say(t){t=this.clean(t);if(!t.trim()||state.mute)return Promise.resolve();return new Promise(done=>{try{const u=new SpeechSynthesisUtterance(t);const v=this.voice();if(v)u.voice=v;u.pitch=1.55;u.rate=1.04;u.volume=1;u.onend=u.onerror=()=>done();speechSynthesis.speak(u);setTimeout(done,600+t.length*90);}catch(e){done();}});},
  // the puppy voice (server: /api/voice). Fetches start right away; clips play in order.
  speak(t,first){if(!t.trim()||state.mute)return;
    const code=state.ellieCode,go=()=>this.noVoice||!code?Promise.reject(0):fetch(this.URL.replace(/ellie$/,'voice'),{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({code,text:t.trim()})})
      .then(r=>r.ok?r.arrayBuffer():Promise.reject(r.status)).then(b=>{this.voiceOk=true;return b;});
    // until one clip has worked (the server designs the voice on first use), ask one at a time
    const got=this.voiceOk?go():(this.vlast=(this.vlast||Promise.resolve()).catch(()=>{}).then(go));
    got.catch(()=>{});
    this.q=(this.q||Promise.resolve()).then(async()=>{this.duck(true);
      try{const buf=await got;if(first)await this.chirp();await this.play(buf);}
      catch(st){if(st===503||st===401||(st===0&&code))this.noVoice=true;await this.say(t);}
      this.duck(false);});},
  play(buf){const c=Snd.ctx;if(!c)return Promise.reject(-1);return c.decodeAudioData(buf.slice(0)).then(ab=>new Promise(done=>{const s=c.createBufferSource();s.buffer=ab;s.connect(c.destination);s.onended=done;s.start();setTimeout(done,ab.duration*1000+500);}));},
  // walkie-talkie "kshh" before Ellie's first words
  chirp(){const c=Snd.ctx;if(!c)return Promise.resolve();try{const n=c.createBuffer(1,c.sampleRate*0.16,c.sampleRate),d=n.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*(1-i/d.length);
    const s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=n;f.type='bandpass';f.frequency.value=2200;g.gain.value=0.25;s.connect(f).connect(g).connect(c.destination);s.start();
    const o=c.createOscillator(),og=c.createGain();o.frequency.value=1400;og.gain.setValueAtTime(0.06,c.currentTime+0.16);og.gain.setValueAtTime(0,c.currentTime+0.22);og.gain.setValueAtTime(0,c.currentTime);og.gain.setValueAtTime(0.06,c.currentTime+0.16);o.connect(og).connect(c.destination);o.start();o.stop(c.currentTime+0.23);}catch(e){}
    return new Promise(r=>setTimeout(r,260));},
  // music drops while Ellie talks
  duck(on){try{if(Snd.musG)Snd.musG.gain.value=on?0.25:1;}catch(e){}try{const a=typeof Isle!=='undefined'&&Isle.aud;if(a)a.volume=on?0.15:0.55;}catch(e){}},
  async send(said){const c=this.ctx(),k=(run&&run.idx)+'|'+c.text;if(k!==this.key){this.key=k;this.hist=[];}
    this.busy=true;const out=this.bubble('ellie','…');let reply='',spoken=0;
    try{const r=await fetch(this.URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({code:state.ellieCode,problem:c,history:this.hist,said})});
      if(r.status===429){reply='I’ve talked a lot today! Let’s chat again tomorrow. You’ve got this. Woof!';out.textContent=reply;this.speak(reply,1);}
      else if(!r.ok||!r.body){reply=r.status===401?'Ask a grown-up to check my walkie-talkie code.':'My walkie-talkie is crackly. Try again in a moment!';out.textContent=reply;this.speak(reply,1);}
      else{const rd=r.body.getReader(),dec=new TextDecoder();
        for(;;){const {value,done}=await rd.read();if(done)break;reply+=dec.decode(value,{stream:true});out.textContent=this.clean(reply);
          // speak each finished sentence as soon as it arrives
          const m=reply.slice(spoken).match(/^[\s\S]*?[.!?](\s|$)/);if(m){this.speak(m[0],!spoken);spoken+=m[0].length;}}
        if(reply.slice(spoken).trim())this.speak(reply.slice(spoken),!spoken);}}
    catch(e){reply='My walkie-talkie is crackly. Try again in a moment!';out.textContent=reply;this.say(reply);}
    this.busy=false;this.hist.push({role:'user',content:said},{role:'assistant',content:reply});
    state.ellieLog=(state.ellieLog||[]).concat([{t:new Date().toISOString(),day:dayStr(),q:c.text,typed:c.typed||'',said,reply:this.clean(reply)}]).slice(-200);
    if(typeof ATT!=='undefined'&&ATT)ATT.ellie=(ATT.ellie||0)+1;saveState();},
  // grown-up setup, from the Report screen
  setup(){Parent.guard(()=>{const inp=el('input',{class:'syncin',placeholder:'Walkie-talkie code',value:state.ellieCode||'',autocomplete:'off',autocapitalize:'characters'});
    overlay(el('div',{class:'modal'},el('h2',null,'📻 Ellie’s walkie-talkie'),el('p',null,'Dev can hold the walkie-talkie button and talk a problem through with Ellie. She coaches with questions and never just gives answers. Every chat is saved to your coach reports. Turn it off by clearing the code.'),
      inp,el('div',{class:'btns'},el('button',{class:'btn',type:'button',onclick:()=>{state.ellieCode=inp.value.trim().toUpperCase()||null;saveState();overlay(null);Walkie.show();}},'Save'),el('button',{class:'btn btn-dark',type:'button',onclick:()=>{Snd.init();const c=state.ellieCode;state.ellieCode=inp.value.trim().toUpperCase()||c;Walkie.noVoice=false;Walkie.speak('[excited] Hi! I’m Ellie! Hold the walkie-talkie button and tell me what you’re thinking. Woof!',1);state.ellieCode=c;}},'🔊 Test voice'),el('button',{class:'btn btn-dark',type:'button',onclick:()=>overlay(null)},'Cancel'))));});}
};
setInterval(()=>{try{Walkie.show();}catch(e){}},400);
{const _sr=showReport;showReport=function(){const r=_sr.apply(this,arguments);try{const m=document.querySelector('#overlay .modal');if(m&&!m.querySelector('.ellie-setup')){const b=el('button',{class:'btn btn-dark ellie-setup',type:'button',onclick:()=>Walkie.setup()},state.ellieCode?'📻 Ellie walkie-talkie: on':'📻 Set up Ellie’s walkie-talkie');m.append(b);}}catch(e){}return r;};}
window.__walkie=Walkie;
