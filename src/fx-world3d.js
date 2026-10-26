/* =========================================================
   Number Isle: the map as a toon 3D island (phase 1 of "everything 3D").
   Dev walks his hero (Ellie follows) to each place. Every door presses the same button the 2D map has,
   so the game's rules stay in one place: locked levels, the Dojo gate, Times-first, the surprise drops.
   The 2D map is still there underneath; a button switches between them, and it is used if 3D can't run.
   ========================================================= */
const Isle={
  w:null,host:null,loading:false,
  on(){return state.view3d!==false&&!this.failed;},
  SITES:[
    {id:'dojo',icon:'🥋',kind:'dojo',x:0,z:0,rot:0,color:'#ff6b6b',labelY:10,solid:3.8,go:'Train',q:'.ow-dojo'},
    {id:'quest',icon:'📜',kind:'quest',x:9,z:15,rot:-0.7,color:'#ffd23f',padDist:3.2,solid:1.6,labelY:5,go:'Quest',q:'.ow-quest'},
    {id:'camp',icon:'⛺',kind:'camp',x:-10,z:17,rot:0.6,color:'#4d9bff',padDist:4.5,solid:2.6,labelY:5,go:'Homework',aria:'Training Camp'},
    {id:'shop',icon:'🛒',kind:'shop',x:-16,z:6,rot:1.1,color:'#ff9f43',padDist:4.6,solid:3.4,flat:8,labelY:7.5,go:'Shop',btn:'Shop'},
    {id:'mech',icon:'🤖',kind:'mech',x:22,z:22,rot:-0.9,color:'#9aa6b8',padDist:5.5,solid:3.8,labelY:8,go:'Mech Bay',btn:'Mech Bay'},
    {id:'canyon',icon:'🏜️',kind:'canyon',x:33,z:2,rot:-1.4,color:'#e8643a',padDist:7.5,solid:5,labelY:9,world:'canyon'},
    {id:'castle',icon:'🏰',kind:'castle',x:22,z:-26,rot:-0.7,color:'#4d7cff',padDist:6.5,solid:4.8,labelY:11,world:'castle'},
    {id:'forge',icon:'🔥',kind:'forge',x:-24,z:-19,rot:0.85,color:'#ff7b1c',padDist:5,solid:3.6,labelY:8,world:'forge'},
    {id:'tower',icon:'🗼',kind:'tower',x:-34,z:4,rot:1.45,color:'#2f6fdc',padDist:4.2,solid:2.4,labelY:16,world:'tower'},
    {id:'docks',icon:'⚓',kind:'docks',x:16,z:43,rot:0.35,color:'#3fa7e8',padDist:-3,solid:1.5,flat:6,labelY:9,world:'docks'},
    {id:'dungeon',icon:'🗝️',kind:'dungeon',x:-21,z:33,rot:0.55,color:'#e0457b',padDist:7,solid:4.6,labelY:7,go:'Enter',q:'.ow-div'},
    {id:'fortress',icon:'👾',kind:'fortress',x:0,z:-80,rot:0,color:'#b26bff',padDist:7,solid:5.2,flat:9,labelY:15,go:'Fortress',aria:'Glitch Fortress',path:false},
  ],
  map(){return document.querySelector('#scr-map');},
  world(id){return WORLDS.find(w=>w.id===id);},
  // read names and progress from the 2D map so the island always says the same thing
  sites(){const m=this.map();return this.SITES.map(s=>{const o=Object.assign({},s);
    if(s.world){const w=this.world(s.world);o.name=w?w.name:s.id;const c=m&&m.querySelector(`.ow-castle[aria-label="${o.name}"] small`);o.sub=c?c.textContent:'';o.go='Levels';}
    else if(s.q){const b=m&&m.querySelector(s.q);o.name=b?b.querySelector('h2').textContent:s.id;o.sub=b&&b.querySelector('p')?b.querySelector('p').textContent.split('·')[0].trim():'';}
    else if(s.aria){o.name=s.aria;const c=m&&m.querySelector(`.ow-castle[aria-label="${s.aria}"] small`);o.sub=c?c.textContent:'';}
    else if(s.btn){o.name=s.btn;o.sub=s.btn==='Shop'?`${state.coins||0} coins`:'Build your mech';}
    return o;});},
  press(sel){const m=this.map();const b=m&&m.querySelector(sel);if(b){b.click();return true;}return false;},
  btn(text){const b=[...document.querySelectorAll('button')].find(x=>x.textContent.trim()===text&&x.offsetParent!==null)||[...document.querySelectorAll('button')].find(x=>x.textContent.trim()===text);if(b){b.click();return true;}return false;},
  enter(s){Snd.init();Snd.tap&&Snd.tap();
    if(s.world)return this.levels(s);
    if(s.q)return this.press(s.q);if(s.aria)return this.press(`.ow-castle[aria-label="${s.aria}"]`);if(s.btn)return this.btn(s.btn);},
  levels(s){const m=this.map(),w=this.world(s.world),card=this.w.card;card.innerHTML='';card.hidden=false;
    const close=el('button',{class:'w3d-x',type:'button',onclick:()=>{card.hidden=true;}},'✕');
    const row=el('div',{class:'w3d-lvls'});
    for(let i=1;i<=5;i++){const n=m&&m.querySelector(`[aria-label="${w.name} level ${i}"]`);const open=n&&!n.classList.contains('locked');const st=n&&n.querySelector('.st')?n.querySelector('.st').textContent:'';
      const b=el('button',{class:'w3d-lv'+(open?'':' locked'),type:'button',disabled:!open},el('b',null,String(i)),el('small',null,open?(st||'Play'):'🔒'));
      if(open)b.addEventListener('click',()=>{card.hidden=true;n.click();});row.append(b);}
    const boss=el('button',{class:'w3d-boss',type:'button'},'⚔️ World menu');boss.addEventListener('click',()=>{card.hidden=true;this.press(`.ow-castle[aria-label="${w.name}"]`);});
    card.append(close,el('h3',{style:`color:${w.color||'#ffe066'}`},w.name),el('p',null,w.sub||''),row,boss);},
  look(){const h=state.hero||{};return{skin:h.skin,hair:h.hair,outfit:h.outfit,hat:h.hat,cape:h.cape};},
  async show(){const m=this.map();if(!m)return;m.classList.toggle('w3d-on',this.on());this.toggleBtn();
    if(!this.on()){if(this.w)this.w.setPaused(true);return;}
    if(!this.host)this.host=el('div',{class:'w3d'});if(!m.contains(this.host))m.prepend(this.host);
    if(this.w&&this.w.lost){try{this.w.dispose();}catch(e){}this.w=null;}
    if(this.w){this.w.update(this.sites());const lk=JSON.stringify([this.look(),(state.hero||{}).dogAcc]);if(lk!==this.lk){this.lk=lk;this.w.setLook(this.look(),(state.hero||{}).dogAcc||{});}this.w.setPaused(false);return;}
    if(this.loading)return;this.loading=true;
    const ok=await Cin3.load().catch(()=>false);this.loading=false;
    if(!ok||!window.World3D||!World3D.ok()){this.failed=true;m.classList.remove('w3d-on');this.toggleBtn();return;}
    this.lk=JSON.stringify([this.look(),(state.hero||{}).dogAcc]);
    try{this.w=World3D.start(this.host,{sites:this.sites(),look:this.look(),dog:(state.hero||{}).dogAcc||{},pos:state.w3dPos,tier:state.w3dTier||0,noAuto:!!window.__w3dNoAuto,onTier:t=>{state.w3dTier=t;saveState();},
      onEnter:s=>this.enter(s),onPos:p=>{state.w3dPos=p;},onNear:s=>{if(!s&&this.w)this.w.card.hidden=true;},
      sfx:k=>{try{Snd.tone(523,0.06,'square',0.03);Snd.tone(784,0.08,'square',0.03,0.05);}catch(e){}}});}
    catch(e){console.error(e);this.failed=true;m.classList.remove('w3d-on');this.toggleBtn();}
    if(this.w&&!this.flown&&!window.__w3dNoIntro){this.flown=true;this.w.intro();}
    if(!this.watch)this.watch=setInterval(()=>{if(!this.w)return;const hid=m.hidden||!m.classList.contains('w3d-on')||!$('#overlay').hidden||!$('#cine').hidden||!!document.querySelector('.vp,#cine3d');this.w.setPaused(hid);this.music(!hid);},300);},
  // the island has its own orchestral theme; the chiptune map loop is used everywhere else
  music(on){const a=this.aud||(this.aud=Object.assign(new Audio('audio/island.mp3'),{loop:true,preload:'none',volume:0.55}));
    const want=on&&!state.mute&&!state.musicOff&&!document.hidden;if(want){if(typeof Music!=='undefined'&&Music.song==='map')Music.stop();if(a.paused)a.play().catch(()=>{});}else if(!a.paused)a.pause();},
  toggleBtn(){const m=this.map();if(!m)return;let b=m.querySelector('.w3d-toggle');if(!b){b=el('button',{class:'w3d-toggle',type:'button'});b.addEventListener('click',()=>{state.view3d=!this.on();if(this.failed&&state.view3d){this.failed=false;}saveState();this.show();});m.append(b);}
    b.textContent=this.on()?'🗺️ 2D map':'🏝️ 3D island';b.hidden=!!this.failed;}
};
{const _rm=renderMap;renderMap=function(){_rm.apply(this,arguments);try{Isle.show();}catch(e){console.error(e);}};}
window.__isle=Isle;
// don't start the chiptune map loop while the island (with its own music) is showing
{const _mp=Music.play.bind(Music);Music.play=function(n){if(n==='map'&&Isle.on()&&!$('#scr-map').hidden&&$('#scr-map').classList.contains('w3d-on'))return;return _mp(n);};}
// iPad only allows audio after a touch: start the island theme on the first tap
document.addEventListener('pointerdown',()=>{if(Isle.w&&!Isle.w.paused)Isle.music(true);},{passive:true});
