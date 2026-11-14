(()=>{var nc="160";var Bd=0,wh=1,kd=2;var uf=1,ic=2,ei=3,_n=0,Yt=1,bt=2;var vi=0,Cs=1,bo=2,Ah=3,Rh=4,Hd=5,Gi=100,zd=101,Gd=102,Ch=103,Ph=104,Vd=200,Wd=201,Xd=202,qd=203,bl=204,Sl=205,Yd=206,Kd=207,Zd=208,$d=209,Jd=210,jd=211,Qd=212,ep=213,tp=214,np=0,ip=1,sp=2,So=3,rp=4,op=5,ap=6,lp=7,sc=0,cp=1,hp=2,Mi=0,up=1,fp=2,dp=3,rc=4,pp=5,mp=6,Lh="attached",gp="detached",ff=300,Is=301,Ds=302,Tl=303,El=304,ra=306,xn=1e3,qt=1001,br=1002,At=1003,To=1004;var _r=1005;var Je=1006,oc=1007;var tn=1008;var bi=1009,_p=1010,xp=1011,ac=1012,df=1013,xi=1014,ni=1015,Sr=1016,pf=1017,mf=1018,Xi=1020,yp=1021,It=1023,vp=1024,Mp=1025,qi=1026,Ns=1027,bp=1028,gf=1029,Sp=1030,_f=1031,xf=1033,Ga=33776,Va=33777,Wa=33778,Xa=33779,Ih=35840,Dh=35841,Nh=35842,Uh=35843,yf=36196,Oh=37492,Fh=37496,Bh=37808,kh=37809,Hh=37810,zh=37811,Gh=37812,Vh=37813,Wh=37814,Xh=37815,qh=37816,Yh=37817,Kh=37818,Zh=37819,$h=37820,Jh=37821,qa=36492,jh=36494,Qh=36495,Tp=36283,eu=36284,tu=36285,nu=36286,lc=2200,cc=2201,Ep=2202,Us=2300,Ki=2301,Ya=2302,Es=2400,ws=2401,Eo=2402,hc=2500,wp=2501,vf=0,oa=1,Nr=2,Mf=3e3,Yi=3001,Ap=3200,uc=3201,fc=0,Rp=1,dt="",nt="srgb",Nt="srgb-linear",dc="display-p3",aa="display-p3-linear",wo="linear",ft="srgb",Ao="rec709",Ro="p3";var ss=7680;var iu=519,Cp=512,Pp=513,Lp=514,bf=515,Ip=516,Dp=517,Np=518,Up=519,wl=35044,li=35048;var su="300 es",Al=1035,ii=2e3,Co=2001,si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=1234567,xr=Math.PI/180,Os=180/Math.PI;function In(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[s&255]+Vt[s>>8&255]+Vt[s>>16&255]+Vt[s>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Xt(s,e,t){return Math.max(e,Math.min(t,s))}function pc(s,e){return(s%e+e)%e}function Op(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Fp(s,e,t){return s!==e?(t-s)/(e-s):0}function yr(s,e,t){return(1-t)*s+t*e}function Bp(s,e,t,n){return yr(s,e,1-Math.exp(-t*n))}function kp(s,e=1){return e-Math.abs(pc(s,e*2)-e)}function Hp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function zp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Gp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Vp(s,e){return s+Math.random()*(e-s)}function Wp(s){return s*(.5-Math.random())}function Xp(s){s!==void 0&&(ru=s);let e=ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qp(s){return s*xr}function Yp(s){return s*Os}function Rl(s){return(s&s-1)===0&&s!==0}function Kp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Po(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zp(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ys={DEG2RAD:xr,RAD2DEG:Os,generateUUID:In,clamp:Xt,euclideanModulo:pc,mapLinear:Op,inverseLerp:Fp,lerp:yr,damp:Bp,pingpong:kp,smoothstep:Hp,smootherstep:zp,randInt:Gp,randFloat:Vp,randFloatSpread:Wp,seededRandom:Xp,degToRad:qp,radToDeg:Yp,isPowerOfTwo:Rl,ceilPowerOfTwo:Kp,floorPowerOfTwo:Po,setQuaternionFromProperEuler:Zp,normalize:st,denormalize:Bn},Me=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],x=i[4],M=i[7],R=i[2],b=i[5],T=i[8];return r[0]=o*_+a*y+l*R,r[3]=o*m+a*x+l*b,r[6]=o*p+a*M+l*T,r[1]=c*_+h*y+u*R,r[4]=c*m+h*x+u*b,r[7]=c*p+h*M+u*T,r[2]=f*_+d*y+g*R,r[5]=f*m+d*x+g*b,r[8]=f*p+d*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ka=new Ve;function Sf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $p(){let s=Tr("canvas");return s.style.display="block",s}var ou={};function vr(s){s in ou||(ou[s]=!0,console.warn(s))}var au=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lu=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wr={[Nt]:{transfer:wo,primaries:Ao,toReference:s=>s,fromReference:s=>s},[nt]:{transfer:ft,primaries:Ao,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[aa]:{transfer:wo,primaries:Ro,toReference:s=>s.applyMatrix3(lu),fromReference:s=>s.applyMatrix3(au)},[dc]:{transfer:ft,primaries:Ro,toReference:s=>s.convertSRGBToLinear().applyMatrix3(lu),fromReference:s=>s.applyMatrix3(au).convertLinearToSRGB()}},Jp=new Set([Nt,aa]),je={enabled:!0,_workingColorSpace:Nt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Jp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Wr[e].toReference,i=Wr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Wr[s].primaries},getTransfer:function(s){return s===dt?wo:Wr[s].transfer}};function Ps(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Za(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var rs,Lo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=Tr("canvas")),rs.width=e.width,rs.height=e.height;let n=rs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ps(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ps(t[n]/255)*255):t[n]=Ps(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jp=0,Io=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=In(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push($a(i[o].image)):r.push($a(i[o]))}else r=$a(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function $a(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Lo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qp=0,Ut=class s extends si{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=qt,i=qt,r=Je,o=tn,a=It,l=bi,c=s.DEFAULT_ANISOTROPY,h=dt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=In(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Yi?nt:dt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xn:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xn:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nt?Yi:Mf}set encoding(e){vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yi?nt:dt}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=ff;Ut.DEFAULT_ANISOTROPY=1;var at=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,M=(d+1)/2,R=(p+1)/2,b=(h+f)/4,T=(u+_)/4,P=(g+m)/4;return x>M&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=T/n):M>R?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=T/r,i=P/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cl=class extends si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(vr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yi?nt:dt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ut(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Io(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends Cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Do=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pl=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let R=Math.sqrt(x),b=Math.atan2(R,p*y);m=Math.sin(m*b)/R,a=Math.sin(a*b)/R}let M=a*y;if(l=l*m+f*M,c=c*m+d*M,h=h*m+g*M,u=u*m+_*M,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ja=new C,cu=new Kt,yn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),qr.subVectors(this.max,ar),os.subVectors(e.a,ar),as.subVectors(e.b,ar),ls.subVectors(e.c,ar),di.subVectors(as,os),pi.subVectors(ls,as),Fi.subVectors(os,ls);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Fi.z,Fi.y,di.z,0,-di.x,pi.z,0,-pi.x,Fi.z,0,-Fi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Fi.y,Fi.x,0];return!ja(t,os,as,ls,qr)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,os,as,ls,qr))?!1:(Yr.crossVectors(di,pi),t=[Yr.x,Yr.y,Yr.z],ja(t,os,as,ls,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Kn=[new C,new C,new C,new C,new C,new C,new C,new C],Cn=new C,Xr=new yn,os=new C,as=new C,ls=new C,di=new C,pi=new C,Fi=new C,ar=new C,qr=new C,Yr=new C,Bi=new C;function ja(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Bi.fromArray(s,r);let a=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var em=new yn,lr=new C,Qa=new C,nn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):em.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);let t=lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(lr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(Qa)),this.expandByPoint(lr.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new C,el=new C,Kr=new C,mi=new C,tl=new C,Zr=new C,nl=new C,Fs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){el.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(el);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Kr),a=mi.dot(this.direction),l=-mi.dot(Kr),c=mi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(el).addScaledVector(Kr,f),d}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);let n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,i,r){tl.subVectors(t,e),Zr.subVectors(n,e),nl.crossVectors(tl,Zr);let o=this.direction.dot(nl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);let l=a*this.direction.dot(Zr.crossVectors(mi,Zr));if(l<0)return null;let c=a*this.direction.dot(tl.cross(mi));if(c<0||l+c>o)return null;let h=-a*mi.dot(nl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,g,_,m)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tm,e,nm)}lookAt(e,t,n){let i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),gi.crossVectors(n,fn),gi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),gi.crossVectors(n,fn)),gi.normalize(),$r.crossVectors(fn,gi),i[0]=gi.x,i[4]=$r.x,i[8]=fn.x,i[1]=gi.y,i[5]=$r.y,i[9]=fn.y,i[2]=gi.z,i[6]=$r.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],M=n[11],R=n[15],b=i[0],T=i[4],P=i[8],v=i[12],S=i[1],D=i[5],H=i[9],K=i[13],I=i[2],U=i[6],z=i[10],q=i[14],W=i[3],X=i[7],Y=i[11],j=i[15];return r[0]=o*b+a*S+l*I+c*W,r[4]=o*T+a*D+l*U+c*X,r[8]=o*P+a*H+l*z+c*Y,r[12]=o*v+a*K+l*q+c*j,r[1]=h*b+u*S+f*I+d*W,r[5]=h*T+u*D+f*U+d*X,r[9]=h*P+u*H+f*z+d*Y,r[13]=h*v+u*K+f*q+d*j,r[2]=g*b+_*S+m*I+p*W,r[6]=g*T+_*D+m*U+p*X,r[10]=g*P+_*H+m*z+p*Y,r[14]=g*v+_*K+m*q+p*j,r[3]=y*b+x*S+M*I+R*W,r[7]=y*T+x*D+M*U+R*X,r[11]=y*P+x*H+M*z+R*Y,r[15]=y*v+x*K+M*q+R*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,x=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,M=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,R=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,b=t*y+n*x+i*M+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return e[0]=y*T,e[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*T,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*T,e[4]=x*T,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*p+t*f*p)*T,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*T,e[8]=M*T,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*T,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*T,e[12]=R*T,e[13]=(h*_*i-g*u*i+g*n*f-t*_*f-h*n*m+t*u*m)*T,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=l*c,x=l*h,M=l*u,R=n.x,b=n.y,T=n.z;return i[0]=(1-(_+p))*R,i[1]=(d+M)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(d-M)*b,i[5]=(1-(f+p))*b,i[6]=(m+y)*b,i[7]=0,i[8]=(g+x)*T,i[9]=(m-y)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=cs.set(i[0],i[1],i[2]).length(),o=cs.set(i[4],i[5],i[6]).length(),a=cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Pn.copy(this);let c=1/r,h=1/o,u=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ii){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,g;if(a===ii)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Co)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ii){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*c,d=(n+i)*h,g,_;if(a===ii)g=(o+r)*u,_=-2*u;else if(a===Co)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cs=new C,Pn=new Ue,tm=new C(0,0,0),nm=new C(1,1,1),gi=new C,$r=new C,fn=new C,hu=new Ue,uu=new Kt,Bs=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bs.DEFAULT_ORDER="XYZ";var No=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},im=0,fu=new C,hs=new Kt,$n=new Ue,Jr=new C,cr=new C,sm=new C,rm=new Kt,du=new C(1,0,0),pu=new C(0,1,0),mu=new C(0,0,1),om={type:"added"},am={type:"removed"},mt=class s extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new C,t=new Bs,n=new Kt,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ve}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(pu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(pu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jr.copy(e):Jr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(cr,Jr,this.up):$n.lookAt(Jr,cr,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),hs.setFromRotationMatrix($n),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(om)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(am)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,sm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,rm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};mt.DEFAULT_UP=new C(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new C,Jn=new C,il=new C,jn=new C,us=new C,fs=new C,gu=new C,sl=new C,rl=new C,ol=new C,jr=!1,Wi=class s{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ln.subVectors(e,t),i.cross(Ln);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ln.subVectors(i,t),Jn.subVectors(n,t),il.subVectors(e,t);let o=Ln.dot(Ln),a=Ln.dot(Jn),l=Ln.dot(il),c=Jn.dot(Jn),h=Jn.dot(il),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(e,t,n,i,r,o,a,l){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static isFrontFacing(e,t,n,i){return Ln.subVectors(n,t),Jn.subVectors(e,t),Ln.cross(Jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Ln.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;us.subVectors(i,n),fs.subVectors(r,n),sl.subVectors(e,n);let l=us.dot(sl),c=fs.dot(sl);if(l<=0&&c<=0)return t.copy(n);rl.subVectors(e,i);let h=us.dot(rl),u=fs.dot(rl);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(us,o);ol.subVectors(e,r);let d=us.dot(ol),g=fs.dot(ol);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(fs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return gu.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(gu,a);let p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(us,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function al(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=pc(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=al(o,r,e+1/3),this.g=al(o,r,e),this.b=al(o,r,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){let n=Tf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return je.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Xt(Wt.r*255,0,255))*65536+Math.round(Xt(Wt.g*255,0,255))*256+Math.round(Xt(Wt.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Wt.copy(this),t);let n=Wt.r,i=Wt.g,r=Wt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=nt){je.fromWorkingColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,i=Wt.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Qr);let n=yr(_i.h,Qr.h,t),i=yr(_i.s,Qr.s,t),r=yr(_i.l,Qr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new ce;ce.NAMES=Tf;var lm=0,sn=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Cs,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Sl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bl&&(n.blendSrc=this.blendSrc),this.blendDst!==Sl&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},kn=class extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new C,eo=new Me,qe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wl&&(e.usage=this.usage),e}};var Uo=class extends qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Oo=class extends qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends qe{constructor(e,t,n){super(new Float32Array(e),t,n)}};var cm=0,gn=new Ue,ll=new mt,ds=new C,dn=new yn,hr=new yn,Ht=new C,lt=class s extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sf(e)?Oo:Uo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(dn.min,hr.min),dn.expandByPoint(Ht),Ht.addVectors(dn.max,hr.max),dn.expandByPoint(Ht)):(dn.expandByPoint(hr.min),dn.expandByPoint(hr.max))}dn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ht.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(e,c),Ht.add(ds)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new C,h[S]=new C;let u=new C,f=new C,d=new C,g=new Me,_=new Me,m=new Me,p=new C,y=new C;function x(S,D,H){u.fromArray(i,S*3),f.fromArray(i,D*3),d.fromArray(i,H*3),g.fromArray(o,S*2),_.fromArray(o,D*2),m.fromArray(o,H*2),f.sub(u),d.sub(u),_.sub(g),m.sub(g);let K=1/(_.x*m.y-m.x*_.y);isFinite(K)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(K),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(K),c[S].add(p),c[D].add(p),c[H].add(p),h[S].add(y),h[D].add(y),h[H].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let S=0,D=M.length;S<D;++S){let H=M[S],K=H.start,I=H.count;for(let U=K,z=K+I;U<z;U+=3)x(n[U+0],n[U+1],n[U+2])}let R=new C,b=new C,T=new C,P=new C;function v(S){T.fromArray(r,S*3),P.copy(T);let D=c[S];R.copy(D),R.sub(T.multiplyScalar(T.dot(D))).normalize(),b.crossVectors(P,D);let K=b.dot(h[S])<0?-1:1;l[S*4]=R.x,l[S*4+1]=R.y,l[S*4+2]=R.z,l[S*4+3]=K}for(let S=0,D=M.length;S<D;++S){let H=M[S],K=H.start,I=H.count;for(let U=K,z=K+I;U<z;U+=3)v(n[U+0]),v(n[U+1]),v(n[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new qe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_u=new Ue,ki=new Fs,to=new nn,xu=new C,ps=new C,ms=new C,gs=new C,cl=new C,no=new C,io=new Me,so=new Me,ro=new Me,yu=new C,vu=new C,Mu=new C,oo=new C,ao=new C,We=class extends mt{constructor(e=new lt,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(cl.fromBufferAttribute(u,e),o?no.addScaledVector(cl,h):no.addScaledVector(cl.sub(t),h))}t.add(no)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(to.containsPoint(ki.origin)===!1&&(ki.intersectSphere(to,xu)===null||ki.origin.distanceToSquared(xu)>(e.far-e.near)**2))&&(_u.copy(r).invert(),ki.copy(e.ray).applyMatrix4(_u),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,R=x;M<R;M+=3){let b=a.getX(M),T=a.getX(M+1),P=a.getX(M+2);i=lo(this,p,e,n,c,h,u,b,T,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);i=lo(this,o,e,n,c,h,u,y,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,R=x;M<R;M+=3){let b=M,T=M+1,P=M+2;i=lo(this,p,e,n,c,h,u,b,T,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=m,x=m+1,M=m+2;i=lo(this,o,e,n,c,h,u,y,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function hm(s,e,t,n,i,r,o,a){let l;if(e.side===Yt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===_n,a),l===null)return null;ao.copy(a),ao.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ao);return c<t.near||c>t.far?null:{distance:c,point:ao.clone(),object:s}}function lo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ps),s.getVertexPosition(l,ms),s.getVertexPosition(c,gs);let h=hm(s,e,t,n,ps,ms,gs,oo);if(h){i&&(io.fromBufferAttribute(i,a),so.fromBufferAttribute(i,l),ro.fromBufferAttribute(i,c),h.uv=Wi.getInterpolation(oo,ps,ms,gs,io,so,ro,new Me)),r&&(io.fromBufferAttribute(r,a),so.fromBufferAttribute(r,l),ro.fromBufferAttribute(r,c),h.uv1=Wi.getInterpolation(oo,ps,ms,gs,io,so,ro,new Me),h.uv2=h.uv1),o&&(yu.fromBufferAttribute(o,a),vu.fromBufferAttribute(o,l),Mu.fromBufferAttribute(o,c),h.normal=Wi.getInterpolation(oo,ps,ms,gs,yu,vu,Mu,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};Wi.getNormal(ps,ms,gs,u.normal),h.face=u}return h}var Zi=class s extends lt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function g(_,m,p,y,x,M,R,b,T,P,v){let S=M/T,D=R/P,H=M/2,K=R/2,I=b/2,U=T+1,z=P+1,q=0,W=0,X=new C;for(let Y=0;Y<z;Y++){let j=Y*D-K;for(let ie=0;ie<U;ie++){let V=ie*S-H;X[_]=V*y,X[m]=j*x,X[p]=I,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=b>0?1:-1,h.push(X.x,X.y,X.z),u.push(ie/T),u.push(1-Y/P),q+=1}}for(let Y=0;Y<P;Y++)for(let j=0;j<T;j++){let ie=f+j+U*Y,V=f+j+U*(Y+1),Z=f+(j+1)+U*(Y+1),le=f+(j+1)+U*Y;l.push(ie,V,le),l.push(V,Z,le),W+=6}a.addGroup(d,W,v),d+=W,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ks(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function en(s){let e={};for(let t=0;t<s.length;t++){let n=ks(s[t]);for(let i in n)e[i]=n[i]}return e}function um(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ef(s){return s.getRenderTarget()===null?s.outputColorSpace:je.workingColorSpace}var fm={clone:ks,merge:en},dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zt=class extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=um(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Fo=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Lt=class extends Fo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_s=-90,xs=1,Ll=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Lt(_s,xs,e,t);i.layers=this.layers,this.add(i);let r=new Lt(_s,xs,e,t);r.layers=this.layers,this.add(r);let o=new Lt(_s,xs,e,t);o.layers=this.layers,this.add(o);let a=new Lt(_s,xs,e,t);a.layers=this.layers,this.add(a);let l=new Lt(_s,xs,e,t);l.layers=this.layers,this.add(l);let c=new Lt(_s,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Bo=class extends Ut{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Il=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(vr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Yi?nt:dt),this.texture=new Bo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Je}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zi(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:vi});r.uniforms.tEquirect.value=t;let o=new We(i,r),a=t.minFilter;return t.minFilter===tn&&(t.minFilter=Je),new Ll(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},hl=new C,mm=new C,gm=new Ve,ti=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=hl.subVectors(n,t).cross(mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gm.getNormalMatrix(e),i=this.coplanarPoint(hl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new nn,co=new C,Er=class{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,o=new ti){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-r,f-c,m-d,M-p).normalize(),n[1].setComponents(l+r,f+c,m+d,M+p).normalize(),n[2].setComponents(l+o,f+h,m+g,M+y).normalize(),n[3].setComponents(l-o,f-h,m-g,M-y).normalize(),n[4].setComponents(l-a,f-u,m-_,M-x).normalize(),t===ii)n[5].setComponents(l+a,f+u,m+_,M+x).normalize();else if(t===Co)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(co.x=i.normal.x>0?e.max.x:e.min.x,co.y=i.normal.y>0?e.max.y:e.min.y,co.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function _m(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),d.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Hn=class s extends lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let x=0;x<c;x++){let M=x*u-r;g.push(M,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let x=y+c*p,M=y+c*(p+1),R=y+1+c*(p+1),b=y+1+c*p;d.push(x,M,b),d.push(M,R,b)}this.setIndex(d),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ym=`#ifdef USE_ALPHAHASH
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
#endif`,vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tm=`#ifdef USE_AOMAP
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
#endif`,Em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm=`#ifdef USE_BATCHING
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
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lm=`#ifdef USE_IRIDESCENCE
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
#endif`,Im=`#ifdef USE_BUMPMAP
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zm=`#define PI 3.141592653589793
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
} // validated`,Gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`
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
}`,$m=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,o0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h0=`uniform bool receiveShadow;
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
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,f0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g0=`PhysicalMaterial material;
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
#endif`,_0=`struct PhysicalMaterial {
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
}`,x0=`
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I0=`#ifdef USE_MORPHNORMALS
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
#endif`,D0=`#ifdef USE_MORPHTARGETS
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
#endif`,N0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H0=`#ifdef USE_NORMALMAP
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
#endif`,z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ng=`float getShadowMask() {
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
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`uniform sampler2D t2D;
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
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
}`,Tg=`#if DEPTH_PACKING == 3200
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
}`,Eg=`#define DISTANCE
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
}`,wg=`#define DISTANCE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Dg=`#define LAMBERT
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
}`,Ng=`#define LAMBERT
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
}`,Ug=`#define MATCAP
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
}`,Og=`#define MATCAP
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
}`,Fg=`#define NORMAL
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
}`,Bg=`#define NORMAL
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
}`,kg=`#define PHONG
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
}`,Hg=`#define PHONG
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
}`,zg=`#define STANDARD
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
}`,Gg=`#define STANDARD
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
}`,Vg=`#define TOON
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
}`,Wg=`#define TOON
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
}`,Xg=`uniform float size;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#include <common>
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
}`,Kg=`uniform vec3 color;
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
}`,Zg=`uniform float rotation;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:xm,alphahash_pars_fragment:ym,alphamap_fragment:vm,alphamap_pars_fragment:Mm,alphatest_fragment:bm,alphatest_pars_fragment:Sm,aomap_fragment:Tm,aomap_pars_fragment:Em,batching_pars_vertex:wm,batching_vertex:Am,begin_vertex:Rm,beginnormal_vertex:Cm,bsdfs:Pm,iridescence_fragment:Lm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Om,color_fragment:Fm,color_pars_fragment:Bm,color_pars_vertex:km,color_vertex:Hm,common:zm,cube_uv_reflection_fragment:Gm,defaultnormal_vertex:Vm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:qm,emissivemap_pars_fragment:Ym,colorspace_fragment:Km,colorspace_pars_fragment:Zm,envmap_fragment:$m,envmap_common_pars_fragment:Jm,envmap_pars_fragment:jm,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:u0,envmap_vertex:e0,fog_vertex:t0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_fragment:o0,lightmap_pars_fragment:a0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:c0,lights_pars_begin:h0,lights_toon_fragment:f0,lights_toon_pars_fragment:d0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:g0,lights_physical_pars_fragment:_0,lights_fragment_begin:x0,lights_fragment_maps:y0,lights_fragment_end:v0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:b0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:T0,map_fragment:E0,map_pars_fragment:w0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:P0,morphcolor_vertex:L0,morphnormal_vertex:I0,morphtarget_pars_vertex:D0,morphtarget_vertex:N0,normal_fragment_begin:U0,normal_fragment_maps:O0,normal_pars_fragment:F0,normal_pars_vertex:B0,normal_vertex:k0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:z0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:W0,opaque_fragment:X0,packing:q0,premultiplied_alpha_fragment:Y0,project_vertex:K0,dithering_fragment:Z0,dithering_pars_fragment:$0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:eg,shadowmap_vertex:tg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:sg,skinning_vertex:rg,skinnormal_vertex:og,specularmap_fragment:ag,specularmap_pars_fragment:lg,tonemapping_fragment:cg,tonemapping_pars_fragment:hg,transmission_fragment:ug,transmission_pars_fragment:fg,uv_pars_fragment:dg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:_g,background_frag:xg,backgroundCube_vert:yg,backgroundCube_frag:vg,cube_vert:Mg,cube_frag:bg,depth_vert:Sg,depth_frag:Tg,distanceRGBA_vert:Eg,distanceRGBA_frag:wg,equirect_vert:Ag,equirect_frag:Rg,linedashed_vert:Cg,linedashed_frag:Pg,meshbasic_vert:Lg,meshbasic_frag:Ig,meshlambert_vert:Dg,meshlambert_frag:Ng,meshmatcap_vert:Ug,meshmatcap_frag:Og,meshnormal_vert:Fg,meshnormal_frag:Bg,meshphong_vert:kg,meshphong_frag:Hg,meshphysical_vert:zg,meshphysical_frag:Gg,meshtoon_vert:Vg,meshtoon_frag:Wg,points_vert:Xg,points_frag:qg,shadow_vert:Yg,shadow_frag:Kg,sprite_vert:Zg,sprite_frag:$g},ne={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Fn={basic:{uniforms:en([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:en([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ce(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:en([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:en([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:en([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ce(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:en([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:en([ne.points,ne.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:en([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:en([ne.common,ne.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:en([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:en([ne.sprite,ne.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:en([ne.common,ne.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:en([ne.lights,ne.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Fn.physical={uniforms:en([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};var ho={r:0,b:0,g:0};function Jg(s,e,t,n,i,r,o){let a=new ce(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),y=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ra)?(h===void 0&&(h=new We(new Zi(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:ks(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=je.getTransfer(x.colorSpace)!==ft,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new We(new Hn(2,2),new zt({name:"BackgroundMaterial",uniforms:ks(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=je.getTransfer(x.colorSpace)!==ft,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(ho,Ef(s)),n.buffers.color.setClear(ho.r,ho.g,ho.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function jg(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(I,U,z,q,W){let X=!1;if(o){let Y=_(q,z,U);c!==Y&&(c=Y,d(c.object)),X=p(I,q,z,W),X&&y(I,q,z,W)}else{let Y=U.wireframe===!0;(c.geometry!==q.id||c.program!==z.id||c.wireframe!==Y)&&(c.geometry=q.id,c.program=z.id,c.wireframe=Y,X=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,P(I,U,z,q),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,U,z){let q=z.wireframe===!0,W=a[I.id];W===void 0&&(W={},a[I.id]=W);let X=W[U.id];X===void 0&&(X={},W[U.id]=X);let Y=X[q];return Y===void 0&&(Y=m(f()),X[q]=Y),Y}function m(I){let U=[],z=[],q=[];for(let W=0;W<i;W++)U[W]=0,z[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:q,object:I,attributes:{},index:null}}function p(I,U,z,q){let W=c.attributes,X=U.attributes,Y=0,j=z.getAttributes();for(let ie in j)if(j[ie].location>=0){let Z=W[ie],le=X[ie];if(le===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),Z===void 0||Z.attribute!==le||le&&Z.data!==le.data)return!0;Y++}return c.attributesNum!==Y||c.index!==q}function y(I,U,z,q){let W={},X=U.attributes,Y=0,j=z.getAttributes();for(let ie in j)if(j[ie].location>=0){let Z=X[ie];Z===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));let le={};le.attribute=Z,Z&&Z.data&&(le.data=Z.data),W[ie]=le,Y++}c.attributes=W,c.attributesNum=Y,c.index=q}function x(){let I=c.newAttributes;for(let U=0,z=I.length;U<z;U++)I[U]=0}function M(I){R(I,0)}function R(I,U){let z=c.newAttributes,q=c.enabledAttributes,W=c.attributeDivisors;z[I]=1,q[I]===0&&(s.enableVertexAttribArray(I),q[I]=1),W[I]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,U),W[I]=U)}function b(){let I=c.newAttributes,U=c.enabledAttributes;for(let z=0,q=U.length;z<q;z++)U[z]!==I[z]&&(s.disableVertexAttribArray(z),U[z]=0)}function T(I,U,z,q,W,X,Y){Y===!0?s.vertexAttribIPointer(I,U,z,W,X):s.vertexAttribPointer(I,U,z,q,W,X)}function P(I,U,z,q){if(n.isWebGL2===!1&&(I.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let W=q.attributes,X=z.getAttributes(),Y=U.defaultAttributeValues;for(let j in X){let ie=X[j];if(ie.location>=0){let V=W[j];if(V===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){let Z=V.normalized,le=V.itemSize,xe=t.get(V);if(xe===void 0)continue;let _e=xe.buffer,De=xe.type,Oe=xe.bytesPerElement,we=n.isWebGL2===!0&&(De===s.INT||De===s.UNSIGNED_INT||V.gpuType===df);if(V.isInterleavedBufferAttribute){let Ke=V.data,O=Ke.stride,$t=V.offset;if(Ke.isInstancedInterleavedBuffer){for(let be=0;be<ie.locationSize;be++)R(ie.location+be,Ke.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let be=0;be<ie.locationSize;be++)M(ie.location+be);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let be=0;be<ie.locationSize;be++)T(ie.location+be,le/ie.locationSize,De,Z,O*Oe,($t+le/ie.locationSize*be)*Oe,we)}else{if(V.isInstancedBufferAttribute){for(let Ke=0;Ke<ie.locationSize;Ke++)R(ie.location+Ke,V.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ke=0;Ke<ie.locationSize;Ke++)M(ie.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Ke=0;Ke<ie.locationSize;Ke++)T(ie.location+Ke,le/ie.locationSize,De,Z,le*Oe,le/ie.locationSize*Ke*Oe,we)}}else if(Y!==void 0){let Z=Y[j];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(ie.location,Z);break;case 3:s.vertexAttrib3fv(ie.location,Z);break;case 4:s.vertexAttrib4fv(ie.location,Z);break;default:s.vertexAttrib1fv(ie.location,Z)}}}}b()}function v(){H();for(let I in a){let U=a[I];for(let z in U){let q=U[z];for(let W in q)g(q[W].object),delete q[W];delete U[z]}delete a[I]}}function S(I){if(a[I.id]===void 0)return;let U=a[I.id];for(let z in U){let q=U[z];for(let W in q)g(q[W].object),delete q[W];delete U[z]}delete a[I.id]}function D(I){for(let U in a){let z=a[U];if(z[I.id]===void 0)continue;let q=z[I.id];for(let W in q)g(q[W].object),delete q[W];delete z[I.id]}}function H(){K(),h=!0,c!==l&&(c=l,d(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:K,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:M,disableUnusedAttributes:b}}function Qg(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function e_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=o||e.has("OES_texture_float"),R=x&&M,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:b}}function t_(s){let e=this,t=null,n=0,i=!1,r=!1,o=new ti,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,x=y*4,M=p.clippingState||null;l.value=M,M=h(g,f,x,d);for(let R=0;R!==x;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=d;x!==_;++x,M+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function n_(s){let e=new WeakMap;function t(o,a){return a===Tl?o.mapping=Is:a===El&&(o.mapping=Ds),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Tl||a===El)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Il(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Si=class extends Fo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},As=4,bu=[.125,.215,.35,.446,.526,.582],Vi=20,ul=new Si,Su=new ce,fl=null,dl=0,pl=0,zi=(1+Math.sqrt(5))/2,ys=1/zi,Tu=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,zi,ys),new C(0,zi,-ys),new C(ys,0,zi),new C(-ys,0,zi),new C(zi,ys,0),new C(-zi,ys,0)],ko=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,dl,pl),e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Sr,format:It,colorSpace:Nt,depthBuffer:!1},i=Eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i_(r)),this._blurMaterial=s_(r,e,t)}return i}_compileMaterial(e){let t=new We(this._lodPlanes[0],e);this._renderer.compile(t,ul)}_sceneToCubeUV(e,t,n,i){let a=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Su),h.toneMapping=Mi,h.autoClear=!1;let d=new kn({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new We(new Zi,d),_=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Su),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;uo(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Is||e.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;uo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ul)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Tu[(i-1)%Tu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new We(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Vi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);let p=[],y=0;for(let T=0;T<Vi;++T){let P=T/_,v=Math.exp(-P*P/2);p.push(v),T===0?y+=v:T<m&&(y+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let M=this._sizeLods[i],R=3*M*(i>x-As?i-x+As:0),b=4*(this._cubeSize-M);uo(t,R,b,3*M,2*M),l.setRenderTarget(t),l.render(u,ul)}};function i_(s){let e=[],t=[],n=[],i=s,r=s-As+1+bu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-As?l=bu[o-s+As-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let b=0;b<d;b++){let T=b%3*2/3-1,P=b>2?0:-1,v=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(v,_*g*b),x.set(f,m*g*b);let S=[b,b,b,b,b,b];M.set(S,p*g*b)}let R=new lt;R.setAttribute("position",new qe(y,_)),R.setAttribute("uv",new qe(x,m)),R.setAttribute("faceIndex",new qe(M,p)),e.push(R),i>As&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eu(s,e,t){let n=new ri(s,e,t);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function s_(s,e,t){let n=new Float32Array(Vi),i=new C(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function wu(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Au(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}function r_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Tl||l===El,h=l===Is||l===Ds;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ko(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new ko(s));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function o_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function a_(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let y=d.array;_=d.version;for(let x=0,M=y.length;x<M;x+=3){let R=y[x+0],b=y[x+1],T=y[x+2];f.push(R,b,b,T,T,R)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let R=x+0,b=x+1,T=x+2;f.push(R,b,b,T,T,R)}}else return;let m=new(Sf(f)?Oo:Uo)(f,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function l_(s,e,t,n){let i=n.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){s.drawElements(r,g,a,d*l),t.update(g,r,1)}function u(d,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,_),t.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function c_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function h_(s,e){return s[0]-e[0]}function u_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function f_(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new at,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(h);if(_===void 0||_.count!==g){let I=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],P=0;y===!0&&(P=1),x===!0&&(P=2),M===!0&&(P=3);let v=h.attributes.position.count*P,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let D=new Float32Array(v*S*4*g),H=new Do(D,v,S,g);H.type=ni,H.needsUpdate=!0;let K=P*4;for(let U=0;U<g;U++){let z=R[U],q=b[U],W=T[U],X=v*S*4*U;for(let Y=0;Y<z.count;Y++){let j=Y*K;y===!0&&(o.fromBufferAttribute(z,Y),D[X+j+0]=o.x,D[X+j+1]=o.y,D[X+j+2]=o.z,D[X+j+3]=0),x===!0&&(o.fromBufferAttribute(q,Y),D[X+j+4]=o.x,D[X+j+5]=o.y,D[X+j+6]=o.z,D[X+j+7]=0),M===!0&&(o.fromBufferAttribute(W,Y),D[X+j+8]=o.x,D[X+j+9]=o.y,D[X+j+10]=o.z,D[X+j+11]=W.itemSize===4?o.w:1)}}_={count:g,texture:H,size:new Me(v,S)},r.set(h,_),h.addEventListener("dispose",I)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<d;x++){let M=g[x];M[0]=x,M[1]=f[x]}g.sort(u_);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(h_);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=a[x],R=M[0],b=M[1];R!==Number.MAX_SAFE_INTEGER&&b?(_&&h.getAttribute("morphTarget"+x)!==_[R]&&h.setAttribute("morphTarget"+x,_[R]),m&&h.getAttribute("morphNormal"+x)!==m[R]&&h.setAttribute("morphNormal"+x,m[R]),i[x]=b,p+=b):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function d_(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ho=class extends Ut{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:qi,h!==qi&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qi&&(n=xi),n===void 0&&h===Ns&&(n=Xi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Af=new Ut,Rf=new Ho(1,1);Rf.compareFunction=bf;var Cf=new Do,Pf=new Pl,Lf=new Bo,Ru=[],Cu=[],Pu=new Float32Array(16),Lu=new Float32Array(9),Iu=new Float32Array(4);function Ks(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Ru[i];if(r===void 0&&(r=new Float32Array(i),Ru[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ot(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function la(s,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function p_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function m_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2fv(this.addr,e),Ft(t,e)}}function g_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;s.uniform3fv(this.addr,e),Ft(t,e)}}function __(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4fv(this.addr,e),Ft(t,e)}}function x_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Iu.set(n),s.uniformMatrix2fv(this.addr,!1,Iu),Ft(t,n)}}function y_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Lu.set(n),s.uniformMatrix3fv(this.addr,!1,Lu),Ft(t,n)}}function v_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Pu.set(n),s.uniformMatrix4fv(this.addr,!1,Pu),Ft(t,n)}}function M_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function b_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2iv(this.addr,e),Ft(t,e)}}function S_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3iv(this.addr,e),Ft(t,e)}}function T_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4iv(this.addr,e),Ft(t,e)}}function E_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function w_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2uiv(this.addr,e),Ft(t,e)}}function A_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3uiv(this.addr,e),Ft(t,e)}}function R_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4uiv(this.addr,e),Ft(t,e)}}function C_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Rf:Af;t.setTexture2D(e||r,i)}function P_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pf,i)}function L_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lf,i)}function I_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cf,i)}function D_(s){switch(s){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return x_;case 35675:return y_;case 35676:return v_;case 5124:case 35670:return M_;case 35667:case 35671:return b_;case 35668:case 35672:return S_;case 35669:case 35673:return T_;case 5125:return E_;case 36294:return w_;case 36295:return A_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return I_}}function N_(s,e){s.uniform1fv(this.addr,e)}function U_(s,e){let t=Ks(e,this.size,2);s.uniform2fv(this.addr,t)}function O_(s,e){let t=Ks(e,this.size,3);s.uniform3fv(this.addr,t)}function F_(s,e){let t=Ks(e,this.size,4);s.uniform4fv(this.addr,t)}function B_(s,e){let t=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function k_(s,e){let t=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function H_(s,e){let t=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function z_(s,e){s.uniform1iv(this.addr,e)}function G_(s,e){s.uniform2iv(this.addr,e)}function V_(s,e){s.uniform3iv(this.addr,e)}function W_(s,e){s.uniform4iv(this.addr,e)}function X_(s,e){s.uniform1uiv(this.addr,e)}function q_(s,e){s.uniform2uiv(this.addr,e)}function Y_(s,e){s.uniform3uiv(this.addr,e)}function K_(s,e){s.uniform4uiv(this.addr,e)}function Z_(s,e,t){let n=this.cache,i=e.length,r=la(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Af,r[o])}function $_(s,e,t){let n=this.cache,i=e.length,r=la(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Pf,r[o])}function J_(s,e,t){let n=this.cache,i=e.length,r=la(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Lf,r[o])}function j_(s,e,t){let n=this.cache,i=e.length,r=la(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Cf,r[o])}function Q_(s){switch(s){case 5126:return N_;case 35664:return U_;case 35665:return O_;case 35666:return F_;case 35674:return B_;case 35675:return k_;case 35676:return H_;case 5124:case 35670:return z_;case 35667:case 35671:return G_;case 35668:case 35672:return V_;case 35669:case 35673:return W_;case 5125:return X_;case 36294:return q_;case 36295:return Y_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return j_}}var Dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=D_(t.type)}},Nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Q_(t.type)}},Ul=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},ml=/(\w+)(\])?(\[|\.)?/g;function Du(s,e){s.seq.push(e),s.map[e.id]=e}function ex(s,e,t){let n=s.name,i=n.length;for(ml.lastIndex=0;;){let r=ml.exec(n),o=ml.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Du(t,c===void 0?new Dl(a,s,e):new Nl(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Ul(a),Du(t,u)),t=u}}}var Ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);ex(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Nu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var tx=37297,nx=0;function ix(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function sx(s){let e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(s),n;switch(e===t?n="":e===Ro&&t===Ao?n="LinearDisplayP3ToLinearSRGB":e===Ao&&t===Ro&&(n="LinearSRGBToLinearDisplayP3"),s){case Nt:case aa:return[n,"LinearTransferOETF"];case nt:case dc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Uu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+ix(s.getShaderSource(e),o)}else return i}function rx(s,e){let t=sx(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ox(s,e){let t;switch(e){case up:t="Linear";break;case fp:t="Reinhard";break;case dp:t="OptimizedCineon";break;case rc:t="ACESFilmic";break;case mp:t="AgX";break;case pp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ax(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rs).join(`
`)}function lx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Rs).join(`
`)}function cx(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hx(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Rs(s){return s!==""}function Ou(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(s){return s.replace(ux,dx)}var fx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dx(s,e){let t=Ie[e];if(t===void 0){let n=fx.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}var px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(s){return s.replace(px,mx)}function mx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ku(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===uf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ic?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function _x(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Ds:e="ENVMAP_TYPE_CUBE";break;case ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function yx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sc:e="ENVMAP_BLENDING_MULTIPLY";break;case cp:e="ENVMAP_BLENDING_MIX";break;case hp:e="ENVMAP_BLENDING_ADD";break}return e}function vx(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Mx(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=gx(t),c=_x(t),h=xx(t),u=yx(t),f=vx(t),d=t.isWebGL2?"":ax(t),g=lx(t),_=cx(r),m=i.createProgram(),p,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Rs).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Rs).join(`
`),y.length>0&&(y+=`
`)):(p=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),y=[d,ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Mi?ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,rx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Ol(o),o=Ou(o,t),o=Fu(o,t),a=Ol(a),a=Ou(a,t),a=Fu(a,t),o=Bu(o),a=Bu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+p+o,R=x+y+a,b=Nu(i,i.VERTEX_SHADER,M),T=Nu(i,i.FRAGMENT_SHADER,R);i.attachShader(m,b),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function P(H){if(s.debug.checkShaderErrors){let K=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(T).trim(),z=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,b,T);else{let W=Uu(i,b,"vertex"),X=Uu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+W+`
`+X)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(I===""||U==="")&&(q=!1);q&&(H.diagnostics={runnable:z,programLog:K,vertexShader:{log:I,prefix:p},fragmentShader:{log:U,prefix:y}})}i.deleteShader(b),i.deleteShader(T),v=new Ls(i,m),S=hx(i,m)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(m,tx)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}var bx=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bl(e),t.set(e,n)),n}},Bl=class{constructor(e){this.id=bx++,this.code=e,this.usedTimes=0}};function Sx(s,e,t,n,i,r,o){let a=new No,l=new Fl,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,S,D,H,K){let I=H.fog,U=K.geometry,z=v.isMeshStandardMaterial?H.environment:null,q=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),W=q&&q.mapping===ra?q.image.height:null,X=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,j=Y!==void 0?Y.length:0,ie=0;U.morphAttributes.position!==void 0&&(ie=1),U.morphAttributes.normal!==void 0&&(ie=2),U.morphAttributes.color!==void 0&&(ie=3);let V,Z,le,xe;if(X){let Jt=Fn[X];V=Jt.vertexShader,Z=Jt.fragmentShader}else V=v.vertexShader,Z=v.fragmentShader,l.update(v),le=l.getVertexShaderID(v),xe=l.getFragmentShaderID(v);let _e=s.getRenderTarget(),De=K.isInstancedMesh===!0,Oe=K.isBatchedMesh===!0,we=!!v.map,Ke=!!v.matcap,O=!!q,$t=!!v.aoMap,be=!!v.lightMap,Pe=!!v.bumpMap,de=!!v.normalMap,_t=!!v.displacementMap,Be=!!v.emissiveMap,A=!!v.metalnessMap,E=!!v.roughnessMap,B=v.anisotropy>0,Q=v.clearcoat>0,J=v.iridescence>0,ee=v.sheen>0,pe=v.transmission>0,ae=B&&!!v.anisotropyMap,ue=Q&&!!v.clearcoatMap,Ee=Q&&!!v.clearcoatNormalMap,ke=Q&&!!v.clearcoatRoughnessMap,$=J&&!!v.iridescenceMap,it=J&&!!v.iridescenceThicknessMap,Xe=ee&&!!v.sheenColorMap,Ce=ee&&!!v.sheenRoughnessMap,ve=!!v.specularMap,fe=!!v.specularColorMap,Fe=!!v.specularIntensityMap,tt=pe&&!!v.transmissionMap,vt=pe&&!!v.thicknessMap,ze=!!v.gradientMap,te=!!v.alphaMap,L=v.alphaTest>0,re=!!v.alphaHash,oe=!!v.extensions,Ae=!!U.attributes.uv1,Se=!!U.attributes.uv2,ct=!!U.attributes.uv3,ht=Mi;return v.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ht=s.toneMapping),{isWebGL2:h,shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:V,fragmentShader:Z,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Oe,instancing:De,instancingColor:De&&K.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Nt,map:we,matcap:Ke,envMap:O,envMapMode:O&&q.mapping,envMapCubeUVHeight:W,aoMap:$t,lightMap:be,bumpMap:Pe,normalMap:de,displacementMap:f&&_t,emissiveMap:Be,normalMapObjectSpace:de&&v.normalMapType===Rp,normalMapTangentSpace:de&&v.normalMapType===fc,metalnessMap:A,roughnessMap:E,anisotropy:B,anisotropyMap:ae,clearcoat:Q,clearcoatMap:ue,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ke,iridescence:J,iridescenceMap:$,iridescenceThicknessMap:it,sheen:ee,sheenColorMap:Xe,sheenRoughnessMap:Ce,specularMap:ve,specularColorMap:fe,specularIntensityMap:Fe,transmission:pe,transmissionMap:tt,thicknessMap:vt,gradientMap:ze,opaque:v.transparent===!1&&v.blending===Cs,alphaMap:te,alphaTest:L,alphaHash:re,combine:v.combine,mapUv:we&&_(v.map.channel),aoMapUv:$t&&_(v.aoMap.channel),lightMapUv:be&&_(v.lightMap.channel),bumpMapUv:Pe&&_(v.bumpMap.channel),normalMapUv:de&&_(v.normalMap.channel),displacementMapUv:_t&&_(v.displacementMap.channel),emissiveMapUv:Be&&_(v.emissiveMap.channel),metalnessMapUv:A&&_(v.metalnessMap.channel),roughnessMapUv:E&&_(v.roughnessMap.channel),anisotropyMapUv:ae&&_(v.anisotropyMap.channel),clearcoatMapUv:ue&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(v.sheenRoughnessMap.channel),specularMapUv:ve&&_(v.specularMap.channel),specularColorMapUv:fe&&_(v.specularColorMap.channel),specularIntensityMapUv:Fe&&_(v.specularIntensityMap.channel),transmissionMapUv:tt&&_(v.transmissionMap.channel),thicknessMapUv:vt&&_(v.thicknessMap.channel),alphaMapUv:te&&_(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(de||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Se,vertexUv3s:ct,pointsUvs:K.isPoints===!0&&!!U.attributes.uv&&(we||te),fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,useLegacyLights:s._useLegacyLights,decodeVideoTexture:we&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bt,flipSided:v.side===Yt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:oe&&v.extensions.derivatives===!0,extensionFragDepth:oe&&v.extensions.fragDepth===!0,extensionDrawBuffers:oe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(y(S,v),x(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function x(v,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function M(v){let S=g[v.type],D;if(S){let H=Fn[S];D=fm.clone(H.uniforms)}else D=v.uniforms;return D}function R(v,S){let D;for(let H=0,K=c.length;H<K;H++){let I=c[H];if(I.cacheKey===S){D=I,++D.usedTimes;break}}return D===void 0&&(D=new Mx(s,S,v,r),c.push(D)),D}function b(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:P}}function Tx(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ex(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Hu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||Ex),n.length>1&&n.sort(f||Hu),i.length>1&&i.sort(f||Hu)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Ax(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new zu,s.set(n,[o])):i>=r.length?(o=new zu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Rx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ce};break;case"SpotLight":t={position:new C,direction:new C,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function Cx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Px=0;function Lx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ix(s,e){let t=new Rx,n=Cx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);let r=new C,o=new Ue,a=new Ue;function l(h,u){let f=0,d=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,M=0,R=0,b=0,T=0,P=0,v=0;h.sort(Lx);let S=u===!0?Math.PI:1;for(let H=0,K=h.length;H<K;H++){let I=h[H],U=I.color,z=I.intensity,q=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=U.r*z*S,d+=U.g*z*S,g+=U.b*z*S;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],z);v++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){let Y=I.shadow,j=n.get(I);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,i.directionalShadow[_]=j,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=I.shadow.matrix,M++}i.directional[_]=X,_++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(U).multiplyScalar(z*S),X.distance=q,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[p]=X;let Y=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,Y.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[p]=Y.matrix,I.castShadow){let j=n.get(I);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=W,b++}p++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(U).multiplyScalar(z),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=X,y++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*S),X.distance=I.distance,X.decay=I.decay,I.castShadow){let Y=I.shadow,j=n.get(I);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=I.shadow.matrix,R++}i.point[m]=X,m++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(z*S),X.groundColor.copy(I.groundColor).multiplyScalar(z*S),i.hemi[x]=X,x++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let D=i.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==y||D.hemiLength!==x||D.numDirectionalShadows!==M||D.numPointShadows!==R||D.numSpotShadows!==b||D.numSpotMaps!==T||D.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=b+T-P,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=v,D.directionalLength=_,D.pointLength=m,D.spotLength=p,D.rectAreaLength=y,D.hemiLength=x,D.numDirectionalShadows=M,D.numPointShadows=R,D.numSpotShadows=b,D.numSpotMaps=T,D.numLightProbes=v,i.version=Px++)}function c(h,u){let f=0,d=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let M=h[y];if(M.isDirectionalLight){let R=i.directional[f];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),f++}else if(M.isSpotLight){let R=i.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let R=i.rectArea[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let R=i.point[d];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let R=i.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Gu(s,e){let t=new Ix(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Dx(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Gu(s,e),t.set(r,[l])):o>=a.length?(l=new Gu(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var wr=class extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kl=class extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
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
}`;function Ox(s,e,t){let n=new Er,i=new Me,r=new Me,o=new at,a=new wr({depthPacking:uc}),l=new kl,c={},h=t.maxTextureSize,u={[_n]:Yt,[Yt]:_n,[bt]:bt},f=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Nx,fragmentShader:Ux}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new We(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uf;let p=this.type;this.render=function(b,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let v=s.getRenderTarget(),S=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),H=s.state;H.setBlending(vi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let K=p!==ei&&this.type===ei,I=p===ei&&this.type!==ei;for(let U=0,z=b.length;U<z;U++){let q=b[U],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let X=W.getFrameExtents();if(i.multiply(X),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||K===!0||I===!0){let j=this.type!==ei?{minFilter:At,magFilter:At}:{};W.map!==null&&W.map.dispose(),W.map=new ri(i.x,i.y,j),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let Y=W.getViewportCount();for(let j=0;j<Y;j++){let ie=W.getViewport(j);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),H.viewport(o),W.updateMatrices(q,j),n=W.getFrustum(),M(T,P,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===ei&&y(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,S,D)};function y(b,T){let P=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ri(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,P,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,P,d,_,null)}function x(b,T,P,v){let S=null,D=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=S.uuid,K=T.uuid,I=c[H];I===void 0&&(I={},c[H]=I);let U=I[K];U===void 0&&(U=S.clone(),I[K]=U,T.addEventListener("dispose",R)),S=U}if(S.visible=T.visible,S.wireframe=T.wireframe,v===ei?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let H=s.properties.get(S);H.light=P}return S}function M(b,T,P,v,S){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===ei)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);let K=e.update(b),I=b.material;if(Array.isArray(I)){let U=K.groups;for(let z=0,q=U.length;z<q;z++){let W=U[z],X=I[W.materialIndex];if(X&&X.visible){let Y=x(b,X,v,S);b.onBeforeShadow(s,b,T,P,K,Y,W),s.renderBufferDirect(P,null,K,Y,b,W),b.onAfterShadow(s,b,T,P,K,Y,W)}}}else if(I.visible){let U=x(b,I,v,S);b.onBeforeShadow(s,b,T,P,K,U,null),s.renderBufferDirect(P,null,K,U,b,null),b.onAfterShadow(s,b,T,P,K,U,null)}}let H=b.children;for(let K=0,I=H.length;K<I;K++)M(H[K],T,P,v,S)}function R(b){b.target.removeEventListener("dispose",R);for(let P in c){let v=c[P],S=b.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}function Fx(s,e,t){let n=t.isWebGL2;function i(){let L=!1,re=new at,oe=null,Ae=new at(0,0,0,0);return{setMask:function(Se){oe!==Se&&!L&&(s.colorMask(Se,Se,Se,Se),oe=Se)},setLocked:function(Se){L=Se},setClear:function(Se,ct,ht,Bt,Jt){Jt===!0&&(Se*=Bt,ct*=Bt,ht*=Bt),re.set(Se,ct,ht,Bt),Ae.equals(re)===!1&&(s.clearColor(Se,ct,ht,Bt),Ae.copy(re))},reset:function(){L=!1,oe=null,Ae.set(-1,0,0,0)}}}function r(){let L=!1,re=null,oe=null,Ae=null;return{setTest:function(Se){Se?Oe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Se){re!==Se&&!L&&(s.depthMask(Se),re=Se)},setFunc:function(Se){if(oe!==Se){switch(Se){case np:s.depthFunc(s.NEVER);break;case ip:s.depthFunc(s.ALWAYS);break;case sp:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case rp:s.depthFunc(s.EQUAL);break;case op:s.depthFunc(s.GEQUAL);break;case ap:s.depthFunc(s.GREATER);break;case lp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=Se}},setLocked:function(Se){L=Se},setClear:function(Se){Ae!==Se&&(s.clearDepth(Se),Ae=Se)},reset:function(){L=!1,re=null,oe=null,Ae=null}}}function o(){let L=!1,re=null,oe=null,Ae=null,Se=null,ct=null,ht=null,Bt=null,Jt=null;return{setTest:function(ut){L||(ut?Oe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(ut){re!==ut&&!L&&(s.stencilMask(ut),re=ut)},setFunc:function(ut,jt,On){(oe!==ut||Ae!==jt||Se!==On)&&(s.stencilFunc(ut,jt,On),oe=ut,Ae=jt,Se=On)},setOp:function(ut,jt,On){(ct!==ut||ht!==jt||Bt!==On)&&(s.stencilOp(ut,jt,On),ct=ut,ht=jt,Bt=On)},setLocked:function(ut){L=ut},setClear:function(ut){Jt!==ut&&(s.clearStencil(ut),Jt=ut)},reset:function(){L=!1,re=null,oe=null,Ae=null,Se=null,ct=null,ht=null,Bt=null,Jt=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,R=null,b=null,T=null,P=null,v=new ce(0,0,0),S=0,D=!1,H=null,K=null,I=null,U=null,z=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,X=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=X>=2);let j=null,ie={},V=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),le=new at().fromArray(V),xe=new at().fromArray(Z);function _e(L,re,oe,Ae){let Se=new Uint8Array(4),ct=s.createTexture();s.bindTexture(L,ct),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<oe;ht++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(re,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(re+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return ct}let De={};De[s.TEXTURE_2D]=_e(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=_e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[s.TEXTURE_2D_ARRAY]=_e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=_e(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(s.DEPTH_TEST),l.setFunc(So),Be(!1),A(wh),Oe(s.CULL_FACE),de(vi);function Oe(L){f[L]!==!0&&(s.enable(L),f[L]=!0)}function we(L){f[L]!==!1&&(s.disable(L),f[L]=!1)}function Ke(L,re){return d[L]!==re?(s.bindFramebuffer(L,re),d[L]=re,n&&(L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=re),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=re)),!0):!1}function O(L,re){let oe=_,Ae=!1;if(L)if(oe=g.get(re),oe===void 0&&(oe=[],g.set(re,oe)),L.isWebGLMultipleRenderTargets){let Se=L.texture;if(oe.length!==Se.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,ht=Se.length;ct<ht;ct++)oe[ct]=s.COLOR_ATTACHMENT0+ct;oe.length=Se.length,Ae=!0}}else oe[0]!==s.COLOR_ATTACHMENT0&&(oe[0]=s.COLOR_ATTACHMENT0,Ae=!0);else oe[0]!==s.BACK&&(oe[0]=s.BACK,Ae=!0);Ae&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function $t(L){return m!==L?(s.useProgram(L),m=L,!0):!1}let be={[Gi]:s.FUNC_ADD,[zd]:s.FUNC_SUBTRACT,[Gd]:s.FUNC_REVERSE_SUBTRACT};if(n)be[Ch]=s.MIN,be[Ph]=s.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(be[Ch]=L.MIN_EXT,be[Ph]=L.MAX_EXT)}let Pe={[Vd]:s.ZERO,[Wd]:s.ONE,[Xd]:s.SRC_COLOR,[bl]:s.SRC_ALPHA,[Jd]:s.SRC_ALPHA_SATURATE,[Zd]:s.DST_COLOR,[Yd]:s.DST_ALPHA,[qd]:s.ONE_MINUS_SRC_COLOR,[Sl]:s.ONE_MINUS_SRC_ALPHA,[$d]:s.ONE_MINUS_DST_COLOR,[Kd]:s.ONE_MINUS_DST_ALPHA,[jd]:s.CONSTANT_COLOR,[Qd]:s.ONE_MINUS_CONSTANT_COLOR,[ep]:s.CONSTANT_ALPHA,[tp]:s.ONE_MINUS_CONSTANT_ALPHA};function de(L,re,oe,Ae,Se,ct,ht,Bt,Jt,ut){if(L===vi){p===!0&&(we(s.BLEND),p=!1);return}if(p===!1&&(Oe(s.BLEND),p=!0),L!==Hd){if(L!==y||ut!==D){if((x!==Gi||b!==Gi)&&(s.blendEquation(s.FUNC_ADD),x=Gi,b=Gi),ut)switch(L){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bo:s.blendFunc(s.ONE,s.ONE);break;case Ah:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ah:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,R=null,T=null,P=null,v.set(0,0,0),S=0,y=L,D=ut}return}Se=Se||re,ct=ct||oe,ht=ht||Ae,(re!==x||Se!==b)&&(s.blendEquationSeparate(be[re],be[Se]),x=re,b=Se),(oe!==M||Ae!==R||ct!==T||ht!==P)&&(s.blendFuncSeparate(Pe[oe],Pe[Ae],Pe[ct],Pe[ht]),M=oe,R=Ae,T=ct,P=ht),(Bt.equals(v)===!1||Jt!==S)&&(s.blendColor(Bt.r,Bt.g,Bt.b,Jt),v.copy(Bt),S=Jt),y=L,D=!1}function _t(L,re){L.side===bt?we(s.CULL_FACE):Oe(s.CULL_FACE);let oe=L.side===Yt;re&&(oe=!oe),Be(oe),L.blending===Cs&&L.transparent===!1?de(vi):de(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let Ae=L.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Oe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){H!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),H=L)}function A(L){L!==Bd?(Oe(s.CULL_FACE),L!==K&&(L===wh?s.cullFace(s.BACK):L===kd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),K=L}function E(L){L!==I&&(W&&s.lineWidth(L),I=L)}function B(L,re,oe){L?(Oe(s.POLYGON_OFFSET_FILL),(U!==re||z!==oe)&&(s.polygonOffset(re,oe),U=re,z=oe)):we(s.POLYGON_OFFSET_FILL)}function Q(L){L?Oe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function J(L){L===void 0&&(L=s.TEXTURE0+q-1),j!==L&&(s.activeTexture(L),j=L)}function ee(L,re,oe){oe===void 0&&(j===null?oe=s.TEXTURE0+q-1:oe=j);let Ae=ie[oe];Ae===void 0&&(Ae={type:void 0,texture:void 0},ie[oe]=Ae),(Ae.type!==L||Ae.texture!==re)&&(j!==oe&&(s.activeTexture(oe),j=oe),s.bindTexture(L,re||De[L]),Ae.type=L,Ae.texture=re)}function pe(){let L=ie[j];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ae(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(L){le.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function tt(L){xe.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),xe.copy(L))}function vt(L,re){let oe=u.get(re);oe===void 0&&(oe=new WeakMap,u.set(re,oe));let Ae=oe.get(L);Ae===void 0&&(Ae=s.getUniformBlockIndex(re,L.name),oe.set(L,Ae))}function ze(L,re){let Ae=u.get(re).get(L);h.get(re)!==Ae&&(s.uniformBlockBinding(re,Ae,L.__bindingPointIndex),h.set(re,Ae))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},j=null,ie={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,R=null,b=null,T=null,P=null,v=new ce(0,0,0),S=0,D=!1,H=null,K=null,I=null,U=null,z=null,le.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:we,bindFramebuffer:Ke,drawBuffers:O,useProgram:$t,setBlending:de,setMaterial:_t,setFlipSided:Be,setCullFace:A,setLineWidth:E,setPolygonOffset:B,setScissorTest:Q,activeTexture:J,bindTexture:ee,unbindTexture:pe,compressedTexImage2D:ae,compressedTexImage3D:ue,texImage2D:ve,texImage3D:fe,updateUBOMapping:vt,uniformBlockBinding:ze,texStorage2D:Xe,texStorage3D:Ce,texSubImage2D:Ee,texSubImage3D:ke,compressedTexSubImage2D:$,compressedTexSubImage3D:it,scissor:Fe,viewport:tt,reset:te}}function Bx(s,e,t,n,i,r,o){let a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function g(A,E){return d?new OffscreenCanvas(A,E):Tr("canvas")}function _(A,E,B,Q){let J=1;if((A.width>Q||A.height>Q)&&(J=Q/Math.max(A.width,A.height)),J<1||E===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){let ee=E?Po:Math.floor,pe=ee(J*A.width),ae=ee(J*A.height);u===void 0&&(u=g(pe,ae));let ue=B?g(pe,ae):u;return ue.width=pe,ue.height=ae,ue.getContext("2d").drawImage(A,0,0,pe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+pe+"x"+ae+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Rl(A.width)&&Rl(A.height)}function p(A){return a?!1:A.wrapS!==qt||A.wrapT!==qt||A.minFilter!==At&&A.minFilter!==Je}function y(A,E){return A.generateMipmaps&&E&&A.minFilter!==At&&A.minFilter!==Je}function x(A){s.generateMipmap(A)}function M(A,E,B,Q,J=!1){if(a===!1)return E;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=E;if(E===s.RED&&(B===s.FLOAT&&(ee=s.R32F),B===s.HALF_FLOAT&&(ee=s.R16F),B===s.UNSIGNED_BYTE&&(ee=s.R8)),E===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(ee=s.R8UI),B===s.UNSIGNED_SHORT&&(ee=s.R16UI),B===s.UNSIGNED_INT&&(ee=s.R32UI),B===s.BYTE&&(ee=s.R8I),B===s.SHORT&&(ee=s.R16I),B===s.INT&&(ee=s.R32I)),E===s.RG&&(B===s.FLOAT&&(ee=s.RG32F),B===s.HALF_FLOAT&&(ee=s.RG16F),B===s.UNSIGNED_BYTE&&(ee=s.RG8)),E===s.RGBA){let pe=J?wo:je.getTransfer(Q);B===s.FLOAT&&(ee=s.RGBA32F),B===s.HALF_FLOAT&&(ee=s.RGBA16F),B===s.UNSIGNED_BYTE&&(ee=pe===ft?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function R(A,E,B){return y(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==Je?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function b(A){return A===At||A===To||A===_r?s.NEAREST:s.LINEAR}function T(A){let E=A.target;E.removeEventListener("dispose",T),v(E),E.isVideoTexture&&h.delete(E)}function P(A){let E=A.target;E.removeEventListener("dispose",P),D(E)}function v(A){let E=n.get(A);if(E.__webglInit===void 0)return;let B=A.source,Q=f.get(B);if(Q){let J=Q[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(A),Object.keys(Q).length===0&&f.delete(B)}n.remove(A)}function S(A){let E=n.get(A);s.deleteTexture(E.__webglTexture);let B=A.source,Q=f.get(B);delete Q[E.__cacheKey],o.memory.textures--}function D(A){let E=A.texture,B=n.get(A),Q=n.get(E);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(B.__webglFramebuffer[J]))for(let ee=0;ee<B.__webglFramebuffer[J].length;ee++)s.deleteFramebuffer(B.__webglFramebuffer[J][ee]);else s.deleteFramebuffer(B.__webglFramebuffer[J]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[J])}else{if(Array.isArray(B.__webglFramebuffer))for(let J=0;J<B.__webglFramebuffer.length;J++)s.deleteFramebuffer(B.__webglFramebuffer[J]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let J=0;J<B.__webglColorRenderbuffer.length;J++)B.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[J]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let J=0,ee=E.length;J<ee;J++){let pe=n.get(E[J]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(E[J])}n.remove(E),n.remove(A)}let H=0;function K(){H=0}function I(){let A=H;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),H+=1,A}function U(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function z(A,E){let B=n.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(B,A,E);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+E)}function q(A,E){let B=n.get(A);if(A.version>0&&B.__version!==A.version){le(B,A,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+E)}function W(A,E){let B=n.get(A);if(A.version>0&&B.__version!==A.version){le(B,A,E);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+E)}function X(A,E){let B=n.get(A);if(A.version>0&&B.__version!==A.version){xe(B,A,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+E)}let Y={[xn]:s.REPEAT,[qt]:s.CLAMP_TO_EDGE,[br]:s.MIRRORED_REPEAT},j={[At]:s.NEAREST,[To]:s.NEAREST_MIPMAP_NEAREST,[_r]:s.NEAREST_MIPMAP_LINEAR,[Je]:s.LINEAR,[oc]:s.LINEAR_MIPMAP_NEAREST,[tn]:s.LINEAR_MIPMAP_LINEAR},ie={[Cp]:s.NEVER,[Up]:s.ALWAYS,[Pp]:s.LESS,[bf]:s.LEQUAL,[Lp]:s.EQUAL,[Np]:s.GEQUAL,[Ip]:s.GREATER,[Dp]:s.NOTEQUAL};function V(A,E,B){if(B?(s.texParameteri(A,s.TEXTURE_WRAP_S,Y[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Y[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Y[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,j[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,j[E.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==qt||E.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,b(E.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==At&&E.minFilter!==Je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Q=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===At||E.minFilter!==_r&&E.minFilter!==tn||E.type===ni&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Sr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Z(A,E){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",T));let Q=E.source,J=f.get(Q);J===void 0&&(J={},f.set(Q,J));let ee=U(E);if(ee!==A.__cacheKey){J[ee]===void 0&&(J[ee]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[ee].usedTimes++;let pe=J[A.__cacheKey];pe!==void 0&&(J[A.__cacheKey].usedTimes--,pe.usedTimes===0&&S(E)),A.__cacheKey=ee,A.__webglTexture=J[ee].texture}return B}function le(A,E,B){let Q=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=s.TEXTURE_3D);let J=Z(A,E),ee=E.source;t.bindTexture(Q,A.__webglTexture,s.TEXTURE0+B);let pe=n.get(ee);if(ee.version!==pe.__version||J===!0){t.activeTexture(s.TEXTURE0+B);let ae=je.getPrimaries(je.workingColorSpace),ue=E.colorSpace===dt?null:je.getPrimaries(E.colorSpace),Ee=E.colorSpace===dt||ae===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ke=p(E)&&m(E.image)===!1,$=_(E.image,ke,!1,i.maxTextureSize);$=Be(E,$);let it=m($)||a,Xe=r.convert(E.format,E.colorSpace),Ce=r.convert(E.type),ve=M(E.internalFormat,Xe,Ce,E.colorSpace,E.isVideoTexture);V(Q,E,it);let fe,Fe=E.mipmaps,tt=a&&E.isVideoTexture!==!0&&ve!==yf,vt=pe.__version===void 0||J===!0,ze=R(E,$,it);if(E.isDepthTexture)ve=s.DEPTH_COMPONENT,a?E.type===ni?ve=s.DEPTH_COMPONENT32F:E.type===xi?ve=s.DEPTH_COMPONENT24:E.type===Xi?ve=s.DEPTH24_STENCIL8:ve=s.DEPTH_COMPONENT16:E.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===qi&&ve===s.DEPTH_COMPONENT&&E.type!==ac&&E.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=xi,Ce=r.convert(E.type)),E.format===Ns&&ve===s.DEPTH_COMPONENT&&(ve=s.DEPTH_STENCIL,E.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Xi,Ce=r.convert(E.type))),vt&&(tt?t.texStorage2D(s.TEXTURE_2D,1,ve,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,ve,$.width,$.height,0,Xe,Ce,null));else if(E.isDataTexture)if(Fe.length>0&&it){tt&&vt&&t.texStorage2D(s.TEXTURE_2D,ze,ve,Fe[0].width,Fe[0].height);for(let te=0,L=Fe.length;te<L;te++)fe=Fe[te],tt?t.texSubImage2D(s.TEXTURE_2D,te,0,0,fe.width,fe.height,Xe,Ce,fe.data):t.texImage2D(s.TEXTURE_2D,te,ve,fe.width,fe.height,0,Xe,Ce,fe.data);E.generateMipmaps=!1}else tt?(vt&&t.texStorage2D(s.TEXTURE_2D,ze,ve,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,Xe,Ce,$.data)):t.texImage2D(s.TEXTURE_2D,0,ve,$.width,$.height,0,Xe,Ce,$.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,ve,Fe[0].width,Fe[0].height,$.depth);for(let te=0,L=Fe.length;te<L;te++)fe=Fe[te],E.format!==It?Xe!==null?tt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,$.depth,Xe,fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,ve,fe.width,fe.height,$.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,$.depth,Xe,Ce,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,ve,fe.width,fe.height,$.depth,0,Xe,Ce,fe.data)}else{tt&&vt&&t.texStorage2D(s.TEXTURE_2D,ze,ve,Fe[0].width,Fe[0].height);for(let te=0,L=Fe.length;te<L;te++)fe=Fe[te],E.format!==It?Xe!==null?tt?t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,fe.width,fe.height,Xe,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,te,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(s.TEXTURE_2D,te,0,0,fe.width,fe.height,Xe,Ce,fe.data):t.texImage2D(s.TEXTURE_2D,te,ve,fe.width,fe.height,0,Xe,Ce,fe.data)}else if(E.isDataArrayTexture)tt?(vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,ve,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Xe,Ce,$.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,$.width,$.height,$.depth,0,Xe,Ce,$.data);else if(E.isData3DTexture)tt?(vt&&t.texStorage3D(s.TEXTURE_3D,ze,ve,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Xe,Ce,$.data)):t.texImage3D(s.TEXTURE_3D,0,ve,$.width,$.height,$.depth,0,Xe,Ce,$.data);else if(E.isFramebufferTexture){if(vt)if(tt)t.texStorage2D(s.TEXTURE_2D,ze,ve,$.width,$.height);else{let te=$.width,L=$.height;for(let re=0;re<ze;re++)t.texImage2D(s.TEXTURE_2D,re,ve,te,L,0,Xe,Ce,null),te>>=1,L>>=1}}else if(Fe.length>0&&it){tt&&vt&&t.texStorage2D(s.TEXTURE_2D,ze,ve,Fe[0].width,Fe[0].height);for(let te=0,L=Fe.length;te<L;te++)fe=Fe[te],tt?t.texSubImage2D(s.TEXTURE_2D,te,0,0,Xe,Ce,fe):t.texImage2D(s.TEXTURE_2D,te,ve,Xe,Ce,fe);E.generateMipmaps=!1}else tt?(vt&&t.texStorage2D(s.TEXTURE_2D,ze,ve,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Xe,Ce,$)):t.texImage2D(s.TEXTURE_2D,0,ve,Xe,Ce,$);y(E,it)&&x(Q),pe.__version=ee.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function xe(A,E,B){if(E.image.length!==6)return;let Q=Z(A,E),J=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let ee=n.get(J);if(J.version!==ee.__version||Q===!0){t.activeTexture(s.TEXTURE0+B);let pe=je.getPrimaries(je.workingColorSpace),ae=E.colorSpace===dt?null:je.getPrimaries(E.colorSpace),ue=E.colorSpace===dt||pe===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,$=[];for(let te=0;te<6;te++)!Ee&&!ke?$[te]=_(E.image[te],!1,!0,i.maxCubemapSize):$[te]=ke?E.image[te].image:E.image[te],$[te]=Be(E,$[te]);let it=$[0],Xe=m(it)||a,Ce=r.convert(E.format,E.colorSpace),ve=r.convert(E.type),fe=M(E.internalFormat,Ce,ve,E.colorSpace),Fe=a&&E.isVideoTexture!==!0,tt=ee.__version===void 0||Q===!0,vt=R(E,it,Xe);V(s.TEXTURE_CUBE_MAP,E,Xe);let ze;if(Ee){Fe&&tt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,vt,fe,it.width,it.height);for(let te=0;te<6;te++){ze=$[te].mipmaps;for(let L=0;L<ze.length;L++){let re=ze[L];E.format!==It?Ce!==null?Fe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,re.width,re.height,Ce,re.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,fe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,re.width,re.height,Ce,ve,re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,fe,re.width,re.height,0,Ce,ve,re.data)}}}else{ze=E.mipmaps,Fe&&tt&&(ze.length>0&&vt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,vt,fe,$[0].width,$[0].height));for(let te=0;te<6;te++)if(ke){Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,$[te].width,$[te].height,Ce,ve,$[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,fe,$[te].width,$[te].height,0,Ce,ve,$[te].data);for(let L=0;L<ze.length;L++){let oe=ze[L].image[te].image;Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,oe.width,oe.height,Ce,ve,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,fe,oe.width,oe.height,0,Ce,ve,oe.data)}}else{Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ce,ve,$[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,fe,Ce,ve,$[te]);for(let L=0;L<ze.length;L++){let re=ze[L];Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,Ce,ve,re.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,fe,Ce,ve,re.image[te])}}}y(E,Xe)&&x(s.TEXTURE_CUBE_MAP),ee.__version=J.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function _e(A,E,B,Q,J,ee){let pe=r.convert(B.format,B.colorSpace),ae=r.convert(B.type),ue=M(B.internalFormat,pe,ae,B.colorSpace);if(!n.get(E).__hasExternalTextures){let ke=Math.max(1,E.width>>ee),$=Math.max(1,E.height>>ee);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,ue,ke,$,E.depth,0,pe,ae,null):t.texImage2D(J,ee,ue,ke,$,0,pe,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),de(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,J,n.get(B).__webglTexture,0,Pe(E)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,J,n.get(B).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(A,E,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let Q=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||de(E)){let J=E.depthTexture;J&&J.isDepthTexture&&(J.type===ni?Q=s.DEPTH_COMPONENT32F:J.type===xi&&(Q=s.DEPTH_COMPONENT24));let ee=Pe(E);de(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,Q,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Q,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){let Q=Pe(E);B&&de(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,E.width,E.height):de(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{let Q=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0;J<Q.length;J++){let ee=Q[J],pe=r.convert(ee.format,ee.colorSpace),ae=r.convert(ee.type),ue=M(ee.internalFormat,pe,ae,ee.colorSpace),Ee=Pe(E);B&&de(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,ue,E.width,E.height):de(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ue,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Oe(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);let Q=n.get(E.depthTexture).__webglTexture,J=Pe(E);if(E.depthTexture.format===qi)de(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Ns)de(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function we(A){let E=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Oe(E.__webglFramebuffer,A)}else if(B){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=s.createRenderbuffer(),De(E.__webglDepthbuffer[Q],A,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),De(E.__webglDepthbuffer,A,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(A,E,B){let Q=n.get(A);E!==void 0&&_e(Q.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&we(A)}function O(A){let E=A.texture,B=n.get(A),Q=n.get(E);A.addEventListener("dispose",P),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=E.version,o.memory.textures++);let J=A.isWebGLCubeRenderTarget===!0,ee=A.isWebGLMultipleRenderTargets===!0,pe=m(A)||a;if(J){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let ue=0;ue<E.mipmaps.length;ue++)B.__webglFramebuffer[ae][ue]=s.createFramebuffer()}else B.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)B.__webglFramebuffer[ae]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ee)if(i.drawBuffers){let ae=A.texture;for(let ue=0,Ee=ae.length;ue<Ee;ue++){let ke=n.get(ae[ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&de(A)===!1){let ae=ee?E:[E];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){let Ee=ae[ue];B.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ue]);let ke=r.convert(Ee.format,Ee.colorSpace),$=r.convert(Ee.type),it=M(Ee.internalFormat,ke,$,Ee.colorSpace,A.isXRRenderTarget===!0),Xe=Pe(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,it,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,B.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),De(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),V(s.TEXTURE_CUBE_MAP,E,pe);for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)_e(B.__webglFramebuffer[ae][ue],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else _e(B.__webglFramebuffer[ae],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);y(E,pe)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){let ae=A.texture;for(let ue=0,Ee=ae.length;ue<Ee;ue++){let ke=ae[ue],$=n.get(ke);t.bindTexture(s.TEXTURE_2D,$.__webglTexture),V(s.TEXTURE_2D,ke,pe),_e(B.__webglFramebuffer,A,ke,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),y(ke,pe)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ae=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,Q.__webglTexture),V(ae,E,pe),a&&E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)_e(B.__webglFramebuffer[ue],A,E,s.COLOR_ATTACHMENT0,ae,ue);else _e(B.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,ae,0);y(E,pe)&&x(ae),t.unbindTexture()}A.depthBuffer&&we(A)}function $t(A){let E=m(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,J=B.length;Q<J;Q++){let ee=B[Q];if(y(ee,E)){let pe=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ae=n.get(ee).__webglTexture;t.bindTexture(pe,ae),x(pe),t.unbindTexture()}}}function be(A){if(a&&A.samples>0&&de(A)===!1){let E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,Q=A.height,J=s.COLOR_BUFFER_BIT,ee=[],pe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(A),ue=A.isWebGLMultipleRenderTargets===!0;if(ue)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){ee.push(s.COLOR_ATTACHMENT0+Ee),A.depthBuffer&&ee.push(pe);let ke=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ke===!1&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ue&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Ee]),ke===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[pe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[pe])),ue){let $=n.get(E[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,B,Q,0,0,B,Q,J,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Ee]);let ke=n.get(E[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Pe(A){return Math.min(i.maxSamples,A.samples)}function de(A){let E=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _t(A){let E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function Be(A,E){let B=A.colorSpace,Q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Al||B!==Nt&&B!==dt&&(je.getTransfer(B)===ft?a===!1?e.has("EXT_sRGB")===!0&&Q===It?(A.format=Al,A.minFilter=Je,A.generateMipmaps=!1):E=Lo.sRGBToLinear(E):(Q!==It||J!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}this.allocateTextureUnit=I,this.resetTextureUnits=K,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=Ke,this.setupRenderTarget=O,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=de}function kx(s,e,t){let n=t.isWebGL2;function i(r,o=dt){let a,l=je.getTransfer(o);if(r===bi)return s.UNSIGNED_BYTE;if(r===pf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===mf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_p)return s.BYTE;if(r===xp)return s.SHORT;if(r===ac)return s.UNSIGNED_SHORT;if(r===df)return s.INT;if(r===xi)return s.UNSIGNED_INT;if(r===ni)return s.FLOAT;if(r===Sr)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===yp)return s.ALPHA;if(r===It)return s.RGBA;if(r===vp)return s.LUMINANCE;if(r===Mp)return s.LUMINANCE_ALPHA;if(r===qi)return s.DEPTH_COMPONENT;if(r===Ns)return s.DEPTH_STENCIL;if(r===Al)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===bp)return s.RED;if(r===gf)return s.RED_INTEGER;if(r===Sp)return s.RG;if(r===_f)return s.RG_INTEGER;if(r===xf)return s.RGBA_INTEGER;if(r===Ga||r===Va||r===Wa||r===Xa)if(l===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ga)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ga)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Va)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ih||r===Dh||r===Nh||r===Uh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ih)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Dh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Uh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Oh||r===Fh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Oh)return l===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Fh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bh||r===kh||r===Hh||r===zh||r===Gh||r===Vh||r===Wh||r===Xh||r===qh||r===Yh||r===Kh||r===Zh||r===$h||r===Jh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Bh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$h)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qa||r===jh||r===Qh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===qa)return l===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tp||r===eu||r===tu||r===nu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===qa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===eu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xi?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Hl=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Dt=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hx={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zl=class extends si{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=t.getContextAttributes(),m=null,p=null,y=[],x=[],M=new Me,R=null,b=new Lt;b.layers.enable(1),b.viewport=new at;let T=new Lt;T.layers.enable(2),T.viewport=new at;let P=[b,T],v=new Hl;v.layers.enable(1),v.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=y[V];return Z===void 0&&(Z=new Mr,y[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=y[V];return Z===void 0&&(Z=new Mr,y[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=y[V];return Z===void 0&&(Z=new Mr,y[V]=Z),Z.getHandSpace()};function H(V){let Z=x.indexOf(V.inputSource);if(Z===-1)return;let le=y[Z];le!==void 0&&(le.update(V.inputSource,V.frame,c||o),le.dispatchEvent({type:V.type,data:V.inputSource}))}function K(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",I);for(let V=0;V<y.length;V++){let Z=x[V];Z!==null&&(x[V]=null,y[V].disconnect(Z))}S=null,D=null,e.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",K),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new ri(d.framebufferWidth,d.framebufferHeight,{format:It,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,le=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?Ns:qi,le=_.stencil?Xi:xi);let _e={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(_e),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new ri(f.textureWidth,f.textureHeight,{format:It,type:bi,depthTexture:new Ho(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let De=e.properties.get(p);De.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(V){for(let Z=0;Z<V.removed.length;Z++){let le=V.removed[Z],xe=x.indexOf(le);xe>=0&&(x[xe]=null,y[xe].disconnect(le))}for(let Z=0;Z<V.added.length;Z++){let le=V.added[Z],xe=x.indexOf(le);if(xe===-1){for(let De=0;De<y.length;De++)if(De>=x.length){x.push(le),xe=De;break}else if(x[De]===null){x[De]=le,xe=De;break}if(xe===-1)break}let _e=y[xe];_e&&_e.connect(le)}}let U=new C,z=new C;function q(V,Z,le){U.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(le.matrixWorld);let xe=U.distanceTo(z),_e=Z.projectionMatrix.elements,De=le.projectionMatrix.elements,Oe=_e[14]/(_e[10]-1),we=_e[14]/(_e[10]+1),Ke=(_e[9]+1)/_e[5],O=(_e[9]-1)/_e[5],$t=(_e[8]-1)/_e[0],be=(De[8]+1)/De[0],Pe=Oe*$t,de=Oe*be,_t=xe/(-$t+be),Be=_t*-$t;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Be),V.translateZ(_t),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let A=Oe+_t,E=we+_t,B=Pe-Be,Q=de+(xe-Be),J=Ke*we/E*A,ee=O*we/E*A;V.projectionMatrix.makePerspective(B,Q,J,ee,A,E),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function W(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;v.near=T.near=b.near=V.near,v.far=T.far=b.far=V.far,(S!==v.near||D!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,D=v.far);let Z=V.parent,le=v.cameras;W(v,Z);for(let xe=0;xe<le.length;xe++)W(le[xe],Z);le.length===2?q(v,b,T):v.projectionMatrix.copy(b.projectionMatrix),X(V,v,Z)};function X(V,Z,le){le===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Os*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let Y=null;function j(V,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){let le=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let xe=!1;le.length!==v.cameras.length&&(v.cameras.length=0,xe=!0);for(let _e=0;_e<le.length;_e++){let De=le[_e],Oe=null;if(d!==null)Oe=d.getViewport(De);else{let Ke=u.getViewSubImage(f,De);Oe=Ke.viewport,_e===0&&(e.setRenderTargetTextures(p,Ke.colorTexture,f.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(p))}let we=P[_e];we===void 0&&(we=new Lt,we.layers.enable(_e),we.viewport=new at,P[_e]=we),we.matrix.fromArray(De.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(De.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),_e===0&&(v.matrix.copy(we.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),xe===!0&&v.cameras.push(we)}}for(let le=0;le<y.length;le++){let xe=x[le],_e=y[le];xe!==null&&_e!==void 0&&_e.update(xe,Z,c||o)}Y&&Y(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let ie=new wf;ie.setAnimationLoop(j),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}};function zx(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ef(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gx(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=i[y.id];M===void 0&&(g(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",m));let R=x.program;n.updateUBOMapping(y,R);let b=e.render.frame;r[y.id]!==b&&(f(y),r[y.id]=b)}function h(y){let x=u();y.__bindingPointIndex=x;let M=s.createBuffer(),R=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,R,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=i[y.id],M=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,T=M.length;b<T;b++){let P=Array.isArray(M[b])?M[b]:[M[b]];for(let v=0,S=P.length;v<S;v++){let D=P[v];if(d(D,b,v,R)===!0){let H=D.__offset,K=Array.isArray(D.value)?D.value:[D.value],I=0;for(let U=0;U<K.length;U++){let z=K[U],q=_(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,H+I,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,x,M,R){let b=y.value,T=x+"_"+M;if(R[T]===void 0)return typeof b=="number"||typeof b=="boolean"?R[T]=b:R[T]=b.clone(),!0;{let P=R[T];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return R[T]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(y){let x=y.uniforms,M=0,R=16;for(let T=0,P=x.length;T<P;T++){let v=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,D=v.length;S<D;S++){let H=v[S],K=Array.isArray(H.value)?H.value:[H.value];for(let I=0,U=K.length;I<U;I++){let z=K[I],q=_(z),W=M%R;W!==0&&R-W<q.boundary&&(M+=R-W),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=q.storage}}}let b=M%R;return b>0&&(M+=R-b),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Ar=class{constructor(e={}){let{canvas:t=$p(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nt,this._useLegacyLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1;let x=this,M=!1,R=0,b=0,T=null,P=-1,v=null,S=new at,D=new at,H=null,K=new ce(0),I=0,U=t.width,z=t.height,q=1,W=null,X=null,Y=new at(0,0,U,z),j=new at(0,0,U,z),ie=!1,V=new Er,Z=!1,le=!1,xe=null,_e=new Ue,De=new Me,Oe=new C,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return T===null?q:1}let O=n;function $t(w,N){for(let k=0;k<w.length;k++){let G=w[k],F=t.getContext(G,N);if(F!==null)return F}return null}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",re,!1),O===null){let N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),O=$t(N,w),O===null)throw $t(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let be,Pe,de,_t,Be,A,E,B,Q,J,ee,pe,ae,ue,Ee,ke,$,it,Xe,Ce,ve,fe,Fe,tt;function vt(){be=new o_(O),Pe=new e_(O,be,e),be.init(Pe),fe=new kx(O,be,Pe),de=new Fx(O,be,Pe),_t=new c_(O),Be=new Tx,A=new Bx(O,be,de,Be,Pe,fe,_t),E=new n_(x),B=new r_(x),Q=new _m(O,Pe),Fe=new jg(O,be,Q,Pe),J=new a_(O,Q,_t,Fe),ee=new d_(O,J,Q,_t),Xe=new f_(O,Pe,A),ke=new t_(Be),pe=new Sx(x,E,B,be,Pe,Fe,ke),ae=new zx(x,Be),ue=new Ax,Ee=new Dx(be,Pe),it=new Jg(x,E,B,de,ee,f,l),$=new Ox(x,ee,Pe),tt=new Gx(O,_t,Pe,de),Ce=new Qg(O,be,_t,Pe),ve=new l_(O,be,_t,Pe),_t.programs=pe.programs,x.capabilities=Pe,x.extensions=be,x.properties=Be,x.renderLists=ue,x.shadowMap=$,x.state=de,x.info=_t}vt();let ze=new zl(x,O);this.xr=ze,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(U,z,!1))},this.getSize=function(w){return w.set(U,z)},this.setSize=function(w,N,k=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,z=N,t.width=Math.floor(w*q),t.height=Math.floor(N*q),k===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(U*q,z*q).floor()},this.setDrawingBufferSize=function(w,N,k){U=w,z=N,q=k,t.width=Math.floor(w*k),t.height=Math.floor(N*k),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,N,k,G){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,N,k,G),de.viewport(S.copy(Y).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(j)},this.setScissor=function(w,N,k,G){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,N,k,G),de.scissor(D.copy(j).multiplyScalar(q).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(w){de.setScissorTest(ie=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){X=w},this.getClearColor=function(w){return w.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(w=!0,N=!0,k=!0){let G=0;if(w){let F=!1;if(T!==null){let he=T.texture.format;F=he===xf||he===_f||he===gf}if(F){let he=T.texture.type,me=he===bi||he===xi||he===ac||he===Xi||he===pf||he===mf,Te=it.getClearColor(),Re=it.getClearAlpha(),He=Te.r,Le=Te.g,Ne=Te.b;me?(d[0]=He,d[1]=Le,d[2]=Ne,d[3]=Re,O.clearBufferuiv(O.COLOR,0,d)):(g[0]=He,g[1]=Le,g[2]=Ne,g[3]=Re,O.clearBufferiv(O.COLOR,0,g))}else G|=O.COLOR_BUFFER_BIT}N&&(G|=O.DEPTH_BUFFER_BIT),k&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ue.dispose(),Ee.dispose(),Be.dispose(),E.dispose(),B.dispose(),ee.dispose(),Fe.dispose(),tt.dispose(),pe.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Jt),ze.removeEventListener("sessionend",ut),xe&&(xe.dispose(),xe=null),jt.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let w=_t.autoReset,N=$.enabled,k=$.autoUpdate,G=$.needsUpdate,F=$.type;vt(),_t.autoReset=w,$.enabled=N,$.autoUpdate=k,$.needsUpdate=G,$.type=F}function re(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function oe(w){let N=w.target;N.removeEventListener("dispose",oe),Ae(N)}function Ae(w){Se(w),Be.remove(w)}function Se(w){let N=Be.get(w).programs;N!==void 0&&(N.forEach(function(k){pe.releaseProgram(k)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,k,G,F,he){N===null&&(N=we);let me=F.isMesh&&F.matrixWorld.determinant()<0,Te=Nd(w,N,k,G,F);de.setMaterial(G,me);let Re=k.index,He=1;if(G.wireframe===!0){if(Re=J.getWireframeAttribute(k),Re===void 0)return;He=2}let Le=k.drawRange,Ne=k.attributes.position,wt=Le.start*He,un=(Le.start+Le.count)*He;he!==null&&(wt=Math.max(wt,he.start*He),un=Math.min(un,(he.start+he.count)*He)),Re!==null?(wt=Math.max(wt,0),un=Math.min(un,Re.count)):Ne!=null&&(wt=Math.max(wt,0),un=Math.min(un,Ne.count));let kt=un-wt;if(kt<0||kt===1/0)return;Fe.setup(F,G,Te,k,Re);let Yn,xt=Ce;if(Re!==null&&(Yn=Q.get(Re),xt=ve,xt.setIndex(Yn)),F.isMesh)G.wireframe===!0?(de.setLineWidth(G.wireframeLinewidth*Ke()),xt.setMode(O.LINES)):xt.setMode(O.TRIANGLES);else if(F.isLine){let Ge=G.linewidth;Ge===void 0&&(Ge=1),de.setLineWidth(Ge*Ke()),F.isLineSegments?xt.setMode(O.LINES):F.isLineLoop?xt.setMode(O.LINE_LOOP):xt.setMode(O.LINE_STRIP)}else F.isPoints?xt.setMode(O.POINTS):F.isSprite&&xt.setMode(O.TRIANGLES);if(F.isBatchedMesh)xt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)xt.renderInstances(wt,kt,F.count);else if(k.isInstancedBufferGeometry){let Ge=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ba=Math.min(k.instanceCount,Ge);xt.renderInstances(wt,kt,Ba)}else xt.render(wt,kt)};function ct(w,N,k){w.transparent===!0&&w.side===bt&&w.forceSinglePass===!1?(w.side=Yt,w.needsUpdate=!0,Vr(w,N,k),w.side=_n,w.needsUpdate=!0,Vr(w,N,k),w.side=bt):Vr(w,N,k)}this.compile=function(w,N,k=null){k===null&&(k=w),m=Ee.get(k),m.init(),y.push(m),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),w!==k&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(x._useLegacyLights);let G=new Set;return w.traverse(function(F){let he=F.material;if(he)if(Array.isArray(he))for(let me=0;me<he.length;me++){let Te=he[me];ct(Te,k,F),G.add(Te)}else ct(he,k,F),G.add(he)}),y.pop(),m=null,G},this.compileAsync=function(w,N,k=null){let G=this.compile(w,N,k);return new Promise(F=>{function he(){if(G.forEach(function(me){Be.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){F(w);return}setTimeout(he,10)}be.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let ht=null;function Bt(w){ht&&ht(w)}function Jt(){jt.stop()}function ut(){jt.start()}let jt=new wf;jt.setAnimationLoop(Bt),typeof self!="undefined"&&jt.setContext(self),this.setAnimationLoop=function(w){ht=w,ze.setAnimationLoop(w),w===null?jt.stop():jt.start()},ze.addEventListener("sessionstart",Jt),ze.addEventListener("sessionend",ut),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(N),N=ze.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,T),m=Ee.get(w,y.length),m.init(),y.push(m),_e.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),V.setFromProjectionMatrix(_e),le=this.localClippingEnabled,Z=ke.init(this.clippingPlanes,le),_=ue.get(w,p.length),_.init(),p.push(_),On(w,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,X),this.info.render.frame++,Z===!0&&ke.beginShadows();let k=m.state.shadowsArray;if($.render(k,w,N),Z===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(_,w),m.setupLights(x._useLegacyLights),N.isArrayCamera){let G=N.cameras;for(let F=0,he=G.length;F<he;F++){let me=G[F];vh(_,w,me,me.viewport)}}else vh(_,w,N);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(x,w,N),Fe.resetDefaultState(),P=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function On(w,N,k,G){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||V.intersectsSprite(w)){G&&Oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_e);let me=ee.update(w),Te=w.material;Te.visible&&_.push(w,me,Te,k,Oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||V.intersectsObject(w))){let me=ee.update(w),Te=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Oe.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Oe.copy(me.boundingSphere.center)),Oe.applyMatrix4(w.matrixWorld).applyMatrix4(_e)),Array.isArray(Te)){let Re=me.groups;for(let He=0,Le=Re.length;He<Le;He++){let Ne=Re[He],wt=Te[Ne.materialIndex];wt&&wt.visible&&_.push(w,me,wt,k,Oe.z,Ne)}}else Te.visible&&_.push(w,me,Te,k,Oe.z,null)}}let he=w.children;for(let me=0,Te=he.length;me<Te;me++)On(he[me],N,k,G)}function vh(w,N,k,G){let F=w.opaque,he=w.transmissive,me=w.transparent;m.setupLightsView(k),Z===!0&&ke.setGlobalState(x.clippingPlanes,k),he.length>0&&Dd(F,he,N,k),G&&de.viewport(S.copy(G)),F.length>0&&Gr(F,N,k),he.length>0&&Gr(he,N,k),me.length>0&&Gr(me,N,k),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Dd(w,N,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let he=Pe.isWebGL2;xe===null&&(xe=new ri(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Sr:bi,minFilter:tn,samples:he?4:0})),x.getDrawingBufferSize(De),he?xe.setSize(De.x,De.y):xe.setSize(Po(De.x),Po(De.y));let me=x.getRenderTarget();x.setRenderTarget(xe),x.getClearColor(K),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();let Te=x.toneMapping;x.toneMapping=Mi,Gr(w,k,G),A.updateMultisampleRenderTarget(xe),A.updateRenderTargetMipmap(xe);let Re=!1;for(let He=0,Le=N.length;He<Le;He++){let Ne=N[He],wt=Ne.object,un=Ne.geometry,kt=Ne.material,Yn=Ne.group;if(kt.side===bt&&wt.layers.test(G.layers)){let xt=kt.side;kt.side=Yt,kt.needsUpdate=!0,Mh(wt,k,G,un,kt,Yn),kt.side=xt,kt.needsUpdate=!0,Re=!0}}Re===!0&&(A.updateMultisampleRenderTarget(xe),A.updateRenderTargetMipmap(xe)),x.setRenderTarget(me),x.setClearColor(K,I),x.toneMapping=Te}function Gr(w,N,k){let G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,he=w.length;F<he;F++){let me=w[F],Te=me.object,Re=me.geometry,He=G===null?me.material:G,Le=me.group;Te.layers.test(k.layers)&&Mh(Te,N,k,Re,He,Le)}}function Mh(w,N,k,G,F,he){w.onBeforeRender(x,N,k,G,F,he),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,N,k,G,w,he),F.transparent===!0&&F.side===bt&&F.forceSinglePass===!1?(F.side=Yt,F.needsUpdate=!0,x.renderBufferDirect(k,N,G,F,w,he),F.side=_n,F.needsUpdate=!0,x.renderBufferDirect(k,N,G,F,w,he),F.side=bt):x.renderBufferDirect(k,N,G,F,w,he),w.onAfterRender(x,N,k,G,F,he)}function Vr(w,N,k){N.isScene!==!0&&(N=we);let G=Be.get(w),F=m.state.lights,he=m.state.shadowsArray,me=F.state.version,Te=pe.getParameters(w,F.state,he,N,k),Re=pe.getProgramCacheKey(Te),He=G.programs;G.environment=w.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(w.isMeshStandardMaterial?B:E).get(w.envMap||G.environment),He===void 0&&(w.addEventListener("dispose",oe),He=new Map,G.programs=He);let Le=He.get(Re);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===me)return Sh(w,Te),Le}else Te.uniforms=pe.getUniforms(w),w.onBuild(k,Te,x),w.onBeforeCompile(Te,x),Le=pe.acquireProgram(Te,Re),He.set(Re,Le),G.uniforms=Te.uniforms;let Ne=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ne.clippingPlanes=ke.uniform),Sh(w,Te),G.needsLights=Od(w),G.lightsStateVersion=me,G.needsLights&&(Ne.ambientLightColor.value=F.state.ambient,Ne.lightProbe.value=F.state.probe,Ne.directionalLights.value=F.state.directional,Ne.directionalLightShadows.value=F.state.directionalShadow,Ne.spotLights.value=F.state.spot,Ne.spotLightShadows.value=F.state.spotShadow,Ne.rectAreaLights.value=F.state.rectArea,Ne.ltc_1.value=F.state.rectAreaLTC1,Ne.ltc_2.value=F.state.rectAreaLTC2,Ne.pointLights.value=F.state.point,Ne.pointLightShadows.value=F.state.pointShadow,Ne.hemisphereLights.value=F.state.hemi,Ne.directionalShadowMap.value=F.state.directionalShadowMap,Ne.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ne.spotShadowMap.value=F.state.spotShadowMap,Ne.spotLightMatrix.value=F.state.spotLightMatrix,Ne.spotLightMap.value=F.state.spotLightMap,Ne.pointShadowMap.value=F.state.pointShadowMap,Ne.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function bh(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Ls.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Sh(w,N){let k=Be.get(w);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Nd(w,N,k,G,F){N.isScene!==!0&&(N=we),A.resetTextureUnits();let he=N.fog,me=G.isMeshStandardMaterial?N.environment:null,Te=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Nt,Re=(G.isMeshStandardMaterial?B:E).get(G.envMap||me),He=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Le=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!k.morphAttributes.position,wt=!!k.morphAttributes.normal,un=!!k.morphAttributes.color,kt=Mi;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(kt=x.toneMapping);let Yn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,xt=Yn!==void 0?Yn.length:0,Ge=Be.get(G),Ba=m.state.lights;if(Z===!0&&(le===!0||w!==v)){let mn=w===v&&G.id===P;ke.setState(G,w,mn)}let Mt=!1;G.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ba.state.version||Ge.outputColorSpace!==Te||F.isBatchedMesh&&Ge.batching===!1||!F.isBatchedMesh&&Ge.batching===!0||F.isInstancedMesh&&Ge.instancing===!1||!F.isInstancedMesh&&Ge.instancing===!0||F.isSkinnedMesh&&Ge.skinning===!1||!F.isSkinnedMesh&&Ge.skinning===!0||F.isInstancedMesh&&Ge.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ge.instancingColor===!1&&F.instanceColor!==null||Ge.envMap!==Re||G.fog===!0&&Ge.fog!==he||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ke.numPlanes||Ge.numIntersection!==ke.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==Le||Ge.morphTargets!==Ne||Ge.morphNormals!==wt||Ge.morphColors!==un||Ge.toneMapping!==kt||Pe.isWebGL2===!0&&Ge.morphTargetsCount!==xt)&&(Mt=!0):(Mt=!0,Ge.__version=G.version);let Ui=Ge.currentProgram;Mt===!0&&(Ui=Vr(G,N,F));let Th=!1,or=!1,ka=!1,Gt=Ui.getUniforms(),Oi=Ge.uniforms;if(de.useProgram(Ui.program)&&(Th=!0,or=!0,ka=!0),G.id!==P&&(P=G.id,or=!0),Th||v!==w){Gt.setValue(O,"projectionMatrix",w.projectionMatrix),Gt.setValue(O,"viewMatrix",w.matrixWorldInverse);let mn=Gt.map.cameraPosition;mn!==void 0&&mn.setValue(O,Oe.setFromMatrixPosition(w.matrixWorld)),Pe.logarithmicDepthBuffer&&Gt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Gt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,or=!0,ka=!0)}if(F.isSkinnedMesh){Gt.setOptional(O,F,"bindMatrix"),Gt.setOptional(O,F,"bindMatrixInverse");let mn=F.skeleton;mn&&(Pe.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Gt.setValue(O,"boneTexture",mn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Gt.setOptional(O,F,"batchingTexture"),Gt.setValue(O,"batchingTexture",F._matricesTexture,A));let Ha=k.morphAttributes;if((Ha.position!==void 0||Ha.normal!==void 0||Ha.color!==void 0&&Pe.isWebGL2===!0)&&Xe.update(F,k,Ui),(or||Ge.receiveShadow!==F.receiveShadow)&&(Ge.receiveShadow=F.receiveShadow,Gt.setValue(O,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Oi.envMap.value=Re,Oi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),or&&(Gt.setValue(O,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&Ud(Oi,ka),he&&G.fog===!0&&ae.refreshFogUniforms(Oi,he),ae.refreshMaterialUniforms(Oi,G,q,z,xe),Ls.upload(O,bh(Ge),Oi,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ls.upload(O,bh(Ge),Oi,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Gt.setValue(O,"center",F.center),Gt.setValue(O,"modelViewMatrix",F.modelViewMatrix),Gt.setValue(O,"normalMatrix",F.normalMatrix),Gt.setValue(O,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let mn=G.uniformsGroups;for(let za=0,Fd=mn.length;za<Fd;za++)if(Pe.isWebGL2){let Eh=mn[za];tt.update(Eh,Ui),tt.bind(Eh,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function Ud(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Od(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,N,k){Be.get(w.texture).__webglTexture=N,Be.get(w.depthTexture).__webglTexture=k;let G=Be.get(w);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,N){let k=Be.get(w);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,k=0){T=w,R=N,b=k;let G=!0,F=null,he=!1,me=!1;if(w){let Re=Be.get(w);Re.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(O.FRAMEBUFFER,null),G=!1):Re.__webglFramebuffer===void 0?A.setupRenderTarget(w):Re.__hasExternalTextures&&A.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);let He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(me=!0);let Le=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?F=Le[N][k]:F=Le[N],he=!0):Pe.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?F=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[k]:F=Le,S.copy(w.viewport),D.copy(w.scissor),H=w.scissorTest}else S.copy(Y).multiplyScalar(q).floor(),D.copy(j).multiplyScalar(q).floor(),H=ie;if(de.bindFramebuffer(O.FRAMEBUFFER,F)&&Pe.drawBuffers&&G&&de.drawBuffers(w,F),de.viewport(S),de.scissor(D),de.setScissorTest(H),he){let Re=Be.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,k)}else if(me){let Re=Be.get(w.texture),He=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,k||0,He)}P=-1},this.readRenderTargetPixels=function(w,N,k,G,F,he,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Te=Te[me]),Te){de.bindFramebuffer(O.FRAMEBUFFER,Te);try{let Re=w.texture,He=Re.format,Le=Re.type;if(He!==It&&fe.convert(He)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ne=Le===Sr&&(be.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&be.has("EXT_color_buffer_float"));if(Le!==bi&&fe.convert(Le)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===ni&&(Pe.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-G&&k>=0&&k<=w.height-F&&O.readPixels(N,k,G,F,fe.convert(He),fe.convert(Le),he)}finally{let Re=T!==null?Be.get(T).__webglFramebuffer:null;de.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(w,N,k=0){let G=Math.pow(2,-k),F=Math.floor(N.image.width*G),he=Math.floor(N.image.height*G);A.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,k,0,0,w.x,w.y,F,he),de.unbindTexture()},this.copyTextureToTexture=function(w,N,k,G=0){let F=N.image.width,he=N.image.height,me=fe.convert(k.format),Te=fe.convert(k.type);A.setTexture2D(k,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,w.x,w.y,F,he,me,Te,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,w.x,w.y,N.mipmaps[0].width,N.mipmaps[0].height,me,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,G,w.x,w.y,me,Te,N.image),G===0&&k.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(w,N,k,G,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let he=w.max.x-w.min.x+1,me=w.max.y-w.min.y+1,Te=w.max.z-w.min.z+1,Re=fe.convert(G.format),He=fe.convert(G.type),Le;if(G.isData3DTexture)A.setTexture3D(G,0),Le=O.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)A.setTexture2DArray(G,0),Le=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);let Ne=O.getParameter(O.UNPACK_ROW_LENGTH),wt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),un=O.getParameter(O.UNPACK_SKIP_PIXELS),kt=O.getParameter(O.UNPACK_SKIP_ROWS),Yn=O.getParameter(O.UNPACK_SKIP_IMAGES),xt=k.isCompressedTexture?k.mipmaps[F]:k.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,xt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,w.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,w.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,w.min.z),k.isDataTexture||k.isData3DTexture?O.texSubImage3D(Le,F,N.x,N.y,N.z,he,me,Te,Re,He,xt.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Le,F,N.x,N.y,N.z,he,me,Te,Re,xt.data)):O.texSubImage3D(Le,F,N.x,N.y,N.z,he,me,Te,Re,He,xt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ne),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,un),O.pixelStorei(O.UNPACK_SKIP_ROWS,kt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Yn),F===0&&G.generateMipmaps&&O.generateMipmap(Le),de.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){R=0,b=0,T=null,de.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===dc?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===aa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nt?Yi:Mf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yi?nt:Nt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Gl=class extends Ar{};Gl.prototype.isWebGL1Renderer=!0;var zo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Hs=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},zs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qt=new C,$i=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ji=class extends sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vs,ur=new C,Ms=new C,bs=new C,Ss=new Me,fr=new Me,If=new Ue,fo=new C,dr=new C,po=new C,Vu=new Me,gl=new Me,Wu=new Me,ji=class extends mt{constructor(e=new Ji){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zs(t,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new $i(n,3,0,!1)),vs.setAttribute("uv",new $i(n,2,3,!1))}this.geometry=vs,this.material=e,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),If.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-bs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;mo(fo.set(-.5,-.5,0),bs,o,Ms,i,r),mo(dr.set(.5,-.5,0),bs,o,Ms,i,r),mo(po.set(.5,.5,0),bs,o,Ms,i,r),Vu.set(0,0),gl.set(1,0),Wu.set(1,1);let a=e.ray.intersectTriangle(fo,dr,po,!1,ur);if(a===null&&(mo(dr.set(-.5,.5,0),bs,o,Ms,i,r),gl.set(0,1),a=e.ray.intersectTriangle(fo,po,dr,!1,ur),a===null))return;let l=e.ray.origin.distanceTo(ur);l<e.near||l>e.far||t.push({distance:l,point:ur.clone(),uv:Wi.getInterpolation(ur,fo,dr,po,Vu,gl,Wu,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function mo(s,e,t,n,i,r){Ss.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(fr.x=r*Ss.x-i*Ss.y,fr.y=i*Ss.x+r*Ss.y):fr.copy(Ss),s.copy(e),s.x+=fr.x,s.y+=fr.y,s.applyMatrix4(If)}var Xu=new C,qu=new at,Yu=new at,Vx=new C,Ku=new Ue,go=new C,_l=new nn,Zu=new Ue,xl=new Fs,Go=class extends We{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lh,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,go),this.boundingBox.expandByPoint(go)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,go),this.boundingSphere.expandByPoint(go)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_l.copy(this.boundingSphere),_l.applyMatrix4(i),e.ray.intersectsSphere(_l)!==!1&&(Zu.copy(i).invert(),xl.copy(e.ray).applyMatrix4(Zu),!(this.boundingBox!==null&&xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;qu.fromBufferAttribute(i.attributes.skinIndex,e),Yu.fromBufferAttribute(i.attributes.skinWeight,e),Xu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Yu.getComponent(r);if(o!==0){let a=qu.getComponent(r);Ku.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Vx.copy(Xu).applyMatrix4(Ku),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Rr=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},zn=class extends Ut{constructor(e=null,t=1,n=1,i,r,o,a,l,c=At,h=At,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$u=new Ue,Wx=new Ue,Vo=class s{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Wx;$u.multiplyMatrices(a,t[r]),$u.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new zn(t,e,e,It,ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Rr),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Qi=class extends qe{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ts=new Ue,Ju=new Ue,_o=[],ju=new yn,Xx=new Ue,pr=new We,mr=new nn,Gs=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qi(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),ju.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(ju)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),mr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),e.ray.intersectsSphere(mr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ts),Ju.multiplyMatrices(n,Ts),pr.matrixWorld=Ju,pr.raycast(e,_o);for(let o=0,a=_o.length;o<a;o++){let l=_o[o];l.instanceId=r,l.object=this,t.push(l)}_o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qi(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Cr=class extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qu=new C,ef=new C,tf=new Ue,yl=new Fs,xo=new nn,Vs=class extends mt{constructor(e=new lt,t=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Qu.fromBufferAttribute(t,i-1),ef.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Qu.distanceTo(ef);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;tf.copy(i).invert(),yl.copy(e.ray).applyMatrix4(tf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,u=new C,f=new C,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=p,M=y-1;x<M;x+=d){let R=g.getX(x),b=g.getX(x+1);if(c.fromBufferAttribute(m,R),h.fromBufferAttribute(m,b),yl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=p,M=y-1;x<M;x+=d){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),yl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},nf=new C,sf=new C,Wo=class extends Vs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)nf.fromBufferAttribute(t,i),sf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nf.distanceTo(sf);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xo=class extends Vs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Pr=class extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rf=new Ue,Vl=new Fs,yo=new nn,vo=new C,Ws=class extends mt{constructor(e=new lt,t=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;rf.copy(i).invert(),Vl.copy(e.ray).applyMatrix4(rf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=c.getX(g);vo.fromBufferAttribute(u,m),of(vo,m,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)vo.fromBufferAttribute(u,g),of(vo,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function of(s,e,t,n,i,r,o){let a=Vl.distanceSqToPoint(s);if(a<t){let l=new C;Vl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Dn=class extends Ut{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var St=class s extends lt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function y(){let M=new C,R=new C,b=0,T=(t-e)/n;for(let P=0;P<=r;P++){let v=[],S=P/r,D=S*(t-e)+e;for(let H=0;H<=i;H++){let K=H/i,I=K*l+a,U=Math.sin(I),z=Math.cos(I);R.x=D*U,R.y=-S*n+m,R.z=D*z,u.push(R.x,R.y,R.z),M.set(U,T,z).normalize(),f.push(M.x,M.y,M.z),d.push(K,1-S),v.push(g++)}_.push(v)}for(let P=0;P<i;P++)for(let v=0;v<r;v++){let S=_[v][P],D=_[v+1][P],H=_[v+1][P+1],K=_[v][P+1];h.push(S,D,K),h.push(D,H,K),b+=6}c.addGroup(p,b,0),p+=b}function x(M){let R=g,b=new Me,T=new C,P=0,v=M===!0?e:t,S=M===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;let D=g;for(let H=0;H<=i;H++){let I=H/i*l+a,U=Math.cos(I),z=Math.sin(I);T.x=v*z,T.y=m*S,T.z=v*U,u.push(T.x,T.y,T.z),f.push(0,S,0),b.x=U*.5+.5,b.y=z*.5*S+.5,d.push(b.x,b.y),g++}for(let H=0;H<i;H++){let K=R+H,I=D+H;M===!0?h.push(I,I+1,K):h.push(I+1,I,K),P+=3}c.addGroup(p,P,M===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qo=class s extends St{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yo=class s extends lt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new C,M=new C,R=new C;for(let b=0;b<t.length;b+=3)d(t[b+0],x),d(t[b+1],M),d(t[b+2],R),l(x,M,R,y)}function l(y,x,M,R){let b=R+1,T=[];for(let P=0;P<=b;P++){T[P]=[];let v=y.clone().lerp(M,P/b),S=x.clone().lerp(M,P/b),D=b-P;for(let H=0;H<=D;H++)H===0&&P===b?T[P][H]=v:T[P][H]=v.clone().lerp(S,H/D)}for(let P=0;P<b;P++)for(let v=0;v<2*(b-P)-1;v++){let S=Math.floor(v/2);v%2===0?(f(T[P][S+1]),f(T[P+1][S]),f(T[P][S])):(f(T[P][S+1]),f(T[P+1][S+1]),f(T[P+1][S]))}}function c(y){let x=new C;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let y=new C;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let M=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(M,1-R)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],M=o[y+2],R=o[y+4],b=Math.max(x,M,R),T=Math.min(x,M,R);b>.9&&T<.1&&(x<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){let M=y*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function g(){let y=new C,x=new C,M=new C,R=new C,b=new Me,T=new Me,P=new Me;for(let v=0,S=0;v<r.length;v+=9,S+=6){y.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),b.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),R.copy(y).add(x).add(M).divideScalar(3);let D=m(R);_(b,S+0,y,D),_(T,S+2,x,D),_(P,S+4,M,D)}}function _(y,x,M,R){R<0&&y.x===1&&(o[x]=y.x-1),M.x===0&&M.z===0&&(o[x]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Lr=class s extends Yo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ko=class s extends Yo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Zo=class s extends lt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,f=new C,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],x=p/n,M=0;p===0&&o===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){let b=R/t;u.x=-e*Math.cos(i+b*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+b*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(b+M,1-x),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let x=h[p][y+1],M=h[p][y],R=h[p+1][y],b=h[p+1][y+1];(p!==0||o>0)&&d.push(x,M,b),(p!==n-1||l<Math.PI)&&d.push(M,R,b)}this.setIndex(d),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $o=class s extends lt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new C,u=new C,f=new C;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let _=g/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,y=(i+1)*d+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var yt=class extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vn=class extends yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ti=class extends sn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Mo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function qx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Yx(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function af(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Df(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Ei=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wl=class extends Ei{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Es,endingEnd:Es}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ws:r=e,a=2*t-n;break;case Eo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ws:o=e,l=2*n-t;break;case Eo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[c+R]+x*o[l+R]+M*o[u+R];return r}},Jo=class extends Ei{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Xl=class extends Ei{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Mn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mo(t,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mo(e.times,Array),values:Mo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Ki:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Ki;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&qx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ya,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Ki;var wi=class extends Mn{};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Us;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends Mn{};jo.prototype.ValueTypeName="color";var oi=class extends Mn{};oi.prototype.ValueTypeName="number";var ql=class extends Ei{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Kt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Gn=class extends Mn{InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}};Gn.prototype.ValueTypeName="quaternion";Gn.prototype.DefaultInterpolation=Ki;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends Mn{};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Us;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Nn=class extends Mn{};Nn.prototype.ValueTypeName="vector";var Ri=class{constructor(e,t=-1,n,i=hc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=In(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Zx(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Yx(l);l=af(l,1,h),c=af(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new oi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,_){if(d.length!==0){let m=[],p=[];Df(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(let _ in d){let m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){let x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new oi(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{let d=".bones["+t[u].name+"]";n(Nn,d+".position",f,"pos",i),n(Gn,d+".quaternion",f,"rot",i),n(Nn,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Kx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oi;case"vector":case"vector2":case"vector3":case"vector4":return Nn;case"color":return jo;case"quaternion":return Gn;case"bool":case"boolean":return wi;case"string":return Ai}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Zx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Kx(s.type);if(s.times===void 0){let t=[],n=[];Df(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var yi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Yl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},$x=new Yl,ai=class{constructor(e){this.manager=e!==void 0?e:$x,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qn={},Kl=class extends Error{constructor(e,t){super(e),this.response=t}},Ir=class extends ai{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=yi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:i});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Qn[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,_=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:M})=>{if(x)p.close();else{_+=M.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let b=0,T=h.length;b<T;b++){let P=h[b];P.onProgress&&P.onProgress(R)}p.enqueue(M),y()}})}}});return new Response(m)}else throw new Kl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{yi.add(e,c);let h=Qn[e];delete Qn[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Qn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Qn[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Zl=class extends ai{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=yi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Tr("img");function l(){h(),yi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Qo=class extends ai{constructor(e){super(e)}load(e,t,n,i){let r=new Ut,o=new Zl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Xs=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ea=class extends Xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vl=new Ue,lf=new C,cf=new C,Dr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;lf.setFromMatrixPosition(e.matrixWorld),t.position.copy(lf),cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cf),t.updateMatrixWorld(),vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$l=class extends Dr{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ta=class extends Xs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $l}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},hf=new Ue,gr=new C,Ml=new C,Jl=class extends Dr{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(gr),Ml.copy(n.position),Ml.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ml),n.updateMatrixWorld(),i.makeTranslation(-gr.x,-gr.y,-gr.z),hf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hf)}},na=class extends Xs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},jl=class extends Dr{constructor(){super(new Si(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qs=class extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new jl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ci=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ia=class extends ai{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=yi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return yi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),yi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});yi.add(e,l),r.manager.itemStart(e)}};var Ql=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Kt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Kt.multiplyQuaternionsFlat(e,o,e,t,e,n),Kt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},gc="\\[\\]\\.:\\/",Jx=new RegExp("["+gc+"]","g"),_c="[^"+gc+"]",jx="[^"+gc.replace("\\.","")+"]",Qx=/((?:WC+[\/:])*)/.source.replace("WC",_c),ey=/(WCOD+)?/.source.replace("WCOD",jx),ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),ny=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),iy=new RegExp("^"+Qx+ey+ty+ny+"$"),sy=["material","materials","bones","map"],ec=class{constructor(e,t,n){let i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jx,"")}static parseTrackName(e){let t=iy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);sy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=ec;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tc=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Es,endingEnd:Es};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=cc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case wp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case hc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Ep;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===lc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=ws,i.endingEnd=ws):(e?i.endingStart=this.zeroSlopeAtStart?ws:Es:i.endingStart=Eo,t?i.endingEnd=this.zeroSlopeAtEnd?ws:Es:i.endingEnd=Eo)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},ry=new Float32Array(1),sa=class extends si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;g=new Ql(ot.create(n,d,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Jo(new Float32Array(2),new Float32Array(2),1,ry),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Ri.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=hc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new tc(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Ri.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);var Pi=typeof GameGlobal!="undefined"?GameGlobal:typeof window!="undefined"?window:{},ye=typeof wx!="undefined"?wx:Pi.wx,Nf=ye.createCanvas();function Sn(s,e){let t=ye.createCanvas();return t.width=s,t.height=e,t}function yc(){let s=null;try{s=ye.getWindowInfo?ye.getWindowInfo():ye.getSystemInfoSync()}catch(r){s=ye.getSystemInfoSync()}let e=s.windowWidth,t=s.windowHeight,n=s.safeArea&&s.safeArea.top?s.safeArea.top:0,i=null;try{i=ye.getMenuButtonBoundingClientRect?ye.getMenuButtonBoundingClientRect():null}catch(r){i=null}return i&&!(i.width>0)&&(i=null),{width:e,height:t,pixelRatio:s.pixelRatio||1,safeTop:n,menu:i}}function Uf(){try{let s=ye.getDeviceInfo?ye.getDeviceInfo():ye.getSystemInfoSync();return typeof s.benchmarkLevel=="number"?s.benchmarkLevel:-1}catch(s){return-1}}function Zs(s,e){try{let t=ye.getStorageSync(s);return t===""||t===void 0||t===null?e:t}catch(t){return e}}function $s(s,e){try{ye.setStorageSync(s,e)}catch(t){}}function Li(s){try{ye.vibrateShort({type:s?"heavy":"light"})}catch(e){}}var ca;function Of(){if(ca===void 0)try{ca=ye.getOpenDataContext?ye.getOpenDataContext():null}catch(s){ca=null}return ca}function ha(s){let e=Of();if(!e)return!1;try{return e.postMessage(s),!0}catch(t){return!1}}function Ff(){let s=Of();return s&&s.canvas?s.canvas:null}var xc="scope.WxFriendInteraction";function Bf(s){let e=!1,t=n=>{e||(e=!0,s(n))};try{if(!ye.authorize)return t(!0);let n=()=>ye.authorize({scope:xc,success:()=>t(!0),fail:()=>t(!1)});if(!ye.getSetting)return n();ye.getSetting({success:i=>i.authSetting&&i.authSetting[xc]?t(!0):n(),fail:n})}catch(n){t(!0)}}function kf(s){try{ye.openSetting({success:e=>s(!!(e.authSetting&&e.authSetting[xc])),fail:()=>s(!1)})}catch(e){s(!1)}}function Hf(s){try{ye.shareAppMessage&&ye.shareAppMessage(s)}catch(e){}}function zf(s){try{ye.showShareMenu&&ye.showShareMenu({withShareTicket:!1,menus:["shareAppMessage","shareTimeline"]}),ye.onShareAppMessage&&ye.onShareAppMessage(()=>s()),ye.onShareTimeline&&ye.onShareTimeline(()=>({title:s().title}))}catch(e){}}var Tn=Pi.__MD_OPTS||{},vc=s=>typeof requestAnimationFrame!="undefined"?requestAnimationFrame(s):Pi.requestAnimationFrame(s);var ge={jumpDuration:.74,jumpHeight:1.3,slideDuration:.78,slideEnter:.07,slideExit:.12,laneSpeed:20,laneSnap:22,laneMinSpeed:5,laneFollow:.42,staminaDrain:.78,hitStamina:12,hitSlow:.38,invulnerable:1.4,gelStamina:30,gelBoost:1.14,gelBoostTime:5,maxGels:3,fullStamina:8,waterStamina:6,hydrationMax:3,peakBoost:1.26,peakTime:5,peakGrace:.8,burstEvery:10,burstBoost:1.09,burstTime:3,comboSpeedStep:.006,comboSpeedMax:.08},et=[{name:"\u5C71\u811A\u70ED\u8EAB",from:0,to:300,speed:9.5,grade:.03,gap:1.95,biome:{pine:6,leaf:14,rock:8,grass:1,bush:10,flower:1,rocky:0,snow:0},atmo:{elev:17,az:-115,sun:[1,.76,.52],sunI:3.6,top:[.22,.4,.68],fog:[.93,.79,.64],fogD:.0042,hemiSky:[.66,.74,.92],hemiGround:[.42,.34,.22],hemiI:1.9,cloud:.46}},{name:"\u7B2C\u4E00\u9053\u5C71\u810A",from:300,to:650,speed:10.5,grade:.08,gap:1.7,biome:{pine:16,leaf:8,rock:14,grass:.9,bush:8,flower:.6,rocky:.15,snow:0},atmo:{elev:29,az:-128,sun:[1,.9,.74],sunI:3.6,top:[.16,.38,.76],fog:[.74,.83,.93],fogD:.0032,hemiSky:[.62,.76,1],hemiGround:[.4,.38,.26],hemiI:1.7,cloud:.4}},{name:"\u5BC6\u6797\u7A7F\u8D8A",from:650,to:1050,speed:11.5,grade:.04,gap:1.5,biome:{pine:64,leaf:10,rock:10,grass:.7,bush:14,flower:.2,rocky:0,snow:0},atmo:{elev:42,az:-100,sun:[1,.95,.82],sunI:3.4,top:[.2,.42,.72],fog:[.68,.78,.76],fogD:.0062,hemiSky:[.58,.74,.86],hemiGround:[.3,.36,.22],hemiI:1.55,cloud:.56}},{name:"\u788E\u77F3\u9661\u5761",from:1050,to:1400,speed:12.2,grade:.12,gap:1.4,biome:{pine:5,leaf:0,rock:46,grass:.35,bush:4,flower:.1,rocky:1,snow:0},atmo:{elev:57,az:-140,sun:[1,.98,.92],sunI:3.6,top:[.12,.33,.8],fog:[.76,.84,.95],fogD:.0026,hemiSky:[.6,.76,1],hemiGround:[.46,.42,.36],hemiI:1.6,cloud:.26}},{name:"\u4E91\u7AEF\u5C71\u810A",from:1400,to:1750,speed:13,grade:.05,gap:1.3,biome:{pine:8,leaf:0,rock:30,grass:.5,bush:3,flower:.3,rocky:.55,snow:1},atmo:{elev:34,az:-72,sun:[1,.93,.84],sunI:3.4,top:[.14,.3,.7],fog:[.87,.91,.96],fogD:.0048,hemiSky:[.7,.8,1],hemiGround:[.5,.5,.5],hemiI:1.8,cloud:.7}},{name:"\u51B2\u523A\u7EC8\u70B9",from:1750,to:2e3,speed:14,grade:-.07,gap:1.2,biome:{pine:20,leaf:12,rock:12,grass:.9,bush:10,flower:.8,rocky:0,snow:.15},atmo:{elev:11,az:-38,sun:[1,.58,.3],sunI:3.8,top:[.2,.28,.56],fog:[.98,.67,.46],fogD:.0036,hemiSky:[.7,.62,.78],hemiGround:[.42,.3,.22],hemiI:1.9,cloud:.52}}],Mc="player",oy=[{name:"\u963F\u5CF0",model:"afeng",color:3112920,lane:-1,start:.9,curve:[1.075,1.085,1.1,1.125,1.14,1.15]},{name:"\u8001\u5468",model:"laozhou",color:15330286,lane:1,start:.9,curve:[1.1,1.1,1.092,1.092,1.087,1.092]},{name:"\u5C0F\u91CE",model:"xiaoye",color:14235727,lane:0,start:2.3,curve:[1.16,1.14,1.097,1.055,1.03,1.022]}],ay=!1,es=ay?oy:[],En=et.slice(1).map(s=>s.from+70);function Js(s){for(let e=0;e<et.length;e++)if(s<et[e].to)return e;return et.length-1}function cn(s,e,t){return s<e?e:s>t?t:s}function ts(s,e,t){let n=cn((t-s)/(e-s),0,1);return n*n*(3-2*n)}function ln(s,e,t){return s+(e-s)*t}function ci(s,e,t=60){let n=Js(s),i=et[n],r=e(i),o=t/2;if(n>0&&s-i.from<o){let a=.5+.5*(s-i.from)/o;return ln(e(et[n-1]),r,a*a*(3-2*a))}if(n<et.length-1&&i.to-s<o){let a=.5-.5*(i.to-s)/o;return ln(r,e(et[n+1]),a*a*(3-2*a))}return r}function Gf(s){let e=et.length,t=n=>(n.from+n.to)/2;if(s<=t(et[0]))return{a:0,b:0,t:0};for(let n=0;n<e-1;n++){let i=t(et[n]),r=t(et[n+1]);if(s<r){let o=(s-i)/(r-i);return{a:n,b:n+1,t:o*o*(3-2*o)}}}return{a:e-1,b:e-1,t:0}}function pn(s){let e=Math.floor(Math.round(s*1e3)/10),t=Math.floor(e/6e3),n=Math.floor(e/100)%60,i=e%100;return`${t<10?"0":""}${t}:${n<10?"0":""}${n}.${i<10?"0":""}${i}`}function bc(s){if(!(s>.8))return`-'--"`;let e=Math.round(1e3/s),t=Math.floor(e/60),n=e%60;return`${t}'${n<10?"0":""}${n}"`}function Vf(s=Date.now()){return Math.floor((s/864e5+8/24+3)/7)}function ly(s,e){return e?s.t>0&&e.t>0?s.t<e.t:s.t>0?!0:e.t>0?!1:s.d>e.d:!0}function Ii(){let s=Vf(),e=Zs("week",null);return e&&e.wk===s?{wk:s,t:e.t>0?e.t:0,d:e.d>0?e.d:0}:{wk:s,t:0,d:0}}function Wf(s,e,t){let n=Ii(),i={wk:n.wk,t:s?Math.round(e*1e3):0,d:Math.floor(Math.min(2e3,Math.max(0,t)))},o=!(n.t>0||n.d>0)||ly(i,n),a=o?i:n;return o&&$s("week",a),ha({type:"submit",wk:a.wk,t:a.t,d:a.d}),{improved:o,best:a}}var Sc=0;function Xf(s,e){let t=++Sc;Bf(n=>{t===Sc&&(ha({type:"show",w:s.w,h:s.h,scale:s.scale,wk:Vf(),me:Ii(),auth:n}),e&&e(n))})}function qf(){Sc++,ha({type:"hide"})}function Tc(){let s=Ii(),e="\u5C71\u91CE\u75BE\u9A70\uFF1A2000 \u7C73\u5C71\u5F84\u8D8A\u91CE\u8D5B\uFF0C\u6765\u548C\u6211\u6BD4\u6BD4\u672C\u5468\u6210\u7EE9";return s.t>0?e=`\u6211\u672C\u5468 2000 \u7C73\u5C71\u5F84\u8DD1\u4E86 ${pn(s.t/1e3)}\uFF0C\u4F60\u80FD\u8DD1\u8FDB\u8FD9\u4E2A\u6210\u7EE9\u5417\uFF1F`:s.d>0&&(e=`\u6211\u5728\u5C71\u91CE\u75BE\u9A70\u8DD1\u5230\u4E86 ${s.d} \u7C73\uFF0C\u4F60\u80FD\u8DD1\u5B8C\u5168\u7A0B\u5417\uFF1F`),{title:e,query:"from=share"}}function Yf(){Hf(Tc())}function hn(s){let e=s>>>0;return function(){e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Ur=256,Or=new Uint8Array(Ur*2),Ec=new Float32Array(Ur);{let s=hn(20261113),e=[];for(let t=0;t<Ur;t++)e.push(t),Ec[t]=s();for(let t=Ur-1;t>0;t--){let n=Math.floor(s()*(t+1)),i=e[t];e[t]=e[n],e[n]=i}for(let t=0;t<Ur*2;t++)Or[t]=e[t&255]}function ua(s,e){return Ec[Or[(s&255)+Or[e&255]]]}function rn(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,o=i*i*i*(i*(i*6-15)+10),a=r*r*r*(r*(r*6-15)+10),l=ua(t,n),c=ua(t+1,n),h=ua(t,n+1),u=ua(t+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+u)*o*a}function Fr(s,e,t=4){let n=.5,i=0,r=0;for(let o=0;o<t;o++)i+=n*rn(s,e),r+=n,s=s*2.03+17.1,e=e*2.03+9.7,n*=.5;return i/r}function wc(s,e,t=4){let n=.5,i=0,r=0;for(let o=0;o<t;o++){let a=1-Math.abs(rn(s,e)*2-1);i+=n*a*a,r+=n,s=s*2.1+31.3,e=e*2.1+11.9,n*=.5}return i/r}function cy(s,e,t,n){let i=Math.floor(s),r=Math.floor(e),o=s-i,a=e-r,l=o*o*(3-2*o),c=a*a*(3-2*a),h=(_,m)=>{let p=(_%t+t)%t,y=(m%t+t)%t;return Ec[Or[p+n+Or[y+n*7&255]&255]]},u=h(i,r),f=h(i+1,r),d=h(i,r+1),g=h(i+1,r+1);return u+(f-u)*l+(d-u)*c+(u-f-d+g)*l*c}function js(s,e,t,n,i){let r=.5,o=0,a=0,l=t;for(let c=0;c<n;c++)o+=r*cy(s*l,e*l,l,i+c*13),a+=r,r*=.5,l*=2;return o/a}var Vn=null,Wn=null;function Qs(){if(Vn)return Vn;let s=256,e=new Uint8Array(s*s*4);for(let t=0;t<s;t++)for(let n=0;n<s;n++){let i=n/s,r=t/s,o=(t*s+n)*4;e[o]=Math.round(255*js(i,r,4,5,1)),e[o+1]=Math.round(255*js(i,r,8,4,37)),e[o+2]=Math.round(255*js(i,r,24,3,71)),e[o+3]=Math.round(255*js(i,r,64,2,113))}return Vn=new zn(e,s,s,It),Vn.wrapS=Vn.wrapT=xn,Vn.magFilter=Je,Vn.minFilter=tn,Vn.generateMipmaps=!0,Vn.needsUpdate=!0,Vn}function Kf(){if(Wn)return Wn;let s=256,e=new Float32Array(s*s);for(let r=0;r<s;r++)for(let o=0;o<s;o++){let a=o/s,l=r/s;e[r*s+o]=js(a,l,6,5,5)*.7+js(a,l,40,2,91)*.3}let t=new Uint8Array(s*s*4),n=(r,o)=>e[(o+s)%s*s+(r+s)%s],i=9;for(let r=0;r<s;r++)for(let o=0;o<s;o++){let a=(n(o+1,r)-n(o-1,r))*i,l=(n(o,r+1)-n(o,r-1))*i,c=Math.sqrt(a*a+l*l+1),h=(r*s+o)*4;t[h]=Math.round(255*(.5-.5*a/c)),t[h+1]=Math.round(255*(.5-.5*l/c)),t[h+2]=Math.round(255*(.5+.5/c)),t[h+3]=255}return Wn=new zn(t,s,s,It),Wn.wrapS=Wn.wrapT=xn,Wn.magFilter=Je,Wn.minFilter=tn,Wn.generateMipmaps=!0,Wn.needsUpdate=!0,Wn}var fa=-400,hy=2700;function rt(s){return ts(15,130,s)*(14*Math.sin(s*.011)+7*Math.sin(s*.027+1.3)+3*Math.sin(s*.058+.5))}function uy(s){return rt(s+.5)-rt(s-.5)}function tr(s){return-Math.atan(uy(s))}var Xn=new Float32Array(hy-fa+1);{let s=0;for(let t=0;t<Xn.length;t++){let n=fa+t;Xn[t]=s;let i=ci(n,r=>r.grade,140);n<0&&(i=.02),n>2e3&&(i=-.03),i+=.052*Math.cos(n*.013)+.066*Math.cos(n*.037+2),s+=i}let e=Xn[-fa];for(let t=0;t<Xn.length;t++)Xn[t]-=e}function gt(s){let e=s-fa;e<0&&(e=0),e>Xn.length-1.001&&(e=Xn.length-1.001);let t=Math.floor(e),n=e-t;return Xn[t]+(Xn[t+1]-Xn[t])*n}function da(s){return(gt(s+1)-gt(s-1))*.5}function fy(s){return .38*Math.sin(s*.0075+.7)+.2*Math.sin(s*.019+2.1)}function hi(s,e){let t=gt(e),n=s-rt(e),i=Math.abs(n)-3.1;if(i<=0)return t;let r=n>0?1:-1,o=t;return o+=.22*ts(0,1.3,i),o+=r*fy(e)*i*(1-.32*ts(50,220,i)),o+=ts(.5,6,i)*1.1*(Fr(s*.085,e*.085,2)-.5),o+=ts(5,90,i)*36*(Fr(s*.0068+50,e*.0068,4)-.44),o+=ts(40,200,i)*30*(rn(s*.0031+7,e*.0031+3)-.35),o}function Zf(s,e,t){let i=hi(s+.6,e)-hi(s-.6,e),r=hi(s,e+.6)-hi(s,e-.6),o=-i,a=2*.6,l=r,c=Math.sqrt(o*o+a*a+l*l);return t[0]=o/c,t[1]=a/c,t[2]=l/c,t}function wn(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new lt,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=$f(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=$f(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function $f(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new qe(o,t,n);return i!==void 0&&(l.gpuType=i),l}function Ac(s,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,x=a.length;y<x;y++){let M=a[y],R=s.attributes[M];l[M]=new qe(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);let b=s.morphAttributes[M];b&&(c[M]=new qe(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized))}let d=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=d*_;for(let y=0;y<r;y++){let x=n?n.getX(y):y,M="";for(let R=0,b=a.length;R<b;R++){let T=a[R],P=s.getAttribute(T),v=P.itemSize;for(let S=0;S<v;S++)M+=`${~~(P[u[S]](x)*_+m)},`}if(M in t)h.push(t[M]);else{for(let R=0,b=a.length;R<b;R++){let T=a[R],P=s.getAttribute(T),v=s.morphAttributes[T],S=P.itemSize,D=l[T],H=c[T];for(let K=0;K<S;K++){let I=u[K],U=f[K];if(D[U](o,P[I](x)),v)for(let z=0,q=v.length;z<q;z++)H[z][U](o,v[z][I](x))}}t[M]=o,h.push(o),o++}}let p=s.clone();for(let y in s.attributes){let x=l[y];if(p.setAttribute(y,new qe(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),y in c)for(let M=0;M<c[y].length;M++){let R=c[y][M];p.morphAttributes[y][M]=new qe(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return p.setIndex(h),p}function Rc(s,e){if(e===vf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Nr||e===oa){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Nr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Pc(s,{repeatX:e=!1}={}){let t=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,t,n).data,r=0,o=0,a=0,l=0;for(let u=0;u<i.length;u+=4)i[u+3]>200&&(r+=i[u],o+=i[u+1],a+=i[u+2],l++);l=Math.max(1,l),r=Math.round(r/l),o=Math.round(o/l),a=Math.round(a/l);let c=new Uint8Array(t*n*4);for(let u=0;u<n;u++){let f=(n-1-u)*t*4,d=u*t*4;for(let g=0;g<t*4;g+=4){let _=i[f+g+3];_<8?(c[d+g]=r,c[d+g+1]=o,c[d+g+2]=a,c[d+g+3]=0):(c[d+g]=i[f+g],c[d+g+1]=i[f+g+1],c[d+g+2]=i[f+g+2],c[d+g+3]=_)}}let h=new zn(c,t,n,It);return h.colorSpace=dt,h.needsUpdate=!0,h.wrapS=e?xn:qt,h.wrapT=qt,h.magFilter=Je,h.minFilter=tn,h.generateMipmaps=!0,h}function Cc(s,e,t,n,i,r){s.save(),s.translate(e,t),s.rotate(r),s.scale(1,i/n),s.beginPath(),s.arc(0,0,n,0,Math.PI*2),s.restore()}function on(s,e,t,n=1){return`rgba(${Math.round(s)},${Math.round(e)},${Math.round(t)},${n})`}var Jf=.955,Lc=.88;function jf(s,e,t,n){s.globalCompositeOperation="source-over",s.fillStyle=on(n[0],n[1],n[2]),s.fillRect(0,0,e,24);for(let i=0;i<90;i++){let r=.6+t()*.7;s.fillStyle=on(n[0]*r,n[1]*r,n[2]*r),s.fillRect(t()*e,0,1+t()*3,24)}}function Qf(){let t=Sn(256,128),n=t.getContext("2d");n.clearRect(0,0,256,128);let i=hn(4242),r=(o,a,l,c,h)=>{let u=o+l,f=128-a,d=n.createLinearGradient(0,128,0,f),g=.75+i()*.5;d.addColorStop(0,on(64*g,96*g,34*g)),d.addColorStop(.55,on((92+h*60)*g,(132+h*20)*g,44*g)),d.addColorStop(1,on((150+h*60)*g,(176+h*14)*g,(70+h*20)*g)),n.fillStyle=d,n.beginPath(),n.moveTo(o-c,128),n.quadraticCurveTo(o-c*.6+l*.25,128-a*.6,u,f),n.quadraticCurveTo(o+c*.9+l*.35,128-a*.55,o+c,128),n.closePath(),n.fill()};for(let o=0;o<150;o++)r(8+i()*240,16+i()*34,(i()-.5)*22,2.2+i()*1.6,i()*i());for(let o=0;o<46;o++)r(10+i()*236,40+i()*46,(i()-.5)*40,1.8+i()*1.4,i()*i());for(let o=0;o<16;o++)r(14+i()*228,78+i()*44,(i()-.5)*46,1.6+i()*1.2,i());for(let o=0;o<6;o++){let a=16+i()*224,l=86+i()*36,c=(i()-.5)*30;n.strokeStyle=on(150,142,80),n.lineWidth=1.2,n.beginPath(),n.moveTo(a,128),n.quadraticCurveTo(a+c*.3,128-l*.6,a+c,128-l),n.stroke(),n.fillStyle=on(186,170,104),Cc(n,a+c,128-l,2.2,6,c*.02),n.fill()}return Pc(t)}function ed(){let t=Sn(256,256),n=t.getContext("2d");n.clearRect(0,0,256,256);let i=hn(9001),r=l=>{for(let c of[-256,0,256])n.save(),n.translate(c,0),l(),n.restore()},o=n.createLinearGradient(0,0,0,256);o.addColorStop(0,on(30,60,32)),o.addColorStop(.5,on(36,72,36)),o.addColorStop(.62,on(40,78,38,0)),n.fillStyle=o,n.fillRect(0,0,256,256*.66),n.fillStyle=on(32,64,34),n.fillRect(0,0,256,256*.42);let a=54;for(let l=0;l<a;l++){let c=i()*256,h=256*(.18+i()*.3),u=256*(.34+i()*.46),f=Math.min(254,h+u),d=9+i()*13,g=(i()-.5)*26,_=.7+i()*.6,m=on(44*_,90*_,42*_);r(()=>{n.fillStyle=m,n.beginPath(),n.moveTo(c-d,h),n.quadraticCurveTo(c-d*.8+g*.4,(h+f)/2,c+g,f),n.quadraticCurveTo(c+d*.8+g*.4,(h+f)/2,c+d,h),n.closePath(),n.fill()})}for(let l=0;l<2600;l++){let c=i()*256,h=i()*256,u=h/256,f=5+i()*9,d=Math.PI/2+(i()-.5)*1.3,g=.55+i()*.75,_=.5+u*.9;n.strokeStyle=on(58*g*_,112*g*_,50*g*_,.9),n.lineWidth=1+i()*.8,n.globalCompositeOperation="source-atop",r(()=>{n.beginPath(),n.moveTo(c,h),n.lineTo(c+Math.cos(d)*f,h+Math.sin(d)*f),n.stroke()})}return jf(n,256,i,[104,78,54]),Pc(t,{repeatX:!0})}function td(){let t=Sn(256,256),n=t.getContext("2d"),i=hn(7077);n.fillStyle=on(48,86,30),n.fillRect(0,0,256,256);for(let r=0;r<4200;r++){let o=i()*256,a=i()*256,l=2.2+i()*3.6,c=.55+i()*.8,h=i()<.12?40:0,u=i()*Math.PI;n.fillStyle=on((66+h)*c,116*c,38*c);for(let f of[-256,0,256])for(let d of[-256,0,256])Cc(n,o+f,a+d,l,l*.55,u),n.fill()}n.globalCompositeOperation="destination-out";for(let r=0;r<260;r++){let o=i()*256,a=i()*256,l=2.5+i()*5,c=l*(.5+i()*.5),h=i()*Math.PI;for(let u of[-256,0,256])for(let f of[-256,0,256])Cc(n,o+u,a+f,l,c,h),n.fill()}return jf(n,256,i,[116,96,74]),Pc(t,{repeatX:!0})}function Un(s){let e=s.onBeforeCompile,t=s.customProgramCacheKey;s.onBeforeCompile=(i,r)=>{e&&e(i,r),i.fragmentShader=i.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      #ifdef USE_MAP
        diffuseColor.rgb = pow(max(diffuseColor.rgb, vec3(0.0)), vec3(2.2));
      #endif`)};let n=Object.prototype.hasOwnProperty.call(s,"customProgramCacheKey");return s.customProgramCacheKey=()=>(n?t.call(s):"")+"|srgbmap",s}var Br=new ce;function Ze(s,e,t){return new ce().setRGB(s,e,t,nt)}function Et(s,e){let t=s.attributes.position,n=s.attributes.normal,i=new Float32Array(t.count*3),r=new C,o=new C;for(let a=0;a<t.count;a++){r.fromBufferAttribute(t,a),n&&o.fromBufferAttribute(n,a);let l=e(r,o,a);i[a*3]=l.r,i[a*3+1]=l.g,i[a*3+2]=l.b}return s.setAttribute("color",new qe(i,3)),s}function Dc(s){return s.deleteAttribute("uv"),s}function ld(s,e=2){let t=s.attributes.uv;for(let n=0;n<t.count;n++)t.setXY(n,t.getX(n)*e,Jf);return s}function pa(s,e=7,t=8){let n=hn(s),i=[],r=new St(.01,.034,1,5,1,!0);r.translate(0,.5,0),ld(r),Et(r,()=>Br.setScalar(.75+n()*.4).clone()),i.push(r);let o=Math.pow(7/e,.8);for(let l=0;l<e;l++){let c=l/(e-1),h=.3*(1-c*.8)*(.9+n()*.2),u=Math.min(.98-(.1+c*.62),(.34-c*.1)*o),f=.1+c*.62,d=new qo(h,u,t,1,!0);d.rotateY(n()*6.28);let g=d.attributes.position,_=d.attributes.uv,m=Math.max(1,Math.round(3-c*2)),p=n();for(let y=0;y<g.count;y++){let x=g.getY(y);if(x<0){let M=.82+n()*.36;g.setX(y,g.getX(y)*M),g.setZ(y,g.getZ(y)*M),g.setY(y,x-n()*.04)}_.setXY(y,_.getX(y)*m+p,_.getY(y)*Lc)}d.translate(0,f+u/2,0),Et(d,y=>{let x=y.y>f+u*.4;return Br.setScalar(x?.55:.95+n()*.35).clone()}),i.push(d)}let a=wn(i);return a.computeBoundingSphere(),a}function cd(s,e,t,n,i,r,o,a=1){let l=new Lr(1,a);l.deleteAttribute("normal"),l=Ac(l,.001);let c=l.attributes.position,h=l.attributes.uv;for(let u=0;u<c.count;u++){let f=c.getX(u),d=c.getY(u),g=c.getZ(u),_=.74+.5*rn(f*2.3+s,d*2.3+g*1.9);c.setXYZ(u,f*e*_+t,d*e*_*r+n,g*e*_+i),h.setXY(u,h.getX(u)*2,h.getY(u)*Lc)}return l.computeVertexNormals(),Et(l,(u,f)=>Br.setScalar(Ys.clamp(.62+f.y*.45+(o()-.5)*.2,.4,1.25)).clone()),l}function nd(s,e=1){let t=hn(s),n=[],i=new St(.028,.05,.6,6,1,!0);i.translate(0,.3,0),ld(i),Et(i,()=>Br.setScalar(.7+t()*.4).clone()),n.push(i);let r=5;for(let a=0;a<r;a++){let l=a===0?.31:.18+t()*.12,c=t()*6.28,h=a===0?0:.15+t()*.12,u=a===0?.69:.5+t()*.33;n.push(cd(s+a*7.1,l,Math.cos(c)*h,u,Math.sin(c)*h,.82,t,e))}let o=wn(n);return o.computeBoundingSphere(),o}function id(s,e=1){let t=hn(s),n=[];for(let r=0;r<2;r++){let o=t()*6.28,a=r===0?0:.3;n.push(cd(s+r*3.3,r===0?.5:.36,Math.cos(o)*a,r===0?.3:.2,Math.sin(o)*a,.7,t,e))}let i=wn(n);return i.computeBoundingSphere(),i}function nr(s,e=2){let t=new Lr(1,e);t.deleteAttribute("uv"),t.deleteAttribute("normal"),t=Ac(t,.001);let n=t.attributes.position,i=s*13.37;for(let l=0;l<n.count;l++){let c=n.getX(l),h=n.getY(l),u=n.getZ(l),f=.62+.5*rn(c*1.3+i,h*1.3+u*1.1+i);f+=.22*rn(c*3.1+u*2.2+i,h*3.1-u*1.7),f+=.07*rn(c*7.3+i,h*7.3+u*6.1);let d=c*.55+h*.6+u*.3;d>.62&&(f*=1-(d-.62)*.7),n.setXYZ(l,c*f,h*f*.72,u*f*.9)}t.computeVertexNormals();let r=Ze(.36,.35,.34),o=Ze(.66,.63,.58),a=Ze(.3,.38,.16);return Et(t,(l,c)=>{let h=rn(l.x*2.1+i,l.y*2.6+l.z*1.8),u=r.clone().lerp(o,h),f=Ys.smoothstep(c.y,.55,.9)*Ys.smoothstep(rn(l.x*1.4+9+i,l.z*1.4),.45,.7);return u.lerp(a,f*.75)}),t.computeBoundingSphere(),t}function dy(){let s=[],e=[],t=[],n=[];for(let a=0;a<3;a++){let l=a/3*Math.PI+.3,c=Math.cos(l)*.5,h=Math.sin(l)*.5,u=s.length/3;s.push(-c,0,-h,c,0,h,c,.46,h,-c,.46,-h),e.push(0,0,1,0,1,1,0,1);for(let f=0;f<4;f++)t.push(0,1,0);n.push(u,u+1,u+2,u,u+2,u+3)}let o=new lt;return o.setAttribute("position",new Qe(s,3)),o.setAttribute("normal",new Qe(t,3)),o.setAttribute("uv",new Qe(e,2)),o.setIndex(n),o.computeBoundingSphere(),o}function py(){let s=[],e=Ze(.3,.46,.15),t=new ce(1,1,1);for(let o=0;o<2;o++){let a=o*2.6+.4,l=.06,c=.26+o*.09,h=Dc(new St(.006,.008,c,3,1,!0));h.translate(Math.cos(a)*l,c/2,Math.sin(a)*l),Et(h,()=>e.clone());let u=Dc(new Ko(.045,0));u.scale(1,.6,1),u.translate(Math.cos(a)*l,c,Math.sin(a)*l),Et(u,()=>t.clone()),s.push(h.toNonIndexed(),u)}let n=wn(s),i=n.attributes.position,r=new Float32Array(i.count*3);for(let o=0;o<i.count;o++)r[o*3+1]=1;return n.setAttribute("normal",new qe(r,3)),n.computeBoundingSphere(),n}function my(){let s=Dc(new St(.012,.012,1.1,4,1,!0));s.translate(0,.55,0),Et(s,()=>Ze(.85,.85,.82));let e=new lt;e.setAttribute("position",new Qe([0,1.08,0,0,.8,0,.36,.94,.03],3)),e.setAttribute("normal",new Qe([0,0,1,0,0,1,0,0,1],3)),e.setIndex([0,1,2]),Et(e,()=>Ze(1,.36,.05));let t=wn([s.toNonIndexed(),e.toNonIndexed()]);return t.computeBoundingSphere(),t}function _a(s,e=.6,t=.5){let n=Qs();return s.onBeforeCompile=i=>{i.uniforms.uGrainTex={value:n},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGrainPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 grainP = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          grainP = instanceMatrix * grainP;
        #endif
        vGrainPos = (modelMatrix * grainP).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uGrainTex;
varying vec3 vGrainPos;`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          vec3 gp = vGrainPos * ${e.toFixed(3)};
          float ga = texture2D(uGrainTex, gp.xz + gp.y * 0.37).b;
          float gb = texture2D(uGrainTex, gp.xy * 3.1 + gp.z * 0.53).a;
          float gc = texture2D(uGrainTex, gp.zy * 0.31 + gp.x * 0.11).r;
          float grain = (ga * 0.45 + gb * 0.3 + gc * 0.25);
          diffuseColor.rgb *= 1.0 + (grain - 0.5) * ${(t*2).toFixed(3)};
        }`)},s.customProgramCacheKey=()=>`grain-${e}-${t}`,s}var ma=null;function Nc(){if(ma)return ma;let s={value:0},e=new Ti({map:Qf(),alphaTest:.35,side:bt});e.onBeforeCompile=r=>{r.uniforms.uTime=s,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec2 ip = instanceMatrix[3].xz;
          float gw = uv.y * uv.y;
          transformed.x += sin(uTime * 1.9 + ip.x * 0.31 + ip.y * 0.17) * 0.11 * gw;
          transformed.z += cos(uTime * 1.4 + ip.x * 0.23 - ip.y * 0.29) * 0.07 * gw;
        #endif`)},e.customProgramCacheKey=()=>"grass-wind",Un(e);let t=Un(new Ti({map:ed(),alphaTest:.45,vertexColors:!0,side:bt})),n=Un(new Ti({map:td(),alphaTest:.45,vertexColors:!0,side:bt})),i=_a(new yt({vertexColors:!0,roughness:.92,metalness:0}),.55,.55);return ma={windUniform:s,pine:[pa(11),pa(29)],leaf:nd(5),rock:nr(1,1),grass:dy(),bush:id(8),lod:{pineA:pa(11,4,6),pineB:pa(29,4,6),leaf:nd(5,0),rock:nr(1,0),bush:id(8,0)},flower:py(),marker:my(),grassMat:e,pineMat:t,leafMat:n,rockMat:i,flowerMat:new Ti({vertexColors:!0}),markerMat:new Ti({vertexColors:!0,side:bt})},ma}var gy=34,qn={pineA:48,pineB:48,leaf:22,rock:56,grass:1500,bush:20,flower:170,marker:3},sd=new Ue,rd=new Kt,od=new Bs,_y=new C,xy=new C,ad=[Ze(1,.82,.15),Ze(.98,.97,.92),Ze(.62,.42,.9),Ze(1,.55,.2),Ze(.95,.5,.65)],yy=Ze(1,.8,.1),Ic=Ze(.93,.95,.98),ga=class{constructor(e){let t=Nc(),n=(i,r,o,a,l)=>{let c=new Gs(i,r,o);return c.castShadow=a,c.receiveShadow=l,c.count=0,c.instanceMatrix.setUsage(li),c.setColorAt(0,Br.set(16777215)),c.instanceColor.setUsage(li),a&&(c.shadowCount=0,c.onBeforeShadow=()=>{c.fullCount=c.count,c.count=Math.max(1,Math.min(c.count,c.shadowCount))},c.onAfterShadow=()=>{c.count=c.fullCount}),e.add(c),c};this.meshes={pineA:n(t.pine[0],t.pineMat,qn.pineA,!0,!1),pineB:n(t.pine[1],t.pineMat,qn.pineB,!0,!1),leaf:n(t.leaf,t.leafMat,qn.leaf,!0,!1),rock:n(t.rock,t.rockMat,qn.rock,!0,!0),grass:n(t.grass,t.grassMat,qn.grass,!1,!0),bush:n(t.bush,t.leafMat,qn.bush,!1,!0),flower:n(t.flower,t.flowerMat,qn.flower,!1,!1),marker:n(t.marker,t.markerMat,qn.marker,!0,!1)},this.counts={},this.hiGeo={};for(let i in t.lod)this.hiGeo[i]=this.meshes[i].geometry;this.lodGeo=t.lod,this.lod=0}setLod(e){if(e!==this.lod){this.lod=e;for(let t in this.lodGeo)this.meshes[t].geometry=e?this.lodGeo[t]:this.hiGeo[t]}}_put(e,t,n,i,r,o,a,l,c,h,u){let f=this.meshes[e],d=this.counts[e];d>=qn[e]||(od.set(o,r,a,"YXZ"),rd.setFromEuler(od),sd.compose(_y.set(t,n,i),rd,xy.set(l,c,h)),f.setMatrixAt(d,sd),f.setColorAt(d,u),this.counts[e]=d+1)}populate(e,t,n){let i=hn(e*7919+101);for(let b in this.meshes)this.counts[b]=0;let r=t+n/2,o=b=>ci(r,T=>T.biome[b],80),a=o("snow"),l=o("rocky"),c=new ce,h=[],u={},f=(b,T,P,v,S,D,H,K,I,U,z,q)=>h.push([b,T,P,v,S,D,H,K,I,U,z,q.r,q.g,q.b]),d=()=>{h.sort((b,T)=>b[1]-T[1]);for(let b of h)this._put(b[0],b[2],b[3],b[4],b[5],b[6],b[7],b[8],b[9],b[10],c.setRGB(b[11],b[12],b[13])),b[1]<gy&&(u[b[0]]=this.counts[b[0]]);h.length=0},g=(b,T,P)=>{let v=t+i()*n,S=i()<.5?-1:1,D=b+T*Math.pow(i(),P),H=rt(v)+S*(3.1+D);return{s:v,x:H,e:D,y:hi(H,v)}},_=Math.round(o("pine")*1.4*(.85+i()*.3));for(let b=0;b<_;b++){let T=g(3.6,140,1.7),P=7+i()*9,v=P*(.8+i()*.35);c.setRGB(.8+i()*.45,.85+i()*.4,.8+i()*.4).lerp(Ic,a*.35*i()),f(i()<.5?"pineA":"pineB",T.e,T.x,T.y-.15,-T.s,i()*6.28,(i()-.5)*.08,(i()-.5)*.08,v,P,v,c)}d();let m=Math.round(o("leaf")*(.8+i()*.4));for(let b=0;b<m;b++){let T=g(4.5,130,1.5),P=5+i()*5;c.setRGB(.85+i()*.4,.9+i()*.35,.75+i()*.4),i()<.18&&c.setRGB(1.7,1.15,.55),f("leaf",T.e,T.x,T.y-.1,-T.s,i()*6.28,0,0,P*(.9+i()*.4),P,P*(.9+i()*.4),c)}d();let p=Math.round(o("rock")*(.8+i()*.4));for(let b=0;b<p;b++){let T=g(.9,110,2),P=Math.min(1,T.e/30),v=.28+i()*i()*(1.2+P*2.4)+l*.25,S=.8+i()*.45;c.setRGB(S,S*(.96+i()*.06),S*(.92+i()*.08)).lerp(Ic,a*.25*i()),f("rock",T.e,T.x,T.y-v*.2,-T.s,i()*6.28,(i()-.5)*.7,(i()-.5)*.7,v*(.8+i()*.5),v*(.7+i()*.5),v*(.8+i()*.5),c)}d();let y=Math.round(qn.grass*o("grass"));for(let b=0;b<y;b++){let T=g(-.15,30,1.7),P=.65+i()*.7,v=i()*i(),S=.85+i()*.4;c.setRGB(S*(1+v*.7),S*(1+v*.25),S*(1-v*.3)).lerp(Ic,a*.25*i()),this._put("grass",T.x,T.y-.03,-T.s,i()*6.28,0,0,P,P*(.6+i()*.7),P,c)}let x=Math.round(o("bush")*(.8+i()*.4));for(let b=0;b<x;b++){let T=g(1.8,70,1.6),P=.8+i()*1.3;if(c.setRGB(.85+i()*.4,.9+i()*.3,.8+i()*.3),this._put("bush",T.x,T.y-.08,-T.s,i()*6.28,0,0,P,P*(.8+i()*.4),P,c),T.e<30&&i()<.6)for(let v=0;v<5;v++){let S=i()*6.28,D=i()*.42*P;this._put("flower",T.x+Math.cos(S)*D,T.y+P*(.42-D/P*.3),-T.s+Math.sin(S)*D,i()*6.28,0,0,1.3,.6,1.3,yy)}}let M=Math.round(110*o("flower")*(.7+i()*.3));for(let b=0;b<M;b++){let T=g(.2,20,1.6),P=.9+i()*.8;this._put("flower",T.x,T.y,-T.s,i()*6.28,0,0,P,P,P,ad[Math.floor(i()*ad.length)])}c.set(16777215);let R=1+(i()<.4?1:0);for(let b=0;b<R;b++){let T=t+(b+.3+i()*.4)*(n/R),P=i()<.5?-1:1,v=rt(T)+P*(3.1+.35);this._put("marker",v,hi(v,T)-.05,-T,P>0?0:Math.PI,0,(i()-.5)*.2,1,1,1,c)}for(let b in this.meshes){let T=this.meshes[b];T.count=this.counts[b],T.castShadow&&(T.shadowCount=b==="marker"?T.count:u[b]||0),T.visible=T.count>0,T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0),T.count>0&&T.computeBoundingSphere()}}setNear(e){this.meshes.grass.visible=e&&this.meshes.grass.count>0,this.meshes.flower.visible=e&&this.meshes.flower.count>0}};var kr=40,hd=2,xa=kr/hd+1,ya=[0,.75,1.5,2.25,3.1,3.7,4.5,5.6,7.2,9.5,12.5,16.5,22,29,39,52,70,94,124,160,205,260],Ma=[];for(let s=ya.length-1;s>0;s--)Ma.push(-ya[s]);for(let s=0;s<ya.length;s++)Ma.push(ya[s]);var ir=Ma.length;function vy(){let s=new yt({color:16777215,roughness:.95,metalness:0,normalMap:Kf(),normalScale:new Me(.85,.85)}),e=Qs();return s.onBeforeCompile=t=>{t.uniforms.uNoise={value:e},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
        attribute float aTrail;
        attribute vec2 aBiome;
        varying float vTrail;
        varying vec2 vBiome;
        varying vec3 vWPos;
        varying vec3 vWNrm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vTrail = aTrail;
        vBiome = aBiome;
        vWPos = position;
        vWNrm = normal;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
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
        `)},s.customProgramCacheKey=()=>"terrain-v1",s}var Uc=class{constructor(e,t){let n=xa*ir;this.geo=new lt,this.pos=new Float32Array(n*3),this.nrm=new Float32Array(n*3),this.uv=new Float32Array(n*2),this.trail=new Float32Array(n),this.biome=new Float32Array(n*2);let i=(a,l)=>{let c=new qe(a,l);return c.setUsage(li),c};this.geo.setAttribute("position",i(this.pos,3)),this.geo.setAttribute("normal",i(this.nrm,3)),this.geo.setAttribute("uv",i(this.uv,2)),this.geo.setAttribute("aTrail",i(this.trail,1)),this.geo.setAttribute("aBiome",i(this.biome,2));let r=new Uint16Array((xa-1)*(ir-1)*6),o=0;for(let a=0;a<xa-1;a++)for(let l=0;l<ir-1;l++){let c=a*ir+l,h=c+1,u=c+ir,f=u+1;r[o++]=c,r[o++]=h,r[o++]=u,r[o++]=h,r[o++]=f,r[o++]=u}this.geo.setIndex(new qe(r,1)),this.mesh=new We(this.geo,t),this.mesh.receiveShadow=!0,this.mesh.matrixAutoUpdate=!1,e.add(this.mesh),this.props=new ga(e),this.index=null}build(e){this.index=e;let t=e*kr,n=[0,0,0],i=0;for(let r=0;r<xa;r++){let o=t+r*hd,a=rt(o),l=ci(o,h=>h.biome.rocky,80),c=ci(o,h=>h.biome.snow,80);for(let h=0;h<ir;h++,i++){let u=Ma[h],f=a+u;this.pos[i*3]=f,this.pos[i*3+1]=hi(f,o),this.pos[i*3+2]=-o,Zf(f,o,n),this.nrm[i*3]=n[0],this.nrm[i*3+1]=n[1],this.nrm[i*3+2]=n[2],this.uv[i*2]=f*.31,this.uv[i*2+1]=o*.31,this.trail[i]=u,this.biome[i*2]=l,this.biome[i*2+1]=c}}for(let r in this.geo.attributes)this.geo.attributes[r].needsUpdate=!0;this.geo.computeBoundingSphere(),this.props.populate(e,t,kr)}},va=class{constructor(e){this.scene=e,this.material=vy(),this.chunks=[],this.byIndex=new Map,this.behind=1,this.maxAhead=10,this.ahead=this.maxAhead,this.hiRange=3,this.grassRange=3;for(let t=0;t<this.behind+this.maxAhead+1;t++)this.chunks.push(new Uc(e,this.material))}setDetail(e,t,n){this.hiRange=e,this.grassRange=t,this.maxAhead=Math.min(n,this.chunks.length-this.behind-1),this.ahead=Math.min(this.ahead,this.maxAhead)}setFogDensity(e){this.ahead=Math.max(6,Math.min(this.maxAhead,Math.ceil(2/e/kr)))}update(e,t=1){let n=Math.floor(e/kr),i=n-this.behind,r=n+this.ahead;for(let o of this.chunks)o.index!==null&&(o.index<i||o.index>r)&&(this.byIndex.delete(o.index),o.index=null);for(let o=i;o<=r&&t>0;o++){if(this.byIndex.has(o))continue;let a=this.chunks.find(l=>l.index===null);if(!a)break;a.build(o),this.byIndex.set(o,a),t--}for(let o of this.chunks)o.index!==null&&(o.props.setNear(o.index-n<=this.grassRange),o.props.setLod(o.index-n<=this.hiRange?0:1))}rebuildAll(e){for(let t of this.chunks)t.index=null;this.byIndex.clear(),this.update(e,999)}};var ud=Math.PI/180,fd=1.55;function Hr(s,e,t,n){return n.setRGB(ln(s[0],e[0],t),ln(s[1],e[1],t),ln(s[2],e[2],t),nt),n}var My=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_Position.z = gl_Position.w * 0.9999;
}`,by=`
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
}`,Sy=`
varying vec3 vNrm;
varying vec3 vPos;
void main() {
  vNrm = normal;
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ty=`
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
}`;function Ey(){let i=new Float32Array(11403),r=[],o=(c,h)=>{let u=Math.sqrt(c*c+h*h),f=Math.max(0,(u-330)/1370),d=Math.pow(Math.sin(Math.min(1,f*1.15)*Math.PI*.5),1.3)*(1-.35*Math.max(0,f-.75)/.25),g=wc(c*.0016+4.2,h*.0016+1.7,5),_=Fr(c*6e-4+9,h*6e-4+2,3),m=wc(c*.006+1.1,h*.006+8.3,3);return-60+d*(60+600*g*(.3+.95*_)+70*m*_)},a=0;for(let c=0;c<=20;c++){let h=c/20,u=330+1370*Math.pow(h,1.35);for(let f=0;f<=180;f++){let d=f/180*Math.PI*2,g=Math.cos(d)*u,_=Math.sin(d)*u;i[a++]=g,i[a++]=o(g,_),i[a++]=_}}for(let c=0;c<20;c++)for(let h=0;h<180;h++){let u=c*181+h,f=u+1,d=u+180+1,g=d+1;r.push(u,f,d,f,g,d)}let l=new lt;return l.setAttribute("position",new qe(i,3)),l.setIndex(r),l.computeVertexNormals(),l}var ba=class{constructor(e,t){this.scene=e,this.time=0;let n=Qs();this.fogColor=new ce,e.fog=new zo(16777215,.004),this.sunDir=new C(0,1,0),this.sunColor=new ce,this.skyTop=new ce,this.sun=new qs(16777215,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);let i=this.sun.shadow.camera;this.shadowHalf=21,i.left=-this.shadowHalf,i.right=this.shadowHalf,i.top=this.shadowHalf,i.bottom=-this.shadowHalf,i.near=1,i.far=220,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.05,e.add(this.sun),e.add(this.sun.target),this.hemi=new ea(16777215,4473924,.8),e.add(this.hemi),this.skyUniforms={uTop:{value:this.skyTop},uHorizon:{value:this.fogColor},uSunDir:{value:this.sunDir},uSunColor:{value:this.sunColor},uTime:{value:0},uCloud:{value:.5},uNoise:{value:n}},this.sky=new We(new Zo(1,32,16),new zt({uniforms:this.skyUniforms,vertexShader:My,fragmentShader:by,side:Yt,depthWrite:!1,fog:!1})),this.sky.scale.setScalar(1500),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,e.add(this.sky),this.mtnSun=new ce,this.mtnAmbient=new ce,this.mtnUniforms={uSunDir:{value:this.sunDir},uSunColor:{value:this.mtnSun},uHaze:{value:this.fogColor},uTop:{value:this.skyTop},uAmbient:{value:this.mtnAmbient},uSnowLine:{value:260},uNoise:{value:n}},this.mountains=new We(Ey(),new zt({uniforms:this.mtnUniforms,vertexShader:Sy,fragmentShader:Ty,fog:!1})),this.mountains.frustumCulled=!1,this.mountains.renderOrder=-5,e.add(this.mountains),this._hs=new ce,this._hg=new ce,this._lightRight=new C,this._lightUp=new C,this._center=new C}update(e,t,n,i){this.time+=e;let{a:r,b:o,t:a}=Gf(t),l=et[r].atmo,c=et[o].atmo,h=ln(l.elev,c.elev,a)*ud,u=ln(l.az,c.az,a)*ud;this.sunDir.set(Math.sin(u)*Math.cos(h),Math.sin(h),-Math.cos(u)*Math.cos(h)),Hr(l.sun,c.sun,a,this.sunColor),Hr(l.top,c.top,a,this.skyTop).multiplyScalar(fd),Hr(l.fog,c.fog,a,this.fogColor).multiplyScalar(fd);let f=ln(l.sunI,c.sunI,a);this.scene.fog.color.copy(this.fogColor),this.scene.fog.density=ln(l.fogD,c.fogD,a),this.sun.color.copy(this.sunColor),this.sun.intensity=f,this.hemi.color.copy(Hr(l.hemiSky,c.hemiSky,a,this._hs)),this.hemi.groundColor.copy(Hr(l.hemiGround,c.hemiGround,a,this._hg)),this.hemi.intensity=ln(l.hemiI,c.hemiI,a),this.skyUniforms.uCloud.value=ln(l.cloud,c.cloud,a),this.skyUniforms.uTime.value=this.time,this.mtnSun.copy(this.sunColor).multiplyScalar(f*.42),this.mtnAmbient.copy(this._hs).multiplyScalar(this.hemi.intensity*.42);let d=this.shadowHalf*2/this.sun.shadow.mapSize.x;this._lightRight.set(0,1,0).cross(this.sunDir).normalize(),this._lightUp.copy(this.sunDir).cross(this._lightRight).normalize();let g=Math.round(n.dot(this._lightRight)/d)*d,_=Math.round(n.dot(this._lightUp)/d)*d,m=n.dot(this.sunDir);this._center.set(0,0,0).addScaledVector(this._lightRight,g).addScaledVector(this._lightUp,_).addScaledVector(this.sunDir,m),this.sun.target.position.copy(this._center),this.sun.position.copy(this._center).addScaledVector(this.sunDir,110),this.sky.position.copy(i.position),this.mountains.position.set(i.position.x,n.y,i.position.z)}setShadowQuality(e){if(e<=0){this.sun.castShadow=!1;return}this.sun.castShadow=!0,this.sun.shadow.mapSize.x!==e&&(this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null))}};var Sa=class extends ai{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gc(t)}),this.register(function(t){return new Jc(t)}),this.register(function(t){return new jc(t)}),this.register(function(t){return new Qc(t)}),this.register(function(t){return new Wc(t)}),this.register(function(t){return new Xc(t)}),this.register(function(t){return new qc(t)}),this.register(function(t){return new Yc(t)}),this.register(function(t){return new zc(t)}),this.register(function(t){return new Kc(t)}),this.register(function(t){return new Vc(t)}),this.register(function(t){return new $c(t)}),this.register(function(t){return new Zc(t)}),this.register(function(t){return new kc(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new th(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ci.extractUrlBase(e);o=Ci.resolveURL(c,this.path)}else o=Ci.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ir(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_d){try{o[Ye.KHR_BINARY_GLTF]=new nh(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ch(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:o[u]=new Hc;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[u]=new ih(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[u]=new sh;break;case Ye.KHR_MESH_QUANTIZATION:o[u]=new rh;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function wy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kc=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ce(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Nt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new na(h),c.distance=u;break;case"spot":c=new ta(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ni(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Hc=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return kn}extendParams(e,t,n){let i=[];e.color=new ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,nt))}return Promise.all(i)}},zc=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Gc=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(a,a)}return Promise.all(r)}},Vc=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Wc=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ce(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Nt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,nt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Xc=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},qc=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ce().setRGB(a[0],a[1],a[2],Nt),Promise.all(r)}},Yc=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Kc=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ce().setRGB(a[0],a[1],a[2],Nt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,nt)),Promise.all(r)}},Zc=class{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},$c=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Jc=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},jc=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Qc=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},eh=class{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},th=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==An.TRIANGLES&&c.mode!==An.TRIANGLE_STRIP&&c.mode!==An.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let _=new Ue,m=new C,p=new Kt,y=new C(1,1,1),x=new Gs(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),x.setMatrixAt(M,_.compose(m,p,y));for(let M in l)if(M==="_COLOR_0"){let R=l[M];x.instanceColor=new Qi(R.array,R.itemSize,R.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);mt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},_d="glTF",zr=12,dd={JSON:1313821514,BIN:5130562},nh=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,zr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_d)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-zr,r=new DataView(e,zr),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===dd.JSON){let c=new Uint8Array(e,zr+o,a);this.content=n.decode(c)}else if(l===dd.BIN){let c=zr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ih=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=ah[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=ah[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=sr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(d)},a,c,Nt,f)})})}},sh=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},rh=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},Ta=class extends Ei{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,y=1-m,x=p-f+u;for(let M=0;M!==a;M++){let R=o[_+M+a],b=o[_+M+l]*h,T=o[g+M+a],P=o[g+M]*h;r[M]=y*R+x*b+m*T+p*P}return r}},Ay=new Kt,oh=class extends Ta{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Ay.fromArray(r).normalize().toArray(r),r}},An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pd={9728:At,9729:Je,9984:To,9985:oc,9986:_r,9987:tn},md={33071:qt,33648:br,10497:xn},Oc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ah={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ry={CUBICSPLINE:void 0,LINEAR:Ki,STEP:Us},Fc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Cy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new yt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_n})),s.DefaultMaterial}function ns(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ni(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Py(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Ly(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Iy(s){let e,t=s.extensions&&s.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bc(t.attributes):e=s.indices+":"+Bc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Bc(s.targets[n]);return e}function Bc(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function lh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Dy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Ny=new Ue,ch=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new Qo(this.options.manager):this.textureLoader=new ia(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ir(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ns(r,a,i),Ni(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ci.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Oc[i.type],a=sr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new qe(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Oc[i.type],c=sr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(d&&d!==u){let p=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=t.cache.get(y);x||(_=new c(a,p*d,i.count*d/h),x=new zs(_,d/h),t.cache.add(y,x)),m=new $i(x,l,f%d/h,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new qe(_,l,g);if(i.sparse!==void 0){let p=Oc.SCALAR,y=sr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,R=new y(o[1],x,i.sparse.count*p),b=new c(o[2],M,i.sparse.count*l);a!==null&&(m=new qe(m.array.slice(),m.itemSize,m.normalized));for(let T=0,P=R.length;T<P;T++){let v=R[T];if(m.setX(v,b[T*l]),l>=2&&m.setY(v,b[T*l+1]),l>=3&&m.setZ(v,b[T*l+2]),l>=4&&m.setW(v,b[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=pd[f.magFilter]||Je,h.minFilter=pd[f.minFilter]||tn,h.wrapS=md[f.wrapS]||xn,h.wrapT=md[f.wrapT]||xn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Ut(_);m.needsUpdate=!0,f(m)}),t.load(Ci.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||Dy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Pr,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Cr,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return yt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){let u=i[Ye.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ce(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Nt),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,nt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=bt);let h=r.alphaMode||Fc.OPAQUE;if(h===Fc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Fc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==kn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==kn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==kn){let u=r.emissiveFactor;a.emissive=new ce().setRGB(u[0],u[1],u[2],Nt)}return r.emissiveTexture!==void 0&&o!==kn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,nt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ni(u,r),t.associations.set(u,{materials:e}),r.extensions&&ns(i,u,r),u})}createUniqueName(e){let t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return gd(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=Iy(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=gd(new lt,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Cy(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let _=h[d],m=o[d],p,y=c[d];if(m.mode===An.TRIANGLES||m.mode===An.TRIANGLE_STRIP||m.mode===An.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Go(_,y):new We(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===An.TRIANGLE_STRIP?p.geometry=Rc(p.geometry,oa):m.mode===An.TRIANGLE_FAN&&(p.geometry=Rc(p.geometry,Nr));else if(m.mode===An.LINES)p=new Wo(_,y);else if(m.mode===An.LINE_STRIP)p=new Vs(_,y);else if(m.mode===An.LINE_LOOP)p=new Xo(_,y);else if(m.mode===An.POINTS)p=new Ws(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ly(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ni(p,r),m.extensions&&ns(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ns(i,u[0],r),u[0];let f=new Dt;r.extensions&&ns(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(Ys.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Si(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ni(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ue;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vo(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let y=0,x=f.length;y<x;y++){let M=f[y],R=d[y],b=g[y],T=_[y],P=m[y];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let v=n._createAnimationTracks(M,R,b,T,P);if(v)for(let S=0;S<v.length;S++)p.push(v[S])}return new Ri(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Ny)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Rr:c.length>1?h=new Dt:c.length===1?h=c[0]:h=new mt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ni(h,r),r.extensions&&ns(n,h,r),r.matrix!==void 0){let u=new Ue;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Dt;n.name&&(r.name=i.createUniqueName(n.name)),Ni(r,n),n.extensions&&ns(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof sn||f instanceof Ut)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];Di[r.path]===Di.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Di[r.path]){case Di.weights:c=oi;break;case Di.rotation:c=Gn;break;case Di.position:case Di.scale:c=Nn;break;default:switch(n.itemSize){case 1:c=oi;break;case 2:case 3:default:c=Nn;break}break}let h=i.interpolation!==void 0?Ry[i.interpolation]:Ki,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+Di[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=lh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Gn?oh:Ta;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Uy(s,e,t){let n=e.attributes,i=new yn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let h=lh(sr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=lh(sr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new nn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function gd(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=ah[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return je.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Ni(s,e),Uy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Py(s,e.targets,t):s})}typeof TextDecoder=="undefined"&&(Pi.TextDecoder=class{decode(s){let e=s instanceof Uint8Array?s:new Uint8Array(s),t="",n=0;for(;n<e.length;){let i=e[n++],r=i;i>=240?r=(i&7)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63:i>=224?r=(i&15)<<12|(e[n++]&63)<<6|e[n++]&63:i>=192&&(r=(i&31)<<6|e[n++]&63),r>65535?(r-=65536,t+=String.fromCharCode(55296+(r>>10),56320+(r&1023))):t+=String.fromCharCode(r)}return t}});function Oy(s){return new Promise((e,t)=>{ye.getFileSystemManager().readFile({filePath:s,success:n=>e(n.data),fail:n=>t(new Error(`\u8BFB\u53D6 ${s} \u5931\u8D25: ${n&&n.errMsg||n}`))})})}function hh(s){return new Promise((e,t)=>{let n=ye.createImage();n.onload=()=>{let i=new Ut(n);i.colorSpace=dt,i.flipY=!1,i.generateMipmaps=!0,i.minFilter=tn,i.magFilter=Je,i.needsUpdate=!0,e(i)},n.onerror=()=>t(new Error(`\u52A0\u8F7D\u56FE\u7247 ${s} \u5931\u8D25`)),n.src=s})}function uh(s){return Oy(s).then(e=>new Promise((t,n)=>{new Sa().parse(e,"",t,i=>n(new Error(`\u89E3\u6790 ${s} \u5931\u8D25: ${i&&i.message||i}`)))}))}var Ea="assets/runners/",wa=0;function Fy(s){if(wa!==s){if(wa)throw new Error(`\u4EBA\u7269\u9AA8\u9ABC\u6570\u4E0D\u4E00\u81F4\uFF1A${wa} / ${s}`);wa=s,Ie.skinning_pars_vertex=`
#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform vec4 boneRows[ ${s*3} ];
	mat4 getBoneMatrix( const in float i ) {
		int j = int( i ) * 3;
		vec4 r0 = boneRows[ j ];
		vec4 r1 = boneRows[ j + 1 ];
		vec4 r2 = boneRows[ j + 2 ];
		return mat4( r0.x, r1.x, r2.x, 0.0, r0.y, r1.y, r2.y, 0.0, r0.z, r1.z, r2.z, 0.0, r0.w, r1.w, r2.w, 1.0 );
	}
#endif`}}function By(s){if(s.boneRows)return;let e=s.bones.length,t=s.boneRows=new Float32Array(e*12),n=s.update;s.update=function(){n.call(this);let i=this.boneMatrices;for(let r=0;r<e;r++){let o=r*16,a=r*12;for(let l=0;l<3;l++)t[a+l*4]=i[o+l],t[a+l*4+1]=i[o+4+l],t[a+l*4+2]=i[o+8+l],t[a+l*4+3]=i[o+12+l]}}}function bd(s){s.capabilities.floatVertexTextures=!0}function xd(s,e){By(e);let t=s.onBeforeCompile,n=Object.prototype.hasOwnProperty.call(s,"customProgramCacheKey")?s.customProgramCacheKey:null;return s.onBeforeCompile=(i,r)=>{t&&t(i,r),i.uniforms.boneRows={value:e.boneRows}},s.customProgramCacheKey=()=>(n?n.call(s):"")+"|bones",s}function Sd(s){let e=t=>Promise.all([uh(Ea+t+".glb"),hh(Ea+t+"_body.jpg"),hh(Ea+t+"_extras.jpg")]).then(([n,i,r])=>({gltf:n,body:i,extras:r}));return Promise.all([uh(Ea+"anims.glb"),...s.map(e)]).then(([t,...n])=>{let i=t.scene.userData,r={clips:{},pelvisRest:i.pelvisRest,contacts:i.contacts||{jog:0,sprint:0},models:{}};for(let o of t.animations)r.clips[o.name]=o;return s.forEach((o,a)=>r.models[o]=n[a]),r})}function ky(s,e){let t=s.tracks.map(n=>{if(n.name!=="pelvis.position")return n;let i=new Float32Array(n.values.length);for(let r=0;r<i.length;r++)i[r]=n.values[r]*e;return new Nn(n.name,n.times,i)});return new Ri(s.name,s.duration,t)}var Hy=["idle","crouch","jog","sprint","slide_loop","cheer"],yd=.7,zy=.54,Gy=.14,Vy=.1,vd=.26,Md=.2,Wy=.12,Xy=.14,qy=.2,Yy=.42,Ky=2.2,Aa=s=>s<0?0:s>1?1:s,Ra=class{constructor(e,t,n={}){let i=e.models[t];if(!i)throw new Error(`\u6CA1\u6709\u540D\u4E3A ${t} \u7684\u4EBA\u7269\u6A21\u578B`);this.name=t,this.root=new Dt,this.tilt=new Dt,this.root.add(this.tilt),this.model=i.gltf.scene,this.model.rotation.y=Math.PI,this.model.position.y=.014,this.tilt.add(this.model),this.meshes=[],this.model.traverse(a=>{if(!a.isSkinnedMesh)return;Fy(a.skeleton.bones.length);let l=a.name==="body";a.material=xd(Un(new yt({map:l?i.body:i.extras,roughness:l?.78:.7,metalness:0,side:l?_n:bt})),a.skeleton),a.customDepthMaterial=xd(new wr({depthPacking:uc}),a.skeleton),a.castShadow=!0,a.receiveShadow=!1,a.boundingSphere=new nn(new C(0,.9,0),2.3),this.meshes.push(a)});let o=(i.gltf.scene.userData.pelvisRest||e.pelvisRest)[2]/e.pelvisRest[2];this.mixer=new sa(this.model),this.actions={},this.weights={};for(let a in e.clips){let l=this.mixer.clipAction(ky(e.clips[a],o)),c=Hy.indexOf(a)>=0;l.setLoop(c?cc:lc,1/0),l.clampWhenFinished=!c,l.setEffectiveWeight(0),l.play(),this.actions[a]=l,this.weights[a]=0}this.blend={};for(let a in this.actions)a!=="hit"&&a!=="jump_land"&&(this.blend[a]=0);this.contacts=e.contacts,this.phase=n.phase||0,this.footDown=!1,this.roll=0,this.reset()}reset(){for(let e in this.blend)this.blend[e]=0;this.blend.idle=1,this.hitT=0,this.landT=0,this.cheerT=0,this._air=!1,this._slide=!1,this._exiting=!1,this._down=!1,this._wasSliding=!1,this._wasAir=!1,this._half=Math.floor(this.phase*2),this.animate(0,{mode:"stand",speed:0})}addNameTag(e,t){let n=Un(new Ji({map:e,transparent:!0,depthWrite:!1,fog:!1,sizeAttenuation:!1,toneMapped:!1})),i=new ji(n),r=.04;i.scale.set(r*t,r,1),i.position.y=2.08,i.renderOrder=5,this.root.add(i),this.tag=i}setShadow(e){for(let t of this.meshes)t.castShadow=e}_play(e,t=0){let n=this.actions[e];n.reset(),n.time=t,n.play()}animate(e,t){let n=t.speed||0,i=this.actions,r=this.weights,o={};for(let M in r)o[M]=0;let a=!!t.airborne,l=!!t.sliding&&!a,c=t.mode==="collapse";a&&!this._air&&this._play("jump_start",Gy),!a&&this._air&&!l&&(this._play("jump_land",Vy),this.landT=vd),l&&!this._slide&&(this._play("slide_start",Md),this._exiting=!1),l&&!this._exiting&&t.slideLeft!==void 0&&t.slideLeft<=qy&&(this._play("slide_exit",Xy),this._exiting=!0),c&&!this._down&&this._play("collapse"),t.mode==="cheer"?(this.cheerT===0&&n<2.2&&this._play("yes"),n<2.2&&(this.cheerT+=e)):this.cheerT=0,this._air=a,this._slide=l,this._down=c;let h=Aa((n-8.5)/4.5),u=10;if(l)u=22,this._exiting?o.slide_exit=1:i.slide_start.time<Md+Wy?o.slide_start=1:o.slide_loop=1;else if(a)u=18,o.jump_start=1;else if(c)u=6,o.collapse=1;else if(t.mode==="ready")u=5,o.crouch=1;else if(t.mode==="cheer"&&n<2.2)u=5,this.cheerT<Ky?o.yes=1:o.cheer=1;else if(t.mode==="stand"||n<.6)u=6,o.idle=1;else{let M=Aa(n/3.5);o.idle=1-M,o.jog=M*(1-h),o.sprint=M*h,(this._wasSliding||this._wasAir)&&(u=14)}this._wasSliding=l,this._wasAir=a,this.hitT=Math.max(0,this.hitT-e),this.landT=l||a?0:Math.max(0,this.landT-e);let f=Aa(this.hitT/.16)*.85,d=Aa(this.landT/(vd*.6))*.6,g=this.blend,_=e>0?Math.min(1,e*u):1,m=0;for(let M in g)g[M]+=(o[M]-g[M])*_,g[M]<.002&&(g[M]=0),m+=g[M];let p=(1-f)*(1-d)/(m||1);for(let M in g)r[M]=g[M]*p;r.hit=f,r.jump_land=d*(1-f);for(let M in r)i[M].setEffectiveWeight(r[M]);let y=r.jog+r.sprint>.02;y&&(this.phase=(this.phase+e/(yd+(zy-yd)*h))%1);for(let M of["jog","sprint"]){let R=i[M];R.timeScale=0,R.time=(this.phase+this.contacts[M])%1*R.getClip().duration}let x=Math.floor(this.phase*2);this.footDown=y&&x!==this._half&&n>1&&!a&&!l,this._half=x,this.mixer.update(e),this.roll+=((t.lean||0)-this.roll)*Math.min(1,e*10),this.tilt.rotation.z=-this.roll}hit(){this.hitT=Yy,this._play("hit")}};var dh=0,pt=1,Pt=2,ui=3,Zy={rock1:s=>{let e=[0,0,0];return e[Math.floor(s()*3)]=pt,e},rock2:s=>{let e=[pt,pt,pt];return e[Math.floor(s()*3)]=dh,e},log:()=>[Pt,Pt,Pt],over:()=>[ui,ui,ui],rockLog:s=>{let e=[pt,pt,pt];return e[Math.floor(s()*3)]=Pt,e},logRock:s=>{let e=[Pt,Pt,Pt];return e[Math.floor(s()*3)]=pt,e},logHalf:s=>{let e=[Pt,Pt,Pt];return e[s()<.5?0:2]=dh,e}},$y=[{rock1:36,log:22,over:20,rock2:14,logHalf:8},{rock1:23,rock2:24,log:19,over:20,rockLog:7,logHalf:7},{rock1:14,rock2:27,log:17,over:20,rockLog:11,logRock:5,logHalf:6},{rock1:10,rock2:27,log:15,over:18,rockLog:13,logRock:11,logHalf:6},{rock1:8,rock2:27,log:15,over:18,rockLog:14,logRock:12,logHalf:6},{rock1:8,rock2:25,log:15,over:20,rockLog:14,logRock:12,logHalf:6}],Jy=[.05,.1,.14,.17,.2,.22],Td=["log","over","logHalf","rock1"];function jy(s,e,t,n){let i=$y[s],r=0;for(let o in i)r+=i[o];for(let o=0;o<6;o++){let a=e()*r;for(let l in i)if(a-=i[l],a<=0){if(l===t&&l===n)break;return l}}return"rock1"}function wd(s,e={}){let t=hn(s),n=[],i=[],r=e.tutorial?["rock1c","log","over","rock2"]:[],o=e.tutorial?78:58+t()*30,a=0,l="",c="",h=0,u="",f=1,d=Math.floor(t()*3),g=3,_=0,m=0,p=0,y=(b,T,P,v,S=0)=>i.push({s:b,lane:T,y:P,type:v,group:S,taken:!1,visual:null}),x=()=>Math.floor(t()*3)-1,M=()=>{let b;if(g>=3)b="water";else if(_>=2)b="gel";else{let T=t();b=T<.36?"water":T<.92?"gel":"pole"}return g=b==="water"?0:g+1,_=b==="gel"?0:_+1,b};for(;o<1945;){for(;p<En.length&&o>En[p]-16;){let W=En[p++];o<W+14&&(o=W+14+t()*6,h=0)}if(o>=1945)break;let b=Js(o),T=et[b],P=a<r.length,v=h>0,S;if(P)S=r[a];else if(v&&u==="slalom")S=t()<.45?"rock1":"rock2";else if(v)do S=Td[Math.floor(t()*Td.length)];while(S===l);else S=jy(b,t,l,c);let D;S==="rock1c"?(D=[0,pt,0],S="rock1"):v&&S==="rock2"?(f=Math.max(0,Math.min(2,f+Math.floor(t()*3)-1)),D=[pt,pt,pt],D[f]=dh):D=Zy[S](t);let H=[];D.forEach((W,X)=>W!==pt&&H.push(X)),H.length===1&&(f=H[0]),c=l,l=S;let K=P?0:v?.8:2.2,I=D.map(W=>W===pt?(t()-.5)*K:0);n.push({s:o,cells:D,off:I,kind:S,index:a,seed:Math.floor(t()*1e9),passed:!1,hit:!1,visual:null});let U=T.gap*T.speed,z,q=!1;if(P)z=U*1.3*(.94+t()*.22);else if(h>0?h--:t()<Jy[b]&&(h=2+(t()<.35?1:0),u=t()<.6?"slalom":"mixed"),h>0){let W=u==="slalom"?Math.max(.74,T.gap*.56):Math.max(1.02,T.gap*.68);z=T.speed*W*(1+t()*.1)}else t()<(v?.4:.05)?(q=!0,z=U*(1.7+t()*.6)):z=U*(.8+t()*.52);if(d++,q){let W=x(),X=2+(t()<.4?1:0);for(let Y=0;Y<X;Y++)y(o+z*(.3+.42*Y/(X-1)),W,.95,M()),W=W===0?t()<.5?-1:1:0;d=0}else if(!P&&h===0&&(d>=4&&t()<.5||d>=6)){let W=M(),X=[],Y=[];D.forEach((ie,V)=>{ie===Pt?X.push(V):ie===pt&&(V>0&&D[V-1]!==pt||V<2&&D[V+1]!==pt)&&Y.push(V)});let j=t();if(W!=="pole"&&X.length&&j<.4)y(o,X[Math.floor(t()*X.length)]-1,1.85,W);else if(W==="water"&&Y.length&&j<.52){let ie=Y[Math.floor(t()*Y.length)];y(o+I[ie]+4.4,ie-1,.95,W)}else if(W!=="pole"&&j>.85){m++;let ie=x(),V=ie===0?t()<.5?-1:1:t()<.5?0:-ie;y(o+z*.5,ie,.95,"water",m),y(o+z*.5,V,.95,"gel",m)}else y(o+z*.5,x(),.95,W);d=0}o+=z,a++}let R=i.filter(b=>!En.some(T=>Math.abs(b.s-T)<9));for(let b of En){m++;let T=["water","gel","pole"];for(let P=-1;P<=1;P++){let v=T.splice(Math.floor(t()*T.length),1)[0];R.push({s:b,lane:P,y:.95,type:v,group:m,aid:!0,taken:!1,visual:null})}}return R.sort((b,T)=>b.s-T.s),{rows:n,items:R}}function ph(s,e,t=null){let n=e+1,i=n,r=99;for(let a=0;a<3;a++){if(s.cells[a]===pt)continue;let l=Math.abs(a-n)+(s.cells[a]?.4:0)+(t!==null&&a===t+1?1.5:0);l<r&&(r=l,i=a)}let o=s.cells[i];return{lane:i-1,action:o===Pt?"jump":o===ui?"slide":null}}function Qy(){let s=new St(.3,.3,1,12,8,!1);s.deleteAttribute("uv");let e=Ze(.25,.18,.12),t=Ze(.4,.31,.22),n=Ze(.74,.6,.41),i=Ze(.5,.37,.24),r=s.attributes.position,o=s.attributes.normal;for(let a=0;a<r.count;a++){if(Math.abs(o.getY(a))>.5)continue;let l=Math.atan2(r.getZ(a),r.getX(a)),c=.88+.24*rn(Math.cos(l)*1.6+5,r.getY(a)*5+Math.sin(l)*1.6);r.setX(a,r.getX(a)*c),r.setZ(a,r.getZ(a)*c)}return Et(s,(a,l)=>{if(Math.abs(l.y)>.5){let c=Math.sqrt(a.x*a.x+a.z*a.z)/.3;return i.clone().lerp(n,.5+.5*Math.sin(c*16))}return e.clone().lerp(t,rn(a.y*9,Math.atan2(a.z,a.x)*3))}),s.computeVertexNormals(),s.rotateZ(Math.PI/2),s}function ev(){let s=[],e=Ze(.24,.18,.13),t=Ze(.38,.3,.22),n=new St(.2,.25,10.5,10,10,!1);n.deleteAttribute("uv"),Et(n,l=>e.clone().lerp(t,rn(l.y*3,Math.atan2(l.z,l.x)*3))),n.rotateZ(Math.PI/2),s.push(n.toNonIndexed());let i=hn(77);for(let l=0;l<5;l++){let c=new St(.02,.05,.5+i()*.5,5,1,!1);c.deleteAttribute("uv"),Et(c,()=>e.clone().multiplyScalar(.8+i()*.5)),c.translate(0,.35,0),c.rotateX((i()-.5)*1.6),c.rotateZ((i()-.5)*.8),c.translate(-4+l*2+i(),.1,0),s.push(c.toNonIndexed())}let r=Ze(1,.38,.04),o=Ze(.96,.96,.94);for(let l=0;l<9;l++){let c=-2.8+l*.7,h=.34+i()*.16,u=new Hn(.085,h,1,2);u.deleteAttribute("uv");let f=l%2===0?r:o;Et(u,()=>f.clone()),u.rotateY((i()-.5)*.9),u.translate(c,-.2-h/2,(i()-.5)*.08),s.push(u.toNonIndexed())}let a=wn(s);return a.computeBoundingSphere(),a}function tv(){let s=new Zi(.3,.42,.1,1,3,1);s.deleteAttribute("uv");let e=Ze(1,.5,.05),t=Ze(.1,.1,.12),n=Ze(1,.86,.3);Et(s,a=>a.y>.12?t.clone():a.y<-.1?n.clone():e.clone());let i=s.attributes.position;for(let a=0;a<i.count;a++){let l=i.getY(a),c=l>.12?.62:1;i.setX(a,i.getX(a)*c),i.setZ(a,i.getZ(a)*(l>.12?.5:1))}let r=new St(.035,.035,.07,8);r.deleteAttribute("uv"),Et(r,()=>Ze(.95,.95,.95)),r.translate(0,.245,0);let o=wn([s.toNonIndexed(),r.toNonIndexed()]);return o.computeVertexNormals(),o}function nv(){let s=Ze(.2,.58,.95),e=Ze(.72,.9,1),t=Ze(.97,.98,1),n=Ze(.06,.2,.55),i=new St(.125,.115,.4,12,6,!1);i.deleteAttribute("uv"),Et(i,l=>Math.abs(l.y)<.075?t.clone():s.clone().lerp(e,l.y>0?.35:0));let r=new St(.055,.125,.1,12,1,!0);r.deleteAttribute("uv"),Et(r,()=>e.clone()),r.translate(0,.25,0);let o=new St(.062,.062,.08,10);o.deleteAttribute("uv"),Et(o,()=>n.clone()),o.translate(0,.335,0);let a=wn([i.toNonIndexed(),r.toNonIndexed(),o.toNonIndexed()]);return a.translate(0,-.08,0),a.computeVertexNormals(),a}function iv(){let s=Ze(.84,.86,.9),e=Ze(.92,.2,.1),t=Ze(.07,.07,.09),n=[];for(let r of[-1,1]){let o=new St(.03,.02,.92,6,4,!1);o.deleteAttribute("uv"),Et(o,h=>h.y>.1?e.clone():s.clone());let a=new St(.05,.042,.2,8,1,!1);a.deleteAttribute("uv"),Et(a,()=>t.clone()),a.translate(0,.52,0);let l=new St(.085,.085,.02,10,1,!1);l.deleteAttribute("uv"),Et(l,()=>t.clone()),l.translate(0,-.36,0);let c=wn([o.toNonIndexed(),a.toNonIndexed(),l.toNonIndexed()]);c.rotateZ(r*.32),c.translate(0,0,r*.04),n.push(c)}let i=wn(n);return i.computeVertexNormals(),i}var Ed={gel:{build:tv,emissive:16738816,intensity:.35,glow:16752704,size:1.5},water:{build:nv,emissive:1800447,intensity:.5,glow:5224703,size:1.7},pole:{build:iv,emissive:3192906,intensity:.45,glow:8847226,size:1.9}},fh=null;function mh(s,e,t=.55){fh||(fh=sv());let n=new ji(new Ji({map:fh,color:s,transparent:!0,opacity:t,depthWrite:!1,blending:bo,fog:!1}));return n.scale.set(e,e,1),n}function sv(){let e=new Uint8Array(16384);for(let n=0;n<64;n++)for(let i=0;i<64;i++){let r=(i+.5)/64-.5,o=(n+.5)/64-.5,a=Math.sqrt(r*r+o*o)*2,l=Math.pow(Math.max(0,1-a),2.2),c=(n*64+i)*4;e[c]=e[c+1]=e[c+2]=255,e[c+3]=Math.round(255*l)}let t=new zn(e,64,64,It);return t.magFilter=Je,t.minFilter=Je,t.needsUpdate=!0,t}var rr=class{constructor(e){this.factory=e,this.free=[]}get(){let e=this.free.pop()||this.factory();return e.visible=!0,e}put(e){e.visible=!1,this.free.push(e)}},Pa=class{constructor(e){this.scene=e,this.group=new Dt,e.add(this.group);let t=_a(new yt({vertexColors:!0,roughness:.9,metalness:0,side:bt}),1.6,.5),n=_a(new yt({vertexColors:!0,roughness:.9,metalness:0}),.9,.5),i=[nr(21,2),nr(34,2),nr(55,2)],r=Qy(),o=ev(),a=c=>(c.castShadow=!0,c.receiveShadow=!0,c),l=0;this.rockPool=new rr(()=>{let c=a(new We(i[l++%i.length],n));return this.group.add(c),c}),this.logPool=new rr(()=>{let c=a(new We(r,t));return c.rotation.order="YXZ",this.group.add(c),c}),this.overPool=new rr(()=>{let c=new Dt;c.add(a(new We(o,t)));let h=a(new We(i[0],n));h.position.set(-4.7,-.9,0),h.scale.set(1,1.5,1.1);let u=a(new We(i[1],n));return u.position.set(4.8,-.75,.1),u.scale.set(1.2,1.9,1.2),u.rotation.y=2,c.add(h,u),this.group.add(c),c}),this.itemPools={};for(let c in Ed){let h=Ed[c],u=h.build(),f=new yt({vertexColors:!0,roughness:.35,metalness:.1,emissive:h.emissive,emissiveIntensity:h.intensity}),d=mh(h.glow,1).material;this.itemPools[c]=new rr(()=>{let g=new Dt,_=new We(u,f);_.castShadow=!0;let m=new ji(d);return m.scale.set(h.size,h.size,1),g.add(_,m),g.userData.body=_,this.group.add(g),g})}this.course=null,this.firstRow=0,this.nextRow=0,this.firstItem=0,this.nextItem=0}reset(e){if(this.course){for(let t of this.course.rows)this.releaseRow(t);for(let t of this.course.items)this._releaseItem(t)}this.course=e,this.firstRow=this.nextRow=0,this.firstItem=this.nextItem=0}releaseRow(e){if(e.visual){for(let t of e.visual)t.pool.put(t.obj);e.visual=null}}_releaseItem(e){e.visual&&(this.itemPools[e.type].put(e.visual),e.visual=null)}_spawnRow(e){let t=hn(e.seed),n=[],i=e.s,r=tr(i),o=gt(i),a=rt(i),l=e.cells;if(l[0]===ui){let h=this.overPool.get(),u=t()<.5;h.position.set(a,o+1.52,-i),h.rotation.set(0,r+(u?Math.PI:0),.045),n.push({obj:h,pool:this.overPool})}let c=0;for(;c<3;){if(l[c]!==Pt){c++;continue}let h=c;for(;h+1<3&&l[h+1]===Pt;)h++;let u=h-c+1,f=((c+h)/2-1)*1.7,d=u===3?7.4:u*1.7+.25,g=this.logPool.get(),_=.92+t()*.2;g.scale.set(d,_,_),g.position.set(a+f,o+.27*_,-i),g.rotation.set(t()*6.28,r+(t()-.5)*(u===3?.14:.04),0),n.push({obj:g,pool:this.logPool}),c=h+1}for(let h=0;h<3;h++){if(l[h]!==pt)continue;let u=this.rockPool.get(),f=.76+t()*.1,d=1.05+t()*.4,g=i+e.off[h];u.scale.set(f,d,f*(.9+t()*.2)),u.position.set(rt(g)+(h-1)*1.7+(t()-.5)*.12,gt(g)+d*.36,-g+(t()-.5)*.2),u.rotation.set(0,t()*6.28,0),n.push({obj:u,pool:this.rockPool})}e.visual=n}_spawnItem(e){let t=this.itemPools[e.type].get();t.position.set(rt(e.s)+e.lane*1.7,gt(e.s)+e.y,-e.s),e.visual=t}takeItem(e){e.taken=!0,this._releaseItem(e)}update(e,t){if(!this.course)return;let{rows:n,items:i}=this.course,r=e+240,o=e-14;for(;this.nextRow<n.length&&n[this.nextRow].s<r;){let a=n[this.nextRow++];a.smashed||this._spawnRow(a)}for(;this.firstRow<this.nextRow&&n[this.firstRow].s<o;)this.releaseRow(n[this.firstRow++]);for(;this.nextItem<i.length&&i[this.nextItem].s<r;){let a=i[this.nextItem++];a.taken||this._spawnItem(a)}for(;this.firstItem<this.nextItem&&i[this.firstItem].s<o;)this._releaseItem(i[this.firstItem++]);for(let a=this.firstItem;a<this.nextItem;a++){let l=i[a];l.visual&&(l.visual.userData.body.rotation.y=t*2.4+a,l.visual.position.y=gt(l.s)+l.y+Math.sin(t*3+a*1.7)*.07)}}};function rv(s,e){let t=Sn(1024,256),n=t.getContext("2d");n.fillStyle="#16191c",n.fillRect(0,0,1024,256),n.fillStyle="#ff6a13",n.fillRect(0,0,1024,18),n.fillRect(0,238,1024,18),n.textAlign="center",n.textBaseline="middle",n.fillStyle="#ffffff",n.font="italic bold 136px sans-serif",n.fillText(s,362,134),n.fillStyle="#ff6a13",n.font="bold 112px sans-serif",n.fillText(e,802,134);let i=new Dn(t);return i.colorSpace=dt,i}function ov(){let s=Sn(256,32),e=s.getContext("2d");for(let n=0;n<2;n++)for(let i=0;i<16;i++)e.fillStyle=(i+n)%2===0?"#f2f2f2":"#1a1a1a",e.fillRect(i*16,n*16,16,16);let t=new Dn(s);return t.colorSpace=dt,t.magFilter=At,t}var Ca=null;function av(){if(Ca)return Ca;let s=Sn(1024,128),e=s.getContext("2d");e.fillStyle="#1463c8",e.fillRect(0,0,1024,128),e.fillStyle="#ffffff",e.fillRect(0,0,1024,10),e.fillRect(0,118,1024,10),e.textAlign="center",e.textBaseline="middle",e.font="bold 78px sans-serif",e.fillText("\u8865\u7ED9\u7AD9",250,66),e.fillStyle="#ffd24a",e.font="italic bold 66px sans-serif",e.fillText("AID STATION",690,66);let t=new Dn(s);return t.colorSpace=dt,Ca={poleGeo:new St(.07,.08,4.9,8),footGeo:new St(.34,.4,.3,12),bannerGeo:new Hn(8.2,1.02),poleMat:new yt({color:14672872,roughness:.5,metalness:.3}),footMat:new yt({color:1842979,roughness:.7}),bannerMat:Un(new yt({map:t,roughness:.8,side:bt,emissive:16777215,emissiveMap:t,emissiveIntensity:.3}))},Ca}function Ad(s){let e=av(),t=new Dt;for(let i of[-1,1]){let r=new We(e.poleGeo,e.poleMat);r.position.set(i*4.1,2.45,0),r.castShadow=!0;let o=new We(e.footGeo,e.footMat);o.position.set(i*4.1,.12,0),t.add(r,o)}let n=new We(e.bannerGeo,e.bannerMat);return n.position.set(0,4.35,0),n.castShadow=!0,t.add(n),t.position.set(rt(s),gt(s),-s),t.rotation.y=tr(s),t}function gh(s,e,t,n){let i=new Dt,r=4.3,o=new We(new $o(r,.46,12,36,Math.PI),new yt({color:n,roughness:.55,metalness:0,emissive:n,emissiveIntensity:.28}));o.scale.set(1,.92,1),o.castShadow=!0,i.add(o);let a=new yt({color:1842979,roughness:.7});for(let u of[-1,1]){let f=new We(new St(.6,.66,.5,14),a);f.position.set(u*r,.2,0),f.castShadow=!0,i.add(f)}let l=rv(e,t),c=new We(new Hn(5.6,1.4),Un(new yt({map:l,roughness:.8,side:bt,emissive:16777215,emissiveMap:l,emissiveIntensity:.3})));c.position.set(0,r*.92+.46+.66,0),c.castShadow=!0,i.add(c);let h=new We(new Hn(6.4,.8),Un(new yt({map:ov(),roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})));return h.rotation.x=-Math.PI/2,h.position.y=.02,h.receiveShadow=!0,i.add(h),i.position.set(rt(s),gt(s),-s),i.rotation.y=tr(s),i}var $e=390,Zt="#ff6a13",La="#5cc4ff",_h="#8fe87a",lv=["\u4EBA\u7269\u4E0E\u52A8\u753B\uFF1AQuaternius\uFF08CC0\uFF09 \xB7 \u592A\u9633\u955C\uFF1AiPoly3D\uFF08CC0\uFF09","\u5E3D\u5B50\uFF1A\u201CBaseball cap\u201D by jeremy\uFF0CCC BY 3.0\uFF0C\u5DF2\u6539\u8272","\u6765\u6E90 poly.pizza/m/dzfCdDABuiQ \xB7 \u8BB8\u53EF creativecommons.org/licenses/by/3.0"],cv='"PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif';function Rn(s,{bold:e=!0,italic:t=!1}={}){return`${t?"italic ":""}${e?"bold ":""}${s}px ${cv}`}function se(s,e,t,n,i,r={}){if(s.font=Rn(i,r),s.textAlign=r.align||"left",s.textBaseline=r.baseline||"middle",r.shadow!==!1){s.fillStyle=r.shadowColor||"rgba(0,0,0,0.55)";let o=Math.max(1,i*.045);s.fillText(e,t+o*.6,n+o)}s.fillStyle=r.color||"#ffffff",s.fillText(e,t,n)}function Rt(s,e,t,n,i,r){let o=Math.min(r,n/2,i/2);s.beginPath(),s.moveTo(e+o,t),s.lineTo(e+n-o,t),s.arcTo(e+n,t,e+n,t+o,o),s.lineTo(e+n,t+i-o),s.arcTo(e+n,t+i,e+n-o,t+i,o),s.lineTo(e+o,t+i),s.arcTo(e,t+i,e,t+i-o,o),s.lineTo(e,t+o),s.arcTo(e,t,e+o,t,o),s.closePath()}function hv(s,e,t,n,i){s.fillStyle=i,s.beginPath(),s.moveTo(e+.15*n,t-.5*n),s.lineTo(e-.3*n,t+.08*n),s.lineTo(e-.02*n,t+.08*n),s.lineTo(e-.15*n,t+.5*n),s.lineTo(e+.3*n,t-.1*n),s.lineTo(e+.02*n,t-.1*n),s.closePath(),s.fill()}function uv(s,e,t,n){s.beginPath(),s.moveTo(e,t-n*.56),s.bezierCurveTo(e+n*.12,t-n*.3,e+n*.36,t-n*.02,e+n*.36,t+n*.16),s.bezierCurveTo(e+n*.36,t+n*.5,e-n*.36,t+n*.5,e-n*.36,t+n*.16),s.bezierCurveTo(e-n*.36,t-n*.02,e-n*.12,t-n*.3,e,t-n*.56),s.closePath()}function fv(s,e,t,n,i){s.strokeStyle=i,s.fillStyle=i,s.lineCap="round";for(let r of[-1,1])s.lineWidth=n*.09,s.beginPath(),s.moveTo(e+r*n*.3,t-n*.5),s.lineTo(e-r*n*.3,t+n*.5),s.stroke(),s.lineWidth=n*.17,s.beginPath(),s.moveTo(e+r*n*.3,t-n*.5),s.lineTo(e+r*n*.21,t-n*.35),s.stroke(),s.lineWidth=n*.07,s.beginPath(),s.moveTo(e-r*n*.33,t+n*.3),s.lineTo(e-r*n*.13,t+n*.42),s.stroke()}function dv(s,e,t,n,i,r){s.save(),s.translate(e,t),s.rotate({up:0,right:Math.PI/2,down:Math.PI,left:-Math.PI/2}[n]),s.strokeStyle=r,s.lineWidth=i*.16,s.lineCap="round",s.lineJoin="round",s.beginPath(),s.moveTo(0,i*.42),s.lineTo(0,-i*.42),s.moveTo(-i*.3,-i*.1),s.lineTo(0,-i*.42),s.lineTo(i*.3,-i*.1),s.stroke(),s.restore()}var is=class{constructor(e,t,n,i,r){this.hud=e,this.x=t,this.y=n,this.w=i,this.h=r;let o=e.u*e.density;this.canvas=Sn(Math.max(2,Math.round(i*o)),Math.max(2,Math.round(r*o))),this.ctx=this.canvas.getContext("2d"),this.texture=new Dn(this.canvas),this.texture.colorSpace=dt,this.texture.generateMipmaps=!1,this.texture.minFilter=Je,this.texture.magFilter=Je,this.uniforms={map:{value:this.texture},opacity:{value:1}},this.material=new zt({uniforms:this.uniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D map; uniform float opacity; varying vec2 vUv; void main(){ vec4 c = texture2D(map, vUv); gl_FragColor = vec4(c.rgb, c.a * opacity); }",transparent:!0,depthTest:!1,depthWrite:!1}),this.mesh=new We(e.quad,this.material),this.mesh.frustumCulled=!1,this.place(1),e.scene.add(this.mesh)}place(e){let t=this.hud.u;this.mesh.scale.set(this.w*t*e,this.h*t*e,1),this.mesh.position.set((this.x+this.w/2)*t,this.hud.H-(this.y+this.h/2)*t,0)}begin(){let e=this.ctx,t=this.hud.u*this.hud.density;return e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,this.canvas.width,this.canvas.height),e.setTransform(t,0,0,t,-this.x*t,-this.y*t),e}end(){this.texture.needsUpdate=!0}dispose(){this.hud.scene.remove(this.mesh),this.texture.dispose(),this.material.dispose()}},xh=class{constructor(e){this.hud=e,this.canvas=Ff(),this.texture=null,this.uniforms={map:{value:null},opacity:{value:1}},this.material=new zt({uniforms:this.uniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D map; uniform float opacity; varying vec2 vUv; void main(){ vec4 c = texture2D(map, vUv); gl_FragColor = vec4(c.rgb, c.a * opacity); }",transparent:!0,depthTest:!1,depthWrite:!1}),this.mesh=new We(e.quad,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,this.mesh.visible=!1,e.scene.add(this.mesh),this.acc=0}show(e,t,n,i){if(!this.canvas)return null;let r=this.hud,o=r.u*r.density,a=Math.max(2,Math.round(n*o)),l=Math.max(2,Math.round(i*o));if((this.canvas.width!==a||this.canvas.height!==l)&&(this.canvas.width=a,this.canvas.height=l,this.texture&&this.texture.dispose(),this.texture=null),!this.texture){let c=new Dn(this.canvas);c.colorSpace=dt,c.generateMipmaps=!1,c.minFilter=Je,c.magFilter=Je,this.texture=c,this.uniforms.map.value=c}return this.mesh.scale.set(n*r.u,i*r.u,1),this.mesh.position.set((e+n/2)*r.u,r.H-(t+i/2)*r.u,0),this.mesh.visible=!0,this.acc=1,{w:n,h:i,scale:a/n}}hide(){this.mesh.visible=!1}update(e){!this.mesh.visible||!this.texture||(this.acc+=e,this.acc>=.1&&(this.acc=0,this.texture.needsUpdate=!0))}},pv=`
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
}`,Ia=class{constructor(e){this.scene=new Hs,this.camera=new Si(0,1,1,0,-1,1),this.quad=new Hn(1,1),this.layers=null,this.buttons=[],this.hudButtons=[],this.soundOn=!0,this.toastT=0,this.toastDur=0,this.toastPop=0,this._topAcc=0,this._bottomKey="",this._midKey="",this.screenMode="",this.vignetteUniforms={uColor:{value:new ce(.8,.05,.02)},uStrength:{value:0},uBase:{value:.3}},this.vignette=new We(this.quad,new zt({uniforms:this.vignetteUniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:pv,transparent:!0,depthTest:!1,depthWrite:!1})),this.vignette.frustumCulled=!1,this.vignette.renderOrder=-1,this.scene.add(this.vignette),this.board=new xh(this),this.resize(e)}resize(e){this.W=e.width,this.H=e.height,this.u=this.W/$e,this.Hd=this.H/this.u,this.density=Math.min(e.pixelRatio,2);let t=e.menu?e.menu.bottom:0,n=e.menu?e.menu.top:e.safeTop;if(this.T=Math.max(8,n/this.u),this.menuLeft=e.menu?e.menu.left/this.u:$e,this.rowH=e.menu?(t-n)/this.u:32,this.camera.left=0,this.camera.right=this.W,this.camera.top=this.H,this.camera.bottom=0,this.camera.updateProjectionMatrix(),this.vignette.scale.set(this.W,this.H,1),this.vignette.position.set(this.W/2,this.H/2,0),this.layers)for(let r in this.layers)this.layers[r].dispose();this.topH=this.T+this.rowH+134;let i=176;this.layers={top:new is(this,0,0,$e,this.topH),mid:new is(this,0,this.topH,$e,236),toast:new is(this,0,this.topH+64,$e,170),bottom:new is(this,0,this.Hd-i,$e,i),screen:new is(this,0,0,$e,this.Hd)},this.layers.top.mesh.renderOrder=1,this.layers.mid.mesh.renderOrder=2,this.layers.bottom.mesh.renderOrder=3,this.layers.toast.mesh.renderOrder=4,this.layers.screen.mesh.renderOrder=5,this.layers.toast.uniforms.opacity.value=0,this._bottomKey="",this._midKey="",this._topAcc=1,this.setRaceHudVisible(!1)}setRaceHudVisible(e){this.layers.top.mesh.visible=e,this.layers.mid.mesh.visible=e,this.layers.bottom.mesh.visible=e}hitTest(e,t){let n=e/this.u,i=t/this.u,r=6,o=a=>{for(let l of a)if(n>=l.x-r&&n<=l.x+l.w+r&&i>=l.y-r&&i<=l.y+l.h+r)return l.id;return null};return this.screenMode?o(this.buttons):o(this.hudButtons)}updateRace(e,t){this._topAcc+=e,this._topAcc>=1/15&&(this._topAcc=0,this._drawTop(t));let n=o=>o>0?Math.ceil(o*4):0,i=`${Math.floor(t.distance)}|${t.gels}|${n(t.boost)}|${t.hydration}|${n(t.peak)}|${t.shield}|${n(t.burst)}|${t.stamina<30?Math.floor(t.time*3)%2:0}|${t.rivals.map(o=>Math.floor(o/8)).join(",")}`;i!==this._bottomKey&&(this._bottomKey=i,this._drawBottom(t));let r=`${t.stage}|${t.combo}`;r!==this._midKey&&(this._midKey=r,this._drawMid(t)),this._animateToast(e),this.board.update(e)}_drawTop(e){let t=this.layers.top,n=t.begin(),i=this.T,r=n.createLinearGradient(0,0,0,t.h);r.addColorStop(0,"rgba(8,10,12,0.66)"),r.addColorStop(.6,"rgba(8,10,12,0.28)"),r.addColorStop(1,"rgba(8,10,12,0)"),n.fillStyle=r,n.fillRect(0,0,$e,t.h);let o=this.rowH/2,a=i+o,l=S=>{n.fillStyle="rgba(20,23,26,0.72)",n.beginPath(),n.arc(S,a,o,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.28)",n.lineWidth=1,n.stroke()},c=14+o;l(c),n.fillStyle="#fff",n.fillRect(c-5,a-6,3.4,12),n.fillRect(c+1.6,a-6,3.4,12);let h=c+o*2+10;l(h),n.fillStyle="#fff",n.beginPath(),n.moveTo(h-7,a-3),n.lineTo(h-3,a-3),n.lineTo(h+1.5,a-7),n.lineTo(h+1.5,a+7),n.lineTo(h-3,a+3),n.lineTo(h-7,a+3),n.closePath(),n.fill(),n.strokeStyle="#fff",n.lineWidth=1.5,n.lineCap="round",n.beginPath(),this.soundOn?(n.arc(h+2,a,4.5,-.8,.8),n.stroke()):(n.moveTo(h+4,a-3),n.lineTo(h+9,a+3),n.moveTo(h+9,a-3),n.lineTo(h+4,a+3),n.stroke()),this.hudButtons=[{id:"pause",x:c-o,y:i,w:o*2,h:o*2},{id:"sound",x:h-o,y:i,w:o*2,h:o*2},this._gelButton].filter(Boolean);let u=h+o+12;se(n,"\u5C71\u91CE\u75BE\u9A70",u,a-6,14,{italic:!0}),se(n,"MOUNTAIN DASH",u,a+9,7.5,{color:"rgba(255,255,255,0.7)",shadow:!1});let f=i+this.rowH;n.fillStyle="rgba(20,23,26,0.6)",Rt(n,$e/2-22,f+6,44,16,3),n.fill(),se(n,"\u65F6\u95F4",$e/2,f+14.5,10,{align:"center",bold:!1,color:"rgba(255,255,255,0.85)",shadow:!1}),se(n,pn(e.time),$e/2-3,f+52,52,{align:"center",italic:!0});let d=f+94,g=e.total>1;if(g){n.font=Rn(26,{italic:!0});let S=n.measureText(String(e.rank)).width;n.font=Rn(13);let D=n.measureText(`/${e.total}`).width,H=$e/2-(S+D+2)/2;se(n,String(e.rank),H,d,26,{italic:!0,color:Zt}),se(n,`/${e.total}`,H+S+3,d+4,13,{color:"#fff"})}let _=g?d+15:d-10;n.fillStyle="rgba(20,23,26,0.6)",n.font=Rn(10,{bold:!1});let m=n.measureText(e.gapText).width+14;Rt(n,$e/2-m/2,_,m,17,3),n.fill(),se(n,e.gapText,$e/2,_+8.5,10,{align:"center",bold:!1,shadow:!1}),se(n,"\u6E38\u620F\u914D\u901F",16,f+84,10.5,{bold:!1,color:"rgba(255,255,255,0.86)"});let p=bc(e.speed);se(n,p,14,f+109,27,{italic:!0}),n.font=Rn(27,{italic:!0});let y=n.measureText(p).width;se(n,"/km",14+y+6,f+114,10.5,{bold:!1,color:"rgba(255,255,255,0.86)"});let x=e.stamina<30;se(n,`${Math.round(e.stamina)}%`,376,f+84,16,{align:"right",color:x?"#ff4b3a":"#fff"}),n.font=Rn(16);let M=n.measureText(`${Math.round(e.stamina)}%`).width;se(n,"\u4F53\u529B",376-M-8,f+85,10.5,{align:"right",bold:!1,color:"rgba(255,255,255,0.86)"});let R=8,b=13,T=2.4,P=376-R*(b+T)+T,v=f+99;for(let S=0;S<R;S++){let D=Math.max(0,Math.min(1,e.stamina/100*R-S)),H=P+S*(b+T),K=I=>{n.beginPath(),n.moveTo(H+4,v),n.lineTo(H+4+I,v),n.lineTo(H+I,v+12),n.lineTo(H,v+12),n.closePath()};n.fillStyle="rgba(15,17,19,0.72)",K(b),n.fill(),D>.02&&(n.fillStyle=e.peak>0?La:x?"#ff4b3a":e.boost>0?"#ffc247":Zt,K(b*D),n.fill())}t.end()}_drawMid(e){let t=this.layers.mid,n=t.begin(),i=this.topH,r=26;for(let o=0;o<et.length;o++){let a=i+22+o*33;o<et.length-1&&(n.strokeStyle=o<e.stage?"rgba(255,106,19,0.8)":"rgba(255,255,255,0.3)",n.lineWidth=1.5,n.beginPath(),n.moveTo(r,a+10),n.lineTo(r,a+23),n.stroke());let l=`0${o+1}`;if(o===e.stage){n.fillStyle=Zt,Rt(n,r-12,a-11,24,22,4),n.fill(),se(n,l,r,a+.5,11,{align:"center",shadow:!1}),n.font=Rn(12);let c=n.measureText(et[o].name).width+18;n.fillStyle=Zt,n.beginPath(),n.moveTo(r+17,a-11),n.lineTo(r+17+c+5,a-11),n.lineTo(r+17+c,a+11),n.lineTo(r+17,a+11),n.closePath(),n.fill(),se(n,et[o].name,r+25,a+.5,12,{shadow:!1})}else n.fillStyle=o<e.stage?"rgba(255,106,19,0.85)":"rgba(16,18,20,0.72)",n.beginPath(),n.arc(r,a,10,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.35)",n.lineWidth=1,n.stroke(),se(n,l,r,a+.5,9.5,{align:"center",bold:!1,shadow:!1,color:o<e.stage?"#fff":"rgba(255,255,255,0.8)"})}if(e.combo>=2){se(n,"\u8FDE\u7EED\u95EA\u907F",376,i+24,11.5,{align:"right",bold:!1}),se(n,String(e.combo),374,i+54,40,{align:"right",italic:!0}),n.fillStyle=Zt,n.fillRect(326,i+77,50,2.5);let o=Math.round(Math.min(ge.comboSpeedMax,e.combo*ge.comboSpeedStep)*100);o>0&&se(n,`\u901F\u5EA6 +${o}%`,376,i+92,11,{align:"right",color:"#ffc59c"})}t.end()}_drawBottom(e){let t=this.layers.bottom,n=t.begin(),i=this.Hd-t.h,r=n.createLinearGradient(0,i,0,this.Hd);r.addColorStop(0,"rgba(8,10,12,0)"),r.addColorStop(.55,"rgba(8,10,12,0.26)"),r.addColorStop(1,"rgba(8,10,12,0.62)"),n.fillStyle=r,n.fillRect(0,i,$e,t.h);let o=176,a=54,l=$e/2-o/2,c=i+34,h=e.gels>0,u=h&&e.stamina<30&&Math.floor(e.time*3)%2===0;n.fillStyle=u?"rgba(255,106,19,0.92)":"rgba(16,18,20,0.82)",Rt(n,l,c,o,a,12),n.fill(),n.strokeStyle=h?Zt:"rgba(255,255,255,0.22)",n.lineWidth=h?2:1,n.stroke(),hv(n,l+30,c+a/2,26,h?u?"#fff":Zt:"rgba(255,255,255,0.35)"),se(n,`\u80FD\u91CF\u80F6 ${e.gels}/${ge.maxGels}`,l+52,c+20,15,{color:h?"#fff":"rgba(255,255,255,0.55)",shadow:!1});let f=e.boost>0?"\u52A0\u901F\u4E2D\u2026":e.burst>0?"\u8FDE\u7EED\u95EA\u907F \xB7 \u52A0\u901F\u4E2D\u2026":h?`\u70B9\u51FB\u4F7F\u7528 \xB7 \u4F53\u529B +${ge.gelStamina}%`:"\u6CBF\u9014\u9009\u7EBF\u62FE\u53D6";if(se(n,f,l+52,c+38,10,{bold:!1,color:h?u?"#fff":"#ffc59c":e.burst>0?"#ffc59c":"rgba(255,255,255,0.5)",shadow:!1}),e.boost>0||e.burst>0){let P=e.boost>0?e.boost/ge.gelBoostTime:e.burst/ge.burstTime;n.fillStyle="#ffc247",Rt(n,l+10,c+a-6,(o-20)*Math.min(1,P),3,1.5),n.fill()}this._gelButton={id:"gel",x:l,y:c,w:o,h:a};let d=81,g=e.peak>0,_=16;if(n.fillStyle=g?"rgba(40,140,220,0.9)":"rgba(16,18,20,0.82)",Rt(n,_,c,d,a,12),n.fill(),n.strokeStyle=g||e.hydration>0?La:"rgba(255,255,255,0.22)",n.lineWidth=g?2:1,n.stroke(),g)se(n,"\u5DC5\u5CF0\u72B6\u6001",_+d/2,c+19,14,{align:"center",italic:!0,shadow:!1}),se(n,"\u65E0\u654C\u51B2\u523A",_+d/2,c+36,9.5,{align:"center",bold:!1,color:"rgba(255,255,255,0.9)",shadow:!1}),n.fillStyle="#fff",Rt(n,_+9,c+a-6,(d-18)*Math.min(1,e.peak/ge.peakTime),3,1.5),n.fill();else{for(let P=0;P<ge.hydrationMax;P++){let v=_+d/2+(P-(ge.hydrationMax-1)/2)*21;uv(n,v,c+20,21),P<e.hydration?(n.fillStyle=La,n.fill()):(n.fillStyle="rgba(255,255,255,0.08)",n.fill(),n.strokeStyle="rgba(255,255,255,0.4)",n.lineWidth=1,n.stroke())}se(n,`\u8865\u6C34 ${e.hydration}/${ge.hydrationMax}`,_+d/2,c+42,10,{align:"center",bold:!1,color:e.hydration>0?"#bfe6ff":"rgba(255,255,255,0.5)",shadow:!1})}let m=$e-16-d,p=e.shield>0;n.fillStyle="rgba(16,18,20,0.82)",Rt(n,m,c,d,a,12),n.fill(),n.strokeStyle=p?_h:"rgba(255,255,255,0.22)",n.lineWidth=p?2:1,n.stroke(),fv(n,m+d/2,c+20,24,p?_h:"rgba(255,255,255,0.3)"),se(n,p?"\u53EF\u6321\u4E00\u6B21\u78B0\u649E":"\u767B\u5C71\u6756",m+d/2,c+42,10,{align:"center",bold:!1,color:p?"#d3ffc8":"rgba(255,255,255,0.5)",shadow:!1});let y=i+124,x=Math.min(2e3,Math.floor(e.distance));se(n,String(x),16,y,22,{italic:!0}),n.font=Rn(22,{italic:!0});let M=n.measureText(String(x)).width;se(n,`/ ${2e3} m`,16+M+7,y+3,11,{bold:!1,color:"rgba(255,255,255,0.8)"});let R=16+M+7+62,b=350;n.fillStyle="rgba(255,255,255,0.22)",Rt(n,R,y-2,b-R,4,2),n.fill();let T=Math.max(0,Math.min(1,e.distance/2e3));n.fillStyle=Zt,Rt(n,R,y-2,Math.max(4,(b-R)*T),4,2),n.fill(),n.fillStyle="rgba(255,255,255,0.5)";for(let P=1;P<et.length;P++)n.fillRect(R+(b-R)*et[P].from/2e3-.5,y-4,1,8);e.rivals.forEach((P,v)=>{let S=Math.max(0,Math.min(1,P/2e3));n.fillStyle="#"+es[v].color.toString(16).padStart(6,"0"),n.beginPath(),n.arc(R+(b-R)*S,y,3.6,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=1,n.stroke()}),n.fillStyle=Zt,n.beginPath(),n.arc(R+(b-R)*T,y,6,0,Math.PI*2),n.fill(),n.strokeStyle="#fff",n.lineWidth=2,n.stroke(),n.strokeStyle="#fff",n.lineWidth=1.6,n.beginPath(),n.moveTo(362,y+8),n.lineTo(362,y-9),n.stroke(),n.fillStyle="#fff",n.beginPath(),n.moveTo(362,y-9),n.lineTo(374,y-5),n.lineTo(362,y-1),n.closePath(),n.fill(),t.end()}toast(e,t="",n={}){let i=this.layers.toast,r=i.begin(),o=i.y+i.h/2,a=n.size||30,l=n.color||"#ffffff";if(n.tag){r.font=Rn(13);let c=r.measureText(n.tag).width+20;r.fillStyle=Zt,Rt(r,$e/2-c/2,o-a*.5-30,c,22,4),r.fill(),se(r,n.tag,$e/2,o-a*.5-18.5,13,{align:"center",shadow:!1})}se(r,e,$e/2,o-(t?8:0),a,{align:"center",italic:!0,color:l,shadowColor:"rgba(0,0,0,0.7)"}),t&&se(r,t,$e/2,o+a*.5+10,14,{align:"center",bold:!0,color:"rgba(255,255,255,0.95)",shadowColor:"rgba(0,0,0,0.7)"}),i.end(),this.toastDur=n.duration||1.3,this.toastT=this.toastDur,this.toastPop=1}clearToast(){this.toastT=0,this.layers.toast.uniforms.opacity.value=0}_animateToast(e){let t=this.layers.toast;if(this.toastT<=0){t.uniforms.opacity.value=0,t.mesh.visible=!1;return}t.mesh.visible=!0,this.toastT-=e,this.toastPop=Math.max(0,this.toastPop-e*6);let n=Math.min(1,this.toastT/.25);t.uniforms.opacity.value=Math.max(0,n),t.place(1+this.toastPop*.35)}updateToastOnly(e){this._animateToast(e),this.board.update(e)}setVignette(e,t,n,i){this.vignetteUniforms.uStrength.value=e,this.vignetteUniforms.uColor.value.setRGB(t,n,i)}_button(e,t,n,i,r,o,a,l){if(l){let c=e.createLinearGradient(0,r,0,r+a);c.addColorStop(0,"#ff8a2b"),c.addColorStop(1,"#f2590c"),e.fillStyle=c,Rt(e,i,r,o,a,a/2),e.fill(),se(e,n,i+o/2,r+a/2+.5,19,{align:"center",italic:!0,color:"#fff",shadowColor:"rgba(120,40,0,0.5)"})}else e.fillStyle="rgba(18,20,23,0.7)",Rt(e,i,r,o,a,a/2),e.fill(),e.strokeStyle="rgba(255,255,255,0.4)",e.lineWidth=1.2,e.stroke(),se(e,n,i+o/2,r+a/2+.5,15,{align:"center",color:"#fff",shadow:!1});this.buttons.push({id:t,x:i,y:r,w:o,h:a})}hideScreen(){this.screenMode="",this.buttons=[],this.layers.screen.mesh.visible=!1,this._hideBoard()}_placeBoard(e,t,n,i,r){let o=this.board.show(t,n,i,r);if(!o){se(e,"\u672C\u5468\u597D\u53CB\u699C",t,n+13,13.5,{shadow:!1}),se(e,"\u5F53\u524D\u5FAE\u4FE1\u7248\u672C\u4E0D\u652F\u6301\u597D\u53CB\u6392\u884C\u699C",t+i/2,n+r/2+10,12,{align:"center",bold:!1,color:"rgba(255,255,255,0.6)",shadow:!1});return}Xf(o,a=>{a||this.buttons.push({id:"auth",x:t,y:n,w:i,h:r})})}_hideBoard(){this.board.mesh.visible&&(this.board.hide(),qf())}showTitle(e,t="ready"){this.screenMode="title",this.buttons=[],this._hideBoard();let n=this.layers.screen;n.mesh.visible=!0;let i=n.begin(),r=this.Hd,o=i.createLinearGradient(0,0,0,r*.36);o.addColorStop(0,"rgba(8,10,12,0.8)"),o.addColorStop(1,"rgba(8,10,12,0)"),i.fillStyle=o,i.fillRect(0,0,$e,r*.36),o=i.createLinearGradient(0,r-330,0,r),o.addColorStop(0,"rgba(8,10,12,0)"),o.addColorStop(.5,"rgba(8,10,12,0.7)"),o.addColorStop(1,"rgba(8,10,12,0.94)"),i.fillStyle=o,i.fillRect(0,r-330,$e,330);let a=this.T+this.rowH+58;i.fillStyle=Zt,i.beginPath(),i.moveTo(34,a+34),i.lineTo(46,a+34),i.lineTo(62,a-30),i.lineTo(50,a-30),i.closePath(),i.fill(),se(i,"\u5C71\u91CE\u75BE\u9A70",68,a,58,{italic:!0}),se(i,"M O U N T A I N   D A S H",70,a+44,13,{color:"rgba(255,255,255,0.86)"});let l=es.length?`2000 \u7C73\u5C71\u5F84 \xB7 6 \u4E2A\u8D5B\u6BB5 \xB7 ${es.length} \u4F4D\u5BF9\u624B`:"2000 \u7C73\u5C71\u5F84 \xB7 6 \u4E2A\u8D5B\u6BB5 \xB7 \u548C\u5FAE\u4FE1\u597D\u53CB\u6BD4\u672C\u5468\u6210\u7EE9";se(i,l,70,a+70,13.5,{bold:!1,color:"rgba(255,255,255,0.92)"});let c=45,h=300,u=r-176,f=u+140,d="\u5DE6\u53F3\u6ED1\u52A8\u53D8\u9053 \xB7 \u4E0A\u6ED1\u8DF3\u8DC3 \xB7 \u4E0B\u6ED1\u6ED1\u94F2";t==="ready"?this._button(i,"start","\u5F00 \u59CB \u6BD4 \u8D5B",c,u,h,58,!0):t==="error"?(this._button(i,"retry","\u52A0\u8F7D\u5931\u8D25 \xB7 \u70B9\u51FB\u91CD\u8BD5",c,u,h,58,!1),d="\u4EBA\u7269\u7D20\u6750\u6CA1\u6709\u52A0\u8F7D\u6210\u529F\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5"):(i.fillStyle="rgba(18,20,23,0.7)",Rt(i,c,u,h,58,29),i.fill(),se(i,"\u6B63\u5728\u52A0\u8F7D\u9009\u624B\u2026",$e/2,u+29.5,16,{align:"center",color:"rgba(255,255,255,0.7)",shadow:!1}),d="\u9A6C\u4E0A\u5C31\u597D");let g=(h-12)/2;this._button(i,"board","\u672C\u5468\u597D\u53CB\u699C",c,u+72,g,44,!1),this._button(i,"help","\u73A9\u6CD5\u8BF4\u660E",c+g+12,u+72,g,44,!1);let _=Ii(),m=[];if(e&&m.push(["\u4E2A\u4EBA\u6700\u4F73",pn(e)]),_.t>0?m.push(["\u672C\u5468\u6700\u4F73",pn(_.t/1e3)]):_.d>0&&m.push(["\u672C\u5468\u6700\u8FDC",`${_.d} m`]),t!=="ready"||!m.length)se(i,d,$e/2,f,11,{align:"center",bold:!1,color:t==="error"?"#ffb4a8":"rgba(255,255,255,0.6)",shadow:!1});else{let y=m.map(([M,R])=>{i.font=Rn(11.5,{bold:!1});let b=i.measureText(M).width;return i.font=Rn(14,{italic:!0}),{k:M,v:R,kw:b,w:b+7+i.measureText(R).width}}),x=($e-y.reduce((M,R)=>M+R.w,0)-26*(y.length-1))/2;y.forEach((M,R)=>{R>0&&(i.fillStyle="rgba(255,255,255,0.3)",i.fillRect(x-26/2,f-7,1,14)),se(i,M.k,x,f,11.5,{bold:!1,color:"rgba(255,255,255,0.65)",shadow:!1}),se(i,M.v,x+M.kw+7,f,14,{italic:!0,shadow:!1}),x+=M.w+26})}n.end()}showHelp(){this.screenMode="help",this.buttons=[],this._hideBoard();let e=this.layers.screen;e.mesh.visible=!0;let t=e.begin();t.fillStyle="rgba(8,10,12,0.66)",t.fillRect(0,0,$e,this.Hd);let n=334,i=506,{cx0:r,cy0:o}=this._card(t,n,i),a=r+24,l=n-48,c="rgba(255,255,255,0.7)",h=g=>{t.fillStyle="rgba(255,255,255,0.1)",t.fillRect(a,g,l,1)};se(t,"\u73A9\u6CD5\u8BF4\u660E",a,o+42,28,{italic:!0,shadow:!1}),se(t,"\u8DD1\u5B8C 2000 \u7C73\u5C71\u5F84\uFF0C\u522B\u8BA9\u4F53\u529B\u89C1\u5E95",a,o+70,12,{bold:!1,color:c,shadow:!1});let u=o+122;[["left","\u5DE6\u6ED1","\u5411\u5DE6\u53D8\u9053"],["right","\u53F3\u6ED1","\u5411\u53F3\u53D8\u9053"],["up","\u4E0A\u6ED1","\u8DF3\u8FC7\u5012\u6728"],["down","\u4E0B\u6ED1","\u6ED1\u94F2\u94BB\u8FC7"]].forEach(([g,_,m],p)=>{let y=a+l/4*(p+.5);t.fillStyle="rgba(255,255,255,0.07)",t.beginPath(),t.arc(y,u,23,0,Math.PI*2),t.fill(),dv(t,y,u,g,24,Zt),se(t,_,y,u+40,14,{align:"center",shadow:!1}),se(t,m,y,u+58,10.5,{align:"center",bold:!1,color:c,shadow:!1})}),h(o+204),[["#ffb347","\u80FD\u91CF\u80F6","\u56DE\u590D\u4F53\u529B\u5E76\u52A0\u901F"],[La,"\u6C34","\u6512\u6EE1 3 \u74F6\u8FDB\u5165\u5DC5\u5CF0\u72B6\u6001\uFF0C\u65E0\u654C\u51B2\u523A"],[_h,"\u767B\u5C71\u6756","\u6321\u4E0B\u4E00\u6B21\u78B0\u649E"]].forEach(([g,_,m],p)=>{let y=o+230+p*32;t.fillStyle=g,t.beginPath(),t.arc(a+6,y,4.5,0,Math.PI*2),t.fill(),se(t,_,a+20,y,13.5,{color:g,shadow:!1}),se(t,m,a+76,y,12,{bold:!1,color:"rgba(255,255,255,0.85)",shadow:!1})}),h(o+316),se(t,"\u6BCF\u4E00\u5C40\u7684\u969C\u788D\u548C\u8865\u7ED9\u90FD\u4F1A\u91CD\u65B0\u968F\u673A\u6392\u5E03",a,o+336,11.5,{bold:!1,color:c,shadow:!1}),se(t,"\u4F53\u529B\u8017\u5C3D\u5373\u9000\u8D5B\uFF0C\u6BCF\u5468\u6700\u597D\u7684\u4E00\u6B21\u6210\u7EE9\u8BA1\u5165\u597D\u53CB\u699C",a,o+355,11.5,{bold:!1,color:c,shadow:!1}),lv.forEach((g,_)=>{let m=8.6;t.font=Rn(m,{bold:!1});let p=t.measureText(g).width;p>l&&(m*=l/p),se(t,g,a,o+386+_*12.5,m,{bold:!1,color:"rgba(255,255,255,0.45)",shadow:!1})}),this._button(t,"back","\u77E5 \u9053 \u4E86",a,o+i-74,l,50,!0),e.end()}showPause(){this.screenMode="pause",this.buttons=[],this._hideBoard();let e=this.layers.screen;e.mesh.visible=!0;let t=e.begin(),n=this.Hd;t.fillStyle="rgba(8,10,12,0.66)",t.fillRect(0,0,$e,n);let i=n*.4;se(t,"\u5DF2\u6682\u505C",$e/2,i-30,44,{align:"center",italic:!0}),se(t,"\u5598\u53E3\u6C14\uFF0C\u5C71\u8FD8\u5728\u90A3\u91CC",$e/2,i+16,13,{align:"center",bold:!1,color:"rgba(255,255,255,0.8)"}),this._button(t,"resume","\u7EE7 \u7EED \u6BD4 \u8D5B",65,i+60,260,54,!0),this._button(t,"restart","\u91CD\u65B0\u5F00\u59CB",65,i+130,260,46,!1),this._button(t,"home","\u8FD4\u56DE\u9996\u9875",65,i+190,260,46,!1),e.end()}_card(e,t,n){let i=($e-t)/2,r=Math.max(this.T+this.rowH+16,(this.Hd-n)/2-10);return e.fillStyle="rgba(18,20,23,0.94)",Rt(e,i,r,t,n,18),e.fill(),e.strokeStyle="rgba(255,255,255,0.12)",e.lineWidth=1,e.stroke(),e.fillStyle=Zt,Rt(e,i+24,r,64,5,2),e.fill(),{cx0:i,cy0:r}}showLeaderboard(){this.screenMode="board",this.buttons=[];let e=this.layers.screen;e.mesh.visible=!0;let t=e.begin();t.fillStyle="rgba(8,10,12,0.66)",t.fillRect(0,0,$e,this.Hd);let n=334,i=574,{cx0:r,cy0:o}=this._card(t,n,i),a=r+24,l=r+n-24;se(t,"\u548C\u597D\u53CB\u6BD4\u4E00\u6BD4",a,o+42,28,{italic:!0,shadow:!1}),se(t,"\u53EA\u7EDF\u8BA1\u672C\u5468\u8DD1\u8FC7\u7684\u5FAE\u4FE1\u597D\u53CB \xB7 \u5B8C\u8D5B\u6BD4\u7528\u65F6\uFF0C\u6CA1\u5B8C\u8D5B\u6BD4\u8DDD\u79BB",a,o+70,11,{bold:!1,color:"rgba(255,255,255,0.65)",shadow:!1});let c=Ii(),h=o+92;t.fillStyle="rgba(255,255,255,0.06)",Rt(t,a,h,n-48,56,10),t.fill(),se(t,"\u6211\u7684\u672C\u5468\u6700\u4F73",a+14,h+28,12,{bold:!1,color:"rgba(255,255,255,0.7)",shadow:!1}),c.t>0?se(t,pn(c.t/1e3),l-14,h+28.5,26,{align:"right",italic:!0,shadow:!1}):se(t,c.d>0?`\u672A\u5B8C\u8D5B \xB7 ${c.d} m`:"\u672C\u5468\u8FD8\u6CA1\u8DD1",l-14,h+28.5,15,{align:"right",color:"rgba(255,255,255,0.75)",shadow:!1}),this._placeBoard(t,a,o+164,n-48,272);let u=o+i-122;this._button(t,"share","\u9080 \u8BF7 \u597D \u53CB",a,u,n-48,52,!0),this._button(t,"back","\u8FD4\u56DE",a,u+62,n-48,42,!1),e.end()}showResult(e){this.screenMode="result",this.buttons=[];let t=this.layers.screen;t.mesh.visible=!0;let n=t.begin(),i=this.Hd;n.fillStyle="rgba(8,10,12,0.6)",n.fillRect(0,0,$e,i);let r=e.total>1&&!!e.standings,o=334,a=r?500:572,{cx0:l,cy0:c}=this._card(n,o,a),h=l+24,u=l+o-24,f=()=>{e.weekBest&&(n.fillStyle="rgba(255,194,71,0.16)",Rt(n,u-78,c+32,78,26,13),n.fill(),n.strokeStyle="#ffc247",n.lineWidth=1,n.stroke(),se(n,"\u672C\u5468\u6700\u4F73",u-39,c+45.5,12.5,{align:"center",color:"#ffc247",shadow:!1}))};if(e.finished){let x=r&&e.rank===1;se(n,x?"\u8DD1\u5C71\u4E4B\u738B":"\u987A\u5229\u5B8C\u8D5B",h,c+44,30,{italic:!0,shadow:!1}),se(n,x?"\u7B2C\u4E00\u4E2A\u51B2\u8FC7\u7EC8\u70B9\u7EBF":"\u7FFB\u8FC7\u4E86\u516D\u9053\u5C71\u6881",h,c+72,12,{bold:!1,color:"rgba(255,255,255,0.7)",shadow:!1}),r?(se(n,`${e.rank}`,u-22,c+50,58,{align:"right",italic:!0,color:e.rank===1?"#ffc247":Zt,shadow:!1}),se(n,`/${e.total}`,u,c+62,16,{align:"right",color:"rgba(255,255,255,0.8)",shadow:!1})):f()}else se(n,"\u4F53\u529B\u8017\u5C3D",h,c+44,30,{italic:!0,shadow:!1,color:"#ff6b5a"}),se(n,`\u6B62\u6B65 ${Math.floor(e.distance)} m \xB7 ${et[e.stage].name}`,h,c+72,12,{bold:!1,color:"rgba(255,255,255,0.7)",shadow:!1}),r||!e.weekBest?se(n,"DNF",u,c+50,34,{align:"right",italic:!0,color:"rgba(255,255,255,0.35)",shadow:!1}):f();let d=c+104;n.fillStyle="rgba(255,255,255,0.06)",Rt(n,h,d,o-48,70,10),n.fill(),se(n,e.finished?"\u5B8C\u8D5B\u7528\u65F6":"\u5DF2\u7528\u65F6\u95F4",h+14,d+18,11,{bold:!1,color:"rgba(255,255,255,0.65)",shadow:!1}),se(n,pn(e.time),h+12,d+46,34,{italic:!0,shadow:!1}),e.isRecord?(n.fillStyle=Zt,Rt(n,u-86,d+34,72,22,4),n.fill(),se(n,"\u65B0\u7EAA\u5F55",u-50,d+45.5,12,{align:"center",shadow:!1})):e.best&&(se(n,"\u4E2A\u4EBA\u6700\u4F73",u-14,d+18,11,{align:"right",bold:!1,color:"rgba(255,255,255,0.65)",shadow:!1}),se(n,pn(e.best),u-14,d+47,17,{align:"right",italic:!0,color:"rgba(255,255,255,0.85)",shadow:!1}));let g=d+86,_=[["\u5E73\u5747\u914D\u901F",bc(e.avgSpeed)],["\u6700\u9AD8\u8FDE\u95EA",String(e.bestCombo)],["\u5DC5\u5CF0\u72B6\u6001",`${e.peaks||0} \u6B21`],["\u649E\u5230\u969C\u788D",`${e.hits} \u6B21`]],m=(o-48)/_.length;_.forEach(([x,M],R)=>{let b=h+m*R;se(n,x,b+2,g+10,10.5,{bold:!1,color:"rgba(255,255,255,0.6)",shadow:!1}),se(n,M,b+2,g+33,17,{italic:!0,shadow:!1})});let p=g+62;n.fillStyle="rgba(255,255,255,0.1)",n.fillRect(h,p-8,o-48,1);let y=c+a-122;if(!r){this._placeBoard(n,h,p,o-48,182);let x=(o-48-10)/2;this._button(n,"restart","\u518D \u8DD1 \u4E00 \u6B21",h,y,o-48,52,!0),this._button(n,"share","\u9080\u8BF7\u597D\u53CB\u6765\u6BD4",h,y+62,x,42,!1),this._button(n,"home","\u8FD4\u56DE\u9996\u9875",h+x+10,y+62,x,42,!1),t.end();return}e.standings.forEach((x,M)=>{let R=p+12+M*27;x.me&&(n.fillStyle="rgba(255,106,19,0.16)",Rt(n,h-6,R-12,o-36,24,5),n.fill()),se(n,String(M+1),h+4,R,14,{italic:!0,color:x.me?Zt:"rgba(255,255,255,0.55)",shadow:!1}),n.fillStyle=x.color,n.beginPath(),n.arc(h+30,R,4.5,0,Math.PI*2),n.fill(),se(n,x.name,h+44,R,13.5,{bold:x.me,shadow:!1}),se(n,x.text,u,R,12.5,{align:"right",bold:!1,color:"rgba(255,255,255,0.8)",shadow:!1})}),this._hideBoard(),this._button(n,"restart","\u518D \u8DD1 \u4E00 \u6B21",l+24,y,o-48,52,!0),this._button(n,"home","\u8FD4\u56DE\u9996\u9875",l+24,y+62,o-48,42,!1),t.end()}};var Rd=16,Cd=30,mv=18,yh=4,Pd=6,gv=12,_v=450,Da=class{constructor(){this.onSwipe=null,this.onDrag=null,this.onTap=null,this.onKey=null,this.touches=new Map,ye.onTouchStart(t=>{for(let n of t.changedTouches)this.touches.set(n.identifier,{x0:n.clientX,y0:n.clientY,t0:Date.now(),axis:null,dir:0,ex:0})}),ye.onTouchMove(t=>{for(let n of t.changedTouches){let i=this.touches.get(n.identifier);i&&this._move(i,n.clientX,n.clientY)}});let e=(t,n)=>{for(let i of t.changedTouches){let r=this.touches.get(i.identifier);if(!r||(this.touches.delete(i.identifier),r.axis!=="v"&&this._drag(0),!n||r.axis))continue;Math.hypot(i.clientX-r.x0,i.clientY-r.y0)<gv&&Date.now()-r.t0<_v&&this.onTap&&this.onTap(i.clientX,i.clientY)}};ye.onTouchEnd(t=>e(t,!0)),ye.onTouchCancel&&ye.onTouchCancel(t=>e(t,!1)),ye.onKeyDown&&ye.onKeyDown(t=>{let n=t.key||"",i={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"up",w:"up",W:"up"," ":"up",ArrowDown:"down",s:"down",S:"down"};if(i[n]){this.onSwipe&&this.onSwipe(i[n]);return}let r={e:"gel",E:"gel",p:"pause",P:"pause",Escape:"pause",Enter:"confirm"};r[n]&&this.onKey&&this.onKey(r[n])})}_drag(e){this.onDrag&&this.onDrag(e)}_swipe(e){this.onSwipe&&this.onSwipe(e)}_move(e,t,n){if(e.axis==="v")return;if(e.axis==="h"){(t-e.ex)*e.dir>0&&(e.ex=t);let l=(e.ex-t)*e.dir;l>=Cd?(e.dir=-e.dir,e.ex=t,this._drag(0),this._swipe(e.dir>0?"right":"left")):this._drag(-e.dir*Math.max(0,(l-Pd)/(Cd-Pd)));return}let i=t-e.x0,r=n-e.y0,o=Math.abs(i),a=Math.abs(r);a>=mv&&a>o?(e.axis="v",this._drag(0),this._swipe(r>0?"down":"up")):o>=Rd&&o>=a?(e.axis="h",e.dir=i>0?1:-1,e.ex=t,this._drag(0),this._swipe(i>0?"right":"left")):this._drag(o>a&&o>yh?Math.sign(i)*Math.min(1,(o-yh)/(Rd-yh)):0)}};var Na=class{constructor(){this.ctx=null,this.enabled=!0,this.ready=!1,this.wind=null}unlock(){if(this.ready){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume&&this.ctx.resume();return}try{if(!ye.createWebAudioContext)return;this.ctx=ye.createWebAudioContext(),this.ctx.resume&&this.ctx.resume(),this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.9:0,this.master.connect(this.ctx.destination),this.noise=this._noiseBuffer(1.5),this.ready=!0,this._startWind()}catch(e){this.ctx=null,this.ready=!1}}setEnabled(e){this.enabled=e,this.master&&(this.master.gain.value=e?.9:0)}suspend(){try{this.ctx&&this.ctx.suspend&&this.ctx.suspend()}catch(e){}}resume(){try{this.ctx&&this.ctx.resume&&this.ctx.resume()}catch(e){}}_noiseBuffer(e){let t=this.ctx.sampleRate||44100,n=this.ctx.createBuffer(1,Math.floor(t*e),t),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;return n}_startWind(){try{let e=this.ctx.createBufferSource();e.buffer=this.noise,e.loop=!0;let t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=420;let n=this.ctx.createGain();n.gain.value=.05,e.connect(t),t.connect(n),n.connect(this.master),e.start(),this.wind={gain:n,filter:t}}catch(e){}}setSpeed(e){if(this.wind)try{this.wind.gain.gain.value=.035+.11*e,this.wind.filter.frequency.value=320+900*e}catch(t){}}_burst({freq:e=800,q:t=1,type:n="lowpass",dur:i=.1,gain:r=.3,rate:o=1,sweep:a=0}){if(!(!this.ready||!this.enabled))try{let l=this.ctx.currentTime,c=this.ctx.createBufferSource();c.buffer=this.noise,c.playbackRate.value=o;let h=this.ctx.createBiquadFilter();h.type=n,h.frequency.value=e,h.Q.value=t,a&&h.frequency.linearRampToValueAtTime(Math.max(40,e+a),l+i);let u=this.ctx.createGain();u.gain.setValueAtTime(r,l),u.gain.exponentialRampToValueAtTime(8e-4,l+i),c.connect(h),h.connect(u),u.connect(this.master),c.start(l,Math.random()*.8),c.stop(l+i+.03)}catch(l){}}_tone({freq:e=440,to:t=0,dur:n=.15,gain:i=.2,type:r="sine",delay:o=0}){if(!(!this.ready||!this.enabled))try{let a=this.ctx.currentTime+o,l=this.ctx.createOscillator();l.type=r,l.frequency.setValueAtTime(e,a),t&&l.frequency.exponentialRampToValueAtTime(t,a+n);let c=this.ctx.createGain();c.gain.setValueAtTime(8e-4,a),c.gain.linearRampToValueAtTime(i,a+.012),c.gain.exponentialRampToValueAtTime(8e-4,a+n),l.connect(c),c.connect(this.master),l.start(a),l.stop(a+n+.03)}catch(a){}}step(e){this._burst({freq:e?190:230,dur:.09,gain:.42}),this._burst({freq:2600,type:"bandpass",q:.8,dur:.05,gain:.05})}jump(){this._burst({freq:500,type:"bandpass",q:.9,dur:.22,gain:.16,sweep:900})}land(){this._burst({freq:160,dur:.14,gain:.6})}slide(){this._burst({freq:1500,type:"bandpass",q:.6,dur:.5,gain:.2,sweep:-900})}lane(){this._burst({freq:900,type:"bandpass",q:1.2,dur:.08,gain:.08})}hit(){this._tone({freq:120,to:45,dur:.3,gain:.6}),this._burst({freq:700,dur:.22,gain:.5})}gel(){this._tone({freq:660,dur:.1,gain:.2,type:"triangle"}),this._tone({freq:990,dur:.16,gain:.2,type:"triangle",delay:.07})}water(){this._tone({freq:380,to:620,dur:.09,gain:.22}),this._tone({freq:460,to:820,dur:.11,gain:.22,delay:.09})}pole(){this._tone({freq:1560,dur:.07,gain:.14,type:"square"}),this._tone({freq:2080,dur:.12,gain:.12,type:"square",delay:.06})}shield(){this._tone({freq:1240,to:620,dur:.22,gain:.2,type:"square"}),this._burst({freq:1800,type:"bandpass",q:1.5,dur:.16,gain:.3})}peak(){[523,659,784,1047,1319].forEach((e,t)=>this._tone({freq:e,dur:.22,gain:.18,type:"triangle",delay:t*.07})),this._burst({freq:600,type:"bandpass",q:.7,dur:.9,gain:.2,sweep:2600})}smash(){this._tone({freq:150,to:60,dur:.2,gain:.5}),this._burst({freq:2200,type:"bandpass",q:.6,dur:.28,gain:.4,sweep:-1500})}boost(){this._tone({freq:330,to:880,dur:.35,gain:.18,type:"triangle"}),this._burst({freq:800,type:"bandpass",q:.8,dur:.4,gain:.14,sweep:1600})}beep(e){this._tone({freq:e?1040:620,dur:e?.45:.16,gain:.25,type:"square"})}stage(){this._tone({freq:523,dur:.14,gain:.16,type:"triangle"}),this._tone({freq:784,dur:.22,gain:.16,type:"triangle",delay:.11})}finish(){[523,659,784,1047].forEach((e,t)=>this._tone({freq:e,dur:.3,gain:.2,type:"triangle",delay:t*.13}))}fail(){[392,330,262].forEach((e,t)=>this._tone({freq:e,dur:.32,gain:.2,type:"triangle",delay:t*.18}))}};var fi=90,xv=`
attribute float aSize;
attribute float aAlpha;
uniform float uScale;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uScale / max(0.1, -mv.z);
}`,yv=`
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
}`,Ua=class{constructor(e){this.pos=new Float32Array(fi*3),this.size=new Float32Array(fi),this.alpha=new Float32Array(fi),this.vel=new Float32Array(fi*3),this.life=new Float32Array(fi),this.maxLife=new Float32Array(fi),this.baseSize=new Float32Array(fi),this.cursor=0;let t=new lt;t.setAttribute("position",new qe(this.pos,3).setUsage(li)),t.setAttribute("aSize",new qe(this.size,1).setUsage(li)),t.setAttribute("aAlpha",new qe(this.alpha,1).setUsage(li)),this.uniforms={uColor:{value:new ce(.55,.47,.36)},uScale:{value:600}},this.points=new Ws(t,new zt({uniforms:this.uniforms,vertexShader:xv,fragmentShader:yv,transparent:!0,depthWrite:!1,fog:!1})),this.points.frustumCulled=!1,this.points.renderOrder=3,e.add(this.points)}setTint(e,t){this.uniforms.uColor.value.setRGB(.5,.42,.32).lerp(e,.35).multiply(t).multiplyScalar(1.5)}setViewport(e,t){this.uniforms.uScale.value=e/(2*Math.tan(t*Math.PI/360))}emit(e,t,n,i,r=.25,o=1){for(let a=0;a<i;a++){let l=this.cursor;this.cursor=(this.cursor+1)%fi,this.pos[l*3]=e+(Math.random()-.5)*r,this.pos[l*3+1]=t+Math.random()*.1,this.pos[l*3+2]=n+(Math.random()-.5)*r,this.vel[l*3]=(Math.random()-.5)*1.2*o,this.vel[l*3+1]=(.4+Math.random()*.9)*o,this.vel[l*3+2]=(Math.random()-.5)*1.2*o+1.5,this.maxLife[l]=this.life[l]=.45+Math.random()*.5,this.baseSize[l]=(.25+Math.random()*.35)*(.7+o*.3)}}update(e){for(let n=0;n<fi;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=e;let i=1-Math.max(0,this.life[n])/this.maxLife[n];this.pos[n*3]+=this.vel[n*3]*e,this.pos[n*3+1]+=this.vel[n*3+1]*e,this.pos[n*3+2]+=this.vel[n*3+2]*e,this.vel[n*3+1]-=1.2*e,this.size[n]=this.baseSize[n]*(.6+i*1.8),this.alpha[n]=.34*(1-i)*Math.min(1,i*8)}let t=this.points.geometry.attributes;t.position.needsUpdate=!0,t.aSize.needsUpdate=!0,t.aAlpha.needsUpdate=!0}};var vv=5.8,Mv=2.75,Ld=66;function Id(s){return ci(s,t=>t.speed,80)*cn(1-da(s)*1.1,.8,1.12)}function bv(s){let e=Sn(256,96),t=e.getContext("2d");t.fillStyle="rgba(18,20,23,0.82)",t.fillRect(8,14,240,68),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=2,t.strokeRect(8,14,240,68),t.fillStyle="#ffffff",t.font='bold 44px "PingFang SC", "Helvetica Neue", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(s,128,50);let n=new Dn(e);return n.colorSpace=dt,n.generateMipmaps=!1,n.minFilter=Je,n}var Oa=class{constructor(e,t){this.renderer=e,this.screen=t,this.scene=new Hs,this.camera=new Lt(Ld,t.width/t.height,.3,2400),this.camPos=new C,this.camLook=new C,this.focus=new C,this.shake=0,this.time=0,this.env=new ba(this.scene,e),this.terrain=new va(this.scene),this.obstacles=new Pa(this.scene),this.dust=new Ua(this.scene),this.props=Nc(),this.scene.add(gh(7,"START","\u8D77\u70B9",15882508)),this.scene.add(gh(2e3,"FINISH","\u7EC8\u70B9",13773611));for(let n of En)this.scene.add(Ad(n));this.aura=mh(5817599,3.4,.5),this.aura.visible=!1,this.scene.add(this.aura),this.player={runner:null,s:0,speed:0,lane:0,laneX:0,follow:0,y:0,jumpT:-1,fastFall:!1,slideT:0,slideDur:ge.slideDuration,queuedSlide:!1,stamina:100,gels:0,hydration:0,shield:0,combo:0,bestCombo:0,hits:0,peaks:0,invuln:0,boostT:0,peakT:0,burstT:0,rowPtr:0,itemPtr:0},this.rivals=es.map(n=>({cfg:n,runner:null,s:n.start,speed:0,lane:n.lane,laneX:n.lane*1.7,y:0,jumpT:-1,slideT:0,rowPtr:0,finishTime:0})),this.hud=new Ia(t),this.audio=new Na,this.input=new Da,this.input.onSwipe=n=>this.onSwipe(n),this.input.onDrag=n=>this.onDrag(n),this.input.onTap=(n,i)=>this.onTap(n,i),this.input.onKey=n=>this.onKey(n),this.best=Zs("best",0)||0,this.runs=Zs("runs",this.best?1:0)||0,this.soundOn=Zs("sound",1)!==0,this.audio.setEnabled(this.soundOn),this.hud.soundOn=this.soundOn,this.autopilot=!!Tn.autopilot,this.assets="loading",bd(e),this.tutorial={rock:!1,log:!1,over:!1},this.state="title",this.paused=!1,this.raceTime=0,this.worldTime=0,this.countdown=0,this.endTimer=0,this.stage=0,this.hitFlash=0,this.stepAlt=!1,this.frame=0,this.resize(t),this.resetRace(),this.toTitle(),this.loadRunners()}resize(e){this.screen=e,this.camera.aspect=e.width/e.height,this.baseFov=cn(Ld+(.5-this.camera.aspect)*30,52,74),this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix(),this.dust.setViewport(e.height*this.renderer.getPixelRatio(),this.camera.fov),(this.hud.W!==e.width||this.hud.H!==e.height)&&(this.hud.resize(e),this.refreshScreen())}refreshScreen(){this.state==="title"?this.hud.screenMode==="board"?this.hud.showLeaderboard():this.hud.screenMode==="help"?this.hud.showHelp():this.hud.showTitle(this.best,this.assets):this.paused?this.hud.showPause():this.result&&(this.state==="finished"||this.state==="failed")&&this.endTimer<=0&&this.hud.showResult(this.result),this.state!=="title"&&this.hud.setRaceHudVisible(!0)}loadRunners(){this.assets="loading",this.state==="title"&&this.hud.showTitle(this.best,this.assets),Sd([Mc,...es.map(e=>e.model)]).then(e=>{let t=(n,i,r,o)=>{let a=new Ra(e,i,{phase:r});a.root.rotation.order="YXZ",o&&a.addNameTag(bv(o),2.6666666666666665),this.scene.add(a.root),n.runner=a};t(this.player,Mc,0,null),this.rivals.forEach((n,i)=>t(n,n.cfg.model,(i+1)*.27,n.cfg.name)),this.assets="ready",this.animateRunners(0)}).catch(e=>{console.error("[mountain-dash] \u4EBA\u7269\u7D20\u6750\u52A0\u8F7D\u5931\u8D25",e),this.assets="error"}).then(()=>{this.state==="title"&&this.hud.screenMode==="title"&&this.hud.showTitle(this.best,this.assets)})}resetRace(){let e=typeof Tn.seed=="number"?Tn.seed:((Date.now()&16777215^Math.floor(Math.random()*2147483647))>>>0)+1,t=Tn.tutorial!==void 0?!!Tn.tutorial:this.runs===0&&!this.autopilot;this.course=wd(e,{tutorial:t}),this.obstacles.reset(this.course);let n=this.player;for(Object.assign(n,{s:typeof Tn.startAt=="number"?Tn.startAt:0,speed:0,lane:0,laneX:0,follow:0,y:0,jumpT:-1,fastFall:!1,slideT:0,slideDur:ge.slideDuration,queuedSlide:!1,stamina:100,gels:0,hydration:0,shield:0,combo:0,bestCombo:0,hits:0,peaks:0,invuln:0,boostT:0,peakT:0,burstT:0,rowPtr:0,itemPtr:0});n.rowPtr<this.course.rows.length&&this.course.rows[n.rowPtr].s<n.s+30;)n.rowPtr++;for(;n.itemPtr<this.course.items.length&&this.course.items[n.itemPtr].s<n.s+30;)n.itemPtr++;for(this.aidPtr=0;this.aidPtr<En.length&&En[this.aidPtr]<n.s+30;)this.aidPtr++;this.rivals.forEach(r=>{Object.assign(r,{s:n.s+r.cfg.start,speed:0,lane:r.cfg.lane,laneX:r.cfg.lane*1.7,y:0,jumpT:-1,slideT:0,rowPtr:n.rowPtr,finishTime:0}),r.runner&&r.runner.reset()}),n.runner&&(n.runner.reset(),n.runner.root.visible=!0),this.raceTime=0,this.worldTime=0;let i=Ii();this.weekText=i.t>0?`\u672C\u5468\u6700\u4F73 ${pn(i.t/1e3)}`:i.d>0?`\u672C\u5468\u6700\u8FDC ${i.d} m`:"\u672C\u5468\u9996\u8DD1",this.stage=Js(n.s),this.result=null,this.endTimer=0,this.hitFlash=0,this.shake=0,this.terrain.rebuildAll(n.s),this.snapCamera=!0}toTitle(){this.state="title",this.paused=!1,this.hud.setRaceHudVisible(!1),this.hud.clearToast(),this.hud.showTitle(this.best,this.assets)}startCountdown(){this.audio.unlock(),this.resetRace(),this.state="countdown",this.paused=!1,this.countdown=3.2,this.lastCount=4,this.hud.hideScreen(),this.hud.setRaceHudVisible(!0),this.hud._topAcc=1}startRace(){this.state="running",this.autopilot||$s("runs",++this.runs),this.hud.toast("GO!","\u6ED1\u52A8\u5C4F\u5E55\u63A7\u5236\u8DD1\u8005",{size:64,color:"#ff8a2b",duration:1.1}),this.audio.beep(!0)}togglePause(){this.state!=="running"&&this.state!=="countdown"||(this.paused=!this.paused,this.player.follow=0,this.paused?(this.hud.showPause(),this.audio.suspend()):(this.hud.hideScreen(),this.audio.resume()))}onHide(){(this.state==="running"||this.state==="countdown")&&!this.paused?this.togglePause():this.audio.suspend()}onShow(){this.paused||this.audio.resume()}finishRace(){let e=this.player;this.state="finished",this.endTimer=3.5;let n=this.rivals.filter(a=>a.finishTime>0).length+1,i=!this.autopilot&&(!this.best||this.raceTime<this.best);i&&(this.best=this.raceTime,$s("best",this.best)),this.finalRank=n;let r=this.submitWeek(!0);this.result={finished:!0,time:this.raceTime,rank:n,total:this.rivals.length+1,avgSpeed:2e3/this.raceTime,bestCombo:e.bestCombo,hits:e.hits,peaks:e.peaks,distance:2e3,stage:et.length-1,best:this.best,isRecord:i,weekBest:r};let o=this.rivals.length?n===1?"\u51B2\u7EBF\uFF01\u7B2C 1 \u540D":`\u51B2\u7EBF\uFF01\u7B2C ${n} \u540D`:r?"\u51B2\u7EBF\uFF01\u672C\u5468\u6700\u4F73":"\u51B2\u7EBF\uFF01";this.hud.toast(o,pn(this.raceTime),{size:36,color:"#ffc247",duration:2.3}),this.audio.finish(),Li(!0)}failRace(){let e=this.player;this.state="failed",this.endTimer=3;let t=this.submitWeek(!1);this.result={finished:!1,time:this.raceTime,rank:0,total:this.rivals.length+1,avgSpeed:e.s/Math.max(1,this.raceTime),bestCombo:e.bestCombo,hits:e.hits,peaks:e.peaks,distance:e.s,stage:this.stage,best:this.best,isRecord:!1,weekBest:t},this.hud.toast("\u4F53\u529B\u8017\u5C3D","\u8DD1\u4E0D\u52A8\u4E86\u2026",{size:40,color:"#ff6b5a",duration:1.9}),this.audio.fail(),Li(!0)}submitWeek(e){return this.autopilot?!1:Wf(e,this.raceTime,this.player.s).improved}buildStandings(){let e=this.player,t=this.rivals.map(n=>({name:n.cfg.name,me:!1,color:"#"+n.cfg.color.toString(16).padStart(6,"0"),time:n.finishTime>0?n.finishTime:1/0,s:n.s}));return t.push({name:"\u4F60",me:!0,color:"#e8521c",time:this.result.finished?this.raceTime:1/0,s:this.result.finished?e.s:this.result.distance}),t.sort((n,i)=>n.time!==i.time?n.time-i.time:i.s-n.s),t.forEach(n=>{n.time<1/0?n.text=pn(n.time):n.me?n.text=`\u672A\u5B8C\u8D5B \xB7 ${Math.floor(n.s)} m`:n.text=`\u8FD8\u5728\u8DEF\u4E0A \xB7 ${Math.floor(Math.min(2e3,n.s))} m`}),t}onSwipe(e){this.audio.unlock(),!(this.state!=="running"||this.paused||this.autopilot)&&this.act(e)}onDrag(e){this.player.follow=this.state==="running"&&!this.paused&&!this.autopilot?e:0}laneTarget(){let e=this.player,t=1.7+.3;return cn(e.lane*1.7+e.follow*ge.laneFollow*1.7,-t,t)}moveLane(e,t,n){let i=t-e.laneX,r=cn(Math.abs(i)*ge.laneSnap,ge.laneMinSpeed,ge.laneSpeed);e.laneX+=cn(i,-r*n,r*n)}act(e){let t=this.player;if(e==="left"||e==="right"){let n=cn(t.lane+(e==="left"?-1:1),-1,1);n!==t.lane&&(t.lane=n,this.audio.lane())}else e==="up"?t.jumpT<0&&(t.jumpT=0,t.fastFall=!1,t.slideT=0,t.queuedSlide=!1,this.audio.jump()):e==="down"&&(t.jumpT>=0?(t.fastFall=!0,t.queuedSlide=!0):(t.slideT=t.slideDur=ge.slideDuration,this.audio.slide()))}onTap(e,t){this.audio.unlock();let n=this.hud.hitTest(e,t);n&&this.press(n)}onKey(e){this.audio.unlock(),e==="gel"?this.press("gel"):e==="pause"?(this.state==="running"||this.state==="countdown")&&this.togglePause():e==="confirm"&&(this.hud.screenMode==="board"||this.hud.screenMode==="help"?this.press("back"):this.state==="title"?this.press(this.assets==="error"?"retry":"start"):this.paused?this.press("resume"):this.hud.screenMode==="result"&&this.press("restart"))}press(e){switch(e){case"start":case"restart":this.assets==="ready"&&this.startCountdown();break;case"retry":this.assets==="error"&&this.loadRunners();break;case"home":this.resetRace(),this.toTitle();break;case"resume":this.paused&&this.togglePause();break;case"pause":this.togglePause();break;case"sound":this.soundOn=!this.soundOn,this.hud.soundOn=this.soundOn,this.audio.setEnabled(this.soundOn),$s("sound",this.soundOn?1:0),this.hud._topAcc=1;break;case"gel":this.useGel();break;case"board":this.state==="title"&&this.hud.showLeaderboard();break;case"help":this.state==="title"&&this.hud.showHelp();break;case"back":this.state==="title"&&this.hud.showTitle(this.best,this.assets);break;case"share":Yf();break;case"auth":kf(()=>this.refreshScreen());break}}useGel(){let e=this.player;this.state!=="running"||this.paused||e.gels<=0||(e.gels--,e.stamina=Math.min(100,e.stamina+ge.gelStamina),e.boostT=ge.gelBoostTime,this.hud.toast("\u80FD\u91CF\u80F6\uFF01",`\u4F53\u529B +${ge.gelStamina}% \xB7 \u52A0\u901F ${ge.gelBoostTime} \u79D2`,{color:"#ffc247"}),this.audio.boost(),Li(!1))}startPeak(){let e=this.player;e.hydration=0,e.peakT=ge.peakTime,e.peaks++,this.hud.toast("\u5DC5\u5CF0\u72B6\u6001\uFF01",`\u65E0\u654C\u51B2\u523A ${ge.peakTime} \u79D2 \xB7 \u969C\u788D\u4E00\u649E\u5C31\u788E`,{size:38,color:"#7fd8ff",duration:1.6}),this.audio.peak(),Li(!0)}update(e){this.time+=e,this.frame=this.frame+1|0;let t=this.player,n=this.hud;if(!this.paused){if(this.state==="countdown"){this.countdown-=e;let o=Math.ceil(this.countdown);o!==this.lastCount&&o>=1&&o<=3&&(this.lastCount=o,n.toast(String(o),o===3?"\u5404\u5C31\u5404\u4F4D":o===2?"\u9884\u5907":"",{size:110,duration:.95}),this.audio.beep(!1)),this.countdown<=0&&this.startRace()}(this.state==="running"||this.state==="finished"||this.state==="failed")&&(this.worldTime+=e),this.state==="running"?(this.raceTime+=e,this.autopilot&&this.autoDrive(),this.updatePlayer(e)):(this.state==="finished"||this.state==="failed")&&(t.speed=Math.max(0,t.speed-e*(this.state==="finished"?6.5:7)),t.s+=t.speed*e,t.follow=0,this.moveLane(t,this.laneTarget(),e),this.updateJump(t,e),this.endTimer>0&&(this.endTimer-=e,this.endTimer<=0&&(this.rivals.length&&(this.result.standings=this.buildStandings()),n.setRaceHudVisible(!1),n.showResult(this.result)))),this.state!=="title"&&this.updateRivals(e),this.animateRunners(e),this.dust.update(e),this.props.windUniform.value=this.time}if(this.terrain.update(t.s,1),this.obstacles.update(t.s,this.time),this.updateCamera(e),this.focus.set(rt(t.s+8),gt(t.s+8),-(t.s+8)),this.env.update(this.paused?0:e,t.s,this.focus,this.camera),this.terrain.setFogDensity(this.scene.fog.density),this.dust.setTint(this.env.fogColor,this.env.sunColor),this.state!=="title"){let o=this.hudData();n.updateRace(e,o)}else n.updateToastOnly(e);this.hitFlash=Math.max(0,this.hitFlash-e*1.8);let i=this.state==="running"&&t.stamina<30?(.3+.2*Math.sin(this.time*6))*(1-t.stamina/30):0,r=this.state==="running";this.hitFlash>.01||i>.01?n.setVignette(Math.max(this.hitFlash*.75,i),.85,.06,.02):r&&t.peakT>0?n.setVignette(.3+.06*Math.sin(this.time*9),.25,.7,1):r&&t.boostT>0?n.setVignette(.22,1,.55,.1):r&&t.burstT>0?n.setVignette(.14,1,.7,.3):n.setVignette(0,0,0,0),this.audio.setSpeed(this.state==="title"||this.paused?.1:cn(t.speed/15,0,1))}hudData(){let e=this.player,t=1,n=1/0,i=1/0;for(let o of this.rivals){let a=o.s-e.s;a>0?(t++,n=Math.min(n,a)):i=Math.min(i,-a)}this.state==="finished"&&(t=this.finalRank);let r;return this.state==="finished"?r="\u5DF2\u5B8C\u8D5B":this.rivals.length?t===1?r=i<1/0?`\u9886\u5148 ${Math.max(1,Math.round(i))}m`:"\u9886\u5148":r=`\u8DDD\u524D\u65B9 ${Math.max(1,Math.round(n))}m`:r=this.weekText,{time:this.raceTime,speed:e.speed,stamina:e.stamina,rank:t,total:this.rivals.length+1,gapText:r,stage:this.stage,combo:e.combo,gels:e.gels,boost:e.boostT,hydration:e.hydration,peak:e.peakT,shield:e.shield,burst:e.burstT,distance:Math.max(0,e.s),rivals:this.rivals.map(o=>o.s)}}updateJump(e,t){if(e.jumpT<0)return!1;if(e.fastFall)return e.y-=16*t,e.y<=0?(e.y=0,e.jumpT=-1,e.fastFall=!1,!0):!1;e.jumpT+=t;let n=e.jumpT/ge.jumpDuration;return n>=1?(e.y=0,e.jumpT=-1,!0):(e.y=ge.jumpHeight*4*n*(1-n),!1)}updatePlayer(e){let t=this.player,n=da(t.s),i=Math.min(ge.comboSpeedMax,t.combo*ge.comboSpeedStep),r=t.stamina>=30?1:.78+.22*(t.stamina/30),o=t.peakT>0,a=o?ge.peakBoost:t.boostT>0?ge.gelBoost:t.burstT>0?ge.burstBoost:1,l=Id(t.s)*(1+i)*r*a;t.speed<l?t.speed=Math.min(l,t.speed+(o?9:5)*e):t.speed=Math.max(l,t.speed-6*e),t.s+=t.speed*e,t.boostT=Math.max(0,t.boostT-e),t.burstT=Math.max(0,t.burstT-e),t.invuln=Math.max(0,t.invuln-e),o?(t.peakT-=e,Math.random()<e*40&&this.dust.emit(rt(t.s)+t.laneX,gt(t.s)+.05,-t.s+.4,1,.5,1.2),t.peakT<=0&&(t.peakT=0,t.invuln=Math.max(t.invuln,ge.peakGrace))):t.stamina-=ge.staminaDrain*(1+Math.max(0,n)*5)*e,this.moveLane(t,this.laneTarget(),e),this.updateJump(t,e)&&(this.audio.land(),this.dust.emit(rt(t.s)+t.laneX,gt(t.s)+.05,-t.s,7,.5,1.3),t.queuedSlide&&(t.queuedSlide=!1,t.slideT=t.slideDur=ge.slideDuration*.8,this.audio.slide())),t.slideT>0&&(t.slideT-=e,Math.random()<e*30&&this.dust.emit(rt(t.s)+t.laneX,gt(t.s)+.05,-t.s+.3,1,.5,.8));let h=Js(t.s);if(h!==this.stage&&t.s<2e3&&(this.stage=h,this.hud.toast(et[h].name,h===et.length-1?"\u6700\u540E\u4E00\u6BB5\uFF0C\u5168\u529B\u51B2\u523A\uFF01":`\u7B2C ${h+1} \u8D5B\u6BB5`,{tag:`0${h+1} / 0${et.length}`,size:34,duration:2}),this.audio.stage()),this.aidPtr<En.length&&En[this.aidPtr]-t.s<t.speed*2.6&&(this.aidPtr++,this.hud.toast("\u8865\u7ED9\u7AD9","\u6C34 \xB7 \u80FD\u91CF\u80F6 \xB7 \u767B\u5C71\u6756\u3000\u4E09\u9009\u4E00",{size:32,color:"#8fd0ff",duration:1.5})),this.checkCollisions(),this.checkItems(),this.tutorialHints(),t.s>=2e3){this.finishRace();return}t.stamina<=0&&(t.stamina=0,this.failRace())}checkCollisions(){let e=this.player,t=this.course.rows;for(;e.rowPtr<t.length&&t[e.rowPtr].s<e.s-2;){let n=t[e.rowPtr++];!n.hit&&!n.skipped&&this.onRowPassed(n)}for(let n=e.rowPtr;n<t.length;n++){let i=t[n],r=i.s-e.s;if(r>2)break;if(i.hit||i.smashed)continue;let o=0;for(let a=0;a<3&&!o;a++){let l=i.cells[a];if(!l)continue;let c=Math.abs(e.laneX-(a-1)*1.7);if(l===pt)Math.abs(r+i.off[a])<.75&&c<.95&&(o=pt);else if(l===Pt)Math.abs(r)<.42&&c<1&&e.y<.42&&(o=Pt);else if(l===ui){let h=e.slideT>ge.slideExit&&e.slideDur-e.slideT>=ge.slideEnter&&e.y<.3;Math.abs(r)<.36&&!h&&(o=ui)}}o&&(e.peakT>0?this.smashRow(i):e.invuln>0?i.skipped=!0:(i.hit=!0,this.onHit(o)))}}smashRow(e){e.smashed=!0,this.obstacles.releaseRow(e);for(let t=0;t<3;t++)e.cells[t]&&this.dust.emit(rt(e.s)+(t-1)*1.7,gt(e.s)+.5,-e.s,9,.9,2.4);this.shake=Math.max(this.shake,.5),this.audio.smash(),Li(!1),(!this.hud.toastT||this.hud.toastT<.3)&&this.hud.toast("\u649E\u788E\uFF01","",{size:30,color:"#7fd8ff",duration:.6})}onRowPassed(e){let t=this.player;t.combo++,t.bestCombo=Math.max(t.bestCombo,t.combo),t.combo%ge.burstEvery===0?(t.burstT=ge.burstTime,this.audio.boost(),this.hud.toast(t.combo>=20?"\u884C\u4E91\u6D41\u6C34\uFF01":"\u8282\u594F\u771F\u7A33\uFF01",`\u8FDE\u7EED\u95EA\u907F \xD7${t.combo} \xB7 \u52A0\u901F ${ge.burstTime} \u79D2`,{color:"#ffd9bf",duration:1.2})):t.combo===5&&this.hud.toast("\u6F02\u4EAE\uFF01",`\u8FDE\u7EED\u95EA\u907F \xD7${t.combo}`,{color:"#ffd9bf",duration:1.1})}onHit(e){let t=this.player;if(t.shield>0){t.shield--,t.invuln=1,this.shake=Math.max(this.shake,.5),this.audio.shield(),Li(!1),this.dust.emit(rt(t.s)+t.laneX,gt(t.s)+.6,-t.s-.5,8,.7,1.6),this.hud.toast("\u767B\u5C71\u6756\u6491\u4F4F\u4E86\uFF01","\u62B5\u6321\u4E00\u6B21\u78B0\u649E",{color:"#9dff8a",duration:1.2});return}t.hits++,t.combo=0,t.speed*=ge.hitSlow,t.stamina-=ge.hitStamina,t.invuln=ge.invulnerable,t.boostT=0,t.burstT=0;let n=t.hydration>0;n&&t.hydration--,t.runner.hit(),this.shake=1,this.hitFlash=1,this.audio.hit(),Li(!0),this.dust.emit(rt(t.s)+t.laneX,gt(t.s)+.6,-t.s-.5,14,.9,2);let i=e===pt?"\u649E\u4E0A\u843D\u77F3\uFF01":e===Pt?"\u88AB\u5012\u6728\u7ECA\u5012\uFF01":"\u649E\u5230\u6811\u5E72\uFF01",r=e===pt?"\u5DE6\u53F3\u6ED1\u52A8\u53D8\u9053\u7ED5\u5F00":e===Pt?"\u4E0A\u6ED1\u8DF3\u8FC7\u53BB":"\u4E0B\u6ED1\u4ECE\u5E95\u4E0B\u94BB\u8FC7";this.hud.toast(i,`\u4F53\u529B -${ge.hitStamina}%${n?" \xB7 \u6D12\u4E86\u4E00\u74F6\u6C34":""} \xB7 ${r}`,{color:"#ff6b5a",duration:1.3})}checkItems(){let e=this.player,t=this.course.items;for(;e.itemPtr<t.length&&t[e.itemPtr].s<e.s-1.2;)e.itemPtr++;for(let n=e.itemPtr;n<t.length;n++){let i=t[n];if(i.s-e.s>1.2)break;if(i.taken||Math.abs(e.laneX-i.lane*1.7)>.8)continue;let r=i.y-e.y;if(!(r<-.3||r>1.75)){if(this.obstacles.takeItem(i),i.group)for(let o=e.itemPtr;o<t.length&&t[o].s-i.s<.5;o++)t[o].group===i.group&&!t[o].taken&&this.obstacles.takeItem(t[o]);this.collect(i.type)}}}collect(e){let t=this.player,n=()=>(t.stamina=Math.min(100,t.stamina+ge.fullStamina),`\u4F53\u529B +${ge.fullStamina}%`);if(e==="gel")this.audio.gel(),t.gels<ge.maxGels?(t.gels++,this.hud.toast("\u62FF\u5230\u80FD\u91CF\u80F6",`\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u4F7F\u7528\uFF08${t.gels}/${ge.maxGels}\uFF09`,{color:"#ffc247",duration:1.1})):this.hud.toast(n(),"\u80FD\u91CF\u80F6\u5DF2\u6EE1\uFF0C\u76F4\u63A5\u8865\u7ED9",{color:"#ffc247",duration:1});else if(e==="water")if(this.audio.water(),t.stamina=Math.min(100,t.stamina+ge.waterStamina),t.hydration++,t.hydration>=ge.hydrationMax)this.startPeak();else{let i=ge.hydrationMax-t.hydration;this.hud.toast(`\u8865\u6C34 ${t.hydration}/${ge.hydrationMax}`,t.peakT>0?"\u4E3A\u4E0B\u4E00\u6B21\u5DC5\u5CF0\u72B6\u6001\u6512\u7740":`\u518D\u559D ${i} \u74F6\u8FDB\u5165\u5DC5\u5CF0\u72B6\u6001`,{color:"#7fd8ff",duration:1.1})}else e==="pole"&&(this.audio.pole(),t.shield<1?(t.shield=1,this.hud.toast("\u62FF\u5230\u767B\u5C71\u6756","\u53EF\u4EE5\u62B5\u6321\u4E00\u6B21\u78B0\u649E",{color:"#9dff8a",duration:1.2})):this.hud.toast(n(),"\u5DF2\u7ECF\u6709\u767B\u5C71\u6756\u4E86\uFF0C\u76F4\u63A5\u8865\u7ED9",{color:"#9dff8a",duration:1}))}tutorialHints(){let e=this.player,n=this.course.rows[e.rowPtr];if(!n||this.autopilot)return;let i=n.s-e.s;if(i>e.speed*1.7||i<e.speed*.9)return;let r=this.tutorial,o=n.cells.indexOf(pt)>=0;n.cells[0]===ui&&!r.over?(r.over=!0,this.hud.toast("\u2193 \u4E0B\u6ED1","\u4ECE\u6A2A\u5012\u7684\u6811\u5E72\u4E0B\u9762\u6ED1\u94F2\u94BB\u8FC7",{size:40,duration:1.5})):n.cells.indexOf(Pt)>=0&&!o&&!r.log?(r.log=!0,this.hud.toast("\u2191 \u4E0A\u6ED1","\u8DF3\u8FC7\u5012\u6728",{size:40,duration:1.5})):o&&!r.rock&&(r.rock=!0,this.hud.toast("\u2190 \u5DE6\u53F3\u6ED1\u52A8 \u2192","\u53D8\u9053\u7ED5\u5F00\u843D\u77F3",{size:34,duration:1.5}))}autoDrive(){let e=this.player,t=this.course.rows[e.rowPtr];e.gels>0&&e.boostT<=0&&e.peakT<=0&&(e.stamina<55||e.gels>=2)&&this.useGel();let n=t?t.s-e.s:1/0;if(n>e.speed*.95){let r=this.course.items;for(let o=e.itemPtr;o<r.length;o++){let a=r[o];if(a.s-e.s>e.speed*1.2||t&&a.s>t.s-4)break;if(!(a.taken||a.s<e.s+.5)){a.lane!==e.lane&&this.act(a.lane<e.lane?"left":"right");break}}return}let i=ph(t,e.lane);if(i.lane!==e.lane)this.act(i.lane<e.lane?"left":"right");else{if(n<-.5)return;i.action==="jump"&&n<e.speed*ge.jumpDuration*.5+.2&&e.jumpT<0?this.act("up"):i.action==="slide"&&n<e.speed*.3+.4&&e.slideT<=0&&this.act("down")}}updateRivals(e){let t=this.player,n=this.course.rows,i=this.state!=="countdown";this.rivals.forEach((r,o)=>{if(!i)return;if(r.finishTime>0)r.speed=Math.max(0,r.speed-4*e);else{let h=cn(r.s/2e3,0,1)*(r.cfg.curve.length-1),u=Math.min(r.cfg.curve.length-2,Math.floor(h)),f=ln(r.cfg.curve[u],r.cfg.curve[u+1],h-u),d=Id(r.s)*f*(1+.012*Math.sin(this.time*.37+o*2.1));r.speed=r.speed<d?Math.min(d,r.speed+4.6*e):Math.max(d,r.speed-4*e)}for(r.s+=r.speed*e,!r.finishTime&&r.s>=2e3&&(r.finishTime=this.worldTime);r.rowPtr<n.length&&n[r.rowPtr].s<r.s-2;)r.rowPtr++;let a=n[r.rowPtr],l=r.cfg.lane,c=a?a.s-r.s:1/0;if(a&&c<r.speed*1){let h=Math.abs(t.s-r.s)<3.5?t.lane:null;for(let f of this.rivals)f!==r&&Math.abs(f.s-r.s)<2.5&&(h=f.lane);h===r.lane&&(h=null);let u=ph(a,r.lane,h);l=u.lane,u.lane===r.lane&&c>-.5&&(u.action==="jump"&&r.jumpT<0&&c<r.speed*ge.jumpDuration*.5+.2&&(r.jumpT=0),u.action==="slide"&&r.slideT<=0&&c<r.speed*.3+.4&&(r.slideT=ge.slideDuration))}else{let h=r.s-t.s;h>-1.5&&h<6&&t.lane===l&&(l=l===0?o%2?1:-1:0);for(let u of this.rivals)u!==r&&Math.abs(u.s-r.s)<2.2&&u.lane===l&&u.s>r.s&&(l=r.lane!==u.lane?r.lane:l)}r.lane=l,r.laneX+=cn(r.lane*1.7-r.laneX,-9*e,9*e),this.updateJump(r,e),r.slideT>0&&(r.slideT-=e)})}place(e,t,n,i,r){e.root.position.set(rt(t)+n,gt(t)+i,-t),e.root.rotation.y=tr(t),e.root.rotation.x=Math.atan(da(t))*r}animateRunners(e){if(this.assets!=="ready")return;let t=this.player,n=cn((this.laneTarget()-t.laneX)*.35,-.35,.35),i="run";this.state==="title"?i="stand":this.state==="countdown"?i="ready":this.state==="finished"?i="cheer":this.state==="failed"&&(i=t.speed<2.6?"collapse":"run");let r=t.slideT>0&&t.jumpT<0;t.runner.animate(e,{mode:i,speed:t.speed,airborne:t.jumpT>=0,sliding:r,slideLeft:t.slideT,lean:n}),this.place(t.runner,t.s,t.laneX,t.y,r?.9:.5),t.runner.root.visible=t.invuln<=0||Math.floor(this.time*14)%2===0;let o=this.state==="running"&&t.peakT>0;if(this.aura.visible=o,o){let a=t.peakT<1?.25+.3*Math.abs(Math.sin(this.time*14)):.5+.08*Math.sin(this.time*9);this.aura.material.opacity=a,this.aura.position.set(rt(t.s)+t.laneX,gt(t.s)+t.y+(r?.5:1),-t.s+.25)}t.runner.footDown&&this.state==="running"&&(this.stepAlt=!this.stepAlt,this.audio.step(this.stepAlt),this.dust.emit(rt(t.s)+t.laneX,gt(t.s)+.03,-t.s+.2,2,.25,.7));for(let a of this.rivals){let l=a.s-t.s,c=l<260&&l>-30;if(a.runner.root.visible=c,!c||(a.animDt=(a.animDt||0)+e,Math.abs(l)>32&&!(this.frame&1)))continue;let h=a.animDt;a.animDt=0;let u=cn((a.lane*1.7-a.laneX)*.35,-.3,.3),f=this.state==="title"?"stand":this.state==="countdown"?"ready":a.finishTime>0?"cheer":"run",d=a.slideT>0&&a.jumpT<0;a.runner.animate(h,{mode:f,speed:a.speed,airborne:a.jumpT>=0,sliding:d,slideLeft:a.slideT,lean:u}),this.place(a.runner,a.s,a.laneX,a.y,d?.9:.5),a.runner.setShadow(l<24&&l>-12),a.runner.footDown&&Math.abs(l)<25&&this.dust.emit(rt(a.s)+a.laneX,gt(a.s)+.03,-a.s+.2,1,.25,.6)}}updateCamera(e){let t=this.player,n=this.camera,i=vv,r=Mv,o=15,a=0;if(this.state==="title"){let y=this.time*.22;i=7.2+Math.sin(y)*.6,r=2.5+Math.sin(y*.7)*.25,a=Math.sin(y*.9)*1.6,o=14}this.state==="failed"&&(i+=1.6,r+=.6);let l=t.s-i,c=rt(l)+t.laneX*.6+a,h=gt(l)+r+t.y*.22-(t.slideT>0?.25:0),u=-l,f=t.s+o,d=rt(f)+t.laneX*.3,g=gt(f)+1.7,_=-f;if(this.snapCamera)this.camPos.set(c,h,u),this.camLook.set(d,g,_),this.snapCamera=!1;else{let y=1-Math.exp(-e*9);this.camPos.x+=(c-this.camPos.x)*y,this.camPos.y+=(h-this.camPos.y)*y,this.camPos.z=u,this.camLook.x+=(d-this.camLook.x)*y,this.camLook.y+=(g-this.camLook.y)*y,this.camLook.z=_}if(n.position.copy(this.camPos),this.shake>0){this.shake=Math.max(0,this.shake-e*2.6);let y=this.shake*this.shake*.28;n.position.x+=Math.sin(this.time*71)*y,n.position.y+=Math.cos(this.time*83)*y}n.lookAt(this.camLook);let m=cn((t.speed-9)/8,0,1),p=this.baseFov+m*4+(t.peakT>0?8:t.boostT>0?5:t.burstT>0?3:0);Math.abs(p-n.fov)>.02&&(n.fov+=(p-n.fov)*Math.min(1,e*4),n.updateProjectionMatrix())}render(){let e=this.renderer;e.autoClear=!0,e.render(this.scene,this.camera),e.autoClear=!1,e.clearDepth(),e.render(this.hud.scene,this.hud.camera)}};var Fa=[{dpr:2,shadow:1024,hi:2,grass:3,ahead:10},{dpr:1.5,shadow:1024,hi:1,grass:3,ahead:10},{dpr:1.5,shadow:512,hi:1,grass:2,ahead:9},{dpr:1.25,shadow:0,hi:0,grass:2,ahead:8},{dpr:1,shadow:0,hi:-1,grass:1,ahead:7}];function Sv(){let s=yc(),e=Nf;e.addEventListener||(e.addEventListener=()=>{}),e.removeEventListener||(e.removeEventListener=()=>{}),e.style||(e.style={});let t={alpha:!1,antialias:!0,depth:!0,stencil:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"},n=e.getContext("webgl",t);if(!n)throw new Error("WebGL \u4E0D\u53EF\u7528");n.getContextAttributes||(n.getContextAttributes=()=>t);let i=new Ar({canvas:e,context:n,antialias:!0,alpha:!1,powerPreference:"high-performance"});i.outputColorSpace=nt,i.toneMapping=rc,i.toneMappingExposure=1,i.shadowMap.enabled=!0,i.shadowMap.type=ic,i.setClearColor(10466504,1);let r=0,o=Uf();o>0&&o<12?r=2:o>0&&o<22&&(r=1),typeof Tn.quality=="number"&&(r=Math.max(0,Math.min(Fa.length-1,Tn.quality)));let a=()=>{let x=Fa[r];i.setPixelRatio(Math.min(s.pixelRatio,x.dpr)),i.setSize(s.width,s.height,!1)};a();let l=new Oa(i,s),c=()=>{let x=Fa[r];l.env.setShadowQuality(x.shadow),l.terrain.setDetail(x.hi,x.grass,x.ahead),l.resize(s)};c(),Pi.__mountainDash=l,Pi.__mountainDashQuality=()=>r;let h=x=>{r=x,a(),c()};ye.onWindowResize&&ye.onWindowResize(()=>{s=yc(),a(),l.resize(s)});let u=Date.now(),f=!1;ye.onHide&&ye.onHide(()=>{f=!0,l.onHide()}),ye.onShow&&ye.onShow(()=>{f=!1,u=Date.now(),l.onShow()});try{ye.setKeepScreenOn&&ye.setKeepScreenOn({keepScreenOn:!0})}catch(x){}zf(Tc);let d=0,g=0,_=4,m=0,p=Tn.quality===void 0,y=()=>{if(vc(y),f)return;let x=Date.now(),M=(x-u)/1e3;u=x;let R=Math.min(.05,Math.max(.001,M));if(l.update(R),l.render(),p&&!l.paused){if(_>0)_-=M;else if(M<.25&&(d+=M,g++,d>=2)){let b=g/d;d=0,g=0,m=b<44?m+1:0,m>=2&&r<Fa.length-1&&(m=0,_=2,h(r+1))}}};vc(y)}try{Sv()}catch(s){console.error("[mountain-dash] \u542F\u52A8\u5931\u8D25",s)}})();
