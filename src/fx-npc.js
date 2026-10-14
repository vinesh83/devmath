/* =========================================================
   Allies: RPG advisors who pop up with tips
   ========================================================= */
const pad16=rows=>rows.map(r=>(r+'................').slice(0,16));
const NPCS={
  knight:{name:'Sir Checkalot',title:'Captain of the Shield Guard',col:'#5ef2ff',voice:[196,'square'],
    pal:{R:'#ff4d6d',L:'#d7deeb',l:'#8a94ad',D:'#1d1f33',C:'#5ef2ff',B:'#3d7cff',G:'#ffc933'},blink:['C','#1d1f33'],
    rows:pad16(["......RRR",".....RRRR","....LLLLLLLL","...LLLLLLLLLL","...LLLLLLLLLL","...DDDDDDDDDD","...DCCDDDDCCD","...DDDDDDDDDD",
      "...LLLLLLLLLL","...LlLlLlLlLL","....LLLLLLLL","..BBBBBBBBBBBB",".BBBBBBBBBBGBBB",".BBBBBBBBBGBBBB",".BBBGBBBBGBBBBB",".BBBBGBBGBBBBBB",".BBBBBGGBBBBBBB"])},
  byte:{name:'Byte',title:'Hype Drone',col:'#ffe066',voice:[880,'square'],
    pal:{L:'#d7deeb',l:'#8a94ad',D:'#1d1f33',C:'#5ef2ff',R:'#ff4d6d'},blink:['C','#1d1f33'],
    rows:pad16(["","......RR","......l","....LLLLLLLL","...LLLLLLLLLL","..LLDDDDDDDDLL","..LDDCCDDCCDDL","..LDDCCDDCCDDL","..LDDDDDDDDDDL",
      "..LDDDCCCCDDDL","..LLDDDDDDDDLL","...LLLLLLLLLL","ll..llllllll..ll","lll..........lll"])},
  rocky:{name:'Rocky',title:'Canyon Miner',col:'#e8643a',voice:[150,'triangle'],home:'canyon',
    pal:{Y:'#ffc933',W:'#fff7c2',k:'#3a2430',S:'#e8b48a',D:'#1d1f33',N:'#c68642',O:'#e8643a',M:'#5a2416',B:'#3d7cff'},blink:['D','#e8b48a'],
    rows:pad16(["....YYYYYYYY","...YYYYWWYYYY","..YYYYYWWYYYYY","..kkkkkkkkkkkk","...SSSSSSSSSS","...SDDSSSSDDS","...SSSSNNSSSS","..OOSSSNNSSSOO",
      "..OOOOOOOOOOOO","..OOOOMMMMOOOO","...OOOOOOOOOO","...OOOOOOOOOO","....OOOOOOOO","..BBBOOOOOOBBB",".BBBBBOOOOBBBBB",".BBBBBBBBBBBBBB"])},
  marina:{name:'Captain Marina',title:'Decimal Docks Navigator',col:'#3fa7ff',voice:[330,'square'],home:'docks',
    pal:{N:'#1d2b5a',G:'#ffc933',W:'#ffffff',H:'#2b1d14',S:'#c68642',D:'#1d1f33',R:'#c7283a',B:'#3fa7ff'},blink:['D','#c68642'],
    rows:pad16(["","..NNNNNNNNNNNN",".NNNNNGGNNNNNNN","NNNNNGWWGNNNNNNN","..NNNNNNNNNNNN","..HHSSSSSSSSHH",".HHSSDSSSSDSSHH",".HHSSSSSSSSSSHH",
      ".HHSSSSRRSSSSHH",".HHHSSSSSSSSHHH",".HHH.SSSSSS.HHH","..BBBBWWWWBBBB",".BBBBBGWWGBBBBB",".BBBBBBWWBBBBBB",".BBGBBBWWBBBGBB",".BBBBBBBBBBBBBB"])},
  ferra:{name:'Ferra',title:'Fact Forge Blacksmith',col:'#ff9f1c',voice:[262,'square'],home:'forge',
    pal:{R:'#e63946',Y:'#ffe066',H:'#ff7b1c',S:'#f6d2b5',G:'#6b3e26',C:'#5ef2ff',D:'#5a2416',A:'#8a5a2b',W:'#fff3e0',F:'#ffc933'},blink:['C','#6b3e26'],
    rows:pad16(["","...RRRRRRRRRR","..RRRRRRRRRRRR","..RRYRRRRRRRRR",".HHSSSSSSSSSSHH",".HHGGGGSSGGGGHH",".HHGCCGSSGCCGHH",".HHGGGGSSGGGGHH",
      ".HHSSSSSSSSSSHH",".HHSSSSDDSSSSHH","..HHSSSSSSSSHH","..HH.SSSSSS.HH","..AAAAAAAAAAAA",".WAAAAAAAAAAAAW",".WAAAAAFFAAAAAW",".WAAAAAAAAAAAAW"])},
  bo:{name:'Builder Bo',title:'Area Castle Architect',col:'#9b6bff',voice:[523,'square'],home:'castle',
    pal:{Y:'#ffc933',k:'#8a5a00',P:'#9b6bff',D:'#1d1f33',C:'#5ef2ff',V:'#6c3fd8',G:'#ffe066'},blink:['C','#1d1f33'],
    rows:pad16(["......YYYY","....YYYYYYYY","...YYYYYYYYYY","..kkkkkkkkkkkk","..PPPPPPPPPPPP","..PDDDDDDDDDDP","..PDCCDDDDCCDP","..PDCCDDDDCCDP",
      "..PDDDDDDDDDDP","..PDDCCCCCCDDP","..PDDDDDDDDDDP","..PPPPPPPPPPPP",".....PPPPPP","..VVVVVVVVVVVV",".VVVGVVVVVVGVVV",".VVVVVVVVVVVVVV"])},
  hoot:{name:'Professor Hoot',title:'Word Tower Sage',col:'#3fbf5f',voice:[392,'triangle'],home:'tower',
    pal:{D:'#1d1f33',Y:'#ffc933',O:'#8a5a2b',W:'#ffffff',K:'#1d1f33',T:'#e8c99a',B:'#ffe066'},blink:['K','#ffffff'],
    rows:pad16(["....DDDDDDDD","..DDDDDDDDDDDD","......DDBB","..O.......B..O","..OO........OO","..OOOOOOOOOOOO",".OOWWWWOOWWWWOO",".OWWKKWWWWKKWWO",
      ".OWWKKWWWWKKWWO",".OOWWWWOOWWWWOO",".OOOOOOYYOOOOOO",".OOTTTOYYOTTTOO","..OTTTTTTTTTTO","..OOTTTTTTTTOO","...OOTTTTTTOO","....OOOOOOOO"])},
  pip:{name:'Pip',title:'Traveling Merchant',col:'#ff6fb5',voice:[622,'square'],
    pal:{M:'#7b5cff',G:'#6ee06e',g:'#2f8f3a',W:'#ffffff',K:'#1d1f33',Y:'#ffc933',O:'#fff3b0'},blink:['K','#6ee06e'],
    rows:pad16(["",".....MMMMMM","....MMMMMMMM","...MMMMMMMMMM","G..MGGGGGGGGM..G","GG.GGGGGGGGGG.GG",".GGGWKGGGGWKGGG",".GGGGGGGGGGGGGG",
      "..GGGGGggGGGGG","..GGGWWWWWWGGG","...GGGGGGGGGG","....GGGGGGGG","..MMMMMMMMMMMM",".MMMMMYYYYMMMMM",".MMMMYYOYYYMMMM",".MMMMMYYYYMMMMM"])},
  echo:{name:'Echo',title:'The Hooded Stranger',col:'#a855f7',voice:[110,'sawtooth'],
    pal:{K:'#3b2463',D:'#0b0d1f',C:'#5ef2ff'},blink:['C','#0b0d1f'],
    rows:pad16(["","......KKKK","....KKKKKKKK","...KKKKKKKKKK","..KKKKDDDDKKKK","..KKKDDDDDDKKK","..KKDDCDDCDDKK","..KKDDDDDDDDKK",
      "..KKKDDDDDDKKK","..KKKKDDDDKKKK","..KKKKKKKKKKKK",".KKKKKKKKKKKKKK",".KKKKKKCKKKKKKK","KKKKKKCCCKKKKKKK","KKKKKKKCKKKKKKKK","KKKKKKKKKKKKKKKK"])},
};
const ALLY_ORDER=['knight','byte','rocky','marina','ferra','bo','hoot','pip','echo'];
const KHOME={canyon:'rocky',docks:'marina',forge:'ferra',castle:'bo',tower:'hoot',camp:'knight'};
const SKILL_NPC={add:'rocky',sub:'rocky',dec_add:'marina',dec_sub:'marina',fact:'ferra',area:'bo',word:'hoot',table:'hoot'};

