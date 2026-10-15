/* Cine3D: real-time 3D cutscenes for Number Knight.
   Dev's own pixel characters are turned into voxel models, then filmed with game-style lighting, glow, particles and camera moves. */
import * as THREE from 'three';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/examples/jsm/postprocessing/OutputPass.js';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass.js';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
// film look: color grade, vignette, a touch of grain
const GradeShader={uniforms:{tDiffuse:{value:null},time:{value:0},vig:{value:0.42},sat:{value:1.12},con:{value:1.06}},
  vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:'uniform sampler2D tDiffuse;uniform float time,vig,sat,con;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec4 c=texture2D(tDiffuse,vUv);vec3 col=c.rgb;float l=dot(col,vec3(.299,.587,.114));col=mix(vec3(l),col,sat);col=(col-.5)*con+.5;col*=vec3(1.02,1.0,0.97);float d=distance(vUv,vec2(.5));col*=1.-vig*smoothstep(.35,.85,d);col+=(h(vUv*vec2(1920.,1080.)+time)-.5)*.035;gl_FragColor=vec4(col,c.a);}'};

const clamp01=x=>Math.max(0,Math.min(1,x)),lerp=(a,b,t)=>a+(b-a)*t,seg=(t,a,b)=>clamp01((t-a)/(b-a));
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeOut=t=>1-Math.pow(1-t,3),easeIn=t=>t*t*t;
const V=(x,y,z)=>new THREE.Vector3(x,y,z);
let seed=7;const rnd=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646;};

// ---------- voxels from a pixel sprite {w,h,data}
const GLOW=['#5ef2ff','#ff2d4d','#ff4d6d','#ffe066','#7dff5a'];
function hex(r,g,b){return '#'+[r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('');}
function voxel(spr,o={}){const size=o.size||0.1,depth=o.depth||3,glowSet=new Set((o.glow||GLOW).map(s=>s.toLowerCase()));
  const solid=[],glow=[];const {w,h,data}=spr;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4;if(data[i+3]<128)continue;const c=hex(data[i],data[i+1],data[i+2]);
    (glowSet.has(c)&&!o.noGlow?glow:solid).push([x,h-1-y,c]);}
  let minX=w,maxX=0,minY=h;for(const a of solid.concat(glow)){minX=Math.min(minX,a[0]);maxX=Math.max(maxX,a[0]);minY=Math.min(minY,a[1]);}
  const cx=(minX+maxX+1)/2,g=new THREE.Group(),geo=new RoundedBoxGeometry(size*0.98,size*0.98,size*0.98,1,size*0.16),m4=new THREE.Matrix4(),col=new THREE.Color();
  const build=(arr,mat)=>{if(!arr.length)return null;const n=arr.length*depth,mesh=new THREE.InstancedMesh(geo,mat,n);let k=0;
    for(const [x,y,c] of arr)for(let z=0;z<depth;z++){m4.makeTranslation((x+0.5-cx)*size,(y-minY+0.5)*size,(z-(depth-1)/2)*size);mesh.setMatrixAt(k,m4);col.set(c);if(o.tint)col.lerp(new THREE.Color(o.tint),o.tintK||0.85);mesh.setColorAt(k,col);k++;}
    mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);return mesh;};
  g.userData.solid=build(solid,new THREE.MeshStandardMaterial({roughness:o.metal?0.38:0.62,metalness:o.metal||0.05,envMapIntensity:o.metal?1.3:0.6}));
  const gm=new THREE.MeshBasicMaterial({color:new THREE.Color(2.4,2.4,2.4),toneMapped:false,transparent:true});
  g.userData.glow=build(glow,gm);g.userData.glowMat=gm;g.userData.h=(h-minY)*size;g.userData.w=(maxX-minX+1)*size;return g;}

// ---------- particles (simple CPU sim)
let _dot=null;function dotTex(){if(_dot)return _dot;const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d'),g=x.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(0.35,'rgba(255,255,255,0.8)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,64,64);_dot=new THREE.CanvasTexture(c);return _dot;}
class Particles{constructor(scene,n,o){this.n=n;this.o=o;this.p=new Float32Array(n*3);this.v=new Float32Array(n*3);this.life=new Float32Array(n);this.col=new Float32Array(n*3);
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(this.p,3));geo.setAttribute('color',new THREE.BufferAttribute(this.col,3));
    this.mat=new THREE.PointsMaterial({map:dotTex(),alphaTest:0.01,opacity:o.add===false?0.45:1,size:(o.size||0.15)*1.6,vertexColors:true,transparent:true,depthWrite:false,blending:o.add===false?THREE.NormalBlending:THREE.AdditiveBlending,toneMapped:false,sizeAttenuation:true});
    this.pts=new THREE.Points(geo,this.mat);this.pts.frustumCulled=false;scene.add(this.pts);this.i=0;for(let k=0;k<n;k++)this.p[k*3+1]=-999;}
  emit(pos,vel,spread,cols,life,count){for(let c=0;c<count;c++){const k=this.i++%this.n;this.p[k*3]=pos.x+(rnd()-.5)*spread;this.p[k*3+1]=pos.y+(rnd()-.5)*spread;this.p[k*3+2]=pos.z+(rnd()-.5)*spread;
      this.v[k*3]=vel.x+(rnd()-.5)*(this.o.jit||1);this.v[k*3+1]=vel.y+(rnd()-.5)*(this.o.jit||1);this.v[k*3+2]=vel.z+(rnd()-.5)*(this.o.jit||1);this.life[k]=life*(0.6+rnd()*0.6);
      const cc=new THREE.Color(cols[(rnd()*cols.length)|0]);const b=this.o.bright||1.6;this.col[k*3]=cc.r*b;this.col[k*3+1]=cc.g*b;this.col[k*3+2]=cc.b*b;}}
  update(dt){const g=this.o.grav||0,dr=this.o.drag||0;for(let k=0;k<this.n;k++){if(this.life[k]<=0){this.p[k*3+1]=-999;continue;}this.life[k]-=dt;
      this.v[k*3+1]-=g*dt;for(let a=0;a<3;a++){this.v[k*3+a]*=1-dr*dt;this.p[k*3+a]+=this.v[k*3+a]*dt;}
      if(this.life[k]<0.3&&this.o.add!==false)for(let a=0;a<3;a++)this.col[k*3+a]*=0.9;}
    this.pts.geometry.attributes.position.needsUpdate=true;this.pts.geometry.attributes.color.needsUpdate=true;}}

