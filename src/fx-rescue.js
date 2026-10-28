/* =========================================================
   Times Rescue: a 4-day mission (about 10 minutes a day, one day unlocks each calendar day) that rebuilds the
   times facts 3-digit long division needs. From his data on Oct 28: ×6–×9 never practiced; 3×7 3×8 4×6 4×8 4×9
   5×7 5×8 not owned; the Workshop's Divide step ("how many 3s fit into 25?") takes him about 24 seconds.
   Each day: a trick built on facts he owns (Double Power, Five and One More, Ten Take One, the 5-6-7-8 rhyme),
   "build it" chains on a dot picture, a Speed Forge round (Day 4: the Times Golem boss), and "Fits Into"
   questions, the exact question long division asks. Answers count in the Times Dojo (facts, belts, today's round).
   Rewards: coins on every answer, combos, a chest and 3 gems each day, and a dragon egg that cracks a little each
   day and hatches on Day 4 into Ember, a pet no one can buy. Script and Ellie's lines: tut/rescue.json.
   ========================================================= */
const Rescue={
  DAYS:4,
  st(){const s=state.rescue=state.rescue||{};s.days=s.days||{};s.log=s.log||[];return s;},
  done(n){return !!this.st().days[n];},
  allDone(){return [1,2,3,4].every(n=>this.done(n));},
  // one day a day, in order (his own calendar day)
  next(){const D=this.st().days;for(let n=1;n<=this.DAYS;n++){if(D[n])continue;if(n===1)return 1;const p=D[n-1];return p&&dayStr(new Date(p.at))<dayStr()?n:null;}return null;},
  pending(){return !!this.next();},
  async data(){if(!this.D){const r=await fetch('tut/rescue.json',{cache:'no-cache'});this.D=await r.json();}return this.D;},
  fact(key){try{return Dojo.facts('tm').find(x=>x.key===key)||null;}catch(e){return null;}},
  // ---- the screen (the Workshop's layout)
  async open(o){o=o||{};if(this.el)return;const n=o.snack?4:(o.day||this.next()||1);const D=await this.data();const day=D.days[n-1];if(!day)return;this.snackMode=!!o.snack;
    if(typeof Music!=='undefined')Music.stop();const S=this.st();this.n=n;this.day=day;this.t0=Date.now();this.fresh=!this.done(n);
    const root=el('div',{class:'vp tut rs'});this.el=root;
    const dots=el('div',{class:'rs-dots'},...['Spark','Trick','Build','Forge','Divide','Reward'].map(t=>el('span',null,t)));
    const head=el('div',{class:'tut-head'},el('b',null,o.snack?'🐉 Feed Ember':`🛡️ Times Rescue · Day ${n}: ${day.title}`),o.snack?el('span'):dots,el('span',{class:'chip rs-coins'},el('span',{class:'coin-ico'}),String(state.coins||0)),
      el('button',{class:'tut-exit',type:'button',onclick:()=>this.close()},'⏸ Finish later'));
    const board=el('div',{class:'tut-board rs-board'}),side=el('div',{class:'tut-right rs-side'});
    const face=el('div',{class:'tut-face'},'🐶'),sub=el('div',{class:'tut-sub ellie'}),again=el('button',{class:'tut-again',type:'button','aria-label':'Hear it again'},'🔁');
    const ask=el('div',{class:'tut-ask',hidden:true});
    root.append(head,el('div',{class:'tut-stage'},board,side),el('div',{class:'tut-foot'},face,sub,again),ask);document.body.append(root);
    Object.assign(this,{board,side,sub,ask,face,dots,coinsEl:head.querySelector('.rs-coins')});again.addEventListener('click',()=>{if(this.last&&!this.au)this.speak(this.last);});
    this.drawSide();
    try{if(typeof Cin3!=='undefined'&&await Cin3.load()&&window.Cine3D&&Cine3D.portrait){const c=Cine3D.portrait(Cin3.sprites().dog,{w:110,h:110,res:2,turn:0.5});c.className='tut-ellie';face.textContent='';face.append(c);}}catch(e){}
    if(this.el!==root)return;   /* he tapped Finish later while it loaded */
    // resume at the start of the part he was on today
    if(o.snack){this.alive=true;this.snackRun();return;}
    const c=S.cur&&S.cur.n===n&&S.cur.day===dayStr()&&S.cur.v===2?S.cur:null;this.seg=c?c.seg:0;this.alive=true;if(c)await this.speak(D.shared.welcome);this.run();},
  close(){this.alive=false;this.stopAudio();if(this.el){this.el.remove();this.el=null;}if(this.f&&Pad.active===this.f)Pad.active=null;
    try{if(typeof renderMap==='function'&&!$('#scr-map').hidden)renderMap();}catch(e){}},
  // ---- Ellie's voice (subtitles always)
  stopAudio(){if(this.au){try{this.au.pause();}catch(e){}this.au=null;}if(this.wt){clearTimeout(this.wt);this.wt=null;}if(this.sayDone){this.sayDone();this.sayDone=null;}},
  speak(line){return new Promise(res=>{if(!this.alive||!line)return res();this.last=line;this.sub.textContent=line.t;this.face.classList.add('talk');
    const fin=()=>{this.face.classList.remove('talk');this.au=null;this.sayDone=null;res();};this.sayDone=fin;
    if(window.__tutFast){this.wt=setTimeout(fin,20);return;}if(state.mute){this.wt=setTimeout(fin,900+line.t.length*45);return;}
    const a=new Audio('tut/a/'+line.a+'.mp3');this.au=a;a.onended=()=>setTimeout(fin,200);a.onerror=()=>{this.wt=setTimeout(fin,900+line.t.length*45);};
    a.play().catch(()=>{this.wt=setTimeout(fin,900+line.t.length*45);});});},
  async lines(L){for(const l of L||[]){if(!this.alive)return;await this.speak(l);}},
  // praise that doesn't wait (keeps the pace up in the Forge)
  quick(line){if(!line||window.__tutFast||state.mute)return;try{if(this.au)return;const a=new Audio('tut/a/'+line.a+'.mp3');a.play().catch(()=>{});}catch(e){}},
  pick(L){return L[Math.floor(Math.random()*L.length)];},
  // ---- rewards along the way
  pay(n){if(!this.fresh||!n)return;state.coins=(state.coins||0)+n;if(this.coinsEl)this.coinsEl.lastChild.textContent=String(state.coins);try{updateTop();}catch(e){}},
  float(txt,cls){const b=this.board.getBoundingClientRect(),x=el('div',{class:'rs-float '+(cls||'')},txt);x.style.left=(b.width/2-40+Math.random()*80)+'px';x.style.top=(b.height*0.35)+'px';this.board.append(x);setTimeout(()=>x.remove(),1100);},
  setSeg(i){this.seg=i;[...this.dots.children].forEach((d,k)=>{d.className=k<i?'ok':k===i?'on':'';});const S=this.st();S.cur={n:this.n,seg:i,day:dayStr(),v:2};saveState();},
  // the side panel: the trick card, the egg, and the combo meter
  drawSide(){const S=this.st(),stage=Object.keys(S.days).length;this.side.innerHTML='';if(this.snackMode){this.side.append(el('div',{class:'rs-trick'},el('b',null,'🔢 Times Grid'),Rescue.grid(true)),this.comboEl=el('div',{class:'rs-combo',hidden:true}));return;}
    this.side.append(el('div',{class:'rs-trick'},el('b',null,'🔑 Secret trick'),...this.day.trickCard.split('\n').map(t=>el('div',null,t))),
      el('div',{class:'rs-egg-box'},this.egg(stage),el('small',null,stage>=4?'Hatched!':`Dragon egg · ${stage} of 4 days`)),
      this.comboEl=el('div',{class:'rs-combo',hidden:true}));},
  egg(stage){const cracks=['','M30 30 l8 10 l-6 8','M30 30 l8 10 l-6 8 M62 46 l-10 6 l4 10','M30 30 l8 10 l-6 8 M62 46 l-10 6 l4 10 M40 70 l10 -8 l8 8 l10 -6'];
    const d=el('div',{class:'rs-egg'+(stage>=3?' wobble':'')});d.innerHTML=`<svg viewBox="0 0 90 110" width="90" height="110"><defs><radialGradient id="eg" cx="35%" cy="30%"><stop offset="0" stop-color="#fff7d6"/><stop offset="1" stop-color="#ffb627"/></radialGradient></defs>
      <ellipse cx="45" cy="58" rx="36" ry="48" fill="url(#eg)" stroke="#8a5a00" stroke-width="3"/><circle cx="30" cy="50" r="5" fill="#ff7b1c" opacity=".6"/><circle cx="58" cy="72" r="6" fill="#ff7b1c" opacity=".6"/><circle cx="52" cy="34" r="4" fill="#ff7b1c" opacity=".6"/>
      <path d="${cracks[Math.min(3,stage)]}" stroke="#4a2a00" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`;return d;},
  // ---- answers: keypad and Pencil (the Workshop's pad), knows its answer for the second reader
  askNum(want){return new Promise(res=>{const A=this.ask;A.innerHTML='';A.hidden=false;const f=Pad.make({max:3,allowDot:false,ph:'?'});f.want=want;this.f=f;
    const ink=el('div',{class:'tut-ink'}),keys=el('div',{class:'tut-keys'});
    '1234567890'.split('').concat(['⌫']).forEach(k=>{const b=el('button',{class:'tut-key',type:'button'},k);tapify(b,()=>{Pad.focus(f);Pad.key(k==='⌫'?'del':k);},{down:true});keys.append(b);});
    const go=el('button',{class:'tut-go',type:'button'},'✓');keys.append(go);A.append(el('div',{class:'tut-row'},f.el,ink),keys);
    try{this.ink=InkBox.make(ink,{big:true});}catch(e){}Pad.focus(f);let last=0;const t0=Date.now();
    const sub=()=>{if(typeof ReadCheck!=='undefined'&&ReadCheck.busy){ReadCheck.after(sub);return;}if(Date.now()-last<500)return;const v=Pad.val(f);if(v==null)return;last=Date.now();
      res({v,ms:Date.now()-t0,src:f.src||'key',clear:()=>{f.val='';Pad.render(f);if(this.ink&&this.ink.clear)this.ink.clear();Pad.focus(f);}});};
    tapify(go,sub);f.onEnter=sub;
    // in the Forge a right answer goes through as soon as it is written
    if(this.autoGo)f.onChange=()=>{if(String(f.val)===String(want))setTimeout(sub,f.src==='ink'?150:120);};});},
  chime(ok){try{if(ok){Snd.tone(784,0.07,'square',0.035);Snd.tone(1046,0.1,'square',0.035,0.07);}else Snd.tone(220,0.15,'triangle',0.04);}catch(e){}},
  // one question with the Workshop's rules: a miss gives a hint, a second miss shows the answer and he writes it
  async q(ans,hint,show,onMiss){let tries=0;for(;;){const r=await this.askNum(ans);if(!this.alive)return null;
      if(r.v===ans){this.ask.hidden=true;this.chime(true);return {tries,ms:r.ms,src:r.src};}
      tries++;this.chime(false);r.clear();this.ask.hidden=true;
      if(tries===1){const why=onMiss&&onMiss(r.v);if(why){this.why(why);await this.speak(this.D.shared.why);}else await this.speak(this.D.shared.miss);if(hint)await this.speak(hint);}
      else{this.sub.textContent='';this.sub.append(document.createTextNode((show||'Write')+' '),el('b',{class:'tut-show'},String(ans)));await this.speak(this.D.shared.show);
        this.sub.textContent='';this.sub.append(document.createTextNode('Write: '),el('b',{class:'tut-show'},String(ans)));}
      if(!this.alive)return null;}},
  // ---- the dot picture for "build it": a rows of b dots, with the trick's part lit up
  dots_(f,hl,stepIdx){const tenRule=/^×10|half of ×10/.test(f.trick),rows=tenRule?10:f.a,lit=new Set();const hasFive=f.steps.some(s=>s.hl==='five');
    const range=(a,b)=>{for(let r=a;r<b;r++)lit.add(r);};
    if(hl==='all')range(0,tenRule&&/half/.test(f.trick)?10:rows);else if(hl==='half')range(0,(tenRule?10:f.a)/2);else if(hl==='q1')range(0,f.a/4);else if(hl==='five')range(0,5);
    else if(hl==='two'){if(hasFive)range(5,7);else range(0,2);}else if(hl==='minus')range(0,9);
    const W=this.board.clientWidth||600,H=(this.board.clientHeight||400)-150,s=Math.max(10,Math.min(34,Math.floor(Math.min(W/(f.b+1),H/(rows+1)))));
    const g=el('div',{class:'rs-grid',style:`--s:${s}px`});
    for(let r=0;r<rows;r++){const row=el('div',{class:'rs-row'+(lit.has(r)?' lit':'')+(tenRule&&/^×10/.test(f.trick)&&r===9?(hl==='minus'?' gone':' ghost'):'')});for(let c=0;c<f.b;c++)row.append(el('i'));g.append(row);}
    return g;},
  // the picture that shows the whole fact: half of ten groups, or ten groups with one taken away
  endHl(f){return /half of ×10/.test(f.trick)?'half':/^×10/.test(f.trick)?'minus':'all';},
  // what a wrong answer actually is: a neighbor fact, or plus instead of times
  whyTimes(a,b,v){const C=[[a*(b-1),`${v} is ${a} × ${b-1}. Add one more ${a}!`],[a*(b+1),`${v} is ${a} × ${b+1}. Take away one ${a}!`],[(a-1)*b,`${v} is ${a-1} × ${b}. Add one more ${b}!`],
      [(a+1)*b,`${v} is ${a+1} × ${b}. Take away one ${b}!`],[a+b,`${v} is ${a} + ${b}. Times means ${a} groups of ${b}.`]];for(const [x,t] of C)if(x===v&&x>0)return t;return null;},
  why(t){let w=this.board.querySelector('.rs-why');if(!w){w=el('div',{class:'rs-why'});(this.board.querySelector('.rs-card,.rs-forge')||this.board).append(w);}w.textContent='💡 '+t;},
  card(title,big,pic){this.board.innerHTML='';this.board.append(el('div',{class:'rs-card'},title?el('div',{class:'rs-title'},title):null,el('div',{class:'rs-big'},big),pic||null));},
  // ---- the day's parts
  async run(){const D=this.D,day=this.day;
    if(this.seg<=0){this.setSeg(0);await this.spark();}
    if(!this.alive)return;if(this.seg<=1){this.setSeg(1);this.card('Secret trick',el('div',{class:'rs-trickbig'},...day.trickCard.split('\n').map(t=>el('div',null,t))));await this.lines(day.intro);}
    if(!this.alive)return;if(this.seg<=2){this.setSeg(2);await this.build();if(this.alive&&day.pick&&day.pick.length)await this.picker();}
    if(!this.alive)return;if(this.seg<=3){this.setSeg(3);await this.forge(this.n===4);}
    if(!this.alive)return;if(this.seg<=4){this.setSeg(4);await this.triangles();if(this.alive)await this.fits();}
    if(!this.alive)return;this.setSeg(5);await this.finish();},
  // Memory Spark: recall before learning. Today's anchor facts, then a few facts from earlier days (spaced retrieval)
  async spark(){const D=this.D,day=this.day;await this.speak(D.shared.spark);const prev=[];D.days.slice(0,this.n-1).forEach(d=>d.facts.forEach(f=>prev.push(f)));
    const Q=day.anchors.map(x=>({q:x.q,ans:x.ans})).concat(shuffle(prev.slice()).slice(0,4).map(f=>({q:`${f.a} × ${f.b}`,ans:f.ans,f})));let ok=0;
    this.autoGo=true;for(const x of Q){if(!this.alive)break;this.board.innerHTML='';this.board.append(el('div',{class:'rs-forge spark'},el('div',{class:'rs-foe'},'✨'),el('div',{class:'rs-big'},`${x.q} = ?`),el('div',{class:'rs-sub'},`Spark ${ok+1} of ${Q.length}`)));
      const r=await this.askOnce(x.ans);if(!this.alive)break;
      if(x.f){const df=this.fact(x.f.key);if(df){try{const Rr=Dojo.rec(df);Dojo.log(df,r.ok,r.ms,r.src,Rr.owned?'review':'learn');}catch(e){}}}
      if(r.ok){ok++;this.pay(1);this.float('✨ +1');}else{this.board.querySelector('.rs-big').textContent=`${x.q} = ${x.ans}`;this.board.querySelector('.rs-big').classList.add('win');
        if(x.f){const w=this.whyTimes(x.f.a,x.f.b,r.v);if(w)this.why(w);}await new Promise(z=>setTimeout(z,window.__tutFast?30:1800));}}
    this.autoGo=false;if(this.alive)await this.speak(D.shared.sparkDone);},
  // Trick Picker: choosing a strategy (any trick that works is right)
  tricksFor(a,b){const T=[];const has=n=>a===n||b===n;if(has(4)||has(8)||has(2))T.push('double');if(has(6))T.push('five');if(has(9))T.push('ten');if(has(5))T.push('half');return T;},
  async picker(){const D=this.D;await this.speak(D.shared.pick);const NAMES={double:'🔁 Double Power',five:'✋ Five and One More',ten:'🔟 Ten Take One'};
    for(const [a,b] of this.day.pick){if(!this.alive)return;const ok=this.tricksFor(a,b);let got=null;
      while(this.alive&&!got){const pickP=new Promise(res=>{this.card('Trick Picker',`${a} × ${b}`,el('div',{class:'rs-picks'},...Object.entries(NAMES).map(([k,n])=>{const bt=el('button',{class:'rs-pick',type:'button'},n);tapify(bt,()=>res(k));return bt;})));});
        const k=await pickP;if(ok.includes(k)){got=k;this.chime(true);this.pay(2);this.float('+2 🪙');await this.speak(D.shared.pickOk);}else{this.chime(false);await this.speak(D.shared.pickNo);}}
      if(!this.alive)return;this.card(`${a} × ${b} · ${NAMES[got]}`,`${a} × ${b} = ?`);const r=await this.q(a*b,null,'',v=>this.whyTimes(a,b,v));if(!r)return;this.pay(1);
      this.board.querySelector('.rs-big').textContent=`${a} × ${b} = ${a*b}`;this.board.querySelector('.rs-big').classList.add('win');await new Promise(z=>setTimeout(z,window.__tutFast?30:900));}},
  // fact families: one triangle, four facts; the hidden corner is asked as a division
  async triangles(){const D=this.D;await this.speak(D.shared.tri);
    for(const [a,b] of this.day.tri){if(!this.alive)return;const p=a*b,hideA=Math.random()<0.5,hid=hideA?a:b,shown=hideA?b:a;
      const tri=(q)=>{const d=el('div',{class:'rs-tri'});d.innerHTML=`<svg viewBox="0 0 260 220" width="260" height="220"><path d="M130 30 L30 190 L230 190 Z" fill="#ffffff10" stroke="#ffe066" stroke-width="5" stroke-linejoin="round"/>
        <circle cx="130" cy="40" r="34" fill="#ff7b1c"/><text x="130" y="52" text-anchor="middle" font-size="34" font-weight="900" fill="#fff" font-family="NK Digits,Lexend,sans-serif">${p}</text>
        <circle cx="45" cy="178" r="32" fill="#3fa7ff"/><text x="45" y="190" text-anchor="middle" font-size="32" font-weight="900" fill="#fff" font-family="NK Digits,Lexend,sans-serif">${shown}</text>
        <circle cx="215" cy="178" r="32" fill="${q?'#ffffff33':'#3fdc6b'}"/><text x="215" y="190" text-anchor="middle" font-size="32" font-weight="900" fill="#fff" font-family="NK Digits,Lexend,sans-serif">${q?'?':hid}</text>
        <text x="130" y="140" text-anchor="middle" font-size="30" font-weight="900" fill="#ffe066">× ÷</text></svg>`;return d;};
      this.card('Fact family',`${p} ÷ ${shown} = ?`,tri(true));const r=await this.q(hid,null,'',v=>v*shown>p?`${v} × ${shown} = ${v*shown}. That's more than ${p}!`:v*shown<p?`${v} × ${shown} = ${v*shown}. That's less than ${p}.`:null);if(!r)return;
      const df=this.fact(`${p}/${shown}`);if(df){try{const Rr=Dojo.rec(df);Dojo.log(df,r.tries===0,r.ms,r.src,Rr.owned?'review':'learn');}catch(e){}}
      this.pay(2);this.card('One family, four facts',`${shown} × ${hid} = ${p}`,el('div',{class:'rs-fam'},tri(false),el('div',null,...[`${hid} × ${shown} = ${p}`,`${p} ÷ ${shown} = ${hid}`,`${p} ÷ ${hid} = ${shown}`].map(t=>el('div',null,t)))));
      this.board.querySelector('.rs-big').classList.add('win');await new Promise(z=>setTimeout(z,window.__tutFast?30:1600));}
    if(this.alive)await this.speak(D.shared.triDone);},
  async build(){const D=this.D;await this.speak(D.shared.build);
    for(const f of this.day.facts){if(!this.alive)return;
      for(let k=0;k<f.steps.length;k++){const s=f.steps[k];this.card(`${f.a} × ${f.b}  ·  ${f.trick}`,s.q,this.dots_(f,s.hl,k));
        await this.speak(s.say);if(!this.alive)return;const r=await this.q(s.ans,null,s.q.replace('?',''));if(!r)return;this.pay(1);this.float('+1 🪙');}
      this.card(`${f.a} × ${f.b}`,`${f.a} × ${f.b} = ${f.ans}`,this.dots_(f,this.endHl(f)));this.board.querySelector('.rs-big').classList.add('win');
      await this.speak(f.done);
      const df=this.fact(f.key);if(df){try{const R=Dojo.rec(df);Dojo.log(df,true,0,'key','teach');R.taught=dayStr();R.teach=false;saveState();}catch(e){}}}},
  // Speed Forge: today's facts both ways, plus a few from earlier days; a miss comes back three questions later
  forgeList(boss){const all=[],prev=[];this.D.days.forEach((d,i)=>d.facts.forEach(f=>{(i+1<this.n?prev:i+1===this.n?all:[]).push(f);}));
    let L=[];if(boss){const pool=prev.concat(all);while(L.length<20)L=L.concat(shuffle(pool.slice()));L=L.slice(0,20);}
    else{all.forEach(f=>{L.push(f);L.push(f);});L=L.concat(shuffle(prev.slice()).slice(0,4));L=shuffle(L);}
    return L.map((f,i)=>{const flip=i%2===1&&f.a!==f.b;return {f,a:flip?f.b:f.a,b:flip?f.a:f.b};});},
  async forge(boss){const D=this.D;await this.speak(boss?D.shared.boss:D.shared.forge);const Q=this.forgeList(boss);let done=0,combo=0,best=0,hp=Q.length;const total=Q.length,seen=new Set();
    this.autoGo=true;
    while(Q.length&&this.alive){const x=Q.shift(),f=x.f;
      this.board.innerHTML='';const bar=el('div',{class:'rs-forge'+(boss?' boss':'')},
        el('div',{class:'rs-foe'},boss?'🗿':'⚔️'),el('div',{class:'rs-hp'},el('i',{style:`width:${boss?100*hp/total:100*done/total}%`})),
        el('div',{class:'rs-big'},`${x.a} × ${x.b} = ?`),el('div',{class:'rs-sub'},`${done} of ${total}`+(combo>=2?`  ·  🔥 ${combo} in a row`:'')));
      this.board.append(bar);
      const r=await this.askOnce(f.ans);if(!this.alive)break;
      const df=this.fact(f.key),first=!seen.has(f.key);seen.add(f.key);
      if(r.ok){done++;hp--;combo++;best=Math.max(best,combo);const fast=r.ms<(r.src==='ink'?3600:3000);
        if(df&&first){try{const R=Dojo.rec(df);Dojo.log(df,true,r.ms,r.src,R.owned?'review':'learn');}catch(e){}}
        this.pay(fast?3:2);this.float(fast?'⚡ +3 🪙':'+2 🪙',fast?'fast':'');const foe=bar.querySelector('.rs-foe');foe.classList.remove('hit');void foe.offsetWidth;foe.classList.add('hit');
        if(combo%5===0){this.pay(5);if(typeof Brave!=='undefined')Brave.pop(`🔥 ${combo} COMBO!`,5,0,null);this.quick(this.pick(D.shared.combo));}else if(Math.random()<0.35)this.quick(this.pick(D.shared.yes));}
      else{combo=0;if(df&&first){try{Dojo.log(df,false,r.ms,r.src,'learn');}catch(e){}}
        this.card(`${f.a} × ${f.b}  ·  ${f.trick}`,`${x.a} × ${x.b} = ${f.ans}`,this.dots_(f,this.endHl(f)));const w=this.whyTimes(x.a,x.b,r.v);if(w)this.why(w);await this.speak(f.done);Q.splice(Math.min(3,Q.length),0,x);}
      this.updCombo(combo);}
    this.autoGo=false;if(!this.alive)return;this.updCombo(0);
    // personal records: his best combo for this day's Forge (a race against himself, not a clock)
    const B=this.st().best=this.st().best||{},bk='d'+this.n,rec=best>(B[bk]||0)&&B[bk]!=null;B[bk]=Math.max(B[bk]||0,best);saveState();
    this.board.innerHTML='';this.board.append(el('div',{class:'rs-card'},el('div',{class:'rs-big win'},boss?'🗿💥 Times Golem defeated!':'⚔️✨ Sword forged!'),el('div',{class:'rs-sub'},`Best combo: ${best}`+(rec?' · 🏆 NEW RECORD!':''))));if(rec)this.quick(D.shared.record);
    this.pay(boss?20:10);if(typeof Brave!=='undefined')Brave.pop(boss?'GOLEM DOWN!':'SWORD FORGED!',boss?20:10,0,boss?'legend':null);await this.speak(boss?D.shared.golemDown:D.shared.forgeDone);},
  // one try in the Forge (it keeps moving; misses come back later)
  async askOnce(ans){const r=await this.askNum(ans);if(!this.alive)return {ok:false};this.ask.hidden=true;const ok=r.v===ans;this.chime(ok);if(!ok)r.clear();return {ok,ms:r.ms,src:r.src,v:r.v};},
  updCombo(c){if(!this.comboEl)return;this.comboEl.hidden=c<2;this.comboEl.textContent=`🔥 ${c} in a row`;},
  async fits(){const D=this.D;await this.speak(D.shared.fits);
    for(const x of this.day.fits){if(!this.alive)return;const mult=[];for(let k=1;k*x.d<=x.n+x.d&&k<=10;k++)mult.push(k*x.d);
      const row=el('div',{class:'rs-mults'},...mult.map(v=>el('span',{class:v>x.n?'over':''},String(v))));row.hidden=true;
      this.card(`Division power-up · ${x.n} ÷ ${x.d}`,`How many ${x.d}s fit into ${x.n}?`,row);
      await this.speak(x.say);
      const r=await this.q(x.q,x.hint,'',v=>{row.hidden=false;return v*x.d>x.n?`${v} × ${x.d} = ${v*x.d}. Too big, that's more than ${x.n}!`:(v+1)*x.d<=x.n?`${v} × ${x.d} = ${v*x.d}. Another ${x.d} still fits!`:null;});   /* a miss shows the count-up row */if(!r)return;row.hidden=false;row.children[x.q-1]&&row.children[x.q-1].classList.add('stop');
      this.board.querySelector('.rs-big').textContent=`${x.d} × ${x.q} = ${x.q*x.d}`+(x.r?`, ${x.r} left over`:'');this.board.querySelector('.rs-big').classList.add('win');
      this.pay(2);this.float('+2 🪙');
      // and the remainder, the way long division asks it
      if(x.r){this.board.querySelector('.rs-big').textContent=`${x.d} × ${x.q} = ${x.q*x.d}. How many left over?`;await this.speak(D.shared.left);const r2=await this.q(x.r,null,'',v=>`${x.n} − ${x.q*x.d} = ?  Count up from ${x.q*x.d} to ${x.n}.`);if(!r2)return;this.pay(1);
        this.board.querySelector('.rs-big').textContent=`${x.n} ÷ ${x.d} = ${x.q} R ${x.r}`;}
      await this.speak(x.done);
      this.st().log.push({t:new Date().toISOString(),n:this.n,fits:`${x.n}/${x.d}`,tries:r.tries,ms:r.ms});}},
  async finish(){const D=this.D,S=this.st(),n=this.n,first=this.fresh;
    if(first){S.days[n]={at:new Date().toISOString(),secs:Math.round((Date.now()-this.t0)/1000)};S.cur=null;
      // it counts as today's Times Dojo round
      try{const T=Dojo.st().today;T.tm.rounds=(T.tm.rounds||0)+1;T.tm.secs=(T.tm.secs||0)+Math.min(900,Math.round((Date.now()-this.t0)/1000));}catch(e){}
      this.pay(n===4?80:40);if(typeof Brave!=='undefined')Brave.add(3,'rescue-day'+n);saveState();}
    this.drawSide();this.board.innerHTML='';this.board.append(el('div',{class:'rs-card'},el('div',{class:'rs-big win'},`🛡️ Day ${n} complete!`),
      el('div',{class:'rs-sub'},first?`+${n===4?80:40} coins · +3 💎 · a loot chest`:'Great review!')));
    await this.lines(D.days[n-1].outro);if(!this.alive)return;
    this.board.innerHTML='';this.board.append(el('div',{class:'rs-card'},el('div',{class:'rs-title'},'Your Times Grid'),Rescue.grid()));await this.speak(D.shared.grid);await new Promise(z=>setTimeout(z,window.__tutFast?30:2500));if(!this.alive)return;
    if(first){document.body.classList.add('tut-chest');try{await openChest(n===4?'boss':'great');}catch(e){}document.body.classList.remove('tut-chest');}
    if(first&&n===4)await this.hatch();
    this.ask.hidden=false;this.ask.innerHTML='';
    const nextTxt=n<4?`Day ${n+1} opens tomorrow.`:'Times Rescue complete!';
    this.ask.append(el('div',{class:'tut-win'},nextTxt+(typeof Tut!=='undefined'&&Tut.nextEp()?' Next: the Long Division Workshop!':'')),el('button',{class:'tut-go wide',type:'button',onclick:()=>this.close()},'Done'));},
  // ---- Day 4: the egg hatches into Ember
  async hatch(){const S=this.st();S.hatched=new Date().toISOString();S.snackDay=dayStr();   /* first snack tomorrow: spacing */Rescue.addEmber();if(!state.owned.includes('pet:ember'))state.owned.push('pet:ember');saveState();
    this.board.innerHTML='';const box=el('div',{class:'rs-card rs-hatch'});this.board.append(box);const egg=this.egg(3);egg.classList.add('shake');box.append(egg);try{Snd.rattle&&Snd.rattle();}catch(e){}
    await new Promise(r=>setTimeout(r,window.__tutFast?50:1600));box.innerHTML='';let pic=null;
    try{if(typeof Cin3!=='undefined'&&await Cin3.load()&&Cine3D.shot)pic=Cine3D.shot({pet:'ember'},{w:220,h:220,res:2,turn:0.6});}catch(e){}
    if(!pic){pic=el('canvas',{width:220,height:220});const c=pic.getContext('2d');c.imageSmoothingEnabled=false;drawPet(c,'ember',30,60,18,0);}
    pic.classList.add('rs-ember');box.append(pic,el('div',{class:'rs-big win'},'🐉 Ember the Times Dragon!'),
      el('button',{class:'tut-go wide',type:'button',onclick:e=>{state.hero.pet='ember';saveState();e.target.textContent='Ember is with you! ✓';try{Snd.fanfare();}catch(_){}}},'Make Ember my pet'));
    try{Snd.reveal('legendary');Snd.fanfare();}catch(e){}if(typeof Brave!=='undefined')Brave.pop('🐉 EMBER HATCHED!',0,0,'legend');
    await this.speak(this.D.shared.hatch);await new Promise(r=>setTimeout(r,window.__tutFast?50:2500));},
  addEmber(){try{if(!PETS.ember)PETS.ember={fly:true,pal:{p:'#c2410c',P:'#ff7b1c',Y:'#ffe066',D:'#1d1f33'},rows:PETS.dragon.rows};
    if(!CATALOG.pet.some(p=>p.id==='ember'))CATALOG.pet.push({id:'ember',name:'Ember the Times Dragon',price:0});}catch(e){}},
  // ---- the map button: the mission while it runs; after Ember hatches, Ember's daily snack and the Times Grid
  btn(){const m=document.querySelector('#scr-map');if(!m)return;let b=m.querySelector('.rs-btn');const nx=this.next(),S=this.st(),stage=Object.keys(S.days).length;
    if(!b){b=el('button',{class:'rs-btn',type:'button'});b.addEventListener('click',()=>{if(this.next())this.open({day:this.next()});else if(this.snackDue())this.open({snack:true});else this.menu();});m.append(b);}
    b.textContent=nx?`🥚 Times Rescue · Day ${nx}`:S.hatched?(this.snackDue()?'🐉 Feed Ember':'🐉 Ember is full ✓'):`🥚 Times Rescue ✓ today · ${stage}/4`;b.classList.toggle('due',!!nx||this.snackDue());},
  menu(){overlay(el('div',{class:'modal rs-menu'},el('h2',null,'🛡️ Times Rescue'),this.grid(),el('p',null,this.allDone()?'Replay any day for practice:':'Today’s mission is done. The next day opens tomorrow. Replay a day for practice:'),
    el('div',{class:'btns',style:'flex-direction:column'},...[1,2,3,4].map(n=>el('button',{class:'btn'+(this.done(n)?'':' btn-dark'),type:'button',disabled:!this.done(n),onclick:()=>{overlay(null);this.open({day:n});}},`Day ${n}${this.done(n)?'':' 🔒'}`)),
      el('button',{class:'btn btn-dark',type:'button',onclick:()=>overlay(null)},'Close'))));}
};
Object.assign(Rescue,{
  // ---- the Times Grid: every fact 1-10 x 1-10; gold = owned, glowing = automatic, blue = learning, dim = not yet
  grid(small){const F=(()=>{try{return Dojo.st().facts;}catch(e){return {};}})();let own=0,tot=0;const g=el('div',{class:'rs-tg'+(small?' small':'')});
    g.append(el('i',{class:'h'},'×'));for(let c=1;c<=10;c++)g.append(el('i',{class:'h'},String(c)));
    for(let r=1;r<=10;r++){g.append(el('i',{class:'h'},String(r)));for(let c=1;c<=10;c++){const k=`${Math.min(r,c)}x${Math.max(r,c)}`,R=F[k];let cls='new';
        if(r===1||c===1||(R&&R.owned))cls=(r===1||c===1||(R&&Dojo.speed(R)==='auto'))?'own fast':'own';else if(R&&R.n)cls='learn';if(r<=c){tot++;if(cls.startsWith('own'))own++;}
        g.append(el('i',{class:cls,title:`${r} × ${c} = ${r*c}`},small?'':String(r*c)));}}
    return el('div',{class:'rs-tgbox'},g,el('div',{class:'rs-tgk'},`${own} of ${tot} facts owned`,small?null:el('span',null,'  ·  gold = owned  ·  blue = learning')));},
  // ---- Ember's snack: a 3-minute daily review after the hatch, spaced like flash-card boxes (1, 2, 4, 7 days)
  snackDue(){const S=this.st();return !!S.hatched&&S.snackDay!==dayStr();},
  snackPick(){const S=this.st(),B=S.box=S.box||{},today=dayStr(),keys=new Map();
    (this.D?this.D.days:[]).forEach(d=>d.facts.forEach(f=>keys.set(f.key,{a:f.a,b:f.b,key:f.key,ans:f.ans,trick:f.trick})));
    try{const F=Dojo.st().facts;for(const k in F){const m=/^(\d+)x(\d+)$/.exec(k);if(!m||+m[2]>10)continue;const sp=Dojo.speed(F[k]);if((sp==='slow'||sp==='shaky')&&!keys.has(k))keys.set(k,{a:+m[2],b:+m[1],key:k,ans:m[1]*m[2]});}}catch(e){}
    const all=[...keys.values()].map(x=>Object.assign(x,{bx:(B[x.key]||{b:1}).b,due:(B[x.key]||{}).due||today}));
    const due=all.filter(x=>x.due<=today).sort((p,q)=>p.bx-q.bx);let pick=due.slice(0,8);if(pick.length<8)pick=pick.concat(all.filter(x=>!pick.includes(x)).sort((p,q)=>p.bx-q.bx).slice(0,8-pick.length));
    return shuffle(pick);},
  async snackRun(){const D=this.D,S=this.st();S.snackAuto=dayStr();const sn=S.snack=S.snack||{xp:0,lvl:1};await this.speak(this.pick(D.shared.snack));if(!this.alive)return;
    const Q=this.snackPick(),B=S.box=S.box||{},again=[];let got=0;const add=(d,n)=>{const t=new Date(dayStr());t.setDate(t.getDate()+n);return dayStr(t);};
    const pic=()=>{let c=null;try{if(window.Cine3D&&Cine3D.shot)c=Cine3D.shot({pet:'ember'},{w:150,h:150,res:2,turn:0.6});}catch(e){}if(!c){c=el('canvas',{width:150,height:150});const x=c.getContext('2d');x.imageSmoothingEnabled=false;drawPet(x,'ember',20,40,12,0);}
      c.className='rs-emb';c.style.transform=`scale(${Math.min(1.6,0.85+sn.lvl*0.08)})`;return c;};
    this.autoGo=true;const ask1=async(x,second)=>{const flip=Math.random()<0.5,a=flip?x.b:x.a,b=flip?x.a:x.b;this.board.innerHTML='';
      const box=el('div',{class:'rs-forge snack'},pic(),el('div',{class:'rs-lvl'},`Ember · level ${sn.lvl}`,el('div',{class:'rs-hp'},el('i',{style:`width:${(sn.xp%50)*2}%`}))),el('div',{class:'rs-big'},`${a} × ${b} = ?`));this.board.append(box);
      const r=await this.askOnce(x.ans);if(!this.alive)return;const df=this.fact(x.key);
      if(!second&&df){try{const Rr=Dojo.rec(df);Dojo.log(df,r.ok,r.ms,r.src,Rr.owned?'review':'learn');}catch(e){}}
      if(r.ok){got++;if(!second){const nb=Math.min(4,(B[x.key]||{b:1}).b+1);B[x.key]={b:nb,due:add(0,[1,2,4,7][nb-1])};}
        sn.xp+=10;this.pay(1);this.float('🍓 Yum!');const e=box.querySelector('.rs-emb');if(e){e.classList.remove('chomp');void e.offsetWidth;e.classList.add('chomp');}this.quick(this.pick(D.shared.yum));
        if(sn.xp%50===0){sn.lvl++;this.pay(5);if(typeof Brave!=='undefined')Brave.pop(`🐉 EMBER LEVEL ${sn.lvl}!`,5,0,'legend');await this.speak(D.shared.grow);}}
      else{B[x.key]={b:1,due:add(0,1)};this.board.querySelector('.rs-big').textContent=`${a} × ${b} = ${x.ans}`;const w=this.whyTimes(a,b,r.v);if(w)this.why(w);if(!second)again.push(x);await new Promise(z=>setTimeout(z,window.__tutFast?30:2200));}
      saveState();};
    for(const x of Q){if(!this.alive)break;await ask1(x,false);}for(const x of again){if(!this.alive)break;await ask1(x,true);}
    this.autoGo=false;if(!this.alive)return;S.snackDay=dayStr();try{const T=Dojo.st().today;T.tm.rounds=(T.tm.rounds||0)+1;}catch(e){}saveState();
    this.board.innerHTML='';this.board.append(el('div',{class:'rs-card'},pic(),el('div',{class:'rs-big win'},`Ember ate ${got} berries!`),this.grid()));await this.speak(D.shared.full);
    this.ask.hidden=false;this.ask.innerHTML='';this.ask.append(el('button',{class:'tut-go wide',type:'button',onclick:()=>this.close()},'Done'));}
});
setTimeout(()=>{try{if(Rescue.st().hatched)Rescue.addEmber();}catch(e){}},0);
// first thing on the map each day, before the Workshop and the Times Dojo nudge (it is today's Times round)
setInterval(()=>{try{Rescue.btn();const S=Rescue.st(),nx=Rescue.next(),snack=!nx&&Rescue.snackDue();if((!nx&&!snack)||S.autoDay===dayStr()||Rescue.el||window.__rsNoAuto)return;const m=$('#scr-map');
  if(!m||m.hidden||!$('#overlay').hidden||!$('#talk').hidden||!$('#cine').hidden||document.querySelector('.vp,#cine3d,.adv-panel'))return;
  S.autoDay=dayStr();saveState();Rescue.open(snack?{snack:true}:{day:nx});}catch(e){}},2000);
{const _tf=Dojo.timesFirst.bind(Dojo);Dojo.timesFirst=function(){if(Rescue.pending()&&!window.__rsNoAuto)return false;return _tf.apply(this,arguments);};}
window.__rescue=Rescue;
