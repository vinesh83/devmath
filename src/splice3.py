import re
p='number-knight.html'; s=open(p).read()
def rep(s,a,b,count=1):
    assert a in s, 'MISSING: '+a[:110]; return s.replace(a,b,count)
s=rep(s,"</style>",open('fx2.css').read()+"</style>")
s=rep(s,"/* =========================================================\n   Keypad + fields","\n".join(open(f).read() for f in ['fx-action.js','fx-supers.js','fx-brawl.js','fx-games.js','fx-blocks.js','fx-lessons.js','fx-dojo2.js','fx-mix.js','fx-lab.js','fx-slips.js','fx-intro.js','fx-cin3.js','fx-division.js','fx-flip.js','fx-surprise.js','fx-world3d.js','fx-ellie.js','fx-sync.js','fx-pause.js','fx-dogs.js','fx-dogpow.js','fx-time.js','fx-bigpad.js','fx-interlude.js','fx-breathe.js','fx-breaks.js','fx-rides.js'])+"\n/* =========================================================\n   Keypad + fields")
s=rep(s,'<div id="card" class="card"></div>\n        <div class="scratch-wrap">','<div id="card" class="card"></div>\n        <div class="sc-grip" id="scGrip" role="separator" aria-label="Drag to resize the paper"><span></span></div>\n        <div class="scratch-wrap">')
s=rep(s,'<section id="scr-mech" class="screen" hidden></section>','<section id="scr-mech" class="screen" hidden></section>\n  <section id="scr-dojo" class="screen" hidden></section>')
# keypad / fields
s=rep(s,"    f.el.classList.remove('wrong','right');this.render(f);},\n  next(){",
 "    f.el.classList.remove('wrong','right');f.src='key';f.lastAt=Date.now();this.render(f);f.el.classList.remove('bump');void f.el.offsetWidth;f.el.classList.add('bump');if(f.onChange)f.onChange(f);},\n"
 "  input(f,txt,src,p,at){if(!f||f.locked)return;f.val=String(txt).replace(f.allowDot?/[^0-9.]/g:/[^0-9]/g,'').slice(0,f.max+1);f.src=src;f.inkP=p;f.lastAt=at||Date.now();if(!ANS.firstInput)ANS.firstInput=Date.now();\n"
 "    f.el.classList.remove('wrong','right');this.render(f);if(f.onChange)f.onChange(f);},\n  next(){")
s=rep(s,"f.el.addEventListener('click',()=>this.focus(f));","tapify(f.el,()=>this.focus(f),{down:true});")
s=rep(s,"const b=el('button',{class:'btn '+(a.cls||''),type:'button',onclick:()=>{Snd.init();a.onClick();}},a.label,a.note?el('small',null,a.note):null);",
        "const b=el('button',{class:'btn '+(a.cls||''),type:'button'},a.label,a.note?el('small',null,a.note):null);tapify(b,()=>{Snd.init();a.onClick();});")
s=rep(s,"document.querySelectorAll('#keypad .key').forEach(k=>k.addEventListener('click',()=>{Snd.init();Pad.key(k.dataset.k);}));",
        "document.querySelectorAll('#keypad .key').forEach(k=>tapify(k,()=>{Snd.init();Pad.key(k.dataset.k);},{down:true}));Grip.init();Sync.init();")
# feedback
s=rep(s,"  Talk.onDone(p,res,a);Data.logAttempt(",
 "  if(res.solved){stamp(res.selfCatch?'self':(res.firstTry&&a.checkUsed)?'checked':(p.kind==='fact'&&res.firstTry&&a.ms<3500)?'quick':res.firstTry?'right':'solved','+'+c+' coins',{small:p.kind==='fact'});if(p.kind!=='fact')Battle.bigMoment(1600);}\n  Talk.onDone(p,res,a);Data.logAttempt(")
s=rep(s,"Pad.wrong(o.field);Battle.event(a.tries[a.tries.length-1].chk?'block':'hurt');",
        "Pad.wrong(o.field);Battle.event(a.tries[a.tries.length-1].chk?'block':'hurt');stamp(a.tries[a.tries.length-1].chk?'block':'wrong',a.tries[a.tries.length-1].chk?'No power lost':'Try again');")
s=rep(s,"Pad.wrong(f);Battle.event('hurt',{w:0.5});const tags=[];","Pad.wrong(f);Battle.event('hurt',{w:0.5});stamp('wrong',null,{small:true});const tags=[];")
s=rep(s,"  $('.left').classList.toggle('split',card.classList.contains('tall'));}","  $('.left').classList.toggle('split',card.classList.contains('tall'));Grip.restore();}")
# gate + dojo screen
s=rep(s,"function startLevel(w,li,opt){const boss=li===5;","function startLevel(w,li,opt){const boss=li===5;if(!(opt&&opt.go)&&!Dojo.gateOk()){Dojo.blocked();return;}")
s=rep(s,"function startQuest(){","function startQuest(){if(!Dojo.gateOk()){Dojo.blocked();return;}")
s=rep(s,"function startPack(p){","function startPack(p){if(!Dojo.gateOk()){Dojo.blocked();return;}")
s=rep(s,"function startRun(spec){","function startRun(spec){$('#scr-level').classList.remove('dojo');")
s=rep(s,"  if(id==='scr-map'||id==='scr-mech'||id==='scr-shop')Music.play('map');}",
        "  if(id==='scr-map'||id==='scr-mech'||id==='scr-shop'||id==='scr-dojo')Music.play('map');if(id!=='scr-level')$('#scr-level').classList.remove('dojo');}")
