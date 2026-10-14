const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 const shot=n=>pg.screenshot({path:`v7/20m-${n}.png`});const W=ms=>pg.waitForTimeout(ms);
 const drain=async()=>{for(let i=0;i<80;i++){const o=await pg.evaluate(()=>!document.querySelector('#talk').hidden);if(!o)break;await pg.evaluate(()=>document.querySelector('#talk').click());await W(40);}};
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(900);await drain();await W(600);await drain();
 await shot('1-dojo');console.log('strict',await pg.evaluate(()=>window.__nk.Dojo.strict()),'gate',await pg.evaluate(()=>window.__nk.Dojo.gateOk()));
 const play=async(did)=>{await pg.evaluate(d=>window.__nk.Dojo.start(d,'round'),did);await W(300);
   for(let i=0;i<120;i++){const st=await pg.evaluate(()=>{const N=window.__nk;if(document.querySelector('#scr-level').hidden||!document.querySelector('#overlay').hidden)return null;const p=N.run.queue[N.run.idx];if(!p)return {w:1};const a=N.Pad.active;return {ans:p.f.ans,act:!!a&&!a.locked};});
     if(!st)break;if(st.w||!st.act){await W(120);continue;}await pg.evaluate(v=>{for(const c of String(v))window.__nk.Pad.key(c);},st.ans);await W(420);}
   await W(2600);};
 await play('pm');await shot('2-result-pm');console.log('after pm: gate',await pg.evaluate(()=>window.__nk.Dojo.gateOk()),'secs',await pg.evaluate(()=>Math.round(window.__nk.Dojo.secsToday())));
 await pg.evaluate(()=>{const b=[...document.querySelectorAll('#overlay button')].find(x=>x.textContent.startsWith('Next round'));b&&b.click();});await W(300);
 for(let i=0;i<120;i++){const st=await pg.evaluate(()=>{const N=window.__nk;if(document.querySelector('#scr-level').hidden||!document.querySelector('#overlay').hidden)return null;const p=N.run.queue[N.run.idx];if(!p)return {w:1};const a=N.Pad.active;return {ans:p.f.ans,act:!!a&&!a.locked};});
   if(!st)break;if(st.w||!st.act){await W(120);continue;}await pg.evaluate(v=>{for(const c of String(v))window.__nk.Pad.key(c);},st.ans);await W(420);}
 await W(2600);console.log('after tm (via Next round): gate',await pg.evaluate(()=>window.__nk.Dojo.gateOk()),'today',await pg.evaluate(()=>JSON.stringify(window.__nk.Dojo.st().today)));
 // try shop while locked
 await pg.evaluate(()=>{document.querySelector('#overlay').hidden=true;window.__nk.renderMap();window.__nk.show('scr-map');});await W(700);await drain();await shot('3-map');
 await pg.evaluate(()=>{[...document.querySelectorAll('.ow-hud .icon-btn')].find(b=>b.textContent==='Shop').click();});await W(1200);await shot('4-shop-blocked');await drain();
 console.log('screen after shop click',await pg.evaluate(()=>[...document.querySelectorAll('.screen')].find(s=>!s.hidden).id));
 // reach 20 min
 await pg.evaluate(()=>{const t=window.__nk.Dojo.st().today;t.pm.secs=700;t.tm.secs=520;});console.log('at 20 min gate',await pg.evaluate(()=>window.__nk.Dojo.gateOk()));
 // report
 await pg.evaluate(()=>{window.__nk.renderMap();window.__nk.show('scr-map');[...document.querySelectorAll('.ow-hud .icon-btn')].find(b=>b.textContent==='Report').click();});await W(500);await shot('5-report');
 // key belts done -> relaxed
 await pg.evaluate(()=>{const N=window.__nk;Object.entries(N.Dojo.KEY).forEach(([d,l])=>l.forEach(i=>N.Dojo.belt(d,i).earned='x'));});console.log('strict after key belts',await pg.evaluate(()=>window.__nk.Dojo.strict()));
 // start over
 await pg.evaluate(()=>{const b=[...document.querySelectorAll('#overlay button')].find(x=>x.textContent.includes('start over'));b.click();});await W(300);await shot('6-startover');
 await pg.evaluate(()=>{const b=[...document.querySelectorAll('#overlay button')].find(x=>x.textContent.startsWith('Yes, erase'));b.click();});await W(1500);
 console.log('after reset screen',await pg.evaluate(()=>[...document.querySelectorAll('.screen')].find(s=>!s.hidden).id),'coins',await pg.evaluate(()=>window.__nk.state.coins),'hero',await pg.evaluate(()=>!!window.__nk.state.hero));
 console.log('errors',errs);await b.close();})();
