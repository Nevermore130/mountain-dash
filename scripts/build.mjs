// 把 src/ 打包成微信小游戏入口 minigame/game.js
// 用法: node scripts/build.mjs [--dev] [--watch] [--serve]
import { context, build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = new Set(process.argv.slice(2));
const dev = args.has('--dev');

const options = {
  entryPoints: [path.join(root, 'src/main.js')],
  outfile: path.join(root, 'minigame/game.js'),
  bundle: true,
  format: 'iife',
  // 小游戏运行时没有 window/document，产物里只依赖 wx 与 GameGlobal
  platform: 'neutral',
  mainFields: ['module', 'main'],
  target: ['es2017'],
  minify: !dev,
  sourcemap: dev ? 'inline' : false,
  legalComments: 'none',
  logLevel: 'info',
  define: { __DEV__: dev ? 'true' : 'false' },
};

if (args.has('--watch')) {
  const ctx = await context(options);
  await ctx.watch();
  console.log('[build] watching src/ ...');
  if (args.has('--serve')) await import('./serve.mjs');
} else {
  await build(options);
}
