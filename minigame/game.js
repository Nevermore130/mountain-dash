(()=>{var Ul="160";var Ju=0,gc=1,Ku=2;var qh=1,Nl=2,zn=3,fi=0,ze=1,Pe=2;var ci=0,os=1,Xr=2,_c=3,xc=4,ju=5,Ei=100,Qu=101,tf=102,vc=103,yc=104,ef=200,nf=201,sf=202,rf=203,Va=204,Wa=205,of=206,af=207,lf=208,cf=209,hf=210,uf=211,ff=212,df=213,pf=214,mf=0,gf=1,_f=2,qr=3,xf=4,vf=5,yf=6,Mf=7,Fl=0,Sf=1,bf=2,hi=0,Ef=1,wf=2,Tf=3,Ol=4,Af=5,Rf=6;var Yh=300,cs=301,hs=302,Xa=303,qa=304,Po=306,di=1e3,je=1001,Ya=1002,ve=1003,Mc=1004;var ca=1005;var oe=1006,Cf=1007;var En=1008;var ui=1009,Pf=1010,Lf=1011,Bl=1012,Zh=1013,ai=1014,li=1015,Vs=1016,$h=1017,Jh=1018,Ai=1020,If=1021,Ae=1023,Df=1024,Uf=1025,Ri=1026,us=1027,Nf=1028,Kh=1029,Ff=1030,jh=1031,Qh=1033,ha=33776,ua=33777,fa=33778,da=33779,Sc=35840,bc=35841,Ec=35842,wc=35843,tu=36196,Tc=37492,Ac=37496,Rc=37808,Cc=37809,Pc=37810,Lc=37811,Ic=37812,Dc=37813,Uc=37814,Nc=37815,Fc=37816,Oc=37817,Bc=37818,zc=37819,Hc=37820,kc=37821,pa=36492,Gc=36494,Vc=36495,Of=36283,Wc=36284,Xc=36285,qc=36286;var Yr=2300,Zr=2301,ma=2302,Yc=2400,Zc=2401,$c=2402;var eu=3e3,Ci=3001,Bf=3200,zf=3201,zl=0,Hf=1,ge="",ue="srgb",Vn="srgb-linear",Hl="display-p3",Lo="display-p3-linear",$r="linear",re="srgb",Jr="rec709",Kr="p3";var Oi=7680;var Jc=519,kf=512,Gf=513,Vf=514,nu=515,Wf=516,Xf=517,qf=518,Yf=519,Za=35044,Jn=35048;var Kc="300 es",$a=1035,kn=2e3,jr=2001,pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jc=1234567,Os=Math.PI/180,Ws=180/Math.PI;function Gn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[s&255]+Oe[s>>8&255]+Oe[s>>16&255]+Oe[s>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function kl(s,t){return(s%t+t)%t}function Zf(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function $f(s,t,e){return s!==t?(e-s)/(t-s):0}function Bs(s,t,e){return(1-e)*s+e*t}function Jf(s,t,e,n){return Bs(s,t,1-Math.exp(-e*n))}function Kf(s,t=1){return t-Math.abs(kl(s,t*2)-t)}function jf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Qf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function td(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ed(s,t){return s+Math.random()*(t-s)}function nd(s){return s*(.5-Math.random())}function id(s){s!==void 0&&(jc=s);let t=jc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sd(s){return s*Os}function rd(s){return s*Ws}function Ja(s){return(s&s-1)===0&&s!==0}function od(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ad(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Io={DEG2RAD:Os,RAD2DEG:Ws,generateUUID:Gn,clamp:Te,euclideanModulo:kl,mapLinear:Zf,inverseLerp:$f,lerp:Bs,damp:Jf,pingpong:Kf,smoothstep:jf,smootherstep:Qf,randInt:td,randFloat:ed,randFloatSpread:nd,seededRandom:id,degToRad:sd,radToDeg:rd,isPowerOfTwo:Ja,ceilPowerOfTwo:od,floorPowerOfTwo:Qr,setQuaternionFromProperEuler:ad,normalize:jt,denormalize:bn},ot=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],b=i[7],R=i[2],S=i[5],w=i[8];return r[0]=o*_+a*v+l*R,r[3]=o*m+a*x+l*S,r[6]=o*p+a*b+l*w,r[1]=c*_+h*v+u*R,r[4]=c*m+h*x+u*S,r[7]=c*p+h*b+u*w,r[2]=f*_+d*v+g*R,r[5]=f*m+d*x+g*S,r[8]=f*p+d*b+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ga.makeScale(t,e)),this}rotate(t){return this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ga=new Ht;function iu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function to(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ld(){let s=to("canvas");return s.style.display="block",s}var Qc={};function zs(s){s in Qc||(Qc[s]=!0,console.warn(s))}var th=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eh=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mr={[Vn]:{transfer:$r,primaries:Jr,toReference:s=>s,fromReference:s=>s},[ue]:{transfer:re,primaries:Jr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Lo]:{transfer:$r,primaries:Kr,toReference:s=>s.applyMatrix3(eh),fromReference:s=>s.applyMatrix3(th)},[Hl]:{transfer:re,primaries:Kr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(eh),fromReference:s=>s.applyMatrix3(th).convertLinearToSRGB()}},cd=new Set([Vn,Lo]),Qt={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!cd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=mr[t].toReference,i=mr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return mr[s].primaries},getTransfer:function(s){return s===ge?$r:mr[s].transfer}};function as(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _a(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Bi,eo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=to("canvas")),Bi.width=t.width,Bi.height=t.height;let n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=to("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=as(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(as(e[n]/255)*255):e[n]=as(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hd=0,no=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Gn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(xa(i[o].image)):r.push(xa(i[o]))}else r=xa(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function xa(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?eo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ud=0,on=class s extends pi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=je,i=je,r=oe,o=En,a=Ae,l=ui,c=s.DEFAULT_ANISOTROPY,h=ge){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Gn(),this.name="",this.source=new no(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ci?ue:ge),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case je:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case je:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ue?Ci:eu}set encoding(t){zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ci?ue:ge}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Yh;on.DEFAULT_ANISOTROPY=1;var Re=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,b=(d+1)/2,R=(p+1)/2,S=(h+f)/4,w=(u+_)/4,I=(g+m)/4;return x>b&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=S/n,r=w/n):b>R?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=S/i,r=I/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=w/r,i=I/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ci?ue:ge),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new no(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends Ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},io=class extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ve,this.minFilter=ve,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ja=class extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ve,this.minFilter=ve,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let R=Math.sqrt(x),S=Math.atan2(R,p*v);m=Math.sin(m*S)/R,a=Math.sin(a*S)/R}let b=a*v;if(l=l*m+f*b,c=c*m+d*b,h=h*m+g*b,u=u*m+_*b,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},va=new C,nh=new wn,Xn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),_r.subVectors(this.max,Rs),zi.subVectors(t.a,Rs),Hi.subVectors(t.b,Rs),ki.subVectors(t.c,Rs),ni.subVectors(Hi,zi),ii.subVectors(ki,Hi),vi.subVectors(zi,ki);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-vi.z,vi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,vi.z,0,-vi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-vi.y,vi.x,0];return!ya(e,zi,Hi,ki,_r)||(e=[1,0,0,0,1,0,0,0,1],!ya(e,zi,Hi,ki,_r))?!1:(xr.crossVectors(ni,ii),e=[xr.x,xr.y,xr.z],ya(e,zi,Hi,ki,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Un=[new C,new C,new C,new C,new C,new C,new C,new C],dn=new C,gr=new Xn,zi=new C,Hi=new C,ki=new C,ni=new C,ii=new C,vi=new C,Rs=new C,_r=new C,xr=new C,yi=new C;function ya(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){yi.fromArray(s,r);let a=i.x*Math.abs(yi.x)+i.y*Math.abs(yi.y)+i.z*Math.abs(yi.z),l=t.dot(yi),c=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var fd=new Xn,Cs=new C,Ma=new C,mi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):fd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);let e=Cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Cs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(Ma)),this.expandByPoint(Cs.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new C,Sa=new C,vr=new C,si=new C,ba=new C,yr=new C,Ea=new C,so=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Sa.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),si.copy(this.origin).sub(Sa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(vr),a=si.dot(this.direction),l=-si.dot(vr),c=si.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sa).addScaledVector(vr,f),d}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,i,r){ba.subVectors(e,t),yr.subVectors(n,t),Ea.crossVectors(ba,yr);let o=this.direction.dot(Ea),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);let l=a*this.direction.dot(yr.crossVectors(si,yr));if(l<0)return null;let c=a*this.direction.dot(ba.cross(si));if(c<0||l+c>o)return null;let h=-a*si.dot(Ea);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dd,t,pd)}lookAt(t,e,n){let i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ri.crossVectors(n,sn),ri.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ri.crossVectors(n,sn)),ri.normalize(),Mr.crossVectors(sn,ri),i[0]=ri.x,i[4]=Mr.x,i[8]=sn.x,i[1]=ri.y,i[5]=Mr.y,i[9]=sn.y,i[2]=ri.z,i[6]=Mr.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],b=n[11],R=n[15],S=i[0],w=i[4],I=i[8],y=i[12],E=i[1],U=i[5],G=i[9],Y=i[13],L=i[2],N=i[6],H=i[10],q=i[14],X=i[3],W=i[7],Z=i[11],K=i[15];return r[0]=o*S+a*E+l*L+c*X,r[4]=o*w+a*U+l*N+c*W,r[8]=o*I+a*G+l*H+c*Z,r[12]=o*y+a*Y+l*q+c*K,r[1]=h*S+u*E+f*L+d*X,r[5]=h*w+u*U+f*N+d*W,r[9]=h*I+u*G+f*H+d*Z,r[13]=h*y+u*Y+f*q+d*K,r[2]=g*S+_*E+m*L+p*X,r[6]=g*w+_*U+m*N+p*W,r[10]=g*I+_*G+m*H+p*Z,r[14]=g*y+_*Y+m*q+p*K,r[3]=v*S+x*E+b*L+R*X,r[7]=v*w+x*U+b*N+R*W,r[11]=v*I+x*G+b*H+R*Z,r[15]=v*y+x*Y+b*q+R*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,x=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,b=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,R=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,S=e*v+n*x+i*b+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return t[0]=v*w,t[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*w,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*w,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*w,t[4]=x*w,t[5]=(h*m*r-g*f*r+g*i*d-e*m*d-h*i*p+e*f*p)*w,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*w,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*d+e*l*d)*w,t[8]=b*w,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*w,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*w,t[12]=R*w,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*w,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*w,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=l*c,x=l*h,b=l*u,R=n.x,S=n.y,w=n.z;return i[0]=(1-(_+p))*R,i[1]=(d+b)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(d-b)*S,i[5]=(1-(f+p))*S,i[6]=(m+v)*S,i[7]=0,i[8]=(g+x)*w,i[9]=(m-v)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Gi.set(i[0],i[1],i[2]).length(),o=Gi.set(i[4],i[5],i[6]).length(),a=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],pn.copy(this);let c=1/r,h=1/o,u=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=kn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(a===kn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===jr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=kn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*h,g,_;if(a===kn)g=(o+r)*u,_=-2*u;else if(a===jr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gi=new C,pn=new ie,dd=new C(0,0,0),pd=new C(1,1,1),ri=new C,Mr=new C,sn=new C,ih=new ie,sh=new wn,fs=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fs.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},md=0,rh=new C,Vi=new wn,Fn=new ie,Sr=new C,Ps=new C,gd=new C,_d=new wn,oh=new C(1,0,0),ah=new C(0,1,0),lh=new C(0,0,1),xd={type:"added"},vd={type:"removed"},Le=class s extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new C,e=new fs,n=new wn,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ht}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(ah,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(ah,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ps,Sr,this.up):Fn.lookAt(Sr,Ps,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Vi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(xd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,_d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Le.DEFAULT_UP=new C(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new C,On=new C,wa=new C,Bn=new C,Wi=new C,Xi=new C,ch=new C,Ta=new C,Aa=new C,Ra=new C,br=!1,Ti=class s{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mn.subVectors(t,e),i.cross(mn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){mn.subVectors(i,e),On.subVectors(n,e),wa.subVectors(t,e);let o=mn.dot(mn),a=mn.dot(On),l=mn.dot(wa),c=On.dot(On),h=On.dot(wa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(t,e,n,i,r,o,a,l){return br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),br=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static isFrontFacing(t,e,n,i){return mn.subVectors(n,e),On.subVectors(t,e),mn.cross(On).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),mn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),br=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Wi.subVectors(i,n),Xi.subVectors(r,n),Ta.subVectors(t,n);let l=Wi.dot(Ta),c=Xi.dot(Ta);if(l<=0&&c<=0)return e.copy(n);Aa.subVectors(t,i);let h=Wi.dot(Aa),u=Xi.dot(Aa);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Wi,o);Ra.subVectors(t,r);let d=Wi.dot(Ra),g=Xi.dot(Ra);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Xi,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return ch.subVectors(r,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(ch,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Ca(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=kl(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ca(o,r,t+1/3),this.g=Ca(o,r,t),this.b=Ca(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){let n=su[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return Qt.fromWorkingColorSpace(Be.copy(this),t),Math.round(Te(Be.r*255,0,255))*65536+Math.round(Te(Be.g*255,0,255))*256+Math.round(Te(Be.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Be.copy(this),e);let n=Be.r,i=Be.g,r=Be.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=ue){Qt.fromWorkingColorSpace(Be.copy(this),t);let e=Be.r,n=Be.g,i=Be.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Er);let n=Bs(oi.h,Er.h,e),i=Bs(oi.s,Er.s,e),r=Bs(oi.l,Er.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new ft;ft.NAMES=su;var yd=0,Tn=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=os,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Wa,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},oo=class extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new C,wr=new ot,Vt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Za&&(t.usage=this.usage),t}};var ao=class extends Vt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lo=class extends Vt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends Vt{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Md=0,cn=new ie,Pa=new Le,qi=new C,rn=new Xn,Ls=new Xn,we=new C,ae=class s extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iu(t)?lo:ao)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Yt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(rn.min,Ls.min),rn.expandByPoint(we),we.addVectors(rn.max,Ls.max),rn.expandByPoint(we)):(rn.expandByPoint(Ls.min),rn.expandByPoint(Ls.max))}rn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(qi.fromBufferAttribute(t,c),we.add(qi)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new C,h[E]=new C;let u=new C,f=new C,d=new C,g=new ot,_=new ot,m=new ot,p=new C,v=new C;function x(E,U,G){u.fromArray(i,E*3),f.fromArray(i,U*3),d.fromArray(i,G*3),g.fromArray(o,E*2),_.fromArray(o,U*2),m.fromArray(o,G*2),f.sub(u),d.sub(u),_.sub(g),m.sub(g);let Y=1/(_.x*m.y-m.x*_.y);isFinite(Y)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(Y),v.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(Y),c[E].add(p),c[U].add(p),c[G].add(p),h[E].add(v),h[U].add(v),h[G].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let E=0,U=b.length;E<U;++E){let G=b[E],Y=G.start,L=G.count;for(let N=Y,H=Y+L;N<H;N+=3)x(n[N+0],n[N+1],n[N+2])}let R=new C,S=new C,w=new C,I=new C;function y(E){w.fromArray(r,E*3),I.copy(w);let U=c[E];R.copy(U),R.sub(w.multiplyScalar(w.dot(U))).normalize(),S.crossVectors(I,U);let Y=S.dot(h[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=Y}for(let E=0,U=b.length;E<U;++E){let G=b[E],Y=G.start,L=G.count;for(let N=Y,H=Y+L;N<H;N+=3)y(n[N+0]),y(n[N+1]),y(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Vt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hh=new ie,Mi=new so,Tr=new mi,uh=new C,Yi=new C,Zi=new C,$i=new C,La=new C,Ar=new C,Rr=new ot,Cr=new ot,Pr=new ot,fh=new C,dh=new C,ph=new C,Lr=new C,Ir=new C,Xt=class extends Le{constructor(t=new ae,e=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(La.fromBufferAttribute(u,t),o?Ar.addScaledVector(La,h):Ar.addScaledVector(La.sub(e),h))}e.add(Ar)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Tr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Tr,uh)===null||Mi.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(hh.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(hh),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,R=x;b<R;b+=3){let S=a.getX(b),w=a.getX(b+1),I=a.getX(b+2);i=Dr(this,p,t,n,c,h,u,S,w,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let v=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);i=Dr(this,o,t,n,c,h,u,v,x,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,R=x;b<R;b+=3){let S=b,w=b+1,I=b+2;i=Dr(this,p,t,n,c,h,u,S,w,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let v=m,x=m+1,b=m+2;i=Dr(this,o,t,n,c,h,u,v,x,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Sd(s,t,e,n,i,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===fi,a),l===null)return null;Ir.copy(a),Ir.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ir);return c<e.near||c>e.far?null:{distance:c,point:Ir.clone(),object:s}}function Dr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Yi),s.getVertexPosition(l,Zi),s.getVertexPosition(c,$i);let h=Sd(s,t,e,n,Yi,Zi,$i,Lr);if(h){i&&(Rr.fromBufferAttribute(i,a),Cr.fromBufferAttribute(i,l),Pr.fromBufferAttribute(i,c),h.uv=Ti.getInterpolation(Lr,Yi,Zi,$i,Rr,Cr,Pr,new ot)),r&&(Rr.fromBufferAttribute(r,a),Cr.fromBufferAttribute(r,l),Pr.fromBufferAttribute(r,c),h.uv1=Ti.getInterpolation(Lr,Yi,Zi,$i,Rr,Cr,Pr,new ot),h.uv2=h.uv1),o&&(fh.fromBufferAttribute(o,a),dh.fromBufferAttribute(o,l),ph.fromBufferAttribute(o,c),h.normal=Ti.getInterpolation(Lr,Yi,Zi,$i,fh,dh,ph,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};Ti.getNormal(Yi,Zi,$i,u.normal),h.face=u}return h}var hn=class s extends ae{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(_,m,p,v,x,b,R,S,w,I,y){let E=b/w,U=R/I,G=b/2,Y=R/2,L=S/2,N=w+1,H=I+1,q=0,X=0,W=new C;for(let Z=0;Z<H;Z++){let K=Z*U-Y;for(let it=0;it<N;it++){let V=it*E-G;W[_]=V*v,W[m]=K*x,W[p]=L,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=S>0?1:-1,h.push(W.x,W.y,W.z),u.push(it/w),u.push(1-Z/I),q+=1}}for(let Z=0;Z<I;Z++)for(let K=0;K<w;K++){let it=f+K+N*Z,V=f+K+N*(Z+1),$=f+(K+1)+N*(Z+1),at=f+(K+1)+N*Z;l.push(it,V,at),l.push(V,$,at),X+=6}a.addGroup(d,X,y),d+=X,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ds(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ze(s){let t={};for(let e=0;e<s.length;e++){let n=ds(s[e]);for(let i in n)t[i]=n[i]}return t}function bd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ru(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}var Ed={clone:ds,merge:Ze},wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ie=class extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=bd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},co=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$e=class extends co{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Os*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ji=-90,Ki=1,Qa=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new $e(Ji,Ki,t,e);i.layers=this.layers,this.add(i);let r=new $e(Ji,Ki,t,e);r.layers=this.layers,this.add(r);let o=new $e(Ji,Ki,t,e);o.layers=this.layers,this.add(o);let a=new $e(Ji,Ki,t,e);a.layers=this.layers,this.add(a);let l=new $e(Ji,Ki,t,e);l.layers=this.layers,this.add(l);let c=new $e(Ji,Ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ho=class extends on{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tl=class extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ci?ue:ge),this.texture=new ho(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:oe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hn(5,5,5),r=new Ie({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:ci});r.uniforms.tEquirect.value=e;let o=new Xt(i,r),a=e.minFilter;return e.minFilter===En&&(e.minFilter=oe),new Qa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ia=new C,Ad=new C,Rd=new Ht,Hn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ia.subVectors(n,e).cross(Ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ia),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rd.getNormalMatrix(t),i=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Si=new mi,Ur=new C,Xs=class{constructor(t=new Hn,e=new Hn,n=new Hn,i=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],x=i[14],b=i[15];if(n[0].setComponents(l-r,f-c,m-d,b-p).normalize(),n[1].setComponents(l+r,f+c,m+d,b+p).normalize(),n[2].setComponents(l+o,f+h,m+g,b+v).normalize(),n[3].setComponents(l-o,f-h,m-g,b-v).normalize(),n[4].setComponents(l-a,f-u,m-_,b-x).normalize(),e===kn)n[5].setComponents(l+a,f+u,m+_,b+x).normalize();else if(e===jr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ur.x=i.normal.x>0?t.max.x:t.min.x,Ur.y=i.normal.y>0?t.max.y:t.min.y,Ur.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ou(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Cd(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),d.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];e?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var qn=class s extends ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let v=p*f-o;for(let x=0;x<c;x++){let b=x*u-r;g.push(b,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let x=v+c*p,b=v+c*(p+1),R=v+1+c*(p+1),S=v+1+c*p;d.push(x,b,S),d.push(b,R,S)}this.setIndex(d),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ld=`#ifdef USE_ALPHAHASH
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
#endif`,Id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
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
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vd=`#ifdef USE_IRIDESCENCE
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
#endif`,Wd=`#ifdef USE_BUMPMAP
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qd=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ep=`vec3 transformedNormal = objectNormal;
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
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,op="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,lp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_p=`#ifdef USE_GRADIENTMAP
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
}`,xp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rp=`PhysicalMaterial material;
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
#endif`,Cp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Pp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Up=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hp=`#if defined( USE_POINTS_UV )
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
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jp=`#ifdef USE_NORMALMAP
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
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sm=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Em=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`#include <common>
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
}`,Fm=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Om=`#define DISTANCE
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
}`,Bm=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vm=`#include <common>
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
}`,Wm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xm=`#define LAMBERT
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
}`,qm=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ym=`#define MATCAP
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
}`,Zm=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$m=`#define NORMAL
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
}`,Jm=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Km=`#define PHONG
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
}`,jm=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qm=`#define STANDARD
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
}`,t0=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,e0=`#define TOON
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
}`,n0=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,i0=`uniform float size;
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
}`,s0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,o0=`uniform vec3 color;
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
}`,a0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,l0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ut={alphahash_fragment:Pd,alphahash_pars_fragment:Ld,alphamap_fragment:Id,alphamap_pars_fragment:Dd,alphatest_fragment:Ud,alphatest_pars_fragment:Nd,aomap_fragment:Fd,aomap_pars_fragment:Od,batching_pars_vertex:Bd,batching_vertex:zd,begin_vertex:Hd,beginnormal_vertex:kd,bsdfs:Gd,iridescence_fragment:Vd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:Zd,color_fragment:$d,color_pars_fragment:Jd,color_pars_vertex:Kd,color_vertex:jd,common:Qd,cube_uv_reflection_fragment:tp,defaultnormal_vertex:ep,displacementmap_pars_vertex:np,displacementmap_vertex:ip,emissivemap_fragment:sp,emissivemap_pars_fragment:rp,colorspace_fragment:op,colorspace_pars_fragment:ap,envmap_fragment:lp,envmap_common_pars_fragment:cp,envmap_pars_fragment:hp,envmap_pars_vertex:up,envmap_physical_pars_fragment:bp,envmap_vertex:fp,fog_vertex:dp,fog_pars_vertex:pp,fog_fragment:mp,fog_pars_fragment:gp,gradientmap_pars_fragment:_p,lightmap_fragment:xp,lightmap_pars_fragment:vp,lights_lambert_fragment:yp,lights_lambert_pars_fragment:Mp,lights_pars_begin:Sp,lights_toon_fragment:Ep,lights_toon_pars_fragment:wp,lights_phong_fragment:Tp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Rp,lights_physical_pars_fragment:Cp,lights_fragment_begin:Pp,lights_fragment_maps:Lp,lights_fragment_end:Ip,logdepthbuf_fragment:Dp,logdepthbuf_pars_fragment:Up,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:Fp,map_fragment:Op,map_pars_fragment:Bp,map_particle_fragment:zp,map_particle_pars_fragment:Hp,metalnessmap_fragment:kp,metalnessmap_pars_fragment:Gp,morphcolor_vertex:Vp,morphnormal_vertex:Wp,morphtarget_pars_vertex:Xp,morphtarget_vertex:qp,normal_fragment_begin:Yp,normal_fragment_maps:Zp,normal_pars_fragment:$p,normal_pars_vertex:Jp,normal_vertex:Kp,normalmap_pars_fragment:jp,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:em,iridescence_pars_fragment:nm,opaque_fragment:im,packing:sm,premultiplied_alpha_fragment:rm,project_vertex:om,dithering_fragment:am,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:um,shadowmap_pars_vertex:fm,shadowmap_vertex:dm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:_m,skinnormal_vertex:xm,specularmap_fragment:vm,specularmap_pars_fragment:ym,tonemapping_fragment:Mm,tonemapping_pars_fragment:Sm,transmission_fragment:bm,transmission_pars_fragment:Em,uv_pars_fragment:wm,uv_pars_vertex:Tm,uv_vertex:Am,worldpos_vertex:Rm,background_vert:Cm,background_frag:Pm,backgroundCube_vert:Lm,backgroundCube_frag:Im,cube_vert:Dm,cube_frag:Um,depth_vert:Nm,depth_frag:Fm,distanceRGBA_vert:Om,distanceRGBA_frag:Bm,equirect_vert:zm,equirect_frag:Hm,linedashed_vert:km,linedashed_frag:Gm,meshbasic_vert:Vm,meshbasic_frag:Wm,meshlambert_vert:Xm,meshlambert_frag:qm,meshmatcap_vert:Ym,meshmatcap_frag:Zm,meshnormal_vert:$m,meshnormal_frag:Jm,meshphong_vert:Km,meshphong_frag:jm,meshphysical_vert:Qm,meshphysical_frag:t0,meshtoon_vert:e0,meshtoon_frag:n0,points_vert:i0,points_frag:s0,shadow_vert:r0,shadow_frag:o0,sprite_vert:a0,sprite_frag:l0},nt={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Sn={basic:{uniforms:Ze([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ze([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ze([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ze([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ze([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ze([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ze([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ze([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ze([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ze([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ze([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ze([nt.common,nt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ze([nt.lights,nt.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Sn.physical={uniforms:Ze([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var Nr={r:0,b:0,g:0};function c0(s,t,e,n,i,r,o){let a=new ft(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Po)?(h===void 0&&(h=new Xt(new hn(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:ds(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==re,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Xt(new qn(2,2),new Ie({name:"BackgroundMaterial",uniforms:ds(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Nr,ru(s)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function h0(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(L,N,H,q,X){let W=!1;if(o){let Z=_(q,H,N);c!==Z&&(c=Z,d(c.object)),W=p(L,q,H,X),W&&v(L,q,H,X)}else{let Z=N.wireframe===!0;(c.geometry!==q.id||c.program!==H.id||c.wireframe!==Z)&&(c.geometry=q.id,c.program=H.id,c.wireframe=Z,W=!0)}X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,I(L,N,H,q),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,N,H){let q=H.wireframe===!0,X=a[L.id];X===void 0&&(X={},a[L.id]=X);let W=X[N.id];W===void 0&&(W={},X[N.id]=W);let Z=W[q];return Z===void 0&&(Z=m(f()),W[q]=Z),Z}function m(L){let N=[],H=[],q=[];for(let X=0;X<i;X++)N[X]=0,H[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:q,object:L,attributes:{},index:null}}function p(L,N,H,q){let X=c.attributes,W=N.attributes,Z=0,K=H.getAttributes();for(let it in K)if(K[it].location>=0){let $=X[it],at=W[it];if(at===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(at=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(at=L.instanceColor)),$===void 0||$.attribute!==at||at&&$.data!==at.data)return!0;Z++}return c.attributesNum!==Z||c.index!==q}function v(L,N,H,q){let X={},W=N.attributes,Z=0,K=H.getAttributes();for(let it in K)if(K[it].location>=0){let $=W[it];$===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let at={};at.attribute=$,$&&$.data&&(at.data=$.data),X[it]=at,Z++}c.attributes=X,c.attributesNum=Z,c.index=q}function x(){let L=c.newAttributes;for(let N=0,H=L.length;N<H;N++)L[N]=0}function b(L){R(L,0)}function R(L,N){let H=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;H[L]=1,q[L]===0&&(s.enableVertexAttribArray(L),q[L]=1),X[L]!==N&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),X[L]=N)}function S(){let L=c.newAttributes,N=c.enabledAttributes;for(let H=0,q=N.length;H<q;H++)N[H]!==L[H]&&(s.disableVertexAttribArray(H),N[H]=0)}function w(L,N,H,q,X,W,Z){Z===!0?s.vertexAttribIPointer(L,N,H,X,W):s.vertexAttribPointer(L,N,H,q,X,W)}function I(L,N,H,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let X=q.attributes,W=H.getAttributes(),Z=N.defaultAttributeValues;for(let K in W){let it=W[K];if(it.location>=0){let V=X[K];if(V===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let $=V.normalized,at=V.itemSize,xt=e.get(V);if(xt===void 0)continue;let gt=xt.buffer,Pt=xt.type,It=xt.bytesPerElement,Et=n.isWebGL2===!0&&(Pt===s.INT||Pt===s.UNSIGNED_INT||V.gpuType===Zh);if(V.isInterleavedBufferAttribute){let Wt=V.data,F=Wt.stride,We=V.offset;if(Wt.isInstancedInterleavedBuffer){for(let yt=0;yt<it.locationSize;yt++)R(it.location+yt,Wt.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Wt.meshPerAttribute*Wt.count)}else for(let yt=0;yt<it.locationSize;yt++)b(it.location+yt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let yt=0;yt<it.locationSize;yt++)w(it.location+yt,at/it.locationSize,Pt,$,F*It,(We+at/it.locationSize*yt)*It,Et)}else{if(V.isInstancedBufferAttribute){for(let Wt=0;Wt<it.locationSize;Wt++)R(it.location+Wt,V.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Wt=0;Wt<it.locationSize;Wt++)b(it.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Wt=0;Wt<it.locationSize;Wt++)w(it.location+Wt,at/it.locationSize,Pt,$,at*It,at/it.locationSize*Wt*It,Et)}}else if(Z!==void 0){let $=Z[K];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(it.location,$);break;case 3:s.vertexAttrib3fv(it.location,$);break;case 4:s.vertexAttrib4fv(it.location,$);break;default:s.vertexAttrib1fv(it.location,$)}}}}S()}function y(){G();for(let L in a){let N=a[L];for(let H in N){let q=N[H];for(let X in q)g(q[X].object),delete q[X];delete N[H]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;let N=a[L.id];for(let H in N){let q=N[H];for(let X in q)g(q[X].object),delete q[X];delete N[H]}delete a[L.id]}function U(L){for(let N in a){let H=a[N];if(H[L.id]===void 0)continue;let q=H[L.id];for(let X in q)g(q[X].object),delete q[X];delete H[L.id]}}function G(){Y(),h=!0,c!==l&&(c=l,d(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:Y,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:b,disableUnusedAttributes:S}}function u0(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function f0(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,b=o||t.has("OES_texture_float"),R=x&&b,S=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:S}}function d0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Hn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,x=v*4,b=p.clippingState||null;l.value=b,b=h(g,f,x,d);for(let R=0;R!==x;++R)b[R]=e[R];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,b=d;x!==_;++x,b+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function p0(s){let t=new WeakMap;function e(o,a){return a===Xa?o.mapping=cs:a===qa&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xa||a===qa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new tl(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ps=class extends co{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ss=4,mh=[.125,.215,.35,.446,.526,.582],wi=20,Da=new ps,gh=new ft,Ua=null,Na=0,Fa=0,bi=(1+Math.sqrt(5))/2,ji=1/bi,_h=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,bi,ji),new C(0,bi,-ji),new C(ji,0,bi),new C(-ji,0,bi),new C(bi,ji,0),new C(-bi,ji,0)],uo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Fa),t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:oe,minFilter:oe,generateMipmaps:!1,type:Vs,format:Ae,colorSpace:Vn,depthBuffer:!1},i=xh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m0(r)),this._blurMaterial=g0(r,t,e)}return i}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,i){let a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(gh),h.toneMapping=hi,h.autoClear=!1;let d=new oo({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new Xt(new hn,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(gh),_=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;Fr(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===cs||t.mapping===hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Da)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=_h[(i-1)%_h.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Xt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*wi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):wi;m>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);let p=[],v=0;for(let w=0;w<wi;++w){let I=w/_,y=Math.exp(-I*I/2);p.push(y),w===0?v+=y:w<m&&(v+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let b=this._sizeLods[i],R=3*b*(i>x-ss?i-x+ss:0),S=4*(this._cubeSize-b);Fr(e,R,S,3*b,2*b),l.setRenderTarget(e),l.render(u,Da)}};function m0(s){let t=[],e=[],n=[],i=s,r=s-ss+1+mh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-ss?l=mh[o-s+ss-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),x=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let S=0;S<d;S++){let w=S%3*2/3-1,I=S>2?0:-1,y=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];v.set(y,_*g*S),x.set(f,m*g*S);let E=[S,S,S,S,S,S];b.set(E,p*g*S)}let R=new ae;R.setAttribute("position",new Vt(v,_)),R.setAttribute("uv",new Vt(x,m)),R.setAttribute("faceIndex",new Vt(b,p)),t.push(R),i>ss&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xh(s,t,e){let n=new Wn(s,t,e);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function g0(s,t,e){let n=new Float32Array(wi),i=new C(0,1,0);return new Ie({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function vh(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function yh(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Gl(){return`

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
	`}function _0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xa||l===qa,h=l===cs||l===hs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new uo(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new uo(s));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function x0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function v0(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let v=d.array;_=d.version;for(let x=0,b=v.length;x<b;x+=3){let R=v[x+0],S=v[x+1],w=v[x+2];f.push(R,S,S,w,w,R)}}else if(g!==void 0){let v=g.array;_=g.version;for(let x=0,b=v.length/3-1;x<b;x+=3){let R=x+0,S=x+1,w=x+2;f.push(R,S,S,w,w,R)}}else return;let m=new(iu(f)?lo:ao)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function y0(s,t,e,n){let i=n.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){s.drawElements(r,g,a,d*l),e.update(g,r,1)}function u(d,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,_),e.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let v=0;v<_;v++)p+=g[v];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function M0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function S0(s,t){return s[0]-t[0]}function b0(s,t){return Math.abs(t[1])-Math.abs(s[1])}function E0(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new Re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],I=0;v===!0&&(I=1),x===!0&&(I=2),b===!0&&(I=3);let y=h.attributes.position.count*I,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let U=new Float32Array(y*E*4*g),G=new io(U,y,E,g);G.type=li,G.needsUpdate=!0;let Y=I*4;for(let N=0;N<g;N++){let H=R[N],q=S[N],X=w[N],W=y*E*4*N;for(let Z=0;Z<H.count;Z++){let K=Z*Y;v===!0&&(o.fromBufferAttribute(H,Z),U[W+K+0]=o.x,U[W+K+1]=o.y,U[W+K+2]=o.z,U[W+K+3]=0),x===!0&&(o.fromBufferAttribute(q,Z),U[W+K+4]=o.x,U[W+K+5]=o.y,U[W+K+6]=o.z,U[W+K+7]=0),b===!0&&(o.fromBufferAttribute(X,Z),U[W+K+8]=o.x,U[W+K+9]=o.y,U[W+K+10]=o.z,U[W+K+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:G,size:new ot(y,E)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<d;x++){let b=g[x];b[0]=x,b[1]=f[x]}g.sort(b0);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(S0);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let b=a[x],R=b[0],S=b[1];R!==Number.MAX_SAFE_INTEGER&&S?(_&&h.getAttribute("morphTarget"+x)!==_[R]&&h.setAttribute("morphTarget"+x,_[R]),m&&h.getAttribute("morphNormal"+x)!==m[R]&&h.setAttribute("morphNormal"+x,m[R]),i[x]=S,p+=S):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function w0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var fo=class extends on{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Ri,h!==Ri&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ri&&(n=ai),n===void 0&&h===us&&(n=Ai),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ve,this.minFilter=l!==void 0?l:ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},au=new on,lu=new fo(1,1);lu.compareFunction=nu;var cu=new io,hu=new ja,uu=new ho,Mh=[],Sh=[],bh=new Float32Array(16),Eh=new Float32Array(9),wh=new Float32Array(4);function xs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Mh[i];if(r===void 0&&(r=new Float32Array(i),Mh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Do(s,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function T0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function A0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function R0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function C0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function P0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;wh.set(n),s.uniformMatrix2fv(this.addr,!1,wh),Me(e,n)}}function L0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Eh.set(n),s.uniformMatrix3fv(this.addr,!1,Eh),Me(e,n)}}function I0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;bh.set(n),s.uniformMatrix4fv(this.addr,!1,bh),Me(e,n)}}function D0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function U0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function N0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function F0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function O0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function B0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function z0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function H0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function k0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?lu:au;e.setTexture2D(t||r,i)}function G0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hu,i)}function V0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||uu,i)}function W0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||cu,i)}function X0(s){switch(s){case 5126:return T0;case 35664:return A0;case 35665:return R0;case 35666:return C0;case 35674:return P0;case 35675:return L0;case 35676:return I0;case 5124:case 35670:return D0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return F0;case 5125:return O0;case 36294:return B0;case 36295:return z0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return W0}}function q0(s,t){s.uniform1fv(this.addr,t)}function Y0(s,t){let e=xs(t,this.size,2);s.uniform2fv(this.addr,e)}function Z0(s,t){let e=xs(t,this.size,3);s.uniform3fv(this.addr,e)}function $0(s,t){let e=xs(t,this.size,4);s.uniform4fv(this.addr,e)}function J0(s,t){let e=xs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function K0(s,t){let e=xs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function j0(s,t){let e=xs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Q0(s,t){s.uniform1iv(this.addr,t)}function tg(s,t){s.uniform2iv(this.addr,t)}function eg(s,t){s.uniform3iv(this.addr,t)}function ng(s,t){s.uniform4iv(this.addr,t)}function ig(s,t){s.uniform1uiv(this.addr,t)}function sg(s,t){s.uniform2uiv(this.addr,t)}function rg(s,t){s.uniform3uiv(this.addr,t)}function og(s,t){s.uniform4uiv(this.addr,t)}function ag(s,t,e){let n=this.cache,i=t.length,r=Do(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||au,r[o])}function lg(s,t,e){let n=this.cache,i=t.length,r=Do(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||hu,r[o])}function cg(s,t,e){let n=this.cache,i=t.length,r=Do(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||uu,r[o])}function hg(s,t,e){let n=this.cache,i=t.length,r=Do(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||cu,r[o])}function ug(s){switch(s){case 5126:return q0;case 35664:return Y0;case 35665:return Z0;case 35666:return $0;case 35674:return J0;case 35675:return K0;case 35676:return j0;case 5124:case 35670:return Q0;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}var el=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=X0(e.type)}},nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ug(e.type)}},il=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Oa=/(\w+)(\])?(\[|\.)?/g;function Th(s,t){s.seq.push(t),s.map[t.id]=t}function fg(s,t,e){let n=s.name,i=n.length;for(Oa.lastIndex=0;;){let r=Oa.exec(n),o=Oa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Th(e,c===void 0?new el(a,s,t):new nl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new il(a),Th(e,u)),e=u}}}var ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);fg(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Ah(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var dg=37297,pg=0;function mg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function gg(s){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s),n;switch(t===e?n="":t===Kr&&e===Jr?n="LinearDisplayP3ToLinearSRGB":t===Jr&&e===Kr&&(n="LinearSRGBToLinearDisplayP3"),s){case Vn:case Lo:return[n,"LinearTransferOETF"];case ue:case Hl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Rh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+mg(s.getShaderSource(t),o)}else return i}function _g(s,t){let e=gg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function xg(s,t){let e;switch(t){case Ef:e="Linear";break;case wf:e="Reinhard";break;case Tf:e="OptimizedCineon";break;case Ol:e="ACESFilmic";break;case Rf:e="AgX";break;case Af:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function vg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function yg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rs).join(`
