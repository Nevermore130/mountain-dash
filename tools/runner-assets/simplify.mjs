// 用 meshoptimizer 给网格减面（只在加工素材时用，游戏运行时不需要它）。
// 用法: node simplify.mjs <dir> <ratio> <error>
//   <dir>/pos.f32  顶点位置 xyz
//   <dir>/attr.f32 每顶点 5 个 float：法线 xyz + uv
//   <dir>/idx.u32  三角形索引        ->  输出 <dir>/out.u32
// meshoptimizer 是工程的 devDependency（npm install）。
import fs from 'node:fs';
import path from 'node:path';
import { MeshoptSimplifier } from 'meshoptimizer';

const [dir, ratio, error] = process.argv.slice(2);
await MeshoptSimplifier.ready;
const read = (name, T) => {
  const b = fs.readFileSync(path.join(dir, name));
  return new T(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength));
};
const pos = read('pos.f32', Float32Array);
const attr = read('attr.f32', Float32Array);
const idx = read('idx.u32', Uint32Array);
const target = Math.floor((idx.length / 3) * Number(ratio)) * 3;
// 法线权重低、UV 权重高：尽量不让贴图在表面上滑动
const [out, err] = MeshoptSimplifier.simplifyWithAttributes(idx, pos, 3, attr, 5, [0.4, 0.4, 0.4, 1.5, 1.5], null, target, Number(error), []);
fs.writeFileSync(path.join(dir, 'out.u32'), Buffer.from(out.buffer, out.byteOffset, out.byteLength));
console.log(JSON.stringify({ before: idx.length / 3, after: out.length / 3, error: err }));
