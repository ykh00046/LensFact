"use strict";

/*
 * The site's whole claim is that a value on screen is traceable to a named document,
 * a url and a date. These tests guard that claim from three sides.
 *
 *   1. the record itself — every source has to be citable at all;
 *   2. the second rendering — every product page, the comparison hub and every term
 *      page ship a <noscript> copy of what app.js renders. A reader with no JavaScript
 *      sees only that copy, so it has to be the same data, not merely similar data;
 *   3. the committed digest — so that anything else about a verified record changing
 *      has to be a deliberate act with a visible diff.
 *
 * Nothing below restates a spec value. Everything expected is derived from
 * site/assets/data/products.js through app.js's own renderers, loaded in a vm the way
 * tools/build-pair-pages.js and tests/compare-view.test.js already load them.
 */

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const snapshotTool = require("../tools/products-snapshot.js");

const root = path.resolve(__dirname, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

function loadApi() {
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
  vm.runInContext(read("site/assets/data/fields.js"), context);
  vm.runInContext(read("site/assets/data/products.js"), context);
  vm.runInContext(read("site/assets/data/articles.js"), context);
  vm.runInContext(
    read("site/assets/js/app.js").replace(
      /\}\)\(\);\s*$/,
      "globalThis.__provenanceApi = { products, PRODUCT_SUMMARY_FIELDS, SUMMARY_LABEL_NOTES, TERM_FIELD_IDS, COMPARE_COLUMNS, COMPARE_ROWS, PERMIT_EVIDENCE, FIELD_STATES, resolvedField, fieldState, stateLabel, escapeHtml, text, displayDate, externalUrl, latestVerifiedAt, compareHeadRow, compareRow, termDistributionMarkup };\n})();"
    ),
    context
  );
  return context.__provenanceApi;
}

const api = loadApi();
// Array.from: the records live in the vm realm, and a foreign-realm array never
// deep-strict-equals a local one however identical its contents.
const products = Array.from(api.products);

// Whitespace between tags is the only thing a hand-written copy of generated markup is
// allowed to differ in: the shipped blocks are pretty-printed, app.js emits one line.
const compact = (markup) => markup.replace(/>\s+</g, "><").replace(/\s+/g, " ").trim();

// ---------------------------------------------------------------------------
// 1. the record

// A closed list, not a regex: a typo'd sourceType silently drops the 출처 유형 line from
// every rendering of that source rather than failing anywhere. Adding a genuinely new
// category is a one-line edit here, and it should be a deliberate one.
const SOURCE_TYPES = new Set(["제조사 기술·전문가 사양", "한국 공식 페이지·IFU", "MFDS 허가·UDI", "과학 문헌"]);

// The day this guard was written. A 확인일 after it records a check that had not happened
// yet, so it is a typo. Re-verifying the catalogue later than this date is a real event:
// move the constant in the same commit that moves the dates, on purpose.
const DATA_HORIZON = "2026-09-01";
// And a floor, expressed relative to the data rather than as a second hand-set date, so
// it tightens by itself as the catalogue is re-checked. A source two years older than the
// newest check on file is not a stale record, it is a mistyped year.
const MAX_AGE_DAYS = 730;
const DAY_MS = 24 * 60 * 60 * 1000;
const asDate = (iso) => Date.parse(`${iso}T00:00:00Z`);

