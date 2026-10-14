const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message+' '+(e.stack||'').split('\n')[1]));const W=ms=>pg.waitForTimeout(ms);const shot=n=>pg.screenshot({path:`sp/${n}.png`});
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await pg.evaluate(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.state.dogPicked=1;N.state.npc.msg=N.cfg.message;N.Dojo.st().unlockDay=N.Dojo.st().today.day;N.renderMap();N.show('scr-map');});
 await W(5600);console.log('map chip',await pg.evaluate(()=>[...document.querySelectorAll('.st-chip')].map(c=>c.textContent).join('|')));await shot('st-map');
 // shop allowance
 await pg.evaluate(()=>{const N=window.__nk;N.ScreenTime.st().D.shop=290;[...document.querySelectorAll('.ow-hud .icon-btn')].find(b=>b.textContent==='Shop').click();});await W(500);
 console.log('in shop',await pg.evaluate(()=>!document.querySelector('#scr-shop').hidden));await W(11000);
 console.log('after allowance, screen:',await pg.evaluate(()=>[...document.querySelectorAll('.screen')].find(s=>!s.hidden).id),'talk:',await pg.evaluate(()=>document.querySelector('.talk-text').textContent));
 await pg.evaluate(()=>{for(let i=0;i<30;i++){const t=document.querySelector('#talk');if(!t.hidden)t.click();}});await W(300);
 // time up on map
 await pg.evaluate(()=>{const N=window.__nk;N.ScreenTime.st().D.total=45*60+1;N.ScreenTime.enforce();});await W(400);await shot('st-timeup');console.log('timeup shown',await pg.evaluate(()=>!!document.querySelector('.timeup')));
 // +15 with new PIN
 await pg.evaluate(()=>[...document.querySelectorAll('.timeup button')].find(b=>b.textContent.includes('+15')).click());await W(200);await shot('st-pin');
 for(const v of ['4826','4826']){await pg.fill('.pin-in',v);await pg.evaluate(()=>[...document.querySelectorAll('.pin-modal button')].find(b=>b.textContent==='OK').click());await W(200);}
 console.log('pin saved',await pg.evaluate(()=>window.__nk.state.parentPin),'limit now',await pg.evaluate(()=>window.__nk.ScreenTime.limit()/60),'overlay gone',await pg.evaluate(()=>document.querySelector('#overlay').hidden));
 // report
 await pg.evaluate(()=>{[...document.querySelectorAll('.ow-hud .icon-btn')].find(b=>b.textContent==='Report').click();});await W(400);await shot('st-report');
 // wrong pin on unlock-type action
 await pg.evaluate(()=>{const s=document.querySelector('.st-sel');s.value='60';s.dispatchEvent(new Event('change'));});await W(200);await pg.fill('.pin-in','1111');await pg.evaluate(()=>[...document.querySelectorAll('.pin-modal button')].find(b=>b.textContent==='OK').click());await W(200);
 console.log('wrong pin msg',await pg.evaluate(()=>document.querySelector('.pin-modal .tiny-ok').textContent),'limit still',await pg.evaluate(()=>window.__nk.ScreenTime.st().s.totalMin));
 await pg.fill('.pin-in','4826');await pg.evaluate(()=>[...document.querySelectorAll('.pin-modal button')].find(b=>b.textContent==='OK').click());await W(300);
 console.log('limit after right pin',await pg.evaluate(()=>window.__nk.ScreenTime.st().s.totalMin));
 console.log('errors',errs);await b.close();})();
