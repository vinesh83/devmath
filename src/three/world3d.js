// Number Isle: a toon 3D island Dev walks around (Zelda-style) to reach every place in the game.
// The game passes in "sites" (name, position kind, progress, actions); this file only draws and moves.
import * as THREE from 'three';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// ---------- toon look
let GRAD=null;
function grad(){if(GRAD)return GRAD;const d=new Uint8Array([90,90,90,255,170,170,170,255,255,255,255,255]);GRAD=new THREE.DataTexture(d,3,1,THREE.RGBAFormat);GRAD.minFilter=GRAD.magFilter=THREE.NearestFilter;GRAD.needsUpdate=true;return GRAD;}
const MATS={};
function toon(col,o={}){const k=col+JSON.stringify(o);if(!MATS[k])MATS[k]=new THREE.MeshToonMaterial(Object.assign({color:new THREE.Color(col),gradientMap:grad()},o));return MATS[k];}
const OUT=new THREE.MeshBasicMaterial({color:0x1a1530,side:THREE.BackSide});
function outline(mesh,s=1.06){const o=new THREE.Mesh(mesh.geometry,OUT);o.scale.setScalar(s);o.raycast=()=>{};mesh.add(o);return mesh;}
function M(geo,col,o){const m=new THREE.Mesh(geo,toon(col,o));m.castShadow=true;m.receiveShadow=true;return m;}

// ---------- terrain
const SEA=0;
function rng(seed){let s=seed>>>0;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};}
function vnoise(seed){const R=rng(seed),P=new Float32Array(512);for(let i=0;i<512;i++)P[i]=R();
  const h=(x,y)=>P[((x*73856093)^(y*19349663))&511];const sm=t=>t*t*(3-2*t);
  return(x,y)=>{const xi=Math.floor(x),yi=Math.floor(y),xf=sm(x-xi),yf=sm(y-yi);const a=h(xi,yi),b=h(xi+1,yi),c=h(xi,yi+1),d=h(xi+1,yi+1);return a+(b-a)*xf+(c-a)*yf+(a-b-c+d)*xf*yf;};}
class Island{
  constructor(sites){this.n=vnoise(7);this.flat=sites.map(s=>({x:s.x,z:s.z,r:s.flat||7,h:null}));this.R=62;
    this.flat.forEach(f=>{f.h=Math.max(1.2,this.raw(f.x,f.z));});}
  raw(x,z){const d=Math.hypot(x,z)/this.R;const base=1-Math.pow(Math.min(1.4,d),2.2);const n=this.n(x*0.06,z*0.06)*0.7+this.n(x*0.15+9,z*0.15)*0.3;
    let h=base*6+(n-0.5)*5*Math.max(0,1-d);
    // the north islet (Glitch Fortress) and a land bridge to it
    const fd=Math.hypot(x,z+80)/16;h=Math.max(h,(1-Math.pow(Math.min(1.3,fd),2))*7-0.5);
    if(Math.abs(x)<3.2&&z<-50&&z>-70)h=Math.max(h,1.4);
    const md=Math.hypot(x+40,z+38)/17;if(md<1.3)h=Math.max(h,Math.pow(Math.max(0,1-md),1.6)*24+(this.n(x*0.2,z*0.2)-0.5)*2);
    return h;}
  h(x,z){let h=this.raw(x,z);for(const f of this.flat){const d=Math.hypot(x-f.x,z-f.z);if(d<f.r+4){const k=d<f.r?1:1-(d-f.r)/4;h=h+(f.h-h)*k*k*(3-2*k);}}return h;}
}

// ---------- characters (smooth toon, built from simple shapes)
function hatCone(col){const g=new THREE.Group();const brim=M(new THREE.CylinderGeometry(0.62,0.62,0.06,24),col);const cone=M(new THREE.ConeGeometry(0.38,0.95,24),col);cone.position.y=0.5;cone.rotation.z=-0.18;
  const star=M(new THREE.OctahedronGeometry(0.1),'#ffe066',{emissive:new THREE.Color('#ffb627'),emissiveIntensity:0.6});star.position.set(0.05,0.45,0.32);g.add(brim,cone,star);outline(cone,1.05);return g;}
function starTex(base){const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d');x.fillStyle=base;x.fillRect(0,0,128,128);
  const R=rng(3);for(let i=0;i<40;i++){x.fillStyle=R()<0.3?'#ffe066':'#ffffff';const s=R()*2.5+0.8;x.fillRect(R()*128,R()*128,s,s);}
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;return t;}
const OUTFITS={galaxy:'#3b2a7a',ninja:'#2a2f3d',knight:'#9aa6b8',fire:'#e8643a',ocean:'#2f7fd1',forest:'#2f8f4e'};
function makeHero(L){const g=new THREE.Group(),skin=L.skin||'#c68642',hair=L.hair||'#2b1d14',oc=OUTFITS[L.outfit]||L.outfitCol||'#3b2a7a';
  const body=new THREE.Mesh(new THREE.CapsuleGeometry(0.42,0.55,6,16),new THREE.MeshToonMaterial({color:oc,gradientMap:grad(),map:L.outfit==='galaxy'?starTex(oc):null}));body.castShadow=true;body.position.y=1.05;outline(body);
  const head=M(new THREE.SphereGeometry(0.42,24,18),skin);head.position.y=1.85;outline(head);
  const hr=M(new THREE.SphereGeometry(0.44,24,18,0,Math.PI*2,0,Math.PI*0.55),hair);hr.position.y=1.88;hr.rotation.x=-0.25;
  const eyeG=new THREE.SphereGeometry(0.06,10,8),eyeM=new THREE.MeshBasicMaterial({color:'#1a1530'});
  const e1=new THREE.Mesh(eyeG,eyeM),e2=e1.clone();e1.position.set(-0.15,1.88,0.38);e2.position.set(0.15,1.88,0.38);
  const legG=new THREE.CapsuleGeometry(0.13,0.35,4,10),armG=new THREE.CapsuleGeometry(0.11,0.42,4,10);
  const mk=(geo,col,x,y)=>{const p=new THREE.Group();p.position.set(x,y,0);const m=M(geo,col);m.position.y=-0.28;p.add(m);return p;};
  const lL=mk(legG,'#24204a',-0.18,0.62),lR=mk(legG,'#24204a',0.18,0.62),aL=mk(armG,oc,-0.52,1.35),aR=mk(armG,oc,0.52,1.35);
  [aL,aR].forEach(a=>{const hd=M(new THREE.SphereGeometry(0.12,12,10),skin);hd.position.y=-0.6;a.add(hd);});
  g.add(body,head,hr,e1,e2,lL,lR,aL,aR);
  if(L.hat==='wizard'){const h=hatCone('#6a3fc8');h.position.y=2.2;g.add(h);}
  if(L.cape){const cg=new THREE.PlaneGeometry(0.8,1.1,1,6);const cp=new THREE.Mesh(cg,toon(L.cape==='gold'?'#ffc933':L.cape==='red'?'#e23b3b':'#4d7cff',{side:THREE.DoubleSide}));cp.position.set(0,1.0,-0.44);cp.rotation.x=0.12;cp.castShadow=true;g.add(cp);g.userData.cape=cp;}
  g.userData.limbs={lL,lR,aL,aR};return g;}
