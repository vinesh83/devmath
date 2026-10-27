// Toon characters for the cutscenes and boss battles, matching Number Isle: the same smooth, outlined style.
// The game tags each sprite with what it is (hero, dog, glitch, gmech, mech, minion, knight); toonModel builds
// the matching 3D model at the size the old voxel model would have had.
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import {makeHero,makeDog,makeBug,makeSword,toonMesh as M,toonOutline as outline} from './world3d.js';

const glowM=(c,k)=>({emissive:new THREE.Color(c),emissiveIntensity:k||1});
function rbox(w,h,d,col,o,r){const m=M(new RoundedBoxGeometry(w,h,d,3,r||Math.min(w,h,d)*0.22),col,o);return m;}
function at(m,x,y,z){m.position.set(x,y,z);return m;}

// Glitch: a little white robot with a cyan antenna and a pink grin (his pixel look, in toon)
function makeGlitch(){const g=new THREE.Group();
  const body=at(rbox(1.0,0.75,0.7,'#c9d1e0'),0,0.75,0);outline(body,1.05);g.add(body);
  const head=at(rbox(1.25,1.0,0.95,'#eef2fa'),0,1.65,0);outline(head,1.05);g.add(head);
  const face=at(rbox(1.0,0.62,0.06,'#1d1f33'),0,1.66,0.48);g.add(face);
  for(const x of [-0.24,0.24]){g.add(at(M(new THREE.SphereGeometry(0.11,12,10),'#5ef2ff',glowM('#5ef2ff',1.2)),x,1.74,0.52));}
  const grin=M(new THREE.TorusGeometry(0.2,0.05,6,14,Math.PI),'#ff4d9d',glowM('#ff4d9d',0.8));grin.rotation.z=Math.PI;grin.position.set(0,1.55,0.52);g.add(grin);
  const ant=at(M(new THREE.CylinderGeometry(0.04,0.04,0.45,6),'#9aa6b8'),0.15,2.33,0);g.add(ant);g.add(at(M(new THREE.SphereGeometry(0.12,10,8),'#5ef2ff',glowM('#5ef2ff',1.4)),0.15,2.6,0));
  for(const x of [-0.65,0.65]){const a=at(M(new THREE.CapsuleGeometry(0.12,0.4,4,8),'#9aa6b8'),x,0.8,0);a.rotation.z=x>0?-0.3:0.3;g.add(a);}
  for(const x of [-0.25,0.25])g.add(at(M(new THREE.CapsuleGeometry(0.14,0.25,4,8),'#7f8ba0'),x,0.22,0));
  return g;}
// Glitch's giant mech: chunky purple armor, a glowing red eye, cannon arms
function makeGMech(tint){const g=new THREE.Group(),P=tint||'#5a3a8a',D='#2a1d45';
  const legs=[-0.75,0.75].map(x=>{const l=new THREE.Group();l.add(at(rbox(0.7,1.5,0.8,D),0,0.75,0),at(rbox(0.95,0.35,1.2,P),0,0.18,0.15));l.position.x=x;g.add(l);return l;});
  const hip=at(rbox(2.1,0.6,1.2,D),0,1.75,0);g.add(hip);
  const chest=at(rbox(2.8,1.9,1.6,P),0,3.0,0);outline(chest,1.03);g.add(chest);
  const core=at(M(new THREE.SphereGeometry(0.32,16,12),'#ff2d55',glowM('#ff2d55',1.6)),0,3.0,0.82);g.add(core);
  const head=at(rbox(1.3,0.9,1.1,D),0,4.35,0.1);g.add(head);const eye=at(rbox(0.95,0.22,0.1,'#ff2d55',glowM('#ff2d55',1.8)),0,4.4,0.68);g.add(eye);
  for(const sd of [-1,1]){const sh=at(rbox(0.9,0.8,1.1,P),sd*1.75,3.6,0);g.add(sh);const arm=at(rbox(0.6,1.5,0.6,D),sd*1.85,2.6,0.1);g.add(arm);
    const can=M(new THREE.CylinderGeometry(0.32,0.38,1.0,14),'#3a3346');can.rotation.x=Math.PI/2;can.position.set(sd*1.85,1.8,0.55);g.add(can);
    g.add(at(M(new THREE.CircleGeometry(0.22,14),'#ff7b1c',glowM('#ff7b1c',1.5)),sd*1.85,1.8,1.06));
    for(let i=0;i<3;i++){const sp=M(new THREE.ConeGeometry(0.16,0.55,6),'#ff4d9d');sp.position.set(sd*1.75,4.05,-0.3+i*0.3);g.add(sp);}}
  g.userData.legs=legs;return g;}
