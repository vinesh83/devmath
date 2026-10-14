/* =========================================================
   Dog powers: the dog at his side gives one small perk. Powers add fun and coins; none does the math for him.
   ========================================================= */
const DOG_POWERS={
  ellie:['Best Buddy','+5 coins after every Dojo round, and a happy bark when you own a new fact'],
  puppy:['Cheer','+3 coins when you catch your own mistake'],
  golden:['Fetch','+1 extra coin for every bug you squash in battle'],
  lab:['Loyal Guard','+1 extra heart in every battle'],
  dalmatian:['Spot It','after Check It, points to the place to look again'],
  beagle:['Super Sniff','in Bug Hunt, sniffs out where Glitch messed up'],
  pug:['Comeback','after a miss, your next right answer earns +2 coins'],
  shiba:['Zoomies','your SUPER meter charges faster in battle'],
  corgi:['Herding','herds Glitch’s bugs so they crawl slowly in battle'],
  shepherd:['Protector','blocks Glitch’s first attack in Battle Time'],
  husky:['Sled Power','+5 mech power'],
  collie:['Big Brain','one free trick hint per Dojo round'],
  dachshund:['Dig','sometimes digs up bonus coins from chests'],
  poodle:['Fancy','10% off everything in the Shop'],
  chihuahua:['Brave Bark','stuns Glitch at the start of Battle Time'],
  bulldog:['Tough','Glitch’s hits in Battle Time don’t break your combo'],
  robodog:['Laser Eyes','starts every battle with extra SUPER charge']};
const DogPower={last:{},
  id(){return state.hero&&state.hero.pet;},
  has(k){return this.id()===k&&!!DOG_POWERS[k];},
  name(k){const d=DOGS.find(x=>x[0]===k);return d?d[1].replace(/ the .*/,''):k;},
  line(k){const p=DOG_POWERS[k];return p?`🐾 ${p[0]}: ${p[1]}`:'';},
  // a small toast with the dog's face; quiet repeats (one per power every few seconds)
  pop(k,msg,o){o=o||{};const now=Date.now();if(!o.force&&now-(this.last[k+msg]||0)<6000)return;this.last[k+msg]=now;
    const t=el('div',{class:'dog-pop'},dogIcon(k,44),el('div',null,el('b',null,`${this.name(k)}: ${DOG_POWERS[k][0]}!`),el('span',null,msg)));
    $('#app').append(t);try{Snd.tone(988,0.05,'square',0.03);Snd.tone(1319,0.07,'square',0.03,0.06);}catch(e){}
    setTimeout(()=>t.classList.add('out'),1700);setTimeout(()=>t.remove(),2100);},
  coins(n){state.coins+=n;const lc=$('#lv-coins');if(lc)lc.textContent=String(state.coins);saveState();},
  price(p){return this.has('poodle')?Math.round(p*0.9):p;},
  // Beagle: point at the place or step Glitch got wrong (only once he has missed a real bug)
  sniff(p){if(!this.has('beagle'))return;const b=p.base;let msg=null;
    if(b.kind==='word'&&b.glitchPlan){const gs=b.glitchPlan.steps,i=gs.findIndex((s,k)=>!b.steps[k]||!eqNum(s.res,b.steps[k].res));
      const rows=[...document.querySelectorAll('#card .gwork > div')].slice(1,-1);if(i>=0&&rows[i]){rows[i].classList.add('sniffed');msg=`Sniff sniff! Step ${i+1} smells funny.`;}}
    else if(b.kind==='arith'){const pl=diffPlaces(p.glitch,b.answer,b.dp||0)[0];if(pl)msg=`Sniff sniff! Something smells funny in the ${pl} place.`;}
    else if(b.kind==='area')msg='Sniff sniff! One of Glitch’s parts smells funny.';
    if(msg){this.pop('beagle',msg,{force:true});say(msg,'warn');}}};

// Husky: +5 mech power (shows in the Mech Bay too)
{const _mp=mechPower;mechPower=function(m){return _mp(m)+(DogPower.has('husky')?5:0);};}
// Dachshund: 40% of chests come with a dug-up bonus
{const _oc=openChest;openChest=function(ctx){const r=_oc(ctx);const dig=()=>{if(DogPower.has('dachshund')&&Math.random()<0.4){DogPower.coins(10);DogPower.pop('dachshund','Dug up 10 bonus coins!',{force:true});}};
  if(r&&r.then)return r.then(v=>{dig();return v;});dig();return r;};}

/* =========================================================
   Handwriting check: before a handwritten answer counts as wrong, ask whether the reader got it right.
   "No" means rewrite: no penalty, and his first speed still counts. Capped per round so it can’t become a free retry.
   ========================================================= */
const InkCheck={MAX:3,
  st(){return state.inkStats=state.inkStats||{asked:0,yes:0,no:0,noThenRight:0,noThenWrong:0,log:[]};},
  left(bag){return (bag.inkClaims||0)<this.MAX;},
  // ask only when the reader is unsure of what he wrote, never because the answer is wrong (that would give the answer away)
  unsure(v){const r=typeof InkBox!=='undefined'&&InkBox.lastR;if(!r||String(r.text)!==String(v))return false;return r.minP<0.6;},
  ask(v,bag){const S=this.st();S.asked++;saveState();
    const A=InkBox.active,cv=A&&A.cv;let snap=null;try{if(cv&&cv.width&&A.strokes&&A.strokes.length)snap=el('img',{class:'ink-snap',src:cv.toDataURL(),alt:'What you wrote'});}catch(e){}
    return new Promise(res=>{const yes=el('button',{class:'btn btn-dark',type:'button'},'Yes, that’s my answer'),no=el('button',{class:'btn btn-green',type:'button'},'No, let me rewrite it');
      const fin=k=>{if(fin.done)return;fin.done=1;overlay(null);if(k)S.yes++;else{S.no++;bag.inkClaims=(bag.inkClaims||0)+1;}saveState();res(k);};
      tapify(yes,()=>fin(true));tapify(no,()=>fin(false));
      overlay(el('div',{class:'modal ink-check'},el('h2',null,'Did I read that right?'),snap,el('p',{class:'ink-q'},'I read ',el('b',null,String(v)),'. Is that what you wrote?'),el('div',{class:'btns'},yes,no)));});},
  // remember how the rewrite went, so the coach can see how often the reader is wrong
  after(read,now,ok){const S=this.st();if(ok)S.noThenRight++;else S.noThenWrong++;S.log=(S.log||[]).concat([{t:new Date().toISOString(),read,now,ok}]).slice(-60);saveState();}};
