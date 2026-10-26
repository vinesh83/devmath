// Detail pass: market, plaza, lamps, labels, controls
const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));pg.on('console',m=>{if(m.type()==='error'&&!/CERT/.test(m.text()))errs.push('c:'+m.text().slice(0,200));});
 const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.addInitScript(()=>{window.__w3dNoAuto=true;window.__w3dNoIntro=true;});
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Agent Dev');await pg.click('text=Start the adventure');await W(500);
 await ev(()=>{const N=window.__nk;N.Updater.check=()=>{};Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;
   Object.assign(N.state.hero,{skin:'#c68642',hair:'#2b1d14',outfit:'galaxy',hat:'wizard',cape:'gold',dogAcc:{hat:'wizard',face:'starglasses'}});N.state.surprises={'home-oct20':'x'};N.renderMap();});
 await W(7000);
 const shot=async(name,f)=>{await ev(f);await ev(()=>{const w=window.__isle.w;w.setPaused(true);for(let i=0;i<30;i++)w.step(0.05);w.r.render(w.sc,w.cam);});await pg.screenshot({path:'sp/'+name+'.png'});};
 await shot('t81-plaza',()=>{const w=window.__isle.w;w.yaw=Math.PI;w.teleport(0,25);});
 await shot('t81-shop',()=>{const w=window.__isle.w,o=w.siteObjs.find(x=>x.s.id==='shop');w.teleport(o.px+Math.sin(1.1)*3,o.pz+Math.cos(1.1)*3);w.yaw=1.1+Math.PI;});
 console.log('shop button:',await ev(()=>{const a=document.querySelector('.w3d-act');return a.hidden?null:a.textContent;}));
 await shot('t81-dojo',()=>{const w=window.__isle.w;w.yaw=Math.PI;w.teleport(1,11);});
 console.log('errors',errs.slice(0,6));await b.close();})();
