/* =========================================================
   Big answer pad: for long answers (4+ digits) the small ink box is too cramped to read.
   Tapping it opens a big pad with one box per digit. Each box is read on its own, which is far more reliable.
   ========================================================= */
const BigPad={
  ans(){if(typeof run==='undefined'||!run||!run.spec||run.spec.mode==='dojo')return null;const p=run.queue[run.idx];if(!p)return null;const a=p.answer!=null?p.answer:(p.base&&p.base.answer);return a==null||isNaN(a)?null:+a;},
  digits(){const a=this.ans();return a==null?0:String(Math.abs(a)).replace('.','').length;},
  wants(f){return !!f&&!f.locked&&this.digits()>=4;},
  hint(){if(InkBox.pad){const a=this.ans(),d=this.digits();let n=this.wants(Pad.active)?0:(d>=3||String(a).includes('.')?3:2);
    // a step box that takes one digit (long division steps) gets one open space, not 2 or 3 boxes
    const fm=Pad.active&&Pad.active.max;if(n&&fm&&fm<n)n=fm<=1?0:fm;InkBox.pad.setBoxes(n);}
    const h=document.querySelector('#inkPad .ink-hint');if(h)h.textContent=this.wants(Pad.active)?'✏️ Tap to write it big':'✏️ Write your answer';
    const host=$('#inkPad');if(host)host.classList.toggle('to-big',this.wants(Pad.active));},
  init(){const host=$('#inkPad');if(!host)return;
    host.addEventListener('pointerdown',e=>{if(e.target.closest('.ink-clr'))return;const f=Pad.active;if(!this.wants(f))return;e.preventDefault();e.stopPropagation();this.open(f);},true);
    const _f=Pad.focus.bind(Pad);Pad.focus=f=>{_f(f);setTimeout(()=>this.hint(),0);};AnswerHint.init();},
  open(f){const n=Math.max(4,Math.min(9,this.digits()+1)),dot=!!f.allowDot&&String(this.ans()).includes('.');
    const app=$('#app').getBoundingClientRect(),bw=Math.floor(Math.min(92,(Math.min(app.width,980)-64)/n)),bh=Math.round(bw*1.25),W=bw*n,H=bh;
    const cv=el('canvas',{class:'bp-cv',style:`width:${W}px;height:${H}px`}),reads=el('div',{class:'bp-reads',style:`width:${W}px`}),said=el('div',{class:'bp-said'},' ');
    const ctx=cv.getContext('2d'),d=Math.min(2,window.devicePixelRatio||1);cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);
    let strokes=[],cur=null,penSeen=false;const cells=Array.from({length:n},()=>el('span',null,''));reads.append(...cells);
    const box=s=>{const xs=s.map(p=>p.x);return clamp(Math.floor(((Math.min(...xs)+Math.max(...xs))/2)/bw),0,n-1);};
    const draw=()=>{ctx.clearRect(0,0,W,H);ctx.fillStyle='#fffaf0';ctx.fillRect(0,0,W,H);
      for(let i=0;i<n;i++){ctx.strokeStyle='#c9b98f';ctx.lineWidth=2;ctx.setLineDash([6,5]);ctx.strokeRect(i*bw+5,6,bw-10,H-12);ctx.setLineDash([]);
        const fromRight=n-i;if(!dot&&fromRight%3===0&&i>0){ctx.fillStyle='#8a7a55';ctx.beginPath();ctx.arc(i*bw,H-12,3.5,0,6.28);ctx.fill();}}
      ctx.strokeStyle='#1d1f33';ctx.lineWidth=Math.max(5,bw/18);ctx.lineCap='round';ctx.lineJoin='round';
      for(const s of strokes.concat(cur?[cur]:[])){ctx.beginPath();s.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));if(s.length===1)ctx.lineTo(s[0].x+0.1,s[0].y);ctx.stroke();}};
    // read each box on its own
    let result={text:'',minP:1,bad:false};
    const read=()=>{let r={text:'',items:[],minP:1};try{r=InkBox.readBoxes(strokes,n,W,H,{allowDot:dot});}catch(e){}cells.forEach(c=>{c.textContent='';c.className='';});
      r.items.forEach(x=>{if(cells[x.i]){cells[x.i].textContent+=x.ch;if(x.p<0.6)cells[x.i].className='meh';}});const text=r.text,bad=false;
      result={text,minP:r.minP,bad,imgs:r.imgs};said.textContent=text?'I read: '+(dot?text:Number(text).toLocaleString('en-US')):' ';done.disabled=!text||bad;};
    const pt=e=>{const r=cv.getBoundingClientRect();return {x:(e.clientX-r.left)*W/r.width,y:(e.clientY-r.top)*H/r.height};};
    cv.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'&&penSeen)return;if(e.pointerType==='pen')penSeen=true;e.preventDefault();Snd.init();
      if(!ANS.firstInput)ANS.firstInput=Date.now();cur=[pt(e)];try{cv.setPointerCapture(e.pointerId);}catch(_){}draw();});
    cv.addEventListener('pointermove',e=>{if(!cur)return;const evs=e.getCoalescedEvents?e.getCoalescedEvents():[e];for(const v of evs)cur.push(pt(v));draw();});
    const up=()=>{if(!cur)return;strokes.push(cur);cur=null;draw();read();};cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
    cv.addEventListener('touchstart',e=>{if(penSeen)e.preventDefault();},{passive:false});
    const done=el('button',{class:'btn btn-green',type:'button',disabled:true},'Done ✓'),undo=el('button',{class:'btn btn-dark',type:'button'},'Undo'),
      clr=el('button',{class:'btn btn-dark',type:'button'},'Erase all'),cancel=el('button',{class:'btn btn-dark',type:'button'},'Cancel');
    // dock it where it won't hide his work: top in landscape, bottom in portrait; he can flip it and it remembers
    const land=app.width>app.height;let pos=state.bigpadPos||(land?'top':'bottom');
    const mvb=el('button',{class:'btn btn-dark bp-move',type:'button'},pos==='top'?'⬇ Move down':'⬆ Move up');
    tapify(mvb,()=>{pos=pos==='top'?'bottom':'top';state.bigpadPos=pos;saveState();modal.classList.toggle('top',pos==='top');mvb.textContent=pos==='top'?'⬇ Move down':'⬆ Move up';});
    tapify(undo,()=>{strokes.pop();draw();read();});tapify(clr,()=>{strokes=[];draw();read();});tapify(cancel,()=>overlay(null));
    tapify(done,()=>{if(!result.text||result.bad)return;overlay(null);Pad.input(f,result.text,'ink',result.minP,Date.now());Pad.focus(f);Snd.tap();
      say('Got it. Tap Check It or Submit.','');});
    const modal=el('div',{class:'modal bigpad'+(pos==='top'?' top':'')},el('p',{class:'bp-tip'},el('b',null,'Write your answer: '),dot?'one digit per box. The decimal point gets its own box.':'one digit per box. No commas needed.'),
      el('div',{class:'bp-wrap'},cv,reads),said,el('div',{class:'btns'},mvb,cancel,clr,undo,done));overlay(modal);
    draw();}
};
/* Answer hint: the scratch paper is for working out; the answer goes in the ANSWER pad.
   If he has been writing on the paper and stops without answering, the answer pad pulses and a tip points to it. */
