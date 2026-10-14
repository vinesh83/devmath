const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const ctx=await b.newContext({viewport:{width:1180,height:820},hasTouch:true,isMobile:true});const pg=await ctx.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.tap('text=Start the adventure');await W(1500);
 await ev(()=>{const N=window.__nk;document.querySelector('#talk').hidden=true;N.Talk.open=false;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);N.Pause.on=true; /* simulate a stuck pause flag */ window.__bp=N.Brawl.play({power:40});});
 await W(4500);
 const r=async sel=>{const x=await ev(s=>{const e=document.querySelector(s).getBoundingClientRect();return [e.left+e.width/2,e.top+e.height/2];},sel);return x;};
 const atk=await r('.bb-btn.atk'),right=await r('.bb-btn.mv:nth-child(2)');
 const x0=await ev(()=>window.__nk.Brawl.G.hero.x);
 // rapid taps on ATTACK
 for(let i=0;i<10;i++){await pg.touchscreen.tap(atk[0],atk[1]);await W(90);}
 const t1=await ev(()=>window.__nk.Brawl.G.t);await W(500);const t2=await ev(()=>window.__nk.Brawl.G.t);
 console.log('battle running despite stuck pause flag',t2>t1,'zoom scale',await ev(()=>window.visualViewport?window.visualViewport.scale:1));
 // hold right via CDP touch
 const cdp=await ctx.newCDPSession(pg);await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:right[0],y:right[1],id:1}]});await W(700);
 await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});const x1=await ev(()=>window.__nk.Brawl.G.hero.x);
 console.log('hero moved right while holding',Math.round(x1-x0),'px; keys released',await ev(()=>JSON.stringify(window.__nk.Brawl.G.keys)));
 console.log('meta',await ev(()=>document.querySelector('meta[name=viewport]').content),'errors',errs);await b.close();})();