test("every recorded source can actually be checked: raw wording, an https url, and a dated visit", () => {
  const newest = products
    .flatMap((product) => product.fields.flatMap((field) => (field.sources || []).map((source) => source.verifiedAt)))
    .sort()
    .pop();
  assert.match(String(newest), /^\d{4}-\d{2}-\d{2}$/, "the data carries no usable 확인일 at all");
  assert.ok(
    asDate(newest) <= asDate(DATA_HORIZON),
    `a source is dated ${newest}, after the ${DATA_HORIZON} horizon this test holds; if the catalogue really was re-verified later, move DATA_HORIZON deliberately`
  );
  const floor = asDate(newest) - MAX_AGE_DAYS * DAY_MS;

  const faults = [];
  const note = (where, message) => faults.push(`${where}: ${message}`);

  for (const product of products) {
    const where = product.id;
    if (!/^[a-z0-9][a-z0-9-]*$/.test(String(product.id))) note(where, "product id is not a slug");
    if (product.slug !== product.id) note(where, `slug ${JSON.stringify(product.slug)} does not match the id`);
    if (!fs.existsSync(path.join(root, "site/products", `${product.slug}.html`))) note(where, "has no product page on disk");
    for (const key of ["name", "selectorLabel", "maker", "distributor", "type"]) {
      if (!String(product[key] || "").trim()) note(where, `${key} is empty`);
    }

    const fieldIds = product.fields.map((field) => field.id);
    if (new Set(fieldIds).size !== fieldIds.length) note(where, `duplicate field ids in ${fieldIds.join(",")}`);
    // Every product answers the same nine questions. A missing field is not a gap in the
    // record, it is a row the reader never learns was never asked.
    const missing = api.PRODUCT_SUMMARY_FIELDS.filter((id) => !fieldIds.includes(id));
    const extra = fieldIds.filter((id) => !api.PRODUCT_SUMMARY_FIELDS.includes(id));
    if (missing.length) note(where, `missing field(s) ${missing.join(",")}`);
    if (extra.length) note(where, `unknown field(s) ${extra.join(",")}`);

    for (const field of product.fields) {
      const at = `${product.id}/${field.id}`;
      if (!api.FIELD_STATES.includes(field.state)) note(at, `state ${JSON.stringify(field.state)} is outside ${api.FIELD_STATES.join("|")}`);
      if (!String(field.value || "").trim()) note(at, "value is empty");
      if (!String(field.sourceSummary || "").trim()) note(at, "sourceSummary is empty");
      // 공식 출처 간 충돌 is a claim about two named readings. Without them the chip tells
      // the reader the sources disagree while showing nothing to compare.
      if (field.state === "conflict") {
        const conflicts = field.conflicts || [];
        if (conflicts.length < 2) note(at, "state is conflict but fewer than two conflicting readings are recorded");
        conflicts.forEach((conflict, index) => {
          if (!String(conflict.source || "").trim()) note(at, `conflicts[${index}] has no source`);
          if (!String(conflict.value || "").trim()) note(at, `conflicts[${index}] has no value`);
        });
      }

      const sources = field.sources || [];
      // 미확인 fields included: "we looked and it is not there" is itself a finding, and it
      // is only a finding if the record says where it was looked for.
      if (!sources.length) note(at, "has no source at all");
      sources.forEach((source, index) => {
        const cite = `${at}#${index}`;
        for (const key of ["raw", "organization", "document", "condition", "linkNote"]) {
          if (!String(source[key] || "").trim()) note(cite, `${key} is empty`);
        }
        if (!SOURCE_TYPES.has(source.sourceType)) note(cite, `sourceType ${JSON.stringify(source.sourceType)} is not one of the recorded categories`);
        if (!/^https:\/\/[^\s"']+$/.test(String(source.url || ""))) note(cite, `url ${JSON.stringify(source.url)} is not a plain https address`);
        // externalUrl is what every renderer puts in the href. A url it rejects renders as
        // 확인 가능한 주소 없음: a citation the reader is shown but cannot follow.
        if (api.externalUrl(source.url) === "#") note(cite, `url ${JSON.stringify(source.url)} is rejected by app.js and would render as 확인 가능한 주소 없음`);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(String(source.verifiedAt || ""))) {
          note(cite, `verifiedAt ${JSON.stringify(source.verifiedAt)} is not YYYY-MM-DD`);
          return;
        }
        const stamp = asDate(source.verifiedAt);
        if (Number.isNaN(stamp)) note(cite, `verifiedAt ${source.verifiedAt} is not a real date`);
        else if (stamp > asDate(DATA_HORIZON)) note(cite, `verifiedAt ${source.verifiedAt} is after the ${DATA_HORIZON} horizon`);
        else if (stamp < floor) note(cite, `verifiedAt ${source.verifiedAt} is more than ${MAX_AGE_DAYS} days older than the newest check on file (${newest})`);
      });
    }
  }

  assert.deepEqual(faults, []);
});

// ---------------------------------------------------------------------------
// 2. the second rendering

// The <noscript> spec table on a product page is a second, hand-authored rendering of the
// same records in a different table shape from the JS one, so it cannot simply be diffed
// against app.js output. It is rebuilt here from the data instead, cell by cell.
//
// Two things it deliberately does not carry, and this rebuild follows it: the aria-label
// prose on the scroll wrapper, which is written for the reader rather than derived, and
// the MFDS 연속착용 registration line app.js's summary table adds on three products, which
// comes from SUMMARY_EXTRA_NOTES in app.js and not from any source record. Everything
// else on the row is provenance and is checked exactly.
function expectedSpecRow(product, fieldId) {
  const field = product.fields.find((candidate) => candidate.id === fieldId);
  const item = api.resolvedField(field);
  const state = api.fieldState(item.state);
  const rowId = `ns-row-${item.id}`;
  const source = item.sources[0];
  const note = source.condition ? `<span class="cell-note">${api.text(source.condition)}</span>` : "";
  const valueClass = { conflict: "mono warn", unknown: "status-label status-unknown", verified: "mono" }[state];
  const labelNote = api.SUMMARY_LABEL_NOTES[item.id]
    ? `<br><span class="cell-note">${api.escapeHtml(api.SUMMARY_LABEL_NOTES[item.id])}</span>`
    : "";
  return "<tr>"
    + `<th id="${rowId}" scope="row">${api.escapeHtml(item.code)} · ${api.escapeHtml(item.label)}${labelNote}</th>`
    + `<td headers="${rowId} ns-col-value" data-label="공식 표기 값"><span class="${valueClass}">${api.text(item.value)}</span>${note}</td>`
    + `<td headers="${rowId} ns-col-state" data-label="상태"><span class="status-label status-${state}">${api.escapeHtml(api.stateLabel(item.state))}</span></td>`
    + `<td headers="${rowId} ns-col-source" data-label="첫 번째 출처">`
      + `<a href="${api.escapeHtml(api.externalUrl(source.url))}" target="_blank" rel="noopener noreferrer">${api.escapeHtml(source.document)}</a>`
      + `<span class="cell-note">${api.escapeHtml(source.organization)} · 확인일 ${api.displayDate(source.verifiedAt)}</span>`
    + "</td>"
    + "</tr>";
}

test("every product page's no-JS spec table is products.js, value by value and citation by citation", () => {
  for (const product of products) {
    const page = `site/products/${product.slug}.html`;
    const block = read(page).match(/<noscript>\s*<p class="table-caption" id="ns-spec-caption">[\s\S]*?<\/noscript>/);
    assert.ok(block, `${page} has no no-JS spec table; without JavaScript the page would show no values at all`);

    const caption = `<p class="table-caption" id="ns-spec-caption">${api.escapeHtml(product.name)} 공식 사양과 첫 번째 출처 · 확인일 ${api.latestVerifiedAt(product)}</p>`;
    assert.ok(
      compact(block[0]).includes(compact(caption)),
      `${page}: the no-JS caption does not name this product and its newest 확인일 as the data has them`
    );

    const expected = compact(
      '<table class="compare-table" aria-labelledby="ns-spec-caption">'
      + "<thead><tr>"
      + '<th id="ns-col-item" scope="col">항목</th>'
      + '<th id="ns-col-value" scope="col">공식 표기 값</th>'
      + '<th id="ns-col-state" scope="col">상태</th>'
      + '<th id="ns-col-source" scope="col">첫 번째 출처</th>'
      + "</tr></thead><tbody>"
      + api.PRODUCT_SUMMARY_FIELDS.map((fieldId) => expectedSpecRow(product, fieldId)).join("")
      + "</tbody></table>"
    );
    const actual = compact((block[0].match(/<table[\s\S]*<\/table>/) || [""])[0]);
    assert.equal(
      actual,
      expected,
      `${page}: the no-JS spec table no longer matches products.js. A reader without JavaScript sees only this table, so a value, state, condition, document name, organization, url or 확인일 that drifts here is a wrong citation shown to a real reader.`
    );
  }
});

// The comparison hub's fallback is the live table's own markup with every id prefixed ns-
// and the JS-only data-product hook dropped, so it can be regenerated exactly.
function nsPrefix(markup) {
  return markup
    .replace(/id="(col-|row-|compare-note-)/g, 'id="ns-$1')
    .replace(/aria-describedby="compare-note-/g, 'aria-describedby="ns-compare-note-')
    .replace(/headers="(row-[a-z0-9-]+) (col-[a-z0-9-]+)"/g, 'headers="ns-$1 ns-$2"')
    .replace(/ data-product="[^"]*"/g, "");
}

test("the comparison hub's no-JS table is the live table's own output over every product", () => {
  const html = read("site/compare/index.html");
  const byId = Object.fromEntries(products.map((product) => [product.id, product]));
  const columns = Array.from(api.COMPARE_COLUMNS).filter((column) => byId[column.productId]);
  assert.equal(columns.length, products.length, "COMPARE_COLUMNS no longer covers every product, so the no-JS table would silently omit one");

  const rows = Array.from(api.COMPARE_ROWS);
  const expected = compact(
    '<table class="compare-table" aria-labelledby="compare-caption">'
    + `<thead>${nsPrefix(api.compareHeadRow(columns, byId))}</thead>`
    + `<tbody>${rows.map((row) => nsPrefix(api.compareRow(row, byId, columns))).join("")}</tbody>`
    + "</table>"
  );
  const block = html.match(/<noscript>\s*<table class="compare-table" aria-labelledby="compare-caption">[\s\S]*?<\/noscript>/);
  assert.ok(block, "site/compare/index.html has no no-JS comparison table");
  assert.equal(
    compact((block[0].match(/<table[\s\S]*<\/table>/) || [""])[0]),
    expected,
    "site/compare/index.html: the no-JS comparison table is no longer what app.js renders from products.js"
  );

  const noteRows = rows.filter((row) => row.rowNote);
  assert.ok(noteRows.length, "the comparison table has lost its measurement-condition footnotes");
  const notes = nsPrefix(noteRows
    .map((row) => `<span class="table-footnote-item" id="compare-note-${api.escapeHtml(row.rowId)}">${api.escapeHtml(row.label)}: ${api.text(row.rowNote)}</span>`)
    .join(""));
  assert.ok(compact(html).includes(compact(notes)), "the no-JS comparison footnotes no longer match the row notes app.js prints");
});

test("the comparison hub's no-JS permit list cites the same documents the live list does", () => {
  const html = read("site/compare/index.html");
  const items = [];
  for (const entry of Array.from(api.PERMIT_EVIDENCE)) {
    const product = products.find((candidate) => candidate.id === entry.productId);
    assert.ok(product, `PERMIT_EVIDENCE names ${entry.productId}, which is not in products.js`);
    for (const fieldId of entry.fieldIds) {
      const field = product.fields.find((candidate) => candidate.id === fieldId);
      assert.ok(field, `PERMIT_EVIDENCE names ${entry.productId}/${fieldId}, which that product does not record`);
      for (const source of field.sources || []) {
        const url = api.externalUrl(source.url);
        if (url === "#") continue;
        items.push(`<li><a href="${api.escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${api.escapeHtml(source.document)}</a> <span class="cell-note">${api.escapeHtml(product.selectorLabel)} · ${api.escapeHtml(source.organization)}</span></li>`);
      }
    }
  }
  assert.ok(items.length, "PERMIT_EVIDENCE yielded no citations at all");

  const block = html.match(/<noscript>\s*<ul class="source-links">[\s\S]*?<\/noscript>/);
  assert.ok(block, "site/compare/index.html has no no-JS permit evidence list");
  assert.equal(
    compact((block[0].match(/<ul[\s\S]*<\/ul>/) || [""])[0]),
    compact(`<ul class="source-links">${items.join("")}</ul>`),
    "site/compare/index.html: the no-JS permit evidence list no longer matches the sources recorded for those fields"
  );
});

test("every term page's no-JS value distribution is the live table's own output", () => {
  const fieldIds = Array.from(api.TERM_FIELD_IDS);
  assert.deepEqual(
    fieldIds.slice().sort(),
    Array.from(api.PRODUCT_SUMMARY_FIELDS).sort(),
    "a field has a page on one side of the site and not the other"
  );

  for (const fieldId of fieldIds) {
    const page = `site/terms/${fieldId}.html`;
    const block = read(page).match(/<noscript>\n([\s\S]*?)\n\s*<\/noscript>/);
    assert.ok(block, `${page} has no no-JS distribution table`);
    // Same renderer, same prefix the shipped block was built with, so this is exact: no
    // whitespace tolerance is needed or wanted here.
    assert.equal(
      block[1],
      api.termDistributionMarkup(fieldId, "ns-"),
      `${page}: the no-JS distribution table is no longer what app.js renders from products.js`
    );
  }
});

// The three tests above rebuild the <noscript> copies — the rendering a reader sees only
// when JavaScript is off. The blocks below are the opposite case: markup that is the ONLY
// rendering, with or without JavaScript. app.js never rewrites a product page's package
// card or a product index card; `initProductIndex` reads each card's `h3 a` href and does
// nothing but show and hide the article it found. So every figure in them is hand-typed
// and, until now, unheld — five displayed-value mutations passed the whole suite. The
// metadata sentence is the same problem one step further out: it is what a search result
// prints, and nothing derived it from the record either.

// products.js is the only place a value lives; every rebuild below reads it through here.
const fieldOf = (product, fieldId) => {
  const field = product.fields.find((candidate) => candidate.id === fieldId);
  assert.ok(field, `${product.id} has no ${fieldId} field`);
  return field;
};

const labelItemMarkup = (spec) => {
  // The conflicted rows label themselves with the conflict marker and style it. The class
  // is not a free choice a page makes: it follows from the label, so it is derived here
  // rather than tolerated as a variant.
  const warn = spec.label === "공식 출처 간 차이" ? ' class="warn"' : "";
  return `<div class="label-item"><strong>${api.text(spec.value)}</strong><span${warn}>${api.escapeHtml(spec.label)}</span></div>`;
};

test("every product page's package card prints packageSpecs and the recorded maker", () => {
  for (const product of products) {
    const page = `site/products/${product.slug}.html`;
    const html = read(page);

    const grid = html.match(/<div class="label-grid">([\s\S]*?)<\/div>\s*<p class="sample-note">/);
    assert.ok(grid, `${page} has no package card label grid`);
    assert.equal(
      compact(grid[1]),
      compact((product.packageSpecs || []).map(labelItemMarkup).join("")),
      `${page}: the package card figures are no longer packageSpecs in products.js`
    );

    const note = html.match(/<p class="sample-note">([\s\S]*?)<\/p>/);
    assert.ok(note, `${page} has no sample note`);
    assert.equal(
      compact(note[1]),
      compact(`${api.escapeHtml(product.maker)} / ${api.escapeHtml(product.distributor)}`),
      `${page}: the package card names a maker or distributor the record does not`
    );
  }
});

test("the product index's cards are the records, in the records' own order", () => {
  const page = "site/products/index.html";
  const html = read(page);
  const gridStart = html.indexOf('<div class="cards-grid cards-wide" data-product-index>');
  assert.notEqual(gridStart, -1, `${page} has no product index grid`);
  // The grid ends at the first line that is nothing but a closing tag; every card's own
  // </div> sits at the end of a line with content on it.
  const grid = html.slice(gridStart).split(/\n\s*<\/div>/)[0];
  const cards = grid.match(/<article class="card">[\s\S]*?<\/article>/g) || [];
  assert.equal(cards.length, products.length, `${page} lists ${cards.length} cards for ${products.length} products`);

  // The catalogue's order is part of what the page says, and the filter matches cards to
  // records by href, so a card in the wrong place is a card describing another product.
  const hrefs = cards.map((card) => card.match(/<h3><a href="([^"]+)">/)?.[1]);
  assert.deepEqual(hrefs, products.map((product) => `./${product.slug}.html`));

  const cardValue = (product, fieldId) => api.text(fieldOf(product, fieldId).value);
  for (const [index, product] of products.entries()) {
    const card = cards[index];
    const at = `${page} card ${index + 1} (${product.id})`;
    assert.equal(compact(card.match(/<div class="category">([\s\S]*?)<\/div>/)[1]), compact(api.escapeHtml(product.type)), `${at}: category`);
    assert.equal(compact(card.match(/<h3><a href="[^"]+">([\s\S]*?)<\/a><\/h3>/)[1]), compact(api.escapeHtml(product.name)), `${at}: name`);
    assert.equal(
      compact(card.match(/<\/h3>\s*<p>([\s\S]*?)<\/p>/)[1]),
      compact(`${api.escapeHtml(product.maker)} / ${api.escapeHtml(product.distributor)}`),
      `${at}: maker line`
    );
    assert.equal(
      compact(card.match(/<div class="card-meta">([\s\S]*?)<\/div>/)[1]),
      compact(`<span>BC ${cardValue(product, "bc")}</span><span>DIA ${cardValue(product, "dia")}</span><span>함수율 ${cardValue(product, "water")}</span>`),
      `${at}: the three card figures are no longer the product's bc/dia/water values`
    );
  }
});

// The prose around the figures varies per page by design — which values are missing, and
// why, is a different sentence on every product — so the sentence is not rebuilt. What is
// held is that each figure inside it is the recorded one, and that the three copies of the
// sentence a crawler reads cannot drift apart from each other.
// A figure runs from its label to the first comma or Korean syllable after it, so the
// sentence can carry the value into prose ("Dk/t 80 / 86은 …") without the check reading
// the prose as part of the value. A label with no digit after it — "Dk/t·중심두께·UV는
// 확인되지 않았습니다" — quotes no figure, so there is nothing to hold and it is skipped.
const DESCRIPTION_TOKENS = [
  { fieldId: "bc", pattern: /BC\s([0-9][^,가-힣]*)/u },
  { fieldId: "dia", pattern: /DIA\s([0-9][^,가-힣]*)/u },
  { fieldId: "dkt", pattern: /Dk\/t\s([0-9][^,가-힣]*)/u },
  { fieldId: "thickness", pattern: /중심두께[는은이가]?\s([0-9][^,가-힣]*)/u },
  { fieldId: "permit", pattern: /(?:수허|제허)\s[0-9-]+\s호/u }
];

test("every product page's metadata sentence quotes the recorded figures, in three identical copies", () => {
  let checked = 0;
  for (const product of products) {
    const page = `site/products/${product.slug}.html`;
    const html = read(page);

    const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1];
    const openGraph = html.match(/<meta property="og:description" content="([^"]+)">/)?.[1];
    const jsonLdText = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    assert.ok(description, `${page} has no meta description`);
    assert.ok(openGraph, `${page} has no og:description`);
    assert.ok(jsonLdText, `${page} has no JSON-LD block`);

    // Three renderings of one sentence: the search snippet, the share card, the structured
    // record. A reader never sees them side by side, so only a test can.
    assert.equal(openGraph, description, `${page}: og:description has drifted from the meta description`);
    assert.equal(JSON.parse(jsonLdText).description, description, `${page}: the JSON-LD description has drifted from the meta description`);

    for (const { fieldId, pattern } of DESCRIPTION_TOKENS) {
      const hit = description.match(pattern);
      if (!hit) continue; // a page that does not quote this field says nothing to check
      const quoted = (hit[1] ?? hit[0]).trim();
      const recorded = String(fieldOf(product, fieldId).value);
      assert.ok(
        recorded.includes(quoted),
        `${page}: the description says ${fieldId} ${JSON.stringify(quoted)}, but the record says ${JSON.stringify(recorded)}`
      );
      checked += 1;
    }
  }
  // A containment check that matched nothing would pass in silence, so the sweep has to
  // prove it read something. Every product quotes at least its 허가번호.
  assert.ok(checked >= products.length, `only ${checked} figures were found to check across ${products.length} products`);
});

// ---------------------------------------------------------------------------
// 3. the committed digest

test("products.js still matches its committed snapshot", () => {
  const committed = snapshotTool.readSnapshot();
  const current = snapshotTool.snapshot(products);

  const howToUpdate = `\n\nIf this change is intentional: re-open the source each changed value cites and confirm the document still prints it, then run \`${snapshotTool.REGENERATE_COMMAND}\` and commit tests/products.snapshot.json alongside site/assets/data/products.js. Do not regenerate the snapshot to make the suite green — the snapshot is the record that somebody looked.`;

  assert.deepEqual(current.totals, committed.totals, `site/assets/data/products.js gained or lost records.${howToUpdate}`);

  const changed = Object.keys(current.products).filter((id) => current.products[id] !== committed.products[id]);
  const added = Object.keys(current.products).filter((id) => !(id in committed.products));
  const removed = Object.keys(committed.products).filter((id) => !(id in current.products));
  assert.deepEqual(
    { changed, added, removed },
    { changed: [], added: [], removed: [] },
    `verified data changed under a committed snapshot.${howToUpdate}`
  );
  assert.equal(
    current.digest,
    committed.digest,
    `the catalogue hashes differently than the committed snapshot even though no single product's record did — the order of the products changed.${howToUpdate}`
  );
});
