const { chromium } = require('/opt/node-tools/node_modules/playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820}});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 const backup=fs.readFileSync('/home/user/devmath-data/backups/2026-10-04-before-reinstall.json','utf8');
 const store={'/repos/vinesh83/devmath-data/contents/latest/report.json':{sha:'s0',content:backup}};const puts=[];
 await pg.route('https://api.github.com/**',async route=>{const r=route.request(),path=new URL(r.url()).pathname,H={'access-control-allow-origin':'*'};
   if(r.headers()['authorization']!=='Bearer github_pat_TEST')return route.fulfill({status:401,body:'{}',headers:H});
   if(r.method()==='GET'){const f=store[path];if(!f)return route.fulfill({status:404,body:'{}',headers:H});
     const raw=(r.headers()['accept']||'').includes('raw');return route.fulfill({status:200,contentType:'application/json',body:raw?f.content:JSON.stringify({sha:f.sha}),headers:H});}
   if(r.method()==='PUT'){const j=JSON.parse(r.postData());puts.push(path);store[path]={sha:'s'+Math.random(),content:Buffer.from(j.content,'base64').toString('utf8')};return route.fulfill({status:201,body:'{}',headers:H});}
   route.fulfill({status:200,body:'{}',headers:H});});
 // a fresh install: new hero, a few problems
 await pg.goto('http://localhost:8765/');await W(500);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1500);
 await ev(()=>{const N=window.__nk;document.querySelector('#talk').hidden=true;N.Talk.open=false;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);});
 console.log('fresh facts',await ev(()=>Object.keys(window.__nk.state.dojo&&window.__nk.state.dojo.facts||{}).length),'coins',await ev(()=>window.__nk.state.coins));
 // grown-up pastes the token
 await ev(async()=>{const S=window.__nk.Sync;S.connect('github_pat_TEST','vinesh83/devmath-data');S.lastTry=0;await S.push();});await W(500);
 console.log('puts (should be 0):',puts.length,'needRestore',await ev(()=>!!window.__nk.Sync.needRestore),'err',await ev(()=>window.__nk.Sync.err));
 await ev(()=>window.__nk.showReport&&window.__nk.showReport());await W(300);
 const box=await ev(()=>{const x=document.querySelector('.restorebox');return x&&x.textContent;});console.log('restore box:',box);
 if(!box){await ev(()=>{[...document.querySelectorAll('button')].find(x=>/Report/.test(x.textContent))?.click();});await W(400);console.log('restore box 2:',await ev(()=>{const x=document.querySelector('.restorebox');return x&&x.textContent;}));}
 await ev(()=>document.querySelector('.restorebox').scrollIntoView());await pg.screenshot({path:'sp/restore-box.png'});
 await ev(()=>[...document.querySelectorAll('.restorebox button')].find(x=>/Restore/.test(x.textContent)).click());await W(300);
 // create a PIN (twice)
 for(let i=0;i<2;i++){await pg.fill('.pin-in','1234');await ev(()=>[...document.querySelectorAll('.pin-modal button')].find(x=>x.textContent==='OK').click());await W(300);}
 await W(2500);
 console.log('after restore: facts',await ev(()=>Object.keys(window.__nk.state.dojo.facts||{}).length),'coins',await ev(()=>window.__nk.state.coins),'hero',await ev(()=>window.__nk.state.hero.name),
   'screen today',await ev(()=>JSON.stringify(window.__nk.state.st&&window.__nk.state.st.days)),'log',await ev(()=>JSON.parse(localStorage.getItem('nk-log')||'[]').length),'pin kept',await ev(()=>window.__nk.state.parentPin));
 await ev(async()=>{const S=window.__nk.Sync;S.lastTry=0;await S.push();});await W(500);
 const rep=JSON.parse(store['/repos/vinesh83/devmath-data/contents/latest/report.json'].content);
 console.log('puts now',puts.length,'report facts',Object.keys(rep.dojo.facts).length,'has backup',!!rep.backup,'backup has pin',!!(rep.backup&&rep.backup.parentPin),'size KB',Math.round(JSON.stringify(rep).length/1024));
 const day=Object.keys(store).find(k=>k.includes('/days/'));console.log('day file attempts',day&&JSON.parse(store[day].content).attempts.length);
 console.log('errors',errs);await b.close();})();
