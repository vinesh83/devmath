const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820}});const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1500);
 await ev(()=>{document.querySelector('#talk').hidden=true;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);});
 pg.on('pageerror',e=>console.log('ERR',e.message));await ev(()=>{window.__cerr=[];const N=window.__nk,_p=N.Cine.play.bind(N.Cine);N.Cine.play=(d,fn,o)=>_p(d,(...a)=>{try{fn(...a);}catch(e){window.__cerr.push(e.message);}},o);});
 for(const [k,ms] of [['hammer',780],['anvil',820],['balloon',600]]){await ev(k=>{window.__nk.Inter.play(k);},k);await W(ms);console.log(k,'cine shown',await ev(()=>!document.querySelector('#cine').hidden),await ev(()=>window.__cerr.slice(0,2)));await pg.screenshot({path:`sp/fix-${k}.png`});await W(2500);}
 await b.close();})();
