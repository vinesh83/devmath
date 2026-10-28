/* =========================================================
   Second reader for handwritten answers. The iPad's digit reader is quick but misreads some of Dev's digits,
   and a misread answer gets marked wrong. When the quick reader's answer would be wrong (or it isn't sure),
   a picture of his ink goes to Claude (server /api/read), which reads the number without knowing the right
   answer. If it reads something different, the answer box is corrected. While it reads (about a second, never
   more than 3), Submit waits. Needs the walkie-talkie code; without it the quick reader works alone.
   ========================================================= */
const ReadCheck={
  URL:'https://ellie-walkie.vercel.app/api/read',
  pads:[],
  // the right answer for the problem on screen, when there is a single one
  // (a box can carry its own answer as f.want: the island's lock and duels, the Workshop)
  ans(f){if(f&&f.want!=null)return String(f.want);if($('#scr-level').hidden)return null;try{const p=run&&run.queue&&run.queue[run.idx];if(!p)return null;const a=p.answer!=null?p.answer:(p.base&&p.base.answer);return a==null||isNaN(a)?null:String(+a);}catch(e){return null;}},
  // his strokes as a clean black-on-white picture, cropped to the ink
  image(I){const S=I.strokes;if(!S||!S.length)return null;let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
    for(const s of S)for(const p of s){x0=Math.min(x0,p.x);y0=Math.min(y0,p.y);x1=Math.max(x1,p.x);y1=Math.max(y1,p.y);}
    const m=14,w=x1-x0+2*m,h=y1-y0+2*m,k=Math.min(120/h,480/w,3),c=document.createElement('canvas');c.width=Math.max(40,Math.round(w*k));c.height=Math.max(40,Math.round(h*k));
    const g=c.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,c.width,c.height);g.strokeStyle='#000';g.lineWidth=Math.max(3,5*k/1.5);g.lineCap='round';g.lineJoin='round';
    for(const s of S){g.beginPath();s.forEach((p,i)=>{const X=(p.x-x0+m)*k,Y=(p.y-y0+m)*k;i?g.lineTo(X,Y):g.moveTo(X,Y);});if(s.length===1)g.lineTo((s[0].x-x0+m)*k+0.5,(s[0].y-y0+m)*k);g.stroke();}
    return c.toDataURL('image/png');},
  // any answer button that is pressed while the second reader works waits for it, then goes through
  after(fn){if(!this.busy)return fn();(this.waiting=this.waiting||[]).push(fn);},
  hold(on){this.busy=on;if(!on&&this.waiting){const w=this.waiting;this.waiting=null;setTimeout(()=>w.forEach(fn=>{try{fn();}catch(e){console.error(e);}}),0);}const B=[...document.querySelectorAll('#actions .btn')];B.forEach(b=>{if(on){if(b.dataset.rc==null){b.dataset.rc=b.disabled?'1':'0';b.disabled=true;}}else if(b.dataset.rc!=null){b.disabled=b.dataset.rc==='1';delete b.dataset.rc;}});
    const host=document.querySelector('#inkPad');if(host)host.classList.toggle('rc-reading',on);},
  // a box that judges itself as he writes (Dojo, division steps) waits for this reader unless the quick read is surely right
  sure(f,txt,p){const want=this.ans(f);return want!=null&&String(txt).replace(/[^0-9.]/g,'')===want&&p>=0.9;},
  release(f){if(f&&f.rcDefer){f.rcDefer=false;if(f.onChange&&!f.locked)f.onChange(f);}},
  async check(f,txt,minP,I){if(!state.ellieCode||!f||f.locked||!I)return this.release(f);const want=this.ans(f),at=I.lastAt;
    if(want!=null&&String(txt)===want&&minP>=0.9)return this.release(f);    // read as right, and sure of it: nothing to check
    if(!I.strokes.length)return this.release(f);const img=this.image(I);if(!img)return this.release(f);
    const my=(this.n=(this.n||0)+1);this.hold(true);const lab=I.host.querySelector('.ink-read');if(lab)lab.textContent='Reading your writing…';
    let got=null;try{const ac=new AbortController(),t=setTimeout(()=>ac.abort(),3000);
      // the whole read, body included, gives up after 3.5 s so nothing stays on hold
      got=await Promise.race([fetch(this.URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({code:state.ellieCode,image:img,dot:!!f.allowDot}),signal:ac.signal}).then(r=>r.ok?r.json():null).then(j=>j&&j.text),
        new Promise(ok=>setTimeout(()=>ok(null),3500))]);clearTimeout(t);}catch(e){}
    if(my!==this.n)return this.release(f);this.hold(false);
    // only change the box if he hasn't written more since, and the second reader is sure
    // trust the second reader when both count the same number of digits, or the quick reader wasn't sure
    const agreeLen=got&&got.replace('.','').length===String(txt).replace('.','').length;
    const fresh=I.lastAt===at&&I.target===f;
    if(got&&fresh&&!f.locked&&got!==String(f.val)&&(agreeLen||minP<0.6)){f.val=got.slice(0,f.max+1);f.src='ink2';Pad.render(f);if(typeof ANS!=='undefined'&&!ANS.firstInput)ANS.firstInput=Date.now();}
    if(lab){lab.textContent=f.val?'I read: '+f.val:'Hmm, write it a bit bigger?';lab.className='ink-read'+(f.val?'':' meh');}
    (state.readLog=state.readLog||[]).push({t:Date.now(),quick:String(txt),second:got,p:+(+minP).toFixed(2)});if(state.readLog.length>100)state.readLog.shift();
    this.release(f);}
};
// Pad and InkBox are defined further down this script: hook in once everything has loaded
setTimeout(()=>{try{
  const hook=I=>{if(!I||I.__rc)return;I.__rc=1;ReadCheck.pads.push(I);const rd=I.read.bind(I);
    I.read=function(){const f=this.target,before=f&&f.lastAt;rd();if(!f||f.locked)return;
      // the quick reader filled the box, or gave up: either way, let the second reader look
      if(f.lastAt!==before&&f.src==='ink')ReadCheck.check(f,f.val,f.inkP==null?0:f.inkP,this);else if(f.lastAt===before)ReadCheck.check(f,'',0,this);};};
  const pin=Pad.input.bind(Pad);Pad.input=function(f,txt,src,p,at){
    if(src==='ink'&&state.ellieCode&&f&&f.onChange&&!ReadCheck.sure(f,txt,p==null?0:p)){const oc=f.onChange;f.onChange=null;try{pin(f,txt,src,p,at);}finally{f.onChange=oc;}f.rcDefer=true;return;}
    return pin(f,txt,src,p,at);};
  const mk=InkBox.make.bind(InkBox);InkBox.make=function(){const I=mk.apply(this,arguments);hook(I);return I;};
  hook(InkBox.pad);
}catch(e){console.error(e);}},0);
window.__readcheck=ReadCheck;
