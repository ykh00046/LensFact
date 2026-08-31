"use strict";

/*
 * Generates the product pair pages under site/compare/.
 *
 *   node tools/build-pair-pages.js          write the files
 *   node tools/build-pair-pages.js --check  fail if a committed file differs
 *
 * Every figure, state, condition, source and count on a pair page comes from
 * site/assets/data/products.js through the pair functions in site/assets/js/app.js —
 * the same functions the browser runs — so nothing here restates a value. The harness
 * that reaches those functions is the one tests/compare-view.test.js already uses:
 * load the data and the script in a vm context and replace the closing `})();` with an
 * export line.
 *
 * The only hand-written text in a pair page is in PAIR_COPY below: the h1 tail and one
 * lead sentence per pair. Both are pair-specific and neither states a figure.
 */

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

// The day the pair pages were written. It is the sitemap's <lastmod> and the JSON-LD
// dateModified; the per-value 확인일 shown on the page is computed from the data instead.
const PAGE_DATE = "2026-08-31";

// One angle per pair, in the words of the editor rather than of the data. Neither line
// may state a figure, a ranking or a suitability judgement.
const PAIR_COPY = {
  "acuvue-oasys-1-day-vs-dailies-total1.html": {
    headline: "두 제조사가 같은 항목을 다르게 적습니다",
    lead: "둘 다 교체주기 1일로 표기된 실리콘 하이드로겔 렌즈지만, 두 제조사가 함수율과 산소 전달률을 적는 방식이 서로 달라 몇몇 항목은 숫자를 나란히 놓는 일 자체가 성립하지 않습니다."
  },
  "acuvue-oasys-1-day-vs-acuvue-moist-1-day.html": {
    headline: "같은 사양표에 실린 두 제품, 갈리는 재질 계열",
    lead: "두 제품의 값은 같은 제조사의 같은 기술 사양표에서 나왔습니다. 그래서 시험 조건을 두고 다툴 일이 거의 없는 대신, 재질 계열이 갈리는 지점이 그대로 드러납니다."
  },
  "myday-vs-clariti-1-day.html": {
    headline: "같은 사양서 안에서 값이 흔들리는 두 제품",
    lead: "같은 제조사의 한국 사양서 한 장에 나란히 실린 두 제품입니다. 그런데 한쪽은 재질명과 산소 전달률이 공식 자료끼리 어긋나 있고, 두 제품 모두 중심두께를 적은 공식 자료가 없습니다."
  },
  "dailies-total1-vs-dailies-aquacomfort-plus.html": {
    headline: "이름은 같은 계열, 재질은 다른 계열",
    lead: "한국에서 같은 데일리스 이름으로 팔리는 두 제품이지만 재질 계열이 다르고, 함수율을 어디에서 쟀는지도 다릅니다. 함수율 숫자만 큰 쪽을 골라 읽으면 안 되는 전형적인 조합입니다."
  },
  "biofinity-vs-airoptix-plus-hydraglyde.html": {
    headline: "한쪽은 한국 공식 제품 페이지가 없습니다",
    lead: "식약처에는 두 제품이 같은 소분류로 등록돼 있지만, 한쪽은 한국 공식 제품 페이지 자체가 없어 물성값의 근거가 전부 글로벌 문서입니다. 교체주기조차 한쪽은 착용방식과 한 칸에 붙여 인쇄돼 있어, 무엇이 같은 항목으로 놓이는지부터 항목별로 확인해야 합니다."
  },
  "acuvue-oasys-1-day-vs-acuvue-oasys-max-1-day.html": {
    headline: "공식 표기만으로는 거의 구분되지 않는 두 제품",
    lead: "같은 제조사의 같은 사양표에서 두 제품은 대부분의 항목에 똑같은 값을 인쇄합니다. 값이 같다는 것이 같은 제품이라는 뜻은 아니며, 실제로 무엇이 다른지는 표가 아니라 표기의 차이에서 드러납니다."
  },
  "acuvue-oasys-1-day-vs-acuvue-oasys-2-week.html": {
    headline: "같은 재질, 다른 두께, 다른 산소 전달률",
    lead: "재질명과 함수율 표기가 같은 두 제품인데 산소 전달률은 다릅니다. 두 값이 같은 문서·같은 시험 조건에서 나왔기 때문에, 그 차이를 무엇으로 읽어야 하는지까지 공식 자료 안에서 확인할 수 있습니다."
  },
  "dailies-total1-vs-total30.html": {
    headline: "코어와 표면을 따로 적는 두 제품",
    lead: "같은 제조사가 코어와 표면 함수율을 따로 적는 두 제품입니다. 표면 함수율은 같은 회사의 문서 사이에서도 다르게 인쇄되고, 산소 전달률은 두 원문 모두 측정법을 밝히지 않습니다."
  }
};

