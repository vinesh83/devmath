const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--autoplay-policy=no-user-gesture-required']});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const got=[];pg.on('response',r=>{if(/audio\//.test(r.url()))got.push(r.url().split('/').pop()+':'+r.status());});
 await pg.goto('http://localhost:8765/');await pg.waitForTimeout(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await pg.waitForTimeout(1200);
 const t0=Date.now();await pg.evaluate(()=>{document.querySelector('#talk').hidden=true;window.__d=false;window.__nk.Lesson.play('countup').then(()=>window.__d=true);});
 const playing=[];for(let i=0;i<12;i++){await pg.waitForTimeout(1000);playing.push(await pg.evaluate(()=>{const a=window.__nk.Lesson.audio;return a?(a.paused?'p':'▶')+a.src.split('/').pop():'none';}));}
 while(!(await pg.evaluate(()=>window.__d)))await pg.waitForTimeout(300);
 console.log('secs',(Date.now()-t0)/1000,'\nfetched',[...new Set(got)].join(' '),'\nplaying',playing.join(' '),'\nerrors',errs);await b.close();})();
