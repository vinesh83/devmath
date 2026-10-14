const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const pg=await b.newPage({viewport:{width:900,height:600},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const aud=[];pg.on('request',r=>{if(/audio\//.test(r.url()))aud.push(r.url().split('/').pop());});const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);
 await ev(()=>{document.querySelector('#talk').hidden=true;window.__bd=false;window.__nk.Dojo.ceremony('pm',1).then(()=>window.__bd=true);});
 for(let i=0;i<40&&!(await ev(()=>!!document.querySelector('#cine3d')));i++)await W(250);console.log('belt 3D showing',await ev(()=>!!document.querySelector('#cine3d')));
 await W(1500);await ev(()=>{const s=[...document.querySelectorAll('#cine3d button')].find(x=>/Skip/.test(x.textContent));s&&s.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}));});await W(1500);
 console.log('after skip: belt card/overlay shown',await ev(()=>!document.querySelector('#overlay').hidden||!document.querySelector('#cine').hidden),'audio',[...new Set(aud)].join(' '),'errors',errs);await b.close();})();
