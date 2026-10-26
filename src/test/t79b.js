const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1000);
 await ev(()=>{const N=window.__nk;N.Updater.check=()=>{};Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.state.surprises={'home-oct20':'x'};N.Dojo.st().unlockDay=new Date().toISOString().slice(0,10);});
 await W(7000);
 // each place: stand on its pad and check the button
 const res=await ev(async()=>{const w=window.__isle.w,out=[];for(const o of w.siteObjs){w.teleport(o.px,o.pz);await new Promise(r=>setTimeout(r,900));const a=document.querySelector('.w3d-act');out.push(o.s.id+':'+(a.hidden?'NO':a.textContent)+(w.isl.h(o.px,o.pz)<0.2?'(water!)':''));}return out.join(' ');});
 console.log('pads:',res);
 // world card
 await ev(()=>{const w=window.__isle.w,o=w.siteObjs.find(x=>x.s.id==='canyon');w.teleport(o.px,o.pz);});await W(1200);
 await ev(()=>document.querySelector('.w3d-act').dispatchEvent(new PointerEvent('pointerdown',{bubbles:true})));await W(800);
 console.log('card:',await ev(()=>{const c=document.querySelector('.w3d-card');return c.hidden?null:c.textContent;}));await pg.screenshot({path:'sp/t79-card.png'});
 await ev(()=>[...document.querySelectorAll('.w3d-lv')][0].click());await W(2500);console.log('level started:',await ev(()=>{const r=window.__nk.run;return r?r.spec.title:null;}));
 // overhead view
 await ev(()=>{const N=window.__nk;N.run=null;document.querySelectorAll('.screen').forEach(s=>s.hidden=true);document.querySelector('#scr-map').hidden=false;document.querySelector('#overlay').hidden=true;N.renderMap();});await W(1500);
 await ev(()=>{const w=window.__isle.w;w.setPaused(true);w.cam.position.set(0,120,70);w.cam.lookAt(0,0,-12);w.r.render(w.sc,w.cam);});await pg.screenshot({path:'sp/t79-top.png'});
 console.log('errors',errs.slice(0,5));await b.close();})();