// ---------- the stage
class Stage{constructor(host){this.host=host;const W=host.clientWidth||1024,H=host.clientHeight||768;
    this.r=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance',preserveDrawingBuffer:true});this.r.setPixelRatio(Math.min(1.75,window.devicePixelRatio||1));this.r.setSize(W,H);
    this.r.shadowMap.enabled=true;this.r.shadowMap.type=THREE.PCFSoftShadowMap;this.r.toneMapping=THREE.ACESFilmicToneMapping;this.r.toneMappingExposure=0.98;this.r.outputColorSpace=THREE.SRGBColorSpace;
    host.appendChild(this.r.domElement);this.scene=new THREE.Scene();this.cam=new THREE.PerspectiveCamera(42,W/H,0.1,600);
    this.comp=new EffectComposer(this.r);this.comp.addPass(new RenderPass(this.scene,this.cam));this.bloom=new UnrealBloomPass(new THREE.Vector2(W,H),0.85,0.55,0.85);this.comp.addPass(this.bloom);this.grade=new ShaderPass(GradeShader);this.comp.addPass(this.grade);this.comp.addPass(new OutputPass());
    {const pm=new THREE.PMREMGenerator(this.r);this.scene.environment=pm.fromScene(new RoomEnvironment(),0.04).texture;this.scene.environmentIntensity=0.22;}
    this.shake=0;this.parts=[];}
  sky(top,mid,bot,stars){const R=this.skyR||400,geo=new THREE.SphereGeometry(R,32,16),mat=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{a:{value:new THREE.Color(top)},b:{value:new THREE.Color(mid)},c:{value:new THREE.Color(bot)}},
      vertexShader:'varying vec3 vp;void main(){vp=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader:'uniform vec3 a,b,c;varying vec3 vp;void main(){float h=vp.y;vec3 col=h>0.?mix(b,a,pow(h,0.6)):mix(b,c,pow(-h,0.5));gl_FragColor=vec4(col,1.);}'});
    this.scene.add(new THREE.Mesh(geo,mat));this.scene.fog=new THREE.Fog(new THREE.Color(mid),60,260);
    if(stars){const n=900,p=new Float32Array(n*3);for(let i=0;i<n;i++){const t=rnd()*6.28,u=rnd()*0.9+0.08,r=R*0.75;p[i*3]=Math.cos(t)*Math.sqrt(1-u*u)*r;p[i*3+1]=u*r;p[i*3+2]=Math.sin(t)*Math.sqrt(1-u*u)*r;}
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(p,3));this.scene.add(new THREE.Points(g,new THREE.PointsMaterial({color:0xffffff,size:1.2,sizeAttenuation:false,fog:false})));}}
  light(sun,int,hemiTop,hemiBot,dir){this.scene.add(new THREE.HemisphereLight(hemiTop,hemiBot,0.85));const d=new THREE.DirectionalLight(sun,int);d.position.copy(dir||V(30,40,20));d.castShadow=true;
    d.shadow.mapSize.set(2048,2048);const s=d.shadow.camera;s.left=-30;s.right=30;s.top=30;s.bottom=-30;s.near=1;s.far=150;d.shadow.bias=-0.0004;d.shadow.normalBias=0.02;this.scene.add(d);this.sun=d;return d;}
  shaft(pos,dir,len,rad,col,op){const geo=new THREE.CylinderGeometry(rad*0.15,rad,len,24,1,true);geo.translate(0,-len/2,0);const m=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color:new THREE.Color(col),transparent:true,opacity:op==null?0.12:op,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide,toneMapped:false,fog:false}));
    m.position.copy(pos);m.lookAt(pos.clone().add(dir));m.rotateX(-Math.PI/2);this.scene.add(m);return m;}
  part(n,o){const p=new Particles(this.scene,n,o);this.parts.push(p);return p;}
  boxes(list,mat){const geo=new THREE.BoxGeometry(1,1,1),m=new THREE.InstancedMesh(geo,mat||new THREE.MeshStandardMaterial({roughness:0.9}),list.length),m4=new THREE.Matrix4(),q=new THREE.Quaternion(),c=new THREE.Color();
    list.forEach((b,i)=>{m4.compose(V(b[0],b[1],b[2]),q,V(b[3],b[4],b[5]));m.setMatrixAt(i,m4);c.set(b[6]);m.setColorAt(i,c);});m.castShadow=true;m.receiveShadow=true;this.scene.add(m);return m;}
  ground(color,size){const tc=document.createElement('canvas');tc.width=tc.height=256;const x=tc.getContext('2d'),base=new THREE.Color(color);x.fillStyle=color;x.fillRect(0,0,256,256);for(let i=0;i<2600;i++){const c=base.clone().offsetHSL(0,(rnd()-.5)*0.06,(rnd()-.5)*0.08);x.fillStyle='#'+c.getHexString();const s=2+rnd()*6;x.fillRect(rnd()*256,rnd()*256,s,s);}
    const tex=new THREE.CanvasTexture(tc);tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.repeat.set(40,40);tex.colorSpace=THREE.SRGBColorSpace;tex.magFilter=THREE.NearestFilter;
    const g=new THREE.Mesh(new THREE.PlaneGeometry(size||400,size||400),new THREE.MeshStandardMaterial({map:tex,roughness:1}));g.rotation.x=-Math.PI/2;g.receiveShadow=true;this.scene.add(g);return g;}
  fov(v){if(this.cam.fov!==v){this.cam.fov=v;this.cam.updateProjectionMatrix();}}
  look(pos,at){this.cam.position.copy(pos);if(this.shake>0){this.cam.position.x+=(rnd()-.5)*this.shake;this.cam.position.y+=(rnd()-.5)*this.shake;}this.cam.lookAt(at);}
  render(dt){if(this.grade)this.grade.uniforms.time.value+=dt*60;for(const p of this.parts)p.update(dt);this.shake=Math.max(0,this.shake-dt*1.6);this.comp.render(dt);}
  resize(){const W=this.host.clientWidth,H=this.host.clientHeight;this.r.setSize(W,H);this.comp.setSize(W,H);this.cam.aspect=W/H;this.cam.updateProjectionMatrix();}
  dispose(){this.r.dispose();this.r.domElement.remove();}}

// ---------- world sets
function water(st,y,color){const geo=new THREE.PlaneGeometry(300,300,120,120),mat=new THREE.MeshStandardMaterial({color,roughness:0.15,metalness:0.3,transparent:true,opacity:0.92});
  const m=new THREE.Mesh(geo,mat);m.rotation.x=-Math.PI/2;m.position.y=y;m.receiveShadow=true;st.scene.add(m);const base=geo.attributes.position.array.slice();
  return t=>{const a=geo.attributes.position.array;for(let i=0;i<a.length;i+=3){a[i+2]=Math.sin(base[i]*0.25+t*1.6)*0.25+Math.cos(base[i+1]*0.3+t*1.2)*0.2;}geo.attributes.position.needsUpdate=true;geo.computeVertexNormals();};}
function lava(st,x,z,w,d){const mat=new THREE.ShaderMaterial({uniforms:{t:{value:0}},toneMapped:false,
    vertexShader:'varying vec2 uv2;void main(){uv2=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:'uniform float t;varying vec2 uv2;float n(vec2 p){return sin(p.x*6.+t*1.3)*sin(p.y*5.-t)+sin((p.x+p.y)*9.+t*2.)*0.5;}void main(){float v=n(uv2*3.)*0.5+0.5;vec3 c=mix(vec3(0.9,0.12,0.01),vec3(1.5,0.6,0.08),v);gl_FragColor=vec4(c,1.);}'});
  const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d),mat);m.rotation.x=-Math.PI/2;m.position.set(x,0.05,z);st.scene.add(m);return t=>{mat.uniforms.t.value=t;};}

