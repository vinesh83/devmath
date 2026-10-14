const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820}});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 await pg.goto('http://localhost:8765/');await pg.waitForTimeout(800);
 const res=await pg.evaluate(()=>{const N=window.__nk,W=792,H=444,out={};
   const line=(x0,y0,x1,y1,n=16)=>Array.from({length:n+1},(_,k)=>({x:x0+(x1-x0)*k/n,y:y0+(y1-y0)*k/n}));
   const ell=(cx,cy,rx,ry,n=30)=>Array.from({length:n+1},(_,k)=>{const a=-Math.PI/2+k/n*2*Math.PI;return {x:cx+Math.cos(a)*rx,y:cy+Math.sin(a)*ry};});
   const cases={
     '90 squeezed':[[...ell(200,220,35,40),...line(235,220,230,380)],ell(250,300,30,80)],
     '35 squeezed':[[...line(160,200,210,195),...ell(195,240,22,22,20).slice(14,30),...ell(190,320,30,38,24).slice(0,14)],[...line(260,195,215,195),...line(215,195,212,270),...ell(235,320,28,40,24).slice(20,24),...ell(235,320,28,40,24).slice(0,14)]],
     '90 spaced':[[...ell(200,220,35,40),...line(235,220,230,380)],ell(330,300,30,80)]};
   for(const [k,st] of Object.entries(cases)){const r=N.InkBox.readBoxes(st,2,W,H,{});N.InkBox.lastR=r;const ans=+k.slice(0,2);out[k]={read:r.text,accepted:r.text===String(ans)||N.InkBox.doubt(ans),split:(()=>{try{return N.HW.recognize(st.flat?st:st,{maxLen:3}).text}catch(e){return 'x'}})()};}return out;});
 console.log(JSON.stringify(res,null,1));console.log('errors',errs);await b.close();})();
