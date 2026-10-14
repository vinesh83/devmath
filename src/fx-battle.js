/* =========================================================
   Glitch, mechs, loot data
   ========================================================= */
const RM=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const GLITCH_FORMS=[
  {name:'Glitch',col:'#5ef2ff'},
  {name:'Glitch Mk II',col:'#ff4d6d',spikes:true},
  {name:'Glitch Mk III',col:'#b26bff',spikes:true,wings:true},
  {name:'Glitch Overlord',col:'#ffc933',spikes:true,wings:true,crown:true}];
function glitchForm(){const c=state.createdAt?new Date(state.createdAt).getTime():Date.now();const w=Math.floor((Date.now()-c)/(7*864e5));
  return GLITCH_FORMS[clamp(w+(cfg.glitchBoost||0),0,GLITCH_FORMS.length-1)];}
function drawGlitch(c,x,y,s,form,t,white){ // 12x12 robot, grows upgrades every week
  const pal=white?{C:'#fff',L:'#fff',l:'#fff',D:'#fff',R:'#fff'}:{C:form.col,L:'#d7deeb',l:'#8a94ad',D:'#1d1f33',R:'#ff4d6d'};
  if(form.wings){c.fillStyle=white?'#fff':form.col;const f=Math.round(Math.sin((t||0)*6));
    for(let i=0;i<4;i++){c.fillRect(x-(1+i)*s,y+(4+i+f)*s,s*(1+i),s);c.fillRect(x+12*s,y+(4+i+f)*s,s*(1+i),s);}}
  drawSprite(c,GLITCH,x,y,s,pal);
  if(form.spikes)drawSprite(c,["..R......R..",".RR......RR."],x,y+s,s,{R:white?'#fff':'#ff4d6d'});
  if(form.crown)drawSprite(c,["...G.G.G....","...GGGGG...."],x,y-2*s,s,{G:white?'#fff':'#ffc933'});}
const MECH_PAINT={steel:['#8a94ad','#d7deeb','#3d7cff'],ember:['#b8401a','#fb923c','#fde047'],ocean:['#1d4ed8','#60a5fa','#a5f3fc'],
  toxic:['#166534','#4ade80','#f0abfc'],gold:['#a16207','#fcd34d','#fff7ed'],glitch:['#3b0764','#7e22ce','#ff4d6d']};
const GLITCH_MECH={head:'horns',arms:'blades',legs:'spider',cannon:'railgun',paint:'glitch'};
function drawMech(c,x,y,s,m,t,flip,white){ // 24 x 26 grid units
  const P=MECH_PAINT[m.paint]||MECH_PAINT.steel,D='#1d1f33';t=t||0;
  const R=(cx,cy,w,h,col)=>{c.fillStyle=white?'#fff':col;const X=flip?x+(24-cx-w)*s:x+cx*s;c.fillRect(Math.round(X),Math.round(y+cy*s),Math.ceil(w*s),Math.ceil(h*s));};
  const b=Math.round(Math.sin(t*3)*0.6);
  if(m.legs==='treads'){R(3,20,18,5,D);R(4,21,16,3,P[0]);for(let i=0;i<4;i++)R(5+i*4,22,2,2,P[1]);R(8,17,8,3,P[0]);}
  else if(m.legs==='thrusters'){R(7,18,4,4,P[0]);R(13,18,4,4,P[0]);const fl=(t*12|0)%2;R(7,22,4,2+fl,'#ffb627');R(13,22,4,2+fl,'#ffb627');R(8,24+fl,2,1,'#ff4d6d');R(14,24+fl,2,1,'#ff4d6d');}
  else if(m.legs==='spider'){R(5,18,14,2,P[0]);[[1,20],[4,22],[17,22],[20,20]].forEach(([a,bb])=>{R(a,bb-1,3,1,P[0]);R(a+(a<12?0:2),bb,1,26-bb,D);});}
  else{R(6,18,4,6,P[0]);R(14,18,4,6,P[0]);R(5,24,6,2,D);R(13,24,6,2,D);R(7,20,2,1,P[1]);R(15,20,2,1,P[1]);}
  R(5,8+b,14,10,P[0]);R(6,9+b,12,8,P[1]);R(6,13+b,12,1,P[2]);
  const glow=0.6+0.4*Math.sin(t*5);c.globalAlpha=white?1:glow;R(10,10+b,4,3,'#5ef2ff');c.globalAlpha=1;
  R(8,3+b,8,5,P[0]);
  if(m.head==='horns'){R(7,1+b,1,3,'#f4f1de');R(16,1+b,1,3,'#f4f1de');R(9,5+b,6,1,'#ff4d6d');}
  else if(m.head==='dome'){R(9,2+b,6,1,P[1]);R(11,0+b,1,2,D);R(11,-1+b,1,1,'#ffb627');R(9,5+b,6,1,'#5ef2ff');}
  else if(m.head==='crown'){R(8,1+b,1,2,'#ffc933');R(11,0+b,2,3,'#ffc933');R(15,1+b,1,2,'#ffc933');R(9,5+b,6,1,'#ffc933');}
  else R(9,5+b,6,1,'#5ef2ff');
  const arm=cx=>{R(cx,9+b,3,6,P[0]);
    if(m.arms==='blades'){R(cx+1,15+b,1,6,'#e5e7eb');}
    else if(m.arms==='rocket'){R(cx-0.5,15+b,4,3,D);R(cx+1,18+b,1,1+((t*10|0)%2),'#ffb627');}
    else if(m.arms==='drill'){R(cx,15+b,3,2,'#9ca3af');R(cx+0.5,17+b,2,2,'#9ca3af');R(cx+1,19+b,1,1,'#6b7280');}
    else R(cx-0.5,15+b,4,3,P[1]);};
  arm(1);arm(20);
  const k=m.cannon,cx=17;
  if(k==='missiles'){R(cx,4+b,6,4,P[0]);for(let i=0;i<2;i++)for(let j=0;j<2;j++)R(cx+1+i*2.5,4.5+b+j*1.8,1.5,1.2,'#ff4d6d');}
  else if(k==='plasma'){R(cx,5+b,7,3,P[0]);R(cx+7,5.5+b,1.5,2,'#b26bff');c.globalAlpha=white?1:glow;R(cx+8.5,5.8+b,1,1.4,'#e9d5ff');c.globalAlpha=1;}
  else if(k==='railgun'){R(cx,5+b,8,1,D);R(cx,7+b,8,1,D);R(cx,6+b,6,1,P[1]);R(cx-1,4+b,3,5,P[0]);}
  else{R(cx,5+b,6,3,P[0]);R(cx+6,6+b,1,1,D);}}
