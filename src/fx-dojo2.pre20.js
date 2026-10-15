/* =========================================================
   Fact Dojo v2 — built from the research:
   teach a trick first, then short rounds of mostly-known facts, a few new facts a day,
   expanding re-asks, no penalties, speed judged on his usual pace, facts "owned" fact by fact.
   ========================================================= */
NPCS.sensei={name:'Sensei Mako',title:'Master of the Fact Dojo',col:'#ff8c2a',voice:[294,'triangle'],
  pal:{O:'#d9622b',W:'#fff3e0',K:'#1d1f33',D:'#3a2430',R:'#e63946',G:'#f4f4f4',B:'#1d1f33'},blink:['K','#fff3e0'],
  rows:pad16(["..OO........OO",".OWWO......OWWO",".OOOOOOOOOOOOOO",".RRRRRRRRRRRRRR",".OOOOOOOOOOOOOO",".OWWOOOOOOOOWWO",".OWKKOOOOOOKKWO",".OWWWOOOOOOWWWO",
    "..OWWWWDDWWWWO","..OOWWWWWWWWOO","...OOOOOOOOOO","..GGGGGGGGGGGG",".GGGGGGBBGGGGGG",".GGGGGBBBBGGGGG",".GGGGGGBBGGGGGG"])};
ALLY_ORDER.splice(2,0,'sensei');
const SENSEI_TIPS=['Subtracting? Think addition: 12 − 5 → 5 + ? = 12.','Doubles are your friends: 7 + 7 = 14, so 7 + 8 = 15.','Big times facts are two small ones: 7 × 8 = 5 × 8 + 2 × 8.',
  'Nines: ten groups, take one away. 9 × 6 = 60 − 6.','Make 10 first: 8 + 5 → 8 + 2 = 10, then 3 more = 13.','Dividing? Think multiply: 56 ÷ 8 → 8 × ? = 56.'];
INTROS.sensei=[['sensei','Welcome to the Fact Dojo, {name}. I am Sensei Mako.'],
  ['sensei','Heroes need fast facts. When 12 − 5 pops into your head in a blink, every battle gets easier.'],
  ['sensei','Each day: one short round in each dojo. Most facts you already know. A few new ones, and I show you the trick first.'],
  ['sensei','Get a fact right and quick on three different days, and it is yours forever. Own every fact in a belt to earn it.'],
  ['sensei','Mistakes cost nothing here. We just build the fact and try again. Ready? Bow!']];
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
const HARD_PAIRS=[[5,7],[6,7],[6,8],[7,8],[7,9],[8,9],[4,8],[5,8],[5,9],[6,9],[3,9],[4,7]];
const DOJOS={
  pm:{name:'Plus-Minus Dojo',short:'Plus-Minus',belts:[
    ['Adding to 10',()=>uniqF(each(1,9,a=>each(a,10,b=>a+b<=10?fct('+',a,b):null)))],
    ['Taking away within 10',()=>uniqF(each(3,10,c=>each(2,c-1,b=>fct('−',c,b))))],
    ['Doubles and near doubles',()=>uniqF([...[6,7,8,9,10].map(a=>fct('+',a,a)),...[6,7,8,9].map(a=>fct('+',a,a+1)),
      ...[6,7,8,9,10].map(a=>fct('−',a*2,a)),...[6,7,8,9].flatMap(a=>[fct('−',2*a+1,a),fct('−',2*a+1,a+1)])])],
    ['Make 10: adding 8 and 9',()=>uniqF([...each(2,9,a=>fct('+',a,9)),...each(3,8,a=>fct('+',a,8))])],
    ['Adding past 10: the rest',()=>uniqF([...[[4,7],[5,6],[5,7],[6,6],[6,7],[7,7]].map(([a,b])=>fct('+',a,b)),...each(1,10,a=>fct('+',a,10))])],
    ['Teens minus 2 to 6',()=>uniqF(each(2,6,b=>each(11,b+10,c=>fct('−',c,b))))],
    ['Teens minus 7, 8 and 9',()=>uniqF(each(7,9,b=>each(11,b+10,c=>fct('−',c,b))))],
    ['Fact families',()=>uniqF(HARD_PAIRS.flatMap(([a,b])=>[fct('+?',a,a+b),fct('−?',a+b,a)]))]]},
  tm:{name:'Times Dojo',short:'Times',belts:[
    ['×2, ×5 and ×10',()=>uniqF([2,5,10].flatMap(a=>each(2,10,b=>fct('×',a,b))))],
    ['×3 and ×4',()=>uniqF([3,4].flatMap(a=>each(a,10,b=>fct('×',a,b))))],
    ['×9 and squares',()=>uniqF([...each(2,10,b=>fct('×',9,b)),fct('×',6,6),fct('×',7,7),fct('×',8,8)])],
    ['÷2, ÷5 and ÷10',()=>uniqF([2,5,10].flatMap(d=>each(2,10,q=>fct('÷',d*q,d))))],
    ['The tough three: 6×7, 6×8, 7×8',()=>uniqF([[6,7],[6,8],[7,8]].flatMap(([a,b])=>[fct('×',a,b),fct('÷',a*b,a),fct('÷',a*b,b)]))],
    ['÷3, ÷4 and ÷9',()=>uniqF([3,4,9].flatMap(d=>each(2,10,q=>fct('÷',d*q,d))))],
    ['÷6, ÷7 and ÷8',()=>uniqF([6,7,8].flatMap(d=>each(2,10,q=>fct('÷',d*q,d))))],
    ['Bonus: ×11 and ×12',()=>uniqF([11,12].flatMap(a=>each(2,12,b=>fct('×',a,b))))]]}};
