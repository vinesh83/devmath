const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820}});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1500);
 await ev(()=>{const N=window.__nk;document.querySelector('#talk').hidden=true;N.Talk.open=false;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);N.state.hero.ride='monster';N.state.hero.pet='ellie';N.state.hero.dogAcc={hat:'crown'};N.state.bossTip=1;
   window.__cerr=[];const _p=N.Cine.play.bind(N.Cine);N.Cine.play=(d,fn,o)=>_p(d,(...a)=>{try{fn(...a);}catch(e){window.__cerr.push(e.message+' @ '+(e.stack||'').split('\n').slice(1,3).join(' | '));}},o);window.__done=false;N.Brawl.play({power:30}).then(c=>{window.__done=c;});});
 await W(3200);const G=()=>ev(()=>{const G=window.__nk.Brawl.G;return {ph:G.phase,hp:G.hp,max:G.max,hearts:G.hearts,items:G.items.length,star:G.star,taunt:G.taunt&&G.taunt.s,ramCd:G.ramCd};});
 console.log('start',JSON.stringify(await G()));await pg.screenshot({path:'sp/b2-start.png'});
 // force a star power-up next to him
 await ev(()=>{const G=window.__nk.Brawl.G;G.items.push({k:'star',x:G.hero.x,y:G.hero.y+500,t:0});});await W(300);console.log('after item',JSON.stringify(await G()));
 // ground pound: jump then attack
 await pg.keyboard.press('ArrowUp');await W(150);await pg.keyboard.press('j');await W(600);console.log('after pound',JSON.stringify(await G()));
 // ram
 await pg.keyboard.press('r');await W(250);await pg.screenshot({path:'sp/b2-ram.png'});await W(700);console.log('after ram',JSON.stringify(await G()));
 // finish him quickly with attacks
 for(let i=0;i<80;i++){const st=await G();if(st.ph!=='fight')break;await pg.keyboard.press('j');await W(120);if(i===6)await pg.screenshot({path:'sp/b2-fight.png'});}
 console.log('end',JSON.stringify(await G()));await W(700);await pg.screenshot({path:'sp/b2-ko.png'});
 for(let i=0;i<60&&!(await ev(()=>window.__done!==false));i++){if(i===25)await pg.screenshot({path:'sp/b2-finisher.png'});if(i===48)await pg.screenshot({path:'sp/b2-victory.png'});await W(150);}
 console.log('coins',await ev(()=>window.__done),'cineErr',await ev(()=>window.__cerr.slice(0,3)),'errors',errs);
 // a sheet of all 6 arenas
 for(let a=0;a<6;a++){await ev(a=>{const N=window.__nk;N.state.lastArena=-1;const r=Math.random;Math.random=()=>a/6+0.01;N.Brawl.play({power:20});Math.random=r;},a);await W(3000);await pg.screenshot({path:`sp/arena-${a}.png`});await ev(()=>document.querySelector('#cine .skip').click());await W(400);}
 await b.close();})();