function drawDragon(c,x,y,s,t){const R=(a,b,w,h,col)=>{c.fillStyle=col;c.fillRect(x+a*s,y+b*s,w*s,h*s);};const up=Math.sin(t*12)>0;
  R(4,6,14,5,'#7a3fc9');R(17,5,5,4,'#7a3fc9');R(21,6,3,2,'#b06bff');R(19,6,1,1,'#ffe066');R(0,8,5,2,'#7a3fc9');R(-3,9,4,1,'#b06bff');
  R(6,11,2,3,'#5b2b99');R(14,11,2,3,'#5b2b99');R(5,7,12,1,'#b06bff');
  if(up){R(8,0,6,6,'#b06bff');R(10,-2,3,2,'#b06bff');}else{R(8,11,6,6,'#b06bff');R(10,17,3,2,'#b06bff');}}
function drawChest(c,x,y,s,r,open){const col={common:['#7a4a2a','#a8a29e'],rare:['#1e3a8a','#60a5fa'],epic:['#4c1d95','#c084fc'],legendary:['#92400e','#fcd34d']}[r]||['#7a4a2a','#a8a29e'];
  const R=(a,b,w,h,cc)=>{c.fillStyle=cc;c.fillRect(x+a*s,y+b*s,w*s,h*s);};
  R(0,8,24,12,col[0]);R(0,8,24,2,col[1]);R(0,18,24,2,col[1]);R(10,10,4,5,col[1]);R(11,12,2,2,'#1d1f33');
  if(open){R(0,-3,24,4,col[0]);R(0,-3,24,1,col[1]);c.globalAlpha=0.85;R(2,4,20,4,'#fff6c2');c.globalAlpha=1;}
  else{R(0,2,24,6,col[0]);R(0,2,24,2,col[1]);R(0,6,24,2,col[1]);}}
const PARTS={
  head:[['visor','Visor','common',5],['horns','Horn Helm','rare',8],['dome','Radar Dome','epic',12],['crown','King Crown','legendary',18]],
  arms:[['fists','Power Fists','common',5],['blades','Laser Blades','rare',9],['rocket','Rocket Fists','epic',14],['drill','Mega Drills','legendary',20]],
  legs:[['walker','Walker Legs','common',5],['treads','Tank Treads','rare',8],['thrusters','Jet Thrusters','epic',12],['spider','Spider Legs','legendary',18]],
  cannon:[['blaster','Blaster','common',6],['missiles','Missile Pod','rare',10],['plasma','Plasma Cannon','epic',15],['railgun','Railgun','legendary',22]],
  paint:[['steel','Steel','common',0],['ember','Ember','rare',2],['ocean','Ocean','rare',2],['toxic','Toxic','epic',4],['gold','Solid Gold','legendary',8]]};
const SUPERS=[['laser','Mega Laser','common'],['meteor','Meteor Storm','rare'],['thunder','Thunder Strike','rare'],['dragon','Dragon Summon','epic'],['blackhole','Black Hole','legendary']];
const RARITY={common:{c:'#b9c0d4',n:'Common'},rare:{c:'#4d9bff',n:'Rare'},epic:{c:'#b26bff',n:'Epic'},legendary:{c:'#ffc933',n:'LEGENDARY'}};
function inv(){if(!state.inv)state.inv={parts:['head:visor','arms:fists','legs:walker','cannon:blaster','paint:steel'],supers:['laser']};return state.inv;}
function mechCfg(){return Object.assign({head:'visor',arms:'fists',legs:'walker',cannon:'blaster',paint:'steel',super:'laser'},state.mech||{});}
function mechPower(m){m=m||mechCfg();let p=0;for(const k of ['head','arms','legs','cannon','paint']){const it=PARTS[k].find(x=>x[0]===m[k]);if(it)p+=it[3];}return p;}

/* =========================================================
   Battle strip: beam clash against Glitch (mechs at bosses)
   ========================================================= */
