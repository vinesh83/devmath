/* =========================================================
   Division: (1) division facts join the Times Dojo as the flip side of owned times facts,
   (2) standard-algorithm multiplication (3-4 digits × 1 digit) with the slip finder,
   (3) Division Dungeon: guided long division, one step at a time (Divide, Multiply, Subtract, Bring down),
   (4) the division lesson videos, with "Your turn" pauses.
   ========================================================= */

// ---------- 1) fact families: own 3 × 4 and 12 ÷ 3, 12 ÷ 4 join the Times Dojo right away (they don't count toward belts)
{const _facts=Dojo.facts;Dojo.facts=function(did){const all=_facts.call(this,did);if(did!=='tm')return all;const D=this.st().facts,m=new Map(all.map(f=>[f.key,f]));
  for(const f of all){if(f.op!=='×'||!(D[f.key]&&D[f.key].owned))continue;
    for(const d of new Set([f.a,f.b])){if(d<2||d>12)continue;const g=fct('÷',f.a*f.b,d),ex=m.get(g.key);
      if(!ex)m.set(g.key,Object.assign(g,{belt:f.belt,flip:f}));else if(ex.belt>f.belt)m.set(g.key,Object.assign({},ex,{belt:f.belt,flip:f}));}}
  // a gentle ramp: at most 4 brand-new division facts a day
  const today=dayStr(),flips=[...m.values()].filter(f=>f.flip&&f.op==='÷'),seenToday=flips.filter(f=>D[f.key]&&Object.keys(D[f.key].days||{}).sort()[0]===today).length;
  let room=Math.max(0,4-seenToday);for(const f of flips){if(D[f.key])continue;if(room>0){room--;continue;}m.delete(f.key);}
  return [...m.values()];};
 const _next=Dojo.next;Dojo.next=function(){_next.apply(this,arguments);try{const p=run&&run.queue&&run.queue[run.idx],f=p&&p.f;if(!f||f.op!=='÷'||!f.flip)return;const r=this.st().facts[f.key];if(r&&r.n>=3)return;
    const card=$('#card'),ex=card&&card.querySelector('.dj-expr');if(ex)ex.before(el('div',{class:'dv-flip'},el('span',null,'🔄'),el('b',null,'Flip it!'),` ${f.flip.a} × ${f.flip.b} = ${f.flip.a*f.flip.b}, so ${f.a} ÷ ${f.b} = ?`));}catch(e){}};}

// ---------- 2) standard-algorithm multiplication
function genMul(r){const L=Math.max(1,Math.min(5,Math.round(r||1)));const nd=L<=2?3:4;let a,m;
  for(let t=0;t<200;t++){a=rdig(nd);m=rint(L<=1?3:4,9);if(a%10!==0)break;}
  return {kind:'mul',skill:'mul',op:'×',nums:[String(a),String(m)],dp:0,answer:a*m,L};}
function mulMarks(p){const a=Number(p.nums[0]),m=Number(p.nums[1]),s=String(a),n=s.length,out=Array(n).fill(null);let c=0;
  for(let i=0;i<n;i++){const d=Math.floor(a/Math.pow(10,i))%10,v=d*m+c;c=Math.floor(v/10);if(c&&i+1<n)out[n-2-i]=c;}return out;}
function renderMul(p,a){const card=$('#card');card.append(cardHead('Multiply'),el('div',{class:'expr'},`${fmtStr(p.nums[0])} × ${p.nums[1]} =`),
    el('div',{class:'tip'},'Stack it. Multiply every digit, right to left, even the first one!'));
  const f=Pad.make({allowDot:false});card.append(el('div',{class:'ans-row'},el('span',null,'Answer'),f.el));Pad.focus(f);
  Scratch.reset(drawStackOnGrid(p));say('Work it on the paper. Carries go above the next digit.','');
  answerFlow({field:f,correct:p.answer,check:null,slip:{P:p},
    diag:v=>{let t='other';try{t=Slip.analyze(p,v).type;}catch(e){}return{tags:[t],places:diffPlaces(v,p.answer,0)};},
    reveal:v=>el('div',null,el('div',{class:'lbl'},'Small numbers show the carries. Green is the answer. Red boxes show where yours was different.'),stackDOM(p,{marks:mulMarks(p),answer:p.answer,yours:v})),
    onDone:res=>complete(p,res)});}

