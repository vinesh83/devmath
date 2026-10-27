/* =========================================================
   Mark up word problems: Dev writes right on the story with his Pencil (a + over "more", a circle around
   the question, an underline under a number). The Pencil draws; a finger still taps the words as before.
   "✏️ Mark" lets a finger draw too, and 🧽 clears the marks. Marks stay until the next problem.
   ========================================================= */
const Markup={
  attach(box){if(!box||box.querySelector('.mk-cv'))return;box.classList.add('mk-on');
    const cv=el('canvas',{class:'mk-cv'}),g=cv.getContext('2d');
    const tools=el('div',{class:'mk-tools'});const fingerBtn=el('button',{class:'mk-btn',type:'button','aria-label':'Draw with finger'},'✏️');
    const clr=el('button',{class:'mk-btn',type:'button','aria-label':'Clear marks'},'🧽');tools.append(fingerBtn,clr);box.append(cv,tools);
    const S={strokes:[],cur:null,finger:false,W:0,H:0};
    const size=()=>{const r=box.getBoundingClientRect();if(!r.width)return;const d=Math.min(2,window.devicePixelRatio||1);cv.width=Math.round(r.width*d);cv.height=Math.round(r.height*d);S.W=r.width;S.H=r.height;g.setTransform(d,0,0,d,0,0);draw();};
    const draw=()=>{g.clearRect(0,0,S.W,S.H);g.strokeStyle='#e8345a';g.lineCap='round';g.lineJoin='round';
      for(const s of S.strokes.concat(S.cur?[S.cur]:[])){g.lineWidth=3.2;g.beginPath();s.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));if(s.length===1)g.lineTo(s[0][0]+0.1,s[0][1]);g.stroke();}};
    const pt=e=>{const r=box.getBoundingClientRect();return [e.clientX-r.left,e.clientY-r.top];};
    // the Pencil always draws here; a finger draws only when "Mark" is on, otherwise its taps reach the words
    box.addEventListener('pointerdown',e=>{if(e.target.closest('.mk-tools'))return;if(!(e.pointerType==='pen'||S.finger))return;
      e.preventDefault();e.stopPropagation();S.cur=[pt(e)];S.pid=e.pointerId;try{box.setPointerCapture(e.pointerId);}catch(_){}},true);
    box.addEventListener('pointermove',e=>{if(!S.cur||e.pointerId!==S.pid)return;e.preventDefault();e.stopPropagation();
      let evs=e.getCoalescedEvents?e.getCoalescedEvents():[];if(!evs.length)evs=[e];for(const v of evs)S.cur.push(pt(v));draw();},true);
    const up=e=>{if(!S.cur||e.pointerId!==S.pid)return;e.stopPropagation();S.strokes.push(S.cur);S.cur=null;draw();Markup.used=(Markup.used||0)+1;};
    ['pointerup','pointercancel'].forEach(t=>box.addEventListener(t,up,true));
    // a pen stroke must not also count as a tap on a word
    box.addEventListener('click',e=>{if(e.target.closest('.mk-tools'))return;if(S.drewAt&&Date.now()-S.drewAt<350){e.stopPropagation();e.preventDefault();}},true);
    box.addEventListener('pointerup',e=>{if(e.pointerType==='pen'||S.finger)S.drewAt=Date.now();},true);
    box.addEventListener('touchstart',e=>{if(S.finger)e.preventDefault();},{passive:false});
    fingerBtn.addEventListener('click',e=>{e.stopPropagation();S.finger=!S.finger;fingerBtn.classList.toggle('on',S.finger);box.classList.toggle('mk-finger',S.finger);});
    clr.addEventListener('click',e=>{e.stopPropagation();S.strokes=[];draw();});
    new ResizeObserver(size).observe(box);setTimeout(size,0);box.__mk=S;}
};
// every word-problem story gets a markup layer
{const _rs=renderStory;renderStory=function(p){const box=_rs.apply(this,arguments);try{Markup.attach(box);}catch(e){console.error(e);}return box;};}
window.__markup=Markup;
window.__go=(id,li)=>startLevel(WORLDS.find(w=>w.id===id),li,{go:true});
