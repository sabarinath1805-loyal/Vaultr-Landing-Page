const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.webm': 'video/webm', '.mp4': 'video/mp4', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.webmanifest': 'application/manifest+json; charset=utf-8' };

http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const requested = pathname === '/' ? '/index.html' : pathname;
  const file = path.resolve(root, `.${requested}`);
  if (!file.startsWith(root)) { response.writeHead(403).end('Forbidden'); return; }
  fs.readFile(file, (error, content) => {
    if (!error) {
      response.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
      response.end(content);
      return;
    }
    if (error.code !== 'ENOENT') { response.writeHead(500).end('Not found'); return; }
    const fallback = path.join(root, '404.html');
    fs.readFile(fallback, (fallbackError, fallbackContent) => {
      if (fallbackError) { response.writeHead(404).end('Not found'); return; }
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(fallbackContent);
    });
  });
}).listen(4173, '127.0.0.1');
