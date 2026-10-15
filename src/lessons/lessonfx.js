/* LessonFX: the exact-math animations for the division lessons (1280×720 canvas, deterministic: frame(t) draws time t).
   Runs inside the game page so it can use the game fonts and Dev's own pixel characters. */
(function(){
const W=1280,H=720;
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x)),seg=(t,a,b)=>clamp((t-a)/(b-a),0,1),lerp=(a,b,k)=>a+(b-a)*k;
const easeOut=k=>1-Math.pow(1-k,3),easeIO=k=>k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2,back=k=>{const c=1.7;return 1+(c+1)*Math.pow(k-1,3)+c*Math.pow(k-1,2);};
const pop=(t,t0,d)=>t<t0?0:back(seg(t,t0,t0+(d||0.35)));
const THEMES={div1:['#1b1446','#3b2a78'],div2:['#0b2e3e','#1d6a7a'],div3:['#2a1208','#7a3a14'],div4:['#2a0606','#6a1a10'],div5:['#0c2a14','#2a6a34'],div6:['#0a1440','#2a3a90']};
const COL={div:'#ffe066',dvs:'#5ef2ff',quo:'#7dff5a',rem:'#ff9f43',ink:'#ffffff',soft:'#c8cbe8',red:'#ff4d6d'};
const STEPC={D:'#3fa7ff',M:'#3fbf5f',S:'#ffd23f',B:'#ff4d6d'};
let S=null;const SPR={};
function sprCanvas(spr,scale){const c=document.createElement('canvas');c.width=spr.w;c.height=spr.h;const x=c.getContext('2d');const id=x.createImageData(spr.w,spr.h);id.data.set(spr.data);x.putImageData(id,0,0);
  const o=document.createElement('canvas');o.width=spr.w*scale;o.height=spr.h*scale;const y=o.getContext('2d');y.imageSmoothingEnabled=false;y.drawImage(c,0,0,o.width,o.height);return o;}
function init(sprites){S=sprites;SPR.hero=sprCanvas(S.hero.stand,6);SPR.friends=(S.friends||[]).map(f=>sprCanvas(f,6));SPR.dog=sprCanvas(S.dog,5);SPR.glitch=sprCanvas(S.glitch,6);}
const knight=i=>i===0?SPR.hero:SPR.friends[(i-1)%SPR.friends.length]||SPR.hero;
// ---------- drawing helpers
function txt(c,s,x,y,size,col,o){o=o||{};c.save();c.font=`${o.w||800} ${size}px ${o.f||'"JetBrains Mono",monospace'}`;c.textAlign=o.al||'center';c.textBaseline='middle';
  if(o.sc&&o.sc!==1){c.translate(x,y);c.scale(o.sc,o.sc);x=0;y=0;}if(o.a!=null)c.globalAlpha=o.a;
  if(o.glow){c.shadowColor=o.glow;c.shadowBlur=18;}c.lineJoin='round';c.lineWidth=o.lw||Math.max(4,size*0.12);c.strokeStyle=o.stroke||'#0a0a1e';c.strokeText(s,x,y);c.fillStyle=col;c.fillText(s,x,y);c.restore();}
function word(c,s,x,y,size,col,o){txt(c,s,x,y,size,col,Object.assign({f:'Lexend,sans-serif',w:800},o||{}));}
function title(c,s,x,y,size,col,o){txt(c,s,x,y,size,col,Object.assign({f:'"Pixelify Sans",Lexend,sans-serif',w:700},o||{}));}
function bg(c,t,th){const [a,b]=THEMES[th]||THEMES.div1;const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,a);g.addColorStop(1,b);c.fillStyle=g;c.fillRect(0,0,W,H);
  c.save();c.globalAlpha=0.07;c.fillStyle='#fff';for(let i=0;i<40;i++){const x=(i*173+t*12*(1+i%3))%(W+80)-40,y=(i*97)%H,s=10+(i%4)*8;c.fillRect(x,y,s,s);}c.restore();
  const v=c.createRadialGradient(W/2,H/2,H*0.35,W/2,H/2,H*0.9);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,0.45)');c.fillStyle=v;c.fillRect(0,0,W,H);
  c.fillStyle='rgba(0,0,0,0.25)';c.fillRect(0,H-70,W,70);c.fillStyle='rgba(255,255,255,0.08)';c.fillRect(0,H-70,W,3);}
