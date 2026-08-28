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
  "globalThis.__productFilter = { filterProducts, normalizeSearchText, normalizeReplacement };\n})();"
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

test("empty state behaves as reset and restores all 20 products", () => {
  assert.equal(filter.filterProducts(products, {}).length, 20);
  assert.equal(filter.filterProducts(products, { search: "없는 제품명" }).length, 0);
});
