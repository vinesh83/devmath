// voxel model flying apart (for the boss's defeat)
function shatter(g,center,power){const parts=[];const m4=new THREE.Matrix4(),p=new THREE.Vector3(),q=new THREE.Quaternion(),sc=new THREE.Vector3();
  for(const mesh of [g.userData.solid,g.userData.glow]){if(!mesh)continue;for(let i=0;i<mesh.count;i++){mesh.getMatrixAt(i,m4);m4.decompose(p,q,sc);const d=p.clone().sub(center);
      parts.push({mesh,i,p:p.clone(),v:V(d.x*power*(0.6+rnd()),(1.5+rnd()*2.5)*power*0.6,d.z*power*(0.6+rnd())+(rnd()-.5)*power),r:V(rnd()*8,rnd()*8,rnd()*8)});}}
  const e=new THREE.Euler();return tt=>{for(const a of parts){const y=Math.max(-0.05,a.p.y+a.v.y*tt-4.9*tt*tt);p.set(a.p.x+a.v.x*tt,y,a.p.z+a.v.z*tt);e.set(a.r.x*tt,a.r.y*tt,a.r.z*tt);q.setFromEuler(e);m4.compose(p,q,V(1,1,1));a.mesh.setMatrixAt(a.i,m4);}
    for(const mesh of [g.userData.solid,g.userData.glow])if(mesh)mesh.instanceMatrix.needsUpdate=true;};}
const once=(fx,k,f)=>{if(!fx[k]){fx[k]=1;f();}};