const GEMC=['#5ef2ff','#ff4d9d','#7dff5a','#ffe066','#b98cff'];
function gem(c,x,y,s,col,glow){col=col||'#5ef2ff';c.save();c.translate(x,y);c.scale(s,s);if(glow){c.shadowColor=col;c.shadowBlur=22*glow;}
  const P=[[0,-26],[16,-10],[16,12],[0,26],[-16,12],[-16,-10]];c.beginPath();P.forEach(([a,b],i)=>i?c.lineTo(a,b):c.moveTo(a,b));c.closePath();
  const g=c.createLinearGradient(-16,-26,16,26);g.addColorStop(0,'#ffffff');g.addColorStop(0.25,col);g.addColorStop(1,'#1d1f33');c.fillStyle=g;c.fill();c.shadowBlur=0;c.lineWidth=2.5;c.strokeStyle='rgba(255,255,255,0.7)';c.stroke();
  c.beginPath();c.moveTo(0,-26);c.lineTo(0,26);c.moveTo(-16,-10);c.lineTo(16,12);c.moveTo(16,-10);c.lineTo(-16,12);c.strokeStyle='rgba(255,255,255,0.25)';c.lineWidth=1.5;c.stroke();
  c.fillStyle='rgba(255,255,255,0.85)';c.beginPath();c.ellipse(-6,-12,3.5,6,-0.5,0,6.28);c.fill();c.restore();}
function bone(c,x,y,s){c.save();c.translate(x,y);c.scale(s,s);c.fillStyle='#f4ecd8';c.strokeStyle='#5a4a3a';c.lineWidth=3;c.beginPath();c.roundRect(-26,-7,52,14,7);c.fill();c.stroke();
  for(const [a,b] of [[-26,-8],[-26,8],[26,-8],[26,8]]){c.beginPath();c.arc(a,b,9,0,6.28);c.fill();c.stroke();}c.beginPath();c.roundRect(-24,-6,48,12,6);c.fill();c.restore();}
function bar(c,x,y,s){c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(-44,16);c.lineTo(44,16);c.lineTo(34,-14);c.lineTo(-34,-14);c.closePath();
  const g=c.createLinearGradient(0,-14,0,16);g.addColorStop(0,'#fff3b0');g.addColorStop(0.35,'#ffc933');g.addColorStop(1,'#b98200');c.fillStyle=g;c.fill();c.lineWidth=3;c.strokeStyle='#6a4a00';c.stroke();
  c.font='800 16px "JetBrains Mono",monospace';c.textAlign='center';c.textBaseline='middle';c.fillStyle='#8a5a00';c.fillText('10',0,3);c.restore();}
function coin(c,x,y,s){c.save();c.translate(x,y);c.scale(s,s);const g=c.createRadialGradient(-5,-6,2,0,0,17);g.addColorStop(0,'#fff6c0');g.addColorStop(0.5,'#ffc933');g.addColorStop(1,'#a87400');
  c.beginPath();c.arc(0,0,16,0,6.28);c.fillStyle=g;c.fill();c.lineWidth=3;c.strokeStyle='#6a4a00';c.stroke();c.beginPath();c.arc(0,0,11,0,6.28);c.strokeStyle='rgba(106,74,0,0.5)';c.lineWidth=2;c.stroke();
  c.font='800 14px "JetBrains Mono",monospace';c.textAlign='center';c.textBaseline='middle';c.fillStyle='#8a5a00';c.fillText('1',0,1);c.restore();}
function shield(c,x,y,s,col,a){c.save();c.translate(x,y);c.scale(s,s);if(a!=null)c.globalAlpha=a;c.beginPath();c.moveTo(-26,-30);c.lineTo(26,-30);c.lineTo(26,6);c.quadraticCurveTo(26,28,0,36);c.quadraticCurveTo(-26,28,-26,6);c.closePath();
  const g=c.createLinearGradient(0,-30,0,36);g.addColorStop(0,'#c9cfe8');g.addColorStop(1,'#5d6385');c.fillStyle=g;c.fill();c.lineWidth=3.5;c.strokeStyle='#1d1f33';c.stroke();
  c.fillStyle=col||'#5ef2ff';c.shadowColor=col||'#5ef2ff';c.shadowBlur=10;c.fillRect(-4,-20,8,40);c.fillRect(-16,-8,32,8);c.restore();}
function bag(c,x,y,s,n,full){c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(-34,-20);c.quadraticCurveTo(-46,40,0,44);c.quadraticCurveTo(46,40,34,-20);c.closePath();
  c.fillStyle=full?'#b06a2a':'#8a5a2a';c.fill();c.lineWidth=3;c.strokeStyle='#3a2410';c.stroke();c.fillStyle='#6a4018';c.fillRect(-26,-30,52,12);if(n!=null)txt(c,String(n),0,14,26,'#ffe066',{lw:5});c.restore();}
