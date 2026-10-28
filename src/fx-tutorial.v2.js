/* =========================================================
   Long Division Workshop: a required, video-style tutorial series for 3-digit ÷ 1-digit long division.
   Three daily episodes of about 10 minutes (one unlocks per day): Day 1 The Knight's Code (857÷3, 247÷7 first digit
   too small), Day 2 The Zero Trap (645÷4, 614÷3), Day 3 Knight's Challenge (932÷4 no remainder, 529÷6). The board draws itself
   and a narrator talks him through it, but every step is a question he answers: Divide, Multiply, Subtract,
   Check, Bring down, then the remainder and a multiply-back check. A miss gives a hint; a second miss shows
   the answer and he writes it. Progress is saved by problem. Class Practice and the 3-digit Dungeon levels
   stay locked until Day 1 is done. Each day's episode opens by itself on his first visit to the map.
   Scripts and narration: tut/ep1..3.json, tut/a/*.mp3 (made by tut/gen.py).
   ========================================================= */
const Tut={
  EPS:3,TITLES:["The Knight's Code",'The Zero Trap',"Knight's Challenge"],
  st(){const s=state.tut3=state.tut3||{};s.i=s.i||0;s.log=s.log||[];s.eps=s.eps||{};if(s.done&&!s.eps[1])s.eps[1]={doneAt:s.doneAt||new Date().toISOString()};return s;},
  // Day 1 unlocks Class Practice and the 3-digit levels
  done(){return !!this.st().eps[1];},
  epDone(n){return !!this.st().eps[n];},
  // the next episode he can do today: one a day, in order
  nextEp(){const E=this.st().eps;for(let n=1;n<=this.EPS;n++){if(E[n])continue;if(n===1)return 1;const prev=E[n-1];return prev&&String(prev.doneAt).slice(0,10)<dayStr()?n:null;}return null;},
  async data(n){this.cache=this.cache||{};if(!this.cache[n]){const r=await fetch('tut/ep'+n+'.json',{cache:'no-cache'});this.cache[n]=await r.json();}return this.D=this.cache[n];},
  // ---- the screen
  async open(o){o=o||{};if(this.el)return;const ep=o.ep||this.nextEp()||1;this.ep=ep;const D=await this.data(ep);const S=this.st();
    if(typeof Music!=='undefined')Music.stop();try{speechSynthesis.cancel();}catch(e){}
    const root=el('div',{class:'vp tut'});this.el=root;
    const bar=el('i');const head=el('div',{class:'tut-head'},el('b',null,`🎬 Workshop · Day ${ep}: ${D.title}`),el('span',{class:'tut-pn'}),el('div',{class:'tut-bar'},bar),
      el('button',{class:'tut-exit',type:'button',onclick:()=>this.close()},'⏸ Finish later'));
    const board=el('div',{class:'tut-board'}),legend=el('div',{class:'tut-legend'},...[['D','Divide','#3fa7ff'],['M','Multiply','#3fbf5f'],['S','Subtract','#ffd23f'],['C','Check','#c084fc'],['B','Bring down','#ff4d6d']].map(([k,n,c])=>el('div',{class:'tut-lg','data-k':k,style:`--c:${c}`},el('b',null,k),el('span',null,n))));
    const side=el('div',{class:'tut-side'});
    const face=el('div',{class:'tut-face'},'🐶'),sub=el('div',{class:'tut-sub'}),again=el('button',{class:'tut-again',type:'button','aria-label':'Hear it again'},'🔁');
    const ask=el('div',{class:'tut-ask',hidden:true});
    root.append(head,el('div',{class:'tut-stage'},board,el('div',{class:'tut-right'},legend,side)),el('div',{class:'tut-foot'},face,sub,again),ask);document.body.append(root);
    Object.assign(this,{board,legend,side,sub,ask,bar,pn:head.querySelector('.tut-pn'),face});again.addEventListener('click',()=>this.replay());
    // Ellie's toon portrait when the 3D engine is available
    try{if(typeof Cin3!=='undefined'&&await Cin3.load()&&window.Cine3D&&Cine3D.portrait){const sp=Cin3.sprites().dog;const c=Cine3D.portrait(sp,{w:110,h:110,res:2,turn:0.5});c.className='tut-ellie';face.textContent='';face.append(c);}}catch(e){}
    // resume at the start of the problem he was on
    let i=S.cur===ep?Math.min(S.i,D.steps.length-1):0;while(i>0&&D.steps[i].kind!=='problem')i--;if(this.epDone(ep))i=0;this.i=i;this.alive=true;this.run();},
  close(){this.alive=false;this.stopAudio();if(this.el){this.el.remove();this.el=null;}if(this.f&&Pad.active===this.f)Pad.active=null;
    try{if(typeof renderMap==='function'&&!$('#scr-map').hidden)renderMap();}catch(e){}},
  // ---- narration: a clip per line (subtitles always on; when sound is off, wait about as long as reading takes)
  stopAudio(){if(this.au){try{this.au.pause();}catch(e){}this.au=null;}if(this.wt){clearTimeout(this.wt);this.wt=null;}if(this.sayDone){this.sayDone();this.sayDone=null;}},
  speak(line){return new Promise(res=>{if(!this.alive)return res();this.last=line;this.sub.textContent=line.t;this.sub.className='tut-sub'+(line.v==='E'?' ellie':'');this.face.classList.toggle('talk',true);
    const fin=()=>{this.face.classList.remove('talk');this.au=null;this.sayDone=null;res();};this.sayDone=fin;
    if(window.__tutFast){this.wt=setTimeout(fin,20);return;}
    if(state.mute){this.wt=setTimeout(fin,900+line.t.length*45);return;}
    const a=new Audio('tut/a/'+line.a+'.mp3');this.au=a;a.onended=()=>setTimeout(fin,250);a.onerror=()=>{this.wt=setTimeout(fin,900+line.t.length*45);};
    a.play().catch(()=>{this.wt=setTimeout(fin,900+line.t.length*45);});});},
  async lines(list){for(const l of list||[]){if(!this.alive)return;await this.speak(l);}},
  replay(){if(this.last&&!this.au)this.speak(this.last);},
  // ---- the board: divisor, bracket, dividend digits, and the work rows under it
  CW:64,RH:60,
  cell(r,c,v,cls){const b=this.board,k=r+','+c;let e=b.querySelector(`[data-k="${k}"]`);if(!e){e=el('div',{class:'tut-c','data-k':k});b.append(e);}
    e.textContent=v;e.className='tut-c '+(cls||'');e.style.left=(this.x0+c*this.CW)+'px';e.style.top=(this.y0+r*this.RH)+'px';return e;},
  digits(r,endCol,v,cls){const s=String(v);return [...s].map((ch,k)=>this.cell(r,endCol-s.length+1+k,ch,cls));},
  newBoard(n,d){const b=this.board;b.innerHTML='';const s=String(n);this.n=n;this.d=d;this.s=s;this.rowsCur=[];
    this.x0=Math.max(120,(b.clientWidth-s.length*this.CW)/2);this.y0=30;
    const dv=el('div',{class:'tut-c tut-dv'},String(d));dv.style.left=(this.x0-this.CW*1.15)+'px';dv.style.top=(this.y0+this.RH)+'px';b.append(dv);
    const br=el('div',{class:'tut-br'});br.style.left=(this.x0-10)+'px';br.style.top=(this.y0+this.RH-4)+'px';br.style.width=(s.length*this.CW+16)+'px';b.append(br);
    [...s].forEach((ch,c)=>this.cell(1,c,ch,'tut-top'));
    this.curCells=null;},
  hl(list){this.board.querySelectorAll('.hl').forEach(x=>x.classList.remove('hl'));(list||[]).forEach(e=>e&&e.classList.add('hl'));},
  at(r,c){return this.board.querySelector(`[data-k="${r},${c}"]`);},
  // where the number being divided sits for row ri (row 1 for the first, then the line under the last subtraction)
  curRow(ri){return ri===0?1:3+2*(ri-1);},
  vis(acts){for(const v of acts||[]){const k=v.act;
    if(k==='new')this.newBoard(v.n,v.d);
    else if(k==='legend'){this.board.innerHTML='';this.board.append(el('div',{class:'tut-big'},'Divide · Multiply · Subtract · Bring down'));}
    else if(k==='hl'){const r=v.row==null||v.row===0?1:this.curRow(v.row);this.hl(v.cols.map(c=>this.at(r,c)).concat([this.board.querySelector('.tut-dv')]));}
    else if(k==='quot'){this.digits(0,v.col,v.v,'tut-q pop');}
    else if(k==='hlq'){this.hl([this.at(0,v.col),this.board.querySelector('.tut-dv')]);}
    else if(k==='prod'){this.hl([]);this.digits(2+2*v.row,v.col,v.v,'tut-p pop');}
    else if(k==='line'){const r=2+2*v.row,c0=Math.min(...v.cols),c1=Math.max(...v.cols);const ln=el('div',{class:'tut-ln'});ln.style.left=(this.x0+c0*this.CW-4)+'px';ln.style.width=((c1-c0+1)*this.CW+8)+'px';ln.style.top=(this.y0+(r+1)*this.RH-4)+'px';
      const mn=el('div',{class:'tut-c tut-minus'},'−');mn.style.left=(this.x0+c0*this.CW-this.CW*0.6)+'px';mn.style.top=(this.y0+r*this.RH)+'px';this.board.append(ln,mn);
      this.hl(v.cols.map(c=>this.at(this.curRow(v.row),c)).concat(v.cols.map(c=>this.at(r,c))));}
    else if(k==='diff'){this.hl([]);this.digits(3+2*v.row,v.col,v.v,'tut-d pop');}
    else if(k==='hld'){this.hl([...this.board.querySelectorAll(`[data-k^="${3+2*v.row},"]`),this.board.querySelector('.tut-dv')]);}
    else if(k==='hlcol'){this.hl([this.at(1,v.col)]);}
    else if(k==='bring'){const from=this.at(1,v.col),r=3+2*v.row;const e=this.cell(r,v.col,v.v,'tut-bd');e.style.transform=`translateY(${-(r-1)*this.RH}px)`;e.style.opacity='0.2';
      requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.transform='';e.style.opacity='';}));
      const ar=el('div',{class:'tut-arrow'},'↓');ar.style.left=(this.x0+v.col*this.CW+this.CW*0.62)+'px';ar.style.top=(this.y0+1.6*this.RH)+'px';ar.style.height=((r-1.4)*this.RH)+'px';this.board.append(ar);this.hl([e]);}
    else if(k==='hlrem'){const last=[...this.board.querySelectorAll('.tut-d,.tut-bd')].filter(x=>+x.dataset.k.split(',')[0]===Math.max(...[...this.board.querySelectorAll('.tut-d')].map(y=>+y.dataset.k.split(',')[0])));this.hl(last);}
    else if(k==='answer'){this.side.innerHTML='';this.side.append(el('div',{class:'tut-ans pop'},`${this.n} ÷ ${this.d} =`,el('b',null,v.v)));}
    else if(k==='check'){this.side.append(el('div',{class:'tut-chk pop'},`${v.Q} × ${v.d} = ${v.Q*v.d}`,el('br'),`${v.Q*v.d} + ${v.R} = ?`));}
    else if(k==='done'){const c=this.side.querySelector('.tut-chk');if(c)c.innerHTML=c.innerHTML.replace('?',String(this.n)+' ✓');this.hl([]);}
    else if(k==='outro'){this.board.innerHTML='';this.side.innerHTML='';this.board.append(el('div',{class:'tut-big win'},'🏆 Long Division Knight!'));}}},
  legendOn(tag){this.legend.querySelectorAll('.tut-lg').forEach(x=>x.classList.toggle('on',x.dataset.k===tag));},
  // ---- answers: keypad and Pencil for numbers, two big buttons for yes/no
  askNum(){return new Promise(res=>{const A=this.ask;A.innerHTML='';A.hidden=false;const f=Pad.make({max:4,allowDot:false,ph:'?'});this.f=f;
    const ink=el('div',{class:'tut-ink'});const keys=el('div',{class:'tut-keys'});
    '1234567890'.split('').concat(['⌫']).forEach(k=>{const b=el('button',{class:'tut-key',type:'button'},k);tapify(b,()=>{Pad.focus(f);Pad.key(k==='⌫'?'del':k);},{down:true});keys.append(b);});
    const go=el('button',{class:'tut-go',type:'button'},'✓');keys.append(go);A.append(el('div',{class:'tut-row'},f.el,ink),keys);
    try{this.ink=InkBox.make(ink,{big:true});}catch(e){}Pad.focus(f);let last=0;
    const sub=()=>{if(Date.now()-last<500)return;const v=Pad.val(f);if(v==null)return;last=Date.now();res({v,clear:()=>{f.val='';Pad.render(f);if(this.ink&&this.ink.clear)this.ink.clear();Pad.focus(f);}});};
    tapify(go,sub);f.onEnter=sub;});},
  askYN(){return new Promise(res=>{const A=this.ask;A.innerHTML='';A.hidden=false;
    const y=el('button',{class:'tut-yn yes',type:'button'},'👍 Yes'),n=el('button',{class:'tut-yn no',type:'button'},'👎 No');
    tapify(y,()=>res({v:'yes',clear:()=>{}}));tapify(n,()=>res({v:'no',clear:()=>{}}));A.append(y,n);});},
  async ask1(step){const t0=Date.now();let tries=0;
    for(;;){const r=step.q==='yn'?await this.askYN():await this.askNum();if(!this.alive)return;
      if(String(r.v)===String(step.ans)){this.ask.hidden=true;this.chime(true);
        this.st().log.push({i:this.i,p:step.p,tag:step.tag,tries,ms:Date.now()-t0});if(this.st().log.length>400)this.st().log.shift();return;}
      tries++;this.chime(false);r.clear();this.ask.hidden=true;
      if(tries===1){await this.lines([this.D.shared.miss,step.hint]);}
      else{this.sub.innerHTML='';this.sub.append(document.createTextNode(step.hint.t+' '),el('b',{class:'tut-show'},step.q==='yn'?(step.ans==='yes'?'Yes':'No'):String(step.ans)));await this.speak(this.D.shared.show);this.sub.textContent='';
        this.sub.append(document.createTextNode('Write: '),el('b',{class:'tut-show'},step.q==='yn'?(step.ans==='yes'?'Yes':'No'):String(step.ans)));}
      if(!this.alive)return;}},
  chime(ok){try{if(ok){Snd.tone(784,0.07,'square',0.035);Snd.tone(1046,0.1,'square',0.035,0.07);}else Snd.tone(220,0.15,'triangle',0.04);}catch(e){}},
  // ---- the script
  async run(){const D=this.D;
    while(this.alive&&this.i<D.steps.length){const s=D.steps[this.i];const S=this.st();
      if(s.kind==='problem'){S.cur=this.ep;S.i=this.i;saveState();this.side.innerHTML='';this.pn.textContent=`Problem ${s.p+1} of ${D.problems.length}`;}
      this.bar.style.width=(100*this.i/D.steps.length).toFixed(1)+'%';this.legendOn(s.tag||null);
      this.vis(s.vis);await this.lines(s.say);if(!this.alive)return;
      if(s.kind==='ask'){await this.ask1(s);if(!this.alive)return;this.vis(s.afterVis);
        const praise=s.after&&s.after.length?s.after:[D.shared.yes[Math.floor(Math.random()*D.shared.yes.length)]];await this.lines(praise);}
      this.i++;}
    if(!this.alive)return;const S=this.st();const ep=this.ep,first=!S.eps[ep];if(first)S.eps[ep]={doneAt:new Date().toISOString()};S.i=0;S.cur=null;
    if(first){state.coins=(state.coins||0)+(ep===this.EPS?60:30);try{updateTop();}catch(e){}}saveState();
    this.ask.hidden=false;this.ask.innerHTML='';this.ask.append(el('div',{class:'tut-win'},first?(ep===1?'+30 coins · Class Practice unlocked! Day 2 opens tomorrow.':ep<this.EPS?`+30 coins · Day ${ep+1} opens tomorrow.`:'+60 coins · Workshop complete!'):'Great review!'),el('button',{class:'tut-go wide',type:'button',onclick:()=>{this.close();if(first&&ep===1&&typeof Dungeon!=='undefined')Dungeon.open();}},'Done'));}
};
// ---- required before 3-digit division: the Dungeon opens the workshop first; Class Practice and 3-digit levels wait for it
{const _op=Dungeon.open.bind(Dungeon);Dungeon.open=function(){_op.apply(this,arguments);try{const lvs=document.querySelector('.dv-modal .dv-lvs');if(!lvs)return;
  const nx=Tut.nextEp(),all=[1,2,3].every(n=>Tut.epDone(n));
  const b=el('button',{class:'dv-lv dv-tut',type:'button'},el('b',null,nx?`🎬 Workshop · Day ${nx}: ${Tut.TITLES[nx-1]}`:'🎬 Long Division Workshop'),
    el('span',null,nx?'About 10 minutes · every step of 3-digit long division':all?'All 3 days done · replay any day':'Today’s episode done · the next one opens tomorrow'),el('i',null,nx?(nx===1?'required':'today'):'✓ replay'));
  tapify(b,()=>{overlay(null);if(nx)Tut.open({ep:nx});else Tut.menu();});lvs.before(b);
  if(!Tut.done()){const c=document.querySelector('.dv-class-drill');if(c){c.classList.add('locked');const i=c.querySelector('i');if(i)i.textContent='🔒 after the Workshop';
      c.replaceWith(c.cloneNode(true));const c2=document.querySelector('.dv-class-drill');tapify(c2,()=>{overlay(null);Tut.open();});}}
  }catch(e){console.error(e);}};}
{const _sl=startLevel;startLevel=function(w,li){if(w&&w.id==='dungeon'&&li>=3&&li<5&&!Tut.done()){try{overlay(null);}catch(e){}Tut.open();return;}return _sl.apply(this,arguments);};}
// each day's episode opens by itself on his first visit to the map that day (while the series lasts)
setInterval(()=>{try{const S=Tut.st(),nx=Tut.nextEp();if(!nx||S.autoDay===dayStr()||Tut.el)return;const m=$('#scr-map');
  if(!m||m.hidden||!$('#overlay').hidden||!$('#talk').hidden||!$('#cine').hidden||document.querySelector('.vp,#cine3d,.adv-panel'))return;
  S.autoDay=dayStr();saveState();Tut.open({ep:nx});}catch(e){}},2500);
Tut.menu=function(){overlay(el('div',{class:'modal'},el('h2',null,'🎬 Long Division Workshop'),el('p',null,'Replay any day you have done.'),
  el('div',{class:'btns',style:'flex-direction:column'},...[1,2,3].map(n=>el('button',{class:'btn'+(Tut.epDone(n)?'':' btn-dark'),type:'button',disabled:!Tut.epDone(n),onclick:()=>{overlay(null);Tut.open({ep:n});}},`Day ${n}: ${Tut.TITLES[n-1]}${Tut.epDone(n)?'':' 🔒'}`)),
    el('button',{class:'btn btn-dark',type:'button',onclick:()=>overlay(null)},'Close'))));};
window.__tut=Tut;