const WORLDS={
  canyon(st){st.sky('#3a6cc8','#ffb27a','#c96a3a');st.light('#ffd9a8',2.6,'#9fc4ff','#a0522d',V(-40,35,20));st.ground('#c9733a');
    const B=[],strata=['#b8572a','#d0773a','#e8a05a','#a8482a'];
    for(let i=0;i<26;i++){const x=(rnd()-.5)*160,z=-20-rnd()*120,w=6+rnd()*12,h=6+rnd()*22;if(Math.abs(x)<8&&z>-30)continue;
      for(let l=0;l<Math.ceil(h/2);l++)B.push([x,l*2+1,z,w-l*0.25,2,w*0.8-l*0.2,strata[(l+i)%4]]);}
    for(let i=0;i<40;i++){const x=(rnd()-.5)*120,z=(rnd()-.5)*60+10;if(Math.abs(x)<4)continue;B.push([x,0.3,z,0.6+rnd(),0.6,0.6+rnd(),'#8a4a2a']);}
    for(let i=0;i<14;i++){const x=(rnd()-.5)*70,z=-5-rnd()*30;if(Math.abs(x)<5)continue;B.push([x,1.2,z,0.5,2.4,0.5,'#3a8a3a'],[x+0.5,1.6,z,0.4,0.4,0.4,'#3a8a3a'],[x+0.7,2,z,0.4,0.8,0.4,'#3a8a3a']);}
    B.push([0,0.02,0,3,0.04,200,'#e8b07a']);st.boxes(B);
    const dust=st.part(500,{size:0.25,add:false,grav:-0.05,drag:0.2,jit:0.6,bright:1});return {dust,cols:['#e8b07a','#c9733a'],land:V(0,0,-34),focus:V(-10,8,-60),boss:'#ff6a2a'};},
  docks(st){st.sky('#2a6ad0','#9fdcff','#2a6aa0');st.light('#fff4d8',2.4,'#bfe6ff','#2a5a8a',V(30,40,25));const wv=water(st,0,'#1d6fb8');
    const B=[];for(let z=-60;z<30;z+=1.1)B.push([0,0.6,z,4,0.25,1,z%2.2<1.1?'#a0703a':'#8a5a2a']);for(let z=-60;z<30;z+=6){B.push([-2.1,0,z,0.4,2.4,0.4,'#5a3a1a'],[2.1,0,z,0.4,2.4,0.4,'#5a3a1a']);}
    const boats=[];for(let i=0;i<9;i++){const x=(i%2?1:-1)*(10+rnd()*30),z=-10-rnd()*90,c=['#e8463c','#f4f4f4','#ffb627','#3fae5a'][i%4];B.push([x,0.6,z,6,1.4,2.4,c],[x,1.5,z,5,0.4,2,'#8a5a2a'],[x,4,z,0.25,6,0.25,'#5a3a1a']);boats.push([x,z]);}
    B.push([-24,6,-70,4,12,4,'#f4f4f4'],[-24,12.5,-70,4.4,1,4.4,'#e8463c']);st.boxes(B);
    for(const [x,z] of boats){const s=new THREE.Mesh(new THREE.ConeGeometry(2.2,5,3),new THREE.MeshStandardMaterial({color:'#ffffff',roughness:0.6,flatShading:true}));s.position.set(x+1.2,4.4,z);s.rotation.z=0.05;s.castShadow=true;st.scene.add(s);}
    const beam=new THREE.Mesh(new THREE.CylinderGeometry(0.2,3,40,16,1,true),new THREE.MeshBasicMaterial({color:new THREE.Color(2,2,1.4),transparent:true,opacity:0.18,toneMapped:false,side:THREE.DoubleSide,depthWrite:false}));beam.position.set(-24,14,-70);beam.rotation.z=Math.PI/2;st.scene.add(beam);
    const spray=st.part(400,{size:0.22,grav:3,jit:1.2,bright:1.3});return {tick:t=>{wv(t);beam.rotation.y=t*0.8;},dust:spray,cols:['#ffffff','#bfe8ff'],land:V(0,0.7,-34),deckY:0.73,focus:V(-24,8,-70),boss:'#2a7aff'};},
  forge(st){st.sky('#120404','#5a1608','#200606');st.light('#ffc08a',3.4,'#ffa070','#4a1a0a',V(-20,30,10));st.ground('#2a1410');const lv=[lava(st,-9,-40,5,140),lava(st,11,-30,4,120)];
    const B=[];for(let i=0;i<60;i++){const x=(rnd()-.5)*120,z=-10-rnd()*110;if(Math.abs(x)<6)continue;const h=1+rnd()*8;B.push([x,h/2,z,1.5+rnd()*4,h,1.5+rnd()*4,['#3a1a14','#2a1010','#4a2418'][i%3]]);}
    for(let i=0;i<6;i++){const x=(i%2?1:-1)*(5+rnd()*3),z=-6-i*9;B.push([x,0.5,z,2.4,1,1.2,'#3a3f50'],[x,1.25,z,3,0.5,1.4,'#5d6385'],[x+1.4,1.25,z,1,0.3,0.6,'#5d6385']);}
    B.push([0,0.02,0,3,0.04,200,'#3a2016']);st.boxes(B,new THREE.MeshStandardMaterial({roughness:0.85,metalness:0.2}));
    const vol=new THREE.Mesh(new THREE.ConeGeometry(30,34,9,1,true),new THREE.MeshStandardMaterial({color:'#2a1210',flatShading:true,roughness:1}));vol.position.set(18,17,-110);st.scene.add(vol);
    const crater=new THREE.Mesh(new THREE.CircleGeometry(5.5,16),new THREE.MeshBasicMaterial({color:new THREE.Color(3,1.2,0.2),toneMapped:false}));crater.rotation.x=-Math.PI/2;crater.position.set(18,33.6,-110);st.scene.add(crater);
    for(const [x,z] of [[-9,-20],[11,-15],[-9,-50],[11,-55]]){const l=new THREE.PointLight('#ff6a1a',30,22,1.6);l.position.set(x,2,z);st.scene.add(l);}
    const emb=st.part(700,{size:0.18,grav:-1.2,jit:0.8,bright:2.2});return {tick:t=>{lv.forEach(f=>f(t));if(((t*30)|0)%2===0){emb.emit(V((rnd()-.5)*40,0.2,-10-rnd()*60),V(0,1.5,0),2,['#ff7b1c','#ffb627','#ff4d6d'],3,4);emb.emit(V(18,34,-110),V((rnd()-.5)*3,6,(rnd()-.5)*3),3,['#ff7b1c','#ffe066'],3,2);}},dust:emb,cols:['#ff7b1c','#ffb627'],land:V(0,0,-34),focus:V(18,22,-110),boss:'#7a1a10'};},
  castle(st){st.sky('#0a0a2a','#3a2a6a','#120a24',true);st.light('#b8c8ff',1.3,'#5a6aff','#140a2a',V(25,40,-20));st.ground('#2a2a3a');
    const B=[],stone=['#6a6a80','#5a5a70','#7a7a90'];
    for(let x=-26;x<=26;x+=2){B.push([x,4,-60,2,8,3,stone[(x/2)&1&1?1:0]]);if(((x/2)|0)%2===0)B.push([x,8.8,-60,1.4,1.6,3,stone[2]]);}
    for(const x of [-28,28,-12,12]){B.push([x,8,-60,6,16,6,stone[1]]);for(let k=0;k<4;k++)B.push([x-2.2+k*1.47,16.9,-60,1,1.8,6.2,stone[2]]);}
    B.push([0,13,-80,10,26,10,stone[0]],[0,27,-80,11,2,11,stone[2]]);
    for(let i=0;i<10;i++)B.push([(i%2?1:-1)*(4+rnd()*3),0.5,-8-i*5,0.4,1,0.4,'#4a3a2a']);
    B.push([0,0.02,0,4,0.04,200,'#4a4a5e']);st.boxes(B);
    for(const x of [-28,28,-12,12]){const f=new THREE.Mesh(new THREE.BoxGeometry(0.1,2.4,3.2),new THREE.MeshStandardMaterial({color:'#9b6bff'}));f.position.set(x,19,-60);st.scene.add(f);}
    for(let i=0;i<8;i++){const x=(i%2?1:-1)*4.2,z=-8-i*6;const l=new THREE.PointLight('#ffb627',14,10,1.8);l.position.set(x,1.5,z);st.scene.add(l);
      const fl=new THREE.Mesh(new THREE.SphereGeometry(0.22,8,6),new THREE.MeshBasicMaterial({color:new THREE.Color(3,1.6,0.4),toneMapped:false}));fl.position.set(x,1.25,z);st.scene.add(fl);}
    const moon=new THREE.Mesh(new THREE.SphereGeometry(10,24,16),new THREE.MeshBasicMaterial({color:new THREE.Color(1.6,1.6,1.5),toneMapped:false,fog:false}));moon.position.set(-80,90,-260);st.scene.add(moon);
    const mag=st.part(300,{size:0.2,grav:-0.2,jit:0.4,bright:2});return {tick:t=>{if(((t*20)|0)%3===0)mag.emit(V((rnd()-.5)*30,rnd()*4,-5-rnd()*40),V(0,0.4,0),1,['#c084fc','#5ef2ff'],3,1);},dust:mag,cols:['#c084fc','#ffffff'],land:V(0,0,-34),focus:V(0,12,-70),boss:'#a04aff'};},
  tower(st){st.sky('#3a8ae0','#c8ecff','#5aa05a');st.light('#fff4d8',2.5,'#cfe8ff','#3a7a3a',V(30,45,15));st.ground('#4aa04a');
    const B=[];for(let i=0;i<34;i++){const a=i*0.55,r=5;B.push([Math.cos(a)*r,i*1.6+0.8,-70+Math.sin(a)*r,4,1.6,4,i%2?'#e8e2cf':'#c9c0a8']);}
    B.push([0,25,-70,6,52,6,'#d8d0b8'],[0,52,-70,8,2,8,'#a04a2a'],[0,55,-70,5,4,5,'#c0582a'],[0,58,-70,2.6,3,2.6,'#e06a3a']);
    for(let i=0;i<9;i++){const x=(rnd()-.5)*90,y=14+rnd()*24,z=-40-rnd()*70;if(Math.abs(x)<12)continue;B.push([x,y,z,6,2,6,'#6ac05a'],[x,y-2,z,4,2,4,'#8a5a3a'],[x,y-3.5,z,2,1.5,2,'#8a5a3a'],[x,y+2,z,0.6,2,0.6,'#6a4a2a'],[x,y+3.5,z,2.4,2,2.4,'#3a9a3a']);}
    for(let i=0;i<30;i++){const x=(rnd()-.5)*100,z=-6-rnd()*60;if(Math.abs(x)<4)continue;B.push([x,1,z,0.5,2,0.5,'#6a4a2a'],[x,2.6,z,2,1.6,2,'#2f8f3a'],[x,3.6,z,1.2,1,1.2,'#3fae5a']);}
    B.push([0,0.02,0,3,0.04,200,'#c9b07a']);st.boxes(B);
    const clouds=[];for(let i=0;i<14;i++){const g=new THREE.Group();for(let k=0;k<5;k++){const b=new THREE.Mesh(new THREE.BoxGeometry(3+rnd()*3,1.6,2.4),new THREE.MeshStandardMaterial({color:'#ffffff',roughness:1}));b.position.set(k*2-4,rnd(),rnd());g.add(b);}g.position.set((rnd()-.5)*160,28+rnd()*20,-30-rnd()*120);st.scene.add(g);clouds.push(g);}
    const leaves=st.part(300,{size:0.2,add:false,grav:0.4,jit:0.6,bright:1});return {tick:t=>{clouds.forEach((c,i)=>c.position.x+=0.02*(1+i%3));if(((t*20)|0)%3===0)leaves.emit(V((rnd()-.5)*30,8,-10-rnd()*20),V(1,0,0),2,['#ffe066','#ff9f43','#3fae5a'],5,1);},dust:leaves,cols:['#ffffff','#c9b07a'],land:V(0,0,-34),focus:V(0,30,-70),boss:'#2aa04a'};}};