const INTROS={
  knight:[['knight','Halt! Who goes th... oh! You must be {name}, the new hero!'],['knight','I am Sir Checkalot, Captain of the Shield Guard.'],
    ['knight','A rogue robot named Glitch is spreading mistakes across the kingdoms.'],
    ['knight','My secret weapon? I CHECK MY WORK. Tap Check It before you submit and your shield powers up.'],
    ['knight','Wrong after you checked? The shield blocks the hit. You lose no power at all!'],
    ['byte','BEEP! And I am Byte! I cheer. Loudly. BEEP BOOP!'],['knight','Start with Today’s Quest or pick a kingdom. More allies will find you on the road.']],
  rocky:[['rocky','Rock on! Name’s Rocky. I’ve mined this canyon for 300 years.'],['rocky','Glitch keeps messing up our borrowing and carrying. The whole canyon is crumbling!'],
    ['rocky','Big numbers are just little columns. One column at a time, right to left. Let’s dig in!']],
  marina:[['marina','Ahoy, {name}! Captain Marina of the Decimal Docks.'],['marina','Glitch knocked every decimal point overboard! Ships sail to 45 miles instead of 4.5!'],
    ['marina','Remember my rule: line up the points like masts on a ship.']],
  ferra:[['ferra','Hot tip incoming! I’m Ferra, the Fact Forge blacksmith.'],['ferra','Times tables are tools. The faster you grab them, the harder you hit.'],
    ['ferra','Miss one? I’ll show you a trick. Then we hammer it again until it sticks.']],
  bo:[['bo','BLEEP. Builder Bo, online. I built Area Castle out of boxes.'],['bo','Big multiplication looks scary. So we split it into small boxes!'],
    ['bo','Fill every box. Then add up the boxes. Building complete!']],
  hoot:[['hoot','Hoo-hoo! Welcome to Word Tower, {name}. I am Professor Hoot.'],['hoot','Word problems are riddles. Most of them hide TWO steps inside.'],
    ['hoot','Read it twice. Find the question. Plan your steps. Then ask: does my answer make sense?']],
  pip:[['pip','Psst! Hey, kid! Nice loot.'],['pip','I’m Pip. I sell shiny stuff. Hats, capes, pets. The GOOD stuff.'],
    ['pip','Coins come fastest from checking your work. Checkers get double! Come see me in the Shop.']],
  echo:[['echo','...So. You beat Glitch’s mech.'],['echo','Don’t be scared. They call me Echo. I knew Glitch before it went bad.'],
    ['echo','Glitch was a helper bot once. Just like Byte.'],['byte','...BEEP?'],
    ['echo','But Glitch stopped checking its work. One small mistake became ten. Then a thousand.'],
    ['echo','Free all five kingdoms, {name}. Then maybe Glitch can be fixed. Not destroyed. Fixed.']],
};
const LORE=['','Another kingdom is free. Glitch’s memory chips are flickering. I heard it whisper one word: “check.”',
  'Glitch’s first mistake was tiny. It forgot to borrow. Nobody caught it. Not even Glitch.',
  'Glitch is getting scared, {name}. It knows checkers are winning.',
  'All five kingdoms are free. The fortress gates are creaking open. Glitch is waiting. Soon.'];
