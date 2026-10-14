const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 for(const [vw,vh,tag] of [[1180,820,'L'],[820,1180,'P']]){
 const pg=await b.newPage({viewport:{width:vw,height:vh}});
 const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 await pg.goto('file://'+process.cwd()+'/../number-knight.html');await pg.waitForTimeout(300);
 if(tag==='L')await pg.screenshot({path:'onboard.png'});
 await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await pg.waitForTimeout(300);
 await pg.evaluate(()=>{const s=window.__nk.state;s.howtoSeen=true;s.coins=260;s.hero.hat='headphones';s.hero.pet='byte';s.hero.cape='red';s.streak={n:3,last:null};});
 const run=async(name,mk,after)=>{await pg.evaluate(mk);await pg.waitForTimeout(250);if(after){await pg.evaluate(after);await pg.waitForTimeout(250);}await pg.screenshot({path:tag+'-'+name+'.png'});};
 await run('sub',()=>{const N=window.__nk;const p=N.GEN.sub(3);p.stacked=true;N.startRun({title:'Big Number Canyon · Level 2',mode:'level',color:'#e8643a',problems:[p,N.GEN.sub(3),N.GEN.sub(3),N.GEN.sub(3)]});},
   ()=>{const N=window.__nk;const p=N.run.queue[0];N.Pad.key('1');N.Pad.key('2');N.Pad.key('3');N.Pad.key('4');N.Pad.key('5');[...document.querySelectorAll('#actions button')][0].click();});
 await run('word',()=>{const N=window.__nk;const p=N.genWord(3);p.variant=null;N.startRun({title:'Word Tower · Level 3',mode:'level',color:'#3fbf5f',problems:[p]});},
   ()=>{const p=window.__nk.run.queue[0];});
 await run('area',()=>{const N=window.__nk;const s=N.state.skills;s.area={r:3,n:0,ok:0,cnt:1};const p=N.genArea(3);N.startRun({title:'Area Castle · Level 2',mode:'boss',boss:true,bossName:'The Grid King',color:'#9b6bff',problems:[p,N.genArea(3)]});});
 await run('bug',()=>{const N=window.__nk;let p;do{p=N.genBug('sub');}while(!p.isBug);N.startRun({title:'Glitch’s Lab',mode:'level',color:'#e8643a',problems:[p]});});
 await run('dec',()=>{const N=window.__nk;const p=N.GEN.dec_add(2);N.startRun({title:'Decimal Docks · Level 2',mode:'level',color:'#3fa7ff',problems:[p]});},
   ()=>{const N=window.__nk;const p=N.run.queue[0];for(let i=0;i<3;i++){N.Pad.active.val='';for(const ch of String(p.answer+1))N.Pad.key(ch);[...document.querySelectorAll('#actions button')].find(b=>b.textContent.startsWith('Submit')).click();}
     const ov=document.querySelector('#overlay:not([hidden]) .btn');if(ov)ov.click();});
 await pg.evaluate(()=>{document.querySelector('#overlay').hidden=true;document.querySelector('#lv-exit').click();[...document.querySelectorAll('#overlay button')].find(b=>b.textContent==='Leave').click();});
 await pg.waitForTimeout(300);await pg.screenshot({path:tag+'-map.png'});
 await pg.evaluate(()=>[...document.querySelectorAll('.icon-btn')].find(b=>b.textContent==='Shop').click());await pg.waitForTimeout(300);await pg.screenshot({path:tag+'-shop.png'});
 await pg.close();console.log(tag,errs);
 }
 await b.close();
})();
