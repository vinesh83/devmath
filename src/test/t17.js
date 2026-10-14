const { chromium } = require('/opt/node-tools/node_modules/playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const shot=n=>pg.screenshot({path:`sp/${n}.png`});
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await pg.evaluate(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.howtoSeen=true;N.state.bugTip=1;});
 // pause keeps latency honest
 await pg.evaluate(()=>window.__nk.Dojo.start('tm','round'));await W(1000);
 await pg.evaluate(()=>document.querySelector('#lv-pause').click());await W(300);await shot('paused');console.log('paused',await pg.evaluate(()=>window.__nk.Pause.on));
 await W(3000);await pg.evaluate(()=>[...document.querySelectorAll('#overlay button')].find(b=>b.textContent.startsWith('Resume')).click());await W(300);
 await pg.evaluate(()=>{const N=window.__nk;const p=N.run.queue[N.run.idx];for(const c of String(p.f.ans))N.Pad.key(c);});await W(800);
 console.log('latency after 3s pause (should be ~1.3s, not ~4.3s):',await pg.evaluate(()=>window.__nk.run.results[0]&&window.__nk.run.results[0].ms));
 // idle auto-pause
 await pg.evaluate(()=>{window.__nk.Pause.last=Date.now()-61000;});await W(4600);console.log('auto-paused when idle',await pg.evaluate(()=>window.__nk.Pause.on));
 await pg.evaluate(()=>[...document.querySelectorAll('#overlay button')].find(b=>b.textContent.startsWith('Resume')).click());
 // dogs in shop
 await pg.evaluate(()=>{const N=window.__nk;N.state.coins=900;N.Dojo.st().unlockDay=N.Dojo.st().today.day;N.show('scr-map');N.renderShop();N.show('scr-shop');});await W(300);
 await pg.evaluate(()=>{const t=[...document.querySelectorAll('#scr-shop button')].find(b=>/pet/i.test(b.textContent));t&&t.click();});await W(300);
 await pg.evaluate(()=>{const t=[...document.querySelectorAll('#scr-shop button')].find(b=>/Corgi/.test(b.textContent));t&&t.click();});await W(300);await shot('shop-dogs');
 // auto update
 await pg.evaluate(()=>{const N=window.__nk;N.renderMap();N.show('scr-map');});await W(500);
 const real=fs.readFileSync('../site/version.txt','utf8');fs.writeFileSync('../site/version.txt','29990101000000\n');
 await pg.evaluate(()=>{for(let i=0;i<30;i++){const t=document.querySelector('#talk');if(t&&!t.hidden)t.click();}});await pg.evaluate(()=>window.__nk.Updater.check());await W(5000);console.log('url after update check:',pg.url());fs.writeFileSync('../site/version.txt',real);
 console.log('state kept after reload, hero:',await pg.evaluate(()=>window.__nk.state.hero&&window.__nk.state.hero.name));
 console.log('errors',errs);await b.close();})();
