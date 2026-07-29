import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders accessible page landmarks and media controls", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="en">/i);
  assert.match(html, /href="#main-content">Skip to main content<\/a>/i);
  assert.match(html, /<main id="main-content" tabindex="-1">/i);
  assert.match(html, /<nav aria-label="Main navigation">/i);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);
  assert.match(html, /id="skills-title">Capabilities<\/h2>/i);
  assert.match(html, /id="musicmagpie-preview"/i);
  assert.match(html, /aria-controls="musicmagpie-preview"/i);
  assert.match(html, />Play animation<\/span>/i);
  assert.doesNotMatch(html, /<video[^>]*\bautoplay\b/i);
  assert.doesNotMatch(html, /<img(?![^>]*\balt=)[^>]*>/i);
});

test("keeps keyboard focus, target size, and reduced motion safeguards", async () => {
  const [css, video] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/ProjectVideo.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(css, /:focus-visible\s*\{[^}]*outline:\s*3px/si);
  assert.match(css, /\.skip-link:focus\s*\{[^}]*transform:\s*translateY\(0\)/si);
  assert.match(css, /nav a,[\s\S]*?min-height:\s*44px/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(
    css,
    /\[data-sticky-panel\]\s*\{[^}]*position:\s*relative\s*!important/si,
  );
  assert.match(video, /prefers-reduced-motion: reduce/);
  assert.match(video, /video\.pause\(\)/);
  assert.match(video, /aria-controls="musicmagpie-preview"/);
});
