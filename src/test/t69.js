const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(900);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.cineEvery=0;N.state.howtoSeen=true;N.Lesson.off=true;N.state.no3d=true;N.Arcade.pickOff=true;N.Dojo.st().unlockDay=new Date().toISOString().slice(0,10);Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});setInterval(()=>{N.Pause.last=Date.now();},500);});
 const D=()=>'window.__nk.ScreenTime.st().D';
 // 1) timer and spacing
 console.log('timer:',await ev(()=>{const S=window.__nk.ScreenTime,D=S.st().D,out=[];for(const m of [8,9,14,15]){D.since=m*60;out.push(m+'min due='+S.breakDue());}for(const s of [300,479,480]){D.since=s;out.push(s+'s gapOk='+S.gapOk());}return out.join(' ');}));
 // 2) levels
 await ev(()=>{const N=window.__nk;N.startLevel(N.WORLDS.find(w=>w.id==='canyon'),0);});await W(1800);await ev(()=>{document.querySelector('#talk').hidden=true;});
 const lv=async(label,results,since)=>{await ev(([r,s])=>{const N=window.__nk;N.ScreenTime.onBreak=false;N.ScreenTime.st().D.since=s;N.run.results=r;N.run.idx=r.length;N.run.breakIdx=-1;N.nextProblem();},[results,since]);await W(500);
   const br=await ev(()=>window.__nk.ScreenTime.onBreak);console.log(label,'-> break:',br,await ev(()=>{const m=document.querySelector('#overlay .modal');return m&&!document.querySelector('#overlay').hidden?m.querySelector('h2').textContent:'';}));
   if(br){await ev(()=>{const N=window.__nk;N.ScreenTime.onBreak=false;document.querySelector('#overlay').hidden=true;if(N.Pause.held)N.Pause.release();});await W(200);}};
 const ok={solved:true,firstTry:true,ms:30000},slow={solved:true,firstTry:true,ms:540000},bad={solved:false,firstTry:false,ms:60000};
 await lv(' level: one 9-minute problem, 10 min since break',[ok,slow],600);
 await lv(' level: 2 of last 3 missed, 10 min since break',[ok,bad,bad],600);
 await lv(' level: 2 of last 3 missed, 3 min since break',[ok,bad,bad],180);
 await lv(' level: fine, 16 min since break (timer)',[ok,ok],960);
 await lv(' level: fine, 12 min since break',[ok,ok],720);
 // 3) Dojo slowing rule
 for(const variant of ['slow, no misses','slow + 2 misses','3 misses']){
   await ev(()=>{const N=window.__nk;N.run=null;document.querySelectorAll('.screen').forEach(s=>s.hidden=true);document.querySelector('#overlay').hidden=true;N.Dojo.start('pm','round');});await W(2200);
   const cur=()=>ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx];return {idx:N.run.idx,k:p.k,ans:p.f.ans};});const key=s=>ev(s=>{for(const c of String(s))window.__nk.Pad.key(c);},s);
   let c=await cur();for(let i=0;i<12&&c.idx<5;i++){await key(c.ans);await W(c.k==='teach'?2600:1300);c=await cur();if(await ev(()=>!!document.querySelector('.lab-strat'))){await ev(()=>document.querySelector('.lab-sb').click());await W(600);c=await cur();}}
   await ev(v=>{const N=window.__nk,F=(ms,ft=true)=>({skill:'dojo',firstTry:ft,solved:ft,fast:false,ms});const R=N.run.results;for(let i=0;i<12;i++){if(i===N.run.idx)continue;R[i]=i<7?F(1500):F(9000,!(v==='slow + 2 misses'&&(i===9||i===10))&&!(v==='3 misses'&&i>=9));}if(v==='3 misses')R.forEach((r,i)=>{if(i>=7&&r)r.ms=1500;});N.run.queue.length=Math.max(N.run.queue.length,14);},variant);
   c=await cur();await key(c.ans);await W(900);
   console.log(' dojo:',variant,'-> tired:',await ev(()=>!!window.__nk.run.dj.tired),'queue cut to',await ev(()=>window.__nk.run.queue.length));}
 console.log('errors',errs);await b.close();})();