function sprite(c,img,x,y,k,o){o=o||{};c.save();c.imageSmoothingEnabled=false;c.translate(x,y);if(o.flip)c.scale(-1,1);if(o.filter)c.filter=o.filter;const w=img.width*k,h=img.height*k;c.drawImage(img,-w/2,-h,w,h);c.restore();}
function badge(c,s,x,y,k,col){if(k<=0)return;c.save();c.translate(x,y);c.scale(k,k);c.beginPath();c.arc(0,0,26,0,6.28);c.fillStyle=col||'#3fbf5f';c.fill();c.lineWidth=4;c.strokeStyle='#0a0a1e';c.stroke();c.restore();txt(c,s,x,y+1,30*k,'#fff',{lw:5});}
function card(c,x,y,w,h,a,col){c.save();c.globalAlpha=a==null?1:a;c.beginPath();c.roundRect(x-w/2,y-h/2,w,h,22);c.fillStyle=col||'rgba(10,10,30,0.72)';c.fill();c.lineWidth=3;c.strokeStyle='rgba(255,255,255,0.25)';c.stroke();c.restore();}
// equation with colored parts: [["12",COL.div],[" ÷ ",ink],...]; labels under some parts
function equation(c,parts,x,y,size,k,labels){if(k<=0)return;c.save();c.font=`800 ${size}px "JetBrains Mono",monospace`;const ws=parts.map(p=>c.measureText(p[0]).width),tot=ws.reduce((a,b)=>a+b,0);c.restore();
  let cx=x-tot/2,li=0;parts.forEach((p,i)=>{const isNum=/\d/.test(p[0]);const lab=labels&&isNum?labels[li++]:null;const kk=clamp(k*parts.length-i*0.6,0,1);txt(c,p[0],cx+ws[i]/2,y,size,p[1],{sc:back(kk)||0.001,a:kk>0?1:0});if(lab)word(c,lab,cx+ws[i]/2,y+size*0.9,Math.max(20,size*0.36),p[1],{a:kk});cx+=ws[i];});}
const parse=s=>{const out=[];const m=s.split(/(\s*[÷×=+−]\s*|\s+R)/);let role=0;for(const p of m){if(!p)continue;if(/[÷×=+−]|R/.test(p)&&p.trim().length<=2&&!/\d/.test(p)){out.push([p.trim()==='R'?' R':' '+p.trim()+' ',COL.ink]);continue;}
  const col=role===0?COL.div:role===1?COL.dvs:role===2?COL.quo:COL.rem;out.push([p.trim(),col]);role++;}return out;};
// te = the pause time: the box fades out just before it, so the paused frame shows the scene clean (the player shows the question)
function yourTurn(c,t,t0,q,X,Y,w,te){X=X||W/2;Y=Y||150;const k=pop(t,t0,0.45),fo=te==null?1:1-seg(t,te-0.45,te-0.12);if(k<=0||fo<=0)return;const a=Math.min(1,k)*fo;
  card(c,X,Y,w||800,200,0.92*a,'rgba(224,69,123,0.94)');title(c,'YOUR TURN!',X,Y-54,56*k,'#ffe066',{glow:'#ffb627',a:fo});
  const full=/\?/.test(q)?q:q+' = ?',i=full.lastIndexOf('?'),pre=full.slice(0,i),post=full.slice(i+1);c.save();c.font='800 64px "JetBrains Mono",monospace';const wp=c.measureText(pre).width,wq=c.measureText('?').width,wo=c.measureText(post).width;c.restore();
  const x0=X-(wp+wq+wo)/2,pulse=1+0.08*Math.sin(t*6),yy=Y+32;txt(c,pre,x0+wp/2,yy,64,'#fff',{a});txt(c,'?',x0+wp+wq/2,yy,72*pulse,'#ffe066',{glow:'#ffe066',a});if(post)txt(c,post,x0+wp+wq+wo/2,yy,64,'#fff',{a});}
function ellie(c,t,lines){for(const L of lines){if(L.spk!=='E')continue;const k=seg(t,L.t-0.15,L.t+0.25)*(1-seg(t,L.t+L.d+0.3,L.t+L.d+0.6));if(k<=0)continue;
  const x=W-150,y=H-40+(1-easeOut(k))*160;sprite(c,SPR.dog,x,y,1);card(c,x-300,y-150,440,96,k*0.95,'#ffffff');word(c,L.text,x-300,y-150,26,'#1d1f33',{stroke:'#ffffff',lw:2,a:k});}}

