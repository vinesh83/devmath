const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await pg.evaluate(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.howtoSeen=true;Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);});
 await pg.evaluate(()=>window.__nk.Dojo.start('tm','round'));await W(1500);
 const ans=async(right)=>{await pg.evaluate(r=>{const N=window.__nk;const p=N.run.queue[N.run.idx];if(!p||!p.f)return;const v=r?String(p.f.ans):String(p.f.ans+1);for(const c of v)N.Pad.key(c);},right);};
 const skip=async()=>{await pg.evaluate(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Skip/.test(x.textContent));if(b)b.click();});};
 const info=()=>pg.evaluate(()=>{const s=window.__nk.Battle.s;return {wave:s.wave,sq:s.squashed,combo:s.combo,blasts:s.blasts||0,bugs:s.minions.filter(m=>!m.dead).map(m=>m.type+':'+m.hp)};});
 await W(2500);console.log('start',await info());await pg.screenshot({path:'sp/bugs-0.png'});
 for(let i=0;i<14;i++){
   // pass the teach card if any
   await pg.evaluate(()=>{const b=[...document.querySelectorAll('.overlay button,#overlay button')].find(x=>/Got it|OK|Let/.test(x.textContent));if(b)b.click();});
   const miss=i===6;await ans(!miss);await W(miss?600:350);
   if(miss){await W(300);await pg.screenshot({path:'sp/bugs-laugh.png'});await skip();}
   if(i===4){await W(100);await pg.screenshot({path:'sp/bugs-blast.png'});}
   await W(900);console.log(i,await info());
   if(i===9)await pg.screenshot({path:'sp/bugs-mid.png'});}
 // idle antics
 await pg.evaluate(()=>{const s=window.__nk.Battle.s;s.antT=0;});await W(500);await pg.screenshot({path:'sp/bugs-antic1.png'});
 for(let k=0;k<4;k++){await pg.evaluate(()=>{const s=window.__nk.Battle.s;s.antT=0;});await W(1200);console.log('antic tower',await pg.evaluate(()=>!!window.__nk.Battle.s.tower),'spits',await pg.evaluate(()=>window.__nk.Battle.s.spits.length));}
 await pg.evaluate(()=>{const B=window.__nk.Battle;B.bugAntic=B.bugAntic;const s=B.s;const L=s.minions.filter(m=>!m.dead&&m.type!=='king');if(L.length>=3){s.tower={t:0,x:L[0].x,list:L.slice(0,3)};L.slice(0,3).forEach((q,i)=>q.tw=i);}});await W(700);await pg.screenshot({path:'sp/bugs-tower.png'});
 console.log('errors',errs);await b.close();})();
