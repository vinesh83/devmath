/* ---------- overworld: kingdoms, castles, Glitch's fortress */
const MAP_W=480,MAP_H=320,MAP_S=5;
const MAP_POS={camp:{x:64,y:262},canyon:{x:130,y:196},docks:{x:98,y:80},forge:{x:236,y:64},castle:{x:270,y:178},tower:{x:392,y:98},fortress:{x:412,y:258}};
const NODE_A={camp:-0.3,canyon:2.5,docks:1.4,forge:2.3,castle:3.5,tower:2.7};
const FORTRESS={id:'fortress',name:'Glitch Fortress',sub:'The final battle',color:'#a855f7'};
function nodeXY(wid,i){const k=MAP_POS[wid],a=NODE_A[wid]+i*0.5,r=56-i*7;return{x:clamp(k.x+Math.cos(a)*r,14,MAP_W-14),y:clamp(k.y+Math.sin(a)*r*0.72,16,MAP_H-14)};}
function srand(seed){let s=seed%2147483647;if(s<=0)s+=2147483646;return()=>(s=s*16807%2147483647)/2147483647;}
const MapArt={cv:null,canvas(){if(this.cv)return this.cv;const W=MAP_W,H=MAP_H,cv=document.createElement('canvas');cv.width=W;cv.height=H;const c=cv.getContext('2d'),r=srand(42);
  const blobs=[[250,172,205,118],[100,80,78,58],[392,98,78,66],[66,262,58,42],[412,258,66,50],[180,250,90,50]];
  const isLand=(x,y)=>blobs.some(([cx,cy,rx,ry])=>((x-cx)/rx)**2+((y-cy)/ry)**2<1+(Math.sin(x*0.17)+Math.cos(y*0.13))*0.07);
  const mask=new Uint8Array(W*H);for(let y=0;y<H;y++)for(let x=0;x<W;x++)mask[y*W+x]=isLand(x,y)?1:0;const L=(x,y)=>mask[clamp(y,0,H-1)*W+clamp(x,0,W-1)];
  const PAL={grass:[[74,160,84],[66,148,76]],camp:[[98,178,92],[88,164,84]],canyon:[[214,128,74],[200,114,64]],docks:[[230,200,146],[216,186,132]],
    forge:[[74,64,68],[62,54,58]],castle:[[150,132,204],[138,120,190]],tower:[[36,112,62],[30,98,54]],fortress:[[54,32,74],[46,26,64]]};
  const near=(x,y)=>{let best='grass',bd=1e9;for(const id in MAP_POS){const k=MAP_POS[id],dd=(x-k.x)**2+(y-k.y)**2;if(dd<bd){bd=dd;best=id;}}return bd<62*62?best:'grass';};
  const img=c.createImageData(W,H),d=img.data;
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=(y*W+x)*4;let col;
    if(!L(x,y)){const shallow=L(x+3,y)||L(x-3,y)||L(x,y+3)||L(x,y-3);col=shallow?[64,120,200]:(r()<0.05?[46,82,170]:[30,58,138]);}
    else{const shore=!(L(x+1,y)&&L(x-1,y)&&L(x,y+1)&&L(x,y-1));col=shore?[232,214,154]:PAL[near(x,y)][r()<0.5?0:1];}
    d[i]=col[0];d[i+1]=col[1];d[i+2]=col[2];d[i+3]=255;}
  c.putImageData(img,0,0);
  const px=(x,y,w,h,col)=>{c.fillStyle=col;c.fillRect(Math.round(x),Math.round(y),w,h);};
  const tree=(x,y,dark)=>{px(x-1,y+3,2,2,'#5b3a1e');px(x-3,y+1,6,2,dark?'#14532d':'#166534');px(x-2,y-1,4,2,dark?'#166534':'#15803d');px(x-1,y-3,2,2,'#22c55e');};
  for(let i=0;i<1100;i++){const x=r()*W,y=r()*H;if(!L(x|0,y|0))continue;const b=near(x,y),q=r();
    if(b==='tower'&&q<0.8)tree(x,y,true);else if(b==='grass'&&q<0.14)tree(x,y,false);else if(b==='camp'&&q<0.08)tree(x,y,false);
    else if(b==='canyon'&&q<0.14){px(x-4,y-3,9,4,'#b45309');px(x-3,y-4,7,1,'#d97706');px(x-4,y+1,9,1,'#92400e');}
    else if(b==='castle'&&q<0.1){px(x,y-2,2,4,'#e9d5ff');px(x-1,y-1,4,2,'#c084fc');}
    else if(b==='forge'&&q<0.08)px(x-1,y,3,1,'#f97316');
    else if(b==='fortress'&&q<0.08){px(x,y-3,1,4,'#1f1029');px(x-2,y-2,5,1,'#1f1029');}}
  const v=MAP_POS.forge;for(let i=0;i<18;i++)px(v.x+22-i,v.y-34+i,i*2+4,1,'#3f3a3d');px(v.x+19,v.y-36,8,2,'#f97316');px(v.x+21,v.y-34,3,12,'#ea580c');px(v.x+25,v.y-26,2,9,'#f97316');
  const dk=MAP_POS.docks;for(let i=0;i<3;i++)px(dk.x-62+i*14,dk.y-46-i*2,3,18,'#7c4a22');
  const road=(a,b)=>{const A=MAP_POS[a],B=MAP_POS[b],n=Math.hypot(B.x-A.x,B.y-A.y)/3;for(let i=0;i<=n;i++){const t=i/n,x=A.x+(B.x-A.x)*t,y=A.y+(B.y-A.y)*t+Math.sin(t*Math.PI)*10;if(i%2===0)px(x-1,y-1,3,3,'#e8d39a');}};
  [['camp','canyon'],['canyon','docks'],['docks','forge'],['forge','castle'],['canyon','castle'],['castle','tower'],['castle','fortress'],['tower','fortress']].forEach(([a,b])=>road(a,b));
  for(const id of ['canyon','docks','forge','castle','tower']){let prev=nodeXY(id,0);for(let i=1;i<=5;i++){const nx=i<5?nodeXY(id,i):MAP_POS[id],n=Math.hypot(nx.x-prev.x,nx.y-prev.y)/3;
    for(let j=0;j<=n;j++){const t=j/n;if(j%2===0)px(prev.x+(nx.x-prev.x)*t-1,prev.y+(nx.y-prev.y)*t-1,2,2,'#fff7d6');}prev=nx;}}
  const castle=(id,roof)=>{const k=MAP_POS[id],x=k.x-12,y=k.y-18;px(x,y+6,24,14,'#9ca3af');px(x+2,y+8,20,12,'#d1d5db');for(let i=0;i<6;i++)px(x+i*4,y+4,2,2,'#9ca3af');
    px(x-3,y,6,20,'#9ca3af');px(x+21,y,6,20,'#9ca3af');px(x-4,y-3,8,3,roof);px(x+20,y-3,8,3,roof);px(x-2,y-6,4,3,roof);px(x+22,y-6,4,3,roof);px(x+9,y+12,6,8,'#4b5563');};
  castle('canyon','#e8643a');castle('docks','#3fa7ff');castle('forge','#ff9f1c');castle('castle','#9b6bff');castle('tower','#3fbf5f');
  const cp=MAP_POS.camp;[[0,0],[16,6],[-14,8]].forEach(([dx,dy],i)=>{const x=cp.x+dx,y=cp.y+dy;for(let j=0;j<6;j++)px(x-j,y-6+j,2*j+2,1,i?'#f59e0b':'#ef4444');px(x-1,y-1,2,2,'#7c2d12');});
  const f=MAP_POS.fortress;px(f.x-16,f.y-14,32,20,'#1f1029');px(f.x-20,f.y-24,8,30,'#2e1065');px(f.x+12,f.y-24,8,30,'#2e1065');px(f.x-5,f.y-34,10,40,'#3b0764');
  px(f.x-2,f.y-38,4,4,'#ff4d6d');px(f.x-3,f.y-2,6,8,'#ff4d6d');for(let i=0;i<5;i++)px(f.x-16+i*7,f.y-17,3,3,'#3b0764');
  this.cv=cv;return cv;}};
