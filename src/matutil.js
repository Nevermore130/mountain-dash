// 材质小工具
//
// 为了在微信小游戏各端都走同一条稳妥的路径，本项目的贴图一律不标记 sRGB 色彩空间
// （WebGL1 下 three.js 处理 sRGB 贴图要么依赖 EXT_sRGB 扩展且不能生成 mipmap，
//  要么退回到需要 DOM 的 CPU 转换），而是在片元着色器里自己做 sRGB → 线性的解码。

export function decodeMap(material) {
  const prev = material.onBeforeCompile;
  const prevKey = material.customProgramCacheKey;
  material.onBeforeCompile = (shader, renderer) => {
    if (prev) prev(shader, renderer);
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <map_fragment>',
      `#include <map_fragment>
      #ifdef USE_MAP
        diffuseColor.rgb = pow(max(diffuseColor.rgb, vec3(0.0)), vec3(2.2));
      #endif`
    );
  };
  const hasKey = Object.prototype.hasOwnProperty.call(material, 'customProgramCacheKey');
  material.customProgramCacheKey = () => (hasKey ? prevKey.call(material) : '') + '|srgbmap';
  return material;
}
