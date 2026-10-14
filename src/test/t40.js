const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const ctx=await b.newContext({viewport:{width:1180,height:820},hasTouch:true});const pg=await ctx.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1500);
 await ev(()=>{const N=window.__nk;document.querySelector('#talk').hidden=true;N.Talk.open=false;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);N.state.coins=900;N.state.hero.pet='ellie';if(!N.state.owned.includes('pet:ellie'))N.state.owned.push('pet:ellie');});
 const shop=async tab=>{await ev(()=>{const N=window.__nk;N.renderShop();N.show('scr-shop');});await W(200);await ev(t=>[...document.querySelectorAll('.tab')].find(x=>x.textContent===t).click(),tab);await W(300);};
 const tapItem=async name=>{await ev(n=>[...document.querySelectorAll('.item')].find(x=>x.querySelector('.nm').textContent===n).click(),name);await W(250);};
 await shop('Dog Gear');for(const n of ['Royal Crown','Sunglasses','Super Cape'])await tapItem(n);
 console.log('dogAcc',await ev(()=>JSON.stringify(window.__nk.state.hero.dogAcc)),'coins',await ev(()=>window.__nk.state.coins));await pg.screenshot({path:'sp/shop-doggear.png'});
 await shop('Rides');await tapItem('Sports Car');console.log('ride',await ev(()=>window.__nk.state.hero.ride),'coins',await ev(()=>window.__nk.state.coins));
 await tapItem('Monster Truck');console.log('goal',await ev(()=>JSON.stringify(window.__nk.state.goal)),'label',await ev(()=>[...document.querySelectorAll('.item')].find(x=>/Monster/.test(x.textContent)).querySelector('.pr').textContent));
 await pg.screenshot({path:'sp/shop-rides.png'});
 await ev(()=>{const N=window.__nk;N.renderMap();N.show('scr-map');});await W(800);console.log('goal chip',await ev(()=>{const g=document.querySelector('.goal-chip');return g&&g.textContent;}));await pg.screenshot({path:'sp/map-ride.png'});
 // battle: one tap on the right arrow dashes; ATTACK from far dashes in
 await ev(()=>{window.__nk.Brawl.play({power:20});});await W(4800);
 const pos=s=>ev(s=>{const e=document.querySelector(s).getBoundingClientRect();return [e.left+e.width/2,e.top+e.height/2];},s);
 const right=await pos('.bb-btn.mv:nth-child(2)'),atk=await pos('.bb-btn.atk');
 const x0=await ev(()=>window.__nk.Brawl.G.hero.x);await pg.touchscreen.tap(right[0],right[1]);await W(400);const x1=await ev(()=>window.__nk.Brawl.G.hero.x);
 console.log('one tap moved',Math.round(x1-x0),'px');
 const d0=await ev(()=>window.__nk.Brawl.G.dmg);for(let i=0;i<4;i++){await pg.touchscreen.tap(atk[0],atk[1]);await W(450);}
 console.log('dist now',Math.round(await ev(()=>window.__nk.Brawl.G.foe.x-window.__nk.Brawl.G.hero.x)),'damage dealt',(await ev(()=>window.__nk.Brawl.G.dmg))-d0);
 await pg.screenshot({path:'sp/battle-dash.png'});
 console.log('version label',await ev(()=>{document.querySelector('#cine .skip').click();return 1;}));
 console.log('errors',errs);await b.close();})();
