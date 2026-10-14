const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1180,height:820}});const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=ms=>pg.waitForTimeout(ms);const ev=(f,a)=>pg.evaluate(f,a);
 await pg.goto('http://localhost:8765/');await W(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await W(1500);
 await ev(()=>{const N=window.__nk;document.querySelector('#talk').hidden=true;N.Talk.open=false;document.querySelectorAll('#overlay').forEach(o=>o.hidden=true);N.state.coins=9000;});
 // a sheet: every ride, and every dog wearing a hat + glasses + neck item
 await ev(()=>{const N=window.__nk,cv=document.createElement('canvas');cv.width=1180;cv.height=820;cv.style.cssText='position:fixed;left:0;top:0;z-index:9999;background:#1d2250';document.body.append(cv);const c=cv.getContext('2d');c.imageSmoothingEnabled=false;
   const look=N.state.hero;const rides=['scooter','bmx','dirt','kart','moto','sports','police','hover','race','monster','rocket','gold'];
   rides.forEach((r,i)=>N.Rides.draw(c,r,20+(i%6)*190,20+Math.floor(i/6)*150,5,look,0.3,false));
   const dogs=['ellie','puppy','golden','lab','dalmatian','beagle','pug','shiba','corgi','shepherd','husky','collie','dachshund','poodle','chihuahua','bulldog','robodog'];
   const sets=[{hat:'crown',face:'shades',neck:'cape'},{hat:'party',face:'nerd',neck:'bandana'},{hat:'cowboy',face:'monocle',neck:'cape'},{hat:'wizard',face:'starglasses',neck:'bowtie'},{hat:'viking',neck:'chain'},{hat:'pirate',neck:'spiked'},{hat:'santa'},{hat:'propeller'},{hat:'flower'}];
   dogs.forEach((d,i)=>{const p=N.PETS?N.PETS[d]:null;});
   window.__dogs=dogs;window.__sets=sets;});
 await ev(()=>{const N=window.__nk;const cv=document.querySelector('canvas[style*="9999"]'),c=cv.getContext('2d');const P=N.DogGear;const dogs=window.__dogs,sets=window.__sets;
   dogs.forEach((d,i)=>{const x=20+(i%9)*128,y=380+Math.floor(i/9)*220;N.state.hero.pet=d;N.state.hero.dogAcc=sets[i%sets.length];N.drawPet(c,d,x,y,7,0);c.fillStyle='#fff';c.font='12px sans-serif';c.fillText(d,x,y+110);});});
 console.log('PETS exported?',await ev(()=>!!window.__nk.PETS));
 await pg.screenshot({path:'sp/rides-sheet.png'});
 console.log('errors',errs);await b.close();})();
