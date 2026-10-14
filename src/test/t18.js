const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message+' '+(e.stack||'').split('\n')[1]));const W=ms=>pg.waitForTimeout(ms);const shot=n=>pg.screenshot({path:`sp/${n}.png`,fullPage:true});
 await pg.goto('http://localhost:8765/');await W(500);
 await pg.evaluate(()=>{[...document.querySelectorAll('.dog-pick')].find(b=>b.textContent.includes('Dalmatian')).click();});await W(200);await shot('onboard-dog');
 await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 console.log('hero pet',await pg.evaluate(()=>window.__nk.state.hero.pet),'owned',await pg.evaluate(()=>window.__nk.state.owned.filter(x=>x.startsWith('pet:')).join(',')));
 // existing hero w/o dog -> picker
 await pg.evaluate(()=>{const N=window.__nk;N.state.dogPicked=0;N.state.hero.pet='none';Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.state.npc.msg=N.cfg.message;N.state.npc.day=N.Dojo.st().today.day;N.renderMap();N.show('scr-map');});
 await W(2600);await shot('picker');console.log('picker shown',await pg.evaluate(()=>!!document.querySelector('.dog-modal')));
 await pg.evaluate(()=>{[...document.querySelectorAll('.dog-modal .dog-pick')].find(b=>b.textContent.includes('Shiba')).click();[...document.querySelectorAll('.dog-modal button')].find(b=>b.textContent.startsWith('This one')).click();});await W(800);
 console.log('after pick',await pg.evaluate(()=>window.__nk.state.hero.pet));await pg.screenshot({path:'sp/map-dog.png'});
 // shop pets
 await pg.evaluate(()=>{const N=window.__nk;N.Dojo.st().unlockDay=N.Dojo.st().today.day;N.renderShop();N.show('scr-shop');});await W(300);
 await pg.evaluate(()=>{const t=[...document.querySelectorAll('#scr-shop button')].find(b=>/^Pets$/.test(b.textContent.trim()));t&&t.click();});await W(300);await shot('shop-pets');
 console.log('errors',errs);await b.close();})();