const AnswerHint={tm:null,p:null,nudges:0,
  init(){const sc=$('#scratch');if(sc)sc.addEventListener('pointerup',()=>this.onScratch());
    const pad=$('#inkPad');if(pad&&!document.querySelector('.ink-title'))pad.before(el('div',{class:'ink-title'},'✍️ Write your ANSWER here'));},
  arm(p){this.p=p;this.nudges=0;clearTimeout(this.tm);const pad=$('#inkPad');if(pad)pad.classList.remove('nudge');},
  waiting(){const f=Pad.active;return !$('#scr-level').hidden&&!$('#scr-level').classList.contains('dojo')&&!$('#scr-level').classList.contains('factmode')&&f&&!f.locked&&!f.val&&$('#overlay').hidden&&$('#cine').hidden;},
  onScratch(){if(!this.p||this.nudges>=2)return;clearTimeout(this.tm);this.tm=setTimeout(()=>{if(!this.waiting())return;this.nudges++;
    const pad=$('#inkPad'),big=BigPad.wants(Pad.active);if(pad){pad.classList.remove('nudge');void pad.offsetWidth;pad.classList.add('nudge');}
    say(big?'Done working? Tap the ANSWER box (✍️) to write your answer big →':'Done working? Write your answer in the ANSWER box →','info');},5000);}};
