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
vm.runInContext(fs.readFileSync(path.join(root, "site/assets/data/products.js"), "utf8"), context);

const appSource = fs.readFileSync(path.join(root, "site/assets/js/app.js"), "utf8").replace(
  /\}\)\(\);\s*$/,
  "globalThis.__verificationLayer = { summarizeEvidence };\n})();"
);
vm.runInContext(appSource, context);

test("evidence summary totals are calculated from every product field and source record", () => {
  const products = context.window.LENSFACT_PRODUCTS;
  const summary = context.__verificationLayer.summarizeEvidence(products);
  assert.deepEqual({ ...summary }, { products: 19, fields: 171, verified: 149, conflict: 10, unknown: 12, sources: 475 });
});

test("evidence summary follows its input instead of fixed repository totals", () => {
  const fixture = [
    { fields: [{ state: "verified", sources: [{}, {}] }, { state: "unknown", sources: [] }] },
    { fields: [{ state: "conflict", sources: [{}] }] }
  ];
  const summary = context.__verificationLayer.summarizeEvidence(fixture);
  assert.deepEqual({ ...summary }, { products: 2, fields: 3, verified: 1, conflict: 1, unknown: 1, sources: 3 });
});
