/* =========================================================
   Brave: a strong, safe reason to pick the hard problem.
   - Ellie's Dare: after a solved problem in a level or quest, Ellie sometimes offers to swap the next one for a harder
     version (Hero: one level up, ×3 coins; Legend: two levels up, ×5 coins). "Not now" costs nothing.
   - Gems 💎 come only from hard work: Dares and the Long Division Workshop. A miss on a dare never lowers his level,
     and a real try on a Legend still earns a brave gem.
   - The Legend Vault (a Shop tab) sells things coins can't buy: legend outfits and capes, coin bags, and a real-world
     prize a grown-up honors (cfg.gemPrize = {gems, name}, or false to hide it).
   ========================================================= */
const Brave={
  st(){const s=state.brave=state.brave||{offered:0,taken:0,won:0,log:[]};state.gems=state.gems||0;return s;},
  // things only gems can buy (price 0 keeps them out of coin loot; they stay out of the coin tabs)
  VAULT:[
    {cat:'outfit',id:'dragon',name:'Dragon Knight',gems:20,B:'#1e9e5a',A:'#ffd23f',P:'#0f4d2e',K:'#2a1a0a'},
    {cat:'cape',id:'flame',name:'Flame cape',gems:15,c:'#ff5a1f'},
    {cat:'outfit',id:'lava',name:'Lava Lord',gems:30,B:'#d7263d',A:'#ff9f1c',P:'#3a0d12',K:'#1a0606'},
    {cat:'cape',id:'royal',name:'Royal cape',gems:25,c:'#8a2be2'},
    {cat:'outfit',id:'diamond',name:'Diamond Knight',gems:45,B:'#b9f3ff',A:'#ffffff',P:'#5aa9c9',K:'#1b3a4b'},
    {cat:'cape',id:'diamondc',name:'Diamond cape',gems:35,c:'#9be7ff'},
    {cat:'outfit',id:'shadowx',name:'Shadow Legend',gems:60,B:'#141428',A:'#b14dff',P:'#0a0a18',K:'#000000'}],
  isVault(cat,id){return this.VAULT.some(v=>v.cat===cat&&v.id===id);},
  prize(){if(cfg.gemPrize===false)return null;const p=cfg.gemPrize||{};return{gems:Number(p.gems)||50,name:String(p.name||'Pick dinner or dessert!')};},
  BAG:{gems:10,coins:150},
  // ---- gems
  add(n,why){if(!(n>0))return;this.st();state.gems+=n;const s=this.st();s.log.push({t:new Date().toISOString(),n,why});if(s.log.length>150)s.log.shift();saveState();this.chips();},
  chips(){document.querySelectorAll('.chip').forEach(ch=>{if(!ch.querySelector('.coin-ico')||ch.classList.contains('gem-chip'))return;let g=ch.nextElementSibling;
    if(!g||!g.classList.contains('gem-chip')){g=el('span',{class:'chip gem-chip',title:'Gems: earned only from Dares and the Workshop'});ch.after(g);}g.textContent='💎 '+(state.gems||0);});},
  // ---- Ellie's lines (recorded in her puppy voice: tut/a/brave-*.mp3)
  voice(k){if(state.mute)return;try{const a=new Audio('tut/a/brave-'+k+'.mp3');a.play().catch(()=>{});}catch(e){}},
  // ---- the dare: a harder version of the next problem
  KINDS:['arith','word','table','area','div','mul'],
  hardOf(p,k){const L=p.L||1;let T=Math.min(5,L+k);if(p.kind==='div'&&typeof Tut!=='undefined'&&!Tut.done())T=Math.min(T,2);if(T<=L)return null;const q=this.atLevel(p,T);
    return q&&(q.L||T)>L?q:null;},
  atLevel(p,T){let q=null;try{if(p.kind==='arith'||p.kind==='word'||p.kind==='table'){const g=GEN[p.skill];q=g&&g(T);}else if(p.kind==='area')q=genArea(T);else if(p.kind==='div')q=genDiv(T);else if(p.kind==='mul')q=genMul(T);}catch(e){}
    return q&&q.kind===p.kind?q:null;},
  eligible(){if(!run||!run.spec)return false;const sp=run.spec;if(!(sp.mode==='level'||sp.mode==='quest')||sp.boss||sp.packId)return false;
    const i=run.idx,p=run.queue[i];if(!p||i<1||p.twin||p.dare||(run.dareAsk||{})[i])return false;if(!this.KINDS.includes(p.kind))return false;
    const last=run.results[i-1];if(!last||!last.solved)return false;          // only on a roll: right after a solved problem
    if(i-(run.lastDare==null?-9:run.lastDare)<2)return false;return true;},   // never two in a row
  offer(go){const i=run.idx,p=run.queue[i];run.dareAsk=run.dareAsk||{};run.dareAsk[i]=1;
    const mega=Math.random()<0.3,k=mega?2:1;let q=this.hardOf(p,k),tier=mega?'legend':'hero';if(!q&&mega){q=this.hardOf(p,1);tier='hero';}if(!q)return go();
    run.lastDare=i;const s=this.st();s.offered++;saveState();const T=this.TIER[tier];this.voice(tier==='legend'?'offer-legend':'offer');Snd.zap(6);
    const first=!s.seen;s.seen=1;
    const take=()=>{overlay(null);q.dare=tier;q.L=q.L||p.L;q.L0=p.L||1;run.queue[i]=q;s.taken++;saveState();Snd.fanfare();this.voice('accept');go();},
      skip=()=>{overlay(null);Snd.tap();go();};
    overlay(el('div',{class:'modal dare-card dare-'+tier},
      el('div',{class:'dare-flame'},tier==='legend'?'💀':'🔥'),
      el('h2',null,tier==='legend'?'LEGEND DARE!':'Ellie’s Dare!'),
      el('p',null,tier==='legend'?'Swap the next one for a LEGEND problem: two levels harder.':'Swap the next one for a HERO problem: one level harder.'),
      el('div',{class:'dare-pay'},el('span',null,`🪙 ×${T.mult} coins`),el('span',null,`💎 +${T.gems}`),el('span',null,'💎 +1 more on the first try')),
      first?el('p',{class:'dare-why'},'Gems only come from Dares and the Workshop. Spend them in the Legend Vault in the Shop: gear coins can’t buy, and a real prize!'):null,
      el('p',{class:'dare-safe'},'A miss never lowers your level. Ellie helps like always.'),
      el('div',{class:'btns'},el('button',{class:'btn btn-green dare-go',type:'button',onclick:take},tier==='legend'?'💀 I’m a Legend!':'🔥 Take the dare!'),
        el('button',{class:'btn btn-dark',type:'button',onclick:skip},'Not now'))));},
  TIER:{hero:{mult:3,gems:1,name:'HERO DARE'},legend:{mult:5,gems:2,name:'LEGEND DARE'}},
  badge(){const p=run&&run.queue[run.idx],card=$('#card');if(!p||!p.dare||!card||card.querySelector('.dare-badge'))return;const T=this.TIER[p.dare];
    card.prepend(el('div',{class:'dare-badge dare-'+p.dare},`${p.dare==='legend'?'💀':'🔥'} ${T.name} · ×${T.mult} coins · 💎 +${T.gems}`));},
  // ---- the payout, on top of the normal coins
  paid(p,res,a){const T=this.TIER[p.dare],s=this.st();let coins=0,gems=0,head;
    if(res.solved){coins=(a.coins||0)*(T.mult-1);gems=T.gems+(res.firstTry?1:0);s.won++;head=res.firstTry?'FIRST-TRY DARE!':'DARE CRUSHED!';this.voice(res.firstTry?'win-first':'win');}
    else{coins=3;gems=p.dare==='legend'&&(a.nTries||0)>=2?1:0;head='BRAVE TRY!';this.voice('brave');}
    state.coins+=coins;run.coins+=coins;a.coins=(a.coins||0)+coins;a.gems=gems;
    s.log.push({t:new Date().toISOString(),tier:p.dare,skill:p.skill,L:p.L,solved:!!res.solved,firstTry:!!res.firstTry});if(s.log.length>150)s.log.shift();
    if(gems)this.add(gems,'dare-'+p.dare);saveState();updateTop();this.pop(head,res.solved?a.coins:coins,gems,p.dare);},
  pop(head,coins,gems,tier){const o=el('div',{class:'gem-pop'+(tier?' dare-'+tier:'')},el('b',null,head),
      el('div',{class:'gp-row'},coins?el('span',null,`+${coins} 🪙`):null,gems?el('span',{class:'gp-gem'},`+${gems} 💎`):null));
    for(let i=0;i<26;i++){const sp=el('i',{class:'gp-spark'});sp.style.setProperty('--a',(i*360/26)+'deg');sp.style.setProperty('--d',(120+Math.random()*160)+'px');sp.textContent=i%3?'✦':(gems?'💎':'🪙');o.append(sp);}
    setTimeout(()=>{document.body.append(o);try{Snd.gem();if(gems)Snd.fanfare();else Snd.coin();}catch(e){}setTimeout(()=>o.remove(),2600);},tier?650:0);},  // after the hit stamp
  // ---- the Legend Vault tab in the Shop
  vault(S){const grid=S.querySelector('.items');if(!grid)return;grid.innerHTML='';grid.classList.add('vault');const look=Object.assign({},heroLook());
    grid.append(el('div',{class:'vault-head'},el('b',null,`💎 ${state.gems||0} gems`),el('span',null,'Earn gems only from 🔥 Dares in levels and quests, and from the Long Division Workshop.')));
    const buy=(cost,fn)=>{if((state.gems||0)<cost){Snd.shield();return false;}state.gems-=cost;fn();saveState();Snd.gem();Snd.fanfare();return true;};
    const pr=this.prize();
    if(pr){const b=el('button',{class:'item vault-prize'+((state.gems||0)<pr.gems?' cant':''),type:'button',onclick:()=>{if(!buy(pr.gems,()=>{state.prizes=(state.prizes||[]).concat([{id:uid(),name:pr.name,at:new Date().toISOString(),status:'pending',from:'vault'}]);this.add(0);}))return;
        this.voice('prize');overlay(el('div',{class:'modal'},el('h2',null,'🏆 Real prize!'),el('p',null,`${pr.name} Show a grown-up to make it official.`),el('div',{class:'btns'},el('button',{class:'btn btn-green',type:'button',onclick:()=>{overlay(null);renderShop();}},'Yes!'))));}},
        el('div',{class:'vp-ic'},'🏆'),el('span',{class:'nm'},'Real-world prize'),el('span',{class:'dpw'},pr.name),el('span',{class:'pr'},`💎 ${pr.gems}`));grid.append(b);}
    grid.append(el('button',{class:'item'+((state.gems||0)<this.BAG.gems?' cant':''),type:'button',onclick:()=>{if(buy(this.BAG.gems,()=>{state.coins+=this.BAG.coins;}))renderShop();}},
      el('div',{class:'vp-ic'},'💰'),el('span',{class:'nm'},`Coin bag: +${this.BAG.coins}`),el('span',{class:'dpw'},'For anything in the Shop'),el('span',{class:'pr'},`💎 ${this.BAG.gems}`)));
    for(const it of this.VAULT){const key=it.cat+':'+it.id,own=state.owned.includes(key),eq=(look[it.cat]||'none')===it.id;
      const ic=el('canvas',{width:96,height:96});const c=ic.getContext('2d');c.imageSmoothingEnabled=false;drawHero(c,24,12,4,Object.assign({},look,{[it.cat]:it.id}),'stand',0);
      grid.append(el('button',{class:'item legend'+(eq?' eq':'')+(!own&&(state.gems||0)<it.gems?' cant':''),type:'button',onclick:()=>{
          if(own){ShopX.equip(it.cat,it);saveState();Snd.tap();renderShop();return;}
          if(buy(it.gems,()=>{state.owned.push(key);ShopX.equip(it.cat,it);}))renderShop();}},
        ic,el('span',{class:'nm'},it.name),el('span',{class:'dpw'},'Legend · coins can’t buy this'),el('span',{class:'pr'},eq?'Wearing':own?'Owned · tap to wear':`💎 ${it.gems}`)));}},
};
// the vault items join the catalog (so the hero can wear them everywhere) once the catalog exists
setTimeout(()=>{try{for(const v of Brave.VAULT){const L=CATALOG[v.cat];if(!L.some(x=>x.id===v.id))L.push(Object.assign({price:0,vault:1},v));}}catch(e){console.error(e);}},0);
// ---- hooks
{const _np=nextProblem;nextProblem=function(){if(run&&run.idx<run.queue.length&&Brave.eligible()){const R=run;return Brave.offer(()=>{if(run===R)_np.apply(this,arguments);Brave.badge();});}
  const r=_np.apply(this,arguments);try{Brave.badge();}catch(e){}return r;};}
{const _cp=complete;complete=function(p,res){const dare=p&&p.dare,sk=dare?getSkill(p.skill):null,r0=sk&&sk.r,n0=run&&run.queue.length;if(dare&&ATT)ATT.dare=dare;
  const out=_cp.apply(this,arguments);
  // the practice twin after a missed dare comes at his own level, not the dare's
  if(dare&&run&&run.queue.length>n0){const i=run.queue.length-1,tw=run.queue[i];if(tw&&tw.twin){const t2=Brave.atLevel(p,p.L0||1);if(t2){t2.twin=true;run.queue[i]=t2;}}}
  if(dare){if(sk&&sk.r<r0)sk.r=r0;try{Brave.paid(p,res,ATT);}catch(e){console.error(e);}}
  return out;};}
{const _ut=updateTop;updateTop=function(){const r=_ut.apply(this,arguments);try{Brave.chips();}catch(e){}return r;};}
{const _rm=renderMap;renderMap=function(){const r=_rm.apply(this,arguments);try{Brave.chips();}catch(e){}return r;};}
{const _rs=renderShop;renderShop=function(){const vault=shopTab==='vault';if(vault)shopTab='outfit';
  // the coin tabs never list vault items
  const saved={};for(const k of ['outfit','cape']){saved[k]=CATALOG[k];CATALOG[k]=CATALOG[k].filter(x=>!x.vault);}
  try{_rs.apply(this,arguments);}finally{for(const k in saved)CATALOG[k]=saved[k];}
  if(vault)shopTab='vault';
  const S=$('#scr-shop'),tabs=S.querySelector('.tabs');if(tabs){if(vault)tabs.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
    tabs.append(el('button',{class:'tab vault-tab'+(vault?' on':''),type:'button',onclick:()=>{shopTab='vault';renderShop();}},'💎 Legend Vault'));}
  if(vault)Brave.vault(S);Brave.chips();};}
window.__brave=Brave;
Object.defineProperty(window,'__bcomplete',{get:()=>complete});
