const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();const d=N.Dojo.st();d.strictAnnounced='x';d.unlockDay=d.today.day;N.state.howtoSeen=true;Object.assign(N.state,{dogPicked:1,ellieMet:1});setInterval(()=>{N.Pause.last=Date.now();},500);N.ScreenTime.st().s.totalMin=0;});
 await ev(()=>{const N=window.__nk;N.startLevel(N.WORLDS.find(x=>x.id==='forge'),0);});await W(4000);
 await ev(()=>{const o=document.querySelector('#overlay');if(!o.hidden){const b=o.querySelector('button');if(b)b.click();}});
 console.log('calm in level',await ev(()=>document.querySelector('#scr-level').classList.contains('calm')),'mid-brawl gone: queue',await ev(()=>window.__nk.run.queue.length));
 await ev(()=>{const N=window.__nk;N.run.queue.length=N.run.idx+3;N.Battle.setTotal(3);});
 for(let i=0;i<3;i++){await ev(()=>{const N=window.__nk;const p=N.run.queue[N.run.idx];for(const c of String(p.answer))N.Pad.key(c);[...document.querySelectorAll('#actions button')].find(x=>/Submit/.test(x.textContent))?.click();});await W(1500);
   await ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Next|Finish/.test(x.textContent));if(b)b.click();});await W(800);
   if(i<2){console.log('interlude after problem',i+1,await ev(()=>!document.querySelector('#cine').hidden));await W(3200);}}
 await W(3000);console.log('battle',await ev(()=>!document.querySelector('#cine').hidden&&!!window.__nk.Brawl.G),'power',await ev(()=>window.__nk.Brawl.G&&window.__nk.Brawl.G.hearts));
 await pg.screenshot({path:'sp/level-boss.png'});await ev(()=>document.querySelector('#cine .skip').click());await W(5000);
 console.log('after skip: overlay',await ev(()=>{const o=document.querySelector('#overlay');return !o.hidden&&o.textContent.slice(0,120);}));
 await pg.screenshot({path:'sp/level-done.png'});console.log('errors',errs);await b.close();})();
