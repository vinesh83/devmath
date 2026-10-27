/* =========================================================
   3D cinematics glue: loads the 3D engine (cine3d.js) only when a movie plays,
   and hands it Dev's current sprites (hero, dog, his mech, Glitch's mech) to turn into voxel models.
   Falls back to the 2D intro if 3D can't run.
   ========================================================= */
const Cin3={off:false,loading:null,mus:null,
  // the movie score (audio/cine-*.mp3) plays on its own player, unlocked on his first tap
  music(){if(!this.mus){this.mus=new Audio();this.mus.preload='auto';const go=()=>{document.removeEventListener('pointerdown',go,true);try{const a=this.mus;a.muted=true;a.src='audio/cine-mech.mp3';const p=a.play();if(p&&p.then)p.then(()=>{a.pause();a.muted=false;}).catch(()=>{a.muted=false;});}catch(e){}};document.addEventListener('pointerdown',go,true);}return this.mus;},
  ready(a,src){return new Promise(res=>{if(state.mute){res();return;}a.muted=false;a.src=src;a.load();let d=false;const ok=()=>{if(!d){d=true;res();}};a.addEventListener('canplaythrough',ok,{once:true});setTimeout(ok,2500);});},
  load(){if(window.Cine3D)return Promise.resolve(true);if(!this.loading)this.loading=new Promise(res=>{const s=document.createElement('script');s.src='cine3d.js?v='+(typeof BUILD!=='undefined'?BUILD:'1');
    s.onload=()=>res(!!window.Cine3D);s.onerror=()=>{this.loading=null;res(false);};document.head.appendChild(s);setTimeout(()=>res(!!window.Cine3D),15000);});return this.loading;},
  spr(w,h,fn){const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.imageSmoothingEnabled=false;try{fn(x);}catch(e){}return {w,h,data:x.getImageData(0,0,w,h).data};},
  // 3D in battles and games: only when the engine is loaded and WebGL works (falls back to 2D otherwise)
  can3d(){if(this.off||state.no3d||RM)return false;if(this._ok==null&&window.Cine3D)this._ok=Cine3D.ok();return !!(window.Cine3D&&this._ok);},
  sprites(){const look=heroLook(),dog=look.pet&&PETS[look.pet]&&PETS[look.pet].dog?look.pet:'ellie',p=PETS[dog],hero={};
    for(const f of ['stand','runA','runB'])hero[f]=this.spr(16,22,x=>drawHero(x,2,4,1,look,f,0));
    return {hero,dog:this.spr(p.rows[0].length+10,p.rows.length+10,x=>drawPet(x,dog,5,6,1,0)),mech:this.spr(30,30,x=>drawMech(x,3,2,1,mechCfg(),0,false,false)),gmech:this.spr(30,30,x=>drawMech(x,3,2,1,GLITCH_MECH,0,true,false)),
      glitch:this.spr(18,18,x=>drawGlitch(x,3,4,1,glitchForm(),0,false)),
      minion:this.spr(12,12,x=>{const bc=BUG_COLS[0];drawSprite(x,MINION,1,1,1,{a:bc[1],g:bc[1],G:bc[0],W:'#ffffff',K:'#1d1f33',M:'#1d1f33'});drawSprite(x,MINION_LEGS[0],1,9,1,{g:bc[1]});}),
      // three friend knights for the lesson movies (different outfits, skin and hair)
      friends:[{skin:SKINS[0],hair:HAIRS[2],outfit:'ember',hat:'none',cape:'none'},{skin:SKINS[3],hair:HAIRS[1],outfit:'leaf',hat:'none',cape:'red'},{skin:SKINS[1],hair:HAIRS[4],outfit:'frost',hat:'none',cape:'none'}].map(l=>this.spr(16,22,x=>drawHero(x,2,4,1,l,'stand',0))),
      ride:look.ride&&look.ride!=='none'&&typeof Rides!=='undefined'?this.spr(34,30,x=>Rides.draw(x,look.ride,4,4,1,look,0,false)):null};},
  sfx(n){try{({roar:()=>{Snd.tone(70,1.1,'sawtooth',0.09,0,45);Snd.noise(0.9,0.12,0,'lowpass',500);},thunder:()=>Snd.boom(),slam:()=>{Snd.slam();Snd.boom();},charge:()=>Snd.charge(0.8),whoosh:()=>Snd.whoosh()})[n]();}catch(e){}},
  async play(kind,o){if(this.off||(typeof Brawl!=='undefined'&&Brawl.off))return false;if(!(await this.load())||!window.Cine3D||!Cine3D.ok())return false;
    const held=typeof Pause!=='undefined'&&Pause.hold&&Pause.hold(),mus=this.music(),song=typeof Music!=='undefined'?Music.song:null;
    await this.ready(mus,'audio/cine-'+kind+'.mp3');if(typeof Music!=='undefined')Music.stop();
    const start=o.onStart;o.onStart=()=>{try{if(!state.mute){mus.currentTime=0;mus.volume=1;const p=mus.play();if(p&&p.catch)p.catch(()=>{});}}catch(e){}if(start)start();};
    o.onEnd=()=>{try{mus.pause();}catch(e){}};
    try{await Cine3D.play(kind,Object.assign({sprites:this.sprites(),sfx:n=>this.sfx(n)},o));}catch(e){return false;}finally{try{mus.pause();}catch(e){}if(held)Pause.release();}return true;}
};
// world intros become 3D movies (the 2D one is the fallback)
{const _w=Intro.world.bind(Intro);Intro.world=function(w){return Cin3.play('world',{world:w.id,title:w.name.toUpperCase(),sub:w.sub,boss:w.boss,color:w.color,onStart:()=>{}}).then(ok=>ok?null:_w(w)).then(()=>Intro.hush());};}
// Mech Battle opens with Glitch's mech crashing down
{const _p=Arcade.play.bind(Arcade);Arcade.play=function(o){o=o||{};const k=o.kind;if(k==='mech'&&!(typeof Brawl!=='undefined'&&Brawl.off))return Cin3.play('mech',{}).then(()=>_p(o));return _p(o);};}

