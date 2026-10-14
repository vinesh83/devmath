const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820}});const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 await pg.goto('http://localhost:8765/');await pg.waitForTimeout(800);
 const res=await pg.evaluate(()=>{const N=window.__nk,W=792,H=444,out={};
   const line=(x0,y0,x1,y1,n=16)=>Array.from({length:n+1},(_,k)=>({x:x0+(x1-x0)*k/n,y:y0+(y1-y0)*k/n}));
   const ell=(cx,cy,rx,ry,n=30)=>Array.from({length:n+1},(_,k)=>{const a=-Math.PI/2+k/n*2*Math.PI;return {x:cx+Math.cos(a)*rx,y:cy+Math.sin(a)*ry};});
   const four=(x)=>[[...line(x+30,120,x,230),...line(x,230,x+60,230)],line(x+40,150,x+40,300)];
   const cases={
     '10 small, both in box 1 (his photo)':[line(150,250,165,390),ell(235,265,32,40)],
     '10 spread over both boxes':[line(200,120,205,330),ell(560,225,60,100)],
     '7 centered across the boxes':[[...line(330,120,460,120),...line(460,120,380,330)]],
     '40 small in box 1, two-stroke 4':[...four(90),ell(230,220,30,70)],
     '18 small in box 1':[line(120,140,125,300),ell(200,180,28,38),ell(200,262,32,40)],
     'tight 10 (gap 8px)':[line(150,250,152,390),ell(190,320,28,68)],
     '11 tight':[line(150,250,150,390),line(175,250,175,390)],
     '12':[line(150,250,152,390),[...ell(215,280,32,30,15).slice(0,10),...line(240,300,185,390),...line(185,390,250,390)]],
     '4 one-stroke + 2':[[...line(130,250,105,340),...line(105,340,170,340),...line(150,280,150,390)],[...ell(230,280,30,28,15).slice(0,10),...line(255,300,200,390),...line(200,390,265,390)]],
     '5 two-stroke (bar to the right) then 6':[[...line(130,250,125,315),...ell(150,345,32,32,20).slice(5,17)],line(130,250,185,250),[...line(270,250,230,330),...ell(250,355,25,32,24)]],
     'snowman 8 alone':[ell(200,230,40,45),ell(200,330,45,55)],
     '25 in box 2':[[...line(450,150,500,140),...line(510,170,450,280),...line(450,280,520,280)],[...line(620,140,560,140),...line(560,140,555,200),...line(555,200,610,210),...line(615,250,560,285)]]};
   for(const [k,st] of Object.entries(cases)){const r=N.InkBox.readBoxes(st,2,W,H,{});out[k]=r.text;}return out;});
 console.log(res);console.log('errors',errs);await b.close();})();
