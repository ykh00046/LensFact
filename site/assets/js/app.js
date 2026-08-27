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
    return href.startsWith("/site/") ? href : "#";
  }

  function setExpanded(button, expanded) {
    button.setAttribute("aria-expanded", String(expanded));
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

    button.addEventListener("click", () => setMenuState(button.getAttribute("aria-expanded") !== "true"));
    panel.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenuState(false);
    });
  }

  function stateLabel(state) {
    return { verified: "공식 원문 확인", conflict: "공식 출처 간 충돌", unknown: "공식 자료에서 미확인" }[state] || "검토 상태";
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
      <div class="status-label status-${escapeHtml(item.state)}">${escapeHtml(stateLabel(item.state))}</div>
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
    return `<button class="field-row" type="button" data-field-id="${escapeHtml(item.id)}" aria-expanded="false" aria-controls="decoder-detail">
      <span class="field-code">${escapeHtml(item.code)}</span><span class="field-label">${escapeHtml(item.label)}<br>${escapeHtml(item.teaser)}</span><span class="field-value">${escapeHtml(item.value)}</span>${flag}
    </button>`;
  }

  function bindFieldRows() {
    const rows = qsa("[data-field-id]");
    rows.forEach((row) => {
      row.addEventListener("click", () => {
        activeFieldId = row.dataset.fieldId;
        rows.forEach((item) => setExpanded(item, item === row));
        const field = activeProduct.fields.find((candidate) => candidate.id === activeFieldId);
        if (field) renderDetail(field);
      });
    });
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
      const selected = button.dataset.productId === product.id;
      button.setAttribute("aria-pressed", String(selected));
      button.setAttribute("tabindex", selected ? "0" : "-1");
    });
    renderPackage(product);

    const main = qs("[data-main-fields]");
    const extra = qs("[data-extra-fields]");
    if (!main || !extra) return;
    main.innerHTML = product.fields.slice(0, 3).map(fieldButton).join("");
    extra.innerHTML = product.fields.slice(3).map(fieldButton).join("");
    bindFieldRows();

    const selectedField = product.fields.find((field) => field.id === activeFieldId) || product.fields[0];
    activeFieldId = selectedField.id;
    const selectedButton = qs(`[data-field-id="${activeFieldId}"]`);
    if (selectedButton) setExpanded(selectedButton, true);
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

  function initDecoder() {
    if (!products.length) return;
    initProductSelector();
    qsa("[data-decoder-start]").forEach((button) => {
      button.addEventListener("click", () => {
        const decoder = qs("#decoder");
        const firstRow = qs("[data-field-id]");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        decoder?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        firstRow?.click();
        firstRow?.focus({ preventScroll: true });
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
    initAdSlots();
  });
})();