setTimeout(()=>{try{Cin3.music();}catch(e){}},1200);

// earning a belt: the 3D belt ceremony plays before the Dojo's belt card
{const _c=Dojo.ceremony.bind(Dojo);Dojo.ceremony=function(did,i){const B=BELTS[i];return Cin3.play('belt',{beltColor:B[1],title:B[0].toUpperCase()+' BELT!',sub:DOJOS[did].name}).then(()=>_c(did,i));};}

// load the 3D engine in the background a few seconds after start, so battles can use it
setTimeout(()=>{try{if(!Cin3.off)Cin3.load();}catch(e){}},4000);
// Toon look: tag every sprite with what it is, so the 3D engine builds the same smooth toon characters as Number Isle
// (Dev's real skin, hair, outfit color, hat and cape; Ellie's accessories; his mech's paint).
{const _sp=Cin3.sprites.bind(Cin3);Cin3.sprites=function(){const S=_sp.apply(this,arguments);try{
  const L=heroLook(),oc=(CATALOG.outfit.find(o=>o.id===L.outfit)||{}).B,look={skin:L.skin,hair:L.hair,outfit:L.outfit,outfitCol:oc,hat:L.hat,cape:L.cape&&L.cape!=='none'?L.cape:null};
  for(const f of ['stand','runA','runB'])if(S.hero[f])Object.assign(S.hero[f],{kind:'hero',pose:f,look});
  if(S.dog)Object.assign(S.dog,{kind:'dog',dogAcc:(state.hero||{}).dogAcc||{}});
  if(S.glitch)S.glitch.kind='glitch';if(S.gmech)S.gmech.kind='gmech';if(S.minion)S.minion.kind='minion';
  if(S.mech){const pt=(typeof PAINT!=='undefined'&&PAINT[(mechCfg()||{}).paint])||null;Object.assign(S.mech,{kind:'mech',col:pt?pt[0]:'#3d7cff'});}
  (S.friends||[]).forEach((f,i)=>{const l=[{skin:SKINS[0],hair:HAIRS[2],outfitCol:'#e8643a'},{skin:SKINS[3],hair:HAIRS[1],outfitCol:'#3fbf5f',cape:'red'},{skin:SKINS[1],hair:HAIRS[4],outfitCol:'#9be7ff'}][i%3];Object.assign(f,{kind:'knight',look:l});});
  }catch(e){console.error(e);}return S;};}