const Battle={cv:null,ctx:null,W:0,H:0,s:null,running:false,busy:false,
  init(){this.cv=$('#scene');this.ctx=this.cv.getContext('2d');new ResizeObserver(()=>this.resize()).observe(this.cv);
    $('#superBtn').onclick=()=>{Snd.init();this.useSuper();};},
  resize(){const r=this.cv.getBoundingClientRect();if(!r.width||!r.height)return;const d=Math.min(2,window.devicePixelRatio||1);
    this.cv.width=Math.round(r.width*d);this.cv.height=Math.round(r.height*d);this.W=r.width;this.H=r.height;this.ctx.setTransform(d,0,0,d,0,0);this.ctx.imageSmoothingEnabled=false;},
  setup(o){this.s={n:Math.max(4,o.total),mech:!!o.mech,color:o.color||'#3fbf5f',clash:0.5,target:0.5,t:0,fx:[],texts:[],shake:0,flash:0,flashCol:'#fff',freeze:0,
      heroSurge:0,foeSurge:0,shieldT:0,combo:0,best:0,pips:0,max:6,ko:false,gone:false,koT:0,foeHurt:0,taunt:null,tauntT:0,form:glitchForm(),proj:[],m:mechCfg()};
    this.busy=false;this.resize();this.updSuper();this.start();Music.intensity=0;},
  setTotal(n){if(this.s)this.s.n=Math.max(4,n);},
  stepSize(){return 0.42/this.s.n;},
  push(v){const s=this.s;s.target=clamp(s.target+v,0.06,0.96);},
  heroX(){return this.W*0.12;},foeX(){return this.W*0.88;},beamY(){return this.H*0.56;},
  lerpX(p){const a=this.heroX()+this.W*0.07,b=this.foeX()-this.W*0.07;return a+(b-a)*p;},
  cx(){return this.lerpX(this.s.clash);},
  heroCol(){if(this.s&&this.s.combo>=5)return '#ff7b1c';const o=CATALOG.outfit.find(z=>z.id===heroLook().outfit)||CATALOG.outfit[0];return o.id==='scout'?'#5ef2ff':o.A;},
  text(str,col,big,x,y){this.s.texts.push({str,col:col||'#fff',big:!!big,x:x!=null?x:this.cx(),y:y!=null?y:this.H*0.4,life:big?1.15:0.9,age:0});},
  sparks(n,col,x,y,sp){const s=this.s;for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,v=(sp||160)*(0.4+Math.random());
    s.fx.push({x:x!=null?x:this.cx(),y:y!=null?y:this.beamY(),vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:0.35+Math.random()*0.45,col:col||'#fff',sz:2+Math.random()*3});}},
  event(kind,info){const s=this.s;if(!s)return;info=info||{};const st=this.stepSize();
    if(kind==='hit'||kind==='crit'||kind==='selfcatch'||kind==='quick'){
      s.combo++;s.best=Math.max(s.best,s.combo);const crit=kind!=='hit';
      this.push(st*(crit?1.6:1)*(1+Math.min(s.combo,8)*0.04)*(s.mech?1+(mechPower(s.m)-26)/120:1));
      s.heroSurge=crit?0.6:0.35;s.foeHurt=crit?0.5:0.25;s.pips=Math.min(s.max,s.pips+(crit?2:1));
      if(crit){s.freeze=RM?0:0.13;s.shake=RM?0:0.55;s.flash=0.35;s.flashCol='#ffffff';Snd.crit();this.sparks(40,'#ffe066',null,null,320);
        this.text(kind==='selfcatch'?'SELF-CATCH!':kind==='quick'?'QUICK HIT!':'CRITICAL!','#ffe066',true);
        this.text('-'+rint(25,45),'#ff9f43',false,this.foeX()-24,this.H*0.3);if(kind==='selfcatch')Snd.gem();}
      else{Snd.zap(s.combo);this.sparks(16,'#ffffff');this.text('-'+rint(10,18),'#ffffff',false,this.foeX()-24,this.H*0.3);}
      if(s.combo===5){this.text('ON FIRE!','#ff7b1c',true,this.heroX()+this.W*0.12,this.H*0.42);Snd.whoosh();}
      if(s.mech)this.fire(crit);
      if(Math.random()<0.3)this.taunt(crit?'ouch':'hit');}
    else if(kind==='small'){this.push(st*0.5);s.heroSurge=0.25;Snd.zap(0);this.sparks(8,'#ffffff');}
    else if(kind==='block'){s.shieldT=1.0;Snd.block();this.text('BLOCKED!','#5ef2ff',true,this.heroX()+this.W*0.1,this.H*0.38);this.sparks(18,'#5ef2ff',this.heroX()+40,this.beamY(),200);this.taunt('blocked');}
    else if(kind==='hurt'){const w=info.w||1;this.push(-st*0.6*w);s.foeSurge=0.6;s.combo=0;s.flash=0.22;s.flashCol='#ff4d6d';s.shake=RM?0:0.25;Snd.hurt();this.taunt('win');}
    else if(kind==='reveal')this.taunt('learn');
    Music.intensity=Math.min(1,s.combo/6);this.updSuper();},
  taunt(kind){const L={hit:['OW! My circuits!','Lucky guess!','Beep... that stung.','You got lucky, human.'],ouch:['NOOO! My code!','You CHECKED?! Unfair!','ERROR 404: my health','Critical?! How?!'],
      blocked:['Your shield?! Grr!','Checking is cheating! ...right?','Blocked AGAIN?!'],win:['HA! You forgot to check!','Beep boop! Got you!','Checking is for losers! (It is not.)'],
      learn:['Learning, huh? Hmph.','Fine. Study my tricks.']};const s=this.s;s.taunt=pick(L[kind]||L.hit);s.tauntT=2.3;},
  fire(crit){const s=this.s,c=s.m.cannon,sx=this.heroX()+this.H*0.35,sy=this.beamY()-this.H*0.18;
    const mk=o=>s.proj.push(Object.assign({x:sx,y:sy,life:0.8,vx:0,vy:0,dl:0},o));
    if(c==='missiles'){for(let i=0;i<3;i++)mk({k:'missile',vx:520+i*40,vy:-140+i*60,dl:i*0.07});}
    else if(c==='plasma')mk({k:'plasma',vx:560});else if(c==='railgun')mk({k:'rail',life:0.25});else mk({k:'bolt',vx:680});
    if(crit&&s.m.arms==='blades')mk({k:'slash',life:0.4});else if(crit)mk({k:'fist',vx:440,y:this.beamY()+4,life:1});},
  updSuper(){const b=$('#superBtn');if(!b||!this.s)return;b.hidden=!(this.s.pips>=this.s.max)||this.s.gone;},
  async useSuper(){const s=this.s;if(!s||s.pips<s.max||this.busy||s.gone)return;this.busy=true;s.pips=0;this.updSuper();
    await Cine.superMove(mechCfg().super||'laser',s.form,s.mech);this.push(0.24);s.foeHurt=0.8;this.sparks(60,'#ffe066',this.foeX()-12,this.beamY(),360);
    s.shake=RM?0:0.5;this.text('SUPER!','#ff7b1c',true);Snd.crit();this.busy=false;},
  ko(){const s=this.s;return new Promise(res=>{if(!s){res();return;}s.target=1;s.ko=true;$('#superBtn').hidden=true;Snd.charge(0.6);
    setTimeout(()=>{Snd.ko();s.shake=RM?0:0.8;s.flash=0.5;s.flashCol='#ffffff';
      for(let i=0;i<90;i++){const a=Math.random()*Math.PI*2,v=80+Math.random()*420;s.fx.push({x:this.foeX(),y:this.beamY()-10,vx:Math.cos(a)*v,vy:Math.sin(a)*v-120,life:0.8+Math.random()*0.9,
        col:pick(['#ffe066','#ff7b1c','#5ef2ff','#ffffff',s.form.col]),sz:3+Math.random()*4,grav:300});}
      this.text('K.O.!','#ffe066',true,this.W/2,this.H*0.5);s.gone=true;},650);setTimeout(res,1900);});},
  start(){if(this.running)return;this.running=true;let last=performance.now();
    const loop=now=>{if(!this.running)return;const dt=Math.min(50,now-last)/1000;last=now;this.update(dt);this.draw();requestAnimationFrame(loop);};requestAnimationFrame(loop);},
  stop(){this.running=false;},
  update(dt){const s=this.s;if(!s)return;if(s.freeze>0){s.freeze-=dt;return;}s.t+=dt;
    s.clash+=(s.target-s.clash)*Math.min(1,dt*(s.ko?3:5));
    for(const k of ['heroSurge','foeSurge','shieldT','foeHurt','flash','shake','tauntT'])s[k]=Math.max(0,s[k]-dt);
    if(!s.gone&&Math.random()<dt*30)this.sparks(1,Math.random()<0.5?this.heroCol():'#ff4d6d',null,null,90);
    if(s.combo>=5&&Math.random()<dt*40)s.fx.push({x:this.heroX()+rint(-10,26),y:this.beamY()+rint(-34,8),vx:rint(-20,20),vy:-rint(40,110),life:0.5,col:pick(['#ff7b1c','#ffb627','#ff4d6d']),sz:3+Math.random()*3});
    s.fx=s.fx.filter(f=>{f.life-=dt;f.x+=f.vx*dt;f.y+=f.vy*dt;f.vy+=(f.grav||0)*dt;f.vx*=0.98;return f.life>0;});
    s.texts=s.texts.filter(x=>{x.age+=dt;return x.age<x.life;});
    s.proj=s.proj.filter(p=>{if(p.dl>0){p.dl-=dt;return true;}p.life-=dt;
      if(p.vx){p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.k==='missile')p.vy+=(this.beamY()-this.H*0.12-p.y)*dt*6;}
      if(p.vx&&p.x>=this.foeX()-14&&!p.hit){p.hit=true;p.life=0;this.sparks(14,'#ffb627',this.foeX()-16,p.y,220);s.foeHurt=0.3;}
      return p.life>0;});},
  beam(c,x1,x2,y,col,w,t){if(x2<=x1)return;c.lineCap='round';
    const path=amp=>{c.beginPath();c.moveTo(x1,y);for(let x=x1+12;x<x2;x+=12)c.lineTo(x,y+Math.sin(x*0.08+t*25)*amp);c.lineTo(x2,y);};
    c.globalAlpha=0.25;c.strokeStyle=col;c.lineWidth=16*w;path(3*w);c.stroke();c.globalAlpha=1;c.lineWidth=7*w;path(2*w);c.stroke();c.strokeStyle='#ffffff';c.lineWidth=2.5*w;path(1);c.stroke();},
  draw(){const c=this.ctx,s=this.s,W=this.W,H=this.H;if(!c||!W||!H||!s)return;
    c.save();if(s.shake>0){const m=s.shake*12;c.translate((Math.random()-0.5)*m,(Math.random()-0.5)*m);}
    const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#0d1026');g.addColorStop(1,mix('#1d2250',s.color,0.35));c.fillStyle=g;c.fillRect(-20,-20,W+40,H+40);
    c.fillStyle='#ffffff';for(let i=0;i<30;i++){c.globalAlpha=0.25+((i*7)%5)/10;c.fillRect((i*131.7)%W,(i*53)%(H*0.6),2,2);}c.globalAlpha=1;
    c.fillStyle=mix('#151833',s.color,0.3);c.beginPath();c.moveTo(0,H);for(let x=0;x<=W;x+=12)c.lineTo(x,H*0.78-8*Math.sin(x*0.02)-(x%96<12?12:0));c.lineTo(W,H);c.fill();
    c.fillStyle=mix('#151833',s.color,0.55);c.fillRect(0,H*0.88,W,H*0.12);
    const bw=W*0.44,bx=(W-bw)/2,by=5;c.fillStyle='#0009';c.fillRect(bx-2,by-2,bw+4,10);c.fillStyle='#ff4d6d';c.fillRect(bx,by,bw,6);c.fillStyle=this.heroCol();c.fillRect(bx,by,bw*s.clash,6);
    const y=this.beamY(),cx=this.cx(),hx=this.heroX()+(s.mech?H*0.3:H*0.12),fx=this.foeX()-(s.mech?H*0.3:H*0.1);
    if(!s.gone){this.beam(c,hx,cx,y,this.heroCol(),(1+s.heroSurge*2.2)*Math.max(0.6,H/120),s.t);this.beam(c,cx,fx,y,'#ff4d6d',(1+s.foeSurge*2.2)*Math.max(0.6,H/120),s.t+1.3);
      const r=(7+Math.sin(s.t*20)*2+(s.heroSurge+s.foeSurge)*9)*Math.max(0.6,H/120);const rg=c.createRadialGradient(cx,y,0,cx,y,r*2.4);
      rg.addColorStop(0,'#ffffff');rg.addColorStop(0.35,'#fff6c2');rg.addColorStop(1,'rgba(255,200,80,0)');c.fillStyle=rg;c.beginPath();c.arc(cx,y,r*2.4,0,Math.PI*2);c.fill();}
    const ground=H*0.9;
    if(s.mech){const sc=Math.max(1.5,H/34);drawMech(c,this.heroX()-12*sc+H*0.05,ground-26*sc,sc,s.m,s.t,false,false);
      if(!s.gone)drawMech(c,this.foeX()-12*sc-H*0.05+(s.foeHurt>0?rint(-2,2):0),ground-26*sc,sc,GLITCH_MECH,s.t+1,true,s.foeHurt>0.2&&((s.t*20|0)%2===0));}
    else{const look=heroLook(),hs=Math.max(1.5,H/22),hy=ground-14*hs;
      if(look.pet&&look.pet!=='none'){const p=PETS[look.pet];const ps=Math.max(1,hs*0.7);drawPet(c,look.pet,this.heroX()-6*hs-9*ps,p&&p.fly?hy:ground-(p?p.rows.length*ps:0),ps,s.t);}
      drawHero(c,this.heroX()-6*hs,hy+(s.gone?-Math.abs(Math.sin(s.t*8))*H*0.12:0),hs,look,s.gone?'jump':'stand',s.t);
      if(!s.gone){const gs=Math.max(1.5,H/20);drawGlitch(c,this.foeX()-6*gs+(s.foeHurt>0?rint(-3,3):0),ground-12*gs-Math.sin(s.t*2)*3,gs,s.form,s.t,s.foeHurt>0.2&&((s.t*20|0)%2===0));}}
    if(s.shieldT>0){const a=Math.min(1,s.shieldT*1.5),sx=this.heroX()+(s.mech?H*0.36:H*0.2),r=H*0.3;c.strokeStyle=`rgba(94,242,255,${a})`;c.lineWidth=4;c.fillStyle=`rgba(94,242,255,${a*0.18})`;
      c.beginPath();for(let i=0;i<6;i++){const an=Math.PI/3*i+Math.PI/6;c.lineTo(sx+Math.cos(an)*r*0.6,y-6+Math.sin(an)*r);}c.closePath();c.fill();c.stroke();}
    for(const p of s.proj){if(p.dl>0)continue;
      if(p.k==='rail'){c.globalAlpha=Math.max(0,p.life*4);c.fillStyle='#e9d5ff';c.fillRect(hx,y-H*0.12,fx-hx,4);c.fillStyle='#fff';c.fillRect(hx,y-H*0.12+1,fx-hx,2);c.globalAlpha=1;}
      else if(p.k==='slash'){c.strokeStyle=`rgba(255,255,255,${Math.min(1,p.life*2.5)})`;c.lineWidth=5;c.beginPath();c.arc(fx,y-10,H*0.25,-1,1);c.stroke();}
      else{const col=p.k==='plasma'?'#c084fc':p.k==='missile'?'#ff4d6d':p.k==='fist'?'#ffb627':'#5ef2ff',r=p.k==='plasma'?9:p.k==='fist'?8:4;
        c.fillStyle=col;c.fillRect(p.x-r,p.y-r/2,r*2,r);c.fillStyle='#fff';c.fillRect(p.x-r/2,p.y-r/4,r,r/2);c.globalAlpha=0.5;c.fillStyle=col;c.fillRect(p.x-r*3,p.y-r/4,r*2,r/2);c.globalAlpha=1;}}
    for(const f of s.fx){c.globalAlpha=Math.min(1,f.life*2);c.fillStyle=f.col;c.fillRect(f.x,f.y,f.sz,f.sz);}c.globalAlpha=1;
    const pw=Math.max(8,Math.min(14,W/60)),px=10,py=H-12;c.fillStyle='#ffffffaa';c.font='700 9px Lexend,sans-serif';c.textAlign='left';c.fillText('SUPER',px,py-3);
    for(let i=0;i<s.max;i++){c.fillStyle=i<s.pips?(s.pips>=s.max&&(s.t*6|0)%2?'#ffffff':'#ffc933'):'#ffffff33';c.fillRect(px+i*(pw+3),py,pw,6);}
    if(s.combo>=2){c.textAlign='left';const sz=Math.max(14,Math.round(H*0.17));c.font=`800 ${sz}px "Pixelify Sans",monospace`;c.lineWidth=4;c.strokeStyle='#000';
      c.strokeText('x'+s.combo,10,sz+12);c.fillStyle=s.combo>=5?'#ff7b1c':'#5ef2ff';c.fillText('x'+s.combo,10,sz+12);}
    for(const x of s.texts){const k=x.age/x.life,base=x.big?Math.max(16,H*0.22):Math.max(11,H*0.13),sz=Math.round(base*(x.big&&k<0.12?2.2-k*10:1));
      c.globalAlpha=k>0.7?(1-k)/0.3:1;c.font=`800 ${sz}px "Pixelify Sans",monospace`;c.textAlign='center';c.lineWidth=4;c.strokeStyle='#000';
      const yy=x.y-(x.big?0:k*30);c.strokeText(x.str,x.x,yy);c.fillStyle=x.col;c.fillText(x.str,x.x,yy);}
    c.globalAlpha=1;
    if(s.tauntT>0&&s.taunt&&!s.gone&&H>70){const fs=Math.max(10,Math.round(H*0.1));c.font=`600 ${fs}px Lexend,sans-serif`;const tw=c.measureText(s.taunt).width+16,bx2=Math.max(6,Math.min(W-tw-6,this.foeX()-tw+10)),by2=16;
      c.globalAlpha=Math.min(1,s.tauntT*2);c.fillStyle='#ffffff';c.fillRect(bx2,by2,tw,fs+10);c.fillStyle='#1d1f33';c.textAlign='left';c.fillText(s.taunt,bx2+8,by2+fs+2);c.globalAlpha=1;}
    if(s.flash>0){c.globalAlpha=s.flash*0.6;c.fillStyle=s.flashCol;c.fillRect(-20,-20,W+40,H+40);c.globalAlpha=1;}
    c.restore();}
};

