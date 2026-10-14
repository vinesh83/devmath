const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);
 await ev(()=>{const N=window.__nk;N.state.hero.pet='golden';N.state.bossTip=1;document.querySelector('#talk').hidden=true;window.__cerr=[];const _p=N.Cine.play.bind(N.Cine);N.Cine.play=(d,fn,o)=>_p(d,(...a)=>{try{fn(...a);}catch(e){window.__cerr.push(e.message+' '+(e.stack||'').split('\n')[1]);}},o);
   window.__res=null;N.Arcade.play({kind:'mech',power:20}).then(v=>window.__res=v);});
 await W(1500);await pg.screenshot({path:'sp/mech-intro.png'});await W(2000);
 console.log('buttons',await ev(()=>[...document.querySelectorAll('.bb-btn')].map(b=>b.textContent).join(' | ')),'hearts',await ev(()=>window.__nk.Brawl.G.maxHearts));
 let shots=0,fired=0;const t0=Date.now();
 while((await ev(()=>window.__res))==null&&Date.now()-t0<110000){
   await ev(()=>{const G=window.__nk.Brawl.G;if(!G||G.phase!=='fight')return;const dx=G.foe.x-G.hero.x;G.keys.r=dx>G.foe.x*0.35?1:0;
     const tap=c=>{const b=document.querySelector('.bb-btn.'+c);if(b){b.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}));b.dispatchEvent(new PointerEvent('pointerup',{bubbles:true}));}};
     if(G.cue&&G.cue[0]==='JUMP!')tap('jmp');else if(G.cue&&G.cue[0]==='BLOCK!')tap('blk');tap('can');tap('atk');if(G.sup>=1)tap('sup');});
   if(shots<3&&Date.now()-t0>3000*(shots+1)){await pg.screenshot({path:`sp/mech-${shots}.png`});shots++;}
   await W(220);}
 console.log('result coins',await ev(()=>window.__res),'stats',await ev(()=>JSON.stringify(window.__nk.state.bossStats)),'dmg',await ev(()=>window.__nk.Brawl.G.dmg),'cine errs',await ev(()=>window.__cerr.slice(0,3)),'errors',errs);
 await b.close();})();
