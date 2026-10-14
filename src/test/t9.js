const { chromium } = require('/opt/node-tools/node_modules/playwright');
const VP=(process.env.VP||'1180x820').split('x').map(Number);
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:VP[0],height:VP[1]},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 const tag=VP.join('x');const shot=n=>pg.screenshot({path:`v6/${tag}-ink-${n}.png`});const W=ms=>pg.waitForTimeout(ms);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(800);for(let i=0;i<40;i++){if(!(await pg.evaluate(()=>!document.querySelector('#talk').hidden)))break;await pg.evaluate(()=>document.querySelector('#talk').click());await W(40);}
 await pg.evaluate(()=>{const N=window.__nk;const m=N.Talk.st().met;['knight','byte','rocky','sensei','pip'].forEach(k=>m[k]=1);N.Dojo.st().unlockDay=N.Dojo.st().today.day;N.state.howtoSeen=true;N.Brawl.off=true;N.Dojo.st().strictAnnounced='x';});
 // digit glyphs as polylines in a 0..1 box
 const G={1:[[[0.5,0],[0.5,1]]],7:[[[0.1,0],[0.9,0],[0.4,1]]],4:[[[0.6,0],[0.05,0.65],[0.95,0.65]],[[0.7,0.3],[0.7,1]]],0:[[[0.5,0],[0.15,0.25],[0.1,0.6],[0.3,0.95],[0.7,0.95],[0.9,0.6],[0.85,0.25],[0.5,0]]],
   2:[[[0.1,0.25],[0.4,0],[0.8,0.1],[0.85,0.35],[0.1,1],[0.95,1]]],3:[[[0.1,0.1],[0.6,0],[0.85,0.2],[0.45,0.48],[0.9,0.7],[0.6,1],[0.1,0.9]]],
   5:[[[0.85,0],[0.2,0],[0.15,0.45],[0.6,0.4],[0.85,0.65],[0.6,1],[0.1,0.9]]],8:[[[0.5,0.48],[0.15,0.25],[0.5,0],[0.85,0.25],[0.5,0.48],[0.1,0.75],[0.5,1],[0.9,0.75],[0.5,0.48]]],
   6:[[[0.75,0],[0.25,0.4],[0.15,0.8],[0.5,1],[0.85,0.75],[0.55,0.5],[0.2,0.65]]],9:[[[0.8,0.25],[0.5,0],[0.15,0.2],[0.4,0.5],[0.8,0.3],[0.8,0.6],[0.7,1]]]};
 const write=async(sel,text)=>{const r=await pg.evaluate(s=>{const c=document.querySelector(s).getBoundingClientRect();return [c.x,c.y,c.width,c.height];},sel);
   const h=Math.min(r[3]*0.6,90),w=h*0.6;let x=r[0]+20;const y=r[1]+(r[3]-h)/2;
   for(const ch of text){for(const st of G[ch]){await pg.mouse.move(x+st[0][0]*w,y+st[0][1]*h);await pg.mouse.down();
       for(let i=1;i<st.length;i++)await pg.mouse.move(x+st[i][0]*w,y+st[i][1]*h,{steps:8});await pg.mouse.up();}x+=w*1.5;}};
 // regular level
 await pg.evaluate(()=>{const N=window.__nk;N.startRun({title:'Test',mode:'level',world:'canyon',level:0,color:'#e8643a',problems:[N.GEN.add(1),N.GEN.add(1)]});});await W(600);
 await write('#inkPad canvas','4710');await W(2200);await pg.screenshot({path:'v6/dbg-level-ink.png'});console.log('dbg',await pg.evaluate(()=>JSON.stringify({ov:!document.querySelector('#overlay').hidden,talk:!document.querySelector('#talk').hidden,cine:!document.querySelector('#cine').hidden,tight:document.querySelector('.padcol').className,ink:!!document.querySelector('#inkPad canvas')})));
 console.log('level field:',await pg.evaluate(()=>window.__nk.Pad.active&&window.__nk.Pad.active.val),await pg.evaluate(()=>document.querySelector('#inkPad .ink-read').textContent));
 await shot('level');
 // dojo
 await pg.evaluate(()=>window.__nk.Dojo.start('tm','round'));await W(700);
 for(let i=0;i<4;i++){const ans=await pg.evaluate(()=>window.__nk.run.queue[window.__nk.run.idx].f.ans);await write('.dj-ink canvas',String(ans));await W(250);if(i===0)await shot('dojo-written');await W(2200);
   console.log('dojo q',i,'ans',ans,'res',await pg.evaluate(()=>{const r=window.__nk.run.results;return JSON.stringify(r[r.length-1]||null);}));}
 await shot('dojo');
 
 console.log('errors',errs);await b.close();})();
