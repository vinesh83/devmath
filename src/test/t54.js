const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);
 const before=await ev(()=>{const D=window.__nk.Dojo;return [D.strict(),D.secsToday(),D.gateText()];});
 await ev(()=>{const N=window.__nk;window.__p=N.ScreenTime.brk({secs:60});const real=Date.now;Date.now=()=>real()+100000;});await W(800);
 await ev(()=>{const g=[...document.querySelectorAll('.recharge button')].find(x=>/Wait|back/.test(x.textContent));g.disabled=false;g.click();});await ev(()=>window.__p);
 const after=await ev(()=>{const D=window.__nk.Dojo;return [D.secsToday(),D.gateText(),D.st().today.brkSecs];});
 // a second, very long break is capped at 3 minutes
 await ev(()=>{const N=window.__nk;window.__p=N.ScreenTime.brk({secs:60});const r2=Date.now;Date.now=()=>r2()+900000;});await W(800);
 await ev(()=>{const g=[...document.querySelectorAll('.recharge button')].find(x=>/Wait|back/.test(x.textContent));g.disabled=false;g.click();});await ev(()=>window.__p);
 const after2=await ev(()=>window.__nk.Dojo.st().today.brkSecs);
 console.log('before',before,'after',after,'capped total',after2,errs);await b.close();})();