let mapAnim=null;
function renderMap(){const S=$('#scr-map');S.innerHTML='';const look=heroLook(),SC=MAP_S;
  const ow=el('div',{class:'ow'}),inner=el('div',{class:'ow-inner',style:`width:${MAP_W*SC}px;height:${MAP_H*SC}px`});
  const artC=el('canvas',{class:'ow-art',width:MAP_W,height:MAP_H,style:`width:${MAP_W*SC}px;height:${MAP_H*SC}px`});artC.getContext('2d').drawImage(MapArt.canvas(),0,0);inner.append(artC);
  for(let i=0;i<5;i++)inner.append(el('div',{class:'ow-cloud',style:`top:${60+i*300}px;animation-delay:${-i*13}s;animation-duration:${55+i*9}s`}));
  const f=MAP_POS.fortress;inner.append(el('div',{class:'ow-storm',style:`left:${(f.x-40)*SC}px;top:${(f.y-70)*SC}px;width:${80*SC}px;height:${50*SC}px`}));
  const freed=[];
  WORLDS.forEach(w=>{const pr=state.prog[w.id]||{done:0,stars:{}},k=MAP_POS[w.id];
    for(let i=0;i<5;i++){const p=nodeXY(w.id,i),st=pr.stars[i]||0,open=i<=pr.done;
      inner.append(el('button',{class:'ow-node '+(st?'done':open?'open':'locked'),type:'button',style:`left:${p.x*SC}px;top:${p.y*SC}px;--wc:${w.color}`,'aria-label':`${w.name} level ${i+1}`,
        onclick:()=>{Snd.init();if(!open){owToast('Beat the level before this one first!');return;}walkTo(p,()=>{state.mapAt={w:w.id,i};saveState();startLevel(w,i);});}},String(i+1),el('span',{class:'st'},'★'.repeat(st))));}
    const beaten=(pr.stars[5]||0)>0;if(beaten)freed.push(w.id);
    inner.append(el('button',{class:'ow-castle',type:'button',style:`left:${(k.x-16)*SC}px;top:${(k.y-26)*SC}px;width:${32*SC}px;height:${30*SC}px`,'aria-label':w.name,
      onclick:()=>{Snd.init();Cine.trailer(w).then(()=>kingdomCard(w));}},
      el('span',{class:'ow-label',style:'--wc:'+w.color},w.name,el('small',null,beaten?'Freed!':pr.done>=5?'Mech boss ready!':`${Math.min(pr.done,5)}/5 levels`))));
    if(beaten)inner.append(el('div',{class:'ow-flag',style:`left:${(k.x+10)*SC}px;top:${(k.y-46)*SC}px;--fc:${(CATALOG.outfit.find(o=>o.id===look.outfit)||CATALOG.outfit[0]).B}`}));});
  const cp=MAP_POS.camp;
  inner.append(el('button',{class:'ow-castle',type:'button',style:`left:${(cp.x-20)*SC}px;top:${(cp.y-12)*SC}px;width:${40*SC}px;height:${22*SC}px`,'aria-label':'Training Camp',onclick:()=>{Snd.init();campCard();}},
    el('span',{class:'ow-label',style:'--wc:#ff6fb5'},'Training Camp',el('small',null,packs.length?`${packs.filter(p=>!state.packsDone[p.id]).length} new homework missions`:'Homework missions'))));
  packs.forEach((p,i)=>{const q=nodeXY('camp',i),done=!!state.packsDone[p.id];inner.append(el('button',{class:'ow-node pack '+(done?'done':'open'),type:'button',style:`left:${q.x*SC}px;top:${q.y*SC}px;--wc:#ff6fb5`,'aria-label':p.title||'Homework mission',
    onclick:()=>{Snd.init();walkTo(q,()=>{state.mapAt={w:'camp',i};saveState();startPack(p);});}},'H'+(i+1),el('span',{class:'st'},done?'★':'NEW')));});
  inner.append(el('button',{class:'ow-castle',type:'button',style:`left:${(f.x-22)*SC}px;top:${(f.y-40)*SC}px;width:${44*SC}px;height:${48*SC}px`,'aria-label':'Glitch Fortress',
    onclick:()=>{Snd.init();Cine.trailer(FORTRESS).then(()=>fortressCard(freed.length));}},el('span',{class:'ow-label',style:'--wc:#a855f7'},'Glitch Fortress',el('small',null,`${freed.length}/5 kingdoms freed`))));
  const at=state.mapAt&&state.mapAt.w?nodeXY(state.mapAt.w,state.mapAt.i||0):{x:cp.x+22,y:cp.y-16};
  const hero=el('canvas',{class:'ow-hero',width:48,height:56});placeHero(hero,at.x,at.y);inner.append(hero);
  ow.append(inner);
  const av=el('canvas',{width:72,height:72,class:'ow-av'}),pend=(state.prizes||[]).filter(p=>p.status==='pending').length;
  const hud=el('div',{class:'ow-hud'},av,el('div',{class:'ow-name'},el('b',null,(state.hero&&state.hero.name)||'Hero'),el('span',null,`Mech power ${mechPower()} · ${glitchForm().name} is out there`)),
    el('span',{class:'chip',title:'Days in a row'},el('span',{class:'flame'}),String(state.streak.n||0)),el('span',{class:'chip'},el('span',{class:'coin-ico'}),String(state.coins)),
    el('button',{class:'icon-btn',type:'button',onclick:()=>openMechBay(null)},'Mech Bay'),
    el('button',{class:'icon-btn',type:'button',onclick:()=>{renderShop();show('scr-shop');}},'Shop'),
    el('button',{class:'icon-btn',type:'button',onclick:()=>showReport()},'Report'),
    el('button',{class:'icon-btn'+(state.mute?' off':''),type:'button','aria-label':'Sound effects',onclick:e=>{state.mute=!state.mute;Snd.levels();saveState();e.currentTarget.classList.toggle('off',state.mute);}},'Sound'),
    el('button',{class:'icon-btn'+(state.musicOff?' off':''),type:'button','aria-label':'Music',onclick:e=>{state.musicOff=!state.musicOff;Snd.init();Snd.levels();saveState();e.currentTarget.classList.toggle('off',state.musicOff);}},'Music'));
  const q=questToday();
  const bottom=el('div',{class:'ow-bottom'},
    el('button',{class:'quest ow-quest',type:'button',onclick:()=>{Snd.init();startQuest();}},el('div',null,el('h2',null,q.done?'Quest complete!':'Today’s Quest'),el('p',null,q.done?'Play again for practice. New quest tomorrow.':'About 12 minutes · loot chest + streak'))),
    el('div',{class:'ow-side'},pend?el('div',{class:'ow-prize'},'Prize waiting! Show a grown-up.'):null,
      cfg.message?el('button',{class:'icon-btn',type:'button',onclick:()=>overlay(el('div',{class:'modal'},el('h2',null,'Message from HQ'),el('p',null,cfg.message),el('div',{class:'btns'},el('button',{class:'btn btn-green',type:'button',onclick:()=>overlay(null)},'Got it ▸'))))},'HQ message'):null));
  S.append(ow,hud,bottom,el('div',{class:'ow-toast',id:'owToast',hidden:true}));
  cancelAnimationFrame(mapAnim);let t=0;const hc=hero.getContext('2d'),ac=av.getContext('2d');hc.imageSmoothingEnabled=false;ac.imageSmoothingEnabled=false;
  const loop=()=>{if(S.hidden||!hero.isConnected)return;t+=0.016;hc.clearRect(0,0,48,56);drawHero(hc,3,4,3.5,look,hero.dataset.walk?((t*10|0)%2?'runA':'runB'):'stand',t);
    ac.clearRect(0,0,72,72);drawHero(ac,22,12,3,look,'stand',t);if(look.pet&&look.pet!=='none'&&PETS[look.pet])drawPet(ac,look.pet,2,PETS[look.pet].fly?18:44,2,t);mapAnim=requestAnimationFrame(loop);};
  mapAnim=requestAnimationFrame(loop);
  requestAnimationFrame(()=>{ow.scrollLeft=at.x*SC-ow.clientWidth/2;ow.scrollTop=at.y*SC-ow.clientHeight/2;});}
