/* =========================================================
   Coach sync: saves Dev's results to a private GitHub repo that Claude Code reads
   Pair once with  ...devmath/#sync=TOKEN  (or paste the token in Report)
   ========================================================= */
function reportPayload(){const L=Local.log;
  return {app:'number-knight',v:2,generated:new Date().toISOString(),hero:state.hero&&state.hero.name,coins:state.coins,streak:state.streak,totals:state.totals,
    skills:state.skills,methods:state.methods,facts:state.facts,prog:state.prog,packsDone:state.packsDone,
    dojo:state.dojo?{belts:state.dojo.belts,today:state.dojo.today,medals:state.dojo.medals,bolts:state.dojo.bolts,bestBolt:state.dojo.bestBolt,facts:state.dojo.facts}:null,
    npcMet:state.npc&&state.npc.met,screenTime:state.st||null,pet:state.hero&&state.hero.pet,inkCheck:state.inkStats||null,lab:state.lab||null,slips:(state.slipLog||[]).slice(-200),squash:state.dojo&&state.dojo.bestSquash,sessions:Local.sess.slice(-60),log:L.slice(-300),
    // full copy of his progress so a deleted or new install can be restored (the grown-up PIN stays off the backup)
    backup:Object.assign(JSON.parse(JSON.stringify(state)),{parentPin:undefined})};}
