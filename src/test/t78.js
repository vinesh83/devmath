// One-time surprise from home: message, two golden chests, prizes granted; only for Dev; plays once
const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 for(const name of ['Dev','Noah']){
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name',name);await pg.click('text=Start the adventure');await W(900);
 await ev(()=>{const N=window.__nk;N.Updater.check=()=>{};Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);N.Dojo.st().unlockDay=new Date().toISOString().slice(0,10);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();});
 const said=[];await pg.exposeFunction('__said',t=>said.push(t));
 await ev(()=>{setInterval(()=>{const t=document.querySelector('#talk');if(t&&!t.hidden){const tx=t.textContent;if(window.__last!==tx){window.__last=tx;window.__said(tx.slice(0,140));}t.click();}
   const tap=document.querySelector('.cine-tap');if(tap)tap.click();const go=[...document.querySelectorAll('#cine button')].find(x=>/Awesome|Continue|Nice|OK|Got|Collect|Keep/i.test(x.textContent));if(go)go.click();},700);});
 await ev(()=>{const N=window.__nk;document.querySelectorAll('.screen').forEach(s=>s.hidden=true);document.querySelector('#scr-map').hidden=false;N.Talk.onMap();});
 await W(16000);
 const r=await ev(()=>{const N=window.__nk,I=N.state.inv||{};return {surprises:N.state.surprises||null,dragon:(I.supers||[]).includes('dragon'),gold:(I.parts||[]).includes('paint:gold')};});
 console.log(name,JSON.stringify(r));console.log('  said:',said.slice(0,7).join(' | '));
 if(name==='Dev'){await ev(()=>{window.__nk.Talk.onMap();});await W(2500);console.log('  plays again?',await ev(()=>!!document.querySelector('.cine-tap')),'due',await ev(()=>window.__nk.state.surprises&&Object.keys(window.__nk.state.surprises).length));}
 console.log('  errors',errs);await pg.close();}
 await b.close();})();
