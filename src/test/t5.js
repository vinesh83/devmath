const { chromium } = require('/opt/node-tools/node_modules/playwright');
const VP=(process.env.VP||'1180x820').split('x').map(Number);
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:VP[0],height:VP[1]},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message+' '+(e.stack||'').split('\n')[1]));
 const tag=VP.join('x');const shot=async n=>pg.screenshot({path:`fx/${tag}-${n}.png`});const W=ms=>pg.waitForTimeout(ms);
 await pg.goto('http://localhost:8765/');await W(500);
 await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(900);
 await pg.evaluate(()=>{const s=window.__nk.state;s.howtoSeen=true;s.prog.canyon={done:5,stars:{0:3,1:2,2:3,3:1,4:2}};s.prog.docks={done:2,stars:{0:3,1:2}};s.prog.forge={done:6,stars:{0:3,1:3,2:3,3:3,4:3,5:3}};s.coins=340;s.streak={n:4,last:null};window.__nk.renderMap();window.__nk.show('scr-map');});
 await W(700);await shot('01-map');
 // trailer
 await pg.evaluate(()=>{document.querySelectorAll('.ow-castle')[0].click();});await W(1200);await shot('02-trailer-a');await W(1900);await shot('02-trailer-b');await W(1600);await shot('02-trailer-c');await W(2000);await shot('02-trailer-d');
 await W(1200);await shot('03-kingdom-card');
 await pg.evaluate(()=>{const o=document.querySelector('#overlay .btn-dark');o&&o.click();});
 // regular battle
 await pg.evaluate(()=>{const N=window.__nk;N.startRun({title:'Big Number Canyon · Level 2',mode:'level',world:'canyon',level:1,color:'#e8643a',problems:[N.GEN.sub(3),N.GEN.sub(3),N.GEN.sub(3),N.GEN.sub(3),N.GEN.sub(3),N.GEN.sub(3)]});});
 await W(600);await shot('04-battle-start');
 await pg.evaluate(()=>window.__nk.Battle.event('hit'));await W(250);await shot('05-hit');
 await pg.evaluate(()=>window.__nk.Battle.event('crit'));await W(200);await shot('06-crit');
 await pg.evaluate(()=>window.__nk.Battle.event('block'));await W(300);await shot('07-block');
 await pg.evaluate(()=>window.__nk.Battle.event('hurt'));await W(300);await shot('08-hurt');
 await pg.evaluate(()=>{for(let i=0;i<5;i++)window.__nk.Battle.event('hit');});await W(700);await shot('09-onfire-super-ready');
 await pg.evaluate(()=>document.querySelector('#superBtn').click());await W(1500);await shot('10-super-laser');await W(1800);
 await pg.evaluate(()=>{window.__nk.state.mech={super:'dragon'};window.__nk.Battle.s.pips=6;window.__nk.Battle.updSuper();});await pg.evaluate(()=>document.querySelector('#superBtn').click());await W(1400);await shot('11-super-dragon');await W(1800);
 await pg.evaluate(()=>{window.__nk.state.mech={super:'meteor'};window.__nk.Battle.s.pips=6;window.__nk.Battle.updSuper();});await pg.evaluate(()=>document.querySelector('#superBtn').click());await W(1500);await shot('12-super-meteor');await W(1700);
 await pg.evaluate(()=>{window.__nk.Battle.ko();});await W(900);await shot('13-ko');await W(1300);
 await pg.evaluate(()=>{window.__nk.openChest('boss');});await W(1200);await shot('14-chest-wait');await pg.evaluate(()=>document.querySelector('.cine-tap').click());await W(700);await shot('15-chest-shake');await W(1300);await shot('16-chest-card');
 await pg.evaluate(()=>{const b=[...document.querySelectorAll('#cine .btn')].find(x=>x.textContent.startsWith('Collect'));b&&b.click();});await W(300);
 // mech bay + boss
 await pg.evaluate(()=>{const N=window.__nk;const s=N.state;s.inv.parts.push('arms:rocket','cannon:plasma','paint:ember','head:horns');s.mech={head:'horns',arms:'rocket',legs:'walker',cannon:'plasma',paint:'ember',super:'laser'};N.startLevel(N.WORLDS[0],5);});
 await W(700);await shot('17-mechbay');
 await pg.evaluate(()=>document.querySelector('.bay-launch').click());await W(700);await shot('18-mech-launch-a');await W(1100);await shot('18-mech-launch-b');await W(1200);
 await W(500);await pg.evaluate(()=>{window.__nk.Battle.event('hit');});await W(150);await shot('19-mech-battle');await pg.evaluate(()=>window.__nk.Battle.event('crit'));await W(250);await shot('20-mech-crit');
 // big paper mode
 await pg.evaluate(()=>document.querySelector('#sc-big').click());await W(400);await shot('21-bigpaper');
 console.log('errors',errs);await b.close();})();
