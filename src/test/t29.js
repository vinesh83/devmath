const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');
 // migration: an old 45-minute limit becomes 25
 await ev(()=>{localStorage.setItem('nk-state',JSON.stringify({v:1,hero:{name:'Dev',skin:'#e8b48a',hair:'#2b1d14',outfit:'scout',hat:'none',cape:'none',pet:'ellie'},coins:50,owned:['outfit:scout','pet:none','pet:ellie'],dogPicked:1,ellieMet:1,howtoSeen:true,
   npc:{met:{knight:1,byte:1,sensei:1,pip:1,rocky:1,marina:1,echo:1,ferra:1,bo:1,hoot:1},lore:0},st:{days:{},shopMin:5,totalMin:45,extra:{}}}));});
 await pg.reload();await W(2500);
 console.log('limit now',await ev(()=>window.__nk.ScreenTime.st().s.totalMin));
 await ev(()=>{const N=window.__nk;document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();const d=N.Dojo.st();d.strictAnnounced='x';d.unlockDay=d.today.day;setInterval(()=>{N.Pause.last=Date.now();},500);N.Brawl.off=true;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);});
 // big pad on a big addition problem
 await ev(()=>{const N=window.__nk;N.startLevel(N.WORLDS.find(x=>x.id==='canyon'),0);});await W(4000);
 await ev(()=>{const o=document.querySelector('#overlay');if(!o.hidden){const b=o.querySelector('button');if(b)b.click();}});await W(400);
 await pg.screenshot({path:'sp/talk-pop-calm.png'});
 console.log('digits',await ev(()=>window.__nk.BigPad.digits()),'hint',await ev(()=>document.querySelector('#inkPad .ink-hint').textContent));
 const r=await ev(()=>{const c=document.querySelector('#inkPad').getBoundingClientRect();return {x:c.left+c.width/2,y:c.top+c.height/2};});
 await pg.mouse.click(r.x,r.y);await W(500);console.log('bigpad open',await ev(()=>!!document.querySelector('.bigpad')));
 const bx=await ev(()=>{const c=document.querySelector('.bp-cv').getBoundingClientRect();return {x:c.left,y:c.top,w:c.width,h:c.height,n:document.querySelectorAll('.bp-reads span').length};});console.log('boxes',bx.n,'size',Math.round(bx.w),Math.round(bx.h));
 const bw=bx.w/bx.n;
 const one=async i=>{const x=bx.x+bw*(i+0.5);await pg.mouse.move(x,bx.y+bx.h*0.18);await pg.mouse.down();for(let k=1;k<=10;k++)await pg.mouse.move(x+1,bx.y+bx.h*(0.18+0.64*k/10));await pg.mouse.up();};
 const zero=async i=>{const cx=bx.x+bw*(i+0.5),cy=bx.y+bx.h*0.5,rx=bw*0.28,ry=bx.h*0.32;await pg.mouse.move(cx,cy-ry);await pg.mouse.down();for(let k=1;k<=24;k++){const a=-Math.PI/2+k/24*2*Math.PI;await pg.mouse.move(cx+Math.cos(a)*rx,cy+Math.sin(a)*ry);}await pg.mouse.up();};
 await one(1);await zero(2);await one(3);await zero(4);await W(300);
 console.log('read',await ev(()=>document.querySelector('.bp-said').textContent),'cells',await ev(()=>[...document.querySelectorAll('.bp-reads span')].map(x=>x.textContent).join('|')));
 await pg.screenshot({path:'sp/bigpad.png'});console.log('docked top',await ev(()=>document.querySelector('.bigpad').classList.contains('top')));await ev(()=>[...document.querySelectorAll('.bigpad button')].find(x=>/Move/.test(x.textContent)).click());await pg.waitForTimeout(200);console.log('after move: top',await ev(()=>document.querySelector('.bigpad').classList.contains('top')),'saved',await ev(()=>window.__nk.state.bigpadPos));await ev(()=>[...document.querySelectorAll('.bigpad button')].find(x=>/Move/.test(x.textContent)).click());
 await ev(()=>[...document.querySelectorAll('.bigpad button')].find(x=>/Done/.test(x.textContent)).click());await W(300);
 console.log('field',await ev(()=>window.__nk.Pad.active.val),'src',await ev(()=>window.__nk.Pad.active.src));
 // break due between problems
 await ev(()=>{window.__nk.ScreenTime.st().D.since=9*60;});
 await ev(()=>{const N=window.__nk;const p=N.run.queue[N.run.idx];N.Pad.set(N.Pad.active,String(p.answer));N.Pad.active.src='key';[...document.querySelectorAll('#actions button')].find(x=>/Submit/.test(x.textContent)).click();});await W(1200);
 await ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Next/.test(x.textContent));if(b)b.click();});await W(800);
 console.log('recharge',await ev(()=>{const m=document.querySelector('.recharge');return m&&m.textContent.slice(0,90);}),'clock held',await ev(()=>window.__nk.Pause.on));
 await pg.screenshot({path:'sp/recharge.png'});
 const st0=await ev(()=>window.__nk.ScreenTime.st().D.total);await W(6000);console.log('screen time frozen',await ev(t=>window.__nk.ScreenTime.st().D.total===t,st0));
 console.log('errors',errs);await b.close();})();
