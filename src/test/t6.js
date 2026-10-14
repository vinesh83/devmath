const { chromium } = require('/opt/node-tools/node_modules/playwright');
const VP=(process.env.VP||'1180x820').split('x').map(Number);
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:VP[0],height:VP[1]},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message+' '+(e.stack||'').split('\n')[1]));
 const tag=VP.join('x');const shot=async n=>pg.screenshot({path:`npc/${tag}-${n}.png`});const W=ms=>pg.waitForTimeout(ms);
 const tap=()=>pg.evaluate(()=>document.querySelector('#talk').click());
 const talkOpen=()=>pg.evaluate(()=>!document.querySelector('#talk').hidden);
 const drain=async()=>{for(let i=0;i<40&&await talkOpen();i++){await tap();await W(60);}};
 await pg.goto('http://localhost:8765/');await W(500);
 await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1400);
 await shot('01-knight-intro');console.log('talk open after onboarding',await talkOpen());
 await W(1500);await shot('02-knight-typed');
 await tap();await tap();await W(1200);await shot('03-knight-2');
 for(let i=0;i<8;i++){await tap();await W(80);await tap();await W(80);if(await pg.evaluate(()=>document.querySelector('.talk-name').textContent.startsWith('Byte')))break;}
 await W(900);await shot('04-byte-newally');await drain();
 console.log('met',await pg.evaluate(()=>JSON.stringify(window.__nk.state.npc.met)));
 // allies book
 await pg.evaluate(()=>window.__nk.Talk.book());await W(300);await shot('05-allies-book');
 await pg.evaluate(()=>document.querySelector('#overlay .ally:not(.locked)').click());await W(1500);await shot('06-ally-tip');await drain();await pg.evaluate(()=>{const o=document.querySelector('#overlay .btn-dark');o&&o.click();});
 // kingdom intro via castle tap (skip trailer)
 await pg.evaluate(()=>{document.querySelectorAll('.ow-castle')[0].click();});await W(500);await pg.evaluate(()=>{const s=document.querySelector('#cine .skip');s&&s.click();});await W(1600);await shot('07-rocky-intro');await drain();await W(300);await shot('08-kcard-after');
 await pg.evaluate(()=>{const o=document.querySelector('#overlay .btn-dark');o&&o.click();});
 // battle tips
 await pg.evaluate(()=>{const N=window.__nk;N.state.howtoSeen=true;N.startRun({title:'Big Number Canyon · Level 2',mode:'level',world:'canyon',level:1,color:'#e8643a',problems:[N.GEN.sub(3),N.GEN.sub(3),N.GEN.sub(3)]});});
 await W(500);await pg.evaluate(()=>window.__nk.Talk.pop('rocky','Top digit smaller than the bottom one? You can’t take away yet. Borrow 1 from next door. It becomes 10!'));await W(2600);await shot('09-pop-tip');
 await pg.evaluate(()=>{window.__nk.Talk.unpop();window.__nk.Talk.pop('knight','Armor up! Tap Check It before Submit. If you’re wrong, my shield blocks the hit.');});await W(2600);await shot('10-pop-check');
 // real wrong answer path: type wrong answer and submit
 await pg.evaluate(()=>window.__nk.Talk.unpop());
 const ans=await pg.evaluate(()=>window.__nk.run.queue[window.__nk.run.idx].answer);
 const wrong=String(ans+10);for(const ch of wrong)await pg.evaluate(c=>{const k=[...document.querySelectorAll('#keypad button')].find(b=>b.textContent.trim()===c);k&&k.click();},ch);
 await pg.evaluate(()=>{const b=[...document.querySelectorAll('#actions .btn')].find(x=>x.textContent.startsWith('Submit'));b.click();});await W(300);
 await pg.evaluate(()=>{const o=document.querySelector('#overlay .faces .btn');o&&o.click();});await W(2500);await shot('11-real-wrong');
 console.log('pop visible',await pg.evaluate(()=>!document.querySelector('.tpop').hidden),await pg.evaluate(()=>document.querySelector('.tpop').textContent));
 // bigpaper pop
 await pg.evaluate(()=>document.querySelector('#sc-big').click());await W(300);await pg.evaluate(()=>{window.__nk.Talk.unpop();window.__nk.Talk.pop('byte','BEEP BOOP! You’re ON FIRE! Keep the combo going!');});await W(2000);await shot('12-pop-bigpaper');
 await pg.evaluate(()=>document.querySelector('#sc-big').click());
 // boss brief
 await pg.evaluate(()=>{const N=window.__nk;N.Talk.unpop();N.state.prog.docks={done:5,stars:{0:3,1:3,2:3,3:3,4:3}};N.startLevel(N.WORLDS[1],5);});await W(1700);await shot('13-boss-brief');await drain();await W(400);await shot('14-mechbay-after');
 // echo after boss
 await pg.evaluate(()=>{const N=window.__nk;N.state.prog.canyon={done:6,stars:{0:3,1:3,2:3,3:3,4:3,5:2}};N.Talk.afterRun({mode:'boss'});});await W(1500);await shot('15-pip');
 for(let i=0;i<10;i++){await tap();await W(80);await tap();await W(80);if(await pg.evaluate(()=>document.querySelector('.talk-name').textContent.startsWith('Echo')))break;}
 await W(1300);await shot('16-echo');await drain();
 await pg.evaluate(()=>{window.__nk.renderMap();window.__nk.show('scr-map');window.__nk.Talk.book();});await W(300);await shot('17-allies-later');
 console.log('errors',errs);await b.close();})();
