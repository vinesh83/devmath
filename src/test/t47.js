const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1500);
 await ev(()=>{const N=window.__nk;document.querySelector('#talk').hidden=true;N.Talk.open=false;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);window.__cerr=[];
   const _p=N.Cine.play.bind(N.Cine);N.Cine.play=(d,fn,o)=>_p(d,(...a)=>{try{fn(...a);}catch(e){window.__cerr.push(e.message+' @'+(e.stack||'').split('\n')[1]);}},o);});
 for(const k of ['whack','dash','catch']){await ev(()=>{window.__cerr=[];});
   const c0=await ev(()=>window.__nk.state?window.__nk.state.coins:null);
   await ev(k=>{window.__res=null;window.__nk.Arcade.play({kind:k}).then(v=>window.__res=v);},k);await W(3000);console.log('ui',await ev(()=>[document.querySelector('.cine-ui').innerHTML.slice(0,120),document.querySelector('#cine').hidden,window.__res]));
   const box=await pg.locator('.ag-pad').boundingBox();
   // bot: whack taps bugs; dash taps when a bug is close; catch drags toward nearest coin
   const t0=Date.now();let shots=0;
   while(Date.now()-t0<27000&&(await ev(()=>window.__res))==null){
     const act=await ev(k=>{const G=window.__nk.Games.G;if(!G||G.phase!=='play')return null;
       if(k==='whack'){const h=(G.holes||[]).find(h=>h.who&&h.who!=='dog'&&h.life>0&&h.up>0.6);return h?{tap:[h.x,h.y-h.r*0.6]}:null;}
       if(k==='dash'){const dx=G.W*0.28,b=G.obj.find(o=>(o.k==='bug'||o.k==='glitchbug')&&!o.got&&o.x>dx&&o.x-dx<G.W*0.12);return b&&G.d.y===0?{tap:[G.W/2,G.H/2]}:null;}
       if(k==='catch'){const d=G.drops.filter(d=>d.k!=='bomb').sort((a,b)=>b.y-a.y)[0];return d?{drag:[d.x,G.H*0.6]}:null;}},k);
     if(act&&act.tap){await pg.mouse.click(box.x+act.tap[0],box.y+act.tap[1]);}
     if(act&&act.drag){await pg.mouse.move(box.x+act.drag[0],box.y+act.drag[1]);await pg.mouse.down();await W(60);await pg.mouse.up();}
     if(shots<2&&Date.now()-t0>8000*(shots+1)){shots++;await pg.screenshot({path:`sp/g-${k}${shots}.png`});}
     await W(40);}
   for(let i=0;i<60&&(await ev(()=>window.__res))==null;i++)await W(100);
   const G=await ev(()=>{const G=window.__nk.Games.G;return {score:G.score,best:G.best,coins:G.coins,phase:G.phase};});
   console.log(k,'result',await ev(()=>window.__res),JSON.stringify(G),'err',await ev(()=>window.__cerr.slice(0,3)));}
 // rotation
 const seq=await ev(()=>{const A=window.__nk.Arcade,o=[];for(let i=0;i<12;i++)o.push(A.next(false));o.push('|boss:'+A.next(true));return o.join(' ');});console.log('rotation',seq);
 console.log('errors',errs);await b.close();})();
