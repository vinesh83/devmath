/* =========================================================
   Boss Battle: a fight he controls (about a minute), after each Dojo round and at the end of each level.
   Run, jump, attack, block, SUPER. Glitch warns before every attack. Battle Power earned on the problems charges him up.
   Never costs anything: if he runs out of hearts or time, Glitch just escapes.
   ========================================================= */
const Brawl={off:false,
  play(o){o=o||{};if(this.off)return Promise.resolve(0);
    const DP=k=>typeof DogPower!=='undefined'&&DogPower.has(k),DPop=(k,m)=>{if(DP(k))DogPower.pop(k,m,{force:true});};
    const power=Math.max(0,Math.round(o.power||0)),boss=!!o.boss,look=heroLook(),form=glitchForm(),pet=look.pet&&look.pet!=='none'&&PETS[look.pet]?look.pet:null;
    // comeback help: every battle he loses in a row makes the next one easier, until he wins
    const BS=state.bossStats=state.bossStats||{fights:0,wins:0},lost=BS.lossStreak||0,easy=Math.max(0.55,1-0.15*lost);
    const maxHearts=5+(power>=30?1:0)+(power>=50?1:0)+(DP('lab')?1:0)+Math.floor(lost/2);
    const ARENAS=[{n:'NEON CITY',sky:['#1a0f2e','#3a1630'],far:'#24163a',gr:'#2a1a3a',gl:'#4a2a5a',k:'city'},{n:'VOLCANO',sky:['#1a0404','#6a1a0a'],far:'#3a1208',gr:'#2a0a06',gl:'#ff7b1c',k:'volcano'},
      {n:'SPACE STATION',sky:['#02030a','#101838'],far:'#1d2250',gr:'#2a3048',gl:'#5ef2ff',k:'space'},{n:'JUNGLE',sky:['#0a2a1a','#2a6a3a'],far:'#0e3a20',gr:'#3a2a14',gl:'#3fae5a',k:'jungle'},
      {n:'ICE CAVE',sky:['#0a1a3a','#4a8ac0'],far:'#a8d0f0',gr:'#c8e4ff',gl:'#ffffff',k:'ice'},{n:'CANDY LAND',sky:['#ff9fc4','#ffe0ea'],far:'#ff6fb5',gr:'#c084fc',gl:'#ffe066',k:'candy'}];
    let ai=Math.floor(Math.random()*ARENAS.length);if(ai===state.lastArena)ai=(ai+1)%ARENAS.length;state.lastArena=ai;const AR=ARENAS[ai];
    const ride=look.ride&&look.ride!=='none'&&typeof Rides!=='undefined'?look.ride:null;
    const TAUNTS={start:['Beep boop! You can’t beat me!','My bugs will get you!','Prepare to be glitched!'],hurt:['OW! Lucky hit!','Hey! That tickles!','Grr! Stop that!','My circuits!'],
      angry:['NOW I’M MAD!','You asked for it!'],win:['HA! Too slow!','Beep! Got you!'],idle:['Is that all you got?','Catch me if you can!','I’m the BOSS here!']};
    const G={t:0,phase:'intro',items:[],itemT:6,star:0,slam:false,slamFx:null,ram:null,ramCd:0,freeze:0,taunt:null,tauntT:4,introLen:state.bossTip?2.4:4.2,time:90,hp:Math.round((boss?42:32)*easy),max:Math.round((boss?42:32)*easy),hearts:maxHearts,maxHearts,
      sup:Math.min(1,power/40+(DP('robodog')?0.25:0)+lost*0.2),hero:{x:0,y:0,vy:0,atk:0,cd:0,blk:0,blkAt:-9,inv:0,hit:0,run:0},
      foe:{x:0,y:0,vy:0,st:'walk',t:0,dur:1.4,atk:null,stun:0,hurt:0,angry:false,pref:0.38},
      bugs:[],miss:[],wave:null,fx:[],txt:[],shake:0,flash:0,flashCol:'#fff',combo:0,best:0,dmg:0,perfect:0,squashed:0,
      dog:{t:5,dash:0,hitDone:false},prot:false,sp:null,coins:0,done:false,end:null,keys:{l:0,r:0},cue:null,init:false,tips:{}};
    const cueWords={punch:['BLOCK!','#5ef2ff'],laser:['JUMP!','#ffe066'],slam:['JUMP!','#ffe066'],missiles:['MOVE!','#ff9f43'],bugs:['SQUASH!','#3fdc6b']};
    let W=0,H=0,Y=0,hs=8,gs=11,hw=96,gw=132;
    const say=(s,col,big,x,y)=>G.txt.push({s,col:col||'#fff',big:!!big,x,y,age:0,life:big?1.2:0.8});
    const burst=(x,y,n,cols,sp)=>{for(let i=0;i<n;i++){const a=Math.random()*6.28,v=(sp||220)*(0.4+Math.random());G.fx.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-60,life:0.4+Math.random()*0.4,col:pick(cols)});}};
    const fight=()=>G.phase==='fight';
    const taunt=k=>{G.taunt={s:pick(TAUNTS[k]),t:2.2};};
    const squashBug=b=>{b.dead=true;G.squashed++;const v=1+(DP('golden')?1:0);state.coins+=v;burst(b.x,Y-hs*3,16,['#3fdc6b','#ffe066','#fff'],220);say('SQUASH! +'+v,'#ffe066',false,b.x,Y-hs*8);Snd.coin();if(DP('golden'))DogPower.pop('golden','Fetched +1 coin!');};
    const gain=v=>{G.sup=Math.min(1,G.sup+v*(DP('shiba')?1.5:1));};
    const hurtFoe=(d,x,y,col)=>{if(G.hp<=0)return;if(G.star>0)d*=2;G.hp=Math.max(0,G.hp-d);if(d>=2)G.freeze=Math.max(G.freeze,0.07);if(Math.random()<0.25&&!G.taunt)taunt('hurt');G.dmg+=d;G.foe.hurt=0.25;say('-'+d,col||(d>=2?'#ffb627':'#fff'),false,x,y);
      if(!G.foe.angry&&G.hp<=G.max/2){G.foe.angry=true;taunt('angry');G.flash=0.3;G.flashCol='#ff4d6d';say('GLITCH IS ANGRY!','#ff4d6d',true);Snd.slam();}
      if(G.hp<=0){G.phase='win';G.t=0;G.freeze=0.35;G.taunt=null;Snd.ko();G.flash=0.6;G.flashCol='#ffffff';G.shake=0.7;burst(G.foe.x,Y-gw*0.5,120,['#ffe066','#ff7b1c','#5ef2ff','#fff',form.col||'#ff4d6d'],460);}};
    const hurtHero=why=>{const h=G.hero;if(h.inv>0||!fight()||G.star>0||G.ram)return;if(Math.random()<0.4)taunt('win');
      if(DP('shepherd')&&!G.prot){G.prot=true;h.inv=0.8;Snd.block();say('BLOCKED!','#5ef2ff',false,h.x,Y-hw*1.4);DPop('shepherd','Blocked that hit!');return;}
      G.hearts--;h.inv=1.2;h.hit=0.35;G.shake=0.3;G.flash=0.18;G.flashCol='#ff4d6d';Snd.hurt();say(why||'OUCH!','#ff4d6d',false,h.x,Y-hw*1.4);
      if(DP('bulldog')){if(G.combo>=2)DPop('bulldog','Combo kept!');}else G.combo=0;
      if(G.hearts<=0){G.phase='lose';G.t=0;Snd.shield();}};
    // ---- hero moves
    const reach=()=>hw*0.55+W*0.11;
    const attack=(noDash)=>{const h=G.hero;if(!fight()||h.cd>0||G.sp||G.ram)return;
      if(h.y<-H*0.06&&!G.slam){G.slam=true;h.vy=H*3.8;h.cd=0.3;Snd.whoosh();return;}
      if(!noDash&&G.foe.x-h.x>reach()+gw*0.35&&!G.bugs.some(b=>!b.dead&&b.x-h.x>-hw*0.2&&b.x-h.x<reach())){G.dash={dir:1,t:0.2,sp:W*1.1};G.pendingAtk=0.2;h.cd=0.25;Snd.whoosh();return;}
      h.atk=0.22;h.cd=0.28;let hit=false;
      for(const b of G.bugs){if(b.dead)continue;const dx=b.x-h.x;if(dx>-hw*0.2&&dx<reach()&&Math.abs(h.y)<H*0.2){hit=true;squashBug(b);}}
      const f=G.foe,dx=f.x-h.x;
      if(dx<reach()+gw*0.35&&f.y>-H*0.15){hit=true;
        if(f.st==='guard'){say('CLANG!','#c9d3e6',false,f.x-gw*0.4,Y-gw);Snd.block();}
        else{let d=1;if(f.stun>0){d=2;}if(G.combo>=4)d++;G.combo++;G.best=Math.max(G.best,G.combo);gain(0.05);
          hurtFoe(d,f.x-gw*0.3,Y-gw*1.05);G.shake=Math.max(G.shake,0.1+d*0.05);Snd.zap(Math.min(14,G.combo+2));if(d>=2)Snd.crit();
          burst(f.x-gw*0.35,Y-gw*0.55,10+d*6,['#fff','#ffe066'],240);f.x=Math.min(W-gw*0.6,f.x+W*0.012);
          if(G.combo>=3&&G.combo%5===0)say('COMBO x'+G.combo+'!','#5ef2ff',true);}}
      if(!hit){Snd.whoosh();if(!G.tipClose&&dx>reach()*1.6){G.tipClose=1;say('Get closer!','#cfd5ff',false,h.x+hw,Y-hw*1.5);}}};
    const ram=()=>{if(!ride||!fight()||G.ram||G.ramCd>0||G.sp)return;G.ram={t:0,x0:G.hero.x,hit:false};G.ramCd=12;Snd.charge(0.4);Snd.whoosh();};
    const slamLand=()=>{const h=G.hero,f=G.foe;G.shake=Math.max(G.shake,0.5);G.slamFx={x:h.x,t:0};Snd.slam();burst(h.x,Y,30,['#c9b38c','#fff','#ffe066'],300);
      if(Math.abs(f.x-h.x)<hw*0.5+gw*0.5+W*0.14&&f.y>-H*0.1){hurtFoe(boss?3:2,f.x-gw*0.3,Y-gw*1.05,'#ffb627');f.stun=Math.max(f.stun,0.7);say('GROUND POUND!','#ffb627',true);gain(0.08);}
      G.bugs.forEach(b=>{if(!b.dead&&b.d<=0&&Math.abs(b.x-h.x)<W*0.22)squashBug(b);});};
    const block=()=>{const h=G.hero;if(!fight())return;h.blk=0.45;h.blkAt=G.t;Snd.shield();};
    const jump=()=>{const h=G.hero;if(!fight()||h.y<0)return;h.vy=-H*1.55;Snd.tone(523,0.06,'square',0.03);Snd.tone(784,0.08,'square',0.03,0.05);};
    const superMove=()=>{if(!fight()||G.sup<1||G.sp)return;let k=mechCfg().super||'laser';const own=inv().supers;if(k==='random'||!own.includes(k))k=pick(own.length?own:['laser']);
      const S=SUPERS.find(x=>x[0]===k);G.sp={k,name:S?S[1]:'SUPER',col:(typeof SUPER_COL!=='undefined'&&SUPER_COL[k])||'#ffe066',t:0,hitDone:false};G.sup=0;Snd.charge(0.8);G.flash=0.4;G.flashCol=G.sp.col;};
    // ---- Glitch picks an attack (he always warns first)
    const choose=()=>{const f=G.foe,h=G.hero,dist=f.x-h.x,ang=(f.angry?0.85:1)*1.25;
      const opts=[['punch',dist<W*0.32?4:0.5],['laser',2],['missiles',2],['slam',2],['bugs',G.bugs.some(b=>!b.dead)?0:1.6]];
      let r=Math.random()*opts.reduce((a,o)=>a+o[1],0),k='laser';for(const [n,w] of opts){if((r-=w)<=0){k=n;break;}}
      if(k==='punch'&&dist>W*0.32)k='laser';
      const wind={punch:0.85,laser:1.0,missiles:1.15,slam:0.8,bugs:0.6}[k]*ang;
      f.st='wind';f.atk=k;f.t=0;f.dur=wind;G.cue=cueWords[k];Snd.charge(0.4);
      if(k==='missiles'){const n=f.angry?4:3,tg=[h.x];while(tg.length<n)tg.push(W*0.06+Math.random()*(f.x-gw*0.6-W*0.06));G.miss=tg.map(x=>({x,t:0,fall:0,done:false}));}
      if(!G.tips[k]&&!state.bossTip){G.tips[k]=1;}};
    const strike=()=>{const f=G.foe,h=G.hero,k=f.atk;f.st='act';f.t=0;G.cue=null;
      if(k==='punch'){f.dur=0.22;f.from=f.x;f.to=Math.max(h.x+hw*0.5+gw*0.3,W*0.2);Snd.whoosh();}
      else if(k==='laser'){f.dur=0.5;Snd.zap(1);}
      else if(k==='missiles'){f.dur=0.35;G.miss.forEach(m=>m.fall=0.001);Snd.whoosh();}
      else if(k==='slam'){f.dur=0.3;f.vy=0;G.wave={x:f.x-gw*0.3,v:W*(f.angry?0.95:0.75),hitDone:false};Snd.slam();G.shake=0.35;}
      else if(k==='bugs'){f.dur=0.3;const n=f.angry?4:3;for(let i=0;i<n;i++)G.bugs.push({x:f.x-gw*0.3+i*hs*7,v:W*(0.13+Math.random()*0.07)*(DP('corgi')?0.6:1),dead:false,ph:Math.random()*6,born:G.t,d:i*0.35});
        say('Bugs, attack!','#ff4d6d',false,f.x,Y-gw*1.3);if(DP('corgi'))DogPower.pop('corgi','Herded the bugs: they’re slow!');}};
    const resolve=()=>{const f=G.foe,h=G.hero,k=f.atk;
      if(k==='punch'){const close=Math.abs(f.x-h.x)<hw*0.5+gw*0.45;
        if(close&&h.y>-H*0.16){if(h.blk>0){if(G.t-h.blkAt<0.55){f.stun=1.4;G.perfect++;gain(0.15);Snd.gem();say('PERFECT BLOCK!','#5ef2ff',true);G.flash=0.25;G.flashCol='#5ef2ff';burst(h.x+hw*0.5,Y-hw*0.6,24,['#5ef2ff','#fff'],260);}
            else{Snd.block();say('BLOCKED!','#5ef2ff',false,h.x,Y-hw*1.4);burst(h.x+hw*0.5,Y-hw*0.6,10,['#5ef2ff'],180);}}
          else hurtHero();}
        else if(close)say('DODGE!','#ffe066',false,h.x,Y-hw*1.6);}};
    const win=()=>G.phase==='win';
    return Cine.play(999,(c,w,hh,t,dtRaw)=>{W=w;H=hh;const tall=H>W*1.1;Y=H*(tall?0.62:0.74);hs=Math.max(3,Math.round(Math.min(H*0.17/14,W*(tall?0.135:0.1)/12)));gs=Math.round(hs*1.35);hw=12*hs;gw=12*gs;
      let dt=document.hidden?0:dtRaw;if(G.freeze>0){G.freeze-=dtRaw;dt*=0.08;}const h=G.hero,f=G.foe;
      if(!G.init){G.init=true;h.x=W*0.2;f.x=W*0.78;}
      // ---------- update
      G.t+=dt;G.shake=Math.max(0,G.shake-dt);G.flash=Math.max(0,G.flash-dt);
      h.atk=Math.max(0,h.atk-dt);h.cd=Math.max(0,h.cd-dt);h.blk=Math.max(0,h.blk-dt);h.inv=Math.max(0,h.inv-dt);h.hit=Math.max(0,h.hit-dt);
      f.hurt=Math.max(0,f.hurt-dt);f.stun=Math.max(0,f.stun-dt);
      if(G.phase==='intro'&&G.t>G.introLen){G.phase='fight';G.t=0;taunt('start');state.bossTip=1;saveState();Music.play('boss');
        if(DP('chihuahua')){f.stun=2;say('BRAVE BARK!','#ffe066',true);DPop('chihuahua','Glitch is stunned!');}
        if(DP('robodog'))DPop('robodog','SUPER boost!');}
      if(fight()){G.time-=dt;
        // hero
        const mv=(G.keys.r?1:0)-(G.keys.l?1:0),sp=W*0.42*(h.blk>0?0.5:1);if(!G.sp&&mv)h.x+=mv*sp*dt;
        if(G.dash&&!G.sp){h.x+=G.dash.dir*G.dash.sp*dt;G.dash.t-=dt;if(G.dash.t<=0)G.dash=null;}h.run=(mv||G.dash)?h.run+dt:0;
        if(G.pendingAtk>0){G.pendingAtk-=dt;if(G.pendingAtk<=0){h.cd=0;attack(true);}}
        h.x=clamp(h.x,W*0.05,f.x-(hw+gw)*0.38);if(h.y<0||h.vy<0){h.vy+=H*4.4*dt;h.y+=h.vy*dt;if(h.y>0){h.y=0;h.vy=0;if(G.slam){G.slam=false;slamLand();}}}
        G.star=Math.max(0,G.star-dt);G.ramCd=Math.max(0,G.ramCd-dt);if(G.slamFx){G.slamFx.t+=dt;if(G.slamFx.t>0.5)G.slamFx=null;}
        if(G.taunt){G.taunt.t-=dt;if(G.taunt.t<=0)G.taunt=null;}else{G.tauntT-=dt;if(G.tauntT<=0){G.tauntT=8+Math.random()*5;taunt('idle');}}
        // power-ups parachute in
        G.itemT-=dt;if(G.itemT<=0){G.itemT=8+Math.random()*4;const k=G.hearts<G.maxHearts&&Math.random()<0.45?'heart':pick(['bolt','star','heart','bolt']);G.items.push({k,x:W*(0.08+Math.random()*0.45),y:-30,t:0});Snd.tone(880,0.1,'triangle',0.03);}
        for(const it of G.items){it.t+=dt;if(it.y<Y-hs*4)it.y+=H*0.22*dt;else it.y=Y-hs*4;
          if(!it.got&&Math.abs(it.x-h.x)<hw*0.6&&it.y>Y-hw*1.8+h.y){it.got=true;Snd.gem();burst(it.x,it.y,24,['#ffe066','#fff','#ff4d6d'],220);
            if(it.k==='heart'){G.hearts=Math.min(G.maxHearts+1,G.hearts+1);say('HEART +1','#ff4d6d',false,it.x,it.y-hs*4);}
            else if(it.k==='bolt'){gain(0.4);say('SUPER CHARGE!','#ffe066',false,it.x,it.y-hs*4);}
            else{G.star=5;say('STAR POWER!','#ffe066',true);Snd.fanfare();}}}
        G.items=G.items.filter(it=>!it.got&&it.t<14);
        // ride ram
        if(G.ram){const r=G.ram;r.t+=dt;const tx=f.x-gw*0.5;r.x=r.x0+(tx-r.x0)*Math.min(1,r.t/0.4);
          if(r.t>=0.4&&!r.hit){r.hit=true;hurtFoe(boss?5:4,f.x-gw*0.3,Y-gw*1.1,'#ff7b1c');f.stun=Math.max(f.stun,0.9);f.x=Math.min(W-gw*0.6,f.x+W*0.08);G.shake=0.7;G.flash=0.25;G.flashCol='#ffe066';Snd.crit();Snd.slam();
            burst(f.x-gw*0.5,Y-gw*0.5,50,['#ff7b1c','#ffe066','#fff'],380);say(Rides.name(ride).toUpperCase()+' RAM!','#ff7b1c',true);}
          if(r.t>0.75){h.x=clamp(r.x-hw,W*0.05,f.x-(hw+gw)*0.38);G.ram=null;}}
        // super move: Glitch freezes and takes a big hit
        if(G.sp){G.sp.t+=dt;if(G.sp.t>1.05&&!G.sp.hitDone){G.sp.hitDone=true;hurtFoe(boss?12:10,f.x,Y-gw*1.2,'#ffe066');G.shake=0.8;Snd.crit();Snd.boom();burst(f.x,Y-gw*0.5,80,[G.sp.col,'#fff','#ffe066'],420);}
          if(G.sp.t>1.9)G.sp=null;}
        // Glitch
        else if(f.stun>0){}
        else if(f.st==='walk'){f.t+=dt;const tx=clamp(h.x+W*f.pref,W*0.5,W-gw*0.6);f.x+=Math.sign(tx-f.x)*Math.min(Math.abs(tx-f.x),W*0.16*dt);
          if(f.t>=f.dur)choose();}
        else if(f.st==='wind'){f.t+=dt;if(f.atk==='slam'){f.y=-Math.sin(Math.min(1,f.t/f.dur)*Math.PI*0.5)*H*0.28;}if(f.t>=f.dur)strike();}
        else if(f.st==='act'){f.t+=dt;
          if(f.atk==='punch'){const k=Math.min(1,f.t/f.dur);f.x=f.from+(f.to-f.from)*Math.sin(k*Math.PI*0.5);if(f.t>=f.dur&&!f.res){f.res=1;resolve();}}
          if(f.atk==='slam')f.y=Math.min(0,f.y+H*3*dt);
          if(f.atk==='laser'&&h.y>-H*0.1&&!G.sp)hurtHero('ZAPPED!');
          if(f.t>=f.dur){f.res=0;f.st='rec';f.t=0;f.dur=(f.atk==='punch'?0.75:0.55)*(f.angry?0.8:1);f.y=0;}}
        else if(f.st==='rec'){f.t+=dt;if(f.atk==='punch'&&f.from)f.x+=(f.from-f.x)*Math.min(1,dt*3);
          if(f.t>=f.dur){if(f.angry&&Math.random()<0.4){choose();}else{f.st=Math.random()<0.18?'guard':'walk';f.t=0;f.dur=f.st==='guard'?0.9:0.8+Math.random()*1.0;f.pref=0.25+Math.random()*0.25;}}}
        else if(f.st==='guard'){f.t+=dt;if(f.t>=f.dur){f.st='walk';f.t=0;f.dur=0.6+Math.random()*0.8;}}
        // missiles
        for(const m of G.miss){m.t+=dt;if(m.fall>0&&!m.done){m.fall+=dt;if(m.fall>=0.3){m.done=true;burst(m.x,Y,24,['#ff7b1c','#ffe066','#ff4d6d'],260);Snd.noise&&Snd.noise(0.15,0.1,0,'lowpass',700);
          if(Math.abs(m.x-h.x)<hw*0.55)hurtHero('BOOM!');}}}
        G.miss=G.miss.filter(m=>!m.done||m.fall<0.6);
        // shockwave
        if(G.wave){G.wave.x-=G.wave.v*dt;if(!G.wave.hitDone&&Math.abs(G.wave.x-h.x)<hw*0.4){G.wave.hitDone=true;if(h.y>-H*0.07)hurtHero('WHAM!');else say('NICE JUMP!','#ffe066',false,h.x,Y-hw*1.6);}if(G.wave.x<-50)G.wave=null;}
        // bugs
        for(const b of G.bugs){if(b.dead)continue;if(b.d>0){b.d-=dt;continue;}b.x-=b.v*dt;b.ph+=dt*10;
          if(Math.abs(b.x-h.x)<hw*0.4&&h.y>-H*0.1){if(h.blk>0){b.x+=W*0.06;Snd.block();say('BONK!','#5ef2ff',false,b.x,Y-hs*8);}else{b.dead=true;hurtHero('NIBBLED!');}}
          if(b.x<-40)b.dead=true;}
        G.bugs=G.bugs.filter(b=>!b.dead);
        // the dog joins in
        // the dog helps: chomps bugs near him, fetches power-ups, bites Glitch, and protects him once when he's on his last heart
        if(pet){const d=G.dog,dn=DogPower.name?DogPower.name(pet).toUpperCase():'DOG';d.t-=dt;d.cd=Math.max(0,(d.cd||0)-dt);
          if(!d.dash&&!G.sp){const bug=G.bugs.find(b=>!b.dead&&b.d<=0&&b.x-h.x<W*0.3&&b.x>h.x-hw),item=G.items.find(it=>!it.got&&it.y>=Y-hs*4&&it.t>2.2);
            if(bug&&d.cd<=0){d.dash=0.001;d.hitDone=false;d.job='bug';d.tgt=bug;d.cd=2.5;}
            else if(item){d.dash=0.001;d.hitDone=false;d.job='item';d.tgt=item;}
            else if(d.t<=0&&Math.abs(f.x-h.x)<W*0.5){d.dash=0.001;d.hitDone=false;d.job='bite';d.tgt=null;}}
          if(G.hearts===1&&!d.saved&&fight()){d.saved=true;h.inv=3;Snd.gem();say(dn+' PROTECTS YOU!','#5ef2ff',true);burst(h.x,Y-hw*0.6,30,['#5ef2ff','#fff'],240);}
          if(d.dash>0){d.dash+=dt;if(d.dash>0.35&&!d.hitDone){d.hitDone=true;
              if(d.job==='bug'&&d.tgt&&!d.tgt.dead){squashBug(d.tgt);say('CHOMP!','#ffe066',false,d.tgt.x,Y-hw*1.1);Snd.tone(260,0.08,'square',0.05);}
              else if(d.job==='item'&&d.tgt&&!d.tgt.got){d.tgt.x=h.x;d.tgt.y=Math.max(d.tgt.y,Y-hw*1.2+h.y);d.tgt.t=3;say('FETCH!','#ffe066',false,h.x,Y-hw*1.4);}
              else if(d.job==='bite'){hurtFoe(1,f.x-gw*0.4,Y-gw*0.9,'#ffe066');say(pet==='ellie'?'ELLIE BITES!':'WOOF!','#ffe066',false,f.x-gw*0.6,Y-gw*1.25);Snd.tone(330,0.08,'square',0.05);}}
            if(d.dash>0.8){d.dash=0;if(d.job==='bite')d.t=5+Math.random()*2;d.job=null;}}}
        if(G.time<=0&&fight()){G.phase='time';G.t=0;Snd.fanfare();}}
      if(G.phase==='intro'&&f.stun===0)f.y=0;
      if(((win()&&G.t>1.3)||((G.phase==='time'||G.phase==='lose')&&G.t>2.6))&&!G.done){G.done=true;
        G.coins=win()?20+G.perfect*3+G.hearts*2+(boss?15:0):Math.max(5,Math.round(G.dmg/2));state.coins+=G.coins;
        BS.fights++;if(win()){BS.wins++;BS.lossStreak=0;}else BS.lossStreak=(BS.lossStreak||0)+1;saveState();if(G.end)G.end();}
      for(const p of G.fx){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=400*dt;}G.fx=G.fx.filter(p=>p.life>0);
      for(const x of G.txt)x.age+=dt;G.txt=G.txt.filter(x=>x.age<x.life);
      // ---------- draw
      c.save();if(G.shake>0&&!RM)c.translate((Math.random()-0.5)*G.shake*30,(Math.random()-0.5)*G.shake*30);
      const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,AR.sky[0]);g.addColorStop(1,AR.sky[1]);c.fillStyle=g;c.fillRect(-20,-20,W+40,H+40);
      if(AR.k==='city'||AR.k==='space'){c.fillStyle='#ffffff';for(let i=0;i<(AR.k==='space'?120:50);i++){c.globalAlpha=0.2+((i*7)%5)/12;c.fillRect((i*137)%W,(i*59)%(H*0.7),2,2);}c.globalAlpha=1;}
      if(AR.k==='city'){for(let x=0;x<W;x+=70){const bh=H*(0.12+((x*13)%7)/40);c.fillStyle=AR.far;c.fillRect(x,Y-bh,56,bh);c.fillStyle='#ffe06655';for(let wy=Y-bh+10;wy<Y-10;wy+=16)for(let wx=x+8;wx<x+50;wx+=14)if((wx*3+wy)%5<2)c.fillRect(wx,wy,6,8);}}
      else if(AR.k==='volcano'){[[0.18,0.42],[0.62,0.55]].forEach(([vx,vh])=>{c.fillStyle=AR.far;c.beginPath();c.moveTo(W*vx-H*0.45,Y);c.lineTo(W*vx-H*0.06,Y-H*vh);c.lineTo(W*vx+H*0.06,Y-H*vh);c.lineTo(W*vx+H*0.45,Y);c.fill();c.fillStyle='#ff7b1c';c.fillRect(W*vx-H*0.06,Y-H*vh-3,H*0.12,6);});
        for(let i=0;i<24;i++){const ex=(i*97+G.t*20*(1+i%3))%W,ey=Y-((G.t*60*(1+i%4)+i*53)%(H*0.7));c.fillStyle=i%2?'#ff7b1c':'#ffe066';c.globalAlpha=0.7;c.fillRect(ex,ey,3,3);}c.globalAlpha=1;}
      else if(AR.k==='space'){c.fillStyle='#c084fc';c.beginPath();c.arc(W*0.8,H*0.22,H*0.09,0,6.28);c.fill();c.strokeStyle='#ffe066';c.lineWidth=4;c.beginPath();c.ellipse(W*0.8,H*0.22,H*0.15,H*0.035,-0.3,0,6.28);c.stroke();
        c.fillStyle=AR.far;for(let x=0;x<W;x+=90){c.fillRect(x,Y-H*0.16,80,H*0.16);c.fillStyle='#5ef2ff44';c.fillRect(x+10,Y-H*0.12,60,6);c.fillStyle=AR.far;}}
      else if(AR.k==='jungle'){for(let x=-20;x<W;x+=110){c.fillStyle='#4a2a14';c.fillRect(x+40,Y-H*0.45,18,H*0.45);c.fillStyle=AR.far;c.beginPath();c.arc(x+50,Y-H*0.47,H*0.11,0,6.28);c.arc(x+20,Y-H*0.42,H*0.08,0,6.28);c.arc(x+85,Y-H*0.42,H*0.08,0,6.28);c.fill();}
        c.strokeStyle='#2a7a3a';c.lineWidth=4;for(let i=0;i<6;i++){const vx=(i*173)%W;c.beginPath();c.moveTo(vx,0);c.quadraticCurveTo(vx+Math.sin(G.t+i)*20,H*0.15,vx,H*0.3);c.stroke();}}
      else if(AR.k==='ice'){c.fillStyle=AR.far;for(let x=0;x<W;x+=40){const l=H*(0.05+((x*7)%5)/40);c.beginPath();c.moveTo(x,0);c.lineTo(x+20,l);c.lineTo(x+40,0);c.fill();}
        c.fillStyle='#ffffff';for(let i=0;i<50;i++){c.globalAlpha=0.7;c.fillRect((i*131+Math.sin(G.t+i)*20)%W,(G.t*40*(1+i%3)+i*61)%H,3,3);}c.globalAlpha=1;}
      else if(AR.k==='candy'){for(let x=30;x<W;x+=160){c.fillStyle='#ffffff';c.fillRect(x+18,Y-H*0.3,6,H*0.3);c.fillStyle=['#ff4d6d','#5ef2ff','#3fdc6b','#ffe066'][(x/160|0)%4];c.beginPath();c.arc(x+21,Y-H*0.32,H*0.06,0,6.28);c.fill();
        c.strokeStyle='#ffffff';c.lineWidth=3;c.beginPath();c.arc(x+21,Y-H*0.32,H*0.035,0,5);c.stroke();}}
      if(f.angry){c.globalAlpha=0.16;c.fillStyle='#ff2d4d';c.fillRect(-20,-20,W+40,H+40);c.globalAlpha=1;}
      c.fillStyle=AR.gr;c.fillRect(0,Y,W,H-Y);c.fillStyle=AR.gl;for(let x=0;x<W;x+=48)c.fillRect(x,Y,24,6);
      // power-ups
      for(const it of G.items){const bob=Math.sin(it.t*4)*3,iy=it.y+bob,z=hs*0.9;if(it.y<Y-hs*4){c.strokeStyle='#ffffff99';c.lineWidth=1;c.beginPath();c.moveTo(it.x-z*3,iy-z*5);c.lineTo(it.x,iy);c.lineTo(it.x+z*3,iy-z*5);c.stroke();c.fillStyle='#ffffffcc';c.beginPath();c.arc(it.x,iy-z*5,z*3.2,Math.PI,0);c.fill();}
        if(it.t>11&&((it.t*8|0)%2))continue;c.fillStyle='#000a';c.beginPath();c.arc(it.x,iy,z*2.6,0,6.28);c.fill();
        if(it.k==='heart'){c.fillStyle='#ff4d6d';c.beginPath();c.arc(it.x-z*0.8,iy-z*0.5,z*1,0,6.28);c.arc(it.x+z*0.8,iy-z*0.5,z*1,0,6.28);c.fill();c.beginPath();c.moveTo(it.x-z*1.8,iy-z*0.2);c.lineTo(it.x,iy+z*1.8);c.lineTo(it.x+z*1.8,iy-z*0.2);c.fill();}
        else if(it.k==='bolt'){c.fillStyle='#ffe066';c.beginPath();c.moveTo(it.x+z*0.4,iy-z*2);c.lineTo(it.x-z*1.2,iy+z*0.2);c.lineTo(it.x,iy+z*0.2);c.lineTo(it.x-z*0.4,iy+z*2);c.lineTo(it.x+z*1.2,iy-z*0.2);c.lineTo(it.x,iy-z*0.2);c.fill();}
        else{c.fillStyle='#ffe066';c.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?z*0.9:z*2.1;c.lineTo(it.x+Math.cos(a)*r,iy+Math.sin(a)*r);}c.fill();}}
      if(G.slamFx){const k=G.slamFx.t/0.5;c.strokeStyle=`rgba(255,182,39,${1-k})`;c.lineWidth=6;c.beginPath();c.ellipse(G.slamFx.x,Y,W*0.05+k*W*0.2,hs*2*(1-k*0.5),0,Math.PI,0);c.stroke();}
      // telegraphs
      if(f.st==='wind'&&f.atk==='laser'){c.globalAlpha=0.35+0.3*Math.sin(G.t*30);c.fillStyle='#ff4d6d';for(let x=0;x<f.x-gw*0.4;x+=28)c.fillRect(x,Y-H*0.05,16,4);c.globalAlpha=1;}
      if(f.st==='act'&&f.atk==='laser'){const ly=Y-H*0.05;c.fillStyle='#ff4d6d';c.globalAlpha=0.45;c.fillRect(0,ly-H*0.04,f.x-gw*0.3,H*0.08);c.globalAlpha=1;c.fillStyle='#fff';c.fillRect(0,ly-3,f.x-gw*0.3,6);}
      for(const m of G.miss){if(m.done)continue;const k=Math.min(1,m.t/0.9);c.strokeStyle='#ff4d6d';c.lineWidth=3;c.globalAlpha=0.5+0.4*Math.sin(G.t*20);c.beginPath();c.ellipse(m.x,Y+4,hw*0.55*k,hs*1.2*k,0,0,6.28);c.stroke();c.globalAlpha=1;
        if(m.fall>0){const my=-40+(Y+40)*Math.min(1,m.fall/0.3);c.fillStyle='#ff4d6d';c.fillRect(m.x-6,my-22,12,22);c.fillStyle='#ffe066';c.fillRect(m.x-4,my-30,8,8);}}
      if(G.wave){c.fillStyle='#c084fc';c.globalAlpha=0.85;c.beginPath();c.moveTo(G.wave.x-hs*4,Y);c.lineTo(G.wave.x,Y-hs*5);c.lineTo(G.wave.x+hs*4,Y);c.fill();c.globalAlpha=1;}
      // dog
      if(pet){const p=PETS[pet],ps=Math.max(2,Math.round(hs*0.75)),pw=p.rows[0].length*ps,ph=p.rows.length*ps,d=G.dog;
        let dx=h.x-hw*0.55-pw;if(d.dash>0){const k=d.dash<0.35?d.dash/0.35:1-(d.dash-0.35)/0.45,tx=d.job!=='bite'&&d.tgt?d.tgt.x-pw/2:f.x-gw*0.5-pw;dx+=(tx-dx)*Math.max(0,k);}
        drawPet(c,pet,dx,p.fly?Y-hw*1.2:Y-ph,ps,G.t*(d.dash>0?3:1));}
      // hero
      const hx=h.x-hw/2,hy=Y-14*hs+h.y;
      if(G.ram){const rs=hs*0.95;Rides.draw(c,ride,G.ram.x-13*rs,Y-22*rs,rs,look,G.t,true);for(let i=1;i<4;i++){c.fillStyle='#ffffff55';c.fillRect(G.ram.x-13*rs-i*hs*3,Y-rs*(6+i*3),hs*2,2);}}
      if(G.star>0&&!G.ram){c.globalAlpha=0.35+0.2*Math.sin(G.t*20);c.fillStyle=['#ff4d6d','#ffe066','#3fdc6b','#5ef2ff','#c084fc'][(G.t*10|0)%5];c.beginPath();c.arc(h.x,hy+hs*7,hw*0.75,0,6.28);c.fill();c.globalAlpha=1;}
      else if(G.combo>=5&&!G.ram){c.globalAlpha=0.3+0.15*Math.sin(G.t*14);c.fillStyle='#ff7b1c';c.beginPath();c.ellipse(h.x,hy+hs*8,hw*0.6,hw*0.8,0,0,6.28);c.fill();c.globalAlpha=1;}
      if(G.dash&&!G.ram){c.globalAlpha=0.25;for(let i=1;i<3;i++)drawHero(c,hx-G.dash.dir*i*hw*0.28,hy,hs,look,'runA',G.t);c.globalAlpha=1;}
      if(!G.ram&&!(h.inv>0&&((G.t*16|0)%2===0))){c.save();if(h.hit>0)c.translate(-Math.sin(h.hit*30)*6,0);
        drawHero(c,hx,hy,hs,look,h.y<0?'runA':h.run>0?(((h.run*8)|0)%2?'runA':'stand'):'stand',G.t);c.restore();}
      if(h.atk>0){c.strokeStyle=G.combo>=5?'#ff7b1c':'#ffffff';c.lineWidth=hs*1.1;c.globalAlpha=h.atk/0.22;c.beginPath();c.arc(h.x+hw*0.35,hy+hs*7,hw*0.62,-1.25,1.0);c.stroke();c.globalAlpha=1;}
      if(h.blk>0){c.strokeStyle='#5ef2ff';c.lineWidth=5;c.fillStyle='rgba(94,242,255,0.22)';c.beginPath();c.arc(h.x+hw*0.2,hy+hs*7,hw*0.72,-1.3,1.3);c.lineTo(h.x+hw*0.2,hy+hs*7);c.closePath();c.fill();c.stroke();}
      // Glitch
      const fxp=f.x+(f.hurt>0?(Math.random()-0.5)*10:0)+(f.st==='wind'?Math.sin(G.t*40)*3:0),fyp=Y-gw+f.y-(f.stun>0?Math.abs(Math.sin(G.t*8))*6:0);
      if(!win()||G.t<0.35){if(f.angry){c.globalAlpha=0.25+0.1*Math.sin(G.t*6);c.fillStyle='#ff4d6d';c.beginPath();c.arc(fxp,fyp+gw*0.5,gw*0.75,0,6.28);c.fill();c.globalAlpha=1;}
        drawGlitch(c,fxp-gw/2,fyp,gs,form,G.t,f.hurt>0.1&&((G.t*20|0)%2===0));
        if(f.st==='wind'){c.globalAlpha=0.3+0.25*Math.sin(G.t*30);c.fillStyle='#ff4d6d';c.beginPath();c.arc(fxp,fyp+gw*0.5,gw*0.7,0,6.28);c.fill();c.globalAlpha=1;
          c.font=`900 ${Math.round(gs*6)}px "Pixelify Sans",monospace`;c.textAlign='center';c.lineWidth=6;c.strokeStyle='#000';c.strokeText('!',fxp,fyp-gs*2);c.fillStyle='#ffe066';c.fillText('!',fxp,fyp-gs*2);}
        if(f.st==='guard'){c.fillStyle='#8a94ad';c.fillRect(fxp-gw*0.62,fyp+gs,gs*2,gw*0.85);c.fillStyle='#d7deeb';c.fillRect(fxp-gw*0.62,fyp+gs,gs,gw*0.85);}
        if(f.stun>0){c.fillStyle='#ffe066';for(let i=0;i<3;i++){const a=G.t*6+i*2.1;c.fillRect(fxp+Math.cos(a)*gw*0.4-4,fyp-gs*1.2+Math.sin(a)*gs*1.5,8,8);}}}
      if(G.taunt&&fight()){const fs=Math.max(13,Math.round(hs*1.8));c.font=`700 ${fs}px Lexend,sans-serif`;const tw=c.measureText(G.taunt.s).width+18,bx=clamp(fxp-tw/2,6,W-tw-6),by=fyp-fs*2.6-gs*4;
        c.globalAlpha=Math.min(1,G.taunt.t*3);c.fillStyle='#fff';c.fillRect(bx,by,tw,fs+12);c.beginPath();c.moveTo(fxp-6,by+fs+12);c.lineTo(fxp+6,by+fs+12);c.lineTo(fxp,by+fs+22);c.fill();c.fillStyle='#1d1f33';c.textAlign='left';c.fillText(G.taunt.s,bx+9,by+fs+3);c.globalAlpha=1;}
      // bugs
      const bs=Math.max(2,Math.round(hs*0.55)),bc=BUG_COLS[0];
      for(const b of G.bugs){if(b.dead||b.d>0)continue;const by=Y-9*bs-Math.abs(Math.sin(b.ph))*bs*1.5;drawSprite(c,MINION,b.x-5*bs,by,bs,{a:bc[1],g:bc[1],G:bc[0],W:'#ffffff',K:'#1d1f33',M:'#1d1f33'});drawSprite(c,MINION_LEGS[(b.ph|0)%2],b.x-5*bs,by+8*bs,bs,{g:bc[1]});}
      // super move
      if(G.sp){const s=G.sp,k=s.t;c.globalAlpha=Math.min(0.55,k*2);c.fillStyle='#000';c.fillRect(-20,-20,W+40,H+40);c.globalAlpha=1;
        if(k>0.45&&k<1.5){const bw=H*0.12*Math.min(1,(k-0.45)*4)*(k>1.2?(1.5-k)/0.3:1);c.fillStyle=s.col;c.fillRect(h.x,hy+hs*6-bw/2,f.x-h.x,bw);c.fillStyle='#fff';c.fillRect(h.x,hy+hs*6-bw/6,f.x-h.x,bw/3);
          for(let i=0;i<6;i++){const px=f.x+(Math.random()-0.5)*gw*1.4,py=Y-Math.random()*gw*1.6;c.fillStyle=pick([s.col,'#fff','#ffe066']);c.fillRect(px,py,10,10);}}
        Cine.title(c,W,H,k,s.name.toUpperCase()+'!',s.col,null,H*0.24);}
      for(const p of G.fx){c.globalAlpha=Math.min(1,p.life*2.5);c.fillStyle=p.col;c.fillRect(p.x,p.y,5,5);}c.globalAlpha=1;
      // cue word over the hero while Glitch winds up
      if(G.cue&&fight()){const fs=Math.round(Math.max(18,hs*4));c.font=`900 ${fs}px "Pixelify Sans",monospace`;c.textAlign='center';c.lineWidth=6;c.strokeStyle='#000';
        const cy=hy-hs*3+Math.sin(G.t*14)*3;c.strokeText(G.cue[0],h.x,cy);c.fillStyle=G.cue[1];c.fillText(G.cue[0],h.x,cy);}
      // HUD
      const bw=Math.min(W*0.5,440),bx=(W-bw)/2,by=H*0.08;c.fillStyle='#000a';c.fillRect(bx-4,by-4,bw+8,22);c.fillStyle='#3a1020';c.fillRect(bx,by,bw,14);
      c.fillStyle=G.hp/G.max<0.34?'#ff4d6d':'#ff7b1c';c.fillRect(bx,by,bw*G.hp/G.max,14);c.font='800 14px "Pixelify Sans",monospace';c.textAlign='center';c.fillStyle='#fff';c.fillText(form.name.toUpperCase()+(f.angry?' (ANGRY!)':''),W/2,by-8);
      if(fight()){c.fillStyle='#ffffff22';c.fillRect(bx,by+24,bw,5);c.fillStyle='#5ef2ff';c.fillRect(bx,by+24,bw*Math.max(0,G.time)/90,5);}
      const hz=Math.max(16,Math.round(hs*2.2));c.font=`${hz}px sans-serif`;c.textAlign='left';
      for(let i=0;i<G.maxHearts;i++){c.globalAlpha=i<G.hearts?1:0.25;c.fillStyle='#ff4d6d';c.fillText('♥',14+i*(hz+4),by+hz*0.75);}c.globalAlpha=1;
      const sw=Math.min(W*0.28,220),sy=by+hz+10;c.fillStyle='#000a';c.fillRect(12,sy-2,sw+4,14);c.fillStyle=G.sup>=1&&((G.t*6|0)%2)?'#ffffff':'#ffc933';c.fillRect(14,sy,sw*G.sup,10);
      c.font='700 11px Lexend,sans-serif';c.fillStyle='#fff';c.fillText(G.sup>=1?'SUPER READY!':'SUPER',16,sy+26);
      if(G.combo>=2){c.textAlign='right';c.font=`800 ${Math.round(hs*3.4)}px "Pixelify Sans",monospace`;c.lineWidth=5;c.strokeStyle='#000';c.strokeText('x'+G.combo,W-16,by+hs*4.5);c.fillStyle=G.combo>=5?'#ff7b1c':'#5ef2ff';c.fillText('x'+G.combo,W-16,by+hs*4.5);}
      for(const x of G.txt){const k=x.age/x.life,sz=Math.round((x.big?hs*4.2:hs*2.8)*(x.big&&k<0.12?1.8-k*6:1));c.globalAlpha=k>0.7?(1-k)/0.3:1;c.font=`800 ${sz}px "Pixelify Sans",monospace`;c.textAlign='center';c.lineWidth=5;c.strokeStyle='#000';
        const xx=x.x!=null?x.x:W/2,yy=(x.y!=null?x.y:H*0.34)-(x.big?0:k*40);c.strokeText(x.s,xx,yy);c.fillStyle=x.col;c.fillText(x.s,xx,yy);}c.globalAlpha=1;
      if(G.phase==='intro'){Cine.title(c,W,H,G.t,boss?'BOSS BATTLE!':'BATTLE TIME!','#ffe066',`${AR.n} · Battle Power ${power} · ${G.maxHearts} hearts · SUPER ${Math.round(G.sup*100)}%`);
        if(lost){c.font='800 18px Lexend,sans-serif';c.textAlign='center';c.fillStyle='#3fdc6b';c.fillText('Glitch is worn out from running away. He’s weaker this time!',W/2,H*0.42);}
        if(G.introLen>3){c.font='700 16px Lexend,sans-serif';c.textAlign='center';c.fillStyle='#cfd5ff';c.globalAlpha=Math.min(1,Math.max(0,G.t-1.2)*2);
          c.fillText('Hold ◀ ▶ to run · JUMP over lasers and shockwaves · ATTACK up close',W/2,H*0.36);c.fillText('BLOCK punches right before they land for a PERFECT BLOCK',W/2,H*0.36+22);c.fillText('ATTACK in the air for a GROUND POUND · grab power-ups that float down!',W/2,H*0.36+44);c.globalAlpha=1;}}
      if(win())Cine.title(c,W,H,G.t,'K.O.!','#ffe066','Finishing move…');
      if(G.phase==='time')Cine.title(c,W,H,G.t,'TIME!','#5ef2ff',`Glitch escapes! You hit for ${G.dmg} · +${Math.max(5,Math.round(G.dmg/2))} coins`);
      if(G.phase==='lose')Cine.title(c,W,H,G.t,'GLITCH ESCAPES!','#ff9f43',`He’ll be weaker next time! · +${Math.max(5,Math.round(G.dmg/2))} coins`);
      if(G.flash>0){c.globalAlpha=G.flash;c.fillStyle=G.flashCol;c.fillRect(-20,-20,W+40,H+40);c.globalAlpha=1;}
      c.restore();
      if(G.supBtn)G.supBtn.classList.toggle('ready',G.sup>=1&&fight()&&!G.sp);
      if(G.ramBtn){const cd=Math.ceil(G.ramCd);if(G.ramBtn.dataset.cd!==String(cd)){G.ramBtn.dataset.cd=String(cd);G.ramBtn.textContent=cd?`🚗 ${cd}s`:'🚗 RAM';G.ramBtn.classList.toggle('cool',cd>0);}}},
    {skip:true,hold:end=>{G.end=end;const ui=$('#cine .cine-ui');
      const act=(cls,label,fn)=>{const b=el('button',{class:'bb-btn '+cls,type:'button'},label);tapify(b,()=>{Snd.init();fn();},{down:true});return b;};
      const hold=(cls,label,key)=>{const b=el('button',{class:'bb-btn '+cls,type:'button'},label);const on=e=>{e.preventDefault();G.keys[key]=1;if(fight()&&!G.sp)G.dash={dir:key==='r'?1:-1,t:0.16,sp:W*0.75};b.classList.add('hit');try{b.setPointerCapture(e.pointerId);}catch(_){}},off=()=>{G.keys[key]=0;b.classList.remove('hit');};
        b.addEventListener('pointerdown',on);['pointerup','pointercancel','lostpointercapture'].forEach(t=>b.addEventListener(t,off));return b;};
      G.supBtn=act('sup','★ SUPER',superMove);G.ramBtn=ride?act('ram','🚗 RAM',ram):null;
      ui.append(el('div',{class:'bb-ctl'},el('div',{class:'bb-move'},hold('mv','◀','l'),hold('mv','▶','r')),
        el('div',{class:'bb-act'},act('jmp','⤒ JUMP',jump),act('blk','🛡 BLOCK',block),act('atk','⚔ ATTACK',attack),G.ramBtn,G.supBtn)));
      const kd=e=>{if($('#cine').hidden)return;const k=e.key;
        if(k==='ArrowLeft'||k==='a'){G.keys.l=1;e.preventDefault();}else if(k==='ArrowRight'||k==='d'){G.keys.r=1;e.preventDefault();}
        else if(k==='ArrowUp'||k==='w'||k===' '){e.preventDefault();jump();}else if(k==='j'||k==='Enter'){e.preventDefault();attack();}
        else if(k==='k'||k==='Shift'){e.preventDefault();block();}else if(k==='l'||k==='s'){e.preventDefault();superMove();}else if(k==='r'){e.preventDefault();ram();}};
      const ku=e=>{if(e.key==='ArrowLeft'||e.key==='a')G.keys.l=0;if(e.key==='ArrowRight'||e.key==='d')G.keys.r=0;};
      document.addEventListener('keydown',kd);document.addEventListener('keyup',ku);G.unbind=()=>{document.removeEventListener('keydown',kd);document.removeEventListener('keyup',ku);};
      if(typeof window!=='undefined')Brawl.G=G;}})
      .then(async()=>{if(G.unbind)G.unbind();
        if(G.phase==='win'&&G.done){if(typeof Inter!=='undefined')await Inter.play();Snd.fanfare();
          await Cine.play(2.2,(c,W,H,t)=>{const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1a0f2e');g.addColorStop(1,'#3a1630');c.fillStyle=g;c.fillRect(0,0,W,H);
            for(let i=0;i<40;i++){c.fillStyle=['#ffe066','#ff4d6d','#5ef2ff','#3fdc6b'][i%4];c.fillRect((i*97+t*60*(1+i%3))%W,(i*53+t*120*(1+i%2))%H,6,6);}
            const s=Math.max(4,Math.floor(H/40));drawHero(c,W/2-6*s,H*0.5,s,look,(t*4|0)%2?'runA':'stand',t);
            Cine.title(c,W,H,t,'VICTORY!','#ffe066',`+${G.coins} coins · Glitch defeated ${BS.wins} time${BS.wins===1?'':'s'}!`);},{skip:true});}
        Music.play(typeof run!=='undefined'&&run&&run.spec&&run.spec.mech?'boss':'battle');return G.coins;});}
};