s=rep(s,"  const bottom=el('div',{class:'ow-bottom'},\n",
 "  const bottom=el('div',{class:'ow-bottom'},\n    el('button',{class:'quest ow-dojo'+(Dojo.gateOk()?' done':''),type:'button',onclick:()=>{Snd.init();Dojo.open();}},el('div',null,el('h2',null,'Fact Dojo'),\n"
 "      el('p',null,Dojo.gateText()))),\n")
s=rep(s,"      if(!this.met('knight')){this.say(INTROS.knight);return;}",
        "      if(!this.met('knight')){this.say(INTROS.knight).then(()=>{if(!Dojo.gateOk())this.say(INTROS.sensei).then(()=>Dojo.open());});return;}\n"
        "      if(!this.met('sensei')&&!Dojo.gateOk()){this.say(INTROS.sensei).then(()=>Dojo.open());return;}\n"
        "      if(typeof Surprise!=='undefined'&&Surprise.due()){Surprise.play();return;}\n"
        "      if(Dojo.timesFirst())return;")
# report
s=re.sub(r"  const payload=\{app:'number-knight',v:1,.*?log:L\.slice\(-300\)\};\n","  const payload=reportPayload();\n",s,count=1,flags=re.S)
assert 'const payload=reportPayload();' in s
s=rep(s,"    prizeBlock(),\n","    dojoReport(),\n    prizeBlock(),\n    Sync.block(),\n")
# old bug: the db hookup was swallowed by a comment
s=rep(s,"// signed out / public link: play with the built-in missionsthis.db=db;","// signed out / public link: play with the built-in missions\n    this.db=db;")
s=rep(s,"window.__nk={Battle,","window.__nk={Dojo,DOJOS,BELTS,Sync,stamp,Grip,Battle,")
open(p,'w').write(s); print('ok',len(s))
s=open(p).read()
s=rep(s,"decoder:!!a.decoderUsed,scratch:a.scratch?a.scratch.n:0});","decoder:!!a.decoderUsed,scratch:a.scratch?a.scratch.n:0,fast:a.fast==null?undefined:a.fast,lat:a.lat==null?undefined:a.lat,tips:a.tips||undefined});")
open(p,'w').write(s)
s=open(p).read()
hw=open('hw/hw.js').read()
assert '</script' not in hw
s=rep(s,"/* =========================================================\n   Keypad + fields",hw+"\n"+open('fx-ink.js').read()+"\n/* =========================================================\n   Keypad + fields")
s=rep(s,'<div id="msg">Solve it on the paper, then type your answer.</div>','<div id="msg">Solve it on the paper, then type your answer.</div>\n        <div id="inkPad"></div>')
s=rep(s,"  $('.left').classList.toggle('split',card.classList.contains('tall'));Grip.restore();}","  $('.left').classList.toggle('split',card.classList.contains('tall'));Grip.restore();InkBox.usePad();}")
s=rep(s,"Grip.init();Sync.init();","Grip.init();Sync.init();InkBox.init();BigPad.init();setTimeout(()=>{try{HW.classify28(new Float32Array(784));}catch(e){}},300);")
s=rep(s,"window.__nk={Dojo,","window.__nk={InkBox,HW,Dojo,")
s=rep(s,"if(a.disabled)b.disabled=true;if(a.primary)primaryAction=b;r.append(b);});box.append(r);});","if(a.disabled)b.disabled=true;if(a.primary)primaryAction=b;r.append(b);});box.append(r);});requestAnimationFrame(()=>InkBox.fit());")
s=rep(s,"onclick:()=>{renderShop();show('scr-shop');Talk.meet('pip');}},'Shop')","onclick:()=>{if(!Dojo.gateOk()){Dojo.blocked();return;}renderShop();show('scr-shop');Talk.meet('pip');}},'Shop')")
s=rep(s,"onclick:()=>openMechBay(null)},'Mech Bay')","onclick:()=>{if(!Dojo.gateOk()){Dojo.blocked();return;}openMechBay(null);}},'Mech Bay')")
s=rep(s,"    Sync.block(),\n","    Sync.block(),\n    el('button',{class:'btn btn-dark',type:'button',onclick:()=>Parent.guard(()=>overlay(el('div',{class:'modal'},el('h2',null,'Start over?'),el('p',null,'This erases all progress on this iPad: hero, coins, belts, facts and history. Coach sync stays connected, and reports already sent to your coach are kept.'),\n      el('div',{class:'btns'},el('button',{class:'btn btn-dark',type:'button',onclick:()=>showReport()},'Cancel'),el('button',{class:'btn btn-red',type:'button',onclick:()=>{['nk-state','nk-log','nk-sessions','nk-pending','nk-sync-h'].forEach(k=>{try{localStorage.removeItem(k);}catch(e){}});state=defaultState();location.reload();}},'Yes, erase everything')))))},'Grown-up: start over from scratch'),\n")
s=rep(s,"Grip.init();Sync.init();","Grip.init();Sync.init();giftSupers();")
s=rep(s,"  if(bayTab==='super')SUPERS.forEach(","  if(bayTab==='super')list.append(el('button',{class:'bay-it'+(m.super==='random'?' eq':''),type:'button',style:'--rc:#ffe066',onclick:()=>{state.mech=Object.assign(mechCfg(),{super:'random'});saveState();Snd.tap();renderMechBay();}},el('div',{class:'bay-rand'},'?'),el('b',null,'Surprise me!'),el('span',null,m.super==='random'?'Equipped · a different super each time':'A different super each time')));\n  if(bayTab==='super')SUPERS.forEach(")
s=rep(s,"const sname=(SUPERS.find(s=>s[0]===m.super)||SUPERS[0])[1];","const sname=m.super==='random'?'Surprise me!':(SUPERS.find(s=>s[0]===m.super)||SUPERS[0])[1];")
s=rep(s,"const col={laser:'#5ef2ff',meteor:'#ff7b1c',thunder:'#e0f2ff',dragon:'#b06bff',blackhole:'#b26bff'}[it.id]||'#ffe066';","const col=SUPER_COL[it.id]||'#ffe066';")
s=rep(s,"'Find it in chests')));});","'Earn a belt or find it in chests')));});")
s=rep(s,"function nextProblem(){if(run.idx>=run.queue.length)return finishRun();","function nextProblem(){if(run.idx>=run.queue.length)return finishRun();\n  if(typeof ScreenTime!=='undefined'&&run.spec.mode!=='dojo'&&run.breakIdx!==run.idx&&run.idx>0){const rs=run.results.filter(Boolean),last=run.results[run.idx-1],rev=rs.slice(-3).filter(r=>!r.solved).length,tough=!!last&&rev>=2&&ScreenTime.gapOk();\n    if(tough||ScreenTime.breakDue()){run.breakIdx=run.idx;const R0=run;ScreenTime.brk(tough?{secs:90,tired:true,title:'Tough one! Recharge time 🔋',msg:'That was hard work. A quick break, then the next one.'}:{secs:60}).then(()=>{if(run===R0&&!$('#scr-level').hidden)nextProblem();});return;}}\n  if(typeof Inter!=='undefined'&&run.spec.mode!=='dojo'&&run.idx>0&&run.interIdx!==run.idx&&Inter.every()>0){const lr=run.results[run.idx-1];if(lr&&lr.solved){run.interIdx=run.idx;const R1=run;Inter.play().then(()=>{if(run===R1&&!$('#scr-level').hidden)nextProblem();});return;}}")
s=rep(s,"window.__nk={InkBox,","window.__nk={Brawl,InkBox,")
s=rep(s,"function show(id){document.querySelectorAll('.screen')","function show(id){if(typeof Talk!=='undefined'&&Talk.popEl)Talk.unpop();document.querySelectorAll('.screen')")
s=rep(s,'<div class="prog" id="lv-prog"></div>','<div class="prog" id="lv-prog"></div>\n      <button class="icon-btn" id="lv-pause" type="button" aria-label="Pause">⏸ Pause</button>')
s=rep(s,"Grip.init();Sync.init();","Grip.init();Sync.init();Pause.init();Updater.init();")
s=rep(s,"if(id==='scr-map'||id==='scr-mech'||id==='scr-shop'||id==='scr-dojo')Music.play('map');","if(id==='scr-map'||id==='scr-mech'||id==='scr-shop'||id==='scr-dojo')Music.play('map');if(id==='scr-map'&&typeof Updater!=='undefined')setTimeout(()=>Updater.apply(),800);")
s=rep(s,"{id:'dragon',name:'Baby dragon',price:300}],","{id:'puppy',name:'Puppy',price:110},{id:'corgi',name:'Corgi',price:140},{id:'husky',name:'Husky',price:180},{id:'robodog',name:'Robo-Dog',price:240},{id:'dragon',name:'Baby dragon',price:300}],")
s=rep(s,"  dragon:{fly:true,pal:{p:'#7a3fc9',","  puppy:{fly:false,pal:{b:'#6b3e26',B:'#b07a4a',K:'#1d1f33',n:'#1d1f33',P:'#ff8fa3'},rows:['......bb..','.....bBBB.','b....BBKBn','bBBBBBBBBP','.BBBBBBB..','.B.B..B.B.','.b.b..b.b.']},\n  corgi:{fly:false,pal:{b:'#a8581f',B:'#e8913a',W:'#fff3e0',K:'#1d1f33',n:'#1d1f33'},rows:['.....b.b..','.....BBBB.','.....BWKBn','BBBBBBBWW.','BWWWWWWB..','.b.b..b.b.']},\n  husky:{fly:false,pal:{b:'#4a5268',B:'#8a94ad',W:'#ffffff',K:'#3fa7ff',n:'#1d1f33'},rows:['.....b..b.','.....bBBb.','b....BWKWn','bBBBBBWWW.','.BWWWWWB..','.B.B..B.B.','.b.b..b.b.']},\n  robodog:{fly:false,pal:{b:'#5d6385',B:'#d7deeb',K:'#5ef2ff',n:'#ff4d6d',a:'#ffe066'},rows:['......a...','.....bBBB.','b....BBKBn','bBBBBBBBB.','.BbBBbBB..','.b.b..b.b.','.a.a..a.a.']},\n  dragon:{fly:true,pal:{p:'#7a3fc9',")
s=rep(s,"window.__nk={Brawl,","window.__nk={Pause,Updater,Brawl,")
s=rep(s,"const look={skin:SKINS[1],hair:HAIRS[0],outfit:'scout',hat:'none',cape:'none',pet:'none'};","const look={skin:SKINS[1],hair:HAIRS[0],outfit:'scout',hat:'none',cape:'none',pet:'ellie'};")
s=rep(s,"drawHero(c,24,8,6,look,'stand',0);};","drawHero(c,30,8,6,look,'stand',0);drawPet(c,look.pet,0,92,3,0);};")
s=rep(s,"state.hero=Object.assign({name:n},look);","state.hero=Object.assign({name:n},look);state.dogPicked=1;if(look.pet==='ellie')state.ellieMet=1;if(!state.owned.includes('pet:ellie'))state.owned.push('pet:ellie');if(!state.owned.includes('pet:'+look.pet))state.owned.push('pet:'+look.pet);")
s=rep(s,"el('label',null,'Outfit'),swRow(['scout','ember','leaf'],'outfit'),go));","el('label',null,'Outfit'),swRow(['scout','ember','leaf'],'outfit'),el('label',null,'Pick your dog'),dogGrid(look.pet,id=>{look.pet=id;paint();}),go));")
s=rep(s,"Talk.onMap();}","Talk.onMap();setTimeout(()=>DogPick.maybe(),1800);setTimeout(()=>Ellie.maybe(),2200);}")
s=rep(s,'<span class="chip"><span class="coin-ico"></span><span id="lv-coins">0</span></span>','<span class="chip st-chip">⏱</span>\n      <span class="chip"><span class="coin-ico"></span><span id="lv-coins">0</span></span>')
s=rep(s,"String(state.streak.n||0)),el('span',{class:'chip'},el('span',{class:'coin-ico'}),String(state.coins)),","String(state.streak.n||0)),el('span',{class:'chip'},el('span',{class:'coin-ico'}),String(state.coins)),el('span',{class:'chip st-chip'},'⏱'),")
s=rep(s,"renderShop();show('scr-shop');Talk.meet('pip');","if(!ScreenTime.shopOk()){Talk.say([['pip','Shop’s closed for today, {name}! Come back tomorrow.']]);return;}renderShop();show('scr-shop');Talk.meet('pip');")
s=rep(s,"openMechBay(null);}},'Mech Bay')","if(!ScreenTime.shopOk()){Talk.say([['pip','The Mech Bay is closed for today! Come back tomorrow.']]);return;}openMechBay(null);}},'Mech Bay')")
s=rep(s,"onclick:()=>{p.status='approved';p.approvedAt=new Date().toISOString();saveState();Snd.good();showReport();}","onclick:()=>Parent.guard(()=>{p.status='approved';p.approvedAt=new Date().toISOString();saveState();Snd.good();showReport();})")
s=rep(s,"    dojoReport(),\n","    ScreenTime.report(),\n    dojoReport(),\n")
s=rep(s,"Pause.init();Updater.init();","Pause.init();Updater.init();ScreenTime.init();")
s=rep(s,"function show(id){if(typeof Talk!=='undefined'&&Talk.popEl)Talk.unpop();","function show(id){if(typeof Talk!=='undefined'&&Talk.popEl)Talk.unpop();setTimeout(()=>{if(typeof ScreenTime!=='undefined'){ScreenTime.paint();ScreenTime.enforce();}},50);")
s=rep(s,"window.__nk={Pause,","window.__nk={ScreenTime,Parent,Pause,")

