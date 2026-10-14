const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message+' '+(e.stack||'').split('\n')[1]));const W=ms=>pg.waitForTimeout(ms);const shot=n=>pg.screenshot({path:`sp/${n}.png`});
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await pg.evaluate(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.howtoSeen=true;});
 console.log('goal mins',await pg.evaluate(()=>window.__nk.Dojo.goalSecs()/60));
 // bugs in a level
 await pg.evaluate(()=>{const N=window.__nk;N.Dojo.st().unlockDay=N.Dojo.st().today.day;N.startRun({title:'T',mode:'level',world:'canyon',level:0,color:'#e8643a',problems:[N.GEN.add(1),N.GEN.add(1),N.GEN.add(1),N.GEN.add(1)]});});
 await W(2600);await shot('bugs-1');await W(800);await pg.evaluate(()=>window.__nk.Battle.event('hit'));await W(500);await shot('bugs-zap');
 // simulate fact history with varied speeds
 await pg.evaluate(()=>{const N=window.__nk,F=N.Dojo.st().facts;const mk=(k,lats,n,ok)=>F[k]={n,ok,intro:true,days:{},credits:1,owned:false,lats};
   for(let a=2;a<=10;a++)for(let b=a;b<=10;b++){const k=`${a}x${b}`;const hard=(a>=6&&b>=6&&a*b!==64&&a*b!==36);const ms=a<=5||b===10?1300:hard?(a*b%3?3800:2600):1900;mk(k,[ms,ms+200,ms-100],4,hard&&a*b%7===0?2:4);}
   for(let a=1;a<=10;a++)for(let b=a;b<=10;b++)mk(`${a}+${b}`,[a+b>10?2400:1200,a+b>10?2600:1300],3,3);
   for(let c=11;c<=18;c++)for(let b=2;b<=9;b++)if(c-b<=9&&c-b>=1)mk(`${c}-${b}`,[b>=7?4200:2300,b>=7?3900:2100],3,b===8&&c===13?1:3);
   for(let d=2;d<=5;d++)for(let q=2;q<=10;q++)mk(`${d*q}/${d}`,[2100,2200],2,2);});
 await pg.evaluate(()=>{const N=window.__nk;N.Dojo.open();});await W(400);await shot('dojo');
 await pg.evaluate(()=>{const N=window.__nk;N.renderMap();N.show('scr-map');[...document.querySelectorAll('.ow-hud .icon-btn')].find(b=>b.textContent==='Report').click();});await W(400);
 await pg.evaluate(()=>{document.querySelector('.spd-wrap').open=true;document.querySelector('.spd-wrap').scrollIntoView();});await W(300);await shot('report-speed');
 console.log('summary',await pg.evaluate(()=>document.querySelector('.spd-wrap summary').textContent));
 console.log('errors',errs);await b.close();})();
