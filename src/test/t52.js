const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.cineEvery=0;N.state.howtoSeen=true;Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});setInterval(()=>{N.Pause.last=Date.now();},500);});
 await ev(()=>window.__nk.Dojo.start('pm','round'));await W(2500);
 const write=(right,minP)=>ev(([right,minP])=>{const N=window.__nk,p=N.run.queue[N.run.idx],v=String(right?p.f.ans:p.f.ans+1);
   N.InkBox.lastR={text:v,minP,items:v.split('').map(ch=>({ch,p:minP,box:{x0:0,x1:60,y0:0,y1:100}})),imgs:[]};N.InkBox.lastUp=0;N.InkBox.drawing=false;N.Pad.input(N.Pad.active,v,'ink',minP,Date.now());return p.f.ans;},[right,minP]);
 const asked=()=>ev(()=>{const m=document.querySelector('.ink-check');return !!(m&&!document.querySelector('#overlay').hidden);});
 const yes=()=>ev(()=>{const b=[...document.querySelectorAll('.ink-check button')].find(x=>/Yes/.test(x.textContent));if(b)b.click();});
 const skip=()=>ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Skip/.test(x.textContent));if(b)b.click();});
 for(const [name,right,minP] of [['wrong, clear writing',false,0.95],['right, clear writing',true,0.95],['right, messy writing',true,0.4],['wrong, messy writing',false,0.4],['wrong, clear again',false,0.97]]){
   const idx0=await ev(()=>window.__nk.run.idx);await write(right,minP);await W(1500);const a=await asked();if(a){await yes();await W(1200);}
   console.log(name.padEnd(22),'asked:',a);await skip();await W(900);await ev(()=>{document.querySelector('#talk').hidden=true;});}
 console.log('errors',errs);await b.close();})();