// ---------- 3) long division
function genDiv(lv){lv=Number(lv);if(!(lv>=0))lv=1;lv=Math.min(5,lv);
  for(let t=0;t<500;t++){let d,n;
    // L0: one Divide-Multiply-Subtract step with leftovers (17 ÷ 5 = 3 R 2); most have a remainder, some come out even
    if(lv===0){d=rint(2,9);const q=rint(2,9),r=Math.random()<0.8?rint(1,d-1):0;n=d*q+r;if(n<10)continue;}
    else if(lv===1){d=pick([2,3,4]);const x=rint(1,Math.floor(9/d)),y=rint(0,Math.floor(9/d));n=d*x*10+d*y;if(n<20)continue;}
    else if(lv===2){d=rint(2,6);const q=rint(11,Math.floor(99/d));n=q*d;if(n>99||Math.floor(n/10)%d===0)continue;}
    else if(lv===3){d=rint(3,9);n=rint(Math.max(2*d+1,d*10+1),99);if(n%d===0)continue;}
    else if(lv===4){d=rint(3,9);n=rint(112,999);if(Math.random()<0.35&&n%d)n-=n%d;}
    else{d=rint(3,9);let q;do{q=rint(102,2400);}while(!String(q).includes('0')||q*d<1000||q*d>9999);n=q*d+(Math.random()<0.5?rint(1,d-1):0);if(n>9999)continue;}
    const q=Math.floor(n/d),rem=n%d;return {kind:'div',skill:'div',op:'÷',n,d,answer:q,rem,L:lv,nums:[String(n),String(d)],dp:0};}
  return {kind:'div',skill:'div',op:'÷',n:84,d:4,answer:21,rem:0,L:lv,nums:['84','4'],dp:0};}
function divPlan(n,d){const s=String(n);let i=0,cur=+s[0];while(cur<d&&i<s.length-1){i++;cur=cur*10+ +s[i];}
  const rows=[];let col=i;for(;;){const q=Math.floor(cur/d),prod=q*d,diff=cur-prod;rows.push({col,cur,q,prod,diff});if(col>=s.length-1)break;col++;cur=diff*10+ +s[col];}
  return {s,start:i,rows,rem:rows[rows.length-1].diff};}