function worldScene(st,S,o){const id=o.world;seed=11+id.length;const W=WORLDS[id](st),D=30,deckY=W.deckY||0,F=W.focus;
  const hero=heroRig(st,S);hero.g.position.set(0,deckY,-20);
  const boss=voxel(S.gmech,{size:0.62,depth:4,tint:W.boss,tintK:0.45,metal:0.45,glow:['#ff2d4d','#ff4d6d','#5ef2ff','#ffe066']});const BH=boss.userData.h;boss.position.set(W.land.x,W.land.y-BH-2,W.land.z);st.scene.add(boss);
  if(boss.userData.glowMat){boss.userData.glowMat.color.set(new THREE.Color(2.6,0.3,0.35));boss.userData.glowMat.opacity=0;}
  const rim=new THREE.PointLight(W.boss,0,60,1.4);rim.position.set(W.land.x,BH*0.7,W.land.z+10);st.scene.add(rim);
  const key=new THREE.PointLight('#fff4e0',0,12,1.5);st.scene.add(key);
  const flash=new THREE.AmbientLight('#ffffff',0);st.scene.add(flash);const sun0=st.sun.intensity;const hemi=st.scene.children.find(c=>c.isHemisphereLight),hemi0=hemi?hemi.intensity:1;
  const sd=st.sun.position.clone().normalize();for(let i=0;i<4;i++)st.shaft(V(F.x+sd.x*60+(i-1.5)*14,90,F.z+sd.z*60),V(-sd.x,-1,-sd.z),140,10+i*3,id==='forge'?'#ff7b1c':id==='castle'?'#9fb8ff':'#fff1c8',id==='castle'?0.05:0.06);
  const glow=st.part(300,{size:0.07,grav:-0.4,jit:0.5,bright:2.4});const fx={};
  return {D,update(t,dt){if(W.tick)W.tick(t);const hz=hero.g.position;
    const dark=seg(t,16,17.2)*(1-0.5*seg(t,27.5,29));st.sun.intensity=sun0*(1-0.65*dark);if(hemi)hemi.intensity=hemi0*(1-0.55*dark);flash.intensity=Math.max(0,flash.intensity-dt*12);
    if(t<5){const k=ease(seg(t,0,5));st.look(V(lerp(F.x+48,F.x+18,k),lerp(F.y+20,F.y+6,k),lerp(F.z+62,F.z+30,k)),V(F.x,F.y,F.z));}
    else if(t<9){const a=lerp(-0.8,0.8,ease(seg(t,5,9)));st.look(V(F.x+Math.sin(a)*42,F.y+11,F.z+Math.cos(a)*42),V(F.x,F.y*0.7,F.z));}
    else if(t<12){const k=seg(t,9,12);st.fov(lerp(55,42,k));st.look(V(lerp(-3,1,k),deckY+lerp(1.2,1.6,k),lerp(34,-2,k)),V(lerp(-1,0,k),deckY+1.4,lerp(10,-30,k)));}
    else if(t<16){st.fov(42);const k=seg(t,12,16);hz.z=lerp(-20,4,k);hero.set(true,t);if(rnd()<0.7)W.dust.emit(V(hz.x,deckY+0.1,hz.z-0.6),V(0,0.6,-1),0.4,W.cols,0.8,2);
      if(t<14)st.look(V(lerp(3.5,2.4,seg(t,12,14)),deckY+1.2,hz.z+5.5),V(0,deckY+0.9,hz.z));else st.look(V(2.4,deckY+0.8,hz.z+2.6),V(0,deckY+0.9,hz.z));}
    else{if(t<25.5){hz.z=4;hero.set(false,t);}
      once(fx,'thunder',()=>{flash.intensity=7;o.sfx&&o.sfx('thunder');});if(t>17.8)once(fx,'th2',()=>{flash.intensity=4;});
      const rk=easeOut(seg(t,16.5,19.5));boss.position.y=lerp(W.land.y-BH-2,W.land.y,rk);if(t<19.5){st.shake=Math.max(st.shake,0.18);if(rnd()<0.8)W.dust.emit(V(W.land.x+(rnd()-.5)*BH,W.land.y+0.5,W.land.z+(rnd()-.5)*4),V(0,4,2),2,W.cols,1.4,6);}
      if(t>=19.5)once(fx,'stomp',()=>{st.shake=1.3;flash.intensity=3;o.sfx&&o.sfx('slam');W.dust.emit(V(W.land.x,W.land.y+1,W.land.z+3),V(0,3,5),8,W.cols,1.8,240);});
      if(boss.userData.glowMat)boss.userData.glowMat.opacity=seg(t,20,20.4)*(0.55+0.45*Math.abs(Math.sin(t*4)));
      rim.intensity=lerp(0,150,seg(t,17,19.5))*(t>20.5&&t<21.2?1.6:1);if(t>20.5)once(fx,'roar',()=>{st.shake=0.6;o.sfx&&o.sfx('roar');});
      if(t<19.5){const k=ease(seg(t,16,19.5));st.look(V(1.6,deckY+lerp(1.3,1.0,k),lerp(7.6,7.0,k)),V(0,deckY+lerp(3,BH*0.5,k),W.land.z));}
      else if(t<22.5){const k=ease(seg(t,19.5,22.5));st.look(V(lerp(2.2,1.2,k),deckY+lerp(0.6,0.35,k),lerp(2,-4,k)),V(W.land.x,W.land.y+BH*lerp(0.6,0.8,k),W.land.z));}
      else if(t<25.5){const a=lerp(0.75,-0.55,ease(seg(t,22.5,25.5)));hz.y=deckY+Math.max(0,Math.sin(seg(t,23.6,24.2)*Math.PI))*0.5;
        if(rnd()<0.6)glow.emit(V(hz.x+(rnd()-.5)*1.4,deckY+rnd()*1.6,hz.z+(rnd()-.5)*1.4),V(0,0.8,0),0.2,['#ffe066','#5ef2ff','#ffffff'],1.2,2);
        st.look(V(hz.x+Math.sin(a)*3.4,deckY+1.3,hz.z+Math.cos(a)*3.4),V(hz.x,deckY+1.0,hz.z));key.position.set(hz.x+Math.sin(a)*2.2,deckY+1.8,hz.z+Math.cos(a)*2.2);key.intensity=6;}
      else{key.intensity=Math.max(0,key.intensity-dt*20);hz.y=deckY;const rk2=seg(t,25.5,27.5);hz.z=lerp(4,-3,rk2);hero.set(rk2<1,t);if(rk2<1&&rnd()<0.7)W.dust.emit(V(hz.x,deckY+0.1,hz.z+0.6),V(0,0.6,1),0.4,W.cols,0.8,2);
        const k=ease(seg(t,25.5,30));st.look(V(lerp(4,9,k),deckY+lerp(2,6,k),lerp(10,18,k)),V(0,deckY+lerp(4,5.5,k),-16));}}
    titleCard(o.ov,t,27.5,null,o.sub,o.color);o.ov.title.textContent=o.title;
    o.ov.boss.style.opacity=String(seg(t,20.5,21));o.ov.boss.textContent=o.boss?'BOSS: '+o.boss:'';
    o.ov.fade.style.opacity=String(Math.max(1-seg(t,0,0.7),seg(t,D-0.6,D)));}};}

