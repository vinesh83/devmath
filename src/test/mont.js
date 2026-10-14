const { chromium } = require('/opt/node-tools/node_modules/playwright');const path=require('path');
(async()=>{const [out,...files]=process.argv.slice(2);const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const pg=await b.newPage({viewport:{width:1200,height:100}});
await pg.setContent('<body style="margin:0;display:grid;grid-template-columns:1fr 1fr;gap:4px;background:#000">'+files.map(f=>`<div style="position:relative"><img src="data:image/jpeg;base64,${require("fs").readFileSync(f).toString("base64")}" style="width:100%;display:block"><b style="position:absolute;top:4px;left:6px;color:#fff;font:16px sans-serif;background:#000a">${path.basename(f)}</b></div>`).join('')+'</body>');
await pg.waitForTimeout(500);await pg.screenshot({path:out,fullPage:true});await b.close();})();