function loadPairApi() {
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
  vm.runInContext(
    read("site/assets/js/app.js").replace(
      /\}\)\(\);\s*$/,
      "globalThis.__pairApi = { PAIR_PAGES, products, pairProducts, pairFile, pairLabel, pairBodyMarkup, pairMetaTitle, pairMetaDescription, pairCountSentence, pairVerifiedAt, pairBuckets, pairMaterialFamily, pairSearchName, escapeHtml };\n})();"
    ),
    context
  );
  return context.__pairApi;
}

const api = loadPairApi();

const COI_DISCLOSURE = (product) =>
  `        <p class="coi-banner"><strong>운영자 근무처 제품 · 이해관계 공시</strong><br>이 페이지가 다루는 ${api.escapeHtml(product.name)}의 제조사 ${api.escapeHtml(product.maker)}는 이 사이트 운영자의 근무처입니다. 이 페이지의 값은 다른 제품과 같은 절차로 공개 자료에서만 옮겨 적었고 사내 자료나 업무상 알게 된 정보는 사용하지 않았습니다. <a href="../about/index.html#coi">소개 · 운영자와 이해관계 공개</a></p>\n`;

function pairPageHtml(ids) {
  const file = api.pairFile(ids);
  const copy = PAIR_COPY[file];
  if (!copy) throw new Error(`no authored copy for ${file}`);
  const pair = api.pairProducts(ids);
  if (!pair) throw new Error(`unknown products for ${file}`);

  const title = api.pairMetaTitle(pair);
  const description = api.pairMetaDescription(pair);
  const canonical = `https://DOMAIN-TBD/compare/${file}`;
  const heading = `${pair[0].selectorLabel} vs ${pair[1].selectorLabel} — ${copy.headline}`;
  const coi = pair.filter((product) => product.coi).map(COI_DISCLOSURE).join("");
  const preselect = `./index.html?p=${ids.join(",")}`;

  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${api.escapeHtml(title)}</title>
  <meta name="description" content="${api.escapeHtml(description)}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:title" content="${api.escapeHtml(title)}">
  <meta property="og:description" content="${api.escapeHtml(description)}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonical}">
  <meta property="og:locale" content="ko_KR">
  <meta name="twitter:card" content="summary">
  <meta name="theme-color" content="#FBF9F8">
  <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%232A2527'/%3E%3Ctext%20x='16'%20y='22'%20font-family='system-ui,sans-serif'%20font-size='14'%20font-weight='700'%20fill='%23FFFFFF'%20text-anchor='middle'%3ELF%3C/text%3E%3C/svg%3E">
  <link rel="stylesheet" href="../assets/fonts/pretendard/pretendard-dynamic-subset.css">
  <link rel="stylesheet" href="../assets/css/style.css">
  <noscript><style>/* Without JavaScript the menu button can never open anything, so the mobile nav
       stays expanded in flow instead of hiding behind a dead toggle. */
    @media (max-width: 900px) { .menu-toggle { display: none; } .mobile-nav[hidden] { position: static; display: grid; } }</style></noscript>
  <script src="../assets/data/fields.js" defer></script>
  <script src="../assets/data/products.js" defer></script>
  <script src="../assets/js/app.js" defer></script>
  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: title, description, dateModified: PAGE_DATE })}</script>
</head>
<body>
  <a class="skip-link" href="#main">본문으로 건너뛰기</a>
  <header class="site-header">
    <div class="wrap header-inner">
      <a class="brand" href="../index.html" aria-label="LensFact 홈"><span class="brand-mark">LF</span>렌즈팩트</a>
      <nav class="nav desktop-nav" aria-label="주요 메뉴">
        <a href="../decoder/index.html">포장 숫자 해석</a>
        <a href="../products/index.html">제품</a>
        <a href="../products/index.html#product-search">검색</a>
        <a href="../compare/index.html" aria-current="page">공식 사양 비교</a>
        <a href="../knowledge/index.html">렌즈 상식</a>
        <a href="../about/index.html">소개</a>
      </nav>
      <button class="menu-toggle" type="button" data-menu-toggle aria-label="메뉴 열기" aria-expanded="false" aria-controls="mobile-nav"><span aria-hidden="true"></span></button>
    </div>
    <nav class="nav mobile-nav" id="mobile-nav" aria-label="모바일 메뉴" hidden>
      <a href="../decoder/index.html">포장 숫자 해석</a>
      <a href="../products/index.html">제품</a>
      <a href="../products/index.html#product-search">검색</a>
      <a href="../compare/index.html" aria-current="page">공식 사양 비교</a>
      <a href="../knowledge/index.html">렌즈 상식</a>
      <a href="../about/index.html">소개</a>
      <a href="../policy/editorial.html">편집방침</a>
      <a href="../policy/methodology.html">근거·방법론</a>
      <a href="../policy/privacy.html">개인정보처리방침</a>
    </nav>
  </header>

  <main id="main" data-compare-pair="${ids.join(",")}">
    <section class="section alt">
      <div class="wrap">
        <p class="eyebrow" data-pair-eyebrow>두 제품 공식 표기 비교 · 확인일 ${api.pairVerifiedAt(pair)}</p>
        <h1 class="page-title">${api.escapeHtml(heading)}</h1>