# --- dog powers + handwriting check
s=rep(s,"window.__nk={ScreenTime,","window.__nk={BoxBreath,Inter,BigPad,DogPower,DOG_POWERS,InkCheck,ScreenTime,")
a=s.index('function renderShop(){');b=s.index('\n}',a)
blk=s[a:b].replace('it.price','DogPower.price(it.price)')
blk=rep(blk,"ic,el('span',{class:'nm'},it.name),","ic,el('span',{class:'nm'},it.name),shopTab==='pet'&&DOG_POWERS[it.id]?el('span',{class:'dpw'},DogPower.line(it.id)):null,")
s=s[:a]+blk+s[b:]
# answer flow: ask before a handwritten answer counts as wrong
s=rep(s,"    if(st.tries===0&&a.confidence==null&&o.check&&Math.random()<0.25){a.confidence=await askConfidence();}\n",
 "    if(o.field&&o.field.src==='ink'&&!st.inkAsked&&typeof InkCheck!=='undefined'&&InkCheck.unsure(v)&&InkCheck.left(run)){st.inkAsked=true;\n"
 "      if(!(await InkCheck.ask(v,run))){st.inkClaim=v;Pad.set(o.field,'');o.field.src=null;if(typeof InkBox!=='undefined')InkBox.clear();Pad.focus(o.field);say('Write it again, nice and clear. Or tap the keys.','info');return;}}\n"
 "    if(eqNum(v,o.correct)&&o.field&&o.field.src==='ink'&&typeof InkBox!=='undefined'&&InkBox.lastR&&InkBox.lastR.imgs&&InkBox.lastR.text===String(v))InkBox.lastR.imgs.forEach(x=>InkBox.mine.add(x.ch,x.img));\n    if(st.inkClaim!=null&&typeof InkCheck!=='undefined'){InkCheck.after(st.inkClaim,v,eqNum(v,o.correct));a.inkClaim=st.inkClaim;st.inkClaim=null;}\n"
 "    if(st.tries===0&&a.confidence==null&&o.check&&Math.random()<0.25){a.confidence=await askConfidence();}\n")
