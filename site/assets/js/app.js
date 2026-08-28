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

  function sourceBlock(source, index) {
    const url = externalUrl(source.url);
    const urlMarkup = url === "#" ? "확인 가능한 주소 없음" : `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">원문 링크 열기</a>`;
    return `<section class="source-record" aria-labelledby="source-record-${index}">
      <h4 id="source-record-${index}">출처 ${index + 1} · ${escapeHtml(source.organization)}</h4>
      <dl class="source-definition">
        <div><dt>문서명</dt><dd>${escapeHtml(source.document)}</dd></div>
        <div><dt>원문 표기</dt><dd>${escapeHtml(source.raw)}</dd></div>
        <div><dt>주소</dt><dd>${urlMarkup}</dd></div>
        <div><dt>확인일</dt><dd>2026.08.27</dd></div>
        <div><dt>측정·확인 조건</dt><dd>${escapeHtml(source.condition)}</dd></div>
        <div><dt>제품 연결</dt><dd>${escapeHtml(source.linkNote)}</dd></div>
      </dl>
    </section>`;
  }

  function renderDetail(field) {
    const panel = qs("[data-decoder-detail]");
    if (!panel) return;
    const item = resolvedField(field);
    const conflicts = item.conflicts?.length ? `<div class="info-block"><div class="info-label warn">출처별 원문값</div><div class="conflict-grid">${item.conflicts.map((conflict) => `<div class="conflict-item"><span>${escapeHtml(conflict.source)}</span><strong>${escapeHtml(conflict.value)}</strong></div>`).join("")}</div></div>` : "";

    panel.innerHTML = `<div class="detail-title">
        <div><div class="detail-code">${escapeHtml(item.code)}</div><div>${escapeHtml(item.label)}</div></div>
        <div class="detail-value">${escapeHtml(item.value)}</div>
      </div>
      <div class="status-label status-${fieldState(item.state)}">${escapeHtml(stateLabel(item.state))}</div>
      <div class="info-block"><div class="info-label">뜻</div><p>${escapeHtml(item.meaning)}</p></div>
      <div class="info-block"><div class="info-label">주의할 점</div><p>${escapeHtml(item.caution)}</p></div>
      <div class="source-summary">${escapeHtml(item.sourceSummary)}</div>
      <button class="disclosure-button" type="button" data-source-toggle aria-expanded="false" aria-controls="decoder-source-panel">출처 보기</button>
      <div class="source-panel" id="decoder-source-panel" hidden>${item.sources.map(sourceBlock).join("")}${conflicts}</div>`;

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
      <span class="field-code">${escapeHtml(item.code)}</span><span class="field-label">${escapeHtml(item.label)}<br>${escapeHtml(item.teaser)}</span><span class="field-value">${escapeHtml(item.value)}</span>${flag}
    </button>`;
  }

  function bindFieldRows() {
    const rows = qsa("[data-field-id]");
    rows.forEach((row) => {
      row.addEventListener("click", () => {
        activeFieldId = row.dataset.fieldId;
        rows.forEach((item) => setPressed(item, item === row));
        const field = activeProduct.fields.find((candidate) => candidate.id === activeFieldId);
        if (field) renderDetail(field);
      });
    });
  }

  function findFieldRow(fieldId) {
    return qsa("[data-field-id]").find((row) => row.dataset.fieldId === fieldId) || null;
  }

  function revealExtraFields() {
    const moreButton = qs("[data-more-fields]");
    const morePanel = qs("#all-fields");
    if (!moreButton || !morePanel || moreButton.getAttribute("aria-expanded") === "true") return;
    setExpanded(moreButton, true);
    moreButton.textContent = "표기 접기";
    toggleHidden(morePanel, false);
  }

  function renderPackage(product) {
    const name = qs("[data-package-name]");
    const type = qs("[data-package-type]");
    const maker = qs("[data-package-maker]");
    const grid = qs("[data-package-specs]");
    if (!name || !type || !maker || !grid) return;
    name.textContent = product.name;
    type.textContent = product.type;
    maker.textContent = `${product.maker} / ${product.distributor}`;
    grid.innerHTML = product.packageSpecs.map((spec) => `<div class="label-item"><strong>${escapeHtml(spec.value)}</strong><span>${escapeHtml(spec.label)}</span></div>`).join("");
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
    activeFieldId = selectedField.id;
    if (selectedIndex >= 3) revealExtraFields();
    const selectedButton = findFieldRow(activeFieldId);
    if (selectedButton) setPressed(selectedButton, true);
    renderDetail(selectedField);
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
  }

  function articleCard(article) {
    const title = article.status === "live" ? `<a href="${escapeHtml(internalHref(article.href))}">${escapeHtml(article.title)}</a>` : escapeHtml(article.title);
    const meta = article.status === "live" ? `<span>${escapeHtml(article.verifiedAt)}</span><span>출처 ${escapeHtml(article.sources)}건</span>` : '<span class="status-label status-pending">준비 중</span>';
    return `<article class="card"><div class="category">${escapeHtml(article.category)}</div><h3>${title}</h3><p>${escapeHtml(article.lead)}</p><div class="card-meta">${meta}</div></article>`;
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
    { productId: "acuvue-oasys-1-day", colId: "col-acuvue" },
    { productId: "dailies-total1", colId: "col-total1" },
    { productId: "biofinity", colId: "col-biofinity" }
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
        "biofinity": "실리콘 하이드로겔"
      }
    },
    { rowId: "row-bc", fieldId: "bc", label: "BC", mono: true },
    { rowId: "row-dia", fieldId: "dia", label: "DIA", mono: true },
    {
      rowId: "row-water", fieldId: "water", label: "함수율", labelNote: "벌크·코어·표면", mono: true,
      notes: {
        "acuvue-oasys-1-day": "벌크",
        "dailies-total1": "코어와 표면은 측정 위치와 방법이 달라 하나의 값으로 합치지 않음. 표면은 공식 자료에 따라 약 100%로도 표기됨",
        "biofinity": "벌크"
      }
    },
    {
      rowId: "row-dkt", fieldId: "dkt", label: "Dk/t", labelNote: "시험 조건 포함", mono: true,
      rowNote: "아큐브 원문만 단위(× 10⁻⁹)를 명기함. 다른 두 제품 원문은 단위를 표기하지 않아 임의로 단위를 붙이지 않음.",
      notes: {
        "acuvue-oasys-1-day": "-3.00D · 중심 0.085 mm · 35℃ · boundary/edge-corrected Dk",
        "dailies-total1": "-3.00D · 중심 0.09 mm"
      }
    },
    { rowId: "row-thickness", fieldId: "thickness", label: "중심두께", mono: true, useCondition: true },
    {
      rowId: "row-uv", fieldId: "uv", label: "UV", chip: true,
      notes: { "dailies-total1": "기능 없음으로 단정하지 않음" }
    },
    {
      rowId: "row-note", label: "확인 메모",
      memo: {
        "acuvue-oasys-1-day": "한국 IFU로 허가번호 확인. MFDS 상세 원장 직접 대조는 미완료.",
        "dailies-total1": "MFDS UDI 조회에서 제품 연결 105건 확인. 코어와 표면 함수율을 합치지 않음.",
        "biofinity": "MFDS 상세 원장 직접 대조는 미완료. Dk/t와 UV 충돌을 보류 상태로 유지."
      }
    }
  ];

  const PERMIT_EVIDENCE = [
    { productId: "acuvue-oasys-1-day", fieldIds: ["permit"] },
    { productId: "dailies-total1", fieldIds: ["permit", "replacement"] },
    { productId: "biofinity", fieldIds: ["permit"] }
  ];

  function compareCell(row, product, colId) {
    const headers = `${row.rowId} ${colId}`;
    if (row.memo) return `<td headers="${headers}">${escapeHtml(row.memo[product.id] || "")}</td>`;

    const field = product.fields.find((candidate) => candidate.id === row.fieldId);
    if (!field) return `<td headers="${headers}"><span class="status-label status-unknown">${escapeHtml(stateLabel("unknown"))}</span></td>`;

    const state = fieldState(field.state);
    const conflicted = state === "conflict";
    const valueClass = [row.mono ? "mono" : "", row.mono && conflicted ? "warn" : ""].filter(Boolean).join(" ");
    const value = row.chip
      ? `<span class="status-label status-${state}">${escapeHtml(field.value)}</span>`
      : `<span${valueClass ? ` class="${valueClass}"` : ""}>${escapeHtml(field.value)}</span>`;

    let note = "";
    if (field.conflicts?.length) {
      note = field.conflicts.map((conflict) => `${escapeHtml(conflict.source)}: ${escapeHtml(conflict.value)}`).join("<br>");
    } else if (row.useCondition) {
      note = escapeHtml(field.sources?.[0]?.condition || "");
    } else if (row.notes?.[product.id]) {
      note = escapeHtml(row.notes[product.id]);
    }
    const noteMarkup = note ? `<span class="cell-note${conflicted ? " warn" : ""}">${note}</span>` : "";
    return `<td headers="${headers}">${value}${noteMarkup}</td>`;
  }

  function compareRow(row, byId) {
    const labelNote = row.labelNote ? `<br><span class="cell-note">${escapeHtml(row.labelNote)}</span>` : "";
    const rowNote = row.rowNote ? `<span class="cell-note">${escapeHtml(row.rowNote)}</span>` : "";
    const cells = COMPARE_COLUMNS.map((column) => {
      const product = byId[column.productId];
      return product ? compareCell(row, product, column.colId) : `<td headers="${row.rowId} ${column.colId}"></td>`;
    }).join("");
    return `<tr><th id="${row.rowId}" scope="row">${escapeHtml(row.label)}${labelNote}${rowNote}</th>${cells}</tr>`;
  }

  function initCompareTable() {
    const body = qs("[data-compare-body]");
    if (!body || !products.length) return;
    const byId = {};
    products.forEach((product) => { byId[product.id] = product; });
    body.innerHTML = COMPARE_ROWS.map((row) => compareRow(row, byId)).join("");
    toggleHidden(qs("[data-compare-live]"), false);
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

  function initAdSlots() {
    qsa("[data-ad-slot]").forEach((slot) => {
      if (!ADS_ENABLED) {
        slot.hidden = true;
        slot.setAttribute("aria-hidden", "true");
        return;
      }
      slot.classList.add("ad-slot");
      slot.setAttribute("role", "complementary");
      slot.textContent = "광고 예약 영역";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initMenu();
    initDecoder();
    initArticleDisclosure();
    initArticleList();
    initCompareTable();
    initPermitSources();
    initAdSlots();
  });
})();
