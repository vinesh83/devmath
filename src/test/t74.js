// Grown-up screens use the child's own name
const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});const pg=await b.newPage({viewport:{width:1180,height:820}});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 await pg.goto('http://localhost:8765/');await pg.waitForTimeout(400);await pg.fill('#ob-name','Noah');await pg.click('text=Start the adventure');await pg.waitForTimeout(1200);
 const html=await pg.evaluate(()=>document.documentElement.outerHTML);
 const src=await pg.evaluate(()=>[...document.scripts].map(s=>s.textContent).join('\n'));
 console.log('name:',await pg.evaluate(()=>window.__nk.state.hero.name));
 console.log('lab title:',await pg.evaluate(()=>{const N=window.__nk;try{const p=N.Lab.panel?N.Lab.panel():null;return p?p.querySelector('h3').textContent:'(panel fn not exported)';}catch(e){return 'err '+e.message;}}));
 console.log('visible Dev on map:',/\bDev\b/.test(await pg.evaluate(()=>document.body.innerText)));
 console.log('errors',errs);await b.close();})();
