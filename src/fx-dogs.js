/* =========================================================
   Dogs! A pack of breeds for the Shop, and a free starter dog.
   ========================================================= */
const DOGS=[
  ['ellie','Ellie the Sheepadoodle',0,{b:'#1d1f33',W:'#ffffff',w:'#c9cfdc',K:'#1d1f33',n:'#1d1f33',P:'#ff8fa3'},['........bbbb..','.......bbWWWWb','ww.....bbWKWWW','www....bWWWWnn','.ww....WWWWWPW','.wwwbbbbbWWWW.','.wwWbbbbWWWWw.','.wWWWWWWWWWWw.','..WW.WW..WW.WW','..ww.ww..ww.ww']],
  ['puppy','Puppy',110,{b:'#6b3e26',B:'#b07a4a',K:'#1d1f33',n:'#1d1f33',P:'#ff8fa3'},['......bb..','.....bBBB.','b....BBKBn','bBBBBBBBBP','.BBBBBBB..','.B.B..B.B.','.b.b..b.b.']],
  ['golden','Golden Retriever',130,{b:'#b47a2a',B:'#e8b25a',K:'#1d1f33',n:'#1d1f33',P:'#ff8fa3'},['......bb..','.....bBBB.','bb...BBKBn','.bBBBBBBBP','.BBBBBBB..','.B.B..B.B.','.b.b..b.b.']],
  ['lab','Black Lab',130,{b:'#15151a',B:'#33333d',K:'#e0b030',n:'#000000',P:'#ff8fa3'},['......bb..','.....bBBB.','b....BBKBn','bBBBBBBBBP','.BBBBBBB..','.B.B..B.B.','.b.b..b.b.']],
  ['dalmatian','Dalmatian',150,{b:'#1d1f33',B:'#f4f4f4',S:'#1d1f33',K:'#1d1f33',n:'#1d1f33',P:'#ff8fa3'},['......bb..','.....BBSB.','b....BBKBn','bBSBBSBBBP','.BBSBBBS..','.B.B..B.B.','.b.b..b.b.']],
  ['beagle','Beagle',140,{b:'#2b1d14',B:'#c9853a',W:'#ffffff',K:'#1d1f33',n:'#1d1f33'},['......bb..','.....BWWB.','W....bBKWn','WbbbbbBBW.','.WWWWWWW..','.W.W..W.W.','.W.W..W.W.']],
  ['pug','Pug',140,{B:'#d9b38c',m:'#3a2a20',K:'#ffffff',n:'#1d1f33',q:'#c99a6a'},['.......m.','qq...mmmm','q.BBBBmKm','.BBBBBmmn','.BBBBBBB.','.B.B..B.B']],
  ['shiba','Shiba Inu',160,{b:'#a8581f',B:'#e07b39',W:'#fff3e0',K:'#1d1f33',n:'#1d1f33'},['.....b.b..','BB...BBBB.','B....BWKBn','BBBBBBWWW.','.BWWWWWB..','.B.B..B.B.','.W.W..W.W.']],
  ['corgi','Corgi',140,{b:'#a8581f',B:'#e8913a',W:'#fff3e0',K:'#1d1f33',n:'#1d1f33'},['.....b.b..','.....BBBB.','.....BWKBn','BBBBBBBWW.','BWWWWWWB..','.b.b..b.b.']],
  ['shepherd','German Shepherd',180,{b:'#2b1d14',B:'#c98a4a',K:'#1d1f33',n:'#1d1f33',P:'#ff8fa3'},['.....b.b..','.....bBBb.','b....BBKBn','bbbbbbBBBP','.BBBBBBB..','.B.B..B.B.','.b.b..b.b.']],
  ['husky','Husky',180,{b:'#4a5268',B:'#8a94ad',W:'#ffffff',K:'#3fa7ff',n:'#1d1f33'},['.....b..b.','.....bBBb.','b....BWKWn','bBBBBBWWW.','.BWWWWWB..','.B.B..B.B.','.b.b..b.b.']],
  ['collie','Border Collie',170,{b:'#1d1f33',W:'#ffffff',K:'#8a6a4a',n:'#000000'},['......bb..','.....bWbb.','b....bWKbn','bbbbbbWWW.','.bWWWWWb..','.W.b..b.W.','.W.b..b.W.']],
  ['dachshund','Dachshund',150,{b:'#6b2f14',B:'#a0522d',K:'#1d1f33',n:'#1d1f33',P:'#ff8fa3'},['.........bb.','........bBBB','b.......BBKn','bBBBBBBBBBBP','.b.b....b.b.']],
  ['poodle','Poodle',190,{W:'#ffffff',w:'#e8e2f0',K:'#1d1f33',n:'#1d1f33',P:'#ff6fb5'},['........WW.','WW.....WWWW','WW.....WWKn','.wwwwwwWWWP','..WWWWWWW..','..w.w..w.w.','.WW.WW.WW.WW']],
  ['chihuahua','Chihuahua',120,{b:'#c9a06a',B:'#ecc98e',K:'#1d1f33',n:'#1d1f33'},['....b.b.','....BBB.','B...BKBn','BBBBBBB.','.B.B.B.B']],
  ['bulldog','Bulldog',170,{B:'#c9a27a',W:'#ffffff',m:'#5a3a2a',K:'#1d1f33',n:'#1d1f33'},['......mm..','.....BBBBB','.....BKBBm','BBBBBBWWWm','BWWWWWWWB.','BB.B..B.BB']],
  ['robodog','Robo-Dog',240,{b:'#5d6385',B:'#d7deeb',K:'#5ef2ff',n:'#ff4d6d',a:'#ffe066'},['......a...','.....bBBB.','b....BBKBn','bBBBBBBBB.','.BbBBbBB..','.b.b..b.b.','.a.a..a.a.']]];
