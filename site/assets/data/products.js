window.LENSFACT_PRODUCTS = [
  {
    id: "acuvue-oasys-1-day",
    name: "아큐브 오아시스 원데이®",
    selectorLabel: "아큐브 오아시스 원데이",
    maker: "Johnson & Johnson Vision",
    distributor: "(주)한국존슨앤드존슨비전",
    type: "근시·원시용 투명 구면 · 1일 교체",
    packageSpecs: [
      { value: "BC 8.5 / 9.0", label: "Base Curve · mm" },
      { value: "DIA 14.3", label: "Diameter · mm" },
      { value: "38%", label: "Water content" },
      { value: "Dk/t 121", label: "-3.00D · 35℃" }
    ],
    fields: [
      {
        id: "bc", value: "8.5 mm / 9.0 mm", state: "verified",
        sourceSummary: "ACUVUE 글로벌 기술 사양 · 2026.08.27 확인",
        sources: [{ organization: "Johnson & Johnson Vision", document: "ACUVUE Technical Specification Guide 2025", raw: "Base Curve 8.5 mm, 9.0 mm", url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf", condition: "근시·원시용 구면 사양", linkNote: "한국 공식 제품 페이지와 한국 IFU에서 유통 제품 연결 확인" }]
      },
      {
        id: "dia", value: "14.3 mm", state: "verified",
        sourceSummary: "ACUVUE 글로벌 기술 사양 · 2026.08.27 확인",
        sources: [{ organization: "Johnson & Johnson Vision", document: "ACUVUE Technical Specification Guide 2025", raw: "Diameter 14.3 mm", url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf", condition: "근시·원시용 구면 사양", linkNote: "한국 공식 제품 페이지와 한국 IFU에서 유통 제품 연결 확인" }]
      },
      {
        id: "water", value: "38%", state: "verified",
        sourceSummary: "ACUVUE 글로벌 기술 사양 · 2026.08.27 확인",
        sources: [{ organization: "Johnson & Johnson Vision", document: "ACUVUE Technical Specification Guide 2025", raw: "Water Content 38%", url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf", condition: "벌크 함수율", linkNote: "senofilcon A 사양" }]
      },
      {
        id: "material", value: "senofilcon A", state: "verified",
        sourceSummary: "ACUVUE 공식 제품·기술 사양 · 2026.08.27 확인",
        sources: [{ organization: "Johnson & Johnson Vision", document: "아큐브 오아시스 원데이 공식 제품 페이지", raw: "senofilcon A · 실리콘 하이드로겔", url: "https://acuvue.co.kr/products/acuvue-oasys-1-day", condition: "근시·원시용 투명 구면", linkNote: "한국 유통 제품" }]
      },
      {
        id: "dkt", value: "121 × 10⁻⁹", state: "verified",
        sourceSummary: "ACUVUE 글로벌 기술 사양 · 시험 조건 확인",
        caution: "시험도수, 중심두께, 온도와 보정 조건이 포함된 값입니다. 조건이 다른 Dk/t와 그대로 비교하지 않습니다.",
        sources: [{ organization: "Johnson & Johnson Vision", document: "ACUVUE Technical Specification Guide 2025", raw: "Dk/t 121 × 10⁻⁹ at -3.00D", url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf", condition: "분극법 · 렌즈 중심 · boundary/edge-corrected Dk · 35℃", linkNote: "중심두께 0.085 mm at -3.00D" }]
      },
      {
        id: "thickness", value: "0.085 mm", state: "verified",
        sourceSummary: "ACUVUE 글로벌 기술 사양 · 2026.08.27 확인",
        sources: [{ organization: "Johnson & Johnson Vision", document: "ACUVUE Technical Specification Guide 2025", raw: "Center Thickness 0.085 mm", url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf", condition: "-3.00D", linkNote: "Dk/t 조건과 연결" }]
      },
      {
        id: "replacement", value: "1일", state: "verified",
        sourceSummary: "ACUVUE 한국 공식 제품 페이지 · 2026.08.27 확인",
        sources: [{ organization: "Johnson & Johnson Vision", document: "아큐브 오아시스 원데이 공식 제품 페이지", raw: "1일 교체", url: "https://acuvue.co.kr/products/acuvue-oasys-1-day", condition: "매일 새 렌즈로 교체", linkNote: "교체주기와 착용방식은 별도 개념" }]
      },
      {
        id: "permit", value: "수허 16-499 호", state: "verified",
        sourceSummary: "한국 사용설명서 기재 · MFDS 상세 원장 직접 대조 미완료",
        caution: "한국 IFU에서 확인한 수입허가번호입니다. 의료기기 광고 사전심의 번호와 구분합니다.",
        sources: [{ organization: "(주)한국존슨앤드존슨비전", document: "아큐브 오아시스 원데이 한국 사용설명서", raw: "수허 16-499 호", url: "https://acuvue.co.kr/files/patient-instruction-guides/Oasys1day_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf", condition: "한국 IFU", linkNote: "MFDS 상세 원장 직접 대조는 미완료" }]
      },
      {
        id: "uv", value: "한국: UVB 99% 이상 / UVA 90%", state: "conflict", flag: "지역별 공식 표기 차이",
        sourceSummary: "한국 제품 페이지와 글로벌 기술 사양의 원문값을 병기",
        caution: "지역별 공식 원문값을 하나로 합치지 않습니다. UV 차단 콘택트렌즈는 선글라스나 고글을 대신하지 않습니다.",
        conflicts: [{ source: "한국 공식 제품 페이지", value: "UVB 99% 이상 / UVA 90%" }, { source: "글로벌 기술 사양", value: "UVB >99.9% / UVA 96%" }],
        sources: [
          { organization: "Johnson & Johnson Vision Korea", document: "아큐브 오아시스 원데이 공식 제품 페이지", raw: "UVB 99% 이상 / UVA 90%", url: "https://acuvue.co.kr/products/acuvue-oasys-1-day", condition: "한국 페이지 표기", linkNote: "한국 공식 원문" },
          { organization: "Johnson & Johnson Vision", document: "ACUVUE Technical Specification Guide 2025", raw: "UVB >99.9% / UVA 96%", url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf", condition: "글로벌 기술 사양", linkNote: "지역별 원문값 별도 유지" }
        ]
      }
    ]
  },
  {
    id: "dailies-total1",
    name: "데일리스 토탈원® / DAILIES TOTAL1®",
    selectorLabel: "데일리스 토탈원",
    maker: "Alcon",
    distributor: "한국알콘(주)",
    type: "근시·원시용 투명 구면 · 1일 교체",
    packageSpecs: [
      { value: "BC 8.5", label: "Base Curve · mm" },
      { value: "DIA 14.1", label: "Diameter · mm" },
      { value: "코어 33%", label: "표면 80% 이상" },
      { value: "Dk/t 156", label: "-3.00D" }
    ],
    fields: [
      { id: "bc", value: "8.5 mm", state: "verified", sourceSummary: "Alcon 글로벌 전문가 사양 · 2026.08.27 확인", sources: [{ organization: "Alcon", document: "DAILIES TOTAL1 전문가용 공식 사양", raw: "Base Curve 8.5 mm", url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-total1", condition: "근시·원시용 구면", linkNote: "한국 공식 사이트에서 유통 제품 연결 확인" }] },
      { id: "dia", value: "14.1 mm", state: "verified", sourceSummary: "Alcon 글로벌 전문가 사양 · 2026.08.27 확인", sources: [{ organization: "Alcon", document: "DAILIES TOTAL1 전문가용 공식 사양", raw: "Diameter 14.1 mm", url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-total1", condition: "근시·원시용 구면", linkNote: "한국 공식 사이트에서 유통 제품 연결 확인" }] },
      {
        id: "water", value: "코어 33% / 표면 80% 이상", state: "verified", flag: "측정 위치별 별도 값",
        sourceSummary: "코어와 표면 함수율을 하나의 값으로 합치지 않음",
        caution: "코어·표면 함수율의 측정법은 렌즈 전체 함수율 측정법과 다릅니다. 표면은 공식 자료에 따라 80% 이상 또는 약 100%로 별도 표기됩니다.",
        sources: [
          { organization: "Alcon", document: "DAILIES TOTAL1 전문가용 공식 사양", raw: "Core water content 33%", url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-total1", condition: "렌즈 코어", linkNote: "벌크/전체 함수율로 환산하지 않음" },
          { organization: "Alcon Japan", document: "DAILIES TOTAL1 일본 공식 페이지", raw: "표면 함수율 80% 이상 · 표면 약 100% 표기", url: "https://www.myalcon.com/jp/contact-lenses/daily/dailies-total1", condition: "렌즈 표면 · 별도 측정법", linkNote: "코어값과 합치지 않음" },
          { organization: "PubMed", document: "Surface water characteristics of daily disposable lens materials", raw: "표면 함수 특성 측정 연구", url: "https://pubmed.ncbi.nlm.nih.gov/26543349", condition: "제품 표면 특성 연구", linkNote: "측정 위치 해석 근거" }
        ]
      },
      { id: "material", value: "delefilcon A", state: "verified", sourceSummary: "Alcon 공식 사양 · 워터 그라디언트 실리콘 하이드로겔", sources: [{ organization: "Alcon", document: "DAILIES TOTAL1 전문가용 공식 사양", raw: "delefilcon A", url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-total1", condition: "워터 그라디언트 실리콘 하이드로겔", linkNote: "한국 유통 제품 연결 확인" }] },
      { id: "dkt", value: "156", state: "verified", sourceSummary: "Alcon 글로벌 전문가 사양 · 시험도수 확인", caution: "-3.00D 기준입니다. 시험 조건이 다른 제품과 숫자만 직접 비교하지 않습니다.", sources: [{ organization: "Alcon", document: "DAILIES TOTAL1 전문가용 공식 사양", raw: "Dk/t 156 at -3.00D", url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-total1", condition: "-3.00D · 중심두께 0.09 mm", linkNote: "두께 조건과 함께 해석" }] },
      { id: "thickness", value: "0.09 mm", state: "verified", sourceSummary: "Alcon 글로벌 전문가 사양 · 2026.08.27 확인", sources: [{ organization: "Alcon", document: "DAILIES TOTAL1 전문가용 공식 사양", raw: "Center Thickness 0.09 mm", url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-total1", condition: "-3.00D", linkNote: "Dk/t 조건과 연결" }] },
      { id: "replacement", value: "1일", state: "verified", sourceSummary: "DAILIES TOTAL1 한국 공식 제품 페이지", sources: [{ organization: "한국알콘(주)", document: "DAILIES TOTAL1 한국 공식 제품 페이지", raw: "1일 교체", url: "https://total.myalcon.com/kr/products/dailies-total1", condition: "매일 새 렌즈로 교체", linkNote: "한국 유통 제품" }] },
      {
        id: "permit", value: "수허 13-112 호", state: "verified", sourceSummary: "MFDS UDI 표준코드 조회 · 2026.08.27 확인",
        caution: "MFDS 조회에서 제품명·모델명·품목명이 일치하는 105건이 모두 같은 허가번호로 연결됐습니다.",
        sources: [{ organization: "식품의약품안전처", document: "의료기기 UDI 표준코드 조회", raw: "수허 13-112 호", url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do", condition: "modelnm=Dailies Total1 · prdtNmCn=워터렌즈 · 105건", linkNote: "한국알콘 제품 연결 확인" }]
      },
      {
        id: "uv", value: "공식 UV 표기 확인되지 않음", state: "unknown", flag: "확인되지 않음",
        sourceSummary: "검토한 제조사 전문 사양에서 UV 표기를 확인하지 못함",
        caution: "표기를 찾지 못했다는 뜻이며 UV 기능이 없다고 단정하지 않습니다.",
        sources: [{ organization: "Alcon", document: "DAILIES TOTAL1 전문가용 공식 사양", raw: "검토 범위에서 UV 표기 확인되지 않음", url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-total1", condition: "2026.08.27 공개 페이지 검토", linkNote: "미확인을 기능 없음으로 해석하지 않음" }]
      }
    ]
  },
  {
    id: "biofinity",
    name: "바이오피니티® / Biofinity®",
    selectorLabel: "바이오피니티",
    maker: "CooperVision",
    distributor: "쿠퍼비젼코리아(주)",
    type: "근시·원시용 투명 구면 · 비구면 디자인 · 월간 교체",
    packageSpecs: [
      { value: "BC 8.6", label: "Base Curve · mm" },
      { value: "DIA 14.0", label: "Diameter · mm" },
      { value: "48%", label: "Water content" },
      { value: "Dk/t 170 / 171", label: "공식 출처 간 차이" }
    ],
    fields: [
      { id: "bc", value: "8.6 mm", state: "verified", sourceSummary: "쿠퍼비전코리아 2023 제품 사양서", sources: [{ organization: "쿠퍼비젼코리아(주)", document: "제품 사양서 2023", raw: "BC 8.6 mm", url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf", condition: "바이오피니티 구면", linkNote: "한국 공식 사양" }] },
      { id: "dia", value: "14.0 mm", state: "verified", sourceSummary: "쿠퍼비전코리아 2023 제품 사양서", sources: [{ organization: "쿠퍼비젼코리아(주)", document: "제품 사양서 2023", raw: "DIA 14.0 mm", url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf", condition: "바이오피니티 구면", linkNote: "한국 공식 사양" }] },
      { id: "water", value: "48%", state: "verified", sourceSummary: "쿠퍼비전코리아 2023 제품 사양서", sources: [{ organization: "쿠퍼비젼코리아(주)", document: "제품 사양서 2023", raw: "함수율 48%", url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf", condition: "벌크 함수율", linkNote: "comfilcon A 사양" }] },
      { id: "material", value: "comfilcon A", state: "verified", sourceSummary: "쿠퍼비전코리아 공식 사양", sources: [{ organization: "쿠퍼비젼코리아(주)", document: "제품 사양서 2023", raw: "comfilcon A · 실리콘 하이드로겔", url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf", condition: "바이오피니티 구면", linkNote: "한국 유통 제품" }] },
      {
        id: "dkt", value: "170 / 171", state: "conflict", flag: "공식 출처 간 값이 다름",
        sourceSummary: "현재 한국 페이지 170 / 한국 2023 사양서·미국 전문가 페이지 171",
        caution: "170은 조건이 표기되지 않았고, 171은 -3.00D 기준입니다. 두 값을 하나로 정규화하지 않습니다.",
        conflicts: [{ source: "현재 한국 제품 페이지", value: "170 · 조건 미표기" }, { source: "한국 2023 사양서 / 미국 전문가 페이지", value: "171 at -3.00D" }],
        sources: [
          { organization: "쿠퍼비젼코리아(주)", document: "바이오피니티 한국 공식 제품 페이지", raw: "Dk/t 170", url: "https://coopervision.co.kr/contact-lenses/biofinity", condition: "시험 조건 미표기", linkNote: "현재 한국 페이지" },
          { organization: "쿠퍼비젼코리아(주)", document: "제품 사양서 2023", raw: "Dk/t 171", url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf", condition: "-3.00D", linkNote: "한국 공식 사양서" },
          { organization: "CooperVision US", document: "Biofinity & Biofinity XR practitioner specs", raw: "Dk/t 171", url: "https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-biofinity-xr", condition: "-3.00D", linkNote: "글로벌 공식 전문가 사양" }
        ]
      },
      { id: "thickness", value: "0.08 mm", state: "verified", sourceSummary: "쿠퍼비전 공식 전문가 사양 · 2026.08.27 확인", sources: [{ organization: "CooperVision", document: "Biofinity & Biofinity XR practitioner specs", raw: "Center Thickness 0.08 mm", url: "https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-biofinity-xr", condition: "-3.00D", linkNote: "Dk/t 조건과 연결" }] },
      {
        id: "replacement", value: "30일", state: "verified", sourceSummary: "바이오피니티 한국 공식 제품 페이지",
        caution: "30일은 교체주기입니다. 연속착용은 전문가 판단이 필요한 별도 착용방식이며 수면착용 허용으로 해석하지 않습니다.",
        sources: [{ organization: "쿠퍼비젼코리아(주)", document: "바이오피니티 한국 공식 제품 페이지", raw: "30일 교체", url: "https://coopervision.co.kr/contact-lenses/biofinity", condition: "월간 교체", linkNote: "교체주기와 연속착용을 구분" }]
      },
      {
        id: "permit", value: "수허 08-131", state: "verified", sourceSummary: "쿠퍼비전코리아 전체 제품 목록 기재 · MFDS 상세 원장 직접 대조 미완료",
        caution: "한국 공식 제품 목록에서 확인한 수입허가번호입니다. MFDS 상세 원장 직접 대조는 미완료입니다.",
        sources: [{ organization: "쿠퍼비젼코리아(주)", document: "쿠퍼비전코리아 전체 제품 목록", raw: "수허 08-131", url: "https://coopervision.co.kr/contact-lenses", condition: "한국 공식 제품 목록", linkNote: "MFDS 상세 원장 직접 대조 미완료" }]
      },
      {
        id: "uv", value: "공식 자료 간 충돌", state: "conflict", flag: "확인 보류",
        sourceSummary: "현재 한국 페이지는 UV 기술 적용 주장 / 한국 2023 사양서는 No",
        caution: "허가 원장 또는 최신 정정 사양을 확인하기 전까지 어느 한쪽으로 단정하지 않습니다.",
        conflicts: [{ source: "현재 한국 제품 페이지", value: "UV 기술 적용 주장" }, { source: "한국 2023 공식 사양서", value: "No" }],
        sources: [
          { organization: "쿠퍼비젼코리아(주)", document: "바이오피니티 한국 공식 제품 페이지", raw: "UV 기술 적용 주장", url: "https://coopervision.co.kr/contact-lenses/biofinity", condition: "현재 공개 페이지", linkNote: "기술 설명" },
          { organization: "쿠퍼비젼코리아(주)", document: "제품 사양서 2023", raw: "UV: No", url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf", condition: "2023 공식 사양서", linkNote: "허가 원장 또는 최신 정정 사양 확인 전 충돌 유지" }
        ]
      }
    ]
  }
];