// ---------- characters along the bottom
function crew(c,k,who,t,opt){const xs=[],gap=Math.min(230,1000/k),x0=W/2-gap*(k-1)/2;for(let i=0;i<k;i++){const x=x0+i*gap;xs.push(x);
  const bob=Math.abs(Math.sin(t*3+i))*4*(opt&&opt.bounce?3:1);if(who==='dogs')sprite(c,SPR.dog,x,H-58-bob,1.9,{filter:i===0?'none':['sepia(0.9) saturate(2) hue-rotate(-10deg)','sepia(1) brightness(0.6)','hue-rotate(120deg)','sepia(0.5) hue-rotate(200deg)'][(i-1)%4]});
  else sprite(c,knight(i),x,H-52-bob,1.9);}return xs;}

// ---------- scenes. Each: (c,t,B) where B={p,D,cues,acues,stopAt,lines}
const SC={};
function dealPlan(n,k,xs,slotY,item){const per=Math.ceil(n/k),cols=Math.min(per,item==='bone'?2:3),sp=item==='bone'?62:44,pile=[];
  for(let i=0;i<n;i++){const a=i*2.399,r=18+Math.sqrt(i)*22;pile.push([W/2+Math.cos(a)*r*1.4,300+Math.sin(a)*r*0.8]);}
  const slot=i=>{const g=i%k,j=Math.floor(i/k),row=Math.floor(j/cols),col=j%cols;return [xs[g]+(col-(cols-1)/2)*sp,slotY-row*(item==='bone'?34:52)];};return {pile,slot};}
function drawItem(c,item,x,y,s,i,glow){if(item==='gem')gem(c,x,y,s,GEMC[i%GEMC.length],glow);else if(item==='bone')bone(c,x,y,s*0.9);else if(item==='coin')coin(c,x,y,s);else bar(c,x,y,s);}
SC.deal=(c,t,B)=>{const p=B.p,n=p.n,k=p.k,item=p.item;const xs=crew(c,k,p.who,t,{bounce:t>B.endDeal});const {pile,slot}=dealPlan(n,k,xs,H-322,item);
  const d0=B.dealAt,dt=Math.min(0.42,(B.dealEnd-d0)/n);const q=Math.floor(n/k),rem=n%k;
  for(let i=0;i<n;i++){const ti=d0+i*dt,kk=easeIO(seg(t,ti,ti+0.4));let [x,y]=pile[i];const left=i>=q*k;
    if(!left){const [sx,sy]=slot(i);x=lerp(x,sx,kk);y=lerp(y,sy,kk)-Math.sin(kk*Math.PI)*90;}
    else if(t>ti){const lk=easeIO(seg(t,ti,ti+0.5));x=lerp(x,W/2+(i-q*k-(rem-1)/2)*70,lk);y=lerp(y,236,lk);}
    drawItem(c,item,x,y+(kk===0?Math.sin(t*2+i)*3:0),1,i,left&&t>B.endDeal?1:0.4);}
  if(t>B.endDeal)xs.forEach((x,i)=>badge(c,String(q),x,item==='bone'?H-430:H-400,pop(t,B.endDeal+0.1*i,0.35),'#3fbf5f'));
  if(rem&&t>B.endDeal+0.3)word(c,`${rem} left over`,W/2,192,30,COL.rem,{a:seg(t,B.endDeal+0.3,B.endDeal+0.7)});
  if(B.stopAt!=null)yourTurn(c,t,B.cues[0]+0.2,B.q,0,0,0,B.stopAt);
  const ek=seg(t,B.eqAt,B.eqAt+0.6);if(ek>0)equation(c,parse(p.eq),W/2,95,64,ek,p.labels);};
SC.bags=(c,t,B)=>{const p=B.p,n=p.n,m=p.m,nb=n/m;const bx=i=>W/2+(i-(nb-1)/2)*200,by=H-120;
  for(let b=0;b<nb;b++){const full=t>B.fillAt+(b+1)*m*0.32;bag(c,bx(b),by,1.4,full?b+1:null,full);}
  for(let i=0;i<n;i++){const b=Math.floor(i/m),ti=B.fillAt+i*0.32,kk=easeIO(seg(t,ti,ti+0.35));const x0=W/2+(i-(n-1)/2)*72,y0=300;const x=lerp(x0,bx(b)+((i%m)-1)*22,kk),y=lerp(y0,by-30,kk)-Math.sin(kk*Math.PI)*80;
    if(kk<1)drawItem(c,p.item,x,y,1,i,0.4);}
  word(c,'Bags of '+m,W/2,200,36,COL.dvs,{a:seg(t,B.cues[0],B.cues[0]+0.5)});const ek=seg(t,B.eqAt,B.eqAt+0.6);if(ek>0)equation(c,parse(p.eq),W/2,95,64,ek,[`${n} gems`,'',`bags of ${m}`,'',`${nb} bags`]);};
