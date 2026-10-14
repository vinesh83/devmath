const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 for(const vp of [{width:1180,height:820},{width:820,height:1180}]){
 const pg=await b.newPage({viewport:vp,hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await pg.evaluate(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.howtoSeen=true;Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});});
 await pg.evaluate(()=>window.__nk.Dojo.start('tm','round'));await W(3500);
 const tag=vp.width+'';
 // force a 3-bug tower, then a spitball
 const r=await pg.evaluate(()=>{const B=window.__nk.Battle,s=B.s;s.antT=99;const L=s.minions.filter(m=>!m.dead);if(L.length<3)return 'few';s.tower={t:0,x:L[0].x,list:L.slice(0,3)};L.slice(0,3).forEach((q,i)=>q.tw=i);L[2].say='BUG TOWER!';L[2].sayT=1.6;return L.length;});
 await W(700);await pg.screenshot({path:`sp/tower-${tag}.png`,clip:{x:0,y:60,width:vp.width,height:260}});console.log(tag,'tower',r,await pg.evaluate(()=>!!window.__nk.Battle.s.tower));
 await W(2400);await pg.evaluate(()=>{const B=window.__nk.Battle,s=B.s;const m=s.minions.find(q=>!q.dead);const P=B.bugXY(m),tx=B.heroX()+B.H*0.25;s.spits.push({x:P.x,y:P.y+3*P.s,vx:-(P.x-tx)/0.9,vy:-B.H*1.17,t:0});m.say='ptoo!';m.sayT=0.9;});
 await W(450);await pg.screenshot({path:`sp/spit-${tag}.png`,clip:{x:0,y:60,width:vp.width,height:260}});await W(600);
 console.log(tag,'shield',await pg.evaluate(()=>window.__nk.Battle.s.shieldT>0));
 // answer all; finish round; read the result line
 for(let i=0;i<40;i++){const done=await pg.evaluate(()=>{const N=window.__nk;if(!N.run||N.run.dj.finished)return true;const p=N.run.queue[N.run.idx];if(!p||!p.f)return false;for(const c of String(p.f.ans))N.Pad.key(c);return false;});if(done)break;await W(800);}
 await W(5000);console.log(tag,'result:',await pg.evaluate(()=>{const x=document.querySelector('.dj-bugs');return x&&x.textContent;}),'best',await pg.evaluate(()=>window.__nk.Dojo.st().bestSquash));
 await pg.screenshot({path:`sp/result-${tag}.png`});
 console.log('errors',errs);await pg.close();}
 await b.close();})();