function arena(st){st.sky('#0a0820','#5a2a6a','#1a0a20',true);st.light('#fff0e0',2.8,'#b8b0ff','#3a2a4a',V(-20,30,25));{const k=new THREE.DirectionalLight('#9fd8ff',1.4);k.position.set(20,12,30);st.scene.add(k);}st.ground('#22202e');
  const B=[];for(let r=0;r<40;r++){const a=r/40*6.283;B.push([Math.cos(a)*24,1.5,Math.sin(a)*24-6,3,3+rnd()*4,3,'#3a3650']);}for(let x=-14;x<=14;x+=2)for(let z=-20;z<=8;z+=2)B.push([x,0.01,z,1.9,0.04,1.9,(x+z)%4===0?'#2e2b40':'#26243a']);
  for(let i=0;i<16;i++){const a=i/16*6.283;B.push([Math.cos(a)*30,6,Math.sin(a)*30-6,1.2,12,1.2,'#2a2840'],[Math.cos(a)*30,12.4,Math.sin(a)*30-6,2,0.8,2,'#4a4670']);}
  st.boxes(B);const sh=[];for(const [x,z,c] of [[-10,-4,'#5ef2ff'],[10,-4,'#ff4d6d'],[-12,-16,'#c084fc'],[12,-16,'#ffe066']]){const l=new THREE.SpotLight(c,400,60,0.5,0.6,1.4);l.position.set(x,18,z);l.target.position.set(0,0,-6);st.scene.add(l,l.target);sh.push(st.shaft(V(x,18,z),V(-x*0.05,-1,(-6-z)*0.05),22,4,c,0.07));}
  return sh;}

