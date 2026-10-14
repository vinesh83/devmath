/* =========================================================
   Interludes: short full-screen animations between problems, as rewards for right answers.
   They play between problems (never while a problem is on screen), so speed data stays clean.
   Mix: 9 silly/action scenes plus the super moves he owns. Tap Skip to jump ahead.
   ========================================================= */
const INTERLUDES={stampede:['DOG STAMPEDE!','#ffb627'],zoomies:['ZOOMIES!','#ff8fa3'],banana:['BANANA PEEL!','#ffe066'],pie:['PIE ATTACK!','#ffffff'],
  boot:['GIANT BOOT!','#c084fc'],robot:['MEGA ROBOT PUNCH!','#5ef2ff'],surf:['TSUNAMI SURF!','#3fa7ff'],disco:['DISCO DEFEAT!','#ff4dd8'],fireworks:['FIREWORKS!','#ffe066'],
  lightning:['LIGHTNING STRIKE!','#fffbe0'],anvil:['ANVIL DROP!','#c9d3e6'],hammer:['MEGA HAMMER!','#ffb627'],kick:['FLYING KICK!','#ff7b1c'],chop:['KARATE CHOP!','#ffffff'],
  snowball:['SNOWBALL FIGHT!','#e0f4ff'],bees:['BEE SWARM!','#ffd23f'],dino:['DINO STOMP!','#3fae5a'],ufo:['UFO ABDUCTION!','#b8ff7a'],balloon:['BALLOON POP!','#ff4d6d'],
  bowling:['BOWLING BLAST!','#5ef2ff'],soccer:['SOCCER SMASH!','#3fdc6b'],slime:['SLIME BOMB!','#7dff5a'],puppypile:['PUPPY PILE!','#ff8fa3'],confetti:['CONFETTI CANNON!','#ffe066'],cannonball:['HUMAN CANNONBALL!','#ff7b1c'],
  shrink:['SHRINK RAY!','#c084fc'],giant:['MEGA GROW!','#ffe066'],piano:['PIANO DROP!','#ffffff'],rocketboots:['ROCKET BOOTS!','#ff7b1c'],octopus:['OCTOPUS GRAB!','#b06bff'],
  skate:['SKATE TRICK!','#5ef2ff'],tickle:['TICKLE ATTACK!','#ff8fa3'],catapult:['CATAPULT!','#f4f1d0'],magnet:['MEGA MAGNET!','#ff4d6d'],candy:['CANDY RAIN!','#ff8fa3'],
  bubble:['BUBBLE TRAP!','#bfe8ff'],trampoline:['TRAMPOLINE!','#ffe066'],ghost:['GHOST SCARE!','#f4f7fb'],laserdog:['LASER DOG!','#ff2d4d'],kart:['GO-KART BUMP!','#ff4d6d'],
  frisbee:['FRISBEE FETCH!','#ff4d6d'],bigbone:['GIANT BONE!','#fff8e8'],sled:['DOG SLED!','#bfe8ff'],dig:['DIG DIG DIG!','#c98a4a'],bath:['BATH TIME!','#5ef2ff'],
  superdog:['SUPER DOG!','#e8463c'],dogband:['DOG BAND!','#ff4dd8'],howl:['MOON HOWL!','#fffbe0'],cute:['CUTENESS ATTACK!','#ff8fa3'],treat:['TREAT TRICK!','#ffb627'],
  tornado:['TORNADO!','#e0e8ff'],volcano:['VOLCANO!','#ff7b1c'],dragonfire:['DRAGON FIRE!','#3fae5a'],ninja:['NINJA STARS!','#c9d3e6'],boomerang:['BOOMERANG!','#c98a4a'],
  freeze:['FREEZE RAY!','#bfe8ff'],sumo:['SUMO SLAM!','#ffb627'],lasso:['LASSO SPIN!','#c98a4a'],flyswatter:['FLY SWATTER!','#ff4d6d'],pillow:['PILLOW FIGHT!','#f4f1ff']};
