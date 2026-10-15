// node shot.js <spec.json> <shotId|all> <frame|clip> [WxH]
const { chromium } = require('/opt/node-tools/node_modules/playwright');const fs=require('fs'),path=require('path');
(async()=>{const [specPath,which,mode,size]=process.argv.slice(2);const [W,H]=(size||'1920x1080').split('x').map(Number);
 const spec=JSON.parse(fs.readFileSync(specPath,'utf8'));const shots=spec.shots.filter(s=>which==='all'||s.id===which||which.split(',').includes(s.id));
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const pg=await b.newPage({viewport:{width:W,height:H},deviceScaleFactor:1});await pg.goto('http://localhost:'+(process.env.PORT||8765)+'/');await pg.waitForTimeout(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await pg.waitForTimeout(900);
 const hero=JSON.parse(fs.readFileSync(path.join(path.dirname(specPath),'dev-hero.json'),'utf8'));
 await pg.evaluate(async(hero)=>{const N=window.__nk;N.Updater.check=()=>{};N.Updater.apply=()=>{};Object.assign(N.state.hero,hero);document.querySelector('#talk').hidden=true;await N.Cin3.load();},hero);
 const out=path.join(path.dirname(specPath),'frames');
 for(const sh of shots){const t0=Date.now();
   const D=await pg.evaluate(async(sh)=>{const N=window.__nk;Cine3D.play('shot',{manual:true,noBars:true,sprites:N.Cin3.sprites(),shot:sh});await new Promise(r=>setTimeout(r,300));return sh.D||8;},sh);
   if(mode==='frame'){await pg.evaluate(()=>{Cine3D._step(0.001,0.016);Cine3D._step(0.034,0.033);});const d=await pg.evaluate(()=>{Cine3D._step(0.05,0.016);const c=document.querySelector('#cine3d canvas');return c.toDataURL('image/png').split(',')[1];});
     fs.writeFileSync(path.join(out,sh.id+'.png'),Buffer.from(d,'base64'));}
   else{const dir=path.join(out,sh.id);const FPS=30,n=Math.round(D*FPS);if(fs.existsSync(dir)&&fs.readdirSync(dir).length===n){console.log(sh.id,'already rendered');await pg.evaluate(()=>{try{Cine3D._end();}catch(e){}});continue;}fs.rmSync(dir,{recursive:true,force:true});fs.mkdirSync(dir,{recursive:true});
     for(let i=0;i<n;i++){const d=await pg.evaluate(([t,dt])=>{Cine3D._step(t,dt);return Cine3D._frame(0.9);},[(i+1)/FPS,1/FPS]);fs.writeFileSync(`${dir}/f${String(i).padStart(5,'0')}.jpg`,Buffer.from(d,'base64'));}}
   await pg.evaluate(()=>{try{Cine3D._end();}catch(e){}});console.log(sh.id,mode,((Date.now()-t0)/1000).toFixed(1)+'s');}
 await b.close();})();
