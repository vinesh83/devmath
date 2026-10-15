/* =========================================================
   Learning Lab: builds a model of how Dev learns.
   1. Hint experiments: on a miss, the game rotates WHICH picture hint he gets (blocks, number line, ten-frame,
      fact family, skip counting, split-it). It scores each one by (a) did his retry work, and (b) does he still
      know the fact on a later day. Over time it favors what works for him (a "multi-armed bandit").
   2. Strategy check-ins: now and then after a right answer, "How did you get it?" (knew it / counted / trick / guessed).
   3. "Which made more sense?": sometimes after a round, two hint pictures side by side; he picks.
   4. Brain Lab: a 10-minute session a grown-up starts from the Report: strategy inventory, explanation showdown,
      a small learn-and-test experiment, and a short interview.
   Everything is stored in state.lab and synced with the coach report.
   ========================================================= */
const Lab={
  st(){const L=state.lab=state.lab||{v:1,arms:{},pend:{},strat:[],pref:[],sessions:[],retry:[]};L.arms=L.arms||{};L.pend=L.pend||{};L.strat=L.strat||[];L.pref=L.pref||[];L.sessions=L.sessions||[];L.retry=L.retry||[];return L;},
  ARMS:{'+':['blocks','line','tenframe'],'−':['blocks','line','family'],'×':['blocks','skip','split'],'÷':['blocks','family'],'+?':['blocks','line','family'],'−?':['blocks','family']},
  NAMES:{blocks:'Blocks',line:'Number line',tenframe:'Ten-frame',family:'Fact family',skip:'Skip counting',split:'Split it'},
  ok(arm,f){const {op,a,b}=f;if(arm==='tenframe'){const hi=Math.max(a,b),lo=Math.min(a,b);return op==='+'&&hi<10&&hi+lo>10;}
    if(arm==='split'){return op==='×'&&[a,b].some(n=>n>=6&&n<=9||n===4||n===8);}
    if(arm==='line'){const span=op==='+'?Math.min(a,b):op==='−'?b>0?a-b:0:op==='+?'?b-a:a-b;return span>0&&span<=12;}
    return true;},
  // ---------- Thompson sampling over hint types
  gam(k){if(k<1){return this.gam(k+1)*Math.pow(Math.random(),1/k);}const d=k-1/3,c=1/Math.sqrt(9*d);for(;;){let x,v;do{x=this.norm();v=1+c*x;}while(v<=0);v=v*v*v;const u=Math.random();if(u<1-0.0331*x*x*x*x||Math.log(u)<0.5*x*x+d*(1-v+Math.log(v)))return d*v;}},
  norm(){const u=1-Math.random(),v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);},
  beta(a,b){const x=this.gam(a),y=this.gam(b);return x/(x+y);},
  arm(op,arm){const A=this.st().arms;A[op]=A[op]||{};return A[op][arm]=A[op][arm]||{n:0,ra:1,rb:1,ta:1,tb:1};},
  choose(f){const op=f.op,cands=(this.ARMS[op]||['blocks']).filter(a=>this.ok(a,f));if(!cands.length)return 'blocks';
    const least=Math.min(...cands.map(a=>this.arm(op,a).n));if(least<4)return pick(cands.filter(a=>this.arm(op,a).n===least)); // try each a few times first
    let best=cands[0],bs=-1;for(const a of cands){const s=this.arm(op,a),v=0.4*this.beta(s.ra,s.rb)+0.6*this.beta(s.ta,s.tb);if(v>bs){bs=v;best=a;}}return best;},
  hint(f){const arm=this.choose(f);let el=null;try{el=this.render(arm,f);}catch(e){el=null;}if(!el){el=Blocks.hint(f);return el?{el,arm:'blocks'}:null;}return {el,arm};},
  noteRetry(f,arm,ok){if(!arm)return;const s=this.arm(f.op,arm);s.n++;if(ok)s.ra++;else s.rb++;const L=this.st();L.pend[f.key]={arm,op:f.op,day:dayStr()};
    L.retry=L.retry.concat([{t:new Date().toISOString(),key:f.key,op:f.op,arm,ok}]).slice(-300);saveState();},
  // the next first try on a LATER day tells us if the hint stuck
  noteFirst(f,ok){const L=this.st(),p=L.pend[f.key];if(!p||p.day===dayStr())return;const s=this.arm(p.op,p.arm);if(ok)s.ta++;else s.tb++;delete L.pend[f.key];saveState();},
  // ---------- the hint pictures (never show the answer)
  box(svgOrEl,text){return el('div',{class:'bk-box bk-hint lab-hint'},svgOrEl,text?el('p',{class:'bk-say'},text):null);},
  svg(w,h){const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox',`0 0 ${w} ${h}`);s.setAttribute('class','lab-svg');return s;},
  add(s,tag,at,txt){const e=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const k in at)e.setAttribute(k,at[k]);if(txt!=null)e.textContent=txt;s.append(e);return e;},
  render(arm,f){const {op,a,b}=f;
    if(arm==='blocks')return Blocks.hint(f);
    if(arm==='line'){let start,end,txt;if(op==='+'){const hi=Math.max(a,b),lo=Math.min(a,b);start=hi;end=hi+lo;txt=`Start at ${hi}. Hop ${lo} time${lo===1?'':'s'}. Where do you land?`;}
        else if(op==='−'){start=b;end=a;txt=`Start at ${b}. Hop up to ${a}. How many hops?`;}else if(op==='+?'){start=a;end=b;txt=`Start at ${a}. Hop up to ${b}. How many hops?`;}else{start=b;end=a;txt=`Start at ${b}. Hop up to ${a}. How many hops?`;}
      const lo=Math.min(start,end)-1,hi=Math.max(start,end)+1,n=hi-lo,cw=Math.min(40,520/n),W=n*cw+40,s=this.svg(W,96),X=v=>20+(v-lo)*cw,hideEnd=op==='+';
      this.add(s,'line',{x1:X(lo),y1:70,x2:X(hi),y2:70,stroke:'#1d1f33','stroke-width':3});
      for(let v=lo;v<=hi;v++){this.add(s,'line',{x1:X(v),y1:63,x2:X(v),y2:77,stroke:'#1d1f33','stroke-width':v===start||v===end?3:1.5});
        if(v===start)this.add(s,'text',{x:X(v),y:93,class:'n b'},String(v));else if(v===end)this.add(s,'text',{x:X(v),y:93,class:'n o'},hideEnd?'?':String(v));}
      const dir=end>start?1:-1;for(let i=0;i<Math.abs(end-start);i++){const x0=X(start+i*dir),x1=X(start+(i+1)*dir);
        this.add(s,'path',{d:`M${x0} 63 Q ${(x0+x1)/2} ${30} ${x1} 63`,fill:'none',stroke:'#ff9f43','stroke-width':3,class:'lab-hop',style:`animation-delay:${0.3+i*0.28}s`});}
      this.add(s,'circle',{cx:X(start),cy:70,r:7,fill:'#5ab0ff'});return this.box(s,txt);}
    if(arm==='tenframe'){const hi=Math.max(a,b),lo=Math.min(a,b),mv=10-hi,rest=lo-mv,cs=26,s=this.svg(10*cs+20,2*cs+30);
      for(let r=0;r<2;r++)for(let c=0;c<10;c++){const x=10+c*cs,y=10+r*(cs+8);this.add(s,'rect',{x,y,width:cs-4,height:cs-4,rx:4,fill:'#fff',stroke:'#c9c3b0'});
        const fill=r===0?(c<hi?'#5ab0ff':'#ff9f43'):(c<rest?'#ff9f43':null);if(fill)this.add(s,'circle',{cx:x+cs/2-2,cy:y+cs/2-2,r:cs/2-6,fill,class:'lab-pop',style:`animation-delay:${(r*10+c)*0.04}s`});}
      return this.box(s,`Fill the first ten (${hi} + ${mv}). Then how many more?`);}
    if(arm==='family'){let top,l,txt;if(op==='−'){top=a;l=b;txt=`Think addition: ${b} + ? = ${a}`;}else if(op==='÷'){top=a;l=b;txt=`Think multiply: ${b} × ? = ${a}`;}else if(op==='+?'){top=b;l=a;txt=`Think: ${a} and what make ${b}?`;}else{top=a;l=b;txt=`Think: ${b} + ? = ${a}`;}
      const s=this.svg(220,150);this.add(s,'path',{d:'M110 18 L200 130 L20 130 Z',fill:'#fff6e0',stroke:'#ffb627','stroke-width':4,'stroke-linejoin':'round'});
      this.add(s,'text',{x:110,y:62,class:'tri'},String(top));this.add(s,'text',{x:58,y:120,class:'tri'},String(l));this.add(s,'text',{x:162,y:120,class:'tri q'},'?');
      this.add(s,'text',{x:110,y:146,class:'n'},op==='÷'||op==='×'?'× and ÷ family':'+ and − family');return this.box(s,txt);}
    if(arm==='skip'){const P=Blocks.mulPlan(a,b),row=el('div',{class:'lab-chips'});for(let i=1;i<P.rows;i++)row.append(el('span',{style:`animation-delay:${i*0.25}s`},String(P.by*i)));row.append(el('span',{class:'q',style:`animation-delay:${P.rows*0.25}s`},'?'));
      return this.box(row,`Count by ${P.by}s, ${P.rows} times.`);}
    if(arm==='split'){const n=[a,b].find(x=>x>=6&&x<=9),o=n?(n===a?b:a):null;
      if(n){const r=n-5,lines=el('div',{class:'lab-split'},el('div',null,`5 × ${o} = ${5*o}`),el('div',null,`${r} × ${o} = ${r*o}`),el('div',{class:'q'},'Put them together!'));return this.box(lines,`Split ${n} into 5 and ${r}.`);}
      const d=[a,b].find(x=>x===4||x===8),od=d===a?b:a;const lines=el('div',{class:'lab-split'},el('div',null,`2 × ${od} = ${2*od}`),el('div',{class:'q'},d===4?'Double it!':'Double it, then double again!'));return this.box(lines,`${d} is ${d===4?'2 doubled':'2 doubled, doubled'}.`);}
    return null;},
  // ---------- strategy check-ins
  wantStrat(sp,dj){if(sp.kind==='sprint'||dj.tired||this.st().off)return false;if((dj.stratN||0)>=3)return false;return Math.random()<0.22;},
  askStrat(card,f,lat,src,dj){return new Promise(res=>{dj.stratN=(dj.stratN||0)+1;const L=this.st();let done=false;
    const fin=s=>{if(done)return;done=true;clearTimeout(tm);box.remove();if(s){L.strat=L.strat.concat([{t:new Date().toISOString(),day:dayStr(),key:f.key,op:f.op,s,lat,src}]).slice(-500);saveState();if(s!=='skip')Snd.tap();}res();};
    const opt=(s,ic,txt)=>{const b=el('button',{class:'lab-sb',type:'button'},el('span',null,ic),txt);tapify(b,()=>fin(s));return b;};
    const box=el('div',{class:'lab-strat'},el('b',null,'How did you get it?'),el('div',{class:'lab-sbs'},opt('knew','⚡','I just knew it'),opt('counted','🖐️','I counted'),opt('trick','🧠','I used a trick'),opt('guess','🎲','I guessed')));
    (card.querySelector('.dj-expr')||card).after(box);const tm=setTimeout(()=>fin('skip'),7000);});},
  // ---------- "Which made more sense?" (at most twice a day)
  maybePref(dj){const L=this.st(),d=dayStr(),today=L.pref.filter(x=>x.day===d).length;if(today>=2||!dj.miss||!dj.miss.length||Math.random()<0.4)return Promise.resolve();
    const big=dj.miss.filter(x=>Math.max(x.a,x.b)>=5),f=big[big.length-1];if(!f)return Promise.resolve();const arms=shuffle((this.ARMS[f.op]||[]).filter(a=>this.ok(a,f)));if(arms.length<2)return Promise.resolve();
    return this.compare(f,arms.slice(0,2),'Which picture makes more sense?').then(ch=>{if(ch){L.pref=L.pref.concat([{t:new Date().toISOString(),day:d,key:f.key,op:f.op,arms:arms.slice(0,2),choice:ch,ctx:'round'}]).slice(-200);saveState();}});},
  compare(f,arms,q,extra){return new Promise(res=>{const cards=arms.map(a=>{let v=null;try{v=this.render(a,f);}catch(e){}const c=el('button',{class:'lab-card',type:'button'},el('div',{class:'lab-cardt'},this.NAMES[a]),v||el('div',null,'?'));tapify(c,()=>{overlay(null);Snd.tap();res(a);});return c;});
    const both=el('button',{class:'btn btn-dark',type:'button'},extra&&extra.bothLabel||'They’re the same to me');tapify(both,()=>{overlay(null);res('same');});
    overlay(el('div',{class:'modal lab-modal'},el('h2',null,q),el('p',{class:'lab-sub'},`${factExpr(f)} · tap the one you like best`),el('div',{class:'lab-cards n'+cards.length},...cards),el('div',{class:'btns'},both)));});},

  // ---------- Brain Lab (about 10 minutes, a grown-up starts it)
  async brainLab(){const L=this.st(),S={t:new Date().toISOString(),day:dayStr(),inventory:[],showdown:[],experiment:[],interview:{}};const held=typeof Pause!=='undefined'&&Pause.hold&&Pause.hold();
    try{
    await this.screen('🧪 Brain Lab','Today YOU help design Number Knight. I’ll show you different ways to think about math, and you tell me which ones make sense. There are no wrong answers. About 10 minutes.','Let’s go ▸');
    // Part 1: strategy inventory
    await this.screen('Part 1 · Quick facts','Answer each one, then tell me how you got it. Go at your own speed.','Start ▸');
    const all=[];for(const did of ['pm','tm'])for(const f of Dojo.facts(did)){const r=Dojo.st().facts[f.key];all.push({f,owned:!!(r&&r.owned),seen:!!(r&&r.n)});}
    const pickN=(arr,n)=>shuffle(arr).slice(0,n);const inv=pickN(all.filter(x=>x.owned),4).concat(pickN(all.filter(x=>x.seen&&!x.owned),3)).concat(pickN(all.filter(x=>!x.seen&&x.f.op!=='÷'),1));
    for(const x of shuffle(inv)){const r=await this.askFact(x.f,'Part 1');const s=await this.choice('How did you get it?',[['knew','⚡ I just knew it'],['counted','🖐️ I counted'],['trick','🧠 I used a trick'],['guess','🎲 I guessed']]);
      S.inventory.push({key:x.f.key,op:x.f.op,owned:x.owned,ans:r.v,ok:r.ok,ms:r.ms,strat:s});}
    // Part 2: explanation showdown
    await this.screen('Part 2 · Explanation showdown','I’ll show you different ways to picture a problem. Pick the one that makes the most sense, then the one that looks the most fun.','Show me ▸');
    const sample={'−':{op:'−',a:13,b:8,ans:5,key:'13-8'},'+':{op:'+',a:8,b:7,ans:15,key:'7+8'},'×':{op:'×',a:7,b:6,ans:42,key:'6x7'}};
    for(const op of ['−','+','×']){const f=sample[op],arms=(this.ARMS[op]).filter(a=>this.ok(a,f));const sense=await this.compare(f,arms,'Which one makes the MOST sense?');const fun=await this.compare(f,arms,'Which one looks the most FUN?');S.showdown.push({op,arms,sense,fun});}
    // Part 3: learn-and-test (a tiny experiment): 4 new facts, two taught one way and two another way, then a quiz
    const pool=all.filter(x=>!x.owned&&x.f.op==='×');const pool2=pool.length>=4?pool:all.filter(x=>!x.owned&&x.f.op==='−');const four=pickN(pool2.length>=4?pool2:all.filter(x=>!x.owned),4).map(x=>x.f);
    if(four.length===4){const op=four[0].op,arms=shuffle((this.ARMS[op]||['blocks']).filter(a=>four.every(f=>a==='blocks'||this.ok(a,f)))).slice(0,2);
      if(arms.length===2){await this.screen('Part 3 · Learn it, then try it','I’ll teach you 4 facts, two different ways. Then a quick quiz to see which way stuck. No pressure!','Teach me ▸');
        const plan=four.map((f,i)=>({f,arm:arms[i%2]}));for(const p of plan)await this.teach(p.f,p.arm);
        await this.screen('Brain shake!','Stand up, wiggle your arms, and take three big breaths. Then tap Ready.','Ready ▸',8000);
        for(const p of shuffle(plan)){const r=await this.askFact(p.f,'Part 3 quiz');S.experiment.push({key:p.f.key,op:p.f.op,arm:p.arm,ok:r.ok,ms:r.ms});L.pend[p.f.key]={arm:p.arm,op:p.f.op,day:dayStr()};}}}
    // Part 4: grown-up questions
    S.interview=await this.interview();
    L.sessions=L.sessions.concat([S]).slice(-12);state.coins+=30;saveState();if(typeof Sync!=='undefined'&&Sync.kick)Sync.kick(true);
    await this.screen('🧪 Thanks, game designer!','Your answers help Number Knight fit the way YOUR brain works. +30 coins!','Done ✓');Snd.fanfare();
    }catch(e){}finally{overlay(null);if(held)Pause.release();}},
  screen(title,text,btn,wait){return new Promise(res=>{const b=el('button',{class:'btn btn-green',type:'button'},btn||'Next ▸');if(wait){b.disabled=true;setTimeout(()=>{b.disabled=false;},wait);}tapify(b,()=>{if(b.disabled)return;Snd.tap();res();});
    overlay(el('div',{class:'modal lab-modal'},el('h2',null,title),el('p',{class:'lab-text'},text),el('div',{class:'btns'},b)));});},
  choice(q,opts){return new Promise(res=>{overlay(el('div',{class:'modal lab-modal'},el('h2',null,q),el('div',{class:'lab-opts'},...opts.map(([k,t])=>{const b=el('button',{class:'lab-sb big',type:'button'},t);tapify(b,()=>{Snd.tap();res(k);});return b;}))));});},
  askFact(f,label){return new Promise(res=>{let v='';const t0=Date.now(),disp=el('div',{class:'lab-ans'},'?');
    const keys=el('div',{class:'lab-keys'},...[1,2,3,4,5,6,7,8,9,'⌫',0,'OK'].map(k=>{const b=el('button',{class:'lab-k'+(k==='OK'?' ok':''),type:'button'},String(k));
      tapify(b,()=>{if(k==='⌫')v=v.slice(0,-1);else if(k==='OK'){if(!v)return;const n=+v;res({v:n,ok:n===f.ans,ms:Date.now()-t0});return;}else if(v.length<4)v+=k;disp.textContent=v||'?';Snd.tap();});return b;}));
    overlay(el('div',{class:'modal lab-modal'},el('p',{class:'lab-sub'},label),el('div',{class:'lab-q'},(f.op==='+?'||f.op==='−?'?factExpr(f).replace('?','▢'):factExpr(f)+' =')),disp,keys));});},
  teach(f,arm){return new Promise(res=>{let v=null;try{v=arm==='blocks'?Blocks.show(f):this.render(arm,f);}catch(e){}const b=el('button',{class:'btn btn-green',type:'button',disabled:true},'Got it ▸');setTimeout(()=>{b.disabled=false;},4000);
    tapify(b,()=>{if(b.disabled)return;Snd.tap();res();});
    overlay(el('div',{class:'modal lab-modal'},el('p',{class:'lab-sub'},'Learn this one: '+this.NAMES[arm]),el('div',{class:'lab-q'},factExpr(f)+' = '+f.ans),v,el('div',{class:'btns'},b)));});},
  interview(){return new Promise(res=>{const A={};const chips=(k,opts,multi)=>el('div',{class:'lab-chiprow'},...opts.map(o=>{const b=el('button',{class:'lab-chip',type:'button'},o);tapify(b,()=>{if(multi){A[k]=A[k]||[];const i=A[k].indexOf(o);if(i<0)A[k].push(o);else A[k].splice(i,1);b.classList.toggle('on');}else{A[k]=o;b.parentNode.querySelectorAll('.lab-chip').forEach(x=>x.classList.remove('on'));b.classList.add('on');}});return b;}));
    const txt=k=>{const t=el('textarea',{class:'lab-txt',rows:2,placeholder:'Type what he says (optional)'});t.addEventListener('input',()=>{A[k]=t.value;});return t;};
    const q=(s,ctl)=>el('div',{class:'lab-iq'},el('b',null,s),ctl);
    const done=el('button',{class:'btn btn-green',type:'button'},'Save answers ✓');tapify(done,()=>res(A));
    overlay(el('div',{class:'modal lab-modal lab-interview'},el('h2',null,'Part 4 · Grown-up: read these to him'),el('p',{class:'lab-sub'},'Tap or type his answers. Skip anything. Takes about 3 minutes.'),
      q('1. “Explain how you would solve 13 − 8.”',txt('explain13m8')),
      q('2. “When you get stuck, what helps the most?” (tap all he says)',chips('stuckHelps',['A picture','A hint','Trying again','A break','Someone explaining','Watching a video'],true)),
      q('3. “What part of math feels hardest right now?”',txt('hardest')),
      q('4. “What part feels easiest?”',txt('easiest')),
      q('5. “How do you feel when you get one wrong?”',chips('wrongFeel',['😀 It’s fine','😐 Meh','😟 Worried','😡 Mad'])),
      q('6. “What’s your favorite part of Number Knight?” (tap all)',chips('favorite',['Battles','Mech battles','Mini-games','Animations','Movies','Shop','Dojo belts','Lessons'],true)),
      q('7. “Anything you wish the game did?”',txt('wish')),el('div',{class:'btns'},done)));});},

  // ---------- parent panel: what the lab has learned so far
  panel(){const L=this.st(),rows=[];const pct=(a,b)=>b?Math.round(100*a/b)+'%':'–';
    for(const op in L.arms){const arms=L.arms[op];const items=Object.entries(arms).filter(([a,s])=>s.n>0);if(!items.length)continue;
      items.sort((x,y)=>((y[1].ra/(y[1].ra+y[1].rb))-(x[1].ra/(x[1].ra+x[1].rb))));
      rows.push(el('div',{class:'lab-row'},el('b',null,op+' facts: '),items.map(([a,s])=>`${this.NAMES[a]} ${pct(s.ra-1,s.n)} retry (${s.n})${s.ta+s.tb>2?`, ${pct(s.ta-1,s.ta+s.tb-2)} next day`:''}`).join(' · ')));}
    const S=L.strat.filter(x=>x.s!=='skip'),cnt=k=>S.filter(x=>x.s===k).length;
    if(S.length)rows.push(el('div',{class:'lab-row'},el('b',null,'How he solves right answers: '),`⚡ knew it ${pct(cnt('knew'),S.length)} · 🖐️ counted ${pct(cnt('counted'),S.length)} · 🧠 trick ${pct(cnt('trick'),S.length)} · 🎲 guessed ${pct(cnt('guess'),S.length)} (${S.length} answers)`));
    if(L.pref.length){const c={};L.pref.forEach(p=>{if(p.choice!=='same')c[p.choice]=(c[p.choice]||0)+1;});rows.push(el('div',{class:'lab-row'},el('b',null,'He picked as clearest: '),Object.entries(c).sort((a,b)=>b[1]-a[1]).map(([a,n])=>`${this.NAMES[a]} ×${n}`).join(' · ')||'–'));}
    const go=el('button',{class:'btn btn-blue',type:'button'},'🧪 Start Brain Lab (10 min)');tapify(go,()=>{overlay(null);setTimeout(()=>this.brainLab(),50);});
    return el('div',{class:'lab-panel'},el('h3',null,`How ${((state.hero&&state.hero.name)||'your child')} learns (Learning Lab)`),rows.length?rows:el('p',{class:'lab-sub'},'Collecting data. Hint experiments and check-ins run quietly as he plays.'),
      el('p',{class:'lab-sub'},`Brain Lab sessions: ${L.sessions.length}${L.sessions.length?' · last '+L.sessions[L.sessions.length-1].day:''}`),go);}
};
// after a right Dojo answer: sometimes a quick "How did you get it?" before moving on
Dojo.after=function(p,ms,f,lat,src,dj,sp,card){if(typeof Lab!=='undefined'&&Lab.wantStrat(sp,dj))Lab.askStrat(card,f,lat,src,dj).then(()=>this.advance(p));else setTimeout(()=>this.advance(p),ms);};
// the parent report gets the Learning Lab panel and the Brain Lab button
{const _r=showReport;showReport=function(){_r.apply(this,arguments);try{const m=document.querySelector('#overlay .modal.report');if(m){const pnl=Lab.panel(),g=m.querySelector('.statgrid'),btns=[...m.children].filter(x=>x.classList.contains('btns')).pop();if(g)g.after(pnl);else if(btns)btns.before(pnl);else m.append(pnl);}}catch(e){}};}
