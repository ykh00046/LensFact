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

const appSource = fs.readFileSync(path.join(root, "site/assets/js/app.js"), "utf8").replace(
  /\}\)\(\);\s*$/,
  "globalThis.__compareView = { compareRowsForView, parseCompareUrl, serializeCompareUrl };\n})();"
);
vm.runInContext(appSource, context);

const compare = context.__compareView;
const rows = [
  { rowId: "same", fieldId: "bc" },
  { rowId: "value-diff", fieldId: "dia" },
  { rowId: "state-diff", fieldId: "water" },
  { rowId: "conflict", fieldId: "dkt" },
  { rowId: "unknown", fieldId: "uv" },
  { rowId: "memo", memo: {} }
];
const selected = [
  { fields: [
    { id: "bc", state: "verified", value: "8.5" },
    { id: "dia", state: "verified", value: "14.0" },
    { id: "water", state: "verified", value: "55%" },
    { id: "dkt", state: "verified", value: "100" },
    { id: "uv", state: "verified", value: "있음" }
  ] },
  { fields: [
    { id: "bc", state: "verified", value: "8.5" },
    { id: "dia", state: "verified", value: "14.00" },
    { id: "water", state: "unknown", value: "55%" },
    { id: "dkt", state: "conflict", value: "100 / 101" },
    { id: "uv", state: "unknown", value: "공식 자료에서 미확인" }
  ] }
];

test("all view keeps every compare row including memo", () => {
  assert.deepEqual(Array.from(compare.compareRowsForView(rows, selected, "all"), ({ rowId }) => rowId), rows.map(({ rowId }) => rowId));
});

test("diff view compares the stored state and value pair without numeric collapsing", () => {
  assert.deepEqual(Array.from(compare.compareRowsForView(rows, selected, "diff"), ({ rowId }) => rowId), ["value-diff", "state-diff", "conflict", "unknown"]);
});

test("issues view includes conflict and unknown fields but excludes equal and memo rows", () => {
  assert.deepEqual(Array.from(compare.compareRowsForView(rows, selected, "issues"), ({ rowId }) => rowId), ["state-diff", "conflict", "unknown"]);
});

test("compare URL parsing sanitizes view and selection", () => {
  const parsed = compare.parseCompareUrl("https://example.test/compare/?p=b,a,b,missing&view=issues", ["a", "b", "c"]);
  assert.deepEqual(Array.from(parsed.selected), ["b", "a"]);
  assert.equal(parsed.view, "issues");
  assert.equal(compare.parseCompareUrl("https://example.test/compare/?view=invalid", ["a", "b", "c"]).view, "all");
});

test("compare URL serialization preserves selection, mode, and unrelated parameters", () => {
  const diffUrl = new URL(compare.serializeCompareUrl("https://example.test/compare/?p=old&view=issues&utm=test#table", ["a", "b"], "diff"), "https://example.test");
  assert.equal(diffUrl.searchParams.get("p"), "a,b");
  assert.equal(diffUrl.searchParams.get("view"), "diff");
  assert.equal(diffUrl.searchParams.get("utm"), "test");
  assert.equal(diffUrl.hash, "#table");

  const allUrl = new URL(compare.serializeCompareUrl(diffUrl.href, ["b"], "all"), "https://example.test");
  assert.equal(allUrl.searchParams.get("p"), "b");
  assert.equal(allUrl.searchParams.has("view"), false);
  assert.equal(allUrl.searchParams.get("utm"), "test");
});

test("compare controls are progressively present with exactly three modes", () => {
  const html = fs.readFileSync(path.join(root, "site/compare/index.html"), "utf8");
  const controls = html.match(/<div[^>]+data-compare-view[^>]*>[\s\S]*?<\/div>/)?.[0] || "";

  assert.match(controls, /hidden/);
  assert.equal((controls.match(/data-compare-mode=/g) || []).length, 3);
  for (const label of ["전체 보기", "차이만 보기", "충돌·미확인만 보기"]) assert.match(controls, new RegExp(label));
});
