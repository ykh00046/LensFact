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
  assert.match(readme, /29 HTML pages/);
  assert.match(readme, /README, `robots\.txt`, and `sitemap\.xml`/);
  assert.match(readme, /32 files/);
  assert.match(readme, /grep -rIl DOMAIN-TBD site\/ \| wc -l/);
});