const factExpr=(f,flip)=>{const a=flip&&f.swap?f.b:f.a,b=flip&&f.swap?f.a:f.b;
  if(f.op==='+?')return `${f.a} + ? = ${f.b}`;if(f.op==='−?')return `${f.a} − ? = ${f.b}`;return `${a} ${f.op} ${b}`;};
const factFull=f=>(f.op==='+?'||f.op==='−?')?factExpr(f).replace('?',String(f.ans)):`${factExpr(f)} = ${f.ans}`;
const splitOf=n=>n===9?[10,-1]:n===11?[10,1]:n===12?[10,2]:n>=6?[5,n-5]:n===4?[2,2]:n===3?[2,1]:null;
function factTip(f){const {op,a,b,ans}=f;
  if(op==='+'){const lo=Math.min(a,b),hi=Math.max(a,b);if(a===b)return `Double it: ${a} + ${a} = ${ans}.`;if(hi-lo===1)return `Near double: ${lo} + ${lo} = ${lo*2}, plus 1 more = ${ans}.`;
    if(ans>10&&hi<10)return `Make 10: ${hi} + ${10-hi} = 10, then ${lo-(10-hi)} more = ${ans}.`;return `Count on from ${hi}: ${hi} + ${lo} = ${ans}.`;}
  if(op==='−'){if(a>10&&b<10&&a-b<10)return `Think addition: ${b} + ? = ${a}. Jump from ${b} to 10 (that's ${10-b}), then to ${a} (${a-10} more). ${10-b} + ${a-10} = ${ans}.`;
    return `Think addition: ${b} + ? = ${a}. The answer is ${ans}.`;}
  if(op==='×'){const big=Math.max(a,b),small=Math.min(a,b),s=splitOf(big)||splitOf(small);const n=splitOf(big)?big:small,o=splitOf(big)?small:big;
    if(s&&s[1]<0)return `Ten groups, take one away: 10 × ${o} = ${10*o}, minus ${o} = ${ans}.`;
    if(s)return `Split it: ${s[0]} × ${o} = ${s[0]*o}, plus ${s[1]} × ${o} = ${s[1]*o}. Together: ${ans}.`;return `Picture ${a} rows of ${b}: ${ans}.`;}
  if(op==='÷')return `Think multiply: ${b} × ? = ${a}. It's ${ans}, because ${b} × ${ans} = ${a}.`;
  if(op==='+?')return `Fact family: ${f.a} + ${ans} = ${f.b}, so ${f.b} − ${f.a} = ${ans}.`;
  if(op==='−?')return `Fact family: ${f.b} + ${ans} = ${f.a}, so ${f.a} − ${ans} = ${f.b}.`;return '';}
