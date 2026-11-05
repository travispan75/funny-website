import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";

const root = resolve("out");
const index = await readFile(resolve(root, "index.html"), "utf8");
const basePath = index.match(/src="([^"]*)\/_next\//)?.[1] ?? "";
const portIndex = process.argv.indexOf("--port");
const port = Number(portIndex >= 0 ? process.argv[portIndex + 1] : process.env.PORT ?? 3000);
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".ttf": "font/ttf",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=utf-8",
};

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    if (basePath && (pathname === "/" || pathname === basePath)) {
      response.writeHead(302, { Location: `${basePath}/` }).end();
      return;
    }
    if (basePath && !pathname.startsWith(`${basePath}/`)) {
      response.writeHead(404).end();
      return;
    }
    let file = resolve(root, `.${pathname.slice(basePath.length)}`);
    if (file !== root && !file.startsWith(`${root}${sep}`)) {
      response.writeHead(403).end();
      return;
    }
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    const body = await readFile(file);
    response.writeHead(200, { "Content-Type": contentTypes[extname(file)] ?? "application/octet-stream" });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    response.writeHead(404).end();
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Preview: http://localhost:${port}${basePath}/`);
});