function makeDog(D){const g=new THREE.Group(),w='#f4f1ea';
  const body=M(new THREE.CapsuleGeometry(0.28,0.5,6,14),w);body.rotation.x=Math.PI/2;body.position.y=0.55;outline(body);
  const head=M(new THREE.SphereGeometry(0.3,18,14),w);head.position.set(0,0.88,0.42);outline(head);
  const snout=M(new THREE.SphereGeometry(0.14,12,10),w);snout.position.set(0,0.82,0.7);const nose=new THREE.Mesh(new THREE.SphereGeometry(0.05,8,6),new THREE.MeshBasicMaterial({color:'#1a1530'}));nose.position.set(0,0.86,0.83);
  const earG=new THREE.SphereGeometry(0.12,10,8);const e1=M(earG,'#2b2b33'),e2=M(earG,'#2b2b33');e1.scale.set(0.6,1.3,0.5);e2.scale.copy(e1.scale);e1.position.set(-0.24,0.98,0.38);e2.position.set(0.24,0.98,0.38);
  const spot=M(new THREE.SphereGeometry(0.16,10,8),'#2b2b33');spot.position.set(0.17,0.66,-0.05);spot.scale.set(0.6,0.8,1);
  const legs=[];for(const [x,z] of [[-0.16,0.25],[0.16,0.25],[-0.16,-0.25],[0.16,-0.25]]){const l=M(new THREE.CapsuleGeometry(0.07,0.22,4,8),w);l.position.set(x,0.22,z);legs.push(l);g.add(l);}
  const tail=M(new THREE.CapsuleGeometry(0.05,0.3,4,8),w);tail.position.set(0,0.75,-0.5);tail.rotation.x=-0.8;
  g.add(body,head,snout,nose,e1,e2,spot,tail);
  if(D&&D.hat==='wizard'){const h=hatCone('#b06bff');h.scale.setScalar(0.45);h.position.set(0,1.14,0.42);g.add(h);}
  if(D&&D.face==='starglasses'){const gl=M(new THREE.TorusGeometry(0.08,0.025,6,12),'#ffe066');const g2=gl.clone();gl.position.set(-0.1,0.92,0.68);g2.position.set(0.1,0.92,0.68);g.add(gl,g2);}
  g.userData={legs,tail};return g;}