// a picture of the trick: area split for ×/÷, ten-frame for +, jumps for teen −
function factVisual(f){const NS='http://www.w3.org/2000/svg';const svg=(w,h)=>{const s=document.createElementNS(NS,'svg');s.setAttribute('viewBox',`0 0 ${w} ${h}`);s.setAttribute('class','dj-vis');return s;};
  const add=(s,tag,at,txt)=>{const e=document.createElementNS(NS,tag);for(const k in at)e.setAttribute(k,at[k]);if(txt!=null)e.textContent=txt;s.append(e);return e;};
  if(f.op==='×'||f.op==='÷'){const rows=f.op==='×'?(splitOf(Math.max(f.a,f.b))?Math.max(f.a,f.b):Math.min(f.a,f.b)):f.b,cols=f.op==='×'?f.a*f.b/rows:f.ans;
    const sp=splitOf(rows),cs=Math.min(18,220/Math.max(cols,rows)),W=cols*cs+150,H=Math.max(rows,sp&&sp[1]<0?10:rows)*cs+10;const s=svg(W,H);
    const r1=sp?(sp[1]<0?10:sp[0]):rows;
    for(let r=0;r<(sp&&sp[1]<0?10:rows);r++)for(let c=0;c<cols;c++){const off=sp&&sp[1]<0&&r>=9;add(s,'rect',{x:5+c*cs,y:5+r*cs,width:cs-2,height:cs-2,rx:2,fill:off?'#e8e2cf':r<r1?'#5ab0ff':'#ffb03a',opacity:off?0.6:1});}
    const lx=cols*cs+16;if(sp){if(sp[1]<0){add(s,'text',{x:lx,y:5+5*cs,class:'t'},`10 × ${cols} = ${10*cols}`);add(s,'text',{x:lx,y:5+9.7*cs,class:'t2'},`− ${cols} = ${rows*cols}`);}
      else{add(s,'text',{x:lx,y:5+r1*cs/2+5,class:'t'},`${sp[0]} × ${cols} = ${sp[0]*cols}`);add(s,'text',{x:lx,y:5+(r1+sp[1]/2)*cs+5,class:'t2'},`${sp[1]} × ${cols} = ${sp[1]*cols}`);}}
    else add(s,'text',{x:lx,y:5+rows*cs/2+5,class:'t'},`${rows} × ${cols} = ${rows*cols}`);return s;}
  if(f.op==='+'&&f.ans>10&&Math.max(f.a,f.b)<10){const hi=Math.max(f.a,f.b),lo=Math.min(f.a,f.b),mv=10-hi,cs=22,s=svg(10*cs+10,2*cs+40);
    for(let r=0;r<2;r++)for(let c=0;c<10;c++){const i=r*10+c;add(s,'rect',{x:5+c*cs,y:5+r*cs,width:cs-3,height:cs-3,rx:3,fill:'#fff',stroke:'#c9c3b0'});
      if(i<hi)add(s,'circle',{cx:5+c*cs+cs/2-1.5,cy:5+r*cs+cs/2-1.5,r:cs/2-5,fill:'#5ab0ff'});else if(i<hi+lo)add(s,'circle',{cx:5+c*cs+cs/2-1.5,cy:5+r*cs+cs/2-1.5,r:cs/2-5,fill:i<10?'#ff7b1c':'#ffb03a'});}
    add(s,'text',{x:5,y:2*cs+30,class:'t'},`${hi} + ${mv} = 10, then ${lo-mv} more → ${f.ans}`);return s;}
  if(f.op==='−'&&f.a>10&&f.b<10&&f.ans<10){const lo=f.b,hi=f.a,x=v=>10+(v-lo)*Math.min(34,300/(hi-lo)),s=svg(x(hi)+20,78);
    add(s,'line',{x1:x(lo)-6,y1:56,x2:x(hi)+6,y2:56,stroke:'#1d1f33','stroke-width':2});
    for(let v=lo;v<=hi;v++){add(s,'line',{x1:x(v),y1:50,x2:x(v),y2:62,stroke:'#1d1f33','stroke-width':v===10||v===lo||v===hi?3:1});if(v===lo||v===10||v===hi)add(s,'text',{x:x(v),y:76,class:'n'},String(v));}
    add(s,'path',{d:`M${x(lo)} 50 Q ${(x(lo)+x(10))/2} 8 ${x(10)} 50`,fill:'none',stroke:'#5ab0ff','stroke-width':3});add(s,'text',{x:(x(lo)+x(10))/2,y:22,class:'n b'},'+'+(10-lo));
    if(hi>10){add(s,'path',{d:`M${x(10)} 50 Q ${(x(10)+x(hi))/2} 14 ${x(hi)} 50`,fill:'none',stroke:'#ff7b1c','stroke-width':3});add(s,'text',{x:(x(10)+x(hi))/2,y:26,class:'n o'},'+'+(hi-10));}
    return s;}
  return null;}

