/* =========================================================
   Box breathing: a star travels around a square. Breathe in (up), hold (across), breathe out (down), hold (back).
   He keeps a finger on the star to fill the calm meter. Used in every recharge break, and from the pause screen.
   ========================================================= */
const BoxBreath={
  PH:[['Breathe in','#5ef2ff'],['Hold','#c084fc'],['Breathe out','#3fdc6b'],['Hold','#ffe066']],
  make(o){o=o||{};const sec=o.sec||4,cycles=o.cycles||3,total=sec*4*cycles,size=Math.min(300,Math.round(Math.min(window.innerWidth,window.innerHeight)*0.42));
    const cv=el('canvas',{class:'bb-cv',style:`width:${size}px;height:${size}px`}),ctx=cv.getContext('2d'),d=Math.min(2,window.devicePixelRatio||1);cv.width=size*d;cv.height=size*d;ctx.setTransform(d,0,0,d,0,0);
    const label=el('div',{class:'bb-label'},'Put your finger on the star and follow it'),meter=el('i'),round=el('small',{class:'bb-round'},'');
    const wrap=el('div',{class:'bbreath'},label,cv,el('div',{class:'bb-meter'},meter),round);
    const created=performance.now();let t0=null,raf=0,on=false,px=-99,py=-99,calm=0,ticks=0,lastPh=-1,done=false,stopped=false;
    const m=size*0.16,L=size-2*m;
    const pos=k=>{const ph=Math.floor(k)%4,f=k-Math.floor(k);return ph===0?[m,m+L*(1-f)]:ph===1?[m+L*f,m]:ph===2?[m+L,m+L*f]:[m+L*(1-f),m+L];};
    const P=e=>{const r=cv.getBoundingClientRect();return [(e.clientX-r.left)*size/r.width,(e.clientY-r.top)*size/r.height];};
    cv.addEventListener('pointerdown',e=>{e.preventDefault();on=true;[px,py]=P(e);try{cv.setPointerCapture(e.pointerId);}catch(_){}if(t0==null)t0=performance.now();});
    cv.addEventListener('pointermove',e=>{if(on)[px,py]=P(e);});['pointerup','pointercancel'].forEach(k=>cv.addEventListener(k,()=>{on=false;}));
    cv.style.touchAction='none';
    const frame=now=>{if(stopped)return;if(t0==null&&!o.wait&&now-created>3000){t0=now;}
      const el2=t0==null?0:(now-t0)/1000,k=Math.min(cycles*4,el2/sec),ph=Math.floor(k)%4,cyc=Math.min(cycles,Math.floor(k/4)+1),cnt=Math.min(sec,Math.floor((k-Math.floor(k))*sec)+1);
      const [x,y]=pos(k),near=on&&Math.hypot(px-x,py-y)<size*0.13;if(t0!=null&&k<cycles*4){ticks++;if(near)calm++;}
      if(ph!==lastPh&&t0!=null&&k<cycles*4){lastPh=ph;try{Snd.tone([392,523,330,440][ph],0.35,'sine',0.035);}catch(e){}}
      ctx.clearRect(0,0,size,size);
      // breathing square in the middle grows on the in-breath and shrinks on the out-breath
      const f=k-Math.floor(k),grow=ph===0?f:ph===1?1:ph===2?1-f:0,s2=L*(0.25+0.45*grow);
      ctx.fillStyle=this.PH[ph][1]+'33';ctx.fillRect(size/2-s2/2,size/2-s2/2,s2,s2);
      ctx.lineWidth=4;ctx.strokeStyle='#ffffff22';ctx.strokeRect(m,m,L,L);
      // sides: the current one lit up
      const sides=[[m,m+L,m,m],[m,m,m+L,m],[m+L,m,m+L,m+L],[m+L,m+L,m,m+L]];
      sides.forEach((sd,i)=>{ctx.strokeStyle=i===ph?this.PH[i][1]:this.PH[i][1]+'55';ctx.lineWidth=i===ph?7:4;ctx.beginPath();ctx.moveTo(sd[0],sd[1]);ctx.lineTo(sd[2],sd[3]);ctx.stroke();});
      // star
      const r=size*0.06*(near?1.25:1);ctx.save();ctx.translate(x,y);ctx.rotate(now/900);ctx.fillStyle=near?'#ffffff':'#ffe066';ctx.shadowColor=near?'#ffe066':'transparent';ctx.shadowBlur=near?18:0;
      ctx.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5,rr=i%2?r*0.45:r;ctx.lineTo(Math.cos(a)*rr,Math.sin(a)*rr);}ctx.closePath();ctx.fill();ctx.restore();
      // words
      ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font=`800 ${Math.round(size*0.085)}px "Pixelify Sans",monospace`;ctx.fillText(t0==null?'Ready?':this.PH[ph][0],size/2,size/2-size*0.02);
      if(t0!=null){ctx.font=`800 ${Math.round(size*0.12)}px "Pixelify Sans",monospace`;ctx.fillStyle=this.PH[ph][1];ctx.fillText(String(cnt),size/2,size/2+size*0.12);}
      meter.style.width=Math.round(100*(ticks?calm/ticks:0))+'%';round.textContent=t0==null?'':`Round ${cyc} of ${cycles}`;
      label.textContent=t0==null?'Put your finger on the star to start':near?'Nice! Keep following the star':'Keep your finger on the star';
      if(k>=cycles*4&&!done){done=true;const score=ticks?calm/ticks:0;label.textContent=score>=0.6?'Calm master! 🌟':'All done. Great breathing!';round.textContent='';
        if(o.onDone)o.onDone(score);return;}
      raf=requestAnimationFrame(frame);};
    raf=requestAnimationFrame(frame);
    return {el:wrap,stop(){stopped=true;cancelAnimationFrame(raf);},total};},
  // a calm-down any time (from the pause screen): no timer, just breathing
  open(back){const B=this.make({cycles:3,wait:true,onDone:sc=>{if(sc>=0.6){state.coins+=3;saveState();Snd.gem();}btn.textContent=sc>=0.6?'Done (+3 coins) ▸':'Done ▸';}});
    const btn=el('button',{class:'btn btn-green',type:'button'},'Done ▸');tapify(btn,()=>{B.stop();if(back)back();else overlay(null);});
    overlay(el('div',{class:'modal recharge'},el('h2',null,'Box breathing 🧘'),el('p',null,'Breathe in for 4, hold for 4, out for 4, hold for 4.'),B.el,el('div',{class:'btns'},btn)));}
};
