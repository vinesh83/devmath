const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);
 await ev(()=>{const N=window.__nk;N.state.hero.pet='golden';document.querySelector('#talk').hidden=true;window.__cerr=[];const _p=N.Cine.play.bind(N.Cine);N.Cine.play=(d,fn,o)=>_p(d,(...a)=>{try{fn(...a);}catch(e){window.__cerr.push(e.message+' '+(e.stack||'').split('\n')[1]);}},o);});
 for(const k of ['countup','borrow']){const t0=Date.now();await ev(k=>{window.__done=false;window.__nk.Lesson.play(k).then(()=>window.__done=true);},k);
   let shot=0;while(!(await ev(()=>window.__done))&&Date.now()-t0<120000){await W(500);const el=(Date.now()-t0)/1000;if(el>shot*6+3&&shot<12){await pg.screenshot({path:`sp/L-${k}-${String(shot).padStart(2,'0')}.png`});shot++;}}
   console.log(k,'secs',Math.round((Date.now()-t0)/1000),'errs',await ev(()=>window.__cerr.slice(0,3)));}
 console.log('seen',await ev(()=>window.__nk.state.lessons),errs);await b.close();})();
