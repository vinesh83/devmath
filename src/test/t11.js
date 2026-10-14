const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 for(const [w,h] of [[1180,820],[820,1180]]){const pg=await b.newPage({viewport:{width:w,height:h},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 const shot=n=>pg.screenshot({path:`v7/${w}x${h}-${n}.png`});const W=ms=>pg.waitForTimeout(ms);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await pg.evaluate(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();
   const F=N.Dojo.st().facts;F['7x8']={n:1,ok:0,intro:true,days:{},credits:0,owned:false,teach:true,taught:null,rev:0,last:null};});
 await pg.evaluate(()=>window.__nk.Dojo.start('tm','round'));await W(500);
 // answer until the teach item (7x8), answer it wrong
 for(let i=0;i<30;i++){const st=await pg.evaluate(()=>{const N=window.__nk,p=N.run.queue[N.run.idx];return p?{k:p.k,ans:p.f.ans,key:p.f.key,act:!!N.Pad.active&&!N.Pad.active.locked}:null;});if(!st)break;if(!st.act){await W(200);continue;}
   if(st.k==='teach'){await pg.evaluate(()=>{for(const c of '54')window.__nk.Pad.key(c);});await W(700);await shot('miss');break;}
   await pg.evaluate(v=>{for(const c of String(v))window.__nk.Pad.key(c);},st.ans);await W(500);}
 await pg.evaluate(()=>{const N=window.__nk;['2x2','2x3','2x4','2x5','2x6','2x7','2x8','2x9','2x10','5x5'].forEach(k=>{N.Dojo.st().facts[k]={n:3,ok:3,intro:true,days:{},credits:3,owned:true,rev:0,last:null};});N.Dojo.open();});await W(400);await shot('dojo');
 await pg.evaluate(()=>window.__nk.Dojo.start('tm','sprint'));await W(1500);await shot('sprint');
 console.log(w,h,'errors',errs);await pg.close();}
 await b.close();})();
