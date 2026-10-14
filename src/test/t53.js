const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.cineEvery=0;N.state.howtoSeen=true;Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});setInterval(()=>{N.Pause.last=Date.now();},500);});
 for(const dj of ['pm','tm']){
 await ev(d=>window.__nk.Dojo.start(d,'round'),dj);await W(2500);
 const cur=()=>ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx];return {idx:N.run.idx,k:p.k,ans:p.f.ans,q:p.f.a+' '+p.f.op+' '+p.f.b};});
 const key=s=>ev(s=>{for(const c of String(s))window.__nk.Pad.key(c);},s);
 const state=()=>ev(()=>{const c=document.querySelector('#card');const h=c.querySelector('.bk-hint');return {hint:!!h,hintText:h&&h.textContent,fld:document.querySelector('.dj-expr').textContent,show:!!c.querySelector('.bk-show'),reveal:!!c.querySelector('.dj-miss'),btn:[...document.querySelectorAll('#actions button')].map(x=>x.textContent).join('|')};});
 // skip teach items
 let c=await cur();for(let i=0;i<6&&c.k==='teach';i++){await key(c.ans);await W(2500);c=await cur();}
 console.log(dj,'A',c.q,'k',c.k);await key(c.ans+1);await W(1000);let s=await state();console.log(' first miss:',JSON.stringify(s),'answer visible?',s.fld.includes('= '+c.ans)||new RegExp('\\b'+c.ans+'\\b').test(s.fld));
 await pg.screenshot({path:`sp/bk-hint-${dj}.png`});await W(1500);await pg.screenshot({path:`sp/bk-hint2-${dj}.png`});
 await key(c.ans);await W(500);s=await state();await W(700);console.log(' retry right:',s.show,s.hint,await ev(()=>{const e=document.querySelector('.bk-ans');return e&&e.textContent+' '+e.getBoundingClientRect().height;}));await pg.screenshot({path:`sp/bk-show-${dj}.png`});await W(2000);
 c=await cur();for(let i=0;i<6&&c.k==='teach';i++){await key(c.ans);await W(2500);c=await cur();}
 console.log(dj,'B',c.q);await key(c.ans+1);await W(1000);await key(c.ans+2);await W(1000);s=await state();console.log(' second miss -> reveal:',s.reveal,'hint gone',!s.hint,'btn',s.btn);
 await ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Skip/.test(x.textContent));b&&b.click();});await W(800);
 c=await cur();console.log(dj,'C',c.q,c.k);await key(c.ans);await W(400);s=await state();console.log(' right first try, show replay:',s.show);await W(2000);
 await ev(()=>{const N=window.__nk;N.run.queue.length=N.run.idx+1;});await ev(()=>{const N=window.__nk;N.Dojo.finish&&N.Dojo.finish();});await W(1500);await ev(()=>{document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);const N=window.__nk;N.renderMap&&N.renderMap();N.show&&N.show('scr-map');});await W(500);}
 const log=await ev(()=>window.__nk.Local?window.__nk.Local.log.slice(-8).map(x=>x.mode+':'+x.firstTry+'/'+x.solved):null);console.log('log',log);
 console.log('errors',errs);await b.close();})();
