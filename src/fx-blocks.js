/* =========================================================
   Blocks: simple animated block pictures for facts.
   hint(f): after a miss, shows the fact with blocks but never the answer. He tries again.
   show(f): after a right answer on a fact he's still learning, replays it with blocks and the answer.
   ========================================================= */
const Blocks={
  // grid of cells. cells: [{k:'b'|'o'|'e'|'x', d:delay}] laid out in rows of `per`, with a gap after 5
  grid(cells,per,size,labels){const wrap=el('div',{class:'bk-grid',style:`--c:${size}px`});
    for(let r=0;r*per<cells.length;r++){const row=el('div',{class:'bk-row'});
      cells.slice(r*per,r*per+per).forEach((c,i)=>{const b=el('i',{class:'bk '+c.k+(per===10&&i===4?' gap':''),style:`animation-delay:${c.d||0}s`});if(c.x!=null)b.style.setProperty('--xd',c.x+'s');row.append(b);});
      if(labels&&labels[r]!=null)row.append(el('span',{class:'bk-lab',style:`animation-delay:${labels[r].d}s`},labels[r].s));
      wrap.append(row);}return wrap;},
  box(cls,grid,text){return el('div',{class:'bk-box '+cls},grid,text?el('p',{class:'bk-say'},text):null);},
  // multiplication: which factor to count by (2s, 5s and 10s are easiest, then the smaller number)
  mulPlan(a,b){const easy=[10,5,2];for(const e of easy){if(a===e)return {by:a,rows:b};if(b===e)return {by:b,rows:a};}const by=Math.min(a,b);return {by,rows:Math.max(a,b)};},
  cells(n,k,d0,step){return Array.from({length:n},(_,i)=>({k,d:d0+i*(step||0)}));},
  hint(f){const {op,a,b}=f;let g=null,t='';const S=0.12;
    if(op==='+'){const hi=Math.max(a,b),lo=Math.min(a,b),tot=hi+lo;
      g=this.grid(this.cells(hi,'b',0,0.02).concat(this.cells(lo,'o',0.4,0.22)),10,tot>20?20:32);
      if(a===b)t=`Double ${a}: two groups of ${a}.`;else if(hi-lo===1)t=`Near double: ${lo} + ${lo} is a double. Then 1 more.`;
      else if(tot>10&&hi<10)t=`Fill the ten first: ${hi} + ${10-hi} makes 10. How many oranges spill over?`;
      else if(hi===10)t=`10 and ${lo} more.`;else t=`Start at ${hi}. Count on ${lo} more.`;}
    else if(op==='−'){const cs=Array.from({length:a},(_,i)=>i>=a-b?{k:'b x',d:0,x:0.5+(a-1-i)*0.22}:{k:'b',d:0});
      g=this.grid(cs,10,a>20?20:32);
      t=a>10&&b>a-10&&b<10?`Take away ${a-10} to get down to 10. Then take away ${b-(a-10)} more. How many are left?`:`Start with ${a}. Take away ${b}. How many are left? Or think: ${b} + ? = ${a}.`;}
    else if(op==='×'){const P=this.mulPlan(a,b),size=P.rows*P.by>60?16:P.rows*P.by>30?20:28,cs=[],labs=[];
      for(let r=0;r<P.rows;r++){cs.push(...this.cells(P.by,r%2?'o':'b',0.25*r,0));labs.push({s:r<P.rows-1?String(P.by*(r+1)):'?',d:0.25*r+0.15});}
      g=this.grid(cs,P.by,size,labs);t=`${P.rows} rows of ${P.by}. Count by ${P.by}s.`;}
    else if(op==='÷'){const rows=f.ans,size=a>60?16:a>30?20:28,cs=[];for(let r=0;r<rows;r++)cs.push(...this.cells(b,r%2?'o':'b',0.3*r,0));
      g=this.grid(cs,b,size);t=`Put ${a} into rows of ${b}. How many rows?`;}
    else if(op==='+?'){g=this.grid(this.cells(a,'b',0,0.02).concat(this.cells(b-a,'e',0.4,0.15)),10,b>20?20:32);t=`You have ${a}. How many more to make ${b}? Count the empty spots.`;}
    else if(op==='−?'){const cs=Array.from({length:a},(_,i)=>i>=b?{k:'b x',d:0,x:0.5+(i-b)*0.2}:{k:'b',d:0});g=this.grid(cs,10,a>20?20:32);t=`${a} take away how many leaves ${b}? Count the crossed ones.`;}
    if(!g)return null;return this.box('bk-hint',g,t);},
  // after a right answer: the same picture, with the answer
  show(f){const {op,a,b,ans}=f;let g=null;
    if(op==='+'){const hi=Math.max(a,b),lo=Math.min(a,b);g=this.grid(this.cells(hi,'b',0,0.015).concat(this.cells(lo,'o',0.2,0.05)),10,ans>20?18:28);}
    else if(op==='−'){g=this.grid(Array.from({length:a},(_,i)=>i>=a-b?{k:'b x',d:0,x:0.15+(a-1-i)*0.05}:{k:'b',d:0}),10,a>20?18:28);}
    else if(op==='×'){const P=this.mulPlan(a,b),cs=[],labs=[];for(let r=0;r<P.rows;r++){cs.push(...this.cells(P.by,r%2?'o':'b',0.08*r,0));labs.push({s:String(P.by*(r+1)),d:0.08*r+0.05});}g=this.grid(cs,P.by,ans>60?14:ans>30?18:22,labs);}
    else if(op==='÷'){const cs=[];for(let r=0;r<ans;r++)cs.push(...this.cells(b,r%2?'o':'b',0.08*r,0));g=this.grid(cs,b,a>60?12:14);}
    else if(op==='+?'){g=this.grid(this.cells(a,'b',0,0.015).concat(this.cells(ans,'o',0.2,0.05)),10,b>20?18:28);}
    else if(op==='−?'){g=this.grid(Array.from({length:a},(_,i)=>i>=b?{k:'b x',d:0,x:0.15+(i-b)*0.05}:{k:'b',d:0}),10,a>20?18:28);}
    if(!g)return null;const ex=op==='+?'?`${a} + ${ans} = ${b}`:op==='−?'?`${a} − ${ans} = ${b}`:`${a} ${op} ${b} = ${ans}`;
    return el('div',{class:'bk-box bk-show'},g,el('b',{class:'bk-ans'},ex));}
};
