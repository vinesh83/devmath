/* =========================================================
   Rides (cars and motorbikes) and Dog Gear: big things to save coins for.
   He rides his vehicle on the map; his dog wears its gear everywhere it appears.
   Tapping something he can't afford yet makes it his saving goal, shown on the map.
   ========================================================= */
const RIDES=[['none','Walking',0],['scooter','Kick Scooter',120],['bmx','BMX Bike',200],['dirt','Dirt Bike',350],['kart','Go-Kart',450],['moto','Motorbike',600],
  ['sports','Sports Car',800],['police','Police Car',1000],['hover','Hover Bike',1200],['race','Race Car',1500],['monster','Monster Truck',2000],['rocket','Rocket Car',3000],['gold','Golden Supercar',5000]];
const DOG_GEAR=[ // [id, name, price, slot]
  ['collar','Red Collar',40,'neck'],['bandana','Bandana',60,'neck'],['bowtie','Bow Tie',60,'neck'],['spiked','Spiked Collar',90,'neck'],['cape','Super Cape',150,'neck'],['chain','Gold Chain',220,'neck'],
  ['nerd','Nerd Glasses',50,'face'],['monocle','Fancy Monocle',70,'face'],['shades','Sunglasses',80,'face'],['starglasses','Star Glasses',100,'face'],
  ['party','Party Hat',70,'hat'],['flower','Flower Crown',80,'hat'],['santa','Santa Hat',90,'hat'],['propeller','Propeller Cap',110,'hat'],['cowboy','Cowboy Hat',120,'hat'],
  ['pirate','Pirate Hat',140,'hat'],['crown','Royal Crown',160,'hat'],['viking','Viking Helmet',160,'hat'],['wizard','Wizard Hat',180,'hat'],
  // new: more hats, face gear, neck gear, and a back slot (packs and wings)
  ['chef','Chef Hat',90,'hat'],['headset','Gamer Headset',100,'hat'],['knight','Knight Helmet',130,'hat'],['unicorn','Unicorn Horn',150,'hat'],['halo','Golden Halo',200,'hat'],
  ['hearts','Heart Glasses',80,'face'],['goggles','Pilot Goggles',90,'face'],['mask','Hero Mask',110,'face'],
  ['scarf','Cozy Scarf',70,'neck'],['medal','Gold Medal',160,'neck'],
  ['backpack','Adventure Pack',120,'back'],['angel','Angel Wings',260,'back'],['wings','Dragon Wings',300,'back'],['jetpack','Jetpack',350,'back']];
CATALOG.ride=RIDES.map(([id,name,price])=>({id,name,price}));
CATALOG.dogacc=DOG_GEAR.map(([id,name,price,slot])=>({id,name,price,slot}));

