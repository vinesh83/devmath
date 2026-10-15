/* =========================================================
   Arcade: more games than just battles, so rewards never get old.
   After a round he gets one of: Boss Battle, Bug Whack, Dog Dash, Coin Catch.
   Boss levels are always a battle. Otherwise it rotates, never the same game twice in a row.
   Every game is short (20–25 s), has no game over, and always pays coins.
   ========================================================= */
const Arcade={
  KINDS:['battle','whack','dash','catch'],
  next(boss){if(boss)return 'battle';const A=state.arcade=state.arcade||{bag:[],last:null};
    if(!A.bag||!A.bag.length){A.bag=['battle','mech','whack','dash','catch','battle'].sort(()=>Math.random()-0.5);if(A.bag[0]===A.last)A.bag.push(A.bag.shift());}
    const k=A.bag.shift();A.last=k;saveState();return k;},
  // he picks the reward game (boss levels are always a battle). Surprise me = the rotation.
  pick(boss){if(boss)return Promise.resolve('battle');if(this.pickOff||(typeof Brawl!=='undefined'&&Brawl.off))return Promise.resolve(this.next(false));
    return new Promise(res=>{const A=state.arcade=state.arcade||{bag:[],last:null},opts=[['battle','⚔️','Battle'],['mech','🤖','Mech Battle'],['whack','🐞','Bug Whack'],['dash','🦴','Dog Dash'],['catch','🪙','Coin Catch'],['surprise','🎲','Surprise me']];
      const fin=k=>{overlay(null);Snd.tap();if(k==='surprise')k=this.next(false);else{A.last=k;A.picks=A.picks||{};A.picks[k]=(A.picks[k]||0)+1;saveState();}res(k);};
      overlay(el('div',{class:'modal arcade-pick'},el('h2',null,'Reward time! Pick a game'),el('div',{class:'ap-grid'},opts.map(([k,ic,nm])=>{const b=el('button',{class:'ap-btn ap-'+k,type:'button'},el('span',{class:'ic'},ic),el('b',null,nm));tapify(b,()=>fin(k));return b;}))));});},
  play(o){o=o||{};if(typeof Brawl!=='undefined'&&Brawl.off)return Promise.resolve(0);const k=o.kind||this.next(!!o.boss);
    if(k==='mech')return Brawl.play(Object.assign({},o,{mech:true}));if(k==='battle'||!Games[k])return Brawl.play(o);return Games[k](o);}
};
const Games={
  dog(){const p=heroLook().pet;return p&&PETS[p]&&PETS[p].dog?p:'ellie';},
  dname(id){return (typeof DogPower!=='undefined'&&DogPower.name?DogPower.name(id):'your dog');},
  // shared runner: intro → play → results. cfg.step/draw/tap do the game.
  run(cfg){const G={t:0,phase:'intro',score:0,combo:0,best:0,fx:[],txt:[],coins:0,done:false,end:null,W:0,H:0,ptr:null};
    G.say=(s,col,x,y,big)=>G.txt.push({s,col:col||'#fff',x,y,age:0,life:big?1.1:0.8,big:!!big});
    G.burst=(x,y,n,cols,sp)=>{for(let i=0;i<n;i++){const a=Math.random()*6.28,v=(sp||200)*(0.4+Math.random());G.fx.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-60,life:0.4+Math.random()*0.4,col:pick(cols)});}};
    if(cfg.init)cfg.init(G);Music.play('battle');
    return Cine.play(999,(c,W,H,t,dtRaw)=>{const dt=document.hidden?0:dtRaw;G.W=W;G.H=H;G.t+=dt;
      if(G.phase==='intro'&&G.t>2.6){G.phase='play';G.t=0;}
      if(G.phase==='play'){cfg.step(G,dt);if(G.t>=cfg.len){G.phase='end';G.t=0;G.coins=clamp(Math.round(cfg.coins(G)),5,35);state.coins+=G.coins;
        const S=state.arcadeBest=state.arcadeBest||{};G.newBest=G.score>(S[cfg.id]||0);if(G.newBest)S[cfg.id]=G.score;saveState();Snd.fanfare();}}
      if(G.phase==='end'&&G.t>2.8&&!G.done){G.done=true;if(G.end)G.end();}
      for(const p of G.fx){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=400*dt;}G.fx=G.fx.filter(p=>p.life>0);
      for(const x of G.txt)x.age+=dt;G.txt=G.txt.filter(x=>x.age<x.life);
      cfg.draw(c,G,W,H);
      for(const p of G.fx){c.globalAlpha=Math.min(1,p.life*2.5);c.fillStyle=p.col;c.fillRect(p.x,p.y,6,6);}c.globalAlpha=1;
      for(const x of G.txt){const k=x.age/x.life,sz=Math.round(Math.min(W,H)*(x.big?0.07:0.045));c.globalAlpha=k>0.7?(1-k)/0.3:1;c.font=`800 ${sz}px "Pixelify Sans",monospace`;c.textAlign='center';c.lineWidth=5;c.strokeStyle='#000';
        const xx=x.x!=null?x.x:W/2,yy=(x.y!=null?x.y:H*0.3)-k*40;c.strokeText(x.s,xx,yy);c.fillStyle=x.col;c.fillText(x.s,xx,yy);}c.globalAlpha=1;
      // HUD
      if(G.phase==='play'){const bw=Math.min(W*0.5,420),bx=(W-bw)/2,by=H*0.05;c.fillStyle='#000a';c.fillRect(bx-4,by-4,bw+8,18);c.fillStyle='#5ef2ff';c.fillRect(bx,by,bw*Math.max(0,1-G.t/cfg.len),10);
        const fs=Math.round(Math.min(W,H)*0.05);c.font=`800 ${fs}px "Pixelify Sans",monospace`;c.textAlign='left';c.lineWidth=5;c.strokeStyle='#000';const st=cfg.icon+' '+G.score;c.strokeText(st,16,by+fs);c.fillStyle='#ffe066';c.fillText(st,16,by+fs);
        if(G.combo>=3){c.textAlign='right';c.strokeText('x'+G.combo,W-16,by+fs*2.2);c.fillStyle='#ff7b1c';c.fillText('x'+G.combo,W-16,by+fs*2.2);}}
      if(G.phase==='intro')Cine.title(c,W,H,G.t,cfg.title,cfg.col,cfg.how);
      if(G.phase==='end')Cine.title(c,W,H,G.t,G.newBest?'NEW BEST!':'TIME!','#ffe066',`${cfg.icon} ${G.score} · +${G.coins} coins`);},
    {skip:true,hold:end=>{G.end=end;const ui=$('#cine .cine-ui'),pad=el('div',{class:'ag-pad'});
      const pt=e=>{const r=$('#cine').getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top};};
      pad.addEventListener('pointerdown',e=>{e.preventDefault();Snd.init();const p=pt(e);G.ptr=p;try{pad.setPointerCapture(e.pointerId);}catch(_){}if(G.phase==='play'&&cfg.tap)cfg.tap(G,p.x,p.y);});
      pad.addEventListener('pointermove',e=>{if(G.ptr)G.ptr=pt(e);});['pointerup','pointercancel'].forEach(k=>pad.addEventListener(k,()=>{G.ptr=null;}));
      ui.append(pad);if(typeof window!=='undefined')Games.G=G;}})
      .then(()=>{if(!G.done&&G.phase==='play'){G.coins=clamp(Math.round(cfg.coins(G)),5,35);state.coins+=G.coins;saveState();}
        Music.play(typeof run!=='undefined'&&run&&run.spec&&run.spec.mech?'boss':'battle');return G.coins;});},
  sky(c,W,H,a,b){const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,a);g.addColorStop(1,b);c.fillStyle=g;c.fillRect(0,0,W,H);},
  bug(c,x,y,s,col,t){const leg=(t*12|0)%2;c.fillStyle='#1d1f33';for(let i=0;i<3;i++){c.fillRect(x-5*s,y+(i*2-1+leg*0.5)*s,10*s,s);}
    c.fillStyle=col;c.fillRect(x-4*s,y-3*s,8*s,6*s);c.fillRect(x-3*s,y-4*s,6*s,8*s);c.fillStyle='#ffffff';c.fillRect(x-2*s,y-2*s,s*1.5,s*1.5);c.fillRect(x+s,y-2*s,s*1.5,s*1.5);
    c.fillStyle='#1d1f33';c.fillRect(x-1.6*s,y-1.6*s,s*0.8,s*0.8);c.fillRect(x+1.4*s,y-1.6*s,s*0.8,s*0.8);c.fillRect(x-2*s,y-6*s,s,2*s);c.fillRect(x+s,y-6*s,s,2*s);},

  /* ---------- BUG WHACK: tap the bugs as they pop up. Golden bug +3. Glitch +5. Don't bonk your dog! */
  whack(o){const dog=this.dog(),dn=this.dname(dog),form=glitchForm();let holes=[];
    return this.run({id:'whack',title:'BUG WHACK!',col:'#3fdc6b',icon:'🐞',len:22,how:`Tap the bugs! Golden bug +3 · Glitch +5 · Don’t bonk ${dn}!`,
      init(G){G.spawn=0.3;G.dogT=4+Math.random()*3;},
      layout(G){const W=G.W,H=G.H,cell=Math.min(W*0.26,H*0.22),gx=W/2-cell,gy=H*0.32;holes=[];for(let r=0;r<3;r++)for(let i=0;i<3;i++)holes.push({x:gx+i*cell,y:gy+r*cell*0.95,r:cell*0.36});return holes;},
      step(G,dt){if(!G.H2||G.H2!==G.H){G.H2=G.H;const old=G.holes||[];G.holes=this.layout(G).map((h,i)=>Object.assign(h,{who:old[i]?old[i].who:null,up:old[i]?old[i].up:0,life:old[i]?old[i].life:0}));}
        const speed=1-Math.min(0.4,G.t/50);G.spawn-=dt;G.dogT-=dt;
        for(const h of G.holes){if(h.who){h.life-=dt;h.up=Math.min(1,h.up+dt*7);if(h.life<=0){h.out=Math.max(0,(h.out||1)-dt*6);if(h.out<=0){if((h.who==='bug'||h.who==='gold')&&!h.hit)G.combo=0;h.who=null;h.out=1;h.up=0;}}}}
        if(G.spawn<=0){G.spawn=(0.45+Math.random()*0.35)*speed;const free=G.holes.filter(h=>!h.who);if(free.length){const h=pick(free);
          let who=Math.random()<0.1?'gold':Math.random()<0.08?'glitch':'bug';if(G.dogT<=0){who='dog';G.dogT=4+Math.random()*4;}
          h.who=who;h.life=(who==='dog'?1.4:who==='glitch'?0.75:1.05)*speed+0.15;h.up=0;h.out=1;h.hit=false;}}},
      tap(G,x,y){for(const h of G.holes){if(!h.who||h.life<=0)continue;if(Math.hypot(x-h.x,y-(h.y-h.r*0.6))>h.r*1.25)continue;
          if(h.who==='dog'){h.life=0;G.say('WOOF! That’s '+dn+'!','#ff8fa3',h.x,h.y-h.r*1.5);Snd.tone(520,0.1,'square',0.05);Snd.tone(420,0.12,'square',0.05,0.1);G.combo=0;return;}
          const v=h.who==='gold'?3:h.who==='glitch'?5:1;h.hit=true;G.combo++;G.best=Math.max(G.best,G.combo);G.score+=v;h.life=0;
          G.burst(h.x,h.y-h.r*0.6,h.who==='bug'?14:26,h.who==='glitch'?['#ff4d6d','#5ef2ff','#fff']:['#3fdc6b','#ffe066','#fff'],240);
          G.say(h.who==='glitch'?'BONK GLITCH! +5':h.who==='gold'?'GOLDEN! +3':pick(['SPLAT!','BONK!','GOT IT!','POW!']),h.who==='bug'?'#fff':'#ffe066',h.x,h.y-h.r*1.4);
          if(h.who==='bug')Snd.coin();else Snd.gem();if(G.combo%10===0)G.say('COMBO x'+G.combo+'!','#ff7b1c',null,null,true);return;}
        G.say('miss','#ffffff88',x,y);},
      coins:G=>6+G.score*0.6,
      draw(c,G,W,H){Games.sky(c,W,H,'#3a8a3a','#1e5a2a');c.fillStyle='#4aa04a';for(let i=0;i<30;i++){c.fillRect((i*137)%W,(i*71)%H,4,10);}
        if(!G.holes)return;const s=Math.max(2,G.holes[0].r/5.5);
        for(const h of G.holes){c.fillStyle='#2a1a0a';c.beginPath();c.ellipse(h.x,h.y,h.r,h.r*0.38,0,0,6.28);c.fill();
          if(h.who){const k=h.life>0?h.up:(h.out||0),rise=h.r*1.1*k;c.save();c.beginPath();c.rect(h.x-h.r*1.5,h.y-h.r*3,h.r*3,h.r*3);c.clip();const cy=h.y+h.r*0.4-rise;
            if(h.who==='dog'){const ps=s*0.6,rows=PETS[dog].rows,w=rows[0].length*ps;drawPet(c,dog,h.x-w/2,cy-rows.length*ps*0.5,ps,G.t);}
            else if(h.who==='glitch'){drawGlitch(c,h.x-6*s*0.6,cy-6*s*0.6,s*0.6,form,G.t,h.life<=0);}
            else Games.bug(c,h.x,cy,s*0.9,h.who==='gold'?'#ffc933':'#3fdc6b',G.t);c.restore();}
          c.fillStyle='#5a3a1a';c.beginPath();c.ellipse(h.x,h.y+h.r*0.06,h.r,h.r*0.2,0,0,3.14);c.fill();}}});},

  /* ---------- DOG DASH: his dog runs; tap to jump (tap again in the air to double jump). Grab bones, hop the bugs. */
  dash(o){const dog=this.dog(),dn=this.dname(dog),look=heroLook();
    return this.run({id:'dash',title:'DOG DASH!',col:'#ffb627',icon:'🦴',len:25,how:`Tap to jump with ${dn}! Tap again to jump higher. HOLD to glide! Grab the bones.`,
      init(G){G.d={y:0,vy:0,jumps:0,stun:0};G.obj=[];G.next=2.6;G.boneT=0.4;G.x=0;G.mag=0;G.magT=7;G.glide=false;},
      tap(G){const d=G.d;if(d.jumps<2){d.vy=-G.H*(d.jumps?1.05:1.25);d.jumps++;Snd.tone(d.jumps>1?880:660,0.08,'square',0.04,0,d.jumps>1?1320:990);}},
      step(G,dt){const H=G.H,W=G.W,d=G.d,sp=W*(0.30+Math.min(0.12,G.t*0.006)),gy=H*0.72,ps=Math.max(3,H/72),dx=W*0.28;G.x+=sp*dt;d.stun=Math.max(0,d.stun-dt);G.mag=Math.max(0,G.mag-dt);
        // floaty jumps; holding the screen while falling glides
        d.vy+=H*3.2*dt;G.glide=!!G.ptr&&d.vy>0&&d.y<-2;if(G.glide)d.vy=Math.min(d.vy,H*0.28);d.y+=d.vy*dt;if(d.y>0){d.y=0;d.vy=0;d.jumps=0;}
        // bugs: few and far apart
        G.next-=dt;if(G.next<=0){G.next=1.7+Math.random()*1.0;G.obj.push({k:Math.random()<0.15?'glitchbug':'bug',x:W+40});}
        // bones: singles, and arches that one jump sweeps up
        G.boneT-=dt;if(G.boneT<=0){if(Math.random()<0.5){G.boneT=1.3;for(let i=0;i<5;i++)G.obj.push({k:'bone',x:W+40+i*W*0.045,h:0.05+Math.sin(i/4*Math.PI)*0.15});}
          else{G.boneT=0.5+Math.random()*0.4;G.obj.push({k:Math.random()<0.1?'gold':'bone',x:W+40,h:pick([0,0.06,0.12])});}}
        G.magT-=dt;if(G.magT<=0){G.magT=9;G.obj.push({k:'mag',x:W+40,h:0.08});}
        const dy=gy+d.y,isB=b=>b.k==='bone'||b.k==='gold'||b.k==='mag';
        for(const b of G.obj){b.x-=sp*dt;if(b.got)continue;
          if(G.mag>0&&(b.k==='bone'||b.k==='gold')&&b.x>dx-ps*4&&b.x<dx+W*0.4){b.pull=true;}
          if(b.pull){b.x+=(dx-b.x)*Math.min(1,dt*7);b.h+=((-d.y/H+0.04)-b.h)*Math.min(1,dt*7);}
          const by=isB(b)?gy-H*0.06-b.h*H:gy-ps*3;
          if(isB(b)?(Math.abs(b.x-dx)<ps*7&&Math.abs(by-(dy-ps*4))<ps*9):(Math.abs(b.x-dx)<ps*3.5&&d.y>-ps*1.5)){
            if(b.k==='mag'){b.got=true;G.mag=5;Snd.gem();G.say('BONE MAGNET!','#ff4d6d',null,null,true);G.burst(b.x,by,20,['#ff4d6d','#fff','#ffe066'],220);}
            else if(isB(b)){b.got=true;const v=b.k==='gold'?5:1;G.score+=v;G.combo++;G.best=Math.max(G.best,G.combo);Snd.tone(660+Math.min(G.combo,14)*45,0.07,'square',0.04);G.burst(b.x,by,10,['#fff','#ffe066'],160);if(v>1)G.say('GOLDEN BONE +5','#ffe066',b.x,by-30);
              if(G.combo%10===0){G.say(G.combo+' IN A ROW!','#ff7b1c',null,null,true);G.burst(dx,dy-ps*8,40,['#ff4d6d','#ffe066','#5ef2ff','#3fdc6b'],300);Snd.gem();}}
            else if(d.stun<=0){b.got=true;d.stun=0.35;G.combo=0;Snd.tone(300,0.12,'square',0.04,0,200);G.say(pick(['Oops!','Boing!','Wobble!']),'#ff9f43',dx,dy-ps*12);}}
          else if(!isB(b)&&!b.got&&!b.passed&&b.x<dx-ps*4){b.passed=true;G.score+=1;G.say('HOP! +1','#5ef2ff',dx,dy-ps*12);}}
        G.obj=G.obj.filter(b=>b.x>-60&&!(b.got&&isB(b)));},
      coins:G=>6+G.score*0.5,
      draw(c,G,W,H){Games.sky(c,W,H,'#6ec6ff','#d8f1ff');const gy=H*0.72,ps=Math.max(3,H/72),x=G.x||0;
        c.fillStyle='#ffffffcc';for(let i=0;i<5;i++){const cx=((i*W*0.31-x*0.1)%(W+200)+W+200)%(W+200)-100;c.fillRect(cx,H*(0.12+i%3*0.07),90,22);c.fillRect(cx+20,H*(0.12+i%3*0.07)-14,50,16);}
        c.fillStyle='#7ccf6a';for(let i=0;i<7;i++){const hx=((i*W*0.22-x*0.3)%(W+300)+W+300)%(W+300)-150;c.beginPath();c.arc(hx,gy,W*0.14,3.14,6.28);c.fill();}
        c.fillStyle='#4aa04a';c.fillRect(0,gy,W,H-gy);c.fillStyle='#3a8a3a';for(let i=0;i<40;i++){c.fillRect(((i*60-x)%W+W)%W,gy+8+(i%3)*14,20,4);}
        for(const b of G.obj){if(b.got)continue;if(b.k==='mag'){const by=gy-H*0.06-b.h*H+Math.sin(G.t*6)*5;c.font=`${Math.round(ps*7)}px sans-serif`;c.textAlign='center';c.fillText('🧲',b.x,by+ps*2);continue;}if(b.k==='bone'||b.k==='gold'){const by=gy-H*0.06-b.h*H,bob=Math.sin(G.t*6+b.x*0.02)*4;c.fillStyle=b.k==='gold'?'#ffc933':'#fff8e8';
            c.fillRect(b.x-ps*3,by+bob-ps*0.6,ps*6,ps*1.2);c.beginPath();for(const [ox,oy] of [[-3,-0.8],[-3,0.8],[3,-0.8],[3,0.8]]){c.moveTo(b.x+ox*ps,by+bob+oy*ps);c.arc(b.x+ox*ps,by+bob+oy*ps,ps,0,6.28);}c.fill();}
          else Games.bug(c,b.x,gy-ps*3,ps*0.8,b.k==='glitchbug'?'#ff4d6d':'#3fdc6b',G.t);}
        // JUMP! warning over a bug that's coming
        {const d0=G.d||{y:0},dx0=W*0.28;for(const b of G.obj){if(b.got||b.passed||b.k==='bone'||b.k==='gold'||b.k==='mag')continue;const dd=b.x-dx0;if(dd>0&&dd<W*0.24&&d0.y>-ps*2){const fs=Math.round(ps*4.5);c.font=`900 ${fs}px "Pixelify Sans",monospace`;c.textAlign='center';c.lineWidth=5;c.strokeStyle='#000';const yy=gy-ps*10+Math.sin(G.t*14)*3;c.strokeText('JUMP!',b.x,yy);c.fillStyle='#ffe066';c.fillText('JUMP!',b.x,yy);c.fillText('▼',b.x,yy+fs*0.8);break;}}}
        const d=G.d||{y:0,stun:0},dx=W*0.28,rows=PETS[dog].rows,w=rows[0].length*ps,blink=d.stun>0&&((G.t*12|0)%2);
        if(G.glide){for(let i=0;i<3;i++){c.fillStyle=pick(['#ffffff','#5ef2ff','#ffe066']);c.fillRect(dx-w/2-ps*(2+i*3),gy-rows.length*ps*0.5+d.y+(Math.random()-0.5)*ps*4,ps*1.5,ps*1.5);}}
        if(G.mag>0){c.strokeStyle='#ff4d6d88';c.lineWidth=3;c.beginPath();c.arc(dx,gy-rows.length*ps*0.5+d.y,ps*9+Math.sin(G.t*10)*ps,0,6.28);c.stroke();}
        if(!blink){c.save();const run=G.phase==='play'&&d.y===0?Math.abs(Math.sin(G.t*14))*ps:0;drawPet(c,dog,dx-w/2,gy-rows.length*ps+d.y-run,ps,G.t);c.restore();}
        const hs=ps*0.85;drawHero(c,dx-w/2-14*hs,gy-15*hs+d.y*0.9,hs,look,G.phase!=='play'?'stand':d.y<0?'jump':((G.t*10|0)%2?'runA':'runB'),G.t);
        if(d.stun>0){c.font='700 22px sans-serif';c.textAlign='center';c.fillText('💫',dx,gy-rows.length*ps-10+d.y);}}});},

  /* ---------- COIN CATCH: drag left and right to catch falling coins and gems. Dodge Glitch's bombs. His dog helps fetch. */
  catch(o){const dog=this.dog(),dn=this.dname(dog),look=heroLook(),form=glitchForm(),ride=look.ride&&look.ride!=='none'&&typeof Rides!=='undefined'?look.ride:null;
    return this.run({id:'catch',title:'COIN CATCH!',col:'#ffe066',icon:'🪙',len:22,how:`Drag left and right to catch coins! Dodge Glitch’s bombs. ${dn} helps!`,
      init(G){G.hx=null;G.dx=null;G.drops=[];G.spawn=0.4;G.stun=0;G.gx=0.5;G.gv=0.25;},
      step(G,dt){const W=G.W,H=G.H,gy=H*0.82;if(G.hx==null){G.hx=W*0.5;G.dx=W*0.3;}
        G.stun=Math.max(0,G.stun-dt);if(G.ptr&&G.stun<=0){G.hx+=(clamp(G.ptr.x,W*0.06,W*0.94)-G.hx)*Math.min(1,dt*14);}
        G.gx+=G.gv*dt;if(G.gx>0.85||G.gx<0.15)G.gv*=-1;
        G.spawn-=dt;if(G.spawn<=0){G.spawn=0.32+Math.random()*0.3-Math.min(0.12,G.t*0.005);const r=Math.random(),k=r<0.18?'bomb':r<0.28?'gem':'coin';
          G.drops.push({k,x:k==='bomb'?W*G.gx:W*(0.06+Math.random()*0.88),y:H*0.16,v:H*(0.32+Math.random()*0.2+G.t*0.006)});}
        // dog chases the nearest low coin, slower than him
        const tgt=G.drops.filter(d=>d.k!=='bomb'&&!d.got&&d.y>H*0.45).sort((a,b)=>b.y-a.y)[0];if(tgt)G.dx+=clamp(tgt.x-G.dx,-W*0.32*dt,W*0.32*dt);
        for(const d of G.drops){d.y+=d.v*dt;if(d.got)continue;
          const s=Math.max(3,H/80),near=(x,r)=>Math.abs(d.x-x)<r&&d.y>gy-17*s&&d.y<gy;
          if(near(G.hx,W*0.07)){d.got=true;if(d.k==='bomb'){if(G.stun<=0){G.stun=0.8;G.combo=0;Snd.boom();G.burst(d.x,d.y,30,['#ff7b1c','#ff4d6d','#fff'],260);G.say('BOOM!','#ff4d6d',d.x,d.y-40);}}
            else{const v=d.k==='gem'?3:1;G.score+=v;G.combo++;G.best=Math.max(G.best,G.combo);if(v>1)Snd.gem();else Snd.coin();G.burst(d.x,d.y,8,['#ffe066','#fff'],140);if(v>1)G.say('GEM +3','#5ef2ff',d.x,d.y-30);if(G.combo%10===0)G.say(G.combo+' IN A ROW!','#ff7b1c',null,null,true);}}
          else if(d.k!=='bomb'&&near(G.dx,W*0.05)){d.got=true;G.score+=1;Snd.coin();G.say('FETCH! +1','#ff8fa3',d.x,d.y-30);}}
        G.drops=G.drops.filter(d=>!d.got&&d.y<H+30);},
      coins:G=>5+G.score*0.4,
      draw(c,G,W,H){Games.sky(c,W,H,'#1a1440','#4a2a6a');const gy=H*0.82,s=Math.max(3,H/80);
        c.fillStyle='#ffffff';for(let i=0;i<40;i++){c.globalAlpha=0.3+0.5*Math.abs(Math.sin(G.t*2+i));c.fillRect((i*173)%W,(i*97)%(H*0.7),2,2);}c.globalAlpha=1;
        c.fillStyle='#2a1a3a';c.fillRect(0,gy,W,H-gy);c.fillStyle='#5a3a7a';c.fillRect(0,gy,W,6);
        drawGlitch(c,W*(G.gx||0.5)-6*s*0.7,H*0.06,s*0.7,form,G.t,false);
        for(const d of G.drops){if(d.k==='coin'){const w=Math.abs(Math.cos(G.t*6+d.x))*s*2.2+s*0.6;c.fillStyle='#ffc933';c.fillRect(d.x-w,d.y-s*2.2,w*2,s*4.4);c.fillStyle='#fff3b0';c.fillRect(d.x-w*0.4,d.y-s*1.4,w*0.5,s*2.4);}
          else if(d.k==='gem'){c.fillStyle='#5ef2ff';c.beginPath();c.moveTo(d.x,d.y-s*3);c.lineTo(d.x+s*2.4,d.y);c.lineTo(d.x,d.y+s*3);c.lineTo(d.x-s*2.4,d.y);c.fill();c.fillStyle='#fff';c.fillRect(d.x-s*0.6,d.y-s*1.6,s,s);}
          else{c.fillStyle='#1d1f33';c.beginPath();c.arc(d.x,d.y,s*2.6,0,6.28);c.fill();c.fillStyle='#ff4d6d';c.fillRect(d.x-s*0.5,d.y-s*4.2,s,s*1.6);if((G.t*10|0)%2){c.fillStyle='#ffe066';c.fillRect(d.x-s*0.8,d.y-s*5,s*1.6,s*1.2);}}}
        const hx=G.hx==null?W*0.5:G.hx,dx=G.dx==null?W*0.3:G.dx,blink=G.stun>0&&((G.t*12|0)%2),mv=!!G.ptr;
        const ps=s*0.9,rows=PETS[dog].rows,w=rows[0].length*ps;drawPet(c,dog,dx-w/2,gy-rows.length*ps,ps,G.t);
        if(!blink){if(ride){const rs=s*0.75;Rides.draw(c,ride,hx-13*rs,gy-22*rs,rs,look,G.t,mv);}else drawHero(c,hx-6*s,gy-15*s,s,look,mv?((G.t*10|0)%2?'runA':'runB'):'stand',G.t);}
        // basket over his head
        const by=gy-(ride?24:17)*s;c.fillStyle='#c98a4a';c.fillRect(hx-W*0.055,by,W*0.11,s*1.5);c.fillStyle='#a0652a';c.fillRect(hx-W*0.055,by+s*1.5,W*0.11,s);
        if(G.stun>0){c.font='700 24px sans-serif';c.textAlign='center';c.fillText('💫',hx,gy-H*0.15);}}});}
};
