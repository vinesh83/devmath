const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.state.cineEvery=0;N.state.howtoSeen=true;N.Lesson.off=true;
   Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});setInterval(()=>{N.Pause.last=Date.now();},500);});
 // picker
 await ev(()=>{window.__k=null;window.__nk.Arcade.pick(false).then(k=>window.__k=k);});await W(500);
 console.log('picker buttons',await ev(()=>[...document.querySelectorAll('.ap-btn')].map(b=>b.textContent).join(' | ')));await pg.screenshot({path:'sp/picker.png'});
 await pg.click('.ap-battle');await W(200);console.log('picked',await ev(()=>window.__k));
 await ev(()=>{window.__k=null;window.__nk.Arcade.pick(false).then(k=>window.__k=k);});await W(300);await pg.click('.ap-surprise');await W(200);console.log('surprise ->',await ev(()=>window.__k));
 console.log('boss ->',await ev(()=>window.__nk.Arcade.pick(true)));
 // Dojo flash in a level after the Dojo is done
 await ev(()=>{const N=window.__nk;N.Brawl.off=true;N.Dojo.st().unlockDay=new Date().toISOString().slice(0,10);const D=N.Dojo.st();['7+2','1+8','9-5','5x7','3x4','8-2'].forEach(k=>{D.facts[k]=Object.assign(D.facts[k]||{},{n:2,ok:1,days:{},lats:[]});});});
 await ev(()=>{const N=window.__nk;N.startLevel(N.WORLDS.find(w=>w.id==='canyon'),0);});await W(1500);await ev(()=>{document.querySelector('#talk').hidden=true;});
 console.log('queue',await ev(()=>window.__nk.run.queue.map(p=>p.kind==='dfact'?'dfact:'+p.f.key:p.kind).join(' ')));
 // play until the first dfact
 for(let i=0;i<4;i++){const k=await ev(()=>window.__nk.run.queue[window.__nk.run.idx].kind);if(k==='dfact')break;
   await ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx];N.Pad.set(N.Pad.active,String(p.answer));});
   for(let j=0;j<3;j++){await ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Submit|Next|Continue|▸/.test(x.textContent));b&&b.click();});await W(700);
     await ev(()=>{const bt=[...document.querySelectorAll('.checkbox .choice')];if(bt.length){const N=window.__nk,ck=N.estimateArith(N.run.queue[N.run.idx]);const c=bt.find(x=>x.textContent.replace(/,/g,'')===String(ck.est));c&&c.click();}});await W(300);
     await ev(()=>{const y=[...document.querySelectorAll('.checkbox .choice')].find(x=>/Yes, close/.test(x.textContent));y&&y.click();});await W(300);}
   await W(800);}
 const cur=await ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx];return {kind:p.kind,key:p.f&&p.f.key,ans:p.answer,card:document.querySelector('#card').textContent.slice(0,60)};});console.log('now',JSON.stringify(cur));
 const n0=await ev(k=>window.__nk.Dojo.st().facts[k].n,cur.key);
 await ev(a=>{const N=window.__nk;N.Pad.set(N.Pad.active,String(a+1));},cur.ans);await ev(()=>[...document.querySelectorAll('#actions button')].find(x=>/Submit/.test(x.textContent)).click());await W(800);
 console.log('wrong -> blocks hint',await ev(()=>!!document.querySelector('#card .bk-hint')),'answer hidden',await ev(a=>!document.querySelector('#card').textContent.includes('= '+a),cur.ans));await pg.screenshot({path:'sp/dflash.png'});
 await ev(a=>{const N=window.__nk;N.Pad.set(N.Pad.active,String(a));},cur.ans);await ev(()=>[...document.querySelectorAll('#actions button')].find(x=>/Submit/.test(x.textContent)).click());await W(800);
 console.log('dojo record n',n0,'->',await ev(k=>window.__nk.Dojo.st().facts[k].n,cur.key),'idx moved',await ev(()=>window.__nk.run.idx));
 console.log('errors',errs);await b.close();})();
