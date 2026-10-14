const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));pg.on('console',m=>{if(m.type()==='warning'&&/slip/.test(m.text()))errs.push(m.text());});
 const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(900);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.cineEvery=0;N.state.howtoSeen=true;N.Lesson.off=true;N.state.no3d=true;N.Arcade.pickOff=true;N.Dojo.st().unlockDay=new Date().toISOString().slice(0,10);Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});N.state.hero.pet='ellie';setInterval(()=>{N.Pause.last=Date.now();const c=[...document.querySelectorAll('#overlay .faces button')].find(x=>/Pretty sure/.test(x.textContent));if(c)c.click();},300);});
 // 1) analysis on his real slips
 const cases=[['930571 − 98790 (his 831821)',{op:'−',nums:['930571','98790'],dp:0,answer:831781},831821],['4.49 − 2.09 (his 6.4)',{op:'−',nums:['4.49','2.09'],dp:2,answer:2.4},6.4],['3.81 + 1.6 (his 560)',{op:'+',nums:['3.81','1.6'],dp:2,answer:5.41},560],
   ['2.82 + 3.7 (his 3.19)',{op:'+',nums:['2.82','3.7'],dp:2,answer:6.52},3.19],['320100 − 94147 (his 2252953)',{op:'−',nums:['320100','94147'],dp:0,answer:225953},2252953],['158 + 267 (his 415)',{op:'+',nums:['158','267'],dp:0,answer:425},415],
   ['534 − 178 (his 366)',{op:'−',nums:['534','178'],dp:0,answer:356},366],['734 + 215 (his 519)',{op:'+',nums:['734','215'],dp:0,answer:949},519],['area 25×19 (his 430)',{op:'+',nums:['200','50','180','45'],dp:0,answer:475,area:true},430],['6.66 − 1.67 (his 4.94)',{op:'−',nums:['6.66','1.67'],dp:2,answer:4.99},4.94]];
 for(const [l,P,v] of cases){console.log(' ',l,'->',await ev(([P,v])=>{const S=window.__nk.Slip,a=S.analyze(P,v,{area:!!P.area});return a.type+(a.col!=null?' @'+a.col:'')+' | "'+S.tip(a).t+'"';},[P,v]));}
 // 2) a real level: miss 1, miss 2, then fix it
 await ev(()=>{const N=window.__nk;N.startLevel(N.WORLDS.find(w=>w.id==='canyon'),0);});await W(1800);await ev(()=>{document.querySelector('#talk').hidden=true;});
 const P=await ev(()=>{const p=window.__nk.run.queue[window.__nk.run.idx];return {kind:p.kind,op:p.op,nums:p.nums,answer:p.answer,dp:p.dp};});console.log('problem',JSON.stringify(P));
 const submit=async v=>{await ev(v=>{const N=window.__nk;N.Pad.set(N.Pad.fields[0],String(v));N.Pad.focus(N.Pad.fields[0]);},v);const n0=await ev(()=>(window.__nk.state.slipLog||[]).length);
   for(let j=0;j<3;j++){await ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Submit/.test(x.textContent));b&&b.click();});await W(700);
     if(await ev(n=>(window.__nk.state.slipLog||[]).length>n||!document.querySelector('#card .ans-row')||window.__nk.Pad.fields[0].locked,n0))break;
     const q=await ev(()=>{const bt=[...document.querySelectorAll('.checkbox .choice')];return bt.length&&/before it counts/.test(document.querySelector('#msg').textContent);});
     if(q){await ev(()=>{const N=window.__nk,bt=[...document.querySelectorAll('.checkbox .choice')],ck=N.estimateArith(N.run.queue[N.run.idx]);const c=bt.find(x=>x.textContent.replace(/,/g,'')===String(ck.est));c&&c.click();});await W(300);
       await ev(()=>{const y=[...document.querySelectorAll('.checkbox .choice')].find(x=>/Yes, close/.test(x.textContent));y&&y.click();});await W(300);}}};
 const ans=P.answer,s=String(ans),wrong1=Number(s.slice(0,-2)+String((Number(s[s.length-2])+1)%10)+s.slice(-1));
 await submit(wrong1);await W(400);
 const box=await ev(()=>{const b=document.querySelector('.slip-box');return b&&{text:b.textContent.slice(0,140),glow:b.querySelectorAll('.glow').length,dog:!!b.querySelector('.dog-ic'),play:!!b.querySelector('.sl-play')};});
 console.log('miss 1 slip box:',JSON.stringify(box),'| side msg:',await ev(()=>document.querySelector('#msg').textContent),'| audio:',await ev(()=>{const a=window.__nk.Lesson&&window.__nk.Lesson.au&&window.__nk.Lesson.au();return a&&a.src.split('/').pop();}));
 console.log('answer shown anywhere?',await ev(a=>{const t=document.querySelector('#card').textContent.replace(/[,\s]/g,'');return t.includes(String(a));},ans));
 await pg.screenshot({path:'sp/slip-miss1-a.png'});await W(2800);await pg.screenshot({path:'sp/slip-miss1-b.png'});
 const wrong2=wrong1;await submit(wrong2);await W(500);
 const help=await ev(()=>{const b=document.querySelector('.sl-help');return b&&b.textContent.slice(0,160);});console.log('miss 2 helper:',help);
 await pg.screenshot({path:'sp/slip-miss2.png'});
 const want=await ev(()=>{const c=window.__nk.Slip.cur.an;return c.op==='−'?(c.top-c.bin+(c.need?10:0))-c.bot:c.ds.reduce((u,x)=>u+x,0)+(c.cin||0);});
 await ev(w=>{for(const ch of String(w))window.__nk.Pad.key(ch);},want);await W(900);
 console.log('helper after right column answer:',await ev(()=>{const x=[...document.querySelectorAll('.sl-help .sl-hc')].pop();return x&&x.textContent;}),'| active is main field:',await ev(()=>window.__nk.Pad.active===window.__nk.Pad.fields[0]));
 await pg.screenshot({path:'sp/slip-miss2-done.png'});
 const idx0=await ev(()=>window.__nk.run.idx);await submit(ans);await W(4000);
 console.log('fixed -> moved on:',await ev(i=>window.__nk.run.idx>i,idx0),'| box gone:',await ev(()=>!document.querySelector('.slip-box')));
 console.log('slipLog:',await ev(()=>JSON.stringify(window.__nk.state.slipLog.map(e=>({k:e.kind,type:e.type,place:e.place,try:e.try,ok:e.ok,helper:e.helper})))));
 // 3) visuals for decimals and area boxes (direct)
 for(const [name,sl,v] of [['dots',{P:{op:'+',nums:['3.81','1.6'],dp:2,answer:5.41}},560],['boxes',{P:{op:'+',nums:['200','50','180','45'],dp:0,answer:475},area:true},430],['borrow',{P:{op:'−',nums:['930571','98790'],dp:0,answer:831781}},831821]]){
   await ev(([sl,v])=>{const N=window.__nk;N.Slip.show(sl,v,1,{});},[sl,v]);await W(3000);await pg.screenshot({path:`sp/slip-${name}.png`});}
 // 4) mini-drill after the same slip twice
 await ev(()=>{const N=window.__nk;const S=N.Slip;S.count({type:'borrow'},{});S.count({type:'borrow'},{});});
 console.log('drill queued:',await ev(()=>JSON.stringify(window.__nk.state.slipDay)));
 await ev(()=>{const N=window.__nk;N.Slip.clear();N.run=null;document.querySelectorAll('.screen').forEach(s=>s.hidden=true);N.startLevel(N.WORLDS.find(w=>w.id==='canyon'),0);});await W(1800);await ev(()=>{document.querySelector('#talk').hidden=true;});
 console.log('first problems:',await ev(()=>window.__nk.run.queue.slice(0,3).map(p=>(p.drill?'DRILL:':'')+p.nums.join(p.op)).join(' | ')),'| banner:',await ev(()=>{const b=document.querySelector('.sl-drill');return b&&b.textContent;}));
 await pg.screenshot({path:'sp/slip-drill.png'});
 console.log('errors',errs);await b.close();})();
