// 浏览器预览用的静态服务器：http://localhost:5173/preview/
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 5173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
};

http
  .createServer((req, res) => {
    let rel = decodeURIComponent(req.url.split('?')[0]);
    if (rel === '/') {
      res.writeHead(302, { Location: '/preview/' });
      return res.end();
    }
    if (rel.endsWith('/')) rel += 'index.html';
    const file = path.join(root, rel);
    if (!file.startsWith(root)) {
      res.writeHead(403);
      return res.end();
    }
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end('not found');
      }
      res.writeHead(200, {
        'Content-Type': types[path.extname(file)] || 'application/octet-stream',
        'Cache-Control': 'no-store',
      });
      res.end(data);
    });
  })
  .listen(port, () => console.log(`[preview] http://localhost:${port}/preview/`));
