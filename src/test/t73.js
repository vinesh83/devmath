// Remainders first: Level 1 of the Division Dungeon is one Divide-Multiply-Subtract step with leftovers.
const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(900);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.cineEvery=0;N.state.howtoSeen=true;N.Lesson.off=true;N.state.no3d=true;N.Arcade.pickOff=true;N.Dojo.st().unlockDay=new Date().toISOString().slice(0,10);Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});N.state.hero.pet='ellie';N.Updater.check=()=>{};setInterval(()=>{N.Pause.last=Date.now();},300);});
 console.log('L0 sample:',await ev(()=>{const N=window.__nk;let ok=0,rem=0,one=0;const ex=[];for(let i=0;i<500;i++){const p=N.genDiv(0),P=N.divPlan(p.n,p.d);if(p.n===p.answer*p.d+p.rem&&p.rem<p.d&&p.n>=10&&p.answer>=2&&p.answer<=9)ok++;if(p.rem)rem++;if(P.rows.length===1)one++;if(i<6)ex.push(`${p.n}÷${p.d}=${p.answer}${p.rem?' R'+p.rem:''}`);}return `${ok}/500 valid, ${rem} with remainder, ${one} single-step; e.g. ${ex.join(', ')}`;}));
 console.log('genDiv("1") still level 1:',await ev(()=>window.__nk.genDiv('1').L),' genDiv(undefined):',await ev(()=>window.__nk.genDiv().L));
 console.log('levels:',await ev(()=>JSON.stringify(window.__nk.DIV_WORLD.levels)));
 console.log('lessons:',await ev(()=>window.__nk.DivLessons.LIST.map((v,i)=>`${i+1}.${v.title}@L${v.lv+1}`).join(' ')));
 await ev(()=>{const N=window.__nk;N.DivLessons.ok={};N.DivLessons.probing=true;});  // no videos: go straight to the level
 await ev(()=>{const N=window.__nk;N.Dungeon.open();});await W(500);
 console.log('level buttons:',await ev(()=>[...document.querySelectorAll('.dv-lv')].map(x=>x.textContent).join(' | ')));
 await ev(()=>document.querySelector('.dv-lv').click());await W(2500);await ev(()=>{document.querySelector('#talk').hidden=true;});
 const typ=async v=>{await ev(v=>{for(const ch of String(v))window.__nk.Pad.key(ch);},v);await W(450);};
 for(let n=0;n<2;n++){
  const p=await ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx];return {kind:p.kind,L:p.L,n:p.n,d:p.d,ans:p.answer,rem:p.rem,plan:N.divPlan(p.n,p.d)};});
  console.log(`problem ${n+1}: ${p.n} ÷ ${p.d} = ${p.ans} R ${p.rem} (L${p.L}, ${p.plan.rows.length} step)`);
  const r=p.plan.rows[0];
  if(n===0&&r.q>1){await typ(r.q-1);console.log('  too-small tip:',await ev(()=>{const t=document.querySelector('.dv-tip');return t&&t.textContent;}));await pg.screenshot({path:'sp/t73-small.png'});await W(600);}
  await typ(r.q);await typ(r.prod);await typ(r.diff);await W(700);
  console.log('  result:',await ev(()=>{const x=document.querySelector('.dv-result');return x&&x.textContent;}));if(n===0)await pg.screenshot({path:'sp/t73-done.png'});
  await typ(p.n);await W(1800);
  const nx=await ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Next|Continue/.test(x.textContent));if(b){b.click();return b.textContent;}return null;});await W(1500);await ev(()=>{document.querySelector('#talk').hidden=true;});}
 console.log('errors',errs);await b.close();})();
