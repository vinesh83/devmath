const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1500);
 await ev(()=>{const N=window.__nk;document.querySelector('#talk').hidden=true;N.Talk.open=false;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);});
 for(const k of ['box','balloon','bubbles','dance','workout','senses','eyes']){
   await ev(k=>{const N=window.__nk;N.Breaks.pick=()=>k;window.__brk=false;N.ScreenTime.brk({secs:60}).then(()=>window.__brk=true);},k);await W(2500);
   const cv=await ev(()=>{const c=document.querySelector('.recharge canvas');if(!c)return null;const r=c.getBoundingClientRect();return {x:r.left,y:r.top,w:r.width,h:r.height};});
   if(k==='balloon'&&cv){await pg.mouse.move(cv.x+cv.w/2,cv.y+cv.h/2);await pg.mouse.down();await W(2500);await pg.mouse.up();}
   if(k==='bubbles'&&cv){for(let i=0;i<20;i++){await pg.mouse.click(cv.x+cv.w*(0.2+Math.random()*0.6),cv.y+cv.h*(0.3+Math.random()*0.6));await W(80);}}
   if(k==='workout'){await W(3200);await ev(()=>[...document.querySelectorAll('.recharge button')].find(x=>/Did it/.test(x.textContent)).click());await W(300);}
   if(k==='senses'){for(let i=0;i<3;i++){await ev(()=>{const d=[...document.querySelectorAll('.bk-dot:not(.on)')][0];if(d)d.click();});await W(150);}}
   await pg.screenshot({path:`sp/brk-${k}.png`});
   const info=await ev(()=>({title:document.querySelector('.rc-kind')&&document.querySelector('.rc-kind').textContent,text:(document.querySelector('.recharge .bb-label,.recharge .bk-move')||{}).textContent,
     bubbles:(document.querySelector('.recharge canvas')?1:0),stars:(document.querySelector('.bk-stars')||{}).textContent,dots:document.querySelectorAll('.bk-dot.on').length,time:document.querySelector('.rc-time').textContent}));
   console.log(k.padEnd(8),JSON.stringify(info));
   await ev(()=>{const g=document.querySelector('.recharge .btns button');g.disabled=false;g.click();});await W(400);console.log('   closed',await ev(()=>window.__brk));}
 console.log('errors',errs);await b.close();})();