# Dalmatian: after Check It, point to the place right away
s=rep(s,"    if(st.tries===1)say('Shield up! Not quite yet. Tap Check It to hunt for the slip.','warn');",
 "    const spot=st.tries===1&&a.checkUsed&&!o.noPlaceHint&&dg.places&&dg.places[0]&&typeof DogPower!=='undefined'&&DogPower.has('dalmatian');\n"
 "    if(spot){say(`Spot it! Look again at the ${dg.places[0]} place.`,'warn');DogPower.pop('dalmatian',`Check the ${dg.places[0]} place!`,{force:true});}\n"
 "    else if(st.tries===1)say('Shield up! Not quite yet. Tap Check It to hunt for the slip.','warn');")
# Beagle: sniff out Glitch's slip after a wrong verdict
s=rep(s,"      say(p.isBug?'Look again. Glitch made a mistake somewhere. Use the check!':'Are you sure? Check Glitch’s answer before you decide.','warn');}}}",
 "      say(p.isBug?'Look again. Glitch made a mistake somewhere. Use the check!':'Are you sure? Check Glitch’s answer before you decide.','warn');if(p.isBug&&typeof DogPower!=='undefined')DogPower.sniff(p);}}}")

# --- calm mode: battle power chip, end-of-level boss battle
s=rep(s,'<span class="chip st-chip">⏱</span>\n      <span class="chip"><span class="coin-ico"></span><span id="lv-coins">','<span class="chip pw-chip" id="lv-power" hidden>⚔ Power <b>0</b></span>\n      <span class="chip st-chip">⏱</span>\n      <span class="chip"><span class="coin-ico"></span><span id="lv-coins">')
s=rep(s,"(async()=>{await Battle.ko();await openChest(chestCtx);await Talk.afterRun(sp);","(async()=>{const pw=Battle.s?Battle.s.power:0;const ak=await Arcade.pick(sp.mode==='boss');await Battle.ko({toBrawl:ak==='battle'||ak==='mech'});await Arcade.play({power:pw,boss:sp.mode==='boss',kind:ak});await openChest(chestCtx);await Talk.afterRun(sp);if(typeof ScreenTime!=='undefined'&&ScreenTime.breakDue())await ScreenTime.brk({secs:60});")
s=rep(s,"el('b',null,'x'+((Battle.s&&Battle.s.best)||0)),el('span',null,'best combo')","el('b',null,'⚔'+((Battle.s&&Battle.s.power)||0)),el('span',null,'battle power')")

