const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 await pg.goto('http://localhost:8765/');await pg.waitForTimeout(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await pg.waitForTimeout(2500);
 await pg.evaluate(()=>{document.querySelector('#talk').hidden=true;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);});
 const vis=await pg.evaluate(()=>{const e=document.querySelector('.sync-badge');return e&&!e.hidden&&e.getBoundingClientRect().width>0;});
 await pg.screenshot({path:'sp/badge.png'});await pg.tap('.sync-badge');await pg.waitForTimeout(600);
 const rep=await pg.evaluate(()=>!document.querySelector('#overlay').hidden&&/sync/i.test(document.querySelector('#overlay').textContent));
 console.log('badge visible',vis,'opens report w/ sync',rep,errs);await b.close();})();