SC.array=(c,t,B)=>{const p=B.p,R=p.rows,C=p.cols,g=104,x0=420-(C-1)*g/2,y0=250;const [c0,c1,c2]=B.cues;const rk=seg(t,c1+0.3,c1+1.2),ck=seg(t,c2+0.3,c2+1.2);
  for(let r=0;r<R;r++)for(let k=0;k<C;k++){const i=r*C+k,kk=pop(t,0.2+i*0.12,0.4);const x=x0+k*g,y=y0+r*g;if(rk>0&&ck===0){c.save();c.globalAlpha=0.25*rk;c.fillStyle=['#3fa7ff','#3fbf5f','#ffd23f'][r%3];c.fillRect(x0-g/2,y-g/2+6,C*g,g-12);c.restore();}
    if(ck>0){c.save();c.globalAlpha=0.25*ck;c.fillStyle=['#3fa7ff','#3fbf5f','#ffd23f','#ff4d6d'][k%4];c.fillRect(x-g/2+6,y0-g/2,g-12,R*g);c.restore();}shield(c,x,y,kk*1.1,'#5ef2ff');}
  for(let r=0;r<R;r++)badge(c,String(C),x0+C*g-20,y0+r*g,pop(t,c1+0.9+r*0.2)*(1-ck),'#3fa7ff');
  for(let k=0;k<C;k++)badge(c,String(R),x0+k*g,y0+R*g-10,pop(t,c2+0.9+k*0.15),'#ff4d6d');
  const ex=960;equation(c,parse(`${R} × ${C} = ${R*C}`),ex,240,52,seg(t,c0+0.6,c0+1.2));equation(c,parse(`${R*C} ÷ ${R} = ${C}`),ex,360,52,seg(t,c1+1.4,c1+2));equation(c,parse(`${R*C} ÷ ${C} = ${R}`),ex,480,52,seg(t,c2+1.4,c2+2));};
SC.triangle=(c,t,B)=>{const p=B.p,cx=380,cy=380,k=pop(t,0.2,0.5);c.save();c.translate(cx,cy);c.scale(k,k);c.beginPath();c.moveTo(0,-210);c.lineTo(220,170);c.lineTo(-220,170);c.closePath();c.fillStyle='rgba(255,182,39,0.15)';c.fill();c.lineWidth=8;c.strokeStyle='#ffb627';c.shadowColor='#ffb627';c.shadowBlur=20;c.stroke();c.restore();
  txt(c,String(p.c),cx,cy-110,72*k,COL.div);txt(c,String(p.a),cx-120,cy+110,72*k,COL.dvs);txt(c,String(p.b),cx+120,cy+110,72*k,COL.quo);
  const L=[`${p.a} × ${p.b} = ${p.c}`,`${p.b} × ${p.a} = ${p.c}`,`${p.c} ÷ ${p.a} = ${p.b}`,`${p.c} ÷ ${p.b} = ${p.a}`];const t0=B.cues[0]+0.6,span=Math.max(0.5,(B.cues[1]-t0)/4);
  L.forEach((s,i)=>{const ek=seg(t,t0+i*span,t0+i*span+0.5);if(ek<=0)return;const parts=s.split(' ');txt(c,s,920,190+i*110,54,i<2?'#ffe066':'#7dff5a',{sc:back(ek)});});};
SC.think=(c,t,B)=>{const p=B.p;const reveal=B.stopAt!=null?B.stopAt+0.7:B.cues[1];const qk=seg(t,reveal,reveal+0.5);
  const pre=B.stopAt!=null&&t<B.stopAt-0.3;const top=`${p.a} ÷ ${p.b} = `;if(!pre){txt(c,top,W/2-60,190,84,'#fff',{sc:pop(t,B.stopAt!=null?B.stopAt-0.3:0.2)});txt(c,qk>0?String(p.q):'?',W/2+250,190,96,qk>0?COL.quo:'#ffe066',{sc:qk>0?back(qk):1+0.08*Math.sin(t*6),glow:qk>0?COL.quo:'#ffe066'});}
  const mk=seg(t,B.cues[0]+1.6,B.cues[0]+2.3);if(mk>0){word(c,'Think multiply:',W/2,330,34,COL.soft,{a:mk});txt(c,`${p.b} × `,W/2-170,430,84,COL.dvs,{a:mk});txt(c,qk>0?String(p.q):'?',W/2-10,430,96,qk>0?COL.quo:'#ffe066',{a:mk,sc:qk>0?back(qk):1+0.08*Math.sin(t*6+1)});txt(c,` = ${p.a}`,W/2+180,430,84,COL.div,{a:mk});}
  if(B.stopAt!=null)yourTurn(c,t,0.3,`${p.a} ÷ ${p.b}`,0,0,0,B.stopAt);};
