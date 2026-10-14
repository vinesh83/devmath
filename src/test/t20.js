const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);
 // existing hero who already picked a dog
 await pg.goto('http://localhost:8765/');await pg.evaluate(()=>{localStorage.setItem('nk-state',JSON.stringify({v:1,hero:{name:'Dev',skin:'#e8b48a',hair:'#2b1d14',outfit:'scout',hat:'none',cape:'none',pet:'shiba'},coins:50,owned:['outfit:scout','pet:none','pet:shiba'],dogPicked:1,
   npc:{met:{knight:1,byte:1,sensei:1,pip:1,rocky:1},lore:0,msg:'HQ here! New mission: the Fact Dojo. Sensei Mako will make facts like 12 − 5 and 7 × 8 lightning fast. Every belt you earn powers up your mech!',day:'2026-10-04'},dojo:{v:2,strictAnnounced:'x',facts:{},belts:{}}}));});
 await pg.reload();await W(4000);
 console.log('welcome shown',await pg.evaluate(()=>!!document.querySelector('.ellie-modal')));await pg.screenshot({path:'sp/ellie-welcome.png'});
 await pg.evaluate(()=>[...document.querySelectorAll('.ellie-modal button')].find(b=>b.textContent.startsWith('Bring')).click());await W(800);
 console.log('pet now',await pg.evaluate(()=>window.__nk.state.hero.pet),'owned ellie',await pg.evaluate(()=>window.__nk.state.owned.includes('pet:ellie')));
 await pg.evaluate(()=>{const ow=document.querySelector('.ow'),h=document.querySelector('.ow-hero');});await pg.screenshot({path:'sp/ellie-map.png'});
 // new hero default
 await pg.evaluate(()=>localStorage.clear());await pg.reload();await W(500);console.log('onboard default selected',await pg.evaluate(()=>document.querySelector('.dog-pick.on').textContent));
 console.log('errors',errs);await b.close();})();