const BANANA=['....yy','...yYy','..yYy.','.yYy..','yYy...','yy....'];
const BOOT=['....KKKKKK..','....KBBBBK..','....KBBBBK..','....KBBBBK..','....KBBBBK..','....KBBBBK..','KKKKKBBBBK..','KBBBBBBBBKKK','KBBBBBBBBBBK','KKKKKKKKKKKK'];
const FIST=['..GGGGGG..','.GgGgGgGG.','GgGgGgGgGG','GGGGGGGGGG','GGGGGGGGGG','GGGGGGGGG.','.GGGGGGG..'];
const Inter={bag:[],last:null,
  every(){return state.cineEvery==null?2:state.cineEvery;},
  pickKind(){if(!this.bag.length){const own=((typeof inv==='function'&&inv().supers)||[]).map(k=>'super:'+k);this.bag=shuffle(Object.keys(INTERLUDES).concat(own));
      if(this.bag[this.bag.length-1]===this.last&&this.bag.length>1)this.bag.unshift(this.bag.pop());}
    return this.last=this.bag.pop();},
  play(k){k=k||this.pickKind();state.interSeen=(state.interSeen||0)+1;
    if(k.startsWith('super:'))return Cine.superMove(k.slice(6),glitchForm(),false);return this.anim(k);},
  anim(kind){const [name0,col]=INTERLUDES[kind],D=RM?1.6:2.8,look=heroLook(),form=glitchForm();
    const pet=look.pet&&PETS[look.pet]&&PETS[look.pet].dog?look.pet:'ellie',petName=(DOGS.find(d=>d[0]===pet)||[0,'Dog'])[1].replace(/ the .*/,'');
    const ride=look.ride&&look.ride!=='none'&&typeof Rides!=='undefined'?look.ride:null;
    const name=kind==='zoomies'?petName.toUpperCase()+' ZOOMIES!':kind==='superdog'?'SUPER '+petName.toUpperCase()+'!':kind==='kart'&&ride?Rides.name(ride).toUpperCase()+' RAM!':name0,P=[],S={},dogs=shuffle(DOGS.map(d=>d[0])).slice(0,9);
    const burst=(x,y,n,cols,sp,grav)=>{for(let i=0;i<n;i++){const a=Math.random()*6.28,v=(sp||220)*(0.3+Math.random());P.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-40,life:0.5+Math.random()*0.6,col:pick(cols),sz:3+Math.random()*4,g:grav==null?380:grav});}};
    const once=(k,fn)=>{if(!S[k]){S[k]=1;fn();}};
    Snd.charge(0.4);
    const SP=1.25;
    return Cine.play(D/SP,(c,W,H,t,dt)=>{t*=SP;dt*=SP;const post=[];let heroHide=false;
      const gs=Math.max(4,Math.floor(Math.min(H/58,W/70))),G2=Math.round(gs*1.25),ground=H*0.7,hx=W*0.15,gx=W*0.72;
      const BG={stampede:['#2b4a7a','#7fb2e5'],zoomies:['#3a2a5a','#ff9fc4'],banana:['#1d3b2a','#6fbf73'],pie:['#4a2a1a','#d99a5a'],boot:['#1a1030','#3a2050'],
        robot:['#0b1430','#24406a'],surf:['#073a6a','#36a3e0'],disco:['#0a0414','#200a30'],fireworks:['#02030a','#0d1030'],
        lightning:['#0a0c18','#2a3048'],anvil:['#3a2a1a','#c9a06a'],hammer:['#1a2a3a','#4a6a8a'],kick:['#2a0a1a','#ff9f68'],chop:['#1a0a0a','#6a2a2a'],snowball:['#9fc8ef','#e8f4ff'],
        bees:['#3a6a2a','#a8e070'],dino:['#2a4a1a','#c9b070'],ufo:['#03030f','#141a3a'],balloon:['#5ab0ff','#c8e8ff'],bowling:['#2a1a3a','#7a4a9a'],soccer:['#2a7a2a','#6fd06f'],
        slime:['#1a2a1a','#4a7a3a'],puppypile:['#ffb0c8','#ffe0ea'],confetti:['#3a1a5a','#ff9fc4'],cannonball:['#3a2a1a','#ff9f68'],
        shrink:['#1a0a2a','#5a2a7a'],giant:['#2a4a7a','#9fd0ff'],piano:['#2a1a2a','#7a5a6a'],rocketboots:['#0a1a3a','#ff9f68'],octopus:['#032a4a','#1a6a9a'],skate:['#3a3a4a','#9aa3c7'],
        tickle:['#ffd0e0','#fff0f5'],catapult:['#05081a','#1a2a5a'],magnet:['#2a2a3a','#6a6a8a'],candy:['#ffc0d8','#fff0f8'],bubble:['#3a8acf','#bfe8ff'],trampoline:['#5ab0ff','#c8e8ff'],
        ghost:['#05050c','#1a1030'],laserdog:['#1a0a0a','#4a1a2a'],kart:['#3a5a2a','#9fd06f'],
        frisbee:['#4a9ae0','#bfe4ff'],bigbone:['#5a3a6a','#e0a0c0'],sled:['#8ab8e0','#e8f4ff'],dig:['#3a6a2a','#a8d070'],bath:['#3a8acf','#cfefff'],superdog:['#1a3a8a','#6ab0ff'],
        dogband:['#2a0a3a','#7a2a6a'],howl:['#02030a','#14183a'],cute:['#ffc0d8','#fff0f8'],treat:['#ff9f43','#ffe0b0'],
        tornado:['#3a4a5a','#9aa8b8'],volcano:['#3a0a0a','#a04020'],dragonfire:['#2a1a3a','#a05a3a'],ninja:['#0a0a1a','#3a2a5a'],boomerang:['#c97a3a','#ffd08a'],freeze:['#0a2a4a','#8ac8f0'],
        sumo:['#5a2a1a','#e0a060'],lasso:['#c9853a','#ffe0a0'],flyswatter:['#2a6a2a','#a8e070'],pillow:['#3a2a6a','#a090e0']}[kind];
      const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,BG[0]);g.addColorStop(1,BG[1]);c.fillStyle=g;c.fillRect(0,0,W,H);
      if(kind==='fireworks'||kind==='disco'||kind==='ufo'||kind==='lightning'||kind==='catapult'||kind==='ghost'||kind==='howl'){c.fillStyle='#fff';for(let i=0;i<40;i++){c.globalAlpha=0.3+((i*7)%5)/10;c.fillRect((i*131)%W,(i*67)%(H*0.6),2,2);}c.globalAlpha=1;}
      c.fillStyle=kind==='surf'?'#e8d7a0':kind==='disco'?'#2a1040':'#2d2a3a';c.fillRect(0,ground,W,H-ground);
      if(kind==='disco'){for(let x=0;x<W;x+=60){c.fillStyle=pick(['#ff4dd8','#5ef2ff','#ffe066','#3fdc6b']);c.globalAlpha=0.35;c.fillRect(x,ground,58,H-ground);}c.globalAlpha=1;}
      // Glitch's pose for this frame
      const Gl={ox:0,oy:0,rot:0,sx:1,sy:1,white:false,dizzy:false,cream:0,wet:false,hide:false,tint:null,split:0};let pose='stand',hdx=0,hdy=0,shake=0;
      // his dog, drawn at top-left (x,y), facing right; flip makes it face left
      const dps=Math.round(gs*1.1),dpw=PETS[pet].rows[0].length*dps,dph=PETS[pet].rows.length*dps,lerpC=(a,b,q)=>a+(b-a)*Math.max(0,Math.min(1,q));
      const dogAt=(x,y,ps,o)=>{o=o||{};const p=PETS[pet],pw=p.rows[0].length*ps,ph=p.rows.length*ps;c.save();c.translate(x+pw/2,y+ph/2);if(o.rot)c.rotate(o.rot);if(o.flip)c.scale(-1,1);drawPet(c,pet,-pw/2,-ph/2,ps,t);c.restore();};
      // ---------- per-scene action
      if(kind==='stampede'){const sp=W*0.95;
        dogs.forEach((id,i)=>{const p=PETS[id],ps=Math.max(3,Math.round(gs*0.9)),x=-60-i*W*0.1+(t-0.2)*sp,y=ground-p.rows.length*ps-Math.abs(Math.sin(t*16+i))*gs*1.2;
          if(x>-80&&x<W+40){drawPet(c,id,x,y,ps,t*3);if(Math.random()<0.4)P.push({x:x,y:ground-4,vx:-60,vy:-40-Math.random()*40,life:0.4,col:'#b8a88a',sz:4,g:200});
            if(x>W*0.15&&!S['b'+i]){S['b'+i]=1;Snd.tone(260+Math.random()*220,0.07,'square',0.05);}}
          if(x>gx-W*0.05&&!S.flat){S.flat=t;Snd.slam();burst(gx,ground-gs*6,30,['#ffe066','#fff'],260);}});
        if(S.flat){Gl.sy=0.3;Gl.sx=1.5;Gl.dizzy=true;}hdy=-Math.abs(Math.sin(t*9))*gs*3;pose='jump';}
      else if(kind==='zoomies'){const p=PETS[pet],ps=Math.round(gs*1.5),pw=p.rows[0].length*ps,ph=p.rows.length*ps;let x,y,dir=1;
        if(t<0.5){x=-pw+(t/0.5)*(gx-W*0.25+pw);y=ground-ph;}else if(t<2.3){const a=(t-0.5)*9;x=gx+Math.cos(a)*W*0.2-pw/2;y=ground-ph-Math.abs(Math.sin(a))*H*0.12;dir=-Math.sin(a)>=0?1:-1;
          if(Math.random()<0.6)P.push({x:x+pw/2,y:y+ph/2,vx:0,vy:-30,life:0.5,col:pick(['#ff8fa3','#fff','#ffe066']),sz:4,g:0});}
        else{x=gx+W*0.2+(t-2.3)*W;y=ground-ph;}
        c.save();if(dir<0){c.translate(x+pw,y);c.scale(-1,1);drawPet(c,pet,0,0,ps,t*4);}else drawPet(c,pet,x,y,ps,t*4);c.restore();
        if(t>0.7){Gl.rot=(t-0.7)*10;Gl.dizzy=t>2.2;once('z',()=>Snd.whoosh());}hdy=-Math.abs(Math.sin(t*8))*gs*2;}
      else if(kind==='banana'){const px=gx-W*0.12;if(t<1.5||(t>=1.5))drawSprite(c,BANANA,px-3*gs,ground-6*gs,gs,{y:'#c9a000',Y:'#ffe066'});
        if(t<0.9)Gl.ox=W*0.08-(t/0.9)*(W*0.08+W*0.12)+W*0.0;else if(t<1.5){const k=(t-0.9)/0.6;once('s',()=>Snd.whoosh());Gl.ox=-W*0.12-k*W*0.04;Gl.oy=-Math.sin(k*Math.PI)*H*0.25;Gl.rot=-k*Math.PI;}
        else{Gl.ox=-W*0.16;Gl.rot=-Math.PI;Gl.dizzy=true;once('l',()=>{Snd.slam();burst(gx-W*0.16,ground-gs*2,30,['#ffe066','#fff'],240);});shake=t<1.8?14:0;}
        if(t>1.6){c.font=`800 ${gs*4}px "Pixelify Sans",monospace`;c.fillStyle='#fff';c.textAlign='center';c.fillText('HA HA!',hx,ground-gs*18-Math.abs(Math.sin(t*10))*6);}}
      else if(kind==='pie'){[0.45,0.9,1.35].forEach((t0,i)=>{const k=(t-t0)/0.4;if(k>0&&k<1){const x=hx+gs*6+(gx-hx-gs*6)*k,y=ground-gs*10-Math.sin(k*Math.PI)*H*0.2;
            c.fillStyle='#f4e3c0';c.beginPath();c.ellipse(x,y,gs*2.4,gs*1.2,0,0,6.28);c.fill();c.fillStyle='#ff6f91';c.fillRect(x-gs*1.5,y-gs*1.2,gs*3,gs*0.7);if(!S['th'+i]){S['th'+i]=1;Snd.whoosh();}}
          if(k>=1&&!S['p'+i]){S['p'+i]=1;Snd.noise(0.12,0.12,0,'lowpass',900);burst(gx,ground-gs*9,26,['#ffffff','#ffe9f0','#ff6f91'],230);}});
        Gl.cream=['p0','p1','p2'].filter(k=>S[k]).length;pose=t%0.45<0.2?'runA':'stand';if(S.p2)Gl.dizzy=true;}
      else if(kind==='boot'){if(t<1.15){const k=Math.min(1,t/1.1);c.fillStyle='#00000066';c.beginPath();c.ellipse(gx,ground,gs*10*k,gs*2*k,0,0,6.28);c.fill();}
        const bs=gs*2.6,bw=12*bs,bh=10*bs;let by=-bh;if(t>0.8&&t<1.15)by=-bh+((t-0.8)/0.35)*(ground-bh*0.98+bh);else if(t>=1.15&&t<1.9)by=ground-bh*0.98;else if(t>=1.9)by=ground-bh*0.98-(t-1.9)*H*2;
        if(t>=1.15){once('st',()=>{Snd.slam();Snd.boom();burst(gx,ground,50,['#8a7a5a','#fff','#c084fc'],320);});shake=t<1.45?22:0;Gl.sy=t<2.2?0.18:1;Gl.sx=t<2.2?1.8:1;}
        if(t>=2.2){once('bo',()=>Snd.tone(300,0.15,'square',0.05,0,900));Gl.dizzy=true;}
        drawSprite(c,BOOT,gx-bw/2,by,bs,{K:'#1d1f33',B:'#7a4a2a'});}
      else if(kind==='robot'){const fs=gs*3,fw=10*fs,fh=7*fs;let fx=-fw-W*0.3;if(t>0.4&&t<1.0)fx=-fw-W*0.3+((t-0.4)/0.6)*(gx-fw*0.9+fw+W*0.3);else if(t>=1.0)fx=gx-fw*0.9-(t-1.0)*W*0.6;
        c.fillStyle='#8a94ad';c.fillRect(-20,ground-fh*0.9-gs*3,fx+20,fh*0.55);c.fillStyle='#5d6385';c.fillRect(-20,ground-fh*0.9-gs*3+fh*0.4,fx+20,gs*1.2);
        drawSprite(c,FIST,fx,ground-fh-gs*4,fs,{G:'#d7deeb',g:'#8a94ad'});
        if(t>=1.0){once('pu',()=>{Snd.crit();Snd.boom();burst(gx,ground-gs*8,50,['#5ef2ff','#fff','#ffe066'],360);});const k=Math.min(1,(t-1.0)/0.8);Gl.ox=k*W*0.3;Gl.oy=-k*H*0.55;Gl.rot=k*10;Gl.sx=Gl.sy=1-k*0.85;shake=t<1.25?18:0;
          if(k>=1){once('tw',()=>Snd.tone(1568,0.2,'triangle',0.05));const tx=gx+W*0.3,ty=ground-gs*7-H*0.55;c.fillStyle='#fff';const r=gs*(2+Math.sin(t*20));c.fillRect(tx-r,ty-1,r*2,2);c.fillRect(tx-1,ty-r,2,r*2);}}
        pose=t>0.3&&t<1.0?'runA':'stand';}
      else if(kind==='surf'){const crest=t<1.6?-W*0.2+(t/1.6)*(gx+W*0.15):gx+W*0.15+(t-1.6)*W*0.3,top=ground-H*0.38*Math.min(1,t/0.4);
        c.fillStyle='#1e6fb8';c.beginPath();c.moveTo(-10,ground);for(let x=-10;x<=crest;x+=10)c.lineTo(x,top+Math.sin(x*0.03+t*8)*gs*2+(crest-x)*0.06);c.lineTo(crest+gs*4,ground);c.fill();
        c.fillStyle='#e0f4ff';for(let x=crest-gs*16;x<crest;x+=gs*2)c.fillRect(x,top+Math.sin(x*0.03+t*8)*gs*2+(crest-x)*0.06-gs,gs*1.5,gs);
        hdx=crest-gs*8-hx;hdy=top-ground+gs*2;pose='jump';c.fillStyle='#ff7b1c';c.fillRect(hx+hdx-gs*7,ground+hdy+gs*0.5,gs*14,gs*1.4);
        if(Math.random()<0.7)P.push({x:crest,y:top,vx:60+Math.random()*80,vy:-60-Math.random()*90,life:0.6,col:'#e0f4ff',sz:4,g:300});
        if(crest>gx-gs*6){once('sp',()=>{Snd.noise(0.5,0.15,0,'lowpass',1200);});Gl.ox=(crest-gx)+gs*6;Gl.rot=t*8;Gl.oy=-gs*6;Gl.wet=true;}
        if(t>2.2){Gl.rot=0;Gl.dizzy=true;Gl.wet=true;}}
      else if(kind==='disco'){const bx=W*0.5,by=H*0.12,br=gs*5;c.strokeStyle='#888';c.beginPath();c.moveTo(bx,0);c.lineTo(bx,by-br);c.stroke();
        for(let i=0;i<4;i++){const a=t*2+i*Math.PI/2,lx=bx+Math.cos(a)*W*0.4;c.globalAlpha=0.18;c.fillStyle=['#ff4dd8','#5ef2ff','#ffe066','#3fdc6b'][i];c.beginPath();c.moveTo(bx,by);c.lineTo(lx-W*0.08,ground);c.lineTo(lx+W*0.08,ground);c.fill();}c.globalAlpha=1;
        for(let y=-br;y<br;y+=gs)for(let x=-br;x<br;x+=gs){if(x*x+y*y<br*br){c.fillStyle=((x+y)/gs+Math.floor(t*8))%2?'#e8eefc':'#8a94ad';c.fillRect(bx+x,by+y,gs-1,gs-1);}}
        const beat=Math.floor(t*4);if(S.beat!==beat){S.beat=beat;Snd.tone([523,659,784,1047][beat%4],0.09,'square',0.04);}
        pose=beat%2?'runA':'stand';hdy=-(beat%2)*gs*2;Gl.rot=t<2.1?Math.sin(t*8)*0.35:-1.4;Gl.oy=t<2.1?-(beat%2)*gs*2:gs*2;Gl.dizzy=t>=2.1;if(t>=2.1)once('f',()=>Snd.slam());}
      else if(kind==='fireworks'){[0.25,0.55,0.85,1.15,1.45,1.7,1.95].forEach((t0,i)=>{const k=(t-t0)/0.45,sx=hx+gs*4,tx=W*(0.25+((i*37)%55)/100),ty=H*(0.15+((i*23)%25)/100);
          if(k>0&&k<1){const x=sx+(tx-sx)*k,y=ground-gs*10+(ty-ground+gs*10)*k;c.fillStyle='#ffe066';c.fillRect(x-2,y-2,5,5);P.push({x,y,vx:0,vy:30,life:0.3,col:'#ff7b1c',sz:3,g:0});if(!S['l'+i]){S['l'+i]=1;Snd.tone(400,0.25,'triangle',0.03,0,1200);}}
          if(k>=1&&!S['e'+i]){S['e'+i]=1;Snd.noise(0.25,0.1,0,'lowpass',1600);const cols=pick([['#ff4d6d','#ffe066'],['#5ef2ff','#fff'],['#3fdc6b','#ffe066'],['#c084fc','#ff8fa3']]);burst(tx,ty,60,cols,260,90);}});
        Gl.sy=1+Math.sin(t*20)*0.05;Gl.white=t>1.95&&t<2.1;pose=t%0.5<0.25?'runA':'stand';hdy=-Math.abs(Math.sin(t*6))*gs*2;}
      else if(kind==='lightning'){c.fillStyle='#3a3f5a';for(let i=0;i<5;i++){c.beginPath();c.arc(gx-gs*8+i*gs*4,H*0.12+(i%2)*gs*2,gs*4,0,6.28);c.fill();}
        [0.55,1.05,1.45].forEach((t0,i)=>{if(t>t0&&t<t0+0.18){once('b'+i,()=>{Snd.crit();Snd.noise(0.3,0.15,0,'lowpass',900);burst(gx,ground-gs*10,30,['#fff','#ffe066','#5ef2ff'],300);});
          post.push(()=>{c.strokeStyle='#fffbe0';c.lineWidth=gs*0.9;c.beginPath();let x=gx+(i-1)*gs*2,y=H*0.14;c.moveTo(x,y);while(y<ground-gs*10){y+=gs*3;x+=(Math.random()-0.5)*gs*5;c.lineTo(x,y);}c.stroke();});shake=16;
          c.globalAlpha=0.35;c.fillStyle='#fff';c.fillRect(0,0,W,H);c.globalAlpha=1;}});
        if(t>0.6){Gl.tint='rgba(20,20,30,0.65)';if(Math.random()<0.5)P.push({x:gx+(Math.random()-0.5)*gs*8,y:ground-gs*14,vx:(Math.random()-0.5)*20,vy:-50,life:0.8,col:'#8a8a9a',sz:5,g:-20});}
        if(t>1.7)Gl.dizzy=true;pose=t>0.5?'runA':'stand';}
      else if(kind==='anvil'){const aw=gs*18,ah=gs*10;let ay=-ah;if(t>0.45&&t<0.85)ay=-ah+((t-0.45)/0.4)*(ground-ah-G2*12+ah);else if(t>=0.85)ay=ground-ah-G2*12*0.3;
        if(t>=0.85){once('a',()=>{Snd.slam();Snd.tone(1200,0.25,'square',0.04);burst(gx,ground,40,['#8a94ad','#fff'],300);});Gl.sy=0.3;Gl.sx=1.35;shake=t<1.1?20:0;if(t>1.3)Gl.dizzy=true;}
        post.push(()=>{c.fillStyle='#3a3f50';c.fillRect(gx-aw/2,ay,aw,ah*0.45);c.fillRect(gx-aw*0.2,ay+ah*0.45,aw*0.4,ah*0.3);c.fillRect(gx-aw*0.35,ay+ah*0.75,aw*0.7,ah*0.25);c.fillStyle='#5d6385';c.fillRect(gx-aw/2,ay,aw,gs);c.fillStyle='#fff';c.font=`800 ${gs*3}px "Pixelify Sans",monospace`;c.textAlign='center';c.fillText('100 TONS',gx,ay-gs);});}
      else if(kind==='hammer'){const L=W*0.3,ang=t<0.5?-1.5:t<0.85?-1.5+((t-0.5)/0.35)*1.5:0,px=gx-L-gs,py=ground-G2*12-gs*6;
        post.push(()=>{c.save();c.translate(px,py);c.rotate(ang);c.fillStyle='#8a5a2a';c.fillRect(0,-gs,L,gs*2);c.fillStyle='#8a94ad';c.fillRect(L-gs*3,-gs*6,gs*8,gs*12);c.fillStyle='#d7deeb';c.fillRect(L-gs*3,-gs*6,gs*8,gs*2);c.restore();});
        if(t>=0.85){once('h',()=>{Snd.slam();Snd.boom();burst(gx,ground,40,['#8a7a5a','#ffe066','#fff'],320);});Gl.oy=Math.min(gs*9,(t-0.85)*gs*40);shake=t<1.1?22:0;Gl.dizzy=t>1.3;
          post.push(()=>{c.fillStyle='#2d2a3a';c.fillRect(gx-G2*8,ground,G2*16,H-ground);c.fillStyle='#ffe066';c.font=`800 ${gs*4}px "Pixelify Sans",monospace`;c.textAlign='center';if(t>1.2)c.fillText('BONK!',gx,ground-G2*10);});}}
      else if(kind==='kick'){const k=t<0.4?0:Math.min(1,(t-0.4)/0.45);hdx=k*(gx-hx-G2*9);hdy=-Math.sin(k*Math.PI)*H*0.18;pose=k>0&&k<1?'jump':'stand';
        if(k>=1){once('k',()=>{Snd.crit();burst(gx-G2*4,ground-G2*8,40,['#ffe066','#fff','#ff7b1c'],320);});const q=Math.min(1,(t-0.85)/0.6);Gl.ox=Math.sin(q*Math.PI)*W*0.35;Gl.oy=-Math.sin(q*Math.PI)*H*0.3;Gl.rot=q*14;shake=t<1.0?16:0;
          if(q>=1){Gl.dizzy=true;once('back',()=>Snd.tone(300,0.12,'square',0.05,0,800));}hdx=(gx-hx-G2*9)*Math.max(0,1-(t-0.9)*2);hdy=0;}}
      else if(kind==='chop'){const k=t<0.35?0:Math.min(1,(t-0.35)/0.3);hdx=k*(gx-hx-G2*10);pose=k<1?'runA':'stand';
        if(t>0.65&&t<0.8)post.push(()=>{c.strokeStyle='#ffffff';c.lineWidth=gs*1.5;c.beginPath();c.moveTo(gx+gs*3,ground-G2*16);c.lineTo(gx-gs*2,ground+gs*2);c.stroke();});
        if(t>=0.7){once('c',()=>{Snd.crit();Snd.whoosh();});Gl.split=t<1.6?Math.min(G2*4,(t-0.7)*G2*20):Math.max(0,G2*4-(t-1.6)*G2*30);if(t>1.65)once('snap',()=>Snd.tone(220,0.15,'square',0.05,0,660));Gl.dizzy=t>1.8;}
        if(t>1.2)hdx=(gx-hx-G2*10)*Math.max(0,1-(t-1.2)*2);}
      else if(kind==='snowball'){[0.3,0.5,0.7,0.9,1.1,1.3].forEach((t0,i)=>{const k=(t-t0)/0.35;if(k>0&&k<1){const x=hx+gs*6+(gx-hx-gs*6)*k,y=ground-gs*10-Math.sin(k*Math.PI)*H*0.18+((i%3)-1)*gs*3;c.fillStyle='#fff';c.beginPath();c.arc(x,y,gs*1.6,0,6.28);c.fill();}
          if(k>=1)once('s'+i,()=>{Snd.noise(0.1,0.1,0,'lowpass',1500);burst(gx,ground-gs*9+((i%3)-1)*gs*3,14,['#ffffff','#e0f4ff'],200);});});
        pose=(t*5|0)%2?'runA':'stand';const n=[0,1,2,3,4,5].filter(i=>S['s'+i]).length;
        if(n>=6&&t>1.55){Gl.hide=true;post.push(()=>{const b=ground;c.fillStyle='#fff';[[0,G2*5.5],[-G2*9,G2*4.2],[-G2*15.5,G2*3]].forEach(([dy,r])=>{c.beginPath();c.arc(gx,b-r+dy,r,0,6.28);c.fill();});
          c.fillStyle='#1d1f33';c.fillRect(gx-G2*1.5,b-G2*19.5,G2,G2);c.fillRect(gx+G2*0.7,b-G2*19.5,G2,G2);c.fillStyle='#ff7b1c';c.fillRect(gx,b-G2*18,G2*3,G2*0.8);c.fillStyle='#ff4d6d';c.fillRect(gx-G2*4,b-G2*13,G2*8,G2);});once('sm',()=>Snd.gem());}
        else if(n)Gl.cream=Math.min(3,n);}
      else if(kind==='bees'){const hive=[W*0.05,H*0.28];c.fillStyle='#c98a2a';c.beginPath();c.ellipse(hive[0]+gs*4,hive[1],gs*4,gs*5,0,0,6.28);c.fill();c.fillStyle='#8a5a1a';for(let i=-1;i<=1;i++)c.fillRect(hive[0],hive[1]+i*gs*2,gs*8,gs*0.6);
        if(t>0.9){Gl.ox=(t-0.9)*W*0.35;Gl.rot=Math.sin(t*30)*0.15;once('run',()=>Snd.whoosh());}
        for(let i=0;i<22;i++){const k=Math.max(0,Math.min(1,(t-i*0.02)/0.9)),tx=gx+Gl.ox+Math.cos(t*9+i)*gs*(6+i%5),ty=ground-G2*8+Math.sin(t*11+i*1.7)*gs*(5+i%4);
          const x=hive[0]+gs*4+(tx-hive[0]-gs*4)*k,y=hive[1]+(ty-hive[1])*k;c.fillStyle='#ffd23f';c.fillRect(x-3,y-2,6,4);c.fillStyle='#1d1f33';c.fillRect(x-1,y-2,2,4);c.fillStyle='#ffffffaa';c.fillRect(x-2,y-5+((t*40+i)|0)%2,4,3);}
        if((t*8|0)!==S.bz){S.bz=t*8|0;Snd.tone(180+Math.random()*40,0.06,'sawtooth',0.015);}
        if(t>1.2){c.font=`800 ${gs*3.4}px "Pixelify Sans",monospace`;c.fillStyle='#fff';c.textAlign='center';c.fillText('AAAH!',gx+Gl.ox,ground-G2*15);}}
      else if(kind==='dino'){const ds=gs*1.7,dx=-W*0.25+Math.min(1,t/1.0)*(gx-W*0.05+W*0.25),stomp=t>1.0&&t<1.4;
        const DINO=['.........GGGGG..','........GGgGGGG.','........GGGGGGGG','........GGGGGWW.','........GGGGGG..','...G...GGGGGGG..','..GGG.GGGGGG....','.GGGGGGGGGGGG...','GGGGGGGGGGGGG...','.GGGGGGGGGG.....','...GGGGGGGG.....','....GG...GG.....','....GG...GGG....'];
        post.push(()=>drawSprite(c,DINO,dx-ds*8,ground-ds*13-(stomp?Math.sin((t-1.0)/0.4*Math.PI)*gs*4:Math.abs(Math.sin(t*10))*gs),ds,{G:'#3fae5a',g:'#1d1f33',W:'#ffffff'}));
        if(t>0.3&&t<1.0&&(t*6|0)!==S.st){S.st=t*6|0;Snd.slam();shake=8;}
        if(t>0.6&&t<1.0){c.font=`800 ${gs*5}px "Pixelify Sans",monospace`;c.fillStyle='#ff4d6d';c.textAlign='center';c.fillText('RAWR!',dx,ground-ds*15);}
        if(t>=1.25){once('s',()=>{Snd.boom();burst(gx,ground,40,['#3fae5a','#fff','#8a7a5a'],300);});Gl.sy=0.25;Gl.sx=1.6;shake=t<1.5?20:0;Gl.dizzy=t>1.6;}}
      else if(kind==='ufo'){const ux=gx+(t<0.5?(1-t/0.5)*W*0.5:t>1.9?(t-1.9)*W*1.6:0),uy=H*0.2-(t>1.9?(t-1.9)*H*0.4:0);
        if(t>0.6&&t<1.9){const k=Math.min(1,(t-0.7)/1.0);Gl.oy=-k*(ground-uy-G2*8);Gl.sx=Gl.sy=1-k*0.75;Gl.rot=Math.sin(t*6)*0.3;once('beam',()=>Snd.charge(0.8));
          c.globalAlpha=0.35+0.1*Math.sin(t*30);c.fillStyle='#b8ff7a';c.beginPath();c.moveTo(ux-gs*4,uy+gs*2);c.lineTo(ux-gs*12,ground);c.lineTo(ux+gs*12,ground);c.lineTo(ux+gs*4,uy+gs*2);c.fill();c.globalAlpha=1;}
        if(t>=1.75)Gl.hide=true;
        post.push(()=>{c.fillStyle='#8a94ad';c.beginPath();c.ellipse(ux,uy+gs,gs*10,gs*2.6,0,0,6.28);c.fill();c.fillStyle='#5ef2ff';c.beginPath();c.ellipse(ux,uy-gs*0.5,gs*4.5,gs*3.2,0,Math.PI,0);c.fill();
          for(let i=0;i<5;i++){c.fillStyle=((t*8|0)+i)%2?'#ffe066':'#ff4dd8';c.fillRect(ux-gs*8+i*gs*4,uy+gs*1.4,gs*1.2,gs*1.2);}});
        if(t>1.95){c.font=`800 ${gs*3.4}px "Pixelify Sans",monospace`;c.fillStyle='#fff';c.textAlign='center';c.fillText('BYE BYE!',W*0.5,H*0.42);}}
      else if(kind==='balloon'){const up=t<1.2?Math.min(1,t/1.0)*H*0.3:Math.max(0,H*0.3-(t-1.2)*H*1.2);Gl.oy=-up;Gl.rot=Math.sin(t*3)*0.15;
        const popped=[0.75,0.95,1.15].filter(x=>t>x).length;[0.75,0.95,1.15].forEach((t0,i)=>{const k=(t-(t0-0.25))/0.25;if(k>0&&k<1){c.fillStyle='#d7deeb';const x=hx+gs*6+(gx-gs*2+(i-1)*gs*5-hx-gs*6)*k,y=ground-gs*10+(ground-up-G2*16-gs*8-ground+gs*10)*k;c.fillRect(x,y,gs*2.5,gs*0.6);}
          if(t>t0)once('p'+i,()=>{Snd.noise(0.08,0.15,0,'highpass',2000);burst(gx+(i-1)*gs*5,ground-up-G2*16-gs*8,16,['#ff4d6d','#ffe066','#5ef2ff'],220);});});
        post.push(()=>{const cols=['#ff4d6d','#ffe066','#5ef2ff'];for(let i=popped;i<3;i++){const bx=gx+(i-1)*gs*5,by=ground-up-G2*16-gs*8;c.strokeStyle='#fff';c.lineWidth=1;c.beginPath();c.moveTo(bx,by+gs*3);c.lineTo(gx,ground-up-G2*12);c.stroke();c.fillStyle=cols[i];c.beginPath();c.ellipse(bx,by,gs*2.6,gs*3.2,0,0,6.28);c.fill();}});
        if(t>1.45){once('land',()=>{Snd.slam();burst(gx,ground,30,['#fff','#8a7a5a'],240);});shake=t<1.65?14:0;Gl.dizzy=true;}pose=t>0.5&&t<1.2?'runA':'stand';}
      else if(kind==='bowling'){const bx=hx+gs*6+Math.min(1,Math.max(0,(t-0.3)/0.7))*(gx-hx),br=gs*3.4;
        const pins=S.pins||(S.pins=[0,1,2,3,4,5].map(i=>({x:gx+gs*4+(i%3)*gs*7-gs*3,y:0,vx:0,vy:0,r:0,f:false,row:i<3?0:1})));
        if(t>=1.0)once('strike',()=>{Snd.boom();Snd.crit();pins.forEach(p=>{p.f=true;p.vx=(Math.random()*0.6+0.2)*W;p.vy=-(Math.random()*0.8+0.5)*H;});burst(gx,ground-gs*6,40,['#fff','#ffe066'],320);});
        pins.forEach(p=>{if(p.f){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=H*2.5*dt;p.r+=dt*12;}
          post.push(()=>{const bs=Math.max(2,Math.round(gs*0.55));c.save();c.translate(p.x,ground-9*bs+p.y-p.row*gs*0.5);c.rotate(p.r);drawSprite(c,MINION,-5*bs,-4*bs,bs,{a:'#7a1f3d',g:'#7a1f3d',G:'#ff4d6d',W:'#fff',K:'#1d1f33',M:'#1d1f33'});c.restore();});});
        if(t<1.6){c.fillStyle='#1d1f33';c.beginPath();c.arc(bx,ground-br,br,0,6.28);c.fill();c.fillStyle='#5d6385';c.fillRect(bx-br*0.3,ground-br*1.5,br*0.3,br*0.3);c.fillRect(bx+br*0.1,ground-br*1.6,br*0.3,br*0.3);}
        if(t>=1.0){Gl.rot=Math.min(1,(t-1.0)*3)*-1.5;Gl.oy=Math.min(1,(t-1.0)*3)*gs*2;Gl.dizzy=t>1.4;shake=t<1.2?16:0;}
        if(t>1.2){c.font=`800 ${gs*6}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.lineWidth=6;c.strokeStyle='#000';c.strokeText('STRIKE!',W*0.5,H*0.45);c.fillText('STRIKE!',W*0.5,H*0.45);}pose=t<0.4?'runA':'stand';}
      else if(kind==='soccer'){const nx=W*0.9;c.strokeStyle='#fff';c.lineWidth=3;c.strokeRect(nx-gs*2,ground-gs*16,gs*14,gs*16);c.globalAlpha=0.35;for(let i=1;i<7;i++){c.beginPath();c.moveTo(nx-gs*2+i*gs*2,ground-gs*16);c.lineTo(nx-gs*2+i*gs*2,ground);c.stroke();c.beginPath();c.moveTo(nx-gs*2,ground-gs*16+i*gs*2.3);c.lineTo(nx+gs*12,ground-gs*16+i*gs*2.3);c.stroke();}c.globalAlpha=1;
        const k=Math.min(1,Math.max(0,(t-0.4)/0.45)),bx=hx+gs*6+(gx-hx-gs*6)*k,by=ground-gs*3-Math.sin(k*Math.PI)*H*0.12;
        if(t<0.9){c.fillStyle='#fff';c.beginPath();c.arc(bx,by,gs*2.2,0,6.28);c.fill();c.fillStyle='#1d1f33';c.fillRect(bx-gs*0.6,by-gs*0.6,gs*1.2,gs*1.2);}
        if(t>=0.85){once('g',()=>{Snd.crit();burst(gx,ground-G2*8,30,['#fff','#3fdc6b'],300);});const q=Math.min(1,(t-0.85)/0.4);Gl.ox=q*(nx+gs*5-gx);Gl.oy=-Math.sin(q*Math.PI)*H*0.15;Gl.rot=q*6;Gl.dizzy=q>=1;}
        if(t>1.3){once('goal',()=>{Snd.fanfare();});c.font=`800 ${gs*6}px "Pixelify Sans",monospace`;c.fillStyle='#3fdc6b';c.textAlign='center';c.lineWidth=6;c.strokeStyle='#000';c.strokeText('GOOOAL!',W*0.5,H*0.45);c.fillText('GOOOAL!',W*0.5,H*0.45);}
        pose=t>0.3&&t<0.5?'runA':'stand';}
      else if(kind==='slime'){const k=(t-0.4)/0.45;if(k>0&&k<1){const x=hx+gs*6+(gx-hx-gs*6)*k,y=ground-gs*10-Math.sin(k*Math.PI)*H*0.2;c.fillStyle='#7dff5a';c.beginPath();c.arc(x,y,gs*2.8+Math.sin(t*30)*gs*0.5,0,6.28);c.fill();once('th',()=>Snd.whoosh());}
        if(k>=1){once('sp',()=>{Snd.noise(0.25,0.15,0,'lowpass',600);burst(gx,ground-gs*9,50,['#7dff5a','#3fdc6b','#c8ffb0'],300);});Gl.tint='rgba(90,230,60,0.55)';Gl.sy=1+Math.sin(t*14)*0.06;
          post.push(()=>{c.fillStyle='#7dff5a';for(let i=0;i<6;i++){const dx=gx-G2*5+i*G2*2,len=((t-0.85)*60+i*13)%(G2*6);c.fillRect(dx,ground-G2*6+len,G2*0.8,G2*1.4);}});Gl.dizzy=t>1.6;}
        pose=t<0.5?'runA':'stand';}
      else if(kind==='puppypile'){const pile=S.pile||(S.pile=shuffle(DOGS.map(d=>d[0])).slice(0,7).map((id,i)=>({id,t0:0.25+i*0.18,x:gx-gs*6+((i*37)%5-2)*gs*2.5,lvl:i})));
        pile.forEach(p=>{const pp=PETS[p.id],ps=Math.max(3,Math.round(gs*0.9)),h=pp.rows.length*ps,targetY=ground-G2*7-h-p.lvl*ps*3.4,k=Math.min(1,Math.max(0,(t-p.t0)/0.3));if(k<=0)return;
          if(k>=1)once('l'+p.lvl,()=>Snd.tone(300+p.lvl*60,0.07,'square',0.05));post.push(()=>drawPet(c,p.id,p.x,-h+(targetY+h)*k,ps,t*2));});
        if(t>0.6){Gl.sy=Math.max(0.55,1-(t-0.6)*0.4);}Gl.dizzy=t>1.9;
        if(t>1.7){c.font=`800 ${gs*4}px "Pixelify Sans",monospace`;c.fillStyle='#ff8fa3';c.textAlign='center';c.fillText('LICK LICK!',gx,H*0.4);}}
      else if(kind==='confetti'){post.push(()=>{c.fillStyle='#5d6385';c.save();c.translate(hx+gs*8,ground-gs*6);c.rotate(-0.5);c.fillRect(0,-gs*2,gs*8,gs*4);c.restore();});
        if(t>0.4)once('boom',()=>{Snd.boom();for(let i=0;i<160;i++)P.push({x:hx+gs*14,y:ground-gs*10,vx:(0.3+Math.random())*W*0.8,vy:-(0.2+Math.random())*H*1.1,life:1.6+Math.random(),col:pick(['#ff4d6d','#ffe066','#5ef2ff','#3fdc6b','#c084fc','#ff8fa3']),sz:4+Math.random()*4,g:H*0.9});});
        if(t>0.6){Gl.rot=Math.sin(t*12)*0.2;if(t>1.3){c.font=`800 ${gs*4}px "Pixelify Sans",monospace`;c.fillStyle='#fff';c.textAlign='center';c.fillText('ACHOO!',gx,ground-G2*15);once('a',()=>Snd.tone(600,0.2,'square',0.04,0,200));Gl.oy=-Math.abs(Math.sin((t-1.3)*10))*gs*2;}}}
      else if(kind==='cannonball'){heroHide=t>0.5&&t<1.3;const cx=hx+gs*2,cy=ground-gs*5;
        post.push(()=>{c.fillStyle='#3a3f50';c.save();c.translate(cx,cy);c.rotate(-0.45);c.fillRect(-gs*2,-gs*3.5,gs*14,gs*7);c.restore();c.fillStyle='#8a5a2a';c.beginPath();c.arc(cx,ground-gs*2,gs*2.8,0,6.28);c.fill();});
        if(t>0.5)once('fire',()=>{Snd.boom();burst(cx+gs*10,cy-gs*4,30,['#ff7b1c','#ffe066','#8a8a9a'],260);});
        if(heroHide){const k=(t-0.5)/0.8,x=cx+(gx-cx)*k,y=cy-Math.sin(k*Math.PI)*H*0.35-gs*8;post.push(()=>{c.save();c.translate(x,y);c.rotate(k*12);drawHero(c,-6*gs,-7*gs,gs,look,'jump',t);c.restore();});}
        if(t>=1.3){once('hit',()=>{Snd.crit();Snd.slam();burst(gx,ground-G2*8,50,['#ffe066','#fff','#ff7b1c'],340);});shake=t<1.5?18:0;Gl.rot=Math.min(1,(t-1.3)*3)*-1.6;Gl.oy=gs*2;Gl.dizzy=t>1.6;hdx=t<1.5?gx-hx-G2*10:(gx-hx-G2*10)*Math.max(0,1-(t-1.5)*2);}}
      else if(kind==='shrink'){const ray=t>0.4&&t<0.9;if(ray){once('z',()=>Snd.tone(1400,0.5,'sawtooth',0.03,0,300));post.push(()=>{c.strokeStyle='#c084fc';c.lineWidth=gs*1.2;c.setLineDash([gs*2,gs]);c.lineDashOffset=-t*200;c.beginPath();c.moveTo(hx+gs*6,ground-gs*9);c.lineTo(gx,ground-G2*6);c.stroke();c.setLineDash([]);});}
        const k=Math.min(1,Math.max(0,(t-0.5)/0.5));Gl.sx=Gl.sy=1-k*0.75;if(t>1.0){Gl.ox=Math.cos(t*9)*gs*8;Gl.oy=-Math.abs(Math.sin(t*18))*gs*2;
          c.font=`800 ${gs*2.6}px "Pixelify Sans",monospace`;c.fillStyle='#fff';c.textAlign='center';c.fillText('eep! eep!',gx+Gl.ox,ground-G2*5);if((t*6|0)!==S.e){S.e=t*6|0;Snd.tone(1800,0.04,'square',0.03);}}pose=ray?'runA':'stand';}
      else if(kind==='giant'){const k=Math.min(1,Math.max(0,(t-0.3)/0.5));heroHide=true;const hs2=gs*(1+k*1.6);
        post.push(()=>drawHero(c,hx-6*hs2+gs*4,ground-14*hs2,hs2,look,t>1.0&&t<1.2?'runA':'stand',t));if(k>0&&k<1)shake=8;once('g',()=>Snd.tone(200,0.6,'square',0.04,0,90));
        if(t>1.05){once('f',()=>{Snd.crit();burst(gx,ground-G2*8,30,['#ffe066','#fff'],280);});const q=Math.min(1,(t-1.05)/0.6);Gl.ox=q*W*0.35;Gl.oy=-Math.sin(q*Math.PI)*H*0.35;Gl.rot=q*12;}
        if(t>1.3){c.font=`800 ${gs*5}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('FLICK!',W*0.55,H*0.4);}}
      else if(kind==='piano'){const pw=gs*20,ph=gs*11;let py=-ph;if(t>0.4&&t<0.85)py=-ph+((t-0.4)/0.45)*(ground-ph+ph);else if(t>=0.85)py=ground-ph;
        if(t>=0.85){once('p',()=>{Snd.slam();[262,330,392,523,659].forEach((f,i)=>Snd.tone(f,0.3,'triangle',0.05,i*0.06));burst(gx,ground-gs*4,40,['#1d1f33','#fff','#8a5a2a'],300);});Gl.hide=true;shake=t<1.1?18:0;
          for(let i=0;i<3;i++){const nt=((t*1.4+i*0.33)%1);c.fillStyle='#fff';c.font=`800 ${gs*4}px sans-serif`;c.textAlign='center';c.globalAlpha=1-nt;c.fillText('♪',gx-gs*8+i*gs*8,ground-ph-nt*H*0.25);c.globalAlpha=1;}
          if(t>1.4){c.font=`800 ${gs*3}px "Pixelify Sans",monospace`;c.fillStyle='#fff';c.fillText('(Glitch is under there)',gx,ground+gs*6);}}
        post.push(()=>{c.fillStyle='#1d1f33';c.fillRect(gx-pw/2,py,pw,ph*0.7);c.fillStyle='#fff';for(let i=0;i<10;i++)c.fillRect(gx-pw/2+gs+i*gs*1.9,py+ph*0.45,gs*1.6,ph*0.25);c.fillStyle='#1d1f33';for(let i=0;i<9;i++)if(i%3!==2)c.fillRect(gx-pw/2+gs*2.3+i*gs*1.9,py+ph*0.45,gs*0.9,ph*0.14);
          c.fillRect(gx-pw/2+gs,py+ph*0.7,gs*1.5,ph*0.3);c.fillRect(gx+pw/2-gs*2.5,py+ph*0.7,gs*1.5,ph*0.3);});}
      else if(kind==='rocketboots'){heroHide=true;const a=t*5,cx=W*0.45,cy=H*0.45,x=t<0.3?hx:t<1.7?cx+Math.cos(a)*W*0.3:hx+(1-Math.min(1,(t-1.7)/0.4))*(cx-hx),y=t<0.3?ground-14*gs:t<1.7?cy+Math.sin(a)*H*0.2-gs*7:ground-14*gs;
        post.push(()=>{drawHero(c,x-6*gs,y,gs,look,'jump',t);if(t>0.3&&t<1.7){c.fillStyle=pick(['#ff7b1c','#ffe066']);c.fillRect(x-gs*3,y+gs*14,gs*2,gs*(2+Math.random()*3));c.fillRect(x+gs*1,y+gs*14,gs*2,gs*(2+Math.random()*3));}});
        if(t>0.3&&t<1.7&&Math.random()<0.8)P.push({x,y:y+gs*16,vx:(Math.random()-0.5)*40,vy:60,life:0.5,col:pick(['#ff7b1c','#ffe066','#8a8a9a']),sz:4,g:0});
        once('r',()=>Snd.whoosh());if(t>0.9){once('hit',()=>{Snd.crit();burst(gx,ground-G2*8,30,['#ff7b1c','#fff'],260);});Gl.rot=Math.sin(t*20)*0.4;Gl.dizzy=t>1.3;}}
      else if(kind==='octopus'){const up=Math.min(1,t/0.6);for(let i=0;i<6;i++){const bx=gx-gs*12+i*gs*4.8,len=H*0.22*up,sw=Math.sin(t*6+i)*gs*3;post.push(()=>{c.strokeStyle='#b06bff';c.lineWidth=gs*1.8;c.lineCap='round';c.beginPath();c.moveTo(bx,ground+gs);c.quadraticCurveTo(bx+sw,ground-len*0.6,bx+sw*1.5+(gx-bx)*0.3,ground-len);c.stroke();c.lineCap='butt';
          c.fillStyle='#e0c0ff';for(let k=1;k<4;k++)c.fillRect(bx+sw*0.3*k-gs*0.4,ground-len*0.22*k,gs*0.8,gs*0.8);});}
        if(t>0.6){Gl.ox=Math.sin(t*18)*gs*2;Gl.oy=-Math.abs(Math.sin(t*9))*gs*6;Gl.rot=Math.sin(t*12)*0.4;once('w',()=>Snd.noise(0.3,0.08,0,'lowpass',500));Gl.dizzy=t>1.6;
          if(t>1.1){c.font=`800 ${gs*3.4}px "Pixelify Sans",monospace`;c.fillStyle='#fff';c.textAlign='center';c.fillText('LET GO!',gx,ground-G2*15);}}}
      else if(kind==='skate'){const k=Math.min(1,Math.max(0,(t-0.2)/1.2)),x=hx+(gx-hx+gs*4)*k;hdx=x-hx;hdy=-Math.max(0,Math.sin(Math.min(1,Math.max(0,(t-0.7)/0.5))*Math.PI))*H*0.25;pose='jump';
        post.push(()=>{c.save();c.translate(hx+hdx,ground+hdy-gs*0.5);c.rotate(t>0.7&&t<1.2?(t-0.7)*12.6:0);c.fillStyle='#ff4d6d';c.fillRect(-gs*7,-gs*0.6,gs*14,gs*1.2);c.fillStyle='#1d1f33';c.fillRect(-gs*5,gs*0.6,gs*2,gs*2);c.fillRect(gs*3,gs*0.6,gs*2,gs*2);c.restore();});
        if(t>1.2){once('land',()=>{Snd.slam();burst(gx,ground-G2*12,30,['#ffe066','#fff'],260);});Gl.sy=0.45;Gl.sx=1.3;Gl.dizzy=true;hdy=-G2*12*0.45;
          c.font=`800 ${gs*4.5}px "Pixelify Sans",monospace`;c.fillStyle='#5ef2ff';c.textAlign='center';c.fillText('KICKFLIP!',W*0.5,H*0.42);}}
      else if(kind==='tickle'){for(let i=0;i<4;i++){const a=t*10+i*1.6,fx=gx+Math.cos(a)*gs*9,fy=ground-G2*7+Math.sin(a*1.3)*gs*6;post.push(()=>{c.save();c.translate(fx,fy);c.rotate(a);c.fillStyle='#fff';c.beginPath();c.ellipse(0,0,gs*3,gs*0.9,0,0,6.28);c.fill();c.strokeStyle='#ff8fa3';c.lineWidth=2;c.beginPath();c.moveTo(-gs*3,0);c.lineTo(gs*3,0);c.stroke();c.restore();});}
        if(t>0.4){Gl.rot=Math.sin(t*16)*0.5;Gl.oy=-Math.abs(Math.sin(t*12))*gs*3;if((t*4|0)!==S.h){S.h=t*4|0;Snd.tone(700+Math.random()*300,0.08,'square',0.03);}
          c.font=`800 ${gs*3.6}px "Pixelify Sans",monospace`;c.fillStyle='#ff4d6d';c.textAlign='center';c.fillText(['HAHAHA!','HEHEHE!','STOP IT!'][(t*2|0)%3],gx,ground-G2*16);}if(t>1.9){Gl.rot=-1.5;Gl.oy=gs*2;Gl.dizzy=true;}}
      else if(kind==='catapult'){const cx=gx,arm=t<0.7?0:Math.min(1,(t-0.7)/0.15);post.push(()=>{c.fillStyle='#8a5a2a';c.fillRect(cx-gs*8,ground-gs*3,gs*16,gs*3);c.save();c.translate(cx+gs*6,ground-gs*3);c.rotate(-0.25-arm*1.6);c.fillRect(-gs*16,-gs,gs*16,gs*2);c.restore();});
        if(t<0.7){Gl.ox=-gs*6;Gl.oy=-gs*3;}else{once('l',()=>{Snd.whoosh();Snd.tone(300,0.5,'square',0.04,0,1200);});const q=Math.min(1,(t-0.7)/1.0);Gl.ox=-gs*6+q*W*0.1;Gl.oy=-gs*3-q*H*0.6;Gl.sx=Gl.sy=1-q*0.8;Gl.rot=q*16;}
        const mx=W*0.82,my=H*0.18;c.fillStyle='#f4f1d0';c.beginPath();c.arc(mx,my,gs*6,0,6.28);c.fill();c.fillStyle='#d9d4b0';c.beginPath();c.arc(mx-gs*2,my-gs,gs*1.4,0,6.28);c.arc(mx+gs*2,my+gs*2,gs,0,6.28);c.fill();
        if(t>1.7){once('d',()=>Snd.tone(1568,0.25,'triangle',0.05));c.fillStyle='#fff';const r=gs*(2+Math.sin(t*20));c.fillRect(mx-r,my-1,r*2,2);c.fillRect(mx-1,my-r,2,r*2);c.font=`800 ${gs*3.4}px "Pixelify Sans",monospace`;c.textAlign='center';c.fillText('TO THE MOON!',W*0.5,H*0.45);}}
      else if(kind==='magnet'){const mx=hx+gs*9,my=ground-gs*9;post.push(()=>{c.save();c.translate(mx,my);c.strokeStyle='#ff4d6d';c.lineWidth=gs*2.4;c.beginPath();c.arc(0,0,gs*3.5,Math.PI*0.5,Math.PI*1.5,false);c.stroke();c.fillStyle='#d7deeb';c.fillRect(0,-gs*4.7,gs*2.4,gs*2.4);c.fillRect(0,gs*2.3,gs*2.4,gs*2.4);c.restore();});
        if(t>0.3&&t<1.1){for(let i=0;i<3;i++){const r=((t*2+i/3)%1);c.strokeStyle=`rgba(94,242,255,${1-r})`;c.lineWidth=2;c.beginPath();c.arc(mx+gs*3,my,gs*4+r*(gx-mx),-0.5,0.5);c.stroke();}once('hm',()=>Snd.tone(110,0.8,'sawtooth',0.03));}
        if(t>0.6){const q=Math.min(1,(t-0.6)/0.5);Gl.ox=-q*(gx-mx-gs*10);Gl.oy=-q*(ground-my-G2*6);Gl.rot=q*0.5;if(q>=1){once('clang',()=>{Snd.block();Snd.slam();burst(mx+gs*8,my,30,['#d7deeb','#fff'],240);});Gl.dizzy=true;shake=t<1.3?12:0;}}}
      else if(kind==='candy'){const pile=Math.min(1,Math.max(0,(t-0.3)/1.4));for(let i=0;i<5;i++)if(Math.random()<0.9)P.push({x:gx+(Math.random()-0.5)*W*0.4,y:-10,vx:(Math.random()-0.5)*40,vy:200+Math.random()*200,life:1.6,col:pick(['#ff4d6d','#ffe066','#5ef2ff','#3fdc6b','#c084fc','#ff8fa3']),sz:6+Math.random()*5,g:400});
        if((t*8|0)!==S.c){S.c=t*8|0;Snd.tone(1200+Math.random()*800,0.04,'triangle',0.025);}
        post.push(()=>{const h=G2*14*pile;c.fillStyle='#ff8fa3';c.beginPath();c.moveTo(gx-G2*12,ground);c.quadraticCurveTo(gx,ground-h*2,gx+G2*12,ground);c.fill();for(let i=0;i<30*pile;i++){c.fillStyle=['#ff4d6d','#ffe066','#5ef2ff','#3fdc6b','#c084fc'][i%5];const a=i*2.4,r=(i%7)/7;c.fillRect(gx+Math.cos(a)*G2*9*r,ground-h*(0.2+0.75*(1-r))*Math.abs(Math.sin(a)),gs*1.3,gs*1.3);}});
        if(t>1.7){c.font=`800 ${gs*3.4}px "Pixelify Sans",monospace`;c.fillStyle='#fff';c.textAlign='center';c.fillText('SO... MUCH... CANDY',gx,ground-G2*17);}Gl.dizzy=t>1.5;}
      else if(kind==='bubble'){const k=Math.min(1,Math.max(0,(t-0.3)/0.3)),up=t>0.7?Math.min(1,(t-0.7)/1.0)*H*0.35:0;Gl.oy=-up;Gl.rot=Math.sin(t*3)*0.3;
        if(t<1.75)post.push(()=>{const r=G2*9*k;c.strokeStyle='#bfe8ff';c.lineWidth=3;c.fillStyle='rgba(180,230,255,0.25)';c.beginPath();c.arc(gx,ground-G2*6-up,r,0,6.28);c.fill();c.stroke();c.fillStyle='#ffffffaa';c.beginPath();c.arc(gx-r*0.4,ground-G2*6-up-r*0.4,r*0.15,0,6.28);c.fill();});
        if(t>0.3)once('b',()=>Snd.tone(500,0.3,'sine',0.05,0,900));
        if(t>=1.75){once('pop',()=>{Snd.noise(0.08,0.15,0,'highpass',2500);burst(gx,ground-G2*6-up,30,['#bfe8ff','#fff'],260);});const f=Math.min(1,(t-1.75)/0.3);Gl.oy=-up*(1-f);if(f>=1){Gl.dizzy=true;once('land',()=>Snd.slam());}}}
      else if(kind==='trampoline'){post.push(()=>{c.fillStyle='#1d1f33';c.fillRect(gx-G2*8,ground-gs*3,G2*16,gs*1.2);c.fillRect(gx-G2*7,ground-gs*2,gs,gs*2);c.fillRect(gx+G2*7-gs,ground-gs*2,gs,gs*2);});
        const bounces=[0,0.55,1.15],hmax=[0.12,0.25,0.6];let b=0;for(let i=0;i<3;i++)if(t>bounces[i]+0.2)b=i;const t0=bounces[b]+0.2,dur=b===2?2:0.55,q=(t-t0)/dur;
        if(t>0.2){Gl.oy=-gs*3-Math.max(0,Math.sin(Math.min(1,q)*Math.PI))*H*hmax[b];if(b===2&&q>0.4){Gl.oy=-gs*3-H*hmax[b]-(q-0.4)*H;Gl.rot=q*8;}if(!S['bb'+b]){S['bb'+b]=1;Snd.tone(300+b*150,0.12,'square',0.04,0,700+b*200);}}
        if(t>1.6){c.font=`800 ${gs*4}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('BOING-OING!',W*0.5,H*0.45);}}
      else if(kind==='ghost'){const k=Math.min(1,Math.max(0,(t-0.4)/0.25)),gx2=gx-gs*10;if(k>0){post.push(()=>{c.globalAlpha=0.85*k;c.fillStyle='#f4f7fb';c.beginPath();c.arc(gx2,ground-gs*14,gs*5,Math.PI,0);c.lineTo(gx2+gs*5,ground-gs*6);for(let i=0;i<4;i++)c.lineTo(gx2+gs*5-(i+0.5)*gs*2.5,ground-gs*(i%2?6:8));c.lineTo(gx2-gs*5,ground-gs*6);c.fill();
          c.fillStyle='#1d1f33';c.fillRect(gx2-gs*2.5,ground-gs*15,gs*1.4,gs*2);c.fillRect(gx2+gs,ground-gs*15,gs*1.4,gs*2);c.beginPath();c.ellipse(gx2,ground-gs*11,gs*1.2,gs*1.6,0,0,6.28);c.fill();c.globalAlpha=1;});once('boo',()=>Snd.tone(150,0.5,'sawtooth',0.05,0,90));}
        if(t>0.5&&t<1.3){c.font=`800 ${gs*6}px "Pixelify Sans",monospace`;c.fillStyle='#fff';c.textAlign='center';c.fillText('BOO!',gx2,ground-gs*21);}
        if(t>0.65){const q=Math.min(1,(t-0.65)/0.3);Gl.oy=-Math.sin(q*Math.PI)*H*0.32;Gl.white=t<0.9;Gl.sx=1+Math.sin(t*40)*0.08;if(t>0.95){Gl.ox=(t-0.95)*W*0.6;Gl.rot=Math.sin(t*25)*0.2;once('run',()=>Snd.whoosh());c.font=`800 ${gs*3}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.fillText('AAAAH!',gx+Gl.ox,ground-G2*15);}}}
      else if(kind==='laserdog'){const p=PETS[pet],ps=Math.round(gs*1.4),pw=p.rows[0].length*ps,ph=p.rows.length*ps,dx=hx+gs*4;post.push(()=>drawPet(c,pet,dx,ground-ph,ps,t));
        if(t>0.45&&t<1.4){once('l',()=>Snd.tone(1800,0.9,'sawtooth',0.03,0,900));post.push(()=>{const ey=ground-ph*0.7;c.strokeStyle='#ff2d4d';c.lineWidth=gs*0.9+Math.sin(t*50)*gs*0.3;c.beginPath();c.moveTo(dx+pw*0.8,ey);c.lineTo(gx,ground-G2*7+Math.sin(t*20)*gs*3);c.stroke();c.strokeStyle='#fff';c.lineWidth=gs*0.3;c.stroke();});
          if(Math.random()<0.7)burst(gx,ground-G2*7,3,['#ff2d4d','#ffe066'],180);Gl.white=(t*14|0)%2===0;shake=4;}
        if(t>1.4){Gl.tint='rgba(20,20,30,0.55)';Gl.dizzy=true;c.font=`800 ${gs*3.6}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('GOOD DOG!',dx+pw/2,ground-ph-gs*3);}}
      else if(kind==='kart'){heroHide=true;const k=Math.min(1,t/0.85),kx=-gs*20+k*(gx-G2*7+gs*20),bump=t>0.85&&t<1.0;post.push(()=>{if(ride){Rides.draw(c,ride,kx-13*gs,ground-22*gs,gs,look,t,t<0.85);return;}const ky=ground-gs*5;c.fillStyle='#ff4d6d';c.fillRect(kx-gs*8,ky,gs*16,gs*4);c.fillStyle='#1d1f33';c.beginPath();c.arc(kx-gs*5,ground-gs,gs*2,0,6.28);c.arc(kx+gs*5,ground-gs,gs*2,0,6.28);c.fill();
          drawHero(c,kx-6*gs*0.8,ky-gs*9,gs*0.8,look,'stand',t);c.fillStyle='#ffe066';c.fillRect(kx+gs*7,ky+gs,gs*2,gs*2);});
        if(t<0.85&&Math.random()<0.8)P.push({x:kx-gs*9,y:ground-gs*3,vx:-80,vy:-20,life:0.4,col:'#8a8a9a',sz:5,g:0});if((t*10|0)!==S.v&&t<0.85){S.v=t*10|0;Snd.tone(110+t*80,0.06,'sawtooth',0.03);}
        if(t>0.85){once('b',()=>{Snd.crit();Snd.slam();burst(gx-G2*5,ground-G2*6,30,['#ffe066','#fff'],280);});const q=Math.min(1,(t-0.85)/0.7);Gl.ox=q*W*0.25;Gl.oy=-Math.sin(q*Math.PI)*H*0.25;Gl.rot=q*10;Gl.dizzy=q>=1;shake=bump?16:0;
          c.font=`800 ${gs*4.5}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('BEEP BEEP!',W*0.45,H*0.42);}}
      else if(kind==='frisbee'){const run=Math.abs(Math.sin(t*16))*gs;let fx=null,fy=0,dx,dy,rot=0,flip=false;pose=t<0.35?'stand':'jump';
        if(t<0.3){fx=hx+gs*10;fy=ground-gs*9;}else if(t<0.9){const q=(t-0.3)/0.6;fx=hx+gs*10+(gx-hx-gs*10)*q;fy=ground-gs*9-Math.sin(q*Math.PI)*H*0.12-q*(G2*3);}
        else if(t<1.45){const q=(t-0.9)/0.55;fx=gx+q*gs*6;fy=ground-G2*12-q*H*0.22;}
        if(t>0.3)once('th',()=>Snd.whoosh());if(t>0.9){once('bonk',()=>{Snd.hit();burst(gx,ground-G2*12,20,['#ffe066','#fff'],220);});Gl.dizzy=true;Gl.rot=Math.min(0.3,(t-0.9)*2);}
        const x0=hx-gs*4-dpw,x1=gx-gs*10-dpw/2;
        if(t<0.4){dx=x0;dy=ground-dph;}else if(t<1.1){dx=x0+(x1-x0)*(t-0.4)/0.7;dy=ground-dph-run;}
        else if(t<1.8){const q=(t-1.1)/0.7;dx=x1+q*gs*26;dy=ground-dph-Math.sin(q*Math.PI)*(H*0.22+G2*12);rot=q*0.7-0.35;if(q>0.5&&!S.c){S.c=1;Snd.gem();burst(dx+dpw,dy,16,['#ff4d6d','#ffe066','#fff'],200);}}
        else{const q=Math.min(1,(t-1.8)/0.6);dx=x1+gs*26-q*gs*10;dy=ground-dph-run*0.5;flip=true;}
        post.push(()=>{dogAt(dx,dy,dps,{rot,flip});const disc=(x,y,r)=>{c.fillStyle='#ff4d6d';c.beginPath();c.ellipse(x,y,gs*2.6,gs*0.9,r,0,6.28);c.fill();c.fillStyle='#ffffffaa';c.fillRect(x-gs,y-gs*0.3,gs*2,gs*0.4);};
          if(fx!=null)disc(fx,fy,Math.sin(t*20)*0.2);else disc(flip?dx:dx+dpw,dy+dph*0.45,0);
          if(t>1.45){c.font=`800 ${gs*3.6}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('NICE CATCH!',W*0.5,H*0.42);}});}
      else if(kind==='bigbone'){const run=Math.abs(Math.sin(t*16))*gs;let bx=gx,by,brot=t<0.8?t*7:0,dx;
        by=t<0.8?-H*0.2+(t/0.8)*(ground-G2*12*0.35-gs*3+H*0.2):ground-G2*12*0.35-gs*3;
        if(t>=0.8){once('l',()=>{Snd.slam();burst(gx,ground-G2*5,30,['#fff8e8','#ffe066'],260);});Gl.sy=0.35;Gl.sx=1.4;Gl.dizzy=true;shake=t<1.0?14:0;}
        if(t<1.1)dx=-dpw-gs*4;else if(t<1.7)dx=-dpw+(gx-gs*12-dpw+dpw)*((t-1.1)/0.6);else dx=gx-gs*12-dpw+(t-1.7)*W*0.5;
        if(t>1.7){bx=dx+dpw+gs*10;by=ground-dph*0.5;brot=0;Gl.sy=Math.min(1,0.35+(t-1.7)*1.5);Gl.sx=Math.max(1,1.4-(t-1.7));once('y',()=>Snd.tone(600,0.15,'square',0.05,0,900));}
        post.push(()=>{c.save();c.translate(bx,by);c.rotate(brot);c.fillStyle='#fff8e8';c.fillRect(-gs*9,-gs*1.5,gs*18,gs*3);for(const [ox,oy] of [[-9,-1.6],[-9,1.6],[9,-1.6],[9,1.6]]){c.beginPath();c.arc(ox*gs,oy*gs,gs*2.2,0,6.28);c.fill();}c.restore();
          if(t>1.1)dogAt(dx,ground-dph-(t<1.7?run:run*0.4),dps);
          if(t>1.8){c.font=`800 ${gs*3.6}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('MINE NOW!',W*0.5,H*0.42);}});}
      else if(kind==='sled'){heroHide=true;c.fillStyle='#f4f8ff';c.fillRect(0,ground,W,H-ground);if(Math.random()<0.8)P.push({x:Math.random()*W,y:-5,vx:-20,vy:60+Math.random()*60,life:3,col:'#fff',sz:3+Math.random()*3,g:0});
        const sx=-W*0.25+t*W*0.6,run=Math.abs(Math.sin(t*16))*gs*0.8,kx=sx-gs*22;
        if(sx+dpw>gx-G2*5&&!S.hit){S.hit=t;Snd.crit();Snd.slam();burst(gx-G2*4,ground-G2*6,30,['#fff','#bfe8ff','#ffe066'],280);}
        if(S.hit){const q=Math.min(1,(t-S.hit)/0.8);Gl.ox=q*W*0.3;Gl.oy=-Math.sin(q*Math.PI)*H*0.3;Gl.rot=q*12;Gl.dizzy=q>=1;shake=t-S.hit<0.2?14:0;}
        if((t*12|0)!==S.v){S.v=t*12|0;Snd.noise(0.05,0.03,0,'highpass',3000);}
        post.push(()=>{c.strokeStyle='#8a5a2a';c.lineWidth=2;c.beginPath();c.moveTo(sx+dpw*0.3,ground-dph*0.5);c.lineTo(kx+gs*14,ground-gs*3.5);c.stroke();dogAt(sx,ground-dph-run,dps);
          c.fillStyle='#c0392b';c.fillRect(kx,ground-gs*4,gs*14,gs*3);c.fillStyle='#8a94ad';c.fillRect(kx-gs,ground-gs,gs*16,gs*0.8);c.fillRect(kx+gs*14,ground-gs*3,gs,gs*2.4);
          drawHero(c,kx+gs*3,ground-gs*3.5-15*gs*0.8,gs*0.8,look,'stand',t);if(S.hit&&t-S.hit<1){c.font=`800 ${gs*4}px "Pixelify Sans",monospace`;c.fillStyle='#3fa7ff';c.textAlign='center';c.fillText('MUSH!',W*0.5,H*0.42);}});}
      else if(kind==='dig'){const dx=gx-G2*7-dpw,dig=t>0.3&&t<1.5;
        if(dig&&Math.random()<0.9)P.push({x:dx+dpw*0.2,y:ground-gs*2,vx:-120-Math.random()*160,vy:-160-Math.random()*160,life:0.8,col:pick(['#6b4a2a','#8a6a3a','#4a3a1a']),sz:4+Math.random()*4,g:500});
        if(dig&&(t*8|0)!==S.d){S.d=t*8|0;Snd.noise(0.06,0.06,0,'lowpass',800);}
        if(t>0.9){const q=Math.min(1,(t-0.9)/0.8);Gl.oy=q*G2*10;Gl.rot=Math.sin(t*10)*0.15*(1-q);once('f',()=>Snd.tone(500,0.6,'square',0.04,0,120));}
        const mound=Math.min(1,Math.max(0,(t-0.3)/1.2));
        post.push(()=>{c.fillStyle='#2d2a3a';c.fillRect(gx-G2*8,ground,G2*16,H-ground);c.fillStyle='#6b4a2a';c.beginPath();c.ellipse(dx-gs*4,ground,gs*10*mound,gs*6*mound,0,Math.PI,0);c.fill();
          const hop=t>1.7?Math.abs(Math.sin(t*10))*gs*2:0;dogAt(dx,ground-dph-hop,dps,{rot:dig?Math.sin(t*30)*0.12+0.15:0});
          if(t>1.7){c.font=`800 ${gs*4}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('BURIED!',W*0.5,H*0.42);}});}
      else if(kind==='bath'){const tx=W*0.42,shk=t>1.0&&t<1.8;
        if(t<1.0&&Math.random()<0.5)P.push({x:tx+(Math.random()-0.5)*gs*14,y:ground-gs*7,vx:(Math.random()-0.5)*20,vy:-40-Math.random()*40,life:1,col:'#ffffffcc',sz:5+Math.random()*6,g:-20});
        if(shk){once('s',()=>Snd.noise(0.7,0.08,0,'bandpass',1500));for(let i=0;i<3;i++)P.push({x:tx,y:ground-gs*9,vx:100+Math.random()*W*0.45,vy:-200-Math.random()*150,life:1,col:pick(['#5ef2ff','#3fa7ff','#bfe8ff']),sz:4+Math.random()*3,g:520});}
        if(t>1.3){Gl.wet=true;Gl.white=t<1.9&&(t*14|0)%2===0;if(t<1.9&&Math.random()<0.5)burst(gx,ground-G2*8,3,['#ffe066','#5ef2ff'],200);Gl.dizzy=t>1.9;Gl.rot=t>1.9?0.4:0;once('z',()=>Snd.tone(1200,0.5,'sawtooth',0.03,0,200));}
        post.push(()=>{dogAt(tx-dpw/2+(shk?Math.sin(t*60)*gs:0),ground-gs*5-dph+gs*1,dps,{rot:shk?Math.sin(t*50)*0.15:0});c.fillStyle='#d7deeb';c.fillRect(tx-gs*10,ground-gs*6,gs*20,gs*6);c.fillStyle='#ffffff';c.fillRect(tx-gs*11,ground-gs*6.5,gs*22,gs*1.2);
          c.fillStyle='#8a94ad';c.fillRect(tx-gs*9,ground-gs*0.5,gs*2,gs*0.5);c.fillRect(tx+gs*7,ground-gs*0.5,gs*2,gs*0.5);for(let i=0;i<6;i++){c.fillStyle='#ffffffdd';c.beginPath();c.arc(tx-gs*8+i*gs*3.2,ground-gs*6.5,gs*1.6,0,6.28);c.fill();}
          c.font=`800 ${gs*3.6}px "Pixelify Sans",monospace`;c.textAlign='center';if(shk){c.fillStyle='#5ef2ff';c.fillText('SHAKE SHAKE!',W*0.5,H*0.42);}else if(t>1.8){c.fillStyle='#ffe066';c.fillText('SHORT CIRCUIT!',W*0.5,H*0.42);}});}
      else if(kind==='superdog'){let dx,dy,rot=0;const lerp=(a,b,q)=>a+(b-a)*q;
        if(t<0.5){const q=t/0.5;dx=lerp(hx-gs*6,W*0.3,q);dy=lerp(ground-dph,H*0.18,q);rot=-0.5;}
        else if(t<1.0){const q=(t-0.5)/0.5;dx=lerp(W*0.3,W*0.5,q);dy=H*0.18+Math.sin(q*Math.PI*2)*H*0.05;}
        else if(t<1.3){const q=(t-1.0)/0.3;dx=lerp(W*0.5,gx-G2*6-dpw,q);dy=lerp(H*0.18,ground-G2*7-dph/2,q);rot=0.6;}
        else{const q=Math.min(1,(t-1.3)/0.4);dx=lerp(gx-G2*6-dpw,gx-gs*4-dpw,q);dy=ground-G2*9-dph/2-Math.sin(t*6)*gs;}
        once('up',()=>Snd.tone(400,0.5,'square',0.04,0,1200));if(t>1.3){once('pow',()=>{Snd.crit();burst(gx-G2*5,ground-G2*7,40,['#ff4d6d','#ffe066','#fff'],320);});const q=Math.min(1,(t-1.3)/0.9);Gl.ox=q*W*0.35;Gl.oy=-q*H*0.45;Gl.rot=q*14;Gl.sx=Gl.sy=1-q*0.6;shake=t<1.45?16:0;}
        if(t<1.3&&Math.random()<0.7)P.push({x:dx,y:dy+dph/2,vx:-40,vy:0,life:0.4,col:pick(['#ff4d6d','#ffe066']),sz:4,g:0});
        post.push(()=>{c.save();c.translate(dx+dpw*0.3,dy+dph*0.25);c.rotate(rot);c.fillStyle='#e8463c';c.beginPath();c.moveTo(0,0);c.lineTo(-dpw*1.1,-gs*1.5+Math.sin(t*20)*gs*1.5);c.lineTo(-dpw*1.1,gs*2.5+Math.sin(t*20+1)*gs*1.5);c.lineTo(0,dph*0.35);c.fill();c.restore();
          dogAt(dx,dy,dps,{rot});if(t>1.3&&t<2.0){c.font=`800 ${gs*5}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('POW!',gx-G2*3,ground-G2*13);}});}
      else if(kind==='dogband'){const xs=[W*0.26,W*0.38,W*0.5],ids=[pet,dogs.find(d=>d!==pet)||'puppy',dogs.filter(d=>d!==pet)[1]||'pug'],beat=(t*5|0);
        const MEL=[523,659,784,659,880,784,659,523,587,698,880,1047,880,784,659,523];if(beat!==S.b&&t<2.4){S.b=beat;Snd.tone(MEL[beat%MEL.length],0.16,'square',0.035);if(beat%2===0)Snd.noise(0.06,0.08,0,'lowpass',300);P.push({x:xs[beat%3],y:ground-gs*12,vx:(Math.random()-0.5)*40,vy:-80,life:1.2,col:'note',sz:gs*3,g:0});}
        if(t<2.0){Gl.oy=-Math.abs(Math.sin(t*10))*gs*3;Gl.rot=Math.sin(t*5)*0.3;}else{Gl.rot=Math.min(1.5,(t-2.0)*5);Gl.oy=gs*2;Gl.dizzy=true;once('f',()=>Snd.slam());}
        pose=(t*5|0)%2?'jump':'stand';
        post.push(()=>{ids.forEach((id,i)=>{const p=PETS[id],ps=Math.round(gs*0.95),pw=p.rows[0].length*ps,ph=p.rows.length*ps,x=xs[i]-pw/2,y=ground-ph-(i===beat%3?gs:0);drawPet(c,id,x,y,ps,t*3);
            if(i===0){c.fillStyle='#c0392b';c.fillRect(xs[i]+pw*0.5,ground-gs*5,gs*5,gs*5);c.fillStyle='#fff';c.fillRect(xs[i]+pw*0.5,ground-gs*5,gs*5,gs);}
            else if(i===1){c.fillStyle='#b07a4a';c.beginPath();c.ellipse(xs[i],y+ph*0.6,gs*3,gs*2,0,0,6.28);c.fill();c.fillStyle='#5a3a1a';c.fillRect(xs[i],y+ph*0.5,gs*7,gs*0.8);}
            else{c.fillStyle='#ffe066';c.fillRect(xs[i]+pw*0.4,y+ph*0.35,gs*4,gs*1.2);c.beginPath();c.moveTo(xs[i]+pw*0.4+gs*4,y+ph*0.35-gs);c.lineTo(xs[i]+pw*0.4+gs*7,y+ph*0.35-gs*2.5);c.lineTo(xs[i]+pw*0.4+gs*7,y+ph*0.35+gs*3.5);c.lineTo(xs[i]+pw*0.4+gs*4,y+ph*0.35+gs*2.2);c.fill();}});
          if(t>2.0){c.font=`800 ${gs*3.6}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('ROCKED OUT!',W*0.5,H*0.42);}});}
      else if(kind==='howl'){const mx=W*0.45,my=H*0.2,dx=W*0.32;c.fillStyle='#fffbe0';c.beginPath();c.arc(mx,my,gs*7,0,6.28);c.fill();c.fillStyle='#e8e2b0';c.beginPath();c.arc(mx-gs*2,my-gs,gs*1.5,0,6.28);c.arc(mx+gs*2.5,my+gs*2,gs,0,6.28);c.fill();
        if(t>0.5)once('a',()=>{Snd.tone(330,1.3,'sine',0.07,0,660);Snd.tone(332,1.3,'triangle',0.03,0.05,640);});
        if(t>1.3){const q=Math.min(1,(t-1.3)/0.5);Gl.split=q*G2*5;Gl.dizzy=true;once('k',()=>{Snd.crit();burst(gx,ground-G2*6,30,['#5ef2ff','#fff','#ff4d6d'],260);});}else if(t>0.7){Gl.ox=Math.sin(t*60)*gs*0.8;}
        post.push(()=>{dogAt(dx-dpw/2,ground-dph,dps,{rot:t>0.5&&t<1.8?-0.45:0});
          if(t>0.5&&t<1.9){for(let i=0;i<4;i++){const r=((t*1.5+i/4)%1);c.strokeStyle=`rgba(255,251,224,${1-r})`;c.lineWidth=3;c.beginPath();c.arc(dx+dpw*0.4,ground-dph*1.2,gs*4+r*(gx-dx),-0.6,0.4);c.stroke();}
            c.font=`800 ${gs*4}px "Pixelify Sans",monospace`;c.fillStyle='#fffbe0';c.textAlign='center';c.fillText('AWOOOOO!',dx+gs*4,ground-dph-gs*8);}
          if(t>1.9){c.font=`800 ${gs*3.6}px "Pixelify Sans",monospace`;c.fillStyle='#5ef2ff';c.textAlign='center';c.fillText('GLITCH FELL APART!',W*0.5,H*0.42);}});}
      else if(kind==='cute'){const k=Math.min(1,Math.max(0,(t-0.6)/0.4)),ps2=dps*(1+k*0.7),pw2=PETS[pet].rows[0].length*ps2,ph2=PETS[pet].rows.length*ps2,x=lerpC(hx+gs*2,gx-G2*7-pw2,t/0.6);
        if(t>0.7&&Math.random()<0.5)P.push({x:x+pw2/2+(Math.random()-0.5)*pw2,y:ground-ph2,vx:(Math.random()-0.5)*30,vy:-70-Math.random()*50,life:1.4,col:'heart',sz:gs*2.4,g:0});
        if(t>0.6)once('aw',()=>{Snd.tone(784,0.3,'sine',0.05,0,1047);Snd.tone(659,0.4,'sine',0.04,0.3,523);});
        if(t>1.0){const q=Math.min(1,(t-1.0)/1.0);Gl.tint=`rgba(255,143,163,${0.6*q})`;Gl.sy=1-q*0.6;Gl.sx=1+q*0.5;}
        post.push(()=>{dogAt(x,ground-ph2-(t<0.6?Math.abs(Math.sin(t*16))*gs:0),ps2);if(k>0){c.fillStyle='#ffffff';for(let i=0;i<4;i++){const a=t*4+i*1.57;c.fillRect(x+pw2/2+Math.cos(a)*pw2*0.7,ground-ph2*0.6+Math.sin(a)*ph2*0.6,4,4);}}
          if(t>1.0){c.font=`800 ${gs*3.4}px "Pixelify Sans",monospace`;c.fillStyle='#ff8fa3';c.textAlign='center';c.fillText(t>1.8?'CUTENESS OVERLOAD!':'TOO... CUTE...',W*0.5,H*0.36);}});}
      else if(kind==='treat'){let tx,ty,dx,dy,rot=0;const top=ground-G2*12-dph-H*0.18,jx=gx-G2*4-dpw/2;
        if(t<0.3){tx=hx+gs*10;ty=ground-gs*9;}else if(t<1.1){const q=(t-0.3)/0.8;tx=hx+gs*10+(gx-hx-gs*10)*q;ty=ground-gs*9-Math.sin(q*Math.PI*0.62)*(ground-gs*9-top+gs*2);}else tx=null;
        if(t>0.3)once('th',()=>Snd.whoosh());pose=t<0.4?'stand':'jump';
        if(t<0.75){dx=lerpC(hx-gs*4-dpw,jx,t/0.75);dy=ground-dph-Math.abs(Math.sin(t*16))*gs;}
        else if(t<1.5){const q=(t-0.75)/0.75;dx=lerpC(jx,gx-dpw/2,q);const land=ground-G2*12*0.5-dph;dy=q<0.47?lerpC(ground-dph,top,Math.sin(q/0.47*Math.PI/2)):lerpC(top,land,(q-0.47)/0.53);rot=-q*6.283;if(q>0.45)once('c',()=>{Snd.gem();burst(dx+dpw/2,dy,14,['#c98a4a','#ffe066','#fff'],180);});}
        else{dx=gx-dpw/2;dy=ground-G2*12*0.5-dph-Math.abs(Math.sin(t*8))*gs;}
        if(t>=1.5){once('sq',()=>{Snd.slam();burst(gx,ground-G2*6,24,['#ffe066','#fff'],240);});Gl.sy=0.5;Gl.sx=1.3;Gl.dizzy=true;}
        post.push(()=>{if(tx!=null){c.fillStyle='#c98a4a';c.fillRect(tx-gs*1.5,ty-gs*0.8,gs*3,gs*1.6);c.fillStyle='#a0652a';c.fillRect(tx-gs*1.5,ty+gs*0.3,gs*3,gs*0.5);}
          dogAt(dx,dy,dps,{rot});if(t>1.55){c.font=`800 ${gs*3.6}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('BACKFLIP! 10/10',W*0.5,H*0.42);}});}
      else if(kind==='tornado'){const k=Math.min(1,Math.max(0,(t-0.2)/0.4)),fx=gx+Math.sin(t*3)*gs*3;once('w',()=>Snd.noise(2.2,0.08,0,'bandpass',600));
        post.push(()=>{for(let i=0;i<14;i++){const yy=ground-i*gs*2.6*k,r=gs*(2+i*1.05)*k,ox=Math.sin(t*9+i*0.6)*gs*1.5;c.strokeStyle=`rgba(200,210,230,${0.35+0.04*i})`;c.lineWidth=gs*0.9;c.beginPath();c.ellipse(fx+ox,yy,r,r*0.28,0,0,6.28);c.stroke();}});
        if(t>0.5&&t<2.0){const q=Math.min(1,(t-0.5)/0.5);Gl.oy=-q*H*0.28+Math.sin(t*8)*gs*2;Gl.ox=fx-gx+Math.cos(t*10)*gs*4;Gl.rot=t*14;if(Math.random()<0.5)P.push({x:fx+(Math.random()-0.5)*gs*20,y:ground-Math.random()*H*0.4,vx:(Math.random()-0.5)*200,vy:-60,life:0.6,col:'#8a7a5a',sz:4,g:0});}
        if(t>=2.0){const q=Math.min(1,(t-2.0)/0.25);Gl.oy=-(1-q)*H*0.28;Gl.rot=0;Gl.dizzy=true;if(q>=1)once('d',()=>{Snd.slam();burst(gx,ground-G2*4,24,['#ffe066','#fff'],240);});}
        if(t>0.6&&t<1.9){c.font=`800 ${gs*4}px "Pixelify Sans",monospace`;c.fillStyle='#e0e8ff';c.textAlign='center';c.fillText('WHOOOOSH!',W*0.45,H*0.42);}}
      else if(kind==='volcano'){const vx=gx,vh=gs*9;post.push(()=>{c.fillStyle='#5a3a2a';c.beginPath();c.moveTo(vx-gs*14,ground);c.lineTo(vx-gs*4,ground-vh);c.lineTo(vx+gs*4,ground-vh);c.lineTo(vx+gs*14,ground);c.fill();c.fillStyle='#ff7b1c';c.fillRect(vx-gs*4,ground-vh,gs*8,gs*1.4);});
        if(t<0.6){Gl.oy=-vh+Math.sin(t*30)*2;shake=t>0.3?6:0;}
        else{once('e',()=>{Snd.boom();burst(vx,ground-vh,50,['#ff7b1c','#ffe066','#ff4d6d'],420);});const q=Math.min(1,(t-0.6)/1.4);Gl.oy=-vh-Math.sin(q*Math.PI)*H*0.55;Gl.rot=q*9;Gl.tint=t>0.8?'rgba(40,20,20,0.5)':null;Gl.dizzy=q>=1;shake=t<0.9?14:0;
          if(Math.random()<0.8)P.push({x:vx+(Math.random()-0.5)*gs*6,y:ground-vh,vx:(Math.random()-0.5)*160,vy:-300-Math.random()*250,life:1.2,col:pick(['#ff7b1c','#ffe066','#ff4d6d']),sz:5+Math.random()*4,g:500});
          c.font=`800 ${gs*4.5}px "Pixelify Sans",monospace`;c.fillStyle='#ff7b1c';c.textAlign='center';c.fillText('KA-BLOOEY!',W*0.45,H*0.4);}}
      else if(kind==='dragonfire'){const dk=Math.min(1,t/0.6),ddx=-W*0.2+dk*(hx+gs*14+W*0.2),ddy=ground-gs*19+Math.sin(t*6)*gs*2,flap=Math.sin(t*16);
        post.push(()=>{c.save();c.translate(ddx,ddy);c.fillStyle='#3fae5a';c.fillRect(-gs*6,-gs*2,gs*10,gs*5);c.fillRect(gs*3,-gs*4,gs*5,gs*4);c.fillStyle='#2a7a3a';c.fillRect(-gs*10,0,gs*4,gs*2);
          c.fillStyle='#7ad06a';c.beginPath();c.moveTo(-gs*3,-gs*2);c.lineTo(gs*1,-gs*2);c.lineTo(-gs*1,-gs*2-gs*6*(0.5+flap*0.5));c.fill();c.fillStyle='#fff';c.fillRect(gs*6,-gs*3.4,gs*1.2,gs*1.2);c.fillStyle='#1d1f33';c.fillRect(gs*6.5,-gs*3,gs*0.6,gs*0.6);c.restore();});
        if(t>0.8&&t<1.7){once('f',()=>Snd.noise(0.9,0.15,0,'lowpass',900));for(let i=0;i<5;i++)P.push({x:ddx+gs*8,y:ddy-gs*2,vx:(gx-ddx)*1.6*(0.8+Math.random()*0.4),vy:(ground-G2*6-ddy)*1.6*(0.8+Math.random()*0.4),life:0.55,col:pick(['#ff7b1c','#ffe066','#ff4d6d','#fff']),sz:6+Math.random()*6,g:0});Gl.white=(t*12|0)%2===0;}
        if(t>=1.7){Gl.tint='rgba(25,20,20,0.7)';Gl.dizzy=true;once('p',()=>{Snd.tone(200,0.3,'sawtooth',0.04,0,80);for(let i=0;i<14;i++)P.push({x:gx,y:ground-G2*12,vx:(Math.random()-0.5)*60,vy:-50-Math.random()*60,life:1.2,col:'#555',sz:8,g:-20});});
          c.font=`800 ${gs*4}px "Pixelify Sans",monospace`;c.fillStyle='#ff7b1c';c.textAlign='center';c.fillText('TOASTY!',W*0.5,H*0.4);}}
      else if(kind==='ninja'){pose=t<0.3?'stand':t<1.2?'jump':'stand';hdy=t>0.3&&t<1.2?-Math.sin((t-0.3)/0.9*Math.PI)*gs*10:0;
        for(let i=0;i<3;i++){const t0=0.45+i*0.15,q=Math.min(1,Math.max(0,(t-t0)/0.35));if(t<t0)continue;once('s'+i,()=>Snd.tone(1400,0.08,'square',0.03,0,700));
          const sx=hx+gs*6,sy=ground-gs*10+hdy,tx=gx-G2*4,ty=ground-G2*(9-i*3),x=sx+(tx-sx)*q,y=sy+(ty-sy)*q;
          post.push(()=>{c.save();c.translate(x,y);c.rotate(q<1?t*30:0.4);c.fillStyle='#c9d3e6';for(let j=0;j<4;j++){c.rotate(Math.PI/2);c.beginPath();c.moveTo(0,0);c.lineTo(gs*0.8,-gs*0.8);c.lineTo(0,-gs*2.6);c.fill();}c.fillStyle='#1d1f33';c.fillRect(-gs*0.4,-gs*0.4,gs*0.8,gs*0.8);c.restore();});
          if(q>=1)once('h'+i,()=>{Snd.block();burst(tx,ty,8,['#fff','#c9d3e6'],180);});}
        if(t>1.0){Gl.white=t<1.3&&(t*14|0)%2===0;Gl.dizzy=t>1.4;c.font=`800 ${gs*4.5}px "Pixelify Sans",monospace`;c.fillStyle='#fff';c.textAlign='center';c.fillText('HI-YAH!',W*0.45,H*0.4);}}
      else if(kind==='boomerang'){pose=t<0.3?'stand':'jump';hdy=0;const q=Math.min(1,Math.max(0,(t-0.3)/1.6)),a=q*Math.PI*2,cx=(hx+gx)/2,rx=(gx-hx)/2,bx=cx-Math.cos(a)*rx,by=ground-gs*9-Math.sin(a)*H*0.18;
        if(t>0.3&&q<1){once('t',()=>Snd.whoosh());post.push(()=>{c.save();c.translate(bx,by);c.rotate(t*18);c.fillStyle='#c98a4a';c.fillRect(-gs*3,-gs*0.7,gs*3,gs*1.4);c.fillRect(-gs*0.7,-gs*3,gs*1.4,gs*3);c.restore();});if((t*10|0)!==S.v){S.v=t*10|0;Snd.tone(500,0.05,'triangle',0.02);}}
        if(q>0.5){once('hit',()=>{Snd.hit();burst(gx,ground-G2*8,24,['#ffe066','#fff'],240);});Gl.rot=Math.min(0.5,(q-0.5)*3);Gl.dizzy=true;Gl.ox=Math.min(gs*6,(q-0.5)*gs*20);}
        if(q>=1){c.font=`800 ${gs*4}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('NICE CATCH!',W*0.45,H*0.4);}}
      else if(kind==='freeze'){const beam=t>0.3&&t<0.9,frozen=t>=0.9&&t<1.8;
        if(beam){once('b',()=>Snd.tone(1600,0.6,'sine',0.04,0,2400));post.push(()=>{c.strokeStyle='#bfe8ff';c.lineWidth=gs*1.6+Math.sin(t*40)*gs*0.4;c.beginPath();c.moveTo(hx+gs*6,ground-gs*9);c.lineTo(gx,ground-G2*6);c.stroke();c.strokeStyle='#fff';c.lineWidth=gs*0.5;c.stroke();});if(Math.random()<0.6)burst(gx,ground-G2*6,2,['#bfe8ff','#fff'],120);}
        if(frozen){Gl.tint='rgba(160,220,255,0.55)';post.push(()=>{c.fillStyle='rgba(190,232,255,0.45)';c.strokeStyle='#e8f8ff';c.lineWidth=3;c.fillRect(gx-G2*7.5,ground-G2*14,G2*15,G2*14);c.strokeRect(gx-G2*7.5,ground-G2*14,G2*15,G2*14);c.fillStyle='#ffffffaa';c.fillRect(gx-G2*6,ground-G2*12.5,G2*2,G2*6);});
          if(t>1.4){pose='runA';hdx=Math.min(1,(t-1.4)/0.4)*(gx-hx-G2*10);}}
        if(t>=1.8){once('x',()=>{Snd.crit();Snd.noise(0.3,0.15,0,'highpass',3000);for(let i=0;i<30;i++){const a=Math.random()*6.28,v=150+Math.random()*300;P.push({x:gx,y:ground-G2*7,vx:Math.cos(a)*v,vy:Math.sin(a)*v-100,life:0.9,col:pick(['#bfe8ff','#ffffff','#8fd0ff']),sz:6+Math.random()*6,g:600});}});
          hdx=(gx-hx-G2*10)*(1-Math.min(1,(t-1.8)/0.5));pose='stand';Gl.dizzy=true;Gl.rot=0.3;c.font=`800 ${gs*4.5}px "Pixelify Sans",monospace`;c.fillStyle='#bfe8ff';c.textAlign='center';c.fillText('SHATTER!',W*0.45,H*0.4);}}
      else if(kind==='sumo'){heroHide=true;const g=Math.min(1,t/0.4),run=t>0.6?Math.min(1,(t-0.6)/0.35):0,bx=hx+run*(gx-hx-G2*9);
        post.push(()=>{c.save();c.translate(bx,ground);c.scale(1+g*0.9,1+g*0.15);drawHero(c,-6*gs,-14*gs,gs,look,run>0&&run<1?((t*10|0)%2?'runA':'runB'):'stand',t);c.restore();});
        if(t>0.2&&t<0.5)once('g',()=>Snd.tone(150,0.4,'square',0.05,0,90));
        if(run>=1){once('bump',()=>{Snd.crit();Snd.slam();burst(gx-G2*5,ground-G2*6,30,['#ffe066','#fff'],300);});const q=Math.min(1,(t-0.95)/0.9);Gl.ox=q*W*0.35;Gl.oy=-Math.sin(q*Math.PI)*H*0.35;Gl.rot=q*12;Gl.dizzy=q>=1;shake=t<1.1?14:0;
          c.font=`800 ${gs*4.5}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('BELLY BUMP!',W*0.45,H*0.4);}}
      else if(kind==='lasso'){const hand={x:hx+gs*4,y:ground-gs*13};let lx,ly,lr=gs*4;
        if(t<0.8){const a=t*14;lx=hand.x+Math.cos(a)*gs*5;ly=hand.y-gs*4+Math.sin(a)*gs*1.5;if((t*7|0)!==S.v){S.v=t*7|0;Snd.whoosh();}}
        else if(t<1.1){const q=(t-0.8)/0.3;lx=hand.x+(gx-hand.x)*q;ly=hand.y-gs*4+(ground-G2*10-hand.y+gs*4)*q;}
        else if(t<2.1){const a=(t-1.1)*7,cx=W*0.42,cy=ground-gs*20;lx=cx+Math.cos(a)*W*0.14;ly=cy+Math.sin(a)*H*0.1;Gl.ox=lx-gx;Gl.oy=ly-(ground-G2*6);Gl.rot=a;if(t<1.2)once('c',()=>{Snd.tone(300,0.3,'square',0.04,0,700);});
          c.font=`800 ${gs*4}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('YEE-HAW!',W*0.5,H*0.42);}
        else{const q=Math.min(1,(t-2.1)/0.5);Gl.ox=W*0.5*q-(1-q)*0;Gl.oy=-H*0.2*(1-q);Gl.rot=q*8;Gl.sx=Gl.sy=1-q*0.7;lx=null;once('toss',()=>Snd.whoosh());}
        if(lx!=null)post.push(()=>{c.strokeStyle='#c98a4a';c.lineWidth=3;c.beginPath();c.moveTo(hand.x,hand.y);c.lineTo(lx,ly);c.stroke();c.beginPath();c.ellipse(lx,ly,lr,lr*0.5,0,0,6.28);c.stroke();});pose=t<2.1?'stand':'jump';}
      else if(kind==='flyswatter'){const k=t<0.7?0:Math.min(1,(t-0.7)/0.25),sy=-H*0.3+k*(ground-gs*8+H*0.3);
        post.push(()=>{c.fillStyle='#8a5a2a';c.fillRect(gx-gs*0.9,sy-H*0.5,gs*1.8,H*0.5);c.fillStyle='#ff4d6d';c.fillRect(gx-G2*9,sy-gs*1,G2*18,gs*9);c.fillStyle='#ffffff55';for(let i=0;i<6;i++)c.fillRect(gx-G2*9+i*G2*3,sy-gs,2,gs*9);for(let j=0;j<3;j++)c.fillRect(gx-G2*9,sy+j*gs*3,G2*18,2);});
        if(t<0.7){Gl.oy=-Math.abs(Math.sin(t*8))*gs*3;if(t>0.4){c.font=`800 ${gs*3}px "Pixelify Sans",monospace`;c.fillStyle='#fff';c.textAlign='center';c.fillText('uh oh…',gx,ground-G2*15);}}
        if(k>=1){once('s',()=>{Snd.slam();Snd.noise(0.15,0.2,0,'highpass',2000);burst(gx,ground-gs*2,30,['#ffe066','#fff'],280);});Gl.sy=0.15;Gl.sx=1.6;Gl.dizzy=true;shake=t<1.1?16:0;
          c.font=`800 ${gs*5}px "Pixelify Sans",monospace`;c.fillStyle='#ffe066';c.textAlign='center';c.fillText('SWAT!',W*0.45,H*0.4);}}
      else if(kind==='pillow'){pose=(t*4|0)%2?'jump':'stand';for(let i=0;i<4;i++){const t0=0.2+i*0.38,q=(t-t0)/0.32;if(q<0||q>1)continue;const fromHero=i%2===0,x0=fromHero?hx+gs*6:gx-G2*5,x1=fromHero?gx-G2*4:hx+gs*6,x=x0+(x1-x0)*q,y=ground-gs*10-Math.sin(q*Math.PI)*H*0.12;
          once('t'+i,()=>Snd.whoosh());post.push(()=>{c.save();c.translate(x,y);c.rotate(q*8);c.fillStyle='#f4f1ff';c.fillRect(-gs*3.5,-gs*2.2,gs*7,gs*4.4);c.fillStyle='#c9c3e0';c.fillRect(-gs*3.5,gs*1.6,gs*7,gs*0.6);c.restore();});
          if(q>0.9)once('h'+i,()=>{Snd.tone(220,0.12,'triangle',0.05);for(let j=0;j<18;j++)P.push({x:x1,y:y,vx:(Math.random()-0.5)*260,vy:-80-Math.random()*160,life:2.2,col:'#ffffff',sz:4+Math.random()*3,g:60});if(fromHero){Gl.white=true;}});}
        if(t>1.6){if(Math.random()<0.6)P.push({x:gx+(Math.random()-0.5)*G2*14,y:-10,vx:(Math.random()-0.5)*30,vy:40+Math.random()*30,life:2.5,col:'#ffffff',sz:4+Math.random()*3,g:10});Gl.dizzy=true;Gl.rot=Math.sin(t*4)*0.2;
          c.font=`800 ${gs*4}px "Pixelify Sans",monospace`;c.fillStyle='#ff8fa3';c.textAlign='center';c.fillText('FEATHER STORM!',W*0.45,H*0.4);}}
      // ---------- actors
      c.save();if(shake&&!RM)c.translate((Math.random()-0.5)*shake,(Math.random()-0.5)*shake);
      if(!['stampede','zoomies','laserdog','kart','frisbee','bigbone','sled','dig','bath','superdog','dogband','howl','cute','treat'].includes(kind)){const p=PETS[pet];if(p){const ps=Math.max(2,Math.round(gs*0.7));drawPet(c,pet,hx-gs*6-p.rows[0].length*ps+(kind==='surf'?hdx:0),ground-p.rows.length*ps+(kind==='surf'?hdy:0),ps,t);}}
      if(!heroHide)drawHero(c,hx-6*gs+hdx,ground-14*gs+hdy,gs,look,pose,t);
      const gw=12*G2;c.save();c.translate(gx+Gl.ox,ground-gw*Gl.sy/2+Gl.oy);c.rotate(Gl.rot);c.scale(Gl.sx,Gl.sy);
      if(Gl.hide){}
      else if(Gl.split){[[-1,-gw,0],[1,0,gw]].forEach(([sg,x0,x1])=>{c.save();c.beginPath();c.rect(x0,-gw,x1-x0,gw*2);c.clip();c.translate(sg*Gl.split,0);c.rotate(sg*0.08);drawGlitch(c,-gw/2,-gw/2,G2,form,t,false);c.restore();});}
      else if(Gl.tint){const oc=S.oc||(S.oc=document.createElement('canvas')),pad=gw*0.4;oc.width=Math.ceil(gw+pad*2);oc.height=Math.ceil(gw+pad*2);const o=oc.getContext('2d');o.imageSmoothingEnabled=false;
        drawGlitch(o,pad,pad,G2,form,t,false);o.globalCompositeOperation='source-atop';o.fillStyle=Gl.tint;o.fillRect(0,0,oc.width,oc.height);c.drawImage(oc,-gw/2-pad,-gw/2-pad);}
      else drawGlitch(c,-gw/2,-gw/2,G2,form,t,Gl.white);
      if(Gl.cream){c.fillStyle='#fffaf0';for(let i=0;i<Gl.cream*3;i++){const a=i*2.3;c.beginPath();c.arc(Math.cos(a)*gw*0.22,-gw*0.1+Math.sin(a)*gw*0.15,G2*(1.6+i%2),0,6.28);c.fill();}}
      if(Gl.wet){c.fillStyle='#5ef2ff';for(let i=0;i<4;i++)c.fillRect(-gw*0.4+i*gw*0.25,gw*0.5+((t*120+i*17)%30),3,6);}
      c.restore();
      if(Gl.dizzy&&!Gl.hide){c.fillStyle='#ffe066';for(let i=0;i<3;i++){const a=t*7+i*2.1;c.fillRect(gx+Gl.ox+Math.cos(a)*gw*0.45-4,ground-gw*Gl.sy-G2*1.5+Gl.oy+Math.sin(a)*G2*1.2,8,8);}}
      c.restore();
      post.forEach(f=>f());
      for(const p of P){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=p.g*dt;}for(let i=P.length-1;i>=0;i--)if(P[i].life<=0)P.splice(i,1);
      for(const p of P){c.globalAlpha=Math.min(1,p.life*2.5);if(p.col==='note'||p.col==='heart'){c.font=`800 ${Math.round(p.sz)}px sans-serif`;c.textAlign='center';c.fillStyle=p.col==='note'?'#ffe066':'#ff4d6d';c.fillText(p.col==='note'?'♪':'♥',p.x,p.y);}else{c.fillStyle=p.col;c.fillRect(p.x,p.y,p.sz,p.sz);}}c.globalAlpha=1;
      Cine.title(c,W,H,t,name,col,null,H*0.22);
      if(t>D-0.25){c.globalAlpha=(t-(D-0.25))/0.25;c.fillStyle='#000';c.fillRect(0,0,W,H);c.globalAlpha=1;}},{skip:true});}
};
// Dojo: an animation after every few right answers, played between problems
{const _next=Dojo.next.bind(Dojo);Dojo.next=function(){const sp=run&&run.spec,dj=run&&run.dj,ev=Inter.every();
  if(sp&&dj&&sp.kind!=='sprint'&&ev>0&&!dj.finished&&run.idx<run.queue.length&&dj.ok>0&&dj.ok%ev===0&&dj.interAt!==dj.ok){dj.interAt=dj.ok;const R=run;
    Inter.play().then(()=>{if(run===R&&!$('#scr-level').hidden)_next();});return;}
  return _next();};}