// base-ten sharing: bars (tens) and coins (ones)
SC.blocks=(c,t,B)=>{const p=B.p,k=p.k,xs=crew(c,k,'knights',t,{bounce:t>B.done});const T=p.tens,O=p.ones,q1=Math.floor(T/k),r1=T%k,ones=O+r1*10,q2=Math.floor(ones/k);
  const tens0=i=>[W/2-330+(i%5)*92,215+Math.floor(i/5)*50],ones0=i=>[W/2+250+(i%5)*40,205+Math.floor(i/5)*40];
  const tenSlot=i=>{const g=i%k,j=Math.floor(i/k);return [xs[g],H-312-j*36];},oneSlot=i=>{const g=i%k,j=Math.floor(i/k);return [xs[g]+(j%3-1)*34,H-390-Math.floor(j/3)*34];};
  const A=B.tenAt,dt=Math.min(0.4,1.8/Math.max(1,T));
  for(let i=0;i<T;i++){const left=i>=q1*k;const ti=A+i*dt,kk=easeIO(seg(t,ti,ti+0.4));let [x,y]=tens0(i);
    if(!left){const [sx,sy]=tenSlot(i);x=lerp(x,sx,kk);y=lerp(y,sy,kk)-Math.sin(kk*Math.PI)*70;bar(c,x,y,1);}
    else{const smash=B.tradeAt!=null?seg(t,B.tradeAt,B.tradeAt+0.35):0;if(t>ti){x=lerp(x,W/2,easeIO(seg(t,ti,ti+0.5)));y=lerp(y,250,easeIO(seg(t,ti,ti+0.5)));}
      if(smash<1){c.save();c.globalAlpha=1-smash;bar(c,x,y,1+smash*0.5);c.restore();if(t>A+T*dt&&smash===0)word(c,'1 ten left!',W/2,296,30,COL.rem,{a:seg(t,A+T*dt+0.2,A+T*dt+0.6)});}
      else if(smash>=1&&t<B.tradeAt+0.9){c.save();c.globalAlpha=1-seg(t,B.tradeAt+0.35,B.tradeAt+0.9);for(let s=0;s<14;s++){const a=s*0.45,r=40+seg(t,B.tradeAt,B.tradeAt+0.9)*120;c.fillStyle=['#ffe066','#ff9f43','#fff'][s%3];c.fillRect(W/2+Math.cos(a)*r,250+Math.sin(a)*r,8,8);}c.restore();}}}
  // ones: the original coins plus 10 per traded ten
  const traded=B.tradeAt!=null?r1*10:0;const nOnes=O+traded;const OA=B.oneAt,odt=Math.min(0.32,2.2/Math.max(1,nOnes));
  for(let i=0;i<nOnes;i++){let [x,y]=i<O?ones0(i):[W/2+((i-O)%5-2)*40,300+Math.floor((i-O)/5)*40];const fromTrade=i>=O;if(fromTrade){const ak=easeOut(seg(t,B.tradeAt+0.3,B.tradeAt+0.8));if(ak<=0)continue;x=lerp(W/2,x,ak);y=lerp(250,y,ak);}
    const giveIdx=i,ti=OA+giveIdx*odt,kk=easeIO(seg(t,ti,ti+0.35));if(giveIdx<q2*k){const [sx,sy]=oneSlot(giveIdx);x=lerp(x,sx,kk);y=lerp(y,sy,kk)-Math.sin(kk*Math.PI)*60;}coin(c,x,y,1);}
  if(B.tradeAt!=null&&t>B.tradeAt+0.8&&t<OA)word(c,`${nOnes} ones`,W/2,334,32,COL.quo,{a:seg(t,B.tradeAt+0.8,B.tradeAt+1.2)});
  if(t>B.done&&p.eq)xs.forEach((x,i)=>badge(c,String(q1*10+q2),x,H-490,pop(t,B.done+0.1*i),'#3fbf5f'));
  word(c,'TENS',W/2-330+184,160,24,COL.div,{a:1-seg(t,A,A+0.6)});word(c,'ONES',W/2+330,160,24,COL.div,{a:1-seg(t,OA,OA+0.6)});
  if(B.stopAt!=null)yourTurn(c,t,0.3,B.q,0,0,0,B.stopAt);
  if(p.eq){const ek=seg(t,B.eqAt,B.eqAt+0.6);if(ek>0)equation(c,parse(p.eq),W/2,90,60,ek);}};
