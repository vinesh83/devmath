const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(900);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.cineEvery=0;N.state.howtoSeen=true;N.Lesson.off=true;N.state.no3d=true;N.Arcade.pickOff=true;Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});setInterval(()=>{N.Pause.last=Date.now();},500);});
 // 1) every hint picture renders without showing the answer
 const pics=await ev(()=>{const L=window.__nk.Lab,out=[];const F=[{op:'+',a:8,b:7,ans:15,key:'7+8'},{op:'−',a:13,b:8,ans:5,key:'13-8'},{op:'×',a:7,b:6,ans:42,key:'6x7'},{op:'×',a:4,b:3,ans:12,key:'3x4'},{op:'÷',a:42,b:6,ans:7,key:'42/6'},{op:'+?',a:6,b:13,ans:7,key:'6+?13'}];
   const host=document.createElement('div');host.id='labgal';host.style.cssText='position:fixed;inset:0;z-index:99;background:#1f2347;overflow:auto;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding:8px';document.body.append(host);
   for(const f of F)for(const a of (L.ARMS[f.op]||[])){if(!L.ok(a,f))continue;let e=null;try{e=L.render(a,f);}catch(x){out.push(a+' '+f.key+' ERR '+x.message);continue;}if(!e){out.push(a+' '+f.key+' null');continue;}
     const shown=e.textContent;const leak=a!=='blocks'&&new RegExp('(^|[^0-9])'+f.ans+'([^0-9]|$)').test(shown.replace(new RegExp('(^|[^0-9])('+[f.a,f.b].join('|')+')([^0-9]|$)','g'),' '));
     out.push(a+' '+f.key+(leak?' LEAK? '+shown:' ok'));const w=document.createElement('div');w.style.cssText='color:#fff;font:700 13px sans-serif';w.append(a+' · '+f.key,e);host.append(w);}
   return out;});
 console.log('pictures:',pics.join(' | '));await W(2500);await pg.screenshot({path:'test/sp/lab-gallery.png',fullPage:false});await ev(()=>document.getElementById('labgal').remove());
 // 2) Dojo: misses get rotating hint types; retries are scored
 await ev(()=>window.__nk.Dojo.start('pm','round'));await W(2500);
 const cur=()=>ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx];return {idx:N.run.idx,k:p.k,ans:p.f.ans,op:p.f.op,q:p.f.a+' '+p.f.op+' '+p.f.b};});
 const key=s=>ev(s=>{for(const c of String(s))window.__nk.Pad.key(c);},s);
 const used=[];for(let r=0;r<4;r++){let c=await cur();for(let i=0;i<6&&c.k==='teach';i++){await key(c.ans);await W(2600);c=await cur();}
   await key(c.ans+1);await W(900);const h=await ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx],e=document.querySelector('#card .bk-hint');return {arm:p.hintArm,cls:e&&e.className,text:e&&e.textContent.slice(0,70),say:(document.querySelector('#say')||{}).textContent};});
   used.push(c.op+':'+h.arm);console.log(' miss',c.q,'->',JSON.stringify(h));if(r===0)await pg.screenshot({path:'test/sp/lab-dojo-hint.png'});
   await key(r%2?c.ans+2:c.ans);await W(2600);}
 console.log('hint arms used:',used.join(' '));
 console.log('retry log:',await ev(()=>window.__nk.Lab.st().retry.map(x=>x.op+x.arm+':'+(x.ok?'Y':'N')).join(' ')),'arms:',await ev(()=>JSON.stringify(window.__nk.Lab.st().arms)));
 // 3) strategy check-in after a right answer
 await ev(()=>{const L=window.__nk.Lab;L._w=L.wantStrat;L.wantStrat=()=>true;});
 let c=await cur();for(let i=0;i<8&&(c.k==='teach'||!c.ans&&c.ans!==0);i++){await key(c.ans);await W(2600);c=await cur();}
 if(await ev(()=>!!document.querySelector('.dj-miss'))){await ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Skip/.test(x.textContent));b&&b.click();});await W(800);c=await cur();}
 const idx0=c.idx;await key(c.ans);await W(900);const sv=await ev(()=>!!document.querySelector('.lab-strat'));console.log('check-in shown:',sv);await pg.screenshot({path:'test/sp/lab-strat.png'});
 await ev(()=>{const b=[...document.querySelectorAll('.lab-sb')].find(x=>/trick/.test(x.textContent));b&&b.click();});await W(700);
 console.log('recorded:',await ev(()=>JSON.stringify(window.__nk.Lab.st().strat.slice(-1))),'advanced:',await ev(i=>window.__nk.run.idx>i,idx0));
 // timeout path: no tap -> moves on after 7s
 c=await cur();for(let i=0;i<6&&c.k==='teach';i++){await key(c.ans);await W(2600);c=await cur();}const idx1=c.idx;await key(c.ans);await W(8200);
 console.log('timeout advanced:',await ev(i=>window.__nk.run.idx>i,idx1),'skip logged:',await ev(()=>window.__nk.Lab.st().strat.slice(-1)[0].s));
 await ev(()=>{const L=window.__nk.Lab;L.wantStrat=L._w;});
 // 4) end the round: "Which made more sense?" before the arcade
 await ev(()=>{const N=window.__nk;N.Lab._r=Math.random;Math.random=()=>0.9;N.run.queue.length=N.run.idx+1;});
 c=await cur();await key(c.ans);await W(3000);await ev(()=>{Math.random=window.__nk.Lab._r;});
 for(let i=0;i<10;i++){if(await ev(()=>!!document.querySelector('.lab-cards')))break;await ev(()=>{const b=[...document.querySelectorAll('#overlay button')].find(x=>/Continue|Next|OK|Nice|Done|▸/.test(x.textContent));b&&b.click();});await W(900);}
 console.log('pref prompt:',await ev(()=>{const m=document.querySelector('.lab-modal');return m&&m.textContent.slice(0,80);}));await pg.screenshot({path:'test/sp/lab-pref.png'});
 await ev(()=>{const c=document.querySelector('.lab-card');c&&c.click();});await W(600);console.log('pref saved:',await ev(()=>JSON.stringify(window.__nk.Lab.st().pref)));
 await W(1500);await ev(()=>{document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);});
 // 5) Brain Lab start to finish
 await ev(()=>{window.__bl=0;window.__nk.Lab.brainLab().then(()=>window.__bl=1);});await W(500);
 const solve=t=>{t=t.replace(/[=\s]+$/,'').trim();const m=t.match(/^(\d+)\s*([+−×÷])\s*(\d+|▢)\s*(?:=\s*(\d+))?$/);if(!m)return 1;const a=+m[1],o=m[2],b=m[3]==='▢'?null:+m[3],c=m[4]?+m[4]:null;
   if(b==null)return o==='+'?c-a:o==='−'?a-c:o==='×'?c/a:a/c;return o==='+'?a+b:o==='−'?a-b:o==='×'?a*b:a/b;};
 const kinds=[];let shots=0;
 for(let step=0;step<80;step++){if(await ev(()=>window.__bl))break;const k=await ev(()=>{const m=document.querySelector('#overlay .modal');if(!m)return 'none';if(m.querySelector('.lab-keys'))return 'fact:'+m.querySelector('.lab-q').textContent;if(m.querySelector('.lab-cards'))return 'cards';if(m.querySelector('.lab-opts'))return 'opts';if(m.classList.contains('lab-interview'))return 'interview';return 'screen:'+m.querySelector('h2,p').textContent.slice(0,30);});
   kinds.push(k.split(':')[0]);
   if(['cards','interview'].includes(k)||/fact/.test(k)&&shots<1||/Learn this/.test(await ev(()=>document.querySelector('#overlay').textContent))&&shots<2){shots++;await pg.screenshot({path:`test/sp/lab-bl-${step}.png`});}
   if(k.startsWith('fact:')){const ans=solve(k.slice(5));for(const ch of String(ans))await ev(ch=>{[...document.querySelectorAll('.lab-k')].find(x=>x.textContent===ch).click();},ch);await ev(()=>[...document.querySelectorAll('.lab-k')].find(x=>x.textContent==='OK').click());}
   else if(k==='cards')await ev(()=>document.querySelectorAll('.lab-card')[0].click());
   else if(k==='opts')await ev(()=>document.querySelectorAll('.lab-opts .lab-sb')[1].click());
   else if(k==='interview'){await ev(()=>{const ch=document.querySelectorAll('.lab-chip');[0,2,7,9].forEach(i=>ch[i]&&ch[i].click());const t=document.querySelector('.lab-txt');t.value='I count up from 8';t.dispatchEvent(new Event('input'));});await W(200);await ev(()=>[...document.querySelectorAll('.lab-interview .btn-green')][0].click());}
   else {await W(200);for(let w=0;w<20&&await ev(()=>{const b=document.querySelector('#overlay .btn-green');return b&&b.disabled;});w++)await W(500);await ev(()=>{const b=document.querySelector('#overlay .btn-green');b&&b.click();});}
   await W(250);}
 const cnt={};kinds.forEach(k=>cnt[k]=(cnt[k]||0)+1);console.log('brain lab finished:',await ev(()=>window.__bl),'steps',JSON.stringify(cnt));
 console.log('session:',await ev(()=>{const s=window.__nk.Lab.st().sessions.slice(-1)[0];return s&&JSON.stringify({inv:s.inventory.length,invOk:s.inventory.filter(x=>x.ok).length,strats:s.inventory.map(x=>x.strat).join(','),show:s.showdown.map(x=>x.op+':'+x.sense+'/'+x.fun).join(' '),exp:s.experiment.map(x=>x.arm+':'+x.ok).join(' '),iv:s.interview});}));
 // 6) Report panel
 await ev(()=>{window.__nk.showRep();});await W(800);
 console.log('report panel:',await ev(()=>{const p=document.querySelector('.lab-panel');return p&&p.textContent.slice(0,400);}));
 await ev(()=>{const p=document.querySelector('.lab-panel');p&&p.scrollIntoView();});await W(300);await pg.screenshot({path:'test/sp/lab-report.png'});
 console.log('in sync payload:',await ev(()=>{const N=window.__nk;return !!(N.state.lab&&N.state.lab.sessions.length);}));
 console.log('errors',errs);await b.close();})();
