"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

test("product index scope and metadata consistently describe 20 identified products", () => {
  const html = read("site/products/index.html");
  assert.doesNotMatch(html, /한국에서 유통되는 투명 구면 렌즈 20개/);
  assert.match(html, /한국 공식 자료 또는 식약처 등록으로 제품 정체성을 확인한 투명 구면 렌즈 20개/);
  assert.match(html, /일부 제품은 현재 판매 여부를 확인하지 못했습니다/);

  const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1] || "";
  const openGraph = html.match(/<meta property="og:description" content="([^"]+)">/)?.[1] || "";
  assert.match(description, /20개/);
  assert.match(openGraph, /20개/);

  const jsonLdText = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1];
  assert.ok(jsonLdText);
  const jsonLd = JSON.parse(jsonLdText);
  assert.match(jsonLd.description, /20개/);
  assert.equal(jsonLd.mainEntity.numberOfItems, 20);
  assert.equal(jsonLd.mainEntity.itemListElement.length, 20);
});

test("deployment checklist derives the 32-file DOMAIN-TBD expectation", () => {
  const readme = read("site/README.md");
  assert.match(readme, /39 HTML pages/);
  assert.match(readme, /README, `robots\.txt`, and `sitemap\.xml`/);
  assert.match(readme, /42 files/);
  assert.match(readme, /grep -rIl DOMAIN-TBD site\/ \| wc -l/);
});

test("home presents exactly three cautious, linked evidence examples", () => {
  const html = read("site/index.html");
  const section = html.match(/<section[^>]+data-evidence-examples[\s\S]*?<\/section>/)?.[0] || "";

  assert.ok(section, "evidence section should exist");
  assert.equal((section.match(/<article\b/g) || []).length, 3);
  assert.match(section, /products\/dailies-total1\.html/);
  assert.match(section, /products\/biofinity\.html/);
  assert.match(section, /products\/biofinity-energys\.html/);
  assert.match(section, /코어 33%/);
  assert.match(section, /표면 80% 이상/);
  assert.match(section, /170[^<]*\/[^<]*171/);
  assert.match(section, /170[^<]*\/[^<]*110[^<]*\/[^<]*171/);
  assert.match(section, /측정 위치/);
  assert.match(section, /출처|조건/);
  assert.match(section, /차이를[^<]*(보존|그대로)/);
  assert.doesNotMatch(section, /출처가 틀렸|우승|추천 제품|순위를 매깁니다/);
});

test("product controls are progressive and static cards remain complete", () => {
  const html = read("site/products/index.html");
  const controlsAt = html.indexOf("data-product-filters");
  const gridAt = html.indexOf("data-product-index");

  assert.ok(controlsAt > -1 && controlsAt < gridAt);
  assert.match(html, /data-product-filters[^>]*hidden/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /data-product-no-results[^>]*hidden/);
  const grid = html.match(/<div class="cards-grid cards-wide" data-product-index>[\s\S]*?<\/div>\s*<section class="source-section"/)?.[0] || "";
  assert.equal((grid.match(/<article class="card">/g) || []).length, 20);
});

test("home and product index expose the complete verification summary without JavaScript", () => {
  for (const page of ["site/index.html", "site/products/index.html"]) {
    const html = read(page);
    const summary = html.match(/<dl[^>]+data-evidence-summary[\s\S]*?<\/dl>/)?.[0] || "";

    assert.ok(summary, `${page} should contain an evidence summary`);
    for (const [key, value] of Object.entries({ products: 20, fields: 180, verified: 157, conflict: 10, unknown: 13, sources: 498 })) {
      assert.match(summary, new RegExp(`data-summary-value="${key}"[^>]*>${value}<`));
    }
    assert.match(summary, /공식 자료에서 미확인/);
  }
});