function placeHero(h,x,y){h.style.left=(x*MAP_S-24)+'px';h.style.top=(y*MAP_S-54)+'px';h.dataset.x=x;h.dataset.y=y;}
function walkTo(p,done){const h=document.querySelector('.ow-hero');if(!h||RM){done();return;}const x0=+h.dataset.x,y0=+h.dataset.y,dur=clamp(Math.hypot(p.x-x0,p.y-y0)*9,250,1100);
  const ow=document.querySelector('.ow'),t0=performance.now();h.dataset.walk='1';h.style.transform=p.x<x0?'scaleX(-1)':'';
  const step=now=>{const k=Math.min(1,(now-t0)/dur),x=x0+(p.x-x0)*k,y=y0+(p.y-y0)*k;placeHero(h,x,y);
    if(ow){const hx=x*MAP_S,hy=y*MAP_S;if(hx<ow.scrollLeft+80||hx>ow.scrollLeft+ow.clientWidth-80)ow.scrollLeft=hx-ow.clientWidth/2;if(hy<ow.scrollTop+140||hy>ow.scrollTop+ow.clientHeight-160)ow.scrollTop=hy-ow.clientHeight/2;}
    if(k<1)requestAnimationFrame(step);else{delete h.dataset.walk;Snd.tap();setTimeout(done,120);}};
  requestAnimationFrame(step);}