# no accidental zoom on the iPad
s=rep(s,"window.__nk={BoxBreath,","window.__nk={NoZoom,BoxBreath,")

# --- rides + dog gear in the Shop, rider on the map, saving goal chip, version label
s=rep(s,"[['outfit','Outfits'],['hat','Hats'],['cape','Capes'],['pet','Pets']]","[['outfit','Outfits'],['hat','Hats'],['cape','Capes'],['pet','Pets'],['dogacc','Dog Gear'],['ride','Rides']]")
s=rep(s,"const own=state.owned.includes(key);const eq=look[shopTab]===it.id;","const own=state.owned.includes(key)||!it.price;const eq=shopTab==='dogacc'?((look.dogAcc||{})[it.slot]===it.id):(look[shopTab]||'none')===it.id;const goal=state.goal&&state.goal.tab===shopTab&&state.goal.id===it.id;")
s=rep(s,"if(shopTab==='pet'){if(it.id!=='none')drawPet(c,it.id,16,30,8,0);}else drawHero(","if(shopTab==='ride'){if(it.id!=='none')Rides.draw(c,it.id,4,12,3.3,look,0,false);else drawHero(c,24,12,4,look,'stand',0);}\n    else if(shopTab==='dogacc'){const dg=look.pet&&PETS[look.pet]&&PETS[look.pet].dog?look.pet:'ellie',p=PETS[dg];drawSprite(c,p.rows,10,40,5,p.pal);DogGear.draw(c,dg,10,40,5,{[it.slot]:it.id});}\n    else if(shopTab==='pet'){if(it.id!=='none')drawPet(c,it.id,16,30,8,0);}else drawHero(")
s=rep(s,"      if(own){state.hero[shopTab]=it.id;saveState();Snd.tap();renderShop();return;}","      if(own){ShopX.equip(shopTab,it);saveState();Snd.tap();renderShop();return;}")
s=rep(s,"b.querySelector('.pr').textContent=`Need ${DogPower.price(it.price)-state.coins} more`;return;}","state.goal={tab:shopTab,id:it.id};saveState();b.querySelector('.pr').textContent=`🎯 Goal set! Need ${DogPower.price(it.price)-state.coins} more`;return;}")
s=rep(s,"state.coins-=DogPower.price(it.price);state.owned.push(key);state.hero[shopTab]=it.id;saveState();Snd.gem();renderShop();}},","state.coins-=DogPower.price(it.price);state.owned.push(key);ShopX.equip(shopTab,it);if(state.goal&&state.goal.id===it.id)state.goal=null;saveState();Snd.gem();Snd.fanfare();renderShop();}},")
s=rep(s,"el('span',{class:'pr'},eq?'Wearing':own?'Owned · tap to wear':[el('span',{class:'coin-ico'}),String(DogPower.price(it.price))]));","el('span',{class:'pr'},eq?(shopTab==='ride'?'Riding':shopTab==='dogacc'?'On your dog · tap to remove':'Wearing'):own?(shopTab==='ride'?'Owned · tap to ride':'Owned · tap to wear'):[goal?'🎯 ':'',el('span',{class:'coin-ico'}),String(DogPower.price(it.price))]));")
s=rep(s,"const paintPrev=()=>{const c=prev.getContext('2d');c.imageSmoothingEnabled=false;c.clearRect(0,0,200,200);drawHero(c,52,40,8,look,'stand',0);","const paintPrev=()=>{const c=prev.getContext('2d');c.imageSmoothingEnabled=false;c.clearRect(0,0,200,200);if(look.ride&&look.ride!=='none'){Rides.draw(c,look.ride,22,6,6,look,0,false);}else drawHero(c,52,40,8,look,'stand',0);")
s=rep(s,"drawHero(hc,3,4,3.5,look,hero.dataset.walk?((t*10|0)%2?'runA':'runB'):'stand',t);","Rides.drawMap(hc,look,t,!!hero.dataset.walk);")
s=rep(s,"el('span',{class:'chip'},el('span',{class:'coin-ico'}),String(state.coins)),el('span',{class:'chip st-chip'},'⏱'),","el('span',{class:'chip'},el('span',{class:'coin-ico'}),String(state.coins)),Rides.goalChip(),el('span',{class:'chip st-chip'},'⏱'),")
s=rep(s,"    Sync.block(),\n","    Sync.block(),\n    el('p',{class:'tiny-ok'},'App version '+BUILD),\n")
s=rep(s,"window.__nk={NoZoom,","window.__nk={Breaks,PETS,drawPet:(...a)=>drawPet(...a),Rides,DogGear,NoZoom,")