/* =========================================================
   Cinematics: full-screen canvas (supers, mech launch, trailers, chests)
   ========================================================= */
const KINGDOM_LINES={
  canyon:['Big Number Canyon. Six-digit cliffs.','Glitch jammed every regroup in the canyon.'],
  docks:['Decimal Docks. Where the tiny dots rule.','Glitch scrambled every decimal point.'],
  forge:['Fact Forge. The volcano of times tables.','Glitch stole the hammer of the 7s and 8s.'],
  castle:['Area Castle. Built box by box.','Glitch knocked out the zeros.'],
  tower:['Word Tower. Every floor is a riddle.','Glitch hid decoys on every page.'],
  fortress:['The Glitch Fortress.','Free all five kingdoms to open the gates.']};
const Cine={el:null,cv:null,ctx:null,W:0,H:0,
  init(){this.el=$('#cine');this.cv=this.el.querySelector('canvas');this.ctx=this.cv.getContext('2d');this.skipBtn=this.el.querySelector('.skip');},
  size(){const r=this.el.getBoundingClientRect();const d=Math.min(2,window.devicePixelRatio||1);this.cv.width=Math.round(r.width*d);this.cv.height=Math.round(r.height*d);
    this.W=r.width;this.H=r.height;this.ctx.setTransform(d,0,0,d,0,0);this.ctx.imageSmoothingEnabled=false;},
  play(dur,draw,o){o=o||{};return new Promise(res=>{this.el.hidden=false;const ui=this.el.querySelector('.cine-ui');ui.innerHTML='';this.size();
    const t0=performance.now();let last=t0,done=false;
    const end=()=>{if(done)return;done=true;this.el.hidden=true;ui.innerHTML='';this.skipBtn.onclick=null;res();};
    this.skipBtn.hidden=!o.skip;this.skipBtn.onclick=()=>{Snd.tap();end();};
    const loop=now=>{if(done)return;const t=(now-t0)/1000,dt=Math.min(0.05,(now-last)/1000);last=now;
      this.ctx.save();try{draw(this.ctx,this.W,this.H,t,dt);}catch(e){}this.ctx.restore();if(t>=dur&&!o.hold){end();return;}requestAnimationFrame(loop);};
    requestAnimationFrame(loop);if(o.hold)o.hold(end);});},
  title(c,W,H,t,txt,col,sub,yy){const k=Math.min(1,Math.max(0,t)/0.25);const sz=Math.round(Math.min(W*0.09,H*0.13)*(1+(1-k)*1.5));
    c.font=`800 ${sz}px "Pixelify Sans",monospace`;c.textAlign='center';c.lineWidth=8;c.strokeStyle='#000';c.globalAlpha=k;const y=yy||H*0.22;
    c.strokeText(txt,W/2,y);c.fillStyle=col||'#ffe066';c.fillText(txt,W/2,y);
    if(sub){c.font=`700 ${Math.round(sz*0.3)}px Lexend,sans-serif`;c.lineWidth=5;c.strokeText(sub,W/2,y+sz*0.62);c.fillStyle='#fff';c.fillText(sub,W/2,y+sz*0.62);}c.globalAlpha=1;},
  cap(c,W,H,t,txt){c.globalAlpha=Math.min(1,t*2.5);c.font=`600 ${Math.round(Math.min(W*0.035,H*0.05))}px Lexend,sans-serif`;c.fillStyle='#fff';c.textAlign='center';c.fillText(txt,W/2,H*0.86);c.globalAlpha=1;},
  bars(c,W,H,k){const h=H*0.1*k;c.fillStyle='#000';c.fillRect(0,0,W,h);c.fillRect(0,H-h,W,h);},
  shake(c,a){if(!RM)c.translate((Math.random()-0.5)*a,(Math.random()-0.5)*a);},
  superMove(kind,form,mech){const name={laser:'MEGA LASER!',meteor:'METEOR STORM!',thunder:'THUNDER STRIKE!',dragon:'DRAGON SUMMON!',blackhole:'BLACK HOLE!'}[kind]||'SUPER!';
    const P=[],F={};const D=RM?1.4:2.6;Snd.charge(0.6);
    return this.play(D,(c,W,H,t,dt)=>{const gx=W*0.8,gy=H*0.56,gs=Math.max(4,Math.floor(H/60));
      if(kind==='meteor'){const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#3b0a0a');g.addColorStop(1,'#120406');c.fillStyle=g;}else c.fillStyle='#05060f';c.fillRect(0,0,W,H);
      if(t>0.6&&t<D-0.3&&kind!=='dragon')this.shake(c,kind==='blackhole'?6:14);
      if(mech)drawMech(c,W*0.06,H*0.56-13*gs,gs,mechCfg(),t,false,false);else drawHero(c,W*0.12,H*0.56-7*gs,gs,heroLook(),t>0.6?'jump':'stand',t);
      const hurt=t>0.7&&((t*14|0)%2===0);
      if(!(kind==='blackhole'&&t>1.6)){c.save();if(kind==='blackhole'&&t>0.8){const k=Math.min(1,(t-0.8)/0.8);c.translate(gx,gy);c.rotate(k*6);c.scale(1-k*0.95,1-k*0.95);c.translate(-gx,-gy);}
        if(mech)drawMech(c,gx-12*gs,gy-13*gs,gs,GLITCH_MECH,t,true,hurt);else drawGlitch(c,gx-6*gs,gy-6*gs,gs,form,t,hurt);c.restore();}
      if(t<0.7)for(let i=0;i<6;i++){const a=Math.random()*6.28,r=120+Math.random()*120;P.push({x:W*0.16+Math.cos(a)*r,y:H*0.5+Math.sin(a)*r,tx:W*0.16,ty:H*0.5,life:0.5,col:pick(['#5ef2ff','#ffe066','#fff'])});}
      for(const p of P){p.life-=dt;if(p.tx!=null){p.x+=(p.tx-p.x)*dt*6;p.y+=(p.ty-p.y)*dt*6;}else if(!p.met){p.x+=p.vx*dt;p.y+=p.vy*dt;}}
      if(kind==='laser'&&t>0.6&&t<D-0.4){if(!F.a){F.a=1;Snd.boom();}const h=H*0.16*(1+Math.sin(t*40)*0.08);c.fillStyle='#5ef2ff';c.fillRect(W*0.16,H*0.5-h/2,W,h);c.fillStyle='#e0fbff';c.fillRect(W*0.16,H*0.5-h/4,W,h/2);c.fillStyle='#fff';c.fillRect(W*0.16,H*0.5-h/10,W,h/5);
        for(let i=0;i<4;i++)P.push({x:W*0.2+Math.random()*W*0.7,y:H*0.5+(Math.random()-0.5)*h,vx:300+Math.random()*400,vy:(Math.random()-0.5)*200,life:0.4,col:'#fff'});}
      if(kind==='meteor'&&t>0.5&&t<D-0.4){if(Math.random()<dt*14)P.push({x:gx-W*0.45+Math.random()*W*0.2,y:-20,vx:W*0.55,vy:H*0.95,life:2,col:'#ffb627',met:1});
        for(const p of P)if(p.met&&p.life>0){p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.y>gy-20){p.life=0;Snd.noise(0.3,0.15,0,'lowpass',500);
            for(let i=0;i<14;i++){const a=Math.random()*6.28,v=100+Math.random()*250;P.push({x:p.x,y:p.y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:0.5,col:pick(['#ff7b1c','#ffe066','#ff4d6d'])});}}
          c.globalAlpha=0.4;c.fillStyle='#ff4d6d';c.fillRect(p.x-30,p.y-30,22,22);c.globalAlpha=1;c.fillStyle='#ff7b1c';c.fillRect(p.x-8,p.y-8,16,16);c.fillStyle='#ffe066';c.fillRect(p.x-4,p.y-4,8,8);}}
      if(kind==='thunder'&&t>0.5&&t<D-0.3){const k=(t*7)|0;if(k!==F.b){F.b=k;if(Math.random()<0.75){F.bolt=0.13;F.bx=gx+(Math.random()-0.5)*80;Snd.noise(0.25,0.2,0,'highpass',1200);Snd.tone(60,0.3,'square',0.1);}}
        if(F.bolt>0){F.bolt-=dt;c.fillStyle='#fff';c.globalAlpha=0.35;c.fillRect(0,0,W,H);c.globalAlpha=1;c.strokeStyle='#e0f2ff';c.lineWidth=6;c.beginPath();let x=F.bx,yy=0;c.moveTo(x,yy);while(yy<gy){x+=(Math.random()-0.5)*60;yy+=30;c.lineTo(x,yy);}c.stroke();c.strokeStyle='#fff';c.lineWidth=2;c.stroke();}}
      if(kind==='dragon'&&t>0.4){const ds=Math.max(4,Math.floor(H/70)),dx=-25*ds+(t-0.4)*W*0.6,dy=H*0.3+Math.sin(t*4)*20;if(!F.r){F.r=1;Snd.tone(110,0.8,'sawtooth',0.1,0,55);}
        drawDragon(c,dx,dy,ds,t);if(dx>W*0.15&&dx<W*0.75){if(!F.f){F.f=1;Snd.noise(1.2,0.12,0,'bandpass',900);}for(let i=0;i<5;i++)P.push({x:dx+24*ds,y:dy+7*ds,vx:250+Math.random()*250,vy:60+Math.random()*140,life:0.7,col:pick(['#ff7b1c','#ffe066','#ff4d6d'])});}}
      if(kind==='blackhole'&&t>0.5){const r=30+Math.min(1,t-0.5)*H*0.2;for(let i=0;i<5;i++){const a=t*6+i*1.26;c.strokeStyle=['#b26bff','#5ef2ff','#ff4d6d','#ffe066','#fff'][i];c.lineWidth=3;c.beginPath();c.arc(gx,gy,r*(0.4+i*0.15),a,a+2.4);c.stroke();}
        c.fillStyle='#000';c.beginPath();c.arc(gx,gy,r*0.35,0,6.28);c.fill();if(!F.c){F.c=1;Snd.tone(300,1.6,'sawtooth',0.07,0,40);}
        if(t>D-0.6){if(!F.d){F.d=1;Snd.boom();}c.fillStyle='#fff';c.globalAlpha=Math.max(0,1-(t-(D-0.6))*2.5);c.fillRect(0,0,W,H);c.globalAlpha=1;}}
      for(const p of P){if(p.met||p.life<=0)continue;c.globalAlpha=Math.min(1,p.life*2);c.fillStyle=p.col;c.fillRect(p.x,p.y,4,4);}c.globalAlpha=1;
      for(let i=P.length-1;i>=0;i--)if(P[i].life<=0)P.splice(i,1);
      this.bars(c,W,H,Math.min(1,t*4));if(t>0.25){if(!F.s){F.s=1;Snd.slam();}this.title(c,W,H,t-0.25,name,'#ffe066');}});},
  mechLaunch(form){Snd.whoosh();const D=RM?1.2:2.6,F={};
    return this.play(D,(c,W,H,t)=>{c.fillStyle='#070915';c.fillRect(0,0,W,H);const g=c.createLinearGradient(0,H*0.7,0,H);g.addColorStop(0,'#1d2250');g.addColorStop(1,'#0b0d1f');c.fillStyle=g;c.fillRect(0,H*0.7,W,H*0.3);
      const s=Math.max(4,Math.floor(H/55)),land=H*0.72-26*s,hy=Math.min(land,-30*s+t*H*1.8),gyy=Math.min(land,-30*s+(t-0.45)*H*1.8);
      if(hy>=land&&!F.a){F.a=1;Snd.slam();}if(gyy>=land&&!F.b){F.b=1;Snd.slam();}if((F.a&&t<0.9)||(F.b&&t>0.45&&t<1.3))this.shake(c,10);
      drawMech(c,W*0.16,hy,s,mechCfg(),t,false,false);drawMech(c,W*0.84-24*s,gyy,s,GLITCH_MECH,t,true,false);
      this.bars(c,W,H,1);if(t>1.25){if(!F.v){F.v=1;Snd.crit();}this.title(c,W,H,t-1.25,'MECHS ACTIVATE!','#5ef2ff','Your power '+mechPower()+' vs '+form.name);}},{skip:true});},
  trailer(w){const L=KINGDOM_LINES[w.id]||[w.name,''],form=glitchForm(),D=RM?3:7.2,F={},k=MAP_POS[w.id];const prev=Music.song;Music.stop();
    return this.play(D,(c,W,H,t)=>{c.fillStyle='#000';c.fillRect(0,0,W,H);const cut=a=>{if(!F[a]){F[a]=1;Snd.whoosh();}};
      if(t<2.4){const z=Math.max(W/120,H/90)*(1+t*0.08),cx=(k.x-22+t*14)*z,cy=(k.y-10+t*5)*z;c.save();c.translate(W/2-cx,H/2-cy);c.scale(z,z);c.drawImage(MapArt.canvas(),0,0);c.restore();
        c.fillStyle='rgba(0,0,0,0.25)';c.fillRect(0,0,W,H);this.cap(c,W,H,t,L[0]);}
      else if(t<4.0){cut('b');const tt=t-2.4;c.fillStyle='#0b0612';c.fillRect(0,0,W,H);const fl=(tt*5)|0;
        if(fl%3===0&&tt>0.3){c.fillStyle='#e9d5ff';c.globalAlpha=0.35;c.fillRect(0,0,W,H);c.globalAlpha=1;if(!F['t'+fl]){F['t'+fl]=1;Snd.noise(0.3,0.12,0,'highpass',1500);}}
        const s=Math.max(5,Math.floor(H/40));c.globalAlpha=Math.min(1,tt*2);drawMech(c,W/2-12*s,H*0.66-26*s,s,GLITCH_MECH,t,true,false);c.globalAlpha=1;this.cap(c,W,H,tt,L[1]);}
      else if(t<5.4){cut('c');const tt=t-4.0,y=H*0.55,mx=W*(0.5+Math.sin(tt*6)*0.08);c.fillStyle=((tt*4)|0)%2?'#101640':'#200a1a';c.fillRect(0,0,W,H);
        Battle.beam(c,W*0.14,mx,y,'#5ef2ff',2.4,tt);Battle.beam(c,mx,W*0.86,y,'#ff4d6d',2.4,tt+1);const s=Math.max(4,Math.floor(H/50));
        drawHero(c,W*0.07,y-7*s,s,heroLook(),'stand',tt);drawGlitch(c,W*0.9-6*s,y-6*s,s,form,tt,false);c.fillStyle='#fff';c.beginPath();c.arc(mx,y,14+Math.sin(tt*30)*4,0,6.28);c.fill();
        this.cap(c,W,H,tt,'Only checked answers can stop him.');}
      else{cut('d');const tt=t-5.4;if(!F.s){F.s=1;Snd.slam();Snd.boom();}c.fillStyle='#05060f';c.fillRect(0,0,W,H);
        c.globalAlpha=0.3;c.fillStyle=w.color;c.beginPath();c.arc(W/2,H*0.45,Math.min(W,H)*0.45*Math.min(1,tt*2),0,6.28);c.fill();c.globalAlpha=1;
        this.title(c,W,H,tt,w.name.toUpperCase(),w.color,w.sub,H*0.42);
        c.font=`700 ${Math.round(H*0.035)}px Lexend,sans-serif`;c.fillStyle='#ff4d6d';c.textAlign='center';c.globalAlpha=Math.min(1,tt*2);c.fillText(w.id==='fortress'?'FINAL BOSS: '+form.name.toUpperCase():'BOSS: '+form.name.toUpperCase()+' MECH',W/2,H*0.66);c.globalAlpha=1;}
      this.bars(c,W,H,1);},{skip:true}).then(()=>{if(prev)Music.play(prev);});}
};

