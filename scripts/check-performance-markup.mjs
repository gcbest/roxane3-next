import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

for (const page of ["about", "contact"]) {
  const html = await readFile(new URL(`../dist/${page}/index.html`, import.meta.url), "utf8");

  assert.doesNotMatch(html, /<iframe\b/, `${page} must not load third-party iframes initially`);
  assert.match(html, /data-deferred-embed/, `${page} must provide a click-to-load embed facade`);
}

console.log("Performance markup checks passed.");
