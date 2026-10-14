/* =========================================================
   Dojo Flash: once the daily Dojo is done, levels and quests mix in quick Dojo facts
   (ones he has met, mostly ones he hasn't mastered yet). They count toward Dojo mastery.
   ========================================================= */
const FactMix={
  on(){return typeof Dojo!=='undefined'&&Dojo.gateOk();},
  pick(n){const D=Dojo.st().facts,pool=[];for(const did of ['pm','tm'])for(const f of Dojo.facts(did)){const r=D[f.key];if(r&&r.n>0)pool.push({f,did,w:r.owned?1:3});}
    const out=[];for(let i=0;i<n&&pool.length;i++){let tot=pool.reduce((s,x)=>s+x.w,0),x=Math.random()*tot,j=0;for(;j<pool.length-1;j++){x-=pool[j].w;if(x<=0)break;}const c=pool.splice(j,1)[0];
      out.push({kind:'dfact',skill:'fact',f:c.f,did:c.did,answer:c.f.ans,L:1});}return out;},
  // levels get 2 flash facts, quests 3
  mix(probs,mode){const add=this.pick(mode==='quest'?3:2);if(!add.length)return probs;const out=probs.slice();add.forEach((q,i)=>out.splice(Math.min(out.length,1+i*2+i),0,q));return out;}
};
function renderDFact(p,a){const f=p.f,card=$('#card');
  card.append(cardHead('Dojo Flash ⚡'),el('div',{class:'expr',style:'font-size:56px;margin:4px 0'},f.op==='+?'||f.op==='−?'?factExpr(f).replace('?','▢'):factExpr(f)+' ='));
  const fld=Pad.make({allowDot:false,max:4});card.append(el('div',{class:'ans-row'},fld.el));Pad.focus(fld);Scratch.reset(null);say('Dojo flash! A quick fact.','');
  const t0=Date.now();let tries=0,logged=false,arm=null;
  const submit=()=>{let v=Pad.val(fld);if(v==null||fld.locked)return;if(v!==f.ans&&fld.src==='ink'&&typeof InkBox!=='undefined'&&InkBox.doubt(f.ans)){Pad.set(fld,String(f.ans));v=f.ans;}
    tries++;a.tries.push({a:v,ms:Date.now()-a.t0});
    if(!logged){logged=true;try{Dojo.log(f,v===f.ans,(ANS.firstInput||Date.now())-t0,fld.src||'key','mix');if(typeof Lab!=='undefined')Lab.noteFirst(f,v===f.ans);saveState();}catch(e){}}
    if(tries===2&&arm&&typeof Lab!=='undefined')Lab.noteRetry(f,arm,v===f.ans);
    if(v===f.ans){Pad.right(fld);Pad.lock(fld);const h=card.querySelector('.bk-hint');if(h)h.remove();complete(p,{solved:true,firstTry:tries===1,tries});return;}
    Pad.wrong(fld);a.errors=(a.errors||[]).concat([{a:v,tags:[]}]);
    // first miss: a block picture and another try (no answer shown)
    if(tries===1&&typeof Blocks!=='undefined'){const LH=typeof Lab!=='undefined'?Lab.hint(f):{el:Blocks.hint(f),arm:'blocks'},h=LH&&LH.el;if(h){arm=LH.arm;card.querySelector('.expr').before(h);say('Not quite. Look at the picture and try again.','info');
        setTimeout(()=>{if(fld.locked)return;Pad.set(fld,'');fld.src=null;if(typeof InkBox!=='undefined')InkBox.clear();Pad.focus(fld);},450);return;}}
    const h=card.querySelector('.bk-hint');if(h)h.remove();Pad.set(fld,f.ans);Pad.lock(fld);
    card.append(el('div',{class:'reveal'},el('h4',null,factExpr(f)+' = '+f.ans),el('div',null,factTip(f))));
    setActions([{label:'Got it ▸',cls:'btn-blue',primary:true,onClick:()=>complete(p,{solved:false,firstTry:false,revealed:true,tries})}]);};
  fld.onChange=()=>{clearTimeout(fld._t);if(fld.src!=='ink'||!fld.val.length||fld.locked)return;fld._t=setTimeout(()=>{if(fld.locked||(typeof InkBox!=='undefined'&&InkBox.drawing))return;submit();},fld.val.length>=String(f.ans).length?700:1800);};
  setActions([{label:'Submit',cls:'btn-green',primary:true,onClick:submit}]);}