/* =========================================================
   Loot chests
   ========================================================= */
function rollRarity(ctx){const w=ctx==='boss'?[0,45,38,17]:ctx==='quest'?[30,42,22,6]:ctx==='great'?[50,32,14,4]:[64,26,8,2];
  const r=['common','rare','epic','legendary'];let x=Math.random()*100;for(let i=0;i<4;i++){x-=w[i];if(x<=0)return r[i];}return 'common';}
function prizeEligible(){const last=state.lastPrizeAt?new Date(state.lastPrizeAt).getTime():0,days=(Date.now()-last)/864e5,since=state.totals.problems-(state.prizeProblemsAt||0);
  if(since<30)return false;if(days>=8)return true;if(days>=5)return Math.random()<0.4;return false;}
function rollLoot(ctx){const I=inv();
  if((ctx==='boss'||ctx==='quest')&&prizeEligible())return{rarity:'legendary',type:'prize',name:'Pick dinner or dessert!',desc:'A real-world prize! Show a grown-up to make it official.'};
  const rarity=rollRarity(ctx),opts=[];
  for(const slot in PARTS)for(const p of PARTS[slot])if(p[2]===rarity&&!I.parts.includes(slot+':'+p[0]))opts.push({w:45,type:'part',slot,id:p[0],name:p[1],power:p[3]});
  for(const sp of SUPERS)if(sp[2]===rarity&&!I.supers.includes(sp[0]))opts.push({w:30,type:'super',id:sp[0],name:sp[1]});
  const tier=pr=>pr<=60?'common':pr<=150?'rare':pr<=250?'epic':'legendary';
  for(const cat of ['outfit','hat','cape','pet'])for(const it of CATALOG[cat])if(it.price>0&&tier(it.price)===rarity&&!state.owned.includes(cat+':'+it.id))opts.push({w:12,type:'gear',cat,id:it.id,name:it.name});
  const coins={common:25,rare:60,epic:120,legendary:300}[rarity];opts.push({w:opts.length?14:100,type:'coins',n:coins,name:coins+' coins'});
  let x=Math.random()*opts.reduce((s,o)=>s+o.w,0);for(const o of opts){x-=o.w;if(x<=0)return Object.assign({rarity},o);}return Object.assign({rarity},opts[opts.length-1]);}