# --- the problem never disappears: stacked numbers on every scratch page, and the problem always shown on the card
s=rep(s,"    if(this.bg&&this.pi===0)this.bg(c,W,H,g);\n    else if(this.pi>0){","    if(this.bg)this.bg(c,W,H,g);\n    if(this.pi>0){")
s=rep(s,"  if(p.stacked){card.append(el('div',{class:'prompt'},'Solve it on the paper below. Then type your answer.'));}","  if(p.stacked){card.append(el('div',{class:'expr'},p.nums.map(fmtStr).join(` ${p.op} `)+' ='),el('div',{class:'prompt'},'Solve it on the paper below. Then type your answer.'));}")

# --- Fact Forge: a big answer pad instead of scratch paper; elsewhere, clear labels and a nudge toward the ANSWER pad
s=rep(s,"  $('.left').classList.toggle('split',card.classList.contains('tall'));Grip.restore();InkBox.usePad();}",
"  $('.left').classList.toggle('split',card.classList.contains('tall'));Grip.restore();\n  const factBig=p.kind==='fact'&&typeof InkBox!=='undefined'&&!!InkBox.pad;$('#scr-level').classList.toggle('factmode',factBig);\n  if(factBig){const ink=el('div',{class:'dj-ink fact-ink'});card.append(ink);InkBox.mount(ink,{big:true,allowDot:false,boxes:p.answer>=100?3:2});}else InkBox.usePad();\n  if(typeof AnswerHint!=='undefined')AnswerHint.arm(p);}")
s=rep(s,"  const f=Pad.make({allowDot:false});card.append(el('div',{class:'ans-row'},f.el));Pad.focus(f);Scratch.reset(null);say('Quick! Type the product.','');",
"  const f=Pad.make({allowDot:false});card.append(el('div',{class:'ans-row'},f.el));Pad.focus(f);Scratch.reset(null);say('Quick! Write the answer in the big box, or type it.','');\n  // a written answer checks itself, like the Dojo\n  f.onChange=()=>{clearTimeout(f._t);if(f.src!=='ink'||!f.val.length||f.locked)return;f._t=setTimeout(()=>{if(f.locked||(typeof InkBox!=='undefined'&&InkBox.drawing))return;const b=[...document.querySelectorAll('#actions button')].find(x=>/Submit/.test(x.textContent));if(b)b.click();},f.val.length>=String(p.answer).length?700:1600);};")
s=rep(s,'<div class="sc-label">Scratch paper · use your Pencil</div>','<div class="sc-label">✏️ Work it out here · the game doesn’t read this paper</div>')

