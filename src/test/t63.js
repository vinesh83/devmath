const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const pg=await b.newPage({viewport:{width:900,height:600},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);
 await ev(()=>{document.querySelector('#talk').hidden=true;window.__res=null;window.__nk.Arcade.play({kind:'mech',power:10}).then(v=>window.__res=v);});
 for(let i=0;i<40&&!(await ev(()=>!!window.Cine3D&&!!document.querySelector('canvas[data-engine], body > div canvas')));i++)await W(250);
 await W(1500);const has3d=await ev(()=>!!document.querySelector('#cine3d'));console.log('3D movie showing',has3d);
 await ev(()=>{const s=[...document.querySelectorAll('#cine3d button')].find(x=>/Skip/.test(x.textContent));s&&s.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}));});await W(1500);
 console.log('after skip: 3D gone',await ev(()=>!!!document.querySelector('#cine3d')),'brawl running',await ev(()=>!document.querySelector('#cine').hidden&&!!window.__nk.Brawl.G),'mech mode',await ev(()=>window.__nk.Brawl.G&&window.__nk.Brawl.G.mech));
 // world intro path
 await ev(()=>{document.querySelector('#cine .skip')&&document.querySelector('#cine .skip').click();});await W(800);
 await ev(()=>{const N=window.__nk;window.__wd=false;N.Intro.world(N.WORLDS[1]).then(()=>window.__wd=true);});await W(4000);
 console.log('world 3D showing',await ev(()=>!!document.querySelector('#cine3d')));
 await ev(()=>{const s=[...document.querySelectorAll('#cine3d button')].find(x=>/Skip/.test(x.textContent));s&&s.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}));});await W(800);
 console.log('world intro resolved',await ev(()=>window.__wd),'errors',errs);await b.close();})();
