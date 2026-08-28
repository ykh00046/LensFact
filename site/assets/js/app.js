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

    qsa("[data-decoder-start]").forEach((button) => {
      button.addEventListener("click", () => {
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
    { productId: "clariti-1-day", colId: "col-clariti-1-day", label: "클래리티® 원데이" }
  ];

  const COMPARE_ROWS = [
    { rowId: "row-permit", fieldId: "permit", label: "한국 수입허가번호", mono: true },
    {
      rowId: "row-replacement", fieldId: "replacement", label: "교체주기",
      notes: { "biofinity": "연속착용 여부와 별도" }
    },
    {
      rowId: "row-material", fieldId: "material", label: "재질", mono: true,
      notes: {
        "acuvue-oasys-1-day": "실리콘 하이드로겔",
        "dailies-total1": "워터 그라디언트 실리콘 하이드로겔",
        "biofinity": "실리콘 하이드로겔",
        "acuvue-moist-1-day": "하이드로겔",
        "myday": "실리콘 하이드로겔",
        "clariti-1-day": "한국 2023 사양서 인쇄 표기 vs 글로벌 사양·MFDS 모델명"
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
        "clariti-1-day": "출처가 측정 위치를 표기하지 않음"
      }
    },
    {
      rowId: "row-dkt", fieldId: "dkt", label: "Dk/t", labelNote: "시험 조건 포함", mono: true,
      rowNote: "아큐브 두 제품 원문만 단위(× 10⁻⁹)를 명기함. 데일리스 토탈원·바이오피니티·마이데이·클래리티 원데이 원문은 단위를 표기하지 않아 임의로 단위를 붙이지 않음.",
      notes: {
        "acuvue-oasys-1-day": "-3.00D · 중심 0.085 mm · 35℃ · boundary/edge-corrected Dk",
        "dailies-total1": "-3.00D · 중심 0.09 mm",
        "acuvue-moist-1-day": "-3.00D · 중심 0.084 mm · 35℃ · boundary/edge-corrected Dk",
        "myday": "@-3.00DS · 측정법·보정·온도 조건 미표기 · 중심두께 미확인"
      }
    },
    {
      rowId: "row-thickness", fieldId: "thickness", label: "중심두께", mono: true, useCondition: true,
      notes: {
        "acuvue-moist-1-day": "-3.00D",
        "biofinity": "2026-08-28 재확인에서 항목 없음 · 이전 기록의 0.08 mm는 철회",
        "myday": "검토한 공식 자료 6종에 중심두께 항목 없음",
        "clariti-1-day": "검토한 한국·글로벌 공식 자료 6종에 중심두께 항목 없음"
      }
    },
    {
      rowId: "row-uv", fieldId: "uv", label: "UV", chip: true,
      notes: {
        "dailies-total1": "기능 없음으로 단정하지 않음",
        "acuvue-moist-1-day": "글로벌 기술 사양의 근사값 · 한국 표기 수치는 확인되지 않음",
        "myday": "차단율 퍼센트가 아니라 등급 표기 · 등급 기준은 사양서에 정의되지 않음",
        "clariti-1-day": "차단율 퍼센트가 어느 공식 자료에도 없음 · Class 2는 한국 사양서의 등급 표기"
      }
    },
    {
      rowId: "row-note", label: "확인 메모",
      memo: {
        "acuvue-oasys-1-day": "한국 IFU로 허가번호 확인. MFDS 상세 원장 직접 대조는 미완료.",
        "dailies-total1": "MFDS UDI 조회에서 제품 연결 105건 확인. 코어와 표면 함수율을 합치지 않음.",
        "biofinity": "MFDS 상세 원장 직접 대조는 미완료. Dk/t와 UV 충돌을 보류 상태로 유지. 중심두께는 2026-08-28 재확인에서 근거를 찾지 못해 철회.",
        "acuvue-moist-1-day": "MFDS UDI 조회로 허가번호 확인. BC·DIA·함수율·Dk/t·UV는 글로벌 기술 사양이 유일한 근거이며 한국 표기는 미확인.",
        "myday": "MFDS UDI 174건 전수 대조로 허가번호 확인. 중심두께는 공식 자료에 항목이 없어 미확인.",
        "clariti-1-day": "MFDS UDI 17,003건 전수 집계로 허가번호 확인. 같은 제품 명칭의 별도 등록 수허 19-346 호는 따로 표기. 재질명과 Dk/t는 한국 2023 사양서와 글로벌 사양이 달라 병기. 중심두께는 공식 자료에 항목이 없어 미확인."
      }
    }
  ];

  const PERMIT_EVIDENCE = [
    { productId: "acuvue-oasys-1-day", fieldIds: ["permit"] },
    { productId: "dailies-total1", fieldIds: ["permit", "replacement"] },
    { productId: "biofinity", fieldIds: ["permit"] },
    { productId: "acuvue-moist-1-day", fieldIds: ["permit"] },
    { productId: "myday", fieldIds: ["permit"] },
    { productId: "clariti-1-day", fieldIds: ["permit"] }
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

  function compareRow(row, byId) {
    const labelNote = row.labelNote ? `<br><span class="cell-note">${escapeHtml(row.labelNote)}</span>` : "";
    const describedBy = row.rowNote ? ` aria-describedby="compare-note-${escapeHtml(row.rowId)}"` : "";
    const cells = COMPARE_COLUMNS.map((column) => {
      const product = byId[column.productId];
      return product ? compareCell(row, product, column) : `<td headers="${row.rowId} ${column.colId}" data-label="${escapeHtml(column.label)}"></td>`;
    }).join("");
    return `<tr><th id="${row.rowId}" scope="row"${describedBy}>${escapeHtml(row.label)}${labelNote}</th>${cells}</tr>`;
  }

  function initCompareTable() {
    const body = qs("[data-compare-body]");
    if (!body || !products.length) return;
    const byId = {};
    products.forEach((product) => { byId[product.id] = product; });
    body.innerHTML = COMPARE_ROWS.map((row) => compareRow(row, byId)).join("");
    toggleHidden(qs("[data-compare-live]"), false);

    const notes = qs("[data-compare-notes]");
    if (notes) {
      const noteRows = COMPARE_ROWS.filter((row) => row.rowNote);
      notes.innerHTML = noteRows.map((row) => `<span class="table-footnote-item" id="compare-note-${escapeHtml(row.rowId)}">${escapeHtml(row.label)}: ${text(row.rowNote)}</span>`).join("");
      toggleHidden(notes, !noteRows.length);
    }
  }

  function initPermitSources() {
    const list = qs("[data-permit-sources]");
    if (!list || !products.length) return;
    const items = [];
    PERMIT_EVIDENCE.forEach((entry) => {
      const product = products.find((candidate) => candidate.id === entry.productId);
      if (!product) return;
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

  function summaryRow(product, fieldId) {
    const field = product.fields.find((candidate) => candidate.id === fieldId);
    if (!field) return "";
    const item = resolvedField(field);
    const state = fieldState(item.state);
    const rowId = `summary-${escapeHtml(item.id)}`;
    const condition = item.sources?.[0]?.condition || "";
    const note = condition ? `<span class="cell-note">${text(condition)}</span>` : "";
    const valueClass = { conflict: "mono warn", unknown: "status-label status-unknown", verified: "mono" }[state];
    const anchorLabel = `${item.code} ${item.label} 출처 보기`;
    return `<tr>
      <th id="${rowId}" scope="row">${escapeHtml(item.code)}<br><span class="cell-note">${escapeHtml(item.label)}</span></th>
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
    return `<article class="card">
      <div class="category">${escapeHtml(product.type)}</div>
      <h3><a href="${escapeHtml(href)}">${escapeHtml(product.name)}</a></h3>
      <p>${escapeHtml(product.maker)} / ${escapeHtml(product.distributor)}</p>
      <div class="card-meta">${specs}</div>
    </article>`;
  }

  function initProductIndex() {
    const list = qs("[data-product-index]");
    if (!list || !products.length) return;
    list.innerHTML = products.map(productCard).join("");
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
    initDecoder();
    initArticleDisclosure();
    initArticleList();
    initCompareTable();
    initPermitSources();
    initProductPage();
    initProductIndex();
    initAdSlots();
  });
})();