// Dev's mech: rounder, heroic blue and gold, with a glass cockpit
function makeMech(col){const g=new THREE.Group(),B=col||'#3d7cff',Y='#ffd23f',D='#2a2f55';
  for(const x of [-0.7,0.7]){g.add(at(rbox(0.65,1.4,0.75,D),x,0.7,0),at(rbox(0.9,0.32,1.1,B),x,0.16,0.12));}
  const body=at(rbox(2.5,2.0,1.6,B),0,2.5,0);outline(body,1.03);g.add(body);
  const glass=at(M(new THREE.SphereGeometry(0.62,18,14,0,Math.PI*2,0,Math.PI/2),'#9fe8ff',{transparent:true,opacity:0.75,emissive:new THREE.Color('#5ef2ff'),emissiveIntensity:0.3}),0,3.35,0.25);glass.rotation.x=0.4;g.add(glass);
  g.add(at(rbox(2.7,0.25,1.7,Y),0,1.55,0));g.add(at(M(new THREE.OctahedronGeometry(0.22),Y,glowM('#ffb627',0.8)),0,2.5,0.85));
  for(const sd of [-1,1]){g.add(at(rbox(0.8,0.75,1.0,Y),sd*1.6,3.1,0));const fist=at(rbox(0.7,0.7,0.7,B),sd*1.7,1.75,0.25);g.add(at(rbox(0.5,1.2,0.5,D),sd*1.7,2.5,0.1),fist);}
  return g;}

const BUILD={
  hero:s=>{const L=s.look||{};const g=makeHero(L);const P=s.pose;if(P==='runA'||P==='runB'){const k=P==='runA'?1:-1,l=g.userData.limbs;l.lL.rotation.x=0.6*k;l.lR.rotation.x=-0.6*k;l.aL.rotation.x=-0.5*k;l.aR.rotation.x=0.5*k;}
    if(s.sword!==false){const sw=makeSword();sw.position.set(0,-0.62,0.12);sw.rotation.set(1.1,0,0);g.userData.limbs.aR.add(sw);}return g;},
  knight:s=>{const g=makeHero(s.look||{});const sw=makeSword();sw.position.set(0,-0.62,0.12);sw.rotation.set(1.1,0,0);g.userData.limbs.aR.add(sw);return g;},
  dog:s=>makeDog(s.dogAcc||{}),
  glitch:()=>makeGlitch(),
  gmech:(s,o)=>makeGMech(o&&o.tint),
  mech:s=>makeMech(s.col),
  minion:()=>{const g=makeBug();return g;},
};
export const canToon=spr=>!!(spr&&spr.kind&&BUILD[spr.kind]);
// the visible height of a sprite (rows that have pixels), times the voxel size: the toon model is scaled to match
function spriteHeight(spr,size){const {w,h,data}=spr;let top=h,bot=-1;for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(data[(y*w+x)*4+3]>=128){if(y<top)top=y;if(y>bot)bot=y;}return (bot-top+1)*size;}
export function toonModel(spr,o={}){const size=o.size||0.1;const inner=BUILD[spr.kind](spr,o);
  // every model gets its own materials, so a hit flash only lights this one
  const mats=[];inner.traverse(m=>{if(m.isMesh&&m.material&&!m.material.isMeshBasicMaterial){m.material=m.material.clone();mats.push(m.material);}if(m.isMesh){m.castShadow=true;m.receiveShadow=true;}});
  if(o.tint&&spr.kind!=='gmech')mats.forEach(mt=>mt.color&&mt.color.lerp(new THREE.Color(o.tint),Math.min(0.5,o.tintK||0.3)));
  const box=new THREE.Box3().setFromObject(inner),hh=box.max.y-box.min.y||1,target=spriteHeight(spr,size)||hh;const k=target/hh;
  inner.scale.setScalar(k);inner.position.y=-box.min.y*k;
  const g=new THREE.Group();g.add(inner);g.userData={toon:true,inner,mats,h:target,w:(box.max.x-box.min.x)*k,solid:null,glow:null,faceL:FACE_LEFT.has(spr.kind)};return g;}
// the pixel art of these faces left; the hero, dog and mech face right
const FACE_LEFT=new Set(['glitch','gmech','minion']);
// a toon model blowing apart into its pieces (the boss's defeat)
export function shatterToon(g,center,power,rnd){const parts=[];g.updateMatrixWorld(true);const list=[];g.traverse(m=>{if(m.isMesh&&!(m.material&&m.material.side===THREE.BackSide))list.push(m);});
  for(const m of list){const wp=new THREE.Vector3();m.getWorldPosition(wp);g.attach(m);const p=m.position.clone(),d=wp.clone().sub(center);
    parts.push({m,p,v:new THREE.Vector3(d.x*power*(0.6+rnd()),(1.5+rnd()*2.5)*power*0.6,d.z*power*(0.6+rnd())+(rnd()-.5)*power),r:new THREE.Vector3(rnd()*8,rnd()*8,rnd()*8),q0:m.rotation.clone()});}
  return tt=>{for(const a of parts){a.m.position.set(a.p.x+a.v.x*tt,Math.max(-0.05,a.p.y+a.v.y*tt-4.9*tt*tt),a.p.z+a.v.z*tt);a.m.rotation.set(a.q0.x+a.r.x*tt,a.q0.y+a.r.y*tt,a.q0.z+a.r.z*tt);}};}
