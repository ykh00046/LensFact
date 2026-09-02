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
// site/404.html is the one page that is deliberately not in sitemap.xml. It is served
// for every unmatched path, so listing it would hand a crawler a URL whose only content
// is an error, and it carries no canonical for the same reason. Everything else on disk
// must still appear, so the exemption is a named list rather than a filter that would
// silently swallow a page somebody forgot to register.
const SITEMAP_EXEMPT = ["site/404.html"];
const sitemapPages = () => htmlPages().filter((page) => !SITEMAP_EXEMPT.includes(page));
// Mirrors `grep -rIl DOMAIN-TBD site/`: binary assets never contain the token.
const domainPlaceholderFiles = () =>
  siteFiles().filter((file) => fs.readFileSync(file, "utf8").includes("DOMAIN-TBD")).map(relative).sort();

// There is no disclosure UI because there is nothing left to disclose: the catalogue no
// longer carries a product from a manufacturer the operator has an interest in. The two
// halves are one fact, so they are asserted together — a disclosure banner reappearing
// and the exclusion rule lapsing are the same failure seen from opposite sides.
test("no operator-employer disclosure UI, because the exclusion rule holds in the data", () => {
  const publicFiles = [
    ...siteFiles(),
    path.join(root, "tools", "build-pair-pages.js")
  ].filter((file) => !/\.(?:gif|jpe?g|png|webp|woff2?)$/i.test(file));
  const disclosureMarkers = /운영자 근무처 제품|이해관계 공시|운영자와 이해관계 공개|\bcoi(?:-banner|-chip)?\b|--color-coi/iu;
  const offenders = publicFiles
    .filter((file) => disclosureMarkers.test(fs.readFileSync(file, "utf8")))
    .map(relative)
    .sort();

  assert.deepEqual(offenders, []);

  // The rule, not the string: a product is excluded because of who makes or distributes
  // it, so the check reads the parsed records rather than grepping for a company name a
  // future entry could spell differently.
  const excluded = "(주)인터로조";
  // Array.from: pairApi.products lives in the vm realm, and a foreign-realm array never
  // deep-strict-equals a local one, however identical its contents.
  assert.deepEqual(
    Array.from(
      pairApi.products.filter((product) => product.maker === excluded || product.distributor === excluded),
      (product) => product.id
    ),
    [],
    "a product from a manufacturer the operator has an interest in is on file; the editorial rule in site/policy/editorial.html says it is not covered"
  );

  // The rule is a standing policy the site states, not an unwritten habit. It may not
  // name the company or say the operator works anywhere.
  const editorial = read("site/policy/editorial.html");
  assert.match(editorial, /이해관계가 있는 제조사의 제품은 다루지 않습니다/);
  assert.doesNotMatch(editorial, /인터로조|근무|재직|직장|고용/);
});

// The disclosure test above reads parsed records and one policy file. Neither can see a
// stray literal in served markup — which is exactly how the excluded product's tokens
// would come back: in a hand-typed sentence, a filename, a comment, an address. So the
// spelling is checked separately, over every served byte, in every form the product and
// its manufacturer are written in: Korean, English, romanized, and the mixed-case forms
// a search engine treats as the same word.
//
// Written in Node on purpose. The obvious shell equivalent -- `grep -i -e a -e b file` --
// aborts in this repository's environment (SIGABRT, rc 134, no output), and an aborted
// grep is indistinguishable from a clean scan to a caller that only checks for absence of
// output. A zero-hit claim has to come from a scan that can also prove it found something.
const EXCLUDED_TOKENS = /clalen|클라렌|인터로조|interojo|o2o2|오투오투|그랩수/iu;

// The one deliberate exception, and it is not settled. The public contact address still
// carries the token; whether the site should be reachable at an address bearing that
// brand is an open owner decision (see docs/verification/CORRECTIONS.md). Until it is
// made, the address is pinned rather than waved through: the exact string is subtracted
// before the sweep, and its occurrence count is asserted, so a new occurrence fails here
// and removing the address fails here too -- which is the point. When the decision lands,
// this constant goes with it.
const PENDING_CONTACT_ADDRESS = "interojo679@gmail.com";
const PENDING_CONTACT_OCCURRENCES = 3; // site/about/index.html (mailto href + link text), site/README.md note

const servedTextFiles = () => [
  ...siteFiles(),
  path.join(root, "tools", "build-pair-pages.js")
].filter((file) => !/\.(?:gif|jpe?g|png|svg|webp|woff2?|ico|ttf|otf)$/i.test(file));

test("the excluded product and its manufacturer are not spelled anywhere the site serves", () => {
  // Positive control first. A sweep that cannot find a string known to be present is not
  // evidence of anything, and this is the failure mode the shell version hides.
  const control = servedTextFiles().filter((file) => /LensFact/.test(fs.readFileSync(file, "utf8")));
  assert.ok(control.length > 10, "the sweep read no files; a zero-hit result would mean nothing");

  const offenders = servedTextFiles()
    .filter((file) => EXCLUDED_TOKENS.test(fs.readFileSync(file, "utf8").split(PENDING_CONTACT_ADDRESS).join("")))
    .map(relative)
    .sort();
  assert.deepEqual(offenders, [], "a removed product's or its manufacturer's name is published on the site");

  const occurrences = servedTextFiles()
    .reduce((total, file) => total + fs.readFileSync(file, "utf8").split(PENDING_CONTACT_ADDRESS).length - 1, 0);
  assert.equal(
    occurrences,
    PENDING_CONTACT_OCCURRENCES,
    "the pending contact address moved; either it was changed (retire PENDING_CONTACT_ADDRESS) or it spread"
  );
});

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

