/* =========================================================
   Screen time: a visible clock, a daily limit, and a short daily allowance for the Shop/Mech Bay.
   Grown-up controls sit behind a 4-digit PIN.
   ========================================================= */
const Parent={until:0,
  active(){return Date.now()<this.until;},
  guard(fn){if(state.parentPin&&this.active()){this.until=Date.now()+5*60000;fn();return;}const pin=state.parentPin;const box=el('input',{type:'password',inputmode:'numeric',pattern:'[0-9]*',maxlength:'4',class:'syncin pin-in',autocomplete:'off',placeholder:'••••'});
    const msg=el('p',{class:'tiny-ok'},'');let first=null;
    const ok=()=>{const v=box.value.trim();if(!/^\d{4}$/.test(v)){msg.textContent='Four digits, please.';return;}
      if(!pin){if(first==null){first=v;box.value='';msg.textContent='Type it again to confirm.';return;}if(v!==first){first=null;box.value='';msg.textContent='Those didn’t match. Start again.';return;}
        state.parentPin=v;saveState();Parent.until=Date.now()+5*60000;overlay(null);fn();return;}
      if(v===pin){Parent.until=Date.now()+5*60000;overlay(null);fn();}else{box.value='';msg.textContent='Wrong PIN.';Snd.hurt();}};
    box.addEventListener('keydown',e=>{if(e.key==='Enter')ok();});
    overlay(el('div',{class:'modal pin-modal'},el('h2',null,pin?'Grown-up PIN':'Create a grown-up PIN'),
      el('p',null,pin?'Enter your 4-digit PIN.':`Pick 4 digits that ${((state.hero&&state.hero.name)||'your child')} doesn’t know. You’ll need it to change limits, unlock, approve prizes or start over.`),box,msg,
      el('div',{class:'btns'},el('button',{class:'btn btn-dark',type:'button',onclick:()=>showReport()},'Cancel'),el('button',{class:'btn btn-green',type:'button',onclick:ok},'OK'))));
    setTimeout(()=>box.focus(),50);}
};
const ScreenTime={warned:null,
  st(){const s=state.st=state.st||{days:{},shopMin:5,totalMin:25,extra:{},v2:1};if(!s.v2){s.v2=1;if(s.totalMin===45)s.totalMin=25;}
    const d=dayStr();const D=s.days[d]=s.days[d]||{total:0,learn:0,shop:0,other:0};return {s,D,d};},
  cat(){const S=[...document.querySelectorAll('.screen')].find(x=>!x.hidden);const id=S?S.id:'';
    if(id==='scr-level'||id==='scr-dojo'||(id==='scr-mech'&&typeof bayLaunch!=='undefined'&&bayLaunch))return 'learn';if(id==='scr-shop'||id==='scr-mech')return 'shop';return 'other';},
  limit(){const {s,d}=this.st();return s.totalMin>0?s.totalMin*60+((s.extra||{})[d]||0)*60:0;},
  shopLeft(){const {s,D}=this.st();return s.shopMin>0?Math.max(0,s.shopMin*60-D.shop):1e9;},
  shopOk(){return this.shopLeft()>0;},
  fmt(sec){const m=Math.floor(sec/60);return m<60?`${m} min`:`${Math.floor(m/60)} h ${m%60} min`;},
  init(){setInterval(()=>this.tick(5),5000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)this.enforce();});setTimeout(()=>this.enforce(),1500);this.paint();},
  tick(sec){if(typeof cfg!=='undefined'&&cfg&&cfg.resetPin&&state.pinReset!==cfg.resetPin){delete state.parentPin;state.pinReset=cfg.resetPin;saveState();}
    if(this.onBreak||document.hidden||(typeof Pause!=='undefined'&&(Pause.on||Date.now()-Pause.last>60000))||!state.hero)return;
    const {D}=this.st(),c=this.cat();D.total+=sec;D[c]=(D[c]||0)+sec;if(c==='learn')D.since=(D.since||0)+sec;if(D.total%60<sec)saveState();this.paint();this.enforce();},
  paint(){const {D}=this.st(),L=this.limit(),left=L?L-D.total:null;
    document.querySelectorAll('.st-chip').forEach(ch=>{ch.textContent='⏱ '+this.fmt(D.total)+(L?` / ${Math.round(L/60)}`:'');ch.classList.toggle('warn',left!=null&&left<=300);ch.classList.toggle('over',left!=null&&left<=0);});},
  enforce(){if(!state.hero)return;const {D,d}=this.st(),L=this.limit(),c=this.cat();
    // shop allowance
    if(c==='shop'&&!this.shopOk()){renderMap();show('scr-map');Talk.say([['pip','Shop’s closed for today, {name}! Come back tomorrow for more shopping.']]);}
    // 5-minute warning
    if(L&&L-D.total<=300&&L-D.total>0&&this.warned!==d){this.warned=d;Talk.pop('knight',`Five minutes left today, {name}! Finish strong.`);}
    // time's up: let a run finish first
    if(L&&D.total>=L){if(Parent.active()||document.querySelector('#overlay .pin-modal'))return;const inRun=!$('#scr-level').hidden||!$('#cine').hidden||!$('#talk').hidden;if(inRun)return;
      if(!document.querySelector('#overlay .timeup'))this.timeUp();}},
  timeUp(){const {D}=this.st();
    overlay(el('div',{class:'modal timeup'},el('h2',null,'Time’s up for today! 🎉'),
      el('p',null,`You played ${this.fmt(D.total)} today, with ${this.fmt(D.learn)} of training. Great work, ${(state.hero&&state.hero.name)||'hero'}!`),
      el('p',null,'Glitch will be waiting tomorrow. Go rest those hero brains.'),
      el('div',{class:'btns'},el('button',{class:'btn btn-dark',type:'button',onclick:()=>Parent.guard(()=>showReport())},'Grown-up settings'),el('button',{class:'btn btn-dark',type:'button',onclick:()=>Parent.guard(()=>{const {s,d}=this.st();s.extra=s.extra||{};s.extra[d]=(s.extra[d]||0)+15;saveState();this.paint();})},'Grown-up: +15 minutes'))));},
  // a movement break is due after 15 minutes of training
  breakDue(){const {D}=this.st();return (D.since||0)>=((typeof cfg!=='undefined'&&cfg&&cfg.breakEvery)||15)*60;},
  // a tired or tough-one break waits until 8 minutes of training have passed since the last break
  gapOk(){const {D}=this.st();return (D.since||0)>=480;},
  // Recharge: a short break that stops every clock. The button unlocks when the countdown ends.
  brk(o){o=o||{};const secs=o.secs||60,{D}=this.st();D.breaks=(D.breaks||0)+1;D.since=0;if(o.tired)D.tired=(D.tired||0)+1;saveState();
    this.onBreak=true;const held=typeof Pause!=='undefined'&&Pause.hold();
    const moves=['Stand up and do 10 jumping jacks.','Touch your toes 5 times.','Get a sip of water.','Stretch up high like a giant, then curl up small.','Do 5 wall push-ups.','Shake out your hands and wiggle your whole body.'];
    const kind=typeof Breaks!=='undefined'?Breaks.pick(!!o.tired):'box';
    return new Promise(res=>{let left=secs;const t=el('b',{class:'rc-time'},''),go=el('button',{class:'btn btn-green',type:'button',disabled:true},'Wait…');
      const mv=el('p',{class:'rc-move',hidden:true},'Now: '+pick(moves));
      const B=(typeof Breaks!=='undefined'?Breaks:{make:(k,oo)=>{const b=BoxBreath.make({cycles:3,onDone:oo.onDone});return {el:b.el,stop:()=>b.stop(),secs:54,title:'Box Breathing 🧘',calm:true};}}).make(kind,{long:secs>=110,onDone:sc=>{
        if(B.calm)mv.hidden=false;if(sc>=0.6){state.coins+=3;saveState();Snd.gem();mv.hidden=false;mv.textContent=B.calm?'Great job! +3 coins. Now: '+pick(moves):'Great job! +3 coins.';}}});
      left=Math.max(left,B.secs||0);D.breakKinds=Object.assign({},D.breakKinds||{},{[kind]:((D.breakKinds||{})[kind]||0)+1});saveState();
      const paint=()=>{t.textContent=`${Math.floor(left/60)}:${String(left%60).padStart(2,'0')}`;};paint();
      const iv=setInterval(()=>{if(document.hidden)return;left--;paint();if(left<=0){clearInterval(iv);go.disabled=false;go.textContent='I’m back! ▸';Snd.gem();}},1000);
      tapify(go,()=>{if(go.disabled)return;clearInterval(iv);B.stop();overlay(null);this.onBreak=false;if(held)Pause.release();res();});
      overlay(el('div',{class:'modal recharge'},el('h2',null,o.title||'Recharge time! 🔋'),el('p',{class:'rc-kind'},B.title||''),el('p',null,o.msg||'Your brain worked hard. Breaks make it stronger.'),
        B.el,mv,t,el('div',{class:'btns'},go)));});},
  report(){const {s,D}=this.st();const days=Object.keys(s.days).sort().slice(-7);
    const sel=(vals,cur,key,unit)=>el('select',{class:'st-sel',onchange:e=>{const v=+e.target.value;Parent.guard(()=>{s[key]=v;saveState();this.paint();showReport();});}},vals.map(v=>{const o=el('option',{value:String(v)},v?`${v} ${unit}`:'No limit');if(v===cur)o.selected=true;return o;}));
    return el('div',{class:'rep-st'},el('p',null,el('b',null,'Screen time today: '),`${this.fmt(D.total)} · training ${this.fmt(D.learn)} · shop ${this.fmt(D.shop)} · other ${this.fmt(D.other)}`),
      days.length>1?el('table',{class:'rep'},el('tr',null,el('th',null,'Day'),el('th',null,'Total'),el('th',null,'Training'),el('th',null,'Shop')),
        days.map(k=>{const x=s.days[k];return el('tr',null,el('td',null,k.slice(5)),el('td',{class:'n'},this.fmt(x.total)),el('td',{class:'n'},this.fmt(x.learn)),el('td',{class:'n'},this.fmt(x.shop)));})):null,
      el('p',{class:'tiny-ok'},`Recharge breaks today: ${D.breaks||0}`+(D.tired?` · times his brain got tired: ${D.tired}`:'')),
      el('div',{class:'st-row'},el('span',null,'Daily limit:'),sel([0,20,25,30,45,60],s.totalMin,'totalMin','min'),el('span',null,'Shop + Mech Bay:'),sel([0,3,5,10,15],s.shopMin,'shopMin','min/day')),
      el('div',{class:'st-row'},el('span',null,'Fun animations between problems:'),el('select',{class:'st-sel',onchange:e=>{const v=+e.target.value;Parent.guard(()=>{state.cineEvery=v;saveState();showReport();});}},
        [[2,'Lots (every 2 right)'],[4,'Some (every 4 right)'],[8,'A few (every 8 right)'],[0,'Off']].map(([v,l])=>{const o=el('option',{value:String(v)},l);if(v===(state.cineEvery==null?2:state.cineEvery))o.selected=true;return o;}))),
      el('p',{class:'tiny-ok'},'Changing limits asks for the grown-up PIN. Time stops counting while paused or after a minute without touches.'));}
};