# --- handwriting benefit of the doubt in levels and Fact Forge
s=rep(s,"  async function submit(){const v=Pad.val(o.field);","  async function submit(){let v=Pad.val(o.field);if(v!=null&&!eqNum(v,o.correct)&&o.field&&o.field.src==='ink'&&typeof InkBox!=='undefined'&&InkBox.doubt(o.correct)){Pad.set(o.field,String(o.correct));v=Pad.val(o.field);}")
s=rep(s,"onClick:()=>{const v=Pad.val(f);if(v==null)return;tries++;","onClick:()=>{let v=Pad.val(f);if(v==null)return;if(v!==p.answer&&f.src==='ink'&&typeof InkBox!=='undefined'&&InkBox.doubt(p.answer)){Pad.set(f,String(p.answer));v=p.answer;}tries++;")
s=rep(s,"window.__nk={Breaks,","window.__nk={Cin3,Explore,Intro,FactMix,Lesson,Blocks,Arcade,Games,Breaks,")
# levels: 5 problems (not 6) outside the fact world
s=rep(s,"const n=boss?(fact?15:8):(fact?10:6);","const n=boss?(fact?15:8):(fact?10:Explore.size());")
s=rep(s,"problems:toks.map(t=>makeProblem(t,boss?0.5:0))});}","problems:toks.map(t=>makeProblem(t,boss?0.5:Explore.bias()))});}")
# levels only quiz times facts he has met in the Dojo (or the easy 2s, 5s and 10s until he has met 4)
s=rep(s,"  let tot=cands.reduce((s,c)=>s+c.w,0),x=Math.random()*tot;let ch=cands[0];","  {const DF=(state.dojo&&state.dojo.facts)||{},seen=cands.filter(c=>DF[c.k]&&DF[c.k].n>0),easy=cands.filter(c=>[2,5,10].includes(c.a)||[2,5,10].includes(c.b));const pool=seen.length>=4?seen:easy.length?easy:cands.slice();cands.length=0;cands.push(...pool);}\n  let tot=cands.reduce((s,c)=>s+c.w,0),x=Math.random()*tot;let ch=cands[0];")
# big add/subtract: a quick estimate check is required before the first answer counts
s=rep(s,"    if(st.tries===0&&a.confidence==null&&o.check&&Math.random()<0.25){a.confidence=await askConfidence();}\n",
 "    if(o.quick&&st.tries===0&&!a.checkUsed&&!st.quickAsked){st.quickAsked=true;a.checkUsed=true;a.quickCheck=true;a.checkMs=Date.now()-a.t0;st.checkedSince=true;const wrong=!eqNum(v,o.correct);\n"
 "      openCheck(o.quick,v,o,res=>{a.checks=(a.checks||[]);a.checks.push({ans:v,flag:res.flagged,said:res.said||null,real:wrong,required:true});if(res.flagged&&wrong)st.wrongAtCheck=true;});\n"
 "      say('Quick check before it counts: does your answer make sense?','info');return;}\n"
 "    if(st.tries===0&&a.confidence==null&&o.check&&Math.random()<0.25){a.confidence=await askConfidence();}\n")
s=rep(s,"    if(o.onWrong&&o.onWrong(st.tries,v))return;\n","    if(o.onWrong&&o.onWrong(st.tries,v))return;\n    if(o.lesson&&typeof Lesson!=='undefined'){if(!st.lessonBtn){st.lessonBtn=Lesson.btn(o.lesson);$('#card').append(st.lessonBtn);}Lesson.maybe(o.lesson);}\n")
s=rep(s,"  answerFlow({field:f,correct:p.answer,check:checkFor(p,p.checkMethod),diag:v=>diagArith(p,v),reveal:v=>revealArith(p,v),onDone:res=>complete(p,res)});}",
 "  answerFlow({field:f,correct:p.answer,check:checkFor(p,p.checkMethod),quick:!isDec&&Math.max(...p.nums.map(Number))>=1000?estimateArith(p):null,lesson:p.op==='−'?'borrow':null,diag:v=>diagArith(p,v),reveal:v=>revealArith(p,v),onDone:res=>complete(p,res)});}")
