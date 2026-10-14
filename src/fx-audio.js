/* =========================================================
   Sound: chiptune effects + music (Web Audio, starts after first tap)
   ========================================================= */
const Snd={ctx:null,sfxG:null,musG:null,nbuf:null,
  init(){if(this.ctx){if(this.ctx.state==='suspended')this.ctx.resume().catch(()=>{});return;}
    try{this.ctx=new (window.AudioContext||window.webkitAudioContext)();}catch(e){return;}
    const c=this.ctx;this.sfxG=c.createGain();this.sfxG.connect(c.destination);this.musG=c.createGain();this.musG.connect(c.destination);this.levels();
    const b=c.createBuffer(1,Math.floor(c.sampleRate*0.6),c.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;this.nbuf=b;
    Music.kick();},
  levels(){if(!this.ctx)return;this.sfxG.gain.value=state.mute?0:1;this.musG.gain.value=state.musicOff?0:0.5;},
  at(f,d,type,vol,t,slide,dest){const c=this.ctx;if(!c)return;const o=c.createOscillator(),g=c.createGain();o.type=type||'square';o.frequency.setValueAtTime(f,t);
    if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+d);g.gain.setValueAtTime(vol||0.06,t);g.gain.exponentialRampToValueAtTime(0.0001,t+d);
    o.connect(g).connect(dest||this.sfxG);o.start(t);o.stop(t+d+0.03);},
  tone(f,d,type,vol,when,slide){if(this.ctx)this.at(f,d,type,vol,this.ctx.currentTime+(when||0),slide);},
  noiseAt(d,vol,t,ftype,freq,dest){const c=this.ctx;if(!c||!this.nbuf)return;const s=c.createBufferSource();s.buffer=this.nbuf;const g=c.createGain();
    g.gain.setValueAtTime(vol||0.1,t);g.gain.exponentialRampToValueAtTime(0.0001,t+d);let n=s;
    if(ftype){const f=c.createBiquadFilter();f.type=ftype;f.frequency.value=freq||1000;s.connect(f);n=f;}
    n.connect(g).connect(dest||this.sfxG);s.start(t);s.stop(t+d+0.03);},
  noise(d,vol,when,ftype,freq){if(this.ctx)this.noiseAt(d,vol,this.ctx.currentTime+(when||0),ftype,freq);},
  tap(){this.tone(660,0.03,'sine',0.03);},
  coin(){this.tone(988,0.07,'square',0.05);this.tone(1319,0.14,'square',0.05,0.07);},
  good(){[523,659,784,1047].forEach((f,i)=>this.tone(f,0.12,'square',0.045,i*0.06));},
  gem(){[784,988,1175,1568,1976].forEach((f,i)=>this.tone(f,0.1,'triangle',0.06,i*0.05));},
  shield(){this.tone(330,0.12,'triangle',0.08);this.tone(247,0.2,'triangle',0.08,0.1);},
  hit(){this.tone(140,0.12,'sawtooth',0.05);this.tone(90,0.18,'sawtooth',0.05,0.06);},
  fanfare(){[523,523,523,659,784,659,784,1047].forEach((f,i)=>this.tone(f,0.14,'square',0.05,i*0.11));},
  zap(n){const f=392*Math.pow(2,Math.min(n||0,14)/12);this.tone(f,0.1,'square',0.05,0,f*2);this.tone(f*1.5,0.08,'square',0.035,0.05);this.noise(0.06,0.05,0,'highpass',3000);},
  crit(){this.tone(98,0.55,'sawtooth',0.13,0,36);this.tone(196,0.3,'square',0.06,0,60);this.noise(0.4,0.2,0,'lowpass',900);this.tone(1568,0.12,'square',0.04,0.05,3136);},
  block(){this.tone(1318,0.07,'square',0.05);this.tone(988,0.18,'triangle',0.07,0.03);this.noise(0.09,0.07,0,'highpass',4000);},
  hurt(){this.tone(233,0.2,'sawtooth',0.07,0,110);this.tone(175,0.22,'square',0.04,0.08,80);},
  charge(d){this.tone(180,d||0.8,'sawtooth',0.05,0,1800);this.noise(d||0.8,0.04,0,'bandpass',2000);},
  boom(){this.noise(1.0,0.32,0,'lowpass',700);this.tone(70,0.9,'sine',0.28,0,28);},
  whoosh(){this.noise(0.45,0.13,0,'bandpass',1400);},
  slam(){this.tone(55,0.5,'square',0.14,0,35);this.noise(0.35,0.18,0,'lowpass',500);},
  rattle(){this.tone(260,0.06,'square',0.05);this.noise(0.07,0.07,0,'highpass',2500);},
  reveal(r){const s={common:[523,659,784],rare:[523,659,784,1047],epic:[523,659,784,1047,1319],legendary:[523,659,784,1047,1319,1568,2093]}[r]||[523];
    s.forEach((f,i)=>this.tone(f,0.18,'square',0.05,i*0.07));
    if(r==='epic'||r==='legendary'){this.noise(0.8,0.1,0.1,'highpass',5000);this.tone(2093,0.6,'triangle',0.04,s.length*0.07);}},
  ko(){this.boom();[392,523,659,784,1047].forEach((f,i)=>this.tone(f,0.2,'square',0.05,0.55+i*0.1));}
};
/* chiptune sequencer: 32-step loops that speed up with the combo */
const Music={song:null,step:0,next:0,timer:null,intensity:0,
  SONGS:{
    map:{bpm:100,bass:[48,0,0,0,55,0,0,0,53,0,0,0,55,0,0,0,48,0,0,0,57,0,0,0,53,0,0,0,55,0,50,0],
      lead:[72,0,76,0,79,0,76,0,77,0,76,0,74,0,0,0,72,0,76,0,79,0,81,0,79,0,77,0,76,0,74,0],arp:[60,64,67,64],drums:'k...h...s...h...k...h...s...h.h.'},
    battle:{bpm:132,bass:[45,0,45,0,57,0,45,0,43,0,43,0,55,0,43,0,41,0,41,0,53,0,41,0,43,0,43,0,55,0,47,0],
      lead:[69,0,72,0,76,0,74,72,71,0,67,0,71,74,72,0,69,0,72,0,77,0,76,74,72,0,71,0,67,0,71,0],arp:[57,60,64,60],drums:'k.h.s.h.k.h.s.hhk.h.s.h.k.h.s.hs'},
    boss:{bpm:148,bass:[40,40,52,40,40,52,40,52,38,38,50,38,38,50,38,50,36,36,48,36,36,48,36,48,35,35,47,35,47,0,47,0],
      lead:[64,0,67,0,71,0,69,67,66,0,62,0,66,69,67,0,64,0,67,0,72,0,71,69,67,0,66,0,63,0,66,0],arp:[52,55,59,55],drums:'k.hsk.hsk.hsk.hsk.hsk.hsk.hskshs'}},
  play(name){if(this.song===name)return;this.song=name;this.step=0;this.kick();},
  stop(){this.song=null;},
  kick(){if(!Snd.ctx||!this.song)return;this.next=Snd.ctx.currentTime+0.06;if(!this.timer)this.timer=setInterval(()=>this.tick(),30);},
  tick(){const c=Snd.ctx;if(!c||!this.song||document.hidden)return;const S=this.SONGS[this.song];const spb=60/(S.bpm*(1+this.intensity*0.15))/4;
    if(this.next<c.currentTime-0.2)this.next=c.currentTime+0.02;
    while(this.next<c.currentTime+0.12){this.note(S,this.step,this.next,spb);this.next+=spb;this.step=(this.step+1)%32;}},
  note(S,i,t,spb){const m=n=>440*Math.pow(2,(n-69)/12),G=Snd.musG;
    if(S.bass[i])Snd.at(m(S.bass[i]),spb*1.7,'triangle',0.2,t,0,G);
    if(S.lead[i])Snd.at(m(S.lead[i]),spb*0.95,'square',0.05,t,0,G);
    if(this.intensity>0.35)Snd.at(m(S.arp[i%4]+12),spb*0.45,'square',0.028,t,0,G);
    const d=S.drums[i];if(d==='k')Snd.at(150,0.12,'sine',0.25,t,45,G);else if(d==='s')Snd.noiseAt(0.11,0.09,t,'bandpass',1800,G);else if(d==='h')Snd.noiseAt(0.03,0.04,t,'highpass',6000,G);}
};
