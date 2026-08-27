const ADS_ENABLED = false;

(function () {
  const fields = window.LENSFACT_FIELDS || [];
  const articles = window.LENSFACT_ARTICLES || [];

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function setExpanded(button, expanded) {
    button.setAttribute("aria-expanded", String(expanded));
  }

  function toggleHidden(panel, hidden) {
    if (panel) {
      panel.hidden = hidden;
    }
  }

  function initMenu() {
    const button = qs("[data-menu-toggle]");
    const panel = qs("#mobile-nav");
    if (!button || !panel) return;

    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") !== "true";
      setExpanded(button, open);
      toggleHidden(panel, !open);
      document.body.classList.toggle("menu-open", open);
    });

    panel.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        setExpanded(button, false);
        toggleHidden(panel, true);
        document.body.classList.remove("menu-open");
      }
    });
  }

  function sourceRows(field) {
    return [
      ["출처 유형", field.src.type],
      ["기관·제조사", field.src.org],
      ["문서명", field.src.doc],
      ["원문 표기", field.src.raw],
      ["주소", field.src.url],
      ["확인일", field.src.date],
      ["측정 조건", field.src.cond],
      ["제품 연결", field.src.link]
    ];
  }

  function renderDetail(field) {
    const panel = qs("[data-decoder-detail]");
    if (!panel) return;

    panel.innerHTML = `
      <div class="detail-title">
        <div>
          <div class="detail-code">${field.code}</div>
          <div>${field.label}</div>
        </div>
        <div class="detail-value">${field.value}</div>
      </div>
      <div class="info-block">
        <div class="info-label">뜻</div>
        <p>${field.meaning}</p>
      </div>
      <div class="info-block">
        <div class="info-label">주의할 점</div>
        <p>${field.caution}</p>
      </div>
      <div class="source-summary">${field.srcSummary}</div>
      <button class="disclosure-button" type="button" data-source-toggle aria-expanded="false" aria-controls="decoder-source-panel">출처 보기</button>
      <div class="source-panel" id="decoder-source-panel" hidden>
        <table class="source-grid">
          <tbody>
            ${sourceRows(field).map(([label, value]) => `<tr><th scope="row">${label}</th><td>${value}</td></tr>`).join("")}
          </tbody>
        </table>
        ${field.conflicts ? `
          <div class="info-block">
            <div class="info-label warn">출처 간 값이 다릅니다</div>
            <div class="conflict-grid">
              ${field.conflicts.map((item) => `<div class="conflict-item"><span>${item.src}</span><strong>${item.v}</strong></div>`).join("")}
            </div>
          </div>
        ` : ""}
      </div>
    `;

    const toggle = qs("[data-source-toggle]", panel);
    const sourcePanel = qs("#decoder-source-panel", panel);
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setExpanded(toggle, open);
      toggle.textContent = open ? "출처 닫기" : "출처 보기";
      toggleHidden(sourcePanel, !open);
    });
  }

  function initDecoder() {
    const rows = qsa("[data-field-index]");
    if (!rows.length || !fields.length) return;

    rows.forEach((row) => {
      row.addEventListener("click", () => {
        const index = Number(row.getAttribute("data-field-index"));
        rows.forEach((item) => setExpanded(item, item === row));
        renderDetail(fields[index]);
      });
    });

    qsa("[data-decoder-start]").forEach((button) => {
      button.addEventListener("click", () => {
        const decoder = qs("#decoder");
        const firstRow = qs("[data-field-index='0']");
        decoder?.scrollIntoView({ behavior: "smooth", block: "start" });
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
        moreButton.textContent = open ? "표기 접기" : "포장지 표기 전체 보기 (재질, Dk, Dk/t, 교체 일정, UV)";
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

  function initArticleList() {
    const list = qs("[data-article-list]");
    const buttons = qsa("[data-category]");
    if (!list || !articles.length) return;

    function render(category) {
      const pool = articles.filter((article) => !article.featured && (category === "전체" || article.category === category));
      list.innerHTML = pool.map((article) => `
        <article class="card">
          <div class="category">${article.category}</div>
          <h3><a href="${article.href}">${article.title}</a></h3>
          <p>${article.lead}</p>
          <div class="card-meta"><span>${article.verifiedAt}</span><span>출처 ${article.sources}건</span></div>
        </article>
      `).join("");
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
      if (ADS_ENABLED) return;
      const label = slot.dataset.adLabel || "광고 예약 영역";
      const size = slot.dataset.adSize || "최소 높이 예약";
      slot.classList.add("ad-slot");
      slot.setAttribute("role", "complementary");
      slot.innerHTML = `<div><strong>광고 예약 영역</strong><br>${label}<br>${size}<br>실제 광고 코드는 없습니다.</div>`;
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
