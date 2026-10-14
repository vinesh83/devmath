const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);
 const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(700);
 await ev(()=>{const N=window.__nk;Object.keys(N.NPCS).forEach(k=>N.Talk.st().met[k]=1);document.querySelector('#talk').hidden=true;N.Talk.open=false;N.Talk.chain=Promise.resolve();N.Dojo.st().strictAnnounced='x';N.Brawl.off=true;N.state.cineEvery=0;N.state.howtoSeen=true;Object.assign(N.state,{bugTip:1,bugTipArmor:1,bugTipKing:1,dogPicked:1,ellieMet:1});setInterval(()=>{N.Pause.last=Date.now();},500);});
 const pet=k=>ev(k=>{window.__nk.state.hero.pet=k;},k);
 const pops=()=>ev(()=>[...document.querySelectorAll('.dog-pop b')].map(x=>x.textContent));
 // shop
 await pet('poodle');await ev(()=>{const N=window.__nk;N.renderShop();N.show('scr-shop');});await W(400);
 await ev(()=>{[...document.querySelectorAll('.tab')].find(x=>x.textContent==='Pets')?.click();});await W(300);
 console.log('shop golden card:',await ev(()=>{const it=[...document.querySelectorAll('.item')].find(x=>/Golden/.test(x.textContent));return it&&it.textContent;}));
 await pg.screenshot({path:'sp/shop-powers.png'});await ev(()=>{const N=window.__nk;N.renderMap();N.show('scr-map');});await W(300);
 console.log('husky power',await ev(()=>{const N=window.__nk;const a=N.mechPower();N.state.hero.pet='husky';return [a,N.mechPower()];}));
 // dojo with lab
 await pet('lab');await ev(()=>window.__nk.Dojo.start('tm','round'));await W(2500);
 const ans=r=>ev(r=>{const N=window.__nk;const p=N.run.queue[N.run.idx];for(const c of String(r?p.f.ans:p.f.ans+1))N.Pad.key(c);},r);
 const skip=async()=>{await ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Show me/.test(x.textContent));if(b)b.click();});await W(200);await ev(()=>{const b=[...document.querySelectorAll('#actions button')].find(x=>/Skip/.test(x.textContent));if(b)b.click();});};
 await ans(true);await W(900);await ans(true);await W(900);
 console.log('combo before miss',await ev(()=>window.__nk.Battle.s.combo));
 await ans(false);await W(500);console.log('lab miss: combo',await ev(()=>window.__nk.Battle.s.combo),'pops',await pops());await skip();await W(800);
 // pug: next right after a miss gives +2
 await pet('pug');let c0=await ev(()=>window.__nk.state.coins);await ans(false);await W(500);await skip();await W(800);await ans(true);await W(300);
 console.log('pug pops',await pops());
 // golden squash
 await pet('golden');await ans(true);await W(1200);console.log('golden pops',await pops());
 // collie hint
 await pet('collie');await ev(()=>{const B=[...document.querySelectorAll('#actions button')];});await ans(true);await W(2400);
 console.log('collie hint btn',await ev(()=>!![...document.querySelectorAll('#actions button')].find(x=>/Big Brain/.test(x.textContent))));
 await ev(()=>[...document.querySelectorAll('#actions button')].find(x=>/Big Brain/.test(x.textContent))?.click());await W(300);
 console.log('hint shown',await ev(()=>!!document.querySelector('.dj-teach')),'btn gone',await ev(()=>![...document.querySelectorAll('#actions button')].find(x=>/Big Brain/.test(x.textContent))));
 await pg.screenshot({path:'sp/collie-hint.png'});
 const qlen0=await ev(()=>window.__nk.run.queue.length);await ans(true);await W(2000);console.log('hinted fact re-asked',await ev(q=>window.__nk.run.queue.length>q,qlen0));
 // ink check in the dojo: wrong ink -> modal -> No -> rewrite right
 await pet('ellie');
 await ev(()=>{const N=window.__nk;const p=N.run.queue[N.run.idx];const v=String(p.f.ans+1);N.InkBox.lastR={text:v,minP:0.4,items:v.split('').map(ch=>({ch,p:0.4,box:{x0:0,x1:60,y0:0,y1:100}})),imgs:[]};N.InkBox.lastUp=0;N.Pad.input(N.Pad.active,v,'ink',0.4,Date.now());});await W(1200);
 console.log('ink modal',await ev(()=>{const m=document.querySelector('.ink-check');return m&&m.textContent;}));await pg.screenshot({path:'sp/ink-check.png'});
 await ev(()=>[...document.querySelectorAll('.ink-check button')].find(x=>/rewrite/.test(x.textContent)).click());await W(300);
 console.log('field cleared',await ev(()=>window.__nk.Pad.active&&window.__nk.Pad.active.val));
 await ev(()=>{const N=window.__nk;const p=N.run.queue[N.run.idx];N.Pad.input(N.Pad.active,String(p.f.ans),'ink',0.95,Date.now());});await W(1500);
 console.log('inkStats',await ev(()=>JSON.stringify(window.__nk.state.inkStats)));
 // second time say yes -> counts as a miss
 await W(1600);console.log('dbg',await ev(()=>{const N=window.__nk,p=N.run.queue[N.run.idx];return [N.run.idx,p.k,p.f.ans,N.Pad.active&&N.Pad.active.locked,!document.querySelector('#overlay').hidden,document.querySelector('#card').textContent.slice(0,80)];}));
 await ev(()=>{const N=window.__nk;const p=N.run.queue[N.run.idx];const v=String(p.f.ans+1);N.InkBox.lastR={text:v,minP:0.4,items:v.split('').map(ch=>({ch,p:0.4,box:{x0:0,x1:60,y0:0,y1:100}})),imgs:[]};N.InkBox.lastUp=0;N.Pad.input(N.Pad.active,v,'ink',0.4,Date.now());});await W(1200);
 await ev(()=>[...document.querySelectorAll('.ink-check button')].find(x=>/Yes/.test(x.textContent)).click());await W(500);
 console.log('after yes: picture hint shown',await ev(()=>!!document.querySelector('.bk-hint')));await skip();await W(800);
 // finish the round with Ellie
 for(let i=0;i<40;i++){const done=await ev(()=>{const N=window.__nk;if(N.run.dj.finished)return true;const p=N.run.queue[N.run.idx];if(!p||!p.f)return false;for(const c of String(p.f.ans))N.Pad.key(c);return false;});if(done)break;await W(800);}
 await W(5000);console.log('result coins line',await ev(()=>[...document.querySelectorAll('.dj-result .tiny-ok')].map(x=>x.textContent).join('|')));
 await ev(()=>{const N=window.__nk;window.__ov=document.querySelector('#overlay');});
 // brawl powers
 for(const k of ['chihuahua','shepherd']){await ev(()=>{const o=document.querySelector('#overlay');o.hidden=true;});await pet(k);
   await ev(()=>{const N=window.__nk;N.Brawl.off=false;window.__bp=N.Brawl.play();});await W(k==='shepherd'?5200:2200);console.log(k,'pops',await pops());
   await ev(()=>{document.querySelector('#cine .cine-skip,#cine [class*=skip]')?.click();});await W(800);await ev(()=>{const c=document.querySelector('#cine');});}
 // robodog
 await pet('robodog');console.log('robodog pips',await ev(()=>{const N=window.__nk;N.Battle.setup({total:5,mech:false,color:'#3fdc6b'});return N.Battle.s.pips;}));
 // beagle sniff
 await pet('beagle');console.log('beagle',await ev(()=>{window.__nk.DogPower.sniff({base:{kind:'arith',answer:123,dp:0},glitch:133});return document.querySelector('#say')?.textContent||[...document.querySelectorAll('.dog-pop span')].map(x=>x.textContent).join('|');}));
 console.log('errors',errs);await b.close();})();
