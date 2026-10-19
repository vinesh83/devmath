const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(900);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.cineEvery=0;N.state.howtoSeen=true;N.Lesson.off=true;N.state.no3d=true;N.Arcade.pickOff=true;N.Dojo.st().unlockDay=new Date().toISOString().slice(0,10);Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});N.state.hero.pet='ellie';setInterval(()=>{N.Pause.last=Date.now();const c=[...document.querySelectorAll('#overlay .faces button')].find(x=>/Pretty sure/.test(x.textContent));if(c)c.click();},300);});
 // 1) his worksheet multiplication slips
 for(const [a,m,v] of [[2048,4,2192],[4096,4,4384],[4096,8,4768],[8192,4,8768],[286,7,2062],[143,7,1061],[425,6,2500]])
   console.log(`  ${m} × ${a}, his ${v} ->`,await ev(([a,m,v])=>{const S=window.__nk.Slip,P={op:'×',nums:[String(a),String(m)],dp:0,answer:a*m};const x=S.analyze(P,v);return x.type+(x.col!=null?' @'+x.col:'')+' | '+S.tip(x).t;},[a,m,v]));
 // 2) long-division plans agree with the answers for every level
 console.log('plans:',await ev(()=>{const N=window.__nk;const out={};for(let lv=1;lv<=5;lv++){let ok=0,bad=[];for(let i=0;i<300;i++){const p=N.genDiv(lv),P=N.divPlan(p.n,p.d);const q=Number(P.rows.map(r=>r.q).join(''));if(q===p.answer&&P.rem===p.rem&&p.n===p.answer*p.d+p.rem)ok++;else bad.push(p.n+'/'+p.d);}
   const s=N.genDiv(lv);out['L'+lv]=ok+'/300 e.g. '+s.n+' ÷ '+s.d+' = '+s.answer+(s.rem?' R'+s.rem:'')+(bad.length?' BAD '+bad.slice(0,3):'');}return JSON.stringify(out);}));
 // 3) division facts join the Times Dojo once the times fact is owned
 console.log('flip facts:',await ev(()=>{const N=window.__nk,D=N.Dojo.st();['2x7','5x6','3x10'].forEach(k=>{D.facts[k]=Object.assign(D.facts[k]||{},{n:3,ok:3,owned:true,ownedAt:'2026-10-01',days:{},lats:[]});});
   const all=N.Dojo.facts('tm');return all.filter(f=>f.op==='÷'&&f.belt===0).map(f=>f.key).join(' ');}));
 await ev(()=>{window.__nk.Dojo.start('tm','round');});await W(2200);
 let flipSeen=null;for(let i=0;i<22&&!flipSeen;i++){const c=await ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx];return {k:p.k,op:p.f.op,ans:p.f.ans,chip:(document.querySelector('.dv-flip')||{}).textContent||null};});
   if(c.chip){flipSeen=c.chip;await pg.screenshot({path:'sp/div-flip.png'});break;}await ev(a=>{for(const ch of String(a))window.__nk.Pad.key(ch);},c.ans);await W(c.k==='teach'?2600:1200);
   if(await ev(()=>!!document.querySelector('.lab-strat')))await ev(()=>document.querySelector('.lab-sb').click());}
 console.log('flip chip in Dojo:',flipSeen);
 // 4) Division Dungeon from the map
 await ev(()=>{const N=window.__nk;N.run=null;document.querySelectorAll('.screen').forEach(s=>s.hidden=true);document.querySelector('#overlay').hidden=true;N.renderMap&&N.renderMap();});
 await ev(()=>{const N=window.__nk;document.querySelectorAll('.screen').forEach(s=>s.hidden=true);document.querySelector('#scr-map').hidden=false;});await W(500);
 console.log('map button:',await ev(()=>{const b=document.querySelector('.ow-div');return b&&b.textContent;}));
 await ev(()=>{const N=window.__nk;N.DivLessons.ok={};N.DivLessons.probing=true;});await ev(()=>document.querySelector('.ow-div').click());await W(1200);await pg.screenshot({path:'sp/div-dungeon.png'});
 console.log('dungeon modal:',await ev(()=>document.querySelector('.dv-modal').textContent.slice(0,200)));
 await ev(()=>document.querySelector('.dv-lv').click());await W(2500);await ev(()=>{document.querySelector('#talk').hidden=true;});
 const p=await ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx];return {kind:p.kind,n:p.n,d:p.d,ans:p.answer,rem:p.rem,plan:N.divPlan(p.n,p.d)};});console.log('problem',p.n,'÷',p.d,'=',p.ans,'R',p.rem);
 await pg.screenshot({path:'sp/div-step1.png'});
 const typ=async v=>{await ev(v=>{for(const ch of String(v))window.__nk.Pad.key(ch);},v);await W(450);};
 // a wrong divide first (too big), then right steps all the way
 const r0=p.plan.rows[0];await typ(Math.min(9,r0.q+1));console.log('too-big tip:',await ev(()=>document.querySelector('.dv-tip').textContent));await pg.screenshot({path:'sp/div-wrong.png'});await W(500);
 for(let k=0;k<p.plan.rows.length;k++){const r=p.plan.rows[k];if(k>0||true){if(k>0)await typ(r.q);else await typ(r.q);}await W(300);await typ(r.prod);await W(300);await typ(r.diff);await W(500);
   if(k<p.plan.rows.length-1){if(k===0)await pg.screenshot({path:'sp/div-bring.png'});await ev(()=>{const b=document.querySelector('.dv-bring');b&&b.click();});await W(700);}}
 await W(600);await pg.screenshot({path:'sp/div-done.png'});console.log('result:',await ev(()=>document.querySelector('.dv-result')&&document.querySelector('.dv-result').textContent));
 await typ(p.n);await W(1500);console.log('after check: actions',await ev(()=>[...document.querySelectorAll('#actions button')].map(x=>x.textContent).join('|')),'log',await ev(()=>{const L=window.__nk.Local?window.__nk.Local.log:[];const x=L[L.length-1];return x&&JSON.stringify({q:x.q,kind:x.kind,skill:x.skill,firstTry:x.firstTry,solved:x.solved,check:x.checkUsed,tags:x.tags});}));
 // 5) a multiplication problem with the first-digit slip
 await ev(()=>{const N=window.__nk;N.run=null;document.querySelectorAll('.screen').forEach(s=>s.hidden=true);N.startLevel(N.WORLDS.find(w=>w.id==='castle'),1);});await W(1800);await ev(()=>{document.querySelector('#talk').hidden=true;});
 for(let i=0;i<3;i++){const k=await ev(()=>window.__nk.run.queue[window.__nk.run.idx].kind);if(k==='mul')break;await ev(()=>{const N=window.__nk;N.run.idx++;N.nextProblem();});await W(800);}
 const mp=await ev(()=>{const p=window.__nk.run.queue[window.__nk.run.idx];return p.kind==='mul'?{nums:p.nums,ans:p.answer}:null;});console.log('mul problem',JSON.stringify(mp));
 if(mp){const a=Number(mp.nums[0]),m=Number(mp.nums[1]),n=String(a).length,low=Math.pow(10,n-1),wrong=Math.floor(a/low)*low+(mp.ans%low);
   await ev(v=>{const N=window.__nk;N.Pad.set(N.Pad.fields[0],String(v));},wrong);await ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Submit/.test(x.textContent));b&&b.click();});await W(1200);
   console.log('mul slip box:',await ev(()=>{const b=document.querySelector('.slip-box');return b&&b.textContent.slice(0,120);}));await W(2500);await pg.screenshot({path:'sp/mul-slip.png'});}
 console.log('errors',errs);await b.close();})();
