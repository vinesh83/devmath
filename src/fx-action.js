/* =========================================================
   Feel: Pencil-proof buttons, big result stamps, scratch grip
   ========================================================= */
// fire on touch-down (keys) or on lift inside the button (actions); clicks from code or keyboard still work
function tapify(b,fn,o){o=o||{};let last=0,armed=false;
  b.addEventListener('pointerdown',e=>{if(e.button>0)return;b.classList.remove('hit');void b.offsetWidth;b.classList.add('hit');
    if(o.down){e.preventDefault();last=Date.now();fn(e);}else{armed=true;try{b.setPointerCapture(e.pointerId);}catch(_){}}});
  b.addEventListener('pointerup',e=>{if(o.down||!armed)return;armed=false;const r=b.getBoundingClientRect(),pad=24;
    if(e.clientX>=r.left-pad&&e.clientX<=r.right+pad&&e.clientY>=r.top-pad&&e.clientY<=r.bottom+pad&&!b.disabled){last=Date.now();fn(e);}});
  b.addEventListener('pointercancel',()=>{armed=false;});
  b.addEventListener('click',e=>{if(Date.now()-last<800)return;if(b.disabled)return;fn(e);});}
const STAMPS={right:['CORRECT!','#3fdc6b','✓'],solved:['GOT IT!','#3fdc6b','✓'],checked:['CHECKED + CORRECT!','#5ef2ff','✓'],self:['SELF-CATCH!','#c084fc','★'],
  quick:['LIGHTNING!','#ffe066','⚡'],wrong:['NOT YET','#ffb627','↻'],block:['SHIELD BLOCK','#5ef2ff','⛨']};
// a fresh word every time: right answers get comic-book words, fast ones get speed words
const STAMP_WORDS={right:[['CORRECT!','#3fdc6b','✓'],['BOOM!','#ff7b1c','💥'],['NAILED IT!','#3fdc6b','✓'],['KAPOW!','#ff4d6d','💥'],['YES!','#3fdc6b','★'],['BULLSEYE!','#ff4d6d','🎯'],
    ['SMASHED IT!','#c084fc','💥'],['AWESOME!','#5ef2ff','★'],['BAM!','#ffb627','💥'],['ZING!','#5ef2ff','✦'],['EPIC!','#c084fc','★'],['SPOT ON!','#3fdc6b','✓'],['WHAM!','#ff7b1c','💥'],['CRUSHED IT!','#ff4d6d','💪']],
  quick:[['LIGHTNING!','#ffe066','⚡'],['TURBO!','#ff7b1c','🚀'],['WARP SPEED!','#5ef2ff','💫'],['FLASH!','#ffe066','⚡'],['ROCKET FAST!','#ff4d6d','🚀'],['SUPERSONIC!','#c084fc','💨'],
    ['ZOOM!','#5ef2ff','💨'],['BLAZING!','#ff7b1c','🔥'],['THUNDER!','#ffe066','⚡'],['NINJA SPEED!','#8a94ad','🥷'],['HYPERDRIVE!','#5ef2ff','✦'],['ON FIRE!','#ff7b1c','🔥']]};
function stamp(kind,sub,o){o=o||{};const S=STAMP_WORDS[kind]?pick(STAMP_WORDS[kind]):STAMPS[kind]||STAMPS.right,bad=kind==='wrong'||kind==='block';
  document.querySelectorAll('.stamp').forEach(x=>x.remove());
  const n=el('div',{class:'stamp'+(bad?' soft':'')+(o.small?' small':''),style:'--sc:'+S[1]},el('div',{class:'stamp-in'},el('i',null,S[2]),el('b',null,S[0]),sub?el('span',null,sub):null));
  $('#app').append(n);if(!bad){const lv=$('#scr-level');lv.classList.remove('glow-good');void lv.offsetWidth;lv.classList.add('glow-good');}
  setTimeout(()=>n.remove(),o.ms||(bad?950:(o.small?700:1250)));}

/* drag the bar between the problem and the paper to give the paper more room */
const Grip={init(){const g=$('#scGrip');if(!g)return;let drag=null;
    const row=()=>getComputedStyle($('.left')).flexDirection==='row';
    g.addEventListener('pointerdown',e=>{e.preventDefault();const card=$('#card'),r=card.getBoundingClientRect(),L=$('.left').getBoundingClientRect();
      drag={id:e.pointerId,row:row(),start:row()?e.clientX:e.clientY,size:row()?r.width:r.height,total:row()?L.width:L.height};g.setPointerCapture(e.pointerId);g.classList.add('drag');});
    g.addEventListener('pointermove',e=>{if(!drag)return;const d=(drag.row?e.clientX:e.clientY)-drag.start;this.apply(clamp(drag.size+d,this.minCard(drag.row),drag.total-150),drag.row);});
    const end=()=>{if(!drag)return;const card=$('#card'),r=card.getBoundingClientRect();const sz=drag.row?r.width:r.height;
      state.grip=state.grip||{};state.grip[this.key(drag.row)]=Math.round(sz/drag.total*1000)/1000;saveState();drag=null;g.classList.remove('drag');};
    g.addEventListener('pointerup',end);g.addEventListener('pointercancel',end);
    g.addEventListener('dblclick',()=>this.reset());},
  minCard(rw){const c=$('#card');if(rw)return 260;const h=c.querySelector('.cardhead,.expr,.story,h3');return Math.min(c.scrollHeight,Math.max(110,h?h.getBoundingClientRect().bottom-c.getBoundingClientRect().top+20:110));},
  key(rw){const k=(typeof ATT!=='undefined'&&ATT&&ATT.kind)||'x';return k+(rw?':row':':col');},
  apply(px,rw){const card=$('#card');card.style.flex=`0 0 ${Math.round(px)}px`;if(rw)card.style.maxHeight='';},
  reset(){const card=$('#card');card.style.flex='';if(state.grip){delete state.grip[this.key(getComputedStyle($('.left')).flexDirection==='row')];saveState();}},
  restore(){const card=$('#card');card.style.flex='';const L=$('.left');if(!L)return;const rw=getComputedStyle(L).flexDirection==='row';const f=state.grip&&state.grip[this.key(rw)];
    if(f){const r=L.getBoundingClientRect();this.apply(clamp(f*(rw?r.width:r.height),this.minCard(rw),(rw?r.width:r.height)-150),rw);}}};

/* =========================================================
   Battle action: combo cutscenes, Glitch HP, counterattacks, bug waves
   ========================================================= */