`)}function Mg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function rs(s){return s!==""}function Ch(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ph(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(s){return s.replace(bg,wg)}var Eg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function wg(s,t){let e=Ut[t];if(e===void 0){let n=Eg.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}var Tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(s){return s.replace(Tg,Ag)}function Ag(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ih(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Cg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case Po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Lg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fl:t="ENVMAP_BLENDING_MULTIPLY";break;case Sf:t="ENVMAP_BLENDING_MIX";break;case bf:t="ENVMAP_BLENDING_ADD";break}return t}function Ig(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Dg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Rg(e),c=Cg(e),h=Pg(e),u=Lg(e),f=Ig(e),d=e.isWebGL2?"":vg(e),g=yg(e),_=Mg(r),m=i.createProgram(),p,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rs).join(`
`),p.length>0&&(p+=`
`),v=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rs).join(`
`),v.length>0&&(v+=`
`)):(p=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),v=[d,Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Ut.tonemapping_pars_fragment:"",e.toneMapping!==hi?xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,_g("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),o=sl(o),o=Ch(o,e),o=Ph(o,e),a=sl(a),a=Ch(a,e),a=Ph(a,e),o=Lh(o),a=Lh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let b=x+p+o,R=x+v+a,S=Ah(i,i.VERTEX_SHADER,b),w=Ah(i,i.FRAGMENT_SHADER,R);i.attachShader(m,S),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(G){if(s.debug.checkShaderErrors){let Y=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(S).trim(),N=i.getShaderInfoLog(w).trim(),H=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,S,w);else{let X=Rh(i,S,"vertex"),W=Rh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+X+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||N==="")&&(q=!1);q&&(G.diagnostics={runnable:H,programLog:Y,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:v}})}i.deleteShader(S),i.deleteShader(w),y=new ls(i,m),E=Sg(i,m)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(m,dg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=w,this}var Ug=0,rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ol(t),e.set(t,n)),n}},ol=class{constructor(t){this.id=Ug++,this.code=t,this.usedTimes=0}};function Ng(s,t,e,n,i,r,o){let a=new ro,l=new rl,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,E,U,G,Y){let L=G.fog,N=Y.geometry,H=y.isMeshStandardMaterial?G.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),X=q&&q.mapping===Po?q.image.height:null,W=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,K=Z!==void 0?Z.length:0,it=0;N.morphAttributes.position!==void 0&&(it=1),N.morphAttributes.normal!==void 0&&(it=2),N.morphAttributes.color!==void 0&&(it=3);let V,$,at,xt;if(W){let Xe=Sn[W];V=Xe.vertexShader,$=Xe.fragmentShader}else V=y.vertexShader,$=y.fragmentShader,l.update(y),at=l.getVertexShaderID(y),xt=l.getFragmentShaderID(y);let gt=s.getRenderTarget(),Pt=Y.isInstancedMesh===!0,It=Y.isBatchedMesh===!0,Et=!!y.map,Wt=!!y.matcap,F=!!q,We=!!y.aoMap,yt=!!y.lightMap,Rt=!!y.bumpMap,dt=!!y.normalMap,ce=!!y.displacementMap,Nt=!!y.emissiveMap,A=!!y.metalnessMap,M=!!y.roughnessMap,B=y.anisotropy>0,Q=y.clearcoat>0,j=y.iridescence>0,tt=y.sheen>0,pt=y.transmission>0,lt=B&&!!y.anisotropyMap,ht=Q&&!!y.clearcoatMap,bt=Q&&!!y.clearcoatNormalMap,Ft=Q&&!!y.clearcoatRoughnessMap,J=j&&!!y.iridescenceMap,Kt=j&&!!y.iridescenceThicknessMap,Gt=tt&&!!y.sheenColorMap,At=tt&&!!y.sheenRoughnessMap,vt=!!y.specularMap,ut=!!y.specularColorMap,Dt=!!y.specularIntensityMap,Zt=pt&&!!y.transmissionMap,fe=pt&&!!y.thicknessMap,Bt=!!y.gradientMap,et=!!y.alphaMap,P=y.alphaTest>0,st=!!y.alphaHash,rt=!!y.extensions,wt=!!N.attributes.uv1,Mt=!!N.attributes.uv2,te=!!N.attributes.uv3,ee=hi;return y.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ee=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:$,defines:y.defines,customVertexShaderID:at,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:It,instancing:Pt,instancingColor:Pt&&Y.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Vn,map:Et,matcap:Wt,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:X,aoMap:We,lightMap:yt,bumpMap:Rt,normalMap:dt,displacementMap:f&&ce,emissiveMap:Nt,normalMapObjectSpace:dt&&y.normalMapType===Hf,normalMapTangentSpace:dt&&y.normalMapType===zl,metalnessMap:A,roughnessMap:M,anisotropy:B,anisotropyMap:lt,clearcoat:Q,clearcoatMap:ht,clearcoatNormalMap:bt,clearcoatRoughnessMap:Ft,iridescence:j,iridescenceMap:J,iridescenceThicknessMap:Kt,sheen:tt,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:vt,specularColorMap:ut,specularIntensityMap:Dt,transmission:pt,transmissionMap:Zt,thicknessMap:fe,gradientMap:Bt,opaque:y.transparent===!1&&y.blending===os,alphaMap:et,alphaTest:P,alphaHash:st,combine:y.combine,mapUv:Et&&_(y.map.channel),aoMapUv:We&&_(y.aoMap.channel),lightMapUv:yt&&_(y.lightMap.channel),bumpMapUv:Rt&&_(y.bumpMap.channel),normalMapUv:dt&&_(y.normalMap.channel),displacementMapUv:ce&&_(y.displacementMap.channel),emissiveMapUv:Nt&&_(y.emissiveMap.channel),metalnessMapUv:A&&_(y.metalnessMap.channel),roughnessMapUv:M&&_(y.roughnessMap.channel),anisotropyMapUv:lt&&_(y.anisotropyMap.channel),clearcoatMapUv:ht&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:bt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(y.sheenRoughnessMap.channel),specularMapUv:vt&&_(y.specularMap.channel),specularColorMapUv:ut&&_(y.specularColorMap.channel),specularIntensityMapUv:Dt&&_(y.specularIntensityMap.channel),transmissionMapUv:Zt&&_(y.transmissionMap.channel),thicknessMapUv:fe&&_(y.thicknessMap.channel),alphaMapUv:et&&_(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(dt||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:wt,vertexUv2s:Mt,vertexUv3s:te,pointsUvs:Y.isPoints===!0&&!!N.attributes.uv&&(Et||et),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:it,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:ee,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Et&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===re,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pe,flipSided:y.side===ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:rt&&y.extensions.derivatives===!0,extensionFragDepth:rt&&y.extensions.fragDepth===!0,extensionDrawBuffers:rt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let U in y.defines)E.push(U),E.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(v(E,y),x(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function b(y){let E=g[y.type],U;if(E){let G=Sn[E];U=Ed.clone(G.uniforms)}else U=y.uniforms;return U}function R(y,E){let U;for(let G=0,Y=c.length;G<Y;G++){let L=c[G];if(L.cacheKey===E){U=L,++U.usedTimes;break}}return U===void 0&&(U=new Dg(s,E,y,r),c.push(U)),U}function S(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:I}}function Fg(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Og(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Dh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Uh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Og),n.length>1&&n.sort(f||Dh),i.length>1&&i.sort(f||Dh)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Bg(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Uh,s.set(n,[o])):i>=r.length?(o=new Uh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function zg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new ft};break;case"SpotLight":e={position:new C,direction:new C,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function Hg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var kg=0;function Gg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Vg(s,t){let e=new zg,n=Hg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);let r=new C,o=new ie,a=new ie;function l(h,u){let f=0,d=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,m=0,p=0,v=0,x=0,b=0,R=0,S=0,w=0,I=0,y=0;h.sort(Gg);let E=u===!0?Math.PI:1;for(let G=0,Y=h.length;G<Y;G++){let L=h[G],N=L.color,H=L.intensity,q=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=N.r*H*E,d+=N.g*H*E,g+=N.b*H*E;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],H);y++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let Z=L.shadow,K=n.get(L);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.directionalShadow[_]=K,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=L.shadow.matrix,b++}i.directional[_]=W,_++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(N).multiplyScalar(H*E),W.distance=q,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[p]=W;let Z=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,Z.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[p]=Z.matrix,L.castShadow){let K=n.get(L);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=X,S++}p++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(N).multiplyScalar(H),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=W,v++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*E),W.distance=L.distance,W.decay=L.decay,L.castShadow){let Z=L.shadow,K=n.get(L);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=L.shadow.matrix,R++}i.point[m]=W,m++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(H*E),W.groundColor.copy(L.groundColor).multiplyScalar(H*E),i.hemi[x]=W,x++}}v>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let U=i.hash;(U.directionalLength!==_||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==v||U.hemiLength!==x||U.numDirectionalShadows!==b||U.numPointShadows!==R||U.numSpotShadows!==S||U.numSpotMaps!==w||U.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=S+w-I,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=y,U.directionalLength=_,U.pointLength=m,U.spotLength=p,U.rectAreaLength=v,U.hemiLength=x,U.numDirectionalShadows=b,U.numPointShadows=R,U.numSpotShadows=S,U.numSpotMaps=w,U.numLightProbes=y,i.version=kg++)}function c(h,u){let f=0,d=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){let b=h[v];if(b.isDirectionalLight){let R=i.directional[f];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),f++}else if(b.isSpotLight){let R=i.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let R=i.rectArea[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let R=i.point[d];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let R=i.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Nh(s,t){let e=new Vg(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Wg(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Nh(s,t),e.set(r,[l])):o>=a.length?(l=new Nh(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var al=class extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ll=class extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qg=`uniform sampler2D shadow_pass;
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
}`;function Yg(s,t,e){let n=new Xs,i=new ot,r=new ot,o=new Re,a=new al({depthPacking:zf}),l=new ll,c={},h=e.maxTextureSize,u={[fi]:ze,[ze]:fi,[Pe]:Pe},f=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Xg,fragmentShader:qg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ae;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let p=this.type;this.render=function(S,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let y=s.getRenderTarget(),E=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),G=s.state;G.setBlending(ci),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let Y=p!==zn&&this.type===zn,L=p===zn&&this.type!==zn;for(let N=0,H=S.length;N<H;N++){let q=S[N],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let W=X.getFrameExtents();if(i.multiply(W),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||Y===!0||L===!0){let K=this.type!==zn?{minFilter:ve,magFilter:ve}:{};X.map!==null&&X.map.dispose(),X.map=new Wn(i.x,i.y,K),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let Z=X.getViewportCount();for(let K=0;K<Z;K++){let it=X.getViewport(K);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),G.viewport(o),X.updateMatrices(q,K),n=X.getFrustum(),b(w,I,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===zn&&v(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,E,U)};function v(S,w){let I=t.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Wn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(w,null,I,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(w,null,I,d,_,null)}function x(S,w,I,y){let E=null,U=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)E=U;else if(E=I.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let G=E.uuid,Y=w.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let N=L[Y];N===void 0&&(N=E.clone(),L[Y]=N,w.addEventListener("dispose",R)),E=N}if(E.visible=w.visible,E.wireframe=w.wireframe,y===zn?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=s.properties.get(E);G.light=I}return E}function b(S,w,I,y,E){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===zn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);let Y=t.update(S),L=S.material;if(Array.isArray(L)){let N=Y.groups;for(let H=0,q=N.length;H<q;H++){let X=N[H],W=L[X.materialIndex];if(W&&W.visible){let Z=x(S,W,y,E);S.onBeforeShadow(s,S,w,I,Y,Z,X),s.renderBufferDirect(I,null,Y,Z,S,X),S.onAfterShadow(s,S,w,I,Y,Z,X)}}}else if(L.visible){let N=x(S,L,y,E);S.onBeforeShadow(s,S,w,I,Y,N,null),s.renderBufferDirect(I,null,Y,N,S,null),S.onAfterShadow(s,S,w,I,Y,N,null)}}let G=S.children;for(let Y=0,L=G.length;Y<L;Y++)b(G[Y],w,I,y,E)}function R(S){S.target.removeEventListener("dispose",R);for(let I in c){let y=c[I],E=S.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function Zg(s,t,e){let n=e.isWebGL2;function i(){let P=!1,st=new Re,rt=null,wt=new Re(0,0,0,0);return{setMask:function(Mt){rt!==Mt&&!P&&(s.colorMask(Mt,Mt,Mt,Mt),rt=Mt)},setLocked:function(Mt){P=Mt},setClear:function(Mt,te,ee,be,Xe){Xe===!0&&(Mt*=be,te*=be,ee*=be),st.set(Mt,te,ee,be),wt.equals(st)===!1&&(s.clearColor(Mt,te,ee,be),wt.copy(st))},reset:function(){P=!1,rt=null,wt.set(-1,0,0,0)}}}function r(){let P=!1,st=null,rt=null,wt=null;return{setTest:function(Mt){Mt?It(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(Mt){st!==Mt&&!P&&(s.depthMask(Mt),st=Mt)},setFunc:function(Mt){if(rt!==Mt){switch(Mt){case mf:s.depthFunc(s.NEVER);break;case gf:s.depthFunc(s.ALWAYS);break;case _f:s.depthFunc(s.LESS);break;case qr:s.depthFunc(s.LEQUAL);break;case xf:s.depthFunc(s.EQUAL);break;case vf:s.depthFunc(s.GEQUAL);break;case yf:s.depthFunc(s.GREATER);break;case Mf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}rt=Mt}},setLocked:function(Mt){P=Mt},setClear:function(Mt){wt!==Mt&&(s.clearDepth(Mt),wt=Mt)},reset:function(){P=!1,st=null,rt=null,wt=null}}}function o(){let P=!1,st=null,rt=null,wt=null,Mt=null,te=null,ee=null,be=null,Xe=null;return{setTest:function(ne){P||(ne?It(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(ne){st!==ne&&!P&&(s.stencilMask(ne),st=ne)},setFunc:function(ne,qe,Mn){(rt!==ne||wt!==qe||Mt!==Mn)&&(s.stencilFunc(ne,qe,Mn),rt=ne,wt=qe,Mt=Mn)},setOp:function(ne,qe,Mn){(te!==ne||ee!==qe||be!==Mn)&&(s.stencilOp(ne,qe,Mn),te=ne,ee=qe,be=Mn)},setLocked:function(ne){P=ne},setClear:function(ne){Xe!==ne&&(s.clearStencil(ne),Xe=ne)},reset:function(){P=!1,st=null,rt=null,wt=null,Mt=null,te=null,ee=null,be=null,Xe=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,b=null,R=null,S=null,w=null,I=null,y=new ft(0,0,0),E=0,U=!1,G=null,Y=null,L=null,N=null,H=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=W>=2);let K=null,it={},V=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),at=new Re().fromArray(V),xt=new Re().fromArray($);function gt(P,st,rt,wt){let Mt=new Uint8Array(4),te=s.createTexture();s.bindTexture(P,te),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<rt;ee++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(st,0,s.RGBA,1,1,wt,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(st+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return te}let Pt={};Pt[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),Pt[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pt[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pt[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),It(s.DEPTH_TEST),l.setFunc(qr),Nt(!1),A(gc),It(s.CULL_FACE),dt(ci);function It(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function Et(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function Wt(P,st){return d[P]!==st?(s.bindFramebuffer(P,st),d[P]=st,n&&(P===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=st),P===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=st)),!0):!1}function F(P,st){let rt=_,wt=!1;if(P)if(rt=g.get(st),rt===void 0&&(rt=[],g.set(st,rt)),P.isWebGLMultipleRenderTargets){let Mt=P.texture;if(rt.length!==Mt.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let te=0,ee=Mt.length;te<ee;te++)rt[te]=s.COLOR_ATTACHMENT0+te;rt.length=Mt.length,wt=!0}}else rt[0]!==s.COLOR_ATTACHMENT0&&(rt[0]=s.COLOR_ATTACHMENT0,wt=!0);else rt[0]!==s.BACK&&(rt[0]=s.BACK,wt=!0);wt&&(e.isWebGL2?s.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function We(P){return m!==P?(s.useProgram(P),m=P,!0):!1}let yt={[Ei]:s.FUNC_ADD,[Qu]:s.FUNC_SUBTRACT,[tf]:s.FUNC_REVERSE_SUBTRACT};if(n)yt[vc]=s.MIN,yt[yc]=s.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(yt[vc]=P.MIN_EXT,yt[yc]=P.MAX_EXT)}let Rt={[ef]:s.ZERO,[nf]:s.ONE,[sf]:s.SRC_COLOR,[Va]:s.SRC_ALPHA,[hf]:s.SRC_ALPHA_SATURATE,[lf]:s.DST_COLOR,[of]:s.DST_ALPHA,[rf]:s.ONE_MINUS_SRC_COLOR,[Wa]:s.ONE_MINUS_SRC_ALPHA,[cf]:s.ONE_MINUS_DST_COLOR,[af]:s.ONE_MINUS_DST_ALPHA,[uf]:s.CONSTANT_COLOR,[ff]:s.ONE_MINUS_CONSTANT_COLOR,[df]:s.CONSTANT_ALPHA,[pf]:s.ONE_MINUS_CONSTANT_ALPHA};function dt(P,st,rt,wt,Mt,te,ee,be,Xe,ne){if(P===ci){p===!0&&(Et(s.BLEND),p=!1);return}if(p===!1&&(It(s.BLEND),p=!0),P!==ju){if(P!==v||ne!==U){if((x!==Ei||S!==Ei)&&(s.blendEquation(s.FUNC_ADD),x=Ei,S=Ei),ne)switch(P){case os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xr:s.blendFunc(s.ONE,s.ONE);break;case _c:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _c:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,R=null,w=null,I=null,y.set(0,0,0),E=0,v=P,U=ne}return}Mt=Mt||st,te=te||rt,ee=ee||wt,(st!==x||Mt!==S)&&(s.blendEquationSeparate(yt[st],yt[Mt]),x=st,S=Mt),(rt!==b||wt!==R||te!==w||ee!==I)&&(s.blendFuncSeparate(Rt[rt],Rt[wt],Rt[te],Rt[ee]),b=rt,R=wt,w=te,I=ee),(be.equals(y)===!1||Xe!==E)&&(s.blendColor(be.r,be.g,be.b,Xe),y.copy(be),E=Xe),v=P,U=!1}function ce(P,st){P.side===Pe?Et(s.CULL_FACE):It(s.CULL_FACE);let rt=P.side===ze;st&&(rt=!rt),Nt(rt),P.blending===os&&P.transparent===!1?dt(ci):dt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let wt=P.stencilWrite;c.setTest(wt),wt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?It(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(P){G!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),G=P)}function A(P){P!==Ju?(It(s.CULL_FACE),P!==Y&&(P===gc?s.cullFace(s.BACK):P===Ku?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),Y=P}function M(P){P!==L&&(X&&s.lineWidth(P),L=P)}function B(P,st,rt){P?(It(s.POLYGON_OFFSET_FILL),(N!==st||H!==rt)&&(s.polygonOffset(st,rt),N=st,H=rt)):Et(s.POLYGON_OFFSET_FILL)}function Q(P){P?It(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function j(P){P===void 0&&(P=s.TEXTURE0+q-1),K!==P&&(s.activeTexture(P),K=P)}function tt(P,st,rt){rt===void 0&&(K===null?rt=s.TEXTURE0+q-1:rt=K);let wt=it[rt];wt===void 0&&(wt={type:void 0,texture:void 0},it[rt]=wt),(wt.type!==P||wt.texture!==st)&&(K!==rt&&(s.activeTexture(rt),K=rt),s.bindTexture(P,st||Pt[P]),wt.type=P,wt.texture=st)}function pt(){let P=it[K];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function lt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ft(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Kt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Dt(P){at.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),at.copy(P))}function Zt(P){xt.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),xt.copy(P))}function fe(P,st){let rt=u.get(st);rt===void 0&&(rt=new WeakMap,u.set(st,rt));let wt=rt.get(P);wt===void 0&&(wt=s.getUniformBlockIndex(st,P.name),rt.set(P,wt))}function Bt(P,st){let wt=u.get(st).get(P);h.get(st)!==wt&&(s.uniformBlockBinding(st,wt,P.__bindingPointIndex),h.set(st,wt))}function et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},K=null,it={},d={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,b=null,R=null,S=null,w=null,I=null,y=new ft(0,0,0),E=0,U=!1,G=null,Y=null,L=null,N=null,H=null,at.set(0,0,s.canvas.width,s.canvas.height),xt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:It,disable:Et,bindFramebuffer:Wt,drawBuffers:F,useProgram:We,setBlending:dt,setMaterial:ce,setFlipSided:Nt,setCullFace:A,setLineWidth:M,setPolygonOffset:B,setScissorTest:Q,activeTexture:j,bindTexture:tt,unbindTexture:pt,compressedTexImage2D:lt,compressedTexImage3D:ht,texImage2D:vt,texImage3D:ut,updateUBOMapping:fe,uniformBlockBinding:Bt,texStorage2D:Gt,texStorage3D:At,texSubImage2D:bt,texSubImage3D:Ft,compressedTexSubImage2D:J,compressedTexSubImage3D:Kt,scissor:Dt,viewport:Zt,reset:et}}function $g(s,t,e,n,i,r,o){let a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function g(A,M){return d?new OffscreenCanvas(A,M):to("canvas")}function _(A,M,B,Q){let j=1;if((A.width>Q||A.height>Q)&&(j=Q/Math.max(A.width,A.height)),j<1||M===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){let tt=M?Qr:Math.floor,pt=tt(j*A.width),lt=tt(j*A.height);u===void 0&&(u=g(pt,lt));let ht=B?g(pt,lt):u;return ht.width=pt,ht.height=lt,ht.getContext("2d").drawImage(A,0,0,pt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+pt+"x"+lt+")."),ht}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Ja(A.width)&&Ja(A.height)}function p(A){return a?!1:A.wrapS!==je||A.wrapT!==je||A.minFilter!==ve&&A.minFilter!==oe}function v(A,M){return A.generateMipmaps&&M&&A.minFilter!==ve&&A.minFilter!==oe}function x(A){s.generateMipmap(A)}function b(A,M,B,Q,j=!1){if(a===!1)return M;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let tt=M;if(M===s.RED&&(B===s.FLOAT&&(tt=s.R32F),B===s.HALF_FLOAT&&(tt=s.R16F),B===s.UNSIGNED_BYTE&&(tt=s.R8)),M===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(tt=s.R8UI),B===s.UNSIGNED_SHORT&&(tt=s.R16UI),B===s.UNSIGNED_INT&&(tt=s.R32UI),B===s.BYTE&&(tt=s.R8I),B===s.SHORT&&(tt=s.R16I),B===s.INT&&(tt=s.R32I)),M===s.RG&&(B===s.FLOAT&&(tt=s.RG32F),B===s.HALF_FLOAT&&(tt=s.RG16F),B===s.UNSIGNED_BYTE&&(tt=s.RG8)),M===s.RGBA){let pt=j?$r:Qt.getTransfer(Q);B===s.FLOAT&&(tt=s.RGBA32F),B===s.HALF_FLOAT&&(tt=s.RGBA16F),B===s.UNSIGNED_BYTE&&(tt=pt===re?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function R(A,M,B){return v(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==ve&&A.minFilter!==oe?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function S(A){return A===ve||A===Mc||A===ca?s.NEAREST:s.LINEAR}function w(A){let M=A.target;M.removeEventListener("dispose",w),y(M),M.isVideoTexture&&h.delete(M)}function I(A){let M=A.target;M.removeEventListener("dispose",I),U(M)}function y(A){let M=n.get(A);if(M.__webglInit===void 0)return;let B=A.source,Q=f.get(B);if(Q){let j=Q[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(A),Object.keys(Q).length===0&&f.delete(B)}n.remove(A)}function E(A){let M=n.get(A);s.deleteTexture(M.__webglTexture);let B=A.source,Q=f.get(B);delete Q[M.__cacheKey],o.memory.textures--}function U(A){let M=A.texture,B=n.get(A),Q=n.get(M);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(B.__webglFramebuffer[j]))for(let tt=0;tt<B.__webglFramebuffer[j].length;tt++)s.deleteFramebuffer(B.__webglFramebuffer[j][tt]);else s.deleteFramebuffer(B.__webglFramebuffer[j]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[j])}else{if(Array.isArray(B.__webglFramebuffer))for(let j=0;j<B.__webglFramebuffer.length;j++)s.deleteFramebuffer(B.__webglFramebuffer[j]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let j=0;j<B.__webglColorRenderbuffer.length;j++)B.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[j]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let j=0,tt=M.length;j<tt;j++){let pt=n.get(M[j]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(M[j])}n.remove(M),n.remove(A)}let G=0;function Y(){G=0}function L(){let A=G;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),G+=1,A}function N(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function H(A,M){let B=n.get(A);if(A.isVideoTexture&&ce(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(B,A,M);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+M)}function q(A,M){let B=n.get(A);if(A.version>0&&B.__version!==A.version){at(B,A,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+M)}function X(A,M){let B=n.get(A);if(A.version>0&&B.__version!==A.version){at(B,A,M);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+M)}function W(A,M){let B=n.get(A);if(A.version>0&&B.__version!==A.version){xt(B,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+M)}let Z={[di]:s.REPEAT,[je]:s.CLAMP_TO_EDGE,[Ya]:s.MIRRORED_REPEAT},K={[ve]:s.NEAREST,[Mc]:s.NEAREST_MIPMAP_NEAREST,[ca]:s.NEAREST_MIPMAP_LINEAR,[oe]:s.LINEAR,[Cf]:s.LINEAR_MIPMAP_NEAREST,[En]:s.LINEAR_MIPMAP_LINEAR},it={[kf]:s.NEVER,[Yf]:s.ALWAYS,[Gf]:s.LESS,[nu]:s.LEQUAL,[Vf]:s.EQUAL,[qf]:s.GEQUAL,[Wf]:s.GREATER,[Xf]:s.NOTEQUAL};function V(A,M,B){if(B?(s.texParameteri(A,s.TEXTURE_WRAP_S,Z[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Z[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Z[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,K[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,K[M.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==je||M.wrapT!==je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,S(M.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,S(M.minFilter)),M.minFilter!==ve&&M.minFilter!==oe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,it[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Q=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===ve||M.minFilter!==ca&&M.minFilter!==En||M.type===li&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===Vs&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function $(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",w));let Q=M.source,j=f.get(Q);j===void 0&&(j={},f.set(Q,j));let tt=N(M);if(tt!==A.__cacheKey){j[tt]===void 0&&(j[tt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[tt].usedTimes++;let pt=j[A.__cacheKey];pt!==void 0&&(j[A.__cacheKey].usedTimes--,pt.usedTimes===0&&E(M)),A.__cacheKey=tt,A.__webglTexture=j[tt].texture}return B}function at(A,M,B){let Q=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=s.TEXTURE_3D);let j=$(A,M),tt=M.source;e.bindTexture(Q,A.__webglTexture,s.TEXTURE0+B);let pt=n.get(tt);if(tt.version!==pt.__version||j===!0){e.activeTexture(s.TEXTURE0+B);let lt=Qt.getPrimaries(Qt.workingColorSpace),ht=M.colorSpace===ge?null:Qt.getPrimaries(M.colorSpace),bt=M.colorSpace===ge||lt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Ft=p(M)&&m(M.image)===!1,J=_(M.image,Ft,!1,i.maxTextureSize);J=Nt(M,J);let Kt=m(J)||a,Gt=r.convert(M.format,M.colorSpace),At=r.convert(M.type),vt=b(M.internalFormat,Gt,At,M.colorSpace,M.isVideoTexture);V(Q,M,Kt);let ut,Dt=M.mipmaps,Zt=a&&M.isVideoTexture!==!0&&vt!==tu,fe=pt.__version===void 0||j===!0,Bt=R(M,J,Kt);if(M.isDepthTexture)vt=s.DEPTH_COMPONENT,a?M.type===li?vt=s.DEPTH_COMPONENT32F:M.type===ai?vt=s.DEPTH_COMPONENT24:M.type===Ai?vt=s.DEPTH24_STENCIL8:vt=s.DEPTH_COMPONENT16:M.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ri&&vt===s.DEPTH_COMPONENT&&M.type!==Bl&&M.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ai,At=r.convert(M.type)),M.format===us&&vt===s.DEPTH_COMPONENT&&(vt=s.DEPTH_STENCIL,M.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ai,At=r.convert(M.type))),fe&&(Zt?e.texStorage2D(s.TEXTURE_2D,1,vt,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,vt,J.width,J.height,0,Gt,At,null));else if(M.isDataTexture)if(Dt.length>0&&Kt){Zt&&fe&&e.texStorage2D(s.TEXTURE_2D,Bt,vt,Dt[0].width,Dt[0].height);for(let et=0,P=Dt.length;et<P;et++)ut=Dt[et],Zt?e.texSubImage2D(s.TEXTURE_2D,et,0,0,ut.width,ut.height,Gt,At,ut.data):e.texImage2D(s.TEXTURE_2D,et,vt,ut.width,ut.height,0,Gt,At,ut.data);M.generateMipmaps=!1}else Zt?(fe&&e.texStorage2D(s.TEXTURE_2D,Bt,vt,J.width,J.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,Gt,At,J.data)):e.texImage2D(s.TEXTURE_2D,0,vt,J.width,J.height,0,Gt,At,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Zt&&fe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,vt,Dt[0].width,Dt[0].height,J.depth);for(let et=0,P=Dt.length;et<P;et++)ut=Dt[et],M.format!==Ae?Gt!==null?Zt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,J.depth,Gt,ut.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,vt,ut.width,ut.height,J.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,J.depth,Gt,At,ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,vt,ut.width,ut.height,J.depth,0,Gt,At,ut.data)}else{Zt&&fe&&e.texStorage2D(s.TEXTURE_2D,Bt,vt,Dt[0].width,Dt[0].height);for(let et=0,P=Dt.length;et<P;et++)ut=Dt[et],M.format!==Ae?Gt!==null?Zt?e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,ut.width,ut.height,Gt,ut.data):e.compressedTexImage2D(s.TEXTURE_2D,et,vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(s.TEXTURE_2D,et,0,0,ut.width,ut.height,Gt,At,ut.data):e.texImage2D(s.TEXTURE_2D,et,vt,ut.width,ut.height,0,Gt,At,ut.data)}else if(M.isDataArrayTexture)Zt?(fe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,vt,J.width,J.height,J.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Gt,At,J.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,J.width,J.height,J.depth,0,Gt,At,J.data);else if(M.isData3DTexture)Zt?(fe&&e.texStorage3D(s.TEXTURE_3D,Bt,vt,J.width,J.height,J.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Gt,At,J.data)):e.texImage3D(s.TEXTURE_3D,0,vt,J.width,J.height,J.depth,0,Gt,At,J.data);else if(M.isFramebufferTexture){if(fe)if(Zt)e.texStorage2D(s.TEXTURE_2D,Bt,vt,J.width,J.height);else{let et=J.width,P=J.height;for(let st=0;st<Bt;st++)e.texImage2D(s.TEXTURE_2D,st,vt,et,P,0,Gt,At,null),et>>=1,P>>=1}}else if(Dt.length>0&&Kt){Zt&&fe&&e.texStorage2D(s.TEXTURE_2D,Bt,vt,Dt[0].width,Dt[0].height);for(let et=0,P=Dt.length;et<P;et++)ut=Dt[et],Zt?e.texSubImage2D(s.TEXTURE_2D,et,0,0,Gt,At,ut):e.texImage2D(s.TEXTURE_2D,et,vt,Gt,At,ut);M.generateMipmaps=!1}else Zt?(fe&&e.texStorage2D(s.TEXTURE_2D,Bt,vt,J.width,J.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Gt,At,J)):e.texImage2D(s.TEXTURE_2D,0,vt,Gt,At,J);v(M,Kt)&&x(Q),pt.__version=tt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function xt(A,M,B){if(M.image.length!==6)return;let Q=$(A,M),j=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let tt=n.get(j);if(j.version!==tt.__version||Q===!0){e.activeTexture(s.TEXTURE0+B);let pt=Qt.getPrimaries(Qt.workingColorSpace),lt=M.colorSpace===ge?null:Qt.getPrimaries(M.colorSpace),ht=M.colorSpace===ge||pt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let bt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ft=M.image[0]&&M.image[0].isDataTexture,J=[];for(let et=0;et<6;et++)!bt&&!Ft?J[et]=_(M.image[et],!1,!0,i.maxCubemapSize):J[et]=Ft?M.image[et].image:M.image[et],J[et]=Nt(M,J[et]);let Kt=J[0],Gt=m(Kt)||a,At=r.convert(M.format,M.colorSpace),vt=r.convert(M.type),ut=b(M.internalFormat,At,vt,M.colorSpace),Dt=a&&M.isVideoTexture!==!0,Zt=tt.__version===void 0||Q===!0,fe=R(M,Kt,Gt);V(s.TEXTURE_CUBE_MAP,M,Gt);let Bt;if(bt){Dt&&Zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,fe,ut,Kt.width,Kt.height);for(let et=0;et<6;et++){Bt=J[et].mipmaps;for(let P=0;P<Bt.length;P++){let st=Bt[P];M.format!==Ae?At!==null?Dt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P,0,0,st.width,st.height,At,st.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P,ut,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P,0,0,st.width,st.height,At,vt,st.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P,ut,st.width,st.height,0,At,vt,st.data)}}}else{Bt=M.mipmaps,Dt&&Zt&&(Bt.length>0&&fe++,e.texStorage2D(s.TEXTURE_CUBE_MAP,fe,ut,J[0].width,J[0].height));for(let et=0;et<6;et++)if(Ft){Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,J[et].width,J[et].height,At,vt,J[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ut,J[et].width,J[et].height,0,At,vt,J[et].data);for(let P=0;P<Bt.length;P++){let rt=Bt[P].image[et].image;Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P+1,0,0,rt.width,rt.height,At,vt,rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P+1,ut,rt.width,rt.height,0,At,vt,rt.data)}}else{Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,At,vt,J[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ut,At,vt,J[et]);for(let P=0;P<Bt.length;P++){let st=Bt[P];Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P+1,0,0,At,vt,st.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P+1,ut,At,vt,st.image[et])}}}v(M,Gt)&&x(s.TEXTURE_CUBE_MAP),tt.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function gt(A,M,B,Q,j,tt){let pt=r.convert(B.format,B.colorSpace),lt=r.convert(B.type),ht=b(B.internalFormat,pt,lt,B.colorSpace);if(!n.get(M).__hasExternalTextures){let Ft=Math.max(1,M.width>>tt),J=Math.max(1,M.height>>tt);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,tt,ht,Ft,J,M.depth,0,pt,lt,null):e.texImage2D(j,tt,ht,Ft,J,0,pt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),dt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,j,n.get(B).__webglTexture,0,Rt(M)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,j,n.get(B).__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(A,M,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let Q=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||dt(M)){let j=M.depthTexture;j&&j.isDepthTexture&&(j.type===li?Q=s.DEPTH_COMPONENT32F:j.type===ai&&(Q=s.DEPTH_COMPONENT24));let tt=Rt(M);dt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,Q,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Q,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){let Q=Rt(M);B&&dt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,M.width,M.height):dt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{let Q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let j=0;j<Q.length;j++){let tt=Q[j],pt=r.convert(tt.format,tt.colorSpace),lt=r.convert(tt.type),ht=b(tt.internalFormat,pt,lt,tt.colorSpace),bt=Rt(M);B&&dt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,ht,M.width,M.height):dt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,ht,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ht,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);let Q=n.get(M.depthTexture).__webglTexture,j=Rt(M);if(M.depthTexture.format===Ri)dt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(M.depthTexture.format===us)dt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Et(A){let M=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");It(M.__webglFramebuffer,A)}else if(B){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=s.createRenderbuffer(),Pt(M.__webglDepthbuffer[Q],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Pt(M.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(A,M,B){let Q=n.get(A);M!==void 0&&gt(Q.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Et(A)}function F(A){let M=A.texture,B=n.get(A),Q=n.get(M);A.addEventListener("dispose",I),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=M.version,o.memory.textures++);let j=A.isWebGLCubeRenderTarget===!0,tt=A.isWebGLMultipleRenderTargets===!0,pt=m(A)||a;if(j){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let ht=0;ht<M.mipmaps.length;ht++)B.__webglFramebuffer[lt][ht]=s.createFramebuffer()}else B.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)B.__webglFramebuffer[lt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(tt)if(i.drawBuffers){let lt=A.texture;for(let ht=0,bt=lt.length;ht<bt;ht++){let Ft=n.get(lt[ht]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&dt(A)===!1){let lt=tt?M:[M];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<lt.length;ht++){let bt=lt[ht];B.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);let Ft=r.convert(bt.format,bt.colorSpace),J=r.convert(bt.type),Kt=b(bt.internalFormat,Ft,J,bt.colorSpace,A.isXRRenderTarget===!0),Gt=Rt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,Kt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),V(s.TEXTURE_CUBE_MAP,M,pt);for(let lt=0;lt<6;lt++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)gt(B.__webglFramebuffer[lt][ht],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ht);else gt(B.__webglFramebuffer[lt],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);v(M,pt)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){let lt=A.texture;for(let ht=0,bt=lt.length;ht<bt;ht++){let Ft=lt[ht],J=n.get(Ft);e.bindTexture(s.TEXTURE_2D,J.__webglTexture),V(s.TEXTURE_2D,Ft,pt),gt(B.__webglFramebuffer,A,Ft,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),v(Ft,pt)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?lt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,Q.__webglTexture),V(lt,M,pt),a&&M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)gt(B.__webglFramebuffer[ht],A,M,s.COLOR_ATTACHMENT0,lt,ht);else gt(B.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,lt,0);v(M,pt)&&x(lt),e.unbindTexture()}A.depthBuffer&&Et(A)}function We(A){let M=m(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,j=B.length;Q<j;Q++){let tt=B[Q];if(v(tt,M)){let pt=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,lt=n.get(tt).__webglTexture;e.bindTexture(pt,lt),x(pt),e.unbindTexture()}}}function yt(A){if(a&&A.samples>0&&dt(A)===!1){let M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,Q=A.height,j=s.COLOR_BUFFER_BIT,tt=[],pt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(A),ht=A.isWebGLMultipleRenderTargets===!0;if(ht)for(let bt=0;bt<M.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let bt=0;bt<M.length;bt++){tt.push(s.COLOR_ATTACHMENT0+bt),A.depthBuffer&&tt.push(pt);let Ft=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(Ft===!1&&(A.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ht&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[bt]),Ft===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[pt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[pt])),ht){let J=n.get(M[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,B,Q,0,0,B,Q,j,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let bt=0;bt<M.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,lt.__webglColorRenderbuffer[bt]);let Ft=n.get(M[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,Ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function Rt(A){return Math.min(i.maxSamples,A.samples)}function dt(A){let M=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ce(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Nt(A,M){let B=A.colorSpace,Q=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===$a||B!==Vn&&B!==ge&&(Qt.getTransfer(B)===re?a===!1?t.has("EXT_sRGB")===!0&&Q===Ae?(A.format=$a,A.minFilter=oe,A.generateMipmaps=!1):M=eo.sRGBToLinear(M):(Q!==Ae||j!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Wt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=dt}function Jg(s,t,e){let n=e.isWebGL2;function i(r,o=ge){let a,l=Qt.getTransfer(o);if(r===ui)return s.UNSIGNED_BYTE;if(r===$h)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Jh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Pf)return s.BYTE;if(r===Lf)return s.SHORT;if(r===Bl)return s.UNSIGNED_SHORT;if(r===Zh)return s.INT;if(r===ai)return s.UNSIGNED_INT;if(r===li)return s.FLOAT;if(r===Vs)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===If)return s.ALPHA;if(r===Ae)return s.RGBA;if(r===Df)return s.LUMINANCE;if(r===Uf)return s.LUMINANCE_ALPHA;if(r===Ri)return s.DEPTH_COMPONENT;if(r===us)return s.DEPTH_STENCIL;if(r===$a)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Nf)return s.RED;if(r===Kh)return s.RED_INTEGER;if(r===Ff)return s.RG;if(r===jh)return s.RG_INTEGER;if(r===Qh)return s.RGBA_INTEGER;if(r===ha||r===ua||r===fa||r===da)if(l===re)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ha)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ha)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ua)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===da)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sc||r===bc||r===Ec||r===wc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Sc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ec)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===tu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Tc||r===Ac)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Tc)return l===re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ac)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rc||r===Cc||r===Pc||r===Lc||r===Ic||r===Dc||r===Uc||r===Nc||r===Fc||r===Oc||r===Bc||r===zc||r===Hc||r===kc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Rc)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cc)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pc)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lc)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ic)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dc)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uc)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nc)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fc)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oc)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bc)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zc)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hc)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kc)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===pa||r===Gc||r===Vc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===pa)return l===re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Of||r===Wc||r===Xc||r===qc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===pa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Wc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ai?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var cl=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},xe=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kg={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hl=class extends pi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=e.getContextAttributes(),m=null,p=null,v=[],x=[],b=new ot,R=null,S=new $e;S.layers.enable(1),S.viewport=new Re;let w=new $e;w.layers.enable(2),w.viewport=new Re;let I=[S,w],y=new cl;y.layers.enable(1),y.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=v[V];return $===void 0&&($=new Hs,v[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=v[V];return $===void 0&&($=new Hs,v[V]=$),$.getGripSpace()},this.getHand=function(V){let $=v[V];return $===void 0&&($=new Hs,v[V]=$),$.getHandSpace()};function G(V){let $=x.indexOf(V.inputSource);if($===-1)return;let at=v[$];at!==void 0&&(at.update(V.inputSource,V.frame,c||o),at.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",L);for(let V=0;V<v.length;V++){let $=x[V];$!==null&&(x[V]=null,v[V].disconnect($))}E=null,U=null,t.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Wn(d.framebufferWidth,d.framebufferHeight,{format:Ae,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,at=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=_.stencil?us:Ri,at=_.stencil?Ai:ai);let gt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(gt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Wn(f.textureWidth,f.textureHeight,{format:Ae,type:ui,depthTexture:new fo(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Pt=t.properties.get(p);Pt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(V){for(let $=0;$<V.removed.length;$++){let at=V.removed[$],xt=x.indexOf(at);xt>=0&&(x[xt]=null,v[xt].disconnect(at))}for(let $=0;$<V.added.length;$++){let at=V.added[$],xt=x.indexOf(at);if(xt===-1){for(let Pt=0;Pt<v.length;Pt++)if(Pt>=x.length){x.push(at),xt=Pt;break}else if(x[Pt]===null){x[Pt]=at,xt=Pt;break}if(xt===-1)break}let gt=v[xt];gt&&gt.connect(at)}}let N=new C,H=new C;function q(V,$,at){N.setFromMatrixPosition($.matrixWorld),H.setFromMatrixPosition(at.matrixWorld);let xt=N.distanceTo(H),gt=$.projectionMatrix.elements,Pt=at.projectionMatrix.elements,It=gt[14]/(gt[10]-1),Et=gt[14]/(gt[10]+1),Wt=(gt[9]+1)/gt[5],F=(gt[9]-1)/gt[5],We=(gt[8]-1)/gt[0],yt=(Pt[8]+1)/Pt[0],Rt=It*We,dt=It*yt,ce=xt/(-We+yt),Nt=ce*-We;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Nt),V.translateZ(ce),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let A=It+ce,M=Et+ce,B=Rt-Nt,Q=dt+(xt-Nt),j=Wt*Et/M*A,tt=F*Et/M*A;V.projectionMatrix.makePerspective(B,Q,j,tt,A,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;y.near=w.near=S.near=V.near,y.far=w.far=S.far=V.far,(E!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,U=y.far);let $=V.parent,at=y.cameras;X(y,$);for(let xt=0;xt<at.length;xt++)X(at[xt],$);at.length===2?q(y,S,w):y.projectionMatrix.copy(S.projectionMatrix),W(V,y,$)};function W(V,$,at){at===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(at.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ws*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let Z=null;function K(V,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let at=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let xt=!1;at.length!==y.cameras.length&&(y.cameras.length=0,xt=!0);for(let gt=0;gt<at.length;gt++){let Pt=at[gt],It=null;if(d!==null)It=d.getViewport(Pt);else{let Wt=u.getViewSubImage(f,Pt);It=Wt.viewport,gt===0&&(t.setRenderTargetTextures(p,Wt.colorTexture,f.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(p))}let Et=I[gt];Et===void 0&&(Et=new $e,Et.layers.enable(gt),Et.viewport=new Re,I[gt]=Et),Et.matrix.fromArray(Pt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Pt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(It.x,It.y,It.width,It.height),gt===0&&(y.matrix.copy(Et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xt===!0&&y.cameras.push(Et)}}for(let at=0;at<v.length;at++){let xt=x[at],gt=v[at];xt!==null&&gt!==void 0&&gt.update(xt,$,c||o)}Z&&Z(V,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let it=new ou;it.setAnimationLoop(K),this.setAnimationLoop=function(V){Z=V},this.dispose=function(){}}};function jg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ru(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Qg(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){let b=x.program;n.uniformBlockBinding(v,b)}function c(v,x){let b=i[v.id];b===void 0&&(g(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",m));let R=x.program;n.updateUBOMapping(v,R);let S=t.render.frame;r[v.id]!==S&&(f(v),r[v.id]=S)}function h(v){let x=u();v.__bindingPointIndex=x;let b=s.createBuffer(),R=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,R,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let x=i[v.id],b=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let S=0,w=b.length;S<w;S++){let I=Array.isArray(b[S])?b[S]:[b[S]];for(let y=0,E=I.length;y<E;y++){let U=I[y];if(d(U,S,y,R)===!0){let G=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value],L=0;for(let N=0;N<Y.length;N++){let H=Y[N],q=_(H);typeof H=="number"||typeof H=="boolean"?(U.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,G+L,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=0,U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=0,U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=0):(H.toArray(U.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,x,b,R){let S=v.value,w=x+"_"+b;if(R[w]===void 0)return typeof S=="number"||typeof S=="boolean"?R[w]=S:R[w]=S.clone(),!0;{let I=R[w];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return R[w]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function g(v){let x=v.uniforms,b=0,R=16;for(let w=0,I=x.length;w<I;w++){let y=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,U=y.length;E<U;E++){let G=y[E],Y=Array.isArray(G.value)?G.value:[G.value];for(let L=0,N=Y.length;L<N;L++){let H=Y[L],q=_(H),X=b%R;X!==0&&R-X<q.boundary&&(b+=R-X),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=q.storage}}}let S=b%R;return S>0&&(b+=R-S),v.__size=b,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var qs=class{constructor(t={}){let{canvas:e=ld(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ue,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;let x=this,b=!1,R=0,S=0,w=null,I=-1,y=null,E=new Re,U=new Re,G=null,Y=new ft(0),L=0,N=e.width,H=e.height,q=1,X=null,W=null,Z=new Re(0,0,N,H),K=new Re(0,0,N,H),it=!1,V=new Xs,$=!1,at=!1,xt=null,gt=new ie,Pt=new ot,It=new C,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Wt(){return w===null?q:1}let F=n;function We(T,D){for(let z=0;z<T.length;z++){let k=T[z],O=e.getContext(k,D);if(O!==null)return O}return null}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ul}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",st,!1),F===null){let D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),F=We(D,T),F===null)throw We(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let yt,Rt,dt,ce,Nt,A,M,B,Q,j,tt,pt,lt,ht,bt,Ft,J,Kt,Gt,At,vt,ut,Dt,Zt;function fe(){yt=new x0(F),Rt=new f0(F,yt,t),yt.init(Rt),ut=new Jg(F,yt,Rt),dt=new Zg(F,yt,Rt),ce=new M0(F),Nt=new Fg,A=new $g(F,yt,dt,Nt,Rt,ut,ce),M=new p0(x),B=new _0(x),Q=new Cd(F,Rt),Dt=new h0(F,yt,Q,Rt),j=new v0(F,Q,ce,Dt),tt=new w0(F,j,Q,ce),Gt=new E0(F,Rt,A),Ft=new d0(Nt),pt=new Ng(x,M,B,yt,Rt,Dt,Ft),lt=new jg(x,Nt),ht=new Bg,bt=new Wg(yt,Rt),Kt=new c0(x,M,B,dt,tt,f,l),J=new Yg(x,tt,Rt),Zt=new Qg(F,ce,Rt,dt),At=new u0(F,yt,ce,Rt),vt=new y0(F,yt,ce,Rt),ce.programs=pt.programs,x.capabilities=Rt,x.extensions=yt,x.properties=Nt,x.renderLists=ht,x.shadowMap=J,x.state=dt,x.info=ce}fe();let Bt=new hl(x,F);this.xr=Bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=yt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=yt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(N,H,!1))},this.getSize=function(T){return T.set(N,H)},this.setSize=function(T,D,z=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,H=D,e.width=Math.floor(T*q),e.height=Math.floor(D*q),z===!0&&(e.style.width=T+"px",e.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(N*q,H*q).floor()},this.setDrawingBufferSize=function(T,D,z){N=T,H=D,q=z,e.width=Math.floor(T*z),e.height=Math.floor(D*z),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,D,z,k){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,D,z,k),dt.viewport(E.copy(Z).multiplyScalar(q).floor())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,D,z,k){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,D,z,k),dt.scissor(U.copy(K).multiplyScalar(q).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(T){dt.setScissorTest(it=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(T=!0,D=!0,z=!0){let k=0;if(T){let O=!1;if(w!==null){let ct=w.texture.format;O=ct===Qh||ct===jh||ct===Kh}if(O){let ct=w.texture.type,mt=ct===ui||ct===ai||ct===Bl||ct===Ai||ct===$h||ct===Jh,St=Kt.getClearColor(),Tt=Kt.getClearAlpha(),Ot=St.r,Ct=St.g,Lt=St.b;mt?(d[0]=Ot,d[1]=Ct,d[2]=Lt,d[3]=Tt,F.clearBufferuiv(F.COLOR,0,d)):(g[0]=Ot,g[1]=Ct,g[2]=Lt,g[3]=Tt,F.clearBufferiv(F.COLOR,0,g))}else k|=F.COLOR_BUFFER_BIT}D&&(k|=F.DEPTH_BUFFER_BIT),z&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ht.dispose(),bt.dispose(),Nt.dispose(),M.dispose(),B.dispose(),tt.dispose(),Dt.dispose(),Zt.dispose(),pt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Xe),Bt.removeEventListener("sessionend",ne),xt&&(xt.dispose(),xt=null),qe.stop()};function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let T=ce.autoReset,D=J.enabled,z=J.autoUpdate,k=J.needsUpdate,O=J.type;fe(),ce.autoReset=T,J.enabled=D,J.autoUpdate=z,J.needsUpdate=k,J.type=O}function st(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function rt(T){let D=T.target;D.removeEventListener("dispose",rt),wt(D)}function wt(T){Mt(T),Nt.remove(T)}function Mt(T){let D=Nt.get(T).programs;D!==void 0&&(D.forEach(function(z){pt.releaseProgram(z)}),T.isShaderMaterial&&pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,z,k,O,ct){D===null&&(D=Et);let mt=O.isMesh&&O.matrixWorld.determinant()<0,St=qu(T,D,z,k,O);dt.setMaterial(k,mt);let Tt=z.index,Ot=1;if(k.wireframe===!0){if(Tt=j.getWireframeAttribute(z),Tt===void 0)return;Ot=2}let Ct=z.drawRange,Lt=z.attributes.position,me=Ct.start*Ot,nn=(Ct.start+Ct.count)*Ot;ct!==null&&(me=Math.max(me,ct.start*Ot),nn=Math.min(nn,(ct.start+ct.count)*Ot)),Tt!==null?(me=Math.max(me,0),nn=Math.min(nn,Tt.count)):Lt!=null&&(me=Math.max(me,0),nn=Math.min(nn,Lt.count));let Ee=nn-me;if(Ee<0||Ee===1/0)return;Dt.setup(O,k,St,z,Tt);let Dn,he=At;if(Tt!==null&&(Dn=Q.get(Tt),he=vt,he.setIndex(Dn)),O.isMesh)k.wireframe===!0?(dt.setLineWidth(k.wireframeLinewidth*Wt()),he.setMode(F.LINES)):he.setMode(F.TRIANGLES);else if(O.isLine){let zt=k.linewidth;zt===void 0&&(zt=1),dt.setLineWidth(zt*Wt()),O.isLineSegments?he.setMode(F.LINES):O.isLineLoop?he.setMode(F.LINE_LOOP):he.setMode(F.LINE_STRIP)}else O.isPoints?he.setMode(F.POINTS):O.isSprite&&he.setMode(F.TRIANGLES);if(O.isBatchedMesh)he.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)he.renderInstances(me,Ee,O.count);else if(z.isInstancedBufferGeometry){let zt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ra=Math.min(z.instanceCount,zt);he.renderInstances(me,Ee,ra)}else he.render(me,Ee)};function te(T,D,z){T.transparent===!0&&T.side===Pe&&T.forceSinglePass===!1?(T.side=ze,T.needsUpdate=!0,pr(T,D,z),T.side=fi,T.needsUpdate=!0,pr(T,D,z),T.side=Pe):pr(T,D,z)}this.compile=function(T,D,z=null){z===null&&(z=T),m=bt.get(z),m.init(),v.push(m),z.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==z&&T.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(x._useLegacyLights);let k=new Set;return T.traverse(function(O){let ct=O.material;if(ct)if(Array.isArray(ct))for(let mt=0;mt<ct.length;mt++){let St=ct[mt];te(St,z,O),k.add(St)}else te(ct,z,O),k.add(ct)}),v.pop(),m=null,k},this.compileAsync=function(T,D,z=null){let k=this.compile(T,D,z);return new Promise(O=>{function ct(){if(k.forEach(function(mt){Nt.get(mt).currentProgram.isReady()&&k.delete(mt)}),k.size===0){O(T);return}setTimeout(ct,10)}yt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let ee=null;function be(T){ee&&ee(T)}function Xe(){qe.stop()}function ne(){qe.start()}let qe=new ou;qe.setAnimationLoop(be),typeof self!="undefined"&&qe.setContext(self),this.setAnimationLoop=function(T){ee=T,Bt.setAnimationLoop(T),T===null?qe.stop():qe.start()},Bt.addEventListener("sessionstart",Xe),Bt.addEventListener("sessionend",ne),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(D),D=Bt.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,D,w),m=bt.get(T,v.length),m.init(),v.push(m),gt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(gt),at=this.localClippingEnabled,$=Ft.init(this.clippingPlanes,at),_=ht.get(T,p.length),_.init(),p.push(_),Mn(T,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,W),this.info.render.frame++,$===!0&&Ft.beginShadows();let z=m.state.shadowsArray;if(J.render(z,T,D),$===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(_,T),m.setupLights(x._useLegacyLights),D.isArrayCamera){let k=D.cameras;for(let O=0,ct=k.length;O<ct;O++){let mt=k[O];hc(_,T,mt,mt.viewport)}}else hc(_,T,D);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(x,T,D),Dt.resetDefaultState(),I=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Mn(T,D,z,k){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||V.intersectsSprite(T)){k&&It.setFromMatrixPosition(T.matrixWorld).applyMatrix4(gt);let mt=tt.update(T),St=T.material;St.visible&&_.push(T,mt,St,z,It.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||V.intersectsObject(T))){let mt=tt.update(T),St=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),It.copy(T.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),It.copy(mt.boundingSphere.center)),It.applyMatrix4(T.matrixWorld).applyMatrix4(gt)),Array.isArray(St)){let Tt=mt.groups;for(let Ot=0,Ct=Tt.length;Ot<Ct;Ot++){let Lt=Tt[Ot],me=St[Lt.materialIndex];me&&me.visible&&_.push(T,mt,me,z,It.z,Lt)}}else St.visible&&_.push(T,mt,St,z,It.z,null)}}let ct=T.children;for(let mt=0,St=ct.length;mt<St;mt++)Mn(ct[mt],D,z,k)}function hc(T,D,z,k){let O=T.opaque,ct=T.transmissive,mt=T.transparent;m.setupLightsView(z),$===!0&&Ft.setGlobalState(x.clippingPlanes,z),ct.length>0&&Xu(O,ct,D,z),k&&dt.viewport(E.copy(k)),O.length>0&&dr(O,D,z),ct.length>0&&dr(ct,D,z),mt.length>0&&dr(mt,D,z),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Xu(T,D,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let ct=Rt.isWebGL2;xt===null&&(xt=new Wn(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?Vs:ui,minFilter:En,samples:ct?4:0})),x.getDrawingBufferSize(Pt),ct?xt.setSize(Pt.x,Pt.y):xt.setSize(Qr(Pt.x),Qr(Pt.y));let mt=x.getRenderTarget();x.setRenderTarget(xt),x.getClearColor(Y),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let St=x.toneMapping;x.toneMapping=hi,dr(T,z,k),A.updateMultisampleRenderTarget(xt),A.updateRenderTargetMipmap(xt);let Tt=!1;for(let Ot=0,Ct=D.length;Ot<Ct;Ot++){let Lt=D[Ot],me=Lt.object,nn=Lt.geometry,Ee=Lt.material,Dn=Lt.group;if(Ee.side===Pe&&me.layers.test(k.layers)){let he=Ee.side;Ee.side=ze,Ee.needsUpdate=!0,uc(me,z,k,nn,Ee,Dn),Ee.side=he,Ee.needsUpdate=!0,Tt=!0}}Tt===!0&&(A.updateMultisampleRenderTarget(xt),A.updateRenderTargetMipmap(xt)),x.setRenderTarget(mt),x.setClearColor(Y,L),x.toneMapping=St}function dr(T,D,z){let k=D.isScene===!0?D.overrideMaterial:null;for(let O=0,ct=T.length;O<ct;O++){let mt=T[O],St=mt.object,Tt=mt.geometry,Ot=k===null?mt.material:k,Ct=mt.group;St.layers.test(z.layers)&&uc(St,D,z,Tt,Ot,Ct)}}function uc(T,D,z,k,O,ct){T.onBeforeRender(x,D,z,k,O,ct),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(x,D,z,k,T,ct),O.transparent===!0&&O.side===Pe&&O.forceSinglePass===!1?(O.side=ze,O.needsUpdate=!0,x.renderBufferDirect(z,D,k,O,T,ct),O.side=fi,O.needsUpdate=!0,x.renderBufferDirect(z,D,k,O,T,ct),O.side=Pe):x.renderBufferDirect(z,D,k,O,T,ct),T.onAfterRender(x,D,z,k,O,ct)}function pr(T,D,z){D.isScene!==!0&&(D=Et);let k=Nt.get(T),O=m.state.lights,ct=m.state.shadowsArray,mt=O.state.version,St=pt.getParameters(T,O.state,ct,D,z),Tt=pt.getProgramCacheKey(St),Ot=k.programs;k.environment=T.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(T.isMeshStandardMaterial?B:M).get(T.envMap||k.environment),Ot===void 0&&(T.addEventListener("dispose",rt),Ot=new Map,k.programs=Ot);let Ct=Ot.get(Tt);if(Ct!==void 0){if(k.currentProgram===Ct&&k.lightsStateVersion===mt)return dc(T,St),Ct}else St.uniforms=pt.getUniforms(T),T.onBuild(z,St,x),T.onBeforeCompile(St,x),Ct=pt.acquireProgram(St,Tt),Ot.set(Tt,Ct),k.uniforms=St.uniforms;let Lt=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=Ft.uniform),dc(T,St),k.needsLights=Zu(T),k.lightsStateVersion=mt,k.needsLights&&(Lt.ambientLightColor.value=O.state.ambient,Lt.lightProbe.value=O.state.probe,Lt.directionalLights.value=O.state.directional,Lt.directionalLightShadows.value=O.state.directionalShadow,Lt.spotLights.value=O.state.spot,Lt.spotLightShadows.value=O.state.spotShadow,Lt.rectAreaLights.value=O.state.rectArea,Lt.ltc_1.value=O.state.rectAreaLTC1,Lt.ltc_2.value=O.state.rectAreaLTC2,Lt.pointLights.value=O.state.point,Lt.pointLightShadows.value=O.state.pointShadow,Lt.hemisphereLights.value=O.state.hemi,Lt.directionalShadowMap.value=O.state.directionalShadowMap,Lt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Lt.spotShadowMap.value=O.state.spotShadowMap,Lt.spotLightMatrix.value=O.state.spotLightMatrix,Lt.spotLightMap.value=O.state.spotLightMap,Lt.pointShadowMap.value=O.state.pointShadowMap,Lt.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=Ct,k.uniformsList=null,Ct}function fc(T){if(T.uniformsList===null){let D=T.currentProgram.getUniforms();T.uniformsList=ls.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function dc(T,D){let z=Nt.get(T);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function qu(T,D,z,k,O){D.isScene!==!0&&(D=Et),A.resetTextureUnits();let ct=D.fog,mt=k.isMeshStandardMaterial?D.environment:null,St=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Vn,Tt=(k.isMeshStandardMaterial?B:M).get(k.envMap||mt),Ot=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ct=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Lt=!!z.morphAttributes.position,me=!!z.morphAttributes.normal,nn=!!z.morphAttributes.color,Ee=hi;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ee=x.toneMapping);let Dn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=Dn!==void 0?Dn.length:0,zt=Nt.get(k),ra=m.state.lights;if($===!0&&(at===!0||T!==y)){let ln=T===y&&k.id===I;Ft.setState(k,T,ln)}let de=!1;k.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ra.state.version||zt.outputColorSpace!==St||O.isBatchedMesh&&zt.batching===!1||!O.isBatchedMesh&&zt.batching===!0||O.isInstancedMesh&&zt.instancing===!1||!O.isInstancedMesh&&zt.instancing===!0||O.isSkinnedMesh&&zt.skinning===!1||!O.isSkinnedMesh&&zt.skinning===!0||O.isInstancedMesh&&zt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&zt.instancingColor===!1&&O.instanceColor!==null||zt.envMap!==Tt||k.fog===!0&&zt.fog!==ct||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Ft.numPlanes||zt.numIntersection!==Ft.numIntersection)||zt.vertexAlphas!==Ot||zt.vertexTangents!==Ct||zt.morphTargets!==Lt||zt.morphNormals!==me||zt.morphColors!==nn||zt.toneMapping!==Ee||Rt.isWebGL2===!0&&zt.morphTargetsCount!==he)&&(de=!0):(de=!0,zt.__version=k.version);let _i=zt.currentProgram;de===!0&&(_i=pr(k,D,O));let pc=!1,As=!1,oa=!1,Fe=_i.getUniforms(),xi=zt.uniforms;if(dt.useProgram(_i.program)&&(pc=!0,As=!0,oa=!0),k.id!==I&&(I=k.id,As=!0),pc||y!==T){Fe.setValue(F,"projectionMatrix",T.projectionMatrix),Fe.setValue(F,"viewMatrix",T.matrixWorldInverse);let ln=Fe.map.cameraPosition;ln!==void 0&&ln.setValue(F,It.setFromMatrixPosition(T.matrixWorld)),Rt.logarithmicDepthBuffer&&Fe.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Fe.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,As=!0,oa=!0)}if(O.isSkinnedMesh){Fe.setOptional(F,O,"bindMatrix"),Fe.setOptional(F,O,"bindMatrixInverse");let ln=O.skeleton;ln&&(Rt.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),Fe.setValue(F,"boneTexture",ln.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Fe.setOptional(F,O,"batchingTexture"),Fe.setValue(F,"batchingTexture",O._matricesTexture,A));let aa=z.morphAttributes;if((aa.position!==void 0||aa.normal!==void 0||aa.color!==void 0&&Rt.isWebGL2===!0)&&Gt.update(O,z,_i),(As||zt.receiveShadow!==O.receiveShadow)&&(zt.receiveShadow=O.receiveShadow,Fe.setValue(F,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(xi.envMap.value=Tt,xi.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),As&&(Fe.setValue(F,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&Yu(xi,oa),ct&&k.fog===!0&&lt.refreshFogUniforms(xi,ct),lt.refreshMaterialUniforms(xi,k,q,H,xt),ls.upload(F,fc(zt),xi,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ls.upload(F,fc(zt),xi,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Fe.setValue(F,"center",O.center),Fe.setValue(F,"modelViewMatrix",O.modelViewMatrix),Fe.setValue(F,"normalMatrix",O.normalMatrix),Fe.setValue(F,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let ln=k.uniformsGroups;for(let la=0,$u=ln.length;la<$u;la++)if(Rt.isWebGL2){let mc=ln[la];Zt.update(mc,_i),Zt.bind(mc,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function Yu(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function Zu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,D,z){Nt.get(T.texture).__webglTexture=D,Nt.get(T.depthTexture).__webglTexture=z;let k=Nt.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,D){let z=Nt.get(T);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,z=0){w=T,R=D,S=z;let k=!0,O=null,ct=!1,mt=!1;if(T){let Tt=Nt.get(T);Tt.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(F.FRAMEBUFFER,null),k=!1):Tt.__webglFramebuffer===void 0?A.setupRenderTarget(T):Tt.__hasExternalTextures&&A.rebindTextures(T,Nt.get(T.texture).__webglTexture,Nt.get(T.depthTexture).__webglTexture);let Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(mt=!0);let Ct=Nt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ct[D])?O=Ct[D][z]:O=Ct[D],ct=!0):Rt.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?O=Nt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ct)?O=Ct[z]:O=Ct,E.copy(T.viewport),U.copy(T.scissor),G=T.scissorTest}else E.copy(Z).multiplyScalar(q).floor(),U.copy(K).multiplyScalar(q).floor(),G=it;if(dt.bindFramebuffer(F.FRAMEBUFFER,O)&&Rt.drawBuffers&&k&&dt.drawBuffers(T,O),dt.viewport(E),dt.scissor(U),dt.setScissorTest(G),ct){let Tt=Nt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,Tt.__webglTexture,z)}else if(mt){let Tt=Nt.get(T.texture),Ot=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.__webglTexture,z||0,Ot)}I=-1},this.readRenderTargetPixels=function(T,D,z,k,O,ct,mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){dt.bindFramebuffer(F.FRAMEBUFFER,St);try{let Tt=T.texture,Ot=Tt.format,Ct=Tt.type;if(Ot!==Ae&&ut.convert(Ot)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Lt=Ct===Vs&&(yt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Ct!==ui&&ut.convert(Ct)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ct===li&&(Rt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-k&&z>=0&&z<=T.height-O&&F.readPixels(D,z,k,O,ut.convert(Ot),ut.convert(Ct),ct)}finally{let Tt=w!==null?Nt.get(w).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(T,D,z=0){let k=Math.pow(2,-z),O=Math.floor(D.image.width*k),ct=Math.floor(D.image.height*k);A.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,T.x,T.y,O,ct),dt.unbindTexture()},this.copyTextureToTexture=function(T,D,z,k=0){let O=D.image.width,ct=D.image.height,mt=ut.convert(z.format),St=ut.convert(z.type);A.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,T.x,T.y,O,ct,mt,St,D.image.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,T.x,T.y,D.mipmaps[0].width,D.mipmaps[0].height,mt,D.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,k,T.x,T.y,mt,St,D.image),k===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(T,D,z,k,O=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ct=T.max.x-T.min.x+1,mt=T.max.y-T.min.y+1,St=T.max.z-T.min.z+1,Tt=ut.convert(k.format),Ot=ut.convert(k.type),Ct;if(k.isData3DTexture)A.setTexture3D(k,0),Ct=F.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)A.setTexture2DArray(k,0),Ct=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let Lt=F.getParameter(F.UNPACK_ROW_LENGTH),me=F.getParameter(F.UNPACK_IMAGE_HEIGHT),nn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ee=F.getParameter(F.UNPACK_SKIP_ROWS),Dn=F.getParameter(F.UNPACK_SKIP_IMAGES),he=z.isCompressedTexture?z.mipmaps[O]:z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,he.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,T.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,T.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?F.texSubImage3D(Ct,O,D.x,D.y,D.z,ct,mt,St,Tt,Ot,he.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ct,O,D.x,D.y,D.z,ct,mt,St,Tt,he.data)):F.texSubImage3D(Ct,O,D.x,D.y,D.z,ct,mt,St,Tt,Ot,he),F.pixelStorei(F.UNPACK_ROW_LENGTH,Lt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me),F.pixelStorei(F.UNPACK_SKIP_PIXELS,nn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Dn),O===0&&k.generateMipmaps&&F.generateMipmap(Ct),dt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),dt.unbindTexture()},this.resetState=function(){R=0,S=0,w=null,dt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Hl?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Lo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ue?Ci:eu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ci?ue:Vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ul=class extends qs{};ul.prototype.isWebGL1Renderer=!0;var po=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ms=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},mo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new C,Ys=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Vt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pi=class extends Tn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qi,Is=new C,ts=new C,es=new C,ns=new ot,Ds=new ot,fu=new ie,Or=new C,Us=new C,Br=new C,Fh=new ot,Ba=new ot,Oh=new ot,gs=class extends Le{constructor(t=new Pi){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mo(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new Ys(n,3,0,!1)),Qi.setAttribute("uv",new Ys(n,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),fu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-es.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;zr(Or.set(-.5,-.5,0),es,o,ts,i,r),zr(Us.set(.5,-.5,0),es,o,ts,i,r),zr(Br.set(.5,.5,0),es,o,ts,i,r),Fh.set(0,0),Ba.set(1,0),Oh.set(1,1);let a=t.ray.intersectTriangle(Or,Us,Br,!1,Is);if(a===null&&(zr(Us.set(-.5,.5,0),es,o,ts,i,r),Ba.set(0,1),a=t.ray.intersectTriangle(Or,Br,Us,!1,Is),a===null))return;let l=t.ray.origin.distanceTo(Is);l<t.near||l>t.far||e.push({distance:l,point:Is.clone(),uv:Ti.getInterpolation(Is,Or,Us,Br,Fh,Ba,Oh,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function zr(s,t,e,n,i,r){ns.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ds.x=r*ns.x-i*ns.y,Ds.y=i*ns.x+r*ns.y):Ds.copy(ns),s.copy(t),s.x+=Ds.x,s.y+=Ds.y,s.applyMatrix4(fu)}var Yn=class extends on{constructor(t=null,e=1,n=1,i,r,o,a,l,c=ve,h=ve,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zs=class extends Vt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},is=new ie,Bh=new ie,Hr=[],zh=new Xn,t_=new ie,Ns=new Xt,Fs=new mi,go=class extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,t_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),zh.copy(t.boundingBox).applyMatrix4(is),this.boundingBox.union(zh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),Fs.copy(t.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,is),Bh.multiplyMatrices(n,is),Ns.matrixWorld=Bh,Ns.raycast(t,Hr);for(let o=0,a=Hr.length;o<a;o++){let l=Hr[o];l.instanceId=r,l.object=this,e.push(l)}Hr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var fl=class extends Tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hh=new ie,dl=new so,kr=new mi,Gr=new C,_o=class extends Le{constructor(t=new ae,e=new fl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Hh.copy(i).invert(),dl.copy(t.ray).applyMatrix4(Hh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=c.getX(g);Gr.fromBufferAttribute(u,m),kh(Gr,m,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Gr.fromBufferAttribute(u,g),kh(Gr,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function kh(s,t,e,n,i,r,o){let a=dl.distanceSqToPoint(s);if(a<e){let l=new C;dl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var Zn=class extends on{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new ot:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,i=[],r=[],o=[],a=new C,l=new ie;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Te(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Te(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},$s=class extends un{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let n=e||new ot,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},pl=class extends $s{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vl(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Vr=new C,za=new Vl,Ha=new Vl,ka=new Vl,ml=class extends un{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Vr.subVectors(i[0],i[1]).add(i[0]),c=Vr);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Vr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Vr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),za.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),Ha.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),ka.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(za.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ha.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ka.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(za.calc(l),Ha.calc(l),ka.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Gh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function e_(s,t){let e=1-s;return e*e*t}function n_(s,t){return 2*(1-s)*s*t}function i_(s,t){return s*s*t}function ks(s,t,e,n){return e_(s,t)+n_(s,e)+i_(s,n)}function s_(s,t){let e=1-s;return e*e*e*t}function r_(s,t){let e=1-s;return 3*e*e*s*t}function o_(s,t){return 3*(1-s)*s*s*t}function a_(s,t){return s*s*s*t}function Gs(s,t,e,n,i){return s_(s,t)+r_(s,e)+o_(s,n)+a_(s,i)}var xo=class extends un{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,i.x,r.x,o.x,a.x),Gs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gl=class extends un{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,i.x,r.x,o.x,a.x),Gs(t,i.y,r.y,o.y,a.y),Gs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vo=class extends un{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends un{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends un{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ks(t,i.x,r.x,o.x),ks(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xl=class extends un{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ks(t,i.x,r.x,o.x),ks(t,i.y,r.y,o.y),ks(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Gh(a,l.x,c.x,h.x,u.x),Gh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ot().fromArray(i))}return this}},Vh=Object.freeze({__proto__:null,ArcCurve:pl,CatmullRomCurve3:ml,CubicBezierCurve:xo,CubicBezierCurve3:gl,EllipseCurve:$s,LineCurve:vo,LineCurve3:_l,QuadraticBezierCurve:yo,QuadraticBezierCurve3:xl,SplineCurve:Mo}),vl=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Vh[i.type]().fromJSON(i))}return this}},yl=class extends vl{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new vo(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new yo(this.currentPoint.clone(),new ot(t,e),new ot(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new xo(this.currentPoint.clone(),new ot(t,e),new ot(n,i),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Mo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new $s(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ml=class s extends ae{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Te(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,f=new ot,d=new C,g=new C,_=new C,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let v=0;v<=e;v++){let x=n+v*h*i,b=Math.sin(x),R=Math.cos(x);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*b,u.y=t[S].y,u.z=t[S].x*R,o.push(u.x,u.y,u.z),f.x=v/e,f.y=S/(t.length-1),a.push(f.x,f.y);let w=l[3*S+0]*b,I=l[3*S+1],y=l[3*S+0]*R;c.push(w,I,y)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){let b=x+v*t.length,R=b,S=b+t.length,w=b+t.length+1,I=b+1;r.push(R,S,I),r.push(w,I,S)}this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},So=class s extends Ml{constructor(t=1,e=1,n=4,i=8){let r=new yl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}};var De=class s extends ae{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function v(){let b=new C,R=new C,S=0,w=(e-t)/n;for(let I=0;I<=r;I++){let y=[],E=I/r,U=E*(e-t)+t;for(let G=0;G<=i;G++){let Y=G/i,L=Y*l+a,N=Math.sin(L),H=Math.cos(L);R.x=U*N,R.y=-E*n+m,R.z=U*H,u.push(R.x,R.y,R.z),b.set(N,w,H).normalize(),f.push(b.x,b.y,b.z),d.push(Y,1-E),y.push(g++)}_.push(y)}for(let I=0;I<i;I++)for(let y=0;y<r;y++){let E=_[y][I],U=_[y+1][I],G=_[y+1][I+1],Y=_[y][I+1];h.push(E,U,Y),h.push(U,G,Y),S+=6}c.addGroup(p,S,0),p+=S}function x(b){let R=g,S=new ot,w=new C,I=0,y=b===!0?t:e,E=b===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*E,0),f.push(0,E,0),d.push(.5,.5),g++;let U=g;for(let G=0;G<=i;G++){let L=G/i*l+a,N=Math.cos(L),H=Math.sin(L);w.x=y*H,w.y=m*E,w.z=y*N,u.push(w.x,w.y,w.z),f.push(0,E,0),S.x=N*.5+.5,S.y=H*.5*E+.5,d.push(S.x,S.y),g++}for(let G=0;G<i;G++){let Y=R+G,L=U+G;b===!0?h.push(L,L+1,Y):h.push(L+1,L,Y),I+=3}c.addGroup(p,I,b===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bo=class s extends De{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Eo=class s extends ae{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let x=new C,b=new C,R=new C;for(let S=0;S<e.length;S+=3)d(e[S+0],x),d(e[S+1],b),d(e[S+2],R),l(x,b,R,v)}function l(v,x,b,R){let S=R+1,w=[];for(let I=0;I<=S;I++){w[I]=[];let y=v.clone().lerp(b,I/S),E=x.clone().lerp(b,I/S),U=S-I;for(let G=0;G<=U;G++)G===0&&I===S?w[I][G]=y:w[I][G]=y.clone().lerp(E,G/U)}for(let I=0;I<S;I++)for(let y=0;y<2*(S-I)-1;y++){let E=Math.floor(y/2);y%2===0?(f(w[I][E+1]),f(w[I+1][E]),f(w[I][E])):(f(w[I][E+1]),f(w[I+1][E+1]),f(w[I+1][E]))}}function c(v){let x=new C;for(let b=0;b<r.length;b+=3)x.x=r[b+0],x.y=r[b+1],x.z=r[b+2],x.normalize().multiplyScalar(v),r[b+0]=x.x,r[b+1]=x.y,r[b+2]=x.z}function h(){let v=new C;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let b=m(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;o.push(b,1-R)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let x=o[v+0],b=o[v+2],R=o[v+4],S=Math.max(x,b,R),w=Math.min(x,b,R);S>.9&&w<.1&&(x<.2&&(o[v+0]+=1),b<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,x){let b=v*3;x.x=t[b+0],x.y=t[b+1],x.z=t[b+2]}function g(){let v=new C,x=new C,b=new C,R=new C,S=new ot,w=new ot,I=new ot;for(let y=0,E=0;y<r.length;y+=9,E+=6){v.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),b.set(r[y+6],r[y+7],r[y+8]),S.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),R.copy(v).add(x).add(b).divideScalar(3);let U=m(R);_(S,E+0,v,U),_(w,E+2,x,U),_(I,E+4,b,U)}}function _(v,x,b,R){R<0&&v.x===1&&(o[x]=v.x-1),b.x===0&&b.z===0&&(o[x]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Js=class s extends Eo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},wo=class s extends Eo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var $n=class s extends ae{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,f=new C,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let v=[],x=p/n,b=0;p===0&&o===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){let S=R/e;u.x=-t*Math.cos(i+S*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+S*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(S+b,1-x),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let x=h[p][v+1],b=h[p][v],R=h[p+1][v],S=h[p+1][v+1];(p!==0||o>0)&&d.push(x,b,S),(p!==n-1||l<Math.PI)&&d.push(b,R,S)}this.setIndex(d),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var To=class s extends ae{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new C,u=new C,f=new C;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let _=g/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,v=(i+1)*d+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var He=class extends Tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var gi=class extends Tn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Wr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function l_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var _s=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sl=class extends _s{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zc:r=t,a=2*e-n;break;case $c:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zc:o=t,l=2*n-e;break;case $c:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,b=d*m-d*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+v*o[c+R]+x*o[l+R]+b*o[u+R];return r}},bl=class extends _s{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},El=class extends _s{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},gn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wr(e,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wr(t.times,Array),values:Wr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Yr:e=this.InterpolantFactoryMethodDiscrete;break;case Zr:e=this.InterpolantFactoryMethodLinear;break;case ma:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return ma}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&l_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ma,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Zr;var Li=class extends gn{};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Yr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends gn{};wl.prototype.ValueTypeName="color";var Tl=class extends gn{};Tl.prototype.ValueTypeName="number";var Al=class extends _s{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)wn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ks=class extends gn{InterpolantFactoryMethodLinear(t){return new Al(this.times,this.values,this.getValueSize(),t)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.DefaultInterpolation=Zr;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends gn{};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Yr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends gn{};Rl.prototype.ValueTypeName="vector";var Cl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},c_=new Cl,Pl=class{constructor(t){this.manager=t!==void 0?t:c_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ao=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ro=class extends Ao{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ga=new ie,Wh=new C,Xh=new C,Ll=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wh),Xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xh),e.updateMatrixWorld(),Ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Il=class extends Ll{constructor(){super(new ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Co=class extends Ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Il}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wl="\\[\\]\\.:\\/",h_=new RegExp("["+Wl+"]","g"),Xl="[^"+Wl+"]",u_="[^"+Wl.replace("\\.","")+"]",f_=/((?:WC+[\/:])*)/.source.replace("WC",Xl),d_=/(WCOD+)?/.source.replace("WCOD",u_),p_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),m_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),g_=new RegExp("^"+f_+d_+p_+m_+"$"),__=["material","materials","bones","map"],Dl=class{constructor(t,e,n){let i=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(h_,"")}static parseTrackName(t){let e=g_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);__.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=Dl;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ux=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);var vs=typeof GameGlobal!="undefined"?GameGlobal:typeof window!="undefined"?window:{},kt=typeof wx!="undefined"?wx:vs.wx,du=kt.createCanvas();function xn(s,t){let e=kt.createCanvas();return e.width=s,e.height=t,e}function ql(){let s=null;try{s=kt.getWindowInfo?kt.getWindowInfo():kt.getSystemInfoSync()}catch(r){s=kt.getSystemInfoSync()}let t=s.windowWidth,e=s.windowHeight,n=s.safeArea&&s.safeArea.top?s.safeArea.top:0,i=null;try{i=kt.getMenuButtonBoundingClientRect?kt.getMenuButtonBoundingClientRect():null}catch(r){i=null}return i&&!(i.width>0)&&(i=null),{width:t,height:e,pixelRatio:s.pixelRatio||1,safeTop:n,menu:i}}function pu(){try{let s=kt.getDeviceInfo?kt.getDeviceInfo():kt.getSystemInfoSync();return typeof s.benchmarkLevel=="number"?s.benchmarkLevel:-1}catch(s){return-1}}function Yl(s,t){try{let e=kt.getStorageSync(s);return e===""||e===void 0||e===null?t:e}catch(e){return t}}function Zl(s,t){try{kt.setStorageSync(s,t)}catch(e){}}function js(s){try{kt.vibrateShort({type:s?"heavy":"light"})}catch(t){}}var An=vs.__MD_OPTS||{},$l=s=>typeof requestAnimationFrame!="undefined"?requestAnimationFrame(s):vs.requestAnimationFrame(s);var qt={jumpDuration:.74,jumpHeight:1.3,slideDuration:.78,laneSpeed:13,staminaDrain:.65,hitStamina:12,hitSlow:.38,invulnerable:1.4,gelStamina:34,gelBoost:1.14,gelBoostTime:5,maxGels:2,comboSpeedStep:.006,comboSpeedMax:.08},$t=[{name:"\u5C71\u811A\u70ED\u8EAB",from:0,to:300,speed:9.5,grade:.03,gap:1.95,biome:{pine:6,leaf:14,rock:8,grass:1,bush:10,flower:1,rocky:0,snow:0},atmo:{elev:17,az:-115,sun:[1,.76,.52],sunI:3.6,top:[.22,.4,.68],fog:[.93,.79,.64],fogD:.0042,hemiSky:[.66,.74,.92],hemiGround:[.42,.34,.22],hemiI:1.9,cloud:.46}},{name:"\u7B2C\u4E00\u9053\u5C71\u810A",from:300,to:650,speed:10.5,grade:.08,gap:1.7,biome:{pine:16,leaf:8,rock:14,grass:.9,bush:8,flower:.6,rocky:.15,snow:0},atmo:{elev:29,az:-128,sun:[1,.9,.74],sunI:3.6,top:[.16,.38,.76],fog:[.74,.83,.93],fogD:.0032,hemiSky:[.62,.76,1],hemiGround:[.4,.38,.26],hemiI:1.7,cloud:.4}},{name:"\u5BC6\u6797\u7A7F\u8D8A",from:650,to:1050,speed:11.5,grade:.04,gap:1.5,biome:{pine:64,leaf:10,rock:10,grass:.7,bush:14,flower:.2,rocky:0,snow:0},atmo:{elev:42,az:-100,sun:[1,.95,.82],sunI:3.4,top:[.2,.42,.72],fog:[.68,.78,.76],fogD:.0062,hemiSky:[.58,.74,.86],hemiGround:[.3,.36,.22],hemiI:1.55,cloud:.56}},{name:"\u788E\u77F3\u9661\u5761",from:1050,to:1400,speed:12.2,grade:.12,gap:1.4,biome:{pine:5,leaf:0,rock:46,grass:.35,bush:4,flower:.1,rocky:1,snow:0},atmo:{elev:57,az:-140,sun:[1,.98,.92],sunI:3.6,top:[.12,.33,.8],fog:[.76,.84,.95],fogD:.0026,hemiSky:[.6,.76,1],hemiGround:[.46,.42,.36],hemiI:1.6,cloud:.26}},{name:"\u4E91\u7AEF\u5C71\u810A",from:1400,to:1750,speed:13,grade:.05,gap:1.3,biome:{pine:8,leaf:0,rock:30,grass:.5,bush:3,flower:.3,rocky:.55,snow:1},atmo:{elev:34,az:-72,sun:[1,.93,.84],sunI:3.4,top:[.14,.3,.7],fog:[.87,.91,.96],fogD:.0048,hemiSky:[.7,.8,1],hemiGround:[.5,.5,.5],hemiI:1.8,cloud:.7}},{name:"\u51B2\u523A\u7EC8\u70B9",from:1750,to:2e3,speed:14,grade:-.07,gap:1.2,biome:{pine:20,leaf:12,rock:12,grass:.9,bush:10,flower:.8,rocky:0,snow:.15},atmo:{elev:11,az:-38,sun:[1,.58,.3],sunI:3.8,top:[.2,.28,.56],fog:[.98,.67,.46],fogD:.0036,hemiSky:[.7,.62,.78],hemiGround:[.42,.3,.22],hemiI:1.9,cloud:.52}}],Uo=[{name:"\u963F\u5CF0",shirt:3112920,shoe:2213887,cap:2306111,lane:-1,start:.9,curve:[1.02,1.03,1.045,1.065,1.08,1.09]},{name:"\u8001\u5468",shirt:15330286,shoe:16742938,cap:10134445,lane:1,start:.9,curve:[1.04,1.04,1.035,1.035,1.03,1.035]},{name:"\u5C0F\u91CE",shirt:14235727,shoe:16731533,cap:2763310,lane:0,start:2.3,curve:[1.1,1.08,1.04,1,.975,.97]}];function ys(s){for(let t=0;t<$t.length;t++)if(s<$t[t].to)return t;return $t.length-1}function an(s,t,e){return s<t?t:s>e?e:s}function Di(s,t,e){let n=an((e-s)/(t-s),0,1);return n*n*(3-2*n)}function Qe(s,t,e){return s+(t-s)*e}function Kn(s,t,e=60){let n=ys(s),i=$t[n],r=t(i),o=e/2;if(n>0&&s-i.from<o){let a=.5+.5*(s-i.from)/o;return Qe(t($t[n-1]),r,a*a*(3-2*a))}if(n<$t.length-1&&i.to-s<o){let a=.5-.5*(i.to-s)/o;return Qe(r,t($t[n+1]),a*a*(3-2*a))}return r}function mu(s){let t=$t.length,e=n=>(n.from+n.to)/2;if(s<=e($t[0]))return{a:0,b:0,t:0};for(let n=0;n<t-1;n++){let i=e($t[n]),r=e($t[n+1]);if(s<r){let o=(s-i)/(r-i);return{a:n,b:n+1,t:o*o*(3-2*o)}}}return{a:t-1,b:t-1,t:0}}function tn(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Qs=256,tr=new Uint8Array(Qs*2),Jl=new Float32Array(Qs);{let s=tn(20261113),t=[];for(let e=0;e<Qs;e++)t.push(e),Jl[e]=s();for(let e=Qs-1;e>0;e--){let n=Math.floor(s()*(e+1)),i=t[e];t[e]=t[n],t[n]=i}for(let e=0;e<Qs*2;e++)tr[e]=t[e&255]}function No(s,t){return Jl[tr[(s&255)+tr[t&255]]]}function Je(s,t){let e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,o=i*i*i*(i*(i*6-15)+10),a=r*r*r*(r*(r*6-15)+10),l=No(e,n),c=No(e+1,n),h=No(e,n+1),u=No(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+u)*o*a}function er(s,t,e=4){let n=.5,i=0,r=0;for(let o=0;o<e;o++)i+=n*Je(s,t),r+=n,s=s*2.03+17.1,t=t*2.03+9.7,n*=.5;return i/r}function Kl(s,t,e=4){let n=.5,i=0,r=0;for(let o=0;o<e;o++){let a=1-Math.abs(Je(s,t)*2-1);i+=n*a*a,r+=n,s=s*2.1+31.3,t=t*2.1+11.9,n*=.5}return i/r}function x_(s,t,e,n){let i=Math.floor(s),r=Math.floor(t),o=s-i,a=t-r,l=o*o*(3-2*o),c=a*a*(3-2*a),h=(_,m)=>{let p=(_%e+e)%e,v=(m%e+e)%e;return Jl[tr[p+n+tr[v+n*7&255]&255]]},u=h(i,r),f=h(i+1,r),d=h(i,r+1),g=h(i+1,r+1);return u+(f-u)*l+(d-u)*c+(u-f-d+g)*l*c}function Ms(s,t,e,n,i){let r=.5,o=0,a=0,l=e;for(let c=0;c<n;c++)o+=r*x_(s*l,t*l,l,i+c*13),a+=r,r*=.5,l*=2;return o/a}var Rn=null,Cn=null;function Ss(){if(Rn)return Rn;let s=256,t=new Uint8Array(s*s*4);for(let e=0;e<s;e++)for(let n=0;n<s;n++){let i=n/s,r=e/s,o=(e*s+n)*4;t[o]=Math.round(255*Ms(i,r,4,5,1)),t[o+1]=Math.round(255*Ms(i,r,8,4,37)),t[o+2]=Math.round(255*Ms(i,r,24,3,71)),t[o+3]=Math.round(255*Ms(i,r,64,2,113))}return Rn=new Yn(t,s,s,Ae),Rn.wrapS=Rn.wrapT=di,Rn.magFilter=oe,Rn.minFilter=En,Rn.generateMipmaps=!0,Rn.needsUpdate=!0,Rn}function gu(){if(Cn)return Cn;let s=256,t=new Float32Array(s*s);for(let r=0;r<s;r++)for(let o=0;o<s;o++){let a=o/s,l=r/s;t[r*s+o]=Ms(a,l,6,5,5)*.7+Ms(a,l,40,2,91)*.3}let e=new Uint8Array(s*s*4),n=(r,o)=>t[(o+s)%s*s+(r+s)%s],i=9;for(let r=0;r<s;r++)for(let o=0;o<s;o++){let a=(n(o+1,r)-n(o-1,r))*i,l=(n(o,r+1)-n(o,r-1))*i,c=Math.sqrt(a*a+l*l+1),h=(r*s+o)*4;e[h]=Math.round(255*(.5-.5*a/c)),e[h+1]=Math.round(255*(.5-.5*l/c)),e[h+2]=Math.round(255*(.5+.5/c)),e[h+3]=255}return Cn=new Yn(e,s,s,Ae),Cn.wrapS=Cn.wrapT=di,Cn.magFilter=oe,Cn.minFilter=En,Cn.generateMipmaps=!0,Cn.needsUpdate=!0,Cn}var Fo=-400,v_=2700;function pe(s){return Di(15,130,s)*(14*Math.sin(s*.011)+7*Math.sin(s*.027+1.3)+3*Math.sin(s*.058+.5))}function y_(s){return pe(s+.5)-pe(s-.5)}function nr(s){return-Math.atan(y_(s))}var Pn=new Float32Array(v_-Fo+1);{let s=0;for(let e=0;e<Pn.length;e++){let n=Fo+e;Pn[e]=s;let i=Kn(n,r=>r.grade,140);n<0&&(i=.02),n>2e3&&(i=-.03),i+=.052*Math.cos(n*.013)+.066*Math.cos(n*.037+2),s+=i}let t=Pn[-Fo];for(let e=0;e<Pn.length;e++)Pn[e]-=t}function Ce(s){let t=s-Fo;t<0&&(t=0),t>Pn.length-1.001&&(t=Pn.length-1.001);let e=Math.floor(t),n=t-e;return Pn[e]+(Pn[e+1]-Pn[e])*n}function Oo(s){return(Ce(s+1)-Ce(s-1))*.5}function M_(s){return .38*Math.sin(s*.0075+.7)+.2*Math.sin(s*.019+2.1)}function jn(s,t){let e=Ce(t),n=s-pe(t),i=Math.abs(n)-3.1;if(i<=0)return e;let r=n>0?1:-1,o=e;return o+=.22*Di(0,1.3,i),o+=r*M_(t)*i*(1-.32*Di(50,220,i)),o+=Di(.5,6,i)*1.1*(er(s*.085,t*.085,2)-.5),o+=Di(5,90,i)*36*(er(s*.0068+50,t*.0068,4)-.44),o+=Di(40,200,i)*30*(Je(s*.0031+7,t*.0031+3)-.35),o}function _u(s,t,e){let i=jn(s+.6,t)-jn(s-.6,t),r=jn(s,t+.6)-jn(s,t-.6),o=-i,a=2*.6,l=r,c=Math.sqrt(o*o+a*a+l*l);return e[0]=o/c,e[1]=a/c,e[2]=l/c,e}function vn(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new ae,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=xu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=xu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function xu(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new t(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new Vt(o,e,n);return i!==void 0&&(l.gpuType=i),l}function jl(s,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let v=0,x=a.length;v<x;v++){let b=a[v],R=s.attributes[b];l[b]=new Vt(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);let S=s.morphAttributes[b];S&&(c[b]=new Vt(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized))}let d=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=d*_;for(let v=0;v<r;v++){let x=n?n.getX(v):v,b="";for(let R=0,S=a.length;R<S;R++){let w=a[R],I=s.getAttribute(w),y=I.itemSize;for(let E=0;E<y;E++)b+=`${~~(I[u[E]](x)*_+m)},`}if(b in e)h.push(e[b]);else{for(let R=0,S=a.length;R<S;R++){let w=a[R],I=s.getAttribute(w),y=s.morphAttributes[w],E=I.itemSize,U=l[w],G=c[w];for(let Y=0;Y<E;Y++){let L=u[Y],N=f[Y];if(U[N](o,I[L](x)),y)for(let H=0,q=y.length;H<q;H++)G[H][N](o,y[H][L](x))}}e[b]=o,h.push(o),o++}}let p=s.clone();for(let v in s.attributes){let x=l[v];if(p.setAttribute(v,new Vt(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),v in c)for(let b=0;b<c[v].length;b++){let R=c[v][b];p.morphAttributes[v][b]=new Vt(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return p.setIndex(h),p}function tc(s,{repeatX:t=!1}={}){let e=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,e,n).data,r=0,o=0,a=0,l=0;for(let u=0;u<i.length;u+=4)i[u+3]>200&&(r+=i[u],o+=i[u+1],a+=i[u+2],l++);l=Math.max(1,l),r=Math.round(r/l),o=Math.round(o/l),a=Math.round(a/l);let c=new Uint8Array(e*n*4);for(let u=0;u<n;u++){let f=(n-1-u)*e*4,d=u*e*4;for(let g=0;g<e*4;g+=4){let _=i[f+g+3];_<8?(c[d+g]=r,c[d+g+1]=o,c[d+g+2]=a,c[d+g+3]=0):(c[d+g]=i[f+g],c[d+g+1]=i[f+g+1],c[d+g+2]=i[f+g+2],c[d+g+3]=_)}}let h=new Yn(c,e,n,Ae);return h.colorSpace=ge,h.needsUpdate=!0,h.wrapS=t?di:je,h.wrapT=je,h.magFilter=oe,h.minFilter=En,h.generateMipmaps=!0,h}function Ql(s,t,e,n,i,r){s.save(),s.translate(t,e),s.rotate(r),s.scale(1,i/n),s.beginPath(),s.arc(0,0,n,0,Math.PI*2),s.restore()}function Ke(s,t,e,n=1){return`rgba(${Math.round(s)},${Math.round(t)},${Math.round(e)},${n})`}var vu=.955,ec=.88;function yu(s,t,e,n){s.globalCompositeOperation="source-over",s.fillStyle=Ke(n[0],n[1],n[2]),s.fillRect(0,0,t,24);for(let i=0;i<90;i++){let r=.6+e()*.7;s.fillStyle=Ke(n[0]*r,n[1]*r,n[2]*r),s.fillRect(e()*t,0,1+e()*3,24)}}function Mu(){let e=xn(256,128),n=e.getContext("2d");n.clearRect(0,0,256,128);let i=tn(4242),r=(o,a,l,c,h)=>{let u=o+l,f=128-a,d=n.createLinearGradient(0,128,0,f),g=.75+i()*.5;d.addColorStop(0,Ke(64*g,96*g,34*g)),d.addColorStop(.55,Ke((92+h*60)*g,(132+h*20)*g,44*g)),d.addColorStop(1,Ke((150+h*60)*g,(176+h*14)*g,(70+h*20)*g)),n.fillStyle=d,n.beginPath(),n.moveTo(o-c,128),n.quadraticCurveTo(o-c*.6+l*.25,128-a*.6,u,f),n.quadraticCurveTo(o+c*.9+l*.35,128-a*.55,o+c,128),n.closePath(),n.fill()};for(let o=0;o<150;o++)r(8+i()*240,16+i()*34,(i()-.5)*22,2.2+i()*1.6,i()*i());for(let o=0;o<46;o++)r(10+i()*236,40+i()*46,(i()-.5)*40,1.8+i()*1.4,i()*i());for(let o=0;o<16;o++)r(14+i()*228,78+i()*44,(i()-.5)*46,1.6+i()*1.2,i());for(let o=0;o<6;o++){let a=16+i()*224,l=86+i()*36,c=(i()-.5)*30;n.strokeStyle=Ke(150,142,80),n.lineWidth=1.2,n.beginPath(),n.moveTo(a,128),n.quadraticCurveTo(a+c*.3,128-l*.6,a+c,128-l),n.stroke(),n.fillStyle=Ke(186,170,104),Ql(n,a+c,128-l,2.2,6,c*.02),n.fill()}return tc(e)}function Su(){let e=xn(256,256),n=e.getContext("2d");n.clearRect(0,0,256,256);let i=tn(9001),r=l=>{for(let c of[-256,0,256])n.save(),n.translate(c,0),l(),n.restore()},o=n.createLinearGradient(0,0,0,256);o.addColorStop(0,Ke(30,60,32)),o.addColorStop(.5,Ke(36,72,36)),o.addColorStop(.62,Ke(40,78,38,0)),n.fillStyle=o,n.fillRect(0,0,256,256*.66),n.fillStyle=Ke(32,64,34),n.fillRect(0,0,256,256*.42);let a=54;for(let l=0;l<a;l++){let c=i()*256,h=256*(.18+i()*.3),u=256*(.34+i()*.46),f=Math.min(254,h+u),d=9+i()*13,g=(i()-.5)*26,_=.7+i()*.6,m=Ke(44*_,90*_,42*_);r(()=>{n.fillStyle=m,n.beginPath(),n.moveTo(c-d,h),n.quadraticCurveTo(c-d*.8+g*.4,(h+f)/2,c+g,f),n.quadraticCurveTo(c+d*.8+g*.4,(h+f)/2,c+d,h),n.closePath(),n.fill()})}for(let l=0;l<2600;l++){let c=i()*256,h=i()*256,u=h/256,f=5+i()*9,d=Math.PI/2+(i()-.5)*1.3,g=.55+i()*.75,_=.5+u*.9;n.strokeStyle=Ke(58*g*_,112*g*_,50*g*_,.9),n.lineWidth=1+i()*.8,n.globalCompositeOperation="source-atop",r(()=>{n.beginPath(),n.moveTo(c,h),n.lineTo(c+Math.cos(d)*f,h+Math.sin(d)*f),n.stroke()})}return yu(n,256,i,[104,78,54]),tc(e,{repeatX:!0})}function bu(){let e=xn(256,256),n=e.getContext("2d"),i=tn(7077);n.fillStyle=Ke(48,86,30),n.fillRect(0,0,256,256);for(let r=0;r<4200;r++){let o=i()*256,a=i()*256,l=2.2+i()*3.6,c=.55+i()*.8,h=i()<.12?40:0,u=i()*Math.PI;n.fillStyle=Ke((66+h)*c,116*c,38*c);for(let f of[-256,0,256])for(let d of[-256,0,256])Ql(n,o+f,a+d,l,l*.55,u),n.fill()}n.globalCompositeOperation="destination-out";for(let r=0;r<260;r++){let o=i()*256,a=i()*256,l=2.5+i()*5,c=l*(.5+i()*.5),h=i()*Math.PI;for(let u of[-256,0,256])for(let f of[-256,0,256])Ql(n,o+u,a+f,l,c,h),n.fill()}return yu(n,256,i,[116,96,74]),tc(e,{repeatX:!0})}function Qn(s){let t=s.onBeforeCompile,e=s.customProgramCacheKey;s.onBeforeCompile=(i,r)=>{t&&t(i,r),i.fragmentShader=i.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      #ifdef USE_MAP
        diffuseColor.rgb = pow(max(diffuseColor.rgb, vec3(0.0)), vec3(2.2));
      #endif`)};let n=Object.prototype.hasOwnProperty.call(s,"customProgramCacheKey");return s.customProgramCacheKey=()=>(n?e.call(s):"")+"|srgbmap",s}var ir=new ft;function se(s,t,e){return new ft().setRGB(s,t,e,ue)}function ke(s,t){let e=s.attributes.position,n=s.attributes.normal,i=new Float32Array(e.count*3),r=new C,o=new C;for(let a=0;a<e.count;a++){r.fromBufferAttribute(e,a),n&&o.fromBufferAttribute(n,a);let l=t(r,o,a);i[a*3]=l.r,i[a*3+1]=l.g,i[a*3+2]=l.b}return s.setAttribute("color",new Vt(i,3)),s}function ic(s){return s.deleteAttribute("uv"),s}function Pu(s,t=2){let e=s.attributes.uv;for(let n=0;n<e.count;n++)e.setXY(n,e.getX(n)*t,vu);return s}function Bo(s,t=7,e=8){let n=tn(s),i=[],r=new De(.01,.034,1,5,1,!0);r.translate(0,.5,0),Pu(r),ke(r,()=>ir.setScalar(.75+n()*.4).clone()),i.push(r);let o=Math.pow(7/t,.8);for(let l=0;l<t;l++){let c=l/(t-1),h=.3*(1-c*.8)*(.9+n()*.2),u=Math.min(.98-(.1+c*.62),(.34-c*.1)*o),f=.1+c*.62,d=new bo(h,u,e,1,!0);d.rotateY(n()*6.28);let g=d.attributes.position,_=d.attributes.uv,m=Math.max(1,Math.round(3-c*2)),p=n();for(let v=0;v<g.count;v++){let x=g.getY(v);if(x<0){let b=.82+n()*.36;g.setX(v,g.getX(v)*b),g.setZ(v,g.getZ(v)*b),g.setY(v,x-n()*.04)}_.setXY(v,_.getX(v)*m+p,_.getY(v)*ec)}d.translate(0,f+u/2,0),ke(d,v=>{let x=v.y>f+u*.4;return ir.setScalar(x?.55:.95+n()*.35).clone()}),i.push(d)}let a=vn(i);return a.computeBoundingSphere(),a}function Lu(s,t,e,n,i,r,o,a=1){let l=new Js(1,a);l.deleteAttribute("normal"),l=jl(l,.001);let c=l.attributes.position,h=l.attributes.uv;for(let u=0;u<c.count;u++){let f=c.getX(u),d=c.getY(u),g=c.getZ(u),_=.74+.5*Je(f*2.3+s,d*2.3+g*1.9);c.setXYZ(u,f*t*_+e,d*t*_*r+n,g*t*_+i),h.setXY(u,h.getX(u)*2,h.getY(u)*ec)}return l.computeVertexNormals(),ke(l,(u,f)=>ir.setScalar(Io.clamp(.62+f.y*.45+(o()-.5)*.2,.4,1.25)).clone()),l}function Eu(s,t=1){let e=tn(s),n=[],i=new De(.028,.05,.6,6,1,!0);i.translate(0,.3,0),Pu(i),ke(i,()=>ir.setScalar(.7+e()*.4).clone()),n.push(i);let r=5;for(let a=0;a<r;a++){let l=a===0?.31:.18+e()*.12,c=e()*6.28,h=a===0?0:.15+e()*.12,u=a===0?.69:.5+e()*.33;n.push(Lu(s+a*7.1,l,Math.cos(c)*h,u,Math.sin(c)*h,.82,e,t))}let o=vn(n);return o.computeBoundingSphere(),o}function wu(s,t=1){let e=tn(s),n=[];for(let r=0;r<2;r++){let o=e()*6.28,a=r===0?0:.3;n.push(Lu(s+r*3.3,r===0?.5:.36,Math.cos(o)*a,r===0?.3:.2,Math.sin(o)*a,.7,e,t))}let i=vn(n);return i.computeBoundingSphere(),i}function Es(s,t=2){let e=new Js(1,t);e.deleteAttribute("uv"),e.deleteAttribute("normal"),e=jl(e,.001);let n=e.attributes.position,i=s*13.37;for(let l=0;l<n.count;l++){let c=n.getX(l),h=n.getY(l),u=n.getZ(l),f=.62+.5*Je(c*1.3+i,h*1.3+u*1.1+i);f+=.22*Je(c*3.1+u*2.2+i,h*3.1-u*1.7),f+=.07*Je(c*7.3+i,h*7.3+u*6.1);let d=c*.55+h*.6+u*.3;d>.62&&(f*=1-(d-.62)*.7),n.setXYZ(l,c*f,h*f*.72,u*f*.9)}e.computeVertexNormals();let r=se(.36,.35,.34),o=se(.66,.63,.58),a=se(.3,.38,.16);return ke(e,(l,c)=>{let h=Je(l.x*2.1+i,l.y*2.6+l.z*1.8),u=r.clone().lerp(o,h),f=Io.smoothstep(c.y,.55,.9)*Io.smoothstep(Je(l.x*1.4+9+i,l.z*1.4),.45,.7);return u.lerp(a,f*.75)}),e.computeBoundingSphere(),e}function S_(){let s=[],t=[],e=[],n=[];for(let a=0;a<3;a++){let l=a/3*Math.PI+.3,c=Math.cos(l)*.5,h=Math.sin(l)*.5,u=s.length/3;s.push(-c,0,-h,c,0,h,c,.46,h,-c,.46,-h),t.push(0,0,1,0,1,1,0,1);for(let f=0;f<4;f++)e.push(0,1,0);n.push(u,u+1,u+2,u,u+2,u+3)}let o=new ae;return o.setAttribute("position",new Yt(s,3)),o.setAttribute("normal",new Yt(e,3)),o.setAttribute("uv",new Yt(t,2)),o.setIndex(n),o.computeBoundingSphere(),o}function b_(){let s=[],t=se(.3,.46,.15),e=new ft(1,1,1);for(let o=0;o<2;o++){let a=o*2.6+.4,l=.06,c=.26+o*.09,h=ic(new De(.006,.008,c,3,1,!0));h.translate(Math.cos(a)*l,c/2,Math.sin(a)*l),ke(h,()=>t.clone());let u=ic(new wo(.045,0));u.scale(1,.6,1),u.translate(Math.cos(a)*l,c,Math.sin(a)*l),ke(u,()=>e.clone()),s.push(h.toNonIndexed(),u)}let n=vn(s),i=n.attributes.position,r=new Float32Array(i.count*3);for(let o=0;o<i.count;o++)r[o*3+1]=1;return n.setAttribute("normal",new Vt(r,3)),n.computeBoundingSphere(),n}function E_(){let s=ic(new De(.012,.012,1.1,4,1,!0));s.translate(0,.55,0),ke(s,()=>se(.85,.85,.82));let t=new ae;t.setAttribute("position",new Yt([0,1.08,0,0,.8,0,.36,.94,.03],3)),t.setAttribute("normal",new Yt([0,0,1,0,0,1,0,0,1],3)),t.setIndex([0,1,2]),ke(t,()=>se(1,.36,.05));let e=vn([s.toNonIndexed(),t.toNonIndexed()]);return e.computeBoundingSphere(),e}function ko(s,t=.6,e=.5){let n=Ss();return s.onBeforeCompile=i=>{i.uniforms.uGrainTex={value:n},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGrainPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 grainP = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          grainP = instanceMatrix * grainP;
        #endif
        vGrainPos = (modelMatrix * grainP).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uGrainTex;
varying vec3 vGrainPos;`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          vec3 gp = vGrainPos * ${t.toFixed(3)};
          float ga = texture2D(uGrainTex, gp.xz + gp.y * 0.37).b;
          float gb = texture2D(uGrainTex, gp.xy * 3.1 + gp.z * 0.53).a;
          float gc = texture2D(uGrainTex, gp.zy * 0.31 + gp.x * 0.11).r;
          float grain = (ga * 0.45 + gb * 0.3 + gc * 0.25);
          diffuseColor.rgb *= 1.0 + (grain - 0.5) * ${(e*2).toFixed(3)};
        }`)},s.customProgramCacheKey=()=>`grain-${t}-${e}`,s}var zo=null;function sc(){if(zo)return zo;let s={value:0},t=new gi({map:Mu(),alphaTest:.35,side:Pe});t.onBeforeCompile=r=>{r.uniforms.uTime=s,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec2 ip = instanceMatrix[3].xz;
          float gw = uv.y * uv.y;
          transformed.x += sin(uTime * 1.9 + ip.x * 0.31 + ip.y * 0.17) * 0.11 * gw;
          transformed.z += cos(uTime * 1.4 + ip.x * 0.23 - ip.y * 0.29) * 0.07 * gw;
        #endif`)},t.customProgramCacheKey=()=>"grass-wind",Qn(t);let e=Qn(new gi({map:Su(),alphaTest:.45,vertexColors:!0,side:Pe})),n=Qn(new gi({map:bu(),alphaTest:.45,vertexColors:!0,side:Pe})),i=ko(new He({vertexColors:!0,roughness:.92,metalness:0}),.55,.55);return zo={windUniform:s,pine:[Bo(11),Bo(29)],leaf:Eu(5),rock:Es(1,1),grass:S_(),bush:wu(8),lod:{pineA:Bo(11,4,6),pineB:Bo(29,4,6),leaf:Eu(5,0),rock:Es(1,0),bush:wu(8,0)},flower:b_(),marker:E_(),grassMat:t,pineMat:e,leafMat:n,rockMat:i,flowerMat:new gi({vertexColors:!0}),markerMat:new gi({vertexColors:!0,side:Pe})},zo}var w_=34,Ln={pineA:48,pineB:48,leaf:22,rock:56,grass:1500,bush:20,flower:170,marker:3},Tu=new ie,Au=new wn,Ru=new fs,T_=new C,A_=new C,Cu=[se(1,.82,.15),se(.98,.97,.92),se(.62,.42,.9),se(1,.55,.2),se(.95,.5,.65)],R_=se(1,.8,.1),nc=se(.93,.95,.98),Ho=class{constructor(t){let e=sc(),n=(i,r,o,a,l)=>{let c=new go(i,r,o);return c.castShadow=a,c.receiveShadow=l,c.count=0,c.instanceMatrix.setUsage(Jn),c.setColorAt(0,ir.set(16777215)),c.instanceColor.setUsage(Jn),a&&(c.shadowCount=0,c.onBeforeShadow=()=>{c.fullCount=c.count,c.count=Math.max(1,Math.min(c.count,c.shadowCount))},c.onAfterShadow=()=>{c.count=c.fullCount}),t.add(c),c};this.meshes={pineA:n(e.pine[0],e.pineMat,Ln.pineA,!0,!1),pineB:n(e.pine[1],e.pineMat,Ln.pineB,!0,!1),leaf:n(e.leaf,e.leafMat,Ln.leaf,!0,!1),rock:n(e.rock,e.rockMat,Ln.rock,!0,!0),grass:n(e.grass,e.grassMat,Ln.grass,!1,!0),bush:n(e.bush,e.leafMat,Ln.bush,!1,!0),flower:n(e.flower,e.flowerMat,Ln.flower,!1,!1),marker:n(e.marker,e.markerMat,Ln.marker,!0,!1)},this.counts={},this.hiGeo={};for(let i in e.lod)this.hiGeo[i]=this.meshes[i].geometry;this.lodGeo=e.lod,this.lod=0}setLod(t){if(t!==this.lod){this.lod=t;for(let e in this.lodGeo)this.meshes[e].geometry=t?this.lodGeo[e]:this.hiGeo[e]}}_put(t,e,n,i,r,o,a,l,c,h,u){let f=this.meshes[t],d=this.counts[t];d>=Ln[t]||(Ru.set(o,r,a,"YXZ"),Au.setFromEuler(Ru),Tu.compose(T_.set(e,n,i),Au,A_.set(l,c,h)),f.setMatrixAt(d,Tu),f.setColorAt(d,u),this.counts[t]=d+1)}populate(t,e,n){let i=tn(t*7919+101);for(let S in this.meshes)this.counts[S]=0;let r=e+n/2,o=S=>Kn(r,w=>w.biome[S],80),a=o("snow"),l=o("rocky"),c=new ft,h=[],u={},f=(S,w,I,y,E,U,G,Y,L,N,H,q)=>h.push([S,w,I,y,E,U,G,Y,L,N,H,q.r,q.g,q.b]),d=()=>{h.sort((S,w)=>S[1]-w[1]);for(let S of h)this._put(S[0],S[2],S[3],S[4],S[5],S[6],S[7],S[8],S[9],S[10],c.setRGB(S[11],S[12],S[13])),S[1]<w_&&(u[S[0]]=this.counts[S[0]]);h.length=0},g=(S,w,I)=>{let y=e+i()*n,E=i()<.5?-1:1,U=S+w*Math.pow(i(),I),G=pe(y)+E*(3.1+U);return{s:y,x:G,e:U,y:jn(G,y)}},_=Math.round(o("pine")*1.4*(.85+i()*.3));for(let S=0;S<_;S++){let w=g(3.6,140,1.7),I=7+i()*9,y=I*(.8+i()*.35);c.setRGB(.8+i()*.45,.85+i()*.4,.8+i()*.4).lerp(nc,a*.35*i()),f(i()<.5?"pineA":"pineB",w.e,w.x,w.y-.15,-w.s,i()*6.28,(i()-.5)*.08,(i()-.5)*.08,y,I,y,c)}d();let m=Math.round(o("leaf")*(.8+i()*.4));for(let S=0;S<m;S++){let w=g(4.5,130,1.5),I=5+i()*5;c.setRGB(.85+i()*.4,.9+i()*.35,.75+i()*.4),i()<.18&&c.setRGB(1.7,1.15,.55),f("leaf",w.e,w.x,w.y-.1,-w.s,i()*6.28,0,0,I*(.9+i()*.4),I,I*(.9+i()*.4),c)}d();let p=Math.round(o("rock")*(.8+i()*.4));for(let S=0;S<p;S++){let w=g(.9,110,2),I=Math.min(1,w.e/30),y=.28+i()*i()*(1.2+I*2.4)+l*.25,E=.8+i()*.45;c.setRGB(E,E*(.96+i()*.06),E*(.92+i()*.08)).lerp(nc,a*.25*i()),f("rock",w.e,w.x,w.y-y*.2,-w.s,i()*6.28,(i()-.5)*.7,(i()-.5)*.7,y*(.8+i()*.5),y*(.7+i()*.5),y*(.8+i()*.5),c)}d();let v=Math.round(Ln.grass*o("grass"));for(let S=0;S<v;S++){let w=g(-.15,30,1.7),I=.65+i()*.7,y=i()*i(),E=.85+i()*.4;c.setRGB(E*(1+y*.7),E*(1+y*.25),E*(1-y*.3)).lerp(nc,a*.25*i()),this._put("grass",w.x,w.y-.03,-w.s,i()*6.28,0,0,I,I*(.6+i()*.7),I,c)}let x=Math.round(o("bush")*(.8+i()*.4));for(let S=0;S<x;S++){let w=g(1.8,70,1.6),I=.8+i()*1.3;if(c.setRGB(.85+i()*.4,.9+i()*.3,.8+i()*.3),this._put("bush",w.x,w.y-.08,-w.s,i()*6.28,0,0,I,I*(.8+i()*.4),I,c),w.e<30&&i()<.6)for(let y=0;y<5;y++){let E=i()*6.28,U=i()*.42*I;this._put("flower",w.x+Math.cos(E)*U,w.y+I*(.42-U/I*.3),-w.s+Math.sin(E)*U,i()*6.28,0,0,1.3,.6,1.3,R_)}}let b=Math.round(110*o("flower")*(.7+i()*.3));for(let S=0;S<b;S++){let w=g(.2,20,1.6),I=.9+i()*.8;this._put("flower",w.x,w.y,-w.s,i()*6.28,0,0,I,I,I,Cu[Math.floor(i()*Cu.length)])}c.set(16777215);let R=1+(i()<.4?1:0);for(let S=0;S<R;S++){let w=e+(S+.3+i()*.4)*(n/R),I=i()<.5?-1:1,y=pe(w)+I*(3.1+.35);this._put("marker",y,jn(y,w)-.05,-w,I>0?0:Math.PI,0,(i()-.5)*.2,1,1,1,c)}for(let S in this.meshes){let w=this.meshes[S];w.count=this.counts[S],w.castShadow&&(w.shadowCount=S==="marker"?w.count:u[S]||0),w.visible=w.count>0,w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),w.count>0&&w.computeBoundingSphere()}}setNear(t){this.meshes.grass.visible=t&&this.meshes.grass.count>0,this.meshes.flower.visible=t&&this.meshes.flower.count>0}};var sr=40,Iu=2,Go=sr/Iu+1,Vo=[0,.75,1.5,2.25,3.1,3.7,4.5,5.6,7.2,9.5,12.5,16.5,22,29,39,52,70,94,124,160,205,260],Xo=[];for(let s=Vo.length-1;s>0;s--)Xo.push(-Vo[s]);for(let s=0;s<Vo.length;s++)Xo.push(Vo[s]);var ws=Xo.length;function C_(){let s=new He({color:16777215,roughness:.95,metalness:0,normalMap:gu(),normalScale:new ot(.85,.85)}),t=Ss();return s.onBeforeCompile=e=>{e.uniforms.uNoise={value:t},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        attribute float aTrail;
        attribute vec2 aBiome;
        varying float vTrail;
        varying vec2 vBiome;
        varying vec3 vWPos;
        varying vec3 vWNrm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vTrail = aTrail;
        vBiome = aBiome;
        vWPos = position;
        vWNrm = normal;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uNoise;
        varying float vTrail;
        varying vec2 vBiome;
        varying vec3 vWPos;
        varying vec3 vWNrm;`).replace("#include <color_fragment>",`
        {
          vec2 wp = vWPos.xz;
          vec4 nL = texture2D(uNoise, wp * 0.0037);
          vec4 nM = texture2D(uNoise, wp * 0.031);
          vec4 nS = texture2D(uNoise, wp * 0.21);
          vec4 nT = texture2D(uNoise, wp * 1.3);
          float ad = abs(vTrail);

          // \u5C71\u5F84\u8FB9\u7F18\u7528\u566A\u58F0\u6253\u6563\uFF0C\u907F\u514D\u4E00\u6761\u7B14\u76F4\u7684\u5206\u754C\u7EBF
          float edge = ad + (nM.g - 0.5) * 1.5 + (nS.b - 0.5) * 0.8;
          float trail = 1.0 - smoothstep(2.75, 3.5, edge);

          // \u592F\u5B9E\u7684\u9EC4\u571F\u8DEF\u9762 + \u788E\u77F3
          vec3 dirt = mix(vec3(0.5, 0.4, 0.29), vec3(0.7, 0.6, 0.45), nM.r);
          dirt = mix(dirt, vec3(0.8, 0.72, 0.58), smoothstep(0.45, 0.75, nS.g) * 0.45);
          float worn = 1.0 - smoothstep(0.2, 2.3, ad + (nS.r - 0.5) * 0.8);
          dirt = mix(dirt, dirt * 1.1 + 0.015, worn * 0.6);
          // \u8DEF\u9762\u4E24\u4FA7\u88AB\u96E8\u6C34\u51B2\u51FA\u7684\u6DF1\u8272\u6E7F\u571F
          dirt = mix(dirt, dirt * vec3(0.72, 0.68, 0.62), smoothstep(0.55, 0.8, nM.a) * (1.0 - worn) * 0.7);
          float pebble = smoothstep(0.66, 0.74, nT.b) * smoothstep(0.45, 0.62, nS.a);
          dirt = mix(dirt, vec3(0.6, 0.59, 0.56) * (0.75 + 0.5 * nT.a), pebble * 0.6);
          dirt *= 0.9 + 0.2 * nT.g;

          // \u8349\u5730\uFF1A\u6DF1\u6D45\u7EFF + \u6210\u7247\u7684\u67AF\u9EC4
          vec3 grass = mix(vec3(0.2, 0.33, 0.1), vec3(0.38, 0.5, 0.17), nM.b);
          grass = mix(grass, vec3(0.57, 0.54, 0.26), smoothstep(0.5, 0.8, nL.r) * 0.6);
          grass *= 0.8 + 0.4 * nT.r;

          // \u788E\u77F3\u5761
          vec3 scree = mix(vec3(0.37, 0.35, 0.33), vec3(0.6, 0.57, 0.52), nS.r) * (0.66 + 0.68 * nT.b);
          float screeK = smoothstep(0.35, 0.65, vBiome.x * 0.9 + (nM.r - 0.5) * 0.7 + (nS.g - 0.5) * 0.3);
          vec3 ground = mix(grass, scree, screeK);

          // \u9661\u5761\u9732\u51FA\u5CA9\u5C42
          float slope = 1.0 - normalize(vWNrm).y;
          float rockK = smoothstep(0.15, 0.32, slope + (nS.r - 0.5) * 0.12);
          vec3 rock = mix(vec3(0.3, 0.28, 0.27), vec3(0.56, 0.53, 0.48), nS.g) * (0.68 + 0.64 * nT.b);
          rock *= 0.86 + 0.28 * sin(vWPos.y * 2.3 + nM.r * 7.0);
          vec3 col = mix(ground, rock, rockK);

          // \u6B8B\u96EA
          float snowK = vBiome.y * smoothstep(0.44, 0.6, nM.g * 0.8 + nL.b * 0.35 + (nS.b - 0.5) * 0.3 - slope * 0.6);
          col = mix(col, vec3(0.93, 0.95, 0.98), snowK);

          col = mix(col, dirt, trail);
          diffuseColor.rgb = pow(col, vec3(2.2));
        }
        `)},s.customProgramCacheKey=()=>"terrain-v1",s}var rc=class{constructor(t,e){let n=Go*ws;this.geo=new ae,this.pos=new Float32Array(n*3),this.nrm=new Float32Array(n*3),this.uv=new Float32Array(n*2),this.trail=new Float32Array(n),this.biome=new Float32Array(n*2);let i=(a,l)=>{let c=new Vt(a,l);return c.setUsage(Jn),c};this.geo.setAttribute("position",i(this.pos,3)),this.geo.setAttribute("normal",i(this.nrm,3)),this.geo.setAttribute("uv",i(this.uv,2)),this.geo.setAttribute("aTrail",i(this.trail,1)),this.geo.setAttribute("aBiome",i(this.biome,2));let r=new Uint16Array((Go-1)*(ws-1)*6),o=0;for(let a=0;a<Go-1;a++)for(let l=0;l<ws-1;l++){let c=a*ws+l,h=c+1,u=c+ws,f=u+1;r[o++]=c,r[o++]=h,r[o++]=u,r[o++]=h,r[o++]=f,r[o++]=u}this.geo.setIndex(new Vt(r,1)),this.mesh=new Xt(this.geo,e),this.mesh.receiveShadow=!0,this.mesh.matrixAutoUpdate=!1,t.add(this.mesh),this.props=new Ho(t),this.index=null}build(t){this.index=t;let e=t*sr,n=[0,0,0],i=0;for(let r=0;r<Go;r++){let o=e+r*Iu,a=pe(o),l=Kn(o,h=>h.biome.rocky,80),c=Kn(o,h=>h.biome.snow,80);for(let h=0;h<ws;h++,i++){let u=Xo[h],f=a+u;this.pos[i*3]=f,this.pos[i*3+1]=jn(f,o),this.pos[i*3+2]=-o,_u(f,o,n),this.nrm[i*3]=n[0],this.nrm[i*3+1]=n[1],this.nrm[i*3+2]=n[2],this.uv[i*2]=f*.31,this.uv[i*2+1]=o*.31,this.trail[i]=u,this.biome[i*2]=l,this.biome[i*2+1]=c}}for(let r in this.geo.attributes)this.geo.attributes[r].needsUpdate=!0;this.geo.computeBoundingSphere(),this.props.populate(t,e,sr)}},Wo=class{constructor(t){this.scene=t,this.material=C_(),this.chunks=[],this.byIndex=new Map,this.behind=1,this.maxAhead=10,this.ahead=this.maxAhead,this.hiRange=3,this.grassRange=3;for(let e=0;e<this.behind+this.maxAhead+1;e++)this.chunks.push(new rc(t,this.material))}setDetail(t,e,n){this.hiRange=t,this.grassRange=e,this.maxAhead=Math.min(n,this.chunks.length-this.behind-1),this.ahead=Math.min(this.ahead,this.maxAhead)}setFogDensity(t){this.ahead=Math.max(6,Math.min(this.maxAhead,Math.ceil(2/t/sr)))}update(t,e=1){let n=Math.floor(t/sr),i=n-this.behind,r=n+this.ahead;for(let o of this.chunks)o.index!==null&&(o.index<i||o.index>r)&&(this.byIndex.delete(o.index),o.index=null);for(let o=i;o<=r&&e>0;o++){if(this.byIndex.has(o))continue;let a=this.chunks.find(l=>l.index===null);if(!a)break;a.build(o),this.byIndex.set(o,a),e--}for(let o of this.chunks)o.index!==null&&(o.props.setNear(o.index-n<=this.grassRange),o.props.setLod(o.index-n<=this.hiRange?0:1))}rebuildAll(t){for(let e of this.chunks)e.index=null;this.byIndex.clear(),this.update(t,999)}};var Du=Math.PI/180,Uu=1.55;function rr(s,t,e,n){return n.setRGB(Qe(s[0],t[0],e),Qe(s[1],t[1],e),Qe(s[2],t[2],e),ue),n}var P_=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_Position.z = gl_Position.w * 0.9999;
}`,L_=`
uniform vec3 uTop;
uniform vec3 uHorizon;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uTime;
uniform float uCloud;
uniform sampler2D uNoise;
varying vec3 vDir;

void main() {
  vec3 d = normalize(vDir);
  float h = max(d.y, 0.0);
  float sd = max(dot(d, uSunDir), 0.0);

  // \u5927\u6C14\u6E10\u53D8\uFF1A\u5730\u5E73\u7EBF\u53D1\u767D\u53D1\u6696\uFF0C\u5929\u9876\u6DF1\u84DD
  vec3 col = mix(uHorizon, uTop, 1.0 - exp(-h * 5.5));

  // \u592A\u9633\u7684\u5927\u8303\u56F4\u6563\u5C04\u8F89\u5149 + \u65E5\u76D8
  vec3 glow = uSunColor * (pow(sd, 6.0) * 0.22 + pow(sd, 40.0) * 0.5 + pow(sd, 300.0) * 1.6);
  col += glow * (0.35 + 0.65 * exp(-h * 3.0));
  col += uSunColor * smoothstep(0.99955, 0.9998, sd) * 30.0;

  // \u4E91\uFF1A\u628A\u89C6\u7EBF\u6295\u5230\u4E00\u4E2A\u5E73\u9762\u4E0A\u91C7\u6837\u566A\u58F0
  if (d.y > 0.005) {
    vec2 uv = d.xz / (d.y + 0.16) * 0.085 + uTime * vec2(0.0016, 0.0007);
    float c = texture2D(uNoise, uv).r * 0.55 + texture2D(uNoise, uv * 2.9 + 0.3).g * 0.3 + texture2D(uNoise, uv * 8.1).b * 0.15;
    float c2 = texture2D(uNoise, uv + uSunDir.xz * 0.02).r * 0.55 + texture2D(uNoise, (uv + uSunDir.xz * 0.02) * 2.9 + 0.3).g * 0.3;
    float cov = smoothstep(0.78 - uCloud * 0.5, 1.0 - uCloud * 0.5, c);
    // \u671D\u5411\u592A\u9633\u7684\u4E00\u4FA7\u66F4\u4EAE\uFF0C\u4E91\u5E95\u504F\u6697
    float lit = clamp(0.62 + (c - c2 / 0.85) * 3.0, 0.25, 1.0);
    vec3 cloudCol = mix(uHorizon * 0.55 + uTop * 0.2, vec3(1.0) * 0.92 + uSunColor * 0.25, lit);
    cloudCol += uSunColor * pow(sd, 10.0) * 0.6 * (1.0 - cov * 0.5);
    float fade = smoothstep(0.005, 0.2, d.y);
    col = mix(col, cloudCol, cov * fade * 0.92);
  }

  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,I_=`
varying vec3 vNrm;
varying vec3 vPos;
void main() {
  vNrm = normal;
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,D_=`
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uHaze;
uniform vec3 uTop;
uniform vec3 uAmbient;
uniform float uSnowLine;
uniform sampler2D uNoise;
varying vec3 vNrm;
varying vec3 vPos;

void main() {
  vec4 nz = texture2D(uNoise, vPos.xz * 0.0021);
  // \u7528\u566A\u58F0\u6270\u52A8\u6CD5\u7EBF\uFF0C\u7ED9\u5C71\u4F53\u8865\u4E0A\u7F51\u683C\u5206\u8FA8\u7387\u4E4B\u5916\u7684\u6C9F\u58D1
  vec4 nf = texture2D(uNoise, vPos.xz * 0.0075);
  vec3 n = normalize(vNrm + vec3(nf.g - 0.5, 0.0, nf.b - 0.5) * 0.9);
  vec4 nd = texture2D(uNoise, vPos.xz * 0.011);
  float slope = 1.0 - n.y;
  // \u4F4E\u5904\u662F\u6797\u7EBF\u4EE5\u4E0B\u7684\u58A8\u7EFF\uFF0C\u5F80\u4E0A\u662F\u88F8\u5CA9\uFF0C\u518D\u5F80\u4E0A\u79EF\u96EA
  vec3 forest = mix(vec3(0.05, 0.1, 0.06), vec3(0.12, 0.19, 0.09), nd.g);
  vec3 rock = mix(vec3(0.2, 0.19, 0.19), vec3(0.4, 0.37, 0.34), nd.r);
  float treeLine = smoothstep(90.0, 170.0, vPos.y + (nz.r - 0.5) * 80.0);
  vec3 col = mix(forest, rock, clamp(treeLine + smoothstep(0.35, 0.6, slope), 0.0, 1.0));
  float snow = smoothstep(uSnowLine, uSnowLine + 70.0, vPos.y + (nz.g - 0.5) * 110.0) * (1.0 - smoothstep(0.45, 0.75, slope + (nd.b - 0.5) * 0.3));
  col = mix(col, vec3(0.9, 0.93, 0.97), snow);

  float ndl = max(dot(n, uSunDir), 0.0);
  vec3 lit = col * (uAmbient + uSunColor * ndl);

  // \u7A7A\u6C14\u900F\u89C6\uFF1A\u8D8A\u8FDC\u3001\u8D8A\u4F4E\uFF0C\u8D8A\u878D\u8FDB\u96FE\u8272
  float dist = length(vPos.xz);
  float haze = 1.0 - exp(-dist * 0.00075);
  // \u5C71\u811A\u6C89\u5728\u8C37\u5E95\u7684\u96FE\u6C14\u91CC
  float low = 1.0 - smoothstep(-55.0, 70.0, vPos.y + (nz.b - 0.5) * 40.0);
  haze = clamp(max(haze, low), 0.0, 1.0);
  // \u8FDC\u5904\u7684\u96FE\u504F\u5411\u5929\u7A7A\u7684\u84DD
  vec3 hazeCol = mix(uHaze, uTop, 0.3 * (1.0 - low));
  vec3 outc = mix(lit, hazeCol, haze);
  gl_FragColor = vec4(outc, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function U_(){let i=new Float32Array(11403),r=[],o=(c,h)=>{let u=Math.sqrt(c*c+h*h),f=Math.max(0,(u-330)/1370),d=Math.pow(Math.sin(Math.min(1,f*1.15)*Math.PI*.5),1.3)*(1-.35*Math.max(0,f-.75)/.25),g=Kl(c*.0016+4.2,h*.0016+1.7,5),_=er(c*6e-4+9,h*6e-4+2,3),m=Kl(c*.006+1.1,h*.006+8.3,3);return-60+d*(60+600*g*(.3+.95*_)+70*m*_)},a=0;for(let c=0;c<=20;c++){let h=c/20,u=330+1370*Math.pow(h,1.35);for(let f=0;f<=180;f++){let d=f/180*Math.PI*2,g=Math.cos(d)*u,_=Math.sin(d)*u;i[a++]=g,i[a++]=o(g,_),i[a++]=_}}for(let c=0;c<20;c++)for(let h=0;h<180;h++){let u=c*181+h,f=u+1,d=u+180+1,g=d+1;r.push(u,f,d,f,g,d)}let l=new ae;return l.setAttribute("position",new Vt(i,3)),l.setIndex(r),l.computeVertexNormals(),l}var qo=class{constructor(t,e){this.scene=t,this.time=0;let n=Ss();this.fogColor=new ft,t.fog=new po(16777215,.004),this.sunDir=new C(0,1,0),this.sunColor=new ft,this.skyTop=new ft,this.sun=new Co(16777215,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);let i=this.sun.shadow.camera;this.shadowHalf=21,i.left=-this.shadowHalf,i.right=this.shadowHalf,i.top=this.shadowHalf,i.bottom=-this.shadowHalf,i.near=1,i.far=220,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.05,t.add(this.sun),t.add(this.sun.target),this.hemi=new Ro(16777215,4473924,.8),t.add(this.hemi),this.skyUniforms={uTop:{value:this.skyTop},uHorizon:{value:this.fogColor},uSunDir:{value:this.sunDir},uSunColor:{value:this.sunColor},uTime:{value:0},uCloud:{value:.5},uNoise:{value:n}},this.sky=new Xt(new $n(1,32,16),new Ie({uniforms:this.skyUniforms,vertexShader:P_,fragmentShader:L_,side:ze,depthWrite:!1,fog:!1})),this.sky.scale.setScalar(1500),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,t.add(this.sky),this.mtnSun=new ft,this.mtnAmbient=new ft,this.mtnUniforms={uSunDir:{value:this.sunDir},uSunColor:{value:this.mtnSun},uHaze:{value:this.fogColor},uTop:{value:this.skyTop},uAmbient:{value:this.mtnAmbient},uSnowLine:{value:260},uNoise:{value:n}},this.mountains=new Xt(U_(),new Ie({uniforms:this.mtnUniforms,vertexShader:I_,fragmentShader:D_,fog:!1})),this.mountains.frustumCulled=!1,this.mountains.renderOrder=-5,t.add(this.mountains),this._hs=new ft,this._hg=new ft,this._lightRight=new C,this._lightUp=new C,this._center=new C}update(t,e,n,i){this.time+=t;let{a:r,b:o,t:a}=mu(e),l=$t[r].atmo,c=$t[o].atmo,h=Qe(l.elev,c.elev,a)*Du,u=Qe(l.az,c.az,a)*Du;this.sunDir.set(Math.sin(u)*Math.cos(h),Math.sin(h),-Math.cos(u)*Math.cos(h)),rr(l.sun,c.sun,a,this.sunColor),rr(l.top,c.top,a,this.skyTop).multiplyScalar(Uu),rr(l.fog,c.fog,a,this.fogColor).multiplyScalar(Uu);let f=Qe(l.sunI,c.sunI,a);this.scene.fog.color.copy(this.fogColor),this.scene.fog.density=Qe(l.fogD,c.fogD,a),this.sun.color.copy(this.sunColor),this.sun.intensity=f,this.hemi.color.copy(rr(l.hemiSky,c.hemiSky,a,this._hs)),this.hemi.groundColor.copy(rr(l.hemiGround,c.hemiGround,a,this._hg)),this.hemi.intensity=Qe(l.hemiI,c.hemiI,a),this.skyUniforms.uCloud.value=Qe(l.cloud,c.cloud,a),this.skyUniforms.uTime.value=this.time,this.mtnSun.copy(this.sunColor).multiplyScalar(f*.42),this.mtnAmbient.copy(this._hs).multiplyScalar(this.hemi.intensity*.42);let d=this.shadowHalf*2/this.sun.shadow.mapSize.x;this._lightRight.set(0,1,0).cross(this.sunDir).normalize(),this._lightUp.copy(this.sunDir).cross(this._lightRight).normalize();let g=Math.round(n.dot(this._lightRight)/d)*d,_=Math.round(n.dot(this._lightUp)/d)*d,m=n.dot(this.sunDir);this._center.set(0,0,0).addScaledVector(this._lightRight,g).addScaledVector(this._lightUp,_).addScaledVector(this.sunDir,m),this.sun.target.position.copy(this._center),this.sun.position.copy(this._center).addScaledVector(this.sunDir,110),this.sky.position.copy(i.position),this.mountains.position.set(i.position.x,n.y,i.position.z)}setShadowQuality(t){if(t<=0){this.sun.castShadow=!1;return}this.sun.castShadow=!0,this.sun.shadow.mapSize.x!==t&&(this.sun.shadow.mapSize.set(t,t),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null))}};var Yo=.42,or=.42,N_=.085;function yn(s,t){let e=new ft(t),n=s.attributes.position.count,i=new Float32Array(n*3);for(let r=0;r<n;r++)i[r*3]=e.r,i[r*3+1]=e.g,i[r*3+2]=e.b;return s.setAttribute("color",new Vt(i,3)),s}function fn(s,t,e,n=1,i=1,r=1){let o=new So(s,t,3,8);return o.scale(n,i,r),yn(o,e)}var oc=null;function F_(){return oc||(oc=new He({vertexColors:!0,roughness:.78,metalness:0})),oc}function Ui(s){let t=s.length===1?s[0]:vn(s),e=new Xt(t,F_());return e.castShadow=!0,e}var Nu=[14263422,13012584,14857359,12157018],Zo=0,$o=1,Jo=2,Ko=3,ar=4,lr=5,cr=6,hr=7,ur=8,ac=9,Fu=10,Ou=11,Bu=12,zu=13,O_=[1.15,-.4,1.35,1.55,-.7,1,1.2,1.4,-.28,0,-.08,.3,-.5],B_=[.38,.95,.08,1.65,-1.05,-.5,.35,.9,-.52,.1,1.16,-.3,.2],z_=[.5,-.35,.55,.5,-.5,.6,1.4,1.3,-.32,0,0,0,.3],H_=[.04,-.04,.06,.06,.05,-.05,.25,.25,-.03,0,0,0,0],fr=class{constructor(t={}){var I,y,E,U,G,Y,L;let e=(I=t.shirt)!=null?I:15225372,n=(y=t.shorts)!=null?y:2369067,i=(E=t.vest)!=null?E:3817528,r=(U=t.shoe)!=null?U:16752670,o=(G=t.cap)!=null?G:15328988,a=(Y=t.sock)!=null?Y:15921906,l=(L=t.skin)!=null?L:Nu[(t.index||0)%Nu.length],c=1840916;this.root=new xe,this.pelvis=new xe,this.root.add(this.pelvis);let h=fn(.145,.07,n,1.1,1,.84);h.rotateZ(Math.PI/2),h.translate(0,.02,0),this.pelvis.add(Ui([h])),this.torso=new xe,this.torso.position.y=.06,this.pelvis.add(this.torso);let u=fn(.15,.27,e,1.14,1,.8);u.translate(0,.27,0);let f=fn(.118,.17,i,1.3,1,.62);f.translate(0,.35,.095);let d=yn(new hn(.055,.34,.03),i);d.translate(-.088,.36,-.118);let g=d.clone();g.translate(.176,0,0);let _=fn(.028,.07,10475760);_.translate(-.09,.33,-.145);let m=_.clone();m.translate(.18,0,0);let p=yn(new De(.047,.055,.1,8),l);p.translate(0,.56,0);let v=yn(new $n(.106,14,10),l);v.scale(.94,1.08,1),v.translate(0,.705,-.01);let x=yn(new $n(.111,12,6,0,Math.PI,Math.PI*.42,Math.PI*.34),c);x.scale(.95,1.08,1),x.translate(0,.705,-.005);let b=yn(new $n(.113,14,6,0,Math.PI*2,0,Math.PI*.47),o);b.scale(.96,1.02,1.02),b.translate(0,.72,-.01);let R=yn(new De(.085,.085,.012,12,1,!1,Math.PI*.5,Math.PI),o);R.scale(1,1,1.25),R.translate(0,.742,-.085),this.torso.add(Ui([u,f,d,g,_,m,p,v,x,b,R]));let S=N=>{let H=new xe;H.position.set(N*.205,.46,0);let q=fn(.046,.19,l);q.translate(0,-.135,0);let X=fn(.057,.07,e);X.translate(0,-.055,0),H.add(Ui([q,X]));let W=new xe;W.position.y=-.27,H.add(W);let Z=fn(.039,.19,l);Z.translate(0,-.125,0);let K=yn(new $n(.046,8,6),l);K.translate(0,-.275,0);let it=[Z,K];if(N<0){let V=yn(new hn(.05,.035,.09),1382170);V.translate(0,-.21,0),it.push(V)}return W.add(Ui(it)),this.torso.add(H),{shoulder:H,elbow:W}};this.armL=S(-1),this.armR=S(1);let w=N=>{let H=new xe;H.position.set(N*.095,0,0);let q=fn(.08,Yo-.16,l);q.translate(0,-Yo/2,0);let X=fn(.09,.1,n);X.translate(0,-.1,0),H.add(Ui([q,X]));let W=new xe;W.position.y=-Yo,H.add(W);let Z=fn(.057,or-.13,l,1,1,1.12);Z.translate(0,-or/2+.01,.006);let K=fn(.05,.07,a);K.translate(0,-or+.085,0),W.add(Ui([Z,K]));let it=new xe;it.position.y=-or,W.add(it);let V=fn(.05,.13,r,.95,1,.85);V.rotateX(Math.PI/2),V.translate(0,-.03,-.06);let $=yn(new hn(.098,.03,.27),16052714);$.translate(0,-.07,-.062);let at=yn(new hn(.084,.014,.24),5919821);return at.translate(0,-.09,-.062),it.add(Ui([V,$,at])),this.pelvis.add(H),{hip:H,knee:W,ankle:it}};this.legL=w(-1),this.legR=w(1),this.phase=t.phase||0,this.jumpW=0,this.slideW=0,this.readyW=1,this.standW=0,this.cheerW=0,this.stumble=0,this.roll=0,this.pose=new Float32Array(zu),this.footDown=!1,this._lastHalf=0,this.pelvisY=.92}addNameTag(t,e){let n=Qn(new Pi({map:t,transparent:!0,depthWrite:!1,fog:!1,sizeAttenuation:!1,toneMapped:!1})),i=new gs(n),r=.04;i.scale.set(r*e,r,1),i.position.y=2.12,i.renderOrder=5,this.root.add(i),this.tag=i}animate(t,e){let n=this.pose,i=e.speed||0,r=Math.min(1,t*12),o=(b,R,S=r)=>b+(R-b)*S;this.jumpW=o(this.jumpW,e.airborne?1:0,Math.min(1,t*14)),this.slideW=o(this.slideW,e.sliding?1:0,Math.min(1,t*13)),this.readyW=o(this.readyW,e.mode==="ready"?1:0,Math.min(1,t*7)),this.standW=o(this.standW,e.mode==="stand"?1:0,Math.min(1,t*4)),this.cheerW=o(this.cheerW,e.mode==="cheer"?1:0,Math.min(1,t*4)),this.stumble=Math.max(0,this.stumble-t*1.6),this.roll=o(this.roll,e.lean||0,Math.min(1,t*10));let a=i>.5?8.6+i*.14:0;this.phase+=a*t;let l=this.phase,c=Math.min(1,.55+i/22),h=Math.floor((l+Math.PI*.55)/Math.PI);this.footDown=h!==this._lastHalf&&i>1&&!e.airborne&&!e.sliding,this._lastHalf=h;let u=l,f=l+Math.PI,d=b=>.14+.76*c*Math.sin(b),g=b=>{let R=.5+.5*Math.cos(b+Math.PI/3);return .22+1.5*c*R*R};n[Zo]=d(u),n[$o]=d(f),n[Jo]=g(u),n[Ko]=g(f),n[Ou]=.25*Math.sin(u+.9),n[Bu]=.25*Math.sin(f+.9),n[ar]=.1-.85*c*Math.sin(u),n[lr]=.1-.85*c*Math.sin(f),n[cr]=1.45-.3*Math.sin(u),n[hr]=1.45-.3*Math.sin(f),n[ur]=-.14-i*.006,n[ac]=.13*Math.sin(l),n[Fu]=0;let _=(b,R)=>{if(!(R<.001))for(let S=0;S<zu;S++)n[S]+=(b[S]-n[S])*R};if(_(H_,this.standW),_(z_,this.readyW),this.cheerW>.001){let b=this.cheerW,R=Math.sin(this.phase*.5)*.15;n[ar]+=(2.75+R-n[ar])*b,n[lr]+=(2.75-R-n[lr])*b,n[cr]+=(.25-n[cr])*b,n[hr]+=(.25-n[hr])*b,n[ur]+=(.06-n[ur])*b}if(_(O_,this.jumpW),_(B_,this.slideW),this.stumble>0){let b=this.stumble;n[ur]-=.55*b,n[ar]+=Math.sin(l*2.3)*.9*b,n[lr]-=Math.cos(l*2.1)*.9*b,n[cr]-=.6*b,n[hr]-=.6*b}this.legL.hip.rotation.x=n[Zo],this.legR.hip.rotation.x=n[$o],this.legL.knee.rotation.x=-n[Jo],this.legR.knee.rotation.x=-n[Ko],this.legL.ankle.rotation.x=n[Ou]+(n[Jo]-n[Zo])*.35,this.legR.ankle.rotation.x=n[Bu]+(n[Ko]-n[$o])*.35,this.armL.shoulder.rotation.x=n[ar],this.armR.shoulder.rotation.x=n[lr],this.armL.shoulder.rotation.z=-.1,this.armR.shoulder.rotation.z=.1,this.armL.elbow.rotation.x=n[cr],this.armR.elbow.rotation.x=n[hr],this.armL.elbow.rotation.z=-.35,this.armR.elbow.rotation.z=.35,this.torso.rotation.x=n[ur],this.torso.rotation.y=n[ac],this.pelvis.rotation.x=n[Fu],this.pelvis.rotation.y=-n[ac]*.5,this.pelvis.rotation.z=-this.roll;let m=(b,R)=>Yo*Math.cos(b)+or*Math.cos(b-R),p=Math.max(m(n[Zo],n[Jo]),m(n[$o],n[Ko]))+N_,v=Math.max(0,-Math.cos(2*l))*.05*c*(1-this.readyW)*(1-this.standW);p+=v;let x=p+(.9-p)*this.jumpW;x+=(.3-x)*this.slideW,this.pelvisY=x,this.pelvis.position.y=x}hit(){this.stumble=1}};var k_=0,Ue=1,Ne=2,ti=3,G_={rock1:s=>{let t=[0,0,0];return t[Math.floor(s()*3)]=Ue,t},rock2:s=>{let t=[Ue,Ue,Ue];return t[Math.floor(s()*3)]=k_,t},log:()=>[Ne,Ne,Ne],over:()=>[ti,ti,ti],rockLog:s=>{let t=[Ue,Ue,Ue];return t[Math.floor(s()*3)]=Ne,t},logRock:s=>{let t=[Ne,Ne,Ne];return t[Math.floor(s()*3)]=Ue,t}},V_=[{rock1:40,log:25,over:20,rock2:15},{rock1:25,rock2:25,log:22,over:20,rockLog:8},{rock1:15,rock2:28,log:20,over:20,rockLog:12,logRock:5},{rock1:10,rock2:28,log:18,over:18,rockLog:14,logRock:12},{rock1:8,rock2:28,log:18,over:18,rockLog:15,logRock:13},{rock1:8,rock2:26,log:18,over:20,rockLog:15,logRock:13}];function W_(s,t,e,n){let i=V_[s],r=0;for(let o in i)r+=i[o];for(let o=0;o<6;o++){let a=t()*r;for(let l in i)if(a-=i[l],a<=0){if(l===e&&l===n)break;return l}}return"rock1"}function Hu(s){let t=tn(s),e=[],n=[],i=["rock1c","log","over","rock2"],r=78,o=0,a=2,l="",c="";for(;r<1945;){let h=ys(r),u=$t[h],f=o<i.length?i[o]:W_(h,t,l,c),d;f==="rock1c"?(d=[0,Ue,0],f="rock1"):d=G_[f](t),c=l,l=f,e.push({s:r,cells:d,kind:f,index:o,seed:Math.floor(t()*1e9),passed:!1,hit:!1,visual:null});let g=u.gap*u.speed*(.92+t()*.3);if(o<i.length&&(g*=1.3),a++,a>=5&&t()<.5||a>=8){let _=[];d.forEach((m,p)=>m===Ne&&_.push(p)),_.length&&t()<.4?n.push({s:r,lane:_[Math.floor(t()*_.length)]-1,y:1.85,taken:!1,visual:null}):n.push({s:r+g*.5,lane:Math.floor(t()*3)-1,y:.95,taken:!1,visual:null}),a=0}r+=g,o++}return{rows:e,gels:n}}function lc(s,t,e=null){let n=t+1,i=n,r=99;for(let a=0;a<3;a++){if(s.cells[a]===Ue)continue;let l=Math.abs(a-n)+(s.cells[a]?.4:0)+(e!==null&&a===e+1?1.5:0);l<r&&(r=l,i=a)}let o=s.cells[i];return{lane:i-1,action:o===Ne?"jump":o===ti?"slide":null}}function X_(){let s=new De(.3,.3,1,12,8,!1);s.deleteAttribute("uv");let t=se(.25,.18,.12),e=se(.4,.31,.22),n=se(.74,.6,.41),i=se(.5,.37,.24),r=s.attributes.position,o=s.attributes.normal;for(let a=0;a<r.count;a++){if(Math.abs(o.getY(a))>.5)continue;let l=Math.atan2(r.getZ(a),r.getX(a)),c=.88+.24*Je(Math.cos(l)*1.6+5,r.getY(a)*5+Math.sin(l)*1.6);r.setX(a,r.getX(a)*c),r.setZ(a,r.getZ(a)*c)}return ke(s,(a,l)=>{if(Math.abs(l.y)>.5){let c=Math.sqrt(a.x*a.x+a.z*a.z)/.3;return i.clone().lerp(n,.5+.5*Math.sin(c*16))}return t.clone().lerp(e,Je(a.y*9,Math.atan2(a.z,a.x)*3))}),s.computeVertexNormals(),s.rotateZ(Math.PI/2),s}function q_(){let s=[],t=se(.24,.18,.13),e=se(.38,.3,.22),n=new De(.2,.25,10.5,10,10,!1);n.deleteAttribute("uv"),ke(n,l=>t.clone().lerp(e,Je(l.y*3,Math.atan2(l.z,l.x)*3))),n.rotateZ(Math.PI/2),s.push(n.toNonIndexed());let i=tn(77);for(let l=0;l<5;l++){let c=new De(.02,.05,.5+i()*.5,5,1,!1);c.deleteAttribute("uv"),ke(c,()=>t.clone().multiplyScalar(.8+i()*.5)),c.translate(0,.35,0),c.rotateX((i()-.5)*1.6),c.rotateZ((i()-.5)*.8),c.translate(-4+l*2+i(),.1,0),s.push(c.toNonIndexed())}let r=se(1,.38,.04),o=se(.96,.96,.94);for(let l=0;l<9;l++){let c=-2.8+l*.7,h=.34+i()*.16,u=new qn(.085,h,1,2);u.deleteAttribute("uv");let f=l%2===0?r:o;ke(u,()=>f.clone()),u.rotateY((i()-.5)*.9),u.translate(c,-.2-h/2,(i()-.5)*.08),s.push(u.toNonIndexed())}let a=vn(s);return a.computeBoundingSphere(),a}function Y_(){let s=new hn(.3,.42,.1,1,3,1);s.deleteAttribute("uv");let t=se(1,.5,.05),e=se(.1,.1,.12),n=se(1,.86,.3);ke(s,a=>a.y>.12?e.clone():a.y<-.1?n.clone():t.clone());let i=s.attributes.position;for(let a=0;a<i.count;a++){let l=i.getY(a),c=l>.12?.62:1;i.setX(a,i.getX(a)*c),i.setZ(a,i.getZ(a)*(l>.12?.5:1))}let r=new De(.035,.035,.07,8);r.deleteAttribute("uv"),ke(r,()=>se(.95,.95,.95)),r.translate(0,.245,0);let o=vn([s.toNonIndexed(),r.toNonIndexed()]);return o.computeVertexNormals(),o}function Z_(){let t=new Uint8Array(16384);for(let n=0;n<64;n++)for(let i=0;i<64;i++){let r=(i+.5)/64-.5,o=(n+.5)/64-.5,a=Math.sqrt(r*r+o*o)*2,l=Math.pow(Math.max(0,1-a),2.2),c=(n*64+i)*4;t[c]=t[c+1]=t[c+2]=255,t[c+3]=Math.round(255*l)}let e=new Yn(t,64,64,Ae);return e.magFilter=oe,e.minFilter=oe,e.needsUpdate=!0,e}var Ts=class{constructor(t){this.factory=t,this.free=[]}get(){let t=this.free.pop()||this.factory();return t.visible=!0,t}put(t){t.visible=!1,this.free.push(t)}},jo=class{constructor(t){this.scene=t,this.group=new xe,t.add(this.group);let e=ko(new He({vertexColors:!0,roughness:.9,metalness:0,side:Pe}),1.6,.5),n=ko(new He({vertexColors:!0,roughness:.9,metalness:0}),.9,.5),i=[Es(21,2),Es(34,2),Es(55,2)],r=X_(),o=q_(),a=Y_(),l=new He({vertexColors:!0,roughness:.35,metalness:.1,emissive:16738816,emissiveIntensity:.35}),c=Z_(),h=f=>(f.castShadow=!0,f.receiveShadow=!0,f),u=0;this.rockPool=new Ts(()=>{let f=h(new Xt(i[u++%i.length],n));return this.group.add(f),f}),this.logPool=new Ts(()=>{let f=h(new Xt(r,e));return f.rotation.order="YXZ",this.group.add(f),f}),this.overPool=new Ts(()=>{let f=new xe;f.add(h(new Xt(o,e)));let d=h(new Xt(i[0],n));d.position.set(-4.7,-.9,0),d.scale.set(1,1.5,1.1);let g=h(new Xt(i[1],n));return g.position.set(4.8,-.75,.1),g.scale.set(1.2,1.9,1.2),g.rotation.y=2,f.add(d,g),this.group.add(f),f}),this.gelPool=new Ts(()=>{let f=new xe,d=new Xt(a,l);d.castShadow=!0;let g=new gs(new Pi({map:c,color:16752704,transparent:!0,opacity:.55,depthWrite:!1,blending:Xr,fog:!1}));return g.scale.set(1.5,1.5,1),f.add(d,g),f.userData.body=d,this.group.add(f),f}),this.course=null,this.firstRow=0,this.nextRow=0,this.firstGel=0,this.nextGel=0}reset(t){if(this.course){for(let e of this.course.rows)this._releaseRow(e);for(let e of this.course.gels)this._releaseGel(e)}this.course=t,this.firstRow=this.nextRow=0,this.firstGel=this.nextGel=0}_releaseRow(t){if(t.visual){for(let e of t.visual)e.pool.put(e.obj);t.visual=null}}_releaseGel(t){t.visual&&(this.gelPool.put(t.visual),t.visual=null)}_spawnRow(t){let e=tn(t.seed),n=[],i=t.s,r=nr(i),o=Ce(i),a=pe(i),l=t.cells;if(l[0]===ti){let h=this.overPool.get(),u=e()<.5;h.position.set(a,o+1.52,-i),h.rotation.set(0,r+(u?Math.PI:0),.045),n.push({obj:h,pool:this.overPool})}let c=0;for(;c<3;){if(l[c]!==Ne){c++;continue}let h=c;for(;h+1<3&&l[h+1]===Ne;)h++;let u=h-c+1,f=((c+h)/2-1)*1.7,d=u===3?7.4:u*1.7+.25,g=this.logPool.get(),_=.92+e()*.2;g.scale.set(d,_,_),g.position.set(a+f,o+.27*_,-i),g.rotation.set(e()*6.28,r+(e()-.5)*(u===3?.14:.04),0),n.push({obj:g,pool:this.logPool}),c=h+1}for(let h=0;h<3;h++){if(l[h]!==Ue)continue;let u=this.rockPool.get(),f=.76+e()*.1,d=1.05+e()*.4;u.scale.set(f,d,f*(.9+e()*.2)),u.position.set(a+(h-1)*1.7+(e()-.5)*.12,o+d*.36,-i+(e()-.5)*.3),u.rotation.set(0,e()*6.28,0),n.push({obj:u,pool:this.rockPool})}t.visual=n}_spawnGel(t){let e=this.gelPool.get();e.position.set(pe(t.s)+t.lane*1.7,Ce(t.s)+t.y,-t.s),t.visual=e}takeGel(t){t.taken=!0,this._releaseGel(t)}update(t,e){if(!this.course)return;let{rows:n,gels:i}=this.course,r=t+240,o=t-14;for(;this.nextRow<n.length&&n[this.nextRow].s<r;)this._spawnRow(n[this.nextRow++]);for(;this.firstRow<this.nextRow&&n[this.firstRow].s<o;)this._releaseRow(n[this.firstRow++]);for(;this.nextGel<i.length&&i[this.nextGel].s<r;){let a=i[this.nextGel++];a.taken||this._spawnGel(a)}for(;this.firstGel<this.nextGel&&i[this.firstGel].s<o;)this._releaseGel(i[this.firstGel++]);for(let a=this.firstGel;a<this.nextGel;a++){let l=i[a];l.visual&&(l.visual.userData.body.rotation.y=e*2.4+a,l.visual.position.y=Ce(l.s)+l.y+Math.sin(e*3+a*1.7)*.07)}}};function $_(s,t){let e=xn(1024,256),n=e.getContext("2d");n.fillStyle="#16191c",n.fillRect(0,0,1024,256),n.fillStyle="#ff6a13",n.fillRect(0,0,1024,18),n.fillRect(0,238,1024,18),n.textAlign="center",n.textBaseline="middle",n.fillStyle="#ffffff",n.font="italic bold 136px sans-serif",n.fillText(s,362,134),n.fillStyle="#ff6a13",n.font="bold 112px sans-serif",n.fillText(t,802,134);let i=new Zn(e);return i.colorSpace=ge,i}function J_(){let s=xn(256,32),t=s.getContext("2d");for(let n=0;n<2;n++)for(let i=0;i<16;i++)t.fillStyle=(i+n)%2===0?"#f2f2f2":"#1a1a1a",t.fillRect(i*16,n*16,16,16);let e=new Zn(s);return e.colorSpace=ge,e.magFilter=ve,e}function cc(s,t,e,n){let i=new xe,r=4.3,o=new Xt(new To(r,.46,12,36,Math.PI),new He({color:n,roughness:.55,metalness:0,emissive:n,emissiveIntensity:.28}));o.scale.set(1,.92,1),o.castShadow=!0,i.add(o);let a=new He({color:1842979,roughness:.7});for(let u of[-1,1]){let f=new Xt(new De(.6,.66,.5,14),a);f.position.set(u*r,.2,0),f.castShadow=!0,i.add(f)}let l=$_(t,e),c=new Xt(new qn(5.6,1.4),Qn(new He({map:l,roughness:.8,side:Pe,emissive:16777215,emissiveMap:l,emissiveIntensity:.3})));c.position.set(0,r*.92+.46+.66,0),c.castShadow=!0,i.add(c);let h=new Xt(new qn(6.4,.8),Qn(new He({map:J_(),roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})));return h.rotation.x=-Math.PI/2,h.position.y=.02,h.receiveShadow=!0,i.add(h),i.position.set(pe(s),Ce(s),-s),i.rotation.y=nr(s),i}var Jt=390,Ge="#ff6a13",K_='"PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif';function Fi(s){let t=Math.floor(s/60),e=s-t*60,n=Math.floor(e),i=Math.floor((e-n)*100);return`${t<10?"0":""}${t}:${n<10?"0":""}${n}.${i<10?"0":""}${i}`}function ku(s){if(!(s>.8))return`-'--"`;let t=Math.round(1e3/s),e=Math.floor(t/60),n=t%60;return`${e}'${n<10?"0":""}${n}"`}function In(s,{bold:t=!0,italic:e=!1}={}){return`${e?"italic ":""}${t?"bold ":""}${s}px ${K_}`}function _t(s,t,e,n,i,r={}){if(s.font=In(i,r),s.textAlign=r.align||"left",s.textBaseline=r.baseline||"middle",r.shadow!==!1){s.fillStyle=r.shadowColor||"rgba(0,0,0,0.55)";let o=Math.max(1,i*.045);s.fillText(t,e+o*.6,n+o)}s.fillStyle=r.color||"#ffffff",s.fillText(t,e,n)}function Ve(s,t,e,n,i,r){let o=Math.min(r,n/2,i/2);s.beginPath(),s.moveTo(t+o,e),s.lineTo(t+n-o,e),s.arcTo(t+n,e,t+n,e+o,o),s.lineTo(t+n,e+i-o),s.arcTo(t+n,e+i,t+n-o,e+i,o),s.lineTo(t+o,e+i),s.arcTo(t,e+i,t,e+i-o,o),s.lineTo(t,e+o),s.arcTo(t,e,t+o,e,o),s.closePath()}function j_(s,t,e,n,i){s.fillStyle=i,s.beginPath(),s.moveTo(t+.15*n,e-.5*n),s.lineTo(t-.3*n,e+.08*n),s.lineTo(t-.02*n,e+.08*n),s.lineTo(t-.15*n,e+.5*n),s.lineTo(t+.3*n,e-.1*n),s.lineTo(t+.02*n,e-.1*n),s.closePath(),s.fill()}function Q_(s,t,e,n,i,r){s.save(),s.translate(t,e),s.rotate({up:0,right:Math.PI/2,down:Math.PI,left:-Math.PI/2}[n]),s.strokeStyle=r,s.lineWidth=i*.16,s.lineCap="round",s.lineJoin="round",s.beginPath(),s.moveTo(0,i*.42),s.lineTo(0,-i*.42),s.moveTo(-i*.3,-i*.1),s.lineTo(0,-i*.42),s.lineTo(i*.3,-i*.1),s.stroke(),s.restore()}var Ni=class{constructor(t,e,n,i,r){this.hud=t,this.x=e,this.y=n,this.w=i,this.h=r;let o=t.u*t.density;this.canvas=xn(Math.max(2,Math.round(i*o)),Math.max(2,Math.round(r*o))),this.ctx=this.canvas.getContext("2d"),this.texture=new Zn(this.canvas),this.texture.colorSpace=ge,this.texture.generateMipmaps=!1,this.texture.minFilter=oe,this.texture.magFilter=oe,this.uniforms={map:{value:this.texture},opacity:{value:1}},this.material=new Ie({uniforms:this.uniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D map; uniform float opacity; varying vec2 vUv; void main(){ vec4 c = texture2D(map, vUv); gl_FragColor = vec4(c.rgb, c.a * opacity); }",transparent:!0,depthTest:!1,depthWrite:!1}),this.mesh=new Xt(t.quad,this.material),this.mesh.frustumCulled=!1,this.place(1),t.scene.add(this.mesh)}place(t){let e=this.hud.u;this.mesh.scale.set(this.w*e*t,this.h*e*t,1),this.mesh.position.set((this.x+this.w/2)*e,this.hud.H-(this.y+this.h/2)*e,0)}begin(){let t=this.ctx,e=this.hud.u*this.hud.density;return t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,this.canvas.width,this.canvas.height),t.setTransform(e,0,0,e,-this.x*e,-this.y*e),t}end(){this.texture.needsUpdate=!0}dispose(){this.hud.scene.remove(this.mesh),this.texture.dispose(),this.material.dispose()}},tx=`
uniform vec3 uColor;
uniform float uStrength;
uniform float uBase;
varying vec2 vUv;
void main() {
  vec2 p = vUv - 0.5;
  float r = length(p * vec2(1.0, 1.25)) * 1.6;
  float v = smoothstep(0.55, 1.25, r);
  // \u5E38\u9A7B\u7684\u6697\u89D2\u662F\u9ED1\u8272\uFF0C\u53D7\u51FB / \u529B\u7AED\u65F6\u53E0\u52A0\u5F69\u8272
  vec3 col = mix(vec3(0.0), uColor, clamp(uStrength / max(0.001, uStrength + uBase), 0.0, 1.0));
  gl_FragColor = vec4(col, v * clamp(uBase + uStrength, 0.0, 1.0));
}`,Qo=class{constructor(t){this.scene=new ms,this.camera=new ps(0,1,1,0,-1,1),this.quad=new qn(1,1),this.layers=null,this.buttons=[],this.hudButtons=[],this.soundOn=!0,this.toastT=0,this.toastDur=0,this.toastPop=0,this._topAcc=0,this._bottomKey="",this._midKey="",this.screenMode="",this.vignetteUniforms={uColor:{value:new ft(.8,.05,.02)},uStrength:{value:0},uBase:{value:.3}},this.vignette=new Xt(this.quad,new Ie({uniforms:this.vignetteUniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:tx,transparent:!0,depthTest:!1,depthWrite:!1})),this.vignette.frustumCulled=!1,this.vignette.renderOrder=-1,this.scene.add(this.vignette),this.resize(t)}resize(t){this.W=t.width,this.H=t.height,this.u=this.W/Jt,this.Hd=this.H/this.u,this.density=Math.min(t.pixelRatio,2);let e=t.menu?t.menu.bottom:0,n=t.menu?t.menu.top:t.safeTop;if(this.T=Math.max(8,n/this.u),this.menuLeft=t.menu?t.menu.left/this.u:Jt,this.rowH=t.menu?(e-n)/this.u:32,this.camera.left=0,this.camera.right=this.W,this.camera.top=this.H,this.camera.bottom=0,this.camera.updateProjectionMatrix(),this.vignette.scale.set(this.W,this.H,1),this.vignette.position.set(this.W/2,this.H/2,0),this.layers)for(let r in this.layers)this.layers[r].dispose();this.topH=this.T+this.rowH+134;let i=176;this.layers={top:new Ni(this,0,0,Jt,this.topH),mid:new Ni(this,0,this.topH,Jt,236),toast:new Ni(this,0,this.topH+64,Jt,170),bottom:new Ni(this,0,this.Hd-i,Jt,i),screen:new Ni(this,0,0,Jt,this.Hd)},this.layers.top.mesh.renderOrder=1,this.layers.mid.mesh.renderOrder=2,this.layers.bottom.mesh.renderOrder=3,this.layers.toast.mesh.renderOrder=4,this.layers.screen.mesh.renderOrder=5,this.layers.toast.uniforms.opacity.value=0,this._bottomKey="",this._midKey="",this._topAcc=1,this.setRaceHudVisible(!1)}setRaceHudVisible(t){this.layers.top.mesh.visible=t,this.layers.mid.mesh.visible=t,this.layers.bottom.mesh.visible=t}hitTest(t,e){let n=t/this.u,i=e/this.u,r=6,o=a=>{for(let l of a)if(n>=l.x-r&&n<=l.x+l.w+r&&i>=l.y-r&&i<=l.y+l.h+r)return l.id;return null};return this.screenMode?o(this.buttons):o(this.hudButtons)}updateRace(t,e){this._topAcc+=t,this._topAcc>=1/15&&(this._topAcc=0,this._drawTop(e));let n=`${Math.floor(e.distance)}|${e.gels}|${e.boost>0?Math.ceil(e.boost*4):0}|${e.stamina<30?Math.floor(e.time*3)%2:0}|${e.rivals.map(r=>Math.floor(r/8)).join(",")}`;n!==this._bottomKey&&(this._bottomKey=n,this._drawBottom(e));let i=`${e.stage}|${e.combo}`;i!==this._midKey&&(this._midKey=i,this._drawMid(e)),this._animateToast(t)}_drawTop(t){let e=this.layers.top,n=e.begin(),i=this.T,r=n.createLinearGradient(0,0,0,e.h);r.addColorStop(0,"rgba(8,10,12,0.66)"),r.addColorStop(.6,"rgba(8,10,12,0.28)"),r.addColorStop(1,"rgba(8,10,12,0)"),n.fillStyle=r,n.fillRect(0,0,Jt,e.h);let o=this.rowH/2,a=i+o,l=U=>{n.fillStyle="rgba(20,23,26,0.72)",n.beginPath(),n.arc(U,a,o,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.28)",n.lineWidth=1,n.stroke()},c=14+o;l(c),n.fillStyle="#fff",n.fillRect(c-5,a-6,3.4,12),n.fillRect(c+1.6,a-6,3.4,12);let h=c+o*2+10;l(h),n.fillStyle="#fff",n.beginPath(),n.moveTo(h-7,a-3),n.lineTo(h-3,a-3),n.lineTo(h+1.5,a-7),n.lineTo(h+1.5,a+7),n.lineTo(h-3,a+3),n.lineTo(h-7,a+3),n.closePath(),n.fill(),n.strokeStyle="#fff",n.lineWidth=1.5,n.lineCap="round",n.beginPath(),this.soundOn?(n.arc(h+2,a,4.5,-.8,.8),n.stroke()):(n.moveTo(h+4,a-3),n.lineTo(h+9,a+3),n.moveTo(h+9,a-3),n.lineTo(h+4,a+3),n.stroke()),this.hudButtons=[{id:"pause",x:c-o,y:i,w:o*2,h:o*2},{id:"sound",x:h-o,y:i,w:o*2,h:o*2},this._gelButton].filter(Boolean);let u=h+o+12;_t(n,"\u5C71\u91CE\u75BE\u9A70",u,a-6,14,{italic:!0}),_t(n,"MOUNTAIN DASH",u,a+9,7.5,{color:"rgba(255,255,255,0.7)",shadow:!1});let f=i+this.rowH;n.fillStyle="rgba(20,23,26,0.6)",Ve(n,Jt/2-22,f+6,44,16,3),n.fill(),_t(n,"\u65F6\u95F4",Jt/2,f+14.5,10,{align:"center",bold:!1,color:"rgba(255,255,255,0.85)",shadow:!1}),_t(n,Fi(t.time),Jt/2-3,f+52,52,{align:"center",italic:!0});let d=f+94;n.font=In(26,{italic:!0});let g=n.measureText(String(t.rank)).width;n.font=In(13);let _=n.measureText(`/${t.total}`).width,m=Jt/2-(g+_+2)/2;_t(n,String(t.rank),m,d,26,{italic:!0,color:Ge}),_t(n,`/${t.total}`,m+g+3,d+4,13,{color:"#fff"}),n.fillStyle="rgba(20,23,26,0.6)",n.font=In(10,{bold:!1});let p=n.measureText(t.gapText).width+14;Ve(n,Jt/2-p/2,d+15,p,17,3),n.fill(),_t(n,t.gapText,Jt/2,d+23.5,10,{align:"center",bold:!1,shadow:!1}),_t(n,"\u6E38\u620F\u914D\u901F",16,f+84,10.5,{bold:!1,color:"rgba(255,255,255,0.86)"});let v=ku(t.speed);_t(n,v,14,f+109,27,{italic:!0}),n.font=In(27,{italic:!0});let x=n.measureText(v).width;_t(n,"/km",14+x+6,f+114,10.5,{bold:!1,color:"rgba(255,255,255,0.86)"});let b=t.stamina<30;_t(n,`${Math.round(t.stamina)}%`,376,f+84,16,{align:"right",color:b?"#ff4b3a":"#fff"}),n.font=In(16);let R=n.measureText(`${Math.round(t.stamina)}%`).width;_t(n,"\u4F53\u529B",376-R-8,f+85,10.5,{align:"right",bold:!1,color:"rgba(255,255,255,0.86)"});let S=8,w=13,I=2.4,y=376-S*(w+I)+I,E=f+99;for(let U=0;U<S;U++){let G=Math.max(0,Math.min(1,t.stamina/100*S-U)),Y=y+U*(w+I),L=N=>{n.beginPath(),n.moveTo(Y+4,E),n.lineTo(Y+4+N,E),n.lineTo(Y+N,E+12),n.lineTo(Y,E+12),n.closePath()};n.fillStyle="rgba(15,17,19,0.72)",L(w),n.fill(),G>.02&&(n.fillStyle=b?"#ff4b3a":t.boost>0?"#ffc247":Ge,L(w*G),n.fill())}e.end()}_drawMid(t){let e=this.layers.mid,n=e.begin(),i=this.topH,r=26;for(let o=0;o<$t.length;o++){let a=i+22+o*33;o<$t.length-1&&(n.strokeStyle=o<t.stage?"rgba(255,106,19,0.8)":"rgba(255,255,255,0.3)",n.lineWidth=1.5,n.beginPath(),n.moveTo(r,a+10),n.lineTo(r,a+23),n.stroke());let l=`0${o+1}`;if(o===t.stage){n.fillStyle=Ge,Ve(n,r-12,a-11,24,22,4),n.fill(),_t(n,l,r,a+.5,11,{align:"center",shadow:!1}),n.font=In(12);let c=n.measureText($t[o].name).width+18;n.fillStyle=Ge,n.beginPath(),n.moveTo(r+17,a-11),n.lineTo(r+17+c+5,a-11),n.lineTo(r+17+c,a+11),n.lineTo(r+17,a+11),n.closePath(),n.fill(),_t(n,$t[o].name,r+25,a+.5,12,{shadow:!1})}else n.fillStyle=o<t.stage?"rgba(255,106,19,0.85)":"rgba(16,18,20,0.72)",n.beginPath(),n.arc(r,a,10,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.35)",n.lineWidth=1,n.stroke(),_t(n,l,r,a+.5,9.5,{align:"center",bold:!1,shadow:!1,color:o<t.stage?"#fff":"rgba(255,255,255,0.8)"})}if(t.combo>=2){_t(n,"\u8FDE\u7EED\u95EA\u907F",376,i+24,11.5,{align:"right",bold:!1}),_t(n,String(t.combo),374,i+54,40,{align:"right",italic:!0}),n.fillStyle=Ge,n.fillRect(326,i+77,50,2.5);let o=Math.round(Math.min(qt.comboSpeedMax,t.combo*qt.comboSpeedStep)*100);o>0&&_t(n,`\u901F\u5EA6 +${o}%`,376,i+92,11,{align:"right",color:"#ffc59c"})}e.end()}_drawBottom(t){let e=this.layers.bottom,n=e.begin(),i=this.Hd-e.h,r=n.createLinearGradient(0,i,0,this.Hd);r.addColorStop(0,"rgba(8,10,12,0)"),r.addColorStop(.55,"rgba(8,10,12,0.26)"),r.addColorStop(1,"rgba(8,10,12,0.62)"),n.fillStyle=r,n.fillRect(0,i,Jt,e.h);let o=176,a=54,l=Jt/2-o/2,c=i+34,h=t.gels>0,u=h&&t.stamina<30&&Math.floor(t.time*3)%2===0;n.fillStyle=u?"rgba(255,106,19,0.92)":"rgba(16,18,20,0.82)",Ve(n,l,c,o,a,12),n.fill(),n.strokeStyle=h?Ge:"rgba(255,255,255,0.22)",n.lineWidth=h?2:1,n.stroke(),j_(n,l+30,c+a/2,26,h?u?"#fff":Ge:"rgba(255,255,255,0.35)"),_t(n,`\u80FD\u91CF\u80F6 ${t.gels}/${qt.maxGels}`,l+52,c+20,15,{color:h?"#fff":"rgba(255,255,255,0.55)",shadow:!1});let f=t.boost>0?"\u52A0\u901F\u4E2D\u2026":h?`\u70B9\u51FB\u4F7F\u7528 \xB7 \u4F53\u529B +${qt.gelStamina}%`:"\u6CBF\u9014\u9009\u7EBF\u62FE\u53D6";_t(n,f,l+52,c+38,10,{bold:!1,color:h?u?"#fff":"#ffc59c":"rgba(255,255,255,0.5)",shadow:!1}),t.boost>0&&(n.fillStyle="#ffc247",Ve(n,l+10,c+a-6,(o-20)*Math.min(1,t.boost/qt.gelBoostTime),3,1.5),n.fill()),this._gelButton={id:"gel",x:l,y:c,w:o,h:a};let d=i+124,g=Math.min(2e3,Math.floor(t.distance));_t(n,String(g),16,d,22,{italic:!0}),n.font=In(22,{italic:!0});let _=n.measureText(String(g)).width;_t(n,`/ ${2e3} m`,16+_+7,d+3,11,{bold:!1,color:"rgba(255,255,255,0.8)"});let m=16+_+7+62,p=350;n.fillStyle="rgba(255,255,255,0.22)",Ve(n,m,d-2,p-m,4,2),n.fill();let v=Math.max(0,Math.min(1,t.distance/2e3));n.fillStyle=Ge,Ve(n,m,d-2,Math.max(4,(p-m)*v),4,2),n.fill(),n.fillStyle="rgba(255,255,255,0.5)";for(let x=1;x<$t.length;x++)n.fillRect(m+(p-m)*$t[x].from/2e3-.5,d-4,1,8);t.rivals.forEach((x,b)=>{let R=Math.max(0,Math.min(1,x/2e3));n.fillStyle="#"+Uo[b].shirt.toString(16).padStart(6,"0"),n.beginPath(),n.arc(m+(p-m)*R,d,3.6,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=1,n.stroke()}),n.fillStyle=Ge,n.beginPath(),n.arc(m+(p-m)*v,d,6,0,Math.PI*2),n.fill(),n.strokeStyle="#fff",n.lineWidth=2,n.stroke(),n.strokeStyle="#fff",n.lineWidth=1.6,n.beginPath(),n.moveTo(362,d+8),n.lineTo(362,d-9),n.stroke(),n.fillStyle="#fff",n.beginPath(),n.moveTo(362,d-9),n.lineTo(374,d-5),n.lineTo(362,d-1),n.closePath(),n.fill(),e.end()}toast(t,e="",n={}){let i=this.layers.toast,r=i.begin(),o=i.y+i.h/2,a=n.size||30,l=n.color||"#ffffff";if(n.tag){r.font=In(13);let c=r.measureText(n.tag).width+20;r.fillStyle=Ge,Ve(r,Jt/2-c/2,o-a*.5-30,c,22,4),r.fill(),_t(r,n.tag,Jt/2,o-a*.5-18.5,13,{align:"center",shadow:!1})}_t(r,t,Jt/2,o-(e?8:0),a,{align:"center",italic:!0,color:l,shadowColor:"rgba(0,0,0,0.7)"}),e&&_t(r,e,Jt/2,o+a*.5+10,14,{align:"center",bold:!0,color:"rgba(255,255,255,0.95)",shadowColor:"rgba(0,0,0,0.7)"}),i.end(),this.toastDur=n.duration||1.3,this.toastT=this.toastDur,this.toastPop=1}clearToast(){this.toastT=0,this.layers.toast.uniforms.opacity.value=0}_animateToast(t){let e=this.layers.toast;if(this.toastT<=0){e.uniforms.opacity.value=0,e.mesh.visible=!1;return}e.mesh.visible=!0,this.toastT-=t,this.toastPop=Math.max(0,this.toastPop-t*6);let n=Math.min(1,this.toastT/.25);e.uniforms.opacity.value=Math.max(0,n),e.place(1+this.toastPop*.35)}updateToastOnly(t){this._animateToast(t)}setVignette(t,e,n,i){this.vignetteUniforms.uStrength.value=t,this.vignetteUniforms.uColor.value.setRGB(e,n,i)}_button(t,e,n,i,r,o,a,l){if(l){let c=t.createLinearGradient(0,r,0,r+a);c.addColorStop(0,"#ff8a2b"),c.addColorStop(1,"#f2590c"),t.fillStyle=c,Ve(t,i,r,o,a,a/2),t.fill(),_t(t,n,i+o/2,r+a/2+.5,19,{align:"center",italic:!0,color:"#fff",shadowColor:"rgba(120,40,0,0.5)"})}else t.fillStyle="rgba(18,20,23,0.7)",Ve(t,i,r,o,a,a/2),t.fill(),t.strokeStyle="rgba(255,255,255,0.4)",t.lineWidth=1.2,t.stroke(),_t(t,n,i+o/2,r+a/2+.5,15,{align:"center",color:"#fff",shadow:!1});this.buttons.push({id:e,x:i,y:r,w:o,h:a})}hideScreen(){this.screenMode="",this.buttons=[],this.layers.screen.mesh.visible=!1}showTitle(t){this.screenMode="title",this.buttons=[];let e=this.layers.screen;e.mesh.visible=!0;let n=e.begin(),i=this.Hd,r=n.createLinearGradient(0,0,0,i*.42);r.addColorStop(0,"rgba(8,10,12,0.8)"),r.addColorStop(1,"rgba(8,10,12,0)"),n.fillStyle=r,n.fillRect(0,0,Jt,i*.42),r=n.createLinearGradient(0,i*.5,0,i),r.addColorStop(0,"rgba(8,10,12,0)"),r.addColorStop(.5,"rgba(8,10,12,0.66)"),r.addColorStop(1,"rgba(8,10,12,0.92)"),n.fillStyle=r,n.fillRect(0,i*.5,Jt,i*.5);let o=this.T+this.rowH+58;n.fillStyle=Ge,n.beginPath(),n.moveTo(34,o+34),n.lineTo(46,o+34),n.lineTo(62,o-30),n.lineTo(50,o-30),n.closePath(),n.fill(),_t(n,"\u5C71\u91CE\u75BE\u9A70",68,o,58,{italic:!0}),_t(n,"M O U N T A I N   D A S H",70,o+44,13,{color:"rgba(255,255,255,0.86)"}),_t(n,"2000 \u7C73\u5C71\u5F84 \xB7 6 \u4E2A\u8D5B\u6BB5 \xB7 3 \u4F4D\u5BF9\u624B",70,o+70,13.5,{bold:!1,color:"rgba(255,255,255,0.92)"});let a=t?`\u4E2A\u4EBA\u6700\u4F73  ${Fi(t)}`:"\u8FD8\u6CA1\u6709\u5B8C\u8D5B\u8BB0\u5F55";n.font=In(12.5);let l=n.measureText(a).width+24;n.fillStyle="rgba(16,18,20,0.7)",Ve(n,68,o+88,l,26,5),n.fill(),n.strokeStyle="rgba(255,106,19,0.8)",n.lineWidth=1,n.stroke(),_t(n,a,80,o+101.5,12.5,{color:t?"#ffd9bf":"rgba(255,255,255,0.7)",shadow:!1});let c=i-262;[["left","\u5DE6\u6ED1","\u5411\u5DE6\u53D8\u9053"],["right","\u53F3\u6ED1","\u5411\u53F3\u53D8\u9053"],["up","\u4E0A\u6ED1","\u8DF3\u8FC7\u5012\u6728"],["down","\u4E0B\u6ED1","\u6ED1\u94F2\u94BB\u8FC7"]].forEach(([u,f,d],g)=>{let _=54+g*94;n.fillStyle="rgba(16,18,20,0.66)",n.beginPath(),n.arc(_,c,23,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.3)",n.lineWidth=1,n.stroke(),Q_(n,_,c,u,24,Ge),_t(n,f,_,c+40,14,{align:"center"}),_t(n,d,_,c+58,10.5,{align:"center",bold:!1,color:"rgba(255,255,255,0.78)"})}),_t(n,"\u649E\u5230\u969C\u788D\u4F1A\u6389\u4F53\u529B \xB7 \u4F53\u529B\u8017\u5C3D\u5373\u9000\u8D5B \xB7 \u62FE\u53D6\u80FD\u91CF\u80F6\u8865\u5145",Jt/2,i-176,11,{align:"center",bold:!1,color:"rgba(255,255,255,0.78)"}),this._button(n,"start","\u5F00 \u59CB \u6BD4 \u8D5B",45,i-146,300,58,!0),_t(n,"\u70B9\u51FB\u6309\u94AE\u5F00\u59CB \xB7 \u5EFA\u8BAE\u6253\u5F00\u58F0\u97F3",Jt/2,i-62,10.5,{align:"center",bold:!1,color:"rgba(255,255,255,0.55)",shadow:!1}),e.end()}showPause(){this.screenMode="pause",this.buttons=[];let t=this.layers.screen;t.mesh.visible=!0;let e=t.begin(),n=this.Hd;e.fillStyle="rgba(8,10,12,0.66)",e.fillRect(0,0,Jt,n);let i=n*.4;_t(e,"\u5DF2\u6682\u505C",Jt/2,i-30,44,{align:"center",italic:!0}),_t(e,"\u5598\u53E3\u6C14\uFF0C\u5C71\u8FD8\u5728\u90A3\u91CC",Jt/2,i+16,13,{align:"center",bold:!1,color:"rgba(255,255,255,0.8)"}),this._button(e,"resume","\u7EE7 \u7EED \u6BD4 \u8D5B",65,i+60,260,54,!0),this._button(e,"restart","\u91CD\u65B0\u5F00\u59CB",65,i+130,260,46,!1),this._button(e,"home","\u8FD4\u56DE\u9996\u9875",65,i+190,260,46,!1),t.end()}showResult(t){this.screenMode="result",this.buttons=[];let e=this.layers.screen;e.mesh.visible=!0;let n=e.begin(),i=this.Hd;n.fillStyle="rgba(8,10,12,0.6)",n.fillRect(0,0,Jt,i);let r=334,o=500,a=(Jt-r)/2,l=Math.max(this.T+this.rowH+16,(i-o)/2-10);n.fillStyle="rgba(18,20,23,0.94)",Ve(n,a,l,r,o,18),n.fill(),n.strokeStyle="rgba(255,255,255,0.12)",n.lineWidth=1,n.stroke(),n.fillStyle=Ge,Ve(n,a+24,l,64,5,2),n.fill();let c=a+24,h=a+r-24;t.finished?(_t(n,t.rank===1?"\u8DD1\u5C71\u4E4B\u738B":"\u987A\u5229\u5B8C\u8D5B",c,l+44,30,{italic:!0,shadow:!1}),_t(n,t.rank===1?"\u7B2C\u4E00\u4E2A\u51B2\u8FC7\u7EC8\u70B9\u7EBF":"\u7FFB\u8FC7\u4E86\u516D\u9053\u5C71\u6881",c,l+72,12,{bold:!1,color:"rgba(255,255,255,0.7)",shadow:!1}),_t(n,`${t.rank}`,h-22,l+50,58,{align:"right",italic:!0,color:t.rank===1?"#ffc247":Ge,shadow:!1}),_t(n,`/${t.total}`,h,l+62,16,{align:"right",color:"rgba(255,255,255,0.8)",shadow:!1})):(_t(n,"\u4F53\u529B\u8017\u5C3D",c,l+44,30,{italic:!0,shadow:!1,color:"#ff6b5a"}),_t(n,`\u6B62\u6B65 ${Math.floor(t.distance)} m \xB7 ${$t[t.stage].name}`,c,l+72,12,{bold:!1,color:"rgba(255,255,255,0.7)",shadow:!1}),_t(n,"DNF",h,l+50,34,{align:"right",italic:!0,color:"rgba(255,255,255,0.35)",shadow:!1}));let u=l+104;n.fillStyle="rgba(255,255,255,0.06)",Ve(n,c,u,r-48,70,10),n.fill(),_t(n,t.finished?"\u5B8C\u8D5B\u7528\u65F6":"\u5DF2\u7528\u65F6\u95F4",c+14,u+18,11,{bold:!1,color:"rgba(255,255,255,0.65)",shadow:!1}),_t(n,Fi(t.time),c+12,u+46,34,{italic:!0,shadow:!1}),t.isRecord?(n.fillStyle=Ge,Ve(n,h-86,u+34,72,22,4),n.fill(),_t(n,"\u65B0\u7EAA\u5F55",h-50,u+45.5,12,{align:"center",shadow:!1})):t.best&&(_t(n,"\u4E2A\u4EBA\u6700\u4F73",h-14,u+18,11,{align:"right",bold:!1,color:"rgba(255,255,255,0.65)",shadow:!1}),_t(n,Fi(t.best),h-14,u+47,17,{align:"right",italic:!0,color:"rgba(255,255,255,0.85)",shadow:!1}));let f=u+86,d=[["\u5E73\u5747\u914D\u901F",`${ku(t.avgSpeed)}/km`],["\u6700\u9AD8\u8FDE\u7EED\u95EA\u907F",String(t.bestCombo)],["\u649E\u5230\u969C\u788D",`${t.hits} \u6B21`]],g=(r-48)/3;d.forEach(([p,v],x)=>{let b=c+g*x;_t(n,p,b+2,f+10,10.5,{bold:!1,color:"rgba(255,255,255,0.6)",shadow:!1}),_t(n,v,b+2,f+33,17,{italic:!0,shadow:!1})});let _=f+62;n.fillStyle="rgba(255,255,255,0.1)",n.fillRect(c,_-8,r-48,1),t.standings.forEach((p,v)=>{let x=_+12+v*27;p.me&&(n.fillStyle="rgba(255,106,19,0.16)",Ve(n,c-6,x-12,r-36,24,5),n.fill()),_t(n,String(v+1),c+4,x,14,{italic:!0,color:p.me?Ge:"rgba(255,255,255,0.55)",shadow:!1}),n.fillStyle=p.color,n.beginPath(),n.arc(c+30,x,4.5,0,Math.PI*2),n.fill(),_t(n,p.name,c+44,x,13.5,{bold:p.me,shadow:!1}),_t(n,p.text,h,x,12.5,{align:"right",bold:!1,color:"rgba(255,255,255,0.8)",shadow:!1})});let m=l+o-122;this._button(n,"restart","\u518D \u8DD1 \u4E00 \u6B21",a+24,m,r-48,52,!0),this._button(n,"home","\u8FD4\u56DE\u9996\u9875",a+24,m+62,r-48,42,!1),e.end()}};var Gu=22,ex=12,nx=450,ta=class{constructor(){this.onSwipe=null,this.onTap=null,this.onKey=null,this.touches=new Map,kt.onTouchStart(e=>{for(let n of e.changedTouches)this.touches.set(n.identifier,{x0:n.clientX,y0:n.clientY,ox:n.clientX,oy:n.clientY,t0:Date.now(),swiped:!1})}),kt.onTouchMove(e=>{for(let n of e.changedTouches){let i=this.touches.get(n.identifier);if(!i)continue;let r=n.clientX-i.ox,o=n.clientY-i.oy;if(Math.abs(r)<Gu&&Math.abs(o)<Gu)continue;let a=Math.abs(r)>Math.abs(o)?r>0?"right":"left":o>0?"down":"up";i.swiped=!0,i.ox=n.clientX,i.oy=n.clientY,this.onSwipe&&this.onSwipe(a)}});let t=e=>{for(let n of e.changedTouches){let i=this.touches.get(n.identifier);if(!i)continue;this.touches.delete(n.identifier);let r=Math.hypot(n.clientX-i.x0,n.clientY-i.y0);!i.swiped&&r<ex&&Date.now()-i.t0<nx&&this.onTap&&this.onTap(n.clientX,n.clientY)}};kt.onTouchEnd(t),kt.onTouchCancel&&kt.onTouchCancel(e=>e.changedTouches.forEach(n=>this.touches.delete(n.identifier))),kt.onKeyDown&&kt.onKeyDown(e=>{let n=e.key||"",i={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"up",w:"up",W:"up"," ":"up",ArrowDown:"down",s:"down",S:"down"};if(i[n]){this.onSwipe&&this.onSwipe(i[n]);return}let r={e:"gel",E:"gel",p:"pause",P:"pause",Escape:"pause",Enter:"confirm"};r[n]&&this.onKey&&this.onKey(r[n])})}};var ea=class{constructor(){this.ctx=null,this.enabled=!0,this.ready=!1,this.wind=null}unlock(){if(this.ready){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume&&this.ctx.resume();return}try{if(!kt.createWebAudioContext)return;this.ctx=kt.createWebAudioContext(),this.ctx.resume&&this.ctx.resume(),this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.9:0,this.master.connect(this.ctx.destination),this.noise=this._noiseBuffer(1.5),this.ready=!0,this._startWind()}catch(t){this.ctx=null,this.ready=!1}}setEnabled(t){this.enabled=t,this.master&&(this.master.gain.value=t?.9:0)}suspend(){try{this.ctx&&this.ctx.suspend&&this.ctx.suspend()}catch(t){}}resume(){try{this.ctx&&this.ctx.resume&&this.ctx.resume()}catch(t){}}_noiseBuffer(t){let e=this.ctx.sampleRate||44100,n=this.ctx.createBuffer(1,Math.floor(e*t),e),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;return n}_startWind(){try{let t=this.ctx.createBufferSource();t.buffer=this.noise,t.loop=!0;let e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=420;let n=this.ctx.createGain();n.gain.value=.05,t.connect(e),e.connect(n),n.connect(this.master),t.start(),this.wind={gain:n,filter:e}}catch(t){}}setSpeed(t){if(this.wind)try{this.wind.gain.gain.value=.035+.11*t,this.wind.filter.frequency.value=320+900*t}catch(e){}}_burst({freq:t=800,q:e=1,type:n="lowpass",dur:i=.1,gain:r=.3,rate:o=1,sweep:a=0}){if(!(!this.ready||!this.enabled))try{let l=this.ctx.currentTime,c=this.ctx.createBufferSource();c.buffer=this.noise,c.playbackRate.value=o;let h=this.ctx.createBiquadFilter();h.type=n,h.frequency.value=t,h.Q.value=e,a&&h.frequency.linearRampToValueAtTime(Math.max(40,t+a),l+i);let u=this.ctx.createGain();u.gain.setValueAtTime(r,l),u.gain.exponentialRampToValueAtTime(8e-4,l+i),c.connect(h),h.connect(u),u.connect(this.master),c.start(l,Math.random()*.8),c.stop(l+i+.03)}catch(l){}}_tone({freq:t=440,to:e=0,dur:n=.15,gain:i=.2,type:r="sine",delay:o=0}){if(!(!this.ready||!this.enabled))try{let a=this.ctx.currentTime+o,l=this.ctx.createOscillator();l.type=r,l.frequency.setValueAtTime(t,a),e&&l.frequency.exponentialRampToValueAtTime(e,a+n);let c=this.ctx.createGain();c.gain.setValueAtTime(8e-4,a),c.gain.linearRampToValueAtTime(i,a+.012),c.gain.exponentialRampToValueAtTime(8e-4,a+n),l.connect(c),c.connect(this.master),l.start(a),l.stop(a+n+.03)}catch(a){}}step(t){this._burst({freq:t?190:230,dur:.09,gain:.42}),this._burst({freq:2600,type:"bandpass",q:.8,dur:.05,gain:.05})}jump(){this._burst({freq:500,type:"bandpass",q:.9,dur:.22,gain:.16,sweep:900})}land(){this._burst({freq:160,dur:.14,gain:.6})}slide(){this._burst({freq:1500,type:"bandpass",q:.6,dur:.5,gain:.2,sweep:-900})}lane(){this._burst({freq:900,type:"bandpass",q:1.2,dur:.08,gain:.08})}hit(){this._tone({freq:120,to:45,dur:.3,gain:.6}),this._burst({freq:700,dur:.22,gain:.5})}gel(){this._tone({freq:660,dur:.1,gain:.2,type:"triangle"}),this._tone({freq:990,dur:.16,gain:.2,type:"triangle",delay:.07})}boost(){this._tone({freq:330,to:880,dur:.35,gain:.18,type:"triangle"}),this._burst({freq:800,type:"bandpass",q:.8,dur:.4,gain:.14,sweep:1600})}beep(t){this._tone({freq:t?1040:620,dur:t?.45:.16,gain:.25,type:"square"})}stage(){this._tone({freq:523,dur:.14,gain:.16,type:"triangle"}),this._tone({freq:784,dur:.22,gain:.16,type:"triangle",delay:.11})}finish(){[523,659,784,1047].forEach((t,e)=>this._tone({freq:t,dur:.3,gain:.2,type:"triangle",delay:e*.13}))}fail(){[392,330,262].forEach((t,e)=>this._tone({freq:t,dur:.32,gain:.2,type:"triangle",delay:e*.18}))}};var ei=90,ix=`
attribute float aSize;
attribute float aAlpha;
uniform float uScale;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uScale / max(0.1, -mv.z);
}`,sx=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  float r = length(p) * 2.0;
  float a = smoothstep(1.0, 0.15, r) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(uColor, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,na=class{constructor(t){this.pos=new Float32Array(ei*3),this.size=new Float32Array(ei),this.alpha=new Float32Array(ei),this.vel=new Float32Array(ei*3),this.life=new Float32Array(ei),this.maxLife=new Float32Array(ei),this.baseSize=new Float32Array(ei),this.cursor=0;let e=new ae;e.setAttribute("position",new Vt(this.pos,3).setUsage(Jn)),e.setAttribute("aSize",new Vt(this.size,1).setUsage(Jn)),e.setAttribute("aAlpha",new Vt(this.alpha,1).setUsage(Jn)),this.uniforms={uColor:{value:new ft(.55,.47,.36)},uScale:{value:600}},this.points=new _o(e,new Ie({uniforms:this.uniforms,vertexShader:ix,fragmentShader:sx,transparent:!0,depthWrite:!1,fog:!1})),this.points.frustumCulled=!1,this.points.renderOrder=3,t.add(this.points)}setTint(t,e){this.uniforms.uColor.value.setRGB(.5,.42,.32).lerp(t,.35).multiply(e).multiplyScalar(1.5)}setViewport(t,e){this.uniforms.uScale.value=t/(2*Math.tan(e*Math.PI/360))}emit(t,e,n,i,r=.25,o=1){for(let a=0;a<i;a++){let l=this.cursor;this.cursor=(this.cursor+1)%ei,this.pos[l*3]=t+(Math.random()-.5)*r,this.pos[l*3+1]=e+Math.random()*.1,this.pos[l*3+2]=n+(Math.random()-.5)*r,this.vel[l*3]=(Math.random()-.5)*1.2*o,this.vel[l*3+1]=(.4+Math.random()*.9)*o,this.vel[l*3+2]=(Math.random()-.5)*1.2*o+1.5,this.maxLife[l]=this.life[l]=.45+Math.random()*.5,this.baseSize[l]=(.25+Math.random()*.35)*(.7+o*.3)}}update(t){for(let n=0;n<ei;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=t;let i=1-Math.max(0,this.life[n])/this.maxLife[n];this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.vel[n*3+1]-=1.2*t,this.size[n]=this.baseSize[n]*(.6+i*1.8),this.alpha[n]=.34*(1-i)*Math.min(1,i*8)}let e=this.points.geometry.attributes;e.position.needsUpdate=!0,e.aSize.needsUpdate=!0,e.aAlpha.needsUpdate=!0}};var rx=5.8,ox=2.75,Vu=66;function Wu(s){return Kn(s,e=>e.speed,80)*an(1-Oo(s)*1.1,.8,1.12)}function ax(s){let t=xn(256,96),e=t.getContext("2d");e.fillStyle="rgba(18,20,23,0.82)",e.fillRect(8,14,240,68),e.strokeStyle="rgba(255,255,255,0.35)",e.lineWidth=2,e.strokeRect(8,14,240,68),e.fillStyle="#ffffff",e.font='bold 44px "PingFang SC", "Helvetica Neue", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(s,128,50);let n=new Zn(t);return n.colorSpace=ge,n.generateMipmaps=!1,n.minFilter=oe,n}var ia=class{constructor(t,e){this.renderer=t,this.screen=e,this.scene=new ms,this.camera=new $e(Vu,e.width/e.height,.3,2400),this.camPos=new C,this.camLook=new C,this.focus=new C,this.shake=0,this.time=0,this.env=new qo(this.scene,t),this.terrain=new Wo(this.scene),this.obstacles=new jo(this.scene),this.dust=new na(this.scene),this.props=sc(),this.scene.add(cc(7,"START","\u8D77\u70B9",15882508)),this.scene.add(cc(2e3,"FINISH","\u7EC8\u70B9",13773611)),this.player={runner:new fr({shirt:15225372,shoe:16752670,cap:15526109,index:0}),s:0,speed:0,lane:0,laneX:0,y:0,jumpT:-1,fastFall:!1,slideT:0,queuedSlide:!1,stamina:100,gels:0,combo:0,bestCombo:0,hits:0,invuln:0,boostT:0,rowPtr:0,gelPtr:0},this.scene.add(this.player.runner.root),this.player.runner.root.rotation.order="YXZ",this.rivals=Uo.map((n,i)=>{let r=new fr({shirt:n.shirt,shoe:n.shoe,cap:n.cap,index:i+1,phase:i*1.7+1});return r.addNameTag(ax(n.name),256/96),r.root.rotation.order="YXZ",this.scene.add(r.root),{cfg:n,runner:r,s:n.start,speed:0,lane:n.lane,laneX:n.lane*1.7,y:0,jumpT:-1,slideT:0,rowPtr:0,finishTime:0}}),this.hud=new Qo(e),this.audio=new ea,this.input=new ta,this.input.onSwipe=n=>this.onSwipe(n),this.input.onTap=(n,i)=>this.onTap(n,i),this.input.onKey=n=>this.onKey(n),this.best=Yl("best",0)||0,this.soundOn=Yl("sound",1)!==0,this.audio.setEnabled(this.soundOn),this.hud.soundOn=this.soundOn,this.autopilot=!!An.autopilot,this.tutorial={rock:!1,log:!1,over:!1,gel:!1},this.state="title",this.paused=!1,this.raceTime=0,this.worldTime=0,this.countdown=0,this.endTimer=0,this.stage=0,this.hitFlash=0,this.stepAlt=!1,this.resize(e),this.resetRace(),this.toTitle()}resize(t){this.screen=t,this.camera.aspect=t.width/t.height,this.baseFov=an(Vu+(.5-this.camera.aspect)*30,52,74),this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix(),this.dust.setViewport(t.height*this.renderer.getPixelRatio(),this.camera.fov),(this.hud.W!==t.width||this.hud.H!==t.height)&&(this.hud.resize(t),this.refreshScreen())}refreshScreen(){this.state==="title"?this.hud.showTitle(this.best):this.paused?this.hud.showPause():this.result&&(this.state==="finished"||this.state==="failed")&&this.endTimer<=0&&this.hud.showResult(this.result),this.state!=="title"&&this.hud.setRaceHudVisible(!0)}resetRace(){let t=typeof An.seed=="number"?An.seed:(Date.now()&16777215)+1;this.course=Hu(t),this.obstacles.reset(this.course);let e=this.player;for(Object.assign(e,{s:typeof An.startAt=="number"?An.startAt:0,speed:0,lane:0,laneX:0,y:0,jumpT:-1,fastFall:!1,slideT:0,queuedSlide:!1,stamina:100,gels:0,combo:0,bestCombo:0,hits:0,invuln:0,boostT:0,rowPtr:0,gelPtr:0});e.rowPtr<this.course.rows.length&&this.course.rows[e.rowPtr].s<e.s+30;)e.rowPtr++;for(;e.gelPtr<this.course.gels.length&&this.course.gels[e.gelPtr].s<e.s+30;)e.gelPtr++;this.rivals.forEach(n=>{Object.assign(n,{s:e.s+n.cfg.start,speed:0,lane:n.cfg.lane,laneX:n.cfg.lane*1.7,y:0,jumpT:-1,slideT:0,rowPtr:e.rowPtr,finishTime:0}),n.runner.readyW=1,n.runner.cheerW=0}),e.runner.readyW=1,e.runner.cheerW=0,e.runner.standW=0,e.runner.root.visible=!0,this.raceTime=0,this.worldTime=0,this.stage=ys(e.s),this.result=null,this.endTimer=0,this.hitFlash=0,this.shake=0,this.terrain.rebuildAll(e.s),this.snapCamera=!0}toTitle(){this.state="title",this.paused=!1,this.hud.setRaceHudVisible(!1),this.hud.clearToast(),this.hud.showTitle(this.best)}startCountdown(){this.audio.unlock(),this.resetRace(),this.state="countdown",this.paused=!1,this.countdown=3.2,this.lastCount=4,this.hud.hideScreen(),this.hud.setRaceHudVisible(!0),this.hud._topAcc=1}startRace(){this.state="running",this.hud.toast("GO!","\u6ED1\u52A8\u5C4F\u5E55\u63A7\u5236\u8DD1\u8005",{size:64,color:"#ff8a2b",duration:1.1}),this.audio.beep(!0)}togglePause(){this.state!=="running"&&this.state!=="countdown"||(this.paused=!this.paused,this.paused?(this.hud.showPause(),this.audio.suspend()):(this.hud.hideScreen(),this.audio.resume()))}onHide(){(this.state==="running"||this.state==="countdown")&&!this.paused?this.togglePause():this.audio.suspend()}onShow(){this.paused||this.audio.resume()}finishRace(){let t=this.player;this.state="finished",this.endTimer=2.4;let n=this.rivals.filter(r=>r.finishTime>0).length+1,i=!this.autopilot&&(!this.best||this.raceTime<this.best);i&&(this.best=this.raceTime,Zl("best",this.best)),this.finalRank=n,this.result={finished:!0,time:this.raceTime,rank:n,total:this.rivals.length+1,avgSpeed:2e3/this.raceTime,bestCombo:t.bestCombo,hits:t.hits,distance:2e3,stage:$t.length-1,best:this.best,isRecord:i},this.hud.toast(n===1?"\u51B2\u7EBF\uFF01\u7B2C 1 \u540D":`\u51B2\u7EBF\uFF01\u7B2C ${n} \u540D`,Fi(this.raceTime),{size:36,color:"#ffc247",duration:2.3}),this.audio.finish(),js(!0)}failRace(){let t=this.player;this.state="failed",this.endTimer=2,this.result={finished:!1,time:this.raceTime,rank:0,total:this.rivals.length+1,avgSpeed:t.s/Math.max(1,this.raceTime),bestCombo:t.bestCombo,hits:t.hits,distance:t.s,stage:this.stage,best:this.best,isRecord:!1},this.hud.toast("\u4F53\u529B\u8017\u5C3D","\u8DD1\u4E0D\u52A8\u4E86\u2026",{size:40,color:"#ff6b5a",duration:1.9}),this.audio.fail(),js(!0)}buildStandings(){let t=this.player,e=this.rivals.map(n=>({name:n.cfg.name,me:!1,color:"#"+n.cfg.shirt.toString(16).padStart(6,"0"),time:n.finishTime>0?n.finishTime:1/0,s:n.s}));return e.push({name:"\u4F60",me:!0,color:"#e8521c",time:this.result.finished?this.raceTime:1/0,s:this.result.finished?t.s:this.result.distance}),e.sort((n,i)=>n.time!==i.time?n.time-i.time:i.s-n.s),e.forEach(n=>{n.time<1/0?n.text=Fi(n.time):n.me?n.text=`\u672A\u5B8C\u8D5B \xB7 ${Math.floor(n.s)} m`:n.text=`\u8FD8\u5728\u8DEF\u4E0A \xB7 ${Math.floor(Math.min(2e3,n.s))} m`}),e}onSwipe(t){this.audio.unlock(),!(this.state!=="running"||this.paused||this.autopilot)&&this.act(t)}act(t){let e=this.player;if(t==="left"||t==="right"){let n=an(e.lane+(t==="left"?-1:1),-1,1);n!==e.lane&&(e.lane=n,this.audio.lane())}else t==="up"?e.jumpT<0&&(e.jumpT=0,e.fastFall=!1,e.slideT=0,e.queuedSlide=!1,this.audio.jump()):t==="down"&&(e.jumpT>=0?(e.fastFall=!0,e.queuedSlide=!0):(e.slideT=qt.slideDuration,this.audio.slide()))}onTap(t,e){this.audio.unlock();let n=this.hud.hitTest(t,e);n&&this.press(n)}onKey(t){this.audio.unlock(),t==="gel"?this.press("gel"):t==="pause"?(this.state==="running"||this.state==="countdown")&&this.togglePause():t==="confirm"&&(this.state==="title"?this.press("start"):this.paused?this.press("resume"):this.hud.screenMode==="result"&&this.press("restart"))}press(t){switch(t){case"start":case"restart":this.startCountdown();break;case"home":this.resetRace(),this.toTitle();break;case"resume":this.paused&&this.togglePause();break;case"pause":this.togglePause();break;case"sound":this.soundOn=!this.soundOn,this.hud.soundOn=this.soundOn,this.audio.setEnabled(this.soundOn),Zl("sound",this.soundOn?1:0),this.hud._topAcc=1;break;case"gel":this.useGel();break}}useGel(){let t=this.player;this.state!=="running"||this.paused||t.gels<=0||(t.gels--,t.stamina=Math.min(100,t.stamina+qt.gelStamina),t.boostT=qt.gelBoostTime,this.hud.toast("\u80FD\u91CF\u80F6\uFF01",`\u4F53\u529B +${qt.gelStamina}% \xB7 \u52A0\u901F ${qt.gelBoostTime} \u79D2`,{color:"#ffc247"}),this.audio.boost(),js(!1))}update(t){this.time+=t;let e=this.player,n=this.hud;if(!this.paused){if(this.state==="countdown"){this.countdown-=t;let r=Math.ceil(this.countdown);r!==this.lastCount&&r>=1&&r<=3&&(this.lastCount=r,n.toast(String(r),r===3?"\u5404\u5C31\u5404\u4F4D":r===2?"\u9884\u5907":"",{size:110,duration:.95}),this.audio.beep(!1)),this.countdown<=0&&this.startRace()}(this.state==="running"||this.state==="finished"||this.state==="failed")&&(this.worldTime+=t),this.state==="running"?(this.raceTime+=t,this.autopilot&&this.autoDrive(),this.updatePlayer(t)):(this.state==="finished"||this.state==="failed")&&(e.speed=Math.max(0,e.speed-t*(this.state==="finished"?4.2:7)),e.s+=e.speed*t,e.laneX+=an(e.lane*1.7-e.laneX,-qt.laneSpeed*t,qt.laneSpeed*t),this.updateJump(e,t),this.endTimer>0&&(this.endTimer-=t,this.endTimer<=0&&(this.result.standings=this.buildStandings(),n.setRaceHudVisible(!1),n.showResult(this.result)))),this.state!=="title"&&this.updateRivals(t),this.animateRunners(t),this.dust.update(t),this.props.windUniform.value=this.time}if(this.terrain.update(e.s,1),this.obstacles.update(e.s,this.time),this.updateCamera(t),this.focus.set(pe(e.s+8),Ce(e.s+8),-(e.s+8)),this.env.update(this.paused?0:t,e.s,this.focus,this.camera),this.terrain.setFogDensity(this.scene.fog.density),this.dust.setTint(this.env.fogColor,this.env.sunColor),this.state!=="title"){let r=this.hudData();n.updateRace(t,r)}else n.updateToastOnly(t);this.hitFlash=Math.max(0,this.hitFlash-t*1.8);let i=this.state==="running"&&e.stamina<30?(.3+.2*Math.sin(this.time*6))*(1-e.stamina/30):0;this.hitFlash>.01||i>.01?n.setVignette(Math.max(this.hitFlash*.75,i),.85,.06,.02):e.boostT>0?n.setVignette(.22,1,.55,.1):n.setVignette(0,0,0,0),this.audio.setSpeed(this.state==="title"||this.paused?.1:an(e.speed/15,0,1))}hudData(){let t=this.player,e=1,n=1/0,i=1/0;for(let o of this.rivals){let a=o.s-t.s;a>0?(e++,n=Math.min(n,a)):i=Math.min(i,-a)}this.state==="finished"&&(e=this.finalRank);let r;return this.state==="finished"?r="\u5DF2\u5B8C\u8D5B":e===1?r=i<1/0?`\u9886\u5148 ${Math.max(1,Math.round(i))}m`:"\u9886\u5148":r=`\u8DDD\u524D\u65B9 ${Math.max(1,Math.round(n))}m`,{time:this.raceTime,speed:t.speed,stamina:t.stamina,rank:e,total:this.rivals.length+1,gapText:r,stage:this.stage,combo:t.combo,gels:t.gels,boost:t.boostT,distance:Math.max(0,t.s),rivals:this.rivals.map(o=>o.s)}}updateJump(t,e){if(t.jumpT<0)return!1;if(t.fastFall)return t.y-=16*e,t.y<=0?(t.y=0,t.jumpT=-1,t.fastFall=!1,!0):!1;t.jumpT+=e;let n=t.jumpT/qt.jumpDuration;return n>=1?(t.y=0,t.jumpT=-1,!0):(t.y=qt.jumpHeight*4*n*(1-n),!1)}updatePlayer(t){let e=this.player,n=Oo(e.s),i=Math.min(qt.comboSpeedMax,e.combo*qt.comboSpeedStep),r=e.stamina>=30?1:.78+.22*(e.stamina/30),o=e.boostT>0?qt.gelBoost:1,a=Wu(e.s)*(1+i)*r*o;e.speed<a?e.speed=Math.min(a,e.speed+5*t):e.speed=Math.max(a,e.speed-6*t),e.s+=e.speed*t,e.boostT=Math.max(0,e.boostT-t),e.invuln=Math.max(0,e.invuln-t),e.stamina-=qt.staminaDrain*(1+Math.max(0,n)*5)*t,e.laneX+=an(e.lane*1.7-e.laneX,-qt.laneSpeed*t,qt.laneSpeed*t),this.updateJump(e,t)&&(this.audio.land(),this.dust.emit(pe(e.s)+e.laneX,Ce(e.s)+.05,-e.s,7,.5,1.3),e.queuedSlide&&(e.queuedSlide=!1,e.slideT=qt.slideDuration*.8,this.audio.slide())),e.slideT>0&&(e.slideT-=t,Math.random()<t*30&&this.dust.emit(pe(e.s)+e.laneX,Ce(e.s)+.05,-e.s+.3,1,.5,.8));let c=ys(e.s);if(c!==this.stage&&e.s<2e3&&(this.stage=c,this.hud.toast($t[c].name,c===$t.length-1?"\u6700\u540E\u4E00\u6BB5\uFF0C\u5168\u529B\u51B2\u523A\uFF01":`\u7B2C ${c+1} \u8D5B\u6BB5`,{tag:`0${c+1} / 0${$t.length}`,size:34,duration:2}),this.audio.stage()),this.checkCollisions(),this.checkGels(),this.tutorialHints(),e.s>=2e3){this.finishRace();return}e.stamina<=0&&(e.stamina=0,this.failRace())}checkCollisions(){let t=this.player,e=this.course.rows;for(;t.rowPtr<e.length&&e[t.rowPtr].s<t.s-1;){let n=e[t.rowPtr++];!n.hit&&!n.skipped&&this.onRowPassed(n)}for(let n=t.rowPtr;n<e.length;n++){let i=e[n],r=i.s-t.s;if(r>1.2)break;if(i.hit)continue;if(t.invuln>0){i.skipped=!0;continue}let o=0;for(let a=0;a<3&&!o;a++){let l=i.cells[a];if(!l)continue;let c=Math.abs(t.laneX-(a-1)*1.7);l===Ue?Math.abs(r)<.75&&c<.95&&(o=Ue):l===Ne?Math.abs(r)<.42&&c<1&&t.y<.42&&(o=Ne):l===ti&&Math.abs(r)<.36&&!(t.slideT>0&&t.y<.3)&&(o=ti)}o&&(i.hit=!0,this.onHit(o))}}onRowPassed(t){let e=this.player;e.combo++,e.bestCombo=Math.max(e.bestCombo,e.combo),(e.combo===5||e.combo===10||e.combo>=20&&e.combo%10===0)&&this.hud.toast(e.combo>=20?"\u884C\u4E91\u6D41\u6C34\uFF01":e.combo>=10?"\u8282\u594F\u771F\u7A33\uFF01":"\u6F02\u4EAE\uFF01",`\u8FDE\u7EED\u95EA\u907F \xD7${e.combo}`,{color:"#ffd9bf",duration:1.1})}onHit(t){let e=this.player;e.hits++,e.combo=0,e.speed*=qt.hitSlow,e.stamina-=qt.hitStamina,e.invuln=qt.invulnerable,e.boostT=0,e.runner.hit(),this.shake=1,this.hitFlash=1,this.audio.hit(),js(!0),this.dust.emit(pe(e.s)+e.laneX,Ce(e.s)+.6,-e.s-.5,14,.9,2);let n=t===Ue?"\u649E\u4E0A\u843D\u77F3\uFF01":t===Ne?"\u88AB\u5012\u6728\u7ECA\u5012\uFF01":"\u649E\u5230\u6811\u5E72\uFF01",i=t===Ue?"\u5DE6\u53F3\u6ED1\u52A8\u53D8\u9053\u7ED5\u5F00":t===Ne?"\u4E0A\u6ED1\u8DF3\u8FC7\u53BB":"\u4E0B\u6ED1\u4ECE\u5E95\u4E0B\u94BB\u8FC7";this.hud.toast(n,`\u4F53\u529B -${qt.hitStamina}% \xB7 ${i}`,{color:"#ff6b5a",duration:1.3})}checkGels(){let t=this.player,e=this.course.gels;for(;t.gelPtr<e.length&&e[t.gelPtr].s<t.s-1.2;)t.gelPtr++;for(let n=t.gelPtr;n<e.length;n++){let i=e[n];if(i.s-t.s>1.2)break;if(i.taken||Math.abs(t.laneX-i.lane*1.7)>.9)continue;let r=i.y-t.y;r<-.3||r>1.75||(this.obstacles.takeGel(i),this.audio.gel(),t.gels<qt.maxGels?(t.gels++,this.hud.toast("\u62FF\u5230\u80FD\u91CF\u80F6",`\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u4F7F\u7528\uFF08${t.gels}/${qt.maxGels}\uFF09`,{color:"#ffc247",duration:1.1})):(t.stamina=Math.min(100,t.stamina+8),this.hud.toast("\u4F53\u529B +8%","\u80FD\u91CF\u80F6\u5DF2\u6EE1\uFF0C\u76F4\u63A5\u8865\u7ED9",{color:"#ffc247",duration:1})))}}tutorialHints(){let t=this.player,n=this.course.rows[t.rowPtr];if(!n||this.autopilot)return;let i=n.s-t.s;if(i>t.speed*1.7||i<t.speed*.9)return;let r=this.tutorial,o=n.cells.indexOf(Ue)>=0;n.cells[0]===ti&&!r.over?(r.over=!0,this.hud.toast("\u2193 \u4E0B\u6ED1","\u4ECE\u6A2A\u5012\u7684\u6811\u5E72\u4E0B\u9762\u6ED1\u94F2\u94BB\u8FC7",{size:40,duration:1.5})):n.cells.indexOf(Ne)>=0&&!o&&!r.log?(r.log=!0,this.hud.toast("\u2191 \u4E0A\u6ED1","\u8DF3\u8FC7\u5012\u6728",{size:40,duration:1.5})):o&&!r.rock&&(r.rock=!0,this.hud.toast("\u2190 \u5DE6\u53F3\u6ED1\u52A8 \u2192","\u53D8\u9053\u7ED5\u5F00\u843D\u77F3",{size:34,duration:1.5}))}autoDrive(){let t=this.player,e=this.course.rows[t.rowPtr];if(t.stamina<55&&t.gels>0&&this.useGel(),!e)return;let n=e.s-t.s;if(n>t.speed*.95){let r=this.course.gels[t.gelPtr];r&&!r.taken&&r.s-t.s<t.speed*1.2&&r.s<e.s-3&&r.lane!==t.lane&&this.act(r.lane<t.lane?"left":"right");return}let i=lc(e,t.lane);i.lane!==t.lane?this.act(i.lane<t.lane?"left":"right"):i.action==="jump"&&n<t.speed*qt.jumpDuration*.5+.2&&t.jumpT<0?this.act("up"):i.action==="slide"&&n<t.speed*.3+.4&&t.slideT<=0&&this.act("down")}updateRivals(t){let e=this.player,n=this.course.rows,i=this.state!=="countdown";this.rivals.forEach((r,o)=>{if(!i)return;if(r.finishTime>0)r.speed=Math.max(0,r.speed-4*t);else{let h=an(r.s/2e3,0,1)*(r.cfg.curve.length-1),u=Math.min(r.cfg.curve.length-2,Math.floor(h)),f=Qe(r.cfg.curve[u],r.cfg.curve[u+1],h-u),d=Wu(r.s)*f*(1+.012*Math.sin(this.time*.37+o*2.1));r.speed=r.speed<d?Math.min(d,r.speed+4.6*t):Math.max(d,r.speed-4*t)}for(r.s+=r.speed*t,!r.finishTime&&r.s>=2e3&&(r.finishTime=this.worldTime);r.rowPtr<n.length&&n[r.rowPtr].s<r.s-.5;)r.rowPtr++;let a=n[r.rowPtr],l=r.cfg.lane,c=a?a.s-r.s:1/0;if(a&&c<r.speed*1){let h=Math.abs(e.s-r.s)<3.5?e.lane:null;for(let f of this.rivals)f!==r&&Math.abs(f.s-r.s)<2.5&&(h=f.lane);h===r.lane&&(h=null);let u=lc(a,r.lane,h);l=u.lane,u.lane===r.lane&&(u.action==="jump"&&r.jumpT<0&&c<r.speed*qt.jumpDuration*.5+.2&&(r.jumpT=0),u.action==="slide"&&r.slideT<=0&&c<r.speed*.3+.4&&(r.slideT=qt.slideDuration))}else{let h=r.s-e.s;h>-1.5&&h<6&&e.lane===l&&(l=l===0?o%2?1:-1:0);for(let u of this.rivals)u!==r&&Math.abs(u.s-r.s)<2.2&&u.lane===l&&u.s>r.s&&(l=r.lane!==u.lane?r.lane:l)}r.lane=l,r.laneX+=an(r.lane*1.7-r.laneX,-9*t,9*t),this.updateJump(r,t),r.slideT>0&&(r.slideT-=t)})}place(t,e,n,i,r){t.root.position.set(pe(e)+n,Ce(e)+i,-e),t.root.rotation.y=nr(e),t.root.rotation.x=Math.atan(Oo(e))*r}animateRunners(t){let e=this.player,n=this.state==="title"||this.state==="countdown",i=an((e.lane*1.7-e.laneX)*.35,-.35,.35),r=n?"ready":"run";this.state==="finished"&&(r=(e.speed>1.5,"cheer")),this.state==="failed"&&(r=e.speed<2?"stand":"run"),e.runner.animate(t,{mode:r,speed:e.speed,airborne:e.jumpT>=0,sliding:e.slideT>0&&e.jumpT<0,lean:i}),this.place(e.runner,e.s,e.laneX,e.y,e.slideT>0?.9:.5),e.runner.root.visible=e.invuln<=0||Math.floor(this.time*14)%2===0,e.runner.footDown&&this.state==="running"&&(this.stepAlt=!this.stepAlt,this.audio.step(this.stepAlt),this.dust.emit(pe(e.s)+e.laneX,Ce(e.s)+.03,-e.s+.2,2,.25,.7));for(let o of this.rivals){let a=an((o.lane*1.7-o.laneX)*.35,-.3,.3),l=n?"ready":o.finishTime>0?o.speed>.5?"cheer":"stand":"run";o.runner.animate(t,{mode:l,speed:o.speed,airborne:o.jumpT>=0,sliding:o.slideT>0&&o.jumpT<0,lean:a}),this.place(o.runner,o.s,o.laneX,o.y,o.slideT>0?.9:.5),o.runner.root.visible=o.s-e.s<260&&o.s-e.s>-30,o.runner.footDown&&Math.abs(o.s-e.s)<25&&this.dust.emit(pe(o.s)+o.laneX,Ce(o.s)+.03,-o.s+.2,1,.25,.6)}}updateCamera(t){let e=this.player,n=this.camera,i=rx,r=ox,o=15,a=0;if(this.state==="title"){let v=this.time*.22;i=7.2+Math.sin(v)*.6,r=2.5+Math.sin(v*.7)*.25,a=Math.sin(v*.9)*1.6,o=14}let l=e.s-i,c=pe(l)+e.laneX*.6+a,h=Ce(l)+r+e.y*.22-(e.slideT>0?.25:0),u=-l,f=e.s+o,d=pe(f)+e.laneX*.3,g=Ce(f)+1.7,_=-f;if(this.snapCamera)this.camPos.set(c,h,u),this.camLook.set(d,g,_),this.snapCamera=!1;else{let v=1-Math.exp(-t*9);this.camPos.x+=(c-this.camPos.x)*v,this.camPos.y+=(h-this.camPos.y)*v,this.camPos.z=u,this.camLook.x+=(d-this.camLook.x)*v,this.camLook.y+=(g-this.camLook.y)*v,this.camLook.z=_}if(n.position.copy(this.camPos),this.shake>0){this.shake=Math.max(0,this.shake-t*2.6);let v=this.shake*this.shake*.28;n.position.x+=Math.sin(this.time*71)*v,n.position.y+=Math.cos(this.time*83)*v}n.lookAt(this.camLook);let m=an((e.speed-9)/8,0,1),p=this.baseFov+m*4+(e.boostT>0?5:0);Math.abs(p-n.fov)>.02&&(n.fov+=(p-n.fov)*Math.min(1,t*4),n.updateProjectionMatrix())}render(){let t=this.renderer;t.autoClear=!0,t.render(this.scene,this.camera),t.autoClear=!1,t.clearDepth(),t.render(this.hud.scene,this.hud.camera)}};var sa=[{dpr:2,shadow:1024,hi:2,grass:3,ahead:10},{dpr:1.5,shadow:1024,hi:1,grass:3,ahead:10},{dpr:1.5,shadow:512,hi:1,grass:2,ahead:9},{dpr:1.25,shadow:0,hi:0,grass:2,ahead:8},{dpr:1,shadow:0,hi:-1,grass:1,ahead:7}];function lx(){let s=ql(),t=du;t.addEventListener||(t.addEventListener=()=>{}),t.removeEventListener||(t.removeEventListener=()=>{}),t.style||(t.style={});let e={alpha:!1,antialias:!0,depth:!0,stencil:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"},n=t.getContext("webgl",e);if(!n)throw new Error("WebGL \u4E0D\u53EF\u7528");n.getContextAttributes||(n.getContextAttributes=()=>e);let i=new qs({canvas:t,context:n,antialias:!0,alpha:!1,powerPreference:"high-performance"});i.outputColorSpace=ue,i.toneMapping=Ol,i.toneMappingExposure=1,i.shadowMap.enabled=!0,i.shadowMap.type=Nl,i.setClearColor(10466504,1);let r=0,o=pu();o>0&&o<12?r=2:o>0&&o<22&&(r=1),typeof An.quality=="number"&&(r=Math.max(0,Math.min(sa.length-1,An.quality)));let a=()=>{let x=sa[r];i.setPixelRatio(Math.min(s.pixelRatio,x.dpr)),i.setSize(s.width,s.height,!1)};a();let l=new ia(i,s),c=()=>{let x=sa[r];l.env.setShadowQuality(x.shadow),l.terrain.setDetail(x.hi,x.grass,x.ahead),l.resize(s)};c(),vs.__mountainDash=l,vs.__mountainDashQuality=()=>r;let h=x=>{r=x,a(),c()};kt.onWindowResize&&kt.onWindowResize(()=>{s=ql(),a(),l.resize(s)});let u=Date.now(),f=!1;kt.onHide&&kt.onHide(()=>{f=!0,l.onHide()}),kt.onShow&&kt.onShow(()=>{f=!1,u=Date.now(),l.onShow()});try{kt.setKeepScreenOn&&kt.setKeepScreenOn({keepScreenOn:!0}),kt.showShareMenu&&kt.showShareMenu({withShareTicket:!1}),kt.onShareAppMessage&&kt.onShareAppMessage(()=>({title:"\u5C71\u91CE\u75BE\u9A70\uFF1A\u6765\u8DD1\u4E00\u573A 2000 \u7C73\u7684\u5C71\u5F84\u8D8A\u91CE\u8D5B"}))}catch(x){}let d=0,g=0,_=4,m=0,p=An.quality===void 0,v=()=>{if($l(v),f)return;let x=Date.now(),b=(x-u)/1e3;u=x;let R=Math.min(.05,Math.max(.001,b));if(l.update(R),l.render(),p&&!l.paused){if(_>0)_-=b;else if(b<.25&&(d+=b,g++,d>=2)){let S=g/d;d=0,g=0,m=S<44?m+1:0,m>=2&&r<sa.length-1&&(m=0,_=2,h(r+1))}}};$l(v)}try{lx()}catch(s){console.error("[mountain-dash] \u542F\u52A8\u5931\u8D25",s)}})();
