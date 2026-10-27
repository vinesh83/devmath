/* =========================================================
   Pause: stops the clock so time away never counts as slow answers.
   Pauses itself when the app goes to the background or after 60 s with no touches.
   ========================================================= */
const Pause={on:false,at:0,last:Date.now(),
  init(){const b=$('#lv-pause');if(b)tapify(b,()=>this.pause('button'));NoZoom.init();
    ['pointerdown','keydown'].forEach(e=>document.addEventListener(e,()=>{this.last=Date.now();},true));
    document.addEventListener('visibilitychange',()=>{if(document.hidden)this.pause('away');});
    setInterval(()=>{if(!this.on&&this.active()&&Date.now()-this.last>60000)this.pause('idle');},4000);},
  active(){return typeof run!=='undefined'&&!!run&&!$('#scr-level').hidden&&$('#overlay').hidden&&$('#cine').hidden&&$('#talk').hidden;},
  pause(why){if(this.on||!this.active())return;this.on=true;this.at=Date.now();Battle.stop();Music.stop();if(typeof Talk!=='undefined')Talk.unpop();
    const m=this.modal=el('div',{class:'modal pause-modal'},el('h2',null,'⏸ Paused'),
      el('p',null,why==='idle'?'Taking a break? The clock stopped so it won’t count against your speed.':'The clock is stopped. Take your time!'),
      el('div',{class:'btns'},el('button',{class:'btn btn-dark',type:'button',onclick:()=>BoxBreath.open(()=>overlay(m))},'🧘 Box breathing'),el('button',{class:'btn btn-green',type:'button',onclick:()=>this.resume()},'Resume ▸')));overlay(m);},
  // hold/release: stop the clock without the pause screen (used by recharge breaks)
  hold(){if(this.on)return false;this.on=true;this.at=Date.now();this.held=true;return true;},
  release(){if(!this.held)return;this.held=false;const d=Date.now()-this.at;this.on=false;this.shift(d);this.last=Date.now();},
  shift(d){if(typeof run!=='undefined'&&run){const p=run.queue[run.idx];if(p){if(p.ts)p.ts+=d;if(p.t0)p.t0+=d;}if(run.dj&&run.dj.end)run.dj.end+=d;if(run.start)run.start+=d;}
    if(ANS.firstInput)ANS.firstInput+=d;if(typeof ATT!=='undefined'&&ATT&&ATT.t0)ATT.t0+=d;},
  resume(){if(!this.on)return;const d=Date.now()-this.at;this.on=false;
    if(run){const p=run.queue[run.idx];if(p){if(p.ts)p.ts+=d;if(p.t0)p.t0+=d;}if(run.dj&&run.dj.end)run.dj.end+=d;if(run.start)run.start+=d;}
    if(ANS.firstInput)ANS.firstInput+=d;if(typeof ATT!=='undefined'&&ATT&&ATT.t0)ATT.t0+=d;
    overlay(null);this.last=Date.now();Battle.start();Music.play(run&&run.spec&&run.spec.mech?'boss':'battle');}
};
/* No accidental zoom: fast taps and two-finger play in battles can make iPad zoom in and get stuck.
   Block pinch and double-tap zoom, and if the screen ever ends up zoomed, snap it back. */
const NoZoom={init(){const stop=e=>e.preventDefault();
    ['gesturestart','gesturechange','gestureend'].forEach(k=>document.addEventListener(k,stop,{passive:false}));
    document.addEventListener('touchmove',e=>{if(e.touches&&e.touches.length>1&&!e.target.closest('.scratch,.ink,.bp-cv,.bb-cv'))e.preventDefault();},{passive:false});
    let last=0;document.addEventListener('touchend',e=>{const now=Date.now();if(now-last<320&&!e.target.closest('input,textarea,select'))e.preventDefault();last=now;},{passive:false});
    const cine=document.querySelector('#cine');if(cine)['touchstart','touchmove'].forEach(k=>cine.addEventListener(k,e=>{if(e.cancelable&&e.target.closest('canvas,.bb-ctl,.bb-btn'))e.preventDefault();},{passive:false}));
    const vv=window.visualViewport;if(vv)vv.addEventListener('resize',()=>{if(vv.scale>1.02)this.reset();});},
  reset(){const m=document.querySelector('meta[name=viewport]');if(!m)return;const base='width=device-width,initial-scale=1,viewport-fit=cover';
    m.setAttribute('content',base+',maximum-scale=1,user-scalable=no');setTimeout(()=>m.setAttribute('content',base+',maximum-scale=1'),300);}};
/* auto-update: when a new version is published, reload on the map so he never has to restart the app */
const BUILD='__BUILD__';
const Updater={want:false,
  async check(){try{const r=await fetch('version.txt?t='+Date.now(),{cache:'no-store'});if(!r.ok)return;const v=(await r.text()).trim();if(v&&v!==BUILD&&BUILD.indexOf('__')<0){if(lsGet('nk-upd',null)===v)return; /* already reloaded once for this version: don't loop */this.want=v;this.apply();}}catch(e){}},
  apply(){if(!this.want)return;const S=[...document.querySelectorAll('.screen')].find(s=>!s.hidden);const safe=!S||['scr-map','scr-onboard','scr-dojo','scr-shop','scr-mech'].includes(S.id);
    if(safe&&$('#overlay').hidden&&$('#cine').hidden&&$('#talk').hidden){saveState();lsSet('nk-upd',this.want);location.replace(location.pathname+'?v='+this.want);}else{clearTimeout(this.tm);this.tm=setTimeout(()=>this.apply(),3000);}},
  init(){document.addEventListener('visibilitychange',()=>{if(!document.hidden)this.check();});setInterval(()=>this.check(),10*60*1000);setTimeout(()=>this.check(),5000);}
};
// Music guard: some screens (lesson videos, cutscenes) stop the music and never restart it.
// While a level is running and nothing is covering it, make sure its music is playing.
setInterval(()=>{try{if(typeof Music==='undefined'||!Snd.ctx||state.musicOff||Pause.on||!Pause.active()||document.querySelector('.vp,#cine3d'))return;
  if(!Music.song)Music.play(run.spec&&run.spec.mech?'boss':'battle');}catch(e){}},1500);
Object.defineProperty(window,'__snd',{get:()=>({Music,Snd,state})});
