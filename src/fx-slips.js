/* =========================================================
   Slip finder: when he misses a long problem, show him WHERE (the column glows, "Check here!") and WHAT
   (one short tip), with Ellie saying it out loud and a 3-second replay of the fix. The right digit is never shown.
   Miss 2: redo just that one column. Miss 3: the worked answer (as before).
   A slip that comes back twice in a day earns a 2-problem mini-drill at the start of his next level.
   Every event goes to state.slipLog so the coach reports can see what helps.
   ========================================================= */
const Slip={
  TIPS:{
    borrow:{ic:'🔁',t:'Top number smaller? Borrow first.',name:'borrowing',voice:'borrow'},
    borrowed:{ic:'✏️',t:'You borrowed here. Make it one less.',name:'borrowing',voice:'borrowed'},
    carry:{ic:'⬆️',t:'Don’t forget the carried 1.',name:'carrying',voice:'carry'},
    minus:{ic:'➖',t:'It’s minus. Take away.',name:'minus signs',voice:'minus'},
    plus:{ic:'➕',t:'It’s plus. Add them up.',name:'plus signs',voice:'plus'},
    dots:{ic:'📍',t:'Line up the dots first.',name:'lining up decimals',voice:'dots'},
    place:{ic:'📏',t:'Ones under ones. Line them up.',name:'lining up places',voice:'place'},
    digits:{ic:'🔢',t:'Count your digits.',name:'digit count',voice:'digits-more'},
    boxes:{ic:'🧱',t:'Add all the boxes together.',name:'adding area boxes',voice:'boxes'},
    column:{ic:'🔍',t:'Check this column again.',name:'column slips',voice:'column'},
    firstdigit:{ic:'☝️',t:'Multiply every digit, even the first!',name:'multiplying every digit',voice:'firstdigit'},
    carrydigit:{ic:'⬆️',t:'Write the ones. Carry the tens.',name:'what to write vs. carry',voice:'carrydigit'},
    mulcarry:{ic:'➕',t:'Multiply first, then add the carry.',name:'adding the carry',voice:'mulcarry'},
    timesfact:{ic:'✖️',t:'Check that times fact.',name:'times facts',voice:'timesfact'}},
  box:null,cur:null,field:null,

  // ---------- what went wrong, and where (columns counted from the right, 0 = rightmost digit)
  analyze(P,v,ctx){ctx=ctx||{};const dp=P.dp||0,S=x=>Math.round(Number(x)*Math.pow(10,dp));const ans=S(v),c=S(P.answer),nums=P.nums.map(s=>toInt(s,dp));
    const A=String(Math.abs(ans)),C=String(Math.abs(c));
    if(ctx.area&&!ctx.noWhole&&nums.some(x=>ans===c-x))return{type:'boxes',glow:'ans'};
    if(!ctx.noWhole&&nums.length===2){const [a,b]=nums;if(P.op==='−'&&ans===a+b)return{type:'minus',glow:'op'};if(P.op==='+'&&ans===Math.abs(a-b))return{type:'plus',glow:'op'};}
    if(!ctx.noWhole&&dp>0&&(eqNum(v,rightAligned(P))||[10,100,0.1,0.01].some(m=>eqNum(v*m,P.answer))))return{type:'dots',glow:'dot'};
    if(!ctx.noWhole&&dp===0&&nums.length===2&&(P.op==='+'||P.op==='−')){const [a,b]=nums;if(String(a).length!==String(b).length){const alt=P.op==='−'?[a-b*10,a-Math.floor(b/10)]:[a+b*10,a+Math.floor(b/10)];if(alt.includes(ans))return{type:'place',glow:'ones'};}}
    if(P.op==='×'&&nums.length===2){const [a,m]=nums,n=String(a).length,dg=(x,i)=>Math.floor(Math.abs(x)/Math.pow(10,i))%10,low=Math.pow(10,n-1);
      let cy=0;for(let i=0;i<n-1;i++)cy=Math.floor((dg(a,i)*m+cy)/10);const lead=dg(a,n-1);
      if(ans%low===c%low&&ans!==c&&[lead,lead+cy].includes(Math.floor(ans/low)))return{type:'firstdigit',col:n-1,op:'×',top:lead,m,cin:cy,lead:true};
      let col=-1;for(let i=0;i<Math.max(A.length,C.length);i++){if(dg(ans,i)!==dg(c,i)){col=i;break;}}if(col<0)return{type:'column',col:0};
      if(col>=n)return{type:'mulcarry',col:n-1,op:'×',top:lead,m,cin:cy,lead:true};
      let ci=0;for(let i=0;i<col;i++)ci=Math.floor((dg(a,i)*m+ci)/10);const top=dg(a,col),pr=top*m+ci,h=dg(ans,col),info={col,op:'×',top,m,cin:ci,lead:col===n-1};
      if(pr>=10&&h===Math.floor(pr/10)%10&&h!==pr%10)return{type:'carrydigit',...info};
      if(ci&&h===(top*m)%10)return{type:'mulcarry',...info};
      return{type:'timesfact',...info};}
    if(A.length!==C.length)return dp>0&&!ctx.noWhole?{type:'dots',glow:'dot'}:{type:'digits',glow:'ans',more:A.length>C.length};
    let col=-1;for(let i=0;i<C.length;i++){if(A[A.length-1-i]!==C[C.length-1-i]){col=i;break;}}
    if(col<0)return{type:'column',col:0};
    const dig=(x,i)=>Math.floor(Math.abs(x)/Math.pow(10,i))%10,h=dig(ans,col);
    if(P.op==='−'&&nums.length===2){const [a,b]=nums;let br=0;for(let i=0;i<col;i++){const t=dig(a,i)-br;br=t<dig(b,i)?1:0;}
      const t=dig(a,col),bb=dig(b,col),need=t-br<bb,info={col,op:'−',top:t,bot:bb,bin:br,need};
      if(br&&t>=bb&&h===t-bb)return{type:'borrowed',...info};
      if(need&&(h===bb-(t-br)||h===Math.abs(t-bb)))return{type:'borrow',...info};
      if(br&&h===(t>=bb?t-bb:t+10-bb))return{type:'borrowed',...info};
      if(!br&&h===(t+bb)%10)return{type:'minus',...info};
      return{type:'column',...info};}
    if(P.op==='+'){let cy=0;for(let i=0;i<col;i++){const s=nums.reduce((u,x)=>u+dig(x,i),0)+cy;cy=Math.floor(s/10);}
      const ds=nums.map(x=>dig(x,col)),s=ds.reduce((u,d)=>u+d,0),info={col,op:'+',ds,cin:cy};
      if(cy&&h===s%10)return{type:'carry',...info};
      if(nums.length===2&&!cy&&h===Math.abs(ds[0]-ds[1]))return{type:'plus',...info};
      return{type:'column',...info};}
    return{type:'column',col};},
  tip(an){const T=this.TIPS[an.type]||this.TIPS.column;if(an.type==='digits')return{...T,t:an.more?'Count your digits. One too many?':'Count your digits. One missing?',voice:an.more?'digits-more':'digits-less'};return T;},
  key(an){if(an.type==='borrow'||an.type==='borrowed')return an.type==='borrowed'?'sub0':'sub';if(an.type==='carry')return 'add';
    if(an.type==='minus')return 'sub';if(an.type==='plus')return 'add';if(an.type==='dots')return 'dec';if(an.type==='place')return 'addlen';if(an.type==='boxes')return 'area';
    if(['firstdigit','carrydigit','mulcarry','timesfact'].includes(an.type)||an.op==='×')return 'mul';
    if(an.type==='column')return an.op==='−'?'sub':an.op==='+'?'add':null;return null;},

  // ---------- the stacked problem, with one spot glowing
  stack(P,v,o){o=o||{};const dp=P.dp||0,lay=stackLayout(P,v!=null?[v]:[]),cols=lay.W+1;
    const g=el('div',{class:'stack slip-stack',style:`grid-template-columns:repeat(${cols},1em)`});
    const glowCol=fr=>o.col!=null&&fr===o.col;
    const row=(str,cls,op,ghostN)=>{const off=cols-str.length;for(let i=0;i<cols;i++){const fr=cols-1-i;
        if(i<off){g.append(el('span',{class:'c'+(i===0&&op&&o.glowOp?' glow':'')+(glowCol(fr)?' glow':'')},i===0&&op?op:''));continue;}
        const j=i-off;let k='c'+(cls?' '+cls:'');if(ghostN&&j>=str.length-ghostN)k+=' ghost';const ip=fr-dp;
        if(dp>0&&fr===dp)k+=' dt'+(o.glowDot?' gdot':'');else if(ip>0&&ip%3===0)k+=' cm';if(glowCol(fr))k+=' glow';if(o.glowOnes&&fr===dp)k+=' glow';
        g.append(el('span',{class:k},str[j]));}};
    lay.rows.forEach((r,i)=>row(r,'',i===lay.rows.length-1?P.op:null,o.ghost?lay.ghost[i]:0));
    g.append(el('span',{class:'rule'}));
    if(v!=null)row(lay.extras[0],'yours'+(o.glowAns?' glow':''));
    if(o.col!=null)for(let i=0;i<cols;i++)g.append(el('span',{class:'c sl-arrow'},cols-1-i===o.col?'▲':''));
    return g;},
  // how he likely stacked a decimal problem: flush right, so the dots don't line up
  raw(P){const W=Math.max(...P.nums.map(s=>s.length))+1,g=el('div',{class:'stack slip-stack',style:`grid-template-columns:repeat(${W},.62em)`});
    P.nums.forEach((s,r)=>{const str=(r===P.nums.length-1?P.op:' ')+s.padStart(W-1,' ');for(const ch of str)g.append(el('span',{class:'c'+(ch==='.'?' gdot-raw':'')},ch==='.'?'•':ch.trim()));});
    return g;},

  // ---------- 3-second replays (CSS animations; "Watch again" rebuilds them)
  replay(an,P){const R=el('div',{class:'sl-play'});const cap=t=>el('div',{class:'sl-cap',style:'animation-delay:2.2s'},t);const d=(x,cls,delay)=>el('span',{class:'sl-d '+(cls||''),style:delay!=null?`animation-delay:${delay}s`:''},String(x));
    const ty=an.type;
    if(ty==='borrow'||(ty==='column'&&an.op==='−'&&an.need)){const top=an.top-an.bin+10;
      R.append(el('div',{class:'sl-col'},el('div',{class:'sl-nb'},d('next door','sl-small'),d('−1','sl-chip sl-minus1',0.3)),el('div',{class:'sl-stackc'},el('div',{class:'sl-top'},d(an.top-an.bin,'sl-old',0),d(top,'sl-new',1.4)),d(an.bot,'sl-bot'),el('div',{class:'sl-line'})),d('+10','sl-chip sl-fly',0.6)),cap(`${top} − ${an.bot} = ?`));}
    else if(ty==='borrowed'){const now=an.top-1+(an.need?10:0);
      R.append(el('div',{class:'sl-col'},el('div',{class:'sl-stackc'},el('div',{class:'sl-top'},d(an.top,'sl-old sl-strike',0),d(an.top-1,'sl-new',1.0)),d(an.bot,'sl-bot'),el('div',{class:'sl-line'})),d('lent 1','sl-chip sl-minus1',0.3)),cap(an.need?`It lent 1, then borrows: ${now} − ${an.bot}`:`It lent 1: ${now} − ${an.bot} = ?`));}
    else if(ty==='carry'){R.append(el('div',{class:'sl-col'},el('div',{class:'sl-stackc'},d('1','sl-chip sl-rise',0.4),...an.ds.map(x=>d(x,'sl-bot')),el('div',{class:'sl-line'})),d('from the right','sl-small sl-from')),cap(`${an.ds.join(' + ')} + 1 = ?`));}
    else if(ty==='firstdigit'){R.append(el('div',{class:'sl-col'},el('div',{class:'sl-stackc'},d(an.top,'sl-old sl-glowd',0),el('div',{class:'sl-line'})),d('× '+an.m,'sl-chip sl-fly',0.5)),cap(`${an.top} × ${an.m}${an.cin?' + '+an.cin:''} = ?`));}
    else if(ty==='carrydigit'){R.append(el('div',{class:'sl-op'},d('ones ⬇','sl-chip',0.2),d('tens ↗','sl-chip',0.9)),cap('Ones go down. Tens carry over.'));}
    else if(ty==='mulcarry'||ty==='timesfact'){R.append(el('div',{class:'sl-col'},el('div',{class:'sl-stackc'},an.cin?d('+'+an.cin,'sl-chip sl-rise',0.5):null,d(an.top,'sl-bot'),el('div',{class:'sl-line'})),d('× '+an.m,'sl-small sl-from')),cap(`${an.top} × ${an.m}${an.cin?' + '+an.cin:''} = ?`));}
    else if(ty==='minus'||ty==='plus'){R.append(el('div',{class:'sl-op'},d(ty==='minus'?'−':'+','sl-bigop',0)),cap(ty==='minus'?'Minus means take away.':'Plus means add.'));}
    else if(ty==='dots'){const before=this.raw(P),after=this.stack(P,null,{ghost:true,glowDot:true});before.classList.add('sl-before');after.classList.add('sl-after');R.append(el('div',{class:'sl-swap'},before,after),cap('Dots in a line. Fill gaps with 0.'));}
    else if(ty==='place'){const after=this.stack(P,null,{glowOnes:true});after.classList.add('sl-after');R.append(el('div',{class:'sl-swap'},after),cap('Ones under ones!'));}
    else if(ty==='digits'){const lay=stackLayout(P,[]);const n=String(Math.abs(Math.round(Number(an.v)*Math.pow(10,P.dp||0)))).length,top=lay.rows[0].length;
      R.append(el('div',{class:'sl-count'},...Array.from({length:n},(_,i)=>d(i+1,'sl-pop',0.25*i))),cap(P.op==='−'?`Yours: ${n} digits. Top number: ${top}.`:`Yours: ${n} digits. Biggest: ${Math.max(...lay.rows.map(r=>r.length))}.`));}
    else if(ty==='boxes'){R.append(el('div',{class:'sl-count'},...P.nums.map((x,i)=>d(fmt(Number(x)),'sl-pop sl-part',0.35*i))),cap(`${P.nums.length} boxes → add all ${P.nums.length}!`));}
    else{R.append(el('div',{class:'sl-op'},d('🔍','sl-bigop',0)),cap('Right to left, one column at a time.'));}
    return R;},

  voice(id){if(state.mute||!id)return;try{const a=typeof Lesson!=='undefined'&&Lesson.au?Lesson.au():new Audio();if(window.speechSynthesis)speechSynthesis.cancel();a.muted=false;a.src='audio/slip-'+id+'.mp3';a.currentTime=0;const p=a.play();if(p&&p.catch)p.catch(()=>{});}catch(e){}},
  pet(){return (state.hero&&state.hero.pet&&typeof PETS!=='undefined'&&PETS[state.hero.pet])?state.hero.pet:'ellie';},
  clear(){if(this.field){Pad.fields=Pad.fields.filter(f=>f!==this.field);this.field=null;}if(this.box){this.box.remove();this.box=null;}},
  log(e){const L=state.slipLog=state.slipLog||[];e=Object.assign({t:new Date().toISOString(),day:dayStr()},e);L.push(e);if(L.length>400)L.splice(0,L.length-400);saveState();return e;},
  // the next submit on the same problem tells us if the help worked
  after(ok){const c=this.cur;if(c&&c.ev&&c.ev.ok==null&&run&&c.idx===run.idx){c.ev.ok=!!ok;saveState();if(ok){this.clear();this.voice('found');say('You found the slip! 🐾','good');}}},

  // ---------- miss 1: glow + tip (+ Ellie, voice, replay). Miss 2: fix that one column.
  show(sl,v,tries,o){try{const P=sl.P,ctx={area:!!sl.area};let an=this.analyze(P,v,ctx);an.v=v;this.clear();
      if(tries===2&&(an.type==='boxes'||an.type==='minus'||an.type==='plus')&&an.col==null){const a2=this.analyze(P,v,{noWhole:true});if(a2.col!=null){a2.v=v;an=a2;}}
      const T=this.tip(an),card=$('#card');const box=this.box=el('div',{class:'slip-box'});
      const ev=this.log({kind:'help',skill:ATT&&ATT.skill,q:P.nums.join(` ${P.op} `),type:an.type,place:an.col!=null?placeName(an.col,P.dp||0):null,try:tries,ok:null,rp:0});
      this.cur={idx:run&&run.idx,ev,an};
      if(tries===1){
        const so={col:an.col,glowOp:an.glow==='op',glowDot:an.glow==='dot',glowAns:an.glow==='ans',glowOnes:an.glow==='ones'};
        const vis=an.type==='dots'?this.raw(P):this.stack(P,v,so);
        const play=el('div',{class:'sl-playwrap'});const runPlay=()=>{play.innerHTML='';play.append(this.replay(an,P));};runPlay();
        const again=el('button',{class:'sl-btn',type:'button'},'▶ Watch again');tapify(again,()=>{ev.rp++;saveState();runPlay();});
        const hear=el('button',{class:'sl-btn',type:'button'},'🔊');tapify(hear,()=>this.voice(T.voice));
        box.append(el('div',{class:'sl-row'},el('div',{class:'sl-vis'},vis,an.col!=null||an.glow?el('div',{class:'sl-here'},an.type==='dots'?'Look at the dots!':'Check here!'):null),play),
          el('div',{class:'sl-tip'},dogIcon(this.pet(),120),el('div',{class:'sl-bub'},el('span',{class:'sl-ic'},T.ic),el('b',null,T.t)),el('div',{class:'sl-btns'},hear,again)));
        this.voice(T.voice);say('Ellie sniffed out the slip! Look where it glows.','warn');this.count(an,P);}
      else{const h=this.helper(an,P,o);if(!h)return false;box.append(h);this.voice('fixcol');}
      const anchor=card.querySelector('.ans-row')||card.querySelector('.partials');if(anchor&&anchor.parentNode===card)anchor.after(box);else card.append(box);
      // a short card (big scratch paper) grows while the slip box is open; the next problem restores his paper size
      requestAnimationFrame(()=>{try{const L=$('.left');if(L&&getComputedStyle(L).flexDirection!=='row'){const lh=L.getBoundingClientRect().height,want=Math.min(lh-140,Math.max(card.getBoundingClientRect().height,box.getBoundingClientRect().height+150));
        if(want>card.getBoundingClientRect().height+4)card.style.flex=`0 0 ${Math.round(want)}px`;}box.scrollIntoView({block:'nearest',behavior:'smooth'});}catch(e){}});
      return true;}catch(e){console.warn('slip',e);this.clear();return false;}},
  helper(an,P,o){const dp=P.dp||0,wrap=el('div',{class:'sl-help'});
    if(an.type==='dots'||an.type==='place'){wrap.append(el('div',{class:'sl-ht'},'Here it is lined up the right way:'),this.stack(P,null,{ghost:true,glowDot:an.type==='dots',glowOnes:an.type==='place'}),el('div',{class:'sl-hc'},'Now solve it again from the right.'));
      say('Lined up for you. Try again!','info');this.cur.ev.helper='shown';return wrap;}
    if(an.type==='digits'){wrap.append(el('div',{class:'sl-ht'},'🔢 Count the places:'),this.stack(P,an.v,{glowAns:true}),
        el('div',{class:'sl-hc'},P.op==='−'?'Minus makes it smaller. The answer can’t be longer than the top number.':'Adding makes at most one extra digit.'));
      say('Count the digits, then try again.','info');this.cur.ev.helper='shown';return wrap;}
    if(an.col==null)return null;
    let q,want,cue;
    if(an.op==='−'){const top=an.top-an.bin+(an.need?10:0);q=`${top} − ${an.bot}`;want=top-an.bot;
      cue=an.need?`Top is smaller, so borrow: ${an.top-an.bin} becomes ${top}.`:an.bin?`This one lent 1 away, so ${an.top} becomes ${an.top-1}.`:'Top minus bottom.';}
    else if(an.op==='×'){q=`${an.top} × ${an.m}`+(an.cin?` + ${an.cin}`:'');want=an.top*an.m+an.cin;cue=an.cin?'Multiply, then add the carry.':'Multiply this digit.';}
    else if(an.op==='+'){const parts=an.ds.slice();if(an.cin)parts.push(an.cin);q=parts.join(' + ');want=parts.reduce((u,x)=>u+x,0);cue=an.cin?'Count the carried 1 too.':'Add the column.';}
    else return null;
    const f=Pad.make({sm:true,allowDot:false,max:2,ph:'?'});this.field=f;const res=el('div',{class:'sl-hc'});let tries=0;
    f.onChange=()=>{if(f.locked||f.val.length<String(want).length)return;tries++;const x=Pad.val(f);
      if(x===want){Pad.right(f);Pad.lock(f);Snd.coin();this.cur.ev.helper=tries===1?'right':'right2';saveState();
        res.textContent=an.op==='×'&&an.lead?`Yes! It’s the first digit, so write all of ${want}. Now fix the whole answer.`:want>=10?`Yes! Write the ${want%10} and carry the ${Math.floor(want/10)}. Now fix the whole answer.`:`Yes! Write ${want} there. Now fix the whole answer.`;
        setTimeout(()=>{if(o&&o.field&&!o.field.locked)Pad.focus(o.field);},700);}
      else{Pad.wrong(f);setTimeout(()=>Pad.set(f,''),350);if(tries>=2){Pad.set(f,String(want));Pad.lock(f);this.cur.ev.helper='shown';saveState();res.textContent=`It’s ${want}. Write that digit, then fix the whole answer.`;setTimeout(()=>{if(o&&o.field)Pad.focus(o.field);},900);}}};
    wrap.append(el('div',{class:'sl-ht'},`🔧 Fix just the ${placeName(an.col,dp)} column`),this.stack(P,an.v,{col:an.col}),el('div',{class:'sl-hc'},cue),el('div',{class:'sl-q'},el('span',null,q+' ='),f.el),res);
    say('Let’s fix just this one column.','info');setTimeout(()=>Pad.focus(f),50);return wrap;},

  // ---------- the same slip twice in a day: a 2-problem mini-drill opens his next level
  count(an,P){const k=this.key(an);if(!k)return;const d=dayStr();const S=state.slipDay=state.slipDay&&state.slipDay.day===d?state.slipDay:{day:d,c:{},drilled:[],next:null};
    S.c[k]=(S.c[k]||0)+1;if(S.c[k]>=2&&!S.drilled.includes(k)&&!S.next)S.next=k;saveState();},
  NAMES:{mul:'multiplying every digit',sub:'borrowing',sub0:'borrowing across a zero',add:'carrying',dec:'lining up decimals',addlen:'lining up places',area:'adding the area boxes'},
  drillProblem(k){const subRegroups=(a,b)=>{let br=0,n=0;for(let i=0;i<String(a).length;i++){const t=Math.floor(a/Math.pow(10,i))%10-br,bb=Math.floor(b/Math.pow(10,i))%10;br=t<bb?1:0;n+=br;}return n;};
    const addCarries2=(a,b)=>{let c=0,n=0;for(let i=0;i<6;i++){const s=Math.floor(a/Math.pow(10,i))%10+Math.floor(b/Math.pow(10,i))%10+c;c=s>=10?1:0;n+=c;}return n;};
    let p=null;
    if(k==='sub'){for(let t=0;t<300;t++){const a=rint(300,999),b=rint(101,a-50);const r=subRegroups(a,b);if(r>=1&&r<=2){p=mkArith('sub','−',[String(a),String(b)],0,2);break;}}}
    else if(k==='sub0'){const h=rint(3,9),a=h*100+rint(0,4),b=rint(1,h-1)*100+rint(1,9)*10+rint(5,9);p=mkArith('sub','−',[String(a),String(b)],0,2);}
    else if(k==='add'){for(let t=0;t<300;t++){const a=rint(150,899),b=rint(150,899);if(addCarries2(a,b)>=2){p=mkArith('add','+',[String(a),String(b)],0,2);break;}}}
    else if(k==='dec'){const op=Math.random()<0.5?'+':'−';const a=rint(41,89)/10;const b=(rint(11,Math.floor(a*10)-6)/10+rint(1,9)/100).toFixed(2);
      p=mkArith(op==='+'?'dec_add':'dec_sub',op,[a.toFixed(1),b],2,2);p.stacked=false;}
    else if(k==='addlen'){const a=rint(1200,9800),b=rint(12,98);p=mkArith('add','+',[String(a),String(b)],0,2);p.stacked=false;}
    else if(k==='area'){p=makeProblem('area:2');}
    else if(k==='mul'&&typeof genMul!=='undefined'){p=genMul(2);}
    if(p)p.drill=k;return p;},
  drillMix(probs,spec){const S=state.slipDay;if(!S||S.day!==dayStr()||!S.next)return probs;const k=S.next;S.next=null;S.drilled.push(k);
    const add=[this.drillProblem(k),this.drillProblem(k)].filter(Boolean);if(!add.length){saveState();return probs;}
    this.log({kind:'drill',key:k,n:add.length,mode:spec&&spec.mode});return add.concat(probs);},
  banner(p){const card=$('#card');if(!card)return;card.prepend(el('div',{class:'sl-drill'},el('span',null,'🎯'),el('b',null,`Quick practice: ${this.NAMES[p.drill]||'slips'}`),el('span',null,'Ellie picked this one for you.')));}
};
// mini-drill problems get a banner; every problem change clears the slip box and logs drill results
{const _ra=renderArith;renderArith=function(p,a){_ra.apply(this,arguments);if(p&&p.drill)Slip.banner(p);};
 const _rr=renderArea;renderArea=function(p,a){_rr.apply(this,arguments);if(p&&p.drill)Slip.banner(p);};
 const _c=complete;complete=function(p,res){try{Slip.clear();Slip.cur=null;if(p&&p.drill)Slip.log({kind:'drillDone',key:p.drill,firstTry:!!(res&&res.firstTry),solved:!!(res&&res.solved)});}catch(e){}return _c.apply(this,arguments);};}