// long division "house"
function plan(n,d){const s=String(n);let i=0,cur=+s[0];while(cur<d&&i<s.length-1){i++;cur=cur*10+ +s[i];}const rows=[];let col=i;for(;;){const q=Math.floor(cur/d);rows.push({col,cur,q,prod:q*d,diff:cur-q*d});if(col>=s.length-1)break;col++;cur=rows[rows.length-1].diff*10+ +s[col];}return {s,rows};}
SC.house=(c,t,B)=>{const p=B.p,P=plan(p.n,p.d),N=P.s.length,solo=p.show==='map',fs=solo?110:(P.rows.length>2?54:66),cw=fs*0.8,sc=fs/70,rowH=fs*1.12,x0=(solo?W/2:430)-N*cw/2,y0=solo?330:(P.rows.length>2?150:200),colX=i=>x0+i*cw+cw/2;
  // events: [time, key]; keys like q0,m0,s0,b0 (row index); computed by the timeline builder into B.ev
  const ev=B.ev||{};const at=k=>ev[k]!=null?ev[k]:1e9,on=k=>t>=at(k),kp=k=>pop(t,at(k),0.35);
  txt(c,String(p.d),x0-58*sc,y0,fs,COL.dvs);c.save();c.strokeStyle='#fff';c.lineWidth=6*sc;c.beginPath();c.moveTo(x0-18*sc,y0+44*sc);c.quadraticCurveTo(x0-4*sc,y0,x0-18*sc,y0-42*sc);c.lineTo(x0+N*cw+10*sc,y0-42*sc);c.stroke();c.restore();
  P.s.split('').forEach((ch,i)=>{const hi=p.show==='map'&&((on('q0')&&!on('q1')&&i===0)||(on('q1')&&i===1));txt(c,ch,colX(i),y0,fs,hi?'#ffe066':'#fff',{glow:hi?'#ffe066':null});});
  let y=y0;const active=[];P.rows.forEach((r,ri)=>{const span=String(r.cur).length,cx=colX(r.col);
    if(on('q'+ri))txt(c,String(r.q),cx,y0-fs*1.2,fs,COL.quo,{sc:kp('q'+ri)});
    if(on('m'+ri)){y+=rowH;txt(c,'−',colX(r.col-span+1)-cw*0.9,y,fs*0.8,COL.red,{a:seg(t,at('m'+ri),at('m'+ri)+0.3)});txt(c,String(r.prod).padStart(span,' ').replace(/ /g,''),cx-(String(r.prod).length-1)*cw/2,y,fs,'#fff',{sc:kp('m'+ri)});
      c.save();c.strokeStyle='#fff';c.lineWidth=4;c.globalAlpha=seg(t,at('s'+ri)-0.1,at('s'+ri)+0.2);c.beginPath();c.moveTo(colX(r.col-span+1)-cw/2-6,y+fs*0.56);c.lineTo(cx+cw/2+6,y+fs*0.56);c.stroke();c.restore();}
    if(on('s'+ri)){y+=rowH+4;txt(c,String(r.diff),cx-(String(r.diff).length-1)*cw/2,y,fs,r.diff&&ri===P.rows.length-1?COL.rem:'#fff',{sc:kp('s'+ri)});}
    if(on('b'+ri)&&ri<P.rows.length-1){const nc=r.col+1,bk=easeOut(seg(t,at('b'+ri),at('b'+ri)+0.6));txt(c,P.s[nc],colX(nc),lerp(y0,y,bk),fs,'#3fa7ff',{glow:'#3fa7ff'});
      c.save();c.globalAlpha=0.6*(1-seg(t,at('b'+ri)+0.6,at('b'+ri)+1.2));c.strokeStyle='#3fa7ff';c.lineWidth=4;c.setLineDash([8,8]);c.beginPath();c.moveTo(colX(nc),y0+fs*0.56);c.lineTo(colX(nc),y-fs*0.56);c.stroke();c.restore();}});
  if(p.show==='map'){const lk=seg(t,at('q0'),at('q0')+0.4);if(lk>0){word(c,'tens',colX(0)-40,y0-200,34,COL.div,{a:lk});word(c,'ones',colX(1)+40,y0-200,34,COL.div,{a:seg(t,at('q1'),at('q1')+0.4)});}}
  // the Knight's Code badges
  if(p.show==='code'||p.show==='trade'){const keys=['D','M','S','B'],names=['Divide','Multiply','Subtract','Bring down'];let cur=-1,best=-1;
    for(const k in ev){if(t>=ev[k]&&ev[k]>best){best=ev[k];cur='qmsb'.indexOf(k[0]);}}
    keys.forEach((K,i)=>{const x=930,yy=170+i*104,hot=i===cur;card(c,x,yy,330,84,hot?0.95:0.55,hot?STEPC[K]:'rgba(20,20,50,0.7)');title(c,K,x-120,yy,50,hot?'#fff':STEPC[K]);word(c,names[i],x+30,yy,32,hot?'#fff':COL.soft);});}
  if(B.stopAt!=null){const r=P.rows[1];yourTurn(c,t,0.3,`${r?r.cur:''} ÷ ${p.d}`,450,520,560,B.stopAt);}
  if(B.answerAt!=null){const k=pop(t,B.answerAt,0.5);if(k>0){card(c,930,620,520,100,Math.min(1,k)*0.9);equation(c,parse(`${p.n} ÷ ${p.d} = ${Math.floor(p.n/p.d)}${p.n%p.d?' R'+(p.n%p.d):''}`),930,620,50,k);}}};
