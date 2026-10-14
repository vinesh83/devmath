const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1500);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.cineEvery=0;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);setInterval(()=>{N.Pause.last=Date.now();},500);});
 await ev(()=>window.__nk.Dojo.start('tm','round'));await W(3500);
 const line=async pts=>{await pg.mouse.move(pts[0][0],pts[0][1]);await pg.mouse.down();for(const p of pts.slice(1))await pg.mouse.move(p[0],p[1],{steps:4});await pg.mouse.up();};
 for(let r=0;r<3;r++){
   await ev(()=>{const N=window.__nk;N.run.queue[N.run.idx].f.ans=10;});
   const R=await ev(()=>{const c=document.querySelector('.dj-ink canvas').getBoundingClientRect();return {x:c.left,y:c.top,w:c.width,h:c.height};});const bw=R.w/2,top=R.y+R.h*0.2,bot=R.y+R.h*0.8;
   await line([[R.x+bw*0.5,top],[R.x+bw*0.5+2,bot]]);const cx=R.x+bw*1.5,cy=(top+bot)/2,pts=[];for(let k=0;k<=28;k++){const a=-Math.PI/2+k/28*2*Math.PI;pts.push([cx+Math.cos(a)*bw*0.2,cy+Math.sin(a)*(bot-top)*0.45]);}await line(pts);
   await W(3000);console.log('round',r,'last result ok',await ev(()=>{const N=window.__nk;const rs=N.run.results.filter(Boolean);return rs[rs.length-1]&&rs[rs.length-1].firstTry;}),'mine samples',await ev(()=>window.__nk.InkBox.mine.count()));}
 console.log('stored',await ev(()=>Object.keys(JSON.parse(localStorage.getItem('nk-ink-mine')||'{}'))));
 console.log('errors',errs);await b.close();})();
