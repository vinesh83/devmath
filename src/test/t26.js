const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const vp=JSON.parse(process.argv[2]||'{"width":1180,"height":820}'),tag=vp.width;
 const pg=await b.newPage({viewport:vp,hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await ev(()=>{const N=window.__nk;N.state.arcade={bag:["battle","battle","battle"],last:null};N.Arcade.pickOff=true;N.state.no3d=true;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.state.howtoSeen=true;Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1,cineEvery:0});setInterval(()=>{N.Pause.last=Date.now();},500);});
 await ev(()=>window.__nk.Dojo.start('tm','round'));await W(1200);await pg.screenshot({path:`sp/calm-intro-${tag}.png`});
 await W(2200);console.log('calm',await ev(()=>document.querySelector('#scr-level').classList.contains('calm')),'chip',await ev(()=>!document.querySelector('#lv-power').hidden));
 for(let i=0;i<5;i++){await ev(()=>{const N=window.__nk;const p=N.run.queue[N.run.idx];for(const c of String(p.f.ans))N.Pad.key(c);});await W(900);}
 await pg.screenshot({path:`sp/calm-work-${tag}.png`});console.log('power',await ev(()=>window.__nk.Battle.s.power),'minions',await ev(()=>window.__nk.Battle.s.minions.length));
 for(let i=0;i<120;i++){const done=await ev(()=>{const N=window.__nk;if(N.run.dj.finished)return true;const p=N.run.queue[N.run.idx];if(!p||!p.f)return false;for(const c of String(p.f.ans))N.Pad.key(c);return false;});if(done)break;await W(800);}
 await W(1200);await pg.screenshot({path:`sp/calm-end-${tag}.png`});
 await W(2600);console.log('cine',await ev(()=>!document.querySelector('#cine').hidden));await pg.screenshot({path:`sp/boss-intro-${tag}.png`});
 await W(4500);
 // play: run right, attack, jump on cue, block punches
 const t0=Date.now();let shots=0;
 while(Date.now()-t0<80000){const st=await ev(()=>{const G=window.__nk.Brawl.G;if(!G)return null;return {ph:G.phase,hp:G.hp,hearts:G.hearts,cue:G.cue&&G.cue[0],dist:G.foe.x-G.hero.x,sup:G.sup,fst:G.foe.st,atk:G.foe.atk};});
   if(!st||st.ph==='win'||st.ph==='lose'||st.ph==='time'){console.log('end',st);break;}
   if(st.sup>=1)await pg.keyboard.press('l');
   if(st.cue==='JUMP!'&&st.fst==='wind'){await W(250);await pg.keyboard.press('ArrowUp');}
   else if(st.cue==='BLOCK!'){await W(450);await pg.keyboard.press('k');}
   else if(st.cue==='MOVE!'){await pg.keyboard.down('ArrowLeft');await W(350);await pg.keyboard.up('ArrowLeft');}
   else{if(st.dist>250){await pg.keyboard.down('ArrowRight');await W(150);await pg.keyboard.up('ArrowRight');}await pg.keyboard.press('j');}
   if(shots<3&&Date.now()-t0>8000*(shots+1)){await pg.screenshot({path:`sp/boss-fight${shots}-${tag}.png`});shots++;}
   await W(60);}
 await W(3500);console.log('after: overlay result',await ev(()=>[...document.querySelectorAll('.dj-result p')].map(x=>x.textContent).join(' | ')));
 console.log('bossStats',await ev(()=>JSON.stringify(window.__nk.state.bossStats)));
 await pg.screenshot({path:`sp/boss-result-${tag}.png`});console.log('errors',errs);await b.close();})();
