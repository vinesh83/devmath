const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1500);
 await ev(()=>{const N=window.__nk;document.querySelector('#talk').hidden=true;N.Talk.open=false;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);window.__cerr=[];
   const _p=N.Cine.play.bind(N.Cine);N.Cine.play=(d,fn,o)=>_p(d,(...a)=>{try{fn(...a);}catch(e){window.__cerr.push(e.message);}},o);});
 for(const k of ['stampede','zoomies','banana','pie','boot','robot','surf','disco','fireworks']){
   await ev(k=>{window.__done=false;window.__nk.Inter.play(k).then(()=>window.__done=true);},k);await W(1300);await pg.screenshot({path:`sp/inter-${k}-a.png`});await W(700);await pg.screenshot({path:`sp/inter-${k}-b.png`});
   await W(1100);console.log(k,'done',await ev(()=>window.__done),'cineErr',await ev(()=>window.__cerr.slice()));}
 // in a Dojo round: interlude after 4 right
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;setInterval(()=>{N.Pause.last=Date.now();},500);N.Dojo.start('tm','round');});await W(1500);
 let seen=0;for(let i=0;i<12;i++){await ev(()=>{const N=window.__nk;const p=N.run.queue[N.run.idx];if(p&&p.f&&N.Pad.active&&!N.Pad.active.locked)for(const c of String(p.f.ans))N.Pad.key(c);});await W(900);if(await ev(()=>!document.querySelector('#cine').hidden)){seen++;await W(3000);}}
 console.log('interludes seen in 12 answers',seen,'interSeen',await ev(()=>window.__nk.state.interSeen),'cineErr',await ev(()=>window.__cerr));
 console.log('errors',errs);await b.close();})();
