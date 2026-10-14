const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820}});
 const errs=[];pg.on('pageerror',e=>errs.push('PAGEERR '+e.message+' '+e.stack));pg.on('console',m=>{if(m.type()==='error'&&!m.text().includes('ERR_CERT'))errs.push('CONSOLE '+m.text());});
 await pg.addInitScript(()=>{setInterval(()=>{const t=document.querySelector('#talk');if(t&&!t.hidden){window.__talkN=(window.__talkN||0)+1;t.click();}const c=[...document.querySelectorAll('#overlay button')].find(b=>b.textContent==='Pretty sure');if(c)c.click();},40);});await pg.goto('http://localhost:8765/');
 await pg.waitForTimeout(300);
 await pg.fill('#ob-name','Dev');
 await pg.click('text=Start the adventure');
 await pg.waitForTimeout(1500);await pg.evaluate(()=>{const N=window.__nk;N.Dojo.st().unlockDay=N.Dojo.st().today.day;N.Brawl.off=true;N.ScreenTime.brk=()=>Promise.resolve();N.Inter.play=()=>Promise.resolve();setInterval(()=>{N.Pause.last=Date.now();},1000);if(N.ScreenTime){N.ScreenTime.st().s.totalMin=0;}});
 await pg.screenshot({path:'map.png'});
 // helper installed in page
 await pg.evaluate(()=>{
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  const btn=t=>[...document.querySelectorAll('#actions button, #card button, #overlay button')].find(b=>!b.disabled&&b.offsetParent!==null&&b.textContent.trim().startsWith(t));
  const click=async t=>{const x=btn(t);if(!x)throw new Error('no button '+t+' | have: '+[...document.querySelectorAll('#actions button, #overlay button')].map(b=>b.textContent).join(','));x.click();await sleep(60);};
  const type=async v=>{const N=window.__nk;const f=N.Pad.active;if(f)f.val='';for(const ch of String(v))N.Pad.key(ch);await sleep(20);};
  const enter=async()=>{const N=window.__nk;const f=N.Pad.active;if(f&&f.onEnter)f.onEnter();await sleep(60);};
  window.__solve=async(opts)=>{opts=opts||{};const N=window.__nk;const log=[];let guard=0;
   while(N.run&&N.run.idx<N.run.queue.length&&guard++<80){
    const p=N.run.queue[N.run.idx];const idx=N.run.idx;log.push(p.kind+':'+(p.variant||'')+(p.probe?':probe':''));
    if(document.querySelector('#overlay:not([hidden]) .modal h2')?.textContent==='How sure are you?'){document.querySelector('#overlay .btn').click();await sleep(50);}
    const wrongFirst=opts.wrong&&Math.random()<0.5;
    if(p.kind==='fact'){await type(wrongFirst?p.answer+1:p.answer);await click('Submit');await sleep(800);if(N.run.idx===idx){await click(N.run.idx+1>=N.run.queue.length?'Finish':'Next ▸');}continue;}
    if(p.kind==='arith'){if(wrongFirst){await type(p.answer+1);await click('Submit');await sleep(50);await type(p.answer+2);await click('Submit');await type(p.answer+3);await click('Submit');await click('Got it');await sleep(50);await click(N.run.idx+1>=N.run.queue.length?'Finish':'Next ▸');continue;}
      await type(p.answer);await click('Check It');
      if(p.checkMethod==='estimate'){const ck=document.querySelectorAll('.checkbox .choice');const est=N.estimateArith(p).est;
        // click option equal to est (formatted)
        for(const c of ck){if(c.textContent.replace(/,/g,'')==String(est)){c.click();break;}}await sleep(50);const y=document.querySelector('.choice.yes');if(y)y.click();await sleep(50);}
      else{await type(Number(p.nums[0]));await click('Compare');}
      await click('Submit');await sleep(50);if(document.querySelector('#overlay:not([hidden])')){document.querySelector('#overlay .btn').click();await sleep(60);}
      await click(N.run.idx+1>=N.run.queue.length?'Finish':'Next');continue;}
    if(p.kind==='area'){if(p.variant==='estimateFirst'){const ck=N.genArea; await type(Math.round(p.a/Math.pow(10,String(p.a).length-1))*Math.pow(10,String(p.a).length-1)*Math.round(p.b/Math.pow(10,String(p.b).length-1))*Math.pow(10,String(p.b).length-1));await click('Lock estimate');}
      if(p.probe){await type(p.answer);await click('Submit');}
      else{let g=0;while(document.querySelector('.area .field:not(.locked)')&&g++<20){const f=N.Pad.active;const flds=[...document.querySelectorAll('.area .field')];
          // figure wanted value: try reading from internal by brute force: try values
          const cellIdx=flds.indexOf(f.el);const vals=[];const cols=p.top,rows=p.side;
          if(p.fillDecomp){cols.forEach(t=>vals.push(t));rows.forEach(s=>{vals.push(s);cols.forEach(t=>vals.push(s*t));});}else rows.forEach(s=>cols.forEach(t=>vals.push(s*t)));
          await type(vals[cellIdx]);await enter();}
        await type(p.answer);await click('Submit');}
      await sleep(50);if(document.querySelector('#overlay:not([hidden])')){document.querySelector('#overlay .btn').click();await sleep(60);await click('Submit').catch(()=>{});}
      await click(N.run.idx+1>=N.run.queue.length?'Finish':'Next');continue;}
    if(p.kind==='word'){let g=0;
      while(g++<40){await sleep(40);
        if(document.querySelector('#overlay:not([hidden]) .modal h2')?.textContent==='How sure are you?'){document.querySelector('#overlay .btn').click();await sleep(50);continue;}
        const tq=document.querySelector('.sent.tappable');if(tq){p._spans[p.qIndex].click();continue;}
        const tn=document.querySelector('.num.tappable');if(tn){p._nums.forEach(n=>{if(n.seg.role==='need')n.el.click();});await click('Done picking');continue;}
        const st=[...document.querySelectorAll('.strip:not([disabled])')];if(st.length&&!document.querySelector('.strip.yes')){st[0].click();continue;}
        const pl=[...document.querySelectorAll('.plan:not([disabled])')];if(pl.length&&!document.querySelector('.plan.yes')){pl[0].click();continue;}
        if(btn('Submit step')){const rows=[...document.querySelectorAll('.steprow')];const i=rows.length-1;await type(p.steps[i].res);await click('Submit step');continue;}
        if(btn('Finish ▸')&&document.querySelector('.statement')){await click('Check It');const y=document.querySelector('.choice.yes');if(y)y.click();await sleep(30);await click('Finish');break;}
        if(document.querySelector('.ans-row .field:not(.locked)')&&btn('Submit')){await type(p.answer);await click('Submit');continue;}
        if(btn('Next ▸')||btn('Finish ▸')){break;}
      }
      await sleep(50);await click(N.run.idx+1>=N.run.queue.length?'Finish':'Next');continue;}
    if(p.kind==='table'){document.querySelectorAll('.stmt')[p.answer].click();await sleep(50);await click(N.run.idx+1>=N.run.queue.length?'Finish':'Next');continue;}
    if(p.kind==='bug'){await click('Check Glitch');await sleep(30);
      if(p.isBug){await click('Found a bug');await type(p.answer);await click('Submit');await sleep(30);if(document.querySelector('#overlay:not([hidden])')){document.querySelector('#overlay .btn').click();await sleep(60);}}
      else await click('Glitch is right');
      await sleep(50);await click(N.run.idx+1>=N.run.queue.length?'Finish':'Next');continue;}
    throw new Error('unknown kind '+p.kind);
   }
   return log;};
 });
 const runs=[['canyon',0],['docks',2],['canyon',5],['docks',5],['forge',0],['castle',0],['castle',1],['castle',2],['tower',0],['tower',2],['tower',3],['canyon',5]];
 for(const [w,li] of runs){
  const r=await pg.evaluate(async([w,li])=>{try{
    const N=window.__nk,sl=ms=>new Promise(r=>setTimeout(r,ms));const W=N.WORLDS.find(x=>x.id===w);N.state.howtoSeen=true;N.startLevel(W,li);await sl(300);
    if(li===5){await sl(1500);document.querySelector('.bay-launch').click();await sl(400);const sk=document.querySelector('#cine .skip');if(sk)sk.click();await sl(300);}
    const log=await window.__solve({wrong:true});await sl(2400);const tap=document.querySelector('.cine-tap');if(tap)tap.click();await sl(1900);
    const col=[...document.querySelectorAll('#cine .btn')].find(b=>b.textContent.startsWith('Collect'));if(col)col.click();await sl(2500);
    return {ok:true,log,coins:window.__nk.state.coins,loot:(window.__nk.state.loot||[]).slice(-1)[0],chestShown:!!col};}catch(e){return {ok:false,err:e.message+' '+e.stack};}},[w,li]);
  console.log(w,li,JSON.stringify(r));
  await pg.waitForTimeout(900);
  if(li===5)console.log('npc',await pg.evaluate(()=>JSON.stringify(window.__nk.state.npc)));
  // close result overlay -> Map
  await pg.evaluate(async()=>{const s=ms=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<4;i++){const ov=document.querySelector('#overlay:not([hidden])');if(!ov)break;const bs=[...ov.querySelectorAll('button')];const m=bs.find(b=>b.textContent==='Map')||bs.find(b=>b.textContent==='Just right')||bs.find(b=>b.textContent==='Good')||bs[0];m.click();await s(100);}});
  await pg.waitForTimeout(200);
 }
 // quest
 const q=await pg.evaluate(async()=>{try{document.querySelector('.ow-quest').click();await new Promise(r=>setTimeout(r,200));const log=await window.__solve({});await new Promise(r=>setTimeout(r,2400));const tp=document.querySelector('.cine-tap');if(tp)tp.click();await new Promise(r=>setTimeout(r,1900));return {log,st:window.__nk.state.streak,totals:window.__nk.state.totals,methods:window.__nk.state.methods};}catch(e){return {err:e.message+e.stack}}});
 console.log('quest',JSON.stringify(q));
 await pg.waitForTimeout(900);
 await pg.screenshot({path:'questdone.png'});
 const pend=await pg.evaluate(()=>{const p=JSON.parse(localStorage.getItem('nk-pending')||'[]');return {n:p.length,sample:p.slice(-1)[0],size:JSON.stringify(p).length};});
 console.log('pending',pend.n,pend.size,(JSON.stringify(pend.sample)||'').slice(0,300));
 console.log('ERRS',errs);
 await b.close();
})();
