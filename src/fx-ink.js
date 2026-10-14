/* =========================================================
   Write-in answers: Pencil handwriting -> the active answer box
   ========================================================= */
const InkBox={active:null,pad:null,drawing:false,lastUp:0,
  make(host,o){o=o||{};host.innerHTML='';host.classList.add('ink');if(o.big)host.classList.add('big');
    const cv=el('canvas',{class:'ink-cv','aria-label':'Write your answer here with your Pencil'}),hint=el('div',{class:'ink-hint'},o.big?'✏️ Write the answer here':'✏️ Write your answer'),
      read=el('div',{class:'ink-read'}),clr=el('button',{class:'ink-clr',type:'button'},'Erase');
    host.append(cv,hint,read,clr);
    const I={host,cv,ctx:cv.getContext('2d'),strokes:[],cur:null,tm:null,target:null,o,lastAt:0,W:0,H:0,boxes:o.boxes||0,
      setBoxes(n){if(this.boxes===n)return;this.boxes=n;host.classList.toggle('boxed',!!n);this.draw();},
      size(){const r=cv.getBoundingClientRect();if(!r.width)return;const d=Math.min(2,window.devicePixelRatio||1);cv.width=Math.round(r.width*d);cv.height=Math.round(r.height*d);this.W=r.width;this.H=r.height;this.ctx.setTransform(d,0,0,d,0,0);this.draw();},
      draw(){const c=this.ctx;c.clearRect(0,0,this.W,this.H);
        if(this.boxes){const n=this.boxes,bw=this.W/n,pad=Math.min(8,bw*0.06);c.strokeStyle='#c9b98f';c.lineWidth=2;c.setLineDash([7,6]);for(let i=0;i<n;i++)c.strokeRect(i*bw+pad,pad,bw-2*pad,this.H-2*pad);c.setLineDash([]);}
        c.strokeStyle='#1d1f33';c.lineWidth=o.big?6:4.5;c.lineCap='round';c.lineJoin='round';
        for(const s of this.strokes.concat(this.cur?[this.cur]:[])){c.beginPath();s.forEach((p,i)=>i?c.lineTo(p.x,p.y):c.moveTo(p.x,p.y));if(s.length===1)c.lineTo(s[0].x+0.1,s[0].y);c.stroke();}
        hint.hidden=this.strokes.length>0||!!this.cur;},
      clear(){this.strokes=[];this.cur=null;clearTimeout(this.tm);read.textContent='';read.className='ink-read';this.draw();},
      pt(e){const r=cv.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top};},
      down(e){if(e.pointerType==='touch'&&InkBox.penSeen)return;if(e.pointerType==='pen')InkBox.penSeen=true;e.preventDefault();Snd.init();
        if(Pad.active!==this.target){this.strokes=[];this.target=Pad.active;}if(!this.target||this.target.locked)return;
        clearTimeout(this.tm);InkBox.drawing=true;if(!ANS.firstInput)ANS.firstInput=Date.now();this.cur=[this.pt(e)];try{cv.setPointerCapture(e.pointerId);}catch(_){}this.draw();},
      move(e){if(!this.cur)return;const evs=e.getCoalescedEvents?e.getCoalescedEvents():[e];for(const v of evs)this.cur.push(this.pt(v));this.draw();},
      up(){InkBox.drawing=false;InkBox.lastUp=Date.now();if(!this.cur)return;this.strokes.push(this.cur);this.cur=null;this.lastAt=Date.now();this.draw();clearTimeout(this.tm);this.tm=setTimeout(()=>this.read(),o.big?220:400);},
      read(){const f=this.target;if(!f||f.locked||f!==Pad.active||typeof HW==='undefined'||!this.strokes.length)return;let r;
        try{r=this.boxes?InkBox.readBoxes(this.strokes,this.boxes,this.W,this.H,{allowDot:f.allowDot}):HW.recognize(this.strokes,{allowDot:f.allowDot,maxLen:f.max+1});}catch(e){return;}
        if(!r||!r.text){read.textContent='Hmm, write it a bit bigger?';read.className='ink-read meh';return;}
        InkBox.lastR=r;read.textContent='I read: '+r.text;read.className='ink-read'+(r.minP<0.8?' meh':'');Pad.input(f,r.text,'ink',r.minP,this.lastAt);}};
    cv.addEventListener('pointerdown',e=>I.down(e));cv.addEventListener('pointermove',e=>I.move(e));
    ['pointerup','pointercancel'].forEach(t=>cv.addEventListener(t,()=>I.up()));
    cv.addEventListener('touchstart',e=>{if(InkBox.penSeen)e.preventDefault();},{passive:false});
    clr.addEventListener('pointerdown',e=>{e.preventDefault();I.clear();const f=Pad.active;if(f&&!f.locked&&f.src==='ink'){f.val='';Pad.render(f);}});
    new ResizeObserver(()=>I.size()).observe(cv);requestAnimationFrame(()=>I.size());
    return I;},
  mount(host,o){this.active=this.make(host,o);return this.active;},
  usePad(){if(this.pad){this.active=this.pad;this.pad.clear();}},
  clear(){if(this.active)this.active.clear();},
  fit(){const pc=$('.padcol');if(!pc||$('#scr-level').hidden)return;pc.classList.remove('tight');if(pc.scrollHeight>pc.clientHeight+2&&getComputedStyle(pc).flexDirection==='column')pc.classList.add('tight');},
  // ---- one digit per box: each box is read on its own, so digits can't be split or merged
  readBoxes(strokes,n,W,H,o){o=o||{};const bw=W/n;
    // group strokes that overlap side to side (a 4 drawn in two strokes stays one digit), then drop each group in a box by its center
    const info=strokes.map(s=>{const xs=s.map(p=>p.x),ys=s.map(p=>p.y);return {s,x0:Math.min(...xs),x1:Math.max(...xs),y0:Math.min(...ys),y1:Math.max(...ys)};}).sort((a,b)=>a.x0-b.x0);
    const tallS=Math.max(10,...info.map(x=>x.y1-x.y0)),mg=tallS*0.03;
    const groups=[];for(const it of info){const g=groups[groups.length-1];let join=false;
      if(g){const ov=Math.min(g.x1,it.x1)-Math.max(g.x0,it.x0)+2*mg,wa=g.x1-g.x0+2*mg,wb=it.x1-it.x0+2*mg,cb=(it.x0+it.x1)/2,ca=(g.x0+g.x1)/2;
        join=ov>0.3*Math.min(wa,wb)||(cb>=g.x0-mg&&cb<=g.x1+mg&&wb<=wa)||(ca>=it.x0-mg&&ca<=it.x1+mg&&wa<=wb);}
      if(join){g.list.push(it.s);g.x0=Math.min(g.x0,it.x0);g.x1=Math.max(g.x1,it.x1);g.y0=Math.min(g.y0,it.y0);g.y1=Math.max(g.y1,it.y1);}
      else groups.push({list:[it.s],x0:it.x0,x1:it.x1,y0:it.y0,y1:it.y1});}
    // every separate shape is its own digit, wherever he wrote it; the boxes are only guides
    let text='',minP=1;const items=[],imgs=[];const boxOf=g=>clamp(Math.floor(((g.x0+g.x1)/2)/bw),0,n-1);
    const hs=groups.map(g=>g.y1-g.y0).sort((a,c)=>a-c),tall=hs.length?hs[hs.length-1]:H;
    groups.forEach(g=>{const w=g.x1-g.x0,h=g.y1-g.y0,i=boxOf(g);
      if(o.allowDot&&w<tall*0.25&&h<tall*0.25&&groups.length>1){text+='.';items.push({ch:'.',p:1,box:g,i});return;}
      if(w<3&&h<3)return; // stray tap
      // two digits touching each other: let the splitter handle this shape
      if(w>h*1.15){const r=HW.recognize(g.list,{allowDot:!!o.allowDot,maxLen:3});if(r&&r.text){text+=r.text;minP=Math.min(minP,r.minP);r.items.forEach(x=>items.push(Object.assign({},x,{i})));}return;}
      const img=HW.render(g.list);let pr=HW.classify28(img);pr=InkBox.mine.adjust(img,pr);let k=0;for(let j=1;j<10;j++)if(pr[j]>pr[k])k=j;
      // a wide shape is never a 1 (his 7s have a short top bar the reader sometimes misses): take the next best digit
      if(k===1&&w>h*0.5){let k2=-1;for(let j=0;j<10;j++)if(j!==1&&(k2<0||pr[j]>pr[k2]))k2=j;if(k2>=0)k=k2;}
      text+=String(k);minP=Math.min(minP,pr[k]);items.push({ch:String(k),p:pr[k],pr:Array.from(pr),img,box:g,i});imgs.push({ch:String(k),img});});
    return {text,items,minP,imgs};},
  // ---- benefit of the doubt: if the reader was unsure about a digit and its close second choice makes the answer right,
  // count it right (he likely wrote it right) and save those digits as examples of his handwriting so the reader learns them.
  doubt(correct){const r=this.lastR;if(!r||!r.items)return false;const c=String(correct),it=r.items.filter(x=>x.ch!=='.');
    // one digit short: two digits written close together may have been read as one shape. Try splitting each shape.
    if(it.length===c.length-1&&typeof HW!=='undefined'){for(let i=0;i<it.length;i++){const g=it[i].box;if(!g||!g.list)continue;let s2=null;try{s2=HW.recognize(g.list,{maxLen:3});}catch(e){}
        if(s2&&s2.text&&s2.text.length===2&&it.slice(0,i).map(x=>x.ch).join('')+s2.text+it.slice(i+1).map(x=>x.ch).join('')===c){state.inkStats=state.inkStats||{};state.inkStats.splits=(state.inkStats.splits||0)+1;saveState();return true;}}
      return false;}
    if(it.length!==c.length)return false;let unsure=0;
    for(let i=0;i<c.length;i++){const x=it[i];if(x.ch===c[i])continue;const d=+c[i],CONF={1:7,7:1,4:9,9:4};if(x.pr&&CONF[+x.ch]===d&&x.p<0.985&&x.pr[d]>=0.005){unsure++;continue;} // look-alike pairs he mixes up
          if(!x.pr||x.p>=0.8)return false;const sorted=x.pr.slice().sort((a,b)=>b-a);if(x.pr[d]<0.08||x.pr[d]<sorted[2])return false;unsure++;}
    if(!unsure)return false;it.forEach((x,i)=>{if(x.img)this.mine.add(c[i],x.img);});state.inkStats=state.inkStats||{};state.inkStats.doubts=(state.inkStats.doubts||0)+1;saveState();return true;},
  // ---- learns Dev's own handwriting: every correct written answer saves his digits as examples
  mine:{data:null,
    load(){if(!this.data){this.data=lsGet('nk-ink-mine',{});}return this.data;},
    small(img){const o=new Uint8Array(196);for(let y=0;y<14;y++)for(let x=0;x<14;x++){const i=y*2*28+x*2;o[y*14+x]=Math.min(255,Math.round(63.75*(img[i]+img[i+1]+img[i+28]+img[i+29])));}return o;},
    enc(a){let s='';for(let i=0;i<a.length;i++)s+=String.fromCharCode(a[i]);return btoa(s);},dec(s){const b=atob(s),a=new Uint8Array(b.length);for(let i=0;i<b.length;i++)a[i]=b.charCodeAt(i);return a;},
    add(ch,img){if(!/^\d$/.test(ch))return;const D=this.load();const L=D[ch]=D[ch]||[];L.push(this.enc(this.small(img)));if(L.length>30)L.splice(0,L.length-30);this.cache=null;lsSet('nk-ink-mine',D);},
    count(){const D=this.load();return Object.values(D).reduce((a,L)=>a+L.length,0);},
    // only steps in when the reader is unsure; then his own closest examples get a vote
    adjust(img,pr){try{let top=0;for(let j=1;j<10;j++)if(pr[j]>pr[top])top=j;if(pr[top]>=0.85||this.count()<25)return pr;
      if(!this.cache){this.cache={};const D=this.load();for(const d in D)this.cache[d]=D[d].map(s=>this.dec(s));}
      const q=this.small(img),best=new Array(10).fill(Infinity);for(const d in this.cache){if(this.cache[d].length<3)continue;for(const v of this.cache[d]){let s=0;for(let i=0;i<196;i++){const e=q[i]-v[i];s+=e*e;}if(s<best[d])best[d]=s;}}
      const fin=best.filter(isFinite);if(fin.length<4)return pr;const ref=fin.slice().sort((a,b)=>a-b)[Math.floor(fin.length/2)]||1;
      const kn=best.map(b=>isFinite(b)?Math.exp(-3*b/ref):null),ks=kn.reduce((a,v)=>a+(v||0),0);if(!ks)return pr;
      const out=new Float32Array(10);let z=0;for(let j=0;j<10;j++){const k=kn[j]==null?0.1/10:kn[j]/ks;out[j]=Math.pow(pr[j]+1e-6,0.55)*Math.pow(k+1e-6,0.45);z+=out[j];}for(let j=0;j<10;j++)out[j]/=z;return out;}catch(e){return pr;}}},
  init(){window.addEventListener('resize',()=>this.fit());const h=$('#inkPad');if(!h||typeof HW==='undefined')return;this.pad=this.make(h,{});this.active=this.pad;document.body.classList.add('has-ink');}
};
