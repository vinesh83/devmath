s=open('number-knight.v4.bak.html').read()
def rep(s,a,b,count=1):
    assert a in s, 'MISSING: '+a[:100]; return s.replace(a,b,count)
s=rep(s,"</style>",open('npc.css').read()+"</style>")
s=rep(s,"/* =========================================================\n   Keypad + fields",open('fx-npc.js').read()+"\n/* =========================================================\n   Keypad + fields")
s=rep(s,"function boot(){Scratch.init();Battle.init();Cine.init();","function boot(){Scratch.init();Battle.init();Cine.init();Talk.init();")
# hooks
s=rep(s,"  if(!state.howtoSeen){showHowTo(()=>nextProblem());}else nextProblem();}",
        "  {const go=()=>{if(!state.howtoSeen){showHowTo(()=>nextProblem());}else nextProblem();};const pr=Talk.onRunStart(spec);if(pr)pr.then(go);else go();}}")
s=rep(s,"  if(boss&&!(opt&&opt.go)){openMechBay(()=>{Cine.mechLaunch(glitchForm()).then(()=>startLevel(w,li,{go:true}));});return;}",
        "  if(boss&&!(opt&&opt.go)){Talk.bossBrief(w).then(()=>openMechBay(()=>{Cine.mechLaunch(glitchForm()).then(()=>startLevel(w,li,{go:true}));}));return;}")
s=rep(s,"  Data.logAttempt(Object.assign({},a));saveState();updateTop();\n","  Talk.onDone(p,res,a);Data.logAttempt(Object.assign({},a));saveState();updateTop();\n")
s=rep(s,"a.errors=(a.errors||[]);a.errors.push({a:v,tags:dg.tags,places:dg.places});",
        "a.errors=(a.errors||[]);a.errors.push({a:v,tags:dg.tags,places:dg.places});Talk.onWrong({skill:a.skill,kind:a.kind,tags:dg.tags,tries:st.tries,checked:a.tries[a.tries.length-1].chk});")
s=rep(s,"tags.push('neighborFact');a.errors=(a.errors||[]).concat([{a:v,tags}]);",
        "tags.push('neighborFact');a.errors=(a.errors||[]).concat([{a:v,tags}]);Talk.onWrong({skill:'fact',kind:'fact',tags,tries});")
s=rep(s,"ATT.errors=(ATT.errors||[]).concat([{step:true,a:v,tags:diag(v).tags}]);",
        "ATT.errors=(ATT.errors||[]).concat([{step:true,a:v,tags:diag(v).tags}]);Talk.onWrong({skill:'word',kind:'step',tags:diag(v).tags,tries:1,checked:!!ATT.checkUsed});")
s=rep(s,"(async()=>{await Battle.ko();await openChest(chestCtx);Snd.fanfare();overlay(m);})();}",
        "(async()=>{await Battle.ko();await openChest(chestCtx);await Talk.afterRun(sp);Snd.fanfare();overlay(m);})();}")
s=rep(s,"onclick:()=>{Snd.init();Cine.trailer(w).then(()=>kingdomCard(w));}}","onclick:()=>{Snd.init();Cine.trailer(w).then(()=>Talk.meetHome(w.id)).then(()=>kingdomCard(w));}}")
s=rep(s,"onclick:()=>{Snd.init();campCard();}}","onclick:()=>{Snd.init();Talk.meet('knight').then(campCard);}}")
s=rep(s,"    el('button',{class:'icon-btn',type:'button',onclick:()=>{renderShop();show('scr-shop');}},'Shop'),",
        "    el('button',{class:'icon-btn',type:'button',onclick:()=>{renderShop();show('scr-shop');Talk.meet('pip');}},'Shop'),\n    el('button',{class:'icon-btn',type:'button',onclick:()=>Talk.book()},'Allies'),")
s=rep(s,"  requestAnimationFrame(()=>{ow.scrollLeft=at.x*SC-ow.clientWidth/2;ow.scrollTop=at.y*SC-ow.clientHeight/2;});}",
        "  requestAnimationFrame(()=>{ow.scrollLeft=at.x*SC-ow.clientWidth/2;ow.scrollTop=at.y*SC-ow.clientHeight/2;});Talk.onMap();}")
# how-to mentions allies
s=rep(s,"    el('li',null,el('b',null,'Fill the SUPER meter'),' and tap SUPER for a giant special move.')),",
        "    el('li',null,el('b',null,'Fill the SUPER meter'),' and tap SUPER for a giant special move.'),\n    el('li',null,el('b',null,'Allies'),' pop up with tips. Tap a tip to close it.')),")
s=rep(s,"Battle,Cine,","Battle,Cine,Talk,NPCS,")
open('number-knight.html','w').write(s)
print('ok',len(s))
