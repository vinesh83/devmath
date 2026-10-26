// The island's Shop opens the real store, with its items
const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.addInitScript(()=>{window.__w3dNoAuto=true;window.__w3dNoIntro=true;});
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Agent Dev');await pg.click('text=Start the adventure');await W(500);
 await ev(()=>{const N=window.__nk;N.Updater.check=()=>{};Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.state.surprises={'home-oct20':'x'};N.state.coins=250;N.Dojo.st().unlockDay=new Date().toISOString().slice(0,10);N.renderMap();});
 await W(7000);
 await ev(()=>{const w=window.__isle.w,o=w.siteObjs.find(x=>x.s.id==='shop');w.teleport(o.px,o.pz);});await W(1500);
 console.log('shop buttons:',await ev(()=>[...document.querySelectorAll('button')].filter(x=>x.textContent.trim()==='Shop').map(x=>x.className+'|vis:'+(x.offsetParent!==null)+'|onclick:'+(typeof x.onclick)).join(' ; ')));
 await ev(()=>document.querySelector('.w3d-act').dispatchEvent(new PointerEvent('pointerdown',{bubbles:true})));await W(1500);
 console.log('screen:',await ev(()=>[...document.querySelectorAll('.screen')].filter(s=>!s.hidden).map(s=>s.id).join(',')),'items:',await ev(()=>document.querySelectorAll('#scr-shop button').length),'island paused:',await ev(()=>window.__isle.w.paused));
 await pg.screenshot({path:'sp/t81-store.png'});console.log('errors',errs);await b.close();})();
