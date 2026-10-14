const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 for(const vp of [{width:1180,height:820},{width:820,height:1180}]){
 const pg=await b.newPage({viewport:vp,hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();const d=N.Dojo.st();d.strictAnnounced='x';d.unlockDay=d.today.day;N.state.howtoSeen=true;Object.assign(N.state,{dogPicked:1,ellieMet:1});setInterval(()=>{N.Pause.last=Date.now();},500);N.ScreenTime.st().s.totalMin=0;});
 await ev(()=>{const N=window.__nk;N.startLevel(N.WORLDS.find(x=>x.id==='canyon'),0);});await W(4000);
 await ev(()=>{const o=document.querySelector('#overlay');if(!o.hidden){const b=o.querySelector('button');if(b)b.click();}});await W(500);
 console.log(vp.width,'kind',await ev(()=>window.__nk.run.queue[window.__nk.run.idx].kind),'inkPad',await ev(()=>{const r=document.querySelector('#inkPad')?.getBoundingClientRect();return r&&[Math.round(r.width),Math.round(r.height)];}));
 await pg.screenshot({path:`sp/arith-${vp.width}.png`});await pg.close();}
 await b.close();})();
