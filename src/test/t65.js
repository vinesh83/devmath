const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const pg=await b.newPage({viewport:{width:1024,height:700},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1200);
 await ev(()=>window.__nk.Cin3.load());
 const kind=process.argv[2]||'battle';
 await ev(k=>{const N=window.__nk;N.state.hero.pet='golden';N.state.bossTip=1;document.querySelector('#talk').hidden=true;window.__cerr=[];const _p=N.Cine.play.bind(N.Cine);N.Cine.play=(d,fn,o)=>_p(d,(...a)=>{try{fn(...a);}catch(e){window.__cerr.push(e.message+' '+(e.stack||'').split('\n')[1]);}},o);
   window.__res=null;(k==='mech'?N.Brawl.play({power:20,mech:true}):k==='battle'?N.Brawl.play({power:20}):N.Arcade.play({kind:k})).then(v=>window.__res=v);},kind);
 let shots=0;const t0=Date.now();
 while((await ev(()=>window.__res))==null&&Date.now()-t0<70000){
   await ev(()=>{const G=window.__nk.Brawl.G;if(!G||G.phase!=='fight')return;const dx=G.foe.x-G.hero.x;G.keys.r=dx>G.foe.x*0.35?1:0;
     const tap=c=>{const b=document.querySelector('.bb-btn.'+c);if(b){b.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}));b.dispatchEvent(new PointerEvent('pointerup',{bubbles:true}));}};
     if(Math.random()<0.3){if(G.cue&&G.cue[0]==='JUMP!')tap('jmp');else if(G.cue&&G.cue[0]==='BLOCK!')tap('blk');tap('atk');tap('can');}});
   if(shots<4&&Date.now()-t0>7000*(shots+1)){await pg.screenshot({path:`sp/b3-${kind}-${shots}.png`});shots++;}
   await W(250);}
 console.log(kind,'3D active',await ev(()=>{const G=window.__nk.Brawl.G;return !!(G&&(G.L3||G.S3));}),'res',await ev(()=>window.__res),'cine errs',await ev(()=>window.__cerr.slice(0,3)),'errors',errs);await b.close();})();
