"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

// Deployment counts have to be derived, not restated: a README number that only
// agrees with another README number cannot catch the file set drifting under it.
const collectFiles = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const full = path.join(dir, entry.name);
  if (entry.isDirectory()) return collectFiles(full);
  return entry.isFile() ? [full] : [];
});

const siteFiles = () => collectFiles(path.join(root, "site"));
const relative = (file) => path.relative(root, file).split(path.sep).join("/");
const htmlPages = () => siteFiles().filter((file) => file.endsWith(".html")).map(relative).sort();
// Mirrors `grep -rIl DOMAIN-TBD site/`: binary assets never contain the token.
const domainPlaceholderFiles = () =>
  siteFiles().filter((file) => fs.readFileSync(file, "utf8").includes("DOMAIN-TBD")).map(relative).sort();

// The rendered counts come from the data through app.js. The static HTML fallbacks
// are only trustworthy if they still match what the page computes at runtime.
const computedEvidenceSummary = () => {
  const context = {
    console,
    URL,
    URLSearchParams,
    window: {},
    document: {
      addEventListener() {},
      querySelector() { return null; },
      querySelectorAll() { return []; }
    }
  };
  context.globalThis = context;
  vm.createContext(context);
  vm.runInContext(read("site/assets/data/products.js"), context);
  vm.runInContext(
    read("site/assets/js/app.js").replace(
      /\}\)\(\);\s*$/,
      "globalThis.__evidenceSummary = summarizeEvidence(products); })();"
    ),
    context
  );
  return context.__evidenceSummary;
};

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

test("deployment checklist counts match the files on disk and the sitemap", () => {
  const readme = read("site/README.md");
  const pages = htmlPages();
  const placeholders = domainPlaceholderFiles();

  assert.match(readme, new RegExp(`${pages.length} HTML pages`));
  assert.match(readme, /README, `robots\.txt`, and `sitemap\.xml`/);
  assert.match(readme, new RegExp(`${placeholders.length} files`));
  assert.match(readme, /grep -rIl DOMAIN-TBD site\/ \| wc -l/);

  // A README number is only a checklist if it moves when the file set moves.
  assert.doesNotMatch(readme, new RegExp(`${pages.length + 1} HTML pages`));
  assert.doesNotMatch(readme, new RegExp(`${pages.length - 1} HTML pages`));

  const sitemap = read("site/sitemap.xml");
  const entries = sitemap.match(/<url>[\s\S]*?<\/url>/g) || [];
  assert.equal(entries.length, pages.length, "every HTML page needs a sitemap entry");
  for (const entry of entries) {
    assert.match(entry, /<loc>https:\/\/DOMAIN-TBD\/[^<]*<\/loc>/, entry);
    assert.match(entry, /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/, entry);
  }
  const located = entries
    .map((entry) => entry.match(/<loc>https:\/\/DOMAIN-TBD\/([^<]*)<\/loc>/)?.[1])
    .map((suffix) => `site/${suffix}`)
    .sort();
  assert.deepEqual(located, pages);
});

test("product index presents exactly three cautious, linked evidence examples", () => {
  const html = read("site/products/index.html");
  const section = html.match(/<section[^>]+data-evidence-examples[\s\S]*?<\/section>/)?.[0] || "";

  assert.ok(section, "evidence section should exist");
  assert.ok(
    html.indexOf("data-evidence-examples") < html.indexOf("data-product-index"),
    "evidence examples belong above the product grid"
  );
  assert.equal((section.match(/<article\b/g) || []).length, 3);
  assert.match(section, /href="\.\/dailies-total1\.html"/);
  assert.match(section, /href="\.\/biofinity\.html"/);
  assert.match(section, /href="\.\/biofinity-energys\.html"/);
  assert.doesNotMatch(section, /href="\.\/products\//);
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

  // The header 검색 link and the home router card both land on #product-search, so
  // that anchor must stay outside the filter wrapper that ships hidden.
  const anchorAt = html.indexOf('id="product-search"');
  assert.ok(anchorAt > -1 && anchorAt < controlsAt, "#product-search must resolve above the hidden filters");
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /data-product-no-results[^>]*hidden/);
  const grid = html.match(/<div class="cards-grid cards-wide" data-product-index>[\s\S]*?<\/div>\s*<section class="source-section"/)?.[0] || "";
  assert.equal((grid.match(/<article class="card">/g) || []).length, 20);
});

test("product index exposes the complete verification summary without JavaScript", () => {
  const page = "site/products/index.html";
  const html = read(page);
  const summary = html.match(/<dl[^>]+data-evidence-summary[\s\S]*?<\/dl>/)?.[0] || "";

  assert.ok(summary, `${page} should contain an evidence summary`);
  for (const [key, value] of Object.entries(computedEvidenceSummary())) {
    assert.match(summary, new RegExp(`data-summary-value="${key}"[^>]*>${value}<`));
  }
  assert.match(summary, /공식 자료에서 미확인/);
});

