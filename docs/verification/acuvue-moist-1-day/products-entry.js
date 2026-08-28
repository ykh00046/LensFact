// 원데이 아큐브 모이스트® — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/acuvue-moist-1-day/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
{
  id: "acuvue-moist-1-day",
  slug: "acuvue-moist-1-day",
  name: "원데이 아큐브 모이스트®",
  selectorLabel: "원데이 아큐브 모이스트",
  maker: "Johnson & Johnson Vision",
  distributor: "(주)한국존슨앤드존슨비전",
  type: "근시·원시용 투명 구면 · 1일 교체",
  packageSpecs: [
    { value: "BC 8.5 / 9.0", label: "Base Curve · mm" },
    { value: "DIA 14.2", label: "Diameter · mm" },
    { value: "58%", label: "Water content" },
    { value: "Dk/t 25.5", label: "-3.00D · 35℃" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.5 mm / 9.0 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 · 2026.08.28 확인",
      caution: "한국 공식 페이지와 한국 사용설명서에는 파라미터 표가 없어 글로벌 기술 사양이 유일한 근거입니다. 한국에서 두 BC가 모두 유통되는지는 확인하지 못했습니다.",
      conflicts: [],
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "8.5/14.2  ·  9.0/14.2",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "2쪽 1-DAY ACUVUE® MOIST 열 · Parameters BC (mm) / Dia (mm) 행",
          linkNote: "한국 공식 제품 페이지와 MFDS UDI 원장에서 한국 유통 제품 연결 확인"
        }
      ]
    },
    {
      id: "dia",
      value: "14.2 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 · 2026.08.28 확인",
      caution: "한국 공식 자료에 직경 표기가 없어 글로벌 기술 사양이 유일한 근거입니다.",
      conflicts: [],
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "8.5/14.2  ·  9.0/14.2",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "2쪽 1-DAY ACUVUE® MOIST 열 · Parameters BC (mm) / Dia (mm) 행 · 두 BC 모두 직경 14.2",
          linkNote: "한국 공식 제품 페이지와 MFDS UDI 원장에서 한국 유통 제품 연결 확인"
        }
      ]
    },
    {
      id: "water",
      value: "58%",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 Water Content 행 · 2026.08.28 확인",
      caution: "출처는 측정 위치(벌크·코어·표면)를 표기하지 않고 Water Content 한 줄만 제시합니다. 측정 위치를 나눠 표기하는 제품의 숫자와 같은 축에 놓고 비교하지 않습니다.",
      conflicts: [],
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "58%",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "2쪽 1-DAY ACUVUE® MOIST 열 · Water Content 행 · 측정 위치 별도 표기 없음",
          linkNote: "etafilcon A 하이드로겔 사양"
        }
      ]
    },
    {
      id: "material",
      value: "etafilcon A",
      state: "verified",
      sourceSummary: "한국 공식 제품 페이지·MFDS 허가 원장·글로벌 기술 사양에서 모두 확인",
      caution: "한국 공식 표기는 대문자 Etafilcon A, 글로벌 기술 사양 표기는 소문자 etafilcon A입니다. 같은 재질명의 표기 차이이며 값의 충돌이 아닙니다.",
      conflicts: [],
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "원데이 아큐브 모이스트® 한국 공식 제품 페이지",
          raw: "1-Day ACUVUE MOIST Brand Contact Lenses (Etafilcon A) (원데이 아큐브 모이스트)",
          url: "https://acuvue.co.kr/products/acuvue-moist-1-day",
          condition: "페이지 하단 제품명 표기",
          linkNote: "한국 유통 제품명에 재질명이 포함돼 있음"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "1-Day ACUVUE® MOIST® Brand Contact Lenses (Etafilcon A) Visibility Tinted with UV Blocker",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 06-1 호 · 모델명 원문",
          linkNote: "한국 허가 원장 모델명에 재질명이 포함돼 있음"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "etafilcon A",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "2쪽 1-DAY ACUVUE® MOIST 열 · Lens Material 행",
          linkNote: "PDF는 fi 합자 글리프로 인쇄돼 추출 문자열이 etaﬁlcon A로 나온다"
        }
      ]
    },
    {
      id: "dkt",
      value: "25.5 × 10⁻⁹",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 · 시험도수와 측정 조건 확인",
      caution: "-3.00D 렌즈 중심, 분극법, boundary·edge 보정 Dk, 35℃ 조건의 값입니다. 조건이 다른 Dk/t와 숫자만 직접 비교하지 않습니다.",
      conflicts: [],
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "25.5 x 10-9 (-3.00D)",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "Dk/t Value1 (edge corrected) 행 · 각주 1: Oxygen transmissibility measured via polarographic method at centre -3.00D lens using boundary corrected, edge corrected Dk value. Units (cm/sec) (ml O2/ml x mm Hg) at 35° C.",
          linkNote: "같은 표의 중심두께 0.084 mm @ -3.00D와 함께 해석"
        }
      ]
    },
    {
      id: "thickness",
      value: "0.084 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 · 2026.08.28 확인",
      caution: "-3.00D 기준 중심두께입니다. 도수가 달라지면 두께도 달라집니다.",
      conflicts: [],
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "0.084",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "Center Thickness (mm @ -3.00D) 행",
          linkNote: "Dk/t 시험 조건과 연결"
        }
      ]
    },
    {
      id: "replacement",
      value: "1일",
      state: "verified",
      sourceSummary: "한국 공식 제품 페이지와 한국 사용설명서에서 확인",
      caution: "교체주기입니다. 착용방식(착용 시간·수면 착용 여부)은 별도 개념이며 안경사 또는 안과 전문인의 판단이 필요합니다.",
      conflicts: [],
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "원데이 아큐브 모이스트® 한국 공식 제품 페이지",
          raw: "1일 착용",
          url: "https://acuvue.co.kr/products/acuvue-moist-1-day",
          condition: "제품 속성 표기 · 같은 줄에 근시/원시 표기",
          linkNote: "한국 유통 제품"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "원데이 아큐브 모이스트® 한국 사용설명서",
          raw: "착용한 렌즈는 1회(1일) 착용 후 교체하여야 한다.",
          url: "https://acuvue.co.kr/files/patient-instruction-guides/Moist_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf",
          condition: "다. 사용 후 보관 및 관리 방법 2항 · 3항 재사용 금지",
          linkNote: "한국 IFU 목록 페이지에서 원데이 아큐브 모이스트® 항목으로 게시된 파일"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "Daily Disposable Lens",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "Recommended Replacement 행 · Wearing Schedule 행은 Daily Wear",
          linkNote: "교체주기와 착용방식이 표에서 분리돼 있음"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 06-1 호",
      state: "verified",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 · 2026.08.28 확인",
      caution: "아큐브 모이스트 계열은 구면·난시용·멀티포컬의 허가번호가 서로 다릅니다. 이 번호는 구면 제품의 번호입니다. 한국 제품 페이지의 52025-I10-31-3481은 광고 사전심의 번호이며 허가번호가 아닙니다.",
      conflicts: [],
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 06-1 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=한국존슨앤드존슨비전 · modelnm=1-Day ACUVUE® MOIST® 조회 499건, itemPermitNo=수허 06-1 호 조회 499건이 모두 단일 신원((주)한국존슨앤드존슨비전 · 수입업 · 매일착용 소프트 콘택트렌즈 · 2등급)으로 연결",
          linkNote: "업체 제품 명칭 원문 1-Day ACUVUE MOIST Brand Contact Lenses (Etafilcon A) Visibility Tinted with UV Blocker(원데이 아큐브 모이스트®) — 한국 제품 페이지 제품명과 일치. 난시용은 수허 11-384 호, 멀티포컬은 수허 15-1673 호로 별개"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "원데이 아큐브 모이스트® 한국 사용설명서",
          raw: "허가번호 표기 없음 (수허·허가 문자열 0건)",
          url: "https://acuvue.co.kr/files/patient-instruction-guides/Moist_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf",
          condition: "3쪽 전문 텍스트 추출 후 검색",
          linkNote: "이 IFU에는 허가번호가 없어 MFDS UDI가 유일한 근거"
        }
      ]
    },
    {
      id: "uv",
      value: "UVB 약 97% / UVA 82% 차단",
      state: "verified",
      flag: "글로벌 공식 자료 · 한국 표기 미확인",
      sourceSummary: "ACUVUE 글로벌 기술 사양 원문값. 한국 페이지의 UV 수치는 이미지 전용이라 확인하지 못함",
      caution: "한국 공식 페이지의 기술·특징 영역이 이미지 전용이어서 한국 표기 수치를 추출하지 못했습니다. 아큐브 오아시스 원데이에서는 한국 표기와 글로벌 표기가 달랐으므로 이 제품에서도 지역 차이 가능성은 배제되지 않았습니다. 자외선 차단 콘택트렌즈는 눈과 주변을 완전히 덮지 못하므로 선글라스나 고글을 대신할 수 없습니다.",
      conflicts: [],
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "Blocks ~97% of UVB & 82% of UVA",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "Approximate UV Blocking 행 · 각주 †: WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area.",
          linkNote: "표 제목이 Approximate UV Blocking이므로 근사값 표기임"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "1-Day ACUVUE® MOIST® Brand Contact Lenses (Etafilcon A) Visibility Tinted with UV Blocker",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 06-1 호 모델명 원문",
          linkNote: "한국 허가 모델명에 with UV Blocker가 포함돼 UV 차단 기능 자체는 한국 원장에서도 확인됨. 다만 차단율 수치는 없음"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "원데이 아큐브 모이스트® 한국 공식 제품 페이지",
          raw: "3. UVA 316~380nm, UVB 280~315nm 범위에서 측정",
          url: "https://acuvue.co.kr/products/acuvue-moist-1-day",
          condition: "페이지 텍스트에 UV 차단 퍼센트 수치 0건 · 기술·특징 설명이 이미지(content-lg.webp, features-lg.webp) 전용이라 수치 추출 불가",
          linkNote: "한국 표기 수치는 미확인 상태이며 없음으로 단정하지 않음"
        }
      ]
    }
  ]
}
