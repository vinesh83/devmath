/* =========================================================
   Fact Dojo: drill the number facts until they are automatic
   Two dojos x 8 belts. A belt = a perfect AND fast test on 3 different days.
   ========================================================= */
NPCS.sensei={name:'Sensei Mako',title:'Master of the Fact Dojo',col:'#ff8c2a',voice:[294,'triangle'],
  pal:{O:'#d9622b',W:'#fff3e0',K:'#1d1f33',D:'#3a2430',R:'#e63946',G:'#f4f4f4',B:'#1d1f33'},blink:['K','#fff3e0'],
  rows:pad16(["..OO........OO",".OWWO......OWWO",".OOOOOOOOOOOOOO",".RRRRRRRRRRRRRR",".OOOOOOOOOOOOOO",".OWWOOOOOOOOWWO",".OWKKOOOOOOKKWO",".OWWWOOOOOOWWWO",
    "..OWWWWDDWWWWO","..OOWWWWWWWWOO","...OOOOOOOOOO","..GGGGGGGGGGGG",".GGGGGGBBGGGGGG",".GGGGGBBBBGGGGG",".GGGGGGBBGGGGGG"])};
ALLY_ORDER.splice(2,0,'sensei');
const SENSEI_TIPS=['Subtracting? Think addition: 12 − 5 → 5 + ? = 12.','Doubles are your friends: 7 + 7 = 14, so 7 + 8 = 15.','Eights: double, double, double. 8 × 6 → 12, 24, 48.','Nines: the digits add to 9. 9 × 7 = 63, and 6 + 3 = 9.','Make 10 first: 8 + 5 → 8 + 2 = 10, then 3 more = 13.','Dividing? Think multiply: 56 ÷ 8 → 8 × ? = 56.'];
INTROS.sensei=[['sensei','Welcome to the Fact Dojo, {name}. I am Sensei Mako.'],
  ['sensei','Heroes need fast facts. When 12 − 5 pops into your head in a blink, every battle gets easier.'],
  ['sensei','Each day you train, then you take a Belt Test. Get every fact right AND fast, and you earn a stripe.'],
  ['sensei','Three stripes on three different days earns the belt. White, Yellow, Orange, Green, Blue, Purple, Red... Black.'],
  ['sensei','Train here first each day. Then the kingdoms open. Ready? Bow!']];
