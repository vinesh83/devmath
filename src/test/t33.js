const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1500);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.cineEvery=0;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);setInterval(()=>{N.Pause.last=Date.now();},500);});
 await ev(()=>window.__nk.Dojo.start('tm','round'));await W(1500);
 // make the current problem 4 x 10 = 40
 await ev(()=>{const N=window.__nk;const p=N.run.queue[N.run.idx];window.__ans=p.f.ans;});
 const R=await ev(()=>{const c=document.querySelector('.dj-ink canvas').getBoundingClientRect();return {x:c.left,y:c.top,w:c.width,h:c.height};});
 console.log('dojo pad',Math.round(R.w),Math.round(R.h),'boxes',await ev(()=>window.__nk.InkBox.active.boxes));
 const line=async pts=>{await pg.mouse.move(pts[0][0],pts[0][1]);await pg.mouse.down();for(const p of pts.slice(1))await pg.mouse.move(p[0],p[1],{steps:4});await pg.mouse.up();};
 const bw=R.w/2,top=R.y+R.h*0.2,bot=R.y+R.h*0.8,hh=bot-top;
 const four=async x0=>{await line([[x0+bw*0.42,top],[x0+bw*0.18,top+hh*0.62],[x0+bw*0.62,top+hh*0.62]]);await line([[x0+bw*0.48,top+hh*0.25],[x0+bw*0.48,bot]]);};
 const zero=async x0=>{const cx=x0+bw*0.5,cy=(top+bot)/2,rx=bw*0.2,ry=hh*0.45,pts=[];for(let k=0;k<=28;k++){const a=-Math.PI/2+k/28*2*Math.PI;pts.push([cx+Math.cos(a)*rx,cy+Math.sin(a)*ry]);}await line(pts);};
 // record strokes as drawn so we can compare old vs new reader
 await four(R.x);await zero(R.x+bw);await W(400);
 const cmp=await ev(()=>{const I=window.__nk.InkBox.active,HW=window.__nk.HW;const old=HW.recognize(I.strokes,{allowDot:false,maxLen:3});const nw=window.__nk.InkBox.readBoxes(I.strokes,2,I.W,I.H,{});return {old:old.text,new:nw.text,p:nw.items.map(x=>x.p.toFixed(2))};});
 console.log('same strokes -> old reader:',cmp.old,' boxes:',cmp.new,cmp.p);
 await pg.screenshot({path:'sp/dojo-boxes.png'});await W(2500);
 console.log('answer was',await ev(()=>window.__ans),'mine samples',await ev(()=>window.__nk.InkBox.mine.count()));
 // centered single digit written across the middle still reads
 // breathing in a break
 await ev(()=>{window.__nk.ScreenTime.brk({secs:60});});await W(3500);
 const C=await ev(()=>{const c=document.querySelector('.bb-cv').getBoundingClientRect();return {x:c.left,y:c.top,w:c.width,h:c.height};});
 await pg.mouse.move(C.x+C.w*0.16,C.y+C.h*0.84);await pg.mouse.down();
 for(let i=0;i<40;i++){const st=await ev(()=>{const cv=document.querySelector('.bb-cv');return 1;});await W(100);
   // follow along the left side upward (breathe in)
   await pg.mouse.move(C.x+C.w*0.16,C.y+C.h*(0.84-0.68*Math.min(1,i/40)));}
 await pg.screenshot({path:'sp/box-breath.png'});console.log('meter',await ev(()=>document.querySelector('.bb-meter i').style.width),'label',await ev(()=>document.querySelector('.bb-label').textContent));
 await pg.mouse.up();
 console.log('errors',errs);await b.close();})();
