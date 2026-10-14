/* =========================================================
   More super moves: tornado, ice, rockets, giant sword, ninja, volcano, laser shark
   "Surprise me!" picks a different one each time. Each Dojo belt unlocks a new one.
   ========================================================= */
SUPERS.push(['rockets','Rocket Barrage','common'],['tornado','Tornado Spin','rare'],['ice','Ice Blast','rare'],['sword','Giant Sword','epic'],['ninja','Shadow Ninja','epic'],
  ['volcano','Volcano Eruption','legendary'],['shark','Laser Shark','legendary']);
const SUPER_COL={laser:'#5ef2ff',meteor:'#ff7b1c',thunder:'#e0f2ff',dragon:'#b06bff',blackhole:'#b26bff',rockets:'#ff4d6d',tornado:'#c9d3e6',ice:'#9be7ff',sword:'#ffe066',ninja:'#8a94ad',volcano:'#ff7b1c',shark:'#3fa7ff'};
const SUPER_UNLOCK_ORDER=['meteor','ice','sword','ninja','dragon','volcano','shark','blackhole'];
function giftSupers(){const I=inv();let added=false;['thunder','rockets','tornado'].forEach(id=>{if(!I.supers.includes(id)){I.supers.push(id);added=true;}});
  if(!state.superRandomSet){state.superRandomSet=1;state.mech=Object.assign(mechCfg(),{super:'random'});added=true;}if(added)saveState();}
function unlockNextSuper(){const I=inv(),id=SUPER_UNLOCK_ORDER.find(x=>!I.supers.includes(x));if(!id)return null;I.supers.push(id);saveState();return SUPERS.find(s=>s[0]===id);}
Battle.useSuper=async function(){const s=this.s;if(!s||s.pips<s.max||this.busy||s.gone)return;this.busy=true;s.pips=0;this.updSuper();
  let k=mechCfg().super||'laser';const own=inv().supers;if(k==='random'||!own.includes(k)){const pool=own.length>1?own.filter(x=>x!==this.lastSuper):own;k=pick(pool);}this.lastSuper=k;
  await Cine.superMove(k,s.form,s.mech);this.push(0.24);s.foeHurt=0.8;this.sparks(60,'#ffe066',this.foeX()-12,this.beamY(),360);
  s.shake=RM?0:0.5;this.text('SUPER!','#ff7b1c',true);Snd.crit();this.busy=false;};
const NEW_SUPERS={rockets:'ROCKET BARRAGE!',tornado:'TORNADO SPIN!',ice:'ICE BLAST!',sword:'GIANT SWORD!',ninja:'SHADOW NINJA!',volcano:'VOLCANO!',shark:'LASER SHARK!'};
function drawShark(c,x,y,s,t){const B='#5d7896',L='#8fb0cf',W='#f4f7fb',K='#1d1f33',R='#ff2d4d';
  const rows=["..........B.........",".........BB.........","....BBBBBBBBBBB.....","..BBBBBBBBBBBBBBB..B",".BBBLBBBBBBBBBBBBBBB","BBKRBBBBBBBBBBBBBBB.","BWWWWBBBBBBBBBBBBBBB","WvWvWWWWWWWWWWWBB..B",".WWWWWWWWWWWWWW.....","...WWWWWWWWW........"];
  const pal={B,L,W,K,R,v:'#c9d3e6'};const flap=Math.sin(t*14)>0;c.save();c.translate(x+20*s,y);c.scale(-1,1);drawSprite(c,rows,0,0,s,pal);if(flap){c.fillStyle=B;c.fillRect(19*s,2*s,s,s*7);}c.restore();}