function owToast(msg){const t=$('#owToast');if(!t)return;t.textContent=msg;t.hidden=false;clearTimeout(owToast.tm);owToast.tm=setTimeout(()=>{t.hidden=true;},1800);}
function kingdomCard(w){const pr=state.prog[w.id]||{done:0,stars:{}},bossOpen=pr.done>=5;
  overlay(el('div',{class:'modal kcard',style:'--wc:'+w.color},el('h2',null,w.name),el('p',null,w.sub),
    el('div',{class:'klevels'},[0,1,2,3,4].map(i=>{const open=i<=pr.done,st=pr.stars[i]||0;return el('button',{class:'klev'+(open?'':' locked'),type:'button',disabled:!open,onclick:()=>{overlay(null);state.mapAt={w:w.id,i};saveState();startLevel(w,i);}},
        el('b',null,'Level '+(i+1)),el('span',null,st?'★'.repeat(st):open?'Play':'Locked'));}),
      el('button',{class:'klev boss'+(bossOpen?'':' locked'),type:'button',disabled:!bossOpen,onclick:()=>{overlay(null);startLevel(w,5);}},el('b',null,'MECH BOSS'),el('span',null,bossOpen?(pr.stars[5]?'★'.repeat(pr.stars[5]):'Fight '+glitchForm().name):'Beat levels 1–5'))),
    el('div',{class:'btns'},el('button',{class:'btn btn-dark',type:'button',onclick:()=>overlay(null)},'Close'))));}
