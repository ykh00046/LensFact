const ADS_ENABLED = false;

(function () {
  "use strict";

  const products = window.LENSFACT_PRODUCTS || [];
  const fieldCopy = window.LENSFACT_FIELD_COPY || {};
  const articles = window.LENSFACT_ARTICLES || [];
  let activeProduct = null;
  let activeFieldId = null;

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function escapeHtml(value) {
    return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }

  const SUPERSCRIPT_MAP = { "⁻": "-", "⁺": "+", "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9" };

  // Display-only: the mono fallback stack renders unicode superscripts poorly, so
  // render them as <sup> markup. The stored data is never modified.
  function superscriptMarkup(escaped) {
    return escaped.replace(/[⁺⁻⁰¹²³⁴-⁹]+/g, (run) => `<sup>${Array.from(run).map((char) => SUPERSCRIPT_MAP[char] || "").join("")}</sup>`);
  }

  function text(value) {
    return superscriptMarkup(escapeHtml(value));
  }

  function displayDate(value) {
    return escapeHtml(value).replaceAll("-", ".");
  }

  function externalUrl(value) {
    try {
      const url = new URL(String(value));
      return url.protocol === "https:" || url.protocol === "http:" ? url.href : "#";
    } catch {
      return "#";
    }
  }

  function internalHref(value) {
    const href = String(value || "");
    if (!href) return "#";
    if (href.includes("://")) return "#";
    if (href.startsWith("//")) return "#";
    if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(href)) return "#";
    return href;
  }

  function setExpanded(button, expanded) {
    button.setAttribute("aria-expanded", String(expanded));
  }

  function setPressed(button, pressed) {
    button.setAttribute("aria-pressed", String(pressed));
  }

  function toggleHidden(panel, hidden) {
    if (panel) panel.hidden = hidden;
  }

  function initMenu() {
    const button = qs("[data-menu-toggle]");
    const panel = qs("#mobile-nav");
    if (!button || !panel) return;

    function setMenuState(open) {
      setExpanded(button, open);
      button.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
      toggleHidden(panel, !open);
      document.body.classList.toggle("menu-open", open);
    }

    function isOpen() {
      return button.getAttribute("aria-expanded") === "true";
    }

    button.addEventListener("click", () => setMenuState(!isOpen()));
    panel.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenuState(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !isOpen()) return;
      setMenuState(false);
      button.focus();
    });

    document.addEventListener("click", (event) => {
      if (!isOpen()) return;
      if (panel.contains(event.target) || button.contains(event.target)) return;
      setMenuState(false);
    });
  }

  const FIELD_STATES = ["verified", "conflict", "unknown"];

  function fieldState(state) {
    return FIELD_STATES.includes(state) ? state : "unknown";
  }

  function stateLabel(state) {
    return { verified: "공식 원문 확인", conflict: "공식 출처 간 충돌", unknown: "공식 자료에서 미확인" }[fieldState(state)];
  }

  // Conflict-of-interest disclosure. One product on file is manufactured by the site
  // operator's employer. Every screen that shows such a product carries the same visible
  // label; the product page adds a banner that links to the disclosure on the about page.
  const COI_LABEL = "운영자 근무처 제품 · 이해관계 공시";

  function coiChip(product) {
    return product?.coi ? `<span class="coi-chip">${escapeHtml(COI_LABEL)}</span>` : "";
  }

  function resolvedField(field) {
    const copy = fieldCopy[field.id] || {};
    return { ...copy, ...field, caution: field.caution || copy.caution || "", meaning: field.meaning || copy.meaning || "" };
  }

  function sourceBlock(source, index, scope = "decoder") {
    const url = externalUrl(source.url);
    const recordId = `source-record-${escapeHtml(scope)}-${index}`;
    const urlMarkup = url === "#" ? "확인 가능한 주소 없음" : `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">원문 링크 열기</a>`;
    const sourceType = source.sourceType ? `<div><dt>출처 유형</dt><dd>${escapeHtml(source.sourceType)}</dd></div>` : "";
    const verifiedAt = source.verifiedAt ? `<div><dt>확인일</dt><dd>${displayDate(source.verifiedAt)}</dd></div>` : "";
    return `<section class="source-record" aria-labelledby="${recordId}">
      <h4 id="${recordId}">출처 ${index + 1} · ${escapeHtml(source.organization)}</h4>
      <dl class="source-definition">
        ${sourceType}
        <div><dt>기관·제조사</dt><dd>${escapeHtml(source.organization)}</dd></div>
        <div><dt>문서명</dt><dd>${escapeHtml(source.document)}</dd></div>
        <div><dt>원문 표기</dt><dd>${text(source.raw)}</dd></div>
        <div><dt>주소</dt><dd>${urlMarkup}</dd></div>
        ${verifiedAt}
        <div><dt>측정·확인 조건</dt><dd>${text(source.condition)}</dd></div>
        <div><dt>제품 연결</dt><dd>${text(source.linkNote)}</dd></div>
      </dl>
    </section>`;
  }

  function detailLiveRegion() {
    let region = qs("[data-detail-live]");
    if (!region) {
      region = document.createElement("div");
      region.className = "visually-hidden";
      region.setAttribute("aria-live", "polite");
      region.setAttribute("data-detail-live", "");
      document.body.appendChild(region);
    }
    return region;
  }

  function conflictBlock(item) {
    if (!item.conflicts?.length) return "";
    const conflictNote = '<p class="conflict-note">두 값을 임의로 하나로 정리하지 않고 출처별 값을 그대로 보여 드립니다.</p>';
    const items = item.conflicts.map((conflict) => `<div class="conflict-item"><span>${escapeHtml(conflict.source)}</span><strong>${text(conflict.value)}</strong></div>`).join("");
    return `<div class="info-block"><div class="info-label warn">출처별 원문값</div><div class="conflict-grid">${items}</div>${conflictNote}</div>`;
  }

  function renderDetail(field) {
    const panel = qs("[data-decoder-detail]");
    if (!panel) return;
    const item = resolvedField(field);
    const state = fieldState(item.state);
    const conflicts = conflictBlock(item);

    panel.innerHTML = `<div class="detail-title">
        <div><div class="detail-code">${escapeHtml(item.code)}</div><div>${escapeHtml(item.label)}</div></div>
        <div class="detail-value" data-state="${state}">${text(item.value)}</div>
      </div>
      <div class="status-label status-${state}">${escapeHtml(stateLabel(item.state))}</div>
      <div class="info-block"><div class="info-label">뜻</div><p>${escapeHtml(item.meaning)}</p></div>
      <div class="info-block"><div class="info-label">주의할 점</div><p>${escapeHtml(item.caution)}</p></div>
      <div class="source-summary">${escapeHtml(item.sourceSummary)}</div>
      <button class="disclosure-button" type="button" data-source-toggle aria-expanded="false" aria-controls="decoder-source-panel">출처 보기</button>
      <div class="source-panel" id="decoder-source-panel" hidden>${item.sources.map((source, index) => sourceBlock(source, index, "decoder")).join("")}${conflicts}</div>`;

    detailLiveRegion().textContent = `${item.code} ${item.label} · ${item.value} · ${stateLabel(item.state)} · ${item.meaning}`;

    const toggle = qs("[data-source-toggle]", panel);
    const sourcePanel = qs("#decoder-source-panel", panel);
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setExpanded(toggle, open);
      toggle.textContent = open ? "출처 닫기" : "출처 보기";
      toggleHidden(sourcePanel, !open);
    });
  }

  function fieldButton(field) {
    const item = resolvedField(field);
    const flag = item.flag ? `<span class="field-flag">${escapeHtml(item.flag)}</span>` : "";
    return `<button class="field-row" type="button" data-field-id="${escapeHtml(item.id)}" aria-pressed="false">
      <span class="field-code">${escapeHtml(item.code)}</span><span class="field-label">${escapeHtml(item.label)}<br>${escapeHtml(item.teaser)}</span><span class="field-value">${text(item.value)}</span>${flag}
    </button>`;
  }

  function syncPackageButtons(fieldId) {
    qsa("[data-package-field]").forEach((button) => setPressed(button, button.dataset.packageField === fieldId));
  }

  function activateField(fieldId) {
    const rows = qsa("[data-field-id]");
    const row = rows.find((candidate) => candidate.dataset.fieldId === fieldId);
    if (!row || !activeProduct) return false;
    activeFieldId = fieldId;
    if (row.closest("#all-fields")) revealExtraFields();
    rows.forEach((item) => setPressed(item, item === row));
    syncPackageButtons(fieldId);
    const field = activeProduct.fields.find((candidate) => candidate.id === fieldId);
    if (field) renderDetail(field);
    return true;
  }

  function bindFieldRows() {
    qsa("[data-field-id]").forEach((row) => {
      row.addEventListener("click", () => activateField(row.dataset.fieldId));
    });
  }

  function revealExtraFields() {
    const moreButton = qs("[data-more-fields]");
    const morePanel = qs("#all-fields");
    if (!moreButton || !morePanel || moreButton.getAttribute("aria-expanded") === "true") return;
    setExpanded(moreButton, true);
    moreButton.textContent = "표기 접기";
    toggleHidden(morePanel, false);
  }

  // Package-label tiles map positionally onto the first four decoder fields.
  const PACKAGE_FIELD_IDS = ["bc", "dia", "water", "dkt"];

  function renderPackage(product) {
    const name = qs("[data-package-name]");
    const type = qs("[data-package-type]");
    const maker = qs("[data-package-maker]");
    const grid = qs("[data-package-specs]");
    if (!name || !type || !maker || !grid) return;
    name.textContent = product.name;
    type.textContent = product.type;
    maker.textContent = `${product.maker} / ${product.distributor}`;
    grid.innerHTML = product.packageSpecs.map((spec, index) => {
      const fieldId = PACKAGE_FIELD_IDS[index];
      return `<button class="label-item" type="button" data-package-field="${escapeHtml(fieldId || "")}" aria-pressed="false"><strong>${text(spec.value)}</strong><span>${escapeHtml(spec.label)}</span></button>`;
    }).join("");
    qsa("[data-package-field]", grid).forEach((button) => {
      button.addEventListener("click", () => {
        if (!activateField(button.dataset.packageField)) return;
        scrollToDecoder();
      });
    });
  }

  function renderProduct(product) {
    activeProduct = product;
    qsa("[data-product-id]").forEach((button) => {
      setPressed(button, button.dataset.productId === product.id);
    });
    renderPackage(product);

    const main = qs("[data-main-fields]");
    const extra = qs("[data-extra-fields]");
    if (!main || !extra) return;
    main.innerHTML = product.fields.slice(0, 3).map(fieldButton).join("");
    extra.innerHTML = product.fields.slice(3).map(fieldButton).join("");
    bindFieldRows();

    const selectedIndex = product.fields.findIndex((field) => field.id === activeFieldId);
    const selectedField = selectedIndex >= 0 ? product.fields[selectedIndex] : product.fields[0];
    if (selectedIndex >= 3) revealExtraFields();
    activateField(selectedField.id);
  }

  function initProductSelector() {
    const buttons = qsa("[data-product-id]");
    if (!buttons.length || !products.length) return;
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const product = products.find((candidate) => candidate.id === button.dataset.productId);
        if (product) renderProduct(product);
      });
      button.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
        event.preventDefault();
        const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
        const nextButton = buttons[(index + direction + buttons.length) % buttons.length];
        nextButton.click();
        nextButton.focus();
      });
    });
    renderProduct(products[0]);
  }

  function scrollToDecoder() {
    const decoder = qs("#decoder");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    decoder?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  function initDecoder() {
    if (!products.length) return;
    initProductSelector();

    // The primary hero action now opens the form where the reader types the figures
    // printed on their own package; the preset selector stays one scroll further down.
    qsa("[data-decoder-start]").forEach((button) => {
      button.addEventListener("click", () => {
        if (scrollToInputDecoder()) return;
        scrollToDecoder();
        const firstRow = qs("[data-field-id]");
        firstRow?.click();
        firstRow?.focus({ preventScroll: true });
      });
    });

    qsa("[data-first-product]").forEach((button) => {
      button.addEventListener("click", () => {
        const firstProductButton = qs("[data-product-id]");
        firstProductButton?.click();
        scrollToDecoder();
        firstProductButton?.focus({ preventScroll: true });
      });
    });

    const moreButton = qs("[data-more-fields]");
    const morePanel = qs("#all-fields");
    if (moreButton && morePanel) {
      moreButton.addEventListener("click", () => {
        const open = moreButton.getAttribute("aria-expanded") !== "true";
        setExpanded(moreButton, open);
        moreButton.textContent = open ? "표기 접기" : "포장지 표기 전체 보기 (재질, Dk/t, 중심두께, 교체주기, 허가, UV)";
        toggleHidden(morePanel, !open);
      });
    }
  }

  /* ---------------------------------------------------------------------------
   * Input decoder
   *
   * The user types the figures printed on their own package. Nothing is stored,
   * nothing is sent: every sentence below is computed from products.js at render
   * time. The output is a placement statement ("the same figure is printed on N
   * of the products on file"), never a recommendation, ranking, or suitability
   * judgement.
   * ------------------------------------------------------------------------ */

  const INPUT_FIELDS = [
    { id: "bc", kind: "number", unit: " mm", decimals: 1, min: 8, max: 9.5, rangeText: "8.0에서 9.5 사이" },
    { id: "dia", kind: "number", unit: " mm", decimals: 1, min: 13, max: 15, rangeText: "13.0에서 15.0 사이" },
    { id: "water", kind: "number", unit: "%", decimals: null, min: 20, max: 80, rangeText: "20에서 80 사이" },
    { id: "dkt", kind: "number", unit: "", decimals: null, min: 0, exclusiveMin: true, rangeText: "0보다 큰" },
    { id: "material", kind: "text" },
    { id: "replacement", kind: "choice" }
  ];

  // Package wording differs from the wording in the official specifications.
  const REPLACEMENT_EQUIVALENTS = { "1일": ["1일", "매일"], "2주": ["2주", "14일"], "1개월": ["1개월", "1달", "30일", "한 달"] };

  const INPUT_BOUNDARY = "같은 숫자라도 재질·디자인·피팅에 따라 착용 상태는 다르며, 최종 도수·피팅은 안경사 또는 안과 전문인에게 확인해야 합니다.";

  function inputSpec(fieldId) {
    return INPUT_FIELDS.find((spec) => spec.id === fieldId) || null;
  }

  function fieldCode(fieldId) {
    return (fieldCopy[fieldId] || {}).code || fieldId;
  }

  function formatInputNumber(value, spec) {
    const rounded = Math.round(value * 1000) / 1000;
    return spec.decimals === null ? String(rounded) : rounded.toFixed(spec.decimals);
  }

  function formatInputValue(value, spec) {
    return `${formatInputNumber(value, spec)}${spec.unit || ""}`;
  }

  function sameNumber(left, right) {
    return Math.abs(Math.round(left * 1000) - Math.round(right * 1000)) < 1;
  }

  function normalizeText(value) {
    return String(value ?? "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function valueSegments(value) {
    return String(value ?? "").split("/").map((part) => part.trim()).filter(Boolean);
  }

  // Product figures are stored as printed strings: "8.5 mm / 9.0 mm", "170 / 171",
  // "121 × 10⁻⁹", "코어 33% / 표면 80% 이상". Each printed figure becomes one token.
  function numericTokens(fieldId, field) {
    if (fieldState(field.state) === "unknown") return [];
    let segments = valueSegments(field.value);
    // A printed range such as "0.05 mm ~ 0.75 mm (도수에 따라 변함)" is not a single
    // figure. It can never equal one number typed off a package, so it yields no token
    // instead of silently matching its lower bound.
    segments = segments.filter((segment) => !/[~–—]/.test(segment));
    // Core and surface water are measured differently and are never merged, so only
    // the core figure is comparable with a single number printed on a package.
    if (fieldId === "water" && segments.some((segment) => segment.includes("코어"))) {
      segments = segments.filter((segment) => segment.includes("코어"));
    }
    const tokens = [];
    segments.forEach((segment) => {
      // The × 10⁻⁹ exponent is a unit, not part of the printed figure.
      const found = segment.split(/[×x]/)[0].match(/-?\d+(?:\.\d+)?/);
      if (!found) return;
      const number = Number(found[0]);
      if (!Number.isFinite(number)) return;
      tokens.push({ number, note: segment.includes("코어") ? "코어 기준" : "" });
    });
    return tokens;
  }

  function productField(product, fieldId) {
    return product.fields.find((candidate) => candidate.id === fieldId) || null;
  }

  // An unknown field never counts as a match: "not found" is not "not present".
  function fieldMatch(spec, entry, product) {
    const field = productField(product, spec.id);
    if (!field || fieldState(field.state) === "unknown") return null;
    if (spec.kind === "number") {
      const hit = numericTokens(spec.id, field).find((token) => sameNumber(token.number, entry.number));
      return hit ? { field, note: hit.note } : null;
    }
    if (spec.kind === "text") {
      const needle = normalizeText(entry.raw);
      if (!needle) return null;
      const segments = valueSegments(field.value).map(normalizeText);
      const hit = segments.some((segment) => segment === needle);
      return hit ? { field, note: "" } : null;
    }
    const wanted = REPLACEMENT_EQUIVALENTS[entry.raw] || [entry.raw];
    const segments = valueSegments(field.value);
    const hit = segments.some((segment) => wanted.some((candidate) => segment.includes(candidate)));
    return hit ? { field, note: "" } : null;
  }

  function productNameWithNote(product, note) {
    return note ? `${product.selectorLabel} · ${note}` : product.selectorLabel;
  }

  // Every recorded figure for one field, deduplicated, with how many products print it.
  function recordedNumbers(spec) {
    const table = new Map();
    products.forEach((product) => {
      const field = productField(product, spec.id);
      if (!field) return;
      const seen = new Set();
      numericTokens(spec.id, field).forEach((token) => {
        const key = Math.round(token.number * 1000);
        if (seen.has(key)) return;
        seen.add(key);
        table.set(key, { number: token.number, count: (table.get(key)?.count || 0) + 1 });
      });
    });
    return Array.from(table.values()).sort((left, right) => left.number - right.number);
  }

  function recordedTexts(spec) {
    const values = [];
    products.forEach((product) => {
      const field = productField(product, spec.id);
      if (!field || fieldState(field.state) === "unknown") return;
      valueSegments(field.value).forEach((segment) => {
        if (!values.includes(segment)) values.push(segment);
      });
    });
    return values;
  }

  function locationQualifiedWaterMentions(entry) {
    return products.flatMap((product) => {
      const field = productField(product, "water");
      if (!field || fieldState(field.state) === "unknown") return [];
      const segments = valueSegments(field.value);
      if (!segments.some((segment) => segment.includes("코어"))) return [];
      return segments
        .filter((segment) => segment.includes("표면"))
        .filter((segment) => {
          const found = segment.match(/-?\d+(?:\.\d+)?/);
          return found && sameNumber(Number(found[0]), entry.number);
        })
        .map((segment) => ({ product, segment }));
    });
  }

  // The neutral placement sentence. It states where the typed figure sits among the
  // figures on file; it never says the figure is good, better, or suitable.
  function placementSentence(spec, entry, matched) {
    const total = products.length;
    if (matched.length) {
      const names = matched.map((item) => productNameWithNote(item.product, item.hit.note)).join(", ");
      return `${fieldCode(spec.id)} ${entry.label} — 현재 수록된 ${total}개 제품 중 ${matched.length}개(${names})에 같은 값이 적혀 있습니다.`;
    }
    if (spec.kind === "number") {
      if (spec.id === "water") {
        const qualified = locationQualifiedWaterMentions(entry);
        if (qualified.length) {
          const mentions = qualified.map(({ product, segment }) => `${product.name} (${segment})`).join(", ");
          return `${fieldCode(spec.id)} ${entry.label} — 공식 자료에 같은 숫자의 표면 함수율 표기가 있습니다: ${mentions}. 코어·표면·벌크 값은 측정 위치가 달라, 입력값의 측정 위치를 알 수 없으면 직접 대조할 수 없습니다.`;
        }
      }
      const recorded = recordedNumbers(spec);
      if (!recorded.length) return `${fieldCode(spec.id)} ${entry.label} — 현재 수록된 제품에는 대조할 수 있는 표기가 없습니다.`;
      const low = formatInputNumber(recorded[0].number, spec);
      const high = formatInputValue(recorded[recorded.length - 1].number, spec);
      const smallest = Math.min(...recorded.map((item) => Math.abs(item.number - entry.number)));
      const nearest = recorded
        .filter((item) => Math.abs(Math.abs(item.number - entry.number) - smallest) < 1e-9)
        .map((item) => `${formatInputValue(item.number, spec)} (${item.count}개 제품)`)
        .join(", ");
      const range = recorded.length === 1 ? `수록 표기 ${high}` : `수록 범위 ${low}–${high}`;
      return `${fieldCode(spec.id)} ${entry.label} — 현재 수록된 제품에는 같은 값이 없습니다 · ${range} · 가장 가까운 표기: ${nearest}`;
    }
    const recorded = recordedTexts(spec);
    const listed = recorded.length ? ` · 수록된 표기: ${recorded.join(", ")}` : "";
    return `${fieldCode(spec.id)} ${entry.label} — 현재 수록된 제품에는 같은 표기가 없습니다.${listed}`;
  }

  function inputFieldBlock(spec, entry, matched) {
    const copy = fieldCopy[spec.id] || {};
    const caution = copy.caution ? `<div class="info-block"><div class="info-label">주의할 점</div><p>${escapeHtml(copy.caution)}</p></div>` : "";
    return `<section class="input-result-field">
      <div class="detail-title">
        <div><div class="detail-code">${escapeHtml(copy.code || spec.id)}</div><div>${escapeHtml(copy.label || "")}</div></div>
        <div class="detail-value" data-state="verified">${escapeHtml(entry.label)}</div>
      </div>
      <div class="info-block"><div class="info-label">뜻</div><p>${escapeHtml(copy.meaning || "")}</p></div>
      ${caution}
      <p class="input-placement">${text(placementSentence(spec, entry, matched))}</p>
    </section>`;
  }

  function matchChip(spec, hit) {
    const state = fieldState(hit.field.state);
    const notes = [];
    if (hit.note) notes.push(hit.note);
    if (state === "conflict") {
      notes.push("출처 간 값이 다름");
      (hit.field.conflicts || []).forEach((conflict) => notes.push(`${conflict.source}: ${conflict.value}`));
    }
    const noteMarkup = notes.length ? `<span class="cell-note${state === "conflict" ? " warn" : ""}">${text(notes.join(" · "))}</span>` : "";
    return `<li><span class="status-label status-${state}">${escapeHtml(fieldCode(spec.id))} ${text(hit.field.value)}</span>${noteMarkup}</li>`;
  }

  function matchItem(row, entries, partial) {
    const href = internalHref(`./products/${row.product.slug || row.product.id}.html`);
    const countNote = partial ? `<span class="cell-note">${entries.length}개 항목 중 ${row.hits.length}개 일치</span>` : "";
    // A product-level caveat (no Korean official page) travels with the product name,
    // so a match found here is never read as "confirmed on sale in Korea".
    const flagNote = row.product.flag ? `<span class="cell-note warn">${escapeHtml(row.product.flag)}</span>` : "";
    // The conflict-of-interest label travels with the product name here too, so a match
    // is never read without the disclosure.
    const coiNote = coiChip(row.product);
    const chips = row.hits.map((item) => matchChip(item.spec, item.hit)).join("");
    return `<li class="match-item">
      <a href="${escapeHtml(href)}">${escapeHtml(row.product.name)}</a>
      ${countNote}
      ${flagNote}
      ${coiNote}
      <ul class="match-values">${chips}</ul>
    </li>`;
  }

  function matchListMarkup(entries) {
    const rows = products.map((product) => ({
      product,
      hits: entries.map((entry) => ({ spec: entry.spec, hit: fieldMatch(entry.spec, entry, product) })).filter((item) => item.hit)
    }));
    const full = rows.filter((row) => row.hits.length === entries.length && entries.length > 0);
    const best = Math.max(0, ...rows.map((row) => row.hits.length));
    const partial = !full.length && best > 0;
    const shown = full.length ? full : (partial ? rows.filter((row) => row.hits.length === best) : []);
    const hasQualifiedSurfaceWater = entries.some((entry) => entry.spec.id === "water" && locationQualifiedWaterMentions(entry).length);
    const lead = full.length
      ? `입력한 ${entries.length}개 항목이 모두 같은 값으로 적힌 제품입니다. 표기가 같다는 사실만 확인한 결과이며 적합성 판단이 아닙니다. 순서는 수록 순서입니다.`
      : (partial
        ? `입력한 ${entries.length}개 항목이 모두 같은 제품은 없습니다. 가장 많은 항목이 같은 제품을 표기 일치 개수와 함께 보여 드립니다. 적합성 판단이 아닙니다.`
        : (hasQualifiedSurfaceWater
          ? `현재 수록된 ${products.length}개 제품 가운데 직접 비교할 수 있는 동일 표기가 있는 제품은 없습니다. 위의 같은 숫자 표면 함수율 표기는 측정 위치를 알 수 없어 직접 일치에서 제외했습니다.`
          : `현재 수록된 ${products.length}개 제품 가운데 입력한 값과 같은 표기가 있는 제품이 없습니다.`));
    const list = shown.length ? `<ul class="match-list">${shown.map((row) => matchItem(row, entries, partial)).join("")}</ul>` : "";
    return `<section class="input-result-matches">
      <h4>입력한 표기와 같은 값이 적힌 제품</h4>
      <p class="cell-note">${escapeHtml(lead)}</p>
      ${list}
    </section>`;
  }

  function renderInputResult(panel, entries) {
    const blocks = entries.map((entry) => {
      const matched = products
        .map((product) => ({ product, hit: fieldMatch(entry.spec, entry, product) }))
        .filter((item) => item.hit);
      return inputFieldBlock(entry.spec, entry, matched);
    }).join("");

    panel.innerHTML = `<h3 class="input-result-title" id="input-result-title" tabindex="-1">입력한 표기 해석</h3>
      ${blocks}
      ${matchListMarkup(entries)}
      <p class="input-boundary">${escapeHtml(INPUT_BOUNDARY)}</p>`;
    qs("#input-result-title", panel)?.focus({ preventScroll: true });
  }

  function initInputDecoder() {
    const form = qs("[data-input-decoder]");
    const panel = qs("[data-input-result]");
    if (!form || !panel || !products.length) return;

    const emptyMarkup = panel.innerHTML;
    const formError = qs("[data-input-form-error]", form);
    const inputs = qsa("[data-input-field]", form);

    function showError(fieldId, message) {
      const slot = qs(`[data-error-for="${fieldId}"]`, form);
      if (!slot) return;
      slot.textContent = message;
      toggleHidden(slot, !message);
      const control = inputs.find((item) => item.dataset.inputField === fieldId);
      control?.setAttribute("aria-invalid", message ? "true" : "false");
    }

    function clearErrors() {
      INPUT_FIELDS.forEach((spec) => showError(spec.id, ""));
      if (formError) {
        formError.textContent = "";
        toggleHidden(formError, true);
      }
    }

    function readEntries() {
      const entries = [];
      const invalid = [];
      inputs.forEach((control) => {
        const spec = inputSpec(control.dataset.inputField);
        if (!spec) return;
        const raw = String(control.value || "").trim();
        if (!raw) return;
        if (spec.kind !== "number") {
          entries.push({ spec, raw, label: raw });
          return;
        }
        const number = Number(raw);
        if (!Number.isFinite(number)) {
          invalid.push({ spec, message: `숫자만 입력할 수 있습니다. ${spec.rangeText} 숫자를 적어 주세요.` });
          return;
        }
        const tooLow = spec.exclusiveMin ? number <= spec.min : number < spec.min;
        const tooHigh = typeof spec.max === "number" && number > spec.max;
        if (tooLow || tooHigh) {
          invalid.push({ spec, message: `${spec.rangeText} 숫자를 입력해 주세요. 입력한 값: ${raw}` });
          return;
        }
        entries.push({ spec, raw, number, label: formatInputValue(number, spec) });
      });
      return { entries, invalid };
    }

    function reset() {
      form.reset();
      clearErrors();
      panel.innerHTML = emptyMarkup;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      clearErrors();
      const { entries, invalid } = readEntries();
      if (invalid.length) {
        invalid.forEach((item) => showError(item.spec.id, item.message));
        const first = inputs.find((control) => control.dataset.inputField === invalid[0].spec.id);
        first?.focus();
        return;
      }
      if (!entries.length) {
        if (formError) {
          formError.textContent = "한 개 이상의 항목을 입력해 주세요. 포장지에 적힌 숫자 하나만 있어도 해석할 수 있습니다.";
          toggleHidden(formError, false);
        }
        inputs[0]?.focus();
        return;
      }
      renderInputResult(panel, entries);
    });

    qsa("[data-input-reset]", form).forEach((button) => button.addEventListener("click", reset));
    inputs.forEach((control) => control.addEventListener("input", () => showError(control.dataset.inputField, "")));
  }

  function scrollToInputDecoder() {
    const section = qs("#input-decoder");
    if (!section) return false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    qs("[data-input-decoder] [data-input-field]")?.focus({ preventScroll: true });
    return true;
  }

  function openDisclosureFor(target) {
    if (!target) return;
    const panel = target.closest(".source-panel");
    if (!panel || !panel.hidden) return;
    const button = qs(`[aria-controls="${panel.id}"]`);
    if (button) {
      setExpanded(button, true);
      button.textContent = "출처 닫기";
    }
    toggleHidden(panel, false);
  }

  function revealFootnoteTarget(hash) {
    if (!hash || !hash.startsWith("#source-")) return;
    let target = null;
    try {
      target = qs(hash);
    } catch {
      return;
    }
    if (!target) return;
    openDisclosureFor(target);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  function initArticleDisclosure() {
    qsa("[data-disclosure]").forEach((button) => {
      const target = qs(`#${button.getAttribute("aria-controls")}`);
      if (!target) return;
      button.addEventListener("click", () => {
        const open = button.getAttribute("aria-expanded") !== "true";
        setExpanded(button, open);
        button.textContent = open ? "출처 닫기" : "출처 보기";
        toggleHidden(target, !open);
      });
    });

    document.addEventListener("click", (event) => {
      const anchor = event.target.closest('a[href^="#source-"]');
      if (!anchor) return;
      const hash = `#${anchor.getAttribute("href").slice(1)}`;
      if (!qs(hash)) return;
      event.preventDefault();
      revealFootnoteTarget(hash);
      if (window.location.hash !== hash) window.history.replaceState(null, "", hash);
    });

    window.addEventListener("hashchange", () => revealFootnoteTarget(window.location.hash));
    revealFootnoteTarget(window.location.hash);
  }

  function articleCard(article) {
    const title = article.status === "live" ? `<a href="${escapeHtml(internalHref(article.href))}">${escapeHtml(article.title)}</a>` : escapeHtml(article.title);
    const meta = article.status === "live" ? `<span>${escapeHtml(article.verifiedAt)}</span><span>출처 ${escapeHtml(article.sources)}건</span>` : '<span class="status-label status-pending">준비 중</span>';
    const pending = article.status === "live" ? "" : " card-pending";
    return `<article class="card${pending}"><div class="category">${escapeHtml(article.category)}</div><h3>${title}</h3><p>${escapeHtml(article.lead)}</p><div class="card-meta">${meta}</div></article>`;
  }

  function initArticleList() {
    const list = qs("[data-article-list]");
    const buttons = qsa("[data-category]");
    if (!list || !articles.length) return;
    function render(category) {
      const pool = articles.filter((article) => !article.featured && (category === "전체" || article.category === category));
      list.innerHTML = pool.map(articleCard).join("");
    }
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        render(button.dataset.category);
      });
    });
    render("전체");
  }

  const COMPARE_COLUMNS = [
    { productId: "acuvue-oasys-1-day", colId: "col-acuvue-oasys-1-day", label: "아큐브 오아시스 원데이®" },
    { productId: "dailies-total1", colId: "col-dailies-total1", label: "데일리스 토탈원®" },
    { productId: "biofinity", colId: "col-biofinity", label: "바이오피니티®" },
    { productId: "acuvue-moist-1-day", colId: "col-acuvue-moist-1-day", label: "원데이 아큐브 모이스트®" },
    { productId: "myday", colId: "col-myday", label: "마이데이®" },
    { productId: "clariti-1-day", colId: "col-clariti-1-day", label: "클래리티® 원데이" },
    { productId: "acuvue-oasys-2-week", colId: "col-acuvue-oasys-2-week", label: "아큐브 오아시스® 2주" },
    { productId: "precision1", colId: "col-precision1", label: "프리시전원®" },
    { productId: "biotrue-oneday", colId: "col-biotrue-oneday", label: "바이오트루 원데이®" },
    { productId: "acuvue-oasys-max-1-day", colId: "col-acuvue-oasys-max-1-day", label: "아큐브® 오아시스 MAX 원데이" },
    { productId: "dailies-aquacomfort-plus", colId: "col-dailies-aquacomfort-plus", label: "데일리스 아쿠아컴포트 플러스®" },
    { productId: "acuvue-vita", colId: "col-acuvue-vita", label: "아큐브 비타®" },
    { productId: "total30", colId: "col-total30", label: "토탈30®" },
    { productId: "airoptix-plus-hydraglyde", colId: "col-airoptix-plus-hydraglyde", label: "에어옵틱스® 플러스 하이드라글라이드®" },
    { productId: "proclear-1-day", colId: "col-proclear-1-day", label: "프로클리어® 원데이" },
    { productId: "biofinity-energys", colId: "col-biofinity-energys", label: "바이오피니티 에너지스™" },
    { productId: "ultra-one-day", colId: "col-ultra-one-day", label: "울트라 원데이" },
    { productId: "miru-1day", colId: "col-miru-1day", label: "Miru 1day Menicon Flat Pack" },
    { productId: "soflens-daily", colId: "col-soflens-daily", label: "소프렌 데일리 근시용" },
    { productId: "clalen-1day", colId: "col-clalen-1day", label: "클라렌 오투오투 원데이 그랩수 플러스" }
  ];

  const COMPARE_ROWS = [
    {
      // 수허 is an import permit and 제허 a domestic manufacturing permit. The row label
      // no longer says 수입 because one product on file carries the 제허 prefix.
      rowId: "row-permit", fieldId: "permit", label: "한국 허가번호", labelNote: "수허(수입)·제허(제조)", mono: true,
      notes: {
        "acuvue-oasys-2-week": "MFDS에 동일 제품의 등록 2건 · 실물 포장 확인 필요",
        "dailies-aquacomfort-plus": "한국 공식 제품 페이지 없음 · MFDS 등록(한국 등록명 아쿠아 렌즈)이 유일한 한국 근거 · 허가 유효성과 현재 판매 여부는 미확인",
        "airoptix-plus-hydraglyde": "한국 공식 제품 페이지 없음 · MFDS 등록(한국 등록명 에어렌즈 하이드라)이 유일한 한국 근거 · 허가 유효성과 현재 판매 여부는 미확인",
        "proclear-1-day": "한국 목록 각주 07-568호는 MFDS 0건",
        "biofinity-energys": "바이오피니티 구면·XR의 수허 08-131 호와 다른 별도 등록",
        "ultra-one-day": "제품명으로는 MFDS 원장에서 조회되지 않음 · 모델명 kalifilcon A로 확인",
        "miru-1day": "원장 모델명은 1day  Flat Pack(공백 2칸) · 같은 업체의 형제 제품은 별도 번호",
        "soflens-daily": "수허 09-975 호는 트루핏 원데이와 공유 등록",
        "clalen-1day": "제조허가(제허) · 수입허가(수허)와 접두사가 다름"
      }
    },
    {
      rowId: "row-replacement", fieldId: "replacement", label: "교체주기",
      // MFDS registers Biofinity and AIR OPTIX plus HydraGlyde as 연속착용 (grade 3) while
      // every other product on file is 매일착용 (grade 2). The class is a registration
      // category, not a replacement cycle, so it is stated in the cell rather than merged
      // into the value.
      notes: {
        "biofinity": "연속착용 여부와 별도 · MFDS 등록 분류: 연속착용 소프트 콘택트렌즈(등급 3) · 착용방식은 전문가 판단",
        "acuvue-oasys-2-week": "한국 공식 자료는 2주 착용으로만 표기 · 글로벌 사양은 교체주기와 착용방식을 따로 적음",
        "acuvue-vita": "한국 페이지는 1달 착용으로 표기 · 글로벌 사양은 1 Month DW",
        "total30": "한국 페이지는 한달용으로 표기",
        "airoptix-plus-hydraglyde": "MFDS 등록 분류: 연속착용 소프트 콘택트렌즈(등급 3) · 착용방식은 전문가 판단 · 한국 공식 자료에는 교체주기·착용방식 안내가 없음",
        "proclear-1-day": "한국 페이지는 교체 주기 매일로 표기 · 착용방식은 매일착용",
        "biofinity-energys": "MFDS 등록 분류: 연속착용 소프트 콘택트렌즈(등급 3) · 착용방식은 전문가 판단",
        "ultra-one-day": "한국 브랜드 페이지에는 1일 교체 문자열이 없음 · 하루용 투명렌즈로만 분류",
        "miru-1day": "한국 페이지는 행 라벨이 자료인데 값이 매일 교체 · 1차 근거는 영문 IFU 문장",
        "soflens-daily": "한국 페이지 상세 이미지는 1일 교체용 · 미국 PI/FG는 착용·교체 일정을 전문가 판단으로 적음",
        "clalen-1day": "한국 페이지는 행 라벨이 타입인데 값이 하루용 · 상세 이미지는 착용주기 1일 착용"
      }
    },
    {
      rowId: "row-material", fieldId: "material", label: "재질", mono: true,
      notes: {
        "acuvue-oasys-1-day": "실리콘 하이드로겔",
        "dailies-total1": "워터 그라디언트 실리콘 하이드로겔",
        "biofinity": "실리콘 하이드로겔",
        "acuvue-moist-1-day": "하이드로겔",
        "myday": "실리콘 하이드로겔",
        "clariti-1-day": "한국 2023 사양서 인쇄 표기 vs 글로벌 사양·MFDS 모델명",
        "acuvue-oasys-2-week": "실리콘 하이드로겔 · 한국 공식 자료에는 재질명 표기 없음",
        "precision1": "실리콘 하이드로겔 · 한국 공식 자료는 재질 계열까지만 표기",
        "biotrue-oneday": "하이드로겔 · 상표명 HyperGel®과 구분",
        "acuvue-oasys-max-1-day": "실리콘 하이드로겔 · 한국 공식 자료와 MFDS 원장에 재질명 표기 없음",
        "dailies-aquacomfort-plus": "하이드로겔 · 한국 공식 자료 자체가 없음",
        "acuvue-vita": "실리콘 하이드로겔 · 한국 공식 자료와 MFDS 원장에 재질명 표기 없음",
        "total30": "워터 그라디언트 실리콘 하이드로겔 · 한국 공식 자료에는 재질 계열 표기조차 없음",
        "airoptix-plus-hydraglyde": "제조사 문서 표기는 표면처리된 플루오로실리콘 함유 하이드로겔 · 한국 공식 자료 자체가 없음",
        "proclear-1-day": "PC-하이드로겔(하이드로겔 계열) · 실리콘 하이드로겔과 같은 축에서 함수율·Dk/t를 비교하지 않음",
        "biofinity-energys": "실리콘 하이드로겔 · 바이오피니티 구면과 같은 재질명 · 한국 허가 원장에는 재질명 표기 없음",
        "ultra-one-day": "실리콘 하이드로겔 · 한국 허가 원장에 모델명으로 등재 · 한국 브랜드 페이지 이미지는 kalificon A로 오기",
        "miru-1day": "하이드로겔(한국 전문가 페이지 명시)",
        "soflens-daily": "하이드로겔 · 한국 허가 원장에는 재질명 표기 없음",
        "clalen-1day": "USAN 재질명 미공개"
      }
    },
    { rowId: "row-bc", fieldId: "bc", label: "BC", mono: true, notes: { "clalen-1day": "원문에 단위 표기 없음" } },
    { rowId: "row-dia", fieldId: "dia", label: "DIA", mono: true },
    {
      rowId: "row-water", fieldId: "water", label: "함수율", labelNote: "벌크·코어·표면", mono: true,
      notes: {
        "acuvue-oasys-1-day": "벌크",
        "dailies-total1": "코어와 표면은 측정 위치와 방법이 달라 하나의 값으로 합치지 않음. 표면은 공식 자료에 따라 약 100%로도 표기됨",
        "biofinity": "벌크",
        "acuvue-moist-1-day": "출처가 측정 위치를 표기하지 않음",
        "myday": "출처가 측정 위치를 표기하지 않음",
        "clariti-1-day": "출처가 측정 위치를 표기하지 않음",
        "acuvue-oasys-2-week": "출처가 측정 위치를 표기하지 않음",
        "precision1": "코어·표면 분리 표기",
        "biotrue-oneday": "출처가 측정 위치를 표기하지 않음",
        "acuvue-oasys-max-1-day": "출처가 측정 위치를 표기하지 않음",
        "dailies-aquacomfort-plus": "미국 사양은 Water Content, 국제 사양은 CORE WATER CONTENT로 라벨이 다름 · 숫자는 같음",
        "acuvue-vita": "출처가 측정 위치를 표기하지 않음",
        "total30": "코어·표면 분리 표기 · 표면값은 문서별로 90% 이상/약 100%",
        "airoptix-plus-hydraglyde": "미국 사양은 Water Content, 국제 사양은 CORE WATER CONTENT로 라벨이 다름 · 숫자는 같음 · 표면 함수율 표기는 어느 공식 자료에도 없음",
        "proclear-1-day": "출처가 측정 위치를 표기하지 않음 · 하이드로겔 계열",
        "biofinity-energys": "벌크",
        "ultra-one-day": "출처가 측정 위치를 표기하지 않음 · 한국 상세 이미지와 미국 공식 사양이 같은 값",
        "miru-1day": "한국 소비자 페이지는 수분 함량, 한국 전문가 페이지는 함수율로 라벨이 다름 · 숫자는 같음",
        "soflens-daily": "출처가 측정 위치를 표기하지 않음 · 하이드로겔 계열",
        "clalen-1day": "출처가 측정 위치를 표기하지 않음 · 자료마다 라벨이 함수율·수분함유량으로 다름"
      }
    },
    {
      rowId: "row-dkt", fieldId: "dkt", label: "Dk/t", labelNote: "시험 조건 포함", mono: true,
      rowNote: "아큐브 다섯 제품 원문만 단위(× 10⁻⁹)를 명기함. 데일리스 토탈원·바이오피니티·바이오피니티 에너지스·마이데이·클래리티 원데이·프리시전원·바이오트루 원데이·울트라 원데이·데일리스 아쿠아컴포트·토탈30·에어옵틱스 플러스·프로클리어 원데이·클라렌 오투오투 원데이 원문은 단위를 표기하지 않아 임의로 단위를 붙이지 않음. 미루 원데이·소프렌 데일리는 어느 공식 자료에도 Dk/t 표기가 없음.",
      notes: {
        "acuvue-oasys-1-day": "-3.00D · 중심 0.085 mm · 35℃ · boundary/edge-corrected Dk",
        "dailies-total1": "-3.00D · 중심 0.09 mm",
        "acuvue-moist-1-day": "-3.00D · 중심 0.084 mm · 35℃ · boundary/edge-corrected Dk",
        "myday": "@-3.00DS · 측정법·보정·온도 조건 미표기 · 중심두께 미확인",
        "acuvue-oasys-2-week": "-3.00D · 중심 0.070 mm · 35℃ · boundary/edge-corrected Dk",
        "precision1": "측정법·온도 미표기",
        "biotrue-oneday": "제조사 문서 3종이 같은 숫자 42를 Dk와 Dk/t로 달리 표기 · 환산하지 않음",
        "acuvue-oasys-max-1-day": "-3.00D · 중심 0.085 mm · 35℃ · boundary/edge-corrected Dk",
        "dailies-aquacomfort-plus": "시험도수만 표기 · 측정법·온도 미표기 · 같은 문서의 Dk 26 × 10⁻¹¹과 다른 물리량이며 환산하지 않음",
        "acuvue-vita": "-3.00D · 중심 0.070 mm · 35℃ · boundary/edge-corrected Dk",
        "total30": "측정법·온도 미표기",
        "airoptix-plus-hydraglyde": "시험도수만 표기 · 측정법·보정·온도 미표기 · 같은 문서의 Dk 110 × 10⁻¹¹은 다른 물리량이며 환산하지 않음",
        "proclear-1-day": "@-3.00DS · 측정법·보정·온도 미표기 · 중심두께 미확인",
        "biofinity-energys": "한국 페이지 본문 170 · 같은 페이지 각주 110 · 한국 2023 사양서/미국 171 @-3.00D · 세 원문 병기",
        "ultra-one-day": "@ -3.00D · 측정법·보정·온도 미표기 · 같은 문서군의 Dk 107은 다른 물리량이며 환산하지 않음",
        "miru-1day": "검토한 한국·글로벌 공식 자료 11종에 Dk/t 행 자체가 없음 · 형제 제품 미루 원데이 업사이드에는 있음",
        "soflens-daily": "Dk 22 × 10⁻¹¹만 인쇄 · Dk/t 미표기",
        "clalen-1day": "시험도수만 표기 · 측정법·보정·온도 미표기 · 중심두께 미확인 · 같은 이미지의 표 라벨은 산소전달률"
      }
    },
    {
      rowId: "row-thickness", fieldId: "thickness", label: "중심두께", mono: true, useCondition: true,
      notes: {
        "acuvue-moist-1-day": "-3.00D",
        "biofinity": "2026-08-28 재확인에서 항목 없음 · 이전 기록의 0.08 mm는 철회",
        "myday": "검토한 공식 자료 6종에 중심두께 항목 없음",
        "clariti-1-day": "검토한 한국·글로벌 공식 자료 6종에 중심두께 항목 없음",
        "total30": "미국 전문가 사양 기재",
        "airoptix-plus-hydraglyde": "-3.00D · 미국 전문가 사양 기재 · 미국 페이지만 조건 표기에서 마이너스 부호를 뺌",
        "proclear-1-day": "검토한 한국·글로벌 공식 자료 6종에 중심두께 항목 없음",
        "biofinity-energys": "미국 전문가 페이지 기재 · 바이오피니티 구면 페이지에는 없음",
        "miru-1day": "검토한 한국·글로벌 공식 자료에 중심두께 항목 없음 · 형제 제품에는 있음",
        "soflens-daily": "단일 시험도수 값 없음 · 범위 표기",
        "clalen-1day": "검토한 한국 공식 자료 4종과 MFDS 원장에 중심두께 항목 없음"
      }
    },
    {
      rowId: "row-uv", fieldId: "uv", label: "UV", chip: true,
      notes: {
        "dailies-total1": "기능 없음으로 단정하지 않음",
        "acuvue-moist-1-day": "글로벌 기술 사양의 근사값 · 한국 표기 수치는 확인되지 않음",
        "myday": "차단율 퍼센트가 아니라 등급 표기 · 등급 기준은 사양서에 정의되지 않음",
        "clariti-1-day": "차단율 퍼센트가 어느 공식 자료에도 없음 · Class 2는 한국 사양서의 등급 표기",
        "acuvue-oasys-2-week": "글로벌 기술 사양의 근사값 · 한국 표기 수치는 확인되지 않음",
        "precision1": "한국 공식 자료는 등급만 표기 · 차단율은 글로벌 사양의 등급 기준선",
        "biotrue-oneday": "투과율 표기(차단율 아님)",
        "acuvue-oasys-max-1-day": "한국 표기와 글로벌 표기가 달라 두 원문을 병기 · 등급과 차단율의 대응 관계는 어느 공식 자료에도 없음",
        "dailies-aquacomfort-plus": "기능 없음으로 단정하지 않음 · 검토한 알콘 공식 자료 4종에 UV 표기 없음",
        "acuvue-vita": "글로벌 기술 사양의 근사값 · 한국 표기 수치는 이미지 전용이라 확인되지 않음",
        "total30": "한국 공식 자료에 UV 표기 자체가 없음 · 차단율 퍼센트가 아니라 등급 표기",
        "airoptix-plus-hydraglyde": "기능 없음으로 단정하지 않음 · 검토한 알콘 공식 자료 4종에 UV·ultraviolet 표기 0건",
        "proclear-1-day": "한국 사양서의 No가 유일한 명시적 표기 · 글로벌 공식 자료 2종에는 UV 항목 자체가 없음",
        "ultra-one-day": "투과율 표기(차단율 아님) · 한국 공식 자료에는 UV 수치가 없음",
        "miru-1day": "기능 없음으로 단정하지 않음 · 형제 제품 미루 원데이 업사이드에는 UV 등급 표기가 있음",
        "soflens-daily": "기능 없음으로 단정하지 않음 · 검토한 공식 자료 3종에 UV·자외선 표기 0건",
        "clalen-1day": "차단율은 상세 이미지 한 곳에만 인쇄 · Class 1의 규격 출처와 측정 파장 범위 미표기"
      }
    },
    {
      rowId: "row-note", label: "확인 메모",
      memo: {
        "acuvue-oasys-1-day": "MFDS UDI 원장 497건 전수 대조로 허가번호 확인. 한국 IFU 표기와 병기. 재질명은 글로벌 기술 사양에만 기재.",
        "dailies-total1": "MFDS UDI 조회에서 제품 연결 105건 확인. 코어와 표면 함수율을 합치지 않음.",
        "biofinity": "MFDS UDI 원장 94건 전수 대조로 허가번호 확인(연속착용 소프트 콘택트렌즈 등급 3 등록). Dk/t와 UV 충돌을 보류 상태로 유지. 중심두께는 2026-08-28 재확인에서 근거를 찾지 못해 철회.",
        "acuvue-moist-1-day": "MFDS UDI 조회로 허가번호 확인. BC·DIA·함수율·Dk/t·UV는 글로벌 기술 사양이 유일한 근거이며 한국 표기는 미확인.",
        "myday": "MFDS UDI 174건 전수 대조로 허가번호 확인. 중심두께는 공식 자료에 항목이 없어 미확인.",
        "clariti-1-day": "MFDS UDI 17,003건 전수 집계로 허가번호 확인. 같은 제품 명칭의 별도 등록 수허 19-346 호는 따로 표기. 재질명과 Dk/t는 한국 2023 사양서와 글로벌 사양이 달라 병기. 중심두께는 공식 자료에 항목이 없어 미확인.",
        "acuvue-oasys-2-week": "MFDS UDI에서 동일한 고유식별자 377개에 허가번호 2건이 연결돼 하나로 좁히지 못했습니다. 물성값은 글로벌 기술 사양이 유일한 근거이며 한국 공식 자료에는 파라미터 표가 없습니다.",
        "precision1": "MFDS UDI 186건 전수 대조로 허가번호 확인. 한국 공식 자료에 수치가 하나도 없어 물성값은 전부 글로벌 공식 자료가 근거입니다. Dk/t는 측정법·온도가 표기되지 않았습니다.",
        "biotrue-oneday": "MFDS UDI 378행 대조로 허가번호 확인. 재질명은 한국 허가 원장에 모델명으로 등재. Dk/t는 제조사 문서끼리 같은 숫자를 Dk와 Dk/t로 달리 불러 충돌로 유지.",
        "acuvue-oasys-max-1-day": "MFDS UDI 508건 전수 집계로 허가번호 확인. 공식 사양에서 BC·DIA·함수율·재질·Dk/t·중심두께 여섯 값이 아큐브 오아시스 원데이와 완전히 동일하며, 차이는 UV 표기·기술명·포장 구성뿐입니다. 값이 같다는 사실이 같은 제품이라는 뜻은 아닙니다. UV는 한국 표기와 글로벌 표기가 달라 병기합니다.",
        "dailies-aquacomfort-plus": "한국 공식 제품 페이지 없음 · MFDS 등록(아쿠아 렌즈)으로 유통 식별 · 현재 판매 여부 미확인. MFDS UDI 58건에서 한국알콘(주) 단일 신원으로 확인했고, 허가 유효성은 공개 조회 경로가 없어 확인하지 못했습니다. 물성값은 전부 글로벌 공식 자료가 근거입니다.",
        "acuvue-vita": "MFDS UDI 248건 전수 대조로 허가번호 확인. 물성값은 전부 글로벌 기술 사양이 근거이며 BC·DIA·중심두께·Dk/t 네 값이 아큐브 오아시스® 2주와 같습니다. 교체주기는 한국 페이지가 1달 착용으로만 표기합니다.",
        "total30": "MFDS UDI 136건 전수 대조. 한국 공식 페이지는 수치 없음(워터렌즈 한달용) · 물성값은 미국 전문가 사양 단독 근거",
        "airoptix-plus-hydraglyde": "한국 공식 제품 페이지 없음 · MFDS 등록(에어렌즈 하이드라)으로 유통 식별 · 현재 판매 여부 미확인. MFDS UDI 171건이 한국알콘(주) 단일 신원으로 연결되며 소분류는 연속착용 소프트 콘택트렌즈 등급 3입니다. 물성값은 전부 글로벌 공식 자료가 근거이고 UV는 검토한 네 문서에 표기가 없어 미확인입니다.",
        "proclear-1-day": "MFDS UDI 95건 전수 대조로 허가번호 확인(매일착용 소프트 콘택트렌즈 등급 2). 화면 표시값은 MFDS 원장 표기이며 쿠퍼비전코리아 전체 제품 목록 각주의 수허 07-568호는 MFDS 조회에서 0건입니다. 하이드로겔 계열이므로 실리콘 하이드로겔과 함수율·Dk/t를 같은 축에서 비교하지 않습니다. 중심두께는 공식 자료 6종에 항목이 없어 미확인입니다.",
        "biofinity-energys": "MFDS UDI 65건 전수 집계로 허가번호 확인(연속착용 소프트 콘택트렌즈 등급 3 등록). 바이오피니티 구면·XR의 수허 08-131 호와 다른 별도 등록입니다. BC·DIA·함수율·재질은 바이오피니티 구면과 같은 값이고 다른 것은 광학 디자인과 허가번호입니다. Dk/t는 한국 공식 제품 페이지 한 장이 본문 170과 하단 각주 110으로 서로 다르게 적고 한국 2023 사양서·미국 전문가 페이지·글로벌 사양서는 171이어서 세 원문을 그대로 병기합니다. 중심두께는 미국 전문가 페이지 한 곳에만 기재돼 있고, UV는 한국 페이지와 한국 사양서가 어긋나 충돌로 유지합니다.",
        "ultra-one-day": "MFDS UDI 180건 전수 대조로 허가번호 확인. 한국명 울트라 원데이 = 미국 INFUSE One-Day · MFDS 원장 모델명 kalifilcon A로 연결 확인(제품명 검색 불가). BC·DIA·함수율·재질은 한국 브랜드 페이지 상세정보 이미지에 인쇄된 값이며 페이지 텍스트 검색으로는 재현되지 않습니다. 같은 이미지가 재질을 kalificon A로 적어 두 표기를 함께 남깁니다. Dk/t 134와 같은 문서군의 Dk 107은 다른 물리량이며 환산하지 않았습니다.",
        "miru-1day": "MFDS UDI 154건 전수 대조로 허가번호 확인. 한국 유통사 법인명은 원장 표기 (주)매니콘코리아이고 원장 모델명은 1day  Flat Pack(공백 2칸)이라 Miru 1day로는 조회되지 않습니다. 같은 업체 안에서 허가번호 하나가 제품 하나를 뜻하지 않습니다(프리미오와 미루 1M은 수허 15-319 호를 공유). BC·DIA·함수율·재질은 한국 공식 소비자·전문가 페이지가 직접 인쇄한 값입니다. Dk/t·중심두께·UV는 한국·글로벌 공식 자료에 항목이 없음(형제 제품에는 있음). 일본 동계열 제품 자료는 참고 출처로만 남기고 값으로 쓰지 않았습니다.",
        "soflens-daily": "MFDS UDI 201건 전수 대조로 허가번호 확인. 원장 모델명이 Daily Disposable이어서 SofLens로는 조회되지 않고, 수허 09-975 호는 트루핏 원데이와 공유 등록입니다. BC·DIA·함수율은 한국 브랜드 페이지 상세정보 이미지에 인쇄된 값이며 페이지 텍스트 검색으로는 재현되지 않습니다. 한국 공급 도수가 근시 범위뿐이라 유형을 근시용으로 적었습니다. Dk/t는 표기 자체가 없고(같은 문서의 Dk 22 × 10⁻¹¹은 다른 물리량), 중심두께는 단일 시험도수 값 없이 범위로만 인쇄돼 있으며, UV는 검토한 세 문서 모두 표기가 없어 미확인입니다.",
        "clalen-1day": "MFDS 제허 21-680 호(제조허가) 397건 전수 대조. 수치 근거는 clalen.com 제품 상세 이미지 1장(텍스트 없음) · 페이지 운영 법인은 (주)메디엔토이며 제조사 연결은 interojo.com 링크와 원장 모델명 일치로 확인 · 운영자 근무처 제품"
      }
    }
  ];

  const PERMIT_EVIDENCE = [
    { productId: "acuvue-oasys-1-day", fieldIds: ["permit"] },
    { productId: "dailies-total1", fieldIds: ["permit", "replacement"] },
    { productId: "biofinity", fieldIds: ["permit"] },
    { productId: "acuvue-moist-1-day", fieldIds: ["permit"] },
    { productId: "myday", fieldIds: ["permit"] },
    { productId: "clariti-1-day", fieldIds: ["permit"] },
    { productId: "acuvue-oasys-2-week", fieldIds: ["permit"] },
    { productId: "precision1", fieldIds: ["permit"] },
    { productId: "biotrue-oneday", fieldIds: ["permit"] },
    { productId: "acuvue-oasys-max-1-day", fieldIds: ["permit"] },
    { productId: "dailies-aquacomfort-plus", fieldIds: ["permit"] },
    { productId: "acuvue-vita", fieldIds: ["permit"] },
    { productId: "total30", fieldIds: ["permit"] },
    { productId: "airoptix-plus-hydraglyde", fieldIds: ["permit"] },
    { productId: "proclear-1-day", fieldIds: ["permit"] },
    { productId: "biofinity-energys", fieldIds: ["permit"] },
    { productId: "ultra-one-day", fieldIds: ["permit"] },
    { productId: "miru-1day", fieldIds: ["permit"] },
    { productId: "soflens-daily", fieldIds: ["permit"] },
    { productId: "clalen-1day", fieldIds: ["permit"] }
  ];

  function compareCell(row, product, column) {
    const headers = `${row.rowId} ${column.colId}`;
    const cellAttributes = `headers="${headers}" data-label="${escapeHtml(column.label)}" data-product="${escapeHtml(product.id)}"`;
    if (row.memo) return `<td ${cellAttributes}>${text(row.memo[product.id] || "")}${coiChip(product)}</td>`;

    const field = product.fields.find((candidate) => candidate.id === row.fieldId);
    if (!field) return `<td ${cellAttributes}><span class="status-label status-unknown">${escapeHtml(stateLabel("unknown"))}</span></td>`;

    const state = fieldState(field.state);
    const conflicted = state === "conflict";
    const unknown = state === "unknown";
    const valueClass = [row.mono && !unknown ? "mono" : "", row.mono && conflicted ? "warn" : ""].filter(Boolean).join(" ");
    const value = row.chip || unknown
      ? `<span class="status-label status-${state}">${text(field.value)}</span>`
      : `<span${valueClass ? ` class="${valueClass}"` : ""}>${text(field.value)}</span>`;

    let note = "";
    // A conflicted cell keeps both source values; a row note for the same product is
    // appended rather than dropped, so the reason for the conflict stays visible.
    const productNote = row.notes?.[product.id] ? text(row.notes[product.id]) : "";
    if (field.conflicts?.length) {
      const lines = field.conflicts.map((conflict) => `${escapeHtml(conflict.source)}: ${text(conflict.value)}`);
      if (productNote) lines.push(productNote);
      note = lines.join("<br>");
    } else if (productNote) {
      note = productNote;
    } else if (row.useCondition) {
      note = text(field.sources?.[0]?.condition || "");
    }
    const noteMarkup = note ? `<span class="cell-note${conflicted ? " warn" : ""}">${note}</span>` : "";
    return `<td ${cellAttributes}>${value}${noteMarkup}</td>`;
  }

  function compareRow(row, byId, columns) {
    const labelNote = row.labelNote ? `<br><span class="cell-note">${escapeHtml(row.labelNote)}</span>` : "";
    const describedBy = row.rowNote ? ` aria-describedby="compare-note-${escapeHtml(row.rowId)}"` : "";
    const cells = columns.map((column) => {
      const product = byId[column.productId];
      return product ? compareCell(row, product, column) : `<td headers="${row.rowId} ${column.colId}" data-label="${escapeHtml(column.label)}"></td>`;
    }).join("");
    return `<tr><th id="${row.rowId}" scope="row"${describedBy}>${escapeHtml(row.label)}${labelNote}</th>${cells}</tr>`;
  }

  function compareHeadRow(columns, byId) {
    const cells = columns.map((column) => {
      const product = byId[column.productId];
      const href = internalHref(`../products/${product?.slug || column.productId}.html`);
      return `<th id="${escapeHtml(column.colId)}" scope="col"><a href="${escapeHtml(href)}">${escapeHtml(column.label)}</a>${coiChip(product)}</th>`;
    }).join("");
    return `<tr><th id="col-item" scope="col">항목</th>${cells}</tr>`;
  }

  // The picker keeps the table readable: at most four columns fit the 1120px wrap,
  // and the selection lives in the URL so one comparison stays linkable.
  const COMPARE_MAX = 4;
  const COMPARE_DEFAULT_COUNT = 3;
  const COMPARE_PARAM = "p";

  // Declared column order first, then any product that has no declared column yet.
  function compareColumns(byId) {
    const columns = [];
    const seen = new Set();
    COMPARE_COLUMNS.forEach((column) => {
      if (!byId[column.productId] || seen.has(column.productId)) return;
      columns.push(column);
      seen.add(column.productId);
    });
    products.forEach((product) => {
      if (seen.has(product.id)) return;
      columns.push({ productId: product.id, colId: `col-${product.id}`, label: product.name });
      seen.add(product.id);
    });
    return columns;
  }

  function readCompareSelection(order) {
    const known = new Set(order);
    let raw = "";
    try {
      raw = new URL(window.location.href).searchParams.get(COMPARE_PARAM) || "";
    } catch {
      raw = "";
    }
    const picked = [];
    raw.split(",").forEach((value) => {
      const id = value.trim();
      if (!id || !known.has(id) || picked.includes(id) || picked.length >= COMPARE_MAX) return;
      picked.push(id);
    });
    return picked.length ? picked : order.slice(0, COMPARE_DEFAULT_COUNT);
  }

  function writeCompareSelection(selected) {
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete(COMPARE_PARAM);
      const rest = url.searchParams.toString();
      // Built by hand so the shared link keeps readable commas instead of %2C.
      const search = `?${COMPARE_PARAM}=${selected.join(",")}${rest ? `&${rest}` : ""}`;
      window.history.replaceState(null, "", `${url.pathname}${search}${url.hash}`);
    } catch {
      // History is unavailable in some file:// contexts; the selection still applies.
    }
  }

  function comparePickerOption(product) {
    const inputId = `compare-pick-${escapeHtml(product.id)}`;
    return `<label class="picker-option" for="${inputId}">
      <input type="checkbox" id="${inputId}" value="${escapeHtml(product.id)}" data-compare-pick>
      <span class="picker-text"><span class="picker-name">${escapeHtml(product.selectorLabel || product.name)}</span><span class="picker-maker">${escapeHtml(product.maker)}</span></span>
    </label>`;
  }

  function initCompareTable() {
    const head = qs("[data-compare-head]");
    const body = qs("[data-compare-body]");
    if (!head || !body || !products.length) return;

    const byId = {};
    products.forEach((product) => { byId[product.id] = product; });
    const columns = compareColumns(byId);
    if (!columns.length) return;
    const columnById = {};
    columns.forEach((column) => { columnById[column.productId] = column; });
    const order = columns.map((column) => column.productId);

    const picker = qs("[data-compare-picker]");
    const options = qs("[data-picker-options]");
    const hint = qs("[data-picker-hint]");
    const limit = qs("[data-picker-limit]");
    const status = qs("[data-compare-status]");
    const caption = qs("#compare-caption");
    const notes = qs("[data-compare-notes]");

    let selected = readCompareSelection(order);

    function renderTable() {
      const active = selected.map((id) => columnById[id]).filter(Boolean);
      head.innerHTML = compareHeadRow(active, byId);
      body.innerHTML = COMPARE_ROWS.map((row) => compareRow(row, byId, active)).join("");
      if (caption) caption.textContent = `선택한 ${active.length}개 제품 공식 사양`;
      if (notes) {
        const noteRows = COMPARE_ROWS.filter((row) => row.rowNote);
        notes.innerHTML = noteRows.map((row) => `<span class="table-footnote-item" id="compare-note-${escapeHtml(row.rowId)}">${escapeHtml(row.label)}: ${text(row.rowNote)}</span>`).join("");
        toggleHidden(notes, !noteRows.length);
      }
      renderPermitSources(selected);
    }

    function syncPicker() {
      const atMax = selected.length >= COMPARE_MAX;
      qsa("[data-compare-pick]", options || document).forEach((input) => {
        const checked = selected.includes(input.value);
        input.checked = checked;
        input.disabled = !checked && atMax;
      });
      if (limit) {
        const message = atMax
          ? `최대 ${COMPARE_MAX}개까지 비교할 수 있습니다. 다른 제품을 보려면 선택을 하나 해제하세요.`
          : (selected.length <= 1 ? "최소 1개는 선택해야 합니다." : "");
        limit.textContent = message;
        toggleHidden(limit, !message);
      }
      if (status) status.textContent = `${selected.length}개 제품 비교 중`;
    }

    function apply() {
      renderTable();
      syncPicker();
      writeCompareSelection(selected);
    }

    if (picker && options) {
      if (hint) hint.textContent = `현재 ${columns.length}개 제품 중 최대 ${COMPARE_MAX}개를 골라 같은 항목으로 비교합니다.`;
      options.innerHTML = columns.map((column) => comparePickerOption(byId[column.productId])).join("");
      // Only the table re-renders on change, so focus stays on the checkbox that was used.
      options.addEventListener("change", (event) => {
        const input = event.target.closest("[data-compare-pick]");
        if (!input) return;
        const id = input.value;
        if (input.checked) {
          if (selected.length >= COMPARE_MAX || !columnById[id] || selected.includes(id)) {
            input.checked = selected.includes(id);
            return;
          }
          selected = selected.concat(id);
        } else {
          if (selected.length <= 1) {
            input.checked = true;
            syncPicker();
            return;
          }
          selected = selected.filter((candidate) => candidate !== id);
        }
        apply();
      });
      toggleHidden(picker, false);
    }

    toggleHidden(qs("[data-compare-live]"), false);
    if (status) toggleHidden(status, false);
    apply();
  }

  function renderPermitSources(ids) {
    const list = qs("[data-permit-sources]");
    if (!list || !products.length) return;
    const order = ids && ids.length ? ids : PERMIT_EVIDENCE.map((entry) => entry.productId);
    const items = [];
    order.forEach((productId) => {
      const product = products.find((candidate) => candidate.id === productId);
      if (!product) return;
      const entry = PERMIT_EVIDENCE.find((candidate) => candidate.productId === productId) || { fieldIds: ["permit"] };
      entry.fieldIds.forEach((fieldId) => {
        const field = product.fields.find((candidate) => candidate.id === fieldId);
        (field?.sources || []).forEach((source) => {
          const url = externalUrl(source.url);
          if (url === "#") return;
          items.push(`<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.document)}</a> <span class="cell-note">${escapeHtml(product.selectorLabel)} · ${escapeHtml(source.organization)}</span></li>`);
        });
      });
    });
    list.innerHTML = items.join("");
  }

  // Product pages render every field open: the evidence is the page, not a disclosure.
  function productSpecSection(field) {
    const item = resolvedField(field);
    const state = fieldState(item.state);
    const panelId = `spec-${escapeHtml(item.id)}`;
    const headingId = `${panelId}-title`;
    const condition = item.sources?.[0]?.condition || "";
    const flag = item.flag ? `<span class="status-label status-pending">${escapeHtml(item.flag)}</span>` : "";
    const conditionMarkup = condition ? `<p class="cell-note">측정·확인 조건 · ${text(condition)}</p>` : "";
    const caution = item.caution ? `<div class="info-block"><div class="info-label">주의할 점</div><p>${escapeHtml(item.caution)}</p></div>` : "";
    const sources = item.sources || [];
    return `<section class="detail-panel" id="${panelId}" aria-labelledby="${headingId}">
      <div class="detail-title">
        <div><h3 class="detail-code" id="${headingId}">${escapeHtml(item.code)}</h3><div>${escapeHtml(item.label)}</div></div>
        <div class="detail-value" data-state="${state}">${text(item.value)}</div>
      </div>
      <div class="pill-row"><span class="status-label status-${state}">${escapeHtml(stateLabel(item.state))}</span>${flag}</div>
      ${conditionMarkup}
      <div class="info-block"><div class="info-label">뜻</div><p>${escapeHtml(item.meaning)}</p></div>
      ${caution}
      ${conflictBlock(item)}
      <div class="source-summary">${escapeHtml(item.sourceSummary)} · 출처 ${sources.length}건</div>
      <div class="source-panel">${sources.map((source, index) => sourceBlock(source, index, item.id)).join("")}</div>
    </section>`;
  }

  // Summary table row order mirrors the comparison table so the two read the same way.
  const PRODUCT_SUMMARY_FIELDS = ["permit", "replacement", "material", "bc", "dia", "water", "dkt", "thickness", "uv"];

  // Biofinity, Biofinity Energys and AIR OPTIX plus HydraGlyde are the only products on
  // file registered with MFDS as 연속착용 (grade 3). The registration class is not a
  // replacement cycle, so the summary row says so next to the value, exactly as the
  // comparison table does.
  const SUMMARY_EXTRA_NOTES = {
    replacement: {
      "biofinity": "MFDS 등록 분류: 연속착용 소프트 콘택트렌즈(등급 3) · 착용방식은 전문가 판단",
      "biofinity-energys": "MFDS 등록 분류: 연속착용 소프트 콘택트렌즈(등급 3) · 착용방식은 전문가 판단",
      "airoptix-plus-hydraglyde": "MFDS 등록 분류: 연속착용 소프트 콘택트렌즈(등급 3) · 착용방식은 전문가 판단"
    }
  };

  // The permit row header carries the same prefix note as the comparison table, because
  // 수허 (import) and 제허 (domestic manufacture) now both appear on the site.
  const SUMMARY_LABEL_NOTES = { permit: "수허(수입)·제허(제조)" };

  function summaryRow(product, fieldId) {
    const field = product.fields.find((candidate) => candidate.id === fieldId);
    if (!field) return "";
    const item = resolvedField(field);
    const state = fieldState(item.state);
    const rowId = `summary-${escapeHtml(item.id)}`;
    const condition = item.sources?.[0]?.condition || "";
    const extra = SUMMARY_EXTRA_NOTES[fieldId]?.[product.id] || "";
    const noteLines = [condition, extra].filter(Boolean).map((line) => text(line));
    const note = noteLines.length ? `<span class="cell-note">${noteLines.join("<br>")}</span>` : "";
    const valueClass = { conflict: "mono warn", unknown: "status-label status-unknown", verified: "mono" }[state];
    const labelNote = SUMMARY_LABEL_NOTES[item.id] ? `<br>${escapeHtml(SUMMARY_LABEL_NOTES[item.id])}` : "";
    const anchorLabel = `${item.code} ${item.label} 출처 보기`;
    return `<tr>
      <th id="${rowId}" scope="row">${escapeHtml(item.code)}<br><span class="cell-note">${escapeHtml(item.label)}${labelNote}</span></th>
      <td headers="${rowId} summary-col-value" data-label="공식 표기 값"><span class="${valueClass}">${text(item.value)}</span>${note}</td>
      <td headers="${rowId} summary-col-state" data-label="상태"><span class="status-label status-${state}">${escapeHtml(stateLabel(item.state))}</span></td>
      <td headers="${rowId} summary-col-source" data-label="출처"><a href="#spec-${escapeHtml(item.id)}" aria-label="${escapeHtml(anchorLabel)}">출처 보기</a></td>
    </tr>`;
  }

  function latestVerifiedAt(product) {
    const dates = [];
    product.fields.forEach((field) => (field.sources || []).forEach((source) => { if (source.verifiedAt) dates.push(source.verifiedAt); }));
    return dates.length ? displayDate(dates.sort().pop()) : "";
  }

  function productSummaryTable(product) {
    const rows = PRODUCT_SUMMARY_FIELDS.map((fieldId) => summaryRow(product, fieldId)).join("");
    return `<p class="table-caption" id="spec-summary-caption">${escapeHtml(product.name)} 공식 표기 값과 상태 · 확인일 ${latestVerifiedAt(product)}</p>
      <div class="table-scroll" tabindex="0" aria-label="${escapeHtml(product.selectorLabel)} 사양 요약표. 좁은 화면에서는 항목별 카드로 표시됩니다.">
        <table class="compare-table spec-summary" aria-labelledby="spec-summary-caption">
          <thead>
            <tr>
              <th id="summary-col-item" scope="col">항목</th>
              <th id="summary-col-value" scope="col">공식 표기 값</th>
              <th id="summary-col-state" scope="col">상태</th>
              <th id="summary-col-source" scope="col">출처</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }

  function initProductPage() {
    const main = qs("[data-product-page]");
    if (!main || !products.length) return;
    const product = products.find((candidate) => candidate.id === main.dataset.productPage);
    if (!product) return;

    const aliasList = qs("[data-product-aliases]", main);
    if (aliasList && product.aliases?.length) {
      aliasList.innerHTML = product.aliases.map((alias) => `<li>${escapeHtml(alias)}</li>`).join("");
    }

    const summary = qs("[data-product-summary]", main);
    if (summary) summary.innerHTML = productSummaryTable(product);

    const specs = qs("[data-product-specs]", main);
    if (specs) specs.innerHTML = product.fields.map(productSpecSection).join("");
  }

  // Card preview uses whole field values (never the shortened package-tile text),
  // so a split value such as 코어/표면 함수율 is never truncated into one number.
  const CARD_PREVIEW_FIELDS = ["bc", "dia", "water"];

  function productCard(product) {
    const href = internalHref(`./${product.slug || product.id}.html`);
    const specs = CARD_PREVIEW_FIELDS.map((fieldId) => {
      const field = product.fields.find((candidate) => candidate.id === fieldId);
      if (!field) return "";
      const copy = fieldCopy[fieldId] || {};
      return `<span>${escapeHtml(copy.code || fieldId)} ${text(field.value)}</span>`;
    }).join("");
    const flagNote = product.flag ? `<p class="cell-note warn">${escapeHtml(product.flag)}</p>` : "";
    const coiNote = product.coi ? `<p>${coiChip(product)}</p>` : "";
    return `<article class="card">
      <div class="category">${escapeHtml(product.type)}</div>
      <h3><a href="${escapeHtml(href)}">${escapeHtml(product.name)}</a></h3>
      <p>${escapeHtml(product.maker)} / ${escapeHtml(product.distributor)}</p>
      ${flagNote}
      ${coiNote}
      <div class="card-meta">${specs}</div>
    </article>`;
  }

  function initProductIndex() {
    const list = qs("[data-product-index]");
    if (!list || !products.length) return;
    list.innerHTML = products.map(productCard).join("");
  }

  // The "현재 수록된 N개 제품" copy is derived from the data, never typed by hand.
  // The static HTML keeps a matching number so the no-JS reading stays correct.
  function initProductCounts() {
    if (!products.length) return;
    qsa("[data-product-count]").forEach((node) => { node.textContent = String(products.length); });
  }

  function initAdSlots() {
    qsa("[data-ad-slot]").forEach((slot) => {
      if (!ADS_ENABLED) {
        slot.hidden = true;
        slot.setAttribute("aria-hidden", "true");
        return;
      }
      slot.classList.add("ad-slot");
      slot.setAttribute("role", "complementary");
      const label = slot.dataset.adLabel || "";
      const size = slot.dataset.adSize || "";
      const description = [label, size].filter(Boolean).join(" · ") || "광고 예약 영역";
      slot.innerHTML = `<span class="ad-slot-label">광고</span><span>${escapeHtml(description)}</span>`;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initMenu();
    initInputDecoder();
    initDecoder();
    initArticleDisclosure();
    initArticleList();
    initCompareTable();
    initProductPage();
    initProductIndex();
    initProductCounts();
    initAdSlots();
  });
})();