// ---------- landmarks
function cyl(r1,r2,h,col,seg=16){return M(new THREE.CylinderGeometry(r1,r2,h,seg),col);}
function box(w,h,d,col){return M(new THREE.BoxGeometry(w,h,d),col);}
function roof(r,h,col,seg=4){const m=M(new THREE.ConeGeometry(r,h,seg),col);if(seg===4)m.rotation.y=Math.PI/4;return m;}
function at(m,x,y,z){m.position.set(x,y,z);return m;}
const BUILD={
  dojo(){const g=new THREE.Group();g.add(at(box(6,0.6,6,'#d8c7a8'),0,0.3,0));
    for(let i=0;i<3;i++){const s=1-i*0.25;g.add(at(box(4*s,1.6,4*s,'#f3ead8'),0,1.4+i*2.1,0));g.add(at(roof(3.6*s,1.2,'#d2443a'),0,2.8+i*2.1,0));}
    for(const x of [-2.2,2.2])g.add(at(cyl(0.18,0.18,3,'#b33a2e'),x,1.5,3.2));g.add(at(box(5.2,0.35,0.5,'#b33a2e'),0,3.1,3.2));return g;},
  quest(){const g=new THREE.Group();for(const x of [-1.1,1.1])g.add(at(cyl(0.12,0.12,2.6,'#8a5a2b'),x,1.3,0));g.add(at(box(2.8,1.6,0.2,'#c8955a'),0,1.9,0));
    for(let i=0;i<3;i++)g.add(at(box(0.6,0.5,0.05,'#fff7e0'),-0.8+i*0.8,1.95,0.12));
    const ex=at(M(new THREE.OctahedronGeometry(0.35),'#ffe066',{emissive:new THREE.Color('#ffb627'),emissiveIntensity:0.8}),0,3.4,0);ex.userData.spin=1;g.add(ex);return g;},
  canyon(){const g=new THREE.Group(),C=['#e8643a','#f08c4a','#d4532e','#f5b06b'];
    [[0,0,3.2,6],[4.5,1.5,2.4,4.5],[-4,2,2.2,3.8],[2,-4,1.8,5.2]].forEach(([x,z,r,h],k)=>{for(let i=0;i<4;i++)g.add(at(cyl(r*(1-i*0.06),r*(1-(i-1)*0.06),h/4,C[(i+k)%4],9),x,h/8+i*h/4,z));});return g;},
  docks(){const g=new THREE.Group();for(let i=0;i<6;i++)g.add(at(box(2.4,0.2,1.3,'#a4723f'),0,0.6,i*1.35));for(let i=0;i<7;i++)for(const x of [-1.1,1.1])g.add(at(cyl(0.12,0.12,2,'#7a5230'),x,0,i*1.35));
    const boat=new THREE.Group();boat.add(at(box(1.8,0.6,3.4,'#e23b3b'),0,0,0));boat.add(at(cyl(0.07,0.07,3,'#7a5230'),0,1.5,0));const sail=M(new THREE.PlaneGeometry(1.4,1.8),'#fff7e0',{side:THREE.DoubleSide});sail.position.set(0,1.8,0.1);sail.rotation.y=Math.PI/2;boat.add(sail);
    boat.position.set(3.2,0.3,6);boat.userData.bob=1;g.add(boat);
    const lh=new THREE.Group();for(let i=0;i<4;i++)lh.add(at(cyl(0.9-i*0.1,1-i*0.1,1.4,i%2?'#e23b3b':'#ffffff'),0,0.7+i*1.4,0));lh.add(at(M(new THREE.SphereGeometry(0.55,12,10),'#ffe066',{emissive:new THREE.Color('#ffd23f'),emissiveIntensity:0.9}),0,6.2,0));lh.add(at(roof(0.8,0.8,'#2b2b33',12),0,6.9,0));lh.position.set(-4,0,1);g.add(lh);return g;},
  forge(){const g=new THREE.Group();g.add(at(box(5,3,4,'#8f8f9c'),0,1.5,0));g.add(at(roof(4,1.8,'#5a4632'),0,3.9,0));const ch=at(box(0.9,3,0.9,'#6e6e7a'),1.6,4.2,-0.8);ch.userData.smoke=1;g.add(ch);
    g.add(at(box(1.2,0.5,0.6,'#3a3a44'),0,0.9,2.6));g.add(at(box(0.6,0.7,0.4,'#3a3a44'),0,0.35,2.6));
    g.add(at(M(new THREE.BoxGeometry(1.6,1.2,0.1),'#ff7b1c',{emissive:new THREE.Color('#ff4d1c'),emissiveIntensity:0.9}),0,1,2.01));return g;},
  castle(){const g=new THREE.Group(),S='#cfc6b8';g.add(at(box(8,3,0.8,S),0,1.5,3));g.add(at(box(8,3,0.8,S),0,1.5,-3));g.add(at(box(0.8,3,6,S),-4,1.5,0));g.add(at(box(0.8,3,6,S),4,1.5,0));
    for(const [x,z] of [[-4,3],[4,3],[-4,-3],[4,-3]]){g.add(at(cyl(1,1,5,S),x,2.5,z));g.add(at(roof(1.25,1.8,'#4d7cff',12),x,5.9,z));}
    g.add(at(box(3,5,3,'#ddd5c8'),0,2.5,0));g.add(at(roof(2.3,2.2,'#4d7cff'),0,6.1,0));g.add(at(box(1.4,1.8,0.2,'#5a4632'),0,0.9,3.42));
    const fl=M(new THREE.PlaneGeometry(1,0.6),'#ffd23f',{side:THREE.DoubleSide});fl.position.set(0.5,8,0);g.add(fl,at(cyl(0.05,0.05,1.6,'#5a4632'),0,7.6,0));return g;},
  tower(){const g=new THREE.Group();for(let i=0;i<6;i++)g.add(at(cyl(1.8-i*0.12,1.9-i*0.12,1.6,i%2?'#b9b2a6':'#cfc8bb'),0,0.8+i*1.6,0));
    g.add(at(roof(2,3,'#2f6fdc',12),0,11.1,0));for(let i=0;i<5;i++){const w=at(box(0.4,0.6,0.1,'#ffe9a8'),0,1.4+i*1.9,1.85-i*0.12);g.add(w);}
    const bk=at(box(0.8,1,0.25,'#e0457b'),0,13,0);bk.userData.spin=1;g.add(bk);return g;},
  dungeon(){const g=new THREE.Group();const hill=M(new THREE.SphereGeometry(4.5,20,14,0,Math.PI*2,0,Math.PI/2),'#7a8a5a');g.add(hill);
    const mouth=M(new THREE.CircleGeometry(1.6,20,0,Math.PI),'#140c1e');mouth.position.set(0,0.02,4.2);mouth.rotation.x=-0.25;g.add(mouth);
    g.add(at(M(new THREE.TorusGeometry(1.75,0.3,8,20,Math.PI),'#8f8f9c'),0,0,4.15));
    const glow=new THREE.PointLight('#e0457b',6,8);glow.position.set(0,1,4.6);g.add(glow);return g;},
  camp(){const g=new THREE.Group();[[-2,0,'#4d9bff'],[2,0.5,'#3fbf5f'],[0,-2.2,'#ffb627']].forEach(([x,z,c])=>{const t=roof(1.6,2.2,c,4);t.position.set(x,1.1,z);g.add(t);});
    const fire=at(M(new THREE.ConeGeometry(0.35,0.8,8),'#ff7b1c',{emissive:new THREE.Color('#ff4d1c'),emissiveIntensity:1}),0,0.4,1.6);fire.userData.flicker=1;g.add(fire);return g;},
  fortress(){const g=new THREE.Group(),P='#3a2a5a';g.add(at(cyl(4,5,3,P,8),0,1.5,0));g.add(at(cyl(2,3,7,'#2a1d45',8),0,6.5,0));
    for(let i=0;i<6;i++){const a=i/6*Math.PI*2;const sp=at(M(new THREE.ConeGeometry(0.5,3,6),'#5a3a8a'),Math.cos(a)*4,4,Math.sin(a)*4);g.add(sp);}
    const eye=at(M(new THREE.SphereGeometry(0.9,16,12),'#ff2d55',{emissive:new THREE.Color('#ff2d55'),emissiveIntensity:1.2}),0,9.5,1.4);eye.userData.pulse=1;g.add(eye);
    g.add(at(roof(2.4,3,'#1a1030',8),0,11.5,0));return g;},
  mech(){const g=new THREE.Group();g.add(at(box(6,3.5,4.5,'#9aa6b8'),0,1.75,0));const r=M(new THREE.CylinderGeometry(3.1,3.1,6,16,1,false,0,Math.PI),'#7f8ba0');r.rotation.z=Math.PI/2;r.position.y=3.5;g.add(r);
    g.add(at(box(3,2.6,0.1,'#2a2f3d'),0,1.3,2.27));const m=new THREE.Group();m.add(at(box(1,1.2,0.8,'#c9d3e6'),0,1.6,0),at(box(0.7,0.6,0.6,'#c9d3e6'),0,2.5,0),at(box(0.3,1,0.3,'#7f8ba0'),-0.3,0.5,0),at(box(0.3,1,0.3,'#7f8ba0'),0.3,0.5,0));m.position.set(2.2,0,3);m.scale.setScalar(1.1);g.add(m);return g;},
  shop(){const g=new THREE.Group();g.add(at(box(3.6,1.1,1.6,'#a4723f'),0,0.55,0));for(const x of [-1.6,1.6])g.add(at(cyl(0.1,0.1,2.8,'#7a5230'),x,1.4,0.6));
    for(let i=0;i<6;i++){const s=at(box(0.6,0.12,2,i%2?'#ffffff':'#e23b3b'),-1.5+i*0.6,2.9,0.2);s.rotation.x=0.35;g.add(s);}
    for(let i=0;i<4;i++)g.add(at(M(new THREE.SphereGeometry(0.22,10,8),['#ffe066','#ff7b1c','#3fbf5f','#4d9bff'][i]),-1.1+i*0.75,1.32,0));return g;},
};
function labelSprite(text,sub,col){const c=document.createElement('canvas');c.width=512;c.height=160;const x=c.getContext('2d');
  const draw=(t,s)=>{x.clearRect(0,0,512,160);x.fillStyle='rgba(20,16,40,0.78)';x.beginPath();x.roundRect(16,10,480,s?132:96,28);x.fill();x.lineWidth=6;x.strokeStyle=col||'#ffe066';x.stroke();
    x.textAlign='center';x.fillStyle='#fff';x.font='800 46px Lexend, sans-serif';x.fillText(t,256,s?66:72);if(s){x.font='600 32px Lexend, sans-serif';x.fillStyle='#ffe9a8';x.fillText(s,256,118);}};
  draw(text,sub);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;
  const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:t,depthTest:false,transparent:true}));sp.scale.set(6,1.9,1);sp.renderOrder=10;sp.userData.redraw=(a,b)=>{draw(a,b);t.needsUpdate=true;};return sp;}

