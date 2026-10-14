/* =========================================================
   Explore: levels sized to how much hard work he has already done today, so he can explore more without burning out.
   Intro: a narrated movie the first time he enters each world, and a short "LEVEL 3!" intro every time a level starts.
   ========================================================= */
const Explore={
  load(){const d=dayStr();let L=state.load;if(!L||L.day!==d)L=state.load={day:d,n:0,rev:[],ms:0};return L;},
  // count every big (non-fact) problem he finishes today
  note(p,res){if(!p||p.kind==='fact'||p.kind==='dfact')return;const L=this.load();L.n++;L.rev=(L.rev||[]).concat([res&&res.revealed?1:0]).slice(-6);saveState();},
  tired(){const L=this.load();const D=state.st&&state.st.days&&state.st.days[dayStr()];return (L.rev||[]).reduce((a,b)=>a+b,0)>=2||!!(D&&D.tired);},
  // big problems in a level: 4 fresh, 3 after 6 today, 2 after 12 (or when he's tired)
  size(){const n=this.load().n;let s=n<6?4:n<12?3:2;if(this.tired())s=Math.min(s,3);return s;},
  bias(){return this.tired()?-0.6:0;}
};
const Intro={off:false,
  DUR:{'world-canyon':7.69,'world-docks':6.99,'world-forge':8.49,'world-castle':5.67,'world-tower':6.99,'level-1':1.88,'level-2':1.95,'level-3':2.07,'level-4':1.96,'level-5':2.23},
  THEME:{canyon:{sky:['#ff9f68','#ffd9a8'],far:'#c9653a',near:'#9a4a2a',ground:'#7a3a1e',props:['482,915','+','−','90,210','63,007','×'],k:'canyon'},
    docks:{sky:['#5ab0ff','#c8ecff'],far:'#2a7acc',near:'#1d5a99',ground:'#8a6a3a',props:['3.75','0.4','12.06','.','9.9','1.25'],k:'docks'},
    forge:{sky:['#2a0a0a','#7a2a10'],far:'#4a1a10',near:'#2a0e08',ground:'#3a1a10',props:['6×7','8×9','7×8','×','9×6','42'],k:'forge'},
    castle:{sky:['#2a1a5a','#8a6ad0'],far:'#4a3a8a',near:'#352a6a',ground:'#2a2050',props:['▦','12×4','▦','30×6','▦','24'],k:'castle'},
    tower:{sky:['#1a4a2a','#8ad09a'],far:'#2a6a3a',near:'#1d4a2a',ground:'#3a5a2a',props:['?','📜','?','✎','?','📜'],k:'tower'}},
  voice(name){try{if(state.mute||typeof Lesson==='undefined')return;const a=Lesson.au();if(window.speechSynthesis)speechSynthesis.cancel();a.muted=false;a.src='audio/'+name+'.mp3';a.currentTime=0;const p=a.play();if(p&&p.catch)p.catch(()=>{});}catch(e){}},
  hush(){try{if(typeof Lesson!=='undefined'&&Lesson.audio)Lesson.audio.pause();}catch(e){}},
  // the world's scenery, panning with t
  scene(c,W,H,th,t,pan){const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,th.sky[0]);g.addColorStop(1,th.sky[1]);c.fillStyle=g;c.fillRect(0,0,W,H);const gy=H*0.74,k=th.k;
    if(k==='forge'){for(let i=0;i<30;i++){c.fillStyle=`rgba(255,${120+(i*37)%100},40,${0.3+0.4*Math.abs(Math.sin(t*3+i))})`;c.fillRect((i*137+pan*0.2)%W,H*0.1+((i*71)-t*60*(1+i%3))%(H*0.6)+H*0.6*(((i*71)-t*60*(1+i%3))<0),3,3);}}
    if(k==='castle'||k==='tower'){c.fillStyle='#ffffffaa';for(let i=0;i<30;i++)c.fillRect((i*173)%W,(i*97)%(H*0.4),2,2);}
    // far layer
    c.fillStyle=th.far;for(let i=-1;i<7;i++){const x=((i*W*0.22-pan*0.25)%(W*1.54)+W*1.54)%(W*1.54)-W*0.25;
      if(k==='canyon'){c.beginPath();c.moveTo(x,gy);c.lineTo(x+W*0.04,gy-H*0.3);c.lineTo(x+W*0.16,gy-H*0.3);c.lineTo(x+W*0.2,gy);c.fill();}
      else if(k==='docks'){c.fillRect(x,gy-H*0.08,W*0.14,H*0.08);c.fillStyle='#fff';c.beginPath();c.moveTo(x+W*0.05,gy-H*0.08);c.lineTo(x+W*0.05,gy-H*0.26);c.lineTo(x+W*0.12,gy-H*0.1);c.fill();c.fillStyle=th.far;}
      else if(k==='forge'){c.beginPath();c.moveTo(x,gy);c.lineTo(x+W*0.09,gy-H*0.34);c.lineTo(x+W*0.12,gy-H*0.34);c.lineTo(x+W*0.21,gy);c.fill();c.fillStyle='#ff7b1c';c.fillRect(x+W*0.09,gy-H*0.35,W*0.03,H*0.02);c.fillStyle=th.far;}
      else if(k==='castle'){c.fillRect(x,gy-H*0.32,W*0.12,H*0.32);for(let j=0;j<4;j++)c.fillRect(x+j*W*0.032,gy-H*0.36,W*0.02,H*0.04);c.fillStyle='#ffe06688';c.fillRect(x+W*0.03,gy-H*0.24,W*0.02,H*0.04);c.fillRect(x+W*0.07,gy-H*0.24,W*0.02,H*0.04);c.fillStyle=th.far;}
      else{c.fillRect(x+W*0.05,gy-H*0.55,W*0.07,H*0.55);c.beginPath();c.moveTo(x+W*0.04,gy-H*0.55);c.lineTo(x+W*0.085,gy-H*0.66);c.lineTo(x+W*0.13,gy-H*0.55);c.fill();c.fillStyle='#ffe06688';for(let j=0;j<5;j++)c.fillRect(x+W*0.075,gy-H*(0.12+j*0.09),W*0.02,H*0.03);c.fillStyle=th.far;}}
    // water for the docks
    if(k==='docks'){c.fillStyle='#1d5a99';c.fillRect(0,gy-H*0.02,W,H*0.04);c.fillStyle='#ffffff55';for(let i=0;i<20;i++)c.fillRect(((i*97-pan*0.6)%W+W)%W,gy+(i%3)*4-H*0.01,18,2);}
    // floating math props
    const fs=Math.round(Math.min(W,H)*0.05);c.font=`800 ${fs}px "Pixelify Sans",monospace`;c.textAlign='center';th.props.forEach((s,i)=>{const x=((i*W*0.2+W*0.1-pan*0.5)%(W*1.2)+W*1.2)%(W*1.2)-W*0.1,y=H*(0.2+0.12*(i%3))+Math.sin(t*2+i)*8;
      c.globalAlpha=0.55;c.fillStyle='#fff';c.fillText(s,x,y);c.globalAlpha=1;});
    // ground
    c.fillStyle=th.ground;c.fillRect(0,gy,W,H-gy);c.fillStyle=th.near;for(let i=0;i<30;i++)c.fillRect(((i*70-pan)%W+W)%W,gy+6+(i%4)*12,26,5);return gy;},
  // hero (on his ride if he has one) and dog
  heroes(c,W,gy,x,t,moving,s){const look=heroLook(),ride=look.ride&&look.ride!=='none'&&typeof Rides!=='undefined'?look.ride:null,dog=look.pet&&PETS[look.pet]&&PETS[look.pet].dog?look.pet:'ellie';
    const p=PETS[dog],ps=Math.max(2,Math.round(s*0.8)),pw=p.rows[0].length*ps,bob=moving?Math.abs(Math.sin(t*14))*s:0;
    drawPet(c,dog,x-pw-s*8,gy-p.rows.length*ps-bob,ps,t*3);
    if(ride){const rs=s*0.85;Rides.draw(c,ride,x-13*rs,gy-22*rs,rs,look,t,moving);}else drawHero(c,x-6*s,gy-14*s-bob*0.5,s,look,moving?((t*10|0)%2?'runA':'runB'):'stand',t);},
  glitch(c,x,y,s,t,dark){const form=glitchForm();if(!dark){drawGlitch(c,x,y,s,form,t,false);return;}
    const oc=document.createElement('canvas'),w=12*s;oc.width=Math.ceil(w)+4;oc.height=Math.ceil(w)+4;const o=oc.getContext('2d');o.imageSmoothingEnabled=false;drawGlitch(o,2,2,s,form,t,false);
    o.globalCompositeOperation='source-atop';o.fillStyle='#0b0b14';o.fillRect(0,0,oc.width,oc.height);c.drawImage(oc,x-2,y-2);
    c.fillStyle='#ff2d4d';c.fillRect(x+s*3,y+s*4,s*1.6,s*1.2);c.fillRect(x+s*7.4,y+s*4,s*1.6,s*1.2);},
  // first visit to a world: about 8 seconds, narrated
  world(w){const th=this.THEME[w.id]||this.THEME.canyon,key='world-'+w.id,D=Math.max(8,(this.DUR[key]||7)+1.2);const S={};
    return Cine.play(D,(c,W,H,t)=>{const pan=t*W*0.12,gy=this.scene(c,W,H,th,t,pan),s=Math.max(3,Math.round(Math.min(W,H)/62));
      const hx=Math.min(W*0.3,-W*0.2+t*W*0.22);this.heroes(c,W,gy,hx,t,hx<W*0.3,s);
      // the boss looms on the right
      if(t>3.6){const k=Math.min(1,(t-3.6)/0.6),bs=s*3.2,bx=W*0.74-6*bs,by=gy-12*bs+(1-k)*H*0.5;if(!S.b){S.b=1;Snd.tone(70,0.8,'sawtooth',0.08,0,50);}
        c.globalAlpha=k;this.glitch(c,bx,by,bs,t,true);c.globalAlpha=1;
        if(k>=1){c.font=`800 ${Math.round(s*4)}px Lexend,sans-serif`;c.textAlign='center';c.lineWidth=5;c.strokeStyle='#000';const lbl='BOSS: '+w.boss,lx=Math.min(W*0.74,W-c.measureText(lbl).width/2-14);c.strokeText(lbl,lx,gy+s*8);c.fillStyle='#ff4d6d';c.fillText(lbl,lx,gy+s*8);}}
      // Glitch zips by laughing
      if(t>2.2&&t<3.8){const q=(t-2.2)/1.6;this.glitch(c,W*(1.1-q*1.3),H*0.36+Math.sin(q*12)*H*0.05,s*1.2,t,false);if(!S.g){S.g=1;Snd.tone(600,0.5,'square',0.03,0,1200);}}
      Cine.bars(c,W,H,Math.min(1,t*2));
      const k=Math.min(1,t/0.5);c.globalAlpha=k;Cine.title(c,W,H,t,w.name.toUpperCase(),w.color,w.sub,H*0.2);c.globalAlpha=1;
      if(t>D-0.3){c.globalAlpha=(t-(D-0.3))/0.3;c.fillStyle='#000';c.fillRect(0,0,W,H);c.globalAlpha=1;}},{skip:true}).then(()=>this.hush());},
  // every level: about 3 seconds
  level(w,li,n){const th=this.THEME[w.id]||this.THEME.canyon,key='level-'+(li+1),D=Math.max(3,(this.DUR[key]||2)+0.9),ent=pick(['run','parachute','portal','zip']);
    const sub=(n?`${n} problem${n===1?'':'s'}`:'')+(li===3?' · find the bugs!':'')+(typeof FactMix!=='undefined'&&FactMix.on()?' + Dojo Flash':'');
    return Cine.play(D,(c,W,H,t)=>{const gy=this.scene(c,W,H,th,t,t*W*0.05),s=Math.max(3,Math.round(Math.min(W,H)/62));let x=W*0.32,y=0;
      if(ent==='run')x=Math.min(W*0.32,-W*0.1+t*W*0.5);
      else if(ent==='parachute'){y=-Math.max(0,1-t/1.4)*H*0.6;if(y<0){c.fillStyle='#ff4d6d';c.beginPath();c.arc(x-s*2,gy-s*24+y,s*9,Math.PI,0);c.fill();c.strokeStyle='#fff';c.lineWidth=2;c.beginPath();c.moveTo(x-s*11,gy-s*24+y);c.lineTo(x-s*4,gy-s*14+y);c.moveTo(x+s*7,gy-s*24+y);c.lineTo(x,gy-s*14+y);c.stroke();}}
      else if(ent==='portal'){const k=Math.min(1,t/0.5);c.strokeStyle='#c084fc';c.lineWidth=s;c.beginPath();c.ellipse(x-s*2,gy-s*8,s*7*k,s*11*k,0,0,6.28);c.stroke();c.fillStyle='rgba(192,132,252,0.3)';c.fill();if(t<0.5)x=-W;}
      else{const k=Math.min(1,t/1.0);c.strokeStyle='#ddd';c.lineWidth=2;c.beginPath();c.moveTo(0,H*0.15);c.lineTo(W*0.4,gy-s*16);c.stroke();x=k*W*0.32;y=-(1-k)*(gy-s*16-H*0.15);}
      c.save();c.translate(0,y);this.heroes(c,W,gy,x,t,ent==='run'&&x<W*0.32,s);c.restore();
      if(t>0.6){const q=Math.min(1,(t-0.6)/0.3);this.glitch(c,W-12*s*1.2*q,gy-12*s*1.2,s*1.2,t,false);}
      Cine.title(c,W,H,t,'LEVEL '+(li+1),w.color,w.name+(sub?' · '+sub:''),H*0.24);
      if(t>D-0.25){c.globalAlpha=(t-(D-0.25))/0.25;c.fillStyle='#000';c.fillRect(0,0,W,H);c.globalAlpha=1;}},{skip:true}).then(()=>this.hush());},
  play(w,li,n){if(this.off||(typeof Brawl!=='undefined'&&Brawl.off))return Promise.resolve();const V=state.worldIntro=state.worldIntro||{};
    if(!V[w.id]){V[w.id]=1;saveState();return this.world(w).then(()=>this.level(w,li,n));}return this.level(w,li,n);}
};
// count finished problems toward today's load
{const _c=complete;complete=function(p,res){try{Explore.note(p,res);}catch(e){}return _c(p,res);};}
// play the intro before a regular level starts (boss levels have their own launch movie)
{const _sl=startLevel;startLevel=function(w,li,opt){if(li===5||(opt&&(opt.go||opt.introDone))||(typeof Dojo!=='undefined'&&!Dojo.gateOk()))return _sl(w,li,opt);
  const n=w.id==='forge'?10:Explore.size();Snd.init();Intro.play(w,li,n).then(()=>_sl(w,li,Object.assign({},opt||{},{introDone:true})));};}
