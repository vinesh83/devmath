const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(900);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.cineEvery=0;N.state.howtoSeen=true;N.Lesson.off=true;N.state.no3d=true;N.Arcade.pickOff=true;N.Dojo.st().unlockDay=new Date().toISOString().slice(0,10);Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});setInterval(()=>{N.Pause.last=Date.now();},500);});
 // a level, then drag the grip up to make the paper big (card short)
 await ev(()=>{const N=window.__nk;N.startLevel(N.WORLDS.find(w=>w.id==='canyon'),0);});await W(1800);await ev(()=>{document.querySelector('#talk').hidden=true;});
 const g=await pg.locator('#scGrip').boundingBox();console.log('grip',JSON.stringify(g));
 if(g){await pg.mouse.move(g.x+g.width/2,g.y+g.height/2);await pg.mouse.down();await pg.mouse.move(g.x+g.width/2,g.y-260,{steps:8});await pg.mouse.up();}
 await W(300);console.log('level card',await ev(()=>{const c=document.querySelector('#card');return c.style.flex+' h='+Math.round(c.getBoundingClientRect().height);}),'saved',await ev(()=>JSON.stringify(window.__nk.state.grip)));
 await pg.screenshot({path:'sp/grip-level.png'});
 // leave to the map, start the Dojo
 await ev(()=>{const N=window.__nk;N.run=null;document.querySelectorAll('.screen').forEach(s=>s.hidden=true);N.Dojo.start('pm','round');});await W(2200);
 const m=await ev(()=>{const c=document.querySelector('#card'),r=c.getBoundingClientRect(),ink=c.querySelector('.dj-ink'),ir=ink&&ink.getBoundingClientRect(),L=document.querySelector('.left').getBoundingClientRect();
   return {flex:c.style.flex,cardH:Math.round(r.height),leftH:Math.round(L.height),inkBottom:ir&&Math.round(ir.bottom),cardBottom:Math.round(r.bottom),overflow:c.scrollHeight>c.clientHeight+2};});
 console.log('dojo',JSON.stringify(m));await pg.screenshot({path:'sp/grip-dojo.png'});
 // back to a level: the saved paper size still applies there
 await ev(()=>{const N=window.__nk;N.run=null;document.querySelectorAll('.screen').forEach(s=>s.hidden=true);document.querySelector('#scr-level').classList.remove('dojo');N.startLevel(N.WORLDS.find(w=>w.id==='canyon'),0);});await W(1800);
 console.log('level again',await ev(()=>{const c=document.querySelector('#card');return c.style.flex+' h='+Math.round(c.getBoundingClientRect().height);}));
 console.log('errors',errs);await b.close();})();