test("product index scope and metadata consistently describe 19 identified products", () => {
  const html = read("site/products/index.html");
  assert.doesNotMatch(html, /한국에서 유통되는 투명 구면 렌즈 19개/);
  assert.match(html, /한국 공식 자료 또는 식약처 등록으로 제품 정체성을 확인한 투명 구면 렌즈 19개/);
  assert.match(html, /일부 제품은 현재 판매 여부를 확인하지 못했습니다/);

  const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1] || "";
  const openGraph = html.match(/<meta property="og:description" content="([^"]+)">/)?.[1] || "";
  assert.match(description, /19개/);
  assert.match(openGraph, /19개/);

  const jsonLdText = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1];
  assert.ok(jsonLdText);
  const jsonLd = JSON.parse(jsonLdText);
  assert.match(jsonLd.description, /19개/);
  assert.equal(jsonLd.mainEntity.numberOfItems, 19);
  assert.equal(jsonLd.mainEntity.itemListElement.length, 19);
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
  const indexable = sitemapPages();
  assert.equal(entries.length, indexable.length, "every indexable HTML page needs a sitemap entry");
  for (const entry of entries) {
    assert.match(entry, /<loc>https:\/\/DOMAIN-TBD\/[^<]*<\/loc>/, entry);
    assert.match(entry, /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/, entry);
  }
  const located = entries
    .map((entry) => entry.match(/<loc>https:\/\/DOMAIN-TBD\/([^<]*)<\/loc>/)?.[1])
    .map((suffix) => `site/${suffix}`)
    .sort();
  assert.deepEqual(located, indexable);

  // A page that publishes its own last-modified date publishes it twice: once in the
  // sitemap a crawler reads, once in the JSON-LD a crawler also reads. Two machine-
  // readable answers to one question have to agree, and only a cross-check can see it —
  // each side on its own is a well-formed date. Pages carrying no dateModified are left
  // alone; the entry is only checked against a claim the page actually makes.
  for (const entry of entries) {
    const suffix = entry.match(/<loc>https:\/\/DOMAIN-TBD\/([^<]*)<\/loc>/)?.[1];
    const lastmod = entry.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    const pageHtml = read(`site/${suffix}`);
    const declared = [...pageHtml.matchAll(/"dateModified"\s*:\s*"([^"]+)"/g)].map((hit) => hit[1]);
    for (const value of declared) {
      assert.equal(value, lastmod, `site/${suffix} declares dateModified ${value} but sitemap.xml says ${lastmod}`);
    }
  }

  // The exemption has to name a page that exists, or it is a hole rather than a decision.
  for (const page of SITEMAP_EXEMPT) {
    assert.ok(pages.includes(page), `${page} is exempted from the sitemap but is not on disk`);
  }
});

// GitHub Pages serves site/404.html for every unmatched path under the site. Without the
// file a mistyped URL lands on GitHub's own error page: the one screen a reader could
// reach that is in English, carries none of the site's boundaries, and offers no way back
// in. The shared header and footer come with the same assertions every other page gets,
// so what is left to hold here is that the page exists, stays out of the sitemap, does
// not claim to be a real URL, and still names every route into the site.
test("the 404 page carries the shared chrome and leads back into the site", () => {
  const page = "site/404.html";
  assert.ok(htmlPages().includes(page), "site/404.html must exist for GitHub Pages to serve it");
  const html = read(page);

  assert.match(html, /^<!doctype html>\n<html lang="ko">\n/);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);

  // An error page is not a page. A canonical would tell a crawler this URL is the real
  // address of something, and it is why DOMAIN-TBD does not appear in the file at all.
  assert.doesNotMatch(html, /<link rel="canonical"/);
  assert.doesNotMatch(html, /DOMAIN-TBD/);

  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] || "";
  assert.ok(main, "the 404 page should have a main region");
  for (const href of [
    "./decoder/index.html",
    "./products/index.html#product-search",
    "./compare/index.html",
    "./products/index.html",
    "./terms/index.html"
  ]) {
    assert.ok(main.includes(`href="${href}"`), `the 404 page should link ${href}`);
  }

  // Served for /products/typo.html, this page's relative links and its stylesheet would
  // resolve one directory too deep. The inline resolver recovers the site root from the
  // closed set of top-level directories, so that list has to be the directories that are
  // actually on disk — a new section added to the site would otherwise leave the resolver
  // silently unable to recognise it.
  const declared = JSON.parse(html.match(/var DIRS = (\[[^\]]*\]);/)?.[1] || "[]");
  const onDisk = fs.readdirSync(path.join(root, "site"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  assert.deepEqual([...declared].sort(), onDisk, "the 404 root resolver no longer lists the directories under site/");

  // Recovering the root is not enough on its own. The preload scanner reads static hrefs
  // and resolves them against the requested URL before the parser reaches the resolver, so
  // any subresource left in the markup is fetched from the wrong directory and 404s —
  // three dead requests and three console errors on every off-root 404, downloading this
  // page's own body each time. The tags are written by the resolver with the root already
  // prefixed; the <noscript> copy keeps the no-JS rendering and is never speculated on.
  const withoutNoscript = html.replace(/<noscript>[\s\S]*?<\/noscript>/g, "");
  assert.ok(/<noscript>[\s\S]*assets\/css\/style\.css/.test(html), "the 404 page needs its no-JS stylesheet fallback");
  assert.doesNotMatch(
    withoutNoscript,
    /(?:href|src)="\.\/assets\//,
    "a subresource URL is back in site/404.html's static markup; the preload scanner will fetch it from the requested directory"
  );
});