// ---------- scenes
function heroRig(st,S,o={}){const g=new THREE.Group(),frames=['stand','runA','runB'].map(k=>{const m=voxel(S.hero[k],{size:0.1,depth:3});g.add(m);m.visible=k==='stand';return m;});
  const dog=voxel(S.dog,{size:0.085,depth:3});dog.position.set(-1.1,0,0.4);g.add(dog);st.scene.add(g);
  return {g,set(run,t){const f=run?(((t*9)|0)%2?1:2):0;frames.forEach((m,i)=>m.visible=i===f);frames.forEach(m=>m.position.y=run?Math.abs(Math.sin(t*18))*0.06:0);dog.position.y=run?Math.abs(Math.sin(t*18+1))*0.08:0;}};}
function titleCard(ov,t,a,b,sub,col){const L=(ov.title.textContent||'').length||8;ov.title.style.fontSize=`min(${Math.min(11,150/L).toFixed(1)}vw,92px)`;const k=seg(t,a,a+0.35),out=b?seg(t,b,b+0.4):0;ov.title.style.opacity=String(k*(1-out));ov.title.style.transform=`translate(-50%,-50%) scale(${1+(1-easeOut(k))*1.6})`;ov.title.style.color=col||'#ffe066';
  ov.sub.style.opacity=String(seg(t,a+0.3,a+0.7)*(1-out));ov.sub.textContent=sub||'';}

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
  const sd=st.sun.position.clone().normalize();for(let i=0;i<4;i++)st.shaft(V(F.x+sd.x*50+(i-1.5)*9,80,F.z-20+sd.z*50),V(-sd.x,-1,-sd.z),120,3.5+i*1.2,id==='forge'?'#ff9a4a':id==='castle'?'#9fb8ff':'#fff1c8',0.035);
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
        st.look(V(hz.x+Math.sin(a)*3.4,deckY+1.3,hz.z+Math.cos(a)*3.4),V(hz.x,deckY+1.0,hz.z));key.position.set(hz.x+Math.sin(a)*2.2,deckY+1.8,hz.z+Math.cos(a)*2.2);key.intensity=3;}
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
      else{once(fx,'clash',()=>{st.shake=2;flash.intensity=4;o.sfx&&o.sfx('slam');boom(0.1,1.8,-0.5,true);});if(rnd()<0.6)spark.emit(V(0.1,2.2,-0.5),V(0,1.5,0),0.6,['#5ef2ff','#ff4d6d','#ffffff'],0.7,8);
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
  const spark=st.part(900,{size:0.14,grav:6,jit:4,bright:2.6}),fw=st.part(3000,{size:0.38,grav:1.2,drag:0.6,jit:0.3,bright:2.8}),smoke=st.part(400,{size:1.1,add:false,grav:-0.3,drag:0.6,jit:1.4,bright:0.9}),gold=st.part(500,{size:0.22,add:false,grav:3,jit:0.6,bright:1.4});
  const key=new THREE.PointLight('#fff4e0',0,14,1.5);st.scene.add(key);const flash=new THREE.AmbientLight('#ffffff',0);st.scene.add(flash);let sh=null;const fx={};const HP=me||hero.g;
  const firework=()=>{const c=[['#ff4d6d','#ffe066'],['#5ef2ff','#ffffff'],['#3fdc6b','#ffe066'],['#c084fc','#ff8fa3']][(rnd()*4)|0],p=V((rnd()-.5)*24,9+rnd()*8,bz-4-rnd()*10);
    for(let i=0;i<140;i++){const a=rnd()*6.28,b=Math.acos(2*rnd()-1),v=5+rnd()*1.5;fw.emit(p,V(Math.sin(b)*Math.cos(a)*v,Math.cos(b)*v,Math.sin(b)*Math.sin(a)*v),0.2,c,1.8,1);}o.sfx&&o.sfx('pop');};
  return {D,update(t,dt){if(W.tick)W.tick(t);flash.intensity=Math.max(0,flash.intensity-dt*10);
    if(t<3.3){boss.position.x=(rnd()-.5)*0.25*seg(t,0.5,3.3);boss.rotation.z=Math.sin(t*9)*0.04*seg(t,0,3.3);if(rnd()<0.5)spark.emit(V((rnd()-.5)*BH*0.5,deckY+BH*rnd(),bz+1),V(0,2,2),0.4,['#ffe066','#ff7b1c','#ffffff'],0.6,6);
      if(boss.userData.glowMat)boss.userData.glowMat.opacity=((t*12)|0)%2?1:0.2;const a=lerp(0.5,-0.3,ease(seg(t,0,3.3)));st.look(V(Math.sin(a)*(BH*1.6),deckY+BH*0.3,bz+Math.cos(a)*BH*1.6),V(0,deckY+BH*0.55,bz));once(fx,'groan',()=>o.sfx&&o.sfx('roar'));}
    if(t>=3.3){once(fx,'boom',()=>{sh=shatter(boss,V(0,deckY+BH*0.5,bz),meMech?2.2:3.5);st.shake=1.8;flash.intensity=5;o.sfx&&o.sfx('slam');spark.emit(V(0,deckY+BH*0.5,bz),V(0,3,0),2,['#ffe066','#ffffff','#ff7b1c'],1.6,500);smoke.emit(V(0,deckY+1,bz),V(0,1.5,0),4,['#5a5070','#7a7090','#3a3450'],3.2,260);});sh(t-3.3);}
    if(t>=3.3&&t<5){const k=ease(seg(t,3.3,5));st.look(V(lerp(BH*1.2,BH*2,k),deckY+BH*0.4,bz+lerp(BH*1.2,BH*2.2,k)),V(0,deckY+BH*0.4,bz));}
    if(t>=5&&t<9.5){const k=ease(seg(t,5,9.5));st.look(V(lerp(0.4,0,k),deckY+lerp(1.2,3,k),lerp(7.5,9,k)),V(0,deckY+lerp(1.5,14,k),lerp(2,bz-14,k)));if(((t*3.4)|0)!==fx.f){fx.f=(t*3.4)|0;firework();if(rnd()<0.5)firework();}}
    if(t>=9.5){if(((t*2)|0)!==fx.f){fx.f=(t*2)|0;firework();}const a=lerp(0.7,-0.6,ease(seg(t,9.5,13.5)));
      if(rnd()<0.8)gold.emit(V(HP.position.x+(rnd()-.5)*4,deckY+5,HP.position.z+(rnd()-.5)*3),V(0,-1,0),0.3,['#ffc933','#ffe066','#fff3b0'],2.2,2);
      const r=meMech?6:3.6,hy=meMech?2.2:1.0;if(!meMech)hero.g.position.y=deckY+Math.max(0,Math.sin(seg(t,10.6,11.3)*Math.PI))*0.6;
      if(t<13.5){st.look(V(HP.position.x+Math.sin(a)*r,deckY+hy+0.4,HP.position.z+Math.cos(a)*r),V(HP.position.x,deckY+hy,HP.position.z));key.position.set(Math.sin(a)*2.4,deckY+2,HP.position.z+Math.cos(a)*2.4);key.intensity=3;}
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
      if(t<10){const k=ease(seg(t,7,10));st.look(V(lerp(2.6,1.6,k),lerp(1.4,1.1,k),lerp(6.5,4.2,k)),V(0,lerp(3.2,1.0,k),0));once(fx,'hum',()=>o.sfx&&o.sfx('charge'));if(rnd()<0.6)burst.emit(V(0,belt.position.y,0),V(0,-1,0),0.8,['#'+bc.getHexString(),'#ffffff'],0.6,2);}
      else{once(fx,'snap',()=>{st.shake=0.9;flash.intensity=2.5;ring.visible=true;o.sfx&&o.sfx('slam');burst.emit(V(0,waist,0),V(0,2,0),1,['#'+bc.getHexString(),'#ffffff','#ffe066'],1.4,420);for(let i=0;i<120;i++)petals.emit(V(0,1,0),V((rnd()-.5)*8,rnd()*4,(rnd()-.5)*8),0.4,['#ff9fc4','#ffffff'],3,1);});
        const rk=seg(t,10,11.2);ring.scale.setScalar(1+rk*12);ring.material.opacity=1-rk;belt.material.emissiveIntensity=0.6+0.5*Math.abs(Math.sin(t*3));
        const a=lerp(0.8,-0.7,ease(seg(t,10,15)));st.look(V(Math.sin(a)*lerp(3.2,5,seg(t,12,15)),lerp(1.2,1.8,seg(t,12,15)),Math.cos(a)*lerp(3.2,5,seg(t,12,15))),V(0,1.0,0));key.position.set(Math.sin(a)*2,2,Math.cos(a)*2);}}
    titleCard(o.ov,t,10.4,null,o.sub||'',o.beltColor&&o.beltColor.toLowerCase()!=='#f4f4f4'?o.beltColor:'#ffffff');o.ov.title.textContent=o.title||'NEW BELT!';o.ov.boss.style.opacity='0';
    o.ov.fade.style.opacity=String(Math.max(1-seg(t,0,0.6),seg(t,D-0.6,D)));o.ov.fade.style.background='#000';}};}

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
    const st=this.st=new Stage(host);st.skyR=H*30;st.r.domElement.style.cssText='position:absolute;inset:0;width:100%;height:100%;z-index:0';
    const D=H*1.25;st.cam.fov=2*Math.atan((H/2)/D)*180/Math.PI;st.cam.near=10;st.cam.far=H*80;st.cam.position.set(0,0,D);st.cam.lookAt(0,0,0);st.cam.updateProjectionMatrix();this.D=D;
    st.cam.far=H*80;const s=o.unit||H/90,set=(ARENA3D[o.arena]||ARENA3D.city)(st,s);this.s=s;this.gy=H/2-o.Y;
    st.scene.fog=new THREE.Fog(st.scene.fog.color,H*2.2,H*9);
    const sun=st.light('#fff4e0',2.6,'#c8d8ff','#4a3a4a',V(-H*0.5,H*1.2,H*1.4));const sc=sun.shadow.camera;sc.left=-W;sc.right=W;sc.top=H;sc.bottom=-H;sc.near=1;sc.far=H*6;sun.target.position.set(0,this.gy,0);st.scene.add(sun.target);sun.position.set(-H*0.6,H*1.4,H*1.6);
    st.bloom.strength=0.55;st.bloom.radius=0.4;st.bloom.threshold=0.9;
    const g=st.ground(set.ground,H*30);g.position.y=this.gy;g.material.map.repeat.set(60,60);
    const root=new THREE.Group();root.position.y=this.gy;st.scene.add(root);this.root=root;
    if(set.B.length){const m=st.boxes(set.B.map(b=>[b[0],b[1],b[2]-s*4,b[3],b[4],b[5],b[6]]));st.scene.remove(m);root.add(m);if(o.scroll){const m2=m.clone();m2.position.x=s*400;root.add(m2);}}this.g=g;
    this.emb=set.embers?st.part(300,{size:s*0.5,grav:-s*3,jit:s,bright:2.2}):null;this.snow=set.snow?st.part(400,{size:s*0.5,add:false,grav:s*2,jit:s,bright:1}):null;
    this.models={};this.parts=st.parts;}
  model(key,spr,size,o){const k=key+'@'+size.toFixed(2);if(!this.models[k]){const m=voxel(spr,Object.assign({size,depth:o&&o.depth||3},o||{}));this.st.scene.add(m);m.visible=false;this.models[k]=m;}return this.models[k];}
  hideAll(){for(const k in this.models)this.models[k].visible=false;}
  // place a model by its bottom-center screen position
  put(m,sx,sy,flip,white,z){m.visible=true;m.position.set(sx-this.W/2,this.H/2-sy,z||0);m.rotation.y=flip?Math.PI:0;const mat=m.userData.solid&&m.userData.solid.material;if(mat){mat.emissive=mat.emissive||new THREE.Color();mat.emissive.setRGB(white?0.9:0,white?0.9:0,white?0.9:0);}}
  frame(f,dt){const st=this.st;this.hideAll();
    if(this.emb&&rnd()<0.6)this.emb.emit(V((rnd()-.5)*this.W*1.5,this.gy,-this.s*(5+rnd()*30)),V(0,this.s*4,0),this.s*2,['#ff7b1c','#ffe066'],3,2);
    if(this.snow&&rnd()<0.8)this.snow.emit(V((rnd()-.5)*this.W*1.6,this.H*0.6,-this.s*rnd()*30),V(this.s*0.5,-this.s*3,0),this.s,['#ffffff'],5,2);
    for(const a of f.actors){if(!a||!a.spr)continue;const m=this.model(a.key,a.spr,a.size,a.o);this.put(m,a.x,a.y,a.flip,a.white,a.z);if(a.rot)m.rotation.z=a.rot;else m.rotation.z=0;if(a.scale)m.scale.setScalar(a.scale);else m.scale.setScalar(1);}
    // items: glowing 3D pickups
    this.items=this.items||[];const need=f.items||[];while(this.items.length<need.length){const g=new THREE.Mesh(new THREE.IcosahedronGeometry(1,0),new THREE.MeshStandardMaterial({color:'#ffe066',emissive:'#ffb627',emissiveIntensity:1.2,flatShading:true}));g.castShadow=true;st.scene.add(g);this.items.push(g);}
    this.items.forEach((g,i)=>{const it=need[i];g.visible=!!it;if(!it)return;g.position.set(it.x-this.W/2,this.H/2-it.y,0);g.scale.setScalar(it.r);g.rotation.y+=dt*3;g.rotation.x+=dt*1.7;const c=it.k==='heart'?'#ff4d6d':it.k==='bolt'?'#ffe066':it.k==='gem'?'#5ef2ff':it.k==='bone'?'#fff8e8':it.k==='bomb'?'#1d1f33':'#ffc933';g.material.color.set(c);g.material.emissive.set(it.k==='bomb'?'#ff2d4d':c);g.material.emissiveIntensity=it.k==='bone'?0.15:it.k==='bomb'?(Math.sin(performance.now()/60)>0?0.6:0):0.8;});
    st.shake=0;st.cam.position.set(f.shakeX||0,f.shakeY||0,this.D);st.cam.lookAt(f.shakeX||0,f.shakeY||0,0);
    if(f.scroll!=null){const w=this.s*400;this.root.position.x=-(f.scroll%w);if(this.g.material.map)this.g.material.map.offset.x=(f.scroll/(this.H*30))*60;}
    if(st.grade)st.grade.uniforms.vig.value=0.3;st.render(dt);}
  resize(W,H){this.W=W;this.H=H;this.st.resize();}
  dispose(){this.st.dispose();}}