const DivVoice=id=>{try{Slip.voice(id);}catch(e){}};
function renderDiv(p,a){const card=$('#card'),P=divPlan(p.n,p.d),N=P.s.length,short=p.L>=4&&!p.guided,cue=(p.L<=2||p.guided)&&run&&run.idx<2;card.classList.add('tall');
  card.append(cardHead('Long division'),el('div',{class:'expr'},`${fmtStr(String(p.n))} ÷ ${p.d} = ?`));
  const coach=el('div',{class:'dv-coach'});const tipEl=el('div',{class:'dv-tip'});
  // the bracket: col 1 = divisor, col 2 = bracket wall, cols 3.. = dividend digits
  const g=el('div',{class:'dv-grid',style:`grid-template-columns:auto 6px repeat(${N},1.15em)`});const C=c=>c+3;
  const cell=(row,c1,c2,node,cls)=>{const e=el('div',{class:'dv-cell '+(cls||''),style:`grid-row:${row};grid-column:${c1}/${c2+1}`},node);g.append(e);return e;};
  const digits=P.s.split('').map((ch,i)=>cell(2,C(i),C(i),ch,'dv-dig dv-top'));cell(2,1,1,String(p.d),'dv-divisor');cell(2,2,2,'','dv-wall');
  card.append(coach,el('div',{class:'dv-wrap'},g),tipEl);Scratch.reset(null);
  const qf=[];let row=3,errs=0,stepErr=0,cur=null,k=0,done=false;a.steps=[];
  const glow=els=>{g.querySelectorAll('.glow').forEach(x=>x.classList.remove('glow'));els.forEach(x=>x&&x.classList.add('glow'));};
  const setCoach=(ic,name,text)=>{coach.innerHTML='';coach.append(el('span',{class:'dv-ic'},ic),el('b',null,name),short?null:el('span',null,text));};
  const tip=(t,voice)=>{tipEl.innerHTML='';if(!t)return;tipEl.append(dogIcon(Slip.pet(),120),el('div',{class:'sl-bub'},el('b',null,t)));if(voice)DivVoice(voice);};
  const ask=(want,max,place,onOk,check)=>{const f=Pad.make({sm:true,allowDot:false,max,ph:'?'});place.append(f.el);Pad.focus(f);let tries=0;
    f.onChange=()=>{if(f.locked||f.val.length<String(want).length)return;const v=Pad.val(f);tries++;
      if(v===want){Pad.right(f);Pad.lock(f);Snd.tap();tip(null);a.steps.push({k,want,ok:tries===1});setTimeout(()=>onOk(f),250);return;}
      errs++;stepErr++;Pad.wrong(f);const why=check(v);a.errors=(a.errors||[]).concat([{a:v,want,tags:['div:'+why.tag]}]);
      if(tries>=2){setTimeout(()=>{Pad.set(f,String(want));Pad.lock(f);tip(`It’s ${want}. ${why.after||''}`);a.steps.push({k,want,ok:false});setTimeout(()=>onOk(f),900);},350);return;}
      tip(why.text,why.voice);setTimeout(()=>{if(!f.locked)Pad.set(f,'');},350);};return f;};
  const stepDivide=()=>{const r=P.rows[k];cur=r;const span=String(r.cur).length;
    const curCells=digits.slice(r.col-span+1,r.col+1);
    if(k===0&&P.start>0)tip(`${p.d} doesn’t fit in ${P.s[0]}. Use ${r.cur}.`);
    const prevDiff=k>0?g.querySelectorAll('.dv-diffrow'):[];glow(k===0?curCells:[...prevDiff].slice(-1));
    setCoach('➗','DIVIDE',`How many ${p.d}s fit in ${r.cur}?`);if(cue)DivVoice('div-divide');
    const place=cell(1,C(r.col),C(r.col),'','dv-q');
    ask(r.q,1,place,f=>{qf.push(f);stepMultiply();},v=>v*p.d>r.cur?{tag:'qtoobig',text:`Too big! ${v} × ${p.d} = ${v*p.d}. That’s more than ${r.cur}.`,voice:'div-big'}
      :{tag:'qtoosmall',text:`Too small! ${v+1} × ${p.d} = ${(v+1)*p.d} still fits in ${r.cur}.`,voice:'div-small',after:''});};
  const stepMultiply=()=>{const r=cur,span=String(r.cur).length,c1=C(r.col-span+1),c2=C(r.col);row++;
    cell(row,1,2,'−','dv-minus');const place=cell(row,c1,c2,'','dv-num');glow([place]);
    setCoach('✖️','MULTIPLY',`${r.q} × ${p.d} = ?`);if(cue)DivVoice('div-multiply');
    ask(r.prod,String(r.cur).length,place,()=>{row++;cell(row,c1,c2,'','dv-rule');stepSubtract();},v=>({tag:'mulfact',text:`Check it: ${r.q} × ${p.d} = ?`,voice:'timesfact'}));};
  const stepSubtract=()=>{const r=cur,span=String(r.cur).length,c1=C(r.col-span+1),c2=C(r.col);row++;const place=cell(row,c1,c2,'','dv-num dv-diffrow');glow([place]);
    setCoach('➖','SUBTRACT',`${r.cur} − ${r.prod} = ?`);if(cue)DivVoice('div-subtract');
    ask(r.diff,String(r.cur).length,place,()=>{if(r.diff>=p.d){tip(`${r.diff} is not smaller than ${p.d}. The divide step was too small.`,'div-rem');}
        if(k<P.rows.length-1)stepBring(place,c2);else finish();},v=>({tag:'subslip',text:`Check your subtraction: ${r.cur} − ${r.prod}.`,voice:'div-sub'}));};
  const stepBring=(place,c2)=>{const nc=P.rows[k].col+1,ch=P.s[nc];glow([digits[nc]]);setCoach('⬇️','BRING DOWN',`Bring down the ${ch}.`);if(cue)DivVoice('div-bring');
    const b=el('button',{class:'btn btn-blue dv-bring',type:'button'},`⬇ Bring down the ${ch}`);tipEl.innerHTML='';tipEl.append(b);
    tapify(b,()=>{b.remove();Snd.tap();const d=cell(row,C(nc),C(nc),ch,'dv-dig dv-down');d.style.animation='dvDrop .45s ease-out';k++;setTimeout(stepDivide,350);});};
  const finish=()=>{done=true;glow([]);const R=P.rem;const ans=R?`${fmt(p.answer)} R${R}`:fmt(p.answer);
    setCoach('🏁','DONE',R?`The leftover is ${R}. It’s smaller than ${p.d}, so it’s the remainder.`:'Nothing left over. It splits evenly!');
    tip(null);DivVoice('div-done');Snd.coin();
    const res=el('div',{class:'dv-result'},`${fmt(p.n)} ÷ ${p.d} = `,el('b',null,ans));
    const ckF=Pad.make({sm:true,allowDot:false,max:6,ph:'?'});const ckMsg=el('span',{class:'dv-ckmsg'});
    const ck=el('div',{class:'dv-check'},el('b',null,'Check it: '),`${fmt(p.answer)} × ${p.d}${R?' + '+R:''} = `,ckF.el,ckMsg);
    tipEl.innerHTML='';tipEl.append(res,ck);Pad.focus(ckF);if(!cue)DivVoice('div-check');
    const end=checked=>{if(checked)a.checkUsed=true;a.divRem=R;complete(p,{solved:true,firstTry:errs===0,tries:errs?2:1});};
    let ct=0;ckF.onChange=()=>{if(ckF.locked||ckF.val.length<String(p.n).length)return;ct++;if(Pad.val(ckF)===p.n){Pad.right(ckF);Pad.lock(ckF);Snd.coin();ckMsg.textContent=` ✓ ${fmt(p.n)}. It checks out!`;setTimeout(()=>end(true),700);}
      else{Pad.wrong(ckF);setTimeout(()=>{if(!ckF.locked)Pad.set(ckF,'');},350);ckMsg.textContent=ct>=2?` It should come back to ${fmt(p.n)}.`:' Not quite. Multiply, then add the leftover.';if(ct>=2){Pad.lock(ckF);setTimeout(()=>end(false),1200);}}};
    setActions([{label:'Skip check ▸',cls:'btn-dark',onClick:()=>{if(!ckF.locked){Pad.lock(ckF);end(false);}}}]);};
  setActions([]);stepDivide();}

