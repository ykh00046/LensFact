const ADS_ENABLED = false;

(function () {
  "use strict";

  const products = window.LENSFACT_PRODUCTS || [];
  const fieldCopy = window.LENSFACT_FIELD_COPY || {};
  const articles = window.LENSFACT_ARTICLES || [];

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

  function conflictBlock(item) {
    if (!item.conflicts?.length) return "";
    const conflictNote = '<p class="conflict-note">두 값을 임의로 하나로 정리하지 않고 출처별 값을 그대로 보여 드립니다.</p>';
    const items = item.conflicts.map((conflict) => `<div class="conflict-item"><span>${escapeHtml(conflict.source)}</span><strong>${text(conflict.value)}</strong></div>`).join("");
    return `<div class="info-block"><div class="info-label warn">출처별 원문값</div><div class="conflict-grid">${items}</div>${conflictNote}</div>`;
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
      // `raw` keeps the digits exactly as printed ("9.0", "0.070"), so a value can be
      // shown back in the maker's own spelling while it is grouped by its number.
      tokens.push({ number, raw: found[0], note: segment.includes("코어") ? "코어 기준" : "" });
    });
    return tokens;
  }

  // Fields whose printed value is a slash-separated list of figures. A UV entry is a
  // printed sentence that can contain its own slash, so it is never split into parts.
  const VALUE_SPLIT_EXEMPT = ["uv"];
  const NUMERIC_VALUE_FIELDS = ["bc", "dia", "water", "dkt", "thickness"];
  const VALUE_UNITS = { bc: " mm", dia: " mm", water: "%", dkt: "", thickness: " mm" };

  // One shared reading of a stored value, used by the input decoder's matcher, the term
  // pages' value distribution and the product list's spec deep links, so the three can
  // never disagree about what a product prints. `key` is the string a URL parameter has
  // to equal; `label` is how the same value is printed on screen.
  function fieldValues(fieldId, field) {
    if (!field || fieldState(field.state) === "unknown") return [];
    if (NUMERIC_VALUE_FIELDS.includes(fieldId)) {
      const tokens = numericTokens(fieldId, field);
      if (tokens.length) {
        return tokens.map((token) => {
          const number = Math.round(token.number * 1000) / 1000;
          return { key: String(number), label: `${token.raw ?? number}${VALUE_UNITS[fieldId] || ""}`, note: token.note };
        });
      }
    }
    // A printed range such as "0.05 mm ~ 0.75 mm (도수에 따라 변함)" yields no figure but is
    // still the value the official document prints, so it keeps its own text.
    const segments = VALUE_SPLIT_EXEMPT.includes(fieldId)
      ? [String(field.value ?? "").trim()]
      : valueSegments(field.value);
    return segments.filter(Boolean).map((segment) => ({ key: segment, label: segment, note: "" }));
  }

  // A conflicted field matches either of its recorded values; an unknown field never
  // matches, because "not found" is not "not present".
  function matchesFieldValue(fieldId, field, wanted) {
    const values = fieldValues(fieldId, field);
    if (!values.length) return false;
    const raw = String(wanted ?? "").trim();
    if (!raw) return false;
    if (NUMERIC_VALUE_FIELDS.includes(fieldId)) {
      const number = Number(raw);
      if (Number.isFinite(number)) {
        return values.some((value) => Number.isFinite(Number(value.key)) && sameNumber(Number(value.key), number));
      }
    }
    const needle = normalizeText(raw);
    return values.some((value) => normalizeText(value.key) === needle || normalizeText(value.label) === needle);
  }

  function productField(product, fieldId) {
    return (product.fields || []).find((candidate) => candidate.id === fieldId) || null;
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

  // The input decoder lives on more than one page depth, so the match links cannot
  // assume "./products/". The form declares its own base with data-product-base and
  // the home-relative default is used when the attribute (or the form) is absent.
  function inputProductBase() {
    const form = qs("[data-input-decoder]");
    const raw = String(form?.getAttribute("data-product-base") || "").trim() || "./products/";
    if (raw.includes("://") || raw.startsWith("//") || /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(raw)) return "./products/";
    return raw.endsWith("/") ? raw : `${raw}/`;
  }

  function matchItem(row, entries, partial) {
    const href = internalHref(`${inputProductBase()}${row.product.slug || row.product.id}.html`);
    const countNote = partial ? `<span class="cell-note">${entries.length}개 항목 중 ${row.hits.length}개 일치</span>` : "";
    // A product-level caveat (no Korean official page) travels with the product name,
    // so a match found here is never read as "confirmed on sale in Korea". It is a
    // distribution caveat, not a source conflict, so it stays neutral: amber is
    // reserved for 공식 자료 간 충돌.
    const flagNote = row.product.flag ? `<span class="cell-note">${escapeHtml(row.product.flag)}</span>` : "";
    const chips = row.hits.map((item) => matchChip(item.spec, item.hit)).join("");
    return `<li class="match-item">
      <a href="${escapeHtml(href)}">${escapeHtml(row.product.name)}</a>
      ${countNote}
      ${flagNote}
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

    // Without JavaScript the form can produce nothing: the controls carry no name
    // attributes, so a submit would only reload the page and discard what was typed.
    // The markup therefore ships every control disabled and the result panel hidden,
    // and both are turned on only here, once the decoder can actually answer.
    qsa("input, select, button", form).forEach((control) => { control.disabled = false; });
    panel.hidden = false;

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

  // "term" is a hub topic that the term pages already answer: the card links there
  // instead of standing as 준비 중. Topics with no page yet stay pending.
  function articleCard(article) {
    const linked = article.status === "live" || article.status === "term";
    const title = linked ? `<a href="${escapeHtml(internalHref(article.href))}">${escapeHtml(article.title)}</a>` : escapeHtml(article.title);
    const meta = article.status === "live"
      ? `<span>${escapeHtml(article.verifiedAt)}</span><span>출처 ${escapeHtml(article.sources)}건</span>`
      : (article.status === "term"
        ? `<span>용어 설명</span><span>수록 ${products.length || 20}개 제품 값 분포</span>`
        : '<span class="status-label status-pending">준비 중</span>');
    const pending = linked ? "" : " card-pending";
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
    { productId: "soflens-daily", colId: "col-soflens-daily", label: "소프렌 데일리 근시용" }
  ];

  const COMPARE_ROWS = [
    {
      // 수허 is an import permit and 제허 a domestic manufacturing permit. The label says
      // 한국 허가번호 rather than 수입허가번호 because the prefix is part of the recorded
      // value, not something the table decides: every product currently on file happens to
      // carry 수허, and a 제허 number would have to print as itself in the same column.
      rowId: "row-permit", fieldId: "permit", label: "한국 허가번호", labelNote: "수허(수입)·제허(제조)", mono: true,
      notes: {
        "acuvue-oasys-2-week": "MFDS에 동일 제품의 등록 2건 · 실물 포장 확인 필요",
        "dailies-aquacomfort-plus": "한국 공식 제품 페이지 없음 · MFDS 등록(한국 등록명 아쿠아 렌즈)이 유일한 한국 근거 · 허가 유효성과 현재 판매 여부는 미확인",
        "airoptix-plus-hydraglyde": "한국 공식 제품 페이지 없음 · MFDS 등록(한국 등록명 에어렌즈 하이드라)이 유일한 한국 근거 · 허가 유효성과 현재 판매 여부는 미확인",
        "proclear-1-day": "한국 목록 각주 07-568호는 MFDS 0건",
        "biofinity-energys": "바이오피니티 구면·XR의 수허 08-131 호와 다른 별도 등록",
        "ultra-one-day": "제품명으로는 MFDS 원장에서 조회되지 않음 · 모델명 kalifilcon A로 확인",
        "miru-1day": "원장 모델명은 1day  Flat Pack(공백 2칸) · 같은 업체의 형제 제품은 별도 번호",
        "soflens-daily": "수허 09-975 호는 트루핏 원데이와 공유 등록"
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
        "soflens-daily": "한국 페이지 상세 이미지는 1일 교체용 · 미국 PI/FG는 착용·교체 일정을 전문가 판단으로 적음"
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
        "soflens-daily": "하이드로겔 · 한국 허가 원장에는 재질명 표기 없음"
      }
    },
    { rowId: "row-bc", fieldId: "bc", label: "BC", mono: true },
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
        "soflens-daily": "출처가 측정 위치를 표기하지 않음 · 하이드로겔 계열"
      }
    },
    {
      rowId: "row-dkt", fieldId: "dkt", label: "Dk/t", labelNote: "시험 조건 포함", mono: true,
      rowNote: "아큐브 다섯 제품 원문만 단위(× 10⁻⁹)를 명기함. 데일리스 토탈원·바이오피니티·바이오피니티 에너지스·마이데이·클래리티 원데이·프리시전원·바이오트루 원데이·울트라 원데이·데일리스 아쿠아컴포트·토탈30·에어옵틱스 플러스·프로클리어 원데이 원문은 단위를 표기하지 않아 임의로 단위를 붙이지 않음. 미루 원데이·소프렌 데일리는 어느 공식 자료에도 Dk/t 표기가 없음.",
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
        "soflens-daily": "Dk 22 × 10⁻¹¹만 인쇄 · Dk/t 미표기"
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
        "soflens-daily": "단일 시험도수 값 없음 · 범위 표기"
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
        "soflens-daily": "기능 없음으로 단정하지 않음 · 검토한 공식 자료 3종에 UV·자외선 표기 0건"
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
        "soflens-daily": "MFDS UDI 201건 전수 대조로 허가번호 확인. 원장 모델명이 Daily Disposable이어서 SofLens로는 조회되지 않고, 수허 09-975 호는 트루핏 원데이와 공유 등록입니다. BC·DIA·함수율은 한국 브랜드 페이지 상세정보 이미지에 인쇄된 값이며 페이지 텍스트 검색으로는 재현되지 않습니다. 한국 공급 도수가 근시 범위뿐이라 유형을 근시용으로 적었습니다. Dk/t는 표기 자체가 없고(같은 문서의 Dk 22 × 10⁻¹¹은 다른 물리량), 중심두께는 단일 시험도수 값 없이 범위로만 인쇄돼 있으며, UV는 검토한 세 문서 모두 표기가 없어 미확인입니다."
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
    { productId: "soflens-daily", fieldIds: ["permit"] }
  ];

  function compareCell(row, product, column) {
    const headers = `${row.rowId} ${column.colId}`;
    const cellAttributes = `headers="${headers}" data-label="${escapeHtml(column.label)}" data-product="${escapeHtml(product.id)}"`;
    if (row.memo) return `<td ${cellAttributes}>${text(row.memo[product.id] || "")}</td>`;

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
    // On a row read with its source condition, that condition carries the test power the
    // figure was measured at. A per-product note is added to it, never in place of it:
    // dropping it left one column's -3.00D printed and the other column's missing on the
    // very row the reader is invited to compare straight across. Where one of the two
    // already contains the other word for word, only the fuller string is printed.
    const noteSource = String(row.notes?.[product.id] || "");
    const conditionSource = row.useCondition ? String(field.sources?.[0]?.condition || "") : "";
    const productNote = noteSource && !(conditionSource && conditionSource.includes(noteSource)) ? text(noteSource) : "";
    const condition = conditionSource && !noteSource.includes(conditionSource) ? text(conditionSource) : "";
    if (field.conflicts?.length) {
      const lines = field.conflicts.map((conflict) => `${escapeHtml(conflict.source)}: ${text(conflict.value)}`);
      if (productNote) lines.push(productNote);
      if (condition) lines.push(condition);
      note = lines.join("<br>");
    } else if (productNote) {
      note = [productNote, condition].filter(Boolean).join("<br>");
    } else if (condition) {
      note = condition;
    }
    const noteMarkup = note ? `<span class="cell-note${conflicted ? " warn" : ""}">${note}</span>` : "";
    return `<td ${cellAttributes}>${value}${noteMarkup}</td>`;
  }

  function compareRow(row, byId, columns) {
    const labelNote = row.labelNote ? `<br><span class="cell-note">${escapeHtml(row.labelNote)}</span>` : "";
    const describedBy = row.rowNote ? ` aria-describedby="compare-note-${escapeHtml(row.rowId)}"` : "";
    // Every spec row header leads to that term's page, where the same value is explained
    // and every product printing it is listed. The 확인 메모 row has no term, so it stays text.
    const label = row.fieldId && fieldCopy[row.fieldId]
      ? `<a href="${escapeHtml(internalHref(`../terms/${row.fieldId}.html`))}">${escapeHtml(row.label)}</a>`
      : escapeHtml(row.label);
    const cells = columns.map((column) => {
      const product = byId[column.productId];
      return product ? compareCell(row, product, column) : `<td headers="${row.rowId} ${column.colId}" data-label="${escapeHtml(column.label)}"></td>`;
    }).join("");
    return `<tr><th id="${row.rowId}" scope="row"${describedBy}>${label}${labelNote}</th>${cells}</tr>`;
  }

  function compareHeadRow(columns, byId) {
    const cells = columns.map((column) => {
      const product = byId[column.productId];
      const href = internalHref(`../products/${product?.slug || column.productId}.html`);
      return `<th id="${escapeHtml(column.colId)}" scope="col"><a href="${escapeHtml(href)}">${escapeHtml(column.label)}</a></th>`;
    }).join("");
    return `<tr><th id="col-item" scope="col">항목</th>${cells}</tr>`;
  }

  // The picker keeps the table readable: at most four columns fit the 1120px wrap,
  // and the selection lives in the URL so one comparison stays linkable.
  const COMPARE_MAX = 4;
  const COMPARE_DEFAULT_COUNT = 3;
  const COMPARE_PARAM = "p";
  const COMPARE_VIEW_PARAM = "view";
  const COMPARE_VIEW_VALUES = new Set(["all", "diff", "issues"]);

  function compareView(value) {
    return COMPARE_VIEW_VALUES.has(value) ? value : "all";
  }

  function compareRowsForView(rows, selectedProducts, view) {
    const mode = compareView(view);
    if (mode === "all") return rows;
    return rows.filter((row) => {
      if (!row.fieldId) return false;
      const fields = selectedProducts.map((product) => product.fields?.find((field) => field.id === row.fieldId));
      if (mode === "issues") return fields.some((field) => fieldState(field?.state) !== "verified");
      const pairs = fields.map((field) => `${fieldState(field?.state)}\u0000${String(field?.value ?? "")}`);
      return new Set(pairs).size > 1;
    });
  }

  function parseCompareUrl(href, order) {
    const known = new Set(order);
    let raw = "";
    let view = "all";
    try {
      const params = new URL(href).searchParams;
      raw = params.get(COMPARE_PARAM) || "";
      view = compareView(params.get(COMPARE_VIEW_PARAM) || "all");
    } catch {}
    const selected = [];
    raw.split(",").forEach((value) => {
      const id = value.trim();
      if (!id || !known.has(id) || selected.includes(id) || selected.length >= COMPARE_MAX) return;
      selected.push(id);
    });
    return { selected: selected.length ? selected : order.slice(0, COMPARE_DEFAULT_COUNT), view };
  }

  function serializeCompareUrl(href, selected, view) {
    const url = new URL(href, "https://lensfact.local");
    url.searchParams.delete(COMPARE_PARAM);
    url.searchParams.delete(COMPARE_VIEW_PARAM);
    url.searchParams.set(COMPARE_PARAM, selected.join(","));
    const mode = compareView(view);
    if (mode !== "all") url.searchParams.set(COMPARE_VIEW_PARAM, mode);
    const query = url.searchParams.toString().replaceAll("%2C", ",");
    return `${url.pathname}${query ? `?${query}` : ""}${url.hash}`;
  }

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

  function writeCompareSelection(selected, view = "all") {
    try {
      window.history.replaceState(null, "", serializeCompareUrl(window.location.href, selected, view));
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
    const viewControls = qs("[data-compare-view]");
    const tableWrap = qs("[data-compare-table-wrap]");
    const empty = qs("[data-compare-empty]");
    const caption = qs("#compare-caption");
    const notes = qs("[data-compare-notes]");

    const initialState = parseCompareUrl(window.location.href, order);
    let selected = initialState.selected;
    let view = initialState.view;

    function renderTable() {
      const active = selected.map((id) => columnById[id]).filter(Boolean);
      const visibleRows = compareRowsForView(COMPARE_ROWS, active.map((column) => byId[column.productId]), view);
      head.innerHTML = compareHeadRow(active, byId);
      body.innerHTML = visibleRows.map((row) => compareRow(row, byId, active)).join("");
      if (caption) caption.textContent = `선택한 ${active.length}개 제품 공식 사양`;
      toggleHidden(tableWrap, visibleRows.length === 0);
      toggleHidden(empty, visibleRows.length !== 0);
      if (notes) {
        const noteRows = visibleRows.filter((row) => row.rowNote);
        notes.innerHTML = noteRows.map((row) => `<span class="table-footnote-item" id="compare-note-${escapeHtml(row.rowId)}">${escapeHtml(row.label)}: ${text(row.rowNote)}</span>`).join("");
        toggleHidden(notes, !noteRows.length);
      }
      renderPermitSources(selected);
    }

    function syncPicker() {
      const atMax = selected.length >= COMPARE_MAX;
      if (hint) {
        // Arriving from a product page opens one column; the hint has to say that more
        // products are added here rather than leaving the single column looking final.
        const base = `현재 ${columns.length}개 제품 중 최대 ${COMPARE_MAX}개를 골라 같은 항목으로 비교합니다.`;
        hint.textContent = selected.length <= 1
          ? `${base} 지금은 1개 제품만 열려 있습니다. 아래에서 비교할 제품을 더 선택하세요.`
          : base;
      }
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
      const viewLabel = { all: "전체 보기", diff: "차이만 보기", issues: "충돌·미확인만 보기" }[view];
      if (status) status.textContent = `${selected.length}개 제품 비교 중 · ${viewLabel}`;
      qsa("[data-compare-mode]", viewControls || document).forEach((button) => {
        setPressed(button, button.dataset.compareMode === view);
      });
    }

    // When the picker lands on exactly the two products a pair page covers, that page
    // says more about them than this table can, so the tool points at it.
    function renderPairLink() {
      const link = qs("[data-compare-pair-link]");
      if (!link) return;
      const page = pairPageFor(selected);
      if (!page) {
        link.innerHTML = "";
        toggleHidden(link, true);
        return;
      }
      const href = internalHref(`./${pairFile(page.ids)}`);
      link.innerHTML = `이 두 제품만 다룬 페이지가 있습니다 — <a href="${escapeHtml(href)}">${escapeHtml(pairLabel(page.ids))} 공식 표기 비교</a>`;
      toggleHidden(link, false);
    }

    function apply(writeUrl = true) {
      renderTable();
      syncPicker();
      renderPairLink();
      if (writeUrl) writeCompareSelection(selected, view);
    }

    if (picker && options) {
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

    if (viewControls) {
      viewControls.addEventListener("click", (event) => {
        const button = event.target.closest("[data-compare-mode]");
        if (!button) return;
        view = compareView(button.dataset.compareMode);
        apply();
      });
      toggleHidden(viewControls, false);
    }

    window.addEventListener("popstate", () => {
      const state = parseCompareUrl(window.location.href, order);
      selected = state.selected;
      view = state.view;
      apply(false);
    });

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

  /* ---------------------------------------------------------------------------
   * Product pair pages — /compare/<a>-vs-<b>.html
   *
   * One static page per recorded pair. The page answers a narrow question: which of
   * the two products' official figures can be put in the same table, and which cannot.
   * It never answers which product is better, which is why nothing below ranks, scores
   * or recommends.
   *
   * Every sentence a pair page shows is derived from that pair's own data in
   * products.js — the two field states, their recorded source conflicts, the
   * measurement conditions their sources print, and the per-product notes COMPARE_ROWS
   * already carries. No pair-specific figure or reason is typed by hand anywhere, so
   * two pair pages can only share a paragraph if the underlying data is identical.
   * ------------------------------------------------------------------------ */

  const PAIR_PAGES = [
    { ids: ["acuvue-oasys-1-day", "dailies-total1"] },
    { ids: ["acuvue-oasys-1-day", "acuvue-moist-1-day"] },
    { ids: ["myday", "clariti-1-day"] },
    { ids: ["dailies-total1", "dailies-aquacomfort-plus"] },
    { ids: ["biofinity", "airoptix-plus-hydraglyde"] },
    { ids: ["acuvue-oasys-1-day", "acuvue-oasys-max-1-day"] },
    { ids: ["acuvue-oasys-1-day", "acuvue-oasys-2-week"] },
    { ids: ["dailies-total1", "total30"] }
  ];

  const PAIR_FIELD_IDS = ["permit", "replacement", "material", "bc", "dia", "water", "dkt", "thickness", "uv"];

  function pairColumnIndex(id) {
    const index = COMPARE_COLUMNS.findIndex((column) => column.productId === id);
    return index < 0 ? COMPARE_COLUMNS.length : index;
  }

  // The declared column order fixes one file name per pair, so a pair can never end up
  // with two URLs pointing at the same two products.
  function pairOrder(ids) {
    return ids.slice().sort((left, right) => pairColumnIndex(left) - pairColumnIndex(right));
  }

  function pairFile(ids) {
    const ordered = pairOrder(ids);
    return `${ordered[0]}-vs-${ordered[1]}.html`;
  }

  function pairPageFor(ids) {
    if (!ids || ids.length !== 2) return null;
    const key = pairOrder(ids).join("|");
    return PAIR_PAGES.find((page) => pairOrder(page.ids).join("|") === key) || null;
  }

  function pairPagesWith(productId) {
    return PAIR_PAGES.filter((page) => page.ids.includes(productId));
  }

  function pairProducts(ids) {
    const found = pairOrder(ids).map((id) => products.find((product) => product.id === id));
    return found.every(Boolean) ? found : null;
  }

  function pairColumnLabel(product) {
    return COMPARE_COLUMNS.find((column) => column.productId === product.id)?.label || product.name;
  }

  function pairLabel(ids) {
    const pair = pairProducts(ids);
    return pair ? pair.map((product) => product.selectorLabel).join(" vs ") : "";
  }

  function compareRowForField(fieldId) {
    return COMPARE_ROWS.find((row) => row.fieldId === fieldId) || null;
  }

  function pairFieldLabel(fieldId) {
    return compareRowForField(fieldId)?.label || fieldCopy[fieldId]?.label || fieldId;
  }

  // A condition string doubles as an extraction record: where in a PDF the figure was read
  // from, down to the column's x coordinate. Those coordinates belong in the data, not in a
  // sentence a reader is asked to read, so they are dropped before any condition is quoted.
  function pairConditionQuote(product, fieldId) {
    return String(productField(product, fieldId)?.sources?.[0]?.condition || "")
      .replace(/\s*\((?:좌표|x0?|y0?)[\s0-9.,;≈~–—-]*[^)]*\)/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  // What one product actually prints beside one figure: the value itself (some makers
  // print the test power inside it), the first source's 측정·확인 조건, and the
  // per-product note the comparison table already carries.
  function pairConditionText(product, fieldId) {
    const field = productField(product, fieldId);
    return [field?.value || "", field?.sources?.[0]?.condition || "", compareRowForField(fieldId)?.notes?.[product.id] || ""]
      .filter(Boolean).join(" · ");
  }

  // "측정법·보정·온도 표기 없음" names three conditions in order to say that none of them
  // is printed. Reading those words without their negation would turn an explicit
  // absence into an explicit declaration, so negated clauses are dropped before any
  // condition key is read.
  function withoutNegatedClauses(value) {
    return String(value ?? "").replace(
      /(?:[가-힣A-Za-z/]+[·,]\s*)*[가-힣A-Za-z/]+\s*(?:항목\s*)?(?:조건\s*)?(?:표기(?:가|는)?\s*)?(?:미표기|없음|없다|없습니다|확인되지 않음|표기하지 않음|빠져 있으나)/g,
      " "
    );
  }

  // The four conditions that decide whether two figures were measured the same way.
  // 중심두께 is deliberately not one of them: it is a property of the lens rather than a
  // choice of method, so a thickness difference explains a Dk/t difference instead of
  // forbidding the comparison.
  const PAIR_CONDITION_KEYS = [
    { id: "power", label: "시험도수", read: (value) => value.match(/-?\d+\.\d{2}\s*D/)?.[0].replace(/\s+/g, "") || "" },
    { id: "method", label: "측정법", read: (value) => (/분극법|polarographic/i.test(value) ? "분극법" : "") },
    { id: "correction", label: "경계·엣지 보정", read: (value) => (/boundary|edge|경계 보정/i.test(value) ? "boundary/edge 보정" : "") },
    { id: "temperature", label: "측정 온도", read: (value) => (value.match(/\d+\s*°?\s*(?:℃|C\b)/)?.[0] || "").replace(/\s+/g, "").replace(/°?C$/, "℃") }
  ];

  function pairConditionKeys(product, fieldId) {
    const source = withoutNegatedClauses(pairConditionText(product, fieldId));
    const keys = {};
    PAIR_CONDITION_KEYS.forEach((key) => { keys[key.id] = key.read(source); });
    return keys;
  }

  // The centre thickness a Dk/t figure was measured at, when the maker prints one.
  function pairThicknessCondition(product, fieldId) {
    const source = withoutNegatedClauses(pairConditionText(product, fieldId));
    const found = source.match(/(?:중심\s*(?:두께)?|Center Thickness)\s*(\d+\.\d+)\s*mm/i);
    return found ? `${found[1]} mm` : "";
  }

  // 실리콘 하이드로겔 and 하이드로겔 are the two families the comparison table already
  // names product by product; the site does not read water content or Dk/t across them.
  // A family is only read from a phrase that is one of those two labels on its own. A
  // maker phrase that qualifies the family — 표면처리된 플루오로실리콘 함유 하이드로겔 —
  // is neither label, so it stays unclassified rather than being flattened into
  // 하이드로겔, the same bare word the site uses for etafilcon A and nelfilcon A.
  // "" — this string names no family. "?" — it names one but qualifies it, so the site
  // refuses to file it under either label.
  function pairMaterialFamilyFrom(value) {
    const source = String(value ?? "");
    if (!/하이드로겔|hydrogel/i.test(source)) return "";
    // 실리콘 하이드로겔 counts only where 실리콘 starts the word: 워터 그라디언트 실리콘
    // 하이드로겔 is the silicone family, 플루오로실리콘 함유 하이드로겔 is not this label.
    if (/(?:^|[^가-힣A-Za-z])(?:실리콘 하이드로겔|silicone hydrogel)/i.test(source)) return "실리콘 하이드로겔";
    if (/실리콘|silicone/i.test(source)) return "?";
    return "하이드로겔";
  }

  function pairMaterialFamily(product) {
    const field = productField(product, "material");
    // Only the first clause of the comparison table's 재질 note names the family. The
    // clauses after it record what a source leaves out or which comparison the site
    // refuses — 실리콘 하이드로겔과 같은 축에서 … 비교하지 않음 names the other family in
    // order to exclude it, and reading that clause would return the opposite answer.
    // Only strings the site itself prints as this product's material are read: the note,
    // the value, and — where the sources disagree on the USAN name — each recorded
    // original. A source's surrounding prose ("a silicone containing hydrogel") describes
    // the material rather than labelling its family, so it is not one of them.
    const candidates = [
      String(compareRowForField("material")?.notes?.[product.id] || "").split("·")[0],
      field?.value || "",
      ...(field?.conflicts || []).map((conflict) => conflict.value)
    ].map(pairMaterialFamilyFrom);
    // One qualified phrase anywhere in this product's own material record is enough to
    // leave the family unset, and so is a disagreement between two of its own strings.
    if (candidates.includes("?")) return "";
    const found = Array.from(new Set(candidates.filter(Boolean)));
    return found.length === 1 ? found[0] : "";
  }

  // What this site records as the product's material, in its own printed words: the value,
  // and the comparison table's 재질 note where that note carries wording the value does not.
  function pairMaterialRecord(product) {
    const note = String(compareRowForField("material")?.notes?.[product.id] || "").split("·")[0].trim();
    const value = pairFieldValue(product, "material");
    return note && !value.includes(note) ? `${value}(${note})` : value;
  }

  // The family in front of the material name, unless the recorded value already prints
  // that family itself — nelfilcon A (하이드로겔) must not become 하이드로겔 nelfilcon A (하이드로겔).
  function pairMaterialPhrase(product, family) {
    const value = pairFieldValue(product, "material");
    return value.includes(family) ? value : `${family} ${value}`;
  }

  // Where the maker measured the water it prints: separate core and surface figures, a
  // bulk figure, or a figure whose location the source never states.
  function pairWaterBasis(product) {
    if (/코어|표면/.test(productField(product, "water")?.value || "")) return "코어·표면 별도 표기";
    if (/벌크/.test(pairConditionText(product, "water"))) return "벌크 함수율";
    return "측정 위치 미표기";
  }

  function pairFieldValue(product, fieldId) {
    return productField(product, fieldId)?.value || "";
  }

  function pairConflictLine(product, fieldId) {
    const field = productField(product, fieldId);
    if (!field?.conflicts?.length) return "";
    return `${product.selectorLabel} — ${field.conflicts.map((conflict) => `${conflict.source}: ${conflict.value}`).join(" / ")}`;
  }

  function pairReason(code, sentence, evidence) {
    return { code, sentence, evidence: evidence.filter(Boolean).join(" / ") };
  }

  // Korean particles follow the last sound of the word in front of them, and every word
  // in a pair sentence is a product name or a printed value taken from the data, so the
  // particle has to be picked at render time rather than written into the template.
  function hasFinalConsonant(value) {
    const last = String(value ?? "").trim().replace(/[)\]}"'’”·.]+$/, "").slice(-1);
    if (!last) return false;
    const code = last.charCodeAt(0);
    if (code >= 0xac00 && code <= 0xd7a3) return (code - 0xac00) % 28 !== 0;
    // 0 영 · 1 일 · 3 삼 · 6 육 · 7 칠 · 8 팔 end on a consonant; 2 4 5 9 do not.
    if (/[0-9]/.test(last)) return ["0", "1", "3", "6", "7", "8"].includes(last);
    // Latin letters are read as their Korean names: only l m n r end on a consonant.
    if (/[a-z]/i.test(last)) return ["l", "m", "n", "r"].includes(last.toLowerCase());
    return false;
  }

  function josa(value, forms) {
    const [afterConsonant, afterVowel] = forms.split("/");
    return `${value}${hasFinalConsonant(value) ? afterConsonant : afterVowel}`;
  }

  // 로 also follows ㄹ, so this one cannot use the plain consonant test.
  function josaRo(value) {
    const last = String(value ?? "").trim().replace(/[)\]}"'’”·.]+$/, "").slice(-1);
    const code = last ? last.charCodeAt(0) : 0;
    const rieul = code >= 0xac00 && code <= 0xd7a3 && (code - 0xac00) % 28 === 8;
    return `${value}${!hasFinalConsonant(value) || rieul ? "로" : "으로"}`;
  }

  // One field, read across the two products. `blocked` reasons say why the two printed
  // figures cannot go in the same row of the same table; `notes` are reading aids for a
  // row that can. Every sentence carries the two products' own strings, so the same
  // sentence cannot be produced for another pair unless the data is identical.
  function pairFieldVerdictFor(left, right, fieldId) {
    const label = pairFieldLabel(fieldId);
    const fields = [productField(left, fieldId), productField(right, fieldId)];
    const values = [pairFieldValue(left, fieldId), pairFieldValue(right, fieldId)];
    const states = fields.map((field) => fieldState(field?.state));
    const conditions = [pairConditionText(left, fieldId), pairConditionText(right, fieldId)];
    const verdict = { fieldId, label, code: fieldCode(fieldId), values, states, blocked: [], notes: [], same: false, bothUnknown: false };

    if (states[0] === "unknown" && states[1] === "unknown") {
      verdict.bothUnknown = true;
      verdict.notes.push(pairReason(
        "both-unknown",
        `${josa(label, "은/는")} 두 제품 모두 공식 자료에서 확인되지 않았습니다. 표기를 찾지 못했다는 기록이며 값이나 기능이 없다는 뜻이 아닙니다.`,
        [`${left.selectorLabel} 확인 범위 — ${conditions[0]}`, `${right.selectorLabel} 확인 범위 — ${conditions[1]}`]
      ));
      return verdict;
    }

    if (states[0] === "unknown" || states[1] === "unknown") {
      const missingAt = states[0] === "unknown" ? 0 : 1;
      const known = missingAt === 0 ? right : left;
      const missing = missingAt === 0 ? left : right;
      verdict.blocked.push(pairReason(
        "unknown-one-side",
        `${josa(known.selectorLabel, "은/는")} ${josa(label, "을/를")} ${josaRo(values[1 - missingAt])} 인쇄하지만, ${missing.selectorLabel} 쪽 기록은 ${values[missingAt]}입니다. 표기를 찾지 못했다는 기록이지 값이나 기능이 없다는 뜻이 아니므로, 한쪽의 표기를 다른 쪽의 빈칸과 나란히 읽지 않습니다.`,
        [`${missing.selectorLabel} 확인 범위 — ${conditions[missingAt]}`]
      ));
    }

    // A recorded disagreement between official sources is kept as several originals, so
    // there is no single figure to line up against the other product's single figure.
    // What counts as a disagreement is the field's own state, the way every other
    // conflict test on this page reads it — a field that records several originals while
    // staying 확인 is a value printed in more than one wording, not a value in dispute.
    const conflicted = [left, right].filter((product) => fieldState(productField(product, fieldId)?.state) === "conflict");
    if (conflicted.length) {
      const others = [left, right].filter((product) => !conflicted.includes(product));
      const otherIndex = others.length ? (others[0] === left ? 0 : 1) : -1;
      // 측정값에는 시험 조건이라는 개념이 있지만 허가번호·재질명·교체주기·UV 등급에는
      // 없다. 조건을 묻는 문장을 식별·분류 항목에 붙이면 뜻이 통하지 않으므로, 같은 사유를
      // 두 가지 문안으로 나눠 쓴다. 가리키는 원문은 이 문장 아래의 근거 원문 줄에 있다.
      const measured = ["water", "dkt", "thickness"].includes(fieldId);
      const otherText = !others.length
        ? "두 제품 모두 원문이 여러 건이라 어느 원문끼리 대응하는지 정해져 있지 않습니다."
        : states[otherIndex] === "unknown"
          ? `${josa(others[0].selectorLabel, "은/는")} 이 항목의 공식 표기가 확인되지 않아, 여러 원문 가운데 어느 쪽과 맞대어 볼 상대 표기 자체가 없습니다.`
          : measured
            ? `${others[0].selectorLabel} 쪽 원문은 ${values[otherIndex]} 하나뿐이라, 그 값이 아래 근거 원문 가운데 어느 쪽과 같은 조건에서 나온 값인지 어느 문서도 밝히지 않습니다.`
            : `${others[0].selectorLabel} 쪽 원문은 ${values[otherIndex]} 하나뿐이라, 그 값이 아래 근거 원문 가운데 어느 쪽과 대응하는 표기인지 어느 문서도 밝히지 않습니다.`;
      verdict.blocked.push(pairReason(
        "source-conflict",
        `${conflicted.map((product) => product.selectorLabel).reduce((joined, name) => (joined ? `${josa(joined, "과/와")} ${name}` : name), "")}의 ${josa(label, "은/는")} 공식 출처끼리 다르게 인쇄돼 있어 하나로 정리하지 않았습니다. ${otherText}`,
        conflicted.map((product) => pairConflictLine(product, fieldId))
      ));
    }

    // The other shape a multi-original field takes: the sources print the same value in
    // different sentences, so the data keeps every original while the value itself stays
    // 확인. That is a reading note, not a barrier, and the originals are shown unmerged.
    const restated = [left, right].filter((product) => {
      const field = productField(product, fieldId);
      return fieldState(field?.state) !== "conflict" && (field?.conflicts || []).length;
    });
    restated.forEach((product) => {
      verdict.notes.push(pairReason(
        "restated-original",
        `${product.selectorLabel}의 ${josa(label, "은/는")} 공식 출처마다 다른 문장으로 인쇄돼 있습니다. 값 자체는 ${pairFieldValue(product, fieldId)} 하나로 확인됐고, 문장이 서로 다른 부분은 합치지 않고 아래 원문 그대로 둡니다.`,
        [pairConflictLine(product, fieldId)]
      ));
    });

    // Only the ACUVUE documents print the Dk/t unit. A number without a printed unit is
    // never given one here, so two differently written figures do not share an axis.
    if (fieldId === "dkt" && states.every((state) => state !== "unknown")) {
      const united = values.map((value) => /×\s*10/.test(value));
      if (united[0] !== united[1]) {
        const withUnit = united[0] ? 0 : 1;
        verdict.blocked.push(pairReason(
          "unit-notation",
          `Dk/t 원문의 단위 표기가 다릅니다. ${[left, right][withUnit].selectorLabel} 쪽은 ${values[withUnit]}처럼 단위까지 인쇄하고, ${[left, right][1 - withUnit].selectorLabel} 쪽은 ${values[1 - withUnit]}처럼 숫자만 인쇄합니다. 인쇄되지 않은 단위를 임의로 붙이지 않습니다.`,
          [`${left.selectorLabel} — ${conditions[0]}`, `${right.selectorLabel} — ${conditions[1]}`]
        ));
      }
    }

    // Test conditions: a figure whose method, correction, temperature or test power is
    // printed cannot be read against one whose source leaves them out.
    if (["dkt", "thickness"].includes(fieldId) && states.every((state) => state !== "unknown")) {
      const keys = [pairConditionKeys(left, fieldId), pairConditionKeys(right, fieldId)];
      const missing = PAIR_CONDITION_KEYS.filter((key) => Boolean(keys[0][key.id]) !== Boolean(keys[1][key.id]));
      const different = PAIR_CONDITION_KEYS.filter((key) => keys[0][key.id] && keys[1][key.id] && keys[0][key.id] !== keys[1][key.id]);
      if (missing.length) {
        const declared = keys.map((set) => PAIR_CONDITION_KEYS.filter((key) => set[key.id]).map((key) => `${key.label} ${set[key.id]}`));
        verdict.blocked.push(pairReason(
          "condition-level",
          `${label} 값에 붙은 시험 조건의 표기 수준이 다릅니다. ${left.selectorLabel} 쪽 원문은 ${declared[0].length ? `${declared[0].join(" · ")}을 밝히고` : "시험 조건을 밝히지 않고"}, ${right.selectorLabel} 쪽 원문은 ${declared[1].length ? `${declared[1].join(" · ")}만 밝힙니다` : "시험 조건을 밝히지 않습니다"}. 같은 조건에서 잰 값인지 확인할 수 없어 숫자만 직접 비교하지 않습니다.`,
          [`${left.selectorLabel} — ${conditions[0]}`, `${right.selectorLabel} — ${conditions[1]}`]
        ));
      }
      if (different.length) {
        verdict.blocked.push(pairReason(
          "condition-value",
          `${josa(label, "을/를")} 잰 조건 자체가 다릅니다: ${different.map((key) => `${key.label} ${keys[0][key.id]} 대 ${keys[1][key.id]}`).join(" · ")}. 조건이 다른 값은 같은 항목으로 놓지 않습니다.`,
          [`${left.selectorLabel} — ${conditions[0]}`, `${right.selectorLabel} — ${conditions[1]}`]
        ));
      }
    }

    // Water measured separately at the core and at the surface is a different quantity
    // from a single whole-lens figure, so those two cannot share a row. A source that
    // states its measurement location and one that stays silent are both single figures:
    // that difference is recorded as a reading note, not as a barrier.
    if (fieldId === "water" && states.every((state) => state !== "unknown")) {
      const basis = [pairWaterBasis(left), pairWaterBasis(right)];
      const split = basis.map((item) => item === "코어·표면 별도 표기");
      if (split[0] !== split[1]) {
        verdict.blocked.push(pairReason(
          "water-basis",
          `함수율의 측정 위치 축이 다릅니다. ${josa(left.selectorLabel, "은/는")} ${josaRo(basis[0])} ${values[0]}, ${josa(right.selectorLabel, "은/는")} ${josaRo(basis[1])} ${values[1]}입니다. 코어와 표면을 나눠 재는 측정법은 렌즈 하나의 함수율을 재는 측정법과 다르므로 두 숫자를 같은 줄에 놓지 않습니다.`,
          [`${left.selectorLabel} — ${conditions[0]}`, `${right.selectorLabel} — ${conditions[1]}`]
        ));
      } else if (basis[0] !== basis[1]) {
        verdict.notes.push(pairReason(
          "water-basis-note",
          // The condition strings record where in a document a figure was read — page
          // numbers and extraction coordinates — as well as how it was measured. Only the
          // second is a measurement condition, so the difference is stated in words here
          // rather than quoted, and a document location never reaches the reader as one.
          `측정 위치를 밝히는 정도가 다릅니다. ${josa(left.selectorLabel, "은/는")} ${josaRo(basis[0])} ${values[0]}, ${josa(right.selectorLabel, "은/는")} ${josaRo(basis[1])} ${values[1]}입니다. 두 값 모두 렌즈 하나에 대한 단일 표기이지만, 한쪽 원문만 어디를 쟀는지 적고 다른 쪽 원문은 측정 위치를 적지 않습니다. 각 값에 붙은 조건·위치 표기는 ${pairConditionQuote(left, fieldId)} 대 ${josaRo(pairConditionQuote(right, fieldId))} 서로 다릅니다.`,
          [`${left.selectorLabel} — ${conditions[0]}`, `${right.selectorLabel} — ${conditions[1]}`]
        ));
      }
    }

    // The site's own rule for water content and Dk/t across material families, stated
    // product by product in the comparison table's 재질 row.
    if (["water", "dkt"].includes(fieldId) && states.every((state) => state !== "unknown")) {
      const families = [pairMaterialFamily(left), pairMaterialFamily(right)];
      if (families[0] && families[1] && families[0] !== families[1]) {
        verdict.blocked.push(pairReason(
          "material-family",
          `재질 계열이 다릅니다. ${josa(left.selectorLabel, "은/는")} ${pairMaterialPhrase(left, families[0])}, ${josa(right.selectorLabel, "은/는")} ${pairMaterialPhrase(right, families[1])}입니다. 계열이 다른 재질의 ${josa(label, "은/는")} 같은 축에서 비교하지 않습니다.`,
          // The claim this reason rests on is the family, so the family's own recorded
          // wording is quoted here rather than the two figures it decides about.
          [left, right].map((product, index) => `${product.selectorLabel} 재질 표기 — ${pairMaterialRecord(product)} (${values[index]})`)
        ));
      } else if (families[0] !== families[1]) {
        // One side's material record does not file it under either family. The site does
        // not invent one, and it does not silently drop the difference either: the maker's
        // own wording is printed beside the two figures as a reading note.
        const unsetAt = families[0] ? 1 : 0;
        const unset = [left, right][unsetAt];
        verdict.notes.push(pairReason(
          "material-family-unstated",
          `${unset.selectorLabel} 쪽 공식 자료는 재질을 ${families[1 - unsetAt]} 같은 계열 이름으로 부르지 않습니다. 이 사이트가 기록한 표기는 ${pairMaterialRecord(unset)}입니다. 원문에 없는 계열을 사이트가 대신 정하지 않으므로, 두 ${josa(label, "을/를")} 계열이 같다고도 다르다고도 전제하지 않고 각각의 원문 그대로 읽습니다.`,
          [left, right].map((product, index) => `${product.selectorLabel} ${values[index]}`)
        ));
      }
    }

    // Dk/t is a thickness-dependent figure, so a missing centre thickness on either side
    // removes the condition the number has to be read with.
    if (fieldId === "dkt") {
      const missing = [left, right].filter((product) => fieldState(productField(product, "thickness")?.state) === "unknown");
      if (missing.length) {
        verdict.blocked.push(pairReason(
          "thickness-dependency",
          `Dk/t는 재질의 산소 투과성을 렌즈 두께로 나눈 값인데, ${missing.map((product) => product.selectorLabel).reduce((joined, name) => (joined ? `${josa(joined, "과/와")} ${name}` : name), "")}의 중심두께가 공식 자료에서 확인되지 않습니다. 두께 조건 없이 Dk/t 숫자만 비교하지 않고, Dk/t에서 두께를 역산하지도 않습니다.`,
          missing.map((product) => `${product.selectorLabel} 중심두께 — ${pairFieldValue(product, "thickness")}`)
        ));
      }
    }

    // A figure recorded only from a global document is not the figure a Korean package
    // prints, and one product's flag can say so while the other's does not.
    if (states.every((state) => state !== "unknown")) {
      const flags = [fields[0]?.flag || "", fields[1]?.flag || ""];
      if (flags[0] !== flags[1] && flags.some((flag) => /한국 표기 미확인|한국 자료에|한국 공식 자료/.test(flag))) {
        verdict.blocked.push(pairReason(
          "region-notation",
          `원문의 지역 범위가 다릅니다. ${left.selectorLabel}의 ${label} 표기 ${josa(values[0], "은/는")} ${flags[0] || "별도 표기 없음"}, ${right.selectorLabel}의 ${label} 표기 ${josa(values[1], "은/는")} ${josaRo(flags[1] || "별도 표기 없음")} 기록돼 있어 두 원문을 한국 표기끼리 맞대응시키지 못합니다.`,
          [`${left.selectorLabel} ${values[0]} · ${right.selectorLabel} ${values[1]}`]
        ));
      }
    }

    if (verdict.blocked.length) return verdict;

    verdict.same = values[0] === values[1];

    // Two official sources can print the same grade in different words. The site rewrites
    // neither wording, but it says the grade itself is the same so that a difference in
    // wording is not read from the summary as a difference in grade.
    if (!verdict.same && fieldId === "uv") {
      const grades = values.map((value) => (value.match(/Class\s*\d+/i)?.[0] || "").replace(/\s+/g, " "));
      if (grades[0] && grades[0] === grades[1]) {
        verdict.sameGrade = pairReason(
          "same-grade",
          `두 원문이 인쇄한 등급은 ${josaRo(grades[0])} 같고, 그 등급을 적는 문구만 다릅니다. 문구 차이를 등급 차이로 읽지 않습니다.`,
          [`${left.selectorLabel} ${values[0]} · ${right.selectorLabel} ${values[1]}`]
        );
        verdict.notes.push(verdict.sameGrade);
      }
    }

    // Reading aids for a row that can be read: the document both figures come from, and
    // the centre thickness each Dk/t was measured at.
    // Whether both figures rest on one document is a fact about the page, not about the
    // row, so it is recorded here and summarised once above the table.
    const documents = fields.map((field) => field?.sources?.[0]?.document || "");
    verdict.document = documents[0] && documents[0] === documents[1] ? documents[0] : "";
    if (fieldId === "dkt") {
      const thickness = [left, right].map((product) => pairThicknessCondition(product, "dkt") || pairFieldValue(product, "thickness"));
      if (thickness[0] && thickness[1] && thickness[0] !== thickness[1]) {
        verdict.notes.push(pairReason(
          "thickness-condition",
          `두 Dk/t는 중심두께 ${thickness[0]}인 렌즈와 ${thickness[1]}인 렌즈에서 잰 값입니다. Dk/t는 재질의 산소 투과성을 두께로 나눈 값이므로, 이 차이는 재질 차이와 구분해서 읽어야 합니다.`,
          [`${left.selectorLabel} ${values[0]} · ${right.selectorLabel} ${values[1]}`]
        ));
      }
    }
    return verdict;
  }

  // 편집방침 4장: 착용방식·연속착용은 이 사이트가 판단하지 않는 항목이고, 그 구분이
  // 필요한 자리에서는 값 옆에 함께 적는다. 제품 페이지가 값마다 붙이는 주의 문구를 쌍
  // 페이지도 같은 규칙으로 싣는다 — 원문 한 줄만 읽고 지나가는 독자에게 닿아야 하는
  // 문장이므로, 페이지 아래쪽의 공통 안내로 대신하지 않는다.
  const PAIR_WEAR_TEXT = /연속착용|착용방식|끼고 자|extended wear|daily wear|overnight/i;

  // The caution a product page keeps beside this value, printed wherever this page prints
  // an original that mixes a wear schedule into the value. Quoted whole: choosing which
  // sentence of a caution to carry would be the site editing its own warning.
  function pairFieldCautions(pair, fieldId, printed) {
    if (!fieldId || !PAIR_WEAR_TEXT.test(String(printed || ""))) return [];
    return pair.map((product) => {
      const caution = productField(product, fieldId)?.caution || "";
      if (!caution || !PAIR_WEAR_TEXT.test(caution)) return "";
      return `${product.selectorLabel} ${pairFieldLabel(fieldId)} 주의할 점 · ${caution}`;
    }).filter(Boolean);
  }

  function pairFieldVerdict(left, right, fieldId) {
    const verdict = pairFieldVerdictFor(left, right, fieldId);
    verdict.blocked.concat(verdict.notes).forEach((reason) => {
      reason.cautions = pairFieldCautions([left, right], fieldId, `${reason.sentence} ${reason.evidence}`);
    });
    return verdict;
  }

  function pairVerdicts(pair) {
    return PAIR_FIELD_IDS.map((fieldId) => pairFieldVerdict(pair[0], pair[1], fieldId));
  }

  // Facts about the pair as a whole rather than about one row: how much of the two
  // products' evidence rests on the same document, and which test conditions neither
  // maker prints. Both are read off the same field records the table renders.
  function pairReadingNotes(pair, verdicts) {
    const notes = [];
    const shared = new Map();
    verdicts.filter((verdict) => verdict.document).forEach((verdict) => {
      if (!shared.has(verdict.document)) shared.set(verdict.document, []);
      shared.get(verdict.document).push(verdict);
    });
    // Where in that document each product sits: the first segment of the condition names
    // the page, table and column the figure was read from.
    const place = (product, fieldId) => pairConditionQuote(product, fieldId).split("·")[0].trim();
    Array.from(shared.entries())
      .filter(([, group]) => group.length > 1)
      .forEach(([document, group]) => {
        const anchor = group[0].fieldId;
        notes.push(pairReason(
          "same-document",
          `${group.map((verdict) => verdict.label).join(" · ")} ${group.length}개 항목은 두 제품 모두 같은 문서를 1차 근거로 삼습니다: ${document}. 두 제품이 놓인 자리는 ${place(pair[0], anchor)} 대 ${josaRo(place(pair[1], anchor))} 서로 다른 칸이며, 같은 문서에서 읽었다는 것이 값이 같다는 뜻은 아닙니다.`,
          [`${pair[0].selectorLabel} · ${pair[1].selectorLabel}`]
        ));
      });

    const dkt = verdicts.find((verdict) => verdict.fieldId === "dkt");
    if (dkt && !dkt.blocked.length && !dkt.bothUnknown) {
      const keys = pair.map((product) => pairConditionKeys(product, "dkt"));
      const absent = PAIR_CONDITION_KEYS.filter((key) => !keys[0][key.id] && !keys[1][key.id]);
      if (absent.length) {
        notes.push(pairReason(
          "condition-shared-gap",
          `두 제품의 Dk/t 원문 모두 ${josa(absent.map((key) => key.label).join(" · "), "을/를")} 밝히지 않습니다. 표기 수준이 같아 나란히 놓을 수는 있지만, 두 숫자가 같은 방법으로 잰 값이라는 근거도 없습니다.`,
          [`${pair[0].selectorLabel} ${pairFieldValue(pair[0], "dkt")} · ${pair[1].selectorLabel} ${pairFieldValue(pair[1], "dkt")}`]
        ));
      }
    }
    return notes;
  }

  function pairBuckets(pair) {
    const verdicts = pairVerdicts(pair);
    return {
      verdicts,
      readings: pairReadingNotes(pair, verdicts),
      blocked: verdicts.filter((verdict) => verdict.blocked.length),
      bothUnknown: verdicts.filter((verdict) => verdict.bothUnknown),
      same: verdicts.filter((verdict) => !verdict.blocked.length && !verdict.bothUnknown && verdict.same),
      different: verdicts.filter((verdict) => !verdict.blocked.length && !verdict.bothUnknown && !verdict.same)
    };
  }


  // The comparison table's own rows, with this pair's verdict appended to the row note,
  // so a row that cannot be read side by side says so inside the table as well.
  function pairRows(pair) {
    const verdicts = pairVerdicts(pair);
    const byField = {};
    verdicts.forEach((verdict) => { byField[verdict.fieldId] = verdict; });
    return COMPARE_ROWS.map((row) => {
      const verdict = row.fieldId ? byField[row.fieldId] : null;
      if (!verdict) return { ...row };
      const lines = verdict.blocked.length
        ? [`이 두 제품에서는 같은 항목으로 놓을 수 없습니다. ${verdict.blocked.map((reason) => reason.sentence).join(" ")}`]
        : verdict.notes.map((note) => note.sentence);
      // The cell itself prints every recorded original, so a wear-schedule sentence can
      // reach the table even where no verdict quotes it. The caution travels with it.
      const printed = pair.map((product) => {
        const field = productField(product, row.fieldId);
        return [field?.value, ...(field?.conflicts || []).map((conflict) => conflict.value), row.notes?.[product.id], field?.sources?.[0]?.condition]
          .filter(Boolean).join(" · ");
      }).join(" · ");
      const cautions = pairFieldCautions(pair, row.fieldId, printed);
      if (!lines.length && !cautions.length) return { ...row };
      return { ...row, rowNote: [row.rowNote, ...lines, ...cautions].filter(Boolean).join(" ") };
    });
  }

  function pairVerifiedAt(pair) {
    const dates = [];
    pair.forEach((product) => product.fields.forEach((field) => (field.sources || []).forEach((source) => {
      if (source.verifiedAt) dates.push(source.verifiedAt);
    })));
    return dates.length ? displayDate(dates.sort().pop()) : "";
  }

  function pairReasonBody(reason, suffix = "") {
    const evidence = reason.evidence ? `<span class="cell-note">근거 원문 · ${text(reason.evidence)}</span>` : "";
    const cautions = (reason.cautions || [])
      .map((caution) => `<span class="cell-note warn">${text(caution)}</span>`).join("");
    return `${text(reason.sentence)}${suffix}${evidence}${cautions}`;
  }

  function pairTermLink(verdict) {
    const href = fieldCopy[verdict.fieldId] ? internalHref(`../terms/${verdict.fieldId}.html`) : "";
    return href ? ` <a href="${escapeHtml(href)}">${escapeHtml(verdict.label)} 표기 읽는 법</a>` : "";
  }

  // One list item per item, never per reason: the number in the heading above the list and
  // the number of entries a reader counts in it have to be the same number. A field that
  // carries several reasons keeps them inside its own entry.
  function pairReasonItem(verdict, reasons) {
    const list = [].concat(reasons);
    if (list.length === 1) {
      return `<li><strong>${escapeHtml(verdict.label)}</strong> · ${pairReasonBody(list[0], pairTermLink(verdict))}</li>`;
    }
    return `<li><strong>${escapeHtml(verdict.label)}</strong> · 사유 ${list.length}건${pairTermLink(verdict)}<ul class="source-links">${list.map((reason) => `<li>${pairReasonBody(reason)}</li>`).join("")}</ul></li>`;
  }

  function pairValuePair(verdict, pair) {
    return verdict.values.map((value, index) => `${escapeHtml(pair[index].selectorLabel)} ${text(value)}`).join(" · ");
  }

  function pairPackageCard(product) {
    const specs = (product.packageSpecs || []).map((spec) =>
      `<div class="label-item"><strong>${text(spec.value)}</strong><span>${escapeHtml(spec.label)}</span></div>`).join("");
    const href = internalHref(`../products/${product.slug || product.id}.html`);
    return `<section class="package-card" aria-label="${escapeHtml(`${product.selectorLabel} 주요 표기`)}">
      <div class="package-head">
        <strong><a href="${escapeHtml(href)}">${escapeHtml(product.name)}</a></strong>
        <span>${escapeHtml(product.type)}</span>
      </div>
      <div class="label-grid">${specs}</div>
      <p class="sample-note">${escapeHtml(product.maker)} / ${escapeHtml(product.distributor)}</p>
    </section>`;
  }

  function pairSourceItems(pair) {
    const seen = new Set();
    const items = [];
    pair.forEach((product) => (product.fields || []).forEach((field) => (field.sources || []).forEach((source) => {
      const url = externalUrl(source.url);
      if (url === "#") return;
      const key = `${product.id}|${url}|${source.document}`;
      if (seen.has(key)) return;
      seen.add(key);
      items.push(`<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.document)}</a> <span class="cell-note">${escapeHtml(product.selectorLabel)} · ${escapeHtml(source.organization)} · 확인일 ${displayDate(source.verifiedAt || "")}</span></li>`);
    })));
    return items.join("");
  }

  // The count sentence the page states above the table. It is computed, never typed, so
  // the static copy in the file can be checked against it.
  function pairCountSentence(pair) {
    const buckets = pairBuckets(pair);
    const readable = buckets.same.length + buckets.different.length;
    const unknown = buckets.bothUnknown.length
      ? ` 두 제품 모두 공식 표기를 찾지 못한 항목이 ${buckets.bothUnknown.length}개 있습니다.`
      : "";
    return `공식 표기 ${PAIR_FIELD_IDS.length}개 항목 가운데 같은 항목으로 나란히 놓을 수 있는 것은 ${readable}개(값이 같은 항목 ${buckets.same.length}개 · 값이 다른 항목 ${buckets.different.length}개)이고, 같은 표에 놓을 수 없는 것은 ${buckets.blocked.length}개입니다.${unknown}`;
  }

  // The name a search result has to carry: the recorded product name without its trademark
  // marks and without the English half, which is what tells one AIR OPTIX from another.
  // The picker's short selectorLabel stays in the h1 and in the page's own prose.
  function pairSearchName(product) {
    const korean = String(product.name || "").split(" / ")[0].replace(/[®™]/g, "").replace(/\s+/g, " ").trim();
    // Only where the recorded name is the picker label plus the half the label drops. Where
    // the two spell the product differently — MAX against 맥스, 아큐브 오아시스 against
    // 아큐브 오아시스 2주 — the label is the one that tells this product from its siblings.
    return korean.includes(product.selectorLabel) ? korean : product.selectorLabel;
  }

  // A description a Korean SERP can actually show: the proposition first, the figures not
  // at all. Putting two 함수율 numbers side by side in the snippet would print exactly the
  // comparison the page itself declines to make.
  function pairMetaDescription(pair) {
    const buckets = pairBuckets(pair);
    const names = `${josa(pairSearchName(pair[0]), "과/와")} ${pairSearchName(pair[1])}`;
    const blocked = buckets.blocked.length
      ? `${buckets.blocked.map((verdict) => verdict.label).join("·")} ${buckets.blocked.length}개 항목은 왜 같은 표에 놓을 수 없는지 근거 원문과 함께 밝힙니다.`
      : "아홉 항목 모두 같은 항목으로 놓고 근거 원문을 함께 밝힙니다.";
    return `${names}의 공식 표기를 출처·확인일과 함께 나란히 둡니다. ${blocked} 추천·순위·점수는 없습니다.`;
  }

  function pairMetaTitle(pair) {
    const buckets = pairBuckets(pair);
    return `${pairSearchName(pair[0])} vs ${pairSearchName(pair[1])} — 공식 표기 비교와 같은 표에 놓을 수 없는 ${buckets.blocked.length}개 항목 | LensFact`;
  }

  // The whole body of a pair page. `prefix` namespaces the table ids so the no-JS copy
  // and the rendered copy can never collide.
  function pairBodyMarkup(ids, prefix = "") {
    const pair = pairProducts(ids);
    if (!pair) return "";
    const buckets = pairBuckets(pair);
    const columns = pair.map((product) => ({ productId: product.id, colId: `${prefix}col-${product.id}`, label: pairColumnLabel(product) }));
    const byId = {};
    pair.forEach((product) => { byId[product.id] = product; });
    const rows = pairRows(pair).map((row) => ({ ...row, rowId: `${prefix}${row.rowId}` }));
    const captionId = `${prefix}pair-caption`;

    const blockedList = buckets.blocked.length
      ? `<ul class="source-links">${buckets.blocked.map((verdict) => pairReasonItem(verdict, verdict.blocked)).join("")}</ul>`
      : `<p>이 두 제품에서는 아홉 항목 모두 같은 항목으로 놓을 수 있었습니다. 값이 같다는 뜻이 아니라, 두 표기가 같은 종류의 값이라는 뜻입니다.</p>`;

    const unknownList = buckets.bothUnknown.length
      ? `<section class="source-section" aria-labelledby="${prefix}pair-unknown-title">
          <h2 id="${prefix}pair-unknown-title">두 제품 모두 공식 표기를 찾지 못한 항목</h2>
          <ul class="source-links">${buckets.bothUnknown.map((verdict) => pairReasonItem(verdict, verdict.notes)).join("")}</ul>
        </section>`
      : "";

    const readingList = buckets.readings.length
      ? `<ul class="source-links">${buckets.readings.map((note) => `<li>${text(note.sentence)}</li>`).join("")}</ul>`
      : "";

    const comparable = [
      buckets.same.length ? `<li><strong>값이 같은 항목 ${buckets.same.length}개</strong>${buckets.same.map((verdict) => `<span class="cell-note">${escapeHtml(verdict.label)} · ${text(verdict.values[0])}</span>`).join("")}</li>` : "",
      buckets.different.length ? `<li><strong>값이 다른 항목 ${buckets.different.length}개</strong>${buckets.different.map((verdict) => `<span class="cell-note">${escapeHtml(verdict.label)} · ${pairValuePair(verdict, pair)}${verdict.sameGrade ? ` — ${text(verdict.sameGrade.sentence)}` : ""}</span>`).join("")}</li>` : ""
    ].filter(Boolean).join("");

    const memoRow = COMPARE_ROWS.find((row) => row.memo);
    const memos = memoRow
      ? `<ul class="source-links">${pair.map((product) => `<li><strong>${escapeHtml(product.selectorLabel)}</strong><span class="cell-note">${text(memoRow.memo[product.id] || "")}</span></li>`).join("")}</ul>`
      : "";

    const others = pair.flatMap((product) => pairPagesWith(product.id)
      .filter((page) => pairFile(page.ids) !== pairFile(ids))
      .map((page) => `<li><a href="${escapeHtml(internalHref(`./${pairFile(page.ids)}`))}">${escapeHtml(pairLabel(page.ids))} 공식 표기 비교</a></li>`));
    const otherPages = others.length
      ? `<section class="source-section" aria-labelledby="${prefix}pair-others-title">
          <h2 id="${prefix}pair-others-title">이 두 제품이 들어간 다른 비교 페이지</h2>
          <ul class="source-links">${Array.from(new Set(others)).join("")}</ul>
        </section>`
      : "";

    return `<section class="source-section" aria-labelledby="${prefix}pair-summary-title">
        <h2 id="${prefix}pair-summary-title">두 제품의 공식 표기를 항목별로 나눈 결과</h2>
        <ul class="source-links">${comparable}</ul>
        ${readingList}
      </section>

      <div class="cards-grid">${pair.map(pairPackageCard).join("")}</div>

      <section class="source-section" aria-labelledby="${prefix}pair-blocked-title">
        <h2 id="${prefix}pair-blocked-title">같은 표에 놓을 수 없는 항목 ${buckets.blocked.length}개</h2>
        <p>아래 항목은 두 제품의 공식 표기가 서로 다른 종류의 값이거나, 원문이 여러 건이거나, 한쪽 표기를 찾지 못한 항목입니다. 값을 합치거나 한쪽을 대표값으로 고르지 않고, 왜 나란히 읽을 수 없는지만 적습니다.</p>
        ${blockedList}
      </section>

      ${unknownList}

      <section class="source-section" aria-labelledby="${prefix}pair-table-title">
        <h2 id="${prefix}pair-table-title">공식 표기 나란히 보기</h2>
        <p>비교표와 같은 행 구성입니다. 행 이름은 그 표기를 설명하는 용어 페이지로, 열 이름은 제품 페이지로 이어집니다.</p>
        <p class="table-caption" id="${captionId}">${escapeHtml(pair.map((product) => product.selectorLabel).join(" · "))} 공식 표기 · 확인일 ${pairVerifiedAt(pair)}</p>
        <div class="table-scroll" tabindex="0" aria-label="두 제품 공식 표기 비교표. 좁은 화면에서는 항목별 카드로 표시됩니다.">
          <table class="compare-table pair-table" aria-labelledby="${captionId}">
            <thead>${compareHeadRow(columns, byId)}</thead>
            <tbody>${rows.map((row) => compareRow(row, byId, columns)).join("")}</tbody>
          </table>
        </div>
        <p class="table-footnote">${rows.filter((row) => row.rowNote).map((row) => `<span class="table-footnote-item" id="compare-note-${escapeHtml(row.rowId)}">${escapeHtml(row.label)}: ${text(row.rowNote)}</span>`).join("")}</p>
      </section>

      <section class="source-section" aria-labelledby="${prefix}pair-memo-title">
        <h2 id="${prefix}pair-memo-title">두 제품의 확인 메모</h2>
        <p>제품별로 무엇을 어떻게 확인했는지, 어디에서 확인하지 못했는지 그대로 옮겨 둡니다.</p>
        ${memos}
      </section>

      <section class="source-section" aria-labelledby="${prefix}pair-sources-title">
        <h2 id="${prefix}pair-sources-title">이 비교에 사용한 공식 출처</h2>
        <p>표의 모든 값은 아래 공개 자료에서 옮겨 적었습니다. 주소는 제품 데이터에 기록된 출처를 그대로 사용합니다.</p>
        <ul class="source-links">${pairSourceItems(pair)}</ul>
      </section>

      ${otherPages}`;
  }

  function initComparePairPage() {
    const main = qs("[data-compare-pair]");
    if (!main || !products.length) return;
    const ids = String(main.dataset.comparePair || "").split(",").map((id) => id.trim()).filter(Boolean);
    const pair = pairProducts(ids);
    if (!pair) return;

    const eyebrow = qs("[data-pair-eyebrow]", main);
    const verifiedAt = pairVerifiedAt(pair);
    if (eyebrow && verifiedAt) eyebrow.textContent = `두 제품 공식 표기 비교 · 확인일 ${verifiedAt}`;

    const countNote = qs("[data-pair-count]", main);
    if (countNote) countNote.textContent = pairCountSentence(pair);

    const live = qs("[data-pair-live]", main);
    if (!live) return;
    live.innerHTML = pairBodyMarkup(ids, "");
    toggleHidden(live, false);
  }

  // Product pages render every field open: the evidence is the page, not a disclosure.
  function productSpecSection(field) {
    const item = resolvedField(field);
    const state = fieldState(item.state);
    const panelId = `spec-${escapeHtml(item.id)}`;
    const headingId = `${panelId}-title`;
    const condition = item.sources?.[0]?.condition || "";
    // The annotation chip inherits the field's own state hue: a flag that restates a
    // source disagreement must read amber like the state chip beside it, never the
    // neutral treatment reserved for 확인되지 않음.
    const flagClass = state === "conflict" ? "status-pending status-pending-conflict" : "status-pending";
    const flag = item.flag ? `<span class="status-label ${flagClass}">${escapeHtml(item.flag)}</span>` : "";
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

  // --- Term pages ------------------------------------------------------------------
  // One page per field, rendered from fields.js (what the word means) and products.js
  // (what the products on file actually print). No page states a new fact.

  const TERM_FIELD_IDS = ["bc", "dia", "water", "material", "dkt", "thickness", "replacement", "permit", "uv"];

  function latestFieldVerifiedAt(fieldId) {
    const dates = [];
    products.forEach((product) => {
      (productField(product, fieldId)?.sources || []).forEach((source) => { if (source.verifiedAt) dates.push(source.verifiedAt); });
    });
    return dates.length ? displayDate(dates.sort().pop()) : "";
  }

  // Products grouped by every value they print for one field. A conflicted product is
  // listed under each of its recorded values, exactly as the deep-link filter matches it.
  function termDistribution(fieldId) {
    const groups = new Map();
    const unknown = [];
    products.forEach((product) => {
      const field = productField(product, fieldId);
      const values = fieldValues(fieldId, field);
      if (!values.length) {
        unknown.push({ product, field, note: "" });
        return;
      }
      const seen = new Set();
      values.forEach((value) => {
        if (seen.has(value.key)) return;
        seen.add(value.key);
        if (!groups.has(value.key)) groups.set(value.key, { key: value.key, label: value.label, entries: [] });
        groups.get(value.key).entries.push({ product, field, note: value.note });
      });
    });
    const rows = Array.from(groups.values()).sort((left, right) => {
      const a = Number(left.key);
      const b = Number(right.key);
      const aNumeric = Number.isFinite(a);
      const bNumeric = Number.isFinite(b);
      if (aNumeric && bNumeric) return a - b;
      // Printed ranges and sentences sort after the plain figures, never between them.
      if (aNumeric !== bNumeric) return aNumeric ? -1 : 1;
      return String(left.label).localeCompare(String(right.label), "ko");
    });
    return { rows, unknown };
  }

  function termEntryMarkup(entry) {
    const product = entry.product;
    const href = internalHref(`../products/${product.slug || product.id}.html`);
    const conflicted = fieldState(entry.field?.state) === "conflict";
    const notes = [];
    if (entry.note) notes.push(entry.note);
    if (conflicted) notes.push(`공식 출처 간 충돌 · 원문 표기 ${entry.field.value}`);
    const note = notes.length ? `<span class="cell-note${conflicted ? " warn" : ""}">${text(notes.join(" · "))}</span>` : "";
    return `<li><a href="${escapeHtml(href)}">${escapeHtml(product.selectorLabel)}</a>${note}</li>`;
  }

  function termRowMarkup(fieldId, row, index, prefix) {
    const rowId = `${prefix}term-row-${index}`;
    const conflicted = row.entries.some((entry) => fieldState(entry.field?.state) === "conflict");
    const listLink = SPEC_FILTER_FIELDS.includes(fieldId)
      ? `<a class="term-list-link" href="${escapeHtml(internalHref(`../products/index.html?${fieldId}=${encodeURIComponent(row.key)}`))}">이 값으로 목록 보기</a>`
      : "";
    return `<tr>
      <th id="${rowId}" scope="row"><span class="mono${conflicted ? " warn" : ""}">${text(row.label)}</span></th>
      <td headers="${rowId} ${prefix}term-col-count" data-label="제품 수">${row.entries.length}개</td>
      <td headers="${rowId} ${prefix}term-col-products" data-label="제품"><ul class="term-product-list">${row.entries.map(termEntryMarkup).join("")}</ul>${listLink}</td>
    </tr>`;
  }

  function termUnknownRowMarkup(unknown, prefix) {
    const rowId = `${prefix}term-row-unknown`;
    return `<tr>
      <th id="${rowId}" scope="row"><span class="status-label status-unknown">확인되지 않음</span></th>
      <td headers="${rowId} ${prefix}term-col-count" data-label="제품 수">${unknown.length}개</td>
      <td headers="${rowId} ${prefix}term-col-products" data-label="제품"><ul class="term-product-list">${unknown.map(termEntryMarkup).join("")}</ul><span class="cell-note">공식 자료에서 값을 찾지 못했다는 기록이며, 값이 없다는 뜻이 아닙니다.</span></td>
    </tr>`;
  }

  function termDistributionMarkup(fieldId, prefix = "") {
    const code = fieldCode(fieldId);
    const { rows, unknown } = termDistribution(fieldId);
    const captionId = `${prefix}term-caption`;
    const verifiedAt = latestFieldVerifiedAt(fieldId);
    const body = rows.map((row, index) => termRowMarkup(fieldId, row, index, prefix)).join("")
      + (unknown.length ? termUnknownRowMarkup(unknown, prefix) : "");
    return `<p class="table-caption" id="${captionId}">수록 ${products.length}개 제품이 ${escapeHtml(code)} 항목에 적고 있는 값${verifiedAt ? ` · 확인일 ${verifiedAt}` : ""}</p>
      <div class="table-scroll" tabindex="0" aria-label="${escapeHtml(`${code} 값 분포표. 좁은 화면에서는 값별 카드로 표시됩니다.`)}">
        <table class="compare-table term-table" aria-labelledby="${captionId}">
          <thead>
            <tr>
              <th id="${prefix}term-col-value" scope="col">값</th>
              <th id="${prefix}term-col-count" scope="col">제품 수</th>
              <th id="${prefix}term-col-products" scope="col">제품</th>
            </tr>
          </thead>
          <tbody>${body}</tbody>
        </table>
      </div>`;
  }

  function termMeaningMarkup(fieldId) {
    const copy = fieldCopy[fieldId] || {};
    const caution = copy.caution ? `<div class="info-block"><div class="info-label">주의할 점</div><p>${escapeHtml(copy.caution)}</p></div>` : "";
    return `<div class="info-block"><div class="info-label">뜻</div><p>${escapeHtml(copy.meaning || "")}</p></div>${caution}`;
  }

  function initTermPage() {
    const main = qs("[data-term-page]");
    if (!main) return;
    const fieldId = main.dataset.termPage;
    const copy = fieldCopy[fieldId];
    if (!copy) return;

    const title = qs("[data-term-title]", main);
    if (title) title.textContent = `${copy.label} — ${copy.code}`;

    const meaning = qs("[data-term-meaning]", main);
    if (meaning) meaning.innerHTML = termMeaningMarkup(fieldId);

    if (!products.length) return;
    const eyebrow = qs("[data-term-eyebrow]", main);
    const verifiedAt = latestFieldVerifiedAt(fieldId);
    if (eyebrow && verifiedAt) eyebrow.textContent = `용어 설명 · 확인일 ${verifiedAt}`;
    const distribution = qs("[data-term-distribution]", main);
    if (distribution) distribution.innerHTML = termDistributionMarkup(fieldId, "");
  }

  function termIndexMarkup() {
    return TERM_FIELD_IDS.map((fieldId) => {
      const copy = fieldCopy[fieldId] || {};
      const { rows, unknown } = termDistribution(fieldId);
      const meta = products.length
        ? `<div class="card-meta"><span>값 ${rows.length}가지</span><span>확인되지 않음 ${unknown.length}개</span></div>`
        : "";
      return `<article class="card">
        <div class="category">${escapeHtml(copy.code || fieldId)}</div>
        <h3><a href="${escapeHtml(internalHref(`./${fieldId}.html`))}">${escapeHtml(copy.label || fieldId)}</a></h3>
        <p>${escapeHtml(copy.meaning || "")}</p>
        ${meta}
      </article>`;
    }).join("");
  }

  function initTermIndex() {
    const list = qs("[data-term-index]");
    if (!list || !Object.keys(fieldCopy).length) return;
    list.innerHTML = termIndexMarkup();
  }

  function normalizeSearchText(value) {
    return String(value || "").normalize("NFKC").toLocaleLowerCase("ko-KR")
      .replace(/[^\p{L}\p{N}]+/gu, "").trim();
  }

  function normalizeReplacement(value) {
    const normalized = normalizeSearchText(value);
    if (["1달", "30일", "한달", "1개월"].includes(normalized)) return "1개월";
    if (normalized === "1일") return "1일";
    if (normalized === "2주") return "2주";
    return normalized;
  }

  // Spec deep links: ?bc=8.6&dia=14.0&water=48&dkt=170&material=comfilcon%20A&replacement=1일
  // Every term page links into the list this way, so the parameter names are the field ids.
  const SPEC_FILTER_FIELDS = ["bc", "dia", "water", "dkt", "material", "replacement"];
  const SEARCH_PARAM = "q";
  const PRODUCT_STATUS_VALUES = new Set(["conflict", "unknown", "verified"]);

  function filterProducts(candidates, filters = {}) {
    const query = normalizeSearchText(filters.search);
    const maker = String(filters.maker || "").trim();
    const replacement = normalizeReplacement(filters.replacement);
    const status = PRODUCT_STATUS_VALUES.has(filters.status) ? filters.status : "";
    const specs = SPEC_FILTER_FIELDS
      .map((fieldId) => ({ fieldId, wanted: String(filters.specs?.[fieldId] ?? "").trim() }))
      .filter((spec) => spec.wanted);
    return candidates.filter((product) => {
      const searchable = [product.name, ...(product.aliases || []), product.maker, product.distributor]
        .map(normalizeSearchText).join(" ");
      const replacementField = product.fields?.find((field) => field.id === "replacement");
      const fields = product.fields || [];
      const matchesStatus = !status
        || (status === "verified" ? fields.length > 0 && fields.every((field) => fieldState(field.state) === "verified")
          : fields.some((field) => fieldState(field.state) === status));
      return (!query || searchable.includes(query))
        && (!maker || product.maker === maker)
        && (!replacement || normalizeReplacement(replacementField?.value) === replacement)
        && matchesStatus
        && specs.every((spec) => matchesFieldValue(spec.fieldId, productField(product, spec.fieldId), spec.wanted));
    });
  }

  function parseProductFilterUrl(href) {
    const specs = {};
    let search = "";
    let maker = "";
    let replacement = "";
    let status = "";
    try {
      const params = new URL(href).searchParams;
      SPEC_FILTER_FIELDS.filter((fieldId) => fieldId !== "replacement").forEach((fieldId) => {
        const value = (params.get(fieldId) || "").trim();
        if (value) specs[fieldId] = value;
      });
      search = (params.get(SEARCH_PARAM) || "").trim();
      maker = (params.get("maker") || "").trim();
      replacement = (params.get("replacement") || "").trim();
      const rawStatus = (params.get("status") || "").trim();
      status = PRODUCT_STATUS_VALUES.has(rawStatus) ? rawStatus : "";
    } catch {
      // A file:// context can refuse URL parsing; the unfiltered list still renders.
    }
    return { search, maker, replacement, status, specs };
  }

  function serializeProductFilterUrl(href, filters) {
    const url = new URL(href, "https://lensfact.local");
    SPEC_FILTER_FIELDS.concat(SEARCH_PARAM, "maker", "status").forEach((key) => url.searchParams.delete(key));
    SPEC_FILTER_FIELDS.filter((fieldId) => fieldId !== "replacement").forEach((fieldId) => {
      const value = String(filters.specs?.[fieldId] || "").trim();
      if (value) url.searchParams.set(fieldId, value);
    });
    const values = {
      [SEARCH_PARAM]: String(filters.search || "").trim(),
      maker: String(filters.maker || "").trim(),
      replacement: String(filters.replacement || "").trim(),
      status: PRODUCT_STATUS_VALUES.has(filters.status) ? filters.status : ""
    };
    Object.entries(values).forEach(([key, value]) => { if (value) url.searchParams.set(key, value); });
    const query = url.searchParams.toString();
    return `${url.pathname}${query ? `?${query}` : ""}${url.hash}`;
  }

  function writeProductFilters(filters) {
    try {
      window.history.replaceState(null, "", serializeProductFilterUrl(window.location.href, filters));
    } catch {
      // History is unavailable in some file:// contexts; the filter still applies.
    }
  }

  function specChip(fieldId, value) {
    const code = fieldCode(fieldId);
    return `<button class="spec-chip" type="button" data-spec-chip="${escapeHtml(fieldId)}" aria-label="${escapeHtml(`${code} ${value} 조건 지우기`)}">${escapeHtml(code)} ${escapeHtml(value)}<span class="spec-chip-remove" aria-hidden="true">×</span></button>`;
  }

  function initProductIndex() {
    const list = qs("[data-product-index]");
    if (!list || !products.length) return;
    const controls = qs("[data-product-filters]");
    if (!controls) return;
    const cards = new Map();
    qsa("article.card", list).forEach((card) => {
      const href = qs("h3 a", card)?.getAttribute("href") || "";
      const id = href.split("/").pop()?.replace(/\.html(?:[?#].*)?$/, "");
      if (id) cards.set(id, card);
    });
    const search = qs("[data-product-search]", controls);
    const maker = qs("[data-product-maker]", controls);
    const replacement = qs("[data-product-replacement]", controls);
    const statusSelect = qs("[data-product-status]", controls);
    const resultStatus = qs("[data-product-result-status]", controls);
    const noResults = qs("[data-product-no-results]");
    const chips = qs("[data-spec-chips]");
    controls.hidden = false;
    qsa("input, select, button", controls).forEach((control) => { control.disabled = false; });

    const specs = {};

    function restoreControls() {
      const state = parseProductFilterUrl(window.location.href);
      if (search) search.value = state.search;
      if (maker) maker.value = state.maker;
      if (replacement) replacement.value = state.replacement;
      if (statusSelect) statusSelect.value = state.status;
      SPEC_FILTER_FIELDS.forEach((fieldId) => { delete specs[fieldId]; });
      Object.assign(specs, state.specs);
    }
    restoreControls();

    function renderChips() {
      if (!chips) return;
      const active = SPEC_FILTER_FIELDS.filter((fieldId) => specs[fieldId]);
      chips.innerHTML = active.length
        ? `<span class="spec-chip-label">사양 조건</span>${active.map((fieldId) => specChip(fieldId, specs[fieldId])).join("")}`
        : "";
      toggleHidden(chips, !active.length);
    }

    const apply = (writeUrl = true) => {
      const filters = { search: search?.value, maker: maker?.value, replacement: replacement?.value, status: statusSelect?.value, specs };
      const matches = filterProducts(products, filters);
      const ids = new Set(matches.map(({ id }) => id));
      cards.forEach((card, id) => { card.hidden = !ids.has(id); });
      if (resultStatus) resultStatus.textContent = `전체 ${products.length}개 중 ${matches.length}개 제품`;
      if (noResults) noResults.hidden = matches.length !== 0;
      renderChips();
      if (writeUrl) writeProductFilters(filters);
    };
    controls.addEventListener("input", apply);
    controls.addEventListener("change", apply);
    chips?.addEventListener("click", (event) => {
      const chip = event.target.closest("[data-spec-chip]");
      if (!chip) return;
      delete specs[chip.dataset.specChip];
      apply();
      search?.focus();
    });
    qs("[data-product-reset]", controls)?.addEventListener("click", () => {
      if (search) search.value = "";
      if (maker) maker.value = "";
      if (replacement) replacement.value = "";
      if (statusSelect) statusSelect.value = "";
      SPEC_FILTER_FIELDS.forEach((fieldId) => { delete specs[fieldId]; });
      apply();
      search?.focus();
    });
    apply();
    window.addEventListener("popstate", () => {
      restoreControls();
      apply(false);
    });

    // The header 검색 link lands on #product-search; the controls are only enabled here,
    // so the focus has to be moved after they stop being disabled.
    const focusSearch = () => { if (window.location.hash === "#product-search") search?.focus(); };
    window.addEventListener("hashchange", focusSearch);
    // Chrome resets focus to <body> after its own fragment handling, so the initial
    // focus has to run after load rather than on DOMContentLoaded.
    if (document.readyState === "complete") window.setTimeout(focusSearch, 0);
    else window.addEventListener("load", () => window.setTimeout(focusSearch, 0), { once: true });
  }

  function summarizeEvidence(candidates) {
    const summary = { products: candidates.length, fields: 0, verified: 0, conflict: 0, unknown: 0, sources: 0 };
    candidates.forEach((product) => {
      (product.fields || []).forEach((field) => {
        summary.fields += 1;
        const state = fieldState(field.state);
        summary[state] += 1;
        summary.sources += (field.sources || []).length;
      });
    });
    return summary;
  }

  function initEvidenceSummaries() {
    if (!products.length) return;
    const summary = summarizeEvidence(products);
    qsa("[data-evidence-summary]").forEach((region) => {
      Object.entries(summary).forEach(([key, value]) => {
        const node = qs(`[data-summary-value="${key}"]`, region);
        if (node) node.textContent = String(value);
      });
    });
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
    initArticleDisclosure();
    initArticleList();
    initCompareTable();
    initComparePairPage();
    initProductPage();
    initProductIndex();
    initTermPage();
    initTermIndex();
    initProductCounts();
    initEvidenceSummaries();
    initAdSlots();
  });
})();