// ---------- player
function overlay(host){const mk=(css,txt)=>{const d=document.createElement('div');d.style.cssText=css;if(txt)d.textContent=txt;host.appendChild(d);return d;};
  const font='"Pixelify Sans",Lexend,system-ui,sans-serif';
  return {title:mk(`position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);font:900 min(11vw,92px) ${font};letter-spacing:2px;text-align:center;white-space:nowrap;opacity:0;text-shadow:0 6px 0 #000,0 0 30px rgba(0,0,0,.6);-webkit-text-stroke:3px #000;pointer-events:none`),
    sub:mk(`position:absolute;left:50%;top:41%;transform:translateX(-50%);font:700 min(4vw,28px) Lexend,system-ui,sans-serif;color:#fff;text-shadow:0 3px 0 #000,0 0 12px #000;opacity:0;white-space:nowrap;pointer-events:none`),
    boss:mk(`position:absolute;right:4%;bottom:12%;font:800 min(4.4vw,32px) Lexend,system-ui,sans-serif;color:#ff4d6d;text-shadow:0 3px 0 #000,0 0 18px #ff2d4d;opacity:0;pointer-events:none`),
    bars:[mk('position:absolute;left:0;right:0;top:0;height:9%;background:#000;pointer-events:none'),mk('position:absolute;left:0;right:0;bottom:0;height:9%;background:#000;pointer-events:none')],
    fade:mk('position:absolute;inset:0;background:#000;opacity:1;pointer-events:none')};}


