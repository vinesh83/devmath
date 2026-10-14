const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820},hasTouch:true});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 await pg.goto('http://localhost:8765/');await pg.waitForTimeout(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await pg.waitForTimeout(1200);
 await pg.evaluate(()=>{const N=window.__nk;N.state.hero.pet='ellie';N.state.bossTip=1;window.__said=new Set();window.__cerr=[];
   const _p=N.Cine.play.bind(N.Cine);N.Cine.play=(d,fn,o)=>_p(d,(...a)=>{try{fn(...a);}catch(e){window.__cerr.push(e.message);}},o);
   N.Brawl.play({power:20});setInterval(()=>{const G=N.Brawl.G;if(G)G.txt.forEach(x=>window.__said.add(x.s));},50);});
 let shot=0;for(let i=0;i<45;i++){await pg.waitForTimeout(1000);if(i===14){await pg.screenshot({path:'sp/b-dog.png'});}}
 console.log(await pg.evaluate(()=>[...window.__said].filter(s=>/CHOMP|FETCH|PROTECT|BITE|ELLIE|WOOF/i.test(s))),await pg.evaluate(()=>window.__cerr.slice(0,3)),errs);await b.close();})();
