"use strict";

/*
 * Golden snapshot over site/assets/data/products.js.
 *
 *   node tools/products-snapshot.js           print the snapshot that the data implies
 *   node tools/products-snapshot.js --write   rewrite tests/products.snapshot.json
 *
 * Why a hash and not more assertions: the shape tests in tests/provenance.test.js can
 * say that a verifiedAt is a plausible date and that a url is https, but they cannot
 * say that 2026-08-28 is the day someone actually opened that document, or that this
 * url is the document the value came from. Nothing in a test can. What a committed
 * digest buys is that changing any of it is a deliberate act with a visible diff: the
 * suite fails until a human re-runs this tool, which is the moment to ask whether the
 * new value was re-verified against the source it cites.
 *
 * The digest is taken over every leaf of the product records — value, state, raw,
 * url, verifiedAt, condition, organization, document, linkNote, all of it — keyed by
 * its full path, so a moved array element reads as a change too.
 */

const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const SNAPSHOT_FILE = path.join(root, "tests", "products.snapshot.json");
const REGENERATE_COMMAND = "node tools/products-snapshot.js --write";

function loadProducts() {
  const context = { console, URL, URLSearchParams, window: {} };
  context.globalThis = context;
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, "site/assets/data/products.js"), "utf8"), context);
  return context.window.LENSFACT_PRODUCTS || [];
}

// One line per leaf: `path<TAB>JSON`. The path carries array indices, so reordering
// sources under a field changes the lines even though the multiset of values did not.
function leafLines(value, prefix, out) {
  if (Array.isArray(value)) {
    value.forEach((entry, index) => leafLines(entry, `${prefix}[${index}]`, out));
  } else if (value && typeof value === "object") {
    Object.keys(value).sort().forEach((key) => leafLines(value[key], `${prefix}.${key}`, out));
  } else {
    out.push(`${prefix}\t${JSON.stringify(value)}`);
  }
}

const sha256 = (text) => `sha256:${crypto.createHash("sha256").update(text, "utf8").digest("hex")}`;

function productLines(product) {
  const out = [];
  leafLines(product, product.id, out);
  return out.sort();
}

function snapshot(products = loadProducts()) {
  const order = products.map((product) => product.id);
  const perProduct = {};
  let leaves = 0;
  const all = [];
  for (const product of products) {
    const lines = productLines(product);
    leaves += lines.length;
    all.push(...lines);
    perProduct[product.id] = sha256(lines.join("\n"));
  }
  all.sort();
  const fields = products.reduce((total, product) => total + product.fields.length, 0);
  const sources = products.reduce(
    (total, product) => total + product.fields.reduce((count, field) => count + (field.sources || []).length, 0),
    0
  );
  return {
    note: "Digest over every leaf value of site/assets/data/products.js. It exists so that no verified value, source url, document name or 확인일 can change without the change being deliberate and visible in a diff.",
    regenerate: REGENERATE_COMMAND,
    beforeYouRegenerate: "Re-open the cited source and confirm the new value is what that document actually prints. The site's promise is the trace, not the number.",
    totals: { products: products.length, fields, sources, leaves },
    digest: sha256(`${order.join(",")}\n${all.join("\n")}`),
    products: perProduct
  };
}

function readSnapshot() {
  return JSON.parse(fs.readFileSync(SNAPSHOT_FILE, "utf8"));
}

function write() {
  fs.writeFileSync(SNAPSHOT_FILE, `${JSON.stringify(snapshot(), null, 2)}\n`, "utf8");
}

module.exports = { snapshot, readSnapshot, loadProducts, SNAPSHOT_FILE, REGENERATE_COMMAND };

if (require.main === module) {
  if (process.argv.includes("--write")) {
    write();
    process.stdout.write(`wrote ${path.relative(root, SNAPSHOT_FILE).split(path.sep).join("/")}\n`);
  } else {
    process.stdout.write(`${JSON.stringify(snapshot(), null, 2)}\n`);
  }
}