SC.rule=(c,t,B)=>{const d=B.p.d;title(c,`Remainder < ${d}`,W/2,120,72,'#ffe066',{sc:pop(t,0.3),glow:'#ffb627'});
  for(let r=0;r<=d;r++){const x=W/2+(r-d/2)*260,y=360,k=pop(t,0.9+r*0.45);if(k<=0)continue;card(c,x,y,220,220,0.85*Math.min(1,k));for(let i=0;i<r;i++)bone(c,x+(i-(r-1)/2)*48,y-30,0.8*k);
    word(c,`${r} left`,x,y+40,30,'#fff',{a:k});word(c,r<d?'✓ OK':'✗ share more!',x,y+80,28,r<d?COL.quo:COL.red,{a:k});}};
SC.check=(c,t,B)=>{const p=B.p,s=String(p.q),x0=W/2-160,cw=60,y0=250,fs=72;const A=B.cues[0]+0.8;
  s.split('').forEach((ch,i)=>txt(c,ch,x0+i*cw+cw*(4-s.length),y0,fs,'#fff',{sc:pop(t,0.3)}));txt(c,'×',x0-20,y0+90,fs,COL.red,{a:seg(t,0.4,0.8)});txt(c,String(p.d),x0+3*cw,y0+90,fs,COL.dvs,{a:seg(t,0.4,0.8)});
  c.save();c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(x0-40,y0+135);c.lineTo(x0+4*cw,y0+135);c.stroke();c.restore();
  const ans=String(p.n);for(let i=ans.length-1;i>=0;i--){const ti=A+(ans.length-1-i)*0.7;const k=pop(t,ti);if(k>0)txt(c,ans[i],x0+(i+4-ans.length)*cw,y0+190,fs,COL.quo,{sc:k});}
  const mk=seg(t,A+ans.length*0.7+0.3,A+ans.length*0.7+0.8);if(mk>0){word(c,'✓ It matches!',x0+cw*2,y0+290,44,COL.quo,{a:mk,glow:COL.quo});equation(c,parse(`${p.n} ÷ ${p.d} = ${p.q}`),960,170,46,mk);}
  const ek=B.cues[1]!=null?seg(t,B.cues[1],B.cues[1]+0.4):0;if(ek>0){c.save();c.globalAlpha=0.5+0.5*Math.sin(t*8);c.strokeStyle='#ffe066';c.lineWidth=5;c.strokeRect(x0+(4-s.length)*cw-cw/2,y0-50,cw,100);c.restore();}};

window.LessonFX={init,W,H,
  frame(c,B,t){bg(c,t,B.theme);(SC[B.scene]||(()=>{}))(c,t,B);ellie(c,t,B.lines||[]);},
  titleCard(c,num,name){c.clearRect(0,0,W,H);card(c,W/2,H/2-10,820,230,0.78);title(c,'LESSON '+num,W/2,H/2-60,40,'#ffe066');title(c,name.toUpperCase(),W/2,H/2+30,92,'#fff',{glow:'#e0457b'});}};
})();