/* ---------- dog gear: drawn on whatever dog he has, placed from the dog's own eye and head */
const DogGear={
  PAL:{R:'#ff4d6d',Y:'#ffd23f',B:'#3fa7ff',P:'#c084fc',K:'#1d1f33',W:'#ffffff',G:'#3fae5a',O:'#ff7b1c',N:'#8a5a2a',S:'#c9cfdc',Q:'#ff8fa3'},
  ART:{ // hats sit on the head top (bottom-center anchor); face items center on the eye; neck items hang just behind the head
    party:['..Y..','..Q..','.QYQ.','QQQQQ'],crown:['Y.Y.Y','YYYYY','YRYBY'],cowboy:['.NNN.','.NNN.','NNNNNNN'],propeller:['RRYBB','..Y..','.RRB.','RRRBB'],
    wizard:['...P.','..PP.','.PYP.','PPPPP'],viking:['W...W','WSSSW','SSSSS'],flower:['R.Y.Q','GGGGG'],pirate:['.KKK.','KKWKK','KKKKKKK'],santa:['....W','.RRR.','RRRR.','WWWWW'],
    shades:['KKKKK'],starglasses:['YKY','KYK'],monocle:['.Y.','Y.Y','.Y.'],nerd:['KKKK','K..K'],
    collar:['R','R','Y'],spiked:['W','K','W','K'],bandana:['RRR','.RR','..R'],bowtie:['B.B','BBB','B.B'],chain:['Y','Y','Y','O'],cape:['.RRRR','RRRRRR','RRRRRRR'],
    chef:['.WWW.','WWWWW','.WWW.','.SSS.'],headset:['.KKK.','K...K','R...R'],knight:['..R..','.SSS.','SSSSS','SKKKS'],unicorn:['..Y..','..Q..','..Y..','.QYQ.'],halo:['.YYY.','Y...Y','.YYY.','.....'],
    hearts:['R.R','RRR','.R.'],goggles:['BNB'],mask:['KKKKK','KWKWK'],scarf:['GGG','.GG','.G.'],medal:['B','B','YY','YY'],
    backpack:['NNNN','NYYN','NNNN'],angel:['W....W','WW..WW','.WWWW.'],wings:['G....G','GG..GG','.GGGG.'],jetpack:['SRRS','SRRS','O..O','Y..Y']},
  anchors:{},
  anchor(id){if(this.anchors[id])return this.anchors[id];const rows=PETS[id].rows;let ex=-1,ey=-1;
    for(let r=0;r<rows.length&&ex<0;r++){const c=rows[r].indexOf('K');if(c>=0){ex=c;ey=r;}}
    if(ex<0){const w=rows[0].length;ex=Math.floor(w*0.8);ey=Math.floor(rows.length*0.3);}
    let top=ey;for(let r=0;r<=ey;r++){if([ex-1,ex,ex+1].some(c=>rows[r][c]&&rows[r][c]!=='.')){top=r;break;}}
    // the back: first row where the body is wide
    let back=ey+1;for(let r=0;r<rows.length;r++){if(rows[r].replace(/\./g,'').length>=rows[0].length*0.6){back=r;break;}}
    return this.anchors[id]={ex,ey,top,back};},
  draw(c,id,x,y,s,acc){if(!acc||!PETS[id]||!PETS[id].dog)return;const A=this.anchor(id);
    const put=(art,cx,cy,mode)=>{const w=Math.max(...art.map(r=>r.length)),h=art.length;let ox,oy;
      if(mode==='hat'){ox=cx-Math.floor(w/2);oy=cy-h;}else if(mode==='face'){ox=cx-Math.floor(w/2);oy=cy-Math.floor(h/2);}else{ox=cx-w+1;oy=cy;}
      drawSprite(c,art,x+ox*s,y+oy*s,s,this.PAL);};
    if(acc.neck==='cape')put(this.ART.cape,A.ex-2,A.back-1,'neck');else if(acc.neck&&this.ART[acc.neck])put(this.ART[acc.neck],A.ex-1,A.ey+1,'neck');
    if(acc.face&&this.ART[acc.face])put(this.ART[acc.face],A.ex,A.ey,'face');
    if(acc.hat&&this.ART[acc.hat])put(this.ART[acc.hat],A.ex,A.top,'hat');
    // back gear sits on the middle of the back
    if(acc.back&&this.ART[acc.back]){const w=PETS[id].rows[0].length;put(this.ART[acc.back],Math.floor(w*0.38),A.back,'hat');}}};
// his own dog wears its gear everywhere drawPet is used
{const _dp=drawPet;drawPet=function(ctx,id,x,y,s,t){_dp(ctx,id,x,y,s,t);const p=PETS[id];
  if(p&&p.dog&&state.hero&&state.hero.pet===id&&state.hero.dogAcc){const bob=Math.round(Math.sin((t||0)*(p.fly?5:3))*(p.fly?3:1));DogGear.draw(ctx,id,x,y+bob,s,state.hero.dogAcc);}};}