// ---------- lesson shots: one of his worlds + his characters + treasure props, filmed with a slow camera move.
// Frame 0 of each shot is also the first frame handed to Veo, so the AI footage starts in his game's look.
const PM={};function pmat(k){if(PM[k])return PM[k];return PM[k]=({
  gold:()=>new THREE.MeshStandardMaterial({color:'#ffc933',metalness:0.9,roughness:0.25,envMapIntensity:1.5}),
  wood:()=>new THREE.MeshStandardMaterial({color:'#8a5a2a',roughness:0.8}),
  bone:()=>new THREE.MeshStandardMaterial({color:'#cfc2a4',roughness:0.85}),
  steel:()=>new THREE.MeshStandardMaterial({color:'#7a80a8',metalness:0.7,roughness:0.3,envMapIntensity:1.2}),
  stone:()=>new THREE.MeshStandardMaterial({color:'#5a5a70',roughness:0.9})}[k])();}
const shadowAll=g=>{g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});return g;};
const PROPS={
  gem:o=>{const g=new THREE.Group(),c=new THREE.Color(o.col);const m=new THREE.Mesh(new THREE.OctahedronGeometry(0.2*(o.s||1),0),new THREE.MeshStandardMaterial({color:c,emissive:c,emissiveIntensity:0.45,metalness:0.1,roughness:0.12,flatShading:true}));m.scale.y=1.45;g.add(m);return shadowAll(g);},
  bar:o=>shadowAll(new THREE.Mesh(new RoundedBoxGeometry(0.9*(o.s||1),0.26*(o.s||1),0.38*(o.s||1),2,0.05),pmat('gold'))),
  coin:o=>{const m=new THREE.Mesh(new THREE.CylinderGeometry(0.17*(o.s||1),0.17*(o.s||1),0.06,22),pmat('gold'));return shadowAll(m);},
  bone:o=>{const g=new THREE.Group(),M=pmat('bone'),k=o.s||1;g.add(new THREE.Mesh(new THREE.BoxGeometry(0.5*k,0.1*k,0.1*k),M));for(const x of [-0.27,0.27])for(const z of [-0.065,0.065]){const b=new THREE.Mesh(new THREE.SphereGeometry(0.075*k,10,8),M);b.position.set(x*k,0,z*k);g.add(b);}return shadowAll(g);},
  shield:o=>{const g=new THREE.Group(),c=new THREE.Color(o.col||'#5ef2ff');g.add(new THREE.Mesh(new RoundedBoxGeometry(0.72,0.86,0.12,2,0.05),pmat('steel')));const e=new THREE.Mesh(new THREE.BoxGeometry(0.5,0.12,0.15),new THREE.MeshStandardMaterial({color:c,emissive:c,emissiveIntensity:1.2}));e.position.y=0.14;g.add(e);
    const e2=new THREE.Mesh(new THREE.BoxGeometry(0.12,0.5,0.15),e.material);e2.position.y=0.05;g.add(e2);return shadowAll(g);},
  chest:o=>{const g=new THREE.Group(),k=o.s||1;const b=new THREE.Mesh(new RoundedBoxGeometry(1.6*k,0.9*k,1*k,2,0.06),pmat('wood'));b.position.y=0.45*k;g.add(b);const lid=new THREE.Mesh(new RoundedBoxGeometry(1.64*k,0.28*k,1.04*k,2,0.06),pmat('wood'));lid.position.set(0,1.0*k,-0.5*k);lid.rotation.x=-1.15;g.add(lid);
    for(const x of [-0.6,0.6]){const t=new THREE.Mesh(new THREE.BoxGeometry(0.12*k,0.95*k,1.05*k),pmat('gold'));t.position.set(x*k,0.47*k,0);g.add(t);}return shadowAll(g);},
  anvil:o=>{const g=new THREE.Group(),M=pmat('steel');const a=new THREE.Mesh(new THREE.BoxGeometry(1.2,0.35,0.55),M);a.position.y=0.95;g.add(a);const h=new THREE.Mesh(new THREE.BoxGeometry(0.5,0.3,0.4),M);h.position.set(0.75,0.98,0);g.add(h);
    const b=new THREE.Mesh(new THREE.BoxGeometry(0.5,0.8,0.5),pmat('stone'));b.position.y=0.4;g.add(b);return shadowAll(g);},
  rune:o=>{const c=new THREE.Color(o.col||'#5ef2ff');const m=new THREE.Mesh(new THREE.RingGeometry(o.r||1.4,(o.r||1.4)+(o.w||0.26),o.sides||3,1,o.theta||0),new THREE.MeshBasicMaterial({color:c.multiplyScalar(1.8),toneMapped:false,transparent:true,opacity:0.9,side:THREE.DoubleSide}));m.rotation.x=-Math.PI/2;return m;},
  banner:o=>{const g=new THREE.Group(),c=new THREE.Color(o.col||'#9b6bff');const pole=new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,3.4,8),pmat('wood'));pole.position.y=1.7;g.add(pole);
    const f=new THREE.Mesh(new THREE.PlaneGeometry(1.1,1.6),new THREE.MeshStandardMaterial({color:c,side:THREE.DoubleSide,emissive:c,emissiveIntensity:0.25}));f.position.set(0.6,2.5,0);g.add(f);return shadowAll(g);}};