// problem plumbing: tokens "div:1..5" and "mul", the twin after a miss, the log line
{const _mp=makeProblem;makeProblem=function(tok,boost){const [k,arg]=String(tok).split(':');if(k==='div')return genDiv(arg);if(k==='mul')return genMul(R('mul')+(boost||0));return _mp(tok,boost);};
 const _tw=twinOf;twinOf=function(p){if(p&&p.kind==='div')return genDiv(p.L);if(p&&p.kind==='mul')return genMul(p.L);return _tw(p);};
 const _ds=describe;describe=function(p){if(p&&p.kind==='div')return `${p.n} ÷ ${p.d}`;if(p&&p.kind==='mul')return `${p.nums[0]} × ${p.nums[1]}`;return _ds(p);};
 // Area Castle mixes in standard-algorithm multiplication (school is using it right now)
 const ca=WORLDS.find(w=>w.id==='castle');if(ca){ca.levels[1]=['area','mul'];ca.levels[2]=['mul','area'];}}

// ---------- 4) Division Dungeon (opened from the map; five levels; lessons unlock as he goes)
const DIV_WORLD={id:'dungeon',name:'Division Dungeon',sub:'Share it out: long division',color:'#e0457b',boss:'The Splitter',
  // remainders first: school is on them now (Oct 15)
  levels:[['div:0'],['div:1','div:0'],['div:2','div:3'],['div:4','mul'],['div:5','div:4']],bossMix:['div:4','div:5']};