/* ---------- rides: drawn with shapes in a 26 x 14 box (s = one cell), facing right; the hero rides on top */
const Rides={
  COL:{scooter:'#5ef2ff',bmx:'#ff4d6d',dirt:'#3fdc6b',kart:'#ffb627',moto:'#2a2a3a',sports:'#ff2d4d',police:'#f4f7fb',hover:'#c084fc',race:'#3fa7ff',monster:'#ff7b1c',rocket:'#8a94ad',gold:'#ffd23f'},
  name(id){const r=RIDES.find(x=>x[0]===id);return r?r[1]:'';},
  wheel(c,x,y,r,t){c.fillStyle='#1d1f33';c.beginPath();c.arc(x,y,r,0,6.28);c.fill();c.fillStyle='#8a94ad';c.beginPath();c.arc(x,y,r*0.45,0,6.28);c.fill();
    c.strokeStyle='#d7deeb';c.lineWidth=Math.max(1,r*0.15);const a=t*8;c.beginPath();c.moveTo(x+Math.cos(a)*r*0.45,y+Math.sin(a)*r*0.45);c.lineTo(x-Math.cos(a)*r*0.45,y-Math.sin(a)*r*0.45);c.stroke();},
  // draws the ride with the hero aboard; (x,y) = top-left, total box 26s wide x 22s tall (hero included)
  draw(c,id,x,y,s,look,t,moving){const col=this.COL[id]||'#ff4d6d',g=y+22*s,W=(a,b)=>this.wheel(c,x+a*s,g-b*s,b*s,moving?t:0);c.save();
    const hero=(hx,hy,hs,frame)=>drawHero(c,x+hx*s,y+hy*s,hs*s,look,frame||'stand',t);
    if(id==='scooter'){hero(7,5.2,1,'stand');c.fillStyle=col;c.fillRect(x+4*s,g-3.4*s,15*s,1.4*s);c.fillRect(x+18*s,g-15*s,1.4*s,12*s);c.fillRect(x+16*s,g-15.4*s,5*s,1.2*s);W(5,2);W(19,2);}
    else if(id==='bmx'){W(5.5,3.5);W(19.5,3.5);c.strokeStyle=col;c.lineWidth=1.3*s;c.beginPath();c.moveTo(x+5.5*s,g-3.5*s);c.lineTo(x+11*s,g-9*s);c.lineTo(x+18*s,g-9*s);c.lineTo(x+19.5*s,g-3.5*s);c.moveTo(x+11*s,g-9*s);c.lineTo(x+13*s,g-3.5*s);c.lineTo(x+5.5*s,g-3.5*s);c.moveTo(x+18*s,g-9*s);c.lineTo(x+17*s,g-13*s);c.stroke();
      c.fillStyle='#1d1f33';c.fillRect(x+9*s,g-10.4*s,4*s,1.2*s);c.fillRect(x+15.5*s,g-13.6*s,4*s,1.2*s);hero(6,-2.2,1,'runA');}
    else if(id==='dirt'||id==='moto'){const big=id==='moto';hero(7,big?-0.6:-1.4,1,'runA');W(5,big?3.6:3.8);W(21,big?3.6:3.8);c.fillStyle=col;c.fillRect(x+7*s,g-9*s,12*s,4*s);c.fillRect(x+17*s,g-12*s,3*s,4*s);
      c.fillStyle='#1d1f33';c.fillRect(x+8*s,g-10.2*s,7*s,1.6*s);c.fillStyle=big?'#d7deeb':'#ffffff';c.fillRect(x+3*s,g-6.5*s,5*s,1.2*s);c.fillRect(x+19*s,g-13.5*s,3*s,1.2*s);if(!big){c.fillStyle='#ffffff';c.font=`800 ${2.4*s}px sans-serif`;c.fillText('7',x+11*s,g-6*s);}}
    else if(id==='hover'){const b=Math.sin(t*4)*s;hero(7,-1.2+b/s,1,'runA');c.fillStyle='#5ef2ff';c.globalAlpha=0.5+0.3*Math.sin(t*12);c.fillRect(x+4*s,g-2.2*s+b,18*s,1.4*s);c.globalAlpha=1;
      c.fillStyle=col;c.beginPath();c.ellipse(x+13*s,g-6.5*s+b,10*s,2.6*s,0,0,6.28);c.fill();c.fillStyle='#1d1f33';c.fillRect(x+8*s,g-9.5*s+b,6*s,1.6*s);c.fillStyle='#ffe066';c.fillRect(x+21*s,g-7.5*s+b,2*s,1.6*s);}
    else if(id==='kart'){hero(8,4.6,0.95,'stand');c.fillStyle=col;c.fillRect(x+3*s,g-6*s,21*s,3.5*s);c.fillRect(x+19*s,g-8*s,5*s,2*s);c.fillStyle='#1d1f33';c.fillRect(x+16*s,g-10*s,1*s,4*s);c.fillRect(x+15*s,g-10.5*s,3*s,1*s);W(6,2.6);W(21,2.2);}
    else{ // cars
      const mon=id==='monster',lift=mon?6:0;hero(8,mon?-1.6:4.4,0.95,'stand');
      c.fillStyle=col;c.fillRect(x+2*s,g-(9+lift)*s,23*s,5*s);c.fillRect(x+6*s,g-(12+lift)*s,9*s,3.2*s);c.fillStyle='#bfe8ff';c.fillRect(x+15*s,g-(11.6+lift)*s,3.2*s,2.6*s);
      c.fillStyle='#1d1f33';c.fillRect(x+2*s,g-(5+lift)*s,23*s,1*s);c.fillStyle='#ffe066';c.fillRect(x+23.5*s,g-(8.5+lift)*s,1.5*s,1.4*s);c.fillStyle='#ff4d6d';c.fillRect(x+2*s,g-(8.5+lift)*s,1.2*s,1.4*s);
      if(id==='police'){c.fillStyle='#1d1f33';c.fillRect(x+2*s,g-(7.2+lift)*s,23*s,1.4*s);const on=(t*6|0)%2;c.fillStyle=on?'#ff2d4d':'#5a1020';c.fillRect(x+8*s,g-(13.4+lift)*s,2.4*s,1.4*s);c.fillStyle=on?'#1a3060':'#3fa7ff';c.fillRect(x+10.6*s,g-(13.4+lift)*s,2.4*s,1.4*s);}
      if(id==='race'){c.fillStyle='#1d1f33';c.fillRect(x+1*s,g-(12+lift)*s,3*s,1.2*s);c.fillRect(x+2*s,g-(11+lift)*s,1*s,2*s);c.fillStyle='#fff';c.beginPath();c.arc(x+20*s,g-(6.6+lift)*s,1.6*s,0,6.28);c.fill();c.fillStyle='#1d1f33';c.font=`800 ${2.2*s}px sans-serif`;c.textAlign='center';c.fillText('1',x+20*s,g-(5.8+lift)*s);c.textAlign='left';}
      if(id==='rocket'&&(moving||true)){c.fillStyle=pick(['#ff7b1c','#ffe066']);c.beginPath();c.moveTo(x+2*s,g-(8.5+lift)*s);c.lineTo(x-(3+Math.random()*3)*s,g-(6.8+lift)*s);c.lineTo(x+2*s,g-(5.2+lift)*s);c.fill();c.fillStyle='#5d6385';c.fillRect(x+3*s,g-(10+lift)*s,4*s,2*s);}
      if(id==='gold'&&Math.random()<0.3){c.fillStyle='#fff';const sx=x+(3+Math.random()*20)*s,sy=g-(6+Math.random()*6)*s;c.fillRect(sx-s,sy,2*s,s*0.4);c.fillRect(sx-s*0.2,sy-s*0.8,s*0.4,2*s);}
      if(mon){c.fillStyle='#5d6385';c.fillRect(x+6*s,g-(4+lift)*s,15*s,lift*s);W(6,4.6);W(21,4.6);}else{W(7,2.6);W(20,2.6);}}
    c.restore();},
  // map: the little hero canvas (48 x 56) shows him on his ride
  drawMap(c,look,t,walking){if(!look.ride||look.ride==='none'){drawHero(c,3,4,3.5,look,walking?((t*10|0)%2?'runA':'runB'):'stand',t);return;}this.draw(c,look.ride,1,15,1.75,look,t,walking);},
  goalChip(){const g=state.goal;if(!g)return null;const cat=CATALOG[g.tab]||[],it=cat.find(x=>x.id===g.id);if(!it||state.owned.includes(g.tab+':'+g.id)){return null;}
    const price=typeof DogPower!=='undefined'?DogPower.price(it.price):it.price,pct=Math.min(100,Math.round(100*state.coins/price)),ready=state.coins>=price;
    return el('button',{class:'chip goal-chip'+(ready?' ready':''),type:'button',title:'Saving goal',onclick:()=>{shopTab=g.tab;renderShop();show('scr-shop');}},
      '🎯 '+it.name+' ',el('span',{class:'goal-bar'},el('i',{style:`width:${pct}%`})),ready?' Ready!':` ${state.coins}/${price}`);}
};
const ShopX={equip(tab,it){if(tab==='dogacc'){const a=state.hero.dogAcc=Object.assign({},state.hero.dogAcc||{});a[it.slot]=a[it.slot]===it.id?null:it.id;}else state.hero[tab]=it.id;}};
