"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const context = {
  console,
  URL,
  window: {},
  document: {
    addEventListener() {},
    querySelector() { return null; },
    querySelectorAll() { return []; }
  }
};
context.globalThis = context;
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "site/assets/data/products.js"), "utf8"), context);

const appSource = fs.readFileSync(path.join(root, "site/assets/js/app.js"), "utf8").replace(
  /\}\)\(\);\s*$/,
  "globalThis.__productFilter = { filterProducts, normalizeSearchText, normalizeReplacement, fieldValues };\n})();"
);
vm.runInContext(appSource, context);

const products = context.window.LENSFACT_PRODUCTS;
const filter = context.__productFilter;

test("search matches normalized names, aliases, makers, and distributors", () => {
  assert.deepEqual(
    Array.from(filter.filterProducts(products, { search: "  DAILIES TOTAL1®  " }), ({ id }) => id),
    ["dailies-total1"]
  );
  assert.ok(filter.filterProducts(products, { search: "아쿠아 렌즈" }).some(({ id }) => id === "dailies-aquacomfort-plus"));
  assert.equal(filter.filterProducts(products, { search: "Johnson & Johnson" }).length, 5);
  assert.equal(filter.filterProducts(products, { search: "인터로조" }).length, 1);
});

test("replacement spellings normalize to the supported monthly option", () => {
  for (const value of ["1달", "30일", "한 달", "1개월"]) {
    assert.equal(filter.normalizeReplacement(value), "1개월");
  }
});

test("manufacturer, replacement, and search filters combine with AND", () => {
  const matches = filter.filterProducts(products, {
    search: "biofinity",
    maker: "CooperVision",
    replacement: "1개월"
  });
  assert.deepEqual(Array.from(matches, ({ id }) => id), ["biofinity", "biofinity-energys"]);

  assert.equal(filter.filterProducts(products, {
    search: "biofinity",
    maker: "Alcon",
    replacement: "1개월"
  }).length, 0);
});

test("spec deep links match the exact printed figure and combine with the other filters", () => {
  const bc86 = filter.filterProducts(products, { specs: { bc: "8.6" } });
  assert.equal(bc86.length, 9);
  assert.ok(bc86.every(({ id }) => id !== "acuvue-oasys-1-day"));
  // 8.60 and 8.6 are the same printed figure; 8.65 is not on file.
  assert.equal(filter.filterProducts(products, { specs: { bc: "8.60" } }).length, 9);
  assert.equal(filter.filterProducts(products, { specs: { bc: "8.65" } }).length, 0);

  assert.deepEqual(
    Array.from(filter.filterProducts(products, { specs: { bc: "8.6", dia: "14.0" } }), ({ id }) => id),
    ["biofinity", "biofinity-energys"]
  );
  assert.deepEqual(
    Array.from(filter.filterProducts(products, { maker: "CooperVision", specs: { material: "comfilcon A" } }), ({ id }) => id),
    ["biofinity", "biofinity-energys"]
  );
  assert.equal(filter.filterProducts(products, { maker: "Alcon", specs: { material: "comfilcon A" } }).length, 0);
});

test("a conflicted field matches either recorded value and an unknown field matches none", () => {
  // Biofinity's Dk/t is recorded as "170 / 171"; both figures stay reachable.
  for (const value of ["170", "171"]) {
    assert.ok(filter.filterProducts(products, { specs: { dkt: value } }).some(({ id }) => id === "biofinity"));
  }
  // clariti 1 day's material disagrees between official sources.
  for (const value of ["somofilcon A", "stenfilcon A"]) {
    assert.ok(filter.filterProducts(products, { specs: { material: value } }).some(({ id }) => id === "clariti-1-day"));
  }
  // Miru 1day and SofLens daily have no Dk/t on file: "not found" never matches a number.
  const unknownDkt = products.filter((product) => !filter.fieldValues("dkt", product.fields.find((field) => field.id === "dkt")).length);
  assert.deepEqual(Array.from(unknownDkt, ({ id }) => id), ["miru-1day", "soflens-daily"]);
  for (const value of ["0", "22", "170"]) {
    assert.ok(filter.filterProducts(products, { specs: { dkt: value } }).every(({ id }) => id !== "miru-1day"));
  }
});

test("empty state behaves as reset and restores all 20 products", () => {
  assert.equal(filter.filterProducts(products, {}).length, 20);
  assert.equal(filter.filterProducts(products, { search: "없는 제품명" }).length, 0);
});
