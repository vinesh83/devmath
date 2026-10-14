const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Brawl.off=true;N.state.cineEvery=0;N.state.howtoSeen=true;
   Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});N.Dojo.st().unlockDay=new Date().toISOString().slice(0,10);setInterval(()=>{N.Pause.last=Date.now();},500);});
 // fact filter
 const ff=await ev(()=>{const N=window.__nk;const D=N.state.dojo=N.state.dojo||{};D.facts=D.facts||{};const seen=['2x7','2x3','2x2','5x5','2x4','4x10','2x5','5x6','5x9','5x7','5x8','3x4'];seen.forEach(k=>D.facts[k]={n:3});
   const out=new Set();for(let i=0;i<300;i++)out.add(N.genFact('all').key);return {seen,got:[...out],outside:[...out].filter(k=>!seen.includes(k))};});
 console.log('facts outside Dojo-seen set:',ff.outside,'distinct',ff.got.length);
 const fresh=await ev(()=>{const N=window.__nk;N.state.dojo.facts={};const out=new Set();for(let i=0;i<300;i++)out.add(N.genFact('all').key);return [...out].filter(k=>!/(^|x)(2|5|10)(x|$)/.test(k));});
 console.log('fresh profile non-2/5/10 facts:',fresh);
 // levels: canyon
 const ws=await ev(()=>window.__nk.WORLDS.map(w=>w.id+':'+w.levels.map(l=>l.join('/')).join(' | ')));console.log(ws.slice(0,3));
 for(const li of [0,1]){
 await ev(li=>{const N=window.__nk;N.startLevel(N.WORLDS.find(w=>w.id==='canyon'),li);},li);await W(1500);await ev(()=>{document.querySelector('#talk').hidden=true;});
 const info=await ev(()=>{const N=window.__nk;const p=N.run.queue[N.run.idx];return {n:N.run.queue.length,kind:p.kind,op:p.op,nums:p.nums,ans:p.answer};});console.log('level',li,JSON.stringify(info));
 const typeAns=v=>ev(v=>{const N=window.__nk;N.Pad.set(N.Pad.active,String(v));},v);
 const submit=()=>ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Submit/.test(x.textContent));b&&b.click();});
 const wrong=li===1;await typeAns(wrong?info.ans+100:info.ans);await submit();await W(600);
 const chk=await ev(()=>{const c=document.querySelector('.checkbox');return c&&c.textContent.slice(0,80);});console.log(' after first Submit, check box:',chk);
 await pg.screenshot({path:`sp/req-check-${li}.png`});
 // pick the right estimate, then answer yes/no honestly
 await ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx],ck=N.estimateArith(p);const bt=[...document.querySelectorAll('.checkbox .choices .choice')].find(x=>x.textContent.replace(/,/g,'')===String(ck.est));bt&&bt.click();});await W(300);
 await ev(w=>{const bt=[...document.querySelectorAll('.checkbox .choice')].find(x=>(w?/No, way off/:/Yes, close/).test(x.textContent));bt&&bt.click();},wrong);await W(300);
 console.log(' verdict:',await ev(()=>document.querySelector('.checkbox .verdict')?.textContent));
 if(wrong){await submit();await W(1500);console.log(' wrong -> lesson playing:',await ev(()=>!document.querySelector('#cine').hidden),'lesson btn:',await ev(()=>!!document.querySelector('#card .lesson-btn')));
   await ev(()=>document.querySelector('#cine .skip').click());await W(500);await typeAns(info.ans);await submit();await W(1200);
   console.log(' fixed: totals',JSON.stringify(await ev(()=>window.__nk.state.totals)));}
 else{await submit();await W(1200);console.log(' right: totals',JSON.stringify(await ev(()=>window.__nk.state.totals)));}
 await ev(()=>{const N=window.__nk;N.renderMap();N.show('scr-map');document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);});await W(400);}
 console.log('errors',errs);await b.close();})();