function grantLoot(it){const I=inv();
  if(it.type==='part')I.parts.push(it.slot+':'+it.id);else if(it.type==='super')I.supers.push(it.id);else if(it.type==='gear')state.owned.push(it.cat+':'+it.id);
  else if(it.type==='coins')state.coins+=it.n;
  else if(it.type==='prize'){state.prizes=(state.prizes||[]).concat([{id:uid(),name:it.name,at:new Date().toISOString(),status:'pending'}]);state.lastPrizeAt=new Date().toISOString();state.prizeProblemsAt=state.totals.problems;}
  state.loot=(state.loot||[]).concat([{at:new Date().toISOString(),rarity:it.rarity,type:it.type,name:it.name}]).slice(-100);saveState();}
function lootIcon(it,size){const cv=el('canvas',{width:size,height:size,class:'loot-ic'}),c=cv.getContext('2d');c.imageSmoothingEnabled=false;const u=size/120;
  if(it.type==='part'){const m=Object.assign(mechCfg(),{[it.slot]:it.id});drawMech(c,12*u,8*u,4*u,m,0,false,false);}
  else if(it.type==='gear'){if(it.cat==='pet')drawPet(c,it.id,24*u,40*u,8*u,0);else drawHero(c,36*u,16*u,6*u,Object.assign({},heroLook(),{[it.cat]:it.id}),'stand',0);}
  else if(it.type==='super'){const col={laser:'#5ef2ff',meteor:'#ff7b1c',thunder:'#e0f2ff',dragon:'#b06bff',blackhole:'#b26bff'}[it.id]||'#ffe066';
    for(let i=0;i<12;i++){c.save();c.translate(60*u,60*u);c.rotate(i*Math.PI/6);c.fillStyle=col;c.fillRect(0,-3*u,52*u,6*u);c.restore();}
    c.fillStyle='#fff';c.beginPath();c.arc(60*u,60*u,18*u,0,6.28);c.fill();if(it.id==='dragon')drawDragon(c,20*u,40*u,3*u,0);}
  else if(it.type==='coins')drawSprite(c,COIN,36*u,36*u,8*u,{G:'#ffc933',W:'#fff3b0'});
  else drawSprite(c,["..GGGG..",".GYYYYG.","GYYGGYYG","GYYYYYYG","GYYGGYYG",".GYYYYG.","..GGGG.."],20*u,25*u,10*u,{G:'#ffc933',Y:'#fff3b0'});
  return cv;}
