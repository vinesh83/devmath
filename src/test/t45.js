const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 for(const vp of [{width:1180,height:820},{width:820,height:1180}]){
 const pg=await b.newPage({viewport:vp,hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();const d=N.Dojo.st();d.strictAnnounced='x';d.unlockDay=d.today.day;N.state.howtoSeen=true;N.state.cineEvery=0;N.ScreenTime.st().s.totalMin=0;N.Brawl.off=true;setInterval(()=>{N.Pause.last=Date.now();},500);});
 await ev(()=>{const N=window.__nk;N.startLevel(N.WORLDS.find(x=>x.id==='forge'),0);});await W(3500);
 await ev(()=>{const o=document.querySelector('#overlay');if(!o.hidden){const b=o.querySelector('button');if(b)b.click();}});
 const info=await ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx];return {ans:p.answer,factmode:document.querySelector('#scr-level').classList.contains('factmode'),scratchShown:getComputedStyle(document.querySelector('.scratch-wrap')).display!=='none',big:!!document.querySelector('.fact-ink'),boxes:N.InkBox.active.boxes};});
 console.log(vp.width,'forge',JSON.stringify(info));await pg.screenshot({path:`sp/forge-${vp.width}.png`});
 // write the answer with "keys via ink" to test auto-submit: simulate recognized ink input
 const n0=await ev(()=>window.__nk.run.results.filter(Boolean).length);
 await ev(a=>{const N=window.__nk;N.Pad.input(N.Pad.active,String(a),'ink',0.95,Date.now());},info.ans);await W(1600);
 console.log('  auto-submitted',(await ev(()=>window.__nk.run.results.filter(Boolean).length))>n0);
 // a regular level: labels and the nudge
 await ev(()=>{const N=window.__nk;N.startLevel(N.WORLDS.find(x=>x.id==='canyon'),0);});await W(3500);
 await ev(()=>{const o=document.querySelector('#overlay');if(!o.hidden){const b=o.querySelector('button');if(b)b.click();}});
 console.log('  canyon factmode',await ev(()=>document.querySelector('#scr-level').classList.contains('factmode')),'title',await ev(()=>{const t=document.querySelector('.ink-title');return t&&getComputedStyle(t).display!=='none'&&t.textContent;}),'label',await ev(()=>document.querySelector('.sc-label').textContent));
 const sc=await ev(()=>{const r=document.querySelector('#scratch').getBoundingClientRect();return {x:r.left,y:r.top,w:r.width,h:r.height};});
 await pg.mouse.move(sc.x+sc.w*0.3,sc.y+sc.h*0.6);await pg.mouse.down();await pg.mouse.move(sc.x+sc.w*0.4,sc.y+sc.h*0.65,{steps:6});await pg.mouse.up();
 await W(5600);console.log('  nudge',await ev(()=>document.querySelector('#inkPad').classList.contains('nudge')),'msg',await ev(()=>document.querySelector('#msg').textContent));
 await pg.screenshot({path:`sp/nudge-${vp.width}.png`});console.log('  errors',errs);await pg.close();}
 await b.close();})();
