const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(900);
 await ev(()=>{const N=window.__nk;N.Updater.check=()=>{};Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Brawl.off=true;N.Lesson.off=true;N.state.no3d=true;N.Arcade.pickOff=true;N.state.howtoSeen=true;N.state.cineEvery=0;N.Dojo.st().unlockDay=new Date().toISOString().slice(0,10);N.DivLessons.ok={};N.DivLessons.probing=true;setInterval(()=>{N.Pause.last=Date.now();const t=document.querySelector('#talk');if(t&&!t.hidden)t.hidden=true;},250);});
 await ev(()=>window.__nk.Dungeon.open());await W(400);await ev(()=>document.querySelector('.dv-flip-drill').click());await W(1500);
 for(let i=0;i<10;i++){const p=await ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx];return {part:p.part,a:p.a,ans:p.answer};});
   if(p.part==='mul'&&p.a>=8)break;
   await ev(v=>{const N=window.__nk;N.Pad.key('clr');for(const ch of String(v))N.Pad.key(ch);[...document.querySelectorAll('#actions button')].find(x=>/Submit/.test(x.textContent)).click();},p.ans);await W(900);
   await ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Next|Finish/.test(x.textContent));b&&b.click();});await W(1200);}
 await pg.screenshot({path:'sp/t77-tall.png'});
 console.log(await ev(()=>{const f=document.querySelector('#card .ans-row').getBoundingClientRect(),c=document.querySelector('#card').getBoundingClientRect();return {expr:document.querySelector('#card .expr').textContent,ansBottom:Math.round(f.bottom),cardBottom:Math.round(c.bottom)};}));
 await b.close();})();
