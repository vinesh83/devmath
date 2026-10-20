/* =========================================================
   Flip It: times facts and their division twins, back to back (7 × 7 = 49, then 49 ÷ 7 = ?).
   Built for the facts school is on now (6s–9s). A picture of equal rows with skip-count labels
   (7, 14, 21 … 49) shows how the two connect; it fades as he gets each family right:
   level 1 = rows always shown, 2 = only "Think: 7 × ? = 49", 3 = plain (rows come back on a miss).
   ========================================================= */
const Flip={
  st(){return state.flip=state.flip||{};},
  pending:null,
  famKey(a,b){return `${Math.min(a,b)}x${Math.max(a,b)}`;},
  lvl(k){const r=this.st()[k]||{ok:0};return r.ok>=4?3:r.ok>=2?2:1;},
  note(k,firstTry){const r=this.st()[k]=this.st()[k]||{ok:0,n:0};r.n++;if(firstTry)r.ok++;else r.ok=Math.max(0,r.ok-1);saveState();}
};
function genFF(){
  // the division twin of the last times fact comes next
  if(Flip.pending){const q=Flip.pending;Flip.pending=null;const d=Math.random()<0.5?q.a:q.b;
    return {kind:'ff',skill:'ff',op:'÷',part:'div',a:q.a,b:q.b,n:q.a*q.b,d,answer:q.a*q.b/d,fam:Flip.famKey(q.a,q.b),nums:[String(q.a*q.b),String(d)],dp:0};}
  const big=[6,7,8,9],a=Math.random()<0.85?pick(big):pick([3,4]),b=Math.random()<0.7?pick(big):rint(2,5);
  Flip.pending={a,b};
  return {kind:'ff',skill:'ff',op:'×',part:'mul',a,b,answer:a*b,fam:Flip.famKey(a,b),nums:[String(a),String(b)],dp:0};}
// equal rows: `rows` rows of `per`, with skip-count labels; the last label can be hidden ("?")
function ffRows(rows,per,hideLast){const box=el('div',{class:'ff-rows'});
  for(let r=0;r<rows;r++){const row=el('div',{class:'ff-row',style:`animation-delay:${r*0.12}s`});
    for(let c=0;c<per;c++)row.append(el('i'));
    row.append(el('b',null,hideLast&&r===rows-1?'?':String((r+1)*per)));box.append(row);}
  return box;}
function ffFamily(p){const {a,b}=p,n=a*b,cur=p.part==='mul'?`${p.a} × ${p.b}`:`${p.n} ÷ ${p.d}`;
  const facts=a===b?[`${a} × ${a} = ${n}`,`${n} ÷ ${a} = ${a}`]:[`${a} × ${b} = ${n}`,`${b} × ${a} = ${n}`,`${n} ÷ ${a} = ${b}`,`${n} ÷ ${b} = ${a}`];
  return el('div',{class:'ff-fam'},el('div',{class:'ff-fam-h'},`🔺 One family: ${a}, ${b}, ${n}`),
    el('div',{class:'ff-fam-l'},...facts.map(f=>el('span',{class:f.startsWith(cur)?'on':''},f))));}
function renderFF(p,a){const card=$('#card'),L=Flip.lvl(p.fam),isDiv=p.part==='div';
  const per=isDiv?p.d:p.b,rows=isDiv?p.answer:p.a;
  card.append(cardHead('Flip It 🔄',el('span',{class:'ff-sub'},isDiv?'Use the times fact':'Times fact first')),
    el('div',{class:'expr',style:'font-size:52px;margin:4px 0'},isDiv?`${p.n} ÷ ${p.d} =`:`${p.a} × ${p.b} =`));
  const think=isDiv?el('div',{class:'ff-think'},'Think: ',el('b',null,`${p.d} × ? = ${p.n}`)):el('div',{class:'ff-think'},`${p.a} rows of ${p.b}`);
  const pic=el('div',{class:'ff-pic'});
  const showRows=()=>{if(pic.firstChild)return;pic.append(ffRows(rows,per,!isDiv),
    el('div',{class:'ff-cap'},isDiv?`Rows of ${p.d}: count by ${p.d}s until you reach ${p.n}. How many rows?`:`Count by ${p.b}s, ${p.a} times.`));};
  const f=Pad.make({allowDot:false,max:3});card.append(el('div',{class:'ans-row'},el('span',null,'Answer'),f.el));Pad.focus(f);
  if(L<=2)card.append(think);card.append(pic);if(L===1)showRows();
  try{Scratch.reset(null);}catch(e){}
  say(isDiv?`${p.n} ÷ ${p.d}: what times ${p.d} makes ${p.n}?`:`${p.a} × ${p.b}. Then we flip it!`,'');
  answerFlow({field:f,correct:p.answer,check:null,noPlaceHint:true,
    diag:v=>({tags:[isDiv?'ff:div':'ff:mul'],places:[]}),
    onWrong:(tries,v)=>{if(tries>=3)return false;showRows();if(L===3&&!think.isConnected)pic.before(think);
      const sk=s=>[s,2*s].join(', ');say(isDiv?`Count by ${p.d}s: ${sk(p.d)}… and stop at ${p.n}. How many ${p.d}s?`:`Count by ${p.b}s: ${sk(p.b)}… ${p.a} times.`,'warn');return true;},
    reveal:v=>el('div',null,showRows()||pic.cloneNode(true),ffFamily(p)),
    onDone:res=>{Flip.note(p.fam,res.firstTry);if(!res.revealed)card.append(ffFamily(p));complete(p,res);}});}
// no "Check It" nag on Flip It (it has no Check button)
{const _ow=Talk.onWrong.bind(Talk);Talk.onWrong=function(o){if(o&&o.kind==='ff')return;return _ow(o);};}
// wire into problem making, retries and the problem log
{const _mp=makeProblem;makeProblem=function(tok,boost){if(String(tok)==='ff')return genFF();return _mp(tok,boost);};
 const _tw=twinOf;twinOf=function(p){if(p&&p.kind==='ff'){Flip.pending=null;const d=p.part==='div'?p.d:p.b;const o=d===p.a?p.b:p.a;
   return {kind:'ff',skill:'ff',op:'÷',part:'div',a:p.a,b:p.b,n:p.a*p.b,d:o,answer:p.a*p.b/o,fam:p.fam,nums:[String(p.a*p.b),String(o)],dp:0};}return _tw(p);};
 const _ds=describe;describe=function(p){if(p&&p.kind==='ff')return p.part==='div'?`${p.n} ÷ ${p.d}`:`${p.a} × ${p.b}`;return _ds(p);};
 // Division Dungeon: flip facts in the first two levels, and a stand-alone drill
 DIV_WORLD.levels[0]=['div:0','ff','ff'];DIV_WORLD.levels[1]=['div:1','ff','ff','div:0'];
 const _op=Dungeon.open.bind(Dungeon);Dungeon.open=function(){_op();try{const lvs=document.querySelector('.dv-modal .dv-lvs');if(!lvs)return;
   const b=el('button',{class:'dv-lv dv-flip-drill',type:'button'},el('b',null,'🔄 Flip It drill'),el('span',null,'Times facts and their division twins (6s–9s)'),el('i',null,'10 problems'));
   tapify(b,()=>{overlay(null);Snd.init();Flip.pending=null;startRun({title:'Flip It · Fact Families',mode:'drill',color:'#e0457b',problems:Array.from({length:10},()=>genFF())});});lvs.after(b);}catch(e){}};}
