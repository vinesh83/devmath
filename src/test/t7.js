const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 for(const [w,h] of [[820,1180],[1180,820],[375,667]]){
 const pg=await b.newPage({viewport:{width:w,height:h},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 const shot=async n=>pg.screenshot({path:`npc/${w}x${h}-${n}.png`});const W=ms=>pg.waitForTimeout(ms);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);
 await pg.evaluate(()=>{const T=window.__nk.Talk;T.say([['hoot','Hoo-hoo! Welcome to Word Tower, {name}. I am Professor Hoot. Word problems are riddles. Most of them hide TWO steps inside.']]);});
 await W(5200);await shot('a-hoot-long');
 const r=await pg.evaluate(()=>{const q=s=>document.querySelector(s).getBoundingClientRect();const k=q('.talk-skip'),bx=q('.talk-box'),hud=document.querySelector('.ow-hud').getBoundingClientRect();
   return {skip:[k.top,k.bottom,k.left,k.right],box:[bx.top,bx.bottom,bx.left,bx.right],hudBottom:hud.bottom,vw:innerWidth,vh:innerHeight,scrollW:document.documentElement.scrollWidth};});
 console.log(w,h,JSON.stringify(r));
 await pg.evaluate(()=>{for(let i=0;i<30;i++)document.querySelector('#talk').click();});await W(200);
 await pg.evaluate(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.state.npc.met[k]=1);N.Talk.book();});await W(300);await shot('b-book-all');
 await pg.evaluate(()=>{window.__nk.show('scr-map');document.querySelector('#overlay').hidden=true;const N=window.__nk;N.state.howtoSeen=true;N.startRun({title:'Word Tower · Level 1',mode:'level',world:'tower',level:0,color:'#3fbf5f',problems:[N.genWord(2),N.genWord(2)]});});
 await W(500);await pg.evaluate(()=>window.__nk.Talk.pop('hoot','Hoo! You did one step. But what does the question really ask? Read the last sentence again.'));await W(3000);await shot('c-pop-word');
 const pr=await pg.evaluate(()=>{const p=document.querySelector('.tpop').getBoundingClientRect();return [p.left,p.right,p.top,p.bottom,innerWidth];});console.log('pop',JSON.stringify(pr));
 console.log('errors',errs);await pg.close();}
 await b.close();})();
