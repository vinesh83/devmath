const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 for(const [w,h] of [[1180,820],[820,1180]]){
 const pg=await b.newPage({viewport:{width:w,height:h},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message+' '+(e.stack||'').split('\n')[1]));
 const W=ms=>pg.waitForTimeout(ms);const shot=n=>pg.screenshot({path:`br/${w}-${n}.png`});
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await pg.evaluate(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().unlockDay=N.Dojo.st().today.day;N.state.howtoSeen=true;N.Dojo.st().strictAnnounced='x';});
 // standalone brawl, auto-play: mash attack, block on windup
 await pg.evaluate(()=>{window.__res=null;window.__nk.Brawl.play().then(c=>window.__res=c);});await W(700);await shot('intro');await W(900);
 const press=async cls=>pg.evaluate(c=>{const bt=document.querySelector('.brawl-btn.'+c);bt&&bt.click();},cls);
 let shots=0;for(let i=0;i<120;i++){const wind=await pg.evaluate(()=>{const t=document.querySelector('#cine');return !t.hidden;});if(!wind)break;
   await press(i%5===4?'blk':'atk');await W(110);if(i===8&&shots===0){await shot('fight');shots=1;}}
 await W(400);await shot('end');await W(2500);console.log(w,'brawl coins',await pg.evaluate(()=>window.__res),'cine hidden',await pg.evaluate(()=>document.querySelector('#cine').hidden));
 // mid-level brawl
 await pg.evaluate(()=>{const N=window.__nk;N.startRun({title:'T',mode:'level',world:'canyon',level:0,color:'#e8643a',problems:[N.GEN.add(1),N.GEN.add(1)]});});await W(400);
 const ans=await pg.evaluate(()=>window.__nk.run.queue[0].answer);await pg.evaluate(v=>{for(const c of String(v))window.__nk.Pad.key(c);},ans);
 await pg.evaluate(()=>[...document.querySelectorAll('#actions .btn')].find(x=>x.textContent.startsWith('Submit')).click());await W(300);
 await pg.evaluate(()=>{const o=[...document.querySelectorAll('#overlay button')].find(b=>b.textContent==='Pretty sure');o&&o.click();});await W(1200);
 await pg.evaluate(()=>[...document.querySelectorAll('#actions .btn')].find(x=>x.textContent.startsWith('Next')).click());await W(900);
 console.log(w,'mid-level brawl showing',await pg.evaluate(()=>!document.querySelector('#cine').hidden));await pg.evaluate(()=>document.querySelector('#cine .skip').click());await W(500);
 console.log(w,'after skip, problem 2 shown',await pg.evaluate(()=>window.__nk.run.idx===1&&!!document.querySelector('#card .field')));
 console.log('errors',errs);await pg.close();}
 await b.close();})();
