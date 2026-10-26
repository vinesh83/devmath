// Number Isle: the 3D map loads, the hero walks, a pad shows "Go", and doors press the 2D buttons
const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));pg.on('console',m=>{if(m.type()==='error')errs.push('c:'+m.text().slice(0,200));});
 const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);
 await ev(()=>{const N=window.__nk;N.Updater.check=()=>{};Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;
   Object.assign(N.state.hero,{skin:'#c68642',hair:'#2b1d14',outfit:'galaxy',hat:'wizard',cape:'gold',dogAcc:{hat:'wizard',face:'starglasses'}});N.state.surprises={'home-oct20':'x'};});
 await ev(()=>{const N=window.__nk;document.querySelectorAll('.screen').forEach(s=>s.hidden=true);document.querySelector('#scr-map').hidden=false;N.renderMap();});
 await W(9000);
 console.log('3D on:',await ev(()=>document.querySelector('#scr-map').classList.contains('w3d-on')),'canvas:',await ev(()=>!!document.querySelector('.w3d-canvas')),'toggle:',await ev(()=>(document.querySelector('.w3d-toggle')||{}).textContent));
 await pg.screenshot({path:'sp/t79-start.png'});
 // walk toward the Dojo pad (straight ahead, north)
 const dbg=()=>ev(()=>{const w=window.__isle.w;return JSON.stringify({paused:w.paused,pos:[+w.hero.position.x.toFixed(1),+w.hero.position.z.toFixed(1)],keys:w.keys,ov:document.querySelector('#overlay').hidden,cine:document.querySelector('#cine').hidden,c3:!!document.querySelector('.vp,#cine3d')});});console.log('before',await dbg());
 await ev(()=>window.__isle.w.teleport(0,9));await W(500);await pg.keyboard.down('w');await W(5000);console.log('during',await dbg());await pg.keyboard.up('w');await W(1500);
 await pg.screenshot({path:'sp/t79-walk.png'});
 await pg.screenshot({path:'sp/t79-pad.png'});console.log('act button:',await ev(()=>{const a=document.querySelector('.w3d-act');return a&&!a.hidden?a.textContent:null;}));
 const act=await ev(()=>{const a=document.querySelector('.w3d-act');return a&&!a.hidden;});
 if(act){await ev(()=>document.querySelector('.w3d-act').dispatchEvent(new PointerEvent('pointerdown',{bubbles:true})));await W(2500);console.log('after Go: dojo open?',await ev(()=>!document.querySelector('#scr-dojo')?.hidden||!document.querySelector('#overlay').hidden),await ev(()=>[...document.querySelectorAll('.screen')].filter(s=>!s.hidden).map(s=>s.id).join(',')));await pg.screenshot({path:'sp/t79-go.png'});}
 console.log('errors',errs.slice(0,5));await b.close();})();
