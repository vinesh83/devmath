// Upgraded island: fly-in, scenery, music element, no errors; screenshots for review
const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));pg.on('console',m=>{if(m.type()==='error'&&!/CERT/.test(m.text()))errs.push('c:'+m.text().slice(0,200));});
 const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.addInitScript(()=>{window.__w3dNoAuto=true;});
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Agent Dev');await pg.click('text=Start the adventure');await W(500);
 await ev(()=>{const N=window.__nk;N.Updater.check=()=>{};Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;
   Object.assign(N.state.hero,{skin:'#c68642',hair:'#2b1d14',outfit:'galaxy',hat:'wizard',cape:'gold',dogAcc:{hat:'wizard',face:'starglasses'}});N.state.surprises={'home-oct20':'x'};N.renderMap();});
 // the fly-in is driven by frame time; in this slow software renderer step it by hand for the screenshots
 await W(6000);console.log('flying:',await ev(()=>!!(window.__isle.w&&window.__isle.w.fly)),'title:',await ev(()=>!!document.querySelector('.w3d-title')));
 await ev(()=>{const w=window.__isle.w;w.setPaused(true);for(let i=0;i<16;i++)w.step(0.05);w.r.render(w.sc,w.cam);});await pg.screenshot({path:'sp/t80-intro.png'});
 await ev(()=>{const w=window.__isle.w;for(let i=0;i<140;i++)w.step(0.05);w.r.render(w.sc,w.cam);});await pg.screenshot({path:'sp/t80-hero.png'});
 console.log('title gone:',await ev(()=>!document.querySelector('.w3d-title')));
 await ev(()=>{const w=window.__isle.w;w.yaw=Math.PI*1.25;w.teleport(-14,-8);for(let i=0;i<60;i++)w.step(0.05);w.r.render(w.sc,w.cam);});await pg.screenshot({path:'sp/t80-mountain.png'});
 await ev(()=>{const w=window.__isle.w;w.yaw=Math.PI;w.teleport(0,-40);for(let i=0;i<60;i++)w.step(0.05);w.r.render(w.sc,w.cam);});await pg.screenshot({path:'sp/t80-fortress.png'});
 await ev(()=>{const w=window.__isle.w;w.cam.position.set(10,110,95);w.cam.lookAt(-4,0,-16);w.r.render(w.sc,w.cam);});await pg.screenshot({path:'sp/t80-top.png'});
 console.log('music el:',await ev(()=>{const a=window.__isle.aud;return a?a.src.split('/').pop():null;}),'chiptune song:',await ev(()=>window.__nk&&window.Music?Music.song:'n/a'));
 console.log('errors',errs.slice(0,6));await b.close();})();
