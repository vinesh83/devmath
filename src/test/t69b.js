const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(900);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.cineEvery=0;N.state.howtoSeen=true;N.Lesson.off=true;N.state.no3d=true;N.Arcade.pickOff=true;Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});setInterval(()=>{N.Pause.last=Date.now();},500);});
 for(const since of [120,600]){
   await ev(()=>{const N=window.__nk;N.run=null;document.querySelectorAll('.screen').forEach(s=>s.hidden=true);document.querySelector('#overlay').hidden=true;N.ScreenTime.onBreak=false;N.Dojo.start('pm','round');});await W(2200);
   await ev(s=>{const N=window.__nk;N.run.dj.tired=true;N.run.queue.length=N.run.idx+1;N.ScreenTime.st().D.since=s;window.__brk0=N.ScreenTime.st().D.breaks||0;},since);
   const c=await ev(()=>{const N=window.__nk;return N.run.queue[N.run.idx].f.ans;});await ev(s=>{for(const ch of String(s))window.__nk.Pad.key(ch);},c);
   let saw=false,talk='';for(let i=0;i<14;i++){await W(700);
     const st=await ev(()=>({brk:window.__nk.ScreenTime.onBreak,talk:document.querySelector('#talk').hidden?'':document.querySelector('#talk').textContent.slice(0,90)}));if(st.brk)saw=true;if(st.talk)talk=st.talk;
     await ev(()=>{const t=document.querySelector('#talk');if(!t.hidden)t.click();const b=[...document.querySelectorAll('#overlay button')].find(x=>/Continue|Next|Nice|Done|Collect|Open|Got it/.test(x.textContent));if(b&&!window.__nk.ScreenTime.onBreak)b.click();});}
   console.log('since',since,'s -> tired break shown:',saw,'| breaks counted:',await ev(()=>(window.__nk.ScreenTime.st().D.breaks||0)-window.__brk0),'| sensei:',talk.replace(/\s+/g,' ').slice(0,80));
   await ev(()=>{const N=window.__nk;N.ScreenTime.onBreak=false;if(N.Pause.held)N.Pause.release();document.querySelector('#overlay').hidden=true;document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();});}
 console.log('errors',errs);await b.close();})();
