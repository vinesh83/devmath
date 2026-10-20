// Glitch's laser: JUMP or BLOCK beats it; standing still gets zapped
const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(900);
 await ev(()=>{const N=window.__nk;N.Updater.check=()=>{};Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.state.no3d=true;N.state.bossTip=1;N.Brawl.off=false;window.__bp=N.Brawl.play({power:40});});
 await ev(()=>new Promise(r=>{const t=setInterval(()=>{const G=window.__nk.Brawl.G;if(G&&G.phase==='fight'){clearInterval(t);r();}},100);}));
 const trial=async(action)=>ev((action)=>new Promise(res=>{const N=window.__nk,G=N.Brawl.G,f=G.foe,h=G.hero;
   G.hearts=Math.max(G.hearts,4);h.inv=0;G.hp=Math.max(G.hp,20);f.stun=0;f.angry=false;f.st='wind';f.atk='laser';f.t=0;f.dur=1.0;f.dodged=0;G.cue=['JUMP or BLOCK!','#ffe066'];
   const h0=G.hearts;let pressed=false,seenAct=false;
   const key=k=>document.dispatchEvent(new KeyboardEvent('keydown',{key:k,bubbles:true}));
   const t=setInterval(()=>{if(!pressed&&f.st==='wind'&&f.t>=0.8){pressed=true;if(action==='jump')key(' ');if(action==='block')key('k');}
     if(f.atk==='laser'&&f.st==='act')seenAct=true;
     if(seenAct&&f.st!=='act'){clearInterval(t);res({action,heartsLost:h0-G.hearts,dodged:!!f.dodged});}},16);}),action);
 for(const a of ['none','jump','block','jump','block'])console.log(JSON.stringify(await trial(a)));
 console.log('errors',errs);await b.close();})();
