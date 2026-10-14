/* =========================================================
   Brain-break variety: each recharge break picks a different activity.
   Calm ones (breathing, bubbles, senses) after a tired-brain round; the full mix otherwise.
   Each activity: make(o) -> {el, stop(), secs, title, calm}; it calls o.onDone(score 0..1) when finished.
   ========================================================= */
const Breaks={
  ALL:['box','balloon','bubbles','dance','workout','senses','eyes'],CALM:['box','balloon','bubbles','senses'],
  TITLES:{box:'Box Breathing 🧘',balloon:'Balloon Breathing 🎈',bubbles:'Bubble Pop 🫧',dance:'Freeze Dance! 🕺',workout:'Knight Training 💪',senses:'5-4-3-2-1 Calm 🌿',eyes:'Eye Break 👀'},
  pick(tired){const pool=tired?this.CALM:this.ALL;let bag=(state.breakBag||[]).filter(k=>pool.includes(k));
    if(!bag.length)bag=shuffle(pool.slice());let k=bag.pop();if(k===state.lastBreak&&bag.length){bag.unshift(k);k=bag.pop();}
    state.breakBag=bag;state.lastBreak=k;saveState();return k;},
  size(){return Math.min(300,Math.round(Math.min(window.innerWidth,window.innerHeight)*0.42));},
  canvas(size){const cv=el('canvas',{class:'bb-cv',style:`width:${size}px;height:${size}px;touch-action:none`}),ctx=cv.getContext('2d'),d=Math.min(2,window.devicePixelRatio||1);cv.width=size*d;cv.height=size*d;ctx.setTransform(d,0,0,d,0,0);ctx.imageSmoothingEnabled=false;return {cv,ctx};},
  loop(fn){let raf=0,stopped=false,t0=null;const f=now=>{if(stopped)return;if(t0==null)t0=now;fn((now-t0)/1000);raf=requestAnimationFrame(f);};raf=requestAnimationFrame(f);return ()=>{stopped=true;cancelAnimationFrame(raf);};},
  make(kind,o){o=o||{};const a=this[kind](o);a.title=this.TITLES[kind];a.calm=this.CALM.includes(kind)||kind==='eyes';return a;},

  box(o){const B=BoxBreath.make({cycles:o.long?5:3,onDone:o.onDone});return {el:B.el,stop:()=>B.stop(),secs:B.total+6};},

  // breathe in while holding the balloon, let go and breathe out slowly (long out-breaths calm the body)
  balloon(o){const cycles=o.long?6:4,IN=4,OUT=6,size=this.size(),{cv,ctx}=this.canvas(size),label=el('div',{class:'bb-label'},'Hold the balloon and breathe in…'),meter=el('i'),done={v:false};
    let hold=false,good=0,ticks=0,lastPh=-1;cv.addEventListener('pointerdown',e=>{e.preventDefault();hold=true;});['pointerup','pointercancel','pointerleave'].forEach(k=>cv.addEventListener(k,()=>{hold=false;}));
    const cols=['#ff4d6d','#3fa7ff','#3fdc6b','#ffb627','#c084fc','#ff8fa3'];
    const stop=this.loop(t=>{const c=ctx,T=t-1;c.clearRect(0,0,size,size);const total=cycles*(IN+OUT);
      if(T<0){label.textContent='Get ready… hold the balloon';}
      const cyc=Math.min(cycles-1,Math.max(0,Math.floor(T/(IN+OUT)))),ph=T<0?0:T-cyc*(IN+OUT),inhale=ph<IN,k=T<0?0:inhale?ph/IN:1-(ph-IN)/OUT,fin=T>=total;
      if(!fin&&T>=0){ticks++;if(inhale===hold)good++;const p=inhale?0:1;if(p!==lastPh){lastPh=p;try{Snd.tone(inhale?392:294,0.4,'sine',0.03,0,inhale?523:220);}catch(e){}}
        label.textContent=inhale?`Breathe in… ${Math.ceil(IN-ph)}  (hold the balloon)`:`Blow out slowly… ${Math.ceil(IN+OUT-ph)}  (let go)`;}
      const fy=fin?-(T-total)*size*0.8:0,r=size*(0.1+0.24*(fin?1:k)),x=size/2,y=size*0.5+fy;
      c.strokeStyle='#ffffff88';c.lineWidth=2;c.beginPath();c.moveTo(x,y+r);c.quadraticCurveTo(x+12,y+r+size*0.12,x,size*0.95+fy);c.stroke();
      c.fillStyle=cols[cyc%cols.length];c.beginPath();c.ellipse(x,y,r*0.88,r,0,0,6.28);c.fill();c.fillStyle='#ffffff55';c.beginPath();c.ellipse(x-r*0.35,y-r*0.4,r*0.15,r*0.25,-0.5,0,6.28);c.fill();
      c.fillStyle=cols[cyc%cols.length];c.beginPath();c.moveTo(x-6,y+r);c.lineTo(x+6,y+r);c.lineTo(x,y+r+8);c.fill();
      c.fillStyle='#fff';c.font=`800 ${Math.round(size*0.06)}px "Pixelify Sans",monospace`;c.textAlign='center';c.fillText(fin?'So calm!':`Balloon ${cyc+1} of ${cycles}`,size/2,size*0.08+12);
      meter.style.width=Math.round(100*(ticks?good/ticks:0))+'%';
      if(fin&&!done.v){done.v=true;label.textContent=good/Math.max(1,ticks)>=0.6?'Calm master! 🌟':'Nice breathing!';if(o.onDone)o.onDone(ticks?good/ticks:0);}});
    return {el:el('div',{class:'bbreath'},label,cv,el('div',{class:'bb-meter'},meter)),stop,secs:cycles*(IN+OUT)+4};},

  // slow bubbles drift up; pop them gently, one at a time
  bubbles(o){const dur=o.long?60:40,size=this.size(),{cv,ctx}=this.canvas(size),label=el('div',{class:'bb-label'},'Pop the bubbles slowly. Breathe as you go.'),B=[],FX=[];let popped=0,spawn=0,last=0,done=false;
    const notes=[523,587,659,784,880,1047];
    cv.addEventListener('pointerdown',e=>{e.preventDefault();const r=cv.getBoundingClientRect(),px=(e.clientX-r.left)*size/r.width,py=(e.clientY-r.top)*size/r.height;
      for(let i=B.length-1;i>=0;i--){const b=B[i];if(Math.hypot((b.dx||b.x)-px,b.y-py)<b.r+10){B.splice(i,1);popped++;try{Snd.tone(pick(notes),0.25,'sine',0.04);}catch(_){}for(let k=0;k<10;k++){const a=k*0.63;FX.push({x:b.x,y:b.y,vx:Math.cos(a)*60,vy:Math.sin(a)*60,l:0.5,col:b.col});}break;}}});
    const stop=this.loop(t=>{const c=ctx,dt=Math.min(0.05,t-last);last=t;c.clearRect(0,0,size,size);
      if(t<dur){spawn-=dt;if(spawn<=0){spawn=0.55;B.push({x:size*(0.12+Math.random()*0.76),y:size+20,r:size*(0.05+Math.random()*0.05),ph:Math.random()*6,col:pick(['#9be7ff','#c8b6ff','#ffd1e8','#b8ffcf'])});}}
      for(const b of B){b.y-=size*0.12*dt;b.ph+=dt;const x=b.x+Math.sin(b.ph*1.5)*8;b.dx=x;c.strokeStyle=b.col;c.lineWidth=2.5;c.fillStyle=b.col+'33';c.beginPath();c.arc(x,b.y,b.r,0,6.28);c.fill();c.stroke();
        c.fillStyle='#ffffffaa';c.beginPath();c.arc(x-b.r*0.35,b.y-b.r*0.35,b.r*0.18,0,6.28);c.fill();b.x=b.x;}
      for(let i=B.length-1;i>=0;i--)if(B[i].y<-40)B.splice(i,1);
      for(const f of FX){f.l-=dt;f.x+=f.vx*dt;f.y+=f.vy*dt;c.globalAlpha=Math.max(0,f.l*2);c.fillStyle=f.col;c.fillRect(f.x,f.y,4,4);}c.globalAlpha=1;for(let i=FX.length-1;i>=0;i--)if(FX[i].l<=0)FX.splice(i,1);
      c.fillStyle='#fff';c.font=`800 ${Math.round(size*0.06)}px "Pixelify Sans",monospace`;c.textAlign='center';c.fillText(t<dur?`Popped: ${popped}`:`${popped} bubbles! So calm.`,size/2,size*0.08+12);
      if(t>=dur&&!done){done=true;label.textContent='Nice and calm 🌟';if(o.onDone)o.onDone(Math.min(1,popped/20));}});
    return {el:el('div',{class:'bbreath'},label,cv),stop,secs:dur+4};},

  // music plays: dance! music stops: FREEZE!
  dance(o){const dur=o.long?60:42,size=this.size(),{cv,ctx}=this.canvas(size),label=el('div',{class:'bb-label'},'Stand up! Dance when the music plays. FREEZE when it stops!'),look=heroLook();
    const MOVES=['Wiggle!','Robot arms!','Jump jump!','Spin around!','Flap like a bird!','Disco point!','Shake it out!','Floss!','Twist!','Moon walk!'];
    const segs=[];let tt=2;while(tt<dur){const d=3+Math.random()*3;segs.push({a:tt,b:tt+d,dance:true,m:pick(MOVES)});tt+=d;const f=1.8+Math.random()*1.2;segs.push({a:tt,b:tt+f,dance:false});tt+=f;}
    const mel=[523,659,784,659,587,698,880,698];let beat=-1,done=false;
    const stop=this.loop(t=>{const c=ctx;c.clearRect(0,0,size,size);const sg=segs.find(s=>t>=s.a&&t<s.b),dancing=sg&&sg.dance,fin=t>=dur;
      if(dancing){const bt=Math.floor(t*4);if(bt!==beat){beat=bt;try{Snd.tone(mel[bt%mel.length],0.12,'square',0.03);if(bt%2===0)Snd.tone(131,0.08,'triangle',0.04);}catch(_){}}}
      for(let i=0;i<4;i++){c.globalAlpha=dancing?0.25:0.06;c.fillStyle=['#ff4dd8','#5ef2ff','#ffe066','#3fdc6b'][i];const a=t*2+i*1.57;c.beginPath();c.moveTo(size/2,0);c.lineTo(size/2+Math.cos(a)*size*0.6-40,size);c.lineTo(size/2+Math.cos(a)*size*0.6+40,size);c.fill();}c.globalAlpha=1;
      const s=Math.max(4,Math.floor(size/24)),hop=dancing?-Math.abs(Math.sin(t*8))*s*2:0;c.save();if(dancing){c.translate(size/2,size*0.62);c.rotate(Math.sin(t*8)*0.15);c.translate(-size/2,-size*0.62);}
      drawHero(c,size/2-6*s,size*0.42+hop,s,look,dancing?((t*6|0)%2?'runA':'stand'):'stand',t);c.restore();
      c.textAlign='center';c.font=`900 ${Math.round(size*0.12)}px "Pixelify Sans",monospace`;c.lineWidth=6;c.strokeStyle='#000';
      const txt=fin?'GREAT MOVES!':!sg?'Get ready…':dancing?'DANCE!':'FREEZE!';c.strokeText(txt,size/2,size*0.2);c.fillStyle=dancing?'#ffe066':'#5ef2ff';c.fillText(txt,size/2,size*0.2);
      if(dancing){c.font=`800 ${Math.round(size*0.065)}px "Pixelify Sans",monospace`;c.fillStyle='#fff';c.fillText(sg.m,size/2,size*0.3);}
      if(fin&&!done){done=true;label.textContent='You danced like a champion! 🌟';try{Snd.fanfare();}catch(_){}if(o.onDone)o.onDone(1);}});
    return {el:el('div',{class:'bbreath'},label,cv),stop,secs:dur+3};},

  // Sir Checkalot's training: copy each move, tap Did it!
  workout(o){const ALL=[['🦘','10 jumping jacks'],['🦵','5 squats'],['🌀','10 arm circles'],['🙆','Touch your toes 5 times'],['🦩','Hop on one foot 5 times'],['💪','5 wall push-ups'],['⭐','5 star jumps'],['🏃','Run in place for 10 seconds'],['🧘','Stretch up tall, then reach down low'],['🐻','Bear crawl 5 steps']];
    const moves=shuffle(ALL.slice()).slice(0,o.long?5:4),PER=10,box=el('div',{class:'bk-work'}),em=el('div',{class:'bk-emoji'}),tx=el('div',{class:'bk-move'}),ring=el('div',{class:'bk-ring'},el('i')),stars=el('div',{class:'bk-stars'}),
      btn=el('button',{class:'btn btn-green',type:'button'},'✓ Did it!');let i=-1,t0=0,got=0,done=false;
    const next=()=>{i++;if(i>=moves.length){done=true;em.textContent='🏆';tx.textContent='Training complete! Strong knight!';btn.hidden=true;ring.hidden=true;try{Snd.fanfare();}catch(_){}if(o.onDone)o.onDone(got/moves.length);return;}
      em.textContent=moves[i][0];tx.textContent=moves[i][1];t0=performance.now();try{Snd.tone(660,0.12,'square',0.04);}catch(_){}};
    tapify(btn,()=>{if(done||performance.now()-t0<3000)return;got++;stars.textContent='⭐'.repeat(got);try{Snd.gem();}catch(_){}next();});
    next();const iv=setInterval(()=>{if(done)return;const k=(performance.now()-t0)/1000/PER;ring.firstChild.style.width=Math.min(100,k*100)+'%';if(k>=1)next();},100);
    box.append(em,tx,ring,stars,btn);return {el:box,stop:()=>clearInterval(iv),secs:moves.length*PER+4};},

  // grounding for worried moments: 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste
  senses(o){const steps=[[5,'SEE','👀'],[4,'TOUCH','✋'],[3,'HEAR','👂'],[2,'SMELL','👃'],[1,'TASTE','👅']],box=el('div',{class:'bk-work'}),em=el('div',{class:'bk-emoji'}),tx=el('div',{class:'bk-move'}),dots=el('div',{class:'bk-dots'});let i=-1,done=false;
    const next=()=>{i++;dots.innerHTML='';if(i>=steps.length){done=true;em.textContent='🌿';tx.textContent='You’re calm and ready. Nice job!';try{Snd.gem();}catch(_){}if(o.onDone)o.onDone(1);return;}
      const [n,w,e]=steps[i];em.textContent=e;tx.textContent=`Find ${n} thing${n>1?'s':''} you can ${w}. Tap a circle for each one.`;let f=0;
      for(let k=0;k<n;k++){const d=el('button',{class:'bk-dot',type:'button'},'');tapify(d,()=>{if(d.classList.contains('on'))return;d.classList.add('on');f++;try{Snd.tone(523+f*110,0.15,'sine',0.04);}catch(_){}if(f>=n)setTimeout(next,600);});dots.append(d);}};
    next();box.append(em,tx,dots);return {el:box,stop:()=>{},secs:40};},

  // screen-time eyes: look far away for 20 seconds, then blink, then warm palms
  eyes(o){const box=el('div',{class:'bk-work'}),em=el('div',{class:'bk-emoji'}),tx=el('div',{class:'bk-move'}),ring=el('div',{class:'bk-ring'},el('i')),btn=el('button',{class:'btn btn-dark',type:'button',hidden:true},'Blink! 0/10');let ph=0,t0=performance.now(),blinks=0,done=false;
    const set=(e,s)=>{em.textContent=e;tx.textContent=s;t0=performance.now();};
    set('🔭','Look out a window or across the room at something FAR away. Keep looking for 20 seconds.');
    tapify(btn,()=>{if(ph!==1)return;blinks++;btn.textContent=`Blink! ${blinks}/10`;try{Snd.tone(700+blinks*40,0.06,'square',0.03);}catch(_){}if(blinks>=10){ph=2;btn.hidden=true;set('🙌','Rub your hands together until they’re warm. Then cup them over your eyes for 5 seconds.');ring.hidden=false;}});
    const iv=setInterval(()=>{const s=(performance.now()-t0)/1000;if(ph===0){ring.firstChild.style.width=Math.min(100,s/20*100)+'%';if(s>=20){ph=1;ring.hidden=true;btn.hidden=false;set('😉','Now blink 10 times. Tap the button for each blink.');}}
      else if(ph===2){ring.firstChild.style.width=Math.min(100,s/8*100)+'%';if(s>=8&&!done){done=true;ring.hidden=true;set('✨','Fresh eyes! Ready to go.');try{Snd.gem();}catch(_){}if(o.onDone)o.onDone(1);}}},100);
    box.append(em,tx,ring,btn);return {el:box,stop:()=>clearInterval(iv),secs:45};}
};

// breaks taken before the daily training is done count toward the training minutes (up to 3 minutes each)
{const _b=ScreenTime.brk.bind(ScreenTime);ScreenTime.brk=function(o){const gated=typeof Dojo!=='undefined'&&Dojo.strict&&Dojo.strict()&&!Dojo.gateOk(),t0=Date.now();
  return _b(o).then(r=>{if(gated){const t=Dojo.st().today;t.brkSecs=(t.brkSecs||0)+Math.min(180,(Date.now()-t0)/1000);saveState();if(typeof renderMap==='function'&&!$('#scr-map').hidden)renderMap();}return r;});};}