const MINION=["..a....a..","...a..a...","..gGGGGg..",".gGWWGWWGg",".gGWKGWKGg","gGGGGGGGGg","gGGMMMMGGg",".gGGGGGGg."];
const MINION_LEGS=[[".g.g..g.g."],["g.g....g.g"]];
const BUG_COLS=[['#ff4d6d','#7a1f3d'],['#3fdc6b','#1d6b35'],['#b26bff','#4a1f7a'],['#ffb627','#8a5a00'],['#5ef2ff','#1d5a6b']];
const BUG_TALK={bug:['nyeh!','bzzt!','hehe','2+2=5!','ERROR!','glitch!','mwahaha','oops!'],zip:['zoom!','zippy!','catch me!','wheee!'],
  armor:['clank!','tough shell!','hmph','can’t zap me!'],king:['BOW TO ME!','I am KING!','attack, bugs!','my crown!']};
const BUG_PANIC=['EEK!','RUN!','uh oh!','nooo!','yikes!'],BUG_LAUGH=['hehe!','haha!','nyah!','wheee!'];
const BUG_HP={bug:1,zip:1,armor:2,king:3},BUG_SC={bug:1,zip:0.8,armor:1,king:1.5};
(()=>{const B=Battle,_setup=B.setup.bind(B),_event=B.event.bind(B),_update=B.update.bind(B);
  B.setup=function(o){$('#scr-level').classList.remove('calm');_setup(o);const s=this.s;Object.assign(s,{hits:0,hp:1,hpShow:1,hpFlash:0,atk:null,minions:[],wave:0,waveT:o.drill?0.6:1.8,drill:!!o.drill,
    foeAtk:null,foeAtkT:o.drill?5:7+Math.random()*3,heroJump:0,heroJV:0,foeLift:0,foeLiftV:0,rings:[],slashes:[],bigUntil:0,squashed:0,antT:4,spits:[],tower:null,sweep:0});this.big(false);
    // calm mode: Glitch makes an entrance, then the strip folds away so only the problem shows. Right answers charge Battle Power.
    s.calm=!o.noCalm;s.power=0;s.calmAt=2.4;this.paintPower();
    if(s.calm){this.text('GLITCH APPEARS!','#ff4d6d',true,this.W*0.55,this.H*0.32);setTimeout(()=>{if(this.s===s)this.text('Charge your power!','#ffe066',false,this.W*0.4,this.H*0.6);},900);}};  B.big=function(on){const w=$('.scene-wrap');if(!w)return;w.classList.toggle('big',!!on&&!RM&&!(this.s&&this.s.calm));};
  B.collapse=function(){const s=this.s;if(!s||s.collapsed)return;s.collapsed=true;$('#scr-level').classList.add('calm');
    if(typeof Talk!=='undefined'&&Talk.popEl&&!Talk.popEl.hidden){const P=Talk.popEl;P.style.top='auto';P.style.bottom='14px';P.style.left='14px';}$('#superBtn').hidden=true;this.paintPower();};
  B.reveal=function(){const s=this.s;$('#scr-level').classList.remove('calm');if(s){s.collapsed=false;s.ending=true;}this.paintPower();};
  B.paintPower=function(){const c=$('#lv-power');if(!c)return;const s=this.s;c.hidden=!(s&&s.calm&&s.collapsed);if(s)c.querySelector('b').textContent=String(s.power);};
  B.addPower=function(v){const s=this.s;if(!s)return;s.power+=v;const c=$('#lv-power');this.paintPower();if(c){c.classList.remove('up');void c.offsetWidth;c.classList.add('up');}};
  {const _us=B.updSuper.bind(B);B.updSuper=function(){if(this.s&&this.s.calm){const b=$('#superBtn');if(b)b.hidden=true;return;}_us();};}
  // at the end: the strip comes back, his power blasts Glitch, and Glitch wants a real fight
  {const _ko=B.ko.bind(B);B.ko=function(o){const s=this.s;if(!s||!s.calm)return _ko();this.reveal();
    if(!(o&&o.toBrawl))return new Promise(r=>setTimeout(r,350)).then(()=>_ko());
    return new Promise(res=>{s.target=0.8;s.heroSurge=1;s.combo=Math.max(s.combo,5);Snd.charge(0.6);this.text('POWER '+s.power+'!','#ffe066',true,this.W/2,this.H*0.42);
      setTimeout(()=>{if(this.s!==s)return;s.foeHurt=0.8;s.shake=RM?0:0.4;this.sparks(50,'#ffe066',this.foeX()-12,this.beamY(),340);s.taunt='GRRR! Fight me for real!';s.tauntT=2.2;Snd.crit();},800);
      setTimeout(res,2300);});};}
  B.bigMoment=function(ms){if(RM||!this.s)return;this.big(true);clearTimeout(this.bigTm);this.bigTm=setTimeout(()=>this.big(false),ms||1500);};
  B.event=function(kind,info){const s=this.s;if(!s)return;const D=typeof DogPower!=='undefined'?DogPower:null;
    const good=kind==='hit'||kind==='crit'||kind==='selfcatch'||kind==='quick'||kind==='small';
    if(good){s.hits+=kind==='small'?0.5:1;s.hpFlash=0.35;const crit=kind!=='hit'&&kind!=='small';
      const alive=this.bugTargets(),streak=kind!=='small'&&(s.combo+1)%5===0;
      if(alive.length&&streak)this.bugBlast();else if(alive.length)this.zapMinions(alive,crit?2:1);else this.startCombo(crit);
      this.bugsReact('panic');
      if(D&&s.pug&&kind!=='small'&&D.has('pug')){s.pug=0;D.coins(2);D.pop('pug','Comeback! +2 coins');}
      if(D&&kind==='selfcatch'&&D.has('puppy')){D.coins(3);D.pop('puppy','You caught it! +3 coins',{force:true});}}
    if(kind==='hurt')s.pug=1;
    if(kind==='hurt'&&!s.atk)s.foeAtk={k:'lunge',t:0};
    if(kind==='hurt')this.bugsReact('laugh');
    _event(kind,info);
    if(good&&s.calm)this.addPower(kind==='small'?1:kind==='hit'?2:3);
    if(s.drill&&kind==='hurt'){s.taunt=pick(['Ha! Got one!','My bugs ate that fact!','Too tricky for you?','Beep! Not that one!']);s.tauntT=2;}};
  B.startCombo=function(crit){const s=this.s;if(s.drill){s.atk={t:0,dur:0.5,crit,quick:true,hit:0};return;}s.atk={t:0,dur:crit?1.25:1.05,crit,hit:0};Snd.whoosh();};
  // bugs that can still take a zap (not flying away, not already covered by bolts in the air)
  B.bugTargets=function(){return this.s.minions.filter(m=>!m.dead&&!m.fly&&m.hp-m.pend>0);};
  // a fast answer fires two bolts: two bugs (CHAIN ZAP) or a double hit on a tough one
  B.zapMinions=function(list,n){const s=this.s;list.sort((a,b)=>a.x-b.x);const hit=[];
    for(let i=0;i<n;i++){const m=list.find(q=>q.hp-q.pend>0);if(!m)break;m.pend++;if(!hit.includes(m))hit.push(m);
      s.proj.push({k:'zap',x:this.heroX()+20,y:this.beamY()-10,tx:m,life:1.2,vx:0,vy:0,dl:i*0.08});}
    if(hit.length>1)this.text('CHAIN ZAP!','#5ef2ff',false,this.W*0.5,this.H*0.22);Snd.zap(s.combo+2);};
  // 5 in a row: one big sweep launches every bug on screen
  B.bugBlast=function(){const s=this.s,W=this.W,H=this.H;
    s.minions.filter(m=>!m.dead&&!m.fly).forEach((m,i)=>{m.fly={t:-i*0.07,vx:W*(0.05+Math.random()*0.25),vy:-H*(2.6+Math.random()*1.4)};m.pend=m.hp;});
    s.sweep=0.45;s.heroJV=-H*2.4;s.flash=0.3;s.flashCol='#ffe066';s.shake=RM?0:0.4;Snd.boom();s.rings.push({x:W*0.55,life:1,boom:1});
    this.text('BUG BLAST!','#ffe066',true,W*0.5,H*0.42);s.blasts=(s.blasts||0)+1;};
  // right answer: bugs panic. Miss: bugs giggle and dance. Neither costs anything.
  B.bugsReact=function(k){const s=this.s;if(!s)return;const W=this.W,H=this.H,live=s.minions.filter(m=>!m.dead&&!m.fly&&m.hp-m.pend>0);if(!live.length)return;
    if(s.tower)s.tower.t=Math.max(s.tower.t,2.3);
    live.forEach(m=>{if(k==='panic'){m.panic=0.9;if(m.y>=0)m.vy=-H*(0.8+Math.random()*0.5);m.x=Math.min(this.foeX()-20,m.x+W*0.015);}else m.dance=1.5;});
    const t=pick(live);t.say=pick(k==='panic'?BUG_PANIC:BUG_LAUGH);t.sayT=1.1;};
  // a dojo miss: the streak resets and the bugs have a laugh
  B.miss=function(){const s=this.s;if(!s)return;s.pug=1;
    s.combo=0;Music.intensity=0;this.bugsReact('laugh');};
  B.spawnWave=function(){const s=this.s;s.wave++;const w=s.wave;s.bugCol=BUG_COLS[(w-1)%BUG_COLS.length];
    let types;if(w===1)types=s.drill?['bug','bug','bug']:['bug','bug'];
    else if(w%3===0)types=[...Array(s.drill?2:1)].map(()=>pick(['bug','zip'])).concat(['king']);
    else types=[...Array(s.drill?3+(w%2):2+(w%2))].map(()=>pick(['bug','bug','zip','armor']));
    types.forEach((ty,i)=>{const king=ty==='king';s.minions.push({type:ty,hp:BUG_HP[ty],max:BUG_HP[ty],pend:0,x:this.foeX()-10+i*30,y:0,vy:0,rot:0,ph:Math.random()*6,
      stop:this.W*(king?0.7:0.44+i*0.075+Math.random()*0.03),dead:false,born:s.t,say:king?'BOW TO ME!':null,sayT:king?1.8:0,panic:0,dance:0,hurtT:0,spin:0,fly:null,tw:null});});
    const king=types.includes('king');this.text(king?'KING BUG!':'BUG ATTACK!',king?'#ffd23f':'#ff4d6d',true,this.W*0.55,this.H*0.3);
    if(typeof Talk==='undefined')return;
    if(!state.bugTip){state.bugTip=1;saveState();setTimeout(()=>Talk.pop('byte','BEEP! Those are Glitch’s BUGS. Every right answer zaps one. Zap a whole wave for bonus coins!'),400);}
    else if(types.includes('armor')&&!state.bugTipArmor){state.bugTipArmor=1;saveState();setTimeout(()=>Talk.pop('byte','Armored bugs need TWO zaps. Answer lightning-fast and you zap twice!'),400);}
    else if(king&&!state.bugTipKing){state.bugTipKing=1;saveState();setTimeout(()=>Talk.pop('byte','KING BUG! It takes 3 zaps. Get 5 right in a row for a BUG BLAST that wipes out the whole wave!'),400);}};
  // where a bug is drawn (towers, hovering zippers, hops); bolts home onto the same spot
  B.bugXY=function(m){const s=this.s,H=this.H,ms=Math.max(2,Math.min(H,200)/22),bs=ms*(BUG_SC[m.type]||1);let x=m.x,y=H*0.9-9*bs-Math.abs(Math.sin(m.ph))*bs*1.5+m.y;
    if(m.type==='zip')y-=ms*3+Math.sin(s.t*5+m.ph)*ms;
    if(s.tower&&m.tw!=null){const t=s.tower.t,k=clamp(Math.min(t/0.3,(2.6-t)/0.3),0,1);x+=(s.tower.x-x)*k+Math.sin(s.t*6)*m.tw*2*k;y-=m.tw*7*ms*k;}
    return {x,y,s:bs};};
  B.bugHurt=function(m,tx,ty){const s=this.s,H=this.H;m.hurtT=0.4;m.vy=-H*0.8;m.x=Math.min(this.foeX()-20,m.x+this.W*0.02);
    for(let i=0;i<3;i++)this.sparks(6,['#c9cfdc','#ffffff','#ffe066'][i],tx,ty,200);this.text(m.type==='king'?'BONK!':'CRACK!','#e8eefc',false,tx,H*0.45);Snd.block();
    m.say=m.type==='king'?pick(['OW! My crown!','you dare?!']):pick(['my shell!','ow ow!']);m.sayT=1;};
  B.squash=function(m){const s=this.s,W=this.W,H=this.H;if(m.dead)return;m.dead=true;const P=this.bugXY(m),tx=clamp(P.x+5*P.s,40,W-40),ty=clamp(P.y+4*P.s,20,H-20),val=(m.type==='king'?5:m.max)+(typeof DogPower!=='undefined'&&DogPower.has('golden')?1:0);
    s.squashed=(s.squashed||0)+1;const bc=s.bugCol||BUG_COLS[0];[bc[0],'#ffe066','#ffffff'].forEach(cl=>this.sparks(8,cl,tx,ty,240));
    this.text((m.type==='king'?'KING SQUASHED!':pick(['SQUASH!','ZAP!','POP!','SPLAT!']))+' +'+val,'#ffe066',m.type==='king',tx,H*0.5);
    Snd.coin();state.coins+=val;if(typeof DogPower!=='undefined'&&DogPower.has('golden'))DogPower.pop('golden','Fetched +1 coin!');const lc=$('#lv-coins');if(lc)lc.textContent=String(state.coins);
    if(!s.minions.some(q=>!q.dead)){const wb=typeof DogPower!=='undefined'&&DogPower.has('corgi')?6:3;if(wb>3)DogPower.pop('corgi','Double wave bonus!');this.text('WAVE CLEAR! +'+wb,'#ffe066',true,W*0.5,H*0.45);state.coins+=wb;saveState();const lc2=$('#lv-coins');if(lc2)lc2.textContent=String(state.coins);Snd.boom();s.rings.push({x:tx,life:1,boom:1});s.shake=RM?0:0.3;
      for(let i=0;i<40;i++){const a=Math.random()*Math.PI*2,v=120+Math.random()*300;s.fx.push({x:tx,y:ty,vx:Math.cos(a)*v,vy:Math.sin(a)*v-80,life:0.6+Math.random()*0.6,col:pick(['#ffe066','#ff7b1c','#ffffff']),sz:3+Math.random()*3,grav:260});}
      setTimeout(()=>{if(this.s===s)s.minions=s.minions.filter(q=>!q.dead);},300);}};
  // small antics while he thinks: one at a time, every few seconds, never while the pen is moving
  B.bugAntic=function(){const s=this.s,H=this.H;const live=s.minions.filter(m=>!m.dead&&!m.fly&&m.x<=m.stop+2&&!(m.panic>0)&&!(m.dance>0)&&m.hp-m.pend>0);if(!live.length||s.tower)return;
    const opts=['hop','spin','spit','spit'];const small=live.filter(m=>m.type!=='king');if(small.length>=3)opts.push('tower','tower');const k=pick(opts),m=pick(live);
    if(k==='hop'){m.vy=-H*1.6;m.say='boing!';m.sayT=0.9;}
    else if(k==='spin'){m.spin=0.7;m.say=pick(['wheee!','spin!']);m.sayT=0.9;}
    else if(k==='spit'){const P=this.bugXY(m),x0=P.x,y0=P.y+3*P.s,tx=this.heroX()+H*0.25;s.spits.push({x:x0,y:y0,vx:-(x0-tx)/0.9,vy:-H*1.17,t:0});m.say=pick(['ptoo!','take that!','spitball!']);m.sayT=0.9;}
    else{const L=small.sort((a,b)=>a.x-b.x).slice(0,3);s.tower={t:0,x:L[0].x,list:L};L.forEach((q,i)=>q.tw=i);L[2].say='BUG TOWER!';L[2].sayT=1.6;}};
  B.foeAttack=function(){const s=this.s;const k=pick(s.mech?['missile','laser','slam']:['missile','laser','slam','missile']);s.foeAtk={k,t:0};
    if(k==='laser')Snd.charge(0.5);else if(k==='missile')Snd.whoosh();};
  B.update=function(dt){const s=this.s;if(!s)return;_update(dt);if(s.freeze>0)return;const H=this.H,W=this.W;
    s.hp=s.gone||s.ko?0:clamp(1-s.hits/Math.max(4,s.n),0.06,1);s.hpShow+=(s.hp-s.hpShow)*Math.min(1,dt*4);s.hpFlash=Math.max(0,s.hpFlash-dt);
    // hero combo
    if(s.atk){const a=s.atk;a.t+=dt;const hits=a.quick?[0.22]:a.crit?[0.2,0.32,0.44,0.58]:[0.2,0.33,0.48];
      while(a.hit<hits.length&&a.t>=hits[a.hit]){const last=a.hit===hits.length-1;a.hit++;const fx=this.foeX()-6;
        s.slashes.push({x:fx,y:this.beamY()-H*0.12,r:H*(last?0.32:0.24),a0:last?-2.2:(a.hit%2?-0.9:0.6),life:0.22,col:a.crit?'#ffe066':'#ffffff',up:last});
        this.sparks(last?26:12,a.crit?'#ffe066':'#ffffff',fx,this.beamY()-H*0.1,last?300:200);s.foeHurt=0.3;Snd.zap(s.combo+a.hit);
        this.text('-'+rint(last?18:6,last?30:12),last?'#ff9f43':'#ffffff',false,fx-20+rint(-10,10),H*0.3);
        if(last&&!a.quick){s.foeLiftV=-H*(a.crit?3.2:2.4);s.shake=RM?0:(a.crit?0.4:0.22);if(a.crit){s.flash=0.2;s.flashCol='#ffe066';}}}
      if(a.t>=a.dur)s.atk=null;}
    if(s.foeLift<0||s.foeLiftV<0){s.foeLiftV+=H*9*dt;s.foeLift+=s.foeLiftV*dt;if(s.foeLift>0){s.foeLift=0;s.foeLiftV=0;if(!RM)s.shake=Math.max(s.shake,0.15);this.sparks(10,'#8a94ad',this.foeX(),H*0.9,120);}}
    if(s.heroJump<0||s.heroJV<0){s.heroJV+=H*8*dt;s.heroJump+=s.heroJV*dt;if(s.heroJump>0){s.heroJump=0;s.heroJV=0;}}
    // bug waves
    if(!s.calm&&!s.gone&&!s.ko){if(!s.minions.some(m=>!m.dead)){s.waveT-=dt;if(s.waveT<=0){this.spawnWave();s.waveT=s.drill?1.2:2.5;}}}
    for(const m of s.minions){if(m.dead)continue;m.sayT=Math.max(0,m.sayT-dt);m.hurtT=Math.max(0,m.hurtT-dt);
      if(m.fly){m.fly.t+=dt;if(m.fly.t<0)continue;m.x+=m.fly.vx*dt;m.y+=m.fly.vy*dt;m.fly.vy+=H*5*dt;m.rot+=dt*14;if(m.fly.t>0.7)this.squash(m);continue;}
      const moving=m.x>m.stop+1;if(moving)m.x-=W*(m.type==='zip'?0.16:m.type==='king'?0.03:0.05)*dt;
      m.ph+=dt*(moving?8:m.dance>0?12:3);
      if(m.y<0||m.vy<0){m.vy+=H*7*dt;m.y+=m.vy*dt;if(m.y>0){m.y=0;m.vy=0;}}
      if(m.panic>0)m.panic-=dt;
      if(m.dance>0){m.dance-=dt;if(m.y>=0&&m.vy>=0)m.vy=-H*0.9;}
      if(m.spin>0){m.spin=Math.max(0,m.spin-dt);m.rot=m.spin?(1-m.spin/0.7)*Math.PI*2:0;}else m.rot=m.dance>0?Math.sin(s.t*14)*0.3:0;
      if(!m.sayT&&Math.random()<dt*0.15){m.say=pick(BUG_TALK[m.type]||BUG_TALK.bug);m.sayT=1.4;}}
    if(s.tower){s.tower.t+=dt;if(s.tower.t>2.6||s.tower.list.some(q=>q.dead||q.fly)){s.tower.list.forEach(q=>q.tw=null);s.tower=null;}}
    if(s.calm&&!s.collapsed&&!s.ending&&s.t>=s.calmAt&&!(typeof InkBox!=='undefined'&&(InkBox.drawing||Date.now()-(InkBox.lastUp||0)<700)))this.collapse();
    if(!s.calm&&!s.gone&&!s.ko){s.antT-=dt;if(s.antT<=0){s.antT=4+Math.random()*4;const busy=typeof InkBox!=='undefined'&&(InkBox.drawing||Date.now()-(InkBox.lastUp||0)<1500);if(!busy)this.bugAntic();}}
    s.spits=s.spits.filter(b=>{b.t+=dt;b.x+=b.vx*dt;b.y+=b.vy*dt;b.vy+=H*2.6*dt;
      if(b.t>=0.9){const hx=this.heroX()+H*0.25;s.shieldT=Math.max(s.shieldT||0,0.45);this.sparks(10,'#7dff9a',hx,b.y,160);this.text('PLINK!','#7dff9a',false,hx+H*0.1,H*0.35);return false;}return true;});
    s.sweep=Math.max(0,s.sweep-dt);
    // Glitch fights back between problems (looks only, never costs power)
    if(!s.calm&&!s.drill&&!s.gone&&!s.ko&&!s.atk&&!s.foeAtk&&$('#cine').hidden){s.foeAtkT-=dt;if(s.foeAtkT<=0){this.foeAttack();s.foeAtkT=(s.drill?5:8)+Math.random()*4;}}
    if(s.foeAtk){const f=s.foeAtk;f.t+=dt;const hx=this.heroX(),gy=H*0.9;
      if(f.k==='missile'){if(!f.p){f.p={x:this.foeX()-20,y:this.beamY()-H*0.25};}const k=Math.min(1,f.t/0.9);f.p.x=this.foeX()-20+(hx+H*0.25-(this.foeX()-20))*k;f.p.y=this.beamY()-H*0.25-Math.sin(k*Math.PI)*H*0.35+k*H*0.15;
        if(f.t>=0.9&&!f.done){f.done=true;s.shieldT=0.7;Snd.block();this.sparks(20,'#5ef2ff',hx+H*0.25,f.p.y,220);this.text('BLOCK!','#5ef2ff',false,hx+H*0.3,H*0.3);}
        if(f.t>1.3)s.foeAtk=null;}
      else if(f.k==='laser'){if(f.t>=0.55&&!f.j){f.j=1;s.heroJV=-H*2.6;Snd.zap(1);}if(f.t>0.55&&f.t<0.95&&Math.random()<0.5)this.sparks(2,'#ff4d6d',hx+rint(0,30),this.beamY()+H*0.12,90);if(f.t>1.2)s.foeAtk=null;}
      else if(f.k==='slam'){if(f.t>=0.45&&!f.l){f.l=1;Snd.slam();if(!RM)s.shake=0.3;s.rings.push({x:this.foeX(),life:1});}if(f.t>=0.75&&!f.j){f.j=1;s.heroJV=-H*2.4;}if(f.t>1.4)s.foeAtk=null;}
      else if(f.k==='lunge'){if(f.t>0.5)s.foeAtk=null;}}
    s.rings=s.rings.filter(r=>{r.life-=dt*0.9;r.x-=W*0.75*dt;return r.life>0&&r.x>0;});
    s.slashes=s.slashes.filter(x=>(x.life-=dt)>0);
    // zap bolts that home onto bugs
    for(const p of s.proj){if(p.k!=='zap'||p.dl>0)continue;const m=p.tx,P=this.bugXY(m);const tx=P.x+5*P.s,ty=P.y+4*P.s;const dx=tx-p.x,dy=ty-p.y,d=Math.hypot(dx,dy);
      if(d<16||p.life<0.05){p.life=0;if(!m.dead&&!m.fly){m.pend=Math.max(0,m.pend-1);m.hp--;if(m.hp>0)this.bugHurt(m,tx,ty);else this.squash(m);}}
      else{p.x+=dx/d*Math.max(500,W*1.4)*dt;p.y+=dy/d*Math.max(500,W*1.4)*dt;}}};
  B.draw=function(){const c=this.ctx,s=this.s,W=this.W,H=this.H;if(!c||!W||!H||!s)return;
    c.save();if(s.shake>0){const m=s.shake*12;c.translate((Math.random()-0.5)*m,(Math.random()-0.5)*m);}
    const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#0d1026');g.addColorStop(1,mix('#1d2250',s.color,0.35));c.fillStyle=g;c.fillRect(-20,-20,W+40,H+40);
    c.fillStyle='#ffffff';for(let i=0;i<40;i++){c.globalAlpha=0.25+((i*7)%5)/10;c.fillRect((((i*131.7)-s.t*(4+i%3*6))%W+W)%W,(i*53)%(H*0.6),2,2);}c.globalAlpha=1;
    const off=(s.t*18)%192;c.fillStyle=mix('#151833',s.color,0.22);c.beginPath();c.moveTo(0,H);for(let x=-192;x<=W+192;x+=16)c.lineTo(x-off,H*0.7-14*Math.sin((x)*0.018)-(x%192<32?10:0));c.lineTo(W,H);c.fill();
    c.fillStyle=mix('#151833',s.color,0.3);c.beginPath();c.moveTo(0,H);for(let x=0;x<=W;x+=12)c.lineTo(x,H*0.78-8*Math.sin(x*0.02)-(x%96<12?12:0));c.lineTo(W,H);c.fill();
    c.fillStyle=mix('#151833',s.color,0.55);c.fillRect(0,H*0.88,W,H*0.12);
    if(s.atk&&!s.atk.quick){c.globalAlpha=0.18;c.fillStyle='#ffffff';for(let i=0;i<10;i++){const yy=(i*37+s.t*900)%H;c.fillRect(0,yy,W,2);}c.globalAlpha=1;}
    const y=this.beamY(),ground=H*0.9,a=s.atk;
    // hero x during a combo
    let hdx=0;if(a){const p=a.t,far=this.foeX()-this.heroX()-W*(s.mech?0.2:0.14),ease=k=>1-Math.pow(1-k,3);
      hdx=a.quick?(p<0.15?ease(p/0.15):p<0.35?1:1-ease((p-0.35)/0.15))*far*(a.quick?1:1):p<0.18?ease(p/0.18)*far:p<a.dur-0.25?far:(1-ease((p-(a.dur-0.25))/0.25))*far;}
    const hy=s.heroJump+(a&&!a.quick&&a.t>0.42&&a.t<0.8?-Math.sin((a.t-0.42)/0.38*Math.PI)*H*0.18:0);
    const cx=this.cx(),hx=this.heroX()+(s.mech?H*0.3:H*0.12)+hdx,fx=this.foeX()-(s.mech?H*0.3:H*0.1);
    if(!s.gone&&!a){this.beam(c,hx,cx,y,this.heroCol(),(1+s.heroSurge*2.2)*Math.max(0.6,H/120),s.t);this.beam(c,cx,fx,y,'#ff4d6d',(1+s.foeSurge*2.2)*Math.max(0.6,H/120),s.t+1.3);
      const r=(7+Math.sin(s.t*20)*2+(s.heroSurge+s.foeSurge)*9)*Math.max(0.6,H/120);const rg=c.createRadialGradient(cx,y,0,cx,y,r*2.4);
      rg.addColorStop(0,'#ffffff');rg.addColorStop(0.35,'#fff6c2');rg.addColorStop(1,'rgba(255,200,80,0)');c.fillStyle=rg;c.beginPath();c.arc(cx,y,r*2.4,0,Math.PI*2);c.fill();}
    // laser counterattack
    const f=s.foeAtk;
    if(f&&f.k==='laser'&&!s.gone){if(f.t<0.55){const r=(f.t/0.55)*H*0.12;c.fillStyle='#ff4d6d';c.globalAlpha=0.5+Math.sin(s.t*40)*0.3;c.beginPath();c.arc(fx-10,y+H*0.12,r,0,Math.PI*2);c.fill();c.globalAlpha=1;}
      else if(f.t<0.95){c.fillStyle='#ff4d6d';c.globalAlpha=0.35;c.fillRect(0,y+H*0.12-H*0.06,fx,H*0.12);c.globalAlpha=1;c.fillStyle='#fff';c.fillRect(0,y+H*0.12-3,fx,6);}}
    // shockwaves
    for(const r of s.rings){c.strokeStyle=r.boom?'#ffe066':'#c084fc';c.globalAlpha=Math.max(0,r.life);c.lineWidth=4;c.beginPath();c.ellipse(r.x,ground,H*0.12*(r.boom?2.5-r.life*1.5:1),H*0.05,0,Math.PI,0);c.stroke();}c.globalAlpha=1;
    // fighters
    if(s.mech){const sc=Math.max(1.5,H/34);drawMech(c,this.heroX()-12*sc+H*0.05+hdx,ground-26*sc+hy,sc,s.m,s.t,false,false);
      if(!s.gone)drawMech(c,this.foeX()-12*sc-H*0.05+(s.foeHurt>0?rint(-2,2):0)-(f&&f.k==='lunge'?Math.sin(f.t/0.5*Math.PI)*W*0.06:0),ground-26*sc+s.foeLift-(f&&f.k==='slam'&&f.t<0.45?Math.sin(f.t/0.45*Math.PI)*H*0.25:0),sc,GLITCH_MECH,s.t+1,true,s.foeHurt>0.2&&((s.t*20|0)%2===0));}
    else{const look=heroLook(),hs=Math.max(1.5,H/22),hyy=ground-14*hs;
      if(look.pet&&look.pet!=='none'){const p=PETS[look.pet];const ps=Math.max(1,hs*0.7);drawPet(c,look.pet,this.heroX()-6*hs-9*ps,p&&p.fly?hyy:ground-(p?p.rows.length*ps:0),ps,s.t);}
      drawHero(c,this.heroX()-6*hs+hdx,hyy+hy+(s.gone?-Math.abs(Math.sin(s.t*8))*H*0.12:0),hs,look,s.gone?'jump':a&&a.t<0.18?'runA':hy<0?'jump':'stand',s.t);
      if(a){const sw=hs*5;c.fillStyle=a.crit?'#ffe066':'#e8eefc';c.save();c.translate(this.heroX()+6*hs+hdx,hyy+hy+7*hs);c.rotate(-0.6+Math.sin(a.t*30)*0.8);c.fillRect(0,-hs*0.7,sw,hs*1.4);c.restore();}
      if(!s.gone){const gs=Math.max(1.5,H/20),gx=this.foeX()-6*gs+(s.foeHurt>0?rint(-3,3):0)-(f&&f.k==='lunge'?Math.sin(f.t/0.5*Math.PI)*W*0.06:0),
          gy=ground-12*gs-Math.sin(s.t*2)*3+s.foeLift-(f&&f.k==='slam'&&f.t<0.45?Math.sin(f.t/0.45*Math.PI)*H*0.3:0);
        drawGlitch(c,gx,gy,gs,s.form,s.t,s.foeHurt>0.2&&((s.t*20|0)%2===0));
        if(s.hp<0.67){c.strokeStyle='#1d1f33';c.lineWidth=Math.max(2,gs*0.5);c.beginPath();c.moveTo(gx+3*gs,gy+3*gs);c.lineTo(gx+5*gs,gy+5*gs);c.lineTo(gx+4*gs,gy+7*gs);c.lineTo(gx+6*gs,gy+9*gs);c.stroke();}
        if(s.hp<0.34){c.beginPath();c.moveTo(gx+9*gs,gy+2*gs);c.lineTo(gx+7*gs,gy+5*gs);c.lineTo(gx+9*gs,gy+6*gs);c.lineTo(gx+8*gs,gy+9*gs);c.stroke();
          if(Math.random()<0.2)s.fx.push({x:gx+rint(2,10)*gs,y:gy+rint(1,6)*gs,vx:rint(-10,10),vy:-rint(20,50),life:0.6,col:'#5d6385',sz:3});}}}
    // slashes
    for(const x of s.slashes){c.strokeStyle=x.col;c.globalAlpha=Math.min(1,x.life*5);c.lineWidth=Math.max(4,H*0.04);c.beginPath();
      if(x.up)c.arc(x.x,x.y+x.r*0.4,x.r,-2.6,-0.5);else c.arc(x.x,x.y,x.r,x.a0,x.a0+1.6);c.stroke();}c.globalAlpha=1;
    // bugs
    const ms=Math.max(2,Math.min(H,200)/22),bc=s.bugCol||BUG_COLS[0];
    if(s.sweep>0){c.globalAlpha=Math.min(1,s.sweep*3);c.fillStyle='#ffe066';c.fillRect(this.heroX(),ground-H*0.16,W,H*0.12);c.fillStyle='#ffffff';c.fillRect(this.heroX(),ground-H*0.11,W,H*0.03);c.globalAlpha=1;}
    for(const m of s.minions){if(m.dead)continue;const P=this.bugXY(m),bs=P.s,bx=P.x,by=P.y,fl=m.hurtT>0&&((s.t*20|0)%2===0);
      const pal=fl?{a:'#fff',g:'#fff',G:'#fff',W:'#fff',K:'#fff',M:'#fff'}:{a:bc[1],g:bc[1],G:bc[0],W:'#ffffff',K:'#1d1f33',M:'#1d1f33'};
      c.save();if(m.rot){const ox=bx+5*bs,oy=by+4.5*bs;c.translate(ox,oy);c.rotate(m.rot);c.translate(-ox,-oy);}
      if(m.type==='zip'){const f=Math.abs(Math.sin(s.t*30+m.ph));c.globalAlpha=0.6;c.fillStyle='#e0f7ff';
        [[3,-0.4],[7,0.4]].forEach(([wx,an])=>{c.beginPath();c.ellipse(bx+wx*bs,by+1.2*bs,2.6*bs,(0.5+f*1.4)*bs,an,0,Math.PI*2);c.fill();});c.globalAlpha=1;
        if(m.x>m.stop+2){c.fillStyle='#ffffff66';for(let i=0;i<3;i++)c.fillRect(bx+(10.5+i)*bs,by+(3+i*1.6)*bs,3*bs,0.4*bs);}}
      drawSprite(c,MINION,bx,by,bs,pal);drawSprite(c,MINION_LEGS[(m.ph|0)%2],bx,by+8*bs,bs,{g:pal.g});
      if(m.type==='armor'){c.fillStyle=fl?'#fff':'#c9cfdc';c.fillRect(bx+2*bs,by+1.6*bs,6*bs,1.4*bs);c.fillRect(bx+0.6*bs,by+3*bs,1*bs,2.4*bs);c.fillRect(bx+8.4*bs,by+3*bs,1*bs,2.4*bs);
        c.fillStyle='#5d6385';for(let i=0;i<3;i++)c.fillRect(bx+(2.8+i*2)*bs,by+2*bs,0.6*bs,0.6*bs);
        if(m.hp<m.max){c.strokeStyle='#1d1f33';c.lineWidth=Math.max(1.5,bs*0.35);c.beginPath();c.moveTo(bx+3.6*bs,by+1.6*bs);c.lineTo(bx+4.6*bs,by+2.3*bs);c.lineTo(bx+4*bs,by+3*bs);c.moveTo(bx+6.2*bs,by+1.6*bs);c.lineTo(bx+5.6*bs,by+2.6*bs);c.stroke();}}
      if(m.type==='king'){const cy=by-0.4*bs;c.fillStyle='#ffd23f';c.fillRect(bx+2.5*bs,cy+0.9*bs,5*bs,1.3*bs);
        [2.5,4.5,6.5].forEach(px=>{c.beginPath();c.moveTo(bx+px*bs,cy+1*bs);c.lineTo(bx+(px+0.5)*bs,cy-0.8*bs);c.lineTo(bx+(px+1)*bs,cy+1*bs);c.fill();});
        c.fillStyle='#ff4d6d';c.fillRect(bx+4.7*bs,cy+1.2*bs,0.7*bs,0.7*bs);c.fillStyle='#5ef2ff';c.fillRect(bx+3*bs,cy+1.3*bs,0.5*bs,0.5*bs);c.fillRect(bx+6.5*bs,cy+1.3*bs,0.5*bs,0.5*bs);}
      if(m.panic>0){c.fillStyle='#5ef2ff';c.fillRect(bx+9.4*bs,by+(2+(0.9-m.panic)*3)*bs,0.7*bs,1*bs);c.fillRect(bx-0.8*bs,by+(2.5+(0.9-m.panic)*3)*bs,0.7*bs,1*bs);}
      c.restore();
      if(m.max>1&&!m.fly){const pw=Math.max(5,bs*1.2),gap=3,tw=m.max*pw+(m.max-1)*gap,px0=bx+5*bs-tw/2,py=by-(m.type==='king'?2.4:1.4)*bs-6;
        for(let i=0;i<m.max;i++){c.fillStyle='#000a';c.fillRect(px0+i*(pw+gap)-1,py-1,pw+2,6);c.fillStyle=i<m.hp?'#3fdc6b':'#ffffff33';c.fillRect(px0+i*(pw+gap),py,pw,4);}}
      if(m.sayT>0&&H>80&&!m.fly){const fs=Math.max(10,Math.round(Math.min(H,200)*0.075));c.font=`700 ${fs}px Lexend,sans-serif`;const tw=c.measureText(m.say).width+10,sx=clamp(bx-2,2,W-tw-2),sy=by-(m.max>1?14:0);c.globalAlpha=Math.min(1,m.sayT*3);
        c.fillStyle='#ffffff';c.fillRect(sx,sy-fs-10,tw,fs+6);c.fillStyle='#1d1f33';c.textAlign='left';c.fillText(m.say,sx+5,sy-8);c.globalAlpha=1;}}
    for(const b of s.spits){c.fillStyle='#3fdc6b';c.beginPath();c.arc(b.x,b.y,Math.max(4,H*0.025),0,Math.PI*2);c.fill();c.fillStyle='#c8ffd4';c.fillRect(b.x-2,b.y-3,3,3);}
    {const left=s.minions.filter(m=>!m.dead).length,sq=s.squashed||0;if(left||sq){const fs=Math.max(11,Math.round(Math.min(H,200)*0.08)),tx=W*0.36,ty=fs+6;c.font=`800 ${fs}px "Pixelify Sans",monospace`;c.textAlign='center';
      const label=W<700?`BUGS ${left} · SQUASHED ${sq}`:left?`BUGS LEFT: ${left} · SQUASHED: ${sq}`:`SQUASHED: ${sq}`;const tw=c.measureText(label).width+18;c.fillStyle='#000a';c.fillRect(tx-tw/2,ty-fs-1,tw,fs+7);c.fillStyle=bc[0];c.fillText(label,tx,ty);}}
    if(s.shieldT>0){const al=Math.min(1,s.shieldT*1.5),sx=this.heroX()+(s.mech?H*0.36:H*0.2)+hdx,r=H*0.3;c.strokeStyle=`rgba(94,242,255,${al})`;c.lineWidth=4;c.fillStyle=`rgba(94,242,255,${al*0.18})`;
      c.beginPath();for(let i=0;i<6;i++){const an=Math.PI/3*i+Math.PI/6;c.lineTo(sx+Math.cos(an)*r*0.6,y-6+Math.sin(an)*r);}c.closePath();c.fill();c.stroke();}
    if(f&&f.k==='missile'&&f.p&&!f.done){c.fillStyle='#ff4d6d';c.fillRect(f.p.x-7,f.p.y-3,14,6);c.fillStyle='#ffe066';c.fillRect(f.p.x+7,f.p.y-2,6,4);s.fx.push({x:f.p.x+12,y:f.p.y,vx:30,vy:rint(-15,15),life:0.3,col:'#ffb627',sz:3});}
    for(const p of s.proj){if(p.dl>0)continue;
      if(p.k==='zap'){c.fillStyle='#5ef2ff';c.fillRect(p.x-6,p.y-3,12,6);c.fillStyle='#fff';c.fillRect(p.x-3,p.y-1.5,6,3);continue;}
      if(p.k==='rail'){c.globalAlpha=Math.max(0,p.life*4);c.fillStyle='#e9d5ff';c.fillRect(hx,y-H*0.12,fx-hx,4);c.fillStyle='#fff';c.fillRect(hx,y-H*0.12+1,fx-hx,2);c.globalAlpha=1;}
      else if(p.k==='slash'){c.strokeStyle=`rgba(255,255,255,${Math.min(1,p.life*2.5)})`;c.lineWidth=5;c.beginPath();c.arc(fx,y-10,H*0.25,-1,1);c.stroke();}
      else{const col=p.k==='plasma'?'#c084fc':p.k==='missile'?'#ff4d6d':p.k==='fist'?'#ffb627':'#5ef2ff',r=p.k==='plasma'?9:p.k==='fist'?8:4;
        c.fillStyle=col;c.fillRect(p.x-r,p.y-r/2,r*2,r);c.fillStyle='#fff';c.fillRect(p.x-r/2,p.y-r/4,r,r/2);c.globalAlpha=0.5;c.fillStyle=col;c.fillRect(p.x-r*3,p.y-r/4,r*2,r/2);c.globalAlpha=1;}}
    for(const q of s.fx){c.globalAlpha=Math.min(1,q.life*2);c.fillStyle=q.col;c.fillRect(q.x,q.y,q.sz,q.sz);}c.globalAlpha=1;
    // Glitch health bar
    if(!s.gone){const bw=Math.min(W*0.34,260),bx=W-bw-10,by=8,bh=Math.max(8,Math.min(14,H*0.08));c.fillStyle='#000a';c.fillRect(bx-3,by-3,bw+6,bh+6);
      c.fillStyle='#3a1020';c.fillRect(bx,by,bw,bh);c.fillStyle='#ffb627';c.fillRect(bx,by,bw*s.hpShow,bh);c.fillStyle=s.hpFlash>0?'#ffffff':(s.hp<0.34?'#ff4d6d':'#ff7b1c');c.fillRect(bx,by,bw*s.hp,bh);
      c.fillStyle='#0006';for(let i=1;i<10;i++)c.fillRect(bx+bw*i/10,by,2,bh);
      c.font=`800 ${Math.max(10,Math.round(bh))}px "Pixelify Sans",monospace`;c.textAlign='right';c.fillStyle='#fff';c.fillText(s.form.name+(s.mech?' MECH':''),bx+bw,by+bh+Math.max(12,bh+4));}
    const pw=Math.max(8,Math.min(14,W/60)),px=10,py=H-12;c.fillStyle='#ffffffaa';c.font='700 9px Lexend,sans-serif';c.textAlign='left';c.fillText('SUPER',px,py-3);
    for(let i=0;i<s.max;i++){c.fillStyle=i<s.pips?(s.pips>=s.max&&(s.t*6|0)%2?'#ffffff':'#ffc933'):'#ffffff33';c.fillRect(px+i*(pw+3),py,pw,6);}
    if(s.combo>=2){c.textAlign='left';const sz=Math.max(14,Math.round(Math.min(H,160)*0.17));c.font=`800 ${sz}px "Pixelify Sans",monospace`;c.lineWidth=4;c.strokeStyle='#000';
      c.strokeText('x'+s.combo,10,sz+12);c.fillStyle=s.combo>=5?'#ff7b1c':'#5ef2ff';c.fillText('x'+s.combo,10,sz+12);}
    for(const x of s.texts){const k=x.age/x.life,base=x.big?Math.max(16,Math.min(H,170)*0.22):Math.max(11,Math.min(H,170)*0.13),sz=Math.round(base*(x.big&&k<0.12?2.2-k*10:1));
      c.globalAlpha=k>0.7?(1-k)/0.3:1;c.font=`800 ${sz}px "Pixelify Sans",monospace`;c.textAlign='center';c.lineWidth=4;c.strokeStyle='#000';
      const yy=x.y-(x.big?0:k*30);c.strokeText(x.str,x.x,yy);c.fillStyle=x.col;c.fillText(x.str,x.x,yy);}
    c.globalAlpha=1;
    if(s.tauntT>0&&s.taunt&&!s.gone&&H>70){const fs=Math.max(10,Math.round(Math.min(H,160)*0.1));c.font=`600 ${fs}px Lexend,sans-serif`;const tw=c.measureText(s.taunt).width+16,bx2=Math.max(6,Math.min(W-tw-6,this.foeX()-tw+10)),by2=Math.max(36,H*0.2);
      c.globalAlpha=Math.min(1,s.tauntT*2);c.fillStyle='#ffffff';c.fillRect(bx2,by2,tw,fs+10);c.fillStyle='#1d1f33';c.textAlign='left';c.fillText(s.taunt,bx2+8,by2+fs+2);c.globalAlpha=1;}
    if(s.flash>0){c.globalAlpha=s.flash*0.6;c.fillStyle=s.flashCol;c.fillRect(-20,-20,W+40,H+40);c.globalAlpha=1;}
    c.restore();};
})();
