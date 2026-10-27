/* =========================================================
   Class practice: long division the way Dev's 4th-grade class is doing it now. 2- and 3-digit numbers
   divided by a 1-digit number, almost always with a remainder, some with a zero in the answer (412 ÷ 4 = 103).
   Every step stays guided (Divide, Multiply, Subtract, Bring down). Always open in the Division Dungeon.
   ========================================================= */
function genClassDiv(i){
  for(let t=0;t<500;t++){let d,n;
    if(i<3){d=rint(3,9);n=rint(d*10+1,99);if(n%d===0&&Math.random()<0.85)continue;}           // warm up: 2-digit (75 ÷ 4)
    else if(i<5){d=rint(2,9);n=rint(100,999);if(Math.floor(n/100)<d)continue;if(n%d===0&&Math.random()<0.85)continue;}   // 3-digit, first digit big enough (857 ÷ 3)
    else if(i===6||i===8){d=rint(2,6);const q=rint(1,9)*100+rint(1,9);n=q*d+rint(1,d-1);if(n>999)continue;}  // a zero in the answer (412 ÷ 4 = 103)
    else{d=rint(3,9);n=rint(Math.max(100,d*12),999);if(n%d===0&&Math.random()<0.85)continue;}   // 3-digit, first digit may be too small (245 ÷ 7)
    const q=Math.floor(n/d),rem=n%d;return {kind:'div',skill:'div',op:'÷',n,d,answer:q,rem,L:n>99?4:3,guided:true,cls:true,nums:[String(n),String(d)],dp:0};}
  return {kind:'div',skill:'div',op:'÷',n:857,d:3,answer:285,rem:2,L:4,guided:true,cls:true,nums:['857','3'],dp:0};}
{const _op=Dungeon.open.bind(Dungeon);Dungeon.open=function(){_op();try{const lvs=document.querySelector('.dv-modal .dv-lvs');if(!lvs)return;
  const b=el('button',{class:'dv-lv dv-class-drill',type:'button'},el('b',null,'📝 Class practice'),el('span',null,'2- and 3-digit long division with remainders, like school'),el('i',null,'10 problems'));
  tapify(b,()=>{overlay(null);Snd.init();if(typeof Flip!=='undefined')Flip.pending=null;
    startRun({title:'Class Practice · Long Division',mode:'drill',color:'#e0457b',problems:Array.from({length:10},(_,i)=>genClassDiv(i))});});
  lvs.after(b);}catch(e){console.error(e);}};}
window.__classRun=(idx)=>startRun({title:'Class Practice · Long Division',mode:'drill',color:'#e0457b',problems:idx.map(i=>genClassDiv(i))});