const BELTS=[['White','#f4f4f4'],['Yellow','#ffd23f'],['Orange','#ff8c2a'],['Green','#3fbf5f'],['Blue','#3fa7ff'],['Purple','#9b6bff'],['Red','#e63946'],['Black','#1d1f33']];
function fct(op,a,b){
  if(op==='+')return{op,a,b,ans:a+b,key:`${Math.min(a,b)}+${Math.max(a,b)}`,swap:true};
  if(op==='−')return{op,a,b,ans:a-b,key:`${a}-${b}`};
  if(op==='×')return{op,a,b,ans:a*b,key:`${Math.min(a,b)}x${Math.max(a,b)}`,swap:true};
  if(op==='÷')return{op,a,b,ans:a/b,key:`${a}/${b}`};
  if(op==='+?')return{op,a,b,ans:b-a,key:`${a}+?=${b}`};   // a + ? = b
  if(op==='−?')return{op,a,b,ans:a-b,key:`${a}-?=${b}`};   // a − ? = b
}
const uniqF=l=>{const m=new Map();l.forEach(f=>m.set(f.key,f));return [...m.values()];};
const each=(a,b,fn)=>{const o=[];for(let i=a;i<=b;i++)o.push(...[].concat(fn(i)||[]));return o;};
const DOJOS={
  pm:{name:'Plus-Minus Dojo',short:'Plus-Minus',belts:[
    ['Adding to 10',()=>uniqF(each(1,9,a=>each(a,10,b=>a+b<=10?fct('+',a,b):null)))],
    ['Taking away within 10',()=>uniqF(each(3,10,c=>each(2,c-1,b=>fct('−',c,b))))],
    ['Doubles and near doubles',()=>uniqF([...[6,7,8,9,10].map(a=>fct('+',a,a)),...[6,7,8,9].map(a=>fct('+',a,a+1)),
      ...[6,7,8,9,10].map(a=>fct('−',a*2,a)),...[6,7,8,9].flatMap(a=>[fct('−',2*a+1,a),fct('−',2*a+1,a+1)])])],
    ['Adding past 10',()=>uniqF(each(1,10,a=>each(a,10,b=>a+b>10?fct('+',a,b):null)))],
    ['Subtracting from the teens: −2 to −6',()=>uniqF(each(2,6,b=>each(11,b+10,c=>fct('−',c,b))))],
    ['Subtracting from the teens: −7 to −9',()=>uniqF(each(7,9,b=>each(11,b+10,c=>fct('−',c,b))))],
    ['Missing numbers',()=>uniqF([...each(2,10,a=>each(11,a+10,c=>fct('+?',a,c))),...each(11,18,c=>each(c-9,9,r=>fct('−?',c,r)))]),30],
    ['Black Belt: everything',()=>uniqF([3,4,5,6].flatMap(i=>DOJOS.pm.belts[i][1]()).concat(DOJOS.pm.belts[1][1]().filter((_,i)=>i%3===0))),40]]},
  tm:{name:'Times Dojo',short:'Times',belts:[
    ['×2, ×5 and ×10',()=>uniqF([2,5,10].flatMap(a=>each(2,10,b=>fct('×',a,b))))],
    ['÷2, ÷5 and ÷10',()=>uniqF([2,5,10].flatMap(d=>each(2,10,q=>fct('÷',d*q,d))))],
    ['×3 and ×4',()=>uniqF([3,4].flatMap(a=>each(a,10,b=>fct('×',a,b))))],
    ['÷3 and ÷4',()=>uniqF([3,4].flatMap(d=>each(2,10,q=>fct('÷',d*q,d))))],
    ['×6, ×7, ×8, ×9',()=>uniqF([6,7,8,9].flatMap(b=>[3,4,6,7,8,9].filter(a=>a<=b).map(a=>fct('×',a,b))))],
    ['÷6, ÷7, ÷8, ÷9',()=>uniqF([6,7,8,9].flatMap(d=>each(2,10,q=>fct('÷',d*q,d))))],
    ['×11 and ×12',()=>uniqF([11,12].flatMap(a=>each(2,12,b=>fct('×',a,b))))],
    ['Black Belt: everything',()=>uniqF([0,1,2,3,4,5,6].flatMap(i=>DOJOS.tm.belts[i][1]())),40]]}};
const factExpr=(f,flip)=>{const a=flip&&f.swap?f.b:f.a,b=flip&&f.swap?f.a:f.b;
  if(f.op==='+?')return `${f.a} + ? = ${f.b}`;if(f.op==='−?')return `${f.a} − ? = ${f.b}`;return `${a} ${f.op} ${b}`;};
function factTip(f){const {op,a,b,ans}=f;
  if(op==='+'){const lo=Math.min(a,b),hi=Math.max(a,b);if(a===b)return `Double it: ${a} + ${a} = ${ans}.`;if(hi-lo===1)return `Near double: ${lo} + ${lo} = ${lo*2}, plus 1 more = ${ans}.`;
    if(ans>10&&hi<10)return `Make 10: ${hi} + ${10-hi} = 10, then ${lo-(10-hi)} more = ${ans}.`;return `Count on from ${hi}: ${hi} + ${lo} = ${ans}.`;}
  if(op==='−'){if(a>10&&a-b<10&&b<10){const d=a-10;return d<b?`Back to 10: ${a} − ${d} = 10, then − ${b-d} more = ${ans}. Or think: ${b} + ? = ${a}.`:`Think addition: ${b} + ? = ${a}. The answer is ${ans}.`;}
    return `Think addition: ${b} + ? = ${a}. The answer is ${ans}.`;}
  if(op==='×'){const hard=[9,8,7,6,4,3].find(x=>x===a||x===b);return FACT_TIPS[hard]||`Picture ${a} rows of ${b}: ${ans}.`;}
  if(op==='÷')return `Think multiply: ${b} × ? = ${a}. It's ${ans}, because ${b} × ${ans} = ${a}.`;
  if(op==='+?')return `Count up from ${a} to ${b}: that's ${ans}. Or ${b} − ${a} = ${ans}.`;
  if(op==='−?')return `What do you take from ${a} to land on ${b}? ${a} − ${b} = ${ans}.`;return '';}