const BRIEF={
  rocky:'{glitch} is stomping through the canyon in a giant mech! Build your mech. Then check every answer. A checked answer can’t hurt you.',
  marina:'{glitch} has a battle mech in my harbor! Line up those decimal points and blast it back to sea!',
  ferra:'{glitch} built a mech in MY forge! Fast facts land quick hits. Show it what you’ve got!',
  bo:'Warning! {glitch} is attacking the castle in a mech. Fill every box, check with an estimate, and knock it down!',
  hoot:'{glitch} has climbed the tower in a mech. Read every problem twice. Plan, solve, check. Hoo!'};
const TAG_TIPS={
  noRegroup:['rocky','Top digit smaller than the bottom one? You can’t take away yet. Borrow 1 from next door. It becomes 10!'],
  forgotDecrement:['rocky','When you borrow, cross out the neighbor and make it one less. Sneaky step!'],
  noCarry:['rocky','A column made 10 or more? Write the ones and carry the 1 to the next column.'],
  oneColumnSlip:['rocky','So close! Just one column is off. Check each column, right to left.'],
  computeSlip:['rocky','Tiny slip somewhere. Redo it one step at a time.'],
  digitCount:['rocky','Count the digits. Your answer has the wrong number of places. Line up the ones!'],
  misaligned:['rocky','Line up the numbers on the right. Ones under ones, tens under tens.'],
  addedInstead:['hoot','Whoa! Check the sign. Are we adding, taking away, or multiplying?'],
  subtractedInstead:['hoot','Check the sign! Are we adding or taking away?'],
  decimalMisaligned:['marina','Ahoy! Line up the decimal points like masts on a ship. Fill empty spots with zeros.'],
  decimalPoint:['marina','Where did the decimal point go? It drops straight down into the answer.'],
  neighborFact:['ferra','Hot tip! That’s the fact next door. Start from one you know, then add or take away one group.'],
  missingPartial:['bo','Every box in the area model needs a number. Did you add ALL the boxes?'],
  placeValuePartial:['bo','Count the zeros! 20 × 30 is 2 × 3 with two zeros: 600.'],
  stoppedEarly:['hoot','Hoo! You did one step. But what does the question really ask? Read the last sentence again.'],
};
const FACT_ADD={addedInstead:'That’s plus! We’re multiplying. 7 × 8 means 7 groups of 8.'};
const SKILL_TIPS={
  add:['Start in the ones place and work left. Carry when a column hits 10.','Line up ones under ones before you add. Neat columns win battles.'],
  sub:['Before you subtract a column, ask: is the top digit big enough? If not, borrow!','Zeros on top? Borrow from the next digit that isn’t zero, then work back.','Check a subtraction by adding back. Answer + bottom number = top number.'],
  dec_add:['Line up the decimal points first. Everything else lines up by itself.','3.5 is the same as 3.50. Add a zero so both numbers have the same places.'],
  dec_sub:['Line up the decimal points first. Everything else lines up by itself.','Money helps! 4.25 is like $4.25. Think dollars and cents.'],
  fact:['Nines trick: the digits add to 9! 9 × 6 = 54, and 5 + 4 = 9.','Eights: double, double, double! 8 × 6 → 12, 24, 48.','Stuck? Start from a fact you know. 7 × 8 = 7 × 7 + 7.','Sevens: 7 × n is 5 × n plus 2 × n.'],
  area:['Split each number into tens and ones. Fill every box. Then add the boxes.','Tens times tens? Multiply the front digits, then add two zeros.','Estimate first: 38 × 21 is about 40 × 20 = 800.'],
  word:['Read it twice. First for the story. Second for the numbers.','Find the question first. It’s usually the last sentence.','Most word problems hide two steps. Solve step one, then use that answer.','Watch for numbers you don’t need. Not every number is invited to the party.'],
  table:['Read the table title and the column names before the numbers.'],
  bug:['Glitch’s work has a bug. Check it the same way you check your own!'],
};
const LINES={
  check:['Armor up! Tap Check It before Submit. If you’re wrong, my shield blocks the hit.','A hero who checks never loses power. Check It first!','Checking takes 20 seconds. Losing power is worse. Check It!'],
  self:['YOU caught your own mistake! That is the best move in the whole game.','Self-catch! That’s real hero stuff. Glitch can’t stand it.'],
  crit:['Checked AND correct. Textbook! Critical hit!','That is how the Shield Guard does it. Check, then strike!'],
  fire:['BEEP BOOP! You’re ON FIRE! Keep the combo going!','Combo detected! Glitch’s sensors are melting!','5 in a row! My circuits are tingling! BEEP!'],
  reveal:['Every hero misses sometimes. The next one is yours!','Mistakes help your brain grow. Seriously! Scientists checked.','Shake it off. Glitch got lucky. Your turn now. BEEP!'],
};

