const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1500);
 await ev(()=>{const N=window.__nk;document.querySelector('#talk').hidden=true;N.Talk.open=false;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);window.__cerr=[];
   const _p=N.Cine.play.bind(N.Cine);N.Cine.play=(d,fn,o)=>_p(d,(...a)=>{try{fn(...a);}catch(e){window.__cerr.push(e.message+' @'+(e.stack||'').split('\n')[1]);}},o);});
 const all=await ev(()=>Object.keys(window.__nk.Inter?Object.fromEntries(Object.entries({}) ):{}));
 const kinds=['shrink','giant','piano','rocketboots','octopus','skate','tickle','catapult','magnet','candy','bubble','trampoline','ghost','laserdog','kart'];
 const fresh=new Set(kinds);
 for(const k of kinds){await ev(()=>{window.__cerr=[];});const t0=Date.now();await ev(k=>{window.__done=false;window.__nk.Inter.play(k).then(()=>window.__done=true);},k);
   if(fresh.has(k)){await W(1150);await pg.screenshot({path:`sp/i3-${k}.png`});}
   for(let i=0;i<40&&!(await ev(()=>window.__done));i++)await W(100);
   console.log(k.padEnd(11),'ms',Date.now()-t0,'err',await ev(()=>window.__cerr.slice(0,2)));}
 console.log('every',await ev(()=>window.__nk.Inter.every()),'errors',errs);await b.close();})();
