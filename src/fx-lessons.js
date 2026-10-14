/* =========================================================
   Lessons: short narrated animations (about a minute) that teach one idea.
   borrow:  three common borrowing mistakes, and the right way (with a check by adding back)
   countup: subtract by counting UP from the smaller number; count the jumps, not the numbers
   Narration uses the iPad's built-in voice (speechSynthesis). Captions always show.
   ========================================================= */
const Lesson={off:false,
  // recorded narration (audio/<lesson>-<step>.mp3) and each clip's length in seconds; the iPad voice is only a fallback
  CLIPS:{"countup": [2.77, 3.11, 2.45, 2.6, 7.08, 8.62, 2.45], "borrow": [3.67, 7.15, 6.14, 6.34, 5.12, 6.93, 9.49, 10.01, 7.94, 6.21, 4.71]},audio:null,
  au(){if(!this.audio){this.audio=new Audio();this.audio.preload='auto';}return this.audio;},
  // iPad only lets sound play after a tap: unlock the narration player on his first tap anywhere
  unlock(){const go=()=>{document.removeEventListener('pointerdown',go,true);try{const a=this.au();a.muted=true;a.src='audio/countup-0.mp3';const p=a.play();if(p&&p.then)p.then(()=>{a.pause();a.muted=false;}).catch(()=>{a.muted=false;});else a.muted=false;}catch(e){}};document.addEventListener('pointerdown',go,true);},
  clip(k,i,txt){if(state.mute)return;const a=this.au();try{if(window.speechSynthesis)speechSynthesis.cancel();a.muted=false;a.src='audio/'+k+'-'+i+'.mp3';a.currentTime=0;const p=a.play();if(p&&p.catch)p.catch(()=>this.speak(txt));}catch(e){this.speak(txt);}},
  NAMES:{borrow:'Borrowing: 3 sneaky mistakes',countup:'Count UP to subtract'},
  voice:null,
  speak(txt){try{if(state.mute||!window.speechSynthesis)return;const S=speechSynthesis;S.cancel();const u=new SpeechSynthesisUtterance(txt.replace(/−/g,' minus ').replace(/\+/g,' plus ').replace(/=/g,' equals '));
      if(!this.voice){const vs=S.getVoices();this.voice=vs.find(v=>/en-US/.test(v.lang)&&/Samantha|Alex|Google US/.test(v.name))||vs.find(v=>/en-US/.test(v.lang))||null;}
      if(this.voice)u.voice=this.voice;u.rate=0.95;u.pitch=1.05;S.speak(u);}catch(e){}},
  hush(){try{window.speechSynthesis&&speechSynthesis.cancel();}catch(e){}try{if(this.audio)this.audio.pause();}catch(e){}},
  seen(k){return !!(state.lessons&&state.lessons[k]);},
  // auto-play once, the first time he needs it
  maybe(k){if(this.seen(k)||this.off)return Promise.resolve(false);return this.play(k).then(()=>true);},
  btn(k,label){const b=el('button',{class:'btn btn-dark lesson-btn',type:'button'},'▶ '+(label||'Watch: '+this.NAMES[k]));tapify(b,()=>{Snd.init();this.play(k);});return b;},
  play(k){const steps=this.STEPS[k]();if(!steps)return Promise.resolve();const L=state.lessons=state.lessons||{};L[k]=(L[k]||0)+1;saveState();
    const held=typeof Pause!=='undefined'&&Pause.hold&&Pause.hold();let si=-1,t0=0,total=0;
    const C=this.CLIPS[k]||[];steps.forEach((s,i)=>{s.d=Math.max(s.t||3,C[i]!=null?C[i]+0.7:(s.say||'').split(/\s+/).length/2.5+0.9);s.at=total;total+=s.d;});
    this.clip(k,0,steps[0].say||'');si=0; // first line inside the tap, so iPad allows the voice
    const look=heroLook(),dog=look.pet&&PETS[look.pet]&&PETS[look.pet].dog?look.pet:'ellie';
    return Cine.play(total+0.4,(c,W,H,t)=>{let i=steps.length-1;for(let j=0;j<steps.length;j++)if(t<steps[j].at+steps[j].d){i=j;break;}
      if(i!==si){si=i;this.clip(k,i,steps[i].say||'');}
      const s=steps[i],kk=Math.min(1,Math.max(0,(t-s.at)/s.d));
      const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#14204a');g.addColorStop(1,'#241640');c.fillStyle=g;c.fillRect(0,0,W,H);
      c.fillStyle='#ffffff10';for(let x=0;x<W;x+=40)c.fillRect(x,0,1,H);for(let y=0;y<H;y+=40)c.fillRect(0,y,W,1);
      c.save();s.draw(c,W,H,kk,t-s.at,{dog});c.restore();
      // caption
      const cap=s.cap||s.say||'';if(cap){const fs=Math.round(Math.min(W*0.032,H*0.045,26));c.font=`600 ${fs}px Lexend,sans-serif`;c.textAlign='center';
        const words=cap.split(' '),lines=[];let ln='';for(const w of words){const tt=ln?ln+' '+w:w;if(c.measureText(tt).width>W*0.86&&ln){lines.push(ln);ln=w;}else ln=tt;}if(ln)lines.push(ln);
        const lh=fs*1.35,y0=H-24-lines.length*lh;c.fillStyle='#000a';c.fillRect(W*0.05,y0-fs,W*0.9,lines.length*lh+fs*0.7);c.fillStyle='#fff';lines.forEach((l,j)=>c.fillText(l,W/2,y0+j*lh+fs*0.15));}
      // progress
      c.fillStyle='#ffffff22';c.fillRect(0,0,W,5);c.fillStyle='#5ef2ff';c.fillRect(0,0,W*Math.min(1,t/total),5);},{skip:true})
      .then(()=>{this.hush();if(held)Pause.release();});},

  // ---------- drawing helpers
  T(c,txt,x,y,sz,col,al){c.font=`800 ${sz}px Lexend,sans-serif`;const mw=(Cine.W||1000)*0.92;while(c.measureText(txt).width>mw&&sz>12){sz-=2;c.font=`800 ${sz}px Lexend,sans-serif`;}c.textAlign=al||'center';c.textBaseline='middle';c.fillStyle=col||'#fff';c.fillText(txt,x,y);c.textBaseline='alphabetic';},
  title(c,W,H,k,a,b){const sz=Math.round(Math.min(W*0.07,H*0.1));c.globalAlpha=Math.min(1,k*4);this.T(c,a,W/2,H*0.36,sz,'#ffe066');if(b)this.T(c,b,W/2,H*0.36+sz*1.1,Math.round(sz*0.45),'#cfd5ff');c.globalAlpha=1;},
  // stacked subtraction. top/bot are digit strings. o: cross {col:newText}, ans string, ansCol, hi col, x mark, ok mark, flip note
  stack(c,W,H,top,bot,o){o=o||{};const n=Math.max(top.length,bot.length),cw=Math.min(W*0.1,H*0.13,90),fs=Math.round(cw*0.8),right=W*0.5+n*cw/2,y1=H*0.3,y2=y1+fs*1.3,yl=y2+fs*0.55,y3=yl+fs*0.85;
    const X=i=>right-i*cw-cw/2;
    if(o.hi!=null){c.fillStyle='#ffe06630';c.fillRect(X(o.hi)-cw*0.45,y1-fs*1.3,cw*0.9,y3-y1+fs*1.8);}
    const dig=(s,i)=>s[s.length-1-i];
    for(let i=0;i<n;i++){const d=dig(top,i);if(d==null)continue;const cr=o.cross&&o.cross[i]!=null;this.T(c,d,X(i),y1,fs,cr?'#8a94ad':'#fff');
      if(cr){c.strokeStyle='#ff4d6d';c.lineWidth=Math.max(3,fs*0.08);c.beginPath();c.moveTo(X(i)-fs*0.35,y1+fs*0.35);c.lineTo(X(i)+fs*0.35,y1-fs*0.35);c.stroke();this.T(c,o.cross[i],X(i),y1-fs*0.95,Math.round(fs*0.55),'#ffb627');}}
    for(let i=0;i<n;i++){const d=dig(bot,i);if(d!=null)this.T(c,d,X(i),y2,fs,'#fff');}
    this.T(c,o.op||'−',X(n-1)-cw*0.85,y2,fs,'#fff');
    c.fillStyle='#fff';c.fillRect(X(n-1)-cw*1.2,yl,n*cw+cw*0.75,Math.max(3,fs*0.07));
    if(o.ans){for(let i=0;i<o.ans.length;i++){const d=o.ans[o.ans.length-1-i];this.T(c,d,X(i),y3,fs,o.ansCol||'#3fdc6b');}}
    if(o.x){c.strokeStyle='#ff4d6d';c.lineWidth=8;const xx=right+cw*0.9,yy=y3;c.beginPath();c.moveTo(xx-22,yy-22);c.lineTo(xx+22,yy+22);c.moveTo(xx+22,yy-22);c.lineTo(xx-22,yy+22);c.stroke();}
    if(o.ok){this.T(c,'✓',right+cw*0.9,y3,fs,'#3fdc6b');}
    return {X,y1,y2,y3,cw,fs};},
  numberLine(c,W,H,lo,hi){const x0=W*0.1,x1=W*0.9,X=v=>x0+(v-lo)/(hi-lo)*(x1-x0),y=H*0.58,fs=Math.round(Math.min(W*0.035,26));
    c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(x0-20,y);c.lineTo(x1+20,y);c.stroke();
    for(let v=lo;v<=hi;v++){c.lineWidth=v%5===0?4:2;c.beginPath();c.moveTo(X(v),y-12);c.lineTo(X(v),y+12);c.stroke();this.T(c,String(v),X(v),y+34,fs,'#fff');}return {X,y};},
  arc(c,xa,xb,y,k,col,lab){if(k<=0)return;const h=Math.min(90,(xb-xa)*0.6+30);c.strokeStyle=col||'#ffb627';c.lineWidth=4;c.beginPath();
    const N=24;for(let i=0;i<=N*k;i++){const q=i/N,x=xa+(xb-xa)*q,yy=y-14-Math.sin(q*Math.PI)*h;i?c.lineTo(x,yy):c.moveTo(x,yy);}c.stroke();
    if(lab&&k>=1)this.T(c,lab,(xa+xb)/2,y-14-h-20,26,col||'#ffb627');},
  dogAt(c,id,x,y,s){const p=PETS[id],w=p.rows[0].length*s,h=p.rows.length*s;drawPet(c,id,x-w/2,y-h,s,0);},

  STEPS:{
    countup(){const L=Lesson;const ds=(W,H)=>Math.max(4,Math.round(Math.min(W,H)/65));
      // where the dog is on the line, hopping one jump at a time
      const hopX=(nl,pts,k)=>{const n=pts.length-1,q=k*n,i=Math.min(n-1,Math.floor(q)),f=q-i,xa=nl.X(pts[i]),xb=nl.X(pts[i+1]);return {x:xa+(xb-xa)*f,lift:Math.sin(f*Math.PI)*60,i,f};};
      const line=(c,W,H,lo,hi,expr)=>{L.T(c,expr,W/2,H*0.2,Math.round(Math.min(W*0.08,H*0.11)),'#ffe066');return L.numberLine(c,W,H,lo,hi);};
      return [
        {t:3,say:"Here's an easier way to subtract. Count up.",draw:(c,W,H,k)=>L.title(c,W,H,k,'Count UP to subtract','Count the jumps, not the numbers')},
        {t:4,say:'Seven minus four. Start at the smaller number, four.',draw:(c,W,H,k,t,o)=>{const nl=line(c,W,H,0,10,'7 − 4 = ?');c.fillStyle='#5ab0ff';c.beginPath();c.arc(nl.X(4),nl.y,12,0,6.28);c.fill();L.dogAt(c,o.dog,nl.X(4),nl.y-16,ds(W,H));}},
        {t:4.5,say:"Now hop up to seven. One, two, three.",draw:(c,W,H,k,t,o)=>{const nl=line(c,W,H,0,10,'7 − 4 = ?'),pts=[4,5,6,7];const P=hopX(nl,pts,Math.min(1,k*1.15));
          for(let j=0;j<3;j++)L.arc(c,nl.X(pts[j]),nl.X(pts[j+1]),nl.y,j<P.i?1:j===P.i?P.f:0,'#ffb627',String(j+1));
          c.fillStyle='#ff4d6d';c.beginPath();c.arc(nl.X(7),nl.y,12,0,6.28);c.fill();L.dogAt(c,o.dog,P.x,nl.y-16-P.lift,ds(W,H));}},
        {t:3.5,say:"Three jumps, so seven minus four is three.",draw:(c,W,H,k,t,o)=>{const nl=line(c,W,H,0,10,'7 − 4 = 3');for(let j=0;j<3;j++)L.arc(c,nl.X(4+j),nl.X(5+j),nl.y,1,'#3fdc6b',String(j+1));L.dogAt(c,o.dog,nl.X(7),nl.y-16,ds(W,H));}},
        {t:6,say:"Careful. Don't count the number you start on. Seven, six, five, four is four numbers, but it's only three jumps.",cap:'Watch out! 7, 6, 5, 4 is FOUR numbers… but only THREE jumps.',
          draw:(c,W,H,k)=>{const nl=line(c,W,H,0,10,'Don’t count where you start!');[7,6,5,4].forEach((v,j)=>{if(k>j*0.18){c.fillStyle=j===3?'#ff4d6d':'#ffe066';c.beginPath();c.arc(nl.X(v),nl.y-50,22,0,6.28);c.fill();L.T(c,String(j+1),nl.X(v),nl.y-50,24,'#1d1f33');}});
            if(k>0.8){c.strokeStyle='#ff4d6d';c.lineWidth=6;const x=nl.X(4);c.beginPath();c.moveTo(x-22,nl.y-72);c.lineTo(x+22,nl.y-28);c.moveTo(x+22,nl.y-72);c.lineTo(x-22,nl.y-28);c.stroke();}}},
        {t:7,say:"A bigger one. Twelve minus nine. Start at nine. Nine to ten is one jump. Ten to twelve is two more. One plus two is three.",cap:'12 − 9: start at 9. Hop to 10 (1). Then 10 to 12 (2 more). 1 + 2 = 3.',
          draw:(c,W,H,k,t,o)=>{const nl=line(c,W,H,8,13,'12 − 9 = ?');const a=Math.min(1,k/0.35),b=Math.min(1,Math.max(0,(k-0.4)/0.35));
            L.arc(c,nl.X(9),nl.X(10),nl.y,a,'#5ef2ff','1');L.arc(c,nl.X(10),nl.X(12),nl.y,b,'#ffb627','2');
            const x=b>0?nl.X(10)+(nl.X(12)-nl.X(10))*b:nl.X(9)+(nl.X(10)-nl.X(9))*a,lift=b>0&&b<1?Math.sin(b*Math.PI)*80:a<1?Math.sin(a*Math.PI)*50:0;L.dogAt(c,o.dog,x,nl.y-16-lift,ds(W,H));
            if(k>0.85)L.T(c,'1 + 2 = 3',W/2,H*0.36,Math.round(Math.min(W*0.06,H*0.08)),'#3fdc6b');}},
        {t:3.5,say:"Remember: count the jumps, not the numbers.",draw:(c,W,H,k,t,o)=>{L.title(c,W,H,k,'Count the JUMPS!','Start at the small number. Hop up to the big one.');L.dogAt(c,o.dog,W/2,H*0.7-Math.abs(Math.sin(t*6))*30,ds(W,H)+1);}}];},

    borrow(){const L=Lesson;
      const rod=(c,x,y,s,k)=>{for(let i=0;i<10;i++){const tx=x+(k>0?(i%5)*s*1.15*k:0),ty=y+(k>0?Math.floor(i/5)*s*1.15*k:i*s*1.05)-(k>0?0:0);c.fillStyle='#5ab0ff';c.fillRect(tx,ty,s,s);}};
      return [
        {t:3.5,say:"Here are three common borrowing mistakes, and how to fix each one.",draw:(c,W,H,k)=>L.title(c,W,H,k,'Borrowing','3 sneaky mistakes, and how to beat them')},
        {t:5,say:"Fifty-two minus twenty-seven. Start with the ones. Two minus seven doesn't work, because two is smaller than seven.",cap:'52 − 27. Start with the ones: 2 − 7? 2 is smaller than 7!',draw:(c,W,H,k)=>{L.stack(c,W,H,'52','27',{hi:0});}},
        {t:6,say:"Mistake one is flipping it to seven minus two. You can't flip it. The top number always goes first.",cap:'Mistake 1: flipping it to 7 − 2. You can’t flip! The TOP number goes first.',
          draw:(c,W,H,k)=>{const g=L.stack(c,W,H,'52','27',{hi:0,ans:k>0.35?'35':'',ansCol:'#ff4d6d',x:k>0.55});if(k>0.15)L.T(c,'7 − 2 = 5 ?',W*0.18,g.y2,Math.round(g.fs*0.5),'#ff9f43');L.T(c,'MISTAKE 1',W/2,H*0.1,Math.round(g.fs*0.5),'#ff4d6d');}},
        {t:6.5,say:"Here's the right way. Borrow a ten. Five tens becomes four tens, and two ones becomes twelve ones.",cap:'The right way: borrow a ten. 5 tens → 4 tens. 2 ones → 12 ones.',
          draw:(c,W,H,k)=>{const g=L.stack(c,W,H,'52','27',{hi:0,cross:k>0.25?{1:'4',0:k>0.6?'12':undefined}:null});
            const s=Math.max(8,Math.round(g.fs*0.22)),mv=Math.min(1,Math.max(0,(k-0.25)/0.4)),x=W*0.1+mv*W*0.05;rod(c,x,g.y1-s*3,s,mv>0.9?1:0);L.T(c,mv>0.9?'10 ones':'1 ten',x+s*3,g.y1-s*5,Math.round(s*1.6),'#5ab0ff');}},
        {t:5.5,say:"Twelve minus seven is five. Four minus two is two. The answer is twenty-five.",cap:'12 − 7 = 5. 4 − 2 = 2. The answer is 25!',draw:(c,W,H,k)=>{L.stack(c,W,H,'52','27',{cross:{1:'4',0:'12'},ans:k>0.5?'25':k>0.2?'5':'',ok:k>0.75});}},
        {t:6.5,say:"Mistake two is borrowing, but forgetting to make the tens one smaller. When you borrow, cross it out and write one less.",cap:'Mistake 2: borrowing but forgetting to make the tens ONE LESS. Cross it out, write one less!',
          draw:(c,W,H,k)=>{const g=L.stack(c,W,H,'52','27',{cross:{0:'12'},hi:1,ans:k>0.3?'35':'',ansCol:'#ff4d6d',x:k>0.5});L.T(c,'MISTAKE 2',W/2,H*0.1,Math.round(g.fs*0.5),'#ff4d6d');if(k>0.6)L.T(c,'5 should be 4!',W*0.18,g.y1,Math.round(g.fs*0.45),'#ffb627');}},
        {t:5.5,say:"Mistake three happens with a zero. Three hundred two minus one hundred forty-seven. The tens place has a zero, so there's nothing to borrow there.",cap:'Mistake 3: borrowing across a ZERO. 302 − 147: the tens have 0. Nothing to borrow there!',
          draw:(c,W,H,k)=>{const g=L.stack(c,W,H,'302','147',{hi:k<0.5?0:1});L.T(c,'MISTAKE 3',W/2,H*0.1,Math.round(g.fs*0.5),'#ff4d6d');}},
        {t:9,say:"So go next door to the hundreds. Three becomes two, and the zero becomes ten. Then borrow from that ten. It becomes nine, and the two becomes twelve.",cap:'Go next door: 3 → 2, and the 0 → 10. Now borrow from that ten: 10 → 9, and 2 → 12.',
          draw:(c,W,H,k)=>{const cr={};if(k>0.15)cr[2]='2';if(k>0.35)cr[1]=k>0.6?'9':'10';if(k>0.7)cr[0]='12';L.stack(c,W,H,'302','147',{cross:cr,hi:k<0.35?2:k<0.6?1:0});}},
        {t:6.5,say:"Twelve minus seven is five. Nine minus four is five. Two minus one is one. The answer is one hundred fifty-five.",cap:'12 − 7 = 5. 9 − 4 = 5. 2 − 1 = 1. The answer is 155.',
          draw:(c,W,H,k)=>{L.stack(c,W,H,'302','147',{cross:{2:'2',1:'9',0:'12'},ans:k>0.6?'155':k>0.35?'55':k>0.12?'5':'',ok:k>0.8});}},
        {t:6.5,say:"Check it by adding back. One fifty-five plus one forty-seven is three hundred two. It matches.",cap:'Check by adding back: 155 + 147 = 302. It matches! ✓',
          draw:(c,W,H,k)=>{L.stack(c,W,H,'155','147',{op:'+',ans:k>0.45?'302':'',ansCol:'#5ef2ff',ok:k>0.65});L.T(c,'CHECK IT',W/2,H*0.1,34,'#5ef2ff');}},
        {t:5,say:"Top number first. Cross out and write one less. And zeros pass it along.",draw:(c,W,H,k)=>{const fs=Math.round(Math.min(W*0.045,H*0.065));
          ['1. Top number goes first','2. Cross out, write one less','3. Zeros pass it along','4. Check by adding back'].forEach((s,i)=>{c.globalAlpha=Math.min(1,Math.max(0,(k-i*0.15)*4));L.T(c,s,W/2,H*0.22+i*fs*1.6,fs,i===3?'#5ef2ff':'#ffe066');});c.globalAlpha=1;}}];}
  }
};

Lesson.unlock();
