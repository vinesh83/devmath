// ---------- LIVE 3D: renders a 2D game's state in 3D under its 2D overlay.
// The camera is set so the plane z=0 lines up pixel-for-pixel with the 2D canvas: (sx,sy) on screen = (sx-W/2, H/2-sy, 0) in 3D.
const ARENA3D={
  city(st,s){st.sky('#0a0820','#3a1630','#1a0a20',true);const B=[];for(let i=0;i<40;i++){const x=(i-20)*s*7+(rnd()-.5)*s*3,z=-s*(14+rnd()*30),h=s*(10+rnd()*30),w=s*(4+rnd()*3);B.push([x,h/2,z,w,h,w,['#24163a','#2a1a40','#1d1230'][i%3]]);
      for(let k=0;k<6;k++)if(rnd()<0.5)B.push([x+(rnd()-.5)*w*0.7,rnd()*h,z+w/2+1,s*0.7,s*0.9,0.5,'#ffe066']);}return {B,ground:'#2a1a3a',glow:['#ffe066']};},
  volcano(st,s){st.sky('#1a0404','#6a1a0a','#200606');const B=[];for(let i=0;i<30;i++){const x=(rnd()-.5)*s*260,z=-s*(10+rnd()*40),h=s*(2+rnd()*8);B.push([x,h/2,z,s*(3+rnd()*6),h,s*(3+rnd()*6),['#3a1a14','#2a1010'][i%2]]);}
    const v=new THREE.Mesh(new THREE.ConeGeometry(s*60,s*55,9,1,true),new THREE.MeshStandardMaterial({color:'#2a1210',flatShading:true}));v.position.set(-s*40,s*27,-s*120);st.scene.add(v);
    const cr=new THREE.Mesh(new THREE.CircleGeometry(s*9,16),new THREE.MeshBasicMaterial({color:new THREE.Color(3,1.1,0.2),toneMapped:false}));cr.rotation.x=-Math.PI/2;cr.position.set(-s*40,s*54.5,-s*120);st.scene.add(cr);
    return {B,ground:'#2a0a06',embers:true};},
  space(st,s){st.sky('#02030a','#101838','#05060f',true);const B=[];for(let i=0;i<24;i++){const x=(i-12)*s*10,z=-s*(12+(i%3)*6);B.push([x,s*4,z,s*8,s*8,s*4,'#1d2250'],[x,s*7.6,z+s*2.1,s*6,s*0.6,0.5,'#5ef2ff']);}
    const pl=new THREE.Mesh(new THREE.SphereGeometry(s*14,32,20),new THREE.MeshStandardMaterial({color:'#c084fc',roughness:0.7}));pl.position.set(s*50,s*45,-s*140);st.scene.add(pl);
    const ring=new THREE.Mesh(new THREE.TorusGeometry(s*24,s*1.2,8,64),new THREE.MeshBasicMaterial({color:new THREE.Color(1.6,1.4,0.6),toneMapped:false}));ring.position.copy(pl.position);ring.rotation.x=1.2;st.scene.add(ring);
    return {B,ground:'#2a3048',glow:['#5ef2ff']};},
  jungle(st,s){st.sky('#0a2a1a','#2a6a3a','#0a1a10');const B=[];for(let i=0;i<34;i++){const x=(rnd()-.5)*s*240,z=-s*(8+rnd()*40);B.push([x,s*6,z,s*1.6,s*12,s*1.6,'#4a2a14']);for(let k=0;k<4;k++)B.push([x+(rnd()-.5)*s*6,s*(12+rnd()*4),z+(rnd()-.5)*s*4,s*5,s*3,s*5,['#0e3a20','#1a5a2a','#2a7a3a'][k%3]]);}
    return {B,ground:'#3a2a14'};},
  ice(st,s){st.sky('#0a1a3a','#4a8ac0','#a8d0f0');const B=[];for(let i=0;i<40;i++){const x=(rnd()-.5)*s*240,z=-s*(8+rnd()*40),h=s*(4+rnd()*16);B.push([x,h/2,z,s*(2+rnd()*3),h,s*(2+rnd()*3),['#c8e4ff','#a8d0f0','#ffffff'][i%3]]);}
    return {B,ground:'#c8e4ff',snow:true};},
  candy(st,s){st.sky('#ff9fc4','#ffe0ea','#ffd0e0');const B=[];for(let i=0;i<30;i++){const x=(rnd()-.5)*s*240,z=-s*(8+rnd()*40);B.push([x,s*5,z,s*0.6,s*10,s*0.6,'#ffffff']);const c=['#ff4d6d','#5ef2ff','#3fdc6b','#ffe066','#c084fc'][i%5];B.push([x,s*11,z,s*4,s*4,s*1.2,c]);}
    for(let i=0;i<20;i++)B.push([(rnd()-.5)*s*200,s*1,-s*(6+rnd()*30),s*3,s*2,s*3,['#ff8fa3','#ffffff','#c084fc'][i%3]]);return {B,ground:'#c084fc'};},
  meadow(st,s){st.sky('#3a8ae0','#c8ecff','#5aa05a');const B=[];for(let i=0;i<60;i++){const x=(rnd()-.5)*s*400,z=-s*(10+rnd()*60);B.push([x,s*2,z,s*0.8,s*4,s*0.8,'#6a4a2a'],[x,s*5,z,s*4,s*3,s*4,['#2f8f3a','#3fae5a'][i%2]]);}return {B,ground:'#4aa04a'};},
  night(st,s){st.sky('#0a0820','#2a1a4a','#140a24',true);const B=[];for(let i=0;i<30;i++){const x=(rnd()-.5)*s*240,z=-s*(10+rnd()*40),h=s*(4+rnd()*10);B.push([x,h/2,z,s*5,h,s*5,'#1d1430']);}return {B,ground:'#2a1a3a'};}
};
class Live{constructor(host,o){this.o=o;const W=o.W,H=o.H;this.W=W;this.H=H;seed=99;
    const st=this.st=new Stage(host);st.r.domElement.style.cssText='position:absolute;inset:0;width:100%;height:100%;z-index:0';
    const D=H*1.25;st.cam.fov=2*Math.atan((H/2)/D)*180/Math.PI;st.cam.near=10;st.cam.far=H*40;st.cam.position.set(0,0,D);st.cam.lookAt(0,0,0);st.cam.updateProjectionMatrix();this.D=D;
    const s=o.unit||H/90,set=(ARENA3D[o.arena]||ARENA3D.city)(st,s);this.s=s;this.gy=H/2-o.Y;
    st.scene.fog=new THREE.Fog(st.scene.fog.color,H*2.2,H*9);
    const sun=st.light('#fff4e0',2.6,'#c8d8ff','#4a3a4a',V(-H*0.5,H*1.2,H*1.4));const sc=sun.shadow.camera;sc.left=-W;sc.right=W;sc.top=H;sc.bottom=-H;sc.near=1;sc.far=H*6;sun.target.position.set(0,this.gy,0);st.scene.add(sun.target);sun.position.set(-H*0.6,H*1.4,H*1.6);
    st.bloom.strength=0.55;st.bloom.radius=0.4;st.bloom.threshold=0.9;
    const g=st.ground(set.ground,H*30);g.position.y=this.gy;g.material.map.repeat.set(60,60);
    const root=new THREE.Group();root.position.y=this.gy;st.scene.add(root);this.root=root;
    if(set.B.length){const m=st.boxes(set.B.map(b=>[b[0],b[1],b[2]-s*4,b[3],b[4],b[5],b[6]]));st.scene.remove(m);root.add(m);}
    this.emb=set.embers?st.part(300,{size:s*0.5,grav:-s*3,jit:s,bright:2.2}):null;this.snow=set.snow?st.part(400,{size:s*0.5,add:false,grav:s*2,jit:s,bright:1}):null;
    this.models={};this.parts=st.parts;}
  model(key,spr,size,o){const k=key+'@'+size.toFixed(2);if(!this.models[k]){const m=voxel(spr,Object.assign({size,depth:o&&o.depth||3},o||{}));this.st.scene.add(m);m.visible=false;this.models[k]=m;}return this.models[k];}
  hideAll(){for(const k in this.models)this.models[k].visible=false;}
  // place a model by its bottom-center screen position
  put(m,sx,sy,flip,white){m.visible=true;m.position.set(sx-this.W/2,this.H/2-sy,0);m.rotation.y=flip?Math.PI:0;const mat=m.userData.solid&&m.userData.solid.material;if(mat){mat.emissive=mat.emissive||new THREE.Color();mat.emissive.setRGB(white?0.9:0,white?0.9:0,white?0.9:0);}}
  frame(f,dt){const st=this.st;this.hideAll();
    if(this.emb&&rnd()<0.6)this.emb.emit(V((rnd()-.5)*this.W*1.5,this.gy,-this.s*(5+rnd()*30)),V(0,this.s*4,0),this.s*2,['#ff7b1c','#ffe066'],3,2);
    if(this.snow&&rnd()<0.8)this.snow.emit(V((rnd()-.5)*this.W*1.6,this.H*0.6,-this.s*rnd()*30),V(this.s*0.5,-this.s*3,0),this.s,['#ffffff'],5,2);
    for(const a of f.actors){if(!a||!a.spr)continue;const m=this.model(a.key,a.spr,a.size,a.o);this.put(m,a.x,a.y,a.flip,a.white);if(a.rot)m.rotation.z=a.rot;else m.rotation.z=0;if(a.scale)m.scale.setScalar(a.scale);else m.scale.setScalar(1);}
    // items: glowing 3D pickups
    this.items=this.items||[];const need=f.items||[];while(this.items.length<need.length){const g=new THREE.Mesh(new THREE.IcosahedronGeometry(1,0),new THREE.MeshStandardMaterial({color:'#ffe066',emissive:'#ffb627',emissiveIntensity:1.2,flatShading:true}));g.castShadow=true;st.scene.add(g);this.items.push(g);}
    this.items.forEach((g,i)=>{const it=need[i];g.visible=!!it;if(!it)return;g.position.set(it.x-this.W/2,this.H/2-it.y,0);g.scale.setScalar(it.r);g.rotation.y+=dt*3;g.rotation.x+=dt*1.7;const c=it.k==='heart'?'#ff4d6d':it.k==='bolt'?'#ffe066':it.k==='gem'?'#5ef2ff':it.k==='bone'?'#fff8e8':'#ffc933';g.material.color.set(c);g.material.emissive.set(c);g.material.emissiveIntensity=it.k==='bone'?0.15:0.8;});
    st.shake=0;st.cam.position.set(f.shakeX||0,f.shakeY||0,this.D);st.cam.lookAt(f.shakeX||0,f.shakeY||0,0);
    if(f.scroll!=null){this.root.position.x=-(f.scroll%(this.s*400));}
    if(st.grade)st.grade.uniforms.vig.value=0.3;st.render(dt);}
  resize(W,H){this.W=W;this.H=H;this.st.resize();}
  dispose(){this.st.dispose();}}