// ---------- the world
class World{
  constructor(host,o){this.host=host;this.o=o;this.sites=o.sites;this.keys={};this.joy={x:0,y:0};this.yaw=o.yaw!=null?o.yaw:Math.PI;this.camDist=11;this.near=null;this.t=0;this.alive=true;
    this.tier=o.tier||0;const r=this.r=new THREE.WebGLRenderer({antialias:this.tier<2,powerPreference:'high-performance'});r.setPixelRatio(this.dpr());r.outputColorSpace=THREE.SRGBColorSpace;r.shadowMap.enabled=this.tier<2;r.shadowMap.type=THREE.PCFSoftShadowMap;
    r.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();this.lost=true;},false);
    r.domElement.className='w3d-canvas';host.appendChild(r.domElement);
    const sc=this.sc=new THREE.Scene();sc.background=new THREE.Color('#bfe8ff');sc.fog=new THREE.Fog('#cdeeff',80,210);
    this.cam=new THREE.PerspectiveCamera(55,1,0.1,700);
    sc.add(new THREE.HemisphereLight('#e6f6ff','#5f8a48',1.25));const sun=this.sun=new THREE.DirectionalLight('#ffe9c4',2.5);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);
    Object.assign(sun.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:1,far:90});sun.shadow.bias=-0.0006;sc.add(sun,sun.target);
    this.isl=new Island(this.sites);this.buildGround();this.buildWater();this.buildNature();this.buildSites();this.buildSky();this.buildExtras();
    this.hero=makeHero(o.look||{});sc.add(this.hero);this.dog=makeDog(o.dog||{});sc.add(this.dog);
    const p=(o.pos&&this.isl.h(o.pos.x,o.pos.z)>0.4)?o.pos:{x:0,z:22};this.hero.position.set(p.x,this.isl.h(p.x,p.z),p.z);this.hero.rotation.y=Math.PI;this.vy=0;this.dog.position.copy(this.hero.position).add(new THREE.Vector3(1.5,0,1.5));
    this.ui();this.resize();this.ro=new ResizeObserver(()=>this.resize());this.ro.observe(host);
    this.last=performance.now();const loop=now=>{if(!this.alive)return;this.raf=requestAnimationFrame(loop);if(this.paused)return;const dt=Math.min(0.05,(now-this.last)/1000);this.last=now;this.step(dt);this.r.render(this.sc,this.cam);};this.raf=requestAnimationFrame(loop);}
  buildGround(){const S=150,N=110,g=new THREE.PlaneGeometry(S*1.4,S*1.4,N,N);g.rotateX(-Math.PI/2);const p=g.attributes.position,col=[],c=new THREE.Color();
    const paths=this.sites.filter(s=>s.path!==false).map(s=>[s.x,s.z]);
    const pathD=(x,z)=>{let best=1e9;for(const [sx,sz] of paths){// distance to segment from the plaza (0,14) to the site
        const ax=0,az=14,dx=sx-ax,dz=sz-az,L=dx*dx+dz*dz,t=Math.max(0,Math.min(1,((x-ax)*dx+(z-az)*dz)/L));best=Math.min(best,Math.hypot(x-(ax+dx*t),z-(az+dz*t)));}return best;};
    for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i),h=this.isl.h(x,z);p.setY(i,h);
      if(h<0.5)c.set('#f2dba0');else if(h>15)c.set('#ffffff');else if(h>9)c.set('#9a9aa8');else if(h>6.5)c.set('#8f9a7a');else{c.set('#7cc95a').lerp(new THREE.Color('#4f9a45'),Math.min(1,Math.max(0,(h-1)/6)));const n=this.isl.n(x*0.3,z*0.3);c.offsetHSL(0,0,(n-0.5)*0.06);}
      if(h>=0.4&&pathD(x,z)<1.6)c.set('#d9b77c');col.push(c.r,c.g,c.b);}
    g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));g.computeVertexNormals();
    const m=new THREE.Mesh(g,new THREE.MeshToonMaterial({vertexColors:true,gradientMap:grad()}));m.receiveShadow=true;this.sc.add(m);this.ground=m;}
  buildWater(){const N=128,E=210,data=new Uint8Array(N*N*4);for(let j=0;j<N;j++)for(let i=0;i<N;i++){const x=(i/(N-1)-0.5)*E,z=(j/(N-1)-0.5)*E,h=this.isl.raw(x,z);const v=Math.max(0,Math.min(255,Math.round((h+6)/12*255)));const k=(j*N+i)*4;data[k]=data[k+1]=data[k+2]=v;data[k+3]=255;}
    const ht=new THREE.DataTexture(data,N,N,THREE.RGBAFormat);ht.magFilter=ht.minFilter=THREE.LinearFilter;ht.needsUpdate=true;
    const mat=new THREE.ShaderMaterial({transparent:true,fog:true,uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.fog,{t:{value:0},ht:{value:null},E:{value:E}}]),
      vertexShader:`uniform float t;varying vec2 vXZ;varying float vW;
#include <fog_pars_vertex>
void main(){vec3 p=position;float w=sin(p.x*0.12+t*1.1)*0.18+cos(p.z*0.1+t*0.9)*0.18;p.y+=w;vW=w;vXZ=p.xz;vec4 mvPosition=modelViewMatrix*vec4(p,1.0);gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
}`,
      fragmentShader:`uniform float t;uniform sampler2D ht;uniform float E;varying vec2 vXZ;varying float vW;
#include <fog_pars_fragment>
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
void main(){vec2 uv=vXZ/E+0.5;float h=-6.0;if(uv.x>0.0&&uv.x<1.0&&uv.y>0.0&&uv.y<1.0)h=texture2D(ht,uv).r*12.0-6.0;
float depth=clamp(-h/4.0,0.0,1.0);vec3 shallow=vec3(0.36,0.88,0.82),deep=vec3(0.09,0.42,0.78);vec3 c=mix(shallow,deep,smoothstep(0.0,1.0,depth));
c=mix(c,deep*0.8,smoothstep(80.0,200.0,length(vXZ)));
float band=smoothstep(0.55,0.0,-h)*step(-1.2,h);float foam=band*step(0.5,fract(-h*2.2+t*0.35+sin(vXZ.x*0.3)*0.2));c=mix(c,vec3(1.0),foam*0.75+band*0.15);
vec2 g=floor(vXZ*1.6);float sp=step(0.985,hash(g+floor(t*2.0)))*smoothstep(0.1,0.25,vW+0.2);c+=sp*0.8;
gl_FragColor=vec4(c,0.94);
#include <fog_fragment>
}`});
    mat.uniforms.ht.value=ht;mat.uniforms.E.value=E;
    const g=new THREE.PlaneGeometry(700,700,this.tier>=2?60:120,this.tier>=2?60:120);g.rotateX(-Math.PI/2);const m=new THREE.Mesh(g,mat);m.position.y=SEA-0.05;this.water=m;this.sc.add(m);}
  buildNature(){const R=rng(11),trunks=[],tops=[],rocks=[],flw=[];const ok=(x,z)=>{const h=this.isl.h(x,z);if(h<0.8||h>7)return false;for(const s of this.sites)if(Math.hypot(x-s.x,z-s.z)<(s.flat||7)+2)return false;if(Math.abs(x)<3&&z>0)return false;return true;};
    for(let i=0;i<420&&trunks.length<140;i++){const x=(R()-0.5)*120,z=(R()-0.5)*120;if(!ok(x,z))continue;const h=this.isl.h(x,z),s=0.8+R()*0.7;trunks.push([x,h,z,s]);tops.push([x,h+2.2*s,z,s,R()]);}
    for(let i=0;i<120&&rocks.length<40;i++){const x=(R()-0.5)*120,z=(R()-0.5)*120;if(!ok(x,z))continue;rocks.push([x,this.isl.h(x,z),z,0.5+R()*1.2,R()*6]);}
    for(let i=0;i<900&&flw.length<260;i++){const x=(R()-0.5)*110,z=(R()-0.5)*110;if(!ok(x,z))continue;flw.push([x,this.isl.h(x,z),z,R()]);}
    const mat4=new THREE.Matrix4(),q=new THREE.Quaternion(),v=new THREE.Vector3(),sc=new THREE.Vector3();
    const inst=(geo,mat,arr,f)=>{const im=new THREE.InstancedMesh(geo,mat,arr.length);arr.forEach((a,i)=>{f(a,v,q,sc);mat4.compose(v,q,sc);im.setMatrixAt(i,mat4);});im.castShadow=true;im.receiveShadow=true;this.sc.add(im);return im;};
    inst(new THREE.CylinderGeometry(0.22,0.32,2.2,7),toon('#8a5a2b'),trunks,([x,h,z,s],v,q,sc)=>{v.set(x,h+1.1*s,z);q.identity();sc.set(s,s,s);});
    const canopy=mergeGeometries([new THREE.IcosahedronGeometry(1.4,1),new THREE.IcosahedronGeometry(1.0,1).translate(0.7,0.6,0.2),new THREE.IcosahedronGeometry(0.9,1).translate(-0.6,0.8,-0.3)]);
    const tm=inst(canopy,toon('#4caf50'),tops,([x,h,z,s,r],v,q,sc)=>{v.set(x,h,z);q.setFromEuler(new THREE.Euler(0,r*6,0));sc.set(s,s*0.95,s);});
    tops.forEach((a,i)=>tm.setColorAt(i,new THREE.Color(a[4]<0.33?'#5cc25a':a[4]<0.66?'#43a047':'#7dd35f')));
    inst(new THREE.DodecahedronGeometry(0.8,0),toon('#a3a3ad'),rocks,([x,h,z,s,r],v,q,sc)=>{v.set(x,h+0.2*s,z);q.setFromEuler(new THREE.Euler(r,r*2,0));sc.set(s,s*0.7,s);});
    const fm=inst(new THREE.ConeGeometry(0.14,0.35,5),toon('#ffffff'),flw,([x,h,z,r],v,q,sc)=>{v.set(x,h+0.15,z);q.identity();sc.set(1,1,1);});
    flw.forEach((a,i)=>fm.setColorAt(i,new THREE.Color(['#ff6b9a','#ffe066','#ffffff','#b06bff'][Math.floor(a[3]*4)])));}
  buildSky(){const dome=new THREE.Mesh(new THREE.SphereGeometry(600,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,fog:false,uniforms:{sun:{value:new THREE.Vector3(0.45,0.55,-0.7).normalize()}},
      vertexShader:'varying vec3 vD;void main(){vD=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
      fragmentShader:'uniform vec3 sun;varying vec3 vD;void main(){float y=max(vD.y,0.0);vec3 top=vec3(0.16,0.45,0.86),hor=vec3(0.80,0.93,1.0);vec3 c=mix(hor,top,pow(y,0.55));float s=max(dot(vD,sun),0.0);c+=vec3(1.0,0.86,0.55)*pow(s,40.0)*0.9+vec3(1.0,0.95,0.8)*pow(s,600.0)*2.0;if(vD.y<0.0)c=hor;gl_FragColor=vec4(c,1.0);}'}));
    dome.renderOrder=-1;this.sc.add(dome);this.dome=dome;
    const R=rng(5),cm=toon('#ffffff');this.clouds=[];
    for(let i=0;i<16;i++){const parts=[];for(let k=0;k<5;k++)parts.push(new THREE.SphereGeometry(2+R()*2.4,12,9).translate(k*2.6-5,R()*1.4,R()*2));const c=new THREE.Mesh(mergeGeometries(parts),cm);
      const a=R()*Math.PI*2,d=45+R()*90;c.position.set(Math.cos(a)*d,26+R()*14,Math.sin(a)*d);c.userData.v=0.6+R()*0.8;this.sc.add(c);this.clouds.push(c);}
    // Glitch's storm over the fortress
    const sparts=[];for(let k=0;k<9;k++)sparts.push(new THREE.SphereGeometry(4+R()*3,12,9).translate((R()-0.5)*18,R()*3,(R()-0.5)*12));
    this.storm=new THREE.Mesh(mergeGeometries(sparts),new THREE.MeshToonMaterial({color:'#4a4060',gradientMap:grad(),emissive:new THREE.Color('#b26bff'),emissiveIntensity:0}));this.storm.position.set(0,30,-82);this.sc.add(this.storm);
    this.bolt=new THREE.PointLight('#d9b8ff',0,90);this.bolt.position.set(0,24,-80);this.sc.add(this.bolt);}
  buildSites(){this.siteObjs=[];for(const s of this.sites){const b=(BUILD[s.kind]||BUILD.shop)();const y=this.isl.h(s.x,s.z);b.position.set(s.x,y,s.z);b.rotation.y=s.rot||0;this.sc.add(b);
      // the glowing pad you stand on
      const pad=new THREE.Mesh(new THREE.RingGeometry(1.1,1.5,32),new THREE.MeshBasicMaterial({color:s.color||'#ffe066',transparent:true,opacity:0.85}));pad.rotation.x=-Math.PI/2;
      const px=s.x+Math.sin(s.rot||0)*(s.padDist||6),pz=s.z+Math.cos(s.rot||0)*(s.padDist||6);pad.position.set(px,this.isl.h(px,pz)+0.08,pz);this.sc.add(pad);
      const lab=labelSprite(s.name,s.sub,s.color);lab.position.set(s.x,y+(s.labelY||9),s.z);this.sc.add(lab);
      const anim=[];b.updateMatrixWorld(true);b.traverse(m=>{const u=m.userData;if(u.spin||u.bob||u.pulse||u.flicker)anim.push(m);else if(m!==b)m.matrixAutoUpdate=false;});
      this.siteObjs.push({s,b,pad,lab,px,pz,r:s.solid||3.5,anim});}}
  buildExtras(){const R=rng(21),T=this.tier;
    // light beacons over the worlds (visible from anywhere on the island)
    this.beacons=[];for(const o of this.siteObjs){if(!['canyon','castle','forge','tower','docks','dungeon','fortress'].includes(o.s.kind))continue;
      const m=new THREE.Mesh(new THREE.CylinderGeometry(0.6,1.6,70,12,1,true),new THREE.MeshBasicMaterial({color:o.s.color||'#ffe066',transparent:true,opacity:0.18,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide,fog:false}));
      m.position.set(o.s.x,o.b.position.y+35,o.s.z);this.sc.add(m);this.beacons.push(m);}
    // waterfall down the mountain into a mist pool
    const wc=document.createElement('canvas');wc.width=64;wc.height=256;const x=wc.getContext('2d');for(let i=0;i<64;i++){x.fillStyle=`rgba(255,255,255,${0.35+R()*0.6})`;x.fillRect(i,R()*256,1+R()*2,30+R()*80);}
    const wt=new THREE.CanvasTexture(wc);wt.wrapS=wt.wrapT=THREE.RepeatWrapping;wt.repeat.set(3,1.5);this.fallTex=wt;
    // the fall runs down the mountain's face, from near the peak to the foot
    const top=new THREE.Vector3(-36.8,0,-35),bot=new THREE.Vector3(-27.6,0,-26.4);top.y=this.isl.h(top.x,top.z)+0.4;bot.y=this.isl.h(bot.x,bot.z)+0.3;
    const dir=top.clone().sub(bot),L=dir.length();dir.normalize();const side=new THREE.Vector3().crossVectors(dir,new THREE.Vector3(0,1,0)).normalize(),nrm=new THREE.Vector3().crossVectors(side,dir).normalize();
    const fall=new THREE.Mesh(new THREE.PlaneGeometry(4.5,L,1,1),new THREE.MeshBasicMaterial({map:wt,color:'#bfeaff',transparent:true,opacity:0.92,side:THREE.DoubleSide}));
    fall.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(side,dir,nrm));fall.position.copy(top.clone().add(bot).multiplyScalar(0.5)).addScaledVector(nrm,0.5);this.sc.add(fall);
    const mist=new THREE.Mesh(new THREE.CircleGeometry(4,24),new THREE.MeshBasicMaterial({color:'#ffffff',transparent:true,opacity:0.5}));mist.rotation.x=-Math.PI/2;mist.position.set(bot.x+1,bot.y+0.15,bot.z+1);this.sc.add(mist);this.mist=mist;
    // palms on the beaches, pines up high, cherry blossoms round the Dojo
    const palms=[],pines=[],cherry=[];const clear=(x,z)=>!this.siteObjs.some(o=>Math.hypot(x-o.s.x,z-o.s.z)<(o.s.flat||7)+2)&&!(Math.abs(x)<3&&z>0);
    for(let i=0;i<2500;i++){const x=(R()-0.5)*130,z=(R()-0.5)*130,h=this.isl.h(x,z);if(!clear(x,z))continue;
      if(h>0.35&&h<1.0&&palms.length<26)palms.push([x,h,z,0.9+R()*0.4,R()]);else if(h>8&&h<15&&pines.length<45)pines.push([x,h,z,0.8+R()*0.6]);
      else{const d=Math.hypot(x,z);if(d>9&&d<20&&h>1&&cherry.length<14)cherry.push([x,h,z,0.8+R()*0.4,R()]);}}
    const m4=new THREE.Matrix4(),q=new THREE.Quaternion(),v=new THREE.Vector3(),sc=new THREE.Vector3();
    const inst=(geo,mat,arr,f)=>{if(!arr.length)return;const im=new THREE.InstancedMesh(geo,mat,arr.length);arr.forEach((a,i)=>{f(a,v,q,sc);m4.compose(v,q,sc);im.setMatrixAt(i,m4);});im.castShadow=T<2;im.receiveShadow=true;this.sc.add(im);return im;};
    inst(new THREE.CylinderGeometry(0.16,0.26,4,6).translate(0,2,0),toon('#a77b4f'),palms,([x,h,z,s,r],v,q,sc)=>{v.set(x,h,z);q.setFromEuler(new THREE.Euler(0.15*(r-0.5),r*6,0.18));sc.set(s,s,s);});
    const frond=mergeGeometries([0,1,2,3,4,5].map(k=>new THREE.ConeGeometry(0.35,2.6,4).rotateZ(Math.PI/2.4).translate(1.1,0,0).rotateY(k*Math.PI/3)));
    inst(frond,toon('#3fbf5f'),palms,([x,h,z,s,r],v,q,sc)=>{v.set(x+0.7*s,h+4*s,z);q.setFromEuler(new THREE.Euler(0,r*6,0));sc.set(s,s,s);});
    const pine=mergeGeometries([new THREE.ConeGeometry(1.4,2.2,8).translate(0,1.6,0),new THREE.ConeGeometry(1.1,1.9,8).translate(0,2.7,0),new THREE.ConeGeometry(0.75,1.6,8).translate(0,3.7,0),new THREE.CylinderGeometry(0.2,0.25,1,6).translate(0,0.5,0)]);
    inst(pine,toon('#2e7d4f'),pines,([x,h,z,s],v,q,sc)=>{v.set(x,h,z);q.identity();sc.set(s,s,s);});
    inst(new THREE.CylinderGeometry(0.2,0.3,2,7).translate(0,1,0),toon('#7a4a3a'),cherry,([x,h,z,s],v,q,sc)=>{v.set(x,h,z);q.identity();sc.set(s,s,s);});
    inst(mergeGeometries([new THREE.IcosahedronGeometry(1.5,1),new THREE.IcosahedronGeometry(1.1,1).translate(0.8,0.5,0.3)]),toon('#ffb3d1'),cherry,([x,h,z,s,r],v,q,sc)=>{v.set(x,h+2.6*s,z);q.setFromEuler(new THREE.Euler(0,r*6,0));sc.set(s,s,s);});
    // grass tufts
    if(T<2){const tufts=[];for(let i=0;i<4000&&tufts.length<700;i++){const x=(R()-0.5)*110,z=(R()-0.5)*110,h=this.isl.h(x,z);if(h>1&&h<7&&clear(x,z))tufts.push([x,h,z,R()]);}
      const blade=mergeGeometries([0,1,2].map(k=>new THREE.ConeGeometry(0.06,0.55,3).translate(0,0.27,0).rotateZ((k-1)*0.35).rotateY(k*2.1)));
      const gm=inst(blade,toon('#5fbf4a'),tufts,([x,h,z,r],v,q,sc)=>{v.set(x,h,z);q.setFromEuler(new THREE.Euler(0,r*6,0));sc.setScalar(0.8+r*0.7);});if(gm)gm.castShadow=false;}
    // fireflies / pollen drifting near the hero
    if(T<2){const n=160,pos=new Float32Array(n*3);for(let i=0;i<n;i++){pos[i*3]=(R()-0.5)*50;pos[i*3+1]=R()*8+0.5;pos[i*3+2]=(R()-0.5)*50;}
      const pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(pos,3));
      const dc=document.createElement('canvas');dc.width=dc.height=32;const dx=dc.getContext('2d'),gr=dx.createRadialGradient(16,16,0,16,16,16);gr.addColorStop(0,'rgba(255,250,210,1)');gr.addColorStop(0.4,'rgba(255,230,140,0.6)');gr.addColorStop(1,'rgba(255,230,140,0)');dx.fillStyle=gr;dx.fillRect(0,0,32,32);
      this.motes=new THREE.Points(pg,new THREE.PointsMaterial({map:new THREE.CanvasTexture(dc),size:0.35,transparent:true,opacity:0.85,blending:THREE.AdditiveBlending,depthWrite:false}));this.sc.add(this.motes);}
    // birds circling
    this.birds=[];const bg=new THREE.BufferGeometry();bg.setAttribute('position',new THREE.Float32BufferAttribute([-0.9,0.2,0, 0,0,0.25, 0,0,-0.15, 0.9,0.2,0, 0,0,0.25, 0,0,-0.15],3));bg.computeVertexNormals();
    for(let i=0;i<7;i++){const b=new THREE.Mesh(bg,new THREE.MeshBasicMaterial({color:'#2a2440',side:THREE.DoubleSide}));b.userData={r:18+R()*25,h:20+R()*8,a:R()*6.28,v:0.25+R()*0.2,cx:(R()-0.5)*30,cz:(R()-0.5)*30};this.sc.add(b);this.birds.push(b);}}
  dpr(){const d=window.devicePixelRatio||1;return this.tier===0?Math.min(1.5,d):1;}
  setTier(t){if(t===this.tier)return;this.tier=t;this.r.setPixelRatio(this.dpr());this.resize();if(t>=2){this.r.shadowMap.enabled=false;this.sc.traverse(m=>{if(m.material)m.material.needsUpdate=true;});if(this.motes)this.motes.visible=false;}this.o.onTier&&this.o.onTier(t);}
  intro(){// sweeping fly-in to the hero
    this.fly={t:0,D:5.2,from:new THREE.Vector3(-70,70,110),mid:new THREE.Vector3(30,45,40)};const T=document.createElement('div');T.className='w3d-title';T.innerHTML='NUMBER ISLE<small>Walk to a glowing ring to play</small>';this.host.appendChild(T);this.titleEl=T;
    const skip=()=>{if(this.fly)this.fly.t=this.fly.D;};T.addEventListener('pointerdown',skip);this.r.domElement.addEventListener('pointerdown',skip,{once:true});}
  update(sites){// progress text changed (after a level, for example)
    for(const o of this.siteObjs){const n=sites.find(x=>x.id===o.s.id);if(n&&(n.sub!==o.s.sub||n.name!==o.s.name)){o.s=Object.assign(o.s,n);o.lab.userData.redraw(n.name,n.sub);}else if(n)Object.assign(o.s,n);}}
  ui(){const h=this.host;const joy=document.createElement('div');joy.className='w3d-joy';joy.innerHTML='<i></i>';const knob=joy.firstChild;h.appendChild(joy);
    let jid=null,c0=null;const set=(e)=>{const r=joy.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;let dx=e.clientX-cx,dy=e.clientY-cy;const m=r.width*0.38,d=Math.hypot(dx,dy);if(d>m){dx*=m/d;dy*=m/d;}
      knob.style.transform=`translate(${dx}px,${dy}px)`;this.joy.x=dx/m;this.joy.y=dy/m;};
    joy.addEventListener('pointerdown',e=>{jid=e.pointerId;joy.setPointerCapture(jid);set(e);e.preventDefault();});joy.addEventListener('pointermove',e=>{if(e.pointerId===jid)set(e);});
    const up=e=>{if(e.pointerId!==jid)return;jid=null;this.joy.x=this.joy.y=0;knob.style.transform='';};joy.addEventListener('pointerup',up);joy.addEventListener('pointercancel',up);
    const btn=(cls,txt,fn)=>{const b=document.createElement('button');b.type='button';b.className='w3d-btn '+cls;b.textContent=txt;b.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();fn();});h.appendChild(b);return b;};
    this.jumpBtn=btn('w3d-jump','⤒',()=>this.jump());this.actBtn=btn('w3d-act','Go!',()=>this.act());this.actBtn.hidden=true;
    // drag on the scene to turn the camera
    let did=null,lx=0;const cv=this.r.domElement;cv.addEventListener('pointerdown',e=>{did=e.pointerId;lx=e.clientX;cv.setPointerCapture(did);});
    cv.addEventListener('pointermove',e=>{if(e.pointerId!==did)return;this.yaw-=(e.clientX-lx)*0.008;lx=e.clientX;});const cu=e=>{if(e.pointerId===did)did=null;};cv.addEventListener('pointerup',cu);cv.addEventListener('pointercancel',cu);
    this.kd=e=>{if(this.paused||!this.visible())return;const k=e.key.toLowerCase();if(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright',' ','e','enter'].includes(k)){if(e.target&&/INPUT|TEXTAREA/.test(e.target.tagName))return;e.preventDefault();}
      this.keys[k]=true;if(k===' ')this.jump();if((k==='e'||k==='enter')&&(!document.getElementById('talk')||document.getElementById('talk').hidden))this.act();};this.ku=e=>{this.keys[e.key.toLowerCase()]=false;};
    window.addEventListener('keydown',this.kd);window.addEventListener('keyup',this.ku);
    this.card=document.createElement('div');this.card.className='w3d-card';this.card.hidden=true;h.appendChild(this.card);}
  visible(){return this.host.getClientRects().length>0;}
  jump(){if(this.ground0){this.vy=7.5;this.ground0=false;this.o.sfx&&this.o.sfx('jump');}}
  act(){if(this.near&&this.o.onEnter){this.o.onEnter(this.near.s);}}
  resize(){const w=this.host.clientWidth||1,hh=this.host.clientHeight||1;this.r.setSize(w,hh,false);this.r.domElement.style.width='100%';this.r.domElement.style.height='100%';this.cam.aspect=w/hh;this.cam.updateProjectionMatrix();}
  step(dt){this.t+=dt;const H=this.hero,isl=this.isl;
    // input relative to the camera
    let ix=this.joy.x+((this.keys.d||this.keys.arrowright)?1:0)-((this.keys.a||this.keys.arrowleft)?1:0),iz=this.joy.y+((this.keys.s||this.keys.arrowdown)?1:0)-((this.keys.w||this.keys.arrowup)?1:0);
    const mag=Math.min(1,Math.hypot(ix,iz));let moving=mag>0.12;
    if(moving){const a=Math.atan2(-ix,-iz)+this.yaw,sp=8.5*mag;const nx=H.position.x+Math.sin(a)*sp*dt,nz=H.position.z+Math.cos(a)*sp*dt;
      let blocked=isl.h(nx,nz)<SEA+0.15;for(const o of this.siteObjs)if(Math.hypot(nx-o.s.x,nz-o.s.z)<o.r)blocked=true;
      if(!blocked){H.position.x=nx;H.position.z=nz;}const tr=a;let d=tr-H.rotation.y;d=Math.atan2(Math.sin(d),Math.cos(d));H.rotation.y+=d*Math.min(1,dt*12);}
    const gy=isl.h(H.position.x,H.position.z);this.vy-=22*dt;H.position.y+=this.vy*dt;if(H.position.y<=gy){H.position.y=gy;this.vy=0;this.ground0=true;}
    // walk cycle
    const L=H.userData.limbs,w=moving&&this.ground0?Math.sin(this.t*11)*0.7*mag:0;L.lL.rotation.x=w;L.lR.rotation.x=-w;L.aL.rotation.x=-w*0.8;L.aR.rotation.x=w*0.8;
    if(H.userData.cape)H.userData.cape.rotation.x=0.12+(moving?0.35*mag:0)+Math.sin(this.t*6)*0.04;
    // Ellie follows
    const D=this.dog,tx=H.position.x-Math.sin(H.rotation.y)*1.8+Math.cos(H.rotation.y)*1.2,tz=H.position.z-Math.cos(H.rotation.y)*1.8-Math.sin(H.rotation.y)*1.2;
    const ddx=tx-D.position.x,ddz=tz-D.position.z,dd=Math.hypot(ddx,ddz);if(dd>0.4){const s=Math.min(dd,dt*9.5*Math.min(1,dd/1.5+0.4));D.position.x+=ddx/dd*s;D.position.z+=ddz/dd*s;D.rotation.y=Math.atan2(ddx,ddz);}
    D.position.y=isl.h(D.position.x,D.position.z)+(dd>0.6?Math.abs(Math.sin(this.t*14))*0.12:0);D.userData.tail.rotation.z=Math.sin(this.t*12)*0.6;D.userData.legs.forEach((l,i)=>l.rotation.x=dd>0.6?Math.sin(this.t*14+i*1.6)*0.6:0);
    // camera behind the hero
    const cd=this.camDist,cx=H.position.x-Math.sin(this.yaw)*cd,cz=H.position.z-Math.cos(this.yaw)*cd;let cy=H.position.y+5.5;cy=Math.max(cy,isl.h(cx,cz)+1.5);
    for(const o of this.siteObjs){const d=Math.hypot(cx-o.s.x,cz-o.s.z);if(d<o.r+2.5)cy=Math.max(cy,o.b.position.y+(o.s.labelY||8)*0.9);}
    if(this.fly){const f=this.fly;f.t+=dt;const k=Math.min(1,f.t/f.D),e=k*k*(3-2*k);const end=new THREE.Vector3(cx,cy,cz);
      const p=k<0.5?f.from.clone().lerp(f.mid,e*2):f.mid.clone().lerp(end,(e-0.5)*2);this.cam.position.copy(p);this.cam.lookAt(new THREE.Vector3(0,4,-6).lerp(new THREE.Vector3(H.position.x,H.position.y+1.8,H.position.z),e));
      if(this.titleEl)this.titleEl.style.opacity=String(k<0.15?k/0.15:k>0.75?Math.max(0,(1-k)/0.25):1);if(k>=1){this.fly=null;if(this.titleEl){this.titleEl.remove();this.titleEl=null;}}}
    else{this.cam.position.lerp(new THREE.Vector3(cx,cy,cz),Math.min(1,dt*6));this.cam.lookAt(H.position.x,H.position.y+1.8,H.position.z);}
    // speed check: after the fly-in, step down quality if frames are slow (remembered for next time)
    if(!this.fly&&this.tier<2&&!this.o.noAuto){this._fs=(this._fs||0)+1;this._ft=(this._ft||0)+dt;if(this._ft>4){const fps=this._fs/this._ft;this._fs=this._ft=0;if(fps<24)this.setTier(2);else if(fps<42&&this.tier===0)this.setTier(1);}}
    this.sun.position.set(H.position.x+20,H.position.y+35,H.position.z+12);this.sun.target.position.copy(H.position);
    // water, sky and life
    this.water.material.uniforms.t.value=this.t;
    if(this.fallTex)this.fallTex.offset.y-=dt*1.6;if(this.mist)this.mist.scale.setScalar(1+Math.sin(this.t*3)*0.08);
    for(const b of this.beacons||[])b.material.opacity=0.12+Math.sin(this.t*2+b.position.x)*0.06;
    for(const b of this.birds||[]){const u=b.userData;u.a+=u.v*dt;b.position.set(u.cx+Math.cos(u.a)*u.r,u.h+Math.sin(u.a*2)*1.5,u.cz+Math.sin(u.a)*u.r);b.rotation.y=-u.a;b.scale.y=1+Math.sin(this.t*10+u.r)*0.6;}
    if(this.motes){this.motes.position.set(H.position.x,H.position.y,H.position.z);this.motes.rotation.y+=dt*0.05;this.motes.material.opacity=0.55+Math.sin(this.t*2)*0.3;}
    if(this.storm){this.storm.rotation.y+=dt*0.05;const f=(Math.sin(this.t*1.3)>0.985||Math.sin(this.t*3.7+1)>0.995)?1:0;this.bolt.intensity=f?60:Math.max(0,this.bolt.intensity-dt*300);this.storm.material.emissiveIntensity=f?0.8:Math.max(0,this.storm.material.emissiveIntensity-dt*4);}
    for(const c of this.clouds){c.position.x+=c.userData.v*dt;if(c.position.x>120)c.position.x=-120;}
    for(const o of this.siteObjs){o.anim.forEach(m=>{const u=m.userData;if(u.spin)m.rotation.y+=dt*1.5;if(u.bob)m.position.y=0.3+Math.sin(this.t*1.5)*0.15;if(u.pulse)m.scale.setScalar(1+Math.sin(this.t*3)*0.08);if(u.flicker)m.scale.y=1+Math.sin(this.t*17)*0.15;});
      o.pad.material.opacity=0.55+Math.sin(this.t*3)*0.3;}
    // which place is he standing at?
    let near=null;for(const o of this.siteObjs){if(Math.hypot(H.position.x-o.px,H.position.z-o.pz)<2.2){near=o;break;}}
    if(near!==this.near){this.near=near;this.actBtn.hidden=!near;if(near){this.actBtn.textContent=near.s.go||'Go!';this.o.onNear&&this.o.onNear(near.s);}else{this.o.onNear&&this.o.onNear(null);}}
    if(this.o.onPos&&(!this._pt||this.t-this._pt>2)){this._pt=this.t;this.o.onPos({x:+H.position.x.toFixed(1),z:+H.position.z.toFixed(1)});}}
  setLook(look,dog){const p=this.hero.position.clone(),ry=this.hero.rotation.y;this.sc.remove(this.hero);this.hero=makeHero(look||{});this.hero.position.copy(p);this.hero.rotation.y=ry;this.sc.add(this.hero);
    const dp=this.dog.position.clone();this.sc.remove(this.dog);this.dog=makeDog(dog||{});this.dog.position.copy(dp);this.sc.add(this.dog);}
  setPaused(p){this.paused=p;if(!p)this.last=performance.now();}
  teleport(x,z){this.hero.position.set(x,this.isl.h(x,z),z);this.dog.position.set(x+1.4,this.isl.h(x+1.4,z+1.4),z+1.4);}
  dispose(){this.alive=false;cancelAnimationFrame(this.raf);window.removeEventListener('keydown',this.kd);window.removeEventListener('keyup',this.ku);this.ro.disconnect();this.r.dispose();this.host.innerHTML='';}
}
export const World3D={ok(){try{const c=document.createElement('canvas');return !!(c.getContext('webgl2')||c.getContext('webgl'));}catch(e){return false;}},
  start(host,o){return new World(host,o);}};