const Talk={el:null,popEl:null,open:false,lastPop:0,runPops:0,probPop:null,checkNag:0,
  st(){return state.npc=state.npc||{met:{},lore:0,msg:null,day:null};},
  met(id){return !!this.st().met[id];},
  fill(t){return String(t==null?'':t).replace(/\{name\}/g,(state.hero&&state.hero.name)||'Hero').replace(/\{glitch\}/g,glitchForm().name);},
  paint(cv,id,o){const N=NPCS[id];if(!N||!cv)return;const c=cv.getContext('2d'),W=cv.width,s=Math.floor(W/18);c.imageSmoothingEnabled=false;c.clearRect(0,0,W,W);
    const pal=o&&o.blink?Object.assign({},N.pal,{[N.blink[0]]:N.blink[1]}):N.pal;
    if(o&&o.dark){const d={};Object.keys(N.pal).forEach(k=>d[k]='#2b2f55');drawSprite(c,N.rows,s,s+((o&&o.bob)||0),s,d);return;}
    drawSprite(c,N.rows,s,s+((o&&o.bob)||0),s,pal);},
  init(){
    this.el=el('div',{id:'talk',hidden:true},el('div',{class:'talk-new',hidden:true}),
      el('div',{class:'talk-box'},el('canvas',{class:'talk-pt',width:108,height:108}),
        el('div',{class:'talk-body'},el('div',{class:'talk-name'}),el('div',{class:'talk-text'}),el('span',{class:'talk-more'},'▼')),
        el('button',{class:'talk-skip',type:'button'},'Skip ▸▸')));
    this.popEl=el('div',{class:'tpop',hidden:true},el('canvas',{width:72,height:72}),el('div',null,el('b'),el('span')));
    const app=$('#app');app.append(this.el,this.popEl);
    this.popEl.onclick=()=>this.unpop();},
  blip(id,ch){if(!ch||ch===' '||state.mute)return;const v=NPCS[id].voice;Snd.tone(v[0]*(1+(ch.charCodeAt(0)%5)*0.06),0.04,v[1],0.028);},
  // full RPG conversation; lines = [[who,text],...]
  chain:Promise.resolve(),
  say(lines){if(!lines||!lines.length)return Promise.resolve();const p=this.chain.then(()=>this._say(lines));this.chain=p.catch(()=>{});return p;},
  _say(lines){return new Promise(res=>{Snd.init();
    const T=this.el,box=T.querySelector('.talk-box'),cv=T.querySelector('.talk-pt'),nm=T.querySelector('.talk-name'),tx=T.querySelector('.talk-text'),more=T.querySelector('.talk-more'),nw=T.querySelector('.talk-new');
    this.unpop();this.open=true;T.hidden=false;let i=-1,who=null,full='',k=0,tm=null,raf=0,t0=performance.now();
    const loop=now=>{if(T.hidden)return;const t=(now-t0)/1000,typing=k<full.length;this.paint(cv,who,{blink:(t%3.2)<0.13,bob:typing&&((t*8|0)%2)?-2:0});raf=requestAnimationFrame(loop);};
    const end=()=>{clearInterval(tm);cancelAnimationFrame(raf);T.hidden=true;nw.hidden=true;this.open=false;T.onclick=null;res();};
    const next=()=>{i++;if(i>=lines.length)return end();const [w,t]=lines[i];const N=NPCS[w];
      if(!this.met(w)){this.st().met[w]=Date.now();saveState();nw.textContent='NEW ALLY: '+N.name;nw.hidden=false;nw.style.animation='none';void nw.offsetWidth;nw.style.animation='';Snd.gem();}
      else if(who!==w)nw.hidden=true;
      who=w;full=this.fill(t);k=0;box.style.setProperty('--nc',N.col);nm.textContent=N.name;nm.append(el('small',null,N.title));tx.textContent='';more.hidden=true;
      clearInterval(tm);tm=setInterval(()=>{k++;tx.textContent=full.slice(0,k);if(k%2)this.blip(who,full[k-1]);if(k>=full.length){clearInterval(tm);more.hidden=false;}},RM?1:26);};
    T.onclick=e=>{if(e.target.closest('.talk-skip'))return end();Snd.init();if(k<full.length){k=full.length;tx.textContent=full;clearInterval(tm);more.hidden=false;}else{Snd.tap();next();}};
    next();raf=requestAnimationFrame(loop);});},
  // quick advice bubble that does not block play
  pop(who,text,o){o=o||{};if(!this.met(who)&&INTROS[who])who=this.met('knight')?'knight':null;if(this.open||!NPCS[who])return false;const P=this.popEl,cv=P.querySelector('canvas'),N=NPCS[who];
    const anchor=o.anchor||(!$('#scr-level').hidden?$('.scene-wrap'):document.querySelector('.ow-hud'));if(!anchor)return false;
    const ar=anchor.getBoundingClientRect(),app=$('#app').getBoundingClientRect();
    P.style.left=(ar.left-app.left+8)+'px';P.style.top=(o.below?ar.bottom-app.top+8:ar.top-app.top+6)+'px';P.style.maxWidth=Math.min(620,ar.width-16)+'px';
    P.style.setProperty('--nc',N.col);P.querySelector('b').textContent=N.name;const sp=P.querySelector('span'),full=this.fill(text);sp.textContent='';
    if(!$('#scr-level').hidden&&$('#scr-level').classList.contains('calm')&&!o.anchor){P.style.top='auto';P.style.bottom='14px';P.style.left='14px';P.style.maxWidth=Math.min(560,app.width-28)+'px';}else P.style.bottom='';
    P.hidden=false;P.classList.remove('in');void P.offsetWidth;P.classList.add('in');this.paint(cv,who,{});
    let k=0;clearInterval(this.ptm);clearTimeout(this.phide);this.ptm=setInterval(()=>{k+=1;sp.textContent=full.slice(0,k);if(k%2)this.blip(who,full[k-1]);this.paint(cv,who,{bob:k<full.length&&(k>>1)%2?-2:0});
      if(k>=full.length){clearInterval(this.ptm);this.paint(cv,who,{});}},RM?1:22);
    this.phide=setTimeout(()=>this.unpop(),Math.max(4200,full.length*22+3000));this.lastPop=Date.now();this.runPops++;
    if(o.log&&typeof ATT!=='undefined'&&ATT){ATT.tips=(ATT.tips||[]).concat([o.log]);}
    return true;},
  unpop(){clearInterval(this.ptm);clearTimeout(this.phide);if(this.popEl)this.popEl.hidden=true;},
  meet(id){return this.met(id)||!INTROS[id]?Promise.resolve():this.say(INTROS[id]);},
  meetHome(wid){const id=KHOME[wid];return id?this.meet(id):Promise.resolve();},
  bossBrief(w){const id=KHOME[w.id];if(!id)return Promise.resolve();const lines=[];if(!this.met(id))lines.push(...INTROS[id]);
    lines.push([id,BRIEF[id]]);if(this.met('echo'))lines.push(['echo','Glitch’s mech is strongest when you rush. Slow down. Check.']);return this.say(lines);},
  // ---------- hooks
  onRunStart(spec){this.runPops=0;this.probPop=null;this.checkNag=0;
    const id=spec.world?KHOME[spec.world]:spec.mode==='pack'?'knight':spec.mode==='quest'?'byte':null;
    const after=()=>{if(spec.boss||!id)return;const sk=spec.problems&&spec.problems[0]&&spec.problems[0].skill;
      const tipWho=SKILL_NPC[sk]||id,tips=SKILL_TIPS[sk];
      if(tips&&Math.random()<0.6)setTimeout(()=>{if(run&&run.spec===spec&&$('#overlay').hidden)this.pop(tipWho,pick(tips),{log:'start:'+sk});},900);};
    if(id&&!this.met(id)&&INTROS[id])return this.say(INTROS[id]).then(after);after();return null;},
  onWrong(o){if(!run)return;const key=run.idx;if(this.probPop===key)return;
    const tag=(o.tags||[]).find(t=>TAG_TIPS[t]);
    if(o.skill==='fact'){if(tag&&Math.random()<0.7){this.probPop=key;this.pop('ferra',FACT_ADD[tag]||TAG_TIPS[tag][1],{log:'tag:'+tag});}return;}
    if(tag&&(o.tries<=2)){this.probPop=key;this.pop(TAG_TIPS[tag][0],TAG_TIPS[tag][1],{log:'tag:'+tag});return;}
    if(!o.checked&&o.tries===1&&this.checkNag<2&&o.kind!=='step'){this.checkNag++;this.probPop=key;this.pop('knight',pick(LINES.check),{log:'check'});return;}
    if(o.tries===2){const sk=SKILL_TIPS[o.skill];if(sk){this.probPop=key;this.pop(SKILL_NPC[o.skill]||'hoot',pick(sk),{log:'skill:'+o.skill});}}},
  onDone(p,res,a){if(!run)return;const cool=Date.now()-this.lastPop>20000;const s=Battle.s;
    if(res.selfCatch){this.pop('knight',pick(LINES.self));return;}
    if(s&&s.combo===5){this.pop('byte',pick(LINES.fire));return;}
    if(res.revealed&&cool){this.pop(Math.random()<0.5?'byte':'hoot',Math.random()<0.5?pick(LINES.reveal):'Now you know how. That is how heroes level up.');return;}
    if(res.firstTry&&a.checkUsed&&cool&&Math.random()<0.35)this.pop('knight',pick(LINES.crit));},
  afterRun(sp){const lines=[];
    if(!this.met('pip'))lines.push(...INTROS.pip);
    if(sp.mode==='boss'){const freed=WORLDS.filter(w=>((state.prog[w.id]||{}).stars||{})[5]).length,N=this.st();
      if(!this.met('echo'))lines.push(...INTROS.echo);else if(freed>N.lore&&LORE[freed-1])lines.push(['echo',LORE[freed-1]]);N.lore=Math.max(N.lore,freed);saveState();}
    return this.say(lines);},
  onMap(){setTimeout(()=>{if($('#scr-map').hidden||this.open||!$('#overlay').hidden||!$('#cine').hidden||!state.hero)return;const N=this.st();
      if(!this.met('knight')){this.say(INTROS.knight);return;}
      if(cfg.message&&N.msg!==cfg.message){N.msg=cfg.message;saveState();this.say([['knight','A message from HQ, {name}!'],['knight',cfg.message]]);return;}
      const d=dayStr();if(N.day!==d){N.day=d;saveState();const f=questFocus()[0],who=SKILL_NPC[f]||'hoot';
        if(SKILL_TIPS[f])this.pop(this.met(who)?who:'knight',pick(SKILL_TIPS[f]),{anchor:document.querySelector('.ow-hud'),below:true});}},500);},
  book(){const N=this.st();const grid=el('div',{class:'allies'},ALLY_ORDER.map(id=>{const A=NPCS[id],m=this.met(id),cv=el('canvas',{width:72,height:72});this.paint(cv,id,{dark:!m});
      return el('button',{class:'ally'+(m?'':' locked'),type:'button',style:'--nc:'+A.col,disabled:!m,onclick:()=>{overlay(null);
        const bank=id==='sensei'?SENSEI_TIPS:id==='knight'?LINES.check:id==='byte'?LINES.reveal:id==='pip'?[INTROS.pip[2][1]]:id==='echo'?[LORE[Math.max(0,N.lore-1)]||INTROS.echo[4][1]]:
          SKILL_TIPS[Object.keys(SKILL_NPC).find(k=>SKILL_NPC[k]===id)]||[];this.say([[id,pick(bank)]]).then(()=>this.book());}},
        cv,el('b',null,m?A.name:'???'),el('span',null,m?A.title:'Not met yet'));}));
    overlay(el('div',{class:'modal allies-modal'},el('h2',null,'Allies'),el('p',null,`You have met ${ALLY_ORDER.filter(i=>this.met(i)).length} of ${ALLY_ORDER.length}. Tap an ally for a tip.`),grid,
      el('div',{class:'btns'},el('button',{class:'btn btn-dark',type:'button',onclick:()=>overlay(null)},'Close'))));},
};
