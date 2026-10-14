const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.state.howtoSeen=true;N.Brawl.off=true;Object.assign(N.state,{dogPicked:1,ellieMet:1});setInterval(()=>{N.Pause.last=Date.now();},500);});
 const round=async()=>{await ev(()=>window.__nk.Dojo.start('pm','round'));await W(1500);
  for(let i=0;i<30;i++){const st=await ev(()=>{const N=window.__nk;if(N.run.dj.finished)return 'done';const p=N.run.queue[N.run.idx];if(!p||!p.f)return 'x';const wrong=N.run.idx>=5&&N.run.idx<=8;for(const c of String(wrong?p.f.ans+1:p.f.ans))N.Pad.key(c);return wrong?'w':'r';});
    if(st==='done')break;await W(st==='w'?700:800);if(st==='w'){await ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Skip/.test(x.textContent));if(b)b.click();});await W(700);}}
  await W(3000);
  console.log('n',await ev(()=>window.__nk.run.queue.length),'tired',await ev(()=>window.__nk.run.dj.tired),'talk',await ev(()=>!document.querySelector('#talk').hidden&&document.querySelector('#talk').textContent.slice(0,140)));
  for(let k=0;k<12;k++){const t=await ev(()=>{const T=document.querySelector('#talk');if(!T.hidden){T.click();return 'talk';}return document.querySelector('.recharge')?'rc':'';});if(t==='rc')break;await W(700);}
  console.log('recharge',await ev(()=>!!document.querySelector('.recharge')),await ev(()=>document.querySelector('.rc-time')&&document.querySelector('.rc-time').textContent));
  await ev(()=>{const N=window.__nk;});};
 await round();await pg.screenshot({path:'sp/tired.png'});
 // skip the countdown for the test
 await ev(()=>{const b=document.querySelector('.recharge button');b.disabled=false;b.click();});await W(800);
 await ev(()=>{const o=document.querySelector('#overlay');o.hidden=true;});
 console.log('gate before 2nd',await ev(()=>window.__nk.Dojo.gateOk()));
 await round();console.log('gate after 2nd tired',await ev(()=>window.__nk.Dojo.gateOk()),'tiredDays',await ev(()=>JSON.stringify(window.__nk.Dojo.st().tiredDays)));
 console.log('errors',errs);await b.close();})();
