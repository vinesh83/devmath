const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.howtoSeen=true;Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});setInterval(()=>{N.Pause.last=Date.now();},500);});
 await ev(()=>window.__nk.Dojo.start('pm','round'));await W(2500);
 // skip to a problem whose answer is not 1
 for(let i=0;i<5;i++){const a=await ev(()=>{const N=window.__nk;return N.run.queue[N.run.idx].f.ans;});if(a!==1)break;await ev(()=>{const N=window.__nk;N.Pad.key('1');});await W(1200);}
 const r=await ev(()=>{const c=document.querySelector('.dj-ink canvas').getBoundingClientRect();return {x:c.left,y:c.top,w:c.width,h:c.height};});
 const x=r.x+r.w*0.5;await pg.mouse.move(x,r.y+r.h*0.15);await pg.mouse.down();for(let i=1;i<=12;i++)await pg.mouse.move(x+1,r.y+r.h*(0.15+0.7*i/12));await pg.mouse.up();
 await W(3000);console.log('modal',await ev(()=>{const m=document.querySelector('.ink-check');return m&&m.querySelector('.ink-q').textContent;}),'snap',await ev(()=>!!document.querySelector('.ink-check img')));
 await pg.screenshot({path:'sp/ink-check-real.png'});console.log('errors',errs);await b.close();})();
