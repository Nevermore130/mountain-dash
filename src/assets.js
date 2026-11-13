// 素材加载：只用微信小游戏里有的接口（浏览器预览时由 preview/wx-shim.js 模拟同一套接口）
//
//  - 二进制文件：wx.getFileSystemManager().readFile 读成 ArrayBuffer
//  - 图片：wx.createImage()
//  - 模型：GLTFLoader.parse(ArrayBuffer)。glb 里不带贴图，所以 three 自己那条依赖
//    document / Blob URL / ImageBitmap / fetch 的贴图加载路径完全不会被走到
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { G, WX } from './platform.js';

// GLTFLoader 解析 glb 里的 JSON 段要用 TextDecoder，个别运行环境没有，这里补一个只管 UTF-8 的
/* global TextDecoder */
if (typeof TextDecoder === 'undefined') {
  G.TextDecoder = class {
    decode(input) {
      const u8 = input instanceof Uint8Array ? input : new Uint8Array(input);
      let out = '';
      let i = 0;
      while (i < u8.length) {
        const c = u8[i++];
        let cp = c;
        if (c >= 0xf0) cp = ((c & 7) << 18) | ((u8[i++] & 63) << 12) | ((u8[i++] & 63) << 6) | (u8[i++] & 63);
        else if (c >= 0xe0) cp = ((c & 15) << 12) | ((u8[i++] & 63) << 6) | (u8[i++] & 63);
        else if (c >= 0xc0) cp = ((c & 31) << 6) | (u8[i++] & 63);
        if (cp > 0xffff) {
          cp -= 0x10000;
          out += String.fromCharCode(0xd800 + (cp >> 10), 0xdc00 + (cp & 0x3ff));
        } else out += String.fromCharCode(cp);
      }
      return out;
    }
  };
}

// path 相对小游戏代码包根目录，例如 'assets/runners/player.glb'
// （glb / jpg / json 都在微信小游戏代码包的文件类型白名单里，白名单外的扩展名不会被上传）
export function readBinary(path) {
  return new Promise((resolve, reject) => {
    WX.getFileSystemManager().readFile({
      filePath: path,
      success: (res) => resolve(res.data),
      fail: (err) => reject(new Error(`读取 ${path} 失败: ${(err && err.errMsg) || err}`)),
    });
  });
}

// 贴图必须是 2 的幂尺寸（WebGL1 下才能用 mipmap）；不标记 sRGB，由材质里的 decodeMap 在着色器里解码
export function loadTexture(path) {
  return new Promise((resolve, reject) => {
    const img = WX.createImage();
    img.onload = () => {
      const tex = new THREE.Texture(img);
      tex.colorSpace = THREE.NoColorSpace;
      tex.flipY = false; // glTF 的 UV 原点在左上
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.needsUpdate = true;
      resolve(tex);
    };
    img.onerror = () => reject(new Error(`加载图片 ${path} 失败`));
    img.src = path;
  });
}

export function loadGLB(path) {
  return readBinary(path).then(
    (buffer) =>
      new Promise((resolve, reject) => {
        new GLTFLoader().parse(buffer, '', resolve, (err) => reject(new Error(`解析 ${path} 失败: ${(err && err.message) || err}`)));
      })
  );
}
