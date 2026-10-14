const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const aud=[];pg.on('request',r=>{if(/audio\//.test(r.url()))aud.push(r.url().split('/').pop());});
 const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.state.howtoSeen=true;N.state.hero.pet='golden';N.state.hero.ride=Object.keys(N.Rides.COL||{})[0]||'none';
   N.Dojo.st().unlockDay=new Date().toISOString().slice(0,10);window.__cerr=[];const _p=N.Cine.play.bind(N.Cine);N.Cine.play=(d,fn,o)=>_p(d,(...a)=>{try{fn(...a);}catch(e){window.__cerr.push(e.message+' '+(e.stack||'').split('\n')[1]);}},o);});
 for(const wid of ['canyon','forge','tower']){await ev(w=>{const N=window.__nk;N.startLevel(N.WORLDS.find(x=>x.id===w),1);},wid);
   for(const ms of [1500,2600,2200,3000,2500]){await W(ms);await pg.screenshot({path:`sp/in-${wid}-${ms}-${Date.now()%10000}.png`});}
   let t=0;while(await ev(()=>!document.querySelector('#cine').hidden)&&t<30){await W(500);t++;}
   console.log(wid,'level started',await ev(()=>!document.querySelector('#scr-level').hidden),'queue',await ev(()=>window.__nk.run.queue.map(p=>p.kind).join(',')),'cine errs',await ev(()=>window.__cerr.slice(0,2)));
   await ev(()=>{const N=window.__nk;N.renderMap();N.show('scr-map');});await W(300);}
 // second visit: level intro only
 const t0=Date.now();await ev(()=>{const N=window.__nk;N.startLevel(N.WORLDS.find(x=>x.id==='canyon'),2);});await W(500);while(await ev(()=>!document.querySelector('#cine').hidden))await W(200);console.log('repeat visit intro secs',(Date.now()-t0)/1000);
 // sizing
 console.log('size by load',await ev(()=>{const E=window.__nk.Explore,L=E.load();const o=[];for(const n of [0,6,12]){L.n=n;L.rev=[];o.push(E.size());}L.n=0;L.rev=[1,0,1];o.push('tired:'+E.size()+' bias '+E.bias());L.rev=[];return o.join(' ');}));
 console.log('audio',[...new Set(aud)].join(' '),'\nerrors',errs);await b.close();})();
