const { chromium } = require('/opt/node-tools/node_modules/playwright');
const VP=(process.env.VP||'1180x820').split('x').map(Number);
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:VP[0],height:VP[1]},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message+' '+(e.stack||'').split('\n')[1]));
 const tag=VP.join('x');const shot=async n=>pg.screenshot({path:`v6/${tag}-${n}.png`});const W=ms=>pg.waitForTimeout(ms);
 const drain=async()=>{for(let i=0;i<60;i++){const o=await pg.evaluate(()=>!document.querySelector('#talk').hidden);if(!o)break;await pg.evaluate(()=>document.querySelector('#talk').click());await W(50);}};
 await pg.goto('http://localhost:8765/');await W(500);
 await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);await drain();await W(600);await drain();await W(500);
 console.log('screen',await pg.evaluate(()=>[...document.querySelectorAll('.screen')].find(s=>!s.hidden).id));
 await shot('01-dojo');
 // gate: try a level
 await pg.evaluate(()=>{window.__nk.renderMap();window.__nk.show('scr-map');});await W(700);await shot('02-map');
 await pg.evaluate(()=>{const N=window.__nk;N.startLevel(N.WORLDS[0],0);});await W(1500);await shot('03-gate');await drain();await W(400);
 // training run: answer via keypad taps (pointer events)
 await pg.evaluate(()=>window.__nk.Dojo.start('pm','train'));await W(700);await shot('04-train');
 const tapKey=async ch=>{const bx=await pg.evaluate(c=>{const k=[...document.querySelectorAll('#keypad .key')].find(b=>b.dataset.k===c);const r=k.getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2];},ch);await pg.mouse.click(bx[0],bx[1]);};
 for(let i=0;i<40;i++){const st=await pg.evaluate(()=>{const N=window.__nk;if(!N.run||N.run.spec.mode!=='dojo'||document.querySelector('#scr-level').hidden)return null;const p=N.run.queue[N.run.idx];if(!p)return null;
     const a=N.Pad.active;return {ans:p.f.ans,idx:N.run.idx,act:!!a,locked:a&&a.locked,ov:!document.querySelector('#overlay').hidden};});
   if(!st||st.ov)break;if(!st.act){await W(300);continue;}
   const v=(i===2)?st.ans+1:st.ans;for(const ch of String(v))await tapKey(ch);await W(i===2?600:200);
   if(i===2){await shot('05-miss');const ans=await pg.evaluate(()=>window.__nk.run.queue[window.__nk.run.idx].f.ans);for(const ch of String(ans))await tapKey(ch);await W(700);}
   if(i===4){await W(100);await shot('06-correct');}}
 await W(2600);await shot('07-train-done');
 await pg.evaluate(()=>{const b=[...document.querySelectorAll('#overlay button')].find(x=>x.textContent.startsWith('Belt Test'));b&&b.click();});await W(800);
 for(let i=0;i<300;i++){const st=await pg.evaluate(()=>{const N=window.__nk;if(!N.run||document.querySelector('#scr-level').hidden)return null;const p=N.run.queue[N.run.idx];if(!p)return null;const a=N.Pad.active;return {ans:p.f.ans,act:!!a&&!a.locked,ov:!document.querySelector('#overlay').hidden};});
   if(!st||st.ov)break;if(!st.act){await W(200);continue;}
   await pg.evaluate(v=>{const N=window.__nk;for(const ch of String(v))N.Pad.key(ch);},st.ans);await W(150);}
 await W(3000);await shot('08-test-result');
 console.log('dojo',await pg.evaluate(()=>JSON.stringify({belts:window.__nk.state.dojo.belts,today:window.__nk.state.dojo.today,medals:window.__nk.state.dojo.medals})));
 await pg.evaluate(()=>{const b=[...document.querySelectorAll('#overlay button')].find(x=>x.textContent==='Dojo');b&&b.click();});await W(800);await drain();await shot('09-dojo-after');
 // regular level with stamp + big battle
 await pg.evaluate(()=>{const N=window.__nk;N.state.dojo.unlockDay=N.state.dojo.today.day;N.state.howtoSeen=true;N.startLevel(N.WORLDS[0],0);});await W(900);await drain();
 const ans=await pg.evaluate(()=>window.__nk.run.queue[window.__nk.run.idx].answer);
 for(const ch of String(ans))await tapKey(ch);await pg.evaluate(()=>{const b=[...document.querySelectorAll('#actions .btn')].find(x=>x.textContent.startsWith('Submit'));b.click();});
 await W(100);await pg.evaluate(()=>{const o=[...document.querySelectorAll('#overlay button')].find(b=>b.textContent==='Pretty sure');o&&o.click();});await W(350);await shot('10-correct-stamp');await W(700);await shot('11-combo');
 await W(1500);await pg.evaluate(()=>{const b=[...document.querySelectorAll('#actions .btn')][0];b.click();});await W(400);
 await pg.evaluate(()=>{const s=window.__nk.Battle.s;s.foeAtkT=0;});await W(500);await shot('12-glitch-attack');await W(5000);await shot('13-wave');
 // grip drag
 const g=await pg.evaluate(()=>{const r=document.querySelector('#scGrip').getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2,document.querySelector('.scratch-wrap').getBoundingClientRect().height];});
 await pg.mouse.move(g[0],g[1]);await pg.mouse.down();await pg.mouse.move(g[0],g[1]-120,{steps:6});await pg.mouse.up();await W(300);
 console.log('scratch h before/after',g[2],await pg.evaluate(()=>document.querySelector('.scratch-wrap').getBoundingClientRect().height));await shot('14-grip');
 await pg.evaluate(()=>window.__nk.show('scr-map'));await pg.evaluate(()=>{document.querySelector('.ow-hud .icon-btn:nth-of-type(5)')});
 console.log('errors',errs);await b.close();})();