// how much progress a state (or a report) holds; used so a fresh install never overwrites a richer backup
function progressScore(x){if(!x)return 0;const d=x.dojo||{};return Object.keys(d.facts||{}).length+((x.totals&&x.totals.problems)||0)+Object.values(d.belts||{}).filter(b=>b&&b.earned).length*20;}
const Sync={cfg:lsGet('nk-sync',null),busy:false,last:lsGet('nk-sync-last',null),err:null,lastTry:0,sent:lsGet('nk-sync-h',{}),
  pair(){const src=decodeURIComponent(location.hash+'&'+location.search);if(!/sync=/.test(src))return;
    const tok=(src.match(/(github_pat_[A-Za-z0-9_]+|gh[pousr]_[A-Za-z0-9]+)/)||[])[1],rp=(src.match(/repo=([\w.-]+\/[\w.-]+)/)||[])[1];
    try{history.replaceState(null,'',location.pathname);}catch(e){}
    if(!tok){setTimeout(()=>Talk.say([['knight','Hmm, that sync link has no token in it. Ask a grown-up to paste the token in Report → Coach sync.']]),1500);return;}
    this.connect(tok,rp||null);this.lastTry=0;
    this.push().then(()=>setTimeout(()=>Talk.say([['knight',this.needRestore?'Coach sync found a backup of your progress! Ask a grown-up to tap Restore in Report → Coach sync.':'Coach sync is connected! Your training reports now go straight to your coach.']]),1200))
      .catch(e=>setTimeout(()=>Talk.say([['knight','Coach sync could not connect: '+e.message]]),1200));},
  init(){this.pair();window.addEventListener('hashchange',()=>this.pair());
    document.addEventListener('visibilitychange',()=>{if(document.hidden)this.kick(true);});
    setInterval(()=>this.kick(),60*1000);setTimeout(()=>this.kick(true),4000);},
  connect(token,repo){const m=String(token).match(/(github_pat_[A-Za-z0-9_]+|gh[pousr]_[A-Za-z0-9]+)/);if(m)token=m[1];this.cfg={token:token.trim(),repo:(repo||'vinesh83/devmath-data').trim()};lsSet('nk-sync',this.cfg);this.sent={};lsSet('nk-sync-h',{});this.kick(true);},
  disconnect(){this.cfg=null;lsSet('nk-sync',null);},
  on(){return !!(this.cfg&&this.cfg.token&&this.cfg.repo);},
  kick(force){if(!this.on()||this.busy||!navigator.onLine)return;const now=Date.now();if(!force&&now-this.lastTry<45000)return;this.lastTry=now;
    this.push().catch(e=>{this.err=String((e&&e.message)||e);});},
  b64(s){const b=new TextEncoder().encode(s);let bin='';for(let i=0;i<b.length;i+=0x8000)bin+=String.fromCharCode.apply(null,b.subarray(i,i+0x8000));return btoa(bin);},
  hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return (h>>>0).toString(36)+':'+s.length;},
  async put(path,obj,skipSame){const txt=JSON.stringify(obj,null,1),hh=this.hash(txt.replace(/"generated": ?"[^"]*"/,''));if(skipSame&&this.sent[path]===hh)return false;
    const url=`https://api.github.com/repos/${this.cfg.repo}/contents/${path}`,h={Authorization:'Bearer '+this.cfg.token,Accept:'application/vnd.github+json'};
    let sha=null;const g=await fetch(url+'?t='+Date.now(),{headers:h,cache:'no-store'});
    if(g.ok)sha=(await g.json()).sha;else if(g.status===401||g.status===403)throw new Error('The token was refused ('+g.status+'). Make a new one with Contents: Read and write.');
    else if(g.status!==404)throw new Error('GitHub said '+g.status);
    const body={message:`Sync ${path}`,content:this.b64(txt)};if(sha)body.sha=sha;
    const r=await fetch(url,{method:'PUT',headers:Object.assign({'Content-Type':'application/json'},h),body:JSON.stringify(body)});
    if(r.status===404)throw new Error('Repo '+this.cfg.repo+' not found, or the token cannot see it.');if(!r.ok)throw new Error('GitHub said '+r.status);
    this.sent[path]=hh;lsSet('nk-sync-h',this.sent);return true;},
  // read a file from the data repo (raw, so large files work)
  async get(path){const r=await fetch(`https://api.github.com/repos/${this.cfg.repo}/contents/${path}?t=${Date.now()}`,{headers:{Authorization:'Bearer '+this.cfg.token,Accept:'application/vnd.github.raw+json'},cache:'no-store'});
    if(r.status===404)return null;if(!r.ok)throw new Error('GitHub said '+r.status);return JSON.parse(await r.text());},
  // first sync on this install: if the coach backup has more progress than this iPad, hold off and offer a restore
  async guard(){if(lsGet('nk-sync-ok',null))return true;const r=await this.get('latest/report.json');
    if(r&&progressScore(r)>progressScore(state)+10){this.needRestore=r;return false;}lsSet('nk-sync-ok',1);this.needRestore=null;return true;},
  restore(r){const b=r.backup,pin=state.parentPin;
    if(b){Object.keys(state).forEach(k=>delete state[k]);Object.assign(state,b);}
    else{const keep=['coins','streak','totals','skills','methods','facts','prog','packsDone'];keep.forEach(k=>{if(r[k]!=null)state[k]=r[k];});
      if(r.hero&&state.hero)state.hero.name=r.hero;if(r.dojo){state.dojo=state.dojo||{};['belts','medals','bolts','bestBolt','facts'].forEach(k=>{if(r.dojo[k]!=null)state.dojo[k]=r.dojo[k];});
        if(r.dojo.today&&r.dojo.today.day===dayStr())state.dojo.today=r.dojo.today;}
      if(r.npcMet){state.npc=state.npc||{};state.npc.met=Object.assign({},r.npcMet,state.npc.met||{});}if(r.screenTime)state.st=r.screenTime;if(r.inkCheck)state.inkStats=r.inkCheck;}
    if(pin)state.parentPin=pin;else delete state.parentPin;
    const seen=new Set(Local.log.map(x=>x.ts));Local.log=(r.log||[]).filter(x=>!seen.has(x.ts)).concat(Local.log).sort((a,c)=>a.ts<c.ts?-1:1);lsSet('nk-log',Local.log);
    const sid=new Set(Local.sess.map(x=>x.id));Local.sess=(r.sessions||[]).filter(x=>!sid.has(x.id)).concat(Local.sess);lsSet('nk-sessions',Local.sess);
    saveState();lsSet('nk-sync-ok',1);this.needRestore=null;this.sent={};lsSet('nk-sync-h',{});},
  async push(){this.busy=true;this.err=null;try{
      if(!(await this.guard())){this.err='Found a backup with more progress. Restore it in Report → Coach sync.';return;}
      const days=[...new Set(Local.log.map(x=>x.day).concat(Local.sess.map(s=>s.day)))].filter(Boolean).sort().slice(-2);
      for(const d of days)await this.put(`days/${d}.json`,{day:d,attempts:Local.log.filter(x=>x.day===d),sessions:Local.sess.filter(s=>s.day===d)},true);
      // never let an old copy (a forgotten Safari tab, another device) overwrite newer progress from his main app
      const mine=reportPayload(),myLast=(Local.log[Local.log.length-1]||{}).ts||'';let remote=null;try{remote=await this.get('latest/report.json');}catch(e){}
      const rLast=remote&&remote.log&&remote.log.length?remote.log[remote.log.length-1].ts||'':'';
      if(remote&&rLast>myLast&&progressScore(remote)>progressScore(state)+10){this.stale=true;await this.put('stale/report.json',mine,true);}
      else{this.stale=false;await this.put('latest/report.json',mine,true);}
      this.last=new Date().toISOString();lsSet('nk-sync-last',this.last);}finally{this.busy=false;}},
  block(){const st=el('p',{class:'tiny-ok'},this.on()?(this.err?'Sync problem: '+this.err:this.last?'Last sync: '+new Date(this.last).toLocaleString():'Connected. First sync coming up.'):'Not connected.');
    if(this.on()&&this.needRestore){const r=this.needRestore,n=Object.keys((r.dojo&&r.dojo.facts)||{}).length;
      return el('div',{class:'syncbox restorebox'},el('p',null,el('b',null,'Backup found! '),`${r.hero||'Hero'} · ${n} facts tracked · ${r.coins||0} coins · saved ${new Date(r.generated).toLocaleString()}`),
        el('p',{class:'tiny-ok'},'This iPad has less progress than the backup. Restore it to pick up where Dev left off.'),
        el('div',{class:'btns'},el('button',{class:'btn btn-green',type:'button',onclick:()=>Parent.guard(()=>{this.restore(r);location.replace(location.pathname);})},'Restore progress'),
          el('button',{class:'btn btn-dark',type:'button',onclick:()=>Parent.guard(()=>{lsSet('nk-sync-ok',1);this.needRestore=null;showReport();})},'Start fresh instead')));}
    if(this.on())return el('div',{class:'syncbox'},el('p',null,el('b',null,'Coach sync: '),'on → '+this.cfg.repo),st,
      el('div',{class:'btns'},el('button',{class:'btn btn-blue',type:'button',onclick:async()=>{st.textContent='Syncing…';this.lastTry=0;try{await this.push();if(this.needRestore){showReport();return;}st.textContent='Synced just now.';}catch(e){st.textContent='Sync problem: '+e.message;}}},'Sync now'),
        el('button',{class:'btn btn-dark',type:'button',onclick:()=>Parent.guard(()=>{this.disconnect();showReport();})},'Disconnect')));
    const tok=el('input',{type:'password',placeholder:'Paste the GitHub token (github_pat_…)',autocomplete:'off',class:'syncin'}),
      repo=el('input',{type:'text',value:'vinesh83/devmath-data',autocomplete:'off',class:'syncin'});
    return el('div',{class:'syncbox'},el('p',null,el('b',null,'Coach sync (for grown-ups): '),'send results to Claude automatically.'),tok,repo,
      el('div',{class:'btns'},el('button',{class:'btn btn-blue',type:'button',onclick:async()=>{if(!tok.value.trim())return;this.connect(tok.value,repo.value);st.textContent='Connecting…';
        try{this.lastTry=0;await this.push();if(this.needRestore){showReport();return;}st.textContent='Connected and synced!';}catch(e){st.textContent='Sync problem: '+e.message;}}},'Connect')),st);}
};

/* Sync warning: if this copy of the app is not connected, say so on the map so a grown-up notices.
   (On iPad, the home-screen app keeps its own storage, separate from Safari, so it must be connected on its own.) */
const SyncBadge={el:null,
  tick(){const map=$('#scr-map');if(!map)return;if(!this.el){this.el=el('button',{class:'sync-badge',type:'button'},'⚠️ Coach sync is OFF on this copy · grown-up: tap to connect');tapify(this.el,()=>showReport());map.append(this.el);}
    this.el.hidden=Sync.on()&&!Sync.stale;this.el.textContent=Sync.stale?'⚠️ This copy of the app is OUT OF DATE · use the home-screen app':'⚠️ Coach sync is OFF on this copy · grown-up: tap to connect';},
  init(){this.tick();setInterval(()=>this.tick(),5000);}};
setTimeout(()=>{try{SyncBadge.init();}catch(e){}},1500);