const STARTER_DOGS=['ellie','puppy','golden','lab','dalmatian','beagle','pug','shiba','corgi'];
DOGS.forEach(([id,name,price,pal,rows])=>{PETS[id]={fly:false,pal,rows,dog:true};});
{const keep=CATALOG.pet.filter(p=>!DOGS.some(d=>d[0]===p.id));const none=keep.shift();CATALOG.pet=[none,...DOGS.map(([id,name,price])=>({id,name,price})),...keep];}
const isDog=id=>!!(PETS[id]&&PETS[id].dog);
function dogIcon(id,size){const cv=el('canvas',{width:size,height:size,class:'dog-ic'}),c=cv.getContext('2d');c.imageSmoothingEnabled=false;const p=PETS[id],w=p.rows[0].length,h=p.rows.length,s=Math.floor(size*0.8/Math.max(w,h));
  drawSprite(c,p.rows,(size-w*s)/2,(size-h*s)/2,s,p.pal);return cv;}
function dogGrid(selected,onPick){return el('div',{class:'dog-grid'},STARTER_DOGS.map(id=>{const b=el('button',{class:'dog-pick'+(id===selected?' on':''),type:'button',onclick:()=>{
    b.parentNode.querySelectorAll('.dog-pick').forEach(x=>x.classList.remove('on'));b.classList.add('on');Snd.init();Snd.tone(880,0.06,'square',0.04);Snd.tone(660,0.08,'square',0.04,0.07);onPick(id);}},
    dogIcon(id,72),el('span',null,DOGS.find(d=>d[0]===id)[1]),typeof DOG_POWERS!=='undefined'&&DOG_POWERS[id]?el('small',{class:'dpw'},'🐾 '+DOG_POWERS[id][0]):null);return b;}));}
// one-time: heroes who started before dogs existed get to pick a free dog
const DogPick={maybe(){if(!state.hero||state.dogPicked)return;if(!$('#overlay').hidden||!$('#cine').hidden||!$('#talk').hidden||$('#scr-map').hidden){setTimeout(()=>this.maybe(),2500);return;}
    let pickId='puppy';const go=()=>{state.dogPicked=1;if(!state.owned.includes('pet:'+pickId))state.owned.push('pet:'+pickId);state.hero.pet=pickId;saveState();overlay(null);Snd.fanfare();renderMap();};
    overlay(el('div',{class:'modal dog-modal'},el('h2',null,'Pick your dog!'),el('p',null,'Every hero needs a sidekick. Choose a free dog. Each dog has its own special power. You can buy more breeds in the Shop.'),
      dogGrid(pickId,id=>{pickId=id;}),el('div',{class:'btns'},el('button',{class:'btn btn-green',type:'button',onclick:go},'This one! ▸'))));}};

// Ellie is the family dog: every hero gets her free, with a one-time welcome
const Ellie={maybe(){if(!state.hero)return;if(state.owned.includes('pet:ellie')&&state.ellieMet)return;
    if(!state.owned.includes('pet:ellie')){state.owned.push('pet:ellie');saveState();}
    if(state.ellieMet)return;if(!$('#overlay').hidden||!$('#cine').hidden||!$('#talk').hidden||$('#scr-map').hidden){setTimeout(()=>this.maybe(),2500);return;}
    state.ellieMet=1;saveState();const big=el('canvas',{width:160,height:160,class:'ellie-big'});const c=big.getContext('2d');c.imageSmoothingEnabled=false;drawSprite(c,PETS.ellie.rows,10,30,10,PETS.ellie.pal);
    Snd.fanfare();overlay(el('div',{class:'modal dog-modal ellie-modal'},el('h2',null,'Meet Ellie! 🐾'),big,el('p',null,'Ellie the Sheepadoodle wants to join your adventure. She’s yours, free!'),typeof DogPower!=='undefined'?el('p',{class:'dpw-line'},DogPower.line('ellie')):null,
      el('div',{class:'btns'},el('button',{class:'btn btn-dark',type:'button',onclick:()=>{overlay(null);}},'Maybe later'),
        el('button',{class:'btn btn-green',type:'button',onclick:()=>{state.hero.pet='ellie';saveState();overlay(null);Snd.gem();renderMap();}},'Bring Ellie along! ▸'))));}};