${coi}        <p class="lead">${api.escapeHtml(copy.lead)}</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap doc-shell">
        <section class="comparison-limits" aria-labelledby="pair-limits-title">
          <h2 id="pair-limits-title">이 페이지가 답하는 질문</h2>
          <ul>
            <li>어느 제품이 더 나은지는 말하지 않습니다. 추천·순위·점수·개인 적합성 판단이 없습니다.</li>
            <li>두 제품의 공식 표기 중 무엇이 같은 항목으로 놓이고 무엇이 놓일 수 없는지만 구분합니다.</li>
            <li>공식 출처끼리 값이 다르면 합치거나 한쪽을 고르지 않고 원문을 그대로 둡니다.</li>
          </ul>
          <p class="editor-note" data-pair-count>${api.escapeHtml(api.pairCountSentence(pair))}</p>
        </section>

        <div data-pair-live hidden></div>
        <noscript>
${api.pairBodyMarkup(ids, "ns-")}
        </noscript>

        <section class="source-section article-body" aria-labelledby="pair-boundary-title">
          <h2 id="pair-boundary-title">이 페이지가 판단하지 않는 것</h2>
          <ul>
            <li>두 제품 중 어느 쪽도 추천하지 않으며 순위나 점수를 매기지 않습니다.</li>
            <li>개인의 적합성, 착용감, 처방 도수를 판단하지 않습니다.</li>
            <li>여기 적힌 값은 공식 자료의 표기이며 성능이나 안전성의 보증이 아닙니다.</li>
            <li>표기를 찾지 못한 항목은 기능이 없다는 뜻이 아니라 공개 자료에서 확인하지 못했다는 뜻입니다.</li>
          </ul>
          <p class="editor-note">최종 도수·피팅·착용방식은 안경사 또는 안과 전문인에게 확인해야 합니다. 이 페이지의 설명은 그 판단을 대신하지 않습니다.</p>
        </section>

        <div class="cta-grid">
          <article class="card"><h3>제품을 더 넣어 비교하기</h3><p>이 두 제품을 비교표에 그대로 열고, 최대 네 개까지 제품을 더 고를 수 있습니다.</p><div class="actions"><a class="button" href="${preselect}">비교표에서 열기</a><a class="text-button" href="./index.html">스무 제품 비교표 열기</a></div></article>
          <article class="card"><h3>제품 하나씩 자세히 보기</h3><p>각 값의 기관·문서명·원문 표기·주소·확인일을 제품 페이지에서 그대로 확인합니다.</p><div class="actions"><a class="text-button" href="../products/${pair[0].slug}.html">${api.escapeHtml(pair[0].selectorLabel)} 공식 사양</a><a class="text-button" href="../products/${pair[1].slug}.html">${api.escapeHtml(pair[1].selectorLabel)} 공식 사양</a></div></article>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="wrap footer-inner">
      <span class="footer-boundary">최종 적합성·도수·피팅은 안경사 또는 안과 전문인에게 확인하세요.</span>
      <span class="footer-brand">LENSFACT 렌즈팩트<br>독립 정보 서비스 · 판매하지 않습니다</span>
    </div>
    <nav class="wrap footer-links" aria-label="사이트 정보">
      <a href="../about/index.html">소개</a>
      <a href="../policy/editorial.html">편집방침</a>
      <a href="../policy/methodology.html">근거·방법론</a>
      <a href="../policy/privacy.html">개인정보처리방침</a>
    </nav>
  </footer>
</body>
</html>
`;
}

// A Windows checkout can hold these files with CRLF endings while git stores LF, so
// every comparison against a committed file is made on the content, not the terminator.
const normalizeEol = (value) => String(value).split("\r\n").join("\n");

function pairPageFiles() {
  return api.PAIR_PAGES.map((page) => ({
    relativePath: `site/compare/${api.pairFile(page.ids)}`,
    html: pairPageHtml(page.ids)
  }));
}

function main() {
  const check = process.argv.includes("--check");
  let drifted = 0;
  for (const page of pairPageFiles()) {
    const full = path.join(root, page.relativePath);
    const current = fs.existsSync(full) ? fs.readFileSync(full, "utf8") : "";
    // A Windows checkout can hold the same file with CRLF endings, so the comparison is
    // made on the content rather than on the line terminator git normalises anyway.
    if (normalizeEol(current) === normalizeEol(page.html)) {
      console.log(`unchanged ${page.relativePath}`);
      continue;
    }
    if (check) {
      drifted += 1;
      console.error(`DRIFTED  ${page.relativePath}`);
      continue;
    }
    fs.writeFileSync(full, page.html);
    console.log(`written   ${page.relativePath}`);
  }
  if (check && drifted) {
    console.error(`${drifted} pair page(s) differ from the generator output. Run: node tools/build-pair-pages.js`);
    process.exitCode = 1;
  }
}

module.exports = { PAGE_DATE, PAIR_COPY, pairPageHtml, pairPageFiles, loadPairApi, normalizeEol };

if (require.main === module) main();