# Dojo Flash facts in levels and quests once the daily Dojo is done
s=rep(s,"({arith:renderArith,fact:renderFact,area:renderArea,word:renderWord,table:renderTable,bug:renderBug})[p.kind](p,ATT);","({arith:renderArith,fact:renderFact,dfact:renderDFact,area:renderArea,word:renderWord,table:renderTable,bug:renderBug})[p.kind](p,ATT);")
s=rep(s,"const factBig=p.kind==='fact'&&typeof InkBox","const factBig=(p.kind==='fact'||p.kind==='dfact')&&typeof InkBox")
s=rep(s,"function describe(p){if(p.kind==='arith')","function describe(p){if(p.kind==='dfact')return factExpr(p.f);if(p.kind==='arith')")
s=rep(s,"function startRun(spec){$('#scr-level').classList.remove('dojo');","function startRun(spec){$('#scr-level').classList.remove('dojo');if(typeof FactMix!=='undefined'&&FactMix.on()&&(spec.mode==='level'||spec.mode==='quest')&&!spec.boss&&!spec.packId)spec.problems=FactMix.mix(spec.problems,spec.mode);")
s=rep(s,"window.__nk={Cin3,","window.__nk={Dungeon,DivLessons,DIV_WORLD,genDiv,genMul,divPlan,Slip,Lab,nextProblem:()=>nextProblem(),showRep:(...a)=>showReport(...a),Cin3,")
# --- slip finder: on a long-problem miss, glow the column + a one-line tip (miss 1), fix one column (miss 2)
s=rep(s,"st.tries++;a.tries.push({a:v,ms:Date.now()-a.t0,chk:st.checkedSince});st.checkedSince=false;","st.tries++;a.tries.push({a:v,ms:Date.now()-a.t0,chk:st.checkedSince});st.checkedSince=false;if(o.slip&&typeof Slip!=='undefined')Slip.after(eqNum(v,o.correct));")
s=rep(s,"Talk.onWrong({skill:a.skill,kind:a.kind,tags:dg.tags,tries:st.tries,checked:a.tries[a.tries.length-1].chk});","if(!(o.slip&&st.tries<=2))Talk.onWrong({skill:a.skill,kind:a.kind,tags:dg.tags,tries:st.tries,checked:a.tries[a.tries.length-1].chk});")
s=rep(s,"if(o.lesson&&typeof Lesson!=='undefined'){if(!st.lessonBtn){st.lessonBtn=Lesson.btn(o.lesson);$('#card').append(st.lessonBtn);}Lesson.maybe(o.lesson);}\n",
 "if(o.lesson&&typeof Lesson!=='undefined'){if(!st.lessonBtn){st.lessonBtn=Lesson.btn(o.lesson);$('#card').append(st.lessonBtn);}Lesson.maybe(o.lesson);}\n    if(o.slip&&st.tries<=2&&typeof Slip!=='undefined'&&Slip.show(o.slip,v,st.tries,o))return;\n")
s=rep(s,"else{closeCheck();Pad.lock(o.field);say('Let’s look at it together.','info');","else{closeCheck();if(typeof Slip!=='undefined')Slip.clear();Pad.lock(o.field);say('Let’s look at it together.','info');")
s=rep(s,"diag:v=>diagArith(p,v),reveal:v=>revealArith(p,v),onDone:res=>complete(p,res)});}","slip:{P:p},diag:v=>diagArith(p,v),reveal:v=>revealArith(p,v),onDone:res=>complete(p,res)});}")
s=rep(s,"reveal:()=>areaGrid(p,true).node,extraBtn,onDone:res=>complete(p,res)});","reveal:()=>areaGrid(p,true).node,extraBtn,slip:p.probe?null:{P:{op:'+',nums:allPartials(p).map(String),dp:0,answer:p.answer},area:true},onDone:res=>complete(p,res)});")
s=rep(s,"spec.problems=FactMix.mix(spec.problems,spec.mode);","spec.problems=FactMix.mix(spec.problems,spec.mode);if(typeof Slip!=='undefined'&&(spec.mode==='level'||spec.mode==='quest')&&!spec.boss&&!spec.packId)spec.problems=Slip.drillMix(spec.problems,spec);")
# --- division: long division + standard-algorithm multiplication problem kinds; long division gets the whole card (no scratch paper)
s=rep(s,"dfact:renderDFact,area:renderArea,","dfact:renderDFact,div:renderDiv,mul:renderMul,ff:renderFF,area:renderArea,")
s=rep(s,"  $('.left').classList.toggle('split',card.classList.contains('tall'));Grip.restore();\n","  $('.left').classList.toggle('split',card.classList.contains('tall'));Grip.restore();$('#scr-level').classList.toggle('divmode',p.kind==='div');\n")
open(p,'w').write(s);print('ink ok',len(s))
