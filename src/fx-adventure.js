/* =========================================================
   Island adventures (3D map): explore Number Isle and find things.
   - ⛏️ Dig spots: a few secret mounds each day. The chest's lock is a sharing riddle (remainders, like class).
   - 💎 Number Gems: 12 hidden in hard-to-reach places; each teaches a math secret.
   - ⚔️ Glitch Bugs roam the island: a sword duel where every right answer is a strike (fast = critical hit).
     Questions come from the times and division facts he hasn't owned yet. No timers; a miss costs a heart.
   - 📜 Treasure Log on the map shows what he has found.
   ========================================================= */
const Adv={
  DIGS:[[12,-8],[-8,-10],[28,12],[6,30],[-30,20],[38,-14],[-12,-34],[10,-42],[30,34],[-44,10],[-6,44],[44,20],[-26,-4],[18,-14],[-36,30],[2,-24]],
  GEMS:[
    {id:'peak',x:-40,z:-38,col:'#5ef2ff',name:'Sky Gem',fact:'Nines trick: the digits of 9 × any number up to 10 add up to 9. 9 × 7 = 63, and 6 + 3 = 9!'},
    {id:'falls',x:-26.5,z:-24.8,col:'#9fd8ff',name:'Mist Gem',fact:'Times 10 just adds a zero: 47 × 10 = 470. Every digit slides one place to the left.'},
    {id:'islet',x:9,z:-73,col:'#ff4d6d',name:'Storm Gem',fact:'Anything times 0 is 0. Zero groups of a million is still nothing!'},
    {id:'bridge',x:0,z:-60,col:'#b06bff',name:'Bridge Gem',fact:'Division undoes multiplication: 8 × 7 = 56, so 56 ÷ 7 = 8. Flip it!'},
    {id:'east',x:55,z:5,col:'#ffe066',name:'Sun Gem',fact:'An even number times anything is even. 4 × 7 = 28, even!'},
    {id:'south',x:5,z:57,col:'#3fdc6b',name:'Shell Gem',fact:'Fives always end in 0 or 5: 5, 10, 15, 20, 25…'},
    {id:'tower',x:-41,z:9,col:'#4d7cff',name:'Owl Gem',fact:'A remainder is always smaller than the number you divide by. 17 ÷ 5 = 3 R 2, and 2 is less than 5.'},
    {id:'docks',x:21,z:50,col:'#3fa7e8',name:'Wave Gem',y:0.4,fact:'Times 4 is “double, double”: 4 × 8 → 16 → 32.'},
    {id:'west',x:-52,z:-10,col:'#ff9f43',name:'Ember Gem',fact:'11 times a one-digit number repeats it: 11 × 6 = 66.'},
    {id:'canyon',x:42,z:-4,col:'#e8643a',name:'Canyon Gem',fact:'Order doesn’t matter in times: 6 × 9 = 9 × 6. Learn one, get one free!'},
    {id:'grove',x:8,z:-13,col:'#ffb3d1',name:'Blossom Gem',fact:'Times 8 is “double, double, double”: 8 × 6 → 12 → 24 → 48.'},
    {id:'cove',x:-40,z:42,col:'#7dff5a',name:'Cove Gem',fact:'A remainder of 0 means it shares out perfectly fair, with nothing left over.'}],
  RELICS:[['🧭','Golden Compass'],['🐉','Dragon Scale'],['👑','Lost Crown'],['🗡️','Hero’s Dagger'],['🔮','Seer’s Orb'],['📯','Echo Horn'],['🪙','Ancient Coin'],['🦴','Dino Bone'],
    ['🗝️','Skeleton Key'],['🪶','Phoenix Feather'],['💍','Moon Ring'],['🏺','Clay Vase'],['🛡️','Tiny Shield'],['⚓','Pirate Anchor'],['🌟','Fallen Star'],['🐚','Singing Shell']],
  FOES:[[14,-5],[-28,10],[26,-8],[-6,-30],[34,22]],
  st(){const s=state.adv=state.adv||{};s.dug=s.dug||{};s.gems=s.gems||{};s.relics=s.relics||{};s.bugs=s.bugs||0;s.down=s.down||{};return s;},
  // four dig spots a day, the same four all day
  todaysDigs(){const day=dayStr();let h=0;for(const c of day)h=(Math.imul(h,31)+c.charCodeAt(0))>>>0;const idx=[];for(let k=0;k<200&&idx.length<4;k++){h=(Math.imul(h,1103515245)+12345)>>>0;const i=(h>>>8)%this.DIGS.length;if(!idx.includes(i))idx.push(i);}
    const S=this.st();return idx.filter(i=>S.dug[day+':'+i]==null).map(i=>({id:'dig'+i,i,x:this.DIGS[i][0],z:this.DIGS[i][1]}));},
  foesNow(){const S=this.st(),now=Date.now();return this.FOES.map((p,i)=>({id:'bug'+i,x:p[0],z:p[1]})).filter(f=>!(S.down[f.id]>now));},
  attach(w){if(!w||w.adv)return;const S=this.st();
    this.w=w;w.adventure({digs:this.todaysDigs(),gems:this.GEMS.filter(g=>!S.gems[g.id]),foes:this.foesNow(),
      onDig:id=>this.dig(id),onGem:id=>this.gem(id),onFoe:id=>this.duel(id)});
    if(!this.respawnT)this.respawnT=setInterval(()=>this.respawn(),20000);},
  respawn(){const w=this.w;if(!w||!w.adv||w.adv.duel)return;const S=this.st(),now=Date.now(),alive=new Set(w.adv.foes.filter(f=>f.alive).map(f=>f.d.id));
    for(const f of this.foesNow())if(!alive.has(f.id))w.adv.respawn(f);},
  // ---- questions
  owned(key){try{const r=Dojo.st().facts[key];return !!(r&&r.owned);}catch(e){return false;}},
  duelQ(){const pool=[];for(let a=2;a<=9;a++)for(let b=2;b<=9;b++){const big=Math.max(a,b)>=6;const k=Math.min(a,b)+'x'+Math.max(a,b);const w=(this.owned(k)?1:4)*(big?3:1);
      pool.push({w,q:`${a} × ${b}`,ans:a*b});if(big&&b>=3)pool.push({w:w*0.8,q:`${a*b} ÷ ${b}`,ans:a});}
    let t=Math.random()*pool.reduce((s,p)=>s+p.w,0);for(const p of pool){t-=p.w;if(t<=0)return p;}return pool[0];},
  digQ(){const d=rint(3,9),q=rint(4,12),r=rint(1,d-1),n=d*q+r;
    const S=pick([['gold coins','pirates'],['gems','treasure bags'],['cookies','friends'],['marbles','jars'],['stickers','pages']]);
    return {n,d,q,r,text:`The lock says: share ${n} ${S[0]} equally among ${d} ${S[1]}.`,parts:[{ask:`How many ${S[0]} does each get?`,ans:q},{ask:`How many ${S[0]} are left over?`,ans:r}]};},
  // ---- the answer panel (keypad and Pencil, under the 3D view)
  panel(title,sub){this.close();const host=document.querySelector('.w3d')||document.body;const P=el('div',{class:'adv-panel'});
    const head=el('div',{class:'adv-head'},el('b',null,title),sub?el('span',null,sub):null);const q=el('div',{class:'adv-q'});const msg=el('div',{class:'adv-msg'});
    const f=Pad.make({max:4,allowDot:false,ph:'?'});const ink=el('div',{class:'adv-ink'});const row=el('div',{class:'adv-row'},f.el,ink);
    const keys=el('div',{class:'adv-keys'});'1234567890'.split('').concat(['⌫']).forEach(k=>{const b=el('button',{class:'adv-key',type:'button'},k);tapify(b,()=>{Pad.focus(f);Pad.key(k==='⌫'?'del':k);},{down:true});keys.append(b);});
    const go=el('button',{class:'adv-go',type:'button'},'⚔️ Go!');tapify(go,()=>this.onGo&&this.onGo());keys.append(go);
    const bye=el('button',{class:'adv-x',type:'button','aria-label':'Leave'},'✕');
    P.append(bye,head,q,row,keys,msg);host.append(P);this.P=P;host.classList.add('adv-busy');
    try{this.ink=InkBox.make(ink,{big:true});}catch(e){}
    Pad.focus(f);this.f=f;return {P,q,msg,go,f,bye,head};},
  close(){this.onGo=null;const h=document.querySelector('.w3d');if(h)h.classList.remove('adv-busy');if(this.P){this.P.remove();this.P=null;}if(this.f&&Pad.active===this.f)Pad.active=null;this.f=null;},
  ask(ui,text,done){ui.q.textContent=text;ui.f.val='';Pad.render(ui.f);ui.f.el.classList.remove('wrong','right');if(this.ink&&this.ink.clear)this.ink.clear();Pad.focus(ui.f);const t0=Date.now();
    let last=0;const submit=()=>{if(Date.now()-last<600)return;const v=Pad.val(ui.f);if(v==null){ui.msg.textContent='Write or tap your answer first.';return;}last=Date.now();done(v,Date.now()-t0);};this.onGo=submit;ui.f.onEnter=submit;},
  // after a miss: clear the box so he can try again
  retry(ui){setTimeout(()=>{if(!this.f)return;ui.f.val='';Pad.render(ui.f);ui.f.el.classList.remove('wrong');if(this.ink&&this.ink.clear)this.ink.clear();},900);},
  coins(n){state.coins=(state.coins||0)+n;try{updateTop();}catch(e){}},
  chime(ok){try{if(ok){Snd.tone(784,0.08,'square',0.04);Snd.tone(1046,0.12,'square',0.04,0.08);}else Snd.tone(196,0.18,'sawtooth',0.04);}catch(e){}},
  // ---- dig: two-part sharing riddle, then the chest opens
  dig(id){const ui=this.panel('⛏️ A buried chest!','Solve the lock to open it');const R=this.digQ();let part=0,miss=0;
    ui.bye.addEventListener('click',()=>{this.close();this.w.adv.digCancel();});
    const next=()=>{const p=R.parts[part];ui.head.querySelector('span').textContent=R.text;this.ask(ui,p.ask,(v)=>{
      if(v===p.ans){this.chime(1);ui.f.el.classList.add('right');part++;if(part<R.parts.length){ui.msg.textContent=`Yes! ${R.d} × ${R.q} = ${R.d*R.q}.`;setTimeout(next,700);}else win();}
      else{this.chime(0);miss++;ui.f.el.classList.add('wrong');ui.msg.textContent=part===0?(miss>1?`Hint: what times ${R.d} gets close to ${R.n} without going over?`:'Almost! Try again.'):(miss>1?`Hint: ${R.n} − ${R.d*R.q} = ?`:'Almost! How many are left after the fair shares?');this.retry(ui);}});};
    const win=()=>{const S=this.st(),day=dayStr(),i=+id.replace('dig','');S.dug[day+':'+i]=1;this.w.adv.digOpen();
      const have=Object.keys(S.relics);const fresh=this.RELICS.filter(r=>!S.relics[r[1]]);let gift,coins=15+rint(0,10);
      if(fresh.length&&Math.random()<0.75){gift=pick(fresh);S.relics[gift[1]]=1;}else coins+=15;this.coins(coins);saveState();
      ui.q.textContent=gift?`${gift[0]} You found the ${gift[1]}!`:'A chest full of coins!';ui.msg.textContent=`+${coins} coins${gift?' and a new relic for your Treasure Log':''}.`;
      ui.P.classList.add('adv-win');setTimeout(()=>this.close(),3200);};
    next();},
  // ---- gems: a math secret, no quiz
  gem(id){const g=this.GEMS.find(x=>x.id===id);if(!g)return;const S=this.st();S.gems[id]=1;this.coins(10);saveState();this.chime(1);
    const n=Object.keys(S.gems).length;const card=el('div',{class:'adv-panel adv-gem'},el('div',{class:'adv-head'},el('b',null,`💎 ${g.name}!`),el('span',null,`Number Gem ${n} of ${this.GEMS.length}`)),
      el('div',{class:'adv-q'},g.fact),el('div',{class:'adv-msg'},n===this.GEMS.length?'You found every gem! +100 coins!':'+10 coins'),el('button',{class:'adv-go',type:'button',onclick:()=>card.remove()},'Cool!'));
    if(n===this.GEMS.length){this.coins(100);saveState();}(document.querySelector('.w3d')||document.body).append(card);setTimeout(()=>card.remove(),12000);},
  // ---- duel: 3 hits wins (a fast answer is a double strike); 3 misses and the bug runs off
  duel(id){const A=this.w.adv;let foeHp=3,hearts=3;const ui=this.panel('⚔️ Glitch Bug duel!','Every right answer is a sword strike');
    const bars=el('div',{class:'adv-bars'});ui.head.append(bars);const draw=()=>{bars.textContent='❤️'.repeat(hearts)+'🤍'.repeat(3-hearts)+'   👾 '+'🟪'.repeat(Math.max(0,foeHp))+'⬜'.repeat(3-Math.max(0,foeHp));};draw();
    ui.go.textContent='⚔️ Strike!';ui.bye.addEventListener('click',()=>{this.close();A.foeEscape();});
    const round=()=>{const Q=this.duelQ();this.ask(ui,Q.q+' = ?',(v,ms)=>{
      if(v===Q.ans){const crit=ms<5000;foeHp-=crit?2:1;A.strike(crit);this.chime(1);ui.msg.textContent=crit?'⚡ Critical hit!':'Hit!';draw();
        if(foeHp<=0){setTimeout(()=>{A.foeDefeat();const S=this.st();S.bugs++;S.down[id]=Date.now()+4*60000;const c=12+rint(0,8);this.coins(c);saveState();
          ui.q.textContent='👾💥 Glitch Bug defeated!';ui.msg.textContent=`+${c} coins · bugs beaten: ${S.bugs}`;ui.P.classList.add('adv-win');setTimeout(()=>this.close(),2600);},700);}
        else setTimeout(round,750);}
      else{hearts--;A.zap();this.chime(0);ui.f.el.classList.add('wrong');ui.msg.textContent=`Zap! ${Q.q} = ${Q.ans}. Remember it for next time.`;draw();
        if(hearts<=0){setTimeout(()=>{A.foeEscape();ui.q.textContent='The bug scuttled away!';ui.msg.textContent='It will be back. Practice in the Dojo and try again.';setTimeout(()=>this.close(),2600);},900);}
        else setTimeout(round,1600);}});};
    round();},
  // ---- the Treasure Log
  log(){const S=this.st();const rel=el('div',{class:'adv-grid'},...this.RELICS.map(r=>el('div',{class:'adv-cell'+(S.relics[r[1]]?'':' none')},el('span',null,S.relics[r[1]]?r[0]:'❔'),el('small',null,S.relics[r[1]]?r[1]:'???'))));
    const gems=el('div',{class:'adv-grid'},...this.GEMS.map(g=>el('div',{class:'adv-cell'+(S.gems[g.id]?'':' none'),title:S.gems[g.id]?g.fact:''},el('span',null,S.gems[g.id]?'💎':'❔'),el('small',null,S.gems[g.id]?g.name:'???'))));
    overlay(el('div',{class:'modal adv-log'},el('h2',null,'📜 Treasure Log'),
      el('p',null,`Relics ${Object.keys(S.relics).length}/${this.RELICS.length} · Number Gems ${Object.keys(S.gems).length}/${this.GEMS.length} · Glitch Bugs beaten ${S.bugs}`),
      el('h3',null,'Relics (dig them up)'),rel,el('h3',null,'Number Gems (hidden around the island)'),gems,
      el('p',{class:'adv-tip'},'Tip: dig spots sparkle when you get close. New ones appear every day.'),
      el('div',{class:'btns'},el('button',{class:'btn',type:'button',onclick:()=>overlay(null)},'Close'))));},
  logBtn(){const m=document.querySelector('#scr-map');if(!m||m.querySelector('.adv-log-btn'))return;const b=el('button',{class:'adv-log-btn',type:'button'},'📜 Treasures');b.addEventListener('click',()=>this.log());m.append(b);}
};
// attach when the island is up; re-attach if it is rebuilt
setInterval(()=>{try{if(typeof Isle!=='undefined'&&Isle.w&&Isle.on()){Adv.attach(Isle.w);Adv.logBtn();}const b=document.querySelector('.adv-log-btn');if(b)b.hidden=!(typeof Isle!=='undefined'&&Isle.on()&&Isle.w);}catch(e){}},700);
window.__adv=Adv;