function mechScene(st,S,o){seed=42;const shafts=arena(st);
  const alarm=new THREE.PointLight('#ff2020',0,50,1.2);alarm.position.set(0,10,4);st.scene.add(alarm);
  const me=voxel(S.mech,{size:0.16,depth:4,metal:0.55});me.position.set(-3.2,0,0);me.rotation.y=0.35;st.scene.add(me);const MH=me.userData.h;
  const gm=voxel(S.gmech,{size:0.2,depth:4,metal:0.55});gm.position.set(3.4,60,-1);gm.rotation.y=-0.35;st.scene.add(gm);
  if(me.userData.glowMat)me.userData.glowMat.opacity=0;if(gm.userData.glowMat)gm.userData.glowMat.opacity=0;
  const steam=st.part(700,{size:0.14,add:false,grav:-0.6,drag:0.4,jit:0.6,bright:1}),smoke=st.part(500,{size:1.1,add:false,grav:-0.3,drag:0.6,jit:1.4,bright:0.9}),fire=st.part(900,{size:0.35,grav:-0.5,jit:1.2,bright:2.4}),spark=st.part(900,{size:0.14,grav:6,jit:4,bright:2.6}),charge=st.part(300,{size:0.14,jit:0.1,bright:2.8});
  const ring=new THREE.Mesh(new THREE.TorusGeometry(1,0.12,8,48),new THREE.MeshBasicMaterial({color:new THREE.Color(3,2.2,1),transparent:true,toneMapped:false}));ring.rotation.x=Math.PI/2;ring.visible=false;st.scene.add(ring);
  const orb=new THREE.Mesh(new THREE.SphereGeometry(1,20,14),new THREE.MeshBasicMaterial({color:new THREE.Color(0.8,1.9,2.1),toneMapped:false,transparent:true}));orb.scale.setScalar(0.001);const cp=V(-1.9,MH*0.55,0.9);orb.position.copy(cp);st.scene.add(orb);
  const beam=new THREE.Mesh(new THREE.CylinderGeometry(0.25,0.25,1,12,1,true),new THREE.MeshBasicMaterial({color:new THREE.Color(1.4,3.2,3.6),toneMapped:false,transparent:true}));beam.visible=false;st.scene.add(beam);
  const flash=new THREE.AmbientLight('#ffffff',0);st.scene.add(flash);const fx={};const D=31;const boom=(x,y,z,big)=>{ring.position.set(x,y,z);ring.visible=true;fx.ringT=fx.t;spark.emit(V(x,y+0.4,z),V(0,4,0),1.5,['#ffe066','#ffffff','#ff7b1c'],1.4,big?380:200);};
  return {D,update(t,dt){fx.t=t;flash.intensity=Math.max(0,flash.intensity-dt*14);shafts.forEach((m,i)=>{m.rotation.z=Math.sin(t*0.7+i)*0.25;m.material.opacity=t>9&&t<12.5?0.03:0.07;});
    if(fx.ringT!=null){const rk=seg(t,fx.ringT,fx.ringT+1.2);ring.scale.setScalar(1+rk*16);ring.material.opacity=1-rk;}
    // establishing shot
    if(t<4.5){const k=ease(seg(t,0,4.5));st.look(V(lerp(18,-1,k),lerp(16,3,k),lerp(22,6,k)),V(lerp(0,-3.2,k),lerp(2,2,k),lerp(-6,0,k)));}
    // power-up close-ups
    else if(t<6){const k=ease(seg(t,4.5,6));st.look(V(lerp(-2.0,-2.5,k),0.45,lerp(1.5,1.9,k)),V(-3.2,0.45,0));if(rnd()<0.7)steam.emit(V(-3.2+(rnd()-.5)*1.6,0.2,0.4),V(0,1.2,0.6),0.3,['#c8c8d8','#8a8aa0'],1.4,3);once(fx,'hiss',()=>o.sfx&&o.sfx('whoosh'));}
    else if(t<7.5){const k=ease(seg(t,6,7.5));st.look(V(-1.4,lerp(1.2,MH*0.6,k),2.7),V(-3.2,lerp(1.2,MH*0.62,k),0));}
    else if(t<9){const k=ease(seg(t,7.5,9));st.look(V(lerp(-1.2,-1.6,k),MH*0.85,lerp(4.2,3.6,k)),V(-3.2,MH*0.82,0));once(fx,'boot',()=>o.sfx&&o.sfx('charge'));}
    if(me.userData.glowMat)me.userData.glowMat.opacity=seg(t,8,8.3)*(0.75+0.25*Math.sin(t*30));
    // alarm + the fall
    if(t>=9&&t<12.5){alarm.intensity=((t*4)|0)%2?160:20;const k=seg(t,9,12.5);gm.position.y=lerp(60,0,easeIn(k));fire.emit(V(3.4,gm.position.y+2,-1),V(0,7,0),1.4,['#ff7b1c','#ffe066','#ff2d4d'],0.7,14);
      if(t>9.5)once(fx,'fall',()=>o.sfx&&o.sfx('whoosh'));st.fov(lerp(14,42,seg(t,11.7,12.5)));st.look(V(-5,1.2,7),V(3.4,Math.max(2,gm.position.y+2),-1));}
    if(t>=12.5){st.fov(42);alarm.intensity=Math.max(0,alarm.intensity-dt*300);}
    if(t>=12.5)once(fx,'hit',()=>{gm.position.y=0;st.shake=1.6;flash.intensity=9;o.sfx&&o.sfx('slam');boom(3.4,0.2,-1,true);smoke.emit(V(3.4,0.8,-1),V(0,1.2,0),3,['#5a5070','#7a7090','#3a3450'],3.2,260);});
    if(t>=12.5&&t<15.5){const k=ease(seg(t,12.5,15.5));st.look(V(lerp(0.6,1.6,k),lerp(1.4,1.9,k),lerp(6.5,5.2,k)),V(3.4,2.1,-1));if(t>15)once(fx,'eyes',()=>{o.sfx&&o.sfx('roar');st.shake=0.5;});}
    if(gm.userData.glowMat)gm.userData.glowMat.opacity=seg(t,15,15.25)*(0.6+0.4*Math.abs(Math.sin(t*5)));
    // your cannon charges
    if(t>=15.5&&t<19){const k=seg(t,15.5,19);orb.scale.setScalar(0.05+k*0.32);orb.material.opacity=0.6+0.4*Math.sin(t*25);once(fx,'chg',()=>o.sfx&&o.sfx('charge'));
      for(let i=0;i<3;i++){const a=rnd()*6.28,r=1.5+rnd();charge.emit(V(cp.x+Math.cos(a)*r,cp.y+(rnd()-.5)*r,cp.z+Math.sin(a)*r),V(-Math.cos(a)*r*1.6,0,-Math.sin(a)*r*1.6),0.05,['#5ef2ff','#ffffff'],0.55,1);}
      st.look(V(lerp(0.6,0.9,k),MH*0.62,lerp(5.2,4.4,k)),V(-2.3,MH*0.55,0.3));}
    // face-off: the cannon fires
    if(t>=19&&t<23){const a=lerp(-0.9,0.9,ease(seg(t,19,23)));st.look(V(Math.sin(a)*12.5,2.8,Math.cos(a)*12.5-0.5),V(0,2.2,-0.5));
      const fk=seg(t,20.6,21.1);if(t>=20.6&&t<21.2){once(fx,'fire',()=>{o.sfx&&o.sfx('slam');st.shake=0.7;});const to=V(3.0,MH*0.55,-0.8),len=cp.distanceTo(to);beam.visible=true;beam.scale.set(1+Math.sin(t*60)*0.2,len,1+Math.sin(t*60)*0.2);beam.position.copy(cp).lerp(to,0.5);beam.lookAt(to);beam.rotateX(Math.PI/2);beam.material.opacity=1-fk*0.6;
        orb.scale.setScalar(0.37*(1-fk));spark.emit(to,V(0,2,2),0.5,['#5ef2ff','#ffffff','#ffe066'],0.8,12);}else{beam.visible=false;if(t>=21.2)orb.scale.setScalar(0.001);}}
    // the clash: both mechs charge and collide
    if(t>=23&&t<28.5){beam.visible=false;const ck=easeIn(seg(t,23,25));me.position.x=lerp(-3.2,-1.3,ck);gm.position.x=lerp(3.4,1.5,ck);
      if(t<25){st.look(V(0,0.8,lerp(9,7,seg(t,23,25))),V(0,1.6,-0.5));if(rnd()<0.8){W0dust(spark,me.position,-1);W0dust(spark,gm.position,1);}}
      else{once(fx,'clash',()=>{st.shake=2;flash.intensity=10;o.sfx&&o.sfx('slam');boom(0.1,1.8,-0.5,true);});if(rnd()<0.6)spark.emit(V(0.1,2.2,-0.5),V(0,1.5,0),0.6,['#5ef2ff','#ff4d6d','#ffffff'],0.7,8);
        const a=lerp(-1.2,1.0,ease(seg(t,25,28.5)));st.look(V(Math.sin(a)*7,lerp(1.2,3.5,seg(t,25,28.5)),Math.cos(a)*7-0.5),V(0.1,2,-0.5));}}
    // title slam
    if(t>=28.5){const k=ease(seg(t,28.5,31));st.look(V(0,lerp(2.2,3,k),lerp(9,12,k)),V(0,2.3,-0.5));if(t>28.5)once(fx,'title',()=>{st.shake=0.8;flash.intensity=3;});if(rnd()<0.4)spark.emit(V(0.1,2.3,-0.5),V(0,1,0),2,['#5ef2ff','#ff4d6d'],0.6,4);}
    titleCard(o.ov,t,28.5,null,'Your mech vs. GLITCH MECH','#ffe066');o.ov.title.textContent='MECH BATTLE!';o.ov.boss.style.opacity='0';
    o.ov.fade.style.opacity=String(Math.max(1-seg(t,0,0.8),seg(t,D-0.45,D)*0.95));o.ov.fade.style.background=t>D-0.5?'#fff':'#000';}};}
