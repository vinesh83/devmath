// node mathfx.js <lessonId|all> <preview|render>
const { chromium } = require('/opt/node-tools/node_modules/playwright');const fs=require('fs'),path=require('path');
const LD=path.join(__dirname,'../lessons');
(async()=>{const [which,mode]=process.argv.slice(2);const ids=which==='all'?['div1','div2','div3','div4','div5','div6']:which.split(',');
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const pg=await b.newPage({viewport:{width:1280,height:720}});await pg.goto('http://localhost:'+(process.env.PORT||8765)+'/');await pg.waitForTimeout(400);await pg.fill('#ob-name','Dev');await pg.click('text=Start the adventure');await pg.waitForTimeout(900);
 const hero=JSON.parse(fs.readFileSync(path.join(LD,'dev-hero.json'),'utf8'));
 await pg.addScriptTag({content:fs.readFileSync(path.join(LD,'lessonfx.js'),'utf8')});
 await pg.evaluate(async(hero)=>{const N=window.__nk;N.Updater.check=()=>{};N.Updater.apply=()=>{};Object.assign(N.state.hero,hero);document.querySelector('#talk').hidden=true;await document.fonts.ready;
   const c=document.createElement('canvas');c.width=1280;c.height=720;c.id='fx';window.__fx=c.getContext('2d');LessonFX.init(N.Cin3.sprites());},hero);
 await pg.evaluate(()=>Promise.all(['800 40px "JetBrains Mono"','800 40px Lexend','700 40px "Pixelify Sans"'].map(f=>document.fonts.load(f))));
 const shotsOut=[];
 for(const id of ids){const TL=JSON.parse(fs.readFileSync(path.join(LD,`timeline-${id}.json`),'utf8'));const dir=path.join(LD,'frames',id);fs.mkdirSync(dir,{recursive:true});
   const tp=await pg.evaluate(([n,t])=>{const c=document.createElement('canvas');c.width=1280;c.height=720;LessonFX.titleCard(c.getContext('2d'),n,t);return c.toDataURL('image/png').split(',')[1];},[TL.num,TL.title]);fs.writeFileSync(path.join(dir,'title.png'),Buffer.from(tp,'base64'));
   for(let bi=0;bi<TL.beats.length;bi++){const B=TL.beats[bi];if(B.type==='shot'||(process.env.ONLY&&B.type!==process.env.ONLY))continue;
     const times=mode==='preview'?[0.3,B.D*0.35,(B.stopAt||B.D*0.6),B.D*0.8,B.D-0.2]:Array.from({length:Math.round(B.D*30)},(_,i)=>i/30);
     const bdir=path.join(dir,'b'+bi);fs.rmSync(bdir,{recursive:true,force:true});fs.mkdirSync(bdir,{recursive:true});
     for(let i=0;i<times.length;i++){const d=await pg.evaluate(([B,t])=>{const c=window.__fx;LessonFX.frame(c,B,t);return c.canvas.toDataURL('image/jpeg',0.92).split(',')[1];},[B,times[i]]);
       const f=path.join(bdir,mode==='preview'?`p${i}.jpg`:`f${String(i).padStart(5,'0')}.jpg`);fs.writeFileSync(f,Buffer.from(d,'base64'));if(mode==='preview')shotsOut.push(f);}
     console.log(id,'beat',bi,B.scene,times.length,'frames');}}
 if(mode==='preview')fs.writeFileSync(path.join(LD,'preview-list.txt'),shotsOut.join('\n'));
 await b.close();})();