function openChest(ctx){const it=rollLoot(ctx),R=RARITY[it.rarity],P=[],F={};let phase='drop',pt=0;
  return Cine.play(999,(c,W,H,t,dt)=>{pt+=dt;c.fillStyle='rgba(8,10,25,1)';c.fillRect(0,0,W,H);const s=Math.max(5,Math.floor(Math.min(W,H)/70)),cx=W/2,cy=H*0.46;let y=cy,shake=0,open=false;
    if(phase==='drop'){y=Math.min(cy,-120+pt*H*2.2);if(y>=cy&&!F.l){F.l=1;Snd.slam();}if(pt>0.7){phase='wait';pt=0;}}
    else if(phase==='wait')y=cy+Math.sin(t*4)*4;
    else if(phase==='shake'){const k=(pt/0.3)|0;if(k!==F.k&&k<4){F.k=k;Snd.rattle();}shake=RM?0:8+k*6;
      if(pt>1.25){phase='burst';pt=0;Snd.reveal(it.rarity);for(let i=0;i<140;i++){const a=Math.random()*6.28,v=100+Math.random()*520;P.push({x:cx,y:cy-20,vx:Math.cos(a)*v,vy:Math.sin(a)*v-160,life:1+Math.random(),col:pick([R.c,'#fff','#ffe066'])});}}}
    else open=true;
    if(phase!=='drop'){const gl=phase==='wait'?0.3:phase==='shake'?0.35+pt*0.5:1;c.save();c.translate(cx,cy);c.rotate(t*0.6);c.globalAlpha=0.22*gl;c.fillStyle=R.c;
      for(let i=0;i<12;i++){c.rotate(Math.PI/6);c.beginPath();c.moveTo(0,0);c.lineTo(Math.max(W,H),-50);c.lineTo(Math.max(W,H),50);c.fill();}c.restore();c.globalAlpha=1;}
    c.save();c.translate(cx+(shake?(Math.random()-0.5)*shake:0),y);drawChest(c,-12*s,-10*s,s,it.rarity,open);c.restore();
    for(const p of P){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=380*dt;c.globalAlpha=Math.max(0,Math.min(1,p.life));c.fillStyle=p.col;c.fillRect(p.x,p.y,5,5);}c.globalAlpha=1;
    c.textAlign='center';c.font=`800 ${Math.round(Math.min(W,H)*0.05)}px "Pixelify Sans",monospace`;c.fillStyle='#fff';
    if(phase==='wait'||phase==='drop')c.fillText('LOOT CHEST!',cx,H*0.18);
    if(phase==='wait'){c.font=`700 ${Math.round(Math.min(W,H)*0.03)}px Lexend,sans-serif`;c.fillText('Tap the chest to open it!',cx,cy+16*s);}
  },{hold:end=>{const ui=Cine.el.querySelector('.cine-ui');
    const tapper=el('button',{class:'cine-tap',type:'button','aria-label':'Open the chest',onclick:()=>{if(phase!=='wait')return;Snd.init();phase='shake';pt=0;tapper.remove();
      setTimeout(()=>{grantLoot(it);const desc=it.type==='part'?`Mech part: ${it.slot} · Power +${it.power}`:it.type==='super'?'New super move! Equip it in the Mech Bay.':
          it.type==='gear'?'New gear! Wear it from the Shop.':it.type==='coins'?'Spend them in the Shop.':it.desc;
        ui.append(el('div',{class:'loot-card',style:'--rc:'+R.c},el('div',{class:'loot-r'},R.n),lootIcon(it,140),el('div',{class:'loot-n'},it.name),el('div',{class:'loot-d'},desc),
          el('button',{class:'btn btn-green',type:'button',onclick:()=>{Snd.coin();end();}},'Collect ▸')));},1550);}});
    ui.append(tapper);}});}