const GRADES={diamond:['Diamond','#7df9ff',50],gold:['Gold','#ffc933',30],silver:['Silver','#d7deeb',20],bronze:['Bronze','#cd7f32',10],none:['Keep training','#8a94ad',5]};

const Dojo={
  st(){const d=state.dojo=state.dojo||{facts:{},belts:{},today:null,medals:{diamond:0,gold:0,silver:0,bronze:0},bolts:0,bestBolt:0,unlockDay:null};
    const day=dayStr();if(!d.today||d.today.day!==day)d.today={day,pm:{train:0,test:0,grade:null,review:0},tm:{train:0,test:0,grade:null,review:0}};return d;},
  belt(did,i){const b=this.st().belts[did+i]=this.st().belts[did+i]||{stripes:[],earned:null};return b;},
  cur(did){for(let i=0;i<8;i++)if(!this.belt(did,i).earned)return i;return 8;},
  black(did){return this.cur(did)>=8;},
  doneToday(did){const t=this.st().today[did];return this.black(did)?t.review>0:(t.train>0&&t.test>0);},
  gateOk(){const d=this.st();return d.unlockDay===dayStr()||(this.doneToday('pm')&&this.doneToday('tm'));},
  stripeToday(did,i){return this.belt(did,i).stripes.includes(dayStr());},
  beltBonus(){let n=0;['pm','tm'].forEach(d=>{for(let i=0;i<8;i++)if(this.belt(d,i).earned)n+=2;});return n;},
  set(did,i){const B=DOJOS[did].belts[i];return B[1]();},
  weight(f){const r=this.st().facts[f.key];if(!r)return 3;let w=r.last===0?6:r.last===1?3:1;if(r.n<3)w+=1.5;return w*(r.f>=4&&r.last===2?0.4:1);},
  pickWeighted(pool,n){const out=[],p=pool.slice();while(out.length<n&&p.length){const tot=p.reduce((s,f)=>s+this.weight(f),0);let x=Math.random()*tot,i=0;
      for(;i<p.length-1;i++){x-=this.weight(p[i]);if(x<=0)break;}out.push(p.splice(i,1)[0]);}return out;},
  trainSet(did,i){const cur=this.set(did,i),prev=[];for(let k=0;k<i;k++)prev.push(...this.set(did,k));
    const main=this.pickWeighted(cur,Math.min(10,cur.length)),rev=prev.length?this.pickWeighted(prev,2):this.pickWeighted(cur.filter(f=>!main.includes(f)),2);return shuffle(main.concat(rev));},
  testSet(did,i){const B=DOJOS[did].belts[i],all=B[1]();return B[2]?this.pickWeighted(all,B[2]):shuffle(all);},
  reviewSet(did){const all=[];for(let k=0;k<8;k++)all.push(...this.set(did,k));return this.pickWeighted(uniqF(all),20);},
  // ---------- screen
  open(){Talk.meet('sensei');this.render();show('scr-dojo');},
  render(){const S=$('#scr-dojo');S.innerHTML='';const d=this.st();
    const pend=['pm','tm'].filter(x=>!this.doneToday(x));
    const msg=d.unlockDay===dayStr()&&pend.length?'A grown-up unlocked the kingdoms today. Training still makes you stronger!':
      pend.length===2?'Train in both dojos today to open the kingdoms. Fast facts make every battle easier.':
      pend.length===1?`One more! Finish the ${DOJOS[pend[0]].short} Dojo to open the kingdoms.`:'Training done for today! The kingdoms are open. Come back tomorrow for more stripes.';
    const sv=el('canvas',{width:72,height:72});Talk.paint(sv,'sensei',{});
    S.append(el('header',{class:'lv-top'},el('button',{class:'icon-btn',type:'button',onclick:()=>{renderMap();show('scr-map');}},'◂ Map'),el('h2',null,'Fact Dojo'),
        el('span',{class:'chip',title:'Lightning answers'},'⚡ '+d.bolts),el('span',{class:'chip'},el('span',{class:'coin-ico'}),String(state.coins))),
      el('div',{class:'dj-sensei'},sv,el('p',null,msg)),
      el('div',{class:'dj-panels'},['pm','tm'].map(did=>this.panel(did))),
      el('div',{class:'dj-cab'},Object.entries(GRADES).filter(([k])=>k!=='none').map(([k,g])=>el('span',{class:'medal sm '+k,title:g[0]},el('i'),el('b',null,String(d.medals[k]||0)),el('small',null,g[0]))),
        el('span',{class:'dj-best'},'Best lightning streak: ⚡'+(d.bestBolt||0))));},
  panel(did){const D=DOJOS[did],ci=this.cur(did),t=this.st().today[did],black=ci>=8,i=Math.min(ci,7),B=BELTS[i];
    const ladder=el('div',{class:'dj-ladder'},BELTS.map((b,k)=>{const be=this.belt(did,k);return el('div',{class:'dj-belt'+(be.earned?' got':k===ci?' cur':' lock'),style:'--bc:'+b[1],title:b[0]+' Belt · '+D.belts[k][0]},
      el('i'),el('span',null,be.earned?'✓':k===ci?'★'.repeat(be.stripes.length)+'☆'.repeat(3-be.stripes.length):''));}));
    const be=this.belt(did,i),stripeNow=this.stripeToday(did,i),btns=[];
    if(black){btns.push(el('button',{class:'btn btn-green',type:'button',onclick:()=>this.start(did,'review')},t.review?'Review again':'Daily review ▸'));}
    else if(!t.train){btns.push(el('button',{class:'btn btn-green dj-go',type:'button',onclick:()=>this.start(did,'train')},'Start training ▸'));}
    else{if(!stripeNow)btns.push(el('button',{class:'btn btn-green'+(t.test?'':' dj-go'),type:'button',onclick:()=>this.start(did,'test',i)},t.test?'Retry the Belt Test':'Belt Test ▸'));
      if(stripeNow&&i<7)btns.push(el('button',{class:'btn btn-gold',type:'button',onclick:()=>this.start(did,'test',i+1)},`Challenge ${BELTS[i+1][0]} Belt`));
      btns.push(el('button',{class:'btn btn-dark',type:'button',onclick:()=>this.start(did,'train')},'Extra training'));}
    return el('section',{class:'dj-panel',style:'--bc:'+B[1]},el('h3',null,D.name),ladder,
      black?el('p',{class:'dj-cur'},el('b',null,'BLACK BELT!'),' Every fact mastered. A quick review each day keeps them sharp.'):
      el('p',{class:'dj-cur'},el('b',null,B[0]+' Belt'),' · '+D.belts[i][0],el('br'),el('small',null,`${be.stripes.length} of 3 stripes${stripeNow?' · stripe earned today!':''}`)),
      el('div',{class:'dj-today'},el('span',{class:t.train||black?'ok':''},(t.train||black?'✓ ':'○ ')+(black?'Review':'Training')),
        black?null:el('span',{class:t.test?'ok':''},(t.test?'✓ ':'○ ')+'Belt Test'+(t.grade?' · '+GRADES[t.grade][0]:''))),
      el('div',{class:'dj-btns'},btns));},
  // ---------- a drill run
  start(did,kind,bi){const ci=this.cur(did),i=bi!=null?bi:Math.min(ci,7);
    const facts=kind==='train'?this.trainSet(did,i):kind==='test'?this.testSet(did,i):this.reviewSet(did);
    const B=BELTS[i],title=kind==='review'?`${DOJOS[did].short} Dojo · Daily Review`:`${B[0]} Belt · ${kind==='train'?'Training':'Belt Test'}`;
    run={spec:{title,mode:'dojo',dojo:did,kind,belt:i,color:B[1]==='#f4f4f4'?'#8a94ad':B[1]},queue:facts.map(f=>({kind:'dfact',skill:'dojo',f,answer:f.ans})),idx:0,results:[],coins:0,twins:0,start:Date.now(),
      dj:{ok:0,fast:0,miss:[],bolt:0,boltBest:0}};
    $('#lv-title').textContent=title;show('scr-level');$('#scr-level').classList.add('dojo');
    Battle.setup({total:run.queue.length,mech:false,color:run.spec.color,drill:true});Music.play('battle');updateTop();
    if(kind==='test')Talk.pop('sensei',pick(['One try each. Breathe. You know these.','Fast and right. Show me!','No rush on the first one. Then find your rhythm.']),{});
    this.next();},
  next(){if(run.idx>=run.queue.length)return this.finish();const p=run.queue[run.idx],f=p.f,sp=run.spec,isTest=sp.kind==='test';updateTop();
    Pad.reset();ANS.firstInput=null;padOn(true);const card=$('#card');CARD_QUIET=true;card.innerHTML='';card.className='card dj-card';requestAnimationFrame(()=>requestAnimationFrame(()=>{CARD_QUIET=false;}));
    const flip=Math.random()<0.5,fld=Pad.make({allowDot:false,max:3,ph:'?'});const len=String(f.ans).length;
    card.append(el('div',{class:'dj-top'},el('span',{class:'dj-tag',style:'--bc:'+BELTS[sp.belt][1]},sp.kind==='test'?'BELT TEST':sp.kind==='review'?'REVIEW':'TRAINING'),
        el('span',null,`${run.idx+1} / ${run.queue.length}`),el('span',{class:'dj-bolt'},'⚡ '+run.dj.bolt)),
      el('div',{class:'dj-expr'},el('span',null,(f.op==='+?'||f.op==='−?'?factExpr(f).replace('?','▢'):factExpr(f,flip)+' =')),fld.el));
    const ink=el('div',{class:'dj-ink'});card.append(ink);if((typeof InkBox!=='undefined'))InkBox.mount(ink,{big:true,allowDot:false});else ink.remove();
    Pad.focus(fld);say(isTest?'One try. Fast and right!':'Type it or write it.','');
    const t0=Date.now();let done=false,tm=null,inkWrong=0;
    const R=run;const go=()=>{if(done||run!==R||$('#scr-level').hidden)return;const v=Pad.val(fld);if(v==null)return;const src=fld.src||'key';
      const ms=(fld.lastAt||Date.now())-t0,thr=3000+600*(len-1)+(src==='ink'?900:0),ok=v===f.ans,fast=ok&&ms<=thr;
      if(!ok&&src==='ink'&&(fld.inkP||1)<0.8&&inkWrong<1){inkWrong++;Pad.set(fld,'');fld.src=null;if((typeof InkBox!=='undefined'))InkBox.clear();say(`I read ${v}. Did I get that wrong? Write it again, or tap the keys.`,'info');return;}
      done=true;clearTimeout(tm);
      const rec=this.st().facts[f.key]=this.st().facts[f.key]||{n:0,ok:0,f:0,last:null,ms:0};rec.n++;if(ok)rec.ok++;if(fast)rec.f++;rec.last=ok?(fast?2:1):0;rec.ms=ms;
      Data.logAttempt({ts:new Date().toISOString(),day:dayStr(),hour:new Date().getHours(),skill:'dojo:'+sp.dojo,kind:'dojo',mode:sp.kind,diff:sp.belt,variant:src,q:factExpr(f,flip),correct:f.ans,
        firstTry:ok,solved:ok,ms,errors:ok?[]:[{a:v,tags:[]}],fast,id:uid()});
      run.results[run.idx]={skill:'dojo',firstTry:ok,solved:ok,fast,ms};
      if(ok){Pad.right(fld);Pad.lock(fld);run.dj.ok++;if(fast){run.dj.fast++;run.dj.bolt++;this.st().bolts++;run.dj.boltBest=Math.max(run.dj.boltBest,run.dj.bolt);}else run.dj.bolt=0;
        Battle.event(fast?'quick':'hit');stamp(fast?'quick':'right',fast?null:'Faster next time!',{small:true,ms:fast?600:800});
        setTimeout(()=>{if(run&&run.queue[run.idx]===p){run.idx++;this.next();}},fast?380:650);return;}
      Pad.wrong(fld);Pad.set(fld,f.ans);Pad.lock(fld);run.dj.bolt=0;run.dj.miss.push(f);Battle.event('hurt',{w:0.3});stamp('wrong',null,{small:true,ms:700});
      const fix=el('div',{class:'dj-miss'},el('div',{class:'dj-fix'},(f.op==='+?'||f.op==='−?'?factExpr(f).replace('?',String(f.ans)):`${factExpr(f,flip)} = ${f.ans}`)),el('div',{class:'dj-tip'},factTip(f)));
      card.append(fix);
      if(isTest){setTimeout(()=>{if(run&&run.queue[run.idx]===p){run.idx++;this.next();}},2200);setActions([{label:'Next ▸',cls:'btn-green',primary:true,onClick:()=>{if(run.queue[run.idx]===p){run.idx++;this.next();}}}]);return;}
      // training: copy it once, then it comes back in a few
      if(run.queue.filter(q=>q.f.key===f.key).length<3){run.queue.splice(Math.min(run.queue.length,run.idx+3),0,{kind:'dfact',skill:'dojo',f,answer:f.ans,again:true});Battle.setTotal(run.queue.length);}
      const cp=Pad.make({allowDot:false,max:3,ph:'?'});fix.append(el('div',{class:'dj-copy'},'Now you: ',el('span',null,factExpr(f,flip)+' ='),cp.el));Pad.focus(cp);
      if((typeof InkBox!=='undefined'))InkBox.clear();say('Copy it to lock it in.','info');Talk.pop('sensei',factTip(f),{log:'dojo:'+f.key});
      cp.onChange=()=>{if(Pad.val(cp)===f.ans){Pad.right(cp);Pad.lock(cp);Snd.coin();setTimeout(()=>{if(run&&run.queue[run.idx]===p){run.idx++;this.next();}},450);}
        else if(cp.val.length>=len){Pad.wrong(cp);setTimeout(()=>{Pad.set(cp,'');if((typeof InkBox!=='undefined'))InkBox.clear();},350);}};
      setActions([{label:'Skip ▸',cls:'btn-dark',onClick:()=>{if(run&&run.queue[run.idx]===p){run.idx++;this.next();}}}]);};
    fld.onChange=()=>{clearTimeout(tm);if(fld.val.length>=len)tm=setTimeout(go,fld.src==='ink'?250:140);};
    setActions([[{label:'Show me',cls:'btn-dark',onClick:()=>{if(done)return;fld.val='-1';fld.src='key';go();}},{label:'Enter',cls:'btn-green',primary:true,onClick:go}]]);},
  finish(){const sp=run.spec,dj=run.dj,N=run.queue.length,did=sp.dojo,d=this.st(),t=d.today[did];
    const firsts=run.queue.filter(q=>!q.again).length,rs=run.results.filter((r,i)=>r&&!run.queue[i].again);const C=rs.filter(r=>r.firstTry).length,F=rs.filter(r=>r.fast).length;
    d.bestBolt=Math.max(d.bestBolt||0,dj.boltBest);let grade=null,stripe=false,belt=false;
    if(sp.kind==='train'){t.train++;}else if(sp.kind==='review'){t.review++;}
    else{t.test++;grade=C===firsts&&F===firsts?'diamond':C===firsts?'gold':C/firsts>=0.9?'silver':C/firsts>=0.8?'bronze':'none';
      if(!t.grade||Object.keys(GRADES).indexOf(grade)<Object.keys(GRADES).indexOf(t.grade))t.grade=grade;if(grade!=='none')d.medals[grade]=(d.medals[grade]||0)+1;
      const be=this.belt(did,sp.belt);if(grade==='diamond'&&!be.stripes.includes(dayStr())&&!be.earned){be.stripes.push(dayStr());stripe=true;if(be.stripes.length>=3){be.earned=new Date().toISOString();belt=true;}}}
    const coins=sp.kind==='test'?GRADES[grade][2]+(stripe?25:0)+(belt?100:0):10+dj.fast;state.coins+=coins;run.coins+=coins;
    const summary={title:sp.title,mode:'dojo',dojo:did,kind:sp.kind,belt:sp.belt,n:firsts,firstTry:C,fast:F,grade,stripe,beltEarned:belt,coins,ms:Date.now()-run.start,
      miss:[...new Set(dj.miss.map(f=>f.key))]};
    SESSION.runs.push(summary);saveState();Data.saveSession();Local.addSession(SESSION);if(typeof Sync!=='undefined')Sync.kick();
    const watch=[...new Map(dj.miss.map(f=>[f.key,f])).values()].slice(0,6).map(f=>(f.op==='+?'||f.op==='−?'?factExpr(f).replace('?',String(f.ans)):`${factExpr(f)} = ${f.ans}`));
    const after=()=>{overlay(null);$('#scr-level').classList.remove('dojo');this.render();show('scr-dojo');
      if(this.gateOk()&&!d.gateCheered){d.gateCheered=dayStr();saveState();Talk.say([['sensei','Training complete for today. The kingdoms are open, {name}. Go get Glitch!']]);}};
    const m=el('div',{class:'modal dj-result'});
    if(sp.kind==='test'){const G=GRADES[grade];m.append(el('div',{class:'medal big '+grade},el('i'),el('b',null,G[0])),
        el('h2',null,grade==='diamond'?'DIAMOND! Perfect and lightning fast!':grade==='gold'?'GOLD! Every fact right!':grade==='none'?'Good effort. Keep training!':`${G[0]}!`),
        el('p',null,`${C}/${firsts} right · ⚡ ${F} lightning-fast`),
        stripe?el('p',{class:'dj-stripe'},belt?`THIRD STRIPE! ${BELTS[sp.belt][0]} Belt earned!`:`Stripe earned! ${this.belt(did,sp.belt).stripes.length} of 3 for ${BELTS[sp.belt][0]} Belt.`):
          grade==='gold'?el('p',null,'All correct! For a stripe, every answer must be lightning-fast too.'):grade!=='diamond'?el('p',null,'A stripe needs every fact right and fast. You can retry the test anytime.'):
          el('p',null,'You already have today’s stripe here. Come back tomorrow for the next one.'));}
    else m.append(el('h2',null,sp.kind==='review'?'Review complete!':'Training complete!'),el('p',null,`${C}/${firsts} right on the first try · ⚡ ${F} lightning-fast`));
    if(watch.length)m.append(el('p',{class:'dj-watch'},'Facts to watch: ',el('b',null,watch.join(' · '))));
    m.append(el('p',{class:'tiny-ok'},`+${coins} coins`));
    const nextBtn=sp.kind==='train'&&!this.stripeToday(did,sp.belt)&&!d.today[did].test?el('button',{class:'btn btn-green',type:'button',onclick:()=>{overlay(null);this.start(did,'test',sp.belt);}},'Belt Test ▸'):null;
    m.append(el('div',{class:'btns'},el('button',{class:'btn btn-dark',type:'button',onclick:after},'Dojo'),nextBtn));
    (async()=>{await Battle.ko();if(belt){await this.ceremony(did,sp.belt);await openChest('great');}else if(stripe){Snd.reveal('epic');}else Snd.fanfare();overlay(m);})();},
  ceremony(did,i){const B=BELTS[i],look=heroLook();Snd.fanfare();setTimeout(()=>Snd.reveal('legendary'),900);
    const conf=[];return Cine.play(4.6,(c,W,H,t,dt)=>{c.fillStyle='#2a1a12';c.fillRect(0,0,W,H);c.fillStyle='#4a2e1d';for(let x=0;x<W;x+=60)c.fillRect(x,H*0.72,3,H*0.28);
      c.fillStyle='#3a2416';c.fillRect(0,H*0.72,W,6);const g=c.createRadialGradient(W/2,H*0.55,0,W/2,H*0.55,H*0.6);g.addColorStop(0,B[1]+'66');g.addColorStop(1,'#0000');c.fillStyle=g;c.fillRect(0,0,W,H);
      const hs=Math.min(W,H)/28,hx=W/2-6*hs,hy=H*0.72-14*hs;drawHero(c,hx,hy,hs,look,'stand',t);
      const k=Math.min(1,Math.max(0,(t-0.6)/0.8)),bw=10*hs*k;c.fillStyle=B[1];c.fillRect(W/2-bw/2,hy+9*hs,bw,hs*1.2);c.strokeStyle='#0006';c.lineWidth=2;c.strokeRect(W/2-bw/2,hy+9*hs,bw,hs*1.2);
      if(k>=1){c.fillStyle=B[1];c.fillRect(W/2-hs*0.8,hy+9*hs,hs*1.6,hs*2.6);c.fillRect(W/2+hs*0.6,hy+10*hs,hs*0.9,hs*2.8);}
      if(t>1.3){Cine.title(c,W,H,t-1.3,`${B[0].toUpperCase()} BELT!`,B[1]==='#1d1f33'?'#ffffff':B[1],DOJOS[did].name+' · '+DOJOS[did].belts[i][0]);
        if(conf.length<160&&!RM)for(let n=0;n<4;n++)conf.push({x:Math.random()*W,y:-10,vy:80+Math.random()*120,vx:(Math.random()-0.5)*60,col:pick([B[1],'#ffe066','#ffffff','#ff4d6d','#5ef2ff'])});}
      for(const q of conf){q.y+=q.vy*dt;q.x+=q.vx*dt;c.fillStyle=q.col;c.fillRect(q.x,q.y,6,4);}
      if(t>2.6)Cine.cap(c,W,H,t-2.6,'+2 mech power · +100 coins');},{skip:true});},
  // ---------- the lock on the kingdoms
  blocked(){Snd.init();const go=()=>this.open();
    if(!this.met)this.met=true;Talk.say([['sensei',pick(['Not so fast, {name}! Train in the Fact Dojo first. Then the kingdoms open.','The kingdoms can wait. Your facts cannot! Today’s training first.','A true hero warms up first. Dojo, then battle!'])]]).then(go);}
};
// belts power up the mech
{const _mp=mechPower;mechPower=function(m){return _mp(m)+Dojo.beltBonus();};}
function dojoReport(){if(!state.dojo)return null;const nice=k=>k.replace('x',' × ').replace('/',' ÷ ').replace(/^(\d+)-(\d+)$/,'$1 − $2').replace(/^(\d+)\+(\d+)$/,'$1 + $2');
  const lines=['pm','tm'].map(did=>{const ci=Dojo.cur(did),t=Dojo.st().today[did];return el('div',null,el('b',null,DOJOS[did].name+': '),ci>=8?'Black Belt':`${BELTS[ci][0]} Belt (${Dojo.belt(did,ci).stripes.length}/3 stripes)`,
    ` · today: ${Dojo.doneToday(did)?'done':'not yet'}${t.grade?' · best test '+GRADES[t.grade][0]:''}`);});
  const weak=Object.entries(state.dojo.facts).filter(([k,r])=>r.n>=2&&(r.ok/r.n<0.8||r.last===0)).sort((a,b)=>a[1].ok/a[1].n-b[1].ok/b[1].n).slice(0,10).map(([k])=>nice(k));
  return el('div',{class:'rep-dojo'},el('p',null,el('b',null,'Fact Dojo')),lines,weak.length?el('div',null,'Shakiest facts: '+weak.join(', ')):null,
    Dojo.gateOk()?null:el('button',{class:'btn btn-dark',type:'button',onclick:()=>{Dojo.st().unlockDay=dayStr();saveState();overlay(null);renderMap();}},'Grown-up: unlock the kingdoms for today'));}
