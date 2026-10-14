const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const pg=await b.newPage({viewport:{width:1024,height:700},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);await ev(()=>window.__nk.Cin3.load());
 for(const k of ['whack','dash','catch']){
 await ev(k=>{const N=window.__nk;N.state.hero.pet='golden';document.querySelector('#talk').hidden=true;window.__cerr=[];const _p=N.Cine.play.bind(N.Cine);N.Cine.play=(d,fn,o)=>_p(d,(...a)=>{try{fn(...a);}catch(e){window.__cerr.push(e.message+' '+(e.stack||'').split('\n')[1]);}},o);
   window.__res=null;N.Arcade.play({kind:k}).then(v=>window.__res=v);},k);
 for(let i=0;i<60;i++){await W(500);if(await ev(()=>window.__nk.Games.G&&window.__nk.Games.G.phase==='play'&&window.__nk.Games.G.t>4))break;}
 await pg.screenshot({path:`sp/g3-${k}.png`});
 console.log(k,'3D',await ev(()=>!!window.__nk.Games.G.L3),'cine errs',await ev(()=>window.__cerr.slice(0,2)));
 await ev(()=>{const s=document.querySelector('#cine .skip');s&&s.click();});await W(1500);}
 console.log('errors',errs);await b.close();})();
