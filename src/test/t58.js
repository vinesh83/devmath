const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);
 await ev(()=>{const N=window.__nk;N.state.hero.pet='golden';document.querySelector('#talk').hidden=true;window.__cerr=[];const _p=N.Cine.play.bind(N.Cine);N.Cine.play=(d,fn,o)=>_p(d,(...a)=>{try{fn(...a);}catch(e){window.__cerr.push(e.message);}},o);});
 for(const mode of ['kid','none']){
 await ev(()=>{window.__res=null;window.__nk.Arcade.play({kind:'dash'}).then(v=>window.__res=v);});await W(2800);
 const box=await pg.locator('.ag-pad').boundingBox();let shots=0,taps=0;const t0=Date.now();
 while((await ev(()=>window.__res))==null&&Date.now()-t0<40000){
   if(mode==='kid'){const s=await ev(()=>{const G=window.__nk.Games.G;if(!G||G.phase!=='play')return null;const dx=G.W*0.28;const bug=G.obj.find(b=>(b.k==='bug'||b.k==='glitchbug')&&!b.got&&!b.passed&&b.x-dx>0&&b.x-dx<G.W*0.24);return {bug:!!bug,ground:G.d.y===0};});
     if(s&&s.bug&&s.ground){await W(150+Math.random()*350);if(Math.random()<0.8){await pg.mouse.click(box.x+500,box.y+400);taps++;}await W(500);}}
   if(shots<2&&Date.now()-t0>7000*(shots+1)){await pg.screenshot({path:`sp/dash-${mode}${shots}.png`});shots++;}
   await W(40);}
 const G=await ev(()=>{const G=window.__nk.Games.G;return {score:G.score,best:G.best,coins:G.coins};});console.log(mode,'taps',taps,JSON.stringify(G),'err',await ev(()=>window.__cerr.slice(0,2)));
 await W(3500);}
 console.log('errors',errs);await b.close();})();
