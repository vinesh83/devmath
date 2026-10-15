// "Your turn" quiz text for both question shapes, plus a wrong-then-right answer
const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});const pg=await b.newPage({viewport:{width:1180,height:820}});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 await pg.goto('http://localhost:8765/');await pg.waitForTimeout(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await pg.waitForTimeout(900);
 const r=await pg.evaluate(async()=>{const N=window.__nk,out=[];for(const [q,a] of [['17 ÷ 5 = 3 R ?',2],['24 ÷ 6',4]]){const box=document.createElement('div');document.body.append(box);let went=false;const s={q,a};N.DivLessons.quiz(box,s,()=>{went=true;});
   const k=[...box.querySelectorAll('.lab-k')],tap=t=>k.find(x=>x.textContent===t).dispatchEvent(new PointerEvent('pointerup',{bubbles:true}))||k.find(x=>x.textContent===t).click();
   out.push(box.querySelector('.lab-q').textContent);k.find(x=>x.textContent==='9').click();k.find(x=>x.textContent==='OK').click();out.push(box.querySelector('.vp-msg').textContent);
   k.find(x=>x.textContent===String(a)).click();k.find(x=>x.textContent==='OK').click();out.push(box.querySelector('.vp-msg').textContent);await new Promise(r=>setTimeout(r,900));out.push('resumed '+went+' firstTry '+s.ok);box.remove();}return out;});
 console.log(r.join(' | '));console.log('errors',errs);await b.close();})();