// DELETE THIS TEST IN THE LAUNCH COMMIT. It exists only for the preview deployment.
//
// Deleting it also deletes the only check on the prose that describes the block, so
// three sentences go stale in the same commit unless they are edited with it. They are
// listed in pre-publish checklist step 4 part 4 in site/README.md, and they are:
//   site/README.md   - the robots.txt / sitemap.xml bullet under Structure
//   site/README.md   - the Deployment paragraph's "holds the preview noindex meta" clause
//   .github/workflows/deploy-pages.yml - the same clause in the comment above the test step
//
// site/robots.txt cannot block the preview: GitHub Pages serves this repository as a
// project site under a path prefix, so crawlers fetch robots.txt from the origin root,
// which this repository does not control. The per-page meta is therefore the only block
// actually in force, and it is only worth anything if it is on every page without
// exception — one page missing it is one page Google may index under a domain that is
// not final. Removing the meta is the launch step of the pre-publish checklist in
// site/README.md — the last step there, not the first, because every check above it has
// to pass while the site is still blocked. This test must go in that same change, or the
// launch commit cannot pass.
test("every page carries the preview noindex meta directly under the viewport line", () => {
  const pages = htmlPages();
  assert.equal(pages.length, 52, "site should contain the full page set");

  const meta = '<meta name="robots" content="noindex, nofollow">';
  const viewport = '<meta name="viewport" content="width=device-width, initial-scale=1">';
  const missing = [];
  const misplaced = [];
  for (const page of pages) {
    const html = read(page);
    const occurrences = html.split(meta).length - 1;
    if (occurrences !== 1) {
      missing.push(`${page} (${occurrences} occurrences)`);
      continue;
    }
    // Placement is uniform on purpose: the launch commit deletes one known line per
    // page, so a stray copy somewhere else in the head would survive that edit.
    if (!html.includes(`${viewport}\n  ${meta}\n  <title>`)) misplaced.push(page);
  }
  assert.deepEqual(missing, [], "every page needs exactly one noindex meta");
  assert.deepEqual(misplaced, [], "the meta belongs between the viewport line and the title");

  // The eight pair pages are generated, so the template has to carry it too — otherwise
  // the next `node tools/build-pair-pages.js` run silently strips the block.
  assert.ok(read("tools/build-pair-pages.js").includes(meta));

  // And robots.txt must keep saying it is not the thing doing the blocking.
  const robots = read("site/robots.txt");
  assert.match(robots, /NOT the effective robots\.txt/);
  assert.match(robots, /^Disallow: \/$/m);
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
  // The three figures were typed into this test, which made the guard one-directional:
  // editing the page failed, editing products.js did not — the page just kept the old
  // number while the failures landed elsewhere and pointed at the data. Each card names
  // its own product (the href) and its own field (the category label), so both are read
  // off the card and the expected string comes from the record.
  const EXAMPLE_FIELD_BY_LABEL = { "함수율": "water", "Dk/t": "dkt", "BC": "bc", "DIA": "dia", "중심두께": "thickness" };
  const examples = section.match(/<article class="card">[\s\S]*?<\/article>/g) || [];
  assert.equal(examples.length, 3);
  for (const card of examples) {
    const slug = card.match(/<h3><a href="\.\/([a-z0-9-]+)\.html">/)?.[1];
    const label = card.match(/<div class="category">([^·<]+)·/)?.[1]?.trim();
    const figure = card.match(/<p><strong>([\s\S]*?)<\/strong><\/p>/)?.[1];
    assert.ok(slug && label && figure, `an evidence example card is missing its product, field or figure: ${card}`);
    const fieldId = EXAMPLE_FIELD_BY_LABEL[label];
    assert.ok(fieldId, `evidence example card labels a field this test does not know: ${label}`);
    const product = pairApi.products.find((candidate) => candidate.slug === slug);
    assert.ok(product, `evidence example card links ./${slug}.html, which is not a product on file`);
    const field = product.fields.find((candidate) => candidate.id === fieldId);
    assert.ok(field, `${slug} has no ${fieldId} field`);
    assert.equal(
      figure,
      String(field.value),
      `the ${slug} evidence example prints ${JSON.stringify(figure)} but products.js records ${JSON.stringify(field.value)}`
    );
  }
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
  assert.equal((grid.match(/<article class="card">/g) || []).length, 19);
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

// Heading level skips are invisible on screen and only surface in a screen reader's
// heading list, so nothing but a test catches one coming back. Static markup only —
// the JS-rendered term and product cards emit the same levels as the fallback they
// replace, which is what makes checking the served HTML meaningful here.
test("no page skips a heading level", () => {
  const offenders = htmlPages().flatMap((page) => {
    const levels = [...read(page).matchAll(/<h([1-6])[\s>]/g)].map((match) => Number(match[1]));
    const problems = [];
    if (levels[0] !== 1) problems.push(`${page}: starts at h${levels[0]}`);
    levels.forEach((level, index) => {
      const previous = levels[index - 1];
      if (previous && level > previous + 1) problems.push(`${page}: h${previous} -> h${level}`);
    });
    return problems;
  });

  assert.deepEqual(offenders, []);
});

// The home reshape deleted the phone-scoped media query and pushed the three routes
// 1.4 viewports down, while README and DESIGN.md both define the home as a router
// first. A file-level test cannot measure a rendered fold — only a browser can, and
// those measurements belong in the commit message. What it can hold is the two things
// that made the fold reachable: the phone block has to exist and still compact the
// evidence ledger rather than stack it into six rows, and the route rows have to stay
// above the 44px tap-target floor while they are being tightened.
test("the home router keeps its phone-scoped layout block", () => {
  const css = read("site/assets/css/style.css");
  const phone = css.match(/@media \(max-width: 480px\) \{[\s\S]*?\n\}\n/)?.[0] || "";

  assert.ok(phone, "style.css should carry a phone-scoped block for the home router");
  assert.match(phone, /\.home-ledger-metrics \{[^}]*grid-template-columns: repeat\(2,/);
  assert.match(phone, /\.home-routes \{/);
  assert.match(phone, /\.home-route-index a \{/);

  // Compacting the ledger is the point; hiding it is not.
  assert.doesNotMatch(css, /\.home-evidence-ledger[^{]*\{[^}]*display:\s*none/);

  const minSize = phone.match(/\.home-route-index a \{[^}]*min-block-size: ([\d.]+)rem/);
  assert.ok(minSize, "phone route rows should declare a minimum row height");
  assert.ok(
    Number(minSize[1]) * 16 >= 44,
    `route rows are ${Number(minSize[1]) * 16}px tall, under the 44px tap-target floor`
  );

  // The footer links are the site's only other bare text targets, and they sit on every
  // page. Height alone is not the floor: with no inline minimum the label decides the
  // width, which left 소개 — the shortest label on the site — a 25px-wide target.
  const footerLink = css.match(/\.footer-links a \{([^}]*)\}/)?.[1] || "";
  assert.ok(footerLink, "style.css should style the footer links");
  for (const [axis, pattern] of [["min-block-size", /min-block-size: ([0-9.]+)rem/], ["min-inline-size", /min-inline-size: ([0-9.]+)rem/]]) {
    const value = footerLink.match(pattern)?.[1];
    assert.ok(value, `footer links should declare ${axis}`);
    assert.ok(
      Number(value) * 16 >= 44,
      `footer links are ${Number(value) * 16}px on ${axis}, under the 44px tap-target floor`
    );
  }
});

test("home is a three-path router whose trust line keeps a correct unknown fallback", () => {
  const html = read("site/index.html");
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] || "";
  const ledger = main.match(/<aside[^>]+class="[^"]*home-evidence-ledger[^"]*"[^>]*data-evidence-summary[\s\S]*?<\/aside>/)?.[0] || "";
  const routeIndex = main.match(/<ol[^>]+class="[^"]*home-route-index[^"]*"[\s\S]*?<\/ol>/)?.[0] || "";

  assert.ok(main, "home should have a main region");
  assert.equal((main.match(/<h1[ >]/g) || []).length, 1);
  assert.ok(ledger, "home should expose its distinctive evidence ledger");
  for (const [key, value] of Object.entries(computedEvidenceSummary())) {
    assert.match(ledger, new RegExp(`data-summary-value="${key}"[^>]*>${value}<`));
  }
  assert.ok(routeIndex, "home should expose an ordered editorial route index");
  assert.equal((routeIndex.match(/<li\b/g) || []).length, 3);
  // Each route is a heading so screen-reader heading navigation reaches it; the page
  // runs h1 -> section h2 -> route h3, so h3 is the level, not a free choice.
  assert.equal((routeIndex.match(/<h3\b/g) || []).length, 3);
  assert.doesNotMatch(main, /router-card/);
  assert.deepEqual(
    [...main.matchAll(/<a\s[^>]*href="([^"]+)"/g)].map((match) => match[1]),
    ["./decoder/index.html", "./products/index.html#product-search", "./compare/index.html"]
  );
  assert.doesNotMatch(main, /<button/);
  assert.match(main, /최종 피팅은 전문가에게 확인하세요/);

  const trustLine = main.match(/<p[^>]+data-evidence-summary[\s\S]*?<\/p>/)?.[0] || "";
  assert.ok(trustLine, "home should carry the trust line as an evidence summary region");
  assert.match(
    trustLine,
    new RegExp(`data-summary-value="unknown"[^>]*>${computedEvidenceSummary().unknown}<`)
  );
});

test("home hero uses the approved decorative image without changing the router", () => {
  const html = read("site/index.html");
  const hero = html.match(/<section class="hero home-hero"[\s\S]*?<\/section>/)?.[0] || "";
  const image = hero.match(/<img\b[^>]*>/)?.[0] || "";
  const asset = "site/assets/images/lensfact-evidence-desk-hero.webp";

  assert.ok(hero, "home should keep its hero section");
  assert.match(image, /src="\.\/assets\/images\/lensfact-evidence-desk-hero\.webp"/);
  assert.match(image, /alt=""/, "the decorative illustration should have an empty alt");
  assert.match(image, /width="1672"/);
  assert.match(image, /height="941"/);
  assert.ok(fs.existsSync(path.join(root, asset)), `${asset} should be deployed with the site`);
  assert.equal((hero.match(/<img\b/g) || []).length, 1);
});

test("no page still links to the removed home decoder anchor", () => {
  const pages = htmlPages();
  assert.equal(pages.length, 52, "site should contain the full page set");

  // Any resurrected home fragment counts, not just the one literal that was removed.
  const offenders = pages.filter((page) => /href="[^"]*#(?:input-)?decoder"/.test(read(page)));
  assert.deepEqual(offenders, []);
});

test("every page's nav points at the decoder page at its own depth", () => {
  const pages = htmlPages();
  assert.equal(pages.length, 52);

  for (const page of pages) {
    const html = read(page);
    const header = html.match(/<header[\s\S]*?<\/header>/)?.[0] || "";
    assert.ok(header, `${page} should carry the shared header`);

    // The old label collided with the home router card and pointed at the home page.
    assert.doesNotMatch(html, /렌즈 숫자 해석/, page);

    // Derived from where the file sits, not from a list of filenames: site/404.html is a
    // second root-depth page, and naming index.html by hand would have quietly demanded
    // "../" from it.
    const depth = page.split("/").length === 2 ? "./decoder/index.html" : "../decoder/index.html";
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

test("the BC DIA PWR knowledge article publishes the required identity, sources, and routes", () => {
  const page = "site/knowledge/contact-lens-bc-dia-pwr.html";
  assert.ok(htmlPages().includes(page), `${page} should exist`);
  const html = read(page);

  assert.match(html, /<title>콘택트렌즈 포장 숫자 BC·DIA·PWR 읽는 법 \| LensFact<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/DOMAIN-TBD\/knowledge\/contact-lens-bc-dia-pwr\.html">/);
  assert.match(html, /<meta name="robots" content="noindex, nofollow">/);

  const bibliography = html.match(/<ol class="bibliography">[\s\S]*?<\/ol>/)?.[0] || "";
  assert.equal((bibliography.match(/<li id="source-[1-6]">/g) || []).length, 6);
  const sourceUrls = [
    "https://www.acuvue.com/en-us/eye-health/contact-lens-power/",
    "https://precision.myalcon.com/prescription-101/",
    "https://www.ftc.gov/business-guidance/resources/contact-lens-rule-guide-prescribers-sellers",
    "https://www.ftc.gov/sites/default/files/filefield_paths/dr_eydelman_powerpoint_presentation.pdf",
    "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
    "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf"
  ];
  sourceUrls.forEach((url, index) => {
    assert.ok(bibliography.includes(`<li id="source-${index + 1}"><a href="${url}"`));
  });
  assert.equal((bibliography.match(/<li\b/g) || []).length, 6);

  for (const href of [
    "../decoder/index.html",
    "../terms/bc.html",
    "../terms/dia.html",
    "../products/index.html#product-search"
  ]) {
    assert.ok(html.includes(`href="${href}"`), `${page} should link ${href}`);
  }
});

test("the Dk and Dk/t knowledge article publishes its identity, official sources, boundaries, and routes", () => {
  const page = "site/knowledge/contact-lens-dk-dkt.html";
  assert.ok(htmlPages().includes(page), `${page} should exist`);
  const html = read(page);

  assert.match(html, /<title>콘택트렌즈 Dk와 Dk\/t 차이: 산소투과성 수치 비교 주의점 \| LensFact<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/DOMAIN-TBD\/knowledge\/contact-lens-dk-dkt\.html">/);
  assert.match(html, /<meta name="robots" content="noindex, nofollow">/);
  assert.match(html, /Dk<\/strong>는 렌즈 <strong>재료의 산소투과성/);
  assert.match(html, /Dk\/t<\/strong>는 그 재료로 만든 <strong>특정 렌즈의 두께\(t\)를 반영한 산소전달률/);
  assert.match(html, /단위 배율·측정법·온도·보정법·시험 도수와 두께 조건/);
  assert.match(html, /처방·피팅·착용방식 판단을 대신하지 않습니다/);
  assert.match(html, /직접 비교하거나 순위를 정할 수 없습니다/);

  const bibliography = html.match(/<ol class="bibliography">[\s\S]*?<\/ol>/)?.[0] || "";
  const sourceUrls = [
    "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/soft-hydrophilic-daily-wear-contact-lenses-performance-criteria-safety-and-performance-based-pathway",
    "https://www.iso.org/standard/66341.html",
    "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
    "https://coopervision.com/sites/coopervision.com/files/pfg01047_clariti_1_day_family_us_invigor_and_non-invigor-rev_b.pdf",
    "https://www.accessdata.fda.gov/cdrh_docs/pdf8/P080011B.pdf",
    "https://www.fda.gov/medical-devices/contact-lenses/types-contact-lenses"
  ];
  sourceUrls.forEach((url, index) => {
    assert.ok(bibliography.includes(`<li id="source-${index + 1}"><a href="${url}"`));
  });
  assert.equal((bibliography.match(/<li\b/g) || []).length, 6);

  for (const href of [
    "./water-content-moisture.html",
    "./contact-lens-bc-dia-pwr.html",
    "./silicone-hydrogel-vs-hydrogel.html",
    "../terms/dkt.html",
    "../decoder/index.html",
    "../compare/index.html"
  ]) {
    assert.ok(html.includes(`href="${href}"`), `${page} should link ${href}`);
  }
});

// The material-family article is the one place a reader could take away "silicone hydrogel
// is better" as the site's verdict. The assertions hold the sentences that refuse it: the
// family explains the oxygen pathway, not a ranking; water content is not read across
// families; comfort and safety stay per product and per person; overnight wear follows the
// product's own approval. The bibliography is pinned in order so a swapped or dropped
// source cannot leave a citation number pointing at a different document.
test("the silicone hydrogel article publishes its identity, official sources, boundaries, and routes", () => {
  const page = "site/knowledge/silicone-hydrogel-vs-hydrogel.html";
  assert.ok(htmlPages().includes(page), `${page} should exist`);
  const html = read(page);

  assert.match(html, /<title>실리콘 하이드로겔과 하이드로겔 콘택트렌즈의 차이 \| LensFact<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/DOMAIN-TBD\/knowledge\/silicone-hydrogel-vs-hydrogel\.html">/);
  assert.match(html, /<meta name="robots" content="noindex, nofollow">/);
  assert.match(html, /실리콘\(실록산\) 성분이 별도의 산소 전달 경로를 제공해 <strong>일반적으로<\/strong> 더 높은 Dk와 Dk\/t가 가능합니다/);
  assert.match(html, /재료군 이름만으로 순위를 만들 수 없고/);
  assert.match(html, /함수율은 재료군 안에서 읽습니다/);
  assert.match(html, /실리콘 하이드로겔이라는 이유만으로 특정 사람에게 더 편안하거나, 하이드로겔이라는 이유만으로 덜 안전하다고 말할 수 없습니다/);
  assert.match(html, /그 제품의 허가 내용과 안경사 또는 안과 전문의의 판단<\/strong>으로 정해집니다/);
  assert.match(html, /이 표는 제품 우열표가 아닙니다/);

  // The site's own vocabulary: 추천 · 순위 · 점수 · 적합 only inside a denial, or — the one
  // permitted use of 적합 (DESIGN.md 5) — the sentence that hands 적합성 to a professional.
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] || "";
  const plain = main.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  for (const sentence of plain.split(/(?<=다\.)/)) {
    for (const word of ["추천", "순위", "점수", "적합"]) {
      if (!sentence.includes(word)) continue;
      assert.match(sentence, /않|없|보류|안과 전문의에게 확인/, `${page} uses "${word}" outside a denial: ${sentence.trim()}`);
    }
  }

  const bibliography = html.match(/<ol class="bibliography">[\s\S]*?<\/ol>/)?.[0] || "";
  const sourceUrls = [
    "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-886/subpart-F/section-886.5925",
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC12184980",
    "https://www.accessdata.fda.gov/cdrh_docs/pdf21/K213164.pdf",
    "https://www.accessdata.fda.gov/cdrh_docs/pdf8/P080011B.pdf",
    "https://coopervision.com/sites/coopervision.com/files/pfg01047_clariti_1_day_family_us_invigor_and_non-invigor-rev_b.pdf",
    "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
    "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC7917563"
  ];
  sourceUrls.forEach((url, index) => {
    assert.ok(bibliography.includes(`<li id="source-${index + 1}"><a href="${url}"`), `source ${index + 1} should be ${url}`);
  });
  assert.equal((bibliography.match(/<li\b/g) || []).length, 8);

  // Every figure the comparison strip prints for a product on file has to be a figure
  // products.js records for it, so the article cannot drift from the product pages.
  const strip = html.match(/<div class="compare-strip"[\s\S]*?<\/div>\s*<p>/)?.[0] || "";
  assert.ok(strip, `${page} should carry the comparison strip`);
  const expected = {
    "proclear-1-day": { water: "60%", dkt: "28" },
    "clariti-1-day": { water: "56%", dkt: "86" },
    "myday": { water: "54%", dkt: "100" },
    "acuvue-moist-1-day": { water: "58%", dkt: "25.5 × 10⁻⁹" },
    "acuvue-oasys-1-day": { water: "38%", dkt: "121 × 10⁻⁹" },
    "biofinity": { water: "48%" }
  };
  for (const [id, fields] of Object.entries(expected)) {
    const product = pairApi.products.find((candidate) => candidate.id === id);
    assert.ok(product, `${id} should be on file`);
    for (const [fieldId, value] of Object.entries(fields)) {
      const recorded = String(product.fields.find((field) => field.id === fieldId)?.value || "");
      assert.ok(
        recorded === value || recorded.split(" / ").includes(value),
        `${id} ${fieldId}: the article relies on ${value} but products.js records ${recorded}`
      );
    }
    assert.ok(strip.includes(`함수율 ${fields.water}`), `${page} strip should print ${id}'s water content ${fields.water}`);
    if (fields.dkt) {
      const printedDkt = fields.dkt.replace(" × 10⁻⁹", " × 10<sup>−9</sup>");
      assert.ok(strip.includes(`Dk/t ${printedDkt}`), `${page} strip should print ${id}'s Dk/t ${fields.dkt}`);
    }
  }

  for (const href of [
    "./water-content-moisture.html",
    "./contact-lens-dk-dkt.html",
    "../terms/material.html",
    "../products/biofinity.html",
    "../products/clariti-1-day.html",
    "../decoder/index.html",
    "../compare/index.html"
  ]) {
    assert.ok(html.includes(`href="${href}"`), `${page} should link ${href}`);
  }

  // Both older articles route into this one, so a reader who arrives on either axis can
  // reach the family explanation without the hub.
  assert.ok(read("site/knowledge/water-content-moisture.html").includes('href="./silicone-hydrogel-vs-hydrogel.html"'));
  assert.ok(read("site/knowledge/contact-lens-dk-dkt.html").includes('href="./silicone-hydrogel-vs-hydrogel.html"'));
});

test("the replacement schedule article is the latest live registration and featured guide", () => {
  const context = { window: {} };
  vm.runInNewContext(read("site/assets/data/articles.js"), context);
  const articles = Array.from(context.window.LENSFACT_ARTICLES);
  const latest = articles[0];
  const featured = articles.filter((article) => article.featured);

  assert.equal(latest.href, "./contact-lens-replacement-schedule.html");
  assert.equal(latest.status, "live");
  assert.equal(latest.featured, true);
  assert.equal(latest.sources, 8);
  assert.equal(latest.verifiedAt, "확인일 2026.09.02");
  assert.equal(articles[1].href, "./silicone-hydrogel-vs-hydrogel.html");
  assert.deepEqual(featured.map((article) => article.href), ["./contact-lens-replacement-schedule.html"]);

  // The hub card, the registration and the page have to agree on the source count, or
  // the hub advertises a bibliography the page does not carry.
  const sourceCount = (read("site/knowledge/contact-lens-replacement-schedule.html").match(/<ol class="bibliography">[\s\S]*?<\/ol>/)?.[0].match(/<li\b/g) || []).length;
  assert.equal(sourceCount, latest.sources);

  const hub = read("site/knowledge/index.html");
  const latestCard = hub.match(/<div class="article-list" data-article-list>[\s\S]*?<\/div>\s*<\/div>/)?.[0] || "";
  const order = ["./contact-lens-replacement-schedule.html", "./silicone-hydrogel-vs-hydrogel.html", "./contact-lens-dk-dkt.html"]
    .map((href) => latestCard.indexOf(`href="${href}"`));
  assert.ok(order.every((at) => at > -1), "the hub's static list should carry the three latest article cards");
  assert.deepEqual([...order].sort((left, right) => left - right), order, "the static hub list should be newest first");
  assert.match(latestCard, /출처 8건/);
  assert.match(hub, /class="feature-card"[\s\S]*href="\.\.\/knowledge\/contact-lens-replacement-schedule\.html"/);
});

test("the replacement schedule guide separates replacement, wear mode, and unopened expiry", () => {
  const page = "site/knowledge/contact-lens-replacement-schedule.html";
  assert.ok(htmlPages().includes(page), `${page} should exist`);
  const html = read(page);
  assert.match(html, /<meta name="robots" content="noindex, nofollow">/);
  assert.match(html, /<link rel="canonical" href="https:\/\/DOMAIN-TBD\/knowledge\/contact-lens-replacement-schedule\.html">/);
  assert.match(html, /교체주기<\/strong>는 한 렌즈를 언제 새 렌즈로 바꾸는지/);
  assert.match(html, /하루 착용시간<\/strong>은 하루 중 몇 시간 끼는지/);
  assert.match(html, /착용방식<\/strong>은 깨어 있을 때만 쓰는 매일착용인지 수면을 포함할 수 있는 연속착용인지/);
  assert.match(html, /FDA 정의를 인용한 CDC 안내에서 disposable은 한 번 사용하고 폐기/);
  assert.match(html, /EXP<\/strong>는 밀봉된 미개봉 포장의 유효기간/);
  assert.match(html, /케이스는[\s\S]*최소 3개월마다 교체/);
  assert.match(html, /매년 또는 전문가가 권한 주기로 방문/);
  assert.match(html, /연속착용자의 각막궤양 위험이 매일착용자보다 크고/);

  const bibliography = html.match(/<ol class="bibliography">[\s\S]*?<\/ol>/)?.[0] || "";
  const sourceUrls = [
    "https://www.cdc.gov/contact-lenses/about/about-contact-lens-types.html",
    "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-886/subpart-F/section-886.5925",
    "https://www.accessdata.fda.gov/cdrh_docs/pdf15/K153643.pdf",
    "https://coopervision.com/sites/coopervision.com/files/pfg01047_clariti_1_day_family_us_invigor_and_non-invigor-rev_b.pdf",
    "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
    "https://www.fda.gov/medical-devices/contact-lenses/everyday-eye-care",
    "https://www.accessdata.fda.gov/cdrh_docs/pdf8/P080011B.pdf",
    "https://www.cdc.gov/contact-lenses/prevention/index.html"
  ];
  sourceUrls.forEach((url, index) => assert.ok(bibliography.includes(`<li id="source-${index + 1}"><a href="${url}"`)));
  assert.equal((bibliography.match(/<li\b/g) || []).length, 8);

  const examples = { "acuvue-oasys-1-day": "1일", "acuvue-oasys-2-week": "2주", "acuvue-vita": "1달" };
  for (const [id, expected] of Object.entries(examples)) {
    const product = pairApi.products.find((candidate) => candidate.id === id);
    assert.ok(product, `${id} should be on file`);
    assert.equal(product.fields.find((field) => field.id === "replacement")?.value, expected);
    assert.ok(html.includes(`href="../products/${id}.html"`));
  }
  assert.ok(read("site/knowledge/contact-lens-bc-dia-pwr.html").includes('href="./contact-lens-replacement-schedule.html#expiry"'));
  assert.ok(read("site/knowledge/silicone-hydrogel-vs-hydrogel.html").includes('href="./contact-lens-replacement-schedule.html"'));
});

// --- Product pair pages ----------------------------------------------------------
// The pair pages are generated from products.js by tools/build-pair-pages.js, so the
// tests reach for the generator rather than restating any figure.
const pairTool = require("../tools/build-pair-pages.js");
const pairApi = pairTool.loadPairApi();
const pairFiles = () => pairApi.PAIR_PAGES.map((page) => ({
  page,
  ids: page.ids,
  file: `site/compare/${pairApi.pairFile(page.ids)}`,
  name: pairApi.pairFile(page.ids),
  pair: pairApi.pairProducts(page.ids)
}));

// Every sentence a pair page generates, with both product names masked. Two pair pages
// that could share a paragraph would collide here even though their names differ.
const pairSentences = (entry) => {
  const buckets = pairApi.pairBuckets(entry.pair);
  const reasons = buckets.verdicts.flatMap((verdict) => verdict.blocked.concat(verdict.notes)).concat(buckets.readings);
  const names = pairApi.PAIR_PAGES
    .flatMap((page) => pairApi.pairProducts(page.ids))
    .flatMap((product) => [product.name, product.selectorLabel])
    .sort((left, right) => right.length - left.length);
  const mask = (value) => names.reduce((text, name) => text.split(name).join("«P»"), value);
  // The sentence alone and the sentence with its quoted evidence both have to be unique:
  // a reason that reads the same once the two names are removed is a paragraph another
  // pair page could carry unchanged, which is exactly what makes a set of pages a doorway.
  return reasons.flatMap((reason) => [mask(reason.sentence), mask(`${reason.sentence} || ${reason.evidence}`)]);
};

test("every recorded product pair has its own indexable page", () => {
  const entries = pairFiles();
  assert.ok(entries.length >= 8, "the pilot ships at least the eight recorded pairs");

  for (const entry of entries) {
    const html = read(entry.file);
    const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] || "";
    assert.ok(main, `${entry.name} should have a main region`);
    assert.equal((main.match(/<h1[ >]/g) || []).length, 1, entry.name);

    // The reason these pages exist: a product-versus-product query needs a URL whose
    // title, description and canonical name both products.
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1] || "";
    const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1] || "";
    const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1] || "";
    const ogTitle = html.match(/<meta property="og:title" content="([^"]+)">/)?.[1] || "";
    const ogUrl = html.match(/<meta property="og:url" content="([^"]+)">/)?.[1] || "";
    for (const product of entry.pair) {
      assert.ok(title.includes(product.selectorLabel), `${entry.name} title names ${product.selectorLabel}`);
      assert.ok(description.includes(product.selectorLabel), `${entry.name} description names ${product.selectorLabel}`);
      assert.ok(ogTitle.includes(product.selectorLabel), `${entry.name} og:title names ${product.selectorLabel}`);
    }
    assert.equal(canonical, `https://DOMAIN-TBD/compare/${entry.name}`, entry.name);
    assert.equal(ogUrl, canonical, entry.name);
    assert.equal(html.match(/<h1 class="page-title">([^<]+)<\/h1>/)?.[1].includes("vs"), true, entry.name);

    // Shared chrome, at this depth.
    assert.match(html, /<a class="skip-link" href="#main">/, entry.name);
    assert.match(html, /<link rel="icon" href="data:image\/svg\+xml/, entry.name);
    assert.match(html, /<meta name="theme-color" content="#FBF9F8">/, entry.name);
    assert.ok(
      html.indexOf("pretendard-dynamic-subset.css") < html.indexOf("assets/css/style.css"),
      `${entry.name} loads Pretendard before the stylesheet`
    );
    assert.match(html, /<span class="footer-boundary">/, entry.name);
    assert.equal(
      (html.match(/<a href="\.\.\/compare\/index\.html" aria-current="page">공식 사양 비교<\/a>/g) || []).length,
      2,
      `${entry.name} marks the comparison nav entry in both nav copies`
    );

    // Wiring: into the comparison tool with both ids preselected, and into both products.
    assert.ok(main.includes(`href="./index.html?p=${entry.ids.join(",")}"`), `${entry.name} preselects the pair in the tool`);
    for (const product of entry.pair) {
      assert.ok(main.includes(`../products/${product.slug}.html`), `${entry.name} links ${product.slug}`);
    }
  }
});

test("pair pages are the generator's output, so their values cannot drift from products.js", () => {
  for (const page of pairTool.pairPageFiles()) {
    const committed = pairTool.normalizeEol(read(page.relativePath));
    assert.equal(
      committed,
      pairTool.normalizeEol(page.html),
      `${page.relativePath} differs from tools/build-pair-pages.js output — regenerate it`
    );
  }

  // The generated no-JS copy has to carry the printed values, not just the chrome.
  for (const entry of pairFiles()) {
    const noscript = read(entry.file).match(/<noscript>[\s\S]*?<\/noscript>/g)?.pop() || "";
    assert.ok(noscript.includes("ns-row-permit"), `${entry.name} noscript keeps the full table`);
    for (const product of entry.pair) {
      for (const fieldId of ["permit", "bc", "dia", "water"]) {
        const value = product.fields.find((field) => field.id === fieldId)?.value || "";
        const printed = value.replaceAll("&", "&amp;");
        assert.ok(noscript.includes(printed), `${entry.name} noscript prints ${product.id} ${fieldId} ${value}`);
      }
    }
  }
});

test("pair pages state their computed counts and never rank the two products", () => {
  // 추천 · 순위 · 점수 · 더 나은 may only appear inside a sentence that denies them; the
  // superlatives of an advertorial may not appear at all.
  const forbidden = ["추천", "순위", "점수", "더 좋", "더 나은", "더 낫", "적합"];
  const absolute = [/최고/, /베스트/, /승자/, /우승/, /TOP\s*\d/, /\d위\b/];

  for (const entry of pairFiles()) {
    const html = read(entry.file);
    const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] || "";
    const plain = main.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

    const stated = html.match(/<p class="editor-note" data-pair-count>([^<]+)<\/p>/)?.[1] || "";
    assert.equal(stated, pairApi.pairCountSentence(entry.pair), `${entry.name} count sentence must equal the computed one`);

    for (const pattern of absolute) assert.doesNotMatch(plain, pattern, `${entry.name} must not compare the two products`);
    for (const sentence of plain.split(/(?<=다\.)/)) {
      for (const word of forbidden) {
        if (!sentence.includes(word)) continue;
        assert.match(sentence, /않|없/, `${entry.name} uses "${word}" outside a denial: ${sentence.trim()}`);
      }
    }
  }
});

test("no two pair pages can share a paragraph", () => {
  const seen = new Map();
  for (const entry of pairFiles()) {
    const sentences = pairSentences(entry);
    assert.ok(sentences.length, `${entry.name} should derive at least one sentence from its own data`);
    for (const sentence of sentences) {
      const owner = seen.get(sentence);
      assert.ok(
        owner === undefined || owner === entry.name,
        `${entry.name} repeats a sentence from ${owner}: ${sentence.slice(0, 120)}`
      );
      seen.set(sentence, entry.name);
    }
  }
});

test("pair pages are reachable from the comparison tool and from both product pages", () => {
  const compare = read("site/compare/index.html");
  assert.match(compare, /data-compare-pair-link/, "the tool needs the slot it points at a pair page with");

  for (const entry of pairFiles()) {
    assert.ok(compare.includes(`href="./${entry.name}"`), `compare/index.html should list ${entry.name}`);
    for (const product of entry.pair) {
      const productPage = read(`site/products/${product.slug}.html`);
      assert.ok(
        productPage.includes(`href="../compare/${entry.name}"`),
        `products/${product.slug}.html should link ${entry.name}`
      );
    }
  }

  const sitemap = read("site/sitemap.xml");
  for (const entry of pairFiles()) {
    const url = sitemap.match(new RegExp(`<url>\\s*<loc>https://DOMAIN-TBD/compare/${entry.name}</loc>\\s*<lastmod>([^<]+)</lastmod>`));
    assert.ok(url, `sitemap.xml should carry ${entry.name}`);
    assert.equal(url[1], pairTool.PAGE_DATE, entry.name);
  }
});

// The blocked list counts items, and its heading states that count. A field can carry more
// than one reason, so the reasons live inside the field's own entry; if that ever inverts,
// a reader counting the entries under the heading gets a different number from the heading.
test("the blocked-item heading counts exactly the entries listed under it", () => {
  const topLevelItems = (list) => {
    let depth = 0;
    let count = 0;
    for (const token of list.matchAll(/<(\/?)(ul|li)\b/g)) {
      const [, closing, tag] = token;
      if (tag === "ul") depth += closing ? -1 : 1;
      else if (!closing && depth === 0) count += 1;
    }
    return count;
  };

  for (const entry of pairFiles()) {
    const html = read(entry.file);
    const section = html.match(/<h2 id="ns-pair-blocked-title">같은 표에 놓을 수 없는 항목 (\d+)개<\/h2>([\s\S]*?)<\/section>/);
    assert.ok(section, `${entry.name} should state a blocked-item count`);
    const stated = Number(section[1]);
    assert.equal(stated, pairApi.pairBuckets(entry.pair).blocked.length, `${entry.name} heading must state the computed count`);
    const list = section[2].match(/<ul class="source-links">([\s\S]*)<\/ul>/);
    if (!stated) {
      assert.equal(list, null, `${entry.name} states no blocked item, so it must not list one`);
      continue;
    }
    assert.equal(topLevelItems(list[1]), stated, `${entry.name} lists a different number of items than its heading states`);
  }
});

// The two material families are labels the data prints, never labels the site derives. A
// product whose sources qualify the family — 표면처리된 플루오로실리콘 함유 하이드로겔 — has
// no family here, and a note that names the other family in order to exclude it is not a
// claim about this product. Both readings once shipped, in opposite directions.
test("a material family is only ever a label the product's own record prints", () => {
  // Every product on file, not only the eleven a shipped pair happens to use: the two
  // hardest cases are the ones no pair exercised, and both once classified backwards.
  const expected = {
    "acuvue-oasys-1-day": "실리콘 하이드로겔",
    "dailies-total1": "실리콘 하이드로겔",
    "biofinity": "실리콘 하이드로겔",
    "acuvue-moist-1-day": "하이드로겔",
    "myday": "실리콘 하이드로겔",
    // 재질명은 공식 출처끼리 다르지만, 한국 공식 페이지가 계열을 실리콘 하이드로겔로 적는다.
    "clariti-1-day": "실리콘 하이드로겔",
    "acuvue-oasys-2-week": "실리콘 하이드로겔",
    "precision1": "실리콘 하이드로겔",
    "biotrue-oneday": "하이드로겔",
    "acuvue-oasys-max-1-day": "실리콘 하이드로겔",
    "dailies-aquacomfort-plus": "하이드로겔",
    "acuvue-vita": "실리콘 하이드로겔",
    "total30": "실리콘 하이드로겔",
    // 제조사 문서가 계열을 표면처리된 플루오로실리콘 함유 하이드로겔로 적는다. 어느 공식
    // 자료도 이 재질을 두 계열 중 하나로 부르지 않으므로 사이트가 대신 정하지 않는다.
    "airoptix-plus-hydraglyde": "",
    // 데이터가 PC-하이드로겔(하이드로겔 계열)이라 적고, 이어지는 절은 실리콘 하이드로겔과
    // 비교하지 않는다는 배제 문구다. 그 절을 읽으면 계열이 정반대로 뒤집힌다.
    "proclear-1-day": "하이드로겔",
    "biofinity-energys": "실리콘 하이드로겔",
    "ultra-one-day": "실리콘 하이드로겔",
    "miru-1day": "하이드로겔",
    "soflens-daily": "하이드로겔"
  };

  assert.deepEqual(
    Object.fromEntries(pairApi.products.map((product) => [product.id, pairApi.pairMaterialFamily(product)])),
    expected,
    "a derived material family changed; check it against that product's own 재질 record before accepting it"
  );

  // No pair page may print a family label as this product's own unless the classifier set one.
  for (const entry of pairFiles()) {
    const html = read(entry.file);
    for (const product of entry.pair) {
      if (pairApi.pairMaterialFamily(product)) continue;
      assert.ok(
        !html.includes(`${product.selectorLabel}는 하이드로겔`) && !html.includes(`${product.selectorLabel}은 하이드로겔`) &&
        !html.includes(`${product.selectorLabel}는 실리콘 하이드로겔`) && !html.includes(`${product.selectorLabel}은 실리콘 하이드로겔`),
        `${entry.name} states a material family for ${product.id} that its data does not`
      );
    }
  }
});

// The two authored lines per page are the only hand-written text on a pair page. They may
// not describe wearing, discarding or reusing a lens — the site records 교체주기 and leaves
// 착용방식 to a professional — and they may not rank this page against the site's others.
test("the authored pair copy stays inside the site's own vocabulary", () => {
  const banned = ["쓰고 버리", "하루 쓰", "재사용", "세척", "끼고 자", "착용시간", "가장 적", "가장 많", "가장 좋"];
  for (const [file, copy] of Object.entries(pairTool.PAIR_COPY)) {
    for (const line of [copy.headline, copy.lead]) {
      for (const word of banned) {
        assert.ok(!line.includes(word), `${file} authored copy uses "${word}": ${line}`);
      }
    }
  }
});

// A description longer than the site's own ceiling loses its point past the snippet cut, and
// the point is what separates this page from an advertorial.
test("pair descriptions lead with the page's proposition and stay inside the site's length", () => {
  const ceiling = 216;
  for (const entry of pairFiles()) {
    const description = read(entry.file).match(/<meta name="description" content="([^"]+)">/)?.[1] || "";
    assert.ok(description.length <= ceiling, `${entry.name} description is ${description.length} chars, over ${ceiling}`);
    assert.match(description, /추천·순위·점수는 없습니다\.$/, entry.name);
  }
});

// The hub card states the same count as the page it links to. It is typed into the hub by
// hand, so it is the one place a recomputed count can go stale unnoticed.
test("the comparison hub states each pair page's computed blocked-item count", () => {
  const hub = read("site/compare/index.html");
  for (const entry of pairFiles()) {
    const count = pairApi.pairBuckets(entry.pair).blocked.length;
    const line = hub.split("\n").find((candidate) => candidate.includes(`href="./${entry.name}"`)) || "";
    const card = line.match(/같은 표에 놓을 수 없는 항목 (\d+)개/);
    assert.ok(card, `compare/index.html should carry a card for ${entry.name} stating its blocked-item count`);
    assert.equal(Number(card[1]), count, `${entry.name} hub card states ${card[1]}, the page computes ${count}`);
  }
});
