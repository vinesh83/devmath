const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs=require('fs');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});const pg=await b.newPage({viewport:{width:1180,height:820}});
 const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 await pg.goto('file://'+process.cwd()+'/../number-knight.html');await pg.waitForTimeout(300);
 const pack=JSON.parse(fs.readFileSync('../pack1.json','utf8'));
 const r=await pg.evaluate(pk=>pk.items.map(it=>{const p=window.__nk.packProblem(it);return p?{k:p.kind,ans:p.answer,steps:p.steps&&p.steps.map(s=>s.res),wp:p.wrongPlans&&p.wrongPlans.map(w=>w.kind+'='+w.res)}:null;}),pack);
 console.log(JSON.stringify(r));console.log(errs);await b.close();})();
