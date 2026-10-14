const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();const d=N.Dojo.st();d.strictAnnounced='x';d.unlockDay=d.today.day;N.Brawl.off=true;N.state.howtoSeen=true;Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});setInterval(()=>{N.Pause.last=Date.now();},500);N.ScreenTime.st().s.totalMin=0;});
 // a regular level: first problem
 await ev(()=>{const N=window.__nk;N.startLevel(N.WORLDS.find(x=>x.id==='canyon'),0);});await W(2500);
 await ev(()=>{const o=document.querySelector('#overlay');if(!o.hidden){const b=o.querySelector('button');if(b)b.click();}});await W(400);
 const info=await ev(()=>{const N=window.__nk,a=N.Pad.active;return {kind:N.run.queue[N.run.idx].kind,ans:N.run.queue[N.run.idx].answer,field:!!a};});console.log('level problem',info);
 await ev(a=>{const N=window.__nk;N.Pad.input(N.Pad.active,String(a+1),'ink',0.95,Date.now());},info.ans);
 await ev(()=>[...document.querySelectorAll('#actions button')].find(x=>/Submit/.test(x.textContent)).click());await W(500);
 console.log('level modal',await ev(()=>!!document.querySelector('.ink-check')));
 await ev(()=>[...document.querySelectorAll('.ink-check button')].find(x=>/rewrite/.test(x.textContent)).click());await W(300);
 console.log('tries after No',await ev(()=>window.__nk.ATT?window.__nk.ATT.tries.length:'n/a'),'field',JSON.stringify(await ev(()=>window.__nk.Pad.active.val)));
 await ev(a=>{const N=window.__nk;N.Pad.input(N.Pad.active,String(a),'ink',0.95,Date.now());},info.ans);
 await ev(()=>[...document.querySelectorAll('#actions button')].find(x=>/Submit/.test(x.textContent)).click());await W(700);
 console.log('solved first try',await ev(()=>{const r=window.__nk.run.results[0];return r&&r.firstTry;}),'inkStats',await ev(()=>JSON.stringify(window.__nk.state.inkStats&&{asked:window.__nk.state.inkStats.asked,no:window.__nk.state.inkStats.no,right:window.__nk.state.inkStats.noThenRight})));
 console.log('errors',errs);await b.close();})();