function campCard(){overlay(el('div',{class:'modal kcard',style:'--wc:#ff6fb5'},el('h2',null,'Training Camp'),el('p',null,'Missions built from your real homework.'),
  packs.length?el('div',{class:'klevels'},packs.map((p,i)=>el('button',{class:'klev',type:'button',onclick:()=>{overlay(null);startPack(p);}},el('b',null,p.title||('Mission '+(i+1))),el('span',null,state.packsDone[p.id]?'★ Done':'NEW')))):
    el('p',null,'No homework missions yet. Ask a grown-up to send your homework to the coach!'),
  el('div',{class:'btns'},el('button',{class:'btn btn-dark',type:'button',onclick:()=>overlay(null)},'Close'))));}
function fortressCard(n){overlay(el('div',{class:'modal kcard',style:'--wc:#a855f7'},el('h2',null,'Glitch Fortress'),
  el('p',null,n>=5?'All five kingdoms are free. The final battle is coming soon!':`Free all five kingdoms to open the gates. ${n} of 5 freed so far.`),
  el('p',null,`${glitchForm().name} gets stronger every week. Keep checking your work!`),
  el('div',{class:'btns'},el('button',{class:'btn btn-dark',type:'button',onclick:()=>overlay(null)},'Close'))));}

/* ---------- Mech Bay */
let bayTab='head',bayLaunch=null,bayRaf=null;
function openMechBay(onLaunch){bayLaunch=onLaunch||null;renderMechBay();show('scr-mech');}
function renderMechBay(){const S=$('#scr-mech');S.innerHTML='';const m=mechCfg(),I=inv();
  const cv=el('canvas',{width:260,height:260,class:'bay-cv'}),list=el('div',{class:'bay-items'});
  const tabs=[['head','Head'],['arms','Arms'],['legs','Legs'],['cannon','Cannon'],['paint','Paint'],['super','Super']];
  if(bayTab==='super')SUPERS.forEach(([id,name,r])=>{const own=I.supers.includes(id);list.append(el('button',{class:'bay-it'+(m.super===id?' eq':'')+(own?'':' lock'),type:'button',style:'--rc:'+RARITY[r].c,disabled:!own,
      onclick:()=>{state.mech=Object.assign(mechCfg(),{super:id});saveState();Snd.tap();renderMechBay();}},lootIcon({type:'super',id},90),el('b',null,own?name:'???'),el('span',null,own?(m.super===id?'Equipped':RARITY[r].n):'Find it in chests')));});
  else PARTS[bayTab].forEach(([id,name,r,pw])=>{const own=I.parts.includes(bayTab+':'+id),ic=el('canvas',{width:90,height:90}),c=ic.getContext('2d');c.imageSmoothingEnabled=false;
    drawMech(c,9,4,3.2,Object.assign({},m,{[bayTab]:id}),0,false,!own);
    list.append(el('button',{class:'bay-it'+(m[bayTab]===id?' eq':'')+(own?'':' lock'),type:'button',style:'--rc:'+RARITY[r].c,disabled:!own,
      onclick:()=>{state.mech=Object.assign(mechCfg(),{[bayTab]:id});saveState();Snd.tap();renderMechBay();}},ic,el('b',null,own?name:'???'),el('span',null,own?(m[bayTab]===id?'Equipped':`${RARITY[r].n} · +${pw}`):'Find it in chests')));});
  const sname=(SUPERS.find(s=>s[0]===m.super)||SUPERS[0])[1];
  S.append(el('header',{class:'map-top'},el('button',{class:'icon-btn',type:'button',onclick:()=>{bayLaunch=null;renderMap();show('scr-map');}},'◂ Map'),el('div',{class:'who'},el('h1',null,'Mech Bay')),
      el('span',{class:'chip'},el('span',{class:'coin-ico'}),String(state.coins))),
    el('div',{class:'bay'},el('div',{class:'bay-left'},cv,el('div',{class:'bay-power'},el('b',null,'POWER '+mechPower(m)),el('div',{class:'bay-bar'},el('i',{style:`width:${Math.min(100,mechPower(m)/86*100)}%`}))),
        el('p',null,'Super move: ',el('b',null,sname)),
        bayLaunch?el('button',{class:'btn btn-gold bay-launch',type:'button',onclick:()=>{const go=bayLaunch;bayLaunch=null;Snd.init();go();}},'LAUNCH ▸'):el('p',{class:'bay-tip'},'Win mech parts in loot chests. Equip them here before boss fights.')),
      el('div',{class:'bay-right'},el('div',{class:'tabs'},tabs.map(([k,n])=>el('button',{class:'tab'+(bayTab===k?' on':''),type:'button',onclick:()=>{bayTab=k;renderMechBay();}},n))),list)));
  cancelAnimationFrame(bayRaf);const c=cv.getContext('2d');c.imageSmoothingEnabled=false;let t=0;const steam=[];
  const loop=()=>{if(S.hidden||!cv.isConnected)return;t+=0.016;const g=c.createRadialGradient(130,150,10,130,150,140);g.addColorStop(0,'#2c3264');g.addColorStop(1,'#151833');c.fillStyle=g;c.fillRect(0,0,260,260);
    c.fillStyle='#0b0d1f';c.fillRect(30,226,200,10);drawMech(c,34,18,8,mechCfg(),t,false,false);
    if(Math.random()<0.2)steam.push({x:rint(40,220),y:226,life:1});for(const s of steam){s.life-=0.016;s.y-=0.6;c.globalAlpha=Math.max(0,s.life*0.4);c.fillStyle='#d7deeb';c.fillRect(s.x,s.y,4,4);}c.globalAlpha=1;
    for(let i=steam.length-1;i>=0;i--)if(steam[i].life<=0)steam.splice(i,1);bayRaf=requestAnimationFrame(loop);};
  bayRaf=requestAnimationFrame(loop);}

