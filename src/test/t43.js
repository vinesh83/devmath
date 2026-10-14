const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();const d=N.Dojo.st();d.strictAnnounced='x';d.unlockDay=d.today.day;N.state.howtoSeen=true;N.ScreenTime.st().s.totalMin=0;setInterval(()=>{N.Pause.last=Date.now();},500);});
 // find a stacked subtraction problem
 for(let k=0;k<12;k++){await ev(()=>{const N=window.__nk;N.startLevel(N.WORLDS.find(x=>x.id==='canyon'),1);});await W(3200);
   await ev(()=>{const o=document.querySelector('#overlay');if(!o.hidden){const b=o.querySelector('button');if(b)b.click();}});
   const st=await ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx];return {kind:p.kind,stacked:!!p.stacked};});if(st.kind==='arith'&&st.stacked)break;}
 console.log('card text',await ev(()=>document.querySelector('#card').innerText.slice(0,80).replace(/\n/g,' | ')));
 await pg.screenshot({path:'sp/stack-p1.png'});
 await ev(()=>document.querySelector('#sc-add').click());await W(300);await ev(()=>document.querySelector('#sc-add').click());await W(400);
 await pg.screenshot({path:'sp/stack-p3.png'});console.log('page',await ev(()=>document.querySelector('#sc-pg').textContent),'errors',errs);await b.close();})();