/* ---------- the engine */
const DJ={ROUND:20,KMIN:1,KMAX:4,K0:3,THR:2600,THR_INK:3000};
const med=a=>{if(!a.length)return Infinity;const s=a.slice().sort((x,y)=>x-y);return s[s.length>>1];};
const Dojo={
  st(){const d=state.dojo=state.dojo||{};if(d.v!==2){const old=d.facts||{};d.v=2;d.facts={};d.belts=d.belts||{};d.medals=d.medals||{diamond:0,gold:0,silver:0,bronze:0};d.bolts=d.bolts||0;d.bestBolt=d.bestBolt||0;
      for(const k in old){const r=old[k];if(r&&r.n)d.facts[k]={n:r.n||0,ok:r.ok||0,intro:true,days:{},credits:0,owned:false,teach:!r.ok||r.last===0,taught:null,rev:0,last:null};}
      const ot=d.today;if(ot&&ot.day===dayStr()&&ot.pm&&ot.pm.rounds==null)d.today={day:ot.day,pm:{rounds:(ot.pm.train||ot.pm.test)?1:0,taught:0,tk:0,tok:0},tm:{rounds:(ot.tm&&(ot.tm.train||ot.tm.test))?1:0,taught:0,tk:0,tok:0}};
      d.hist=d.hist||[];d.k={pm:DJ.K0,tm:DJ.K0};d.best={pm:0,tm:0};d.sprint={pm:0,tm:0};d.mood=d.mood||{};}
    const day=dayStr();if(!d.today||d.today.day!==day||!d.today.pm||d.today.pm.rounds==null)d.today={day,pm:{rounds:0,taught:0,tk:0,tok:0},tm:{rounds:0,taught:0,tk:0,tok:0}};return d;},
  rec(f){const F=this.st().facts;return F[f.key]=F[f.key]||{n:0,ok:0,intro:false,days:{},credits:0,owned:false,teach:false,taught:null,rev:0,last:null,easy:false};},
  facts(did){const all=[];DOJOS[did].belts.forEach((b,i)=>b[1]().forEach(f=>all.push(Object.assign({},f,{belt:i}))));const m=new Map();all.forEach(f=>{if(!m.has(f.key))m.set(f.key,f);});return [...m.values()];},
  belt(did,i){const b=this.st().belts[did+i]=this.st().belts[did+i]||{earned:null};return b;},
  beltFacts(did,i){return DOJOS[did].belts[i][1]();},
  ownedIn(did,i){const fs=this.beltFacts(did,i);return {n:fs.filter(f=>(this.st().facts[f.key]||{}).owned).length,t:fs.length};},
  cur(did){for(let i=0;i<8;i++)if(!this.belt(did,i).earned)return i;return 8;},
  black(did){return this.cur(did)>=8;},
  doneToday(did){return this.st().today[did].rounds>0;},
  gateOk(){const d=this.st();return d.unlockDay===dayStr()||(this.doneToday('pm')&&this.doneToday('tm'));},
  beltBonus(){let n=0;['pm','tm'].forEach(d=>{for(let i=0;i<8;i++)if(this.belt(d,i).earned)n+=2;});return n;},
  thr(src){return src==='ink'?DJ.THR_INK:DJ.THR;},
  // record one answer; returns true if this answer earned "day credit"
  log(f,ok,lat,src,kind){const r=this.rec(f),day=dayStr();r.n++;if(ok)r.ok++;r.last=day;const D=r.days[day]=r.days[day]||{first:null,lat:[]};
    if(!D.src)D.src=src;if(D.first==null&&kind!=='teach'&&kind!=='again')D.first=ok;if(ok&&kind!=='teach')D.lat.push(lat);
    if(!r.intro){r.intro=true;if(ok&&lat<=this.thr(src))r.easy=true;else if(!ok)r.teach=true;}
    if(kind==='review'&&!ok){r.owned=false;r.rusty=true;r.credits=Math.max(0,r.credits-1);r.teach=true;}
    if(kind==='learn'&&!ok&&r.taught!==day)r.teach=true;
    this.credit(f);return r;},
  credit(f){const r=this.rec(f);let c=0;for(const k in r.days){const D=r.days[k];if(D.first&&D.lat.length&&med(D.lat)<=(D.src==='ink'?DJ.THR_INK:DJ.THR))c++;}
    r.credits=c;const need=r.easy?2:3;if(!r.owned&&c>=need){r.owned=true;r.rusty=false;r.ownedAt=dayStr();r.rev=0;return 'owned';}return null;},
  daysSince(d){if(!d)return 99;return Math.round((new Date(dayStr())-new Date(d))/864e5);},
  // build today's round: mostly known facts, K new facts taught first, expanding re-asks added live
  buildRound(did,o){o=o||{};const d=this.st(),t=d.today[did],all=this.facts(did),ci=Math.min(this.cur(did),7),day=dayStr();
    const R=f=>d.facts[f.key];const inReach=f=>f.belt<=ci+1;
    const K=Math.max(0,(d.k[did]||DJ.K0)-t.taught);
    const teach=all.filter(f=>R(f)&&R(f).teach&&R(f).taught!==day).sort((a,b)=>a.belt-b.belt).slice(0,o.review?0:K);
    const used=new Set(teach.map(f=>f.key));
    const learning=shuffle(all.filter(f=>R(f)&&R(f).intro&&!R(f).owned&&!used.has(f.key)&&!(R(f).days[day]&&R(f).days[day].first!=null)))
      .sort((a,b)=>(R(a).credits-R(b).credits)||(a.belt-b.belt));
    const due=shuffle(all.filter(f=>R(f)&&R(f).owned&&this.daysSince(R(f).last)>=[2,5,10,20][Math.min(R(f).rev,3)]));
    const probes=all.filter(f=>!R(f)&&inReach(f)).sort((a,b)=>a.belt-b.belt);
    const baseN=DJ.ROUND-teach.length*3;const base=[];
    const take=(list,n,kind)=>{for(const f of list){if(base.length>=baseN||n<=0)break;if(used.has(f.key))continue;used.add(f.key);base.push({f,kind});n--;}};
    if(o.review){take(due,baseN,'review');take(shuffle(all.filter(f=>R(f)&&R(f).owned)),baseN,'review');take(learning,baseN,'learn');}
    else{take(learning,Math.ceil(baseN*0.55),'learn');take(due,Math.ceil(baseN*0.25),'review');take(probes.slice(0,learning.length>30?3:40),baseN,'probe');take(learning,baseN,'learn');take(due,baseN,'review');
      take(shuffle(all.filter(f=>R(f)&&R(f).owned)),baseN,'review');}
    const items=shuffle(base);teach.forEach((f,i)=>items.splice(Math.min(items.length,1+i*5),0,{f,kind:'teach'}));
    return items;},
  // ---------- screen
  open(){Talk.meet('sensei');this.render();show('scr-dojo');},
  render(){const S=$('#scr-dojo');S.innerHTML='';const d=this.st();
    const pend=['pm','tm'].filter(x=>!this.doneToday(x));
    const msg=d.unlockDay===dayStr()&&pend.length?'A grown-up unlocked the kingdoms today. A round still makes you stronger!':
      pend.length===2?'One short round in each dojo opens the kingdoms. About 3 minutes each.':
      pend.length===1?`One more round! Finish the ${DOJOS[pend[0]].short} Dojo to open the kingdoms.`:'Training done for today! The kingdoms are open. Come back tomorrow to own more facts.';
    const sv=el('canvas',{width:72,height:72});Talk.paint(sv,'sensei',{});
    S.append(el('header',{class:'lv-top'},el('button',{class:'icon-btn',type:'button',onclick:()=>{renderMap();show('scr-map');}},'◂ Map'),el('h2',null,'Fact Dojo'),
        el('span',{class:'chip',title:'Lightning answers'},'⚡ '+d.bolts),el('span',{class:'chip'},el('span',{class:'coin-ico'}),String(state.coins))),
      el('div',{class:'dj-sensei'},sv,el('p',null,msg)),
      el('div',{class:'dj-panels'},['pm','tm'].map(did=>this.panel(did))));},
  panel(did){const D=DOJOS[did],ci=this.cur(did),t=this.st().today[did],black=ci>=8,i=Math.min(ci,7),B=BELTS[i];
    const ladder=el('div',{class:'dj-ladder'},BELTS.map((b,k)=>{const be=this.belt(did,k),o=this.ownedIn(did,k);return el('div',{class:'dj-belt'+(be.earned?' got':k===ci?' cur':' lock'),style:'--bc:'+b[1],title:b[0]+' Belt · '+D.belts[k][0]},
      el('i'),el('span',null,be.earned?'✓':k===ci?`${o.n}/${o.t}`:''));}));
    const o=this.ownedIn(did,i),pct=Math.round(100*o.n/Math.max(1,o.t));
    const owned=this.facts(did).filter(f=>(this.st().facts[f.key]||{}).owned).length,total=this.facts(did).length;
    const btns=[];
    if(!t.rounds)btns.push(el('button',{class:'btn btn-green dj-go',type:'button',onclick:()=>this.start(did,'round')},black?'Daily review ▸':'Today’s round ▸'));
    else btns.push(el('button',{class:'btn btn-green',type:'button',onclick:()=>this.start(did,'round')},'Extra round'));
    if(this.sprintPool(did).length>=8)btns.push(el('button',{class:'btn btn-gold',type:'button',onclick:()=>this.start(did,'sprint')},'⚡ 1-minute sprint'));
    return el('section',{class:'dj-panel',style:'--bc:'+B[1]},el('h3',null,D.name),ladder,
      black?el('p',{class:'dj-cur'},el('b',null,'BLACK BELT!'),' Every fact owned. A quick review keeps them sharp.'):
      el('div',{class:'dj-cur'},el('b',null,B[0]+' Belt'),' · '+D.belts[i][0],el('div',{class:'dj-bar',title:`${o.n} of ${o.t} facts owned`},el('i',{style:`width:${pct}%`})),
        el('small',null,`${o.n} of ${o.t} facts owned · ${owned} of ${total} in this dojo`)),
      el('div',{class:'dj-today'},el('span',{class:t.rounds?'ok':''},(t.rounds?'✓ ':'○ ')+'Today’s round'),t.taught?el('span',null,`${t.taught} new fact${t.taught===1?'':'s'} learned`):null),
      this.graph(did),el('div',{class:'dj-btns'},btns));},
  graph(did){const h=(this.st().hist||[]).filter(x=>x.did===did&&x.kind!=='sprint').slice(-8);if(!h.length)return null;const best=Math.max(...h.map(x=>x.fast),1);
    const sb=this.st().sprint[did]||0;
    return el('div',{class:'dj-graph'},el('small',null,'Lightning answers per round · beat your best!'),el('div',{class:'dj-bars'},h.map((x,i)=>el('i',{style:`height:${Math.max(6,Math.round(100*x.fast/Math.max(best,DJ.ROUND*0.8)))}%`,class:x.fast===best?'best':'',title:`${x.day}: ⚡${x.fast}`},el('b',null,String(x.fast))))),
      sb?el('small',null,`Sprint best: ${sb} in 1 minute`):null);},
  sprintPool(did){const F=this.st().facts;return this.facts(did).filter(f=>F[f.key]&&(F[f.key].owned||(F[f.key].credits>=1&&F[f.key].ok/Math.max(1,F[f.key].n)>=0.9)));},
  // ---------- a run
  start(did,kind){const d=this.st(),ci=Math.min(this.cur(did),7),B=BELTS[ci],black=this.black(did);
    const items=kind==='sprint'?shuffle(this.sprintPool(did)).concat(shuffle(this.sprintPool(did))).map(f=>({f,kind:'sprint'})):this.buildRound(did,{review:black});
    if(!items.length){Talk.say([['sensei','Nothing to train right now. Come back tomorrow!']]);return;}
    const title=kind==='sprint'?`${DOJOS[did].short} · 1-minute sprint`:`${DOJOS[did].short} Dojo · ${black?'Review':B[0]+' Belt'}`;
    run={spec:{title,mode:'dojo',dojo:did,kind,belt:ci,color:B[1]==='#f4f4f4'?'#8a94ad':B[1]},queue:items.map(x=>({kind:'dfact',skill:'dojo',f:x.f,k:x.kind,answer:x.f.ans})),idx:0,results:[],coins:0,twins:0,start:Date.now(),
      dj:{ok:0,fast:0,miss:[],newOwned:[],taught:[],bolt:0,boltBest:0,extra:{},end:kind==='sprint'?Date.now()+60000:0}};
    $('#lv-title').textContent=title;show('scr-level');$('#scr-level').classList.add('dojo');
    Battle.setup({total:kind==='sprint'?20:run.queue.length,mech:false,color:run.spec.color,drill:true});Music.play('battle');updateTop();
    if(kind==='sprint'){Talk.pop('sensei','Only facts you own. Beat your best! Wrong answers cost nothing.',{});const R0=run;setTimeout(()=>{if(run===R0&&!$('#scr-level').hidden)this.finish();},60200);}
    this.next();},
  advance(p){if(run&&run.queue[run.idx]===p){run.idx++;this.next();}},
  next(){const sp=run.spec,dj=run.dj;if(run.idx>=run.queue.length||(sp.kind==='sprint'&&Date.now()>=dj.end))return this.finish();
    const p=run.queue[run.idx],f=p.f;if(sp.kind!=='sprint')updateTop();
    Pad.reset();ANS.firstInput=null;padOn(true);const card=$('#card');CARD_QUIET=true;card.innerHTML='';card.className='card dj-card';requestAnimationFrame(()=>requestAnimationFrame(()=>{CARD_QUIET=false;}));
    const flip=Math.random()<0.5,fld=Pad.make({allowDot:false,max:4,ph:'?'}),len=String(f.ans).length,teach=p.k==='teach';
    const N=sp.kind==='sprint'?null:run.queue.length;
    card.append(el('div',{class:'dj-top'},el('span',{class:'dj-tag',style:'--bc:'+BELTS[sp.belt][1]},teach?'NEW FACT':sp.kind==='sprint'?'SPRINT':'TRAINING'),
      sp.kind==='sprint'?el('div',{class:'dj-time'},el('i',{style:`width:${Math.max(0,100*(dj.end-Date.now())/60000)}%;animation-duration:${Math.max(0.1,(dj.end-Date.now())/1000)}s`})):el('div',{class:'dj-prog'},el('i',{style:`width:${Math.round(100*run.idx/N)}%`}),el('span',null,`${run.idx+1} / ${N}`)),
      el('span',{class:'dj-bolt'},'⚡ '+dj.fast)));
    if(teach){const v=factVisual(f);card.append(el('div',{class:'dj-teach'},el('b',null,'Here’s the trick'),v,el('p',null,factTip(f))));}
    card.append(el('div',{class:'dj-expr'},el('span',null,(f.op==='+?'||f.op==='−?'?factExpr(f).replace('?','▢'):factExpr(f,flip)+' =')),fld.el));
    const ink=el('div',{class:'dj-ink'});card.append(ink);if(typeof InkBox!=='undefined')InkBox.mount(ink,{big:true,allowDot:false});else ink.remove();
    Pad.focus(fld);say(teach?'No rush on new facts. Use the trick.':sp.kind==='sprint'?'Go go go!':'Type it or write it.','');
    const t0=Date.now(),R=run;let done=false,tm=null,inkWrong=0;
    const go=()=>{if(done||run!==R||$('#scr-level').hidden)return;const v=Pad.val(fld);if(v==null)return;const src=fld.src||'key';
      const lat=(ANS.firstInput||Date.now())-t0,ok=v===f.ans;
      if(!ok&&src==='ink'&&(fld.inkP||1)<0.8&&inkWrong<1){inkWrong++;Pad.set(fld,'');fld.src=null;if(typeof InkBox!=='undefined')InkBox.clear();ANS.firstInput=null;say(`I read ${v}. Did I get that wrong? Write it again, or tap the keys.`,'info');return;}
      done=true;clearTimeout(tm);
      const before=sp.kind!=='sprint'&&this.rec(f).owned;const rec=sp.kind==='sprint'?this.rec(f):this.log(f,ok,lat,src,p.k);
      const fast=ok&&lat<=this.thr(src);
      if(p.k==='teach'||p.k==='again'){const t=this.st().today[sp.dojo];t.tk++;if(ok)t.tok++;}
      if(sp.kind!=='sprint'&&!before&&rec.owned&&!dj.newOwned.includes(f.key))dj.newOwned.push(f.key);
      Data.logAttempt({ts:new Date().toISOString(),day:dayStr(),hour:new Date().getHours(),skill:'dojo:'+sp.dojo,kind:'dojo',mode:p.k,diff:f.belt,variant:src,q:factExpr(f,flip),correct:f.ans,
        firstTry:ok,solved:ok,ms:Date.now()-t0,lat,errors:ok?[]:[{a:v,tags:[]}],fast,id:uid()});
      run.results[run.idx]={skill:'dojo',firstTry:ok,solved:ok,fast,ms:lat};
      if(ok){Pad.right(fld);Pad.lock(fld);dj.ok++;if(fast){dj.fast++;dj.bolt++;this.st().bolts++;dj.boltBest=Math.max(dj.boltBest,dj.bolt);}else dj.bolt=0;
        Battle.event(fast?'quick':'hit');stamp(fast?'quick':'right',null,{small:true,ms:fast?550:650});
        if(!before&&rec.owned&&sp.kind!=='sprint'){Snd.gem();Battle.text('FACT OWNED!','#ffe066',true,null,Battle.H*0.22);}
        if(teach&&!dj.taught.includes(f.key)){dj.taught.push(f.key);rec.teach=false;rec.taught=dayStr();this.st().today[sp.dojo].taught++;this.reask(p,[2,5]);}
        else if(p.k==='again')this.reask(p,[]);
        setTimeout(()=>this.advance(p),fast?360:600);return;}
      // a miss: nothing is lost. Build the fact with the trick, copy it, and it comes back soon.
      Pad.set(fld,f.ans);Pad.lock(fld);fld.el.classList.add('shown');dj.bolt=0;dj.miss.push(f);
      if(sp.kind==='sprint'){setTimeout(()=>this.advance(p),700);return;}
      if(teach&&!dj.taught.includes(f.key)){dj.taught.push(f.key);rec.teach=false;rec.taught=dayStr();this.st().today[sp.dojo].taught++;}
      this.reask(p,[2,5]);
      const v2=teach?null:factVisual(f);
      const fix=el('div',{class:'dj-miss'},el('div',{class:'dj-build'},'Let’s build it'),v2,teach?null:el('div',{class:'dj-tip'},factTip(f)));card.querySelector('.dj-expr').after(fix);
      const cp=Pad.make({allowDot:false,max:4,ph:'?'});fix.append(el('div',{class:'dj-copy'},'Now you: ',el('span',null,factExpr(f,flip)+' ='),cp.el));
      ink.parentNode&&ink.remove();const ink2=el('div',{class:'dj-ink'});fix.after(ink2);if(typeof InkBox!=='undefined')InkBox.mount(ink2,{big:true,allowDot:false});else ink2.remove();
      Pad.focus(cp);say('Copy it to lock it in. It will come back in a moment.','info');
      cp.onChange=()=>{if(Pad.val(cp)===f.ans){Pad.right(cp);Pad.lock(cp);Snd.coin();setTimeout(()=>this.advance(p),450);}
        else if(cp.val.length>=len){Pad.wrong(cp);setTimeout(()=>{Pad.set(cp,'');if(typeof InkBox!=='undefined')InkBox.clear();},350);}};
      setActions([{label:'Skip ▸',cls:'btn-dark',onClick:()=>this.advance(p)}]);};
    fld.onChange=()=>{clearTimeout(tm);if(fld.val.length>=len)tm=setTimeout(go,fld.src==='ink'?250:140);};
    setActions([[{label:'Show me',cls:'btn-dark',onClick:()=>{if(done)return;fld.val='-1';fld.src='key';go();}},{label:'Enter',cls:'btn-green',primary:true,onClick:go}]]);},
  // expanding re-asks: after 2, then 5 more items (max 2 extra per fact per round)
  reask(p,gaps){const n=run.dj.extra[p.f.key]||0;if(n>=2)return;let at=run.idx;gaps.slice(0,2-n).forEach(g=>{at=Math.min(run.queue.length,at+g);run.queue.splice(at,0,{kind:'dfact',skill:'dojo',f:p.f,k:'again',answer:p.f.ans});});
    run.dj.extra[p.f.key]=n+Math.min(gaps.length,2-n);Battle.setTotal(run.queue.length);},
  finish(){const sp=run.spec,dj=run.dj,did=sp.dojo,d=this.st(),t=d.today[did];if(dj.finished)return;dj.finished=true;
    const rs=run.results.filter(Boolean),N=rs.length,C=rs.filter(r=>r.firstTry).length,F=rs.filter(r=>r.fast).length;
    d.bestBolt=Math.max(d.bestBolt||0,dj.boltBest);
    // adapt how many new facts tomorrow
    if(sp.kind!=='sprint'){t.rounds++;if(t.tk>=3){const acc=t.tok/t.tk;d.k[did]=clamp((d.k[did]||DJ.K0)+(acc>=0.9?1:acc<0.8?-1:0),DJ.KMIN,DJ.KMAX);}}
    // owned facts reviewed today move to a longer gap
    if(sp.kind!=='sprint')run.queue.forEach(q=>{const r=d.facts[q.f.key];if(r&&r.owned&&q.k==='review'&&run.results[run.queue.indexOf(q)]&&run.results[run.queue.indexOf(q)].firstTry)r.rev=(r.rev||0)+1;});
    const prevBest=sp.kind==='sprint'?(d.sprint[did]||0):(d.best[did]||0),score=sp.kind==='sprint'?C:F,beat=score>prevBest&&prevBest>0;
    if(sp.kind==='sprint')d.sprint[did]=Math.max(prevBest,C);else d.best[did]=Math.max(prevBest,F);
    d.hist=(d.hist||[]).concat([{day:dayStr(),did,kind:sp.kind,n:N,ok:C,fast:F}]).slice(-60);
    const diamond=sp.kind!=='sprint'&&N>=10&&C===N&&F===N;
    // belts: earned when every fact in the belt is owned. Never taken away.
    const newBelts=[];for(let i=0;i<8;i++){const be=this.belt(did,i),o=this.ownedIn(did,i);if(!be.earned&&o.n>=o.t){be.earned=new Date().toISOString();newBelts.push(i);}}
    let coins=sp.kind==='sprint'?5+C:10+F+dj.newOwned.length*3+(diamond?40:0)+newBelts.length*100;state.coins+=coins;run.coins+=coins;
    if(diamond)d.medals.diamond=(d.medals.diamond||0)+1;
    const summary={title:sp.title,mode:'dojo',dojo:did,kind:sp.kind,n:N,firstTry:C,fast:F,newOwned:dj.newOwned,taught:dj.taught,beltsEarned:newBelts,coins,ms:Date.now()-run.start,miss:[...new Set(dj.miss.map(f=>f.key))]};
    SESSION.runs.push(summary);saveState();Data.saveSession();Local.addSession(SESSION);if(typeof Sync!=='undefined')Sync.kick();
    const fl=k=>{const f=this.facts(did).find(x=>x.key===k);return f?factFull(f):k;};
    const after=()=>{overlay(null);$('#scr-level').classList.remove('dojo');this.render();show('scr-dojo');
      if(this.gateOk()&&d.gateCheered!==dayStr()){d.gateCheered=dayStr();saveState();Talk.say([['sensei','Training complete for today. The kingdoms are open, {name}. Go get Glitch!']]).then(()=>this.mood());}};
    const m=el('div',{class:'modal dj-result'});const _ap=m.append.bind(m);m.append=(...k)=>_ap(...k.filter(x=>x!=null&&x!==false));
    if(sp.kind==='sprint')m.append(el('h2',null,beat?'NEW BEST!':'Sprint done!'),el('p',{class:'dj-big'},`${C} right in 1 minute`),el('p',null,prevBest?`Your best before: ${prevBest}`:'Now you have a best score to beat!'));
    else{m.append(el('h2',null,diamond?'DIAMOND ROUND! Perfect and lightning fast!':'Round complete!'),el('p',null,`${C}/${N} right · ⚡ ${F} lightning-fast`),
      beat?el('p',{class:'dj-stripe'},`New best! ⚡${F} beats your old ⚡${prevBest}.`):prevBest?el('p',null,`Your best: ⚡${Math.max(prevBest,F)}. Beat it next time!`):null,
      dj.taught.length?el('p',null,'New facts learned: ',el('b',null,dj.taught.map(fl).join(' · '))):null,
      dj.newOwned.length?el('p',{class:'dj-stripe'},`★ Facts owned forever: ${dj.newOwned.map(fl).join(' · ')}`):null,
      newBelts.length?el('p',{class:'dj-stripe'},newBelts.map(i=>BELTS[i][0]+' Belt earned!').join(' ')):null);}
    m.append(el('p',{class:'tiny-ok'},`+${coins} coins`));
    m.append(el('div',{class:'btns'},el('button',{class:'btn btn-green',type:'button',onclick:after},'Back to the Dojo')));
    (async()=>{await Battle.ko();for(const i of newBelts.slice(0,1)){await this.ceremony(did,i);await openChest('great');}if(!newBelts.length)(diamond||beat)?Snd.reveal('epic'):Snd.fanfare();overlay(m);})();},
  mood(){const d=this.st();if(d.mood[dayStr()])return;const pickM=k=>{d.mood[dayStr()]=k;SESSION.dojoMood=k;saveState();Data.saveSession();overlay(null);Snd.tap();};
    overlay(el('div',{class:'modal'},el('h2',null,'How did training feel today?'),el('p',null,'Just for your coach. There’s no wrong answer.'),
      el('div',{class:'faces'},[['great','Awesome'],['ok','Okay'],['meh','Meh'],['hard','Stressful']].map(([k,t])=>el('button',{class:'btn btn-dark',type:'button',onclick:()=>pickM(k)},t)))));},
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
  blocked(){Snd.init();Talk.say([['sensei',pick(['Not so fast, {name}! One short round in each dojo first. Then the kingdoms open.','The kingdoms can wait three minutes. Dojo first!','A true hero warms up first. Dojo, then battle!'])]]).then(()=>this.open());}
};
{const _mp=mechPower;mechPower=function(m){return _mp(m)+Dojo.beltBonus();};}
function dojoReport(){if(!state.dojo)return null;const d=Dojo.st();const nice=k=>k.replace('x',' × ').replace('/',' ÷ ').replace(/^(\d+)-(\d+)$/,'$1 − $2').replace(/^(\d+)\+(\d+)$/,'$1 + $2');
  const lines=['pm','tm'].map(did=>{const ci=Dojo.cur(did),fs=Dojo.facts(did),own=fs.filter(f=>(d.facts[f.key]||{}).owned).length;
    return el('div',null,el('b',null,DOJOS[did].name+': '),ci>=8?'Black Belt':`${BELTS[ci][0]} Belt (${Dojo.ownedIn(did,ci).n}/${Dojo.ownedIn(did,ci).t} owned)`,` · ${own}/${fs.length} facts owned · today: ${Dojo.doneToday(did)?'done':'not yet'} · new facts/day: ${d.k[did]}`);});
  const weak=Object.entries(d.facts).filter(([k,r])=>r.n>=2&&!r.owned&&(r.ok/r.n<0.8||r.rusty)).sort((a,b)=>a[1].ok/a[1].n-b[1].ok/b[1].n).slice(0,10).map(([k])=>nice(k));
  const moods=Object.entries(d.mood||{}).slice(-7).map(([k,v])=>k.slice(5)+' '+v);
  return el('div',{class:'rep-dojo'},el('p',null,el('b',null,'Fact Dojo')),lines,weak.length?el('div',null,'Shakiest facts: '+weak.join(', ')):null,moods.length?el('div',null,'How training felt: '+moods.join(' · ')):null,
    Dojo.gateOk()?null:el('button',{class:'btn btn-dark',type:'button',onclick:()=>{Dojo.st().unlockDay=dayStr();saveState();overlay(null);renderMap();}},'Grown-up: unlock the kingdoms for today'));}