const _superMove=Cine.superMove.bind(Cine);
Cine.superMove=function(kind,form,mech){if(!NEW_SUPERS[kind])return _superMove(kind,form,mech);
  const name=NEW_SUPERS[kind],P=[],F={},D=RM?1.4:2.8;Snd.charge(0.6);
  return this.play(D,(c,W,H,t,dt)=>{const gx=W*0.8,gy=H*0.56,gs=Math.max(4,Math.floor(H/60)),ground=H*0.56+7*gs;
    // backdrop
    const bg={rockets:['#0b0b1a','#1a0d16'],tornado:['#0b1420','#1d2a3a'],ice:['#04121f','#0d2a40'],sword:['#120b1f','#2a1438'],ninja:['#05050c','#141432'],volcano:['#2a0606','#0a0303'],shark:['#0a3a6a','#041a33']}[kind];
    const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,bg[0]);g.addColorStop(1,bg[1]);c.fillStyle=g;c.fillRect(0,0,W,H);
    if(kind==='ninja'){c.fillStyle='#f4f1d0';c.beginPath();c.arc(W*0.86,H*0.36,H*0.08,0,6.28);c.fill();}
    if(kind==='shark'){c.fillStyle='#ffffff22';for(let i=0;i<6;i++){const yy=H*0.15+i*H*0.13;c.fillRect(((t*60+i*90)%W)-40,yy,80,3);}}
    if(kind==='volcano'){c.fillStyle='#3a1a10';c.beginPath();c.moveTo(gx-H*0.45,ground);c.lineTo(gx-H*0.08,H*0.18);c.lineTo(gx+H*0.08,H*0.18);c.lineTo(gx+H*0.45,ground);c.fill();
      c.fillStyle='#ff7b1c';c.fillRect(gx-H*0.08,H*0.18-4,H*0.16,8);}
    c.fillStyle='#00000055';c.fillRect(0,ground,W,H-ground);
    if(t>0.6&&t<D-0.3&&(kind==='sword'?t>1.0&&t<1.4:kind!=='ninja'))this.shake(c,kind==='sword'?20:10);
    // hero (ninja leaves afterimages)
    const hx=W*0.12,hy=H*0.56-7*gs;
    if(kind==='ninja'&&t>0.5&&t<2.0){for(let i=0;i<5;i++){const k=((t-0.5)*1.4+i*0.2)%1;c.globalAlpha=0.25+0.15*i;drawHero(c,hx+k*(gx-hx),hy-Math.sin(k*3.14)*H*0.15,gs,heroLook(),'jump',t);}c.globalAlpha=1;}
    else if(mech)drawMech(c,W*0.06,H*0.56-13*gs,gs,mechCfg(),t,false,false);else drawHero(c,hx,hy,gs,heroLook(),t>0.6?'jump':'stand',t);
    // Glitch, pushed around by each move
    const hurt=t>0.8&&((t*14|0)%2===0);let ox=0,oy=0,rot=0,hide=false;
    if(kind==='tornado'&&t>1.3){const k=Math.min(1,(t-1.3)/0.9);rot=k*12;oy=-k*H*0.25;}
    if(kind==='volcano'&&t>1.3){const k=Math.min(1,(t-1.3)/0.7);oy=-Math.sin(k*3.14)*H*0.35;rot=k*4;}
    if(kind==='sword'&&t>1.0)oy=gs*1.5;
    if(kind==='shark'&&t>1.5&&t<1.9)hide=true;
    if(!hide){c.save();c.translate(gx+ox,gy+oy);c.rotate(rot);c.translate(-gx,-gy);if(mech)drawMech(c,gx-12*gs,gy-13*gs,gs,GLITCH_MECH,t,true,hurt);else drawGlitch(c,gx-6*gs,gy-6*gs,gs,form,t,hurt);c.restore();}
    // effects
    if(kind==='rockets'&&t>0.5&&t<1.7){if(Math.random()<dt*22){P.push({rk:1,x:hx+40,y:hy+10,tx:gx+(Math.random()-0.5)*80,ty:gy+(Math.random()-0.5)*60,k:0,sp:1.2+Math.random()*0.6,arc:H*(0.15+Math.random()*0.3),life:2});Snd.tone(700,0.08,'square',0.03,0,300);}}
    for(const p of P){if(!p.rk||p.life<=0)continue;p.k+=dt*p.sp;const k=Math.min(1,p.k),x=p.x+(p.tx-p.x)*k,y=p.y+(p.ty-p.y)*k-Math.sin(k*3.14)*p.arc;
      const rw=Math.max(14,H*0.035);c.fillStyle='#ff4d6d';c.fillRect(x-rw/2,y-rw/4,rw,rw/2);c.fillStyle='#ffffff';c.fillRect(x+rw/2-3,y-rw/4,4,rw/2);c.fillStyle='#ffe066';c.fillRect(x-rw,y-rw/6,rw/2,rw/3);P.push({x:x-12,y,vx:-40,vy:(Math.random()-0.5)*30,life:0.3,col:'#ffb627'});
      if(k>=1){p.life=0;Snd.noise(0.2,0.12,0,'lowpass',700);for(let i=0;i<12;i++){const a=Math.random()*6.28,v=80+Math.random()*220;P.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:0.5,col:pick(['#ff7b1c','#ffe066','#ff4d6d'])});}}}
    if(kind==='tornado'&&t>0.4){if(!F.a){F.a=1;Snd.noise(2,0.14,0,'bandpass',500);}const k=Math.min(1,(t-0.4)/1.1),cx=W*0.2+(gx-W*0.2)*k;
      for(let i=0;i<16;i++){const yy=H*0.12+i*(ground-H*0.12)/16,w=(16-i)*H*0.012+10,sw=Math.sin(t*12+i*0.7)*12;c.strokeStyle=i%2?'#c9d3e6':'#8a94ad';c.lineWidth=4;c.beginPath();c.ellipse(cx+sw,yy,w,6,0,0,6.28);c.stroke();}
      if(Math.random()<0.6){const a=t*10+Math.random()*6;P.push({x:cx+Math.cos(a)*40,y:ground-Math.random()*H*0.5,vx:Math.cos(a+1.6)*200,vy:-60,life:0.4,col:'#8a6a4a'});}}
    if(kind==='ice'){if(t>0.5&&t<1.3&&Math.random()<dt*30)P.push({ice:1,x:hx+40,y:hy+20+(Math.random()-0.5)*60,vx:W*0.9,vy:(Math.random()-0.5)*60,life:1.2,r:Math.random()*6});
      for(const p of P)if(p.ice&&p.life>0){c.save();c.translate(p.x,p.y);c.rotate(0.78+p.r);c.fillStyle='#bff4ff';c.fillRect(-7,-7,14,14);c.fillStyle='#fff';c.fillRect(-3,-3,6,6);c.restore();if(p.x>gx-40)p.life=0;}
      if(t>1.2&&t<2.1){if(!F.f){F.f=1;Snd.tone(1600,0.5,'triangle',0.06,0,800);}c.fillStyle='rgba(155,231,255,0.55)';c.fillRect(gx-9*gs,gy-9*gs,18*gs,18*gs);c.strokeStyle='#fff';c.lineWidth=3;c.strokeRect(gx-9*gs,gy-9*gs,18*gs,18*gs);
        c.fillStyle='#ffffffaa';c.fillRect(gx-7*gs,gy-7*gs,3*gs,gs);}
      if(t>=2.1&&!F.s){F.s=1;Snd.boom();for(let i=0;i<50;i++){const a=Math.random()*6.28,v=120+Math.random()*320;P.push({x:gx,y:gy,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:0.7,col:pick(['#bff4ff','#ffffff','#5ef2ff'])});}}}
    if(kind==='sword'){const k=Math.min(1,Math.max(0,(t-0.55)/0.45)),bw=Math.max(28,H*0.06),bh=H*0.55,sx=gx-bw/2,sy=-bh+(ground-gs*2)*k;
      if(t>0.55){c.fillStyle='#d7deeb';c.fillRect(sx,sy,bw,bh);c.fillStyle='#ffffff';c.fillRect(sx+bw*0.35,sy,bw*0.3,bh);c.fillStyle='#ffc933';c.fillRect(sx-bw*1.2,sy-bw*0.5,bw*3.4,bw*0.6);c.fillStyle='#6b3e26';c.fillRect(sx+bw*0.2,sy-bw*2.2,bw*0.6,bw*1.7);c.fillStyle='#ffc933';c.fillRect(sx,sy-bw*2.6,bw,bw*0.5);}
      if(k>=1&&!F.i){F.i=1;Snd.slam();Snd.boom();for(let i=0;i<60;i++){const a=3.14+Math.random()*3.14,v=150+Math.random()*350;P.push({x:gx,y:ground,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:0.7,col:pick(['#ffe066','#ffffff','#8a6a4a'])});}}
      if(F.i&&t<1.4){c.fillStyle='#fff';c.globalAlpha=Math.max(0,1.4-t)*1.5;c.fillRect(0,0,W,H);c.globalAlpha=1;}}
    if(kind==='ninja'){[0.8,1.0,1.2,1.4,1.6].forEach((tt,i)=>{if(t>tt&&t<tt+0.25){if(!F['z'+i]){F['z'+i]=1;Snd.zap(4+i);}c.strokeStyle='#ffffff';c.lineWidth=5;c.globalAlpha=1-(t-tt)*4;c.beginPath();
      const d=i%2?1:-1;c.moveTo(gx-60,gy-60*d);c.lineTo(gx+60,gy+60*d);c.stroke();c.globalAlpha=1;}});}
    if(kind==='volcano'&&t>0.6){if(!F.v){F.v=1;Snd.boom();}for(let i=0;i<4;i++)P.push({x:gx+(Math.random()-0.5)*H*0.12,y:H*0.18,vx:(Math.random()-0.5)*300,vy:-200-Math.random()*300,life:1.4,col:pick(['#ff7b1c','#ffe066','#ff4d6d']),grav:500});
      if(t>1.2&&t<2.2){const h=(ground-H*0.05)*Math.min(1,(t-1.2)*3);c.fillStyle='#ff7b1c';c.fillRect(gx-gs*5,ground-h,gs*10,h);c.fillStyle='#ffe066';c.fillRect(gx-gs*2,ground-h,gs*4,h);if(!F.g){F.g=1;Snd.noise(1,0.2,0,'lowpass',400);}}}
    if(kind==='shark'){const ss=Math.max(4,Math.floor(H/45)),sx=-22*ss+(t-0.3)*(W+30*ss)/2.2,sy=gy-6*ss+Math.sin(t*5)*10;if(t>0.3)drawShark(c,sx,sy,ss,t);
      if(!F.j){F.j=1;Snd.tone(98,1.2,'sawtooth',0.08,0,60);}
      if(t>0.8&&t<1.5&&sx<gx){c.strokeStyle='#ff2d4d';c.lineWidth=4;c.beginPath();c.moveTo(sx+17*ss,sy+5.5*ss);c.lineTo(gx,gy);c.stroke();if(Math.random()<0.5)Snd.tone(1200,0.04,'square',0.02);}
      if(t>1.5&&!F.c){F.c=1;Snd.slam();this.title&&0;}}
    // particles
    for(const p of P){if(p.rk||p.ice)continue;p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.grav)p.vy+=p.grav*dt;if(p.life>0){c.globalAlpha=Math.min(1,p.life*2);c.fillStyle=p.col;c.fillRect(p.x,p.y,5,5);}}c.globalAlpha=1;
    for(const p of P)if(p.ice)p.x+=p.vx*dt,p.life-=dt;
    for(let i=P.length-1;i>=0;i--)if(P[i].life<=0)P.splice(i,1);
    if(kind==='shark'&&t>1.5&&t<2.0){c.font=`800 ${Math.round(H*0.12)}px "Pixelify Sans",monospace`;c.textAlign='center';c.lineWidth=8;c.strokeStyle='#000';c.strokeText('CHOMP!',gx,gy-H*0.15);c.fillStyle='#fff';c.fillText('CHOMP!',gx,gy-H*0.15);}
    this.bars(c,W,H,Math.min(1,t*4));if(t>0.25){if(!F.t){F.t=1;Snd.slam();}this.title(c,W,H,t-0.25,name,SUPER_COL[kind]||'#ffe066');}});};
