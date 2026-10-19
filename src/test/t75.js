// Times first: the map sends him to a Times round once a day, and Plus-Minus waits until a Times round is done
const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(900);
 await ev(()=>{const N=window.__nk;N.Updater.check=()=>{};Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Brawl.off=true;N.Lesson.off=true;N.state.no3d=true;N.Arcade.pickOff=true;setInterval(()=>{N.Pause.last=Date.now();const t=document.querySelector('#talk');if(t&&!t.hidden)t.click();},250);});
 console.log('timesDue at start:',await ev(()=>window.__nk.Dojo.timesDue()));
 // 1) Plus-Minus asked for first -> Times round instead
 await ev(()=>window.__nk.Dojo.start('pm','round'));await W(2500);
 console.log('asked PM, got:',await ev(()=>{const r=window.__nk.run;return r&&r.queue&&r.queue[0]&&r.queue[0].f?r.queue[0].f.op:(r?'run '+JSON.stringify(Object.keys(r)):'no run');}));
 // 2) map visit: one automatic send to Times per day
 await ev(()=>{const N=window.__nk;N.run=null;document.querySelectorAll('.screen').forEach(s=>s.hidden=true);document.querySelector('#scr-map').hidden=false;document.querySelector('#overlay').hidden=true;N.Dojo.st().tmAuto=null;});
 console.log('map visit sends to Times:',await ev(()=>window.__nk.Dojo.timesFirst()));await W(2500);
 console.log('tmAuto set today:',await ev(()=>window.__nk.Dojo.st().tmAuto),'second call:',await ev(()=>window.__nk.Dojo.timesFirst()));
 // 3) after a Times round is done, Plus-Minus starts normally
 await ev(()=>{const N=window.__nk;N.Dojo.st().today.tm.rounds=1;N.run=null;});
 console.log('timesDue after Times round:',await ev(()=>window.__nk.Dojo.timesDue()));
 await ev(()=>window.__nk.Dojo.start('pm','round'));await W(2500);
 console.log('asked PM, got:',await ev(()=>{const r=window.__nk.run;return r&&r.queue&&r.queue[0]&&r.queue[0].f?r.queue[0].f.op:'no run';}));
 // 4) grown-up unlock turns it off
 await ev(()=>{const N=window.__nk;N.Dojo.st().today.tm.rounds=0;N.Dojo.st().unlockDay=new Date().toISOString().slice(0,10);});
 console.log('timesDue with grown-up unlock:',await ev(()=>window.__nk.Dojo.timesDue()));
 console.log('errors',errs);await b.close();})();
