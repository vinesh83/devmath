/* =========================================================
   3D Shop: every item picture (outfits, hats, capes, pets, dog gear, rides, the Legend Vault) and the big
   preview are toon 3D renders, matching the island. Pictures draw a few per frame so the Shop opens at once;
   each is made once and kept. Without 3D (old device), the pixel pictures stay.
   ========================================================= */
const Shop3D={
  // his look in 3D terms (outfit and cape colors come from the catalog)
  look(L){const col=(k,id,f)=>((CATALOG[k]||[]).find(z=>z.id===id)||{})[f];
    return {skin:L.skin,hair:L.hair,outfit:L.outfit,outfitCol:col('outfit',L.outfit,'B'),hat:L.hat&&L.hat!=='none'?L.hat:null,cape:L.cape&&L.cape!=='none'?L.cape:null,capeCol:col('cape',L.cape,'c')};},
  dogOf(L){return L.pet&&PETS[L.pet]&&PETS[L.pet].dog?L.pet:'ellie';},
  spec(tab,it,L){if(tab==='outfit'||tab==='hat'||tab==='cape')return {hero:this.look(Object.assign({},L,{[tab]:it.id}))};
    if(tab==='pet')return it.id==='none'?null:{pet:it.id};
    if(tab==='dogacc')return {pet:this.dogOf(L),dog:{[it.slot]:it.id}};
    if(tab==='ride')return it.id==='none'?{hero:this.look(L)}:{ride:it.id};return null;},
  ready(){return typeof Cine3D!=='undefined'&&!!Cine3D.shot;},
  // swap pictures in, a few per frame
  paint(jobs){const my=this.gen=(this.gen||0)+1;let i=0;const step=()=>{if(my!==this.gen)return;const t0=performance.now();
      while(i<jobs.length&&performance.now()-t0<14){const [cv,spec,w,h,o]=jobs[i++];if(!cv.isConnected||!spec)continue;
        try{const c=Cine3D.shot(spec,Object.assign({w,h,res:2},o||{}));c.className=(cv.className?cv.className+' ':'')+'s3d';c.style.width=w+'px';c.style.height=h+'px';cv.replaceWith(c);}catch(e){console.warn('shop3d',e);}}
      if(i<jobs.length)requestAnimationFrame(step);};requestAnimationFrame(step);},
  apply(){const S=$('#scr-shop');if(!S||S.hidden&&!S.childElementCount)return;if(!this.ready()){this.load();return;}
    const L=Object.assign({},heroLook()),jobs=[];
    const prev=S.querySelector('.shop-prev > canvas');if(prev)jobs.push([prev,Object.assign({hero:this.look(L)},L.pet&&L.pet!=='none'?{pet:L.pet,dog:PETS[L.pet]&&PETS[L.pet].dog?(L.dogAcc||{}):undefined}:{}),200,200]);
    const btns=[...S.querySelectorAll('.items > .item')];
    if(shopTab==='vault'){const V=Brave.VAULT;const vb=btns.filter(b=>b.classList.contains('legend'));vb.forEach((b,k)=>{const it=V[k],cv=b.querySelector('canvas');if(it&&cv)jobs.push([cv,{hero:this.look(Object.assign({},L,{[it.cat]:it.id}))},96,96]);});}
    else{const list=CATALOG[shopTab].filter(x=>!x.vault);btns.forEach((b,k)=>{const it=list[k],cv=b.querySelector('canvas');if(it&&cv)jobs.push([cv,this.spec(shopTab,it,L),96,96,shopTab==='ride'&&it.id!=='none'?{turn:1.15,tilt:0.12}:shopTab==='dogacc'?{turn:0.55,tilt:0.3}:null]);});}
    this.paint(jobs);},
  load(){if(this.loading||typeof Cin3==='undefined')return;this.loading=true;Promise.resolve(Cin3.load()).then(ok=>{this.loading=false;if(ok&&this.ready()&&!$('#scr-shop').hidden)this.apply();}).catch(()=>{this.loading=false;});}
};
{const _rs=renderShop;renderShop=function(){const r=_rs.apply(this,arguments);try{Shop3D.apply();}catch(e){console.error(e);}return r;};}
window.__shop3d=Shop3D;
