const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message+' '+(e.stack||'').split('\n')[1]));
 const W=ms=>pg.waitForTimeout(ms);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await pg.evaluate(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().unlockDay=N.Dojo.st().today.day;});
 console.log('owned supers',await pg.evaluate(()=>JSON.stringify([window.__nk.state.inv.supers,window.__nk.state.mech])));
 for(const k of ['rockets','tornado','ice','sword','ninja','volcano','shark']){
   await pg.evaluate(k=>{window.__sp=window.__nk.Cine.superMove(k,{name:'Glitch',col:'#5ef2ff'},false);},k);
   await W(1350);await pg.screenshot({path:`sup/${k}-a.png`});await W(800);await pg.screenshot({path:`sup/${k}-b.png`});await pg.evaluate(()=>window.__sp);await W(900);}
 // mech bay super tab
 await pg.evaluate(()=>{window.__nk.openMechBay(null);});await W(300);await pg.evaluate(()=>{[...document.querySelectorAll('.bay-tab, .tab, button')].find(b=>b.textContent==='Super').click();});await W(300);await pg.screenshot({path:'sup/bay.png'});
 // battle super with random
 await pg.evaluate(()=>{const N=window.__nk;N.state.howtoSeen=true;N.startRun({title:'T',mode:'level',world:'canyon',level:0,color:'#e8643a',problems:[N.GEN.add(1)]});});await W(500);
 const used=[];for(let i=0;i<4;i++){await pg.evaluate(()=>{const B=window.__nk.Battle;B.s.pips=6;B.updSuper();document.querySelector('#superBtn').click();});await W(200);used.push(await pg.evaluate(()=>window.__nk.Battle.lastSuper));await W(3200);}
 console.log('random supers used',used);
 console.log('errors',errs);await b.close();})();
