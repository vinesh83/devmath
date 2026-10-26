/* =========================================================
   Ellie's tips: when Dev comes back to the map, Ellie radios in with where she thinks he should practice.
   She reads his last two weeks of attempts: the skill he misses most (or hasn't visited in a while) picks the
   place. On the 3D island a golden arrow marks it and a screen arrow points the way; on the 2D map the place glows.
   The weekly coach can override her pick with cfg.ellieTip = {site, say, until}. Tips and follow-through are
   saved to state.ellieLog for the coach reports.
   ========================================================= */
const Tips={
  SITE:{add:'canyon',sub:'canyon',dec_add:'docks',dec_sub:'docks',fact:'forge',mul:'forge',area:'castle',word:'tower',table:'tower',div:'dungeon',ff:'dungeon',dojo:'dojo'},
  SKILL:{add:'Big adding',sub:'Big subtracting',dec_add:'Decimal adding',dec_sub:'Decimal subtracting',fact:'Times facts',mul:'Multiplying',
    area:'Area models',word:'Word problems',table:'Reading tables',div:'Dividing',ff:'Flipping times facts into division'},
  GAP:20*60*1000,
  name(){return (state.hero&&state.hero.name)||'buddy';},
  site(id){return Isle.sites().find(s=>s.id===id);},
  // a place Dev can actually enter right now
  open(id){const s=this.site(id),m=Isle.map();if(!s||!m)return false;
    if(s.world){const n=m.querySelector(`[aria-label="${s.name} level 1"]`);return !!n&&!n.classList.contains('locked');}
    return !!m.querySelector(s.q||'.ow-dojo');},
  pick(){const today=dayStr(),c=cfg.ellieTip;
    if(c&&c.site&&(!c.until||today<=c.until)&&this.open(c.site))return {site:c.site,why:'coach',say:c.say};
    if(typeof Dojo!=='undefined'&&Dojo.timesDue&&Dojo.timesDue())return {site:'dojo',why:'times',skill:'fact'};
    const cut=new Date(Date.now()-14*864e5).toISOString().slice(0,10),by={};
    for(const a of Local.log){if(!a.day||a.day<cut||!this.SITE[a.skill])continue;(by[a.skill]=by[a.skill]||[]).push(a);}
    const focus=(cfg.focus||[]),best=[];
    for(const [k,L] of Object.entries(by)){if(L.length<3||!this.open(this.SITE[k]))continue;const r=L.slice(-10),miss=1-r.filter(a=>a.firstTry).length/r.length;
      const last=L[L.length-1].day,days=Math.round((new Date(today)-new Date(last))/864e5);
      const score=miss+(days>=4?0.35:0)+(focus.includes(k)?0.3:0);best.push({skill:k,site:this.SITE[k],miss,days,score,why:miss>=0.35?'wobbly':days>=4?'stale':'strong'});}
    best.sort((a,b)=>b.score-a.score);
    if(best[0]&&best[0].score>=0.3)return best[0];
    // nothing shaky: suggest a place he hasn't tried yet
    const fresh=['canyon','castle','forge','tower','docks','dungeon'].find(id=>this.open(id)&&!Object.keys(by).some(k=>this.SITE[k]===id));
    return fresh?{site:fresh,why:'fresh'}:null;},
  line(p){const nm=this.name(),n0=(this.site(p.site)||{}).name||'there',pl=/^the /i.test(n0)?n0:'the '+n0,sk=this.SKILL[p.skill]||'That skill';
    const fol=Isle.on()&&Isle.w?'Follow my golden arrow!':'Look for the glowing paw!';
    if(p.why==='coach'&&p.say)return p.say;
    return {times:`[excited] ${nm}! Quick Times training at the Dojo first, then adventure. ${fol}`,
      wobbly:`[gently] Psst, ${nm}. ${sk} got a little wobbly. Let's practice at ${pl}. ${fol}`,
      stale:`[curious] Hey ${nm}! We haven't been to ${pl} in ${p.days} days. Let's keep ${sk.toLowerCase()} sharp. ${fol}`,
      strong:`[happily] ${nm}, you're on fire! Want a challenge at ${pl}? ${fol}`,
      fresh:`[excited] ${nm}! I sniffed out a place we haven't tried: ${pl}. Want to explore? ${fol}`,
      coach:`[happily] ${nm}! Let's go to ${pl} next. ${fol}`}[p.why];},
  // where the 2D map button for a place is
  btnFor(id){const s=this.site(id),m=Isle.map();if(!s||!m)return null;if(s.world||s.aria)return m.querySelector(`.ow-castle[aria-label="${s.name}"]`);return m.querySelector(s.q||'.ow-dojo');},
  mark(){const m=Isle.map();if(!m)return;m.querySelectorAll('.ellie-pick').forEach(x=>x.classList.remove('ellie-pick'));const t=state.tip;
    const live=t&&t.day===dayStr()&&!t.done;if(live){const b=this.btnFor(t.site);if(b)b.classList.add('ellie-pick');}
    if(Isle.w&&Isle.w.guide&&(Isle.w._g||null)!==(live?t.site:null)){Isle.w._g=live?t.site:null;Isle.w.guide(Isle.w._g);}},
  ready(){const m=Isle.map();return m&&!m.hidden&&$('#overlay').hidden&&$('#talk').hidden&&$('#cine').hidden&&!document.querySelector('.vp,#cine3d')
    &&!(Isle.w&&Isle.w.fly)&&!(typeof Surprise!=='undefined'&&Surprise.due&&Surprise.due());},
  maybe(){if(this.tm||Date.now()-(state.tipAt||0)<this.GAP||Local.log.length<5)return;
    this.tm=setTimeout(()=>{this.tm=null;if(!this.ready())return;const p=this.pick();if(!p)return;const said=this.line(p);
      state.tipAt=Date.now();state.tip={site:p.site,skill:p.skill||null,why:p.why,day:dayStr(),t:new Date().toISOString(),done:false};
      state.ellieLog=(state.ellieLog||[]).concat([{t:state.tip.t,day:state.tip.day,kind:'tip',site:p.site,skill:p.skill||null,why:p.why,reply:Walkie.clean(said)}]).slice(-200);saveState();
      Walkie.btn();Walkie.bubble('ellie',Walkie.clean(said));const row=el('div',{class:'ellie-row ellie-gorow'});Walkie.panel.append(row);
      const go=el('button',{class:'ellie-go',type:'button'},'Take me there ➜');go.addEventListener('click',()=>{const s=this.site(p.site);if(!s)return;if(Isle.on()&&Isle.w)Isle.enter(s);else{const x=this.btnFor(p.site);x&&x.click();}});row.append(go);
      Walkie.speak(said,1);this.mark();},3500);},
  // he went where Ellie pointed
  went(id){const t=state.tip;if(!t||t.done||t.site!==id)return;t.done=true;
    state.ellieLog=(state.ellieLog||[]).concat([{t:new Date().toISOString(),day:dayStr(),kind:'tip-followed',site:id}]).slice(-200);saveState();this.mark();},
};
{const _rm=renderMap;renderMap=function(){_rm.apply(this,arguments);try{Tips.mark();Tips.maybe();}catch(e){console.error(e);}};}
// a tap on a 2D map place (the island's doors press these same buttons)
document.addEventListener('click',e=>{try{const m=Isle.map();if(!m||!m.contains(e.target))return;const b=e.target.closest('button,[aria-label]');if(!b)return;
  for(const s of Isle.sites()){const hit=(s.q&&b.matches(s.q))||((s.world||s.aria)&&(b.getAttribute('aria-label')||'').startsWith(s.name));if(hit){Tips.went(s.id);break;}}}catch(err){}},true);
window.__tips=Tips;
