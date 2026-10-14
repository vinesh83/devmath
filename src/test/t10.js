const { chromium } = require('/opt/node-tools/node_modules/playwright');
const VP=(process.env.VP||'1180x820').split('x').map(Number);
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:VP[0],height:VP[1]},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message+' '+(e.stack||'').split('\n')[1]));
 const tag=VP.join('x');const shot=n=>pg.screenshot({path:`v7/${tag}-${n}.png`});const W=ms=>pg.waitForTimeout(ms);
 let day0=new Date('2026-10-05T16:00:00');await pg.clock.setFixedTime(day0);
 const drain=async()=>{for(let i=0;i<80;i++){const o=await pg.evaluate(()=>!document.querySelector('#talk').hidden);if(!o)break;await pg.evaluate(()=>document.querySelector('#talk').click());await W(40);}};
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(900);await drain();await W(600);await drain();
 // child model: knows easy facts, misses some hard ones
 const knows=`(f)=>{if(f.op==='+'&&f.ans<=10)return true;if(f.op==='−'&&f.a<=10)return true;if(f.op==='×'&&(f.a<=5||f.b<=5||f.a===10||f.b===10))return true;if(f.op==='÷'&&[2,5,10].includes(f.b))return true;
   return (f.a*7+f.b*3+(window.__day||0))%4!==0;}`;
 const playRound=async(did,label,shotAt)=>{await pg.evaluate(d=>window.__nk.Dojo.start(d,'round'),did);await W(400);const kinds={};let steps=0,shots=0;
   for(let i=0;i<260;i++){await pg.evaluate(()=>{const c=document.querySelector('#cine');if(c&&!c.hidden){const t=c.querySelector('.cine-tap');if(t)t.click();const col=[...c.querySelectorAll('.btn')].find(b=>b.textContent.startsWith('Collect'));if(col)col.click();const sk=c.querySelector('.skip');if(sk&&!sk.hidden)sk.click();}});
     const st=await pg.evaluate(()=>{const N=window.__nk;if(!N.run||document.querySelector('#scr-level').hidden)return null;if(!document.querySelector('#overlay').hidden)return {ov:1};
       const p=N.run.queue[N.run.idx];if(!p)return {wait:1};const a=N.Pad.active;return {f:p.f,k:p.k,act:!!a&&!a.locked,copy:!!document.querySelector('.dj-copy'),idx:N.run.idx,len:N.run.queue.length};});
     if(!st||st.ov)break;if(st.wait||!st.act){await W(150);continue;}
     if(st.copy){if(shotAt&&shots<2&&label){await shot(label+'-miss');shots=2;}await pg.evaluate(v=>{for(const c of String(v))window.__nk.Pad.key(c);},st.f.ans);await W(600);continue;}
     kinds[st.k]=(kinds[st.k]||0)+1;steps++;
     if(st.k==='teach'&&shotAt&&shots<1&&label){await shot(label+'-teach');shots=1;}
     const ok=await pg.evaluate(`(${knows})(${JSON.stringify(st.f)})`);const v=ok||st.k==='again'||st.k==='teach'?st.f.ans:st.f.ans+1;
     await pg.evaluate(v=>{for(const c of String(v))window.__nk.Pad.key(c);},v);await W(ok?520:300);}
   for(let j=0;j<14;j++){await W(400);const done=await pg.evaluate(()=>{const c=document.querySelector('#cine');if(c&&!c.hidden){const t=c.querySelector('.cine-tap');if(t)t.click();const col=[...c.querySelectorAll('.btn')].find(b=>b.textContent.startsWith('Collect'));if(col)col.click();const sk=c.querySelector('.skip');if(sk&&!sk.hidden)sk.click();return false;}return !!document.querySelector('#overlay .dj-result');});if(done)break;}if(label)await shot(label+'-result');
   const res=await pg.evaluate(()=>document.querySelector('#overlay .dj-result')?document.querySelector('#overlay .dj-result').innerText.replace(/\n+/g,' | '):'none');
   await pg.evaluate(()=>{const b=[...document.querySelectorAll('#overlay button')].find(x=>x.textContent.startsWith('Back'));b&&b.click();});await W(600);await drain();
   await pg.evaluate(()=>{const o=document.querySelector('#overlay .faces button');o&&o.click();});
   return {steps,kinds,res};};
 for(let day=0;day<5;day++){await pg.evaluate(d=>window.__day=d,day);
   if(day===1)await pg.evaluate(()=>{const N=window.__nk,F=N.Dojo.st().facts;for(const k of ['7x8','6x7','12-5'])F[k]={n:1,ok:0,intro:true,days:{},credits:0,owned:false,teach:true,taught:null,rev:0,last:null};});
   const a=await playRound('pm',day===1?'d2pm':day===0?'d1pm':null,true);const c=await playRound('tm',day===1?'d2tm':null,true);
   const s=await pg.evaluate(()=>{const N=window.__nk,d=N.Dojo.st();const o=did=>{const fs=N.Dojo.facts(did);return fs.filter(f=>(d.facts[f.key]||{}).owned).length+'/'+fs.length;};
     return {owned:{pm:o('pm'),tm:o('tm')},cur:{pm:N.Dojo.cur('pm'),tm:N.Dojo.cur('tm')},k:d.k,gate:N.Dojo.gateOk(),today:d.today};});
   console.log('DAY',day+1,'pm',JSON.stringify(a.kinds),a.steps,'|',a.res.slice(0,160));console.log('      tm',JSON.stringify(c.kinds),c.steps,'|',c.res.slice(0,160));console.log('      state',JSON.stringify(s));
   if(day===1){await pg.evaluate(()=>window.__nk.Dojo.open());await W(400);await shot('d2-dojo');}
   day0=new Date(day0.getTime()+864e5);await pg.clock.setFixedTime(day0);await pg.evaluate(()=>{window.__nk.renderMap();window.__nk.show('scr-map');});await W(800);await drain();}
 await pg.evaluate(()=>window.__nk.Dojo.open());await W(400);await shot('d6-dojo');
 // sprint
 await pg.evaluate(()=>window.__nk.Dojo.start('pm','sprint'));await W(500);await shot('sprint');
 console.log('errors',errs);await b.close();})();