const GEMCOLS=['#5ef2ff','#ff4d9d','#7dff5a','#ffe066','#b98cff'];
function layout(st,P,list){const n=P.n||1,out=[],[cx,cz]=P.at||[0,0],y0=P.y||0;
  const mk=i=>{const o=Object.assign({},P,{col:P.col||(P.type==='gem'?GEMCOLS[i%GEMCOLS.length]:null)});const m=PROPS[P.type](o);st.scene.add(m);list.push({m,P,i});return m;};
  if(P.layout==='pile'){const r=P.r||1.1;for(let i=0;i<n;i++){const a=rnd()*6.283,d=Math.sqrt(rnd())*r,m=mk(i);m.position.set(cx+Math.cos(a)*d,y0+0.18+(1-d/r)*(P.h||0.7)+rnd()*0.12,cz+Math.sin(a)*d*0.8);m.rotation.set(rnd()*0.5,rnd()*6.28,rnd()*0.5);}}
  else if(P.layout==='groups'){const G=P.groups||[[0,0]],per=P.per||3;G.forEach(([gx,gz],gi)=>{for(let i=0;i<per;i++){const m=mk(gi*per+i);const k=i-(per-1)/2;m.position.set(gx+k*(P.gap||0.42),y0+0.25+(P.type==='bar'?0.14*Math.floor(i/3):0),gz+((i%2)?0.12:-0.12));m.rotation.y=rnd()*0.4;}});}
  else if(P.layout==='grid'){const R=P.rows||3,C=P.cols||4,g=P.gap||0.95;for(let r=0;r<R;r++)for(let c=0;c<C;c++){const m=mk(r*C+c);m.position.set(cx+(c-(C-1)/2)*g,y0+(R-1-r)*g*1.05,cz);}}
  else if(P.layout==='stack'){for(let i=0;i<n;i++){const m=mk(i);m.position.set(cx+(i%2)*0.05,y0+0.06+i*0.07,cz);m.rotation.y=i*0.7;}}
  else if(P.layout==='pts'){(P.pts||[]).forEach(([x,z],i)=>{const m=mk(i);m.position.set(x,y0+(P.lift||0.35),z);});}
  else{for(let i=0;i<n;i++){const m=mk(i);m.position.set(cx+(i-(n-1)/2)*(P.gap||0.5),y0+0.2,cz);}}}
