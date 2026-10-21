import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const root = resolve(process.cwd(), process.argv[2] ?? "out");
const port = Number(process.argv[3] ?? 4173);

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".pdf", "application/pdf"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
]);

function findFile(pathname) {
  const relativePath = normalize(decodeURIComponent(pathname)).replace(/^[/\\]+/, "");
  const candidate = resolve(root, relativePath);

  if (candidate !== root && !candidate.startsWith(`${root}${sep}`)) {
    return null;
  }

  if (existsSync(candidate) && statSync(candidate).isFile()) {
    return candidate;
  }

  const indexFile = join(candidate, "index.html");
  return existsSync(indexFile) && statSync(indexFile).isFile() ? indexFile : null;
}

const server = createServer((request, response) => {
  const pathname = new URL(request.url ?? "/", `http://${request.headers.host}`).pathname;
  const file = findFile(pathname);

  if (!file) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const basename = file.slice(file.lastIndexOf(sep) + 1);
  const contentType =
    basename === "opengraph-image" || basename === "twitter-image"
      ? "image/png"
      : (contentTypes.get(extname(file)) ?? "application/octet-stream");

  response.writeHead(200, {
    "Cache-Control": "no-store",
    "Content-Type": contentType,
  });
  createReadStream(file).pipe(response);
});

server.listen(port, "127.0.0.1");

process.on("SIGTERM", () => server.close());
