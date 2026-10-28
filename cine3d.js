(()=>{var Ml="169";var Mf=0,gh=1,Ef=2;var wu=1,Pr=2,si=3,Ai=0,Ie=1,Ee=2,Wn=0,Si=1,pn=2,xh=3,_h=4,bf=5,qi=100,wf=101,Sf=102,Tf=103,Af=104,Rf=200,Cf=201,Pf=202,If=203,Ja=204,$a=205,Df=206,Lf=207,Uf=208,Nf=209,Ff=210,Bf=211,Of=212,Hf=213,zf=214,Ka=0,ja=1,Qa=2,Os=3,tc=4,ec=5,nc=6,ic=7,Su=0,kf=1,Gf=2,Ti=0,El=1,bl=2,wl=3,Ir=4,Vf=5,Sl=6,Tl=7;var Tu=300,Hs=301,zs=302,sc=303,rc=304,Xo=306,Ri=1e3,Zi=1001,oc=1002,qe=1003,Wf=1004;var Fr=1005;var bn=1006,fa=1007;var Ji=1008;var ci=1009,Au=1010,Ru=1011,_r=1012,Al=1013,$i=1014,Vn=1015,zn=1016,Rl=1017,Cl=1018,ks=1020,Cu=35902,Pu=1021,Iu=1022,rn=1023,Du=1024,Lu=1025,Ns=1026,Gs=1027,Pl=1028,Il=1029,Uu=1030,Dl=1031;var Ll=1033,po=33776,mo=33777,go=33778,xo=33779,ac=35840,cc=35841,lc=35842,hc=35843,uc=36196,fc=37492,dc=37496,pc=37808,mc=37809,gc=37810,xc=37811,_c=37812,yc=37813,vc=37814,Mc=37815,Ec=37816,bc=37817,wc=37818,Sc=37819,Tc=37820,Ac=37821,_o=36492,Rc=36494,Cc=36495,Nu=36283,Pc=36284,Ic=36285,Dc=36286;var vo=2300,Lc=2301,da=2302,yh=2400,vh=2401,Mh=2402;var Xf=3200,qf=3201;var Ul=0,Yf=1,bi="",He="srgb",Ui="srgb-linear",Nl="display-p3",qo="display-p3-linear",Mo="linear",_e="srgb",Eo="rec709",bo="p3";var ps=7680;var Eh=519,Zf=512,Jf=513,$f=514,Fu=515,Kf=516,jf=517,Qf=518,td=519,Uc=35044;var bh="300 es",oi=2e3,wo=2001,Ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pa=Math.PI/180,So=180/Math.PI;function ai(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function ed(i,t){return(i%t+t)%t}function ma(i,t,e){return(1-e)*i+e*t}function Gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],f=n[5],g=n[8],_=s[0],m=s[3],d=s[6],v=s[1],x=s[4],M=s[7],A=s[2],w=s[5],E=s[8];return r[0]=o*_+a*v+c*A,r[3]=o*m+a*x+c*w,r[6]=o*d+a*M+c*E,r[1]=l*_+h*v+u*A,r[4]=l*m+h*x+u*w,r[7]=l*d+h*M+u*E,r[2]=p*_+f*v+g*A,r[5]=p*m+f*x+g*w,r[8]=p*d+f*M+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,p=a*c-h*r,f=l*r-o*c,g=e*u+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=p*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ga.makeScale(t,e)),this}rotate(t){return this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ga=new Jt;function Bu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function To(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nd(){let i=To("canvas");return i.style.display="block",i}var wh={};function yo(i){i in wh||(wh[i]=!0,console.warn(i))}function id(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Sh=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Th=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),nr={[Ui]:{transfer:Mo,primaries:Eo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[He]:{transfer:_e,primaries:Eo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[qo]:{transfer:Mo,primaries:bo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Th),fromReference:i=>i.applyMatrix3(Sh)},[Nl]:{transfer:_e,primaries:bo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Th),fromReference:i=>i.applyMatrix3(Sh).convertLinearToSRGB()}},od=new Set([Ui,qo]),ae={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!od.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=nr[t].toReference,s=nr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return nr[i].primaries},getTransfer:function(i){return i===bi?Mo:nr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(nr[t].luminanceCoefficients)}};function Fs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ms,Nc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=To("canvas")),ms.width=t.width,ms.height=t.height;let n=ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=To("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fs(e[n]/255)*255):e[n]=Fs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ad=0,Ao=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_a(s[o].image)):r.push(_a(s[o]))}else r=_a(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function _a(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Nc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cd=0,mn=class i extends Ci{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zi,s=Zi,r=bn,o=Ji,a=rn,c=ci,l=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=ai(),this.name="",this.source=new Ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Tu;mn.DEFAULT_ANISOTROPY=1;var xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],f=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,M=(f+1)/2,A=(d+1)/2,w=(h+p)/4,E=(u+_)/4,I=(g+m)/4;return x>M&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=E/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=E/r,s=I/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(p-h)/v,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fc=class extends Ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ao(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends Fc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ro=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bc=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==p||l!==f||h!==g){let m=1-a,d=c*p+l*f+h*g+u*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let A=Math.sqrt(x),w=Math.atan2(A,d*v);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}let M=a*v;if(c=c*m+p*M,l=l*m+f*M,h=h*m+g*M,u=u*m+_*M,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*p,t[e+1]=c*g+h*p+l*u-a*f,t[e+2]=l*g+h*f+a*p-c*u,t[e+3]=h*g-a*u-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u-p*f*g;break;case"YXZ":this._x=p*h*u+l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u+p*f*g;break;case"ZXY":this._x=p*h*u-l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u-p*f*g;break;case"ZYX":this._x=p*h*u-l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u+p*f*g;break;case"YZX":this._x=p*h*u+l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u-p*f*g;break;case"XZY":this._x=p*h*u-l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ah.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ya=new P,Ah=new hn,gn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),Or.subVectors(this.max,ir),gs.subVectors(t.a,ir),xs.subVectors(t.b,ir),_s.subVectors(t.c,ir),xi.subVectors(xs,gs),_i.subVectors(_s,xs),Hi.subVectors(gs,_s);let e=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,_i.z,0,-_i.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-Hi.y,Hi.x,0];return!va(e,gs,xs,_s,Or)||(e=[1,0,0,0,1,0,0,0,1],!va(e,gs,xs,_s,Or))?!1:(Hr.crossVectors(xi,_i),e=[Hr.x,Hr.y,Hr.z],va(e,gs,xs,_s,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qn=[new P,new P,new P,new P,new P,new P,new P,new P],Fn=new P,Br=new gn,gs=new P,xs=new P,_s=new P,xi=new P,_i=new P,Hi=new P,ir=new P,Or=new P,Hr=new P,zi=new P;function va(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zi.fromArray(i,r);let a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var ld=new gn,sr=new P,Ma=new P,Pi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(Ma)),this.expandByPoint(sr.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new P,Ea=new P,zr=new P,yi=new P,ba=new P,kr=new P,wa=new P,Co=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ea.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(Ea);let r=t.distanceTo(e)*.5,o=-this.direction.dot(zr),a=yi.dot(this.direction),c=-yi.dot(zr),l=yi.lengthSq(),h=Math.abs(1-o*o),u,p,f,g;if(h>0)if(u=o*c-a,p=o*a-c,g=r*h,u>=0)if(p>=-g)if(p<=g){let _=1/h;u*=_,p*=_,f=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ea).addScaledVector(zr,p),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){ba.subVectors(e,t),kr.subVectors(n,t),wa.crossVectors(ba,kr);let o=this.direction.dot(wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);let c=a*this.direction.dot(kr.crossVectors(yi,kr));if(c<0)return null;let l=a*this.direction.dot(ba.cross(yi));if(l<0||c+l>o)return null;let h=-a*yi.dot(wa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,p,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,p,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,p,f,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=f,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ys.setFromMatrixColumn(t,0).length(),r=1/ys.setFromMatrixColumn(t,1).length(),o=1/ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=p-_*l,e[9]=-a*c,e[2]=_-p*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let p=c*h,f=c*u,g=l*h,_=l*u;e[0]=p+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+p*a,e[10]=o*c}else if(t.order==="ZXY"){let p=c*h,f=c*u,g=l*h,_=l*u;e[0]=p-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let p=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=p*l+_,e[1]=c*u,e[5]=_*l+p,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let p=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-p*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=p-_*u}else if(t.order==="XZY"){let p=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hd,t,ud)}lookAt(t,e,n){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),vi.crossVectors(n,Mn),vi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),vi.crossVectors(n,Mn)),vi.normalize(),Gr.crossVectors(Mn,vi),s[0]=vi.x,s[4]=Gr.x,s[8]=Mn.x,s[1]=vi.y,s[5]=Gr.y,s[9]=Mn.y,s[2]=vi.z,s[6]=Gr.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],f=n[13],g=n[2],_=n[6],m=n[10],d=n[14],v=n[3],x=n[7],M=n[11],A=n[15],w=s[0],E=s[4],I=s[8],B=s[12],y=s[1],b=s[5],N=s[9],U=s[13],L=s[2],F=s[6],D=s[10],Y=s[14],W=s[3],ct=s[7],xt=s[11],vt=s[15];return r[0]=o*w+a*y+c*L+l*W,r[4]=o*E+a*b+c*F+l*ct,r[8]=o*I+a*N+c*D+l*xt,r[12]=o*B+a*U+c*Y+l*vt,r[1]=h*w+u*y+p*L+f*W,r[5]=h*E+u*b+p*F+f*ct,r[9]=h*I+u*N+p*D+f*xt,r[13]=h*B+u*U+p*Y+f*vt,r[2]=g*w+_*y+m*L+d*W,r[6]=g*E+_*b+m*F+d*ct,r[10]=g*I+_*N+m*D+d*xt,r[14]=g*B+_*U+m*Y+d*vt,r[3]=v*w+x*y+M*L+A*W,r[7]=v*E+x*b+M*F+A*ct,r[11]=v*I+x*N+M*D+A*xt,r[15]=v*B+x*U+M*Y+A*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],f=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*f-n*c*f)+_*(+e*c*f-e*l*p+r*o*p-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*p+s*o*u-n*o*p+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],f=t[11],g=t[12],_=t[13],m=t[14],d=t[15],v=u*m*l-_*p*l+_*c*f-a*m*f-u*c*d+a*p*d,x=g*p*l-h*m*l-g*c*f+o*m*f+h*c*d-o*p*d,M=h*_*l-g*u*l+g*a*f-o*_*f-h*a*d+o*u*d,A=g*u*c-h*_*c-g*a*p+o*_*p+h*a*m-o*u*m,w=e*v+n*x+s*M+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=v*E,t[1]=(_*p*r-u*m*r-_*s*f+n*m*f+u*s*d-n*p*d)*E,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*d+n*c*d)*E,t[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*f-n*c*f)*E,t[4]=x*E,t[5]=(h*m*r-g*p*r+g*s*f-e*m*f-h*s*d+e*p*d)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*E,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*f+e*c*f)*E,t[8]=M*E,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*d-e*u*d)*E,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*d+e*a*d)*E,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*E,t[12]=A*E,t[13]=(h*_*s-g*u*s+g*n*p-e*_*p-h*n*m+e*u*m)*E,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*E,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*p+e*a*p)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,p=r*l,f=r*h,g=r*u,_=o*h,m=o*u,d=a*u,v=c*l,x=c*h,M=c*u,A=n.x,w=n.y,E=n.z;return s[0]=(1-(_+d))*A,s[1]=(f+M)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(p+d))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+x)*E,s[9]=(m-v)*E,s[10]=(1-(p+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ys.set(s[0],s[1],s[2]).length(),o=ys.set(s[4],s[5],s[6]).length(),a=ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Bn.copy(this);let l=1/r,h=1/o,u=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=oi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),f,g;if(a===oi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=oi){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),p=(e+t)*l,f=(n+s)*h,g,_;if(a===oi)g=(o+r)*u,_=-2*u;else if(a===wo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ys=new P,Bn=new te,hd=new P(0,0,0),ud=new P(1,1,1),vi=new P,Gr=new P,Mn=new P,Rh=new te,Ch=new hn,ze=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ze.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fd=0,Ph=new P,vs=new hn,ei=new te,Vr=new P,rr=new P,dd=new P,pd=new hn,Ih=new P(1,0,0),Dh=new P(0,1,0),Lh=new P(0,0,1),Uh={type:"added"},md={type:"removed"},Ms={type:"childadded",child:null},Sa={type:"childremoved",child:null},Ge=class i extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new ze,n=new hn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Jt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(Ih,t)}rotateY(t){return this.rotateOnAxis(Dh,t)}rotateZ(t){return this.rotateOnAxis(Lh,t)}translateOnAxis(t,e){return Ph.copy(t).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ih,t)}translateY(t){return this.translateOnAxis(Dh,t)}translateZ(t){return this.translateOnAxis(Lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(rr,Vr,this.up):ei.lookAt(Vr,rr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(ei),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uh),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(md),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uh),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ge.DEFAULT_UP=new P(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new P,ni=new P,Ta=new P,ii=new P,Es=new P,bs=new P,Nh=new P,Aa=new P,Ra=new P,Ca=new P,Pa=new xe,Ia=new xe,Da=new xe,wi=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),ni.subVectors(n,e),Ta.subVectors(t,e);let o=On.dot(On),a=On.dot(ni),c=On.dot(Ta),l=ni.dot(ni),h=ni.dot(Ta),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,f=(l*c-a*h)*p,g=(o*h-a*c)*p;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(o,ii.y),c.addScaledVector(a,ii.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Pa.setScalar(0),Ia.setScalar(0),Da.setScalar(0),Pa.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,n),Da.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Pa,r.x),o.addScaledVector(Ia,r.y),o.addScaledVector(Da,r.z),o}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),ni.subVectors(t,e),On.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),On.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Es.subVectors(s,n),bs.subVectors(r,n),Aa.subVectors(t,n);let c=Es.dot(Aa),l=bs.dot(Aa);if(c<=0&&l<=0)return e.copy(n);Ra.subVectors(t,s);let h=Es.dot(Ra),u=bs.dot(Ra);if(h>=0&&u<=h)return e.copy(s);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Es,o);Ca.subVectors(t,r);let f=Es.dot(Ca),g=bs.dot(Ca);if(g>=0&&f<=g)return e.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(bs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Nh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Nh,a);let d=1/(m+_+p);return o=_*d,a=p*d,e.copy(n).addScaledVector(Es,o).addScaledVector(bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function La(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var j=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=ed(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=La(o,r,t+1/3),this.g=La(o,r,t),this.b=La(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}copyLinearToSRGB(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return ae.fromWorkingColorSpace(sn.copy(this),t),Math.round($e(sn.r*255,0,255))*65536+Math.round($e(sn.g*255,0,255))*256+Math.round($e(sn.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(sn.copy(this),e);let n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=He){ae.fromWorkingColorSpace(sn.copy(this),t);let e=sn.r,n=sn.g,s=sn.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Wr);let n=ma(Mi.h,Wr.h,e),s=ma(Mi.s,Wr.s,e),r=ma(Mi.l,Wr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new j;j.NAMES=Ou;var gd=0,Xn=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Si,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=$a,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},$t=class extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ze,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new P,Xr=new nt,Ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uc,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uc&&(t.usage=this.usage),t}};var Io=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Do=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},xd=0,Pn=new te,Ua=new Ge,ws=new P,En=new gn,or=new gn,Xe=new P,me=class i extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bu(t)?Do:Io)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(En.min,or.min),En.expandByPoint(Xe),Xe.addVectors(En.max,or.max),En.expandByPoint(Xe)):(En.expandByPoint(or.min),En.expandByPoint(or.max))}En.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Xe.fromBufferAttribute(a,l),c&&(ws.fromBufferAttribute(t,l),Xe.add(ws)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new P,c[I]=new P;let l=new P,h=new P,u=new P,p=new nt,f=new nt,g=new nt,_=new P,m=new P;function d(I,B,y){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,B),u.fromBufferAttribute(n,y),p.fromBufferAttribute(r,I),f.fromBufferAttribute(r,B),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(p),g.sub(p);let b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(b),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(b),a[I].add(_),a[B].add(_),a[y].add(_),c[I].add(m),c[B].add(m),c[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,B=v.length;I<B;++I){let y=v[I],b=y.start,N=y.count;for(let U=b,L=b+N;U<L;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let x=new P,M=new P,A=new P,w=new P;function E(I){A.fromBufferAttribute(s,I),w.copy(A);let B=a[I];x.copy(B),x.sub(A.multiplyScalar(A.dot(B))).normalize(),M.crossVectors(w,B);let b=M.dot(c[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,b)}for(let I=0,B=v.length;I<B;++I){let y=v[I],b=y.start,N=y.count;for(let U=b,L=b+N;U<L;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let p=0,f=t.count;p<f;p+=3){let g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let d=0;d<h;d++)p[g++]=l[f++]}return new Ae(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let p=0,f=u.length;p<f;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fh=new te,ki=new Co,qr=new Pi,Bh=new P,Yr=new P,Zr=new P,Jr=new P,Na=new P,$r=new P,Oh=new P,Kr=new P,it=class extends Ge{constructor(t=new me,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){$r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Na.fromBufferAttribute(u,t),o?$r.addScaledVector(Na,h):$r.addScaledVector(Na.sub(e),h))}e.add($r)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(qr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(qr,Bh)===null||ki.origin.distanceToSquared(Bh)>(t.far-t.near)**2))&&(Fh.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Fh),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let m=p[g],d=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,A=x;M<A;M+=3){let w=a.getX(M),E=a.getX(M+1),I=a.getX(M+2);s=jr(this,d,t,n,l,h,u,w,E,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){let v=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);s=jr(this,o,t,n,l,h,u,v,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let m=p[g],d=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,A=x;M<A;M+=3){let w=M,E=M+1,I=M+2;s=jr(this,d,t,n,l,h,u,w,E,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){let v=m,x=m+1,M=m+2;s=jr(this,o,t,n,l,h,u,v,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function _d(i,t,e,n,s,r,o,a){let c;if(t.side===Ie?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ai,a),c===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Kr);return l<e.near||l>e.far?null:{distance:l,point:Kr.clone(),object:i}}function jr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Yr),i.getVertexPosition(c,Zr),i.getVertexPosition(l,Jr);let h=_d(i,t,e,n,Yr,Zr,Jr,Oh);if(h){let u=new P;wi.getBarycoord(Oh,Yr,Zr,Jr,u),s&&(h.uv=wi.getInterpolatedAttribute(s,a,c,l,u,new nt)),r&&(h.uv1=wi.getInterpolatedAttribute(r,a,c,l,u,new nt)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:c,c:l,normal:new P,materialIndex:0};wi.getNormal(Yr,Zr,Jr,p.normal),h.face=p,h.barycoord=u}return h}var re=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],p=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(_,m,d,v,x,M,A,w,E,I,B){let y=M/E,b=A/I,N=M/2,U=A/2,L=w/2,F=E+1,D=I+1,Y=0,W=0,ct=new P;for(let xt=0;xt<D;xt++){let vt=xt*b-U;for(let Xt=0;Xt<F;Xt++){let jt=Xt*y-N;ct[_]=jt*v,ct[m]=vt*x,ct[d]=L,l.push(ct.x,ct.y,ct.z),ct[_]=0,ct[m]=0,ct[d]=w>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Xt/E),u.push(1-xt/I),Y+=1}}for(let xt=0;xt<I;xt++)for(let vt=0;vt<E;vt++){let Xt=p+vt+F*xt,jt=p+vt+F*(xt+1),J=p+(vt+1)+F*(xt+1),ot=p+(vt+1)+F*xt;c.push(Xt,jt,ot),c.push(jt,J,ot),W+=6}a.addGroup(f,W,B),f+=W,p+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=Vs(i[e]);for(let s in n)t[s]=n[s]}return t}function yd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var Jn={clone:Vs,merge:cn},vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vd,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Lo=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new P,Hh=new nt,zh=new nt,ke=class extends Lo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=So*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return So*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,Hh,zh),e.subVectors(zh,Hh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ss=-90,Ts=1,Oc=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ke(Ss,Ts,t,e);s.layers=this.layers,this.add(s);let r=new ke(Ss,Ts,t,e);r.layers=this.layers,this.add(r);let o=new ke(Ss,Ts,t,e);o.layers=this.layers,this.add(o);let a=new ke(Ss,Ts,t,e);a.layers=this.layers,this.add(a);let c=new ke(Ss,Ts,t,e);c.layers=this.layers,this.add(c);let l=new ke(Ss,Ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Uo=class extends mn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Hs,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Hc=class extends ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Uo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new re(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Wn});r.uniforms.tEquirect.value=e;let o=new it(s,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=bn),new Oc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Fa=new P,Ed=new P,bd=new Jt,ri=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fa.subVectors(n,e).cross(Ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bd.getNormalMatrix(t),s=this.coplanarPoint(Fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new Pi,Qr=new P,yr=class{constructor(t=new ri,e=new ri,n=new ri,s=new ri,r=new ri,o=new ri){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],f=s[8],g=s[9],_=s[10],m=s[11],d=s[12],v=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,p-l,m-f,M-d).normalize(),n[1].setComponents(c+r,p+l,m+f,M+d).normalize(),n[2].setComponents(c+o,p+h,m+g,M+v).normalize(),n[3].setComponents(c-o,p-h,m-g,M-v).normalize(),n[4].setComponents(c-a,p-u,m-_,M-x).normalize(),e===oi)n[5].setComponents(c+a,p+u,m+_,M+x).normalize();else if(e===wo)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Qr.x=s.normal.x>0?t.max.x:t.min.x,Qr.y=s.normal.y>0?t.max.y:t.min.y,Qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wd(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<u.length;f++){let g=u[p],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ye=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,p=e/c,f=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let v=d*p-o;for(let x=0;x<l;x++){let M=x*u-r;g.push(M,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){let x=v+l*d,M=v+l*(d+1),A=v+1+l*(d+1),w=v+1+l*d;f.push(x,M,w),f.push(M,A,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Od=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$d=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ep=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Up=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ym=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Sd,alphahash_pars_fragment:Td,alphamap_fragment:Ad,alphamap_pars_fragment:Rd,alphatest_fragment:Cd,alphatest_pars_fragment:Pd,aomap_fragment:Id,aomap_pars_fragment:Dd,batching_pars_vertex:Ld,batching_vertex:Ud,begin_vertex:Nd,beginnormal_vertex:Fd,bsdfs:Bd,iridescence_fragment:Od,bumpmap_pars_fragment:Hd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Gd,clipping_planes_vertex:Vd,color_fragment:Wd,color_pars_fragment:Xd,color_pars_vertex:qd,color_vertex:Yd,common:Zd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:$d,displacementmap_pars_vertex:Kd,displacementmap_vertex:jd,emissivemap_fragment:Qd,emissivemap_pars_fragment:tp,colorspace_fragment:ep,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:op,envmap_physical_pars_fragment:xp,envmap_vertex:ap,fog_vertex:cp,fog_pars_vertex:lp,fog_fragment:hp,fog_pars_fragment:up,gradientmap_pars_fragment:fp,lightmap_pars_fragment:dp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:_p,lights_toon_pars_fragment:yp,lights_phong_fragment:vp,lights_phong_pars_fragment:Mp,lights_physical_fragment:Ep,lights_physical_pars_fragment:bp,lights_fragment_begin:wp,lights_fragment_maps:Sp,lights_fragment_end:Tp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Pp,map_fragment:Ip,map_pars_fragment:Dp,map_particle_fragment:Lp,map_particle_pars_fragment:Up,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Bp,morphcolor_vertex:Op,morphnormal_vertex:Hp,morphtarget_pars_vertex:zp,morphtarget_vertex:kp,normal_fragment_begin:Gp,normal_fragment_maps:Vp,normal_pars_fragment:Wp,normal_pars_vertex:Xp,normal_vertex:qp,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:Kp,opaque_fragment:jp,packing:Qp,premultiplied_alpha_fragment:tm,project_vertex:em,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:om,shadowmap_pars_vertex:am,shadowmap_vertex:cm,shadowmask_pars_fragment:lm,skinbase_vertex:hm,skinning_pars_vertex:um,skinning_vertex:fm,skinnormal_vertex:dm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:xm,transmission_fragment:_m,transmission_pars_fragment:ym,uv_pars_fragment:vm,uv_pars_vertex:Mm,uv_vertex:Em,worldpos_vertex:bm,background_vert:wm,background_frag:Sm,backgroundCube_vert:Tm,backgroundCube_frag:Am,cube_vert:Rm,cube_frag:Cm,depth_vert:Pm,depth_frag:Im,distanceRGBA_vert:Dm,distanceRGBA_frag:Lm,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:Fm,linedashed_frag:Bm,meshbasic_vert:Om,meshbasic_frag:Hm,meshlambert_vert:zm,meshlambert_frag:km,meshmatcap_vert:Gm,meshmatcap_frag:Vm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:qm,meshphong_frag:Ym,meshphysical_vert:Zm,meshphysical_frag:Jm,meshtoon_vert:$m,meshtoon_frag:Km,points_vert:jm,points_frag:Qm,shadow_vert:t0,shadow_frag:e0,sprite_vert:n0,sprite_frag:i0},mt={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},kn={basic:{uniforms:cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new j(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:cn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:cn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new j(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:cn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:cn([mt.points,mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:cn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:cn([mt.common,mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:cn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:cn([mt.sprite,mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:cn([mt.common,mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:cn([mt.lights,mt.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};kn.physical={uniforms:cn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var to={r:0,b:0,g:0},Vi=new ze,s0=new te;function r0(i,t,e,n,s,r,o){let a=new j(0),c=r===!0?0:1,l,h,u=null,p=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1,M=g(v);M===null?d(a,c):M&&M.isColor&&(d(M,1),x=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,x){let M=g(x);M&&(M.isCubeTexture||M.mapping===Xo)?(h===void 0&&(h=new it(new re(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:Vs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(x.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(s0.makeRotationFromEuler(Vi)),h.material.toneMapped=ae.getTransfer(M.colorSpace)!==_e,(u!==M||p!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,p=M.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new it(new Ye(2,2),new Se({name:"BackgroundMaterial",uniforms:Vs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ae.getTransfer(M.colorSpace)!==_e,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||p!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,p=M.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,x){v.getRGB(to,Hu(i)),n.buffers.color.setClear(to.r,to.g,to.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(a,c)},render:_,addToRenderList:m}}function o0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(y,b,N,U,L){let F=!1,D=u(U,N,b);r!==D&&(r=D,l(r.object)),F=f(y,U,N,L),F&&g(y,U,N,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(y,b,N,U),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,b,N){let U=N.wireframe===!0,L=n[y.id];L===void 0&&(L={},n[y.id]=L);let F=L[b.id];F===void 0&&(F={},L[b.id]=F);let D=F[U];return D===void 0&&(D=p(c()),F[U]=D),D}function p(y){let b=[],N=[],U=[];for(let L=0;L<e;L++)b[L]=0,N[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:N,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,b,N,U){let L=r.attributes,F=b.attributes,D=0,Y=N.getAttributes();for(let W in Y)if(Y[W].location>=0){let xt=L[W],vt=F[W];if(vt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor)),xt===void 0||xt.attribute!==vt||vt&&xt.data!==vt.data)return!0;D++}return r.attributesNum!==D||r.index!==U}function g(y,b,N,U){let L={},F=b.attributes,D=0,Y=N.getAttributes();for(let W in Y)if(Y[W].location>=0){let xt=F[W];xt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor));let vt={};vt.attribute=xt,xt&&xt.data&&(vt.data=xt.data),L[W]=vt,D++}r.attributes=L,r.attributesNum=D,r.index=U}function _(){let y=r.newAttributes;for(let b=0,N=y.length;b<N;b++)y[b]=0}function m(y){d(y,0)}function d(y,b){let N=r.newAttributes,U=r.enabledAttributes,L=r.attributeDivisors;N[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),L[y]!==b&&(i.vertexAttribDivisor(y,b),L[y]=b)}function v(){let y=r.newAttributes,b=r.enabledAttributes;for(let N=0,U=b.length;N<U;N++)b[N]!==y[N]&&(i.disableVertexAttribArray(N),b[N]=0)}function x(y,b,N,U,L,F,D){D===!0?i.vertexAttribIPointer(y,b,N,L,F):i.vertexAttribPointer(y,b,N,U,L,F)}function M(y,b,N,U){_();let L=U.attributes,F=N.getAttributes(),D=b.defaultAttributeValues;for(let Y in F){let W=F[Y];if(W.location>=0){let ct=L[Y];if(ct===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ct!==void 0){let xt=ct.normalized,vt=ct.itemSize,Xt=t.get(ct);if(Xt===void 0)continue;let jt=Xt.buffer,J=Xt.type,ot=Xt.bytesPerElement,bt=J===i.INT||J===i.UNSIGNED_INT||ct.gpuType===Al;if(ct.isInterleavedBufferAttribute){let yt=ct.data,Ht=yt.stride,Ot=ct.offset;if(yt.isInstancedInterleavedBuffer){for(let qt=0;qt<W.locationSize;qt++)d(W.location+qt,yt.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let qt=0;qt<W.locationSize;qt++)m(W.location+qt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let qt=0;qt<W.locationSize;qt++)x(W.location+qt,vt/W.locationSize,J,xt,Ht*ot,(Ot+vt/W.locationSize*qt)*ot,bt)}else{if(ct.isInstancedBufferAttribute){for(let yt=0;yt<W.locationSize;yt++)d(W.location+yt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let yt=0;yt<W.locationSize;yt++)m(W.location+yt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let yt=0;yt<W.locationSize;yt++)x(W.location+yt,vt/W.locationSize,J,xt,vt*ot,vt/W.locationSize*yt*ot,bt)}}else if(D!==void 0){let xt=D[Y];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(W.location,xt);break;case 3:i.vertexAttrib3fv(W.location,xt);break;case 4:i.vertexAttrib4fv(W.location,xt);break;default:i.vertexAttrib1fv(W.location,xt)}}}}v()}function A(){I();for(let y in n){let b=n[y];for(let N in b){let U=b[N];for(let L in U)h(U[L].object),delete U[L];delete b[N]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;let b=n[y.id];for(let N in b){let U=b[N];for(let L in U)h(U[L].object),delete U[L];delete b[N]}delete n[y.id]}function E(y){for(let b in n){let N=n[b];if(N[y.id]===void 0)continue;let U=N[y.id];for(let L in U)h(U[L].object),delete U[L];delete N[y.id]}}function I(){B(),o=!0,r!==s&&(r=s,l(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function a0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,p){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<p.length;_++)e.update(g,n,p[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function c0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==rn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let I=E===zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==ci&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Vn&&!I)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){let E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:A,maxSamples:w}}function l0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ri,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let f=u.length!==0||p||n!==0||s;return s=p,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,x=v*4,M=d.clippingState||null;c.value=M,M=h(g,p,x,f);for(let A=0;A!==x;++A)M[A]=e[A];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let d=f+_*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,M=f;x!==_;++x,M+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function h0(i){let t=new WeakMap;function e(o,a){return a===sc?o.mapping=Hs:a===rc&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===sc||a===rc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Hc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var li=class extends Lo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ls=4,kh=[.125,.215,.35,.446,.526,.582],Yi=20,Ba=new li,Gh=new j,Oa=null,Ha=0,za=0,ka=!1,Xi=(1+Math.sqrt(5))/2,As=1/Xi,Vh=[new P(-Xi,As,0),new P(Xi,As,0),new P(-As,0,Xi),new P(As,0,Xi),new P(0,Xi,-As),new P(0,Xi,As),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Ws=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Oa=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oa,Ha,za),this._renderer.xr.enabled=ka,t.scissorTest=!1,eo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hs||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oa=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:zn,format:rn,colorSpace:Ui,depthBuffer:!1},s=Wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u0(r)),this._blurMaterial=f0(r,t,e)}return s}_compileMaterial(t){let e=new it(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,s){let a=new ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Gh),h.toneMapping=Ti,h.autoClear=!1;let f=new $t({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new it(new re,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Gh),_=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let x=this._cubeSize;eo(s,v*x,d>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Hs||t.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;eo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vh[(s-r-1)%Vh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new it(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Yi;m>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);let d=[],v=0;for(let E=0;E<Yi;++E){let I=E/_,B=Math.exp(-I*I/2);d.push(B),E===0?v+=B:E<m&&(v+=2*B)}for(let E=0;E<d.length;E++)d[E]=d[E]/v;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;let M=this._sizeLods[s],A=3*M*(s>x-Ls?s-x+Ls:0),w=4*(this._cubeSize-M);eo(e,A,w,3*M,2*M),c.setRenderTarget(e),c.render(u,Ba)}};function u0(i){let t=[],e=[],n=[],s=i,r=i-Ls+1+kh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ls?c=kh[o-i+Ls-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*f),x=new Float32Array(m*g*f),M=new Float32Array(d*g*f);for(let w=0;w<f;w++){let E=w%3*2/3-1,I=w>2?0:-1,B=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];v.set(B,_*g*w),x.set(p,m*g*w);let y=[w,w,w,w,w,w];M.set(y,d*g*w)}let A=new me;A.setAttribute("position",new Ae(v,_)),A.setAttribute("uv",new Ae(x,m)),A.setAttribute("faceIndex",new Ae(M,d)),t.push(A),s>Ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wh(i,t,e){let n=new ln(i,t,e);return n.texture.mapping=Xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function eo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function f0(i,t,e){let n=new Float32Array(Yi),s=new P(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Xh(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function qh(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function d0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===sc||c===rc,h=c===Hs||c===zs;if(l||h){let u=t.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Ws(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ws(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function p0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&yo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function m0(i,t,e,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);for(let g in p.morphAttributes){let _=p.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}p.removeEventListener("dispose",o),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(u){let p=u.attributes;for(let g in p)t.update(p[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let p=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let x=0,M=v.length;x<M;x+=3){let A=v[x+0],w=v[x+1],E=v[x+2];p.push(A,w,w,E,E,A)}}else if(g!==void 0){let v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){let A=x+0,w=x+1,E=x+2;p.push(A,w,w,E,E,A)}}else return;let m=new(Bu(p)?Do:Io)(p,1);m.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let p=r.get(u);if(p){let f=u.index;f!==null&&p.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function g0(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function l(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,p*o,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,g);let m=0;for(let d=0;d<g;d++)m+=f[d];e.update(m,n,1)}function u(p,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)l(p[d]/o,f[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=f[v];for(let v=0;v<_.length;v++)e.update(d,n,_[v])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function x0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _0(i,t,e){let n=new WeakMap,s=new xe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==u){let B=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",B)};p!==void 0&&p.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let M=a.attributes.position.count*x,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*A*4*u),E=new Ro(w,M,A,u);E.type=Vn,E.needsUpdate=!0;let I=x*4;for(let y=0;y<u;y++){let b=m[y],N=d[y],U=v[y],L=M*A*4*y;for(let F=0;F<b.count;F++){let D=F*I;f===!0&&(s.fromBufferAttribute(b,F),w[L+D+0]=s.x,w[L+D+1]=s.y,w[L+D+2]=s.z,w[L+D+3]=0),g===!0&&(s.fromBufferAttribute(N,F),w[L+D+4]=s.x,w[L+D+5]=s.y,w[L+D+6]=s.z,w[L+D+7]=0),_===!0&&(s.fromBufferAttribute(U,F),w[L+D+8]=s.x,w[L+D+9]=s.y,w[L+D+10]=s.z,w[L+D+11]=U.itemSize===4?s.w:1)}}p={count:u,texture:E,size:new nt(M,A)},n.set(a,p),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function y0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var No=class extends mn{constructor(t,e,n,s,r,o,a,c,l,h=Ns){if(h!==Ns&&h!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ns&&(n=$i),n===void 0&&h===Gs&&(n=ks),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ku=new mn,Yh=new No(1,1),Gu=new Ro,Vu=new Bc,Wu=new Uo,Zh=[],Jh=[],$h=new Float32Array(16),Kh=new Float32Array(9),jh=new Float32Array(4);function Js(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zh[s];if(r===void 0&&(r=new Float32Array(s),Zh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yo(i,t){let e=Jh[t];e===void 0&&(e=new Int32Array(t),Jh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function v0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function M0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function w0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;jh.set(n),i.uniformMatrix2fv(this.addr,!1,jh),We(e,n)}}function S0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Kh.set(n),i.uniformMatrix3fv(this.addr,!1,Kh),We(e,n)}}function T0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;$h.set(n),i.uniformMatrix4fv(this.addr,!1,$h),We(e,n)}}function A0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function C0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function P0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function I0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function N0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yh.compareFunction=Fu,r=Yh):r=ku,e.setTexture2D(t||r,s)}function F0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vu,s)}function B0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wu,s)}function O0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gu,s)}function H0(i){switch(i){case 5126:return v0;case 35664:return M0;case 35665:return E0;case 35666:return b0;case 35674:return w0;case 35675:return S0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return I0;case 36294:return D0;case 36295:return L0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return O0}}function z0(i,t){i.uniform1fv(this.addr,t)}function k0(i,t){let e=Js(t,this.size,2);i.uniform2fv(this.addr,e)}function G0(i,t){let e=Js(t,this.size,3);i.uniform3fv(this.addr,e)}function V0(i,t){let e=Js(t,this.size,4);i.uniform4fv(this.addr,e)}function W0(i,t){let e=Js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function X0(i,t){let e=Js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function q0(i,t){let e=Js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Y0(i,t){i.uniform1iv(this.addr,t)}function Z0(i,t){i.uniform2iv(this.addr,t)}function J0(i,t){i.uniform3iv(this.addr,t)}function $0(i,t){i.uniform4iv(this.addr,t)}function K0(i,t){i.uniform1uiv(this.addr,t)}function j0(i,t){i.uniform2uiv(this.addr,t)}function Q0(i,t){i.uniform3uiv(this.addr,t)}function tg(i,t){i.uniform4uiv(this.addr,t)}function eg(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ku,r[o])}function ng(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vu,r[o])}function ig(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Wu,r[o])}function sg(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gu,r[o])}function rg(i){switch(i){case 5126:return z0;case 35664:return k0;case 35665:return G0;case 35666:return V0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return $0;case 5125:return K0;case 36294:return j0;case 36295:return Q0;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}var zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=H0(e.type)}},kc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rg(e.type)}},Gc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ga=/(\w+)(\])?(\[|\.)?/g;function Qh(i,t){i.seq.push(t),i.map[t.id]=t}function og(i,t,e){let n=i.name,s=n.length;for(Ga.lastIndex=0;;){let r=Ga.exec(n),o=Ga.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qh(e,l===void 0?new zc(a,i,t):new kc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Gc(a),Qh(e,u)),e=u}}}var Bs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);og(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function tu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ag=37297,cg=0;function lg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function hg(i){let t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(i),n;switch(t===e?n="":t===bo&&e===Eo?n="LinearDisplayP3ToLinearSRGB":t===Eo&&e===bo&&(n="LinearSRGBToLinearDisplayP3"),i){case Ui:case qo:return[n,"LinearTransferOETF"];case He:case Nl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function eu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+lg(i.getShaderSource(t),o)}else return s}function ug(i,t){let e=hg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function fg(i,t){let e;switch(t){case El:e="Linear";break;case bl:e="Reinhard";break;case wl:e="Cineon";break;case Ir:e="ACESFilmic";break;case Sl:e="AgX";break;case Tl:e="Neutral";break;case Vf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var no=new P;function dg(){ae.getLuminanceCoefficients(no);let i=no.x.toFixed(4),t=no.y.toFixed(4),e=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function mg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function dr(i){return i!==""}function nu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(i){return i.replace(xg,yg)}var _g=new Map;function yg(i,t){let e=Zt[t];if(e===void 0){let n=_g.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vc(e)}var vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(i){return i.replace(vg,Mg)}function Mg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ru(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Eg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pr?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function bg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hs:case zs:t="ENVMAP_TYPE_CUBE";break;case Xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function Sg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Su:t="ENVMAP_BLENDING_MULTIPLY";break;case kf:t="ENVMAP_BLENDING_MIX";break;case Gf:t="ENVMAP_BLENDING_ADD";break}return t}function Tg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ag(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Eg(e),l=bg(e),h=wg(e),u=Sg(e),p=Tg(e),f=pg(e),g=mg(r),_=s.createProgram(),m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),d.length>0&&(d+=`
`)):(m=[ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),d=[ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Ti?fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,ug("linearToOutputTexel",e.outputColorSpace),dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),o=Vc(o),o=nu(o,e),o=iu(o,e),a=Vc(a),a=nu(a,e),a=iu(a,e),o=su(o),a=su(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let x=v+m+o,M=v+d+a,A=tu(s,s.VERTEX_SHADER,x),w=tu(s,s.FRAGMENT_SHADER,M);s.attachShader(_,A),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(b){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(A).trim(),L=s.getShaderInfoLog(w).trim(),F=!0,D=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,w);else{let Y=eu(s,A,"vertex"),W=eu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+N+`
`+Y+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||L==="")&&(D=!1);D&&(b.diagnostics={runnable:F,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:L,prefix:d}})}s.deleteShader(A),s.deleteShader(w),I=new Bs(s,_),B=gg(s,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let B;this.getAttributes=function(){return B===void 0&&E(this),B};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,ag)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}var Rg=0,Wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xc(t),e.set(t,n)),n}},Xc=class{constructor(t){this.id=Rg++,this.code=t,this.usedTimes=0}};function Cg(i,t,e,n,s,r,o){let a=new Po,c=new Wc,l=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function d(y,b,N,U,L){let F=U.fog,D=L.geometry,Y=y.isMeshStandardMaterial?U.environment:null,W=(y.isMeshStandardMaterial?e:t).get(y.envMap||Y),ct=W&&W.mapping===Xo?W.image.height:null,xt=_[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let vt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Xt=vt!==void 0?vt.length:0,jt=0;D.morphAttributes.position!==void 0&&(jt=1),D.morphAttributes.normal!==void 0&&(jt=2),D.morphAttributes.color!==void 0&&(jt=3);let J,ot,bt,yt;if(xt){let dn=kn[xt];J=dn.vertexShader,ot=dn.fragmentShader}else J=y.vertexShader,ot=y.fragmentShader,c.update(y),bt=c.getVertexShaderID(y),yt=c.getFragmentShaderID(y);let Ht=i.getRenderTarget(),Ot=L.isInstancedMesh===!0,qt=L.isBatchedMesh===!0,Qt=!!y.map,Q=!!y.matcap,C=!!W,pt=!!y.aoMap,dt=!!y.lightMap,lt=!!y.bumpMap,gt=!!y.normalMap,Ft=!!y.displacementMap,wt=!!y.emissiveMap,R=!!y.metalnessMap,S=!!y.roughnessMap,G=y.anisotropy>0,$=y.clearcoat>0,tt=y.dispersion>0,K=y.iridescence>0,Lt=y.sheen>0,_t=y.transmission>0,At=G&&!!y.anisotropyMap,ne=$&&!!y.clearcoatMap,ht=$&&!!y.clearcoatNormalMap,Rt=$&&!!y.clearcoatRoughnessMap,Vt=K&&!!y.iridescenceMap,Wt=K&&!!y.iridescenceThicknessMap,It=Lt&&!!y.sheenColorMap,ie=Lt&&!!y.sheenRoughnessMap,Yt=!!y.specularMap,Me=!!y.specularColorMap,O=!!y.specularIntensityMap,St=_t&&!!y.transmissionMap,Z=_t&&!!y.thicknessMap,et=!!y.gradientMap,Mt=!!y.alphaMap,Tt=y.alphaTest>0,se=!!y.alphaHash,Be=!!y.extensions,fn=Ti;y.toneMapped&&(Ht===null||Ht.isXRRenderTarget===!0)&&(fn=i.toneMapping);let le={shaderID:xt,shaderType:y.type,shaderName:y.name,vertexShader:J,fragmentShader:ot,defines:y.defines,customVertexShaderID:bt,customFragmentShaderID:yt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:qt,batchingColor:qt&&L._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&L.instanceColor!==null,instancingMorph:Ot&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ht===null?i.outputColorSpace:Ht.isXRRenderTarget===!0?Ht.texture.colorSpace:Ui,alphaToCoverage:!!y.alphaToCoverage,map:Qt,matcap:Q,envMap:C,envMapMode:C&&W.mapping,envMapCubeUVHeight:ct,aoMap:pt,lightMap:dt,bumpMap:lt,normalMap:gt,displacementMap:f&&Ft,emissiveMap:wt,normalMapObjectSpace:gt&&y.normalMapType===Yf,normalMapTangentSpace:gt&&y.normalMapType===Ul,metalnessMap:R,roughnessMap:S,anisotropy:G,anisotropyMap:At,clearcoat:$,clearcoatMap:ne,clearcoatNormalMap:ht,clearcoatRoughnessMap:Rt,dispersion:tt,iridescence:K,iridescenceMap:Vt,iridescenceThicknessMap:Wt,sheen:Lt,sheenColorMap:It,sheenRoughnessMap:ie,specularMap:Yt,specularColorMap:Me,specularIntensityMap:O,transmission:_t,transmissionMap:St,thicknessMap:Z,gradientMap:et,opaque:y.transparent===!1&&y.blending===Si&&y.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Tt,alphaHash:se,combine:y.combine,mapUv:Qt&&m(y.map.channel),aoMapUv:pt&&m(y.aoMap.channel),lightMapUv:dt&&m(y.lightMap.channel),bumpMapUv:lt&&m(y.bumpMap.channel),normalMapUv:gt&&m(y.normalMap.channel),displacementMapUv:Ft&&m(y.displacementMap.channel),emissiveMapUv:wt&&m(y.emissiveMap.channel),metalnessMapUv:R&&m(y.metalnessMap.channel),roughnessMapUv:S&&m(y.roughnessMap.channel),anisotropyMapUv:At&&m(y.anisotropyMap.channel),clearcoatMapUv:ne&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:It&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ie&&m(y.sheenRoughnessMap.channel),specularMapUv:Yt&&m(y.specularMap.channel),specularColorMapUv:Me&&m(y.specularColorMap.channel),specularIntensityMapUv:O&&m(y.specularIntensityMap.channel),transmissionMapUv:St&&m(y.transmissionMap.channel),thicknessMapUv:Z&&m(y.thicknessMap.channel),alphaMapUv:Mt&&m(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(gt||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(Qt||Mt),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:p,skinning:L.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:jt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:fn,decodeVideoTexture:Qt&&y.map.isVideoTexture===!0&&ae.getTransfer(y.map.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ee,flipSided:y.side===Ie,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Be&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&y.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function v(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)b.push(N),b.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(x(b,y),M(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function x(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),y.push(a.mask)}function A(y){let b=_[y.type],N;if(b){let U=kn[b];N=Jn.clone(U.uniforms)}else N=y.uniforms;return N}function w(y,b){let N;for(let U=0,L=h.length;U<L;U++){let F=h[U];if(F.cacheKey===b){N=F,++N.usedTimes;break}}return N===void 0&&(N=new Ag(i,b,y,r),h.push(N)),N}function E(y){if(--y.usedTimes===0){let b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function I(y){c.remove(y)}function B(){c.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:A,acquireProgram:w,releaseProgram:E,releaseShaderCache:I,programs:h,dispose:B}}function Pg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ig(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function au(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,f,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,p,f,g,_,m){let d=o(u,p,f,g,_,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function c(u,p,f,g,_,m){let d=o(u,p,f,g,_,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,p){e.length>1&&e.sort(u||Ig),n.length>1&&n.sort(p||ou),s.length>1&&s.sort(p||ou)}function h(){for(let u=t,p=i.length;u<p;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Dg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new au,i.set(n,[o])):s>=r.length?(o=new au,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new j};break;case"SpotLight":e={position:new P,direction:new P,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new j,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new j,groundColor:new j};break;case"RectAreaLight":e={color:new j,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Ug(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ng=0;function Fg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bg(i){let t=new Lg,e=Ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new te,o=new te;function a(l){let h=0,u=0,p=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,g=0,_=0,m=0,d=0,v=0,x=0,M=0,A=0,w=0,E=0;l.sort(Fg);for(let B=0,y=l.length;B<y;B++){let b=l[B],N=b.color,U=b.intensity,L=b.distance,F=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=N.r*U,u+=N.g*U,p+=N.b*U;else if(b.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(b.sh.coefficients[D],U);E++}else if(b.isDirectionalLight){let D=t.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let Y=b.shadow,W=e.get(b);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=b.shadow.matrix,v++}n.directional[f]=D,f++}else if(b.isSpotLight){let D=t.get(b);D.position.setFromMatrixPosition(b.matrixWorld),D.color.copy(N).multiplyScalar(U),D.distance=L,D.coneCos=Math.cos(b.angle),D.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),D.decay=b.decay,n.spot[_]=D;let Y=b.shadow;if(b.map&&(n.spotLightMap[A]=b.map,A++,Y.updateMatrices(b),b.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,b.castShadow){let W=e.get(b);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=F,M++}_++}else if(b.isRectAreaLight){let D=t.get(b);D.color.copy(N).multiplyScalar(U),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=D,m++}else if(b.isPointLight){let D=t.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),D.distance=b.distance,D.decay=b.decay,b.castShadow){let Y=b.shadow,W=e.get(b);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=b.shadow.matrix,x++}n.point[g]=D,g++}else if(b.isHemisphereLight){let D=t.get(b);D.skyColor.copy(b.color).multiplyScalar(U),D.groundColor.copy(b.groundColor).multiplyScalar(U),n.hemi[d]=D,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==v||I.numPointShadows!==x||I.numSpotShadows!==M||I.numSpotMaps!==A||I.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=v,I.numPointShadows=x,I.numSpotShadows=M,I.numSpotMaps=A,I.numLightProbes=E,n.version=Ng++)}function c(l,h){let u=0,p=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){let x=l[d];if(x.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(x.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function cu(i){let t=new Bg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Og(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new cu(i),t.set(s,[a])):r>=o.length?(a=new cu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var qc=class extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yc=class extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kg(i,t,e){let n=new yr,s=new nt,r=new nt,o=new xe,a=new qc({depthPacking:qf}),c=new Yc,l={},h=e.maxTextureSize,u={[Ai]:Ie,[Ie]:Ai,[Ee]:Ee},p=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Hg,fragmentShader:zg}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new it(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let d=this.type;this.render=function(w,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let B=i.getRenderTarget(),y=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Wn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=d!==si&&this.type===si,L=d===si&&this.type!==si;for(let F=0,D=w.length;F<D;F++){let Y=w[F],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ct=W.getFrameExtents();if(s.multiply(ct),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,W.mapSize.y=r.y)),W.map===null||U===!0||L===!0){let vt=this.type!==si?{minFilter:qe,magFilter:qe}:{};W.map!==null&&W.map.dispose(),W.map=new ln(s.x,s.y,vt),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let xt=W.getViewportCount();for(let vt=0;vt<xt;vt++){let Xt=W.getViewport(vt);o.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),N.viewport(o),W.updateMatrices(Y,vt),n=W.getFrustum(),M(E,I,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===si&&v(W,I),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(B,y,b)};function v(w,E){let I=t.update(_);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ln(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,I,p,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,I,f,_,null)}function x(w,E,I,B){let y=null,b=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)y=b;else if(y=I.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let N=y.uuid,U=E.uuid,L=l[N];L===void 0&&(L={},l[N]=L);let F=L[U];F===void 0&&(F=y.clone(),L[U]=F,E.addEventListener("dispose",A)),y=F}if(y.visible=E.visible,y.wireframe=E.wireframe,B===si?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=i.properties.get(y);N.light=I}return y}function M(w,E,I,B,y){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===si)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let U=t.update(w),L=w.material;if(Array.isArray(L)){let F=U.groups;for(let D=0,Y=F.length;D<Y;D++){let W=F[D],ct=L[W.materialIndex];if(ct&&ct.visible){let xt=x(w,ct,B,y);w.onBeforeShadow(i,w,E,I,U,xt,W),i.renderBufferDirect(I,null,U,xt,w,W),w.onAfterShadow(i,w,E,I,U,xt,W)}}}else if(L.visible){let F=x(w,L,B,y);w.onBeforeShadow(i,w,E,I,U,F,null),i.renderBufferDirect(I,null,U,F,w,null),w.onAfterShadow(i,w,E,I,U,F,null)}}let N=w.children;for(let U=0,L=N.length;U<L;U++)M(N[U],E,I,B,y)}function A(w){w.target.removeEventListener("dispose",A);for(let I in l){let B=l[I],y=w.target.uuid;y in B&&(B[y].dispose(),delete B[y])}}}var Gg={[Ka]:ja,[Qa]:nc,[tc]:ic,[Os]:ec,[ja]:Ka,[nc]:Qa,[ic]:tc,[ec]:Os};function Vg(i){function t(){let O=!1,St=new xe,Z=null,et=new xe(0,0,0,0);return{setMask:function(Mt){Z!==Mt&&!O&&(i.colorMask(Mt,Mt,Mt,Mt),Z=Mt)},setLocked:function(Mt){O=Mt},setClear:function(Mt,Tt,se,Be,fn){fn===!0&&(Mt*=Be,Tt*=Be,se*=Be),St.set(Mt,Tt,se,Be),et.equals(St)===!1&&(i.clearColor(Mt,Tt,se,Be),et.copy(St))},reset:function(){O=!1,Z=null,et.set(-1,0,0,0)}}}function e(){let O=!1,St=!1,Z=null,et=null,Mt=null;return{setReversed:function(Tt){St=Tt},setTest:function(Tt){Tt?bt(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(Tt){Z!==Tt&&!O&&(i.depthMask(Tt),Z=Tt)},setFunc:function(Tt){if(St&&(Tt=Gg[Tt]),et!==Tt){switch(Tt){case Ka:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case tc:i.depthFunc(i.EQUAL);break;case ec:i.depthFunc(i.GEQUAL);break;case nc:i.depthFunc(i.GREATER);break;case ic:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=Tt}},setLocked:function(Tt){O=Tt},setClear:function(Tt){Mt!==Tt&&(i.clearDepth(Tt),Mt=Tt)},reset:function(){O=!1,Z=null,et=null,Mt=null}}}function n(){let O=!1,St=null,Z=null,et=null,Mt=null,Tt=null,se=null,Be=null,fn=null;return{setTest:function(le){O||(le?bt(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(le){St!==le&&!O&&(i.stencilMask(le),St=le)},setFunc:function(le,dn,jn){(Z!==le||et!==dn||Mt!==jn)&&(i.stencilFunc(le,dn,jn),Z=le,et=dn,Mt=jn)},setOp:function(le,dn,jn){(Tt!==le||se!==dn||Be!==jn)&&(i.stencilOp(le,dn,jn),Tt=le,se=dn,Be=jn)},setLocked:function(le){O=le},setClear:function(le){fn!==le&&(i.clearStencil(le),fn=le)},reset:function(){O=!1,St=null,Z=null,et=null,Mt=null,Tt=null,se=null,Be=null,fn=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,p=[],f=null,g=!1,_=null,m=null,d=null,v=null,x=null,M=null,A=null,w=new j(0,0,0),E=0,I=!1,B=null,y=null,b=null,N=null,U=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,D=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(Y)[1]),F=D>=1):Y.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),F=D>=2);let W=null,ct={},xt=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Xt=new xe().fromArray(xt),jt=new xe().fromArray(vt);function J(O,St,Z,et){let Mt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(O,Tt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<Z;se++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(St+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return Tt}let ot={};ot[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),bt(i.DEPTH_TEST),r.setFunc(Os),dt(!1),lt(gh),bt(i.CULL_FACE),C(Wn);function bt(O){l[O]!==!0&&(i.enable(O),l[O]=!0)}function yt(O){l[O]!==!1&&(i.disable(O),l[O]=!1)}function Ht(O,St){return h[O]!==St?(i.bindFramebuffer(O,St),h[O]=St,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=St),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Ot(O,St){let Z=p,et=!1;if(O){Z=u.get(St),Z===void 0&&(Z=[],u.set(St,Z));let Mt=O.textures;if(Z.length!==Mt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,se=Mt.length;Tt<se;Tt++)Z[Tt]=i.COLOR_ATTACHMENT0+Tt;Z.length=Mt.length,et=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,et=!0);et&&i.drawBuffers(Z)}function qt(O){return f!==O?(i.useProgram(O),f=O,!0):!1}let Qt={[qi]:i.FUNC_ADD,[wf]:i.FUNC_SUBTRACT,[Sf]:i.FUNC_REVERSE_SUBTRACT};Qt[Tf]=i.MIN,Qt[Af]=i.MAX;let Q={[Rf]:i.ZERO,[Cf]:i.ONE,[Pf]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[Ff]:i.SRC_ALPHA_SATURATE,[Uf]:i.DST_COLOR,[Df]:i.DST_ALPHA,[If]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[Nf]:i.ONE_MINUS_DST_COLOR,[Lf]:i.ONE_MINUS_DST_ALPHA,[Bf]:i.CONSTANT_COLOR,[Of]:i.ONE_MINUS_CONSTANT_COLOR,[Hf]:i.CONSTANT_ALPHA,[zf]:i.ONE_MINUS_CONSTANT_ALPHA};function C(O,St,Z,et,Mt,Tt,se,Be,fn,le){if(O===Wn){g===!0&&(yt(i.BLEND),g=!1);return}if(g===!1&&(bt(i.BLEND),g=!0),O!==bf){if(O!==_||le!==I){if((m!==qi||x!==qi)&&(i.blendEquation(i.FUNC_ADD),m=qi,x=qi),le)switch(O){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pn:i.blendFunc(i.ONE,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _h:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}d=null,v=null,M=null,A=null,w.set(0,0,0),E=0,_=O,I=le}return}Mt=Mt||St,Tt=Tt||Z,se=se||et,(St!==m||Mt!==x)&&(i.blendEquationSeparate(Qt[St],Qt[Mt]),m=St,x=Mt),(Z!==d||et!==v||Tt!==M||se!==A)&&(i.blendFuncSeparate(Q[Z],Q[et],Q[Tt],Q[se]),d=Z,v=et,M=Tt,A=se),(Be.equals(w)===!1||fn!==E)&&(i.blendColor(Be.r,Be.g,Be.b,fn),w.copy(Be),E=fn),_=O,I=!1}function pt(O,St){O.side===Ee?yt(i.CULL_FACE):bt(i.CULL_FACE);let Z=O.side===Ie;St&&(Z=!Z),dt(Z),O.blending===Si&&O.transparent===!1?C(Wn):C(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);let et=O.stencilWrite;o.setTest(et),et&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ft(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(O){B!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),B=O)}function lt(O){O!==Mf?(bt(i.CULL_FACE),O!==y&&(O===gh?i.cullFace(i.BACK):O===Ef?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),y=O}function gt(O){O!==b&&(F&&i.lineWidth(O),b=O)}function Ft(O,St,Z){O?(bt(i.POLYGON_OFFSET_FILL),(N!==St||U!==Z)&&(i.polygonOffset(St,Z),N=St,U=Z)):yt(i.POLYGON_OFFSET_FILL)}function wt(O){O?bt(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function R(O){O===void 0&&(O=i.TEXTURE0+L-1),W!==O&&(i.activeTexture(O),W=O)}function S(O,St,Z){Z===void 0&&(W===null?Z=i.TEXTURE0+L-1:Z=W);let et=ct[Z];et===void 0&&(et={type:void 0,texture:void 0},ct[Z]=et),(et.type!==O||et.texture!==St)&&(W!==Z&&(i.activeTexture(Z),W=Z),i.bindTexture(O,St||ot[O]),et.type=O,et.texture=St)}function G(){let O=ct[W];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Wt(O){Xt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Xt.copy(O))}function It(O){jt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),jt.copy(O))}function ie(O,St){let Z=c.get(St);Z===void 0&&(Z=new WeakMap,c.set(St,Z));let et=Z.get(O);et===void 0&&(et=i.getUniformBlockIndex(St,O.name),Z.set(O,et))}function Yt(O,St){let et=c.get(St).get(O);a.get(St)!==et&&(i.uniformBlockBinding(St,et,O.__bindingPointIndex),a.set(St,et))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},W=null,ct={},h={},u=new WeakMap,p=[],f=null,g=!1,_=null,m=null,d=null,v=null,x=null,M=null,A=null,w=new j(0,0,0),E=0,I=!1,B=null,y=null,b=null,N=null,U=null,Xt.set(0,0,i.canvas.width,i.canvas.height),jt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:bt,disable:yt,bindFramebuffer:Ht,drawBuffers:Ot,useProgram:qt,setBlending:C,setMaterial:pt,setFlipSided:dt,setCullFace:lt,setLineWidth:gt,setPolygonOffset:Ft,setScissorTest:wt,activeTexture:R,bindTexture:S,unbindTexture:G,compressedTexImage2D:$,compressedTexImage3D:tt,texImage2D:Rt,texImage3D:Vt,updateUBOMapping:ie,uniformBlockBinding:Yt,texStorage2D:ne,texStorage3D:ht,texSubImage2D:K,texSubImage3D:Lt,compressedTexSubImage2D:_t,compressedTexSubImage3D:At,scissor:Wt,viewport:It,reset:Me}}function lu(i,t,e,n){let s=Wg(n);switch(e){case Pu:return i*t;case Du:return i*t;case Lu:return i*t*2;case Pl:return i*t/s.components*s.byteLength;case Il:return i*t/s.components*s.byteLength;case Uu:return i*t*2/s.components*s.byteLength;case Dl:return i*t*2/s.components*s.byteLength;case Iu:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case Ll:return i*t*4/s.components*s.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case go:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:case hc:return Math.max(i,16)*Math.max(t,8)/4;case ac:case lc:return Math.max(i,8)*Math.max(t,8)/2;case uc:case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _o:case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nu:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ic:case Dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wg(i){switch(i){case ci:case Au:return{byteLength:1,components:1};case _r:case Ru:case zn:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case $i:case Al:case Vn:return{byteLength:4,components:1};case Cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap,u,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):To("canvas")}function _(R,S,G){let $=1,tt=wt(R);if((tt.width>G||tt.height>G)&&($=G/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let K=Math.floor($*tt.width),Lt=Math.floor($*tt.height);u===void 0&&(u=g(K,Lt));let _t=S?g(K,Lt):u;return _t.width=K,_t.height=Lt,_t.getContext("2d").drawImage(R,0,0,K,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+Lt+")."),_t}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==qe&&R.minFilter!==bn}function d(R){i.generateMipmap(R)}function v(R,S,G,$,tt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),S===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RG8UI),G===i.UNSIGNED_SHORT&&(K=i.RG16UI),G===i.UNSIGNED_INT&&(K=i.RG32UI),G===i.BYTE&&(K=i.RG8I),G===i.SHORT&&(K=i.RG16I),G===i.INT&&(K=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGB8UI),G===i.UNSIGNED_SHORT&&(K=i.RGB16UI),G===i.UNSIGNED_INT&&(K=i.RGB32UI),G===i.BYTE&&(K=i.RGB8I),G===i.SHORT&&(K=i.RGB16I),G===i.INT&&(K=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),G===i.UNSIGNED_INT&&(K=i.RGBA32UI),G===i.BYTE&&(K=i.RGBA8I),G===i.SHORT&&(K=i.RGBA16I),G===i.INT&&(K=i.RGBA32I)),S===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),S===i.RGBA){let Lt=tt?Mo:ae.getTransfer($);G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=Lt===_e?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(R,S){let G;return R?S===null||S===$i||S===ks?G=i.DEPTH24_STENCIL8:S===Vn?G=i.DEPTH32F_STENCIL8:S===_r&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$i||S===ks?G=i.DEPTH_COMPONENT24:S===Vn?G=i.DEPTH_COMPONENT32F:S===_r&&(G=i.DEPTH_COMPONENT16),G}function M(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==qe&&R.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){let S=R.target;S.removeEventListener("dispose",A),E(S),S.isVideoTexture&&h.delete(S)}function w(R){let S=R.target;S.removeEventListener("dispose",w),B(S)}function E(R){let S=n.get(R);if(S.__webglInit===void 0)return;let G=R.source,$=p.get(G);if($){let tt=$[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&I(R),Object.keys($).length===0&&p.delete(G)}n.remove(R)}function I(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let G=R.source,$=p.get(G);delete $[S.__cacheKey],o.memory.textures--}function B(R){let S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let tt=0;tt<S.__webglFramebuffer[$].length;tt++)i.deleteFramebuffer(S.__webglFramebuffer[$][tt]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=R.textures;for(let $=0,tt=G.length;$<tt;$++){let K=n.get(G[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[$])}n.remove(R)}let y=0;function b(){y=0}function N(){let R=y;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),y+=1,R}function U(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function L(R,S){let G=n.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{jt(G,R,S);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function F(R,S){let G=n.get(R);if(R.version>0&&G.__version!==R.version){jt(G,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function D(R,S){let G=n.get(R);if(R.version>0&&G.__version!==R.version){jt(G,R,S);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function Y(R,S){let G=n.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}let W={[Ri]:i.REPEAT,[Zi]:i.CLAMP_TO_EDGE,[oc]:i.MIRRORED_REPEAT},ct={[qe]:i.NEAREST,[Wf]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},xt={[Zf]:i.NEVER,[td]:i.ALWAYS,[Jf]:i.LESS,[Fu]:i.LEQUAL,[$f]:i.EQUAL,[Qf]:i.GEQUAL,[Kf]:i.GREATER,[jf]:i.NOTEQUAL};function vt(R,S){if(S.type===Vn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===bn||S.magFilter===fa||S.magFilter===Fr||S.magFilter===Ji||S.minFilter===bn||S.minFilter===fa||S.minFilter===Fr||S.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,W[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,W[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,W[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ct[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ct[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,xt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qe||S.minFilter!==Fr&&S.minFilter!==Ji||S.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Xt(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));let $=S.source,tt=p.get($);tt===void 0&&(tt={},p.set($,tt));let K=U(S);if(K!==R.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[K].usedTimes++;let Lt=tt[R.__cacheKey];Lt!==void 0&&(tt[R.__cacheKey].usedTimes--,Lt.usedTimes===0&&I(S)),R.__cacheKey=K,R.__webglTexture=tt[K].texture}return G}function jt(R,S,G){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);let tt=Xt(R,S),K=S.source;e.bindTexture($,R.__webglTexture,i.TEXTURE0+G);let Lt=n.get(K);if(K.version!==Lt.__version||tt===!0){e.activeTexture(i.TEXTURE0+G);let _t=ae.getPrimaries(ae.workingColorSpace),At=S.colorSpace===bi?null:ae.getPrimaries(S.colorSpace),ne=S.colorSpace===bi||_t===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ht=_(S.image,!1,s.maxTextureSize);ht=Ft(S,ht);let Rt=r.convert(S.format,S.colorSpace),Vt=r.convert(S.type),Wt=v(S.internalFormat,Rt,Vt,S.colorSpace,S.isVideoTexture);vt($,S);let It,ie=S.mipmaps,Yt=S.isVideoTexture!==!0,Me=Lt.__version===void 0||tt===!0,O=K.dataReady,St=M(S,ht);if(S.isDepthTexture)Wt=x(S.format===Gs,S.type),Me&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Wt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Wt,ht.width,ht.height,0,Rt,Vt,null));else if(S.isDataTexture)if(ie.length>0){Yt&&Me&&e.texStorage2D(i.TEXTURE_2D,St,Wt,ie[0].width,ie[0].height);for(let Z=0,et=ie.length;Z<et;Z++)It=ie[Z],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,It.width,It.height,Rt,Vt,It.data):e.texImage2D(i.TEXTURE_2D,Z,Wt,It.width,It.height,0,Rt,Vt,It.data);S.generateMipmaps=!1}else Yt?(Me&&e.texStorage2D(i.TEXTURE_2D,St,Wt,ht.width,ht.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,Rt,Vt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,Wt,ht.width,ht.height,0,Rt,Vt,ht.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Yt&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Wt,ie[0].width,ie[0].height,ht.depth);for(let Z=0,et=ie.length;Z<et;Z++)if(It=ie[Z],S.format!==rn)if(Rt!==null)if(Yt){if(O)if(S.layerUpdates.size>0){let Mt=lu(It.width,It.height,S.format,S.type);for(let Tt of S.layerUpdates){let se=It.data.subarray(Tt*Mt/It.data.BYTES_PER_ELEMENT,(Tt+1)*Mt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Tt,It.width,It.height,1,Rt,se,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,It.width,It.height,ht.depth,Rt,It.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Wt,It.width,It.height,ht.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,It.width,It.height,ht.depth,Rt,Vt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Wt,It.width,It.height,ht.depth,0,Rt,Vt,It.data)}else{Yt&&Me&&e.texStorage2D(i.TEXTURE_2D,St,Wt,ie[0].width,ie[0].height);for(let Z=0,et=ie.length;Z<et;Z++)It=ie[Z],S.format!==rn?Rt!==null?Yt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,It.width,It.height,Rt,It.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Wt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,It.width,It.height,Rt,Vt,It.data):e.texImage2D(i.TEXTURE_2D,Z,Wt,It.width,It.height,0,Rt,Vt,It.data)}else if(S.isDataArrayTexture)if(Yt){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Wt,ht.width,ht.height,ht.depth),O)if(S.layerUpdates.size>0){let Z=lu(ht.width,ht.height,S.format,S.type);for(let et of S.layerUpdates){let Mt=ht.data.subarray(et*Z/ht.data.BYTES_PER_ELEMENT,(et+1)*Z/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,ht.width,ht.height,1,Rt,Vt,Mt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Vt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Wt,ht.width,ht.height,ht.depth,0,Rt,Vt,ht.data);else if(S.isData3DTexture)Yt?(Me&&e.texStorage3D(i.TEXTURE_3D,St,Wt,ht.width,ht.height,ht.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Vt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Wt,ht.width,ht.height,ht.depth,0,Rt,Vt,ht.data);else if(S.isFramebufferTexture){if(Me)if(Yt)e.texStorage2D(i.TEXTURE_2D,St,Wt,ht.width,ht.height);else{let Z=ht.width,et=ht.height;for(let Mt=0;Mt<St;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Wt,Z,et,0,Rt,Vt,null),Z>>=1,et>>=1}}else if(ie.length>0){if(Yt&&Me){let Z=wt(ie[0]);e.texStorage2D(i.TEXTURE_2D,St,Wt,Z.width,Z.height)}for(let Z=0,et=ie.length;Z<et;Z++)It=ie[Z],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Rt,Vt,It):e.texImage2D(i.TEXTURE_2D,Z,Wt,Rt,Vt,It);S.generateMipmaps=!1}else if(Yt){if(Me){let Z=wt(ht);e.texStorage2D(i.TEXTURE_2D,St,Wt,Z.width,Z.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Vt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Wt,Rt,Vt,ht);m(S)&&d($),Lt.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function J(R,S,G){if(S.image.length!==6)return;let $=Xt(R,S),tt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let K=n.get(tt);if(tt.version!==K.__version||$===!0){e.activeTexture(i.TEXTURE0+G);let Lt=ae.getPrimaries(ae.workingColorSpace),_t=S.colorSpace===bi?null:ae.getPrimaries(S.colorSpace),At=S.colorSpace===bi||Lt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let ne=S.isCompressedTexture||S.image[0].isCompressedTexture,ht=S.image[0]&&S.image[0].isDataTexture,Rt=[];for(let et=0;et<6;et++)!ne&&!ht?Rt[et]=_(S.image[et],!0,s.maxCubemapSize):Rt[et]=ht?S.image[et].image:S.image[et],Rt[et]=Ft(S,Rt[et]);let Vt=Rt[0],Wt=r.convert(S.format,S.colorSpace),It=r.convert(S.type),ie=v(S.internalFormat,Wt,It,S.colorSpace),Yt=S.isVideoTexture!==!0,Me=K.__version===void 0||$===!0,O=tt.dataReady,St=M(S,Vt);vt(i.TEXTURE_CUBE_MAP,S);let Z;if(ne){Yt&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ie,Vt.width,Vt.height);for(let et=0;et<6;et++){Z=Rt[et].mipmaps;for(let Mt=0;Mt<Z.length;Mt++){let Tt=Z[Mt];S.format!==rn?Wt!==null?Yt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,0,0,Tt.width,Tt.height,Wt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,ie,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,0,0,Tt.width,Tt.height,Wt,It,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,ie,Tt.width,Tt.height,0,Wt,It,Tt.data)}}}else{if(Z=S.mipmaps,Yt&&Me){Z.length>0&&St++;let et=wt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ie,et.width,et.height)}for(let et=0;et<6;et++)if(ht){Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Rt[et].width,Rt[et].height,Wt,It,Rt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,Rt[et].width,Rt[et].height,0,Wt,It,Rt[et].data);for(let Mt=0;Mt<Z.length;Mt++){let se=Z[Mt].image[et].image;Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,0,0,se.width,se.height,Wt,It,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,ie,se.width,se.height,0,Wt,It,se.data)}}else{Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Wt,It,Rt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,Wt,It,Rt[et]);for(let Mt=0;Mt<Z.length;Mt++){let Tt=Z[Mt];Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,0,0,Wt,It,Tt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,ie,Wt,It,Tt.image[et])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),K.__version=tt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ot(R,S,G,$,tt,K){let Lt=r.convert(G.format,G.colorSpace),_t=r.convert(G.type),At=v(G.internalFormat,Lt,_t,G.colorSpace);if(!n.get(S).__hasExternalTextures){let ht=Math.max(1,S.width>>K),Rt=Math.max(1,S.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,At,ht,Rt,S.depth,0,Lt,_t,null):e.texImage2D(tt,K,At,ht,Rt,0,Lt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),lt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,tt,n.get(G).__webglTexture,0,dt(S)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,tt,n.get(G).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(R,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){let $=S.depthTexture,tt=$&&$.isDepthTexture?$.type:null,K=x(S.stencilBuffer,tt),Lt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=dt(S);lt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,K,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,R)}else{let $=S.textures;for(let tt=0;tt<$.length;tt++){let K=$[tt],Lt=r.convert(K.format,K.colorSpace),_t=r.convert(K.type),At=v(K.internalFormat,Lt,_t,K.colorSpace),ne=dt(S);G&&lt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,At,S.width,S.height):lt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,At,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,At,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),L(S.depthTexture,0);let $=n.get(S.depthTexture).__webglTexture,tt=dt(S);if(S.depthTexture.format===Ns)lt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(S.depthTexture.format===Gs)lt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ht(R){let S=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",tt)};$.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=$}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");yt(S.__webglFramebuffer,R)}else if(G){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),bt(S.__webglDepthbuffer[$],R,!1);else{let tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),bt(S.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(R,S,G){let $=n.get(R);S!==void 0&&ot($.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ht(R)}function qt(R){let S=R.texture,G=n.get(R),$=n.get(S);R.addEventListener("dispose",w);let tt=R.textures,K=R.isWebGLCubeRenderTarget===!0,Lt=tt.length>1;if(Lt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[_t]=[];for(let At=0;At<S.mipmaps.length;At++)G.__webglFramebuffer[_t][At]=i.createFramebuffer()}else G.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let _t=0;_t<S.mipmaps.length;_t++)G.__webglFramebuffer[_t]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let _t=0,At=tt.length;_t<At;_t++){let ne=n.get(tt[_t]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&lt(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let _t=0;_t<tt.length;_t++){let At=tt[_t];G.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[_t]);let ne=r.convert(At.format,At.colorSpace),ht=r.convert(At.type),Rt=v(At.internalFormat,ne,ht,At.colorSpace,R.isXRRenderTarget===!0),Vt=dt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Rt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,G.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),vt(i.TEXTURE_CUBE_MAP,S);for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)ot(G.__webglFramebuffer[_t][At],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At);else ot(G.__webglFramebuffer[_t],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let _t=0,At=tt.length;_t<At;_t++){let ne=tt[_t],ht=n.get(ne);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),vt(i.TEXTURE_2D,ne),ot(G.__webglFramebuffer,R,ne,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),m(ne)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,$.__webglTexture),vt(_t,S),S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)ot(G.__webglFramebuffer[At],R,S,i.COLOR_ATTACHMENT0,_t,At);else ot(G.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,_t,0);m(S)&&d(_t),e.unbindTexture()}R.depthBuffer&&Ht(R)}function Qt(R){let S=R.textures;for(let G=0,$=S.length;G<$;G++){let tt=S[G];if(m(tt)){let K=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Lt=n.get(tt).__webglTexture;e.bindTexture(K,Lt),d(K),e.unbindTexture()}}}let Q=[],C=[];function pt(R){if(R.samples>0){if(lt(R)===!1){let S=R.textures,G=R.width,$=R.height,tt=i.COLOR_BUFFER_BIT,K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(R),_t=S.length>1;if(_t)for(let At=0;At<S.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let At=0;At<S.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);let ne=n.get(S[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,G,$,0,0,G,$,tt,i.NEAREST),c===!0&&(Q.length=0,C.length=0,Q.push(i.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Q.push(K),C.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let At=0;At<S.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);let ne=n.get(S[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function dt(R){return Math.min(s.maxSamples,R.samples)}function lt(R){let S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function gt(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ft(R,S){let G=R.colorSpace,$=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Ui&&G!==bi&&(ae.getTransfer(G)===_e?($!==rn||tt!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function wt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=b,this.setTexture2D=L,this.setTexture2DArray=F,this.setTexture3D=D,this.setTextureCube=Y,this.rebindTextures=Ot,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=lt}function qg(i,t){function e(n,s=bi){let r,o=ae.getTransfer(s);if(n===ci)return i.UNSIGNED_BYTE;if(n===Rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return i.BYTE;if(n===Ru)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Al)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===Pu)return i.ALPHA;if(n===Iu)return i.RGB;if(n===rn)return i.RGBA;if(n===Du)return i.LUMINANCE;if(n===Lu)return i.LUMINANCE_ALPHA;if(n===Ns)return i.DEPTH_COMPONENT;if(n===Gs)return i.DEPTH_STENCIL;if(n===Pl)return i.RED;if(n===Il)return i.RED_INTEGER;if(n===Uu)return i.RG;if(n===Dl)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===po||n===mo||n===go||n===xo)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ac||n===cc||n===lc||n===hc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===fc||n===dc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uc||n===fc)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pc||n===mc||n===gc||n===xc||n===_c||n===yc||n===vc||n===Mc||n===Ec||n===bc||n===wc||n===Sc||n===Tc||n===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_c)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ec)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===Rc||n===Cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nu||n===Pc||n===Ic||n===Dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Zc=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},st=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yg={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Se({vertexShader:Zg,fragmentShader:Jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends Ci{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,f=null,g=null,_=new Jc,m=e.getContextAttributes(),d=null,v=null,x=[],M=[],A=new nt,w=null,E=new ke;E.layers.enable(1),E.viewport=new xe;let I=new ke;I.layers.enable(2),I.viewport=new xe;let B=[E,I],y=new Zc;y.layers.enable(1),y.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ot=x[J];return ot===void 0&&(ot=new pr,x[J]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(J){let ot=x[J];return ot===void 0&&(ot=new pr,x[J]=ot),ot.getGripSpace()},this.getHand=function(J){let ot=x[J];return ot===void 0&&(ot=new pr,x[J]=ot),ot.getHandSpace()};function U(J){let ot=M.indexOf(J.inputSource);if(ot===-1)return;let bt=x[ot];bt!==void 0&&(bt.update(J.inputSource,J.frame,l||o),bt.dispatchEvent({type:J.type,data:J.inputSource}))}function L(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",F);for(let J=0;J<x.length;J++){let ot=M[J];ot!==null&&(M[J]=null,x[J].disconnect(ot))}b=null,N=null,_.reset(),t.setRenderTarget(d),f=null,p=null,u=null,s=null,v=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",L),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){let ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ln(f.framebufferWidth,f.framebufferHeight,{format:rn,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,bt=null,yt=null;m.depth&&(yt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Gs:Ns,bt=m.stencil?ks:$i);let Ht={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(Ht),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),v=new ln(p.textureWidth,p.textureHeight,{format:rn,type:ci,depthTexture:new No(p.textureWidth,p.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(J){for(let ot=0;ot<J.removed.length;ot++){let bt=J.removed[ot],yt=M.indexOf(bt);yt>=0&&(M[yt]=null,x[yt].disconnect(bt))}for(let ot=0;ot<J.added.length;ot++){let bt=J.added[ot],yt=M.indexOf(bt);if(yt===-1){for(let Ot=0;Ot<x.length;Ot++)if(Ot>=M.length){M.push(bt),yt=Ot;break}else if(M[Ot]===null){M[Ot]=bt,yt=Ot;break}if(yt===-1)break}let Ht=x[yt];Ht&&Ht.connect(bt)}}let D=new P,Y=new P;function W(J,ot,bt){D.setFromMatrixPosition(ot.matrixWorld),Y.setFromMatrixPosition(bt.matrixWorld);let yt=D.distanceTo(Y),Ht=ot.projectionMatrix.elements,Ot=bt.projectionMatrix.elements,qt=Ht[14]/(Ht[10]-1),Qt=Ht[14]/(Ht[10]+1),Q=(Ht[9]+1)/Ht[5],C=(Ht[9]-1)/Ht[5],pt=(Ht[8]-1)/Ht[0],dt=(Ot[8]+1)/Ot[0],lt=qt*pt,gt=qt*dt,Ft=yt/(-pt+dt),wt=Ft*-pt;if(ot.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(wt),J.translateZ(Ft),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ht[10]===-1)J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let R=qt+Ft,S=Qt+Ft,G=lt-wt,$=gt+(yt-wt),tt=Q*Qt/S*R,K=C*Qt/S*R;J.projectionMatrix.makePerspective(G,$,tt,K,R,S),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ct(J,ot){ot===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ot.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ot=J.near,bt=J.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),y.near=I.near=E.near=ot,y.far=I.far=E.far=bt,(b!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,N=y.far);let yt=J.parent,Ht=y.cameras;ct(y,yt);for(let Ot=0;Ot<Ht.length;Ot++)ct(Ht[Ot],yt);Ht.length===2?W(y,E,I):y.projectionMatrix.copy(E.projectionMatrix),xt(J,y,yt)};function xt(J,ot,bt){bt===null?J.matrix.copy(ot.matrixWorld):(J.matrix.copy(bt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ot.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=So*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(J){c=J,p!==null&&(p.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let vt=null;function Xt(J,ot){if(h=ot.getViewerPose(l||o),g=ot,h!==null){let bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let yt=!1;bt.length!==y.cameras.length&&(y.cameras.length=0,yt=!0);for(let Ot=0;Ot<bt.length;Ot++){let qt=bt[Ot],Qt=null;if(f!==null)Qt=f.getViewport(qt);else{let C=u.getViewSubImage(p,qt);Qt=C.viewport,Ot===0&&(t.setRenderTargetTextures(v,C.colorTexture,p.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(v))}let Q=B[Ot];Q===void 0&&(Q=new ke,Q.layers.enable(Ot),Q.viewport=new xe,B[Ot]=Q),Q.matrix.fromArray(qt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(qt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Ot===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),yt===!0&&y.cameras.push(Q)}let Ht=s.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){let Ot=u.getDepthInformation(bt[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,s.renderState)}}for(let bt=0;bt<x.length;bt++){let yt=M[bt],Ht=x[bt];yt!==null&&Ht!==void 0&&Ht.update(yt,ot,l||o)}vt&&vt(J,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}let jt=new zu;jt.setAnimationLoop(Xt),this.setAnimationLoop=function(J){vt=J},this.dispose=function(){}}},Wi=new ze,$g=new te;function Kg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Hu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ie&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ie&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d),x=v.envMap,M=v.envMapRotation;x&&(m.envMap.value=x,Wi.copy(M),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4($g.makeRotationFromEuler(Wi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ie&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){let M=x.program;n.uniformBlockBinding(v,M)}function l(v,x){let M=s[v.id];M===void 0&&(g(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",m));let A=x.program;n.updateUBOMapping(v,A);let w=t.render.frame;r[v.id]!==w&&(p(v),r[v.id]=w)}function h(v){let x=u();v.__bindingPointIndex=x;let M=i.createBuffer(),A=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){let x=s[v.id],M=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,E=M.length;w<E;w++){let I=Array.isArray(M[w])?M[w]:[M[w]];for(let B=0,y=I.length;B<y;B++){let b=I[B];if(f(b,w,B,A)===!0){let N=b.__offset,U=Array.isArray(b.value)?b.value:[b.value],L=0;for(let F=0;F<U.length;F++){let D=U[F],Y=_(D);typeof D=="number"||typeof D=="boolean"?(b.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,N+L,b.__data)):D.isMatrix3?(b.__data[0]=D.elements[0],b.__data[1]=D.elements[1],b.__data[2]=D.elements[2],b.__data[3]=0,b.__data[4]=D.elements[3],b.__data[5]=D.elements[4],b.__data[6]=D.elements[5],b.__data[7]=0,b.__data[8]=D.elements[6],b.__data[9]=D.elements[7],b.__data[10]=D.elements[8],b.__data[11]=0):(D.toArray(b.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,M,A){let w=v.value,E=x+"_"+M;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{let I=A[E];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return A[E]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(v){let x=v.uniforms,M=0,A=16;for(let E=0,I=x.length;E<I;E++){let B=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,b=B.length;y<b;y++){let N=B[y],U=Array.isArray(N.value)?N.value:[N.value];for(let L=0,F=U.length;L<F;L++){let D=U[L],Y=_(D),W=M%A,ct=W%Y.boundary,xt=W+ct;M+=ct,xt!==0&&A-xt<Y.storage&&(M+=A-xt),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=Y.storage}}}let w=M%A;return w>0&&(M+=A-w),v.__size=M,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Ii=class{constructor(t={}){let{canvas:e=nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,d=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=Ti,this.toneMappingExposure=1;let x=this,M=!1,A=0,w=0,E=null,I=-1,B=null,y=new xe,b=new xe,N=null,U=new j(0),L=0,F=e.width,D=e.height,Y=1,W=null,ct=null,xt=new xe(0,0,F,D),vt=new xe(0,0,F,D),Xt=!1,jt=new yr,J=!1,ot=!1,bt=new te,yt=new te,Ht=new P,Ot=new xe,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function Q(){return E===null?Y:1}let C=n;function pt(T,H){return e.getContext(T,H)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ml}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),C===null){let H="webgl2";if(C=pt(H,T),C===null)throw pt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let dt,lt,gt,Ft,wt,R,S,G,$,tt,K,Lt,_t,At,ne,ht,Rt,Vt,Wt,It,ie,Yt,Me,O;function St(){dt=new p0(C),dt.init(),Yt=new qg(C,dt),lt=new c0(C,dt,t,Yt),gt=new Vg(C),lt.reverseDepthBuffer&&gt.buffers.depth.setReversed(!0),Ft=new x0(C),wt=new Pg,R=new Xg(C,dt,gt,wt,lt,Yt,Ft),S=new h0(x),G=new d0(x),$=new wd(C),Me=new o0(C,$),tt=new m0(C,$,Ft,Me),K=new y0(C,tt,$,Ft),Wt=new _0(C,lt,R),ht=new l0(wt),Lt=new Cg(x,S,G,dt,lt,Me,ht),_t=new Kg(x,wt),At=new Dg,ne=new Og(dt),Vt=new r0(x,S,G,gt,K,p,c),Rt=new kg(x,K,lt),O=new jg(C,Ft,lt,gt),It=new a0(C,dt,Ft),ie=new g0(C,dt,Ft),Ft.programs=Lt.programs,x.capabilities=lt,x.extensions=dt,x.properties=wt,x.renderLists=At,x.shadowMap=Rt,x.state=gt,x.info=Ft}St();let Z=new $c(x,C);this.xr=Z,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let T=dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(F,D,!1))},this.getSize=function(T){return T.set(F,D)},this.setSize=function(T,H,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,D=H,e.width=Math.floor(T*Y),e.height=Math.floor(H*Y),X===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(F*Y,D*Y).floor()},this.setDrawingBufferSize=function(T,H,X){F=T,D=H,Y=X,e.width=Math.floor(T*X),e.height=Math.floor(H*X),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(xt)},this.setViewport=function(T,H,X,q){T.isVector4?xt.set(T.x,T.y,T.z,T.w):xt.set(T,H,X,q),gt.viewport(y.copy(xt).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(vt)},this.setScissor=function(T,H,X,q){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,H,X,q),gt.scissor(b.copy(vt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(T){gt.setScissorTest(Xt=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(T=!0,H=!0,X=!0){let q=0;if(T){let z=!1;if(E!==null){let ut=E.texture.format;z=ut===Ll||ut===Dl||ut===Il}if(z){let ut=E.texture.type,Et=ut===ci||ut===$i||ut===_r||ut===ks||ut===Rl||ut===Cl,Dt=Vt.getClearColor(),Ut=Vt.getClearAlpha(),zt=Dt.r,kt=Dt.g,Nt=Dt.b;Et?(f[0]=zt,f[1]=kt,f[2]=Nt,f[3]=Ut,C.clearBufferuiv(C.COLOR,0,f)):(g[0]=zt,g[1]=kt,g[2]=Nt,g[3]=Ut,C.clearBufferiv(C.COLOR,0,g))}else q|=C.COLOR_BUFFER_BIT}H&&(q|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),At.dispose(),ne.dispose(),wt.dispose(),S.dispose(),G.dispose(),K.dispose(),Me.dispose(),O.dispose(),Lt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ch),Z.removeEventListener("sessionend",lh),Oi.stop()};function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let T=Ft.autoReset,H=Rt.enabled,X=Rt.autoUpdate,q=Rt.needsUpdate,z=Rt.type;St(),Ft.autoReset=T,Rt.enabled=H,Rt.autoUpdate=X,Rt.needsUpdate=q,Rt.type=z}function Tt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){let H=T.target;H.removeEventListener("dispose",se),Be(H)}function Be(T){fn(T),wt.remove(T)}function fn(T){let H=wt.get(T).programs;H!==void 0&&(H.forEach(function(X){Lt.releaseProgram(X)}),T.isShaderMaterial&&Lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,X,q,z,ut){H===null&&(H=qt);let Et=z.isMesh&&z.matrixWorld.determinant()<0,Dt=xf(T,H,X,q,z);gt.setMaterial(q,Et);let Ut=X.index,zt=1;if(q.wireframe===!0){if(Ut=tt.getWireframeAttribute(X),Ut===void 0)return;zt=2}let kt=X.drawRange,Nt=X.attributes.position,pe=kt.start*zt,we=(kt.start+kt.count)*zt;ut!==null&&(pe=Math.max(pe,ut.start*zt),we=Math.min(we,(ut.start+ut.count)*zt)),Ut!==null?(pe=Math.max(pe,0),we=Math.min(we,Ut.count)):Nt!=null&&(pe=Math.max(pe,0),we=Math.min(we,Nt.count));let Le=we-pe;if(Le<0||Le===1/0)return;Me.setup(z,q,Dt,X,Ut);let yn,ue=It;if(Ut!==null&&(yn=$.get(Ut),ue=ie,ue.setIndex(yn)),z.isMesh)q.wireframe===!0?(gt.setLineWidth(q.wireframeLinewidth*Q()),ue.setMode(C.LINES)):ue.setMode(C.TRIANGLES);else if(z.isLine){let Bt=q.linewidth;Bt===void 0&&(Bt=1),gt.setLineWidth(Bt*Q()),z.isLineSegments?ue.setMode(C.LINES):z.isLineLoop?ue.setMode(C.LINE_LOOP):ue.setMode(C.LINE_STRIP)}else z.isPoints?ue.setMode(C.POINTS):z.isSprite&&ue.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ue.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))ue.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Bt=z._multiDrawStarts,Je=z._multiDrawCounts,fe=z._multiDrawCount,Nn=Ut?$.get(Ut).bytesPerElement:1,ds=wt.get(q).currentProgram.getUniforms();for(let vn=0;vn<fe;vn++)ds.setValue(C,"_gl_DrawID",vn),ue.render(Bt[vn]/Nn,Je[vn])}else if(z.isInstancedMesh)ue.renderInstances(pe,Le,z.count);else if(X.isInstancedBufferGeometry){let Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Je=Math.min(X.instanceCount,Bt);ue.renderInstances(pe,Le,Je)}else ue.render(pe,Le)};function le(T,H,X){T.transparent===!0&&T.side===Ee&&T.forceSinglePass===!1?(T.side=Ie,T.needsUpdate=!0,Nr(T,H,X),T.side=Ai,T.needsUpdate=!0,Nr(T,H,X),T.side=Ee):Nr(T,H,X)}this.compile=function(T,H,X=null){X===null&&(X=T),m=ne.get(X),m.init(H),v.push(m),X.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),T!==X&&T.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let q=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ut=z.material;if(ut)if(Array.isArray(ut))for(let Et=0;Et<ut.length;Et++){let Dt=ut[Et];le(Dt,X,z),q.add(Dt)}else le(ut,X,z),q.add(ut)}),v.pop(),m=null,q},this.compileAsync=function(T,H,X=null){let q=this.compile(T,H,X);return new Promise(z=>{function ut(){if(q.forEach(function(Et){wt.get(Et).currentProgram.isReady()&&q.delete(Et)}),q.size===0){z(T);return}setTimeout(ut,10)}dt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let dn=null;function jn(T){dn&&dn(T)}function ch(){Oi.stop()}function lh(){Oi.start()}let Oi=new zu;Oi.setAnimationLoop(jn),typeof self!="undefined"&&Oi.setContext(self),this.setAnimationLoop=function(T){dn=T,Z.setAnimationLoop(T),T===null?Oi.stop():Oi.start()},Z.addEventListener("sessionstart",ch),Z.addEventListener("sessionend",lh),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(H),H=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,H,E),m=ne.get(T,v.length),m.init(H),v.push(m),yt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),jt.setFromProjectionMatrix(yt),ot=this.localClippingEnabled,J=ht.init(this.clippingPlanes,ot),_=At.get(T,d.length),_.init(),d.push(_),Z.enabled===!0&&Z.isPresenting===!0){let ut=x.xr.getDepthSensingMesh();ut!==null&&ca(ut,H,-1/0,x.sortObjects)}ca(T,H,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,ct),Qt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Qt&&Vt.addToRenderList(_,T),this.info.render.frame++,J===!0&&ht.beginShadows();let X=m.state.shadowsArray;Rt.render(X,T,H),J===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=_.opaque,z=_.transmissive;if(m.setupLights(),H.isArrayCamera){let ut=H.cameras;if(z.length>0)for(let Et=0,Dt=ut.length;Et<Dt;Et++){let Ut=ut[Et];uh(q,z,T,Ut)}Qt&&Vt.render(T);for(let Et=0,Dt=ut.length;Et<Dt;Et++){let Ut=ut[Et];hh(_,T,Ut,Ut.viewport)}}else z.length>0&&uh(q,z,T,H),Qt&&Vt.render(T),hh(_,T,H);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(x,T,H),Me.resetDefaultState(),I=-1,B=null,v.pop(),v.length>0?(m=v[v.length-1],J===!0&&ht.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function ca(T,H,X,q){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||jt.intersectsSprite(T)){q&&Ot.setFromMatrixPosition(T.matrixWorld).applyMatrix4(yt);let Et=K.update(T),Dt=T.material;Dt.visible&&_.push(T,Et,Dt,X,Ot.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||jt.intersectsObject(T))){let Et=K.update(T),Dt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ot.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ot.copy(Et.boundingSphere.center)),Ot.applyMatrix4(T.matrixWorld).applyMatrix4(yt)),Array.isArray(Dt)){let Ut=Et.groups;for(let zt=0,kt=Ut.length;zt<kt;zt++){let Nt=Ut[zt],pe=Dt[Nt.materialIndex];pe&&pe.visible&&_.push(T,Et,pe,X,Ot.z,Nt)}}else Dt.visible&&_.push(T,Et,Dt,X,Ot.z,null)}}let ut=T.children;for(let Et=0,Dt=ut.length;Et<Dt;Et++)ca(ut[Et],H,X,q)}function hh(T,H,X,q){let z=T.opaque,ut=T.transmissive,Et=T.transparent;m.setupLightsView(X),J===!0&&ht.setGlobalState(x.clippingPlanes,X),q&&gt.viewport(y.copy(q)),z.length>0&&Ur(z,H,X),ut.length>0&&Ur(ut,H,X),Et.length>0&&Ur(Et,H,X),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function uh(T,H,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new ln(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?zn:ci,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let ut=m.state.transmissionRenderTarget[q.id],Et=q.viewport||y;ut.setSize(Et.z,Et.w);let Dt=x.getRenderTarget();x.setRenderTarget(ut),x.getClearColor(U),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear(),Qt&&Vt.render(X);let Ut=x.toneMapping;x.toneMapping=Ti;let zt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),J===!0&&ht.setGlobalState(x.clippingPlanes,q),Ur(T,X,q),R.updateMultisampleRenderTarget(ut),R.updateRenderTargetMipmap(ut),dt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Nt=0,pe=H.length;Nt<pe;Nt++){let we=H[Nt],Le=we.object,yn=we.geometry,ue=we.material,Bt=we.group;if(ue.side===Ee&&Le.layers.test(q.layers)){let Je=ue.side;ue.side=Ie,ue.needsUpdate=!0,fh(Le,X,q,yn,ue,Bt),ue.side=Je,ue.needsUpdate=!0,kt=!0}}kt===!0&&(R.updateMultisampleRenderTarget(ut),R.updateRenderTargetMipmap(ut))}x.setRenderTarget(Dt),x.setClearColor(U,L),zt!==void 0&&(q.viewport=zt),x.toneMapping=Ut}function Ur(T,H,X){let q=H.isScene===!0?H.overrideMaterial:null;for(let z=0,ut=T.length;z<ut;z++){let Et=T[z],Dt=Et.object,Ut=Et.geometry,zt=q===null?Et.material:q,kt=Et.group;Dt.layers.test(X.layers)&&fh(Dt,H,X,Ut,zt,kt)}}function fh(T,H,X,q,z,ut){T.onBeforeRender(x,H,X,q,z,ut),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(x,H,X,q,T,ut),z.transparent===!0&&z.side===Ee&&z.forceSinglePass===!1?(z.side=Ie,z.needsUpdate=!0,x.renderBufferDirect(X,H,q,z,T,ut),z.side=Ai,z.needsUpdate=!0,x.renderBufferDirect(X,H,q,z,T,ut),z.side=Ee):x.renderBufferDirect(X,H,q,z,T,ut),T.onAfterRender(x,H,X,q,z,ut)}function Nr(T,H,X){H.isScene!==!0&&(H=qt);let q=wt.get(T),z=m.state.lights,ut=m.state.shadowsArray,Et=z.state.version,Dt=Lt.getParameters(T,z.state,ut,H,X),Ut=Lt.getProgramCacheKey(Dt),zt=q.programs;q.environment=T.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(T.isMeshStandardMaterial?G:S).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",se),zt=new Map,q.programs=zt);let kt=zt.get(Ut);if(kt!==void 0){if(q.currentProgram===kt&&q.lightsStateVersion===Et)return ph(T,Dt),kt}else Dt.uniforms=Lt.getUniforms(T),T.onBeforeCompile(Dt,x),kt=Lt.acquireProgram(Dt,Ut),zt.set(Ut,kt),q.uniforms=Dt.uniforms;let Nt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Nt.clippingPlanes=ht.uniform),ph(T,Dt),q.needsLights=yf(T),q.lightsStateVersion=Et,q.needsLights&&(Nt.ambientLightColor.value=z.state.ambient,Nt.lightProbe.value=z.state.probe,Nt.directionalLights.value=z.state.directional,Nt.directionalLightShadows.value=z.state.directionalShadow,Nt.spotLights.value=z.state.spot,Nt.spotLightShadows.value=z.state.spotShadow,Nt.rectAreaLights.value=z.state.rectArea,Nt.ltc_1.value=z.state.rectAreaLTC1,Nt.ltc_2.value=z.state.rectAreaLTC2,Nt.pointLights.value=z.state.point,Nt.pointLightShadows.value=z.state.pointShadow,Nt.hemisphereLights.value=z.state.hemi,Nt.directionalShadowMap.value=z.state.directionalShadowMap,Nt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Nt.spotShadowMap.value=z.state.spotShadowMap,Nt.spotLightMatrix.value=z.state.spotLightMatrix,Nt.spotLightMap.value=z.state.spotLightMap,Nt.pointShadowMap.value=z.state.pointShadowMap,Nt.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=kt,q.uniformsList=null,kt}function dh(T){if(T.uniformsList===null){let H=T.currentProgram.getUniforms();T.uniformsList=Bs.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function ph(T,H){let X=wt.get(T);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.batchingColor=H.batchingColor,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function xf(T,H,X,q,z){H.isScene!==!0&&(H=qt),R.resetTextureUnits();let ut=H.fog,Et=q.isMeshStandardMaterial?H.environment:null,Dt=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ui,Ut=(q.isMeshStandardMaterial?G:S).get(q.envMap||Et),zt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,kt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Nt=!!X.morphAttributes.position,pe=!!X.morphAttributes.normal,we=!!X.morphAttributes.color,Le=Ti;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Le=x.toneMapping);let yn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ue=yn!==void 0?yn.length:0,Bt=wt.get(q),Je=m.state.lights;if(J===!0&&(ot===!0||T!==B)){let Cn=T===B&&q.id===I;ht.setState(q,T,Cn)}let fe=!1;q.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Je.state.version||Bt.outputColorSpace!==Dt||z.isBatchedMesh&&Bt.batching===!1||!z.isBatchedMesh&&Bt.batching===!0||z.isBatchedMesh&&Bt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Bt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Bt.instancing===!1||!z.isInstancedMesh&&Bt.instancing===!0||z.isSkinnedMesh&&Bt.skinning===!1||!z.isSkinnedMesh&&Bt.skinning===!0||z.isInstancedMesh&&Bt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Bt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Bt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Bt.instancingMorph===!1&&z.morphTexture!==null||Bt.envMap!==Ut||q.fog===!0&&Bt.fog!==ut||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ht.numPlanes||Bt.numIntersection!==ht.numIntersection)||Bt.vertexAlphas!==zt||Bt.vertexTangents!==kt||Bt.morphTargets!==Nt||Bt.morphNormals!==pe||Bt.morphColors!==we||Bt.toneMapping!==Le||Bt.morphTargetsCount!==ue)&&(fe=!0):(fe=!0,Bt.__version=q.version);let Nn=Bt.currentProgram;fe===!0&&(Nn=Nr(q,H,z));let ds=!1,vn=!1,la=!1,Ne=Nn.getUniforms(),gi=Bt.uniforms;if(gt.useProgram(Nn.program)&&(ds=!0,vn=!0,la=!0),q.id!==I&&(I=q.id,vn=!0),ds||B!==T){lt.reverseDepthBuffer?(bt.copy(T.projectionMatrix),sd(bt),rd(bt),Ne.setValue(C,"projectionMatrix",bt)):Ne.setValue(C,"projectionMatrix",T.projectionMatrix),Ne.setValue(C,"viewMatrix",T.matrixWorldInverse);let Cn=Ne.map.cameraPosition;Cn!==void 0&&Cn.setValue(C,Ht.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&Ne.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ne.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),B!==T&&(B=T,vn=!0,la=!0)}if(z.isSkinnedMesh){Ne.setOptional(C,z,"bindMatrix"),Ne.setOptional(C,z,"bindMatrixInverse");let Cn=z.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ne.setValue(C,"boneTexture",Cn.boneTexture,R))}z.isBatchedMesh&&(Ne.setOptional(C,z,"batchingTexture"),Ne.setValue(C,"batchingTexture",z._matricesTexture,R),Ne.setOptional(C,z,"batchingIdTexture"),Ne.setValue(C,"batchingIdTexture",z._indirectTexture,R),Ne.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&Ne.setValue(C,"batchingColorTexture",z._colorsTexture,R));let ha=X.morphAttributes;if((ha.position!==void 0||ha.normal!==void 0||ha.color!==void 0)&&Wt.update(z,X,Nn),(vn||Bt.receiveShadow!==z.receiveShadow)&&(Bt.receiveShadow=z.receiveShadow,Ne.setValue(C,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(gi.envMap.value=Ut,gi.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(gi.envMapIntensity.value=H.environmentIntensity),vn&&(Ne.setValue(C,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&_f(gi,la),ut&&q.fog===!0&&_t.refreshFogUniforms(gi,ut),_t.refreshMaterialUniforms(gi,q,Y,D,m.state.transmissionRenderTarget[T.id]),Bs.upload(C,dh(Bt),gi,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Bs.upload(C,dh(Bt),gi,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ne.setValue(C,"center",z.center),Ne.setValue(C,"modelViewMatrix",z.modelViewMatrix),Ne.setValue(C,"normalMatrix",z.normalMatrix),Ne.setValue(C,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Cn=q.uniformsGroups;for(let ua=0,vf=Cn.length;ua<vf;ua++){let mh=Cn[ua];O.update(mh,Nn),O.bind(mh,Nn)}}return Nn}function _f(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function yf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,H,X){wt.get(T.texture).__webglTexture=H,wt.get(T.depthTexture).__webglTexture=X;let q=wt.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){let X=wt.get(T);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,X=0){E=T,A=H,w=X;let q=!0,z=null,ut=!1,Et=!1;if(T){let Ut=wt.get(T);if(Ut.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(C.FRAMEBUFFER,null),q=!1;else if(Ut.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Ut.__hasExternalTextures)R.rebindTextures(T,wt.get(T.texture).__webglTexture,wt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Nt=T.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&wt.has(Nt)&&(T.width!==Nt.image.width||T.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}let zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Et=!0);let kt=wt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[H])?z=kt[H][X]:z=kt[H],ut=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?z=wt.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?z=kt[X]:z=kt,y.copy(T.viewport),b.copy(T.scissor),N=T.scissorTest}else y.copy(xt).multiplyScalar(Y).floor(),b.copy(vt).multiplyScalar(Y).floor(),N=Xt;if(gt.bindFramebuffer(C.FRAMEBUFFER,z)&&q&&gt.drawBuffers(T,z),gt.viewport(y),gt.scissor(b),gt.setScissorTest(N),ut){let Ut=wt.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ut.__webglTexture,X)}else if(Et){let Ut=wt.get(T.texture),zt=H||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ut.__webglTexture,X||0,zt)}I=-1},this.readRenderTargetPixels=function(T,H,X,q,z,ut,Et){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(Dt=Dt[Et]),Dt){gt.bindFramebuffer(C.FRAMEBUFFER,Dt);try{let Ut=T.texture,zt=Ut.format,kt=Ut.type;if(!lt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-q&&X>=0&&X<=T.height-z&&C.readPixels(H,X,q,z,Yt.convert(zt),Yt.convert(kt),ut)}finally{let Ut=E!==null?wt.get(E).__webglFramebuffer:null;gt.bindFramebuffer(C.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(T,H,X,q,z,ut,Et){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(Dt=Dt[Et]),Dt){let Ut=T.texture,zt=Ut.format,kt=Ut.type;if(!lt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-q&&X>=0&&X<=T.height-z){gt.bindFramebuffer(C.FRAMEBUFFER,Dt);let Nt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Nt),C.bufferData(C.PIXEL_PACK_BUFFER,ut.byteLength,C.STREAM_READ),C.readPixels(H,X,q,z,Yt.convert(zt),Yt.convert(kt),0);let pe=E!==null?wt.get(E).__webglFramebuffer:null;gt.bindFramebuffer(C.FRAMEBUFFER,pe);let we=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await id(C,we,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Nt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ut),C.deleteBuffer(Nt),C.deleteSync(we),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,H=null,X=0){T.isTexture!==!0&&(yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);let q=Math.pow(2,-X),z=Math.floor(T.image.width*q),ut=Math.floor(T.image.height*q),Et=H!==null?H.x:0,Dt=H!==null?H.y:0;R.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,Et,Dt,z,ut),gt.unbindTexture()},this.copyTextureToTexture=function(T,H,X=null,q=null,z=0){T.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],H=arguments[2],z=arguments[3]||0,X=null);let ut,Et,Dt,Ut,zt,kt;X!==null?(ut=X.max.x-X.min.x,Et=X.max.y-X.min.y,Dt=X.min.x,Ut=X.min.y):(ut=T.image.width,Et=T.image.height,Dt=0,Ut=0),q!==null?(zt=q.x,kt=q.y):(zt=0,kt=0);let Nt=Yt.convert(H.format),pe=Yt.convert(H.type);R.setTexture2D(H,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);let we=C.getParameter(C.UNPACK_ROW_LENGTH),Le=C.getParameter(C.UNPACK_IMAGE_HEIGHT),yn=C.getParameter(C.UNPACK_SKIP_PIXELS),ue=C.getParameter(C.UNPACK_SKIP_ROWS),Bt=C.getParameter(C.UNPACK_SKIP_IMAGES),Je=T.isCompressedTexture?T.mipmaps[z]:T.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Je.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Je.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Dt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ut),T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,z,zt,kt,ut,Et,Nt,pe,Je.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,z,zt,kt,Je.width,Je.height,Nt,Je.data):C.texSubImage2D(C.TEXTURE_2D,z,zt,kt,ut,Et,Nt,pe,Je),C.pixelStorei(C.UNPACK_ROW_LENGTH,we),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Le),C.pixelStorei(C.UNPACK_SKIP_PIXELS,yn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ue),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Bt),z===0&&H.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(T,H,X=null,q=null,z=0){T.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,T=arguments[2],H=arguments[3],z=arguments[4]||0);let ut,Et,Dt,Ut,zt,kt,Nt,pe,we,Le=T.isCompressedTexture?T.mipmaps[z]:T.image;X!==null?(ut=X.max.x-X.min.x,Et=X.max.y-X.min.y,Dt=X.max.z-X.min.z,Ut=X.min.x,zt=X.min.y,kt=X.min.z):(ut=Le.width,Et=Le.height,Dt=Le.depth,Ut=0,zt=0,kt=0),q!==null?(Nt=q.x,pe=q.y,we=q.z):(Nt=0,pe=0,we=0);let yn=Yt.convert(H.format),ue=Yt.convert(H.type),Bt;if(H.isData3DTexture)R.setTexture3D(H,0),Bt=C.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)R.setTexture2DArray(H,0),Bt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);let Je=C.getParameter(C.UNPACK_ROW_LENGTH),fe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Nn=C.getParameter(C.UNPACK_SKIP_PIXELS),ds=C.getParameter(C.UNPACK_SKIP_ROWS),vn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Le.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Le.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,kt),T.isDataTexture||T.isData3DTexture?C.texSubImage3D(Bt,z,Nt,pe,we,ut,Et,Dt,yn,ue,Le.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(Bt,z,Nt,pe,we,ut,Et,Dt,yn,Le.data):C.texSubImage3D(Bt,z,Nt,pe,we,ut,Et,Dt,yn,ue,Le),C.pixelStorei(C.UNPACK_ROW_LENGTH,Je),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ds),C.pixelStorei(C.UNPACK_SKIP_IMAGES,vn),z===0&&H.generateMipmaps&&C.generateMipmap(Bt),gt.unbindTexture()},this.initRenderTarget=function(T){wt.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),gt.unbindTexture()},this.resetState=function(){A=0,w=0,E=null,gt.reset(),Me.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Nl?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===qo?"display-p3":"srgb"}};var Ki=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new j(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qn=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ze,this.environmentIntensity=1,this.environmentRotation=new ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Uc,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new P,vr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ji=class extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rs,ar=new P,Cs=new P,Ps=new P,Is=new nt,cr=new nt,Xu=new te,io=new P,lr=new P,so=new P,hu=new nt,Va=new nt,uu=new nt,Xs=class extends Ge{constructor(t=new ji){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fo(e,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new vr(n,3,0,!1)),Rs.setAttribute("uv",new vr(n,2,3,!1))}this.geometry=Rs,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),Xu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Ps.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ro(io.set(-.5,-.5,0),Ps,o,Cs,s,r),ro(lr.set(.5,-.5,0),Ps,o,Cs,s,r),ro(so.set(.5,.5,0),Ps,o,Cs,s,r),hu.set(0,0),Va.set(1,0),uu.set(1,1);let a=t.ray.intersectTriangle(io,lr,so,!1,ar);if(a===null&&(ro(lr.set(-.5,.5,0),Ps,o,Cs,s,r),Va.set(0,1),a=t.ray.intersectTriangle(io,so,lr,!1,ar),a===null))return;let c=t.ray.origin.distanceTo(ar);c<t.near||c>t.far||e.push({distance:c,point:ar.clone(),uv:wi.getInterpolation(ar,io,lr,so,hu,Va,uu,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ro(i,t,e,n,s,r){Is.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(cr.x=r*Is.x-s*Is.y,cr.y=s*Is.x+r*Is.y):cr.copy(Is),i.copy(t),i.x+=cr.x,i.y+=cr.y,i.applyMatrix4(Xu)}var Di=class extends mn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=qe,h=qe,u,p){super(null,o,a,c,l,h,s,r,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mr=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ds=new te,fu=new te,oo=[],du=new gn,Qg=new te,hr=new it,ur=new Pi,hi=class extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),du.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),ur.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),fu.multiplyMatrices(n,Ds),hr.matrixWorld=fu,hr.raycast(t,oo);for(let o=0,a=oo.length;o<a;o++){let c=oo[o];c.instanceId=r,c.object=this,e.push(c)}oo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Di(new Float32Array(s*this.count),s,this.count,Pl,Vn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Yn=class extends Xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pu=new te,Kc=new Co,ao=new Pi,co=new P,ui=class extends Ge{constructor(t=new me,e=new Yn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,t.ray.intersectsSphere(ao)===!1)return;pu.copy(s).invert(),Kc.copy(t.ray).applyMatrix4(pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let p=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=p,_=f;g<_;g++){let m=l.getX(g);co.fromBufferAttribute(u,m),mu(co,m,c,s,t,e,this)}}else{let p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=p,_=f;g<_;g++)co.fromBufferAttribute(u,g),mu(co,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function mu(i,t,e,n,s,r,o){let a=Kc.distanceSqToPoint(i);if(a<e){let c=new P;Kc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var wn=class extends mn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,f=(o-h)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new nt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],o=[],a=new P,c=new te;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos($e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos($e(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Er=class extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*u+this.aX,l=p*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},jc=class extends Er{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Bl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,f*=h,s(o,a,p,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var lo=new P,Wa=new Bl,Xa=new Bl,qa=new Bl,Qc=class extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(lo.subVectors(s[0],s[1]).add(s[0]),l=lo);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(lo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Wa.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,g,_,m),Xa.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,g,_,m),qa.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),Xa.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),qa.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(Wa.calc(c),Xa.calc(c),qa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function tx(i,t){let e=1-i;return e*e*t}function ex(i,t){return 2*(1-i)*i*t}function nx(i,t){return i*i*t}function mr(i,t,e,n){return tx(i,t)+ex(i,e)+nx(i,n)}function ix(i,t){let e=1-i;return e*e*e*t}function sx(i,t){let e=1-i;return 3*e*e*i*t}function rx(i,t){return 3*(1-i)*i*i*t}function ox(i,t){return i*i*i*t}function gr(i,t,e,n,s){return ix(i,t)+sx(i,e)+rx(i,n)+ox(i,s)}var Bo=class extends In{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},tl=class extends In{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y),gr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oo=class extends In{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends In{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends In{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nl=class extends In{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y),mr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(gu(a,c.x,l.x,h.x,u.x),gu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},il=Object.freeze({__proto__:null,ArcCurve:jc,CatmullRomCurve3:Qc,CubicBezierCurve:Bo,CubicBezierCurve3:tl,EllipseCurve:Er,LineCurve:Oo,LineCurve3:el,QuadraticBezierCurve:Ho,QuadraticBezierCurve3:nl,SplineCurve:zo}),sl=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new il[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new il[s.type]().fromJSON(s))}return this}},br=class extends sl{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Oo(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ho(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Bo(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new zo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Er(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},rl=class i extends me{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=$e(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new P,p=new nt,f=new P,g=new P,_=new P,m=0,d=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,f.x=d*1,f.y=-m,f.z=d*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,f.x=d*1,f.y=-m,f.z=d*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=e;v++){let x=n+v*h*s,M=Math.sin(x),A=Math.cos(x);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*M,u.y=t[w].y,u.z=t[w].x*A,o.push(u.x,u.y,u.z),p.x=v/e,p.y=w/(t.length-1),a.push(p.x,p.y);let E=c[3*w+0]*M,I=c[3*w+1],B=c[3*w+0]*A;l.push(E,I,B)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){let M=x+v*t.length,A=M,w=M+t.length,E=M+t.length+1,I=M+1;r.push(A,w,I),r.push(E,I,w)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},De=class i extends rl{constructor(t=1,e=1,n=4,s=8){let r=new br;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Dn=class i extends me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new P,h=new nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ee=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],f=[],g=0,_=[],m=n/2,d=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(p,3)),this.setAttribute("uv",new Kt(f,2));function v(){let M=new P,A=new P,w=0,E=(e-t)/n;for(let I=0;I<=r;I++){let B=[],y=I/r,b=y*(e-t)+t;for(let N=0;N<=s;N++){let U=N/s,L=U*c+a,F=Math.sin(L),D=Math.cos(L);A.x=b*F,A.y=-y*n+m,A.z=b*D,u.push(A.x,A.y,A.z),M.set(F,E,D).normalize(),p.push(M.x,M.y,M.z),f.push(U,1-y),B.push(g++)}_.push(B)}for(let I=0;I<s;I++)for(let B=0;B<r;B++){let y=_[B][I],b=_[B+1][I],N=_[B+1][I+1],U=_[B][I+1];t>0&&(h.push(y,b,U),w+=3),e>0&&(h.push(b,N,U),w+=3)}l.addGroup(d,w,0),d+=w}function x(M){let A=g,w=new nt,E=new P,I=0,B=M===!0?t:e,y=M===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*y,0),p.push(0,y,0),f.push(.5,.5),g++;let b=g;for(let N=0;N<=s;N++){let L=N/s*c+a,F=Math.cos(L),D=Math.sin(L);E.x=B*D,E.y=m*y,E.z=B*F,u.push(E.x,E.y,E.z),p.push(0,y,0),w.x=F*.5+.5,w.y=D*.5*y+.5,f.push(w.x,w.y),g++}for(let N=0;N<s;N++){let U=A+N,L=b+N;M===!0?h.push(L,L+1,U):h.push(L+1,L,U),I+=3}l.addGroup(d,I,M===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},be=class i extends ee{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wr=class i extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let x=new P,M=new P,A=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],x),f(e[w+1],M),f(e[w+2],A),c(x,M,A,v)}function c(v,x,M,A){let w=A+1,E=[];for(let I=0;I<=w;I++){E[I]=[];let B=v.clone().lerp(M,I/w),y=x.clone().lerp(M,I/w),b=w-I;for(let N=0;N<=b;N++)N===0&&I===w?E[I][N]=B:E[I][N]=B.clone().lerp(y,N/b)}for(let I=0;I<w;I++)for(let B=0;B<2*(w-I)-1;B++){let y=Math.floor(B/2);B%2===0?(p(E[I][y+1]),p(E[I+1][y]),p(E[I][y])):(p(E[I][y+1]),p(E[I+1][y+1]),p(E[I+1][y]))}}function l(v){let x=new P;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(v),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let v=new P;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let M=m(v)/2/Math.PI+.5,A=d(v)/Math.PI+.5;o.push(M,1-A)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let x=o[v+0],M=o[v+2],A=o[v+4],w=Math.max(x,M,A),E=Math.min(x,M,A);w>.9&&E<.1&&(x<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function p(v){r.push(v.x,v.y,v.z)}function f(v,x){let M=v*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let v=new P,x=new P,M=new P,A=new P,w=new nt,E=new nt,I=new nt;for(let B=0,y=0;B<r.length;B+=9,y+=6){v.set(r[B+0],r[B+1],r[B+2]),x.set(r[B+3],r[B+4],r[B+5]),M.set(r[B+6],r[B+7],r[B+8]),w.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),A.copy(v).add(x).add(M).divideScalar(3);let b=m(A);_(w,y+0,v,b),_(E,y+2,x,b),_(I,y+4,M,b)}}function _(v,x,M,A){A<0&&v.x===1&&(o[x]=v.x-1),M.x===0&&M.z===0&&(o[x]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Sr=class i extends wr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Qi=class extends br{constructor(t){super(t),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new br().fromJSON(s))}return this}},ax={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=qu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,p,f;if(n&&(r=fx(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],p=i[g+1],u<a&&(a=u),p<c&&(c=p),u>l&&(l=u),p>h&&(h=p);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Tr(r,o,e,a,c,f,0),o}};function qu(i,t,e,n,s){let r,o;if(s===bx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=xu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=xu(r,i[r],i[r+1],o);return o&&Zo(o,o.next)&&(Rr(o),o=o.next),o}function ts(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Zo(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Tr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&xx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?lx(i,n,s,r):cx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Rr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=hx(ts(i),t,e),Tr(i,t,e,n,s,r,2)):o===2&&ux(i,t,e,n,s,r):Tr(ts(i),t,e,n,s,r,1);break}}}function cx(i){let t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,p=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=f&&Us(s,a,r,c,o,l,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Pe(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,p=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<p?h:p:u<p?u:p,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>p?h:p:u>p?u:p,d=ol(f,g,t,e,n),v=ol(_,m,t,e,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=d&&M&&M.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Us(a,h,c,u,l,p,x.x,x.y)&&Pe(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Us(a,h,c,u,l,p,M.x,M.y)&&Pe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=d;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Us(a,h,c,u,l,p,x.x,x.y)&&Pe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Us(a,h,c,u,l,p,M.x,M.y)&&Pe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function hx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Zo(s,r)&&Yu(s,n,n.next,r)&&Ar(s,r)&&Ar(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Rr(n),Rr(n.next),n=i=r),n=n.next}while(n!==i);return ts(n)}function ux(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vx(o,a)){let c=Zu(o,a);o=ts(o,o.next),c=ts(c,c.next),Tr(o,t,e,n,s,r,0),Tr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function fx(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=qu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(yx(l));for(s.sort(dx),r=0;r<s.length;r++)e=px(s[r],e);return e}function dx(i,t){return i.x-t.x}function px(i,t){let e=mx(i,t);if(!e)return t;let n=Zu(e,i);return ts(n,n.next),ts(e,e.next)}function mx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Us(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ar(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&gx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function gx(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function xx(i,t,e,n){let s=i;do s.z===0&&(s.z=ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_x(s)}function _x(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function yx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Us(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function vx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Mx(i,t)&&(Ar(i,t)&&Ar(t,i)&&Ex(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||Zo(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Zo(i,t){return i.x===t.x&&i.y===t.y}function Yu(i,t,e,n){let s=uo(Pe(i,t,e)),r=uo(Pe(i,t,n)),o=uo(Pe(e,n,i)),a=uo(Pe(e,n,t));return!!(s!==r&&o!==a||s===0&&ho(i,e,t)||r===0&&ho(i,n,t)||o===0&&ho(e,i,n)||a===0&&ho(e,t,n))}function ho(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function uo(i){return i>0?1:i<0?-1:0}function Mx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ar(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function Ex(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Zu(i,t){let e=new al(i.i,i.x,i.y),n=new al(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xu(i,t,e,n){let s=new al(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function al(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var xr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];_u(t),yu(n,t);let o=t.length;e.forEach(_u);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,yu(n,e[c]);let a=ax.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function _u(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var qs=class i extends me{constructor(t=new Qi([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:wx,x,M=!1,A,w,E,I;d&&(x=d.getSpacedPoints(h),M=!0,p=!1,A=d.computeFrenetFrames(h,!1),w=new P,E=new P,I=new P),p||(m=0,f=0,g=0,_=0);let B=a.extractPoints(l),y=B.shape,b=B.holes;if(!xr.isClockWise(y)){y=y.reverse();for(let Q=0,C=b.length;Q<C;Q++){let pt=b[Q];xr.isClockWise(pt)&&(b[Q]=pt.reverse())}}let U=xr.triangulateShape(y,b),L=y;for(let Q=0,C=b.length;Q<C;Q++){let pt=b[Q];y=y.concat(pt)}function F(Q,C,pt){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(C,pt)}let D=y.length,Y=U.length;function W(Q,C,pt){let dt,lt,gt,Ft=Q.x-C.x,wt=Q.y-C.y,R=pt.x-Q.x,S=pt.y-Q.y,G=Ft*Ft+wt*wt,$=Ft*S-wt*R;if(Math.abs($)>Number.EPSILON){let tt=Math.sqrt(G),K=Math.sqrt(R*R+S*S),Lt=C.x-wt/tt,_t=C.y+Ft/tt,At=pt.x-S/K,ne=pt.y+R/K,ht=((At-Lt)*S-(ne-_t)*R)/(Ft*S-wt*R);dt=Lt+Ft*ht-Q.x,lt=_t+wt*ht-Q.y;let Rt=dt*dt+lt*lt;if(Rt<=2)return new nt(dt,lt);gt=Math.sqrt(Rt/2)}else{let tt=!1;Ft>Number.EPSILON?R>Number.EPSILON&&(tt=!0):Ft<-Number.EPSILON?R<-Number.EPSILON&&(tt=!0):Math.sign(wt)===Math.sign(S)&&(tt=!0),tt?(dt=-wt,lt=Ft,gt=Math.sqrt(G)):(dt=Ft,lt=wt,gt=Math.sqrt(G/2))}return new nt(dt/gt,lt/gt)}let ct=[];for(let Q=0,C=L.length,pt=C-1,dt=Q+1;Q<C;Q++,pt++,dt++)pt===C&&(pt=0),dt===C&&(dt=0),ct[Q]=W(L[Q],L[pt],L[dt]);let xt=[],vt,Xt=ct.concat();for(let Q=0,C=b.length;Q<C;Q++){let pt=b[Q];vt=[];for(let dt=0,lt=pt.length,gt=lt-1,Ft=dt+1;dt<lt;dt++,gt++,Ft++)gt===lt&&(gt=0),Ft===lt&&(Ft=0),vt[dt]=W(pt[dt],pt[gt],pt[Ft]);xt.push(vt),Xt=Xt.concat(vt)}for(let Q=0;Q<m;Q++){let C=Q/m,pt=f*Math.cos(C*Math.PI/2),dt=g*Math.sin(C*Math.PI/2)+_;for(let lt=0,gt=L.length;lt<gt;lt++){let Ft=F(L[lt],ct[lt],dt);yt(Ft.x,Ft.y,-pt)}for(let lt=0,gt=b.length;lt<gt;lt++){let Ft=b[lt];vt=xt[lt];for(let wt=0,R=Ft.length;wt<R;wt++){let S=F(Ft[wt],vt[wt],dt);yt(S.x,S.y,-pt)}}}let jt=g+_;for(let Q=0;Q<D;Q++){let C=p?F(y[Q],Xt[Q],jt):y[Q];M?(E.copy(A.normals[0]).multiplyScalar(C.x),w.copy(A.binormals[0]).multiplyScalar(C.y),I.copy(x[0]).add(E).add(w),yt(I.x,I.y,I.z)):yt(C.x,C.y,0)}for(let Q=1;Q<=h;Q++)for(let C=0;C<D;C++){let pt=p?F(y[C],Xt[C],jt):y[C];M?(E.copy(A.normals[Q]).multiplyScalar(pt.x),w.copy(A.binormals[Q]).multiplyScalar(pt.y),I.copy(x[Q]).add(E).add(w),yt(I.x,I.y,I.z)):yt(pt.x,pt.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){let C=Q/m,pt=f*Math.cos(C*Math.PI/2),dt=g*Math.sin(C*Math.PI/2)+_;for(let lt=0,gt=L.length;lt<gt;lt++){let Ft=F(L[lt],ct[lt],dt);yt(Ft.x,Ft.y,u+pt)}for(let lt=0,gt=b.length;lt<gt;lt++){let Ft=b[lt];vt=xt[lt];for(let wt=0,R=Ft.length;wt<R;wt++){let S=F(Ft[wt],vt[wt],dt);M?yt(S.x,S.y+x[h-1].y,x[h-1].x+pt):yt(S.x,S.y,u+pt)}}}J(),ot();function J(){let Q=s.length/3;if(p){let C=0,pt=D*C;for(let dt=0;dt<Y;dt++){let lt=U[dt];Ht(lt[2]+pt,lt[1]+pt,lt[0]+pt)}C=h+m*2,pt=D*C;for(let dt=0;dt<Y;dt++){let lt=U[dt];Ht(lt[0]+pt,lt[1]+pt,lt[2]+pt)}}else{for(let C=0;C<Y;C++){let pt=U[C];Ht(pt[2],pt[1],pt[0])}for(let C=0;C<Y;C++){let pt=U[C];Ht(pt[0]+D*h,pt[1]+D*h,pt[2]+D*h)}}n.addGroup(Q,s.length/3-Q,0)}function ot(){let Q=s.length/3,C=0;bt(L,C),C+=L.length;for(let pt=0,dt=b.length;pt<dt;pt++){let lt=b[pt];bt(lt,C),C+=lt.length}n.addGroup(Q,s.length/3-Q,1)}function bt(Q,C){let pt=Q.length;for(;--pt>=0;){let dt=pt,lt=pt-1;lt<0&&(lt=Q.length-1);for(let gt=0,Ft=h+m*2;gt<Ft;gt++){let wt=D*gt,R=D*(gt+1),S=C+dt+wt,G=C+lt+wt,$=C+lt+R,tt=C+dt+R;Ot(S,G,$,tt)}}}function yt(Q,C,pt){c.push(Q),c.push(C),c.push(pt)}function Ht(Q,C,pt){qt(Q),qt(C),qt(pt);let dt=s.length/3,lt=v.generateTopUV(n,s,dt-3,dt-2,dt-1);Qt(lt[0]),Qt(lt[1]),Qt(lt[2])}function Ot(Q,C,pt,dt){qt(Q),qt(C),qt(dt),qt(C),qt(pt),qt(dt);let lt=s.length/3,gt=v.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);Qt(gt[0]),Qt(gt[1]),Qt(gt[3]),Qt(gt[1]),Qt(gt[2]),Qt(gt[3])}function qt(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function Qt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Sx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new il[s.type]().fromJSON(s)),new i(n,t.options)}},wx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,c),new nt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],p=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new nt(o,1-c),new nt(l,1-u),new nt(p,1-g),new nt(_,1-d)]:[new nt(a,1-c),new nt(h,1-u),new nt(f,1-g),new nt(m,1-d)]}};function Sx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Zn=class i extends wr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Sn=class i extends wr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ys=class i extends me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,p=(e-t)/s,f=new P,g=new nt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let d=r+m/n*o;f.x=u*Math.cos(d),f.y=u*Math.sin(d),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=p}for(let _=0;_<s;_++){let m=_*(n+1);for(let d=0;d<n;d++){let v=d+m,x=v,M=v+n+1,A=v+n+2,w=v+1;a.push(x,M,w),a.push(M,A,w)}}this.setIndex(a),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Gt=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new P,p=new P,f=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let v=[],x=d/n,M=0;d===0&&o===0?M=.5/e:d===n&&c===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){let w=A/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),m.push(w+M,1-x),v.push(l++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){let x=h[d][v+1],M=h[d][v],A=h[d+1][v],w=h[d+1][v+1];(d!==0||o>0)&&f.push(x,M,w),(d!==n-1||c<Math.PI)&&f.push(M,A,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ke=class i extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new P,u=new P,p=new P;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,d=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(_,m,v),o.push(m,d,v)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ko=class extends Se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ye=class extends Xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new j(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ze,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ln=class extends Xn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new j(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function fo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Tx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vh:r=t,a=2*e-n;break;case Mh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case vh:o=t,c=2*n-e;break;case Mh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,d=-p*m+2*p*_-p*g,v=(1+p)*m+(-1.5-2*p)*_+(-.5+p)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let A=0;A!==a;++A)r[A]=d*o[h+A]+v*o[l+A]+x*o[c+A]+M*o[u+A];return r}},ll=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*u+o[c+p]*h;return r}},hl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fo(e,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fo(t.times,Array),values:fo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vo:e=this.InterpolantFactoryMethodDiscrete;break;case Lc:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vo;case this.InterpolantFactoryMethodLinear:return Lc;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Tx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,p=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[p+g]||_!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,p=o*n;for(let f=0;f!==n;++f)e[p+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Lc;var es=class extends Hn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=vo;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends Hn{};ul.prototype.ValueTypeName="color";var fl=class extends Hn{};fl.prototype.ValueTypeName="number";var dl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)hn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Go=class extends Hn{InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}};Go.prototype.ValueTypeName="quaternion";Go.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Hn{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=vo;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends Hn{};pl.prototype.ValueTypeName="vector";var ml=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Ax=new ml,gl=class{constructor(t){this.manager=t!==void 0?t:Ax,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var is=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new j(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Li=class extends is{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new j(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ya=new te,vu=new P,Mu=new P,Cr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;vu.setFromMatrixPosition(t.matrixWorld),e.position.copy(vu),Mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mu),e.updateMatrixWorld(),Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xl=class extends Cr{constructor(){super(new ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=So*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Vo=class extends is{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Eu=new te,fr=new P,Za=new P,_l=class extends Cr{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fr.setFromMatrixPosition(t.matrixWorld),n.position.copy(fr),Za.copy(n.position),Za.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Za),n.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),Eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu)}},je=class extends is{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _l}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},yl=class extends Cr{constructor(){super(new li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fi=class extends is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new yl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ss=class extends is{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=bu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function bu(){return performance.now()}var Ol="\\[\\]\\.:\\/",Rx=new RegExp("["+Ol+"]","g"),Hl="[^"+Ol+"]",Cx="[^"+Ol.replace("\\.","")+"]",Px=/((?:WC+[\/:])*)/.source.replace("WC",Hl),Ix=/(WCOD+)?/.source.replace("WCOD",Cx),Dx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hl),Lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hl),Ux=new RegExp("^"+Px+Ix+Dx+Lx+"$"),Nx=["material","materials","bones","map"],vl=class{constructor(t,e,n){let s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rx,"")}static parseTrackName(t){let e=Ux.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Nx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=vl;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p_=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);var $o={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Fx=new li(-1,1,1,-1,0,1),zl=class extends me{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}},Bx=new zl,Ni=class{constructor(t){this._mesh=new it(Bx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Fx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var $s=class extends Tn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Jn.clone(t.uniforms),this.material=new Se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ni(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Dr=class extends Tn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ko=class extends Tn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var jo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $s($o),this.copyPass.material.blending=Wn,this.clock=new Wo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Dr!==void 0&&(o instanceof Dr?n=!0:o instanceof Ko&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Qo=class extends Tn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new j}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Ju={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new j(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ks=class i extends Tn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new j(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(r,o,{type:zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new ln(r,o,{type:zn});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new ln(r,o,{type:zn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Ju;this.highPassUniforms=Jn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=$o;this.copyUniforms=Jn.clone(h.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:pn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new j,this.oldClearAlpha=1,this.basic=new $t,this.fsQuad=new Ni(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ks.BlurDirectionX=new nt(1,0);Ks.BlurDirectionY=new nt(0,1);var $u={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ta=class extends Tn{constructor(){super();let t=$u;this.uniforms=Jn.clone(t.uniforms),this.material=new ko({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ni(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===El?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Tl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Lr=new P;function Un(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Lr.copy(t),Lr[n]=0,Lr.normalize();let l=.5*o/(o+a),h=1-Lr.angleTo(i)/c;return Math.sign(Lr[e])===1?h*l:a/(o+a)+l+l*(1-h)}var An=class extends re{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new P,c=new P,l=new P(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,f=h.length/6,g=new P,_=.5/s;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),p[d+0]=Un(g,c,"z","y",r,n),p[d+1]=1-Un(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),p[d+0]=1-Un(g,c,"z","y",r,n),p[d+1]=1-Un(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),p[d+0]=1-Un(g,c,"x","z",r,t),p[d+1]=Un(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),p[d+0]=1-Un(g,c,"x","z",r,t),p[d+1]=1-Un(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),p[d+0]=1-Un(g,c,"x","y",r,t),p[d+1]=1-Un(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),p[d+0]=Un(g,c,"x","y",r,t),p[d+1]=1-Un(g,c,"y","x",r,e);break}}};var ea=class extends qn{constructor(){super();let t=new re;t.deleteAttribute("uv");let e=new ye({side:Ie}),n=new ye,s=new je(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new it(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new it(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new it(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new it(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new it(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new it(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new it(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let p=new it(t,js(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);let f=new it(t,js(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new it(t,js(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new it(t,js(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new it(t,js(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let d=new it(t,js(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function js(i){let t=new $t;return t.color.setScalar(i),t}function di(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new me,l=0;for(let h=0;h<i.length;++h){let u=i[h],p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let p=0;p<i.length;++p){let f=i[p].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[p].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Ku(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<u;++p){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][p]);let g=Ku(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Ku(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ae(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let p=0,f=h.count;p<f;p++)for(let g=0;g<e;g++){let _=h.getComponent(p,g);a.setComponent(p+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Ue=(i,t)=>({emissive:new j(i),emissiveIntensity:t||1}),rt=(i,t,e,n)=>(i.position.set(t,e,n),i),oe=(i,t,e)=>at(new Gt(i,16,12),t,e),de=(i,t,e,n,s,r)=>at(new ee(i,t,e,r||16),n,s),tn=(i,t,e,n,s)=>at(new be(i,t,s||16),e,n),xn=(i,t,e,n,s)=>at(new Ke(i,t,8,24,s||Math.PI*2),e,n),he=(i,t,e,n,s,r)=>at(new An(i,t,e,3,r!=null?r:Math.min(i,t,e)*.25),n,s),Gl={ellie:{b:"#f4f1ea",e:"#2b2b33",spot:"#2b2b33"},puppy:{b:"#b07a4a",e:"#6b3e26"},golden:{b:"#e8b25a",e:"#b47a2a",fluff:1},lab:{b:"#33333d",e:"#15151a",eye:"#e0b030"},dalmatian:{b:"#f4f4f4",e:"#1d1f33",spots:"#1d1f33"},beagle:{b:"#c9853a",e:"#2b1d14",m:"#ffffff",saddle:"#2b1d14"},pug:{b:"#d9b38c",e:"#3a2a20",m:"#3a2a20",snout:.6},shiba:{b:"#e07b39",e:"#a8581f",m:"#fff3e0",up:1,curl:1},corgi:{b:"#e8913a",e:"#a8581f",m:"#fff3e0",up:1,legs:.55},shepherd:{b:"#c98a4a",e:"#2b1d14",up:1,saddle:"#2b1d14"},husky:{b:"#8a94ad",e:"#4a5268",m:"#ffffff",up:1,eye:"#3fa7ff",curl:1},collie:{b:"#1d1f33",e:"#1d1f33",m:"#ffffff"},dachshund:{b:"#a0522d",e:"#6b2f14",len:1.55,legs:.55},poodle:{b:"#ffffff",e:"#e8e2f0",poof:1},chihuahua:{b:"#ecc98e",e:"#c9a06a",up:1,bigEars:1,size:.85},bulldog:{b:"#c9a27a",e:"#5a3a2a",m:"#ffffff",wide:1,legs:.8,snout:.6},robodog:{b:"#d7deeb",e:"#5d6385",robot:1,eye:"#5ef2ff"}};function pi(i){i=i||{};let t=Gl[i.breed]||Gl.ellie,e=new st,n=t.b,s=t.len||1,r=t.legs||1,o=t.robot?{metalness:0}:void 0,a=at(new De(t.wide?.33:.28,.5*s,6,14),n,o);a.rotation.x=Math.PI/2,a.position.y=.55-(1-r)*.18,Fe(a),e.add(a);let c=.88-(1-r)*.18,l=.42+(s-1)*.25,h=oe(t.wide?.33:.3,n);h.position.set(0,c,l),Fe(h),e.add(h);let u=t.snout||1,p=oe(.14,t.m||n);p.scale.set(1,.85,u),p.position.set(0,c-.06,l+.28*(.6+.4*u)),e.add(p);let f=new it(new Gt(.05,8,6),new $t({color:"#1a1530"}));f.position.set(0,c-.02,l+.28*(.6+.4*u)+.12*u),e.add(f);let g=t.eye?new $t({color:t.eye}):new $t({color:"#1a1530"});for(let d of[-.11,.11]){let v=new it(new Gt(.045,10,8),g);v.position.set(d,c+.07,l+.26),e.add(v)}if(t.up){let d=t.bigEars?1.5:1;for(let v of[-.17,.17]){let x=tn(.08*d,.2*d,t.e);x.position.set(v,c+.28,l-.02),x.rotation.z=v<0?.25:-.25,e.add(x)}}else for(let d of[-.24,.24]){let v=oe(.12,t.e);v.scale.set(.6,1.3,.5),v.position.set(d,c+.1,l-.04),e.add(v)}if(t.spot){let d=oe(.16,t.spot);d.position.set(.17,.66,-.05),d.scale.set(.6,.8,1),e.add(d)}if(t.spots)for(let[d,v,x]of[[.2,.62,.05],[-.2,.66,-.15],[.12,.75,-.3],[-.15,.5,.25],[.22,.48,-.28]]){let M=oe(.06,t.spots);M.scale.set(.5,1,1),M.position.set(d,v,x*s),e.add(M)}if(t.saddle){let d=oe(.27,t.saddle);d.scale.set(1.08,.6,1.2*s),d.position.set(0,a.position.y+.12,-.08),e.add(d)}if(t.fluff){let d=oe(.14,t.b);d.scale.set(1.3,.8,.8),d.position.set(0,c-.25,l-.05),e.add(d)}if(t.poof)for(let d of[[0,c+.26,l-.02,.16],[0,.62,-.42*s,.2],[0,.66,.2,.24]])e.add(rt(oe(d[3],"#ffffff"),d[0],d[1],d[2]));if(t.robot){e.add(rt(de(.015,.015,.2,"#5d6385"),0,c+.38,l)),e.add(rt(oe(.04,"#ffe066",Ue("#ffe066",1.2)),0,c+.49,l));let d=he(.36,.1,.06,"#1d1f33");d.position.set(0,c+.07,l+.25),e.add(d);for(let v of[-.09,.09])e.add(rt(oe(.035,"#5ef2ff",Ue("#5ef2ff",1.6)),v,c+.07,l+.29))}let _=[];for(let[d,v]of[[-.16,.25*s],[.16,.25*s],[-.16,-.25*s],[.16,-.25*s]]){let x=at(new De(.07,.22*r,4,8),t.robot?"#5d6385":n);x.position.set(d,.22*r,v),_.push(x),e.add(x)}let m=at(new De(.05,.3,4,8),n);return m.position.set(0,.75-(1-r)*.18,-.25*s-.25),m.rotation.x=t.curl?-2.2:-.8,e.add(m),Hx(e,i,{hy:c,hz:l,L:s,lg:r}),t.size&&e.scale.setScalar(t.size),e.userData={legs:_,tail:m},e}var Qe="#ffd23f",tr="#c9cfdc",_n="#ff4d6d",Rn="#1d1f33";function Ox(i){let t=new Qi;return t.moveTo(0,-.07),t.bezierCurveTo(-.11,0,-.07,.08,0,.035),t.bezierCurveTo(.07,.08,.11,0,0,-.07),at(new qs(t,{depth:.02,bevelEnabled:!1}),i)}function Vl(i,t){let e=new Qi;return e.moveTo(0,0),e.quadraticCurveTo(.25,.35,.6,.42),e.quadraticCurveTo(.45,.25,.52,.12),e.quadraticCurveTo(.35,.1,.38,-.02),e.quadraticCurveTo(.2,.02,0,0),at(new qs(e,{depth:.02,bevelEnabled:!1}),i,t)}var Wl={party:()=>{let i=new st;return i.add(rt(tn(.13,.36,"#ff8fa3"),0,.18,0),rt(oe(.05,Qe),0,.38,0)),i},crown:()=>{let i=new st;i.add(rt(de(.16,.16,.1,Qe,Ue("#ffb627",.2),20),0,.05,0));for(let t=0;t<6;t++){let e=t/6*Math.PI*2;i.add(rt(tn(.04,.1,Qe),Math.cos(e)*.14,.14,Math.sin(e)*.14))}return i.add(rt(oe(.035,_n),0,.06,.16)),i},cowboy:()=>{let i=new st;return i.add(rt(de(.34,.34,.03,"#8a5a2a",null,24),0,.02,0),rt(de(.15,.17,.18,"#8a5a2a"),0,.11,0),rt(de(.172,.172,.04,"#3a2416"),0,.05,0)),i},propeller:()=>{let i=new st;i.add(rt(at(new Gt(.2,16,10,0,Math.PI*2,0,Math.PI/2),"#3fa7ff"),0,0,0),rt(de(.012,.012,.12,Qe),0,.24,0));let t=new st;return t.position.y=.3,t.add(rt(he(.36,.015,.06,_n,null,.005),0,0,0)),t.rotation.y=.6,i.add(t),i},wizard:()=>{let i=Jl("#b06bff");return i.scale.setScalar(.45),i},viking:()=>{let i=new st;i.add(rt(at(new Gt(.22,16,10,0,Math.PI*2,0,Math.PI/2),tr),0,-.02,0));for(let t of[-1,1]){let e=tn(.05,.2,"#fff3e0");e.position.set(t*.24,.12,0),e.rotation.z=-t*.9,i.add(e)}return i},flower:()=>{let i=new st,t=xn(.17,.025,"#3fae5a");return t.rotation.x=Math.PI/2,i.add(t),["#ff4d6d",Qe,"#ff8fa3","#c084fc","#ffffff"].forEach((e,n)=>{let s=n/5*Math.PI*2;i.add(rt(oe(.045,e),Math.cos(s)*.17,.03,Math.sin(s)*.17))}),i},pirate:()=>{let i=new st,t=de(.3,.3,.05,Rn,null,3);return t.rotation.y=Math.PI/6,i.add(rt(t,0,.03,0),rt(de(.15,.18,.16,Rn),0,.12,0),rt(oe(.04,"#ffffff"),0,.13,.17)),i},santa:()=>{let i=new st,t=tn(.16,.34,_n);t.position.set(0,.2,-.02),t.rotation.x=-.5,i.add(t);let e=xn(.16,.045,"#ffffff");return e.rotation.x=Math.PI/2,i.add(rt(e,0,.03,0),rt(oe(.055,"#ffffff"),0,.3,-.16)),i},knight:()=>{let i=new st;i.add(rt(at(new Gt(.25,18,12,0,Math.PI*2,0,Math.PI*.62),tr),0,-.08,0));let t=tn(.05,.2,_n);return t.position.set(0,.22,-.04),t.rotation.x=-.4,i.add(t),i},headset:()=>{let i=new st,t=xn(.27,.025,Rn,null,Math.PI);t.position.y=-.1,i.add(t);for(let n of[-.27,.27]){let s=de(.08,.08,.06,_n);s.rotation.z=Math.PI/2,i.add(rt(s,n,-.12,0))}let e=de(.012,.012,.22,Rn);return e.rotation.x=1.2,i.add(rt(e,.26,-.2,.12),rt(oe(.03,Rn),.26,-.25,.22)),i},chef:()=>{let i=new st;return i.add(rt(de(.15,.15,.16,"#ffffff"),0,.08,0),rt(oe(.2,"#ffffff"),0,.24,0)),i},unicorn:()=>{let i=new st,t=tn(.05,.3,Qe,Ue("#ffb627",.3));t.position.set(0,.08,.18),t.rotation.x=.5,i.add(t);let e=xn(.045,.012,"#ff8fa3");return e.position.set(0,.06,.17),e.rotation.x=Math.PI/2+.5,i.add(e),i},halo:()=>{let i=new st,t=xn(.16,.025,Qe,Ue("#ffe066",1.2));return t.rotation.x=Math.PI/2,i.add(rt(t,0,.16,0)),i}},Xl={nerd:()=>{let i=new st;for(let t of[-.11,.11])i.add(rt(xn(.06,.014,Rn),t,0,0));return i.add(rt(he(.07,.02,.02,Rn,null,.005),0,.01,0)),i},monocle:()=>{let i=new st;i.add(rt(xn(.065,.014,Qe),.11,0,0));let t=de(.006,.006,.2,Qe);return t.position.set(.17,-.1,-.04),t.rotation.z=.3,i.add(t),i},shades:()=>{let i=new st;for(let t of[-.11,.11])i.add(rt(he(.13,.08,.02,Rn,null,.02),t,0,0));return i.add(rt(he(.1,.02,.02,Rn,null,.005),0,.02,0)),i},starglasses:()=>{let i=new st;for(let t of[-.11,.11]){let e=new Qi;for(let n=0;n<10;n++){let s=n/10*Math.PI*2+Math.PI/2,r=n%2?.035:.08;n?e.lineTo(Math.cos(s)*r,Math.sin(s)*r):e.moveTo(Math.cos(s)*r,Math.sin(s)*r)}i.add(rt(at(new qs(e,{depth:.02,bevelEnabled:!1}),Qe),t,0,0))}return i},goggles:()=>{let i=new st;for(let e of[-.11,.11]){let n=de(.065,.065,.05,"#8a5a2a");n.rotation.x=Math.PI/2,i.add(rt(n,e,0,0)),i.add(rt(de(.05,.05,.052,"#9fe8ff",{transparent:!0,opacity:.8}),e,0,.002).rotateX(Math.PI/2))}let t=xn(.3,.015,"#8a5a2a");return t.rotation.x=Math.PI/2,t.position.z=-.26,i.add(t),i},hearts:()=>{let i=new st;for(let t of[-.11,.11])i.add(rt(Ox("#ff4d6d"),t,0,0));return i},mask:()=>{let i=new st;i.add(rt(he(.36,.09,.03,Rn,null,.03),0,0,0));for(let t of[-.11,.11])i.add(rt(oe(.03,"#ffffff"),t,0,.02));return i}},rs=(i,t,e,n)=>{let s=xn(i,t,e,n);return s.rotation.x=-1.12,s},os=-.09-.04,as=.19+.03,ql={collar:()=>{let i=new st;return i.add(rs(.21,.035,_n),rt(oe(.045,Qe),0,os-.03,as)),i},spiked:()=>{let i=new st,t=rs(.21,.04,Rn);for(let e=0;e<9;e++){let n=e/9*Math.PI*2,s=tn(.03,.08,"#ffffff");s.position.set(Math.cos(n)*.25,Math.sin(n)*.25,0),s.rotation.z=n-Math.PI/2,t.add(s)}return i.add(t),i},bandana:()=>{let i=new st;i.add(rs(.21,.03,_n));let t=tn(.16,.24,_n,null,3);return t.rotation.set(-.25,Math.PI,Math.PI),t.scale.z=.35,i.add(rt(t,0,os-.09,as)),i},bowtie:()=>{let i=new st;i.add(rs(.21,.02,"#3fa7ff"));for(let t of[-1,1]){let e=tn(.07,.13,"#3fa7ff",null,4);e.rotation.z=t*Math.PI/2,i.add(rt(e,t*.07,os,as))}return i.add(rt(oe(.035,"#3fa7ff"),0,os,as+.01)),i},chain:()=>{let i=new st;i.add(rs(.22,.035,Qe,Ue("#ffb627",.25)));let t=de(.075,.075,.025,Qe,Ue("#ffb627",.35));return t.rotation.x=Math.PI/2-.3,i.add(rt(t,0,os-.07,as)),i},scarf:()=>{let i=new st;i.add(rs(.21,.06,"#3fae5a"));let t=he(.11,.26,.05,"#3fae5a");return t.position.set(.09,os-.1,as),t.rotation.z=.2,i.add(t),i},medal:()=>{let i=new st;i.add(rs(.21,.02,"#3fa7ff"));let t=de(.08,.08,.025,Qe,Ue("#ffb627",.35));return t.rotation.x=Math.PI/2-.3,i.add(rt(t,0,os-.1,as)),i}},Yl={jetpack:()=>{let i=new st;for(let t of[-.09,.09])i.add(rt(de(.07,.07,.28,tr),t,.14,0),rt(tn(.07,.1,_n),t,.33,0),rt(tn(.05,.18,"#ff9f1c",Ue("#ff7b1c",1.5)),t,-.07,0).rotateX(Math.PI));return i},wings:()=>{let i=new st;for(let t of[-1,1]){let e=Vl("#3fae5a");e.scale.set(t,1,1),e.rotation.y=t*.35,e.position.set(t*.08,.02,0),i.add(e)}return i},angel:()=>{let i=new st;for(let t of[-1,1]){let e=Vl("#ffffff",Ue("#ffffff",.2));e.scale.set(t,1,1),e.rotation.y=t*.35,e.position.set(t*.08,.02,0),i.add(e)}return i},backpack:()=>{let i=new st;return i.add(rt(he(.34,.2,.3,"#8a5a2a"),0,.1,0),rt(he(.1,.06,.02,Qe,null,.01),0,.13,.16)),i}};function Hx(i,t,{hy:e,hz:n,L:s,lg:r}){if(t.hat&&Wl[t.hat]){let o=Wl[t.hat]();o.position.set(0,e+.26,n),i.add(o)}if(t.face&&Xl[t.face]){let o=Xl[t.face]();o.position.set(0,e+.07,n+.29),i.add(o)}if(t.neck==="cape"){let o=new it(new Ye(.5,.75*s,1,4),at(new re,_n).material.clone());o.material.side=Ee,o.rotation.x=-Math.PI/2+.25,o.position.set(0,.88-(1-r)*.18,-.08),i.add(o);let a=xn(.2,.025,_n);a.position.set(0,e-.16,n-.16),a.rotation.x=.35,i.add(a)}else if(t.neck&&ql[t.neck]){let o=ql[t.neck]();o.position.set(0,e-.2,n-.08),i.add(o)}if(t.back&&Yl[t.back]){let o=Yl[t.back]();o.position.set(0,.8-(1-r)*.18,-.05),i.add(o)}}var ey=Object.keys(Wl).concat(Object.keys(Xl),Object.keys(ql),["cape"],Object.keys(Yl));function tf(i){if(Gl[i])return pi({breed:i});let t=new st;if(i==="slime"){let e=at(new Gt(.4,20,14),"#5fd36b",{transparent:!0,opacity:.88});e.scale.set(1,.75,1),e.position.y=.3,Fe(e),t.add(e);for(let n of[-.13,.13])t.add(rt(oe(.06,"#1a1530"),n,.42,.33));t.add(rt(oe(.1,"#c8ffd0",{transparent:!0,opacity:.7}),-.15,.5,.2))}else if(i==="cat"){let e="#ff9f43",n=at(new De(.22,.4,6,12),e);n.rotation.x=Math.PI/2,n.position.y=.42,Fe(n);let s=oe(.26,e);s.position.set(0,.75,.32),Fe(s),t.add(n,s);for(let o of[-.14,.14]){let a=tn(.08,.16,e,null,4);a.position.set(o,.98,.3),t.add(a),t.add(rt(oe(.04,"#1a1530"),o*.7,.8,.55))}t.add(rt(oe(.03,"#ff6f91"),0,.73,.58));for(let[o,a]of[[-.12,.18],[.12,.18],[-.12,-.18],[.12,-.18]])t.add(rt(at(new De(.06,.18,4,8),e),o,.16,a));let r=at(new De(.04,.4,4,8),e);r.position.set(0,.7,-.38),r.rotation.x=-.4,t.add(r)}else if(i==="byte"){let e=oe(.3,"#eef2fa");e.position.y=.7,Fe(e),t.add(e);let n=de(.12,.12,.05,"#5ef2ff",Ue("#5ef2ff",1.6));n.rotation.x=Math.PI/2,t.add(rt(n,0,.72,.28)),t.add(rt(de(.02,.02,.18,"#9aa6b8"),0,1.05,0));let s=he(.6,.02,.08,"#ff4d6d",null,.01);s.position.y=1.15,s.rotation.y=.5,t.add(s);for(let r of[-.32,.32])t.add(rt(oe(.08,"#9aa6b8"),r,.62,0))}else if(i==="dragon"||i==="ember"){let e=i==="ember",n=e?"#ff7b1c":"#3fae5a",s=at(new De(.26,.45,6,12),n);s.rotation.x=Math.PI/2,s.position.y=.5,Fe(s);let r=oe(.26,n);r.position.set(0,.9,.38),Fe(r),t.add(s,r),t.add(rt(oe(.15,e?"#ffe066":"#c8f07a"),0,.82,.6));for(let a of[-.1,.1]){t.add(rt(oe(.045,"#1a1530"),a,.98,.58));let c=tn(.05,.18,"#ffe066");c.position.set(a*1.3,1.15,.3),c.rotation.x=-.4,t.add(c)}for(let a of[-1,1]){let c=Vl(e?"#c2410c":"#2f8f4e",e?Ue("#ff4d00",.25):void 0);c.scale.set(a*1.1,1.1,1),c.rotation.y=a*.5,c.position.set(a*.15,.7,-.05),t.add(c)}for(let[a,c]of[[-.15,.22],[.15,.22],[-.15,-.22],[.15,-.22]])t.add(rt(at(new De(.07,.2,4,8),n),a,.2,c));let o=tn(.1,.6,n);o.position.set(0,.45,-.6),o.rotation.x=-1.9,t.add(o)}return t}var ju={cap:()=>{let i=new st;i.add(rt(at(new Gt(.45,20,12,0,Math.PI*2,0,Math.PI/2),_n),0,0,0));let t=de(.3,.3,.03,_n,null,20);return t.scale.z=.9,t.position.set(0,0,.36),i.add(t),i},headphones:()=>{let i=new st,t=xn(.47,.04,Rn,null,Math.PI);i.add(t);for(let e of[-.46,.46]){let n=de(.14,.14,.1,"#3fa7ff");n.rotation.z=Math.PI/2,i.add(rt(n,e,-.05,0))}return i},helmet:()=>{let i=new st;return i.add(rt(at(new Gt(.5,20,14,0,Math.PI*2,0,Math.PI*.6),tr),0,-.1,0)),i.add(rt(he(.5,.08,.1,"#3fa7ff",Ue("#3fa7ff",.4),.03),0,-.05,.43)),i},wizard:()=>{let i=Jl("#6a3fc8");return i.position.y=.15,i},visor:()=>{let i=new st;i.add(rt(he(.7,.2,.18,"#1d1f33",null,.06),0,.03,.36),rt(he(.6,.12,.03,"#5ef2ff",Ue("#5ef2ff",1.4),.03),0,.03,.46));let t=xn(.44,.03,Rn);return t.rotation.x=Math.PI/2,i.add(rt(t,0,.03,0)),i},crown:()=>{let i=new st;i.add(rt(de(.32,.32,.18,Qe,Ue("#ffb627",.25),24),0,.05,0));for(let t=0;t<7;t++){let e=t/7*Math.PI*2;i.add(rt(tn(.07,.18,Qe),Math.cos(e)*.3,.22,Math.sin(e)*.3))}return i.add(rt(oe(.06,_n),0,.06,.32)),i}},zx={cap:.05,headphones:0,helmet:.05,wizard:.2,visor:0,crown:.33};function ef(i){if(!ju[i])return null;let t=ju[i]();return t.position.y=1.85+(zx[i]||0),t}var Zl=(i,t,e)=>{let n=new st,s=de(i,i,t,e||"#22222b",null,20);s.rotation.z=Math.PI/2,n.add(s);let r=de(i*.45,i*.45,t*1.05,"#c9cfdc",null,12);return r.rotation.z=Math.PI/2,n.add(r),n};function Qs(i){let t=new st,e=i.col,n=i.lift||0,s=i.wr||.28;t.add(rt(he(1.1,.38,2.2,e,i.shine),0,s+.15+n,0)),t.add(rt(he(.9,.34,1,i.top||e,i.shine),0,s+.5+n,-.15)),t.add(rt(he(.86,.24,.04,"#9fe8ff",{transparent:!0,opacity:.85},.02),0,s+.52+n,.36));for(let[r,o]of[[-.55,.7],[.55,.7],[-.55,-.7],[.55,-.7]])t.add(rt(Zl(s,i.ww||.2),r,s,o));for(let r of[-.35,.35])t.add(rt(oe(.07,"#fff3b0",Ue("#fff3b0",1)),r,s+.2+n,1.1));return t}function kl(i){let t=new st,e=i.col,n=i.wr||.32;for(let s of[.62,-.62]){let r=new st,o=xn(n,i.tw||.06,"#22222b");if(o.rotation.y=Math.PI/2,r.add(o),!i.thin){let a=de(n*.5,n*.5,.08,"#c9cfdc");a.rotation.z=Math.PI/2,r.add(a)}t.add(rt(r,0,n,s))}if(i.thin){let s=de(.03,.03,1.2,e);s.rotation.x=Math.PI/2,t.add(rt(s,0,n+.2,0));let r=de(.03,.03,.6,e);r.rotation.x=.5,t.add(rt(r,0,n+.45,.5))}else t.add(rt(he(.32,.32,1,e),0,n+.25,0));return t.add(rt(he(.6,.05,.05,"#22222b",null,.02),0,n+.7,.55),rt(he(.22,.08,.4,"#1d1f33",null,.03),0,n+(i.thin?.42:.47),-.25)),t}var Qu={scooter:()=>{let i=new st;i.add(rt(he(.3,.06,1.1,"#3fa7ff",null,.02),0,.14,0));for(let e of[.5,-.5])i.add(rt(Zl(.1,.08),0,.1,e));let t=de(.025,.025,.95,tr);return t.rotation.x=-.15,i.add(rt(t,0,.6,.55),rt(he(.5,.05,.05,"#22222b",null,.02),0,1.06,.62)),i},bmx:()=>kl({col:"#ff4d6d",thin:1,wr:.3,tw:.04}),dirt:()=>{let i=kl({col:"#ff9f1c",wr:.36,tw:.09});return i.add(rt(he(.3,.05,.4,"#ff9f1c",null,.02),0,.82,.62)),i},moto:()=>{let i=kl({col:"#d7263d",wr:.34,tw:.08});return i.add(rt(oe(.09,"#fff3b0",Ue("#fff3b0",1)),0,.8,.8)),i},kart:()=>{let i=new st;i.add(rt(he(.9,.14,1.6,"#3fae5a",null,.05),0,.2,0));for(let[e,n]of[[-.5,.55],[.5,.55],[-.5,-.55],[.5,-.55]])i.add(rt(Zl(.18,.18),e,.18,n));i.add(rt(he(.4,.4,.15,"#1d1f33",null,.05),0,.45,-.35));let t=xn(.12,.02,"#22222b");return t.rotation.x=-.6,i.add(rt(t,0,.55,.25)),i},sports:()=>Qs({col:"#e8343a"}),police:()=>{let i=Qs({col:"#1d1f33",top:"#ffffff"});return i.add(rt(he(.22,.1,.14,"#ff2d55",Ue("#ff2d55",1.4),.02),-.14,1.18,-.15),rt(he(.22,.1,.14,"#3fa7ff",Ue("#3fa7ff",1.4),.02),.14,1.18,-.15)),i},hover:()=>{let i=new st;i.add(rt(he(.5,.3,1.6,"#6c3fd8",null,.12),0,.6,0));for(let t of[.55,-.55])i.add(rt(de(.25,.3,.1,"#5ef2ff",Ue("#5ef2ff",1.6)),0,.36,t));return i.add(rt(he(.6,.05,.05,"#22222b",null,.02),0,1,.6),rt(he(.25,.08,.4,"#1d1f33",null,.03),0,.8,-.2)),i},race:()=>{let i=Qs({col:"#3fa7ff",wr:.24});i.scale.set(1,.8,1.1),i.add(rt(he(1.2,.06,.3,"#1d1f33",null,.02),0,.95,-1.1));for(let t of[-.5,.5])i.add(rt(he(.05,.3,.2,"#1d1f33",null,.01),t,.8,-1.1));return i},monster:()=>Qs({col:"#7c3aed",lift:.45,wr:.5,ww:.4}),rocket:()=>{let i=Qs({col:"#ff9f1c"}),t=de(.2,.25,.7,tr);return t.rotation.x=Math.PI/2,i.add(rt(t,0,.75,-1.35),rt(tn(.22,.6,"#ff7b1c",Ue("#ff7b1c",1.6)),0,.75,-1.95).rotateX(-Math.PI/2)),i},gold:()=>Qs({col:"#ffc933",shine:Ue("#ffb627",.35)})};function nf(i){return Qu[i]?Qu[i]():null}var cs=null;function ls(){if(cs)return cs;let i=new Uint8Array([90,90,90,255,170,170,170,255,255,255,255,255]);return cs=new Di(i,3,1,rn),cs.minFilter=cs.magFilter=qe,cs.needsUpdate=!0,cs}var $l={};function Re(i,t={}){let e=i+JSON.stringify(t);return $l[e]||($l[e]=new Ln(Object.assign({color:new j(i),gradientMap:ls()},t))),$l[e]}var kx=new $t({color:1709360,side:Ie});function Fe(i,t=1.06){let e=new it(i.geometry,kx);return e.scale.setScalar(t),e.raycast=()=>{},i.add(e),i}function at(i,t,e){let n=new it(i,Re(t,e));return n.castShadow=!0,n.receiveShadow=!0,n}var sf=0;function er(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Gx(i){let t=er(i),e=new Float32Array(512);for(let r=0;r<512;r++)e[r]=t();let n=(r,o)=>e[(r*73856093^o*19349663)&511],s=r=>r*r*(3-2*r);return(r,o)=>{let a=Math.floor(r),c=Math.floor(o),l=s(r-a),h=s(o-c),u=n(a,c),p=n(a+1,c),f=n(a,c+1),g=n(a+1,c+1);return u+(p-u)*l+(f-u)*h+(u-p-f+g)*l*h}}var Kl=class{constructor(t){this.n=Gx(7),this.flat=t.map(e=>({x:e.x,z:e.z,r:e.flat||7,h:null})).concat([{x:0,z:13,r:7,h:null}]),this.R=62,this.flat.forEach(e=>{e.h=Math.max(1.2,this.raw(e.x,e.z))})}raw(t,e){let n=Math.hypot(t,e)/this.R,s=1-Math.pow(Math.min(1.4,n),2.2),r=this.n(t*.06,e*.06)*.7+this.n(t*.15+9,e*.15)*.3,o=s*6+(r-.5)*5*Math.max(0,1-n),a=Math.hypot(t,e+80)/16;o=Math.max(o,(1-Math.pow(Math.min(1.3,a),2))*7-.5),Math.abs(t)<3.2&&e<-50&&e>-70&&(o=Math.max(o,1.4));let c=Math.hypot(t+40,e+38)/17;return c<1.3&&(o=Math.max(o,Math.pow(Math.max(0,1-c),1.6)*24+(this.n(t*.2,e*.2)-.5)*2)),o}h(t,e){let n=this.raw(t,e);for(let s of this.flat){let r=Math.hypot(t-s.x,e-s.z);if(r<s.r+4){let o=r<s.r?1:1-(r-s.r)/4;n=n+(s.h-n)*o*o*(3-2*o)}}return n}};function Jl(i){let t=new st,e=at(new ee(.62,.62,.06,24),i),n=at(new be(.38,.95,24),i);n.position.y=.5,n.rotation.z=-.18;let s=at(new Sn(.1),"#ffe066",{emissive:new j("#ffb627"),emissiveIntensity:.6});return s.position.set(.05,.45,.32),t.add(e,n,s),Fe(n,1.05),t}function Vx(i){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.fillStyle=i,e.fillRect(0,0,128,128);let n=er(3);for(let r=0;r<40;r++){e.fillStyle=n()<.3?"#ffe066":"#ffffff";let o=n()*2.5+.8;e.fillRect(n()*128,n()*128,o,o)}let s=new wn(t);return s.colorSpace=He,s.wrapS=s.wrapT=Ri,s}var Wx={galaxy:"#3b2a7a",ninja:"#2a2f3d",knight:"#9aa6b8",fire:"#e8643a",ocean:"#2f7fd1",forest:"#2f8f4e"},rf=[];function hs(i){let t=new st,e=i.skin||"#c68642",n=i.hair||"#2b1d14",s=Wx[i.outfit]||i.outfitCol||"#3b2a7a",r=new it(new De(.42,.55,6,16),new Ln({color:s,gradientMap:ls(),map:i.outfit==="galaxy"?Vx(s):null}));r.castShadow=!0,r.position.y=1.05,Fe(r);let o=at(new Gt(.42,24,18),e);o.position.y=1.85,Fe(o);let a=at(new Gt(.44,24,18,0,Math.PI*2,0,Math.PI*.55),n);a.position.y=1.88,a.rotation.x=-.25;let c=new Gt(.06,10,8),l=new $t({color:"#1a1530"}),h=new it(c,l),u=h.clone();h.position.set(-.15,1.88,.38),u.position.set(.15,1.88,.38);let p=new it(new Ke(.1,.022,6,12,Math.PI),l);p.rotation.z=Math.PI,p.position.set(0,1.76,.39);let f=new it(new Gt(.06,8,6),new $t({color:"#ff8fa3",transparent:!0,opacity:.55})),g=f.clone();f.position.set(-.24,1.79,.33),g.position.set(.24,1.79,.33),rf=[p,f,g];let _=new De(.13,.35,4,10),m=new De(.11,.42,4,10),d=(w,E,I,B)=>{let y=new st;y.position.set(I,B,0);let b=at(w,E);return b.position.y=-.28,y.add(b),y},v=d(_,"#24204a",-.18,.62),x=d(_,"#24204a",.18,.62),M=d(m,s,-.52,1.35),A=d(m,s,.52,1.35);[M,A].forEach(w=>{let E=at(new Gt(.12,12,10),e);E.position.y=-.6,w.add(E)}),t.add(r,o,a,h,u,v,x,M,A,...rf);{let w=ef(i.hat);w&&t.add(w)}if(i.cape){let w=new Ye(.8,1.1,1,6),E=new it(w,Re(i.capeCol||(i.cape==="gold"?"#ffc933":i.cape==="red"?"#e23b3b":"#4d7cff"),{side:Ee}));E.position.set(0,1,-.44),E.rotation.x=.12,E.castShadow=!0,t.add(E),t.userData.cape=E}return t.userData.limbs={lL:v,lR:x,aL:M,aR:A},t}function on(i,t,e,n,s=16){return at(new ee(i,t,e,s),n)}function ce(i,t,e,n){return at(new re(i,t,e),n)}function Fi(i,t,e,n=4){let s=at(new be(i,t,n),e);return n===4&&(s.rotation.y=Math.PI/4),s}function Pt(i,t,e,n){return i.position.set(t,e,n),i}var of={dojo(){let i=new st;i.add(Pt(ce(6,.6,6,"#d8c7a8"),0,.3,0));for(let t=0;t<3;t++){let e=1-t*.25;i.add(Pt(ce(4*e,1.6,4*e,"#f3ead8"),0,1.4+t*2.1,0)),i.add(Pt(Fi(3.6*e,1.2,"#d2443a"),0,2.8+t*2.1,0))}for(let t of[-2.2,2.2])i.add(Pt(on(.18,.18,3,"#b33a2e"),t,1.5,3.2));return i.add(Pt(ce(5.2,.35,.5,"#b33a2e"),0,3.1,3.2)),i},quest(){let i=new st;for(let e of[-1.1,1.1])i.add(Pt(on(.12,.12,2.6,"#8a5a2b"),e,1.3,0));i.add(Pt(ce(2.8,1.6,.2,"#c8955a"),0,1.9,0));for(let e=0;e<3;e++)i.add(Pt(ce(.6,.5,.05,"#fff7e0"),-.8+e*.8,1.95,.12));let t=Pt(at(new Sn(.35),"#ffe066",{emissive:new j("#ffb627"),emissiveIntensity:.8}),0,3.4,0);return t.userData.spin=1,i.add(t),i},canyon(){let i=new st,t=["#e8643a","#f08c4a","#d4532e","#f5b06b"];return[[0,0,3.2,6],[4.5,1.5,2.4,4.5],[-4,2,2.2,3.8],[2,-4,1.8,5.2]].forEach(([e,n,s,r],o)=>{for(let a=0;a<4;a++)i.add(Pt(on(s*(1-a*.06),s*(1-(a-1)*.06),r/4,t[(a+o)%4],9),e,r/8+a*r/4,n))}),i},docks(){let i=new st;for(let s=0;s<6;s++)i.add(Pt(ce(2.4,.2,1.3,"#a4723f"),0,.6,s*1.35));for(let s=0;s<7;s++)for(let r of[-1.1,1.1])i.add(Pt(on(.12,.12,2,"#7a5230"),r,0,s*1.35));let t=new st;t.add(Pt(ce(1.8,.6,3.4,"#e23b3b"),0,0,0)),t.add(Pt(on(.07,.07,3,"#7a5230"),0,1.5,0));let e=at(new Ye(1.4,1.8),"#fff7e0",{side:Ee});e.position.set(0,1.8,.1),e.rotation.y=Math.PI/2,t.add(e),t.position.set(3.2,.3,6),t.userData.bob=1,i.add(t);let n=new st;for(let s=0;s<4;s++)n.add(Pt(on(.9-s*.1,1-s*.1,1.4,s%2?"#e23b3b":"#ffffff"),0,.7+s*1.4,0));return n.add(Pt(at(new Gt(.55,12,10),"#ffe066",{emissive:new j("#ffd23f"),emissiveIntensity:.9}),0,6.2,0)),n.add(Pt(Fi(.8,.8,"#2b2b33",12),0,6.9,0)),n.position.set(-4,0,1),i.add(n),i},forge(){let i=new st;i.add(Pt(ce(5,3,4,"#8f8f9c"),0,1.5,0)),i.add(Pt(Fi(4,1.8,"#5a4632"),0,3.9,0));let t=Pt(ce(.9,3,.9,"#6e6e7a"),1.6,4.2,-.8);return t.userData.smoke=1,i.add(t),i.add(Pt(ce(1.2,.5,.6,"#3a3a44"),0,.9,2.6)),i.add(Pt(ce(.6,.7,.4,"#3a3a44"),0,.35,2.6)),i.add(Pt(at(new re(1.6,1.2,.1),"#ff7b1c",{emissive:new j("#ff4d1c"),emissiveIntensity:.9}),0,1,2.01)),i},castle(){let i=new st,t="#cfc6b8";i.add(Pt(ce(8,3,.8,t),0,1.5,3)),i.add(Pt(ce(8,3,.8,t),0,1.5,-3)),i.add(Pt(ce(.8,3,6,t),-4,1.5,0)),i.add(Pt(ce(.8,3,6,t),4,1.5,0));for(let[n,s]of[[-4,3],[4,3],[-4,-3],[4,-3]])i.add(Pt(on(1,1,5,t),n,2.5,s)),i.add(Pt(Fi(1.25,1.8,"#4d7cff",12),n,5.9,s));i.add(Pt(ce(3,5,3,"#ddd5c8"),0,2.5,0)),i.add(Pt(Fi(2.3,2.2,"#4d7cff"),0,6.1,0)),i.add(Pt(ce(1.4,1.8,.2,"#5a4632"),0,.9,3.42));let e=at(new Ye(1,.6),"#ffd23f",{side:Ee});return e.position.set(.5,8,0),i.add(e,Pt(on(.05,.05,1.6,"#5a4632"),0,7.6,0)),i},tower(){let i=new st;for(let e=0;e<6;e++)i.add(Pt(on(1.8-e*.12,1.9-e*.12,1.6,e%2?"#b9b2a6":"#cfc8bb"),0,.8+e*1.6,0));i.add(Pt(Fi(2,3,"#2f6fdc",12),0,11.1,0));for(let e=0;e<5;e++){let n=Pt(ce(.4,.6,.1,"#ffe9a8"),0,1.4+e*1.9,1.85-e*.12);i.add(n)}let t=Pt(ce(.8,1,.25,"#e0457b"),0,13,0);return t.userData.spin=1,i.add(t),i},dungeon(){let i=new st,t=at(new Gt(4.5,20,14,0,Math.PI*2,0,Math.PI/2),"#7a8a5a");i.add(t);let e=at(new Dn(1.6,20,0,Math.PI),"#140c1e");e.position.set(0,.02,4.2),e.rotation.x=-.25,i.add(e),i.add(Pt(at(new Ke(1.75,.3,8,20,Math.PI),"#8f8f9c"),0,0,4.15));let n=new je("#e0457b",6,8);return n.position.set(0,1,4.6),i.add(n),i},camp(){let i=new st;[[-2,0,"#4d9bff"],[2,.5,"#3fbf5f"],[0,-2.2,"#ffb627"]].forEach(([e,n,s])=>{let r=Fi(1.6,2.2,s,4);r.position.set(e,1.1,n),i.add(r)});let t=Pt(at(new be(.35,.8,8),"#ff7b1c",{emissive:new j("#ff4d1c"),emissiveIntensity:1}),0,.4,1.6);return t.userData.flicker=1,i.add(t),i},fortress(){let i=new st;i.add(Pt(on(4,5,3,"#3a2a5a",8),0,1.5,0)),i.add(Pt(on(2,3,7,"#2a1d45",8),0,6.5,0));for(let n=0;n<6;n++){let s=n/6*Math.PI*2,r=Pt(at(new be(.5,3,6),"#5a3a8a"),Math.cos(s)*4,4,Math.sin(s)*4);i.add(r)}let e=Pt(at(new Gt(.9,16,12),"#ff2d55",{emissive:new j("#ff2d55"),emissiveIntensity:1.2}),0,9.5,1.4);return e.userData.pulse=1,i.add(e),i.add(Pt(Fi(2.4,3,"#1a1030",8),0,11.5,0)),i},mech(){let i=new st;i.add(Pt(ce(6,3.5,4.5,"#9aa6b8"),0,1.75,0));let t=at(new ee(3.1,3.1,6,16,1,!1,0,Math.PI),"#7f8ba0");t.rotation.z=Math.PI/2,t.position.y=3.5,i.add(t),i.add(Pt(ce(3,2.6,.1,"#2a2f3d"),0,1.3,2.27));let e=new st;return e.add(Pt(ce(1,1.2,.8,"#c9d3e6"),0,1.6,0),Pt(ce(.7,.6,.6,"#c9d3e6"),0,2.5,0),Pt(ce(.3,1,.3,"#7f8ba0"),-.3,.5,0),Pt(ce(.3,1,.3,"#7f8ba0"),.3,.5,0)),e.position.set(2.2,0,3),e.scale.setScalar(1.1),i.add(e),i},shop(){let i=new st;i.add(Pt(ce(6,.3,4,"#c9b38f"),0,.15,0)),i.add(Pt(ce(5,1.2,1.4,"#a4723f"),0,.6,.6)),i.add(Pt(ce(5.2,.15,1.6,"#c8955a"),0,1.25,.6));for(let v of[-2.4,2.4])for(let x of[-1.4,1.3])i.add(Pt(on(.12,.12,3.4,"#7a5230"),v,1.7,x));for(let v=0;v<9;v++){let x=Pt(ce(.6,.12,3.4,v%2?"#ffffff":"#e23b3b"),-2.4+v*.6,3.55,-.05);x.rotation.x=.18,i.add(x);let M=at(new be(.3,.4,3),v%2?"#ffffff":"#e23b3b");M.rotation.x=Math.PI,M.position.set(-2.4+v*.6,3.05,1.65),i.add(M)}let t=["#ff6b9a","#4d9bff","#3fdc6b","#ffe066","#b06bff"];for(let v=0;v<5;v++){let x=Pt(at(new Sn(.2),t[v],{emissive:new j(t[v]),emissiveIntensity:.35}),-1.9+v*.55,1.55,.4);x.userData.spin=1,i.add(x)}for(let v=0;v<3;v++){let x=new st;x.add(Pt(at(new Gt(.2,12,10),["#e23b3b","#3fa7e8","#b06bff"][v],{emissive:new j(["#e23b3b","#3fa7e8","#b06bff"][v]),emissiveIntensity:.3}),0,.2,0),Pt(on(.06,.06,.2,"#e8e2d0"),0,.45,0)),x.position.set(1.2+v*.42,1.32,.85),i.add(x)}let e=new st;for(let v=0;v<14;v++){let x=at(new ee(.16,.16,.05,12),"#ffd23f",{emissive:new j("#ffb627"),emissiveIntensity:.4});x.position.set((Math.random()-.5)*.6,.03+v*.035,(Math.random()-.5)*.4),x.rotation.z=(Math.random()-.5)*.4,e.add(x)}e.position.set(-2.9,.3,2),e.userData.slow=1,i.add(e),i.userData.coins=e,i.add(Pt(ce(.9,.9,.9,"#b5844f"),2.9,.75,-.9),Pt(ce(.7,.7,.7,"#c8955a"),2.85,1.55,-.85),Pt(on(.45,.45,1.1,"#8a5a2b",12),-3,.85,-1));let n=document.createElement("canvas");n.width=256,n.height=128;let s=n.getContext("2d");s.fillStyle="#5a3a1e",s.fillRect(0,0,256,128),s.fillStyle="#ffd23f",s.beginPath(),s.arc(52,64,38,0,7),s.fill(),s.fillStyle="#b8860b",s.font="900 44px Lexend,sans-serif",s.textAlign="center",s.fillText("$",52,80),s.fillStyle="#fff3c4",s.font="900 58px Lexend,sans-serif",s.fillText("SHOP",166,84);let r=new wn(n);r.colorSpace=He;let o=new it(new re(2.2,1.1,.12),[Re("#5a3a1e"),Re("#5a3a1e"),Re("#5a3a1e"),Re("#5a3a1e"),new Ln({map:r,gradientMap:ls()}),Re("#5a3a1e")]);o.position.set(0,4.5,1.4),i.add(o);let a=new st,c=at(new De(.4,.5,6,12),"#3fbf5f");c.position.y=1;let l=at(new ee(.42,.44,.6,14,1,!0,-.9,1.8),"#fff7e0");l.position.y=.95;let h=at(new Gt(.38,16,12),"#f1c27d");h.position.y=1.75;let u=at(new De(.06,.3,4,8),"#5a3a1e");u.rotation.z=Math.PI/2,u.position.set(0,1.66,.34);let p=at(new ee(.3,.36,.3,14),"#e23b3b");p.position.y=2.1;let f=new st;f.position.set(.45,1.35,0);let g=at(new De(.1,.45,4,8),"#3fbf5f");g.position.y=.3,f.add(g),f.userData.wave=1;let _=new $t({color:"#1a1530"}),m=new it(new Gt(.05,8,6),_),d=m.clone();return m.position.set(-.13,1.82,.33),d.position.set(.13,1.82,.33),a.add(c,l,h,u,p,f,m,d),a.position.set(0,.3,-.6),Fe(h),Fe(c),i.add(a),i}};function Xx(i,t,e,n){let s=document.createElement("canvas");s.width=640,s.height=180;let r=s.getContext("2d"),o=(l,h)=>{r.clearRect(0,0,640,180);let u=600,p=h?140:104,f=20,g=8;r.fillStyle="rgba(18,14,40,0.82)",r.beginPath(),r.roundRect(f,g,u,p,p/2),r.fill(),r.lineWidth=7,r.strokeStyle=e||"#ffe066",r.stroke(),r.beginPath(),r.moveTo(300,g+p),r.lineTo(320,g+p+26),r.lineTo(340,g+p),r.closePath(),r.fillStyle=e||"#ffe066",r.fill(),r.fillStyle=e||"#ffe066",r.beginPath(),r.arc(f+p/2,g+p/2,p/2-12,0,7),r.fill(),r.font=`${Math.round(p*.48)}px "Apple Color Emoji","Noto Color Emoji",sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(n||"\u2B50",f+p/2,g+p/2+3),r.textAlign="left",r.textBaseline="alphabetic",r.fillStyle="#fff",r.font="800 48px Lexend, sans-serif",r.fillText(l,f+p+6,h?g+62:g+70,u-p-26),h&&(r.font="600 32px Lexend, sans-serif",r.fillStyle="#ffe9a8",r.fillText(h,f+p+6,g+112,u-p-26))};o(i,t);let a=new wn(s);a.colorSpace=He;let c=new Xs(new ji({map:a,depthTest:!1,transparent:!0}));return c.scale.set(7,1.97,1),c.renderOrder=10,c.userData.redraw=(l,h)=>{o(l,h),a.needsUpdate=!0},c}var jl=class{constructor(t,e){this.host=t,this.o=e,this.sites=e.sites,this.keys={},this.joy={x:0,y:0},this.yaw=e.yaw!=null?e.yaw:Math.PI,this.camDist=11,this.near=null,this.t=0,this.alive=!0,this.tier=e.tier||0;let n=this.r=new Ii({antialias:this.tier<2,powerPreference:"high-performance"});n.setPixelRatio(this.dpr()),n.outputColorSpace=He,n.shadowMap.enabled=this.tier<2,n.shadowMap.type=Pr,n.domElement.addEventListener("webglcontextlost",c=>{c.preventDefault(),this.lost=!0},!1),n.domElement.className="w3d-canvas",t.appendChild(n.domElement);let s=this.sc=new qn;s.background=new j("#bfe8ff"),s.fog=new Ki("#cdeeff",80,210),this.cam=new ke(55,1,.1,700),s.add(new Li("#e6f6ff","#5f8a48",1.25));let r=this.sun=new fi("#ffe9c4",2.5);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:1,far:90}),r.shadow.bias=-6e-4,s.add(r,r.target),this.isl=new Kl(this.sites),this.buildGround(),this.buildWater(),this.buildNature(),this.buildSites(),this.buildSky(),this.buildExtras(),this.buildDetails(),this.hero=hs(e.look||{}),s.add(this.hero),this.dog=pi(e.dog||{}),s.add(this.dog);let o=e.pos&&this.isl.h(e.pos.x,e.pos.z)>.4?e.pos:{x:0,z:22};this.hero.position.set(o.x,this.isl.h(o.x,o.z),o.z),this.hero.rotation.y=Math.PI,this.vy=0,this.dog.position.copy(this.hero.position).add(new P(1.5,0,1.5)),this.ui(),this.resize(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.last=performance.now();let a=c=>{if(!this.alive||(this.raf=requestAnimationFrame(a),this.paused))return;let l=Math.min(.05,(c-this.last)/1e3);this.last=c,this.step(l),this.r.render(this.sc,this.cam)};this.raf=requestAnimationFrame(a)}buildGround(){let n=new Ye(210,210,110,110);n.rotateX(-Math.PI/2);let s=n.attributes.position,r=[],o=new j,a=this.sites.filter(h=>h.path!==!1).map(h=>[h.x,h.z]),c=(h,u)=>{let p=1e9;for(let[f,g]of a){let d=f-0,v=g-14,x=d*d+v*v,M=Math.max(0,Math.min(1,((h-0)*d+(u-14)*v)/x));p=Math.min(p,Math.hypot(h-(0+d*M),u-(14+v*M)))}return p};for(let h=0;h<s.count;h++){let u=s.getX(h),p=s.getZ(h),f=this.isl.h(u,p);if(s.setY(h,f),f<.5)o.set("#f2dba0");else if(f>15)o.set("#ffffff");else if(f>9)o.set("#9a9aa8");else if(f>6.5)o.set("#8f9a7a");else{o.set("#7cc95a").lerp(new j("#4f9a45"),Math.min(1,Math.max(0,(f-1)/6)));let g=this.isl.n(u*.3,p*.3);o.offsetHSL(0,0,(g-.5)*.06)}f>=.4&&c(u,p)<1.6&&o.set("#d9b77c"),r.push(o.r,o.g,o.b)}n.setAttribute("color",new Kt(r,3)),n.computeVertexNormals();let l=new it(n,new Ln({vertexColors:!0,gradientMap:ls()}));l.receiveShadow=!0,this.sc.add(l),this.ground=l}buildWater(){let n=new Uint8Array(65536);for(let c=0;c<128;c++)for(let l=0;l<128;l++){let h=(l/127-.5)*210,u=(c/127-.5)*210,p=this.isl.raw(h,u),f=Math.max(0,Math.min(255,Math.round((p+6)/12*255))),g=(c*128+l)*4;n[g]=n[g+1]=n[g+2]=f,n[g+3]=255}let s=new Di(n,128,128,rn);s.magFilter=s.minFilter=bn,s.needsUpdate=!0;let r=new Se({transparent:!0,fog:!0,uniforms:Jn.merge([mt.fog,{t:{value:0},ht:{value:null},E:{value:210}}]),vertexShader:`uniform float t;varying vec2 vXZ;varying float vW;
#include <fog_pars_vertex>
void main(){vec3 p=position;float w=sin(p.x*0.12+t*1.1)*0.18+cos(p.z*0.1+t*0.9)*0.18;p.y+=w;vW=w;vXZ=p.xz;vec4 mvPosition=modelViewMatrix*vec4(p,1.0);gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
}`,fragmentShader:`uniform float t;uniform sampler2D ht;uniform float E;varying vec2 vXZ;varying float vW;
#include <fog_pars_fragment>
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
void main(){vec2 uv=vXZ/E+0.5;float h=-6.0;if(uv.x>0.0&&uv.x<1.0&&uv.y>0.0&&uv.y<1.0)h=texture2D(ht,uv).r*12.0-6.0;
float depth=clamp(-h/4.0,0.0,1.0);vec3 shallow=vec3(0.36,0.88,0.82),deep=vec3(0.09,0.42,0.78);vec3 c=mix(shallow,deep,smoothstep(0.0,1.0,depth));
c=mix(c,deep*0.8,smoothstep(80.0,200.0,length(vXZ)));
float band=smoothstep(0.55,0.0,-h)*step(-1.2,h);float foam=band*step(0.5,fract(-h*2.2+t*0.35+sin(vXZ.x*0.3)*0.2));c=mix(c,vec3(1.0),foam*0.75+band*0.15);
vec2 g=floor(vXZ*1.6);float sp=step(0.985,hash(g+floor(t*2.0)))*smoothstep(0.1,0.25,vW+0.2);c+=sp*0.8;
gl_FragColor=vec4(c,0.94);
#include <fog_fragment>
}`});r.uniforms.ht.value=s,r.uniforms.E.value=210;let o=new Ye(700,700,this.tier>=2?60:120,this.tier>=2?60:120);o.rotateX(-Math.PI/2);let a=new it(o,r);a.position.y=sf-.05,this.water=a,this.sc.add(a)}buildNature(){let t=er(11),e=[],n=[],s=[],r=[],o=(_,m)=>{let d=this.isl.h(_,m);if(d<.8||d>7)return!1;for(let v of this.sites)if(Math.hypot(_-v.x,m-v.z)<(v.flat||7)+2)return!1;return!(Math.abs(_)<3&&m>0)};for(let _=0;_<420&&e.length<140;_++){let m=(t()-.5)*120,d=(t()-.5)*120;if(!o(m,d))continue;let v=this.isl.h(m,d),x=.8+t()*.7;e.push([m,v,d,x]),n.push([m,v+2.2*x,d,x,t()])}for(let _=0;_<120&&s.length<40;_++){let m=(t()-.5)*120,d=(t()-.5)*120;o(m,d)&&s.push([m,this.isl.h(m,d),d,.5+t()*1.2,t()*6])}for(let _=0;_<900&&r.length<260;_++){let m=(t()-.5)*110,d=(t()-.5)*110;o(m,d)&&r.push([m,this.isl.h(m,d),d,t()])}let a=new te,c=new hn,l=new P,h=new P,u=(_,m,d,v)=>{let x=new hi(_,m,d.length);return d.forEach((M,A)=>{v(M,l,c,h),a.compose(l,c,h),x.setMatrixAt(A,a)}),x.castShadow=!0,x.receiveShadow=!0,this.sc.add(x),x};u(new ee(.22,.32,2.2,7),Re("#8a5a2b"),e,([_,m,d,v],x,M,A)=>{x.set(_,m+1.1*v,d),M.identity(),A.set(v,v,v)});let p=di([new Zn(1.4,1),new Zn(1,1).translate(.7,.6,.2),new Zn(.9,1).translate(-.6,.8,-.3)]),f=u(p,Re("#4caf50"),n,([_,m,d,v,x],M,A,w)=>{M.set(_,m,d),A.setFromEuler(new ze(0,x*6,0)),w.set(v,v*.95,v)});n.forEach((_,m)=>f.setColorAt(m,new j(_[4]<.33?"#5cc25a":_[4]<.66?"#43a047":"#7dd35f"))),u(new Sr(.8,0),Re("#a3a3ad"),s,([_,m,d,v,x],M,A,w)=>{M.set(_,m+.2*v,d),A.setFromEuler(new ze(x,x*2,0)),w.set(v,v*.7,v)});let g=u(new be(.14,.35,5),Re("#ffffff"),r,([_,m,d,v],x,M,A)=>{x.set(_,m+.15,d),M.identity(),A.set(1,1,1)});r.forEach((_,m)=>g.setColorAt(m,new j(["#ff6b9a","#ffe066","#ffffff","#b06bff"][Math.floor(_[3]*4)])))}buildSky(){let t=new it(new Gt(600,32,16),new Se({side:Ie,depthWrite:!1,fog:!1,uniforms:{sun:{value:new P(.45,.55,-.7).normalize()}},vertexShader:"varying vec3 vD;void main(){vD=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 sun;varying vec3 vD;void main(){float y=max(vD.y,0.0);vec3 top=vec3(0.16,0.45,0.86),hor=vec3(0.80,0.93,1.0);vec3 c=mix(hor,top,pow(y,0.55));float s=max(dot(vD,sun),0.0);c+=vec3(1.0,0.86,0.55)*pow(s,40.0)*0.9+vec3(1.0,0.95,0.8)*pow(s,600.0)*2.0;if(vD.y<0.0)c=hor;gl_FragColor=vec4(c,1.0);}"}));t.renderOrder=-1,this.sc.add(t),this.dome=t;let e=er(5),n=Re("#ffffff");this.clouds=[];for(let r=0;r<16;r++){let o=[];for(let h=0;h<5;h++)o.push(new Gt(2+e()*2.4,12,9).translate(h*2.6-5,e()*1.4,e()*2));let a=new it(di(o),n),c=e()*Math.PI*2,l=45+e()*90;a.position.set(Math.cos(c)*l,26+e()*14,Math.sin(c)*l),a.userData.v=.6+e()*.8,this.sc.add(a),this.clouds.push(a)}let s=[];for(let r=0;r<9;r++)s.push(new Gt(4+e()*3,12,9).translate((e()-.5)*18,e()*3,(e()-.5)*12));this.storm=new it(di(s),new Ln({color:"#4a4060",gradientMap:ls(),emissive:new j("#b26bff"),emissiveIntensity:0})),this.storm.position.set(0,30,-82),this.sc.add(this.storm),this.bolt=new je("#d9b8ff",0,90),this.bolt.position.set(0,24,-80),this.sc.add(this.bolt)}buildSites(){this.siteObjs=[];for(let t of this.sites){let e=(of[t.kind]||of.shop)(),n=this.isl.h(t.x,t.z);e.position.set(t.x,n,t.z),e.rotation.y=t.rot||0,this.sc.add(e);let s=new it(new Ys(1.1,1.5,32),new $t({color:t.color||"#ffe066",transparent:!0,opacity:.85}));s.rotation.x=-Math.PI/2;let r=t.x+Math.sin(t.rot||0)*(t.padDist||6),o=t.z+Math.cos(t.rot||0)*(t.padDist||6);s.position.set(r,this.isl.h(r,o)+.08,o),this.sc.add(s);let a=Xx(t.name,t.sub,t.color,t.icon);a.position.set(t.x,n+(t.labelY||9),t.z),this.sc.add(a);let c=[];e.updateMatrixWorld(!0),e.traverse(l=>{let h=l.userData;h.spin||h.bob||h.pulse||h.flicker?c.push(l):h.wave||h.slow?l.matrixAutoUpdate=!0:l!==e&&(l.matrixAutoUpdate=!1)}),this.siteObjs.push({s:t,b:e,pad:s,lab:a,px:r,pz:o,r:t.solid||3.5,anim:c})}}buildExtras(){let t=er(21),e=this.tier;this.beacons=[];for(let y of this.siteObjs){if(!["canyon","castle","forge","tower","docks","dungeon","fortress"].includes(y.s.kind))continue;let b=new it(new ee(.6,1.6,70,12,1,!0),new $t({color:y.s.color||"#ffe066",transparent:!0,opacity:.18,blending:pn,depthWrite:!1,side:Ee,fog:!1}));b.position.set(y.s.x,y.b.position.y+35,y.s.z),this.sc.add(b),this.beacons.push(b)}let n=document.createElement("canvas");n.width=64,n.height=256;let s=n.getContext("2d");for(let y=0;y<64;y++)s.fillStyle=`rgba(255,255,255,${.35+t()*.6})`,s.fillRect(y,t()*256,1+t()*2,30+t()*80);let r=new wn(n);r.wrapS=r.wrapT=Ri,r.repeat.set(3,1.5),this.fallTex=r;let o=new P(-36.8,0,-35),a=new P(-27.6,0,-26.4);o.y=this.isl.h(o.x,o.z)+.4,a.y=this.isl.h(a.x,a.z)+.3;let c=o.clone().sub(a),l=c.length();c.normalize();let h=new P().crossVectors(c,new P(0,1,0)).normalize(),u=new P().crossVectors(h,c).normalize(),p=new it(new Ye(4.5,l,1,1),new $t({map:r,color:"#bfeaff",transparent:!0,opacity:.92,side:Ee}));p.quaternion.setFromRotationMatrix(new te().makeBasis(h,c,u)),p.position.copy(o.clone().add(a).multiplyScalar(.5)).addScaledVector(u,.5),this.sc.add(p);let f=new it(new Dn(4,24),new $t({color:"#ffffff",transparent:!0,opacity:.5}));f.rotation.x=-Math.PI/2,f.position.set(a.x+1,a.y+.15,a.z+1),this.sc.add(f),this.mist=f;let g=[],_=[],m=[],d=(y,b)=>!this.siteObjs.some(N=>Math.hypot(y-N.s.x,b-N.s.z)<(N.s.flat||7)+2)&&!(Math.abs(y)<3&&b>0);for(let y=0;y<2500;y++){let b=(t()-.5)*130,N=(t()-.5)*130,U=this.isl.h(b,N);if(d(b,N))if(U>.35&&U<1&&g.length<26)g.push([b,U,N,.9+t()*.4,t()]);else if(U>8&&U<15&&_.length<45)_.push([b,U,N,.8+t()*.6]);else{let L=Math.hypot(b,N);L>9&&L<20&&U>1&&m.length<14&&m.push([b,U,N,.8+t()*.4,t()])}}let v=new te,x=new hn,M=new P,A=new P,w=(y,b,N,U)=>{if(!N.length)return;let L=new hi(y,b,N.length);return N.forEach((F,D)=>{U(F,M,x,A),v.compose(M,x,A),L.setMatrixAt(D,v)}),L.castShadow=e<2,L.receiveShadow=!0,this.sc.add(L),L};w(new ee(.16,.26,4,6).translate(0,2,0),Re("#a77b4f"),g,([y,b,N,U,L],F,D,Y)=>{F.set(y,b,N),D.setFromEuler(new ze(.15*(L-.5),L*6,.18)),Y.set(U,U,U)});let E=di([0,1,2,3,4,5].map(y=>new be(.35,2.6,4).rotateZ(Math.PI/2.4).translate(1.1,0,0).rotateY(y*Math.PI/3)));w(E,Re("#3fbf5f"),g,([y,b,N,U,L],F,D,Y)=>{F.set(y+.7*U,b+4*U,N),D.setFromEuler(new ze(0,L*6,0)),Y.set(U,U,U)});let I=di([new be(1.4,2.2,8).translate(0,1.6,0),new be(1.1,1.9,8).translate(0,2.7,0),new be(.75,1.6,8).translate(0,3.7,0),new ee(.2,.25,1,6).translate(0,.5,0)]);if(w(I,Re("#2e7d4f"),_,([y,b,N,U],L,F,D)=>{L.set(y,b,N),F.identity(),D.set(U,U,U)}),w(new ee(.2,.3,2,7).translate(0,1,0),Re("#7a4a3a"),m,([y,b,N,U],L,F,D)=>{L.set(y,b,N),F.identity(),D.set(U,U,U)}),w(di([new Zn(1.5,1),new Zn(1.1,1).translate(.8,.5,.3)]),Re("#ffb3d1"),m,([y,b,N,U,L],F,D,Y)=>{F.set(y,b+2.6*U,N),D.setFromEuler(new ze(0,L*6,0)),Y.set(U,U,U)}),e<2){let y=[];for(let U=0;U<4e3&&y.length<700;U++){let L=(t()-.5)*110,F=(t()-.5)*110,D=this.isl.h(L,F);D>1&&D<7&&d(L,F)&&y.push([L,D,F,t()])}let b=di([0,1,2].map(U=>new be(.06,.55,3).translate(0,.27,0).rotateZ((U-1)*.35).rotateY(U*2.1))),N=w(b,Re("#5fbf4a"),y,([U,L,F,D],Y,W,ct)=>{Y.set(U,L,F),W.setFromEuler(new ze(0,D*6,0)),ct.setScalar(.8+D*.7)});N&&(N.castShadow=!1)}if(e<2){let b=new Float32Array(480);for(let D=0;D<160;D++)b[D*3]=(t()-.5)*50,b[D*3+1]=t()*8+.5,b[D*3+2]=(t()-.5)*50;let N=new me;N.setAttribute("position",new Ae(b,3));let U=document.createElement("canvas");U.width=U.height=32;let L=U.getContext("2d"),F=L.createRadialGradient(16,16,0,16,16,16);F.addColorStop(0,"rgba(255,250,210,1)"),F.addColorStop(.4,"rgba(255,230,140,0.6)"),F.addColorStop(1,"rgba(255,230,140,0)"),L.fillStyle=F,L.fillRect(0,0,32,32),this.motes=new ui(N,new Yn({map:new wn(U),size:.35,transparent:!0,opacity:.85,blending:pn,depthWrite:!1})),this.sc.add(this.motes)}this.birds=[];let B=new me;B.setAttribute("position",new Kt([-.9,.2,0,0,0,.25,0,0,-.15,.9,.2,0,0,0,.25,0,0,-.15],3)),B.computeVertexNormals();for(let y=0;y<7;y++){let b=new it(B,new $t({color:"#2a2440",side:Ee}));b.userData={r:18+t()*25,h:20+t()*8,a:t()*6.28,v:.25+t()*.2,cx:(t()-.5)*30,cz:(t()-.5)*30},this.sc.add(b),this.birds.push(b)}}buildDetails(){let t=er(33),e=this.tier,n=(L,F)=>this.isl.h(L,F),s=(()=>{let L=document.createElement("canvas");L.width=L.height=64;let F=L.getContext("2d"),D=F.createRadialGradient(32,32,0,32,32,32);return D.addColorStop(0,"rgba(255,240,190,1)"),D.addColorStop(.35,"rgba(255,200,90,0.5)"),D.addColorStop(1,"rgba(255,200,90,0)"),F.fillStyle=D,F.fillRect(0,0,64,64),new wn(L)})(),r=(L,F,D,Y=2,W="#ffd27a")=>{let ct=new Xs(new ji({map:s,color:W,transparent:!0,blending:pn,depthWrite:!1}));return ct.position.set(L,F,D),ct.scale.setScalar(Y),this.sc.add(ct),ct};this.glows=[];let o=n(0,13),a=at(new ee(6.4,6.6,.25,40),"#d9cbb0");a.position.set(0,o+.02,13),a.castShadow=!1,this.sc.add(a);let c=at(new Ke(6.5,.18,8,48),"#b9a888");c.rotation.x=Math.PI/2,c.position.set(0,o+.15,13),this.sc.add(c);let l=at(new ee(2.4,2.6,.8,32,1,!0),"#cfc6b8",{side:Ee});l.position.set(0,o+.5,13),this.sc.add(l);let h=at(new Ke(2.45,.18,8,40),"#e8e0d0");h.rotation.x=Math.PI/2,h.position.set(0,o+.92,13),this.sc.add(h);let u=new it(new Dn(2.35,32),new Ln({color:"#5fd4e8",gradientMap:ls()}));u.rotation.x=-Math.PI/2,u.position.set(0,o+.75,13),this.sc.add(u);let p=at(new ee(.35,.5,2.2,16),"#e8e0d0");p.position.set(0,o+1.5,13),this.sc.add(p);let f=at(new ee(1,.4,.4,20),"#e8e0d0");f.position.set(0,o+2.6,13),this.sc.add(f);let g=at(new Sn(.4),"#ffe066",{emissive:new j("#ffb627"),emissiveIntensity:.8});if(g.position.set(0,o+3.4,13),g.userData.spin=1,this.sc.add(g),this.fStar=g,e<2){let F=new Float32Array(420),D=[];for(let W=0;W<140;W++)D.push([(t()-.5)*1.6,3+t()*1.5,(t()-.5)*1.6,t()*1.2]);let Y=new me;Y.setAttribute("position",new Ae(F,3)),this.jet={pts:new ui(Y,new Yn({color:"#dff7ff",size:.16,transparent:!0,opacity:.9})),vel:D,base:new P(0,o+2.8,13)},this.sc.add(this.jet.pts)}let _=[],m=[],d=[];for(let L of this.siteObjs){if(L.s.path===!1)continue;let F=0,D=13,Y=L.px,W=L.pz,ct=Math.hypot(Y-F,W-D),xt=(W-D)/ct,vt=-(Y-F)/ct;for(let Xt=8;Xt<ct-3;Xt+=9){let jt=Xt/ct,J=F+(Y-F)*jt+xt*2.3,ot=D+(W-D)*jt+vt*2.3;n(J,ot)<.4||(_.push([J,n(J,ot),ot]),m.push([J,n(J,ot)+2.6,ot]))}for(let Xt=7;Xt<ct-2;Xt+=1.3)for(let jt of[-1.75,1.75]){let J=Xt/ct,ot=F+(Y-F)*J+xt*jt,bt=D+(W-D)*J+vt*jt;n(ot,bt)<.4||d.push([ot,n(ot,bt),bt,t()])}}let v=new te,x=new hn,M=new P,A=new P(1,1,1),w=(L,F,D,Y,W=!0)=>{if(!D.length)return;let ct=new hi(L,F,D.length);return D.forEach((xt,vt)=>{x.identity(),A.set(1,1,1),Y(xt,M,x,A),v.compose(M,x,A),ct.setMatrixAt(vt,v)}),ct.castShadow=W&&e<2,ct.receiveShadow=!0,this.sc.add(ct),ct};w(di([new ee(.09,.12,2.5,8).translate(0,1.25,0),new ee(.25,.3,.15,8).translate(0,.07,0),new be(.3,.25,6).translate(0,2.95,0)]),Re("#3a3346"),_,([L,F,D],Y)=>Y.set(L,F,D)),w(new re(.32,.38,.32),Re("#ffe9a8",{emissive:new j("#ffc65c"),emissiveIntensity:.9}),m,([L,F,D],Y)=>Y.set(L,F,D),!1),e<2&&m.forEach(([L,F,D])=>this.glows.push(r(L,F,D,1.6))),w(new Sr(.28,0),Re("#bdb5a6"),d,([L,F,D,Y],W,ct,xt)=>{W.set(L,F+.05,D),ct.setFromEuler(new ze(Y,Y*3,0)),xt.set(1+Y*.4,.6,1)},!1);let E=new st;E.add(Pt(on(.12,.14,3,"#7a5230",8),0,1.5,0)),[["#ff6b6b",0],["#ff9f43",1.9],["#e0457b",3.4],["#4d7cff",5.2]].forEach(([L,F],D)=>{let Y=Pt(ce(1.5,.35,.08,L),.55,2.6-D*.45,0),W=new st;W.add(Y),W.rotation.y=F,E.add(W)}),E.position.set(3.6,o,18),this.sc.add(E);let I=L=>this.siteObjs.find(F=>F.s.id===L),B=(L,F,D,Y)=>new P(F,D,Y).applyMatrix4(L.b.matrixWorld),y=I("dojo");if(y)for(let L of[-2.6,2.6]){let F=B(y,L,0,3.4),D=at(new De(.28,.3,4,10),"#ff5a4a",{emissive:new j("#ff7b4a"),emissiveIntensity:.9});D.position.set(F.x,F.y+2.2,F.z),this.sc.add(D),e<2&&this.glows.push(r(F.x,F.y+2.2,F.z,2.4,"#ffb08a"))}let b=I("dungeon");if(b)for(let L of[-2.2,2.2]){let F=B(b,L,0,4.6);this.sc.add(Pt(on(.1,.12,1.6,"#5a3a1e",8),F.x,F.y+.8,F.z));let D=at(new be(.22,.6,8),"#ff9f43",{emissive:new j("#ff7b1c"),emissiveIntensity:1});D.position.set(F.x,F.y+1.9,F.z),D.userData.flicker=1,this.sc.add(D),this.torches=(this.torches||[]).concat([D]),e<2&&this.glows.push(r(F.x,F.y+1.9,F.z,2.2,"#ffb070"))}let N=I("forge");if(this.smoke=[],N){let L=B(N,1.6,5.8,-.8);for(let F=0;F<10;F++){let D=new it(new Gt(.45,10,8),new Ln({color:"#d8d8e0",gradientMap:ls(),transparent:!0,opacity:.7}));D.userData={base:L.clone(),ph:F/10},this.sc.add(D),this.smoke.push(D)}}let U=I("camp");if(U&&e<2){let L=B(U,0,.8,1.6),F=40,D=new Float32Array(F*3),Y=new me;Y.setAttribute("position",new Ae(D,3)),this.sparks={pts:new ui(Y,new Yn({color:"#ffb347",size:.12,transparent:!0,blending:pn,depthWrite:!1})),base:L,ph:Array.from({length:F},()=>t())},this.sc.add(this.sparks.pts)}if(this.flies=[],e<2){let L=new Dn(.16,8);for(let F=0;F<10;F++){let D=new st,Y=new $t({color:["#ff9fd0","#ffe066","#9fd8ff","#c9a3ff"][F%4],side:Ee}),W=new it(L,Y),ct=new it(L,Y);W.position.x=-.15,ct.position.x=.15,D.add(W,ct),D.userData={w1:W,w2:ct,a:t()*6.3,r:3+t()*7,h:.8+t()*1.5,sp:.4+t()*.5},this.sc.add(D),this.flies.push(D)}}}dpr(){let t=window.devicePixelRatio||1;return this.tier===0?Math.min(1.5,t):1}stepDetails(t){let e=this.t,n=this.hero.position;if(this.jet){let s=this.jet.pts.geometry.attributes.position,r=this.jet.base;this.jet.vel.forEach(([o,a,c,l],h)=>{let u=(e*.9+l)%1.2;s.setXYZ(h,r.x+o*u,r.y+a*u-4.9*u*u,r.z+c*u)}),s.needsUpdate=!0}for(let s of this.smoke||[]){let r=s.userData,o=(e*.18+r.ph)%1;s.position.set(r.base.x+Math.sin(o*6+r.ph*9)*.6+o*1.5,r.base.y+o*7,r.base.z),s.scale.setScalar(.6+o*2.2),s.material.opacity=.65*(1-o)}if(this.sparks){let s=this.sparks.pts.geometry.attributes.position,r=this.sparks.base;this.sparks.ph.forEach((o,a)=>{let c=(e*.5+o)%1;s.setXYZ(a,r.x+Math.sin(o*40+e)*.4*c,r.y+c*3,r.z+Math.cos(o*30+e)*.4*c)}),s.needsUpdate=!0}for(let s of this.torches||[])s.scale.set(1+Math.sin(e*23)*.12,1+Math.sin(e*17)*.25,1);for(let s of this.glows||[])s.material.opacity=.75+Math.sin(e*3+s.position.x)*.15;for(let s of this.flies||[]){let r=s.userData;r.a+=t*r.sp,s.position.set(n.x+Math.cos(r.a)*r.r,n.y+r.h+Math.sin(e*2+r.r)*.4,n.z+Math.sin(r.a*1.3)*r.r),s.rotation.y=-r.a;let o=Math.sin(e*22+r.r)*1.1;r.w1.rotation.y=o,r.w2.rotation.y=-o}for(let s of this.siteObjs){let r=s.b.userData.coins;r&&(r.rotation.y+=t*.4)}this._waves||(this._waves=[],this.siteObjs.forEach(s=>s.b.traverse(r=>{r.userData.wave&&this._waves.push(r)})));for(let s of this._waves)s.rotation.z=-2.4+Math.sin(e*5)*.5}setTier(t){t!==this.tier&&(this.tier=t,this.r.setPixelRatio(this.dpr()),this.resize(),t>=2&&(this.r.shadowMap.enabled=!1,this.sc.traverse(e=>{e.material&&(e.material.needsUpdate=!0)}),this.motes&&(this.motes.visible=!1)),this.o.onTier&&this.o.onTier(t))}intro(){this.fly={t:0,D:5.2,from:new P(-70,70,110),mid:new P(30,45,40)};let t=document.createElement("div");t.className="w3d-title",t.innerHTML="NUMBER ISLE<small>Walk to a glowing ring to play</small>",this.host.appendChild(t),this.titleEl=t;let e=()=>{this.fly&&(this.fly.t=this.fly.D)};t.addEventListener("pointerdown",e),this.r.domElement.addEventListener("pointerdown",e,{once:!0})}update(t){for(let e of this.siteObjs){let n=t.find(s=>s.id===e.s.id);n&&(n.sub!==e.s.sub||n.name!==e.s.name)?(e.s=Object.assign(e.s,n),e.lab.userData.redraw(n.name,n.sub)):n&&Object.assign(e.s,n)}}ui(){let t=this.host,e=document.createElement("div");e.className="w3d-joy",e.innerHTML="<i></i>";let n=e.firstChild;t.appendChild(e);let s=null,r=null,o=f=>{let g=e.getBoundingClientRect(),_=g.left+g.width/2,m=g.top+g.height/2,d=f.clientX-_,v=f.clientY-m,x=g.width*.38,M=Math.hypot(d,v);M>x&&(d*=x/M,v*=x/M),n.style.transform=`translate(${d}px,${v}px)`,this.joy.x=d/x,this.joy.y=v/x};e.addEventListener("pointerdown",f=>{s=f.pointerId,e.setPointerCapture(s),o(f),f.preventDefault()}),e.addEventListener("pointermove",f=>{f.pointerId===s&&o(f)});let a=f=>{f.pointerId===s&&(s=null,this.joy.x=this.joy.y=0,n.style.transform="")};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a);let c=(f,g,_)=>{let m=document.createElement("button");return m.type="button",m.className="w3d-btn "+f,m.textContent=g,m.addEventListener("pointerdown",d=>{d.preventDefault(),d.stopPropagation(),_()}),t.appendChild(m),m};this.jumpBtn=c("w3d-jump","\u2912",()=>this.jump()),this.actBtn=c("w3d-act","Go!",()=>this.act()),this.actBtn.hidden=!0;let l=null,h=0,u=this.r.domElement;u.addEventListener("pointerdown",f=>{l=f.pointerId,h=f.clientX,u.setPointerCapture(l)}),u.addEventListener("pointermove",f=>{f.pointerId===l&&(this.yaw-=(f.clientX-h)*.008,h=f.clientX)});let p=f=>{f.pointerId===l&&(l=null)};u.addEventListener("pointerup",p),u.addEventListener("pointercancel",p),this.kd=f=>{if(this.paused||!this.visible())return;let g=f.key.toLowerCase();if(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"," ","e","enter"].includes(g)){if(f.target&&/INPUT|TEXTAREA/.test(f.target.tagName))return;f.preventDefault()}this.keys[g]=!0,g===" "&&this.jump(),(g==="e"||g==="enter")&&(!document.getElementById("talk")||document.getElementById("talk").hidden)&&this.act()},this.ku=f=>{this.keys[f.key.toLowerCase()]=!1},window.addEventListener("keydown",this.kd),window.addEventListener("keyup",this.ku),this.card=document.createElement("div"),this.card.className="w3d-card",this.card.hidden=!0,t.appendChild(this.card)}visible(){return this.host.getClientRects().length>0}guide(t){this.gObj&&(this.sc.remove(this.gObj),this.gObj=null),this.gEl&&(this.gEl.remove(),this.gEl=null),this.gSite=null;let e=t&&this.siteObjs.find(l=>l.s.id===t);if(!e)return;this.gSite=e;let n=new st,s=Re("#ffd23f",{emissive:new j("#ff9f1c"),emissiveIntensity:.45}),r=new it(new be(1.3,2.4,20),s);r.rotation.x=Math.PI,n.add(r);let o=new it(new Ke(1.5,.22,10,28),s);o.rotation.x=Math.PI/2,o.position.y=1.6,n.add(o);let a=new it(new ee(1.1,2.4,90,14,1,!0),new $t({color:"#ffd23f",transparent:!0,opacity:.32,blending:pn,depthWrite:!1,side:Ee,fog:!1}));a.position.y=45,n.add(a),n.userData.beam=a,n.userData.y0=e.b.position.y+(e.s.labelY||8)+3.2,n.position.set(e.s.x,n.userData.y0,e.s.z),this.sc.add(n),this.gObj=n;let c=document.createElement("div");c.className="w3d-guide",c.innerHTML='<span class="w3d-guide-ar">\u27A4</span><b>\u{1F43E} '+(e.s.icon||"")+"</b>",this.host.appendChild(c),this.gEl=c}stepGuide(){let t=this.gObj,e=this.gSite;if(!t)return;t.position.y=t.userData.y0+Math.sin(this.t*3)*.6,t.rotation.y+=.03,t.userData.beam.material.opacity=.26+Math.sin(this.t*4)*.1;let n=this.hero.position,s=e.s.x-n.x,r=e.s.z-n.z,o=Math.hypot(s,r),a=this.yaw,c=s*Math.sin(a)+r*Math.cos(a),l=-s*Math.cos(a)+r*Math.sin(a);this.gEl.style.display=o<9||this.fly?"none":"",this.gEl.querySelector(".w3d-guide-ar").style.transform="rotate("+(Math.atan2(l,c)*180/Math.PI-90).toFixed(1)+"deg)"}jump(){this.ground0&&(this.vy=7.5,this.ground0=!1,this.o.sfx&&this.o.sfx("jump"))}act(){if(this.adv&&this.adv.near){this.adv.act();return}this.near&&this.o.onEnter&&this.o.onEnter(this.near.s)}adventure(t){return this.adv=new Ql(this,t),this.adv}resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.r.setSize(t,e,!1),this.r.domElement.style.width="100%",this.r.domElement.style.height="100%",this.cam.aspect=t/e,this.cam.updateProjectionMatrix()}step(t){this.t+=t;let e=this.hero,n=this.isl,s=this.joy.x+(this.keys.d||this.keys.arrowright?1:0)-(this.keys.a||this.keys.arrowleft?1:0),r=this.joy.y+(this.keys.s||this.keys.arrowdown?1:0)-(this.keys.w||this.keys.arrowup?1:0);this.adv&&this.adv.lock&&(s=0,r=0);let o=Math.min(1,Math.hypot(s,r)),a=o>.12;if(a){let w=Math.atan2(-s,-r)+this.yaw,E=8.5*o,I=e.position.x+Math.sin(w)*E*t,B=e.position.z+Math.cos(w)*E*t,y=n.h(I,B)<sf+.15||Math.hypot(I,B-13)<2.6;for(let U of this.siteObjs)Math.hypot(I-U.s.x,B-U.s.z)<U.r&&(y=!0);y||(e.position.x=I,e.position.z=B);let N=w-e.rotation.y;N=Math.atan2(Math.sin(N),Math.cos(N)),e.rotation.y+=N*Math.min(1,t*12)}let c=n.h(e.position.x,e.position.z);this.vy-=22*t,e.position.y+=this.vy*t,e.position.y<=c&&(e.position.y=c,this.vy=0,this.ground0=!0);let l=e.userData.limbs,h=a&&this.ground0?Math.sin(this.t*11)*.7*o:0;l.lL.rotation.x=h,l.lR.rotation.x=-h,l.aL.rotation.x=-h*.8,l.aR.rotation.x=h*.8,e.userData.cape&&(e.userData.cape.rotation.x=.12+(a?.35*o:0)+Math.sin(this.t*6)*.04);let u=this.dog,p=e.position.x-Math.sin(e.rotation.y)*1.8+Math.cos(e.rotation.y)*1.2,f=e.position.z-Math.cos(e.rotation.y)*1.8-Math.sin(e.rotation.y)*1.2,g=p-u.position.x,_=f-u.position.z,m=Math.hypot(g,_);if(m>.4){let w=Math.min(m,t*9.5*Math.min(1,m/1.5+.4));u.position.x+=g/m*w,u.position.z+=_/m*w,u.rotation.y=Math.atan2(g,_)}u.position.y=n.h(u.position.x,u.position.z)+(m>.6?Math.abs(Math.sin(this.t*14))*.12:0),u.userData.tail.rotation.z=Math.sin(this.t*12)*.6,u.userData.legs.forEach((w,E)=>w.rotation.x=m>.6?Math.sin(this.t*14+E*1.6)*.6:0);let d=this.camDist,v=e.position.x-Math.sin(this.yaw)*d,x=e.position.z-Math.cos(this.yaw)*d,M=e.position.y+5.5;M=Math.max(M,n.h(v,x)+1.5);for(let w of this.siteObjs)Math.hypot(v-w.s.x,x-w.s.z)<w.r+2.5&&(M=Math.max(M,w.b.position.y+(w.s.labelY||8)*.9));if(this.fly){let w=this.fly;w.t+=t;let E=Math.min(1,w.t/w.D),I=E*E*(3-2*E),B=new P(v,M,x),y=E<.5?w.from.clone().lerp(w.mid,I*2):w.mid.clone().lerp(B,(I-.5)*2);this.cam.position.copy(y),this.cam.lookAt(new P(0,4,-6).lerp(new P(e.position.x,e.position.y+1.8,e.position.z),I)),this.titleEl&&(this.titleEl.style.opacity=String(E<.15?E/.15:E>.75?Math.max(0,(1-E)/.25):1)),E>=1&&(this.fly=null,this.titleEl&&(this.titleEl.remove(),this.titleEl=null))}else this.adv&&this.adv.duel||(this.cam.position.lerp(new P(v,M,x),Math.min(1,t*6)),this.cam.lookAt(e.position.x,e.position.y+1.8,e.position.z));if(!this.fly&&this.tier<2&&!this.o.noAuto&&(this._fs=(this._fs||0)+1,this._ft=(this._ft||0)+t,this._ft>4)){let w=this._fs/this._ft;this._fs=this._ft=0,w<24?this.setTier(2):w<42&&this.tier===0&&this.setTier(1)}this.sun.position.set(e.position.x+20,e.position.y+35,e.position.z+12),this.sun.target.position.copy(e.position),this.water.material.uniforms.t.value=this.t,this.fallTex&&(this.fallTex.offset.y-=t*1.6),this.mist&&this.mist.scale.setScalar(1+Math.sin(this.t*3)*.08);for(let w of this.beacons||[])w.material.opacity=.12+Math.sin(this.t*2+w.position.x)*.06;for(let w of this.birds||[]){let E=w.userData;E.a+=E.v*t,w.position.set(E.cx+Math.cos(E.a)*E.r,E.h+Math.sin(E.a*2)*1.5,E.cz+Math.sin(E.a)*E.r),w.rotation.y=-E.a,w.scale.y=1+Math.sin(this.t*10+E.r)*.6}this.motes&&(this.motes.position.set(e.position.x,e.position.y,e.position.z),this.motes.rotation.y+=t*.05,this.motes.material.opacity=.55+Math.sin(this.t*2)*.3),this.stepDetails(t),this.stepGuide();for(let w of this.siteObjs){let E=this.cam.position.distanceTo(w.lab.position);w.lab.material.opacity=Math.max(0,Math.min(1,(E-12)/8)),w.lab.visible=w.lab.material.opacity>.02}if(this.storm){this.storm.rotation.y+=t*.05;let w=Math.sin(this.t*1.3)>.985||Math.sin(this.t*3.7+1)>.995?1:0;this.bolt.intensity=w?60:Math.max(0,this.bolt.intensity-t*300),this.storm.material.emissiveIntensity=w?.8:Math.max(0,this.storm.material.emissiveIntensity-t*4)}for(let w of this.clouds)w.position.x+=w.userData.v*t,w.position.x>120&&(w.position.x=-120);for(let w of this.siteObjs)w.anim.forEach(E=>{let I=E.userData;I.spin&&(E.rotation.y+=t*1.5),I.bob&&(E.position.y=.3+Math.sin(this.t*1.5)*.15),I.pulse&&E.scale.setScalar(1+Math.sin(this.t*3)*.08),I.flicker&&(E.scale.y=1+Math.sin(this.t*17)*.15)}),w.pad.material.opacity=.55+Math.sin(this.t*3)*.3;let A=null;for(let w of this.siteObjs)if(Math.hypot(e.position.x-w.px,e.position.z-w.pz)<2.2){A=w;break}A!==this.near&&(this.near=A,this.actBtn.hidden=!A,A?(this.actBtn.textContent=(A.s.icon?A.s.icon+" ":"")+(A.s.go||"Go!"),this.o.onNear&&this.o.onNear(A.s)):this.o.onNear&&this.o.onNear(null)),this.adv&&this.adv.step(t),this.o.onPos&&(!this._pt||this.t-this._pt>2)&&(this._pt=this.t,this.o.onPos({x:+e.position.x.toFixed(1),z:+e.position.z.toFixed(1)}))}setLook(t,e){let n=this.hero.position.clone(),s=this.hero.rotation.y;this.sc.remove(this.hero),this.hero=hs(t||{}),this.hero.position.copy(n),this.hero.rotation.y=s,this.sc.add(this.hero);let r=this.dog.position.clone();this.sc.remove(this.dog),this.dog=pi(e||{}),this.dog.position.copy(r),this.sc.add(this.dog)}setPaused(t){this.paused=t,t||(this.last=performance.now())}teleport(t,e){this.hero.position.set(t,this.isl.h(t,e),e),this.dog.position.set(t+1.4,this.isl.h(t+1.4,e+1.4),e+1.4)}dispose(){this.alive=!1,cancelAnimationFrame(this.raf),window.removeEventListener("keydown",this.kd),window.removeEventListener("keyup",this.ku),this.ro.disconnect(),this.r.dispose(),this.host.innerHTML=""}};function af(i,t){let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.35,"rgba(255,255,255,0.45)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64);let r=new Xs(new ji({map:new wn(e),color:i,transparent:!0,blending:pn,depthWrite:!1}));return r.scale.setScalar(t||2),r}function th(){let i=new st,e=at(new Gt(.6,18,14),"#7a3cff");e.scale.set(1,.8,1),e.position.y=.75,Fe(e),i.add(e);let n=at(new Gt(.45,14,10),"#b58cff");n.scale.set(1,.7,.6),n.position.set(0,.62,.3),i.add(n);for(let r of[-.22,.22]){let o=at(new Gt(.17,12,10),"#ffffff");o.position.set(r,.95,.45),i.add(o);let a=new it(new Gt(.08,8,6),new $t({color:"#ff2d55"}));a.position.set(r,.95,.6),i.add(a)}for(let r of[-.2,.2]){let o=at(new ee(.03,.03,.5,6),"#3a2a5a");o.position.set(r,1.4,.1),o.rotation.z=r*1.2,i.add(o);let a=at(new Gt(.09,8,6),"#ff2d55",{emissive:new j("#ff2d55"),emissiveIntensity:.9});a.position.set(r*1.6,1.63,.1),i.add(a)}let s=[];for(let r=0;r<6;r++){let o=at(new De(.05,.3,3,6),"#3a2a5a"),a=r<3?-1:1;o.position.set(a*.5,.3,-.3+r%3*.3),o.rotation.z=a*.7,i.add(o),s.push(o)}return i.userData={body:e,legs:s},i}function na(){let i=new st,t=at(new re(.1,1.3,.04),"#e8f0ff",{emissive:new j("#9fd8ff"),emissiveIntensity:.35});t.position.y=.85;let e=at(new re(.42,.08,.12),"#ffd23f");e.position.y=.2;let n=at(new ee(.05,.05,.3,8),"#5a3a1e");return n.position.y=.03,i.add(t,e,n),i}function qx(){let i=new st,t=at(new re(1,.6,.7),"#a4723f");t.position.y=.3,Fe(t,1.04);let e=new st,n=at(new ee(.35,.35,1,12,1,!1,0,Math.PI),"#c8955a");n.rotation.z=Math.PI/2,e.add(n),e.position.set(0,.6,-.35),n.position.z=.35;let s=at(new re(1.04,.1,.74),"#ffd23f");s.position.y=.45;let r=at(new re(.16,.2,.06),"#ffd23f");return r.position.set(0,.5,.37),i.add(t,e,s,r),i.userData={lid:e},i}var Ql=class{constructor(t,e){this.w=t,this.o=e,this.sc=t.sc,this.isl=t.isl,this.digs=[],this.gems=[],this.foes=[],this.fx=[],this.near=null,this.lock=!1,this.duel=null;for(let n of e.digs||[])this.addDig(n);for(let n of e.gems||[])this.addGem(n);for(let n of e.foes||[])this.addFoe(n)}y(t,e){return this.isl.h(t,e)}addDig(t){let e=this.y(t.x,t.z);if(e<.6)return;let n=new st,s=at(new Gt(.9,14,8,0,Math.PI*2,0,Math.PI/2),"#8a5a2b");s.scale.y=.45,n.add(s);for(let o of[.7,-.7]){let a=at(new re(1.1,.06,.16),"#d2443a");a.position.y=.42,a.rotation.y=o,n.add(a)}let r=af("#ffe066",1.4);r.position.y=1,n.add(r),n.position.set(t.x,e,t.z),n.visible=!1,this.sc.add(n),this.digs.push({d:t,g:n,sp:r,done:!1})}addGem(t){let e=new st,n=(t.y!=null?t.y:this.y(t.x,t.z))+1.3,s=t.col||"#5ef2ff",r=at(new Sn(.42),s,{emissive:new j(s),emissiveIntensity:.55});r.scale.y=1.4,e.add(r);let o=af(s,2.4);e.add(o),e.position.set(t.x,n,t.z),this.sc.add(e),this.gems.push({d:t,g:e,m:r,y0:n,found:!1})}addFoe(t){let e=this.y(t.x,t.z);if(e<.6)return;let n=th();n.position.set(t.x,e,t.z),this.sc.add(n),this.foes.push({d:t,g:n,home:{x:t.x,z:t.z},tx:t.x,tz:t.z,t:0,alive:!0})}step(t){let e=this.w,n=e.hero.position,s=e.t,r=null;for(let o of this.digs){if(o.done)continue;let a=Math.hypot(n.x-o.d.x,n.z-o.d.z);o.g.visible=a<16&&!e.fly,o.sp.material.opacity=.6+Math.sin(s*5)*.4,a<2.2&&!r&&(r={type:"dig",s:o})}for(let o of this.gems)o.found||(o.m.rotation.y+=t*1.6,o.g.position.y=o.y0+Math.sin(s*2+o.d.x)*.25,!this.lock&&Math.hypot(n.x-o.d.x,n.z-o.d.z)<1.8&&Math.abs(n.y+1-o.g.position.y)<3&&(o.found=!0,this.burst(o.g.position,o.d.col||"#5ef2ff",24),this.sc.remove(o.g),this.o.onGem&&this.o.onGem(o.d.id)));for(let o of this.foes){if(!o.alive)continue;let a=o.g,c=a.userData;if(this.duel&&this.duel.f===o){c.body.position.y=.75+Math.sin(s*6)*.05;continue}if(o.t-=t,o.t<=0||Math.hypot(a.position.x-o.tx,a.position.z-o.tz)<.4){let f=Math.random()*6.28,g=Math.random()*6;o.tx=o.home.x+Math.cos(f)*g,o.tz=o.home.z+Math.sin(f)*g,o.t=2+Math.random()*3,this.y(o.tx,o.tz)<.6&&(o.tx=o.home.x,o.tz=o.home.z)}let l=o.tx-a.position.x,h=o.tz-a.position.z,u=Math.hypot(l,h);if(u>.1){let f=Math.min(u,t*1.6);a.position.x+=l/u*f,a.position.z+=h/u*f,a.rotation.y=Math.atan2(l,h)}a.position.y=this.y(a.position.x,a.position.z)+Math.abs(Math.sin(s*8+o.home.x))*.08,c.legs.forEach((f,g)=>f.rotation.x=Math.sin(s*14+g)*.5),Math.hypot(n.x-a.position.x,n.z-a.position.z)<4&&(!r||r.type!=="foe")&&(r={type:"foe",f:o})}for(let o of this.fx)o.life-=t,o.v.y-=9*t,o.m.position.addScaledVector(o.v,t),o.m.rotation.x+=t*5,o.life<.3&&o.m.scale.setScalar(Math.max(.01,o.life/.3));if(this.fx=this.fx.filter(o=>o.life>0?!0:(this.sc.remove(o.m),!1)),this.chest){let o=this.chest,a=Math.min(1,(s-o.t0)/.8);o.g.position.y=o.y+.2+a*.6,o.g.rotation.y+=t*.6,s-o.t0>.9&&(o.g.userData.lid.rotation.x=-Math.min(1.9,(s-o.t0-.9)*4)),s-o.t0>3.2&&(this.sc.remove(o.g),this.chest=null)}if(this.duel&&this.duelStep(t),this.lock&&(r=null),this.near=e.near?null:r,!e.near){let o=e.actBtn,a=this.near?this.near.type==="dig"?"\u26CF\uFE0F Dig":"\u2694\uFE0F Duel":null;o.hidden=!a,a&&o.textContent!==a&&(o.textContent=a)}}burst(t,e,n){for(let s=0;s<n;s++){let r=at(new Sn(.09+Math.random()*.08),e,{emissive:new j(e),emissiveIntensity:.6});r.position.copy(t),this.sc.add(r),this.fx.push({m:r,v:new P((Math.random()-.5)*5,3+Math.random()*4,(Math.random()-.5)*5),life:.9+Math.random()*.6})}}act(){let t=this.near;!t||this.lock||(this.lock=!0,t.type==="dig"?(this.digging=t.s,this.o.onDig&&this.o.onDig(t.s.d.id)):(this.startDuel(t.f),this.o.onFoe&&this.o.onFoe(t.f.d.id)))}digOpen(){let t=this.digging;if(!t)return;let e=t.g.position.clone();this.burst(e.clone().setY(e.y+.3),"#8a5a2b",30),t.done=!0,this.sc.remove(t.g);let n=qx();n.position.copy(e),this.sc.add(n),this.chest={g:n,y:e.y,t0:this.w.t},setTimeout(()=>this.burst(e.clone().setY(e.y+1.4),"#ffd23f",36),1100),this.digging=null,this.lock=!1}digCancel(){this.digging=null,this.lock=!1}startDuel(t){let e=this.w,n=e.hero,s=t.g,r=Math.atan2(s.position.x-n.position.x,s.position.z-n.position.z);n.rotation.y=r,s.position.x=n.position.x+Math.sin(r)*3,s.position.z=n.position.z+Math.cos(r)*3,s.rotation.y=r+Math.PI,this.sword||(this.sword=na());let o=n.userData.limbs.aR;this.sword.position.set(0,-.62,.1),this.sword.rotation.set(Math.PI/2,0,0),o.add(this.sword),this.duel={f:t,a:r,swing:0,zap:0,hit:0},this.fade(!0)}fade(t){this.sc.traverse(e=>{if(e.isInstancedMesh)if(t){if(!e.userData.mat0){e.userData.mat0=e.material;let n=e.material.clone();n.transparent=!0,n.opacity=.18,n.depthWrite=!1,e.material=n,e.castShadow=!1}}else e.userData.mat0&&(e.material.dispose(),e.material=e.userData.mat0,e.userData.mat0=null,e.castShadow=!0)})}strike(t){this.duel&&(this.duel.swing=t?.65:.45,this.duel.crit=t,setTimeout(()=>{this.duel&&(this.duel.hit=.35,this.burst(this.duel.f.g.position.clone().setY(this.duel.f.g.position.y+.9),t?"#ffe066":"#ffffff",t?26:14))},220))}zap(){this.duel&&(this.duel.zap=.6)}duelStep(t){let e=this.duel,n=this.w,s=n.hero,r=e.f.g,o=r.userData,a=s.userData.limbs.aR;if(e.swing>0){e.swing-=t;let f=1-Math.max(0,e.swing)/(e.crit?.65:.45);a.rotation.x=-2.6+Math.sin(f*Math.PI)*3.2}else a.rotation.x=-.9;if(e.hit>0?(e.hit-=t,o.body.material=Re(e.hit>.18?"#ffffff":"#7a3cff"),r.position.x+=Math.sin(e.a)*t*2,r.position.z+=Math.cos(e.a)*t*2):o.body.material=Re("#7a3cff"),e.zap>0){e.zap-=t;let f=Math.sin((1-e.zap/.6)*Math.PI);r.position.x=s.position.x+Math.sin(e.a)*(3-f*1.6),r.position.z=s.position.z+Math.cos(e.a)*(3-f*1.6),s.rotation.z=f*.25,e.zap<.3&&!e.zapped&&(e.zapped=1,this.burst(s.position.clone().setY(s.position.y+1.4),"#ff2d55",12))}else s.rotation.z=0,e.zapped=0;let c=(s.position.x+r.position.x)/2,l=(s.position.z+r.position.z)/2,h=s.position.y+1.4,u=Math.cos(e.a),p=-Math.sin(e.a);n.cam.position.lerp(new P(c+u*6.5,h+9.5,l+p*6.5),Math.min(1,t*4)),n.cam.lookAt(c,h-2.6,l)}foeDefeat(){let t=this.duel;if(!t)return;let e=t.f;e.alive=!1,this.burst(e.g.position.clone().setY(e.g.position.y+.8),"#ffd23f",40),this.burst(e.g.position.clone().setY(e.g.position.y+.8),"#b58cff",20),this.sc.remove(e.g),this.endDuel()}foeEscape(){let t=this.duel;if(!t)return;let e=t.f;e.tx=e.home.x,e.tz=e.home.z,this.endDuel()}endDuel(){this.fade(!1);let t=this.w.hero;this.sword&&this.sword.parent&&this.sword.parent.remove(this.sword),t.userData.limbs.aR.rotation.x=0,t.rotation.z=0,this.duel=null,this.lock=!1}respawn(t){this.addFoe(t)}remove(){for(let t of this.digs)this.sc.remove(t.g);for(let t of this.gems)this.sc.remove(t.g);for(let t of this.foes)this.sc.remove(t.g)}};var cf={ok(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},start(i,t){return new jl(i,t)}};var us=(i,t)=>({emissive:new j(i),emissiveIntensity:t||1});function Ze(i,t,e,n,s,r){return at(new An(i,t,e,3,r||Math.min(i,t,e)*.22),n,s)}function ve(i,t,e,n){return i.position.set(t,e,n),i}function Yx(){let i=new st,t=ve(Ze(1,.75,.7,"#c9d1e0"),0,.75,0);Fe(t,1.05),i.add(t);let e=ve(Ze(1.25,1,.95,"#eef2fa"),0,1.65,0);Fe(e,1.05),i.add(e);let n=ve(Ze(1,.62,.06,"#1d1f33"),0,1.66,.48);i.add(n);for(let o of[-.24,.24])i.add(ve(at(new Gt(.11,12,10),"#5ef2ff",us("#5ef2ff",1.2)),o,1.74,.52));let s=at(new Ke(.2,.05,6,14,Math.PI),"#ff4d9d",us("#ff4d9d",.8));s.rotation.z=Math.PI,s.position.set(0,1.55,.52),i.add(s);let r=ve(at(new ee(.04,.04,.45,6),"#9aa6b8"),.15,2.33,0);i.add(r),i.add(ve(at(new Gt(.12,10,8),"#5ef2ff",us("#5ef2ff",1.4)),.15,2.6,0));for(let o of[-.65,.65]){let a=ve(at(new De(.12,.4,4,8),"#9aa6b8"),o,.8,0);a.rotation.z=o>0?-.3:.3,i.add(a)}for(let o of[-.25,.25])i.add(ve(at(new De(.14,.25,4,8),"#7f8ba0"),o,.22,0));return i}function Zx(i){let t=new st,e=i||"#5a3a8a",n="#2a1d45",s=[-.75,.75].map(h=>{let u=new st;return u.add(ve(Ze(.7,1.5,.8,n),0,.75,0),ve(Ze(.95,.35,1.2,e),0,.18,.15)),u.position.x=h,t.add(u),u}),r=ve(Ze(2.1,.6,1.2,n),0,1.75,0);t.add(r);let o=ve(Ze(2.8,1.9,1.6,e),0,3,0);Fe(o,1.03),t.add(o);let a=ve(at(new Gt(.32,16,12),"#ff2d55",us("#ff2d55",1.6)),0,3,.82);t.add(a);let c=ve(Ze(1.3,.9,1.1,n),0,4.35,.1);t.add(c);let l=ve(Ze(.95,.22,.1,"#ff2d55",us("#ff2d55",1.8)),0,4.4,.68);t.add(l);for(let h of[-1,1]){let u=ve(Ze(.9,.8,1.1,e),h*1.75,3.6,0);t.add(u);let p=ve(Ze(.6,1.5,.6,n),h*1.85,2.6,.1);t.add(p);let f=at(new ee(.32,.38,1,14),"#3a3346");f.rotation.x=Math.PI/2,f.position.set(h*1.85,1.8,.55),t.add(f),t.add(ve(at(new Dn(.22,14),"#ff7b1c",us("#ff7b1c",1.5)),h*1.85,1.8,1.06));for(let g=0;g<3;g++){let _=at(new be(.16,.55,6),"#ff4d9d");_.position.set(h*1.75,4.05,-.3+g*.3),t.add(_)}}return t.userData.legs=s,t}function Jx(i){let t=new st,e=i||"#3d7cff",n="#ffd23f",s="#2a2f55";for(let a of[-.7,.7])t.add(ve(Ze(.65,1.4,.75,s),a,.7,0),ve(Ze(.9,.32,1.1,e),a,.16,.12));let r=ve(Ze(2.5,2,1.6,e),0,2.5,0);Fe(r,1.03),t.add(r);let o=ve(at(new Gt(.62,18,14,0,Math.PI*2,0,Math.PI/2),"#9fe8ff",{transparent:!0,opacity:.75,emissive:new j("#5ef2ff"),emissiveIntensity:.3}),0,3.35,.25);o.rotation.x=.4,t.add(o),t.add(ve(Ze(2.7,.25,1.7,n),0,1.55,0)),t.add(ve(at(new Sn(.22),n,us("#ffb627",.8)),0,2.5,.85));for(let a of[-1,1]){t.add(ve(Ze(.8,.75,1,n),a*1.6,3.1,0));let c=ve(Ze(.7,.7,.7,e),a*1.7,1.75,.25);t.add(ve(Ze(.5,1.2,.5,s),a*1.7,2.5,.1),c)}return t}var lf={hero:i=>{let t=i.look||{},e=hs(t),n=i.pose;if(n==="runA"||n==="runB"){let s=n==="runA"?1:-1,r=e.userData.limbs;r.lL.rotation.x=.6*s,r.lR.rotation.x=-.6*s,r.aL.rotation.x=-.5*s,r.aR.rotation.x=.5*s}if(i.sword!==!1){let s=na();s.position.set(0,-.62,.12),s.rotation.set(1.1,0,0),e.userData.limbs.aR.add(s)}return e},knight:i=>{let t=hs(i.look||{}),e=na();return e.position.set(0,-.62,.12),e.rotation.set(1.1,0,0),t.userData.limbs.aR.add(e),t},dog:i=>pi(i.dogAcc||{}),glitch:()=>Yx(),gmech:(i,t)=>Zx(t&&t.tint),mech:i=>Jx(i.col),minion:()=>th()},eh=i=>!!(i&&i.kind&&lf[i.kind]);function $x(i,t){let{w:e,h:n,data:s}=i,r=n,o=-1;for(let a=0;a<n;a++)for(let c=0;c<e;c++)s[(a*e+c)*4+3]>=128&&(a<r&&(r=a),a>o&&(o=a));return(o-r+1)*t}function nh(i,t={}){let e=t.size||.1,n=lf[i.kind](i,t),s=[];n.traverse(h=>{h.isMesh&&h.material&&!h.material.isMeshBasicMaterial&&(h.material=h.material.clone(),s.push(h.material)),h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)}),t.tint&&i.kind!=="gmech"&&s.forEach(h=>h.color&&h.color.lerp(new j(t.tint),Math.min(.5,t.tintK||.3)));let r=new gn().setFromObject(n),o=r.max.y-r.min.y||1,a=$x(i,e)||o,c=a/o;n.scale.setScalar(c),n.position.y=-r.min.y*c;let l=new st;return l.add(n),l.userData={toon:!0,inner:n,mats:s,h:a,w:(r.max.x-r.min.x)*c,solid:null,glow:null,faceL:Kx.has(i.kind)},l}var Kx=new Set(["glitch","gmech","minion"]);function hf(i,t,e,n){let s=[];i.updateMatrixWorld(!0);let r=[];i.traverse(o=>{o.isMesh&&!(o.material&&o.material.side===Ie)&&r.push(o)});for(let o of r){let a=new P;o.getWorldPosition(a),i.attach(o);let c=o.position.clone(),l=a.clone().sub(t);s.push({m:o,p:c,v:new P(l.x*e*(.6+n()),(1.5+n()*2.5)*e*.6,l.z*e*(.6+n())+(n()-.5)*e),r:new P(n()*8,n()*8,n()*8),q0:o.rotation.clone()})}return o=>{for(let a of s)a.m.position.set(a.p.x+a.v.x*o,Math.max(-.05,a.p.y+a.v.y*o-4.9*o*o),a.p.z+a.v.z*o),a.m.rotation.set(a.q0.x+a.r.x*o,a.q0.y+a.r.y*o,a.q0.z+a.r.z*o)}}var jx={uniforms:{tDiffuse:{value:null},time:{value:0},vig:{value:.42},sat:{value:1.12},con:{value:1.06}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float time,vig,sat,con;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec4 c=texture2D(tDiffuse,vUv);vec3 col=c.rgb;float l=dot(col,vec3(.299,.587,.114));col=mix(vec3(l),col,sat);col=(col-.5)*con+.5;col*=vec3(1.02,1.0,0.97);float d=distance(vUv,vec2(.5));col*=1.-vig*smoothstep(.35,.85,d);col+=(h(vUv*vec2(1920.,1080.)+time)-.5)*.035;gl_FragColor=vec4(col,c.a);}"},Qx=i=>Math.max(0,Math.min(1,i)),ft=(i,t,e)=>i+(t-i)*e,Ct=(i,t,e)=>Qx((i-t)/(e-t)),Ce=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,oh=i=>1-Math.pow(1-i,3),uf=i=>i*i*i,V=(i,t,e)=>new P(i,t,e),fs=null;function t_(){if(fs)return fs;let i=new Uint8Array([110,110,110,255,185,185,185,255,255,255,255,255]);return fs=new Di(i,3,1,rn),fs.minFilter=fs.magFilter=qe,fs.needsUpdate=!0,fs}var mi=7,k=()=>(mi=mi*16807%2147483647,(mi-1)/2147483646),e_=["#5ef2ff","#ff2d4d","#ff4d6d","#ffe066","#7dff5a"];function n_(i,t,e){return"#"+[i,t,e].map(n=>n.toString(16).padStart(2,"0")).join("")}function un(i,t={}){if(eh(i))return nh(i,t);let e=t.size||.1,n=t.depth||3,s=new Set((t.glow||e_).map(M=>M.toLowerCase())),r=[],o=[],{w:a,h:c,data:l}=i;for(let M=0;M<c;M++)for(let A=0;A<a;A++){let w=(M*a+A)*4;if(l[w+3]<128)continue;let E=n_(l[w],l[w+1],l[w+2]);(s.has(E)&&!t.noGlow?o:r).push([A,c-1-M,E])}let h=a,u=0,p=c;for(let M of r.concat(o))h=Math.min(h,M[0]),u=Math.max(u,M[0]),p=Math.min(p,M[1]);let f=(h+u+1)/2,g=new st,_=new An(e*.98,e*.98,e*.98,1,e*.16),m=new te,d=new j,v=(M,A)=>{if(!M.length)return null;let w=M.length*n,E=new hi(_,A,w),I=0;for(let[B,y,b]of M)for(let N=0;N<n;N++)m.makeTranslation((B+.5-f)*e,(y-p+.5)*e,(N-(n-1)/2)*e),E.setMatrixAt(I,m),d.set(b),t.tint&&d.lerp(new j(t.tint),t.tintK||.85),E.setColorAt(I,d),I++;return E.castShadow=!0,E.receiveShadow=!0,g.add(E),E};g.userData.solid=v(r,new ye({roughness:t.metal?.38:.62,metalness:t.metal||.05,envMapIntensity:t.metal?1.3:.6}));let x=new $t({color:new j(2.4,2.4,2.4),toneMapped:!1,transparent:!0});return g.userData.glow=v(o,x),g.userData.glowMat=x,g.userData.h=(c-p)*e,g.userData.w=(u-h+1)*e,g}var ia=null;function i_(){if(ia)return ia;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),ia=new wn(i),ia}var sh=class{constructor(t,e,n){this.n=e,this.o=n,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.col=new Float32Array(e*3);let s=new me;s.setAttribute("position",new Ae(this.p,3)),s.setAttribute("color",new Ae(this.col,3)),this.mat=new Yn({map:i_(),alphaTest:.01,opacity:n.add===!1?.45:1,size:(n.size||.15)*1.6,vertexColors:!0,transparent:!0,depthWrite:!1,blending:n.add===!1?Si:pn,toneMapped:!1,sizeAttenuation:!0}),this.pts=new ui(s,this.mat),this.pts.frustumCulled=!1,t.add(this.pts),this.i=0;for(let r=0;r<e;r++)this.p[r*3+1]=-999}emit(t,e,n,s,r,o){for(let a=0;a<o;a++){let c=this.i++%this.n;this.p[c*3]=t.x+(k()-.5)*n,this.p[c*3+1]=t.y+(k()-.5)*n,this.p[c*3+2]=t.z+(k()-.5)*n,this.v[c*3]=e.x+(k()-.5)*(this.o.jit||1),this.v[c*3+1]=e.y+(k()-.5)*(this.o.jit||1),this.v[c*3+2]=e.z+(k()-.5)*(this.o.jit||1),this.life[c]=r*(.6+k()*.6);let l=new j(s[k()*s.length|0]),h=this.o.bright||1.6;this.col[c*3]=l.r*h,this.col[c*3+1]=l.g*h,this.col[c*3+2]=l.b*h}}update(t){let e=this.o.grav||0,n=this.o.drag||0;for(let s=0;s<this.n;s++){if(this.life[s]<=0){this.p[s*3+1]=-999;continue}this.life[s]-=t,this.v[s*3+1]-=e*t;for(let r=0;r<3;r++)this.v[s*3+r]*=1-n*t,this.p[s*3+r]+=this.v[s*3+r]*t;if(this.life[s]<.3&&this.o.add!==!1)for(let r=0;r<3;r++)this.col[s*3+r]*=.9}this.pts.geometry.attributes.position.needsUpdate=!0,this.pts.geometry.attributes.color.needsUpdate=!0}},sa=class{constructor(t){this.host=t;let e=t.clientWidth||1024,n=t.clientHeight||768;this.r=new Ii({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.r.setPixelRatio(Math.min(1.75,window.devicePixelRatio||1)),this.r.setSize(e,n),this.r.shadowMap.enabled=!0,this.r.shadowMap.type=Pr,this.r.toneMapping=Ir,this.r.toneMappingExposure=.98,this.r.outputColorSpace=He,t.appendChild(this.r.domElement),this.scene=new qn,this.cam=new ke(42,e/n,.1,600),this.comp=new jo(this.r),this.comp.addPass(new Qo(this.scene,this.cam)),this.bloom=new Ks(new nt(e,n),.85,.55,.85),this.comp.addPass(this.bloom),this.grade=new $s(jx),this.comp.addPass(this.grade),this.comp.addPass(new ta);{let s=new Ws(this.r);this.scene.environment=s.fromScene(new ea,.04).texture,this.scene.environmentIntensity=.22}this.shake=0,this.parts=[]}sky(t,e,n,s){let r=this.skyR||400,o=new Gt(r,32,16),a=new Se({side:Ie,depthWrite:!1,uniforms:{a:{value:new j(t)},b:{value:new j(e)},c:{value:new j(n)}},vertexShader:"varying vec3 vp;void main(){vp=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 a,b,c;varying vec3 vp;void main(){float h=vp.y;vec3 col=h>0.?mix(b,a,pow(h,0.6)):mix(b,c,pow(-h,0.5));gl_FragColor=vec4(col,1.);}"});if(this.scene.add(new it(o,a)),this.scene.fog=new Ki(new j(e),60,260),s){let l=new Float32Array(2700);for(let u=0;u<900;u++){let p=k()*6.28,f=k()*.9+.08,g=r*.75;l[u*3]=Math.cos(p)*Math.sqrt(1-f*f)*g,l[u*3+1]=f*g,l[u*3+2]=Math.sin(p)*Math.sqrt(1-f*f)*g}let h=new me;h.setAttribute("position",new Ae(l,3)),this.scene.add(new ui(h,new Yn({color:16777215,size:1.2,sizeAttenuation:!1,fog:!1})))}}light(t,e,n,s,r){this.scene.add(new Li(n,s,.85));let o=new fi(t,e);o.position.copy(r||V(30,40,20)),o.castShadow=!0,o.shadow.mapSize.set(2048,2048);let a=o.shadow.camera;return a.left=-30,a.right=30,a.top=30,a.bottom=-30,a.near=1,a.far=150,o.shadow.bias=-4e-4,o.shadow.normalBias=.02,this.scene.add(o),this.sun=o,o}shaft(t,e,n,s,r,o){let a=new ee(s*.15,s,n,24,1,!0);a.translate(0,-n/2,0);let c=new it(a,new $t({color:new j(r),transparent:!0,opacity:o==null?.12:o,blending:pn,depthWrite:!1,side:Ee,toneMapped:!1,fog:!1}));return c.position.copy(t),c.lookAt(t.clone().add(e)),c.rotateX(-Math.PI/2),this.scene.add(c),c}part(t,e){let n=new sh(this.scene,t,e);return this.parts.push(n),n}boxes(t,e){let n=new An(1,1,1,2,.14),s=new hi(n,e||new Ln({gradientMap:t_()}),t.length),r=new te,o=new hn,a=new j;return t.forEach((c,l)=>{r.compose(V(c[0],c[1],c[2]),o,V(c[3],c[4],c[5])),s.setMatrixAt(l,r),a.set(c[6]),s.setColorAt(l,a)}),s.castShadow=!0,s.receiveShadow=!0,this.scene.add(s),s}ground(t,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=new j(t);s.fillStyle=t,s.fillRect(0,0,256,256);for(let c=0;c<900;c++){let l=r.clone().offsetHSL(0,(k()-.5)*.03,(k()-.5)*.035);s.fillStyle="#"+l.getHexString();let h=2+k()*6;s.fillRect(k()*256,k()*256,h,h)}let o=new wn(n);o.wrapS=o.wrapT=Ri,o.repeat.set(40,40),o.colorSpace=He;let a=new it(new Ye(e||400,e||400),new ye({map:o,roughness:1}));return a.rotation.x=-Math.PI/2,a.receiveShadow=!0,this.scene.add(a),a}fov(t){this.cam.fov!==t&&(this.cam.fov=t,this.cam.updateProjectionMatrix())}look(t,e){this.cam.position.copy(t),this.shake>0&&(this.cam.position.x+=(k()-.5)*this.shake,this.cam.position.y+=(k()-.5)*this.shake),this.cam.lookAt(e)}render(t){this.grade&&(this.grade.uniforms.time.value+=t*60);for(let e of this.parts)e.update(t);this.shake=Math.max(0,this.shake-t*1.6),this.comp.render(t)}resize(){let t=this.host.clientWidth,e=this.host.clientHeight;this.r.setSize(t,e),this.comp.setSize(t,e),this.cam.aspect=t/e,this.cam.updateProjectionMatrix()}dispose(){this.r.dispose(),this.r.domElement.remove()}};function s_(i,t,e){let n=new Ye(300,300,120,120),s=new ye({color:e,roughness:.15,metalness:.3,transparent:!0,opacity:.92}),r=new it(n,s);r.rotation.x=-Math.PI/2,r.position.y=t,r.receiveShadow=!0,i.scene.add(r);let o=n.attributes.position.array.slice();return a=>{let c=n.attributes.position.array;for(let l=0;l<c.length;l+=3)c[l+2]=Math.sin(o[l]*.25+a*1.6)*.25+Math.cos(o[l+1]*.3+a*1.2)*.2;n.attributes.position.needsUpdate=!0,n.computeVertexNormals()}}function ff(i,t,e,n,s){let r=new Se({uniforms:{t:{value:0}},toneMapped:!1,vertexShader:"varying vec2 uv2;void main(){uv2=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float t;varying vec2 uv2;float n(vec2 p){return sin(p.x*6.+t*1.3)*sin(p.y*5.-t)+sin((p.x+p.y)*9.+t*2.)*0.5;}void main(){float v=n(uv2*3.)*0.5+0.5;vec3 c=mix(vec3(0.9,0.12,0.01),vec3(1.5,0.6,0.08),v);gl_FragColor=vec4(c,1.);}"}),o=new it(new Ye(n,s),r);return o.rotation.x=-Math.PI/2,o.position.set(t,.05,e),i.scene.add(o),a=>{r.uniforms.t.value=a}}var ra={canyon(i){i.sky("#3a6cc8","#ffb27a","#c96a3a"),i.light("#ffd9a8",2.6,"#9fc4ff","#a0522d",V(-40,35,20)),i.ground("#c9733a");let t=[],e=["#b8572a","#d0773a","#e8a05a","#a8482a"];for(let s=0;s<26;s++){let r=(k()-.5)*160,o=-20-k()*120,a=6+k()*12,c=6+k()*22;if(!(Math.abs(r)<8&&o>-30))for(let l=0;l<Math.ceil(c/2);l++)t.push([r,l*2+1,o,a-l*.25,2,a*.8-l*.2,e[(l+s)%4]])}for(let s=0;s<40;s++){let r=(k()-.5)*120,o=(k()-.5)*60+10;Math.abs(r)<4||t.push([r,.3,o,.6+k(),.6,.6+k(),"#8a4a2a"])}for(let s=0;s<14;s++){let r=(k()-.5)*70,o=-5-k()*30;Math.abs(r)<5||t.push([r,1.2,o,.5,2.4,.5,"#3a8a3a"],[r+.5,1.6,o,.4,.4,.4,"#3a8a3a"],[r+.7,2,o,.4,.8,.4,"#3a8a3a"])}return t.push([0,.02,0,3,.04,200,"#e8b07a"]),i.boxes(t),{dust:i.part(500,{size:.25,add:!1,grav:-.05,drag:.2,jit:.6,bright:1}),cols:["#e8b07a","#c9733a"],land:V(0,0,-34),focus:V(-10,8,-60),boss:"#ff6a2a"}},docks(i){i.sky("#2a6ad0","#9fdcff","#2a6aa0"),i.light("#fff4d8",2.4,"#bfe6ff","#2a5a8a",V(30,40,25));let t=s_(i,0,"#1d6fb8"),e=[];for(let o=-60;o<30;o+=1.1)e.push([0,.6,o,4,.25,1,o%2.2<1.1?"#a0703a":"#8a5a2a"]);for(let o=-60;o<30;o+=6)e.push([-2.1,0,o,.4,2.4,.4,"#5a3a1a"],[2.1,0,o,.4,2.4,.4,"#5a3a1a"]);let n=[];for(let o=0;o<9;o++){let a=(o%2?1:-1)*(10+k()*30),c=-10-k()*90,l=["#e8463c","#f4f4f4","#ffb627","#3fae5a"][o%4];e.push([a,.6,c,6,1.4,2.4,l],[a,1.5,c,5,.4,2,"#8a5a2a"],[a,4,c,.25,6,.25,"#5a3a1a"]),n.push([a,c])}e.push([-24,6,-70,4,12,4,"#f4f4f4"],[-24,12.5,-70,4.4,1,4.4,"#e8463c"]),i.boxes(e);for(let[o,a]of n){let c=new it(new be(2.2,5,3),new ye({color:"#ffffff",roughness:.6,flatShading:!0}));c.position.set(o+1.2,4.4,a),c.rotation.z=.05,c.castShadow=!0,i.scene.add(c)}let s=new it(new ee(.2,3,40,16,1,!0),new $t({color:new j(2,2,1.4),transparent:!0,opacity:.18,toneMapped:!1,side:Ee,depthWrite:!1}));s.position.set(-24,14,-70),s.rotation.z=Math.PI/2,i.scene.add(s);let r=i.part(400,{size:.22,grav:3,jit:1.2,bright:1.3});return{tick:o=>{t(o),s.rotation.y=o*.8},dust:r,cols:["#ffffff","#bfe8ff"],land:V(0,.7,-34),deckY:.73,focus:V(-24,8,-70),boss:"#2a7aff"}},forge(i){i.sky("#120404","#5a1608","#200606"),i.light("#ffc08a",3.4,"#ffa070","#4a1a0a",V(-20,30,10)),i.ground("#2a1410");let t=[ff(i,-9,-40,5,140),ff(i,11,-30,4,120)],e=[];for(let o=0;o<60;o++){let a=(k()-.5)*120,c=-10-k()*110;if(Math.abs(a)<6)continue;let l=1+k()*8;e.push([a,l/2,c,1.5+k()*4,l,1.5+k()*4,["#3a1a14","#2a1010","#4a2418"][o%3]])}for(let o=0;o<6;o++){let a=(o%2?1:-1)*(5+k()*3),c=-6-o*9;e.push([a,.5,c,2.4,1,1.2,"#3a3f50"],[a,1.25,c,3,.5,1.4,"#5d6385"],[a+1.4,1.25,c,1,.3,.6,"#5d6385"])}e.push([0,.02,0,3,.04,200,"#3a2016"]),i.boxes(e,new ye({roughness:.85,metalness:.2}));let n=new it(new be(30,34,9,1,!0),new ye({color:"#2a1210",flatShading:!0,roughness:1}));n.position.set(18,17,-110),i.scene.add(n);let s=new it(new Dn(5.5,16),new $t({color:new j(3,1.2,.2),toneMapped:!1}));s.rotation.x=-Math.PI/2,s.position.set(18,33.6,-110),i.scene.add(s);for(let[o,a]of[[-9,-20],[11,-15],[-9,-50],[11,-55]]){let c=new je("#ff6a1a",30,22,1.6);c.position.set(o,2,a),i.scene.add(c)}let r=i.part(700,{size:.18,grav:-1.2,jit:.8,bright:2.2});return{tick:o=>{t.forEach(a=>a(o)),(o*30|0)%2===0&&(r.emit(V((k()-.5)*40,.2,-10-k()*60),V(0,1.5,0),2,["#ff7b1c","#ffb627","#ff4d6d"],3,4),r.emit(V(18,34,-110),V((k()-.5)*3,6,(k()-.5)*3),3,["#ff7b1c","#ffe066"],3,2))},dust:r,cols:["#ff7b1c","#ffb627"],land:V(0,0,-34),focus:V(18,22,-110),boss:"#7a1a10"}},castle(i){i.sky("#0a0a2a","#3a2a6a","#120a24",!0),i.light("#b8c8ff",1.3,"#5a6aff","#140a2a",V(25,40,-20)),i.ground("#2a2a3a");let t=[],e=["#6a6a80","#5a5a70","#7a7a90"];for(let r=-26;r<=26;r+=2)t.push([r,4,-60,2,8,3,e[r/2&1&1?1:0]]),(r/2|0)%2===0&&t.push([r,8.8,-60,1.4,1.6,3,e[2]]);for(let r of[-28,28,-12,12]){t.push([r,8,-60,6,16,6,e[1]]);for(let o=0;o<4;o++)t.push([r-2.2+o*1.47,16.9,-60,1,1.8,6.2,e[2]])}t.push([0,13,-80,10,26,10,e[0]],[0,27,-80,11,2,11,e[2]]);for(let r=0;r<10;r++)t.push([(r%2?1:-1)*(4+k()*3),.5,-8-r*5,.4,1,.4,"#4a3a2a"]);t.push([0,.02,0,4,.04,200,"#4a4a5e"]),i.boxes(t);for(let r of[-28,28,-12,12]){let o=new it(new re(.1,2.4,3.2),new ye({color:"#9b6bff"}));o.position.set(r,19,-60),i.scene.add(o)}for(let r=0;r<8;r++){let o=(r%2?1:-1)*4.2,a=-8-r*6,c=new je("#ffb627",14,10,1.8);c.position.set(o,1.5,a),i.scene.add(c);let l=new it(new Gt(.22,8,6),new $t({color:new j(3,1.6,.4),toneMapped:!1}));l.position.set(o,1.25,a),i.scene.add(l)}let n=new it(new Gt(10,24,16),new $t({color:new j(1.6,1.6,1.5),toneMapped:!1,fog:!1}));n.position.set(-80,90,-260),i.scene.add(n);let s=i.part(300,{size:.2,grav:-.2,jit:.4,bright:2});return{tick:r=>{(r*20|0)%3===0&&s.emit(V((k()-.5)*30,k()*4,-5-k()*40),V(0,.4,0),1,["#c084fc","#5ef2ff"],3,1)},dust:s,cols:["#c084fc","#ffffff"],land:V(0,0,-34),focus:V(0,12,-70),boss:"#a04aff"}},tower(i){i.sky("#3a8ae0","#c8ecff","#5aa05a"),i.light("#fff4d8",2.5,"#cfe8ff","#3a7a3a",V(30,45,15)),i.ground("#4aa04a");let t=[];for(let s=0;s<34;s++){let r=s*.55,o=5;t.push([Math.cos(r)*o,s*1.6+.8,-70+Math.sin(r)*o,4,1.6,4,s%2?"#e8e2cf":"#c9c0a8"])}t.push([0,25,-70,6,52,6,"#d8d0b8"],[0,52,-70,8,2,8,"#a04a2a"],[0,55,-70,5,4,5,"#c0582a"],[0,58,-70,2.6,3,2.6,"#e06a3a"]);for(let s=0;s<9;s++){let r=(k()-.5)*90,o=14+k()*24,a=-40-k()*70;Math.abs(r)<12||t.push([r,o,a,6,2,6,"#6ac05a"],[r,o-2,a,4,2,4,"#8a5a3a"],[r,o-3.5,a,2,1.5,2,"#8a5a3a"],[r,o+2,a,.6,2,.6,"#6a4a2a"],[r,o+3.5,a,2.4,2,2.4,"#3a9a3a"])}for(let s=0;s<30;s++){let r=(k()-.5)*100,o=-6-k()*60;Math.abs(r)<4||t.push([r,1,o,.5,2,.5,"#6a4a2a"],[r,2.6,o,2,1.6,2,"#2f8f3a"],[r,3.6,o,1.2,1,1.2,"#3fae5a"])}t.push([0,.02,0,3,.04,200,"#c9b07a"]),i.boxes(t);let e=[];for(let s=0;s<14;s++){let r=new st;for(let o=0;o<5;o++){let a=new it(new re(3+k()*3,1.6,2.4),new ye({color:"#ffffff",roughness:1}));a.position.set(o*2-4,k(),k()),r.add(a)}r.position.set((k()-.5)*160,28+k()*20,-30-k()*120),i.scene.add(r),e.push(r)}let n=i.part(300,{size:.2,add:!1,grav:.4,jit:.6,bright:1});return{tick:s=>{e.forEach((r,o)=>r.position.x+=.02*(1+o%3)),(s*20|0)%3===0&&n.emit(V((k()-.5)*30,8,-10-k()*20),V(1,0,0),2,["#ffe066","#ff9f43","#3fae5a"],5,1)},dust:n,cols:["#ffffff","#c9b07a"],land:V(0,0,-34),focus:V(0,30,-70),boss:"#2aa04a"}}};function ah(i,t,e={}){let n=new st,s=["stand","runA","runB"].map(o=>{let a=un(t.hero[o],{size:.1,depth:3});return n.add(a),a.visible=o==="stand",a}),r=un(t.dog,{size:.085,depth:3});return r.position.set(-1.1,0,.4),n.add(r),i.scene.add(n),{g:n,set(o,a){let c=o?(a*9|0)%2?1:2:0;s.forEach((l,h)=>l.visible=h===c),s.forEach(l=>l.position.y=o?Math.abs(Math.sin(a*18))*.06:0),r.position.y=o?Math.abs(Math.sin(a*18+1))*.08:0}}}function oa(i,t,e,n,s,r){let o=(i.title.textContent||"").length||8;i.title.style.fontSize=`min(${Math.min(11,150/o).toFixed(1)}vw,92px)`;let a=Ct(t,e,e+.35),c=n?Ct(t,n,n+.4):0;i.title.style.opacity=String(a*(1-c)),i.title.style.transform=`translate(-50%,-50%) scale(${1+(1-oh(a))*1.6})`,i.title.style.color=r||"#ffe066",i.sub.style.opacity=String(Ct(t,e+.3,e+.7)*(1-c)),i.sub.textContent=s||""}function r_(i,t,e){if(i.userData.toon)return hf(i,t,e,k);let n=[],s=new te,r=new P,o=new hn,a=new P;for(let l of[i.userData.solid,i.userData.glow])if(l)for(let h=0;h<l.count;h++){l.getMatrixAt(h,s),s.decompose(r,o,a);let u=r.clone().sub(t);n.push({mesh:l,i:h,p:r.clone(),v:V(u.x*e*(.6+k()),(1.5+k()*2.5)*e*.6,u.z*e*(.6+k())+(k()-.5)*e),r:V(k()*8,k()*8,k()*8)})}let c=new ze;return l=>{for(let h of n){let u=Math.max(-.05,h.p.y+h.v.y*l-4.9*l*l);r.set(h.p.x+h.v.x*l,u,h.p.z+h.v.z*l),c.set(h.r.x*l,h.r.y*l,h.r.z*l),o.setFromEuler(c),s.compose(r,o,V(1,1,1)),h.mesh.setMatrixAt(h.i,s)}for(let h of[i.userData.solid,i.userData.glow])h&&(h.instanceMatrix.needsUpdate=!0)}}var en=(i,t,e)=>{i[t]||(i[t]=1,e())};function df(i,t,e){let n=e.world;mi=11+n.length;let s=ra[n](i),r=30,o=s.deckY||0,a=s.focus,c=ah(i,t);c.g.position.set(0,o,-20);let l=un(t.gmech,{size:.62,depth:4,tint:s.boss,tintK:.45,metal:.45,glow:["#ff2d4d","#ff4d6d","#5ef2ff","#ffe066"]}),h=l.userData.h;l.position.set(s.land.x,s.land.y-h-2,s.land.z),i.scene.add(l),l.userData.glowMat&&(l.userData.glowMat.color.set(new j(2.6,.3,.35)),l.userData.glowMat.opacity=0);let u=new je(s.boss,0,60,1.4);u.position.set(s.land.x,h*.7,s.land.z+10),i.scene.add(u);let p=new je("#fff4e0",0,12,1.5);i.scene.add(p);let f=new ss("#ffffff",0);i.scene.add(f);let g=i.sun.intensity,_=i.scene.children.find(M=>M.isHemisphereLight),m=_?_.intensity:1,d=i.sun.position.clone().normalize();for(let M=0;M<4;M++)i.shaft(V(a.x+d.x*50+(M-1.5)*9,80,a.z-20+d.z*50),V(-d.x,-1,-d.z),120,3.5+M*1.2,n==="forge"?"#ff9a4a":n==="castle"?"#9fb8ff":"#fff1c8",.035);let v=i.part(300,{size:.07,grav:-.4,jit:.5,bright:2.4}),x={};return{D:r,update(M,A){s.tick&&s.tick(M);let w=c.g.position,E=Ct(M,16,17.2)*(1-.5*Ct(M,27.5,29));if(i.sun.intensity=g*(1-.65*E),_&&(_.intensity=m*(1-.55*E)),f.intensity=Math.max(0,f.intensity-A*12),M<5){let I=Ce(Ct(M,0,5));i.look(V(ft(a.x+48,a.x+18,I),ft(a.y+20,a.y+6,I),ft(a.z+62,a.z+30,I)),V(a.x,a.y,a.z))}else if(M<9){let I=ft(-.8,.8,Ce(Ct(M,5,9)));i.look(V(a.x+Math.sin(I)*42,a.y+11,a.z+Math.cos(I)*42),V(a.x,a.y*.7,a.z))}else if(M<12){let I=Ct(M,9,12);i.fov(ft(55,42,I)),i.look(V(ft(-3,1,I),o+ft(1.2,1.6,I),ft(34,-2,I)),V(ft(-1,0,I),o+1.4,ft(10,-30,I)))}else if(M<16){i.fov(42);let I=Ct(M,12,16);w.z=ft(-20,4,I),c.set(!0,M),k()<.7&&s.dust.emit(V(w.x,o+.1,w.z-.6),V(0,.6,-1),.4,s.cols,.8,2),M<14?i.look(V(ft(3.5,2.4,Ct(M,12,14)),o+1.2,w.z+5.5),V(0,o+.9,w.z)):i.look(V(2.4,o+.8,w.z+2.6),V(0,o+.9,w.z))}else{M<25.5&&(w.z=4,c.set(!1,M)),en(x,"thunder",()=>{f.intensity=7,e.sfx&&e.sfx("thunder")}),M>17.8&&en(x,"th2",()=>{f.intensity=4});let I=oh(Ct(M,16.5,19.5));if(l.position.y=ft(s.land.y-h-2,s.land.y,I),M<19.5&&(i.shake=Math.max(i.shake,.18),k()<.8&&s.dust.emit(V(s.land.x+(k()-.5)*h,s.land.y+.5,s.land.z+(k()-.5)*4),V(0,4,2),2,s.cols,1.4,6)),M>=19.5&&en(x,"stomp",()=>{i.shake=1.3,f.intensity=3,e.sfx&&e.sfx("slam"),s.dust.emit(V(s.land.x,s.land.y+1,s.land.z+3),V(0,3,5),8,s.cols,1.8,240)}),l.userData.glowMat&&(l.userData.glowMat.opacity=Ct(M,20,20.4)*(.55+.45*Math.abs(Math.sin(M*4)))),u.intensity=ft(0,150,Ct(M,17,19.5))*(M>20.5&&M<21.2?1.6:1),M>20.5&&en(x,"roar",()=>{i.shake=.6,e.sfx&&e.sfx("roar")}),M<19.5){let B=Ce(Ct(M,16,19.5));i.look(V(1.6,o+ft(1.3,1,B),ft(7.6,7,B)),V(0,o+ft(3,h*.5,B),s.land.z))}else if(M<22.5){let B=Ce(Ct(M,19.5,22.5));i.look(V(ft(2.2,1.2,B),o+ft(.6,.35,B),ft(2,-4,B)),V(s.land.x,s.land.y+h*ft(.6,.8,B),s.land.z))}else if(M<25.5){let B=ft(.75,-.55,Ce(Ct(M,22.5,25.5)));w.y=o+Math.max(0,Math.sin(Ct(M,23.6,24.2)*Math.PI))*.5,k()<.6&&v.emit(V(w.x+(k()-.5)*1.4,o+k()*1.6,w.z+(k()-.5)*1.4),V(0,.8,0),.2,["#ffe066","#5ef2ff","#ffffff"],1.2,2),i.look(V(w.x+Math.sin(B)*3.4,o+1.3,w.z+Math.cos(B)*3.4),V(w.x,o+1,w.z)),p.position.set(w.x+Math.sin(B)*2.2,o+1.8,w.z+Math.cos(B)*2.2),p.intensity=3}else{p.intensity=Math.max(0,p.intensity-A*20),w.y=o;let B=Ct(M,25.5,27.5);w.z=ft(4,-3,B),c.set(B<1,M),B<1&&k()<.7&&s.dust.emit(V(w.x,o+.1,w.z+.6),V(0,.6,1),.4,s.cols,.8,2);let y=Ce(Ct(M,25.5,30));i.look(V(ft(4,9,y),o+ft(2,6,y),ft(10,18,y)),V(0,o+ft(4,5.5,y),-16))}}oa(e.ov,M,27.5,null,e.sub,e.color),e.ov.title.textContent=e.title,e.ov.boss.style.opacity=String(Ct(M,20.5,21)),e.ov.boss.textContent=e.boss?"BOSS: "+e.boss:"",e.ov.fade.style.opacity=String(Math.max(1-Ct(M,0,.7),Ct(M,r-.6,r)))}}}function o_(i){i.sky("#0a0820","#5a2a6a","#1a0a20",!0),i.light("#fff0e0",2.8,"#b8b0ff","#3a2a4a",V(-20,30,25));{let n=new fi("#9fd8ff",1.4);n.position.set(20,12,30),i.scene.add(n)}i.ground("#22202e");let t=[];for(let n=0;n<40;n++){let s=n/40*6.283;t.push([Math.cos(s)*24,1.5,Math.sin(s)*24-6,3,3+k()*4,3,"#3a3650"])}for(let n=-14;n<=14;n+=2)for(let s=-20;s<=8;s+=2)t.push([n,.01,s,1.9,.04,1.9,(n+s)%4===0?"#2e2b40":"#26243a"]);for(let n=0;n<16;n++){let s=n/16*6.283;t.push([Math.cos(s)*30,6,Math.sin(s)*30-6,1.2,12,1.2,"#2a2840"],[Math.cos(s)*30,12.4,Math.sin(s)*30-6,2,.8,2,"#4a4670"])}i.boxes(t);let e=[];for(let[n,s,r]of[[-10,-4,"#5ef2ff"],[10,-4,"#ff4d6d"],[-12,-16,"#c084fc"],[12,-16,"#ffe066"]]){let o=new Vo(r,400,60,.5,.6,1.4);o.position.set(n,18,s),o.target.position.set(0,0,-6),i.scene.add(o,o.target),e.push(i.shaft(V(n,18,s),V(-n*.05,-1,(-6-s)*.05),22,4,r,.07))}return e}function a_(i,t,e){mi=42;let n=o_(i),s=new je("#ff2020",0,50,1.2);s.position.set(0,10,4),i.scene.add(s);let r=un(t.mech,{size:.16,depth:4,metal:.55});r.position.set(-3.2,0,0),r.rotation.y=.35,i.scene.add(r);let o=r.userData.h,a=un(t.gmech,{size:.2,depth:4,metal:.55});a.position.set(3.4,60,-1),a.rotation.y=-.35,i.scene.add(a),r.userData.glowMat&&(r.userData.glowMat.opacity=0),a.userData.glowMat&&(a.userData.glowMat.opacity=0);let c=i.part(700,{size:.14,add:!1,grav:-.6,drag:.4,jit:.6,bright:1}),l=i.part(500,{size:1.1,add:!1,grav:-.3,drag:.6,jit:1.4,bright:.9}),h=i.part(900,{size:.35,grav:-.5,jit:1.2,bright:2.4}),u=i.part(900,{size:.14,grav:6,jit:4,bright:2.6}),p=i.part(300,{size:.14,jit:.1,bright:2.8}),f=new it(new Ke(1,.12,8,48),new $t({color:new j(3,2.2,1),transparent:!0,toneMapped:!1}));f.rotation.x=Math.PI/2,f.visible=!1,i.scene.add(f);let g=new it(new Gt(1,20,14),new $t({color:new j(.8,1.9,2.1),toneMapped:!1,transparent:!0}));g.scale.setScalar(.001);let _=V(-1.9,o*.55,.9);g.position.copy(_),i.scene.add(g);let m=new it(new ee(.25,.25,1,12,1,!0),new $t({color:new j(1.4,3.2,3.6),toneMapped:!1,transparent:!0}));m.visible=!1,i.scene.add(m);let d=new ss("#ffffff",0);i.scene.add(d);let v={},x=31,M=(A,w,E,I)=>{f.position.set(A,w,E),f.visible=!0,v.ringT=v.t,u.emit(V(A,w+.4,E),V(0,4,0),1.5,["#ffe066","#ffffff","#ff7b1c"],1.4,I?380:200)};return{D:x,update(A,w){if(v.t=A,d.intensity=Math.max(0,d.intensity-w*14),n.forEach((E,I)=>{E.rotation.z=Math.sin(A*.7+I)*.25,E.material.opacity=A>9&&A<12.5?.03:.07}),v.ringT!=null){let E=Ct(A,v.ringT,v.ringT+1.2);f.scale.setScalar(1+E*16),f.material.opacity=1-E}if(A<4.5){let E=Ce(Ct(A,0,4.5));i.look(V(ft(18,-1,E),ft(16,3,E),ft(22,6,E)),V(ft(0,-3.2,E),ft(2,2,E),ft(-6,0,E)))}else if(A<6){let E=Ce(Ct(A,4.5,6));i.look(V(ft(-2,-2.5,E),.45,ft(1.5,1.9,E)),V(-3.2,.45,0)),k()<.7&&c.emit(V(-3.2+(k()-.5)*1.6,.2,.4),V(0,1.2,.6),.3,["#c8c8d8","#8a8aa0"],1.4,3),en(v,"hiss",()=>e.sfx&&e.sfx("whoosh"))}else if(A<7.5){let E=Ce(Ct(A,6,7.5));i.look(V(-1.4,ft(1.2,o*.6,E),2.7),V(-3.2,ft(1.2,o*.62,E),0))}else if(A<9){let E=Ce(Ct(A,7.5,9));i.look(V(ft(-1.2,-1.6,E),o*.85,ft(4.2,3.6,E)),V(-3.2,o*.82,0)),en(v,"boot",()=>e.sfx&&e.sfx("charge"))}if(r.userData.glowMat&&(r.userData.glowMat.opacity=Ct(A,8,8.3)*(.75+.25*Math.sin(A*30))),A>=9&&A<12.5){s.intensity=(A*4|0)%2?160:20;let E=Ct(A,9,12.5);a.position.y=ft(60,0,uf(E)),h.emit(V(3.4,a.position.y+2,-1),V(0,7,0),1.4,["#ff7b1c","#ffe066","#ff2d4d"],.7,14),A>9.5&&en(v,"fall",()=>e.sfx&&e.sfx("whoosh")),i.fov(ft(14,42,Ct(A,11.7,12.5))),i.look(V(-5,1.2,7),V(3.4,Math.max(2,a.position.y+2),-1))}if(A>=12.5&&(i.fov(42),s.intensity=Math.max(0,s.intensity-w*300)),A>=12.5&&en(v,"hit",()=>{a.position.y=0,i.shake=1.6,d.intensity=9,e.sfx&&e.sfx("slam"),M(3.4,.2,-1,!0),l.emit(V(3.4,.8,-1),V(0,1.2,0),3,["#5a5070","#7a7090","#3a3450"],3.2,260)}),A>=12.5&&A<15.5){let E=Ce(Ct(A,12.5,15.5));i.look(V(ft(.6,1.6,E),ft(1.4,1.9,E),ft(6.5,5.2,E)),V(3.4,2.1,-1)),A>15&&en(v,"eyes",()=>{e.sfx&&e.sfx("roar"),i.shake=.5})}if(a.userData.glowMat&&(a.userData.glowMat.opacity=Ct(A,15,15.25)*(.6+.4*Math.abs(Math.sin(A*5)))),A>=15.5&&A<19){let E=Ct(A,15.5,19);g.scale.setScalar(.05+E*.32),g.material.opacity=.6+.4*Math.sin(A*25),en(v,"chg",()=>e.sfx&&e.sfx("charge"));for(let I=0;I<3;I++){let B=k()*6.28,y=1.5+k();p.emit(V(_.x+Math.cos(B)*y,_.y+(k()-.5)*y,_.z+Math.sin(B)*y),V(-Math.cos(B)*y*1.6,0,-Math.sin(B)*y*1.6),.05,["#5ef2ff","#ffffff"],.55,1)}i.look(V(ft(.6,.9,E),o*.62,ft(5.2,4.4,E)),V(-2.3,o*.55,.3))}if(A>=19&&A<23){let E=ft(-.9,.9,Ce(Ct(A,19,23)));i.look(V(Math.sin(E)*12.5,2.8,Math.cos(E)*12.5-.5),V(0,2.2,-.5));let I=Ct(A,20.6,21.1);if(A>=20.6&&A<21.2){en(v,"fire",()=>{e.sfx&&e.sfx("slam"),i.shake=.7});let B=V(3,o*.55,-.8),y=_.distanceTo(B);m.visible=!0,m.scale.set(1+Math.sin(A*60)*.2,y,1+Math.sin(A*60)*.2),m.position.copy(_).lerp(B,.5),m.lookAt(B),m.rotateX(Math.PI/2),m.material.opacity=1-I*.6,g.scale.setScalar(.37*(1-I)),u.emit(B,V(0,2,2),.5,["#5ef2ff","#ffffff","#ffe066"],.8,12)}else m.visible=!1,A>=21.2&&g.scale.setScalar(.001)}if(A>=23&&A<28.5){m.visible=!1;let E=uf(Ct(A,23,25));if(r.position.x=ft(-3.2,-1.3,E),a.position.x=ft(3.4,1.5,E),A<25)i.look(V(0,.8,ft(9,7,Ct(A,23,25))),V(0,1.6,-.5)),k()<.8&&(pf(u,r.position,-1),pf(u,a.position,1));else{en(v,"clash",()=>{i.shake=2,d.intensity=4,e.sfx&&e.sfx("slam"),M(.1,1.8,-.5,!0)}),k()<.6&&u.emit(V(.1,2.2,-.5),V(0,1.5,0),.6,["#5ef2ff","#ff4d6d","#ffffff"],.7,8);let I=ft(-1.2,1,Ce(Ct(A,25,28.5)));i.look(V(Math.sin(I)*7,ft(1.2,3.5,Ct(A,25,28.5)),Math.cos(I)*7-.5),V(.1,2,-.5))}}if(A>=28.5){let E=Ce(Ct(A,28.5,31));i.look(V(0,ft(2.2,3,E),ft(9,12,E)),V(0,2.3,-.5)),A>28.5&&en(v,"title",()=>{i.shake=.8,d.intensity=3}),k()<.4&&u.emit(V(.1,2.3,-.5),V(0,1,0),2,["#5ef2ff","#ff4d6d"],.6,4)}oa(e.ov,A,28.5,null,"Your mech vs. GLITCH MECH","#ffe066"),e.ov.title.textContent="MECH BATTLE!",e.ov.boss.style.opacity="0",e.ov.fade.style.opacity=String(Math.max(1-Ct(A,0,.8),Ct(A,x-.45,x)*.95)),e.ov.fade.style.background=A>x-.5?"#fff":"#000"}}}function pf(i,t,e){i.emit(V(t.x,.2,t.z),V(-e*2,1,0),.6,["#8a80a0","#ffe066"],.5,2)}function c_(i,t,e){let n=e.world&&ra[e.world]?e.world:"canyon";mi=77;let s=ra[n](i),r=16,o=s.deckY||0,a=!!e.mech,c=a?null:ah(i,t),l=null;a?(l=un(t.mech,{size:.16,depth:4,metal:.55}),l.position.set(0,o,4),i.scene.add(l)):c.g.position.set(0,o,4);let h=un(t.gmech,{size:a?.2:.45,depth:4,tint:s.boss,tintK:.4,metal:.45}),u=h.userData.h,p=a?-2:-14;h.position.set(0,o,p),i.scene.add(h),h.userData.glowMat&&h.userData.glowMat.color.set(new j(2.6,.3,.35));let f=i.part(900,{size:.14,grav:6,jit:4,bright:2.6}),g=i.part(3e3,{size:.38,grav:1.2,drag:.6,jit:.3,bright:2.8}),_=i.part(400,{size:1.1,add:!1,grav:-.3,drag:.6,jit:1.4,bright:.9}),m=i.part(500,{size:.22,add:!1,grav:3,jit:.6,bright:1.4}),d=new je("#fff4e0",0,14,1.5);i.scene.add(d);let v=new ss("#ffffff",0);i.scene.add(v);let x=null,M={},A=l||c.g,w=()=>{let E=[["#ff4d6d","#ffe066"],["#5ef2ff","#ffffff"],["#3fdc6b","#ffe066"],["#c084fc","#ff8fa3"]][k()*4|0],I=V((k()-.5)*24,9+k()*8,p-4-k()*10);for(let B=0;B<140;B++){let y=k()*6.28,b=Math.acos(2*k()-1),N=5+k()*1.5;g.emit(I,V(Math.sin(b)*Math.cos(y)*N,Math.cos(b)*N,Math.sin(b)*Math.sin(y)*N),.2,E,1.8,1)}e.sfx&&e.sfx("pop")};return{D:r,update(E,I){if(s.tick&&s.tick(E),v.intensity=Math.max(0,v.intensity-I*10),E<3.3){h.position.x=(k()-.5)*.25*Ct(E,.5,3.3),h.rotation.z=Math.sin(E*9)*.04*Ct(E,0,3.3),k()<.5&&f.emit(V((k()-.5)*u*.5,o+u*k(),p+1),V(0,2,2),.4,["#ffe066","#ff7b1c","#ffffff"],.6,6),h.userData.glowMat&&(h.userData.glowMat.opacity=(E*12|0)%2?1:.2);let B=ft(.5,-.3,Ce(Ct(E,0,3.3)));i.look(V(Math.sin(B)*(u*1.6),o+u*.3,p+Math.cos(B)*u*1.6),V(0,o+u*.55,p)),en(M,"groan",()=>e.sfx&&e.sfx("roar"))}if(E>=3.3&&(en(M,"boom",()=>{x=r_(h,V(0,o+u*.5,p),a?2.2:3.5),i.shake=1.8,v.intensity=5,e.sfx&&e.sfx("slam"),f.emit(V(0,o+u*.5,p),V(0,3,0),2,["#ffe066","#ffffff","#ff7b1c"],1.6,500),_.emit(V(0,o+1,p),V(0,1.5,0),4,["#5a5070","#7a7090","#3a3450"],3.2,260)}),x(E-3.3)),E>=3.3&&E<5){let B=Ce(Ct(E,3.3,5));i.look(V(ft(u*1.2,u*2,B),o+u*.4,p+ft(u*1.2,u*2.2,B)),V(0,o+u*.4,p))}if(E>=5&&E<9.5){let B=Ce(Ct(E,5,9.5));i.look(V(ft(.4,0,B),o+ft(1.2,3,B),ft(7.5,9,B)),V(0,o+ft(1.5,14,B),ft(2,p-14,B))),(E*3.4|0)!==M.f&&(M.f=E*3.4|0,w(),k()<.5&&w())}if(E>=9.5){(E*2|0)!==M.f&&(M.f=E*2|0,w());let B=ft(.7,-.6,Ce(Ct(E,9.5,13.5)));k()<.8&&m.emit(V(A.position.x+(k()-.5)*4,o+5,A.position.z+(k()-.5)*3),V(0,-1,0),.3,["#ffc933","#ffe066","#fff3b0"],2.2,2);let y=a?6:3.6,b=a?2.2:1;if(a||(c.g.position.y=o+Math.max(0,Math.sin(Ct(E,10.6,11.3)*Math.PI))*.6),E<13.5)i.look(V(A.position.x+Math.sin(B)*y,o+b+.4,A.position.z+Math.cos(B)*y),V(A.position.x,o+b,A.position.z)),d.position.set(Math.sin(B)*2.4,o+2,A.position.z+Math.cos(B)*2.4),d.intensity=3;else{let N=Ce(Ct(E,13.5,16));i.look(V(ft(Math.sin(-.6)*y,4,N),o+ft(b+.4,4,N),A.position.z+ft(Math.cos(-.6)*y,12,N)),V(0,o+ft(b,6,N),p))}}oa(e.ov,E,10,null,e.sub||"Boss defeated!","#ffe066"),e.ov.title.textContent="VICTORY!",e.ov.boss.style.opacity="0",e.ov.fade.style.opacity=String(Math.max(1-Ct(E,0,.6),Ct(E,r-.6,r))),e.ov.fade.style.background="#000"}}}function l_(i,t,e){mi=23,i.sky("#2a3a8a","#ff9a6a","#5a2a3a"),i.light("#ffc89a",2.4,"#ffb8d0","#5a3a3a",V(-30,20,-20)),i.ground("#7a5a3a");let n=[];for(let d=-6;d<=6;d+=1)for(let v=-6;v<=6;v+=1)n.push([d,.15,v,.98,.3,.98,(d+v)%2?"#c9935a":"#b8824a"]);n.push([-5,4,-9,.8,8,.8,"#c0282a"],[5,4,-9,.8,8,.8,"#c0282a"],[0,8.2,-9,13,.8,1,"#c0282a"],[0,7,-9,11,.5,.8,"#1d1f33"],[0,9,-9,14,.4,1.2,"#1d1f33"]);for(let d of[-7,7])for(let v of[-4,0,4])n.push([d,.8,v,.3,1.6,.3,"#3a2a1a"]);for(let d=0;d<14;d++){let v=(d%2?1:-1)*(10+k()*20),x=-10-k()*40;n.push([v,1.5,x,.6,3,.6,"#5a3a2a"]);for(let M=0;M<6;M++)n.push([v+(k()-.5)*3,3+k()*2,x+(k()-.5)*3,1.6,1.2,1.6,["#ff9fc4","#ffb8d6","#ff8ab5"][M%3]])}i.boxes(n);for(let d=0;d<6;d++){let v=new it(new be(30+k()*20,30+k()*20,5),new ye({color:"#5a4a7a",flatShading:!0}));v.position.set(-80+d*32,12,-120-k()*30),i.scene.add(v)}let s=[];for(let d of[-7,7])for(let v of[-4,0,4]){let x=new it(new re(.6,.7,.6),new $t({color:new j(2.6,1.4,.5),toneMapped:!1}));x.position.set(d,1.9,v),i.scene.add(x),s.push(x);let M=new je("#ffb060",8,8,1.6);M.position.set(d,1.9,v),i.scene.add(M)}ah(i,t).g.position.set(0,.3,0);let o=i.part(600,{size:.12,add:!1,grav:.25,drag:.3,jit:.6,bright:1.1}),a=i.part(600,{size:.14,grav:1.5,jit:3,bright:2.6}),c=new j(e.beltColor||"#ffe066"),l=new it(new Ke(.62,.09,10,40),new ye({color:c,emissive:c,emissiveIntensity:.9,roughness:.4}));l.rotation.x=Math.PI/2,l.position.set(0,30,0),i.scene.add(l);let h=i.shaft(V(0,40,0),V(0,-1,0),40,1.4,"#fff4d0",0),u=new it(new Ke(1,.08,8,48),new $t({color:new j(3,2.6,1.4),transparent:!0,toneMapped:!1}));u.rotation.x=Math.PI/2,u.position.set(0,.4,0),u.visible=!1,i.scene.add(u);let p=new je("#fff4e0",5,10,1.5);i.scene.add(p);let f=new ss("#ffffff",0);i.scene.add(f);let g={},_=15,m=.3+.62;return{D:_,update(d,v){if(f.intensity=Math.max(0,f.intensity-v*10),s.forEach((x,M)=>x.scale.setScalar(1+Math.sin(d*6+M)*.05)),k()<.9&&o.emit(V((k()-.5)*30,8+k()*4,(k()-.5)*20),V(.6,-.2,.2),1,["#ff9fc4","#ffd0e4","#ffffff"],7,1),d<4){let x=Ce(Ct(d,0,4));i.look(V(ft(10,3,x),ft(16,2.2,x),ft(20,7,x)),V(0,ft(4,1,x),ft(-9,0,x)))}else if(d<7){let x=Ce(Ct(d,4,7));i.look(V(ft(.8,.3,x),ft(1.2,1,x),ft(4.4,3.4,x)),V(0,1,0)),p.position.set(1.2,2,3)}else{let x=oh(Ct(d,7,10));if(l.position.y=ft(30,m,x),l.rotation.z=d*(x<1?6:.6),h.material.opacity=.22*Ct(d,7,7.6)*(1-Ct(d,10.5,12)),d<10){let M=Ce(Ct(d,7,10));i.look(V(ft(2.6,1.6,M),ft(1.4,1.1,M),ft(6.5,4.2,M)),V(0,ft(3.2,1,M),0)),en(g,"hum",()=>e.sfx&&e.sfx("charge")),k()<.6&&a.emit(V(0,l.position.y,0),V(0,-1,0),.8,["#"+c.getHexString(),"#ffffff"],.6,2)}else{en(g,"snap",()=>{i.shake=.9,f.intensity=2.5,u.visible=!0,e.sfx&&e.sfx("slam"),a.emit(V(0,m,0),V(0,2,0),1,["#"+c.getHexString(),"#ffffff","#ffe066"],1.4,420);for(let w=0;w<120;w++)o.emit(V(0,1,0),V((k()-.5)*8,k()*4,(k()-.5)*8),.4,["#ff9fc4","#ffffff"],3,1)});let M=Ct(d,10,11.2);u.scale.setScalar(1+M*12),u.material.opacity=1-M,l.material.emissiveIntensity=.6+.5*Math.abs(Math.sin(d*3));let A=ft(.8,-.7,Ce(Ct(d,10,15)));i.look(V(Math.sin(A)*ft(3.2,5,Ct(d,12,15)),ft(1.2,1.8,Ct(d,12,15)),Math.cos(A)*ft(3.2,5,Ct(d,12,15))),V(0,1,0)),p.position.set(Math.sin(A)*2,2,Math.cos(A)*2)}}oa(e.ov,d,10.4,null,e.sub||"",e.beltColor&&e.beltColor.toLowerCase()!=="#f4f4f4"?e.beltColor:"#ffffff"),e.ov.title.textContent=e.title||"NEW BELT!",e.ov.boss.style.opacity="0",e.ov.fade.style.opacity=String(Math.max(1-Ct(d,0,.6),Ct(d,_-.6,_))),e.ov.fade.style.background="#000"}}}var mf={city(i,t){i.sky("#0a0820","#3a1630","#1a0a20",!0);let e=[];for(let n=0;n<40;n++){let s=(n-20)*t*7+(k()-.5)*t*3,r=-t*(14+k()*30),o=t*(10+k()*30),a=t*(4+k()*3);e.push([s,o/2,r,a,o,a,["#24163a","#2a1a40","#1d1230"][n%3]]);for(let c=0;c<6;c++)k()<.5&&e.push([s+(k()-.5)*a*.7,k()*o,r+a/2+1,t*.7,t*.9,.5,"#ffe066"])}return{B:e,ground:"#2a1a3a",glow:["#ffe066"]}},volcano(i,t){i.sky("#1a0404","#6a1a0a","#200606");let e=[];for(let r=0;r<30;r++){let o=(k()-.5)*t*260,a=-t*(10+k()*40),c=t*(2+k()*8);e.push([o,c/2,a,t*(3+k()*6),c,t*(3+k()*6),["#3a1a14","#2a1010"][r%2]])}let n=new it(new be(t*60,t*55,9,1,!0),new ye({color:"#2a1210",flatShading:!0}));n.position.set(-t*40,t*27,-t*120),i.scene.add(n);let s=new it(new Dn(t*9,16),new $t({color:new j(3,1.1,.2),toneMapped:!1}));return s.rotation.x=-Math.PI/2,s.position.set(-t*40,t*54.5,-t*120),i.scene.add(s),{B:e,ground:"#2a0a06",embers:!0}},space(i,t){i.sky("#02030a","#101838","#05060f",!0);let e=[];for(let r=0;r<24;r++){let o=(r-12)*t*10,a=-t*(12+r%3*6);e.push([o,t*4,a,t*8,t*8,t*4,"#1d2250"],[o,t*7.6,a+t*2.1,t*6,t*.6,.5,"#5ef2ff"])}let n=new it(new Gt(t*14,32,20),new ye({color:"#c084fc",roughness:.7}));n.position.set(t*50,t*45,-t*140),i.scene.add(n);let s=new it(new Ke(t*24,t*1.2,8,64),new $t({color:new j(1.6,1.4,.6),toneMapped:!1}));return s.position.copy(n.position),s.rotation.x=1.2,i.scene.add(s),{B:e,ground:"#2a3048",glow:["#5ef2ff"]}},jungle(i,t){i.sky("#0a2a1a","#2a6a3a","#0a1a10");let e=[];for(let n=0;n<34;n++){let s=(k()-.5)*t*240,r=-t*(8+k()*40);e.push([s,t*6,r,t*1.6,t*12,t*1.6,"#4a2a14"]);for(let o=0;o<4;o++)e.push([s+(k()-.5)*t*6,t*(12+k()*4),r+(k()-.5)*t*4,t*5,t*3,t*5,["#0e3a20","#1a5a2a","#2a7a3a"][o%3]])}return{B:e,ground:"#3a2a14"}},ice(i,t){i.sky("#0a1a3a","#4a8ac0","#a8d0f0");let e=[];for(let n=0;n<40;n++){let s=(k()-.5)*t*240,r=-t*(8+k()*40),o=t*(4+k()*16);e.push([s,o/2,r,t*(2+k()*3),o,t*(2+k()*3),["#c8e4ff","#a8d0f0","#ffffff"][n%3]])}return{B:e,ground:"#c8e4ff",snow:!0}},candy(i,t){i.sky("#ff9fc4","#ffe0ea","#ffd0e0");let e=[];for(let n=0;n<30;n++){let s=(k()-.5)*t*240,r=-t*(8+k()*40);e.push([s,t*5,r,t*.6,t*10,t*.6,"#ffffff"]);let o=["#ff4d6d","#5ef2ff","#3fdc6b","#ffe066","#c084fc"][n%5];e.push([s,t*11,r,t*4,t*4,t*1.2,o])}for(let n=0;n<20;n++)e.push([(k()-.5)*t*200,t*1,-t*(6+k()*30),t*3,t*2,t*3,["#ff8fa3","#ffffff","#c084fc"][n%3]]);return{B:e,ground:"#c084fc"}},meadow(i,t){i.sky("#3a8ae0","#c8ecff","#5aa05a");let e=[];for(let n=0;n<60;n++){let s=(k()-.5)*t*400,r=-t*(10+k()*60);e.push([s,t*2,r,t*.8,t*4,t*.8,"#6a4a2a"],[s,t*5,r,t*4,t*3,t*4,["#2f8f3a","#3fae5a"][n%2]])}return{B:e,ground:"#4aa04a"}},night(i,t){i.sky("#0a0820","#2a1a4a","#140a24",!0);let e=[];for(let n=0;n<30;n++){let s=(k()-.5)*t*240,r=-t*(10+k()*40),o=t*(4+k()*10);e.push([s,o/2,r,t*5,o,t*5,"#1d1430"])}return{B:e,ground:"#2a1a3a"}}},rh=class{constructor(t,e){this.o=e;let n=e.W,s=e.H;this.W=n,this.H=s,mi=99;let r=this.st=new sa(t);r.skyR=s*30,r.r.domElement.style.cssText="position:absolute;inset:0;width:100%;height:100%;z-index:0";let o=s*1.25;r.cam.fov=2*Math.atan(s/2/o)*180/Math.PI,r.cam.near=10,r.cam.far=s*80,r.cam.position.set(0,0,o),r.cam.lookAt(0,0,0),r.cam.updateProjectionMatrix(),this.D=o,r.cam.far=s*80;let a=e.unit||s/90,c=(mf[e.arena]||mf.city)(r,a);this.s=a,this.gy=s/2-e.Y,r.scene.fog=new Ki(r.scene.fog.color,s*2.2,s*9);let l=r.light("#fff4e0",2.6,"#c8d8ff","#4a3a4a",V(-s*.5,s*1.2,s*1.4)),h=l.shadow.camera;h.left=-n,h.right=n,h.top=s,h.bottom=-s,h.near=1,h.far=s*6,l.target.position.set(0,this.gy,0),r.scene.add(l.target),l.position.set(-s*.6,s*1.4,s*1.6),r.bloom.strength=.55,r.bloom.radius=.4,r.bloom.threshold=.9;let u=r.ground(c.ground,s*30);u.position.y=this.gy,u.material.map.repeat.set(60,60);let p=new st;if(p.position.y=this.gy,r.scene.add(p),this.root=p,c.B.length){let f=r.boxes(c.B.map(g=>[g[0],g[1],g[2]-a*4,g[3],g[4],g[5],g[6]]));if(r.scene.remove(f),p.add(f),e.scroll){let g=f.clone();g.position.x=a*400,p.add(g)}}this.g=u,this.emb=c.embers?r.part(300,{size:a*.5,grav:-a*3,jit:a,bright:2.2}):null,this.snow=c.snow?r.part(400,{size:a*.5,add:!1,grav:a*2,jit:a,bright:1}):null,this.models={},this.parts=r.parts}model(t,e,n,s){let r=t+"@"+n.toFixed(2);if(!this.models[r]){let o=un(e,Object.assign({size:n,depth:s&&s.depth||3},s||{}));this.st.scene.add(o),o.visible=!1,this.models[r]=o}return this.models[r]}hideAll(){for(let t in this.models)this.models[t].visible=!1}put(t,e,n,s,r,o){if(t.visible=!0,t.position.set(e-this.W/2,this.H/2-n,o||0),t.userData.toon){t.rotation.y=0;let c=t.userData.faceL?s:!s;t.userData.inner.rotation.y=c?.95:-.95;for(let l of t.userData.mats)l.emissive&&(l.userData.e0||(l.userData.e0=l.emissive.clone()),r?l.emissive.setRGB(.85,.85,.85):l.emissive.copy(l.userData.e0));return}t.rotation.y=s?Math.PI:0;let a=t.userData.solid&&t.userData.solid.material;a&&(a.emissive=a.emissive||new j,a.emissive.setRGB(r?.9:0,r?.9:0,r?.9:0))}frame(t,e){let n=this.st;this.hideAll(),this.emb&&k()<.6&&this.emb.emit(V((k()-.5)*this.W*1.5,this.gy,-this.s*(5+k()*30)),V(0,this.s*4,0),this.s*2,["#ff7b1c","#ffe066"],3,2),this.snow&&k()<.8&&this.snow.emit(V((k()-.5)*this.W*1.6,this.H*.6,-this.s*k()*30),V(this.s*.5,-this.s*3,0),this.s,["#ffffff"],5,2);for(let r of t.actors){if(!r||!r.spr)continue;let o=this.model(r.key,r.spr,r.size,r.o);this.put(o,r.x,r.y,r.flip,r.white,r.z),r.rot?o.rotation.z=r.rot:o.rotation.z=0,r.scale?o.scale.setScalar(r.scale):o.scale.setScalar(1)}this.items=this.items||[];let s=t.items||[];for(;this.items.length<s.length;){let r=new it(new Zn(1,0),new ye({color:"#ffe066",emissive:"#ffb627",emissiveIntensity:1.2,flatShading:!0}));r.castShadow=!0,n.scene.add(r),this.items.push(r)}if(this.items.forEach((r,o)=>{let a=s[o];if(r.visible=!!a,!a)return;r.position.set(a.x-this.W/2,this.H/2-a.y,0),r.scale.setScalar(a.r),r.rotation.y+=e*3,r.rotation.x+=e*1.7;let c=a.k==="heart"?"#ff4d6d":a.k==="bolt"?"#ffe066":a.k==="gem"?"#5ef2ff":a.k==="bone"?"#fff8e8":a.k==="bomb"?"#1d1f33":"#ffc933";r.material.color.set(c),r.material.emissive.set(a.k==="bomb"?"#ff2d4d":c),r.material.emissiveIntensity=a.k==="bone"?.15:a.k==="bomb"?Math.sin(performance.now()/60)>0?.6:0:.8}),n.shake=0,n.cam.position.set(t.shakeX||0,t.shakeY||0,this.D),n.cam.lookAt(t.shakeX||0,t.shakeY||0,0),t.scroll!=null){let r=this.s*400;this.root.position.x=-(t.scroll%r),this.g.material.map&&(this.g.material.map.offset.x=t.scroll/(this.H*30)*60)}n.grade&&(n.grade.uniforms.vig.value=.3),n.render(e)}resize(t,e){this.W=t,this.H=e,this.st.resize()}dispose(){this.st.dispose()}};function h_(i){let t=(n,s)=>{let r=document.createElement("div");return r.style.cssText=n,s&&(r.textContent=s),i.appendChild(r),r};return{title:t('position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);font:900 min(11vw,92px) "NK Digits","Pixelify Sans",Lexend,system-ui,sans-serif;letter-spacing:2px;text-align:center;white-space:nowrap;opacity:0;text-shadow:0 6px 0 #000,0 0 30px rgba(0,0,0,.6);-webkit-text-stroke:3px #000;pointer-events:none'),sub:t("position:absolute;left:50%;top:41%;transform:translateX(-50%);font:700 min(4vw,28px) Lexend,system-ui,sans-serif;color:#fff;text-shadow:0 3px 0 #000,0 0 12px #000;opacity:0;white-space:nowrap;pointer-events:none"),boss:t("position:absolute;right:4%;bottom:12%;font:800 min(4.4vw,32px) Lexend,system-ui,sans-serif;color:#ff4d6d;text-shadow:0 3px 0 #000,0 0 18px #ff2d4d;opacity:0;pointer-events:none"),bars:[t("position:absolute;left:0;right:0;top:0;height:9%;background:#000;pointer-events:none"),t("position:absolute;left:0;right:0;bottom:0;height:9%;background:#000;pointer-events:none")],fade:t("position:absolute;inset:0;background:#000;opacity:1;pointer-events:none")}}var ih={};function $n(i){return ih[i]?ih[i]:ih[i]={gold:()=>new ye({color:"#ffc933",metalness:.9,roughness:.25,envMapIntensity:1.5}),wood:()=>new ye({color:"#8a5a2a",roughness:.8}),bone:()=>new ye({color:"#cfc2a4",roughness:.85}),steel:()=>new ye({color:"#7a80a8",metalness:.7,roughness:.3,envMapIntensity:1.2}),stone:()=>new ye({color:"#5a5a70",roughness:.9})}[i]()}var Bi=i=>(i.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),i),u_={gem:i=>{let t=new st,e=new j(i.col),n=new it(new Sn(.2*(i.s||1),0),new ye({color:e,emissive:e,emissiveIntensity:.45,metalness:.1,roughness:.12,flatShading:!0}));return n.scale.y=1.45,t.add(n),Bi(t)},bar:i=>Bi(new it(new An(.9*(i.s||1),.26*(i.s||1),.38*(i.s||1),2,.05),$n("gold"))),coin:i=>{let t=new it(new ee(.17*(i.s||1),.17*(i.s||1),.06,22),$n("gold"));return Bi(t)},bone:i=>{let t=new st,e=$n("bone"),n=i.s||1;t.add(new it(new re(.5*n,.1*n,.1*n),e));for(let s of[-.27,.27])for(let r of[-.065,.065]){let o=new it(new Gt(.075*n,10,8),e);o.position.set(s*n,0,r*n),t.add(o)}return Bi(t)},shield:i=>{let t=new st,e=new j(i.col||"#5ef2ff");t.add(new it(new An(.72,.86,.12,2,.05),$n("steel")));let n=new it(new re(.5,.12,.15),new ye({color:e,emissive:e,emissiveIntensity:1.2}));n.position.y=.14,t.add(n);let s=new it(new re(.12,.5,.15),n.material);return s.position.y=.05,t.add(s),Bi(t)},chest:i=>{let t=new st,e=i.s||1,n=new it(new An(1.6*e,.9*e,1*e,2,.06),$n("wood"));n.position.y=.45*e,t.add(n);let s=new it(new An(1.64*e,.28*e,1.04*e,2,.06),$n("wood"));s.position.set(0,1*e,-.5*e),s.rotation.x=-1.15,t.add(s);for(let r of[-.6,.6]){let o=new it(new re(.12*e,.95*e,1.05*e),$n("gold"));o.position.set(r*e,.47*e,0),t.add(o)}return Bi(t)},anvil:i=>{let t=new st,e=$n("steel"),n=new it(new re(1.2,.35,.55),e);n.position.y=.95,t.add(n);let s=new it(new re(.5,.3,.4),e);s.position.set(.75,.98,0),t.add(s);let r=new it(new re(.5,.8,.5),$n("stone"));return r.position.y=.4,t.add(r),Bi(t)},rune:i=>{let t=new j(i.col||"#5ef2ff"),e=new it(new Ys(i.r||1.4,(i.r||1.4)+(i.w||.26),i.sides||3,1,i.theta||0),new $t({color:t.multiplyScalar(1.8),toneMapped:!1,transparent:!0,opacity:.9,side:Ee}));return e.rotation.x=-Math.PI/2,e},banner:i=>{let t=new st,e=new j(i.col||"#9b6bff"),n=new it(new ee(.05,.05,3.4,8),$n("wood"));n.position.y=1.7,t.add(n);let s=new it(new Ye(1.1,1.6),new ye({color:e,side:Ee,emissive:e,emissiveIntensity:.25}));return s.position.set(.6,2.5,0),t.add(s),Bi(t)}},gf=["#5ef2ff","#ff4d9d","#7dff5a","#ffe066","#b98cff"];function f_(i,t,e){let n=t.n||1,s=[],[r,o]=t.at||[0,0],a=t.y||0,c=l=>{let h=Object.assign({},t,{col:t.col||(t.type==="gem"?gf[l%gf.length]:null)}),u=u_[t.type](h);return i.scene.add(u),e.push({m:u,P:t,i:l}),u};if(t.layout==="pile"){let l=t.r||1.1;for(let h=0;h<n;h++){let u=k()*6.283,p=Math.sqrt(k())*l,f=c(h);f.position.set(r+Math.cos(u)*p,a+.18+(1-p/l)*(t.h||.7)+k()*.12,o+Math.sin(u)*p*.8),f.rotation.set(k()*.5,k()*6.28,k()*.5)}}else if(t.layout==="groups"){let l=t.groups||[[0,0]],h=t.per||3;l.forEach(([u,p],f)=>{for(let g=0;g<h;g++){let _=c(f*h+g),m=g-(h-1)/2;_.position.set(u+m*(t.gap||.42),a+.25+(t.type==="bar"?.14*Math.floor(g/3):0),p+(g%2?.12:-.12)),_.rotation.y=k()*.4}})}else if(t.layout==="grid"){let l=t.rows||3,h=t.cols||4,u=t.gap||.95;for(let p=0;p<l;p++)for(let f=0;f<h;f++)c(p*h+f).position.set(r+(f-(h-1)/2)*u,a+(l-1-p)*u*1.05,o)}else if(t.layout==="stack")for(let l=0;l<n;l++){let h=c(l);h.position.set(r+l%2*.05,a+.06+l*.07,o),h.rotation.y=l*.7}else if(t.layout==="pts")(t.pts||[]).forEach(([l,h],u)=>{c(u).position.set(l,a+(t.lift||.35),h)});else for(let l=0;l<n;l++)c(l).position.set(r+(l-(n-1)/2)*(t.gap||.5),a+.2,o)}function d_(i,t,e){let n=e.shot;mi=31+(n.seed||0);let s=ra[n.world||"castle"](i),r=n.D||8,o=s.deckY||0,a=[],c=[];for(let _ of n.chars||[]){let m,d=_.k;d==="hero"?m=un(t.hero.stand,{size:.1*(_.s||1),depth:3,noGlow:_.glow!==!0}):d==="knight"?m=un(t.friends&&t.friends[(_.f||0)%t.friends.length]||t.hero.stand,{size:.1*(_.s||1),depth:3}):d==="dog"?m=un(t.dog,{size:.085*(_.s||1),depth:3,tint:_.tint,tintK:_.tintK||.3}):d==="glitch"?m=un(t.glitch,{size:.1*(_.s||1),depth:3}):d==="gmech"?m=un(t.gmech,{size:.32*(_.s||1),depth:4,metal:.45}):d==="mech"&&(m=un(t.mech,{size:.32*(_.s||1),depth:4,metal:.45})),m&&(m.position.set(_.x||0,o+(_.y||0),_.z||0),m.rotation.y=_.rot||0,m.userData.glowMat&&d!=="glitch"&&(m.userData.glowMat.opacity=_.glow==null?.9:_.glow),i.scene.add(m),a.push({m,c:_,y:m.position.y}))}for(let _ of n.props||[])f_(i,Object.assign({y:o},_),c);for(let _ of n.lights||[]){let m=new je(_.col||"#ffe9b0",_.i||30,_.d||10,1.6);m.position.set(_.x||0,o+(_.y||2),_.z||0),i.scene.add(m)}let l=i.part(400,{size:.09,grav:-.3,jit:.4,bright:2.6}),h=n.cam||{},u=V(...h.from||[0,3,8]),p=V(...h.to||h.from||[0,3,8]),f=V(...h.at||[0,1,0]),g=V(...h.at2||h.at||[0,1,0]);return h.fov&&i.fov(h.fov),{D:r,update(_,m){s.tick&&s.tick(_);let d=Ce(Math.min(1,_/r));if(i.look(u.clone().lerp(p,d),f.clone().lerp(g,d)),a.forEach(({m:v,c:x,y:M},A)=>{x.k==="glitch"?v.position.y=M+Math.sin(_*2.2+A)*.15:x.bob!==!1&&(v.position.y=M+Math.abs(Math.sin(_*2+A*1.3))*.025)}),c.forEach(({m:v,P:x,i:M})=>{x.type==="gem"&&x.layout!=="pile"&&(v.rotation.y+=m*1.2),x.float&&(v.position.y+=Math.sin(_*2+M)*.003)}),n.sparkle&&k()<.7){let v=n.sparkle;l.emit(V(v[0]+(k()-.5)*(v[2]||2),o+.3+k()*1.2,v[1]+(k()-.5)*(v[2]||2)*.6),V(0,.6,0),.2,["#ffe066","#5ef2ff","#ffffff","#ff4d9d"],1.1,2)}e.ov&&(e.ov.fade.style.opacity=String(n.fadeIn?Math.max(0,1-_/.5):0))}}}var aa={ok(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},play(i,t){return new Promise(e=>{let n=document.createElement("div");n.id="cine3d",n.style.cssText="position:fixed;inset:0;z-index:60;background:#000;overflow:hidden;touch-action:none",document.body.appendChild(n);let s=new sa(n),r=h_(n);t.ov=r;let o=({mech:a_,world:df,victory:c_,belt:l_,shot:d_}[i]||df)(s,t.sprites,t),a=document.createElement("button");a.textContent="Skip \u25B8",a.style.cssText="position:absolute;top:calc(9% + 10px);right:14px;z-index:3;border:0;border-radius:12px;padding:12px 18px;font:700 17px Lexend,system-ui;background:#ffffff26;color:#fff",n.appendChild(a);let c=!1,l=0,h=performance.now(),u=()=>{c||(c=!0,t.onEnd&&t.onEnd(),window.removeEventListener("resize",p),s.dispose(),n.remove(),e())},p=()=>s.resize();if(window.addEventListener("resize",p),a.addEventListener("pointerdown",g=>{g.preventDefault(),g.stopPropagation(),u()}),t.manual){this._step=(g,_)=>{l=g,o.update(l,_),s.render(_)},this._end=u,this._frame=g=>{let _=s.r.domElement,m=n.clientWidth,d=n.clientHeight,v=document.createElement("canvas");v.width=m,v.height=d;let x=v.getContext("2d");x.drawImage(_,0,0,m,d),t.noBars||(x.fillStyle="#000",x.fillRect(0,0,m,d*.09),x.fillRect(0,d*.91,m,d*.09));let M=(I,B,y,b,N)=>{let U=+I.style.opacity||0;if(U<=.01||!I.textContent)return;x.globalAlpha=U,x.font=B,x.textAlign=b||"center",x.lineJoin="round";let L=/scale\(([\d.]+)\)/.exec(I.style.transform||""),F=L?+L[1]:1;x.save(),x.translate(N==null?m/2:N,y),x.scale(F,F),x.lineWidth=8,x.strokeStyle="#000",x.strokeText(I.textContent,0,0),x.fillStyle=I.style.color||"#fff",x.fillText(I.textContent,0,0),x.restore(),x.globalAlpha=1},A=(r.title.textContent||"").length||8,w=Math.min(m*Math.min(.11,1.5/A),92);M(r.title,`900 ${w}px "NK Digits","Pixelify Sans",Lexend,sans-serif`,d*.3+w*.35),M(r.sub,`700 ${Math.min(m*.04,28)}px Lexend,sans-serif`,d*.41+20),r.boss.style.color=r.boss.style.color||"#ff4d6d",M(r.boss,`800 ${Math.min(m*.044,32)}px Lexend,sans-serif`,d*.88-10,"right",m*.96);let E=+r.fade.style.opacity||0;return E>.01&&(x.globalAlpha=E,x.fillStyle=r.fade.style.background||"#000",x.fillRect(0,0,m,d),x.globalAlpha=1),v.toDataURL("image/jpeg",g||.9).split(",")[1]};return}let f=g=>{if(c)return;let _=Math.min(.05,(g-h)/1e3);h=g,l+=_,o.update(l,_),s.render(_),l>=o.D?u():requestAnimationFrame(f)};t.onStart&&t.onStart(),requestAnimationFrame(f)})}};aa.live=(i,t)=>new rh(i,t);aa.portrait=(i,t={})=>{let e=t.w||96,n=t.h||132,s=t.res||4,r=e*s,o=n*s,a=new Ii({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});a.setSize(r,o,!1),a.setClearColor(0,0),a.outputColorSpace=He;let c=new qn;c.add(new Li("#ffffff","#8a7a9a",1.5));let l=new fi("#fff4e0",2.2);l.position.set(2,4,5),c.add(l);let h=eh(i)?nh(i,{size:.1}):un(i,{size:.1});h.userData.inner&&(h.userData.inner.rotation.y=t.turn!=null?t.turn:.45),c.add(h);let u=new gn().setFromObject(h),p=u.getSize(new P),f=u.getCenter(new P),g=Math.max(p.x/e,p.y/n)*1.04,_=new li(-e*g/2,e*g/2,n*g,0,-50,50);_.position.set(f.x,u.min.y,10),_.lookAt(f.x,u.min.y,0),a.render(c,_);let m=document.createElement("canvas");return m.width=r,m.height=o,m.getContext("2d").drawImage(a.domElement,0,0),a.dispose(),m.lw=e,m.lh=n,m.toon=!0,m};var Kn={r:null,cache:new Map};aa.shot=(i,t={})=>{let e=t.w||96,n=t.h||96,s=t.res||2,r=JSON.stringify([i,e,n,s,t.turn]),o=Kn.cache.get(r),a=document.createElement("canvas");if(a.width=e*s,a.height=n*s,o)return a.getContext("2d").drawImage(o,0,0),a;Kn.r||(Kn.r=new Ii({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Kn.r.setClearColor(0,0),Kn.r.outputColorSpace=He);let c=Kn.r;c.setSize(e*s,n*s,!1);let l=new qn;l.add(new Li("#ffffff","#8a7a9a",1.6));let h=new fi("#fff4e0",2.2);h.position.set(2,4,5),l.add(h);let u=new st,p=null;if(i.hero&&(p=hs(i.hero),u.add(p)),i.pet||i.dog){let x=i.pet&&i.pet!=="none"?i.dog?pi(Object.assign({breed:i.pet},i.dog)):tf(i.pet):i.dog?pi(i.dog):null;x&&(p&&(x.position.set(.95,0,.3),x.scale.multiplyScalar(1.15)),u.add(x))}if(i.ride){let x=nf(i.ride);x&&u.add(x)}u.rotation.y=t.turn!=null?t.turn:.5,u.rotation.x=t.tilt||0,l.add(u);let f=new gn().setFromObject(u),g=f.getSize(new P),_=f.getCenter(new P),m=Math.max(g.x/e,g.y/n)*1.12,d=new li(-e*m/2,e*m/2,n*m/2,-n*m/2,-50,50);d.position.set(_.x,_.y,10),d.lookAt(_.x,_.y,0),c.render(l,d);let v=document.createElement("canvas");return v.width=e*s,v.height=n*s,v.getContext("2d").drawImage(c.domElement,0,0),l.traverse(x=>{x.geometry&&x.geometry.dispose()}),Kn.cache.size>160&&Kn.cache.delete(Kn.cache.keys().next().value),Kn.cache.set(r,v),a.getContext("2d").drawImage(v,0,0),a};window.Cine3D=aa;window.World3D=cf;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