function lessonShot(st,S,o){const sh=o.shot;seed=31+(sh.seed||0);const W=WORLDS[sh.world||'castle'](st),D=sh.D||8,deckY=W.deckY||0;
  const chars=[],props=[];
  for(const c of sh.chars||[]){let m;const k=c.k;
    if(k==='hero')m=voxel(S.hero.stand,{size:0.1*(c.s||1),depth:3,noGlow:c.glow!==true});
    else if(k==='knight')m=voxel((S.friends&&S.friends[(c.f||0)%S.friends.length])||S.hero.stand,{size:0.1*(c.s||1),depth:3});
    else if(k==='dog')m=voxel(S.dog,{size:0.085*(c.s||1),depth:3,tint:c.tint,tintK:c.tintK||0.3});
    else if(k==='glitch')m=voxel(S.glitch,{size:0.1*(c.s||1),depth:3});
    else if(k==='gmech')m=voxel(S.gmech,{size:0.32*(c.s||1),depth:4,metal:0.45});
    else if(k==='mech')m=voxel(S.mech,{size:0.32*(c.s||1),depth:4,metal:0.45});
    if(!m)continue;m.position.set(c.x||0,deckY+(c.y||0),c.z||0);m.rotation.y=c.rot||0;if(m.userData.glowMat&&k!=='glitch')m.userData.glowMat.opacity=c.glow==null?0.9:c.glow;st.scene.add(m);chars.push({m,c,y:m.position.y});}
  for(const P of sh.props||[])layout(st,Object.assign({y:deckY},P),props);
  for(const L of sh.lights||[]){const l=new THREE.PointLight(L.col||'#ffe9b0',L.i||30,L.d||10,1.6);l.position.set(L.x||0,deckY+(L.y||2),L.z||0);st.scene.add(l);}
  const spark=st.part(400,{size:0.09,grav:-0.3,jit:0.4,bright:2.6});const C=sh.cam||{};const A=V(...(C.from||[0,3,8])),B=V(...(C.to||C.from||[0,3,8])),T0=V(...(C.at||[0,1,0])),T1=V(...(C.at2||C.at||[0,1,0]));if(C.fov)st.fov(C.fov);
  return {D,update(t,dt){if(W.tick)W.tick(t);const k=ease(Math.min(1,t/D));st.look(A.clone().lerp(B,k),T0.clone().lerp(T1,k));
    chars.forEach(({m,c,y},i)=>{if(c.k==='glitch')m.position.y=y+Math.sin(t*2.2+i)*0.15;else if(c.bob!==false)m.position.y=y+Math.abs(Math.sin(t*2+i*1.3))*0.025;});
    props.forEach(({m,P,i})=>{if(P.type==='gem'&&P.layout!=='pile'){m.rotation.y+=dt*1.2;}if(P.float){m.position.y+=Math.sin(t*2+i)*0.003;}});
    if(sh.sparkle&&rnd()<0.7){const s=sh.sparkle;spark.emit(V(s[0]+(rnd()-.5)*(s[2]||2),deckY+0.3+rnd()*1.2,s[1]+(rnd()-.5)*(s[2]||2)*0.6),V(0,0.6,0),0.2,['#ffe066','#5ef2ff','#ffffff','#ff4d9d'],1.1,2);}
    if(o.ov){o.ov.fade.style.opacity=String(sh.fadeIn?Math.max(0,1-t/0.5):0);}}};}

const Cine3D={
  ok(){try{const c=document.createElement('canvas');return !!(c.getContext('webgl2')||c.getContext('webgl'));}catch(e){return false;}},
  // kind: 'world' | 'mech'. o: {sprites, world, title, sub, boss, color, sfx(name), onStart}
  play(kind,o){return new Promise(res=>{const host=document.createElement('div');host.id='cine3d';host.style.cssText='position:fixed;inset:0;z-index:60;background:#000;overflow:hidden;touch-action:none';document.body.appendChild(host);
    const st=new Stage(host),ov=overlay(host);o.ov=ov;const sc=({mech:mechScene,world:worldScene,victory:victoryScene,belt:beltScene,shot:lessonShot}[kind]||worldScene)(st,o.sprites,o);
    const skip=document.createElement('button');skip.textContent='Skip ▸';skip.style.cssText='position:absolute;top:calc(9% + 10px);right:14px;z-index:3;border:0;border-radius:12px;padding:12px 18px;font:700 17px Lexend,system-ui;background:#ffffff26;color:#fff';host.appendChild(skip);
    let done=false,t=0,last=performance.now();const end=()=>{if(done)return;done=true;if(o.onEnd)o.onEnd();window.removeEventListener('resize',rs);st.dispose();host.remove();res();};
    const rs=()=>st.resize();window.addEventListener('resize',rs);skip.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();end();});
    if(o.manual){this._step=(tt,dt)=>{t=tt;sc.update(t,dt);st.render(dt);};this._end=end;
      // composite frame (3D + overlay text) for recording
      this._frame=(q)=>{const gl=st.r.domElement,W=host.clientWidth,H=host.clientHeight,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');x.drawImage(gl,0,0,W,H);
        if(!o.noBars){x.fillStyle='#000';x.fillRect(0,0,W,H*0.09);x.fillRect(0,H*0.91,W,H*0.09);}
        const txt=(el,font,y,al,xx)=>{const op=+el.style.opacity||0;if(op<=0.01||!el.textContent)return;x.globalAlpha=op;x.font=font;x.textAlign=al||'center';x.lineJoin='round';const m=/scale\(([\d.]+)\)/.exec(el.style.transform||'');const sc=m?+m[1]:1;
          x.save();x.translate(xx==null?W/2:xx,y);x.scale(sc,sc);x.lineWidth=8;x.strokeStyle='#000';x.strokeText(el.textContent,0,0);x.fillStyle=el.style.color||'#fff';x.fillText(el.textContent,0,0);x.restore();x.globalAlpha=1;};
        const L0=(ov.title.textContent||'').length||8,big=Math.min(W*Math.min(0.11,1.5/L0),92);txt(ov.title,`900 ${big}px "Pixelify Sans",Lexend,sans-serif`,H*0.3+big*0.35);txt(ov.sub,`700 ${Math.min(W*0.04,28)}px Lexend,sans-serif`,H*0.41+20);
        ov.boss.style.color=ov.boss.style.color||'#ff4d6d';txt(ov.boss,`800 ${Math.min(W*0.044,32)}px Lexend,sans-serif`,H*0.88-10,'right',W*0.96);
        const fo=+ov.fade.style.opacity||0;if(fo>0.01){x.globalAlpha=fo;x.fillStyle=ov.fade.style.background||'#000';x.fillRect(0,0,W,H);x.globalAlpha=1;}
        return c.toDataURL('image/jpeg',q||0.9).split(',')[1];};return;}
    const loop=now=>{if(done)return;const dt=Math.min(0.05,(now-last)/1000);last=now;t+=dt;sc.update(t,dt);st.render(dt);if(t>=sc.D)end();else requestAnimationFrame(loop);};
    if(o.onStart)o.onStart();requestAnimationFrame(loop);});}
};
Cine3D.live=(host,o)=>new Live(host,o);
window.Cine3D=Cine3D;