const DivLessons={
  // Leftovers (remainders) comes third, before Level 1; each later lesson plays before the level it teaches
  LIST:[{id:'div1',title:'Fair Shares',lv:0,ic:'💎'},{id:'div2',title:'The Reverse Spell',lv:0,ic:'🔄'},{id:'div5',title:'Leftovers',lv:0,ic:'🦴'},
    {id:'div3',title:'Tens First',lv:1,ic:'🧱'},{id:'div4',title:'Trade a Ten',lv:2,ic:'⚒️'},{id:'div6',title:'The Knight’s Code',lv:3,ic:'⚔️'}],
  // "Your turn" pauses inside each video: [seconds, question, answer]
  STOPS:{},
  st(){return state.divVideos=state.divVideos||{};},
  ok:{},has(id){return this.ok[id];},
  // video/index.json lists the finished lessons and their "Your turn" pauses: {"videos":{"div1":{"stops":[[31.5,"15 ÷ 3",5]]}}}
  probe(){if(this.probing)return;this.probing=true;fetch('video/index.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(j=>{const V=(j&&j.videos)||{};for(const id in V){this.ok[id]=true;this.STOPS[id]=V[id].stops||[];}}).catch(()=>{}).finally(()=>{setTimeout(()=>{this.probing=false;},60000);});},
  unlocked(v){const pr=state.prog.dungeon||{done:0};return v.lv<=pr.done;},
  pending(li){return this.LIST.filter(v=>v.lv<=li&&this.has(v.id)&&!this.st()[v.id]);},
  // One lesson at a time: after each, Dev picks the next lesson or the level. Skipped ones stay "New!" and come back next time.
  async playPending(li){const P=this.pending(li);for(let i=0;i<P.length;i++){await this.play(P[i]);if(i<P.length-1&&!(await this.ask(P[i+1],P.length-1-i)))break;}},
  ask(v,left){return new Promise(res=>{const done=go=>{overlay(null);res(go);};
    overlay(el('div',{class:'modal dv-modal dv-ask'},el('h2',null,'Nice watching! 🐾'),el('p',null,left>1?`${left} more lessons are ready.`:'One more lesson is ready.'),
      el('div',{class:'btns'},el('button',{class:'btn',type:'button',onclick:()=>done(true)},`▶ Next: ${v.title}`),el('button',{class:'btn btn-dark',type:'button',onclick:()=>done(false)},'⚔️ Play the level'))));});},
  play(v){return new Promise(res=>{const held=typeof Pause!=='undefined'&&Pause.hold&&Pause.hold();if(typeof Music!=='undefined')Music.stop();
    const vid=el('video',{class:'vp-video',playsinline:'',preload:'auto',src:'video/'+v.id+'.mp4',poster:'video/'+v.id+'.jpg'});vid.setAttribute('playsinline','');vid.setAttribute('webkit-playsinline','');
    const seen=!!this.st()[v.id],stops=(this.STOPS[v.id]||[]).map(s=>({t:s[0],q:s[1],a:s[2],done:false}));
    const big=el('button',{class:'vp-start',type:'button'},el('span',null,'▶'),el('b',null,v.title));
    const bar=el('div',{class:'vp-bar'});const prog=el('i');const track=el('div',{class:'vp-track'},prog);
    const btn=(t,fn)=>{const b=el('button',{class:'vp-btn',type:'button'},t);tapify(b,fn);return b;};
    const pp=btn('⏸',()=>{if(vid.paused){vid.play();pp.textContent='⏸';}else{vid.pause();pp.textContent='▶';}});
    const close=()=>{try{vid.pause();}catch(e){}wrap.remove();if(held)Pause.release();res();};
    bar.append(pp,btn('⟲ 10s',()=>{vid.currentTime=Math.max(0,vid.currentTime-10);}),track);if(seen)bar.append(btn('Skip ▸',close));
    const quiz=el('div',{class:'vp-quiz',hidden:true});
    const wrap=el('div',{class:'vp'},vid,quiz,bar,big);document.body.append(wrap);
    tapify(big,()=>{big.remove();vid.play().catch(()=>{});});
    vid.addEventListener('timeupdate',()=>{prog.style.width=(100*vid.currentTime/(vid.duration||1))+'%';const s=stops.find(x=>!x.done&&vid.currentTime>=x.t);if(s){s.done=true;vid.pause();wrap.classList.add('quizzing');this.quiz(quiz,s,()=>{wrap.classList.remove('quizzing');vid.play();});}});
    vid.addEventListener('ended',()=>{this.st()[v.id]={seen:dayStr()};saveState();
      Slip.log({kind:'video',id:v.id,stops:stops.length,stopsOk:stops.filter(s=>s.ok).length});setTimeout(close,400);});
    vid.addEventListener('error',()=>{close();});});},
  quiz(box,s,go){box.hidden=false;box.innerHTML='';let v='',tries=0;const disp=el('div',{class:'lab-ans'},'?');const msg=el('div',{class:'vp-msg'});
    const keys=el('div',{class:'lab-keys'},...[1,2,3,4,5,6,7,8,9,'⌫',0,'OK'].map(k=>{const b=el('button',{class:'lab-k'+(k==='OK'?' ok':''),type:'button'},String(k));
      tapify(b,()=>{if(k==='⌫')v=v.slice(0,-1);else if(k==='OK'){if(!v)return;tries++;if(+v===s.a){s.ok=tries===1;Snd.coin();msg.textContent='Yes! 🐾';DivVoice('found');setTimeout(()=>{box.hidden=true;go();},700);}
        else{Snd.tone(220,0.12,'triangle',0.04);v='';if(tries>=2){msg.textContent=`It’s ${s.a}. Watch how!`;setTimeout(()=>{box.hidden=true;go();},1500);}else msg.textContent='Not quite. Try again!';}}
        else if(v.length<5)v+=k;disp.textContent=v||'?';Snd.tap();});return b;}));
    box.append(el('h3',null,'Your turn!'),el('div',{class:'lab-q'},/\?/.test(s.q)?s.q:s.q+' ='),disp,keys,msg);}
};
const Dungeon={
  open(){DivLessons.probe();const pr=state.prog.dungeon||{done:0,stars:{}};
    const lv=DIV_WORLD.levels.map((_,i)=>{const open=i<=pr.done,st=pr.stars&&pr.stars[i]||0;const b=el('button',{class:'dv-lv'+(open?'':' locked'),type:'button',disabled:!open},
        el('b',null,`Level ${i+1}`),el('span',null,['Leftovers (remainders)','2-digit: tens first','Trade a ten','3-digit numbers','4-digit + zeros'][i]),el('i',null,open?'★'.repeat(st)+'☆'.repeat(3-st):'🔒'));
      if(open)tapify(b,()=>{overlay(null);Snd.init();startLevel(DIV_WORLD,i);});return b;});
    const vids=el('div',{class:'dv-vids'});const fill=()=>{vids.innerHTML='';DivLessons.LIST.forEach((v,i)=>{const un=DivLessons.unlocked(v),av=DivLessons.has(v.id);
      const b=el('button',{class:'dv-vid'+(un&&av?'':' locked'),type:'button'},el('span',{class:'dv-vic'},un?v.ic:'🔒'),el('b',null,`${i+1}. ${v.title}`),el('small',null,!un?'Unlocks as you go':av?(DivLessons.st()[v.id]?'Watch again':'New!'):'Coming soon'));
      if(un&&av)tapify(b,()=>{overlay(null);DivLessons.play(v).then(()=>this.open());});vids.append(b);});};fill();setTimeout(fill,900);
    overlay(el('div',{class:'modal dv-modal'},el('h2',null,'🗝️ Division Dungeon'),el('p',null,'Share it out! Watch the lessons, then split the treasure step by step.'),
      el('div',{class:'dv-lvs'},...lv),el('h3',null,'📺 Lessons'),vids,el('div',{class:'btns'},el('button',{class:'btn btn-dark',type:'button',onclick:()=>overlay(null)},'Back to map'))));}
};
// map button
{const _rm=renderMap;renderMap=function(){_rm.apply(this,arguments);try{const bot=document.querySelector('#scr-map .ow-bottom');if(!bot||bot.querySelector('.ow-div'))return;const pr=state.prog.dungeon||{done:0};
  const b=el('button',{class:'quest ow-div',type:'button'},el('div',null,el('h2',null,'Division Dungeon'),el('p',null,pr.done>=5?'All 5 levels cleared · play again!':`Lessons + long division · level ${Math.min(5,pr.done+1)} of 5`)));
  tapify(b,()=>{Snd.init();Dungeon.open();});const q=bot.querySelector('.ow-quest');if(q)q.after(b);else bot.prepend(b);}catch(e){}};}
// level flow: lessons play before the level they teach (first time), then the usual level card; "Next level" works here too
{const _ip=Intro.play.bind(Intro);Intro.play=function(w,li,n){if(w&&w.id==='dungeon'){const V=state.worldIntro=state.worldIntro||{};V.dungeon=1;
    return DivLessons.playPending(li).then(()=>Intro.off||(typeof Brawl!=='undefined'&&Brawl.off)?null:Intro.level(w,li,n));}return _ip(w,li,n);};
 const _nl=nextLevelFor;nextLevelFor=function(sp){if(sp&&sp.world==='dungeon'){if(sp.level==null||sp.level>=4)return null;return {w:DIV_WORLD,li:sp.level+1};}return _nl(sp);};
 setTimeout(()=>{try{DivLessons.probe();}catch(e){}},3000);}