test("home is a three-path router whose trust line keeps a correct unknown fallback", () => {
  const html = read("site/index.html");
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] || "";

  assert.ok(main, "home should have a main region");
  assert.equal((main.match(/<h1[ >]/g) || []).length, 1);
  assert.equal((main.match(/<article class="card router-card">/g) || []).length, 3);
  assert.match(main, /href="\.\/decoder\/index\.html"/);
  assert.match(main, /href="\.\/products\/index\.html#product-search"/);
  assert.match(main, /href="\.\/compare\/index\.html"/);
  assert.doesNotMatch(main, /<button/);
  assert.match(main, /최종 피팅은 전문가에게 확인하세요/);

  const trustLine = main.match(/<p[^>]+data-evidence-summary[\s\S]*?<\/p>/)?.[0] || "";
  assert.ok(trustLine, "home should carry the trust line as an evidence summary region");
  assert.match(
    trustLine,
    new RegExp(`data-summary-value="unknown"[^>]*>${computedEvidenceSummary().unknown}<`)
  );
});

test("no page still links to the removed home decoder anchor", () => {
  const pages = htmlPages();
  assert.equal(pages.length, 40, "site should contain the full page set");

  // Any resurrected home fragment counts, not just the one literal that was removed.
  const offenders = pages.filter((page) => /href="[^"]*#(?:input-)?decoder"/.test(read(page)));
  assert.deepEqual(offenders, []);
});

test("every page's nav points at the decoder page at its own depth", () => {
  const pages = htmlPages();
  assert.equal(pages.length, 40);

  for (const page of pages) {
    const html = read(page);
    const header = html.match(/<header[\s\S]*?<\/header>/)?.[0] || "";
    assert.ok(header, `${page} should carry the shared header`);

    // The old label collided with the home router card and pointed at the home page.
    assert.doesNotMatch(html, /렌즈 숫자 해석/, page);

    const depth = page === "site/index.html" ? "./decoder/index.html" : "../decoder/index.html";
    const links = header.match(/<a href="[^"]*decoder\/index\.html"[^>]*>포장 숫자 해석<\/a>/g) || [];
    assert.equal(links.length, 2, `${page} needs the desktop and mobile decoder nav links`);
    for (const link of links) assert.match(link, new RegExp(`href="${depth.replace(/[.\/]/g, "\$&")}"`), page);

    const current = links.filter((link) => link.includes('aria-current="page"'));
    assert.equal(current.length, page === "site/decoder/index.html" ? 2 : 0, page);

    // Below 900px the desktop nav is hidden and the menu button needs JavaScript,
    // so a reader without it would otherwise see no nav links at all.
    assert.match(html, /<noscript><style>[\s\S]*?\.mobile-nav\[hidden\] \{ position: static; display: grid; \}[\s\S]*?<\/style><\/noscript>/, page);
  }
});

test("the decoder page carries the whole input tool and its no-JS fallbacks", () => {
  const html = read("site/decoder/index.html");
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] || "";
  assert.ok(main, "the decoder page should have a main region");
  assert.equal((main.match(/<h1[ >]/g) || []).length, 1);

  // The form and everything DESIGN.md 5 requires to travel with it.
  assert.match(main, /id="input-decoder"/);
  assert.match(main, /<form[^>]+data-input-decoder[^>]*data-product-base="\.\.\/products\/"/);
  for (const field of ["bc", "dia", "water", "dkt", "material", "replacement"]) {
    assert.match(main, new RegExp(`data-input-field="${field}"`), field);
    assert.match(main, new RegExp(`data-error-for="${field}"[^>]*hidden`), field);
  }
  assert.equal((main.match(/data-input-field=/g) || []).length, 6);
  assert.equal((main.match(/data-error-for=/g) || []).length, 6);
  assert.match(main, /data-input-form-error[^>]*hidden/);
  assert.match(main, /data-input-reset/);
  assert.match(main, /<p class="input-note">입력한 값은 이 브라우저 화면 안에서만 계산됩니다\. 저장하지 않고, 어디로도 전송하지 않습니다\.<\/p>/);
  assert.match(main, /<section[^>]+data-input-result[^>]*aria-live="polite"/);

  // No-JS: the controls cannot be operated, the result panel makes no promise,
  // and the noscript explains why.
  const form = main.match(/<form[^>]+data-input-decoder[\s\S]*?<\/form>/)?.[0] || "";
  assert.ok(form, "the decoder page should carry the input form");
  assert.equal((form.match(/<(?:input|select|button)\b[^>]*>/g) || []).length, 8);
  for (const control of form.match(/<(?:input|select|button)\b[^>]*>/g) || []) {
    assert.match(control, /\sdisabled\b/, control);
  }
  assert.match(main, /<section[^>]+data-input-result[^>]*hidden/);
  const noscript = main.match(/<noscript>[\s\S]*?<\/noscript>/)?.[0] || "";
  assert.ok(noscript, "the decoder page should explain the JavaScript requirement");
  assert.match(noscript, /JavaScript/);

  // The six input fields cannot cover nine notations, so every term page stays
  // reachable from the page body, not only from inside <noscript>.
  const withoutNoscript = main.replace(/<noscript>[\s\S]*?<\/noscript>/g, "");
  for (const field of ["bc", "dia", "water", "material", "dkt", "thickness", "replacement", "permit", "uv"]) {
    assert.match(withoutNoscript, new RegExp(`href="\.\./terms/${field}\.html"`), field);
  }
});
