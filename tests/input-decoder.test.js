"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");

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

const appPath = path.join(root, "site/assets/js/app.js");
const appSource = fs.readFileSync(appPath, "utf8").replace(
  /\}\)\(\);\s*$/,
  "globalThis.__decoder = { fieldMatch, inputSpec, matchListMarkup, placementSentence };\n})();"
);
vm.runInContext(appSource, context);

const products = context.window.LENSFACT_PRODUCTS;
const decoder = context.__decoder;
const product = (id) => products.find((candidate) => candidate.id === id);
const match = (fieldId, raw, id, number) => decoder.fieldMatch(
  decoder.inputSpec(fieldId),
  { raw, number, label: number === undefined ? raw : `${number}%` },
  product(id)
);

test("material matches only exact normalized material values", () => {
  assert.ok(match("material", "comfilcon A", "biofinity"));
  assert.ok(match("material", "comfilcon A", "biofinity-energys"));

  for (const raw of ["Biofinity", "Clalen", "a", "con"]) {
    const matchingProducts = products.filter((candidate) => match("material", raw, candidate.id));
    assert.equal(matchingProducts.length, 0, raw);
  }
});

test("1개월 includes every explicit monthly wording", () => {
  assert.ok(match("replacement", "1개월", "acuvue-vita"));
  assert.ok(match("replacement", "1개월", "airoptix-plus-hydraglyde"));
});

test("surface water is acknowledged but is not a direct match", () => {
  const spec = decoder.inputSpec("water");
  const entry = { raw: "80", number: 80, label: "80%" };
  const dailies = product("dailies-total1");

  assert.equal(decoder.fieldMatch(spec, entry, dailies), null);
  const sentence = decoder.placementSentence(spec, entry, []);
  assert.match(sentence, /DAILIES TOTAL1/);
  assert.match(sentence, /표면 80% 이상/);
  assert.match(sentence, /측정 위치/);
  assert.match(sentence, /직접 대조할 수 없/);
});

test("surface water no-match list explains why the same number is excluded", () => {
  const spec = decoder.inputSpec("water");
  const entry = { spec, raw: "80", number: 80, label: "80%" };

  const markup = decoder.matchListMarkup([entry]);

  assert.match(markup, /직접 비교할 수 있는 동일 표기/);
  assert.match(markup, /측정 위치를 알 수 없어 직접 일치에서 제외/);
  assert.doesNotMatch(markup, /입력한 값과 같은 표기가 있는 제품이 없습니다/);
});

test("an explicit core value remains directly comparable only as core", () => {
  const hit = match("water", "33", "dailies-total1", 33);
  assert.ok(hit);
  assert.equal(hit.note, "코어 기준");
});
