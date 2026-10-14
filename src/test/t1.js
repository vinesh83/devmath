const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'}).catch(async()=>chromium.launch());
 const pg=await b.newPage({viewport:{width:1180,height:820}});
 const errs=[];pg.on('pageerror',e=>errs.push('PAGEERR '+e.message));pg.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE '+m.text());});
 await pg.goto('file://'+process.cwd()+'/../number-knight.html');
 await pg.waitForTimeout(500);
 const inv=await pg.evaluate(()=>{const N=window.__nk;const bad=[];
  for(let r=1;r<=5;r++){for(let i=0;i<300;i++){
   for(const k of ['add','sub','dec_add','dec_sub']){const p=N.GEN[k](r);const vals=p.nums.map(Number);const want=p.op==='−'?vals[0]-vals[1]:vals.reduce((a,b)=>a+b,0);
     if(Math.abs(want-p.answer)>1e-6||p.answer<=0)bad.push([k,r,p.nums,p.answer]);}
   const a=N.genArea(r);if(a.a*a.b!==a.answer||a.top.reduce((x,y)=>x+y,0)!==a.a)bad.push(['area',a]);
   const w=N.genWord(r);if(!(w.answer>0)||!isFinite(w.est.est)||!w.wrongPlans.length)bad.push(['word',r,w.answer,w.est,w.wrongPlans.length,w.sentences.map(s=>s.map(x=>typeof x==='string'?x:x.str).join('')).join(' ')]);
   const t=N.genTable(r);if(t.stmts.filter(s=>!s.ok).length!==1)bad.push(['table']);
   const bg=N.genBug(['sub','add','dec_sub','dec_add','area','word'][i%6]);if(bg.isBug&&Math.abs(bg.glitch-bg.answer)<1e-6)bad.push(['bug same',bg.bugType]);
   if(bg.isBug&&!(bg.glitch>0))bad.push(['bug neg',bg.bugType,bg.glitch]);
  }}
  // diag sanity on his real errors
  const p={op:'−',nums:['422431','92420'],dp:0,answer:330011};const d1=N.diagArith(p,332011);
  const p2={op:'−',nums:['356291','43720'],dp:0,answer:312571};const d2=N.diagArith(p2,33571);
  const p3={op:'+',nums:['1.25','0.6'],dp:2,answer:1.85};const d3=N.diagArith(p3,1.31);
  const e=N.estimateArith(p2);
  return {bad:bad.slice(0,10),nbad:bad.length,d1,d2,d3,est:{est:e.est,tol:e.tol,opts:e.options}};
 });
 console.log(JSON.stringify(inv,null,1));
 console.log('ERRS',errs);
 await b.close();
})();