function W0dust(p,pos,dir){p.emit(V(pos.x,0.2,pos.z),V(-dir*2,1,0),0.6,['#8a80a0','#ffe066'],0.5,2);}

// boss defeated: the boss staggers, blows apart into voxels, fireworks fill the sky
function victoryScene(st,S,o){const id=o.world&&WORLDS[o.world]?o.world:'canyon';seed=77;const W=WORLDS[id](st),D=16,deckY=W.deckY||0;
  const meMech=!!o.mech,hero=meMech?null:heroRig(st,S);let me=null;if(meMech){me=voxel(S.mech,{size:0.16,depth:4,metal:0.55});me.position.set(0,deckY,4);st.scene.add(me);}else hero.g.position.set(0,deckY,4);
  const boss=voxel(S.gmech,{size:meMech?0.2:0.45,depth:4,tint:W.boss,tintK:0.4,metal:0.45});const BH=boss.userData.h;const bz=meMech?-2:-14;boss.position.set(0,deckY,bz);st.scene.add(boss);if(boss.userData.glowMat)boss.userData.glowMat.color.set(new THREE.Color(2.6,0.3,0.35));
  const spark=st.part(900,{size:0.14,grav:6,jit:4,bright:2.6}),fw=st.part(1600,{size:0.22,grav:1.2,drag:0.6,jit:0.3,bright:2.8}),smoke=st.part(400,{size:1.1,add:false,grav:-0.3,drag:0.6,jit:1.4,bright:0.9}),gold=st.part(500,{size:0.22,add:false,grav:3,jit:0.6,bright:1.4});
  const key=new THREE.PointLight('#fff4e0',0,14,1.5);st.scene.add(key);const flash=new THREE.AmbientLight('#ffffff',0);st.scene.add(flash);let sh=null;const fx={};const HP=me||hero.g;
  const firework=()=>{const c=[['#ff4d6d','#ffe066'],['#5ef2ff','#ffffff'],['#3fdc6b','#ffe066'],['#c084fc','#ff8fa3']][(rnd()*4)|0],p=V((rnd()-.5)*30,14+rnd()*10,bz-10-rnd()*20);
    for(let i=0;i<70;i++){const a=rnd()*6.28,b=Math.acos(2*rnd()-1),v=6+rnd()*2;fw.emit(p,V(Math.sin(b)*Math.cos(a)*v,Math.cos(b)*v,Math.sin(b)*Math.sin(a)*v),0.2,c,1.6,1);}o.sfx&&o.sfx('pop');};
  return {D,update(t,dt){if(W.tick)W.tick(t);flash.intensity=Math.max(0,flash.intensity-dt*10);
    if(t<3.3){boss.position.x=(rnd()-.5)*0.25*seg(t,0.5,3.3);boss.rotation.z=Math.sin(t*9)*0.04*seg(t,0,3.3);if(rnd()<0.5)spark.emit(V((rnd()-.5)*BH*0.5,deckY+BH*rnd(),bz+1),V(0,2,2),0.4,['#ffe066','#ff7b1c','#ffffff'],0.6,6);
      if(boss.userData.glowMat)boss.userData.glowMat.opacity=((t*12)|0)%2?1:0.2;const a=lerp(0.5,-0.3,ease(seg(t,0,3.3)));st.look(V(Math.sin(a)*(BH*1.6),deckY+BH*0.3,bz+Math.cos(a)*BH*1.6),V(0,deckY+BH*0.55,bz));once(fx,'groan',()=>o.sfx&&o.sfx('roar'));}
    if(t>=3.3){once(fx,'boom',()=>{sh=shatter(boss,V(0,deckY+BH*0.5,bz),meMech?2.2:3.5);st.shake=1.8;flash.intensity=9;o.sfx&&o.sfx('slam');spark.emit(V(0,deckY+BH*0.5,bz),V(0,3,0),2,['#ffe066','#ffffff','#ff7b1c'],1.6,500);smoke.emit(V(0,deckY+1,bz),V(0,1.5,0),4,['#5a5070','#7a7090','#3a3450'],3.2,260);});sh(t-3.3);}
    if(t>=3.3&&t<5){const k=ease(seg(t,3.3,5));st.look(V(lerp(BH*1.2,BH*2,k),deckY+BH*0.4,bz+lerp(BH*1.2,BH*2.2,k)),V(0,deckY+BH*0.4,bz));}
    if(t>=5&&t<9.5){const k=ease(seg(t,5,9.5));st.look(V(lerp(0.4,0,k),deckY+lerp(1.2,3,k),lerp(7.5,9,k)),V(0,deckY+lerp(1.5,14,k),lerp(2,bz-14,k)));if(((t*2.6)|0)!==fx.f){fx.f=(t*2.6)|0;firework();}}
    if(t>=9.5){if(((t*2)|0)!==fx.f){fx.f=(t*2)|0;firework();}const a=lerp(0.7,-0.6,ease(seg(t,9.5,13.5)));
      if(rnd()<0.8)gold.emit(V(HP.position.x+(rnd()-.5)*4,deckY+5,HP.position.z+(rnd()-.5)*3),V(0,-1,0),0.3,['#ffc933','#ffe066','#fff3b0'],2.2,2);
      const r=meMech?6:3.6,hy=meMech?2.2:1.0;if(!meMech)hero.g.position.y=deckY+Math.max(0,Math.sin(seg(t,10.6,11.3)*Math.PI))*0.6;
      if(t<13.5){st.look(V(HP.position.x+Math.sin(a)*r,deckY+hy+0.4,HP.position.z+Math.cos(a)*r),V(HP.position.x,deckY+hy,HP.position.z));key.position.set(Math.sin(a)*2.4,deckY+2,HP.position.z+Math.cos(a)*2.4);key.intensity=6;}
      else{const k=ease(seg(t,13.5,16));st.look(V(lerp(Math.sin(-0.6)*r,4,k),deckY+lerp(hy+0.4,4,k),HP.position.z+lerp(Math.cos(-0.6)*r,12,k)),V(0,deckY+lerp(hy,6,k),bz));}}
    titleCard(o.ov,t,10,null,o.sub||'Boss defeated!','#ffe066');o.ov.title.textContent='VICTORY!';o.ov.boss.style.opacity='0';
    o.ov.fade.style.opacity=String(Math.max(1-seg(t,0,0.6),seg(t,D-0.6,D)));o.ov.fade.style.background='#000';}};}

