const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await pg.evaluate(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;});
 const circ=(cx,cy,r)=>{const o=[];for(let i=0;i<=36;i++){const a=-1.6+i/36*6.3;o.push([cx+Math.cos(a)*r,cy+Math.sin(a)*r]);}return o;};
 const stroke=async(pts)=>{await pg.mouse.move(pts[0][0],pts[0][1]);await pg.mouse.down();for(const p of pts.slice(1))await pg.mouse.move(p[0],p[1]);await pg.mouse.up();};
 for(const pause of [300,650,1100,1500]){
   await pg.evaluate(()=>{const N=window.__nk;N.Dojo.start('tm','round');const p=N.run.queue[N.run.idx];p.f={op:'×',a:3,b:6,ans:18,key:'3x6',swap:true,belt:1};p.k='review';p.answer=18;N.Dojo.next();});await W(400);
   const r=await pg.evaluate(()=>{const c=document.querySelector('.dj-ink canvas').getBoundingClientRect();return [c.x,c.y,c.width,c.height];});
   const x0=r[0]+60,y0=r[1]+30;await stroke([[x0,y0],[x0,y0+90]]);await W(200);
   await stroke(circ(x0+70,y0+20,20));await W(pause);await stroke(circ(x0+70,y0+66,25));await W(2200);
   const res=await pg.evaluate(()=>JSON.stringify(window.__nk.run.results[0]||null));console.log('pause',pause,'ms between loops →',res);
   await pg.evaluate(()=>{window.__nk.show('scr-map');});await W(200);}
 console.log('errors',errs);await b.close();})();