// new belt: a glowing belt descends in a dojo courtyard at sunset
function beltScene(st,S,o){seed=23;st.sky('#2a3a8a','#ff9a6a','#5a2a3a');st.light('#ffc89a',2.4,'#ffb8d0','#5a3a3a',V(-30,20,-20));st.ground('#7a5a3a');
  const B=[];for(let x=-6;x<=6;x+=1)for(let z=-6;z<=6;z+=1)B.push([x,0.15,z,0.98,0.3,0.98,(x+z)%2?'#c9935a':'#b8824a']);
  B.push([-5,4,-9,0.8,8,0.8,'#c0282a'],[5,4,-9,0.8,8,0.8,'#c0282a'],[0,8.2,-9,13,0.8,1,'#c0282a'],[0,7,-9,11,0.5,0.8,'#1d1f33'],[0,9,-9,14,0.4,1.2,'#1d1f33']);
  for(const x of [-7,7])for(const z of [-4,0,4])B.push([x,0.8,z,0.3,1.6,0.3,'#3a2a1a']);
  for(let i=0;i<14;i++){const x=(i%2?1:-1)*(10+rnd()*20),z=-10-rnd()*40;B.push([x,1.5,z,0.6,3,0.6,'#5a3a2a']);for(let k=0;k<6;k++)B.push([x+(rnd()-.5)*3,3+rnd()*2,z+(rnd()-.5)*3,1.6,1.2,1.6,['#ff9fc4','#ffb8d6','#ff8ab5'][k%3]]);}
  st.boxes(B);for(let i=0;i<6;i++){const m=new THREE.Mesh(new THREE.ConeGeometry(30+rnd()*20,30+rnd()*20,5),new THREE.MeshStandardMaterial({color:'#5a4a7a',flatShading:true}));m.position.set(-80+i*32,12,-120-rnd()*30);st.scene.add(m);}
  const lan=[];for(const x of [-7,7])for(const z of [-4,0,4]){const l=new THREE.Mesh(new THREE.BoxGeometry(0.6,0.7,0.6),new THREE.MeshBasicMaterial({color:new THREE.Color(2.6,1.4,0.5),toneMapped:false}));l.position.set(x,1.9,z);st.scene.add(l);lan.push(l);const pl=new THREE.PointLight('#ffb060',8,8,1.6);pl.position.set(x,1.9,z);st.scene.add(pl);}
  const hero=heroRig(st,S);hero.g.position.set(0,0.3,0);const petals=st.part(600,{size:0.12,add:false,grav:0.25,drag:0.3,jit:0.6,bright:1.1}),burst=st.part(600,{size:0.14,grav:1.5,jit:3,bright:2.6});
  const bc=new THREE.Color(o.beltColor||'#ffe066'),belt=new THREE.Mesh(new THREE.TorusGeometry(0.62,0.09,10,40),new THREE.MeshStandardMaterial({color:bc,emissive:bc,emissiveIntensity:0.9,roughness:0.4}));belt.rotation.x=Math.PI/2;belt.position.set(0,30,0);st.scene.add(belt);
  const pillar=st.shaft(V(0,40,0),V(0,-1,0),40,1.4,'#fff4d0',0);const ring=new THREE.Mesh(new THREE.TorusGeometry(1,0.08,8,48),new THREE.MeshBasicMaterial({color:new THREE.Color(3,2.6,1.4),transparent:true,toneMapped:false}));ring.rotation.x=Math.PI/2;ring.position.set(0,0.4,0);ring.visible=false;st.scene.add(ring);
  const key=new THREE.PointLight('#fff4e0',5,10,1.5);st.scene.add(key);const flash=new THREE.AmbientLight('#ffffff',0);st.scene.add(flash);const fx={},D=15,waist=0.3+0.62;
  return {D,update(t,dt){flash.intensity=Math.max(0,flash.intensity-dt*10);lan.forEach((l,i)=>l.scale.setScalar(1+Math.sin(t*6+i)*0.05));if(rnd()<0.9)petals.emit(V((rnd()-.5)*30,8+rnd()*4,(rnd()-.5)*20),V(0.6,-0.2,0.2),1,['#ff9fc4','#ffd0e4','#ffffff'],7,1);
    if(t<4){const k=ease(seg(t,0,4));st.look(V(lerp(10,3,k),lerp(16,2.2,k),lerp(20,7,k)),V(0,lerp(4,1,k),lerp(-9,0,k)));}
    else if(t<7){const k=ease(seg(t,4,7));st.look(V(lerp(0.8,0.3,k),lerp(1.2,1.0,k),lerp(4.4,3.4,k)),V(0,1.0,0));key.position.set(1.2,2,3);}
    else{const bk=easeOut(seg(t,7,10));belt.position.y=lerp(30,waist,bk);belt.rotation.z=t*(bk<1?6:0.6);pillar.material.opacity=0.22*seg(t,7,7.6)*(1-seg(t,10.5,12));
      if(t<10){const k=ease(seg(t,7,10));st.look(V(lerp(2.4,1.4,k),lerp(0.6,0.9,k),lerp(5,3.6,k)),V(0,lerp(6,1.1,k),0));once(fx,'hum',()=>o.sfx&&o.sfx('charge'));if(rnd()<0.6)burst.emit(V(0,belt.position.y,0),V(0,-1,0),0.8,['#'+bc.getHexString(),'#ffffff'],0.6,2);}
      else{once(fx,'snap',()=>{st.shake=0.9;flash.intensity=6;ring.visible=true;o.sfx&&o.sfx('slam');burst.emit(V(0,waist,0),V(0,2,0),1,['#'+bc.getHexString(),'#ffffff','#ffe066'],1.4,420);for(let i=0;i<120;i++)petals.emit(V(0,1,0),V((rnd()-.5)*8,rnd()*4,(rnd()-.5)*8),0.4,['#ff9fc4','#ffffff'],3,1);});
        const rk=seg(t,10,11.2);ring.scale.setScalar(1+rk*12);ring.material.opacity=1-rk;belt.material.emissiveIntensity=0.6+0.5*Math.abs(Math.sin(t*3));
        const a=lerp(0.8,-0.7,ease(seg(t,10,15)));st.look(V(Math.sin(a)*lerp(3.2,5,seg(t,12,15)),lerp(1.2,1.8,seg(t,12,15)),Math.cos(a)*lerp(3.2,5,seg(t,12,15))),V(0,1.0,0));key.position.set(Math.sin(a)*2,2,Math.cos(a)*2);}}
    titleCard(o.ov,t,10.4,null,o.sub||'',o.beltColor&&o.beltColor.toLowerCase()!=='#f4f4f4'?o.beltColor:'#ffffff');o.ov.title.textContent=o.title||'NEW BELT!';o.ov.boss.style.opacity='0';
    o.ov.fade.style.opacity=String(Math.max(1-seg(t,0,0.6),seg(t,D-0.6,D)));o.ov.fade.style.background='#000';}};}

