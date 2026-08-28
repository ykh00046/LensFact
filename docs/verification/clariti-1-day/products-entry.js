// 클래리티® 원데이 — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/clariti-1-day/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
{
  id: "clariti-1-day",
  slug: "clariti-1-day",
  aliases: ["클래리티 원데이", "clariti 1 day", "somofilcon A"],
  name: "클래리티® 원데이 / clariti® 1 day",
  selectorLabel: "클래리티 원데이",
  maker: "CooperVision",
  distributor: "쿠퍼비전코리아(주)",
  type: "근시·원시용 투명 구면 · 비구면 디자인 · 1일 교체",
  packageSpecs: [
    { value: "BC 8.6", label: "Base Curve · mm" },
    { value: "DIA 14.1", label: "Diameter · mm" },
    { value: "56%", label: "Water content" },
    { value: "Dk/t 80 / 86", label: "공식 출처 간 차이" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.6 mm",
      state: "verified",
      sourceSummary: "쿠퍼비전코리아 제품 사양서 2023 · 글로벌 전문가 사양 · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지에는 BC 표기가 없습니다. 값의 근거는 한국 사양서 PDF와 글로벌 사양이며, 두 자료의 값이 같습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (©2023 CooperVision SA09487 Rev #4 09/2023)",
          raw: "8.6",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "2쪽 clariti® 1 day sphere 행 · 내면곡률반경 Base Curve (mm) 열",
          linkNote: "좌표 추출로 열 귀속 확인. 같은 사양서 3쪽 Biofinity 행이 파일럿 검증값과 일치해 열 규칙을 대조함"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "clariti® 1 day practitioner specs",
          raw: "Base curve 8.6",
          url: "https://coopervision.com/practitioner/our-products/clariti-1-day-family/clariti-1-day",
          condition: "Product Details 표",
          linkNote: "글로벌 공식 전문가 사양"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "8.6",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 SPHERE LENSES 표 · clariti® 1 day sphere 행 · Base Curve (mm) 열",
          linkNote: "좌표 추출과 렌더링 육안 대조로 열 귀속 확인"
        }
      ]
    },
    {
      id: "dia",
      value: "14.1 mm",
      state: "verified",
      sourceSummary: "쿠퍼비전코리아 제품 사양서 2023 · 글로벌 전문가 사양 · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지에는 직경 표기가 없습니다. 한국 사양서 PDF와 글로벌 사양의 값이 같습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (©2023 CooperVision SA09487 Rev #4 09/2023)",
          raw: "14.1",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "2쪽 clariti® 1 day sphere 행 · 렌즈 직경 Diameter (mm) 열",
          linkNote: "좌표 추출로 열 귀속 확인"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "clariti® 1 day practitioner specs",
          raw: "Diameter 14.1",
          url: "https://coopervision.com/practitioner/our-products/clariti-1-day-family/clariti-1-day",
          condition: "Product Details 표",
          linkNote: "글로벌 공식 전문가 사양"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "14.1",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 SPHERE LENSES 표 · clariti® 1 day sphere 행 · Dia (mm) 열",
          linkNote: "좌표 추출과 렌더링 육안 대조로 열 귀속 확인"
        }
      ]
    },
    {
      id: "water",
      value: "56%",
      state: "verified",
      sourceSummary: "한국 공식 제품 페이지·한국 제품 목록·한국 사양서·글로벌 사양에서 모두 56%",
      caution: "출처는 측정 위치(벌크·코어·표면)를 나눠 표기하지 않고 함수율 한 값만 제시합니다. 코어와 표면을 나눠 표기하는 제품의 숫자와 같은 축에 놓고 비교하지 않습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "클래리티® 원데이 한국 공식 제품 페이지",
          raw: "＊（별첨 1）클래리티® 원데이의 ［1．함수율과 2．산소 투과율（Dk/t）］은 아래와 같습니다．- 1．56%, 2．80",
          url: "https://coopervision.co.kr/contact-lenses/clariti-1-day",
          condition: "페이지 하단 별첨 1 · 측정 위치 표기 없음",
          linkNote: "본문에도 (함수율 56%) 표기가 있으나 광고 문구와 붙어 있어 별첨 1의 수치 표기를 원문으로 사용"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (©2023 CooperVision SA09487 Rev #4 09/2023)",
          raw: "56",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "2쪽 clariti® 1 day sphere 행 · 함수율 Water content (%) 열",
          linkNote: "좌표 추출로 열 귀속 확인"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "clariti® 1 day practitioner specs",
          raw: "somofilcon A / 56%",
          url: "https://coopervision.com/practitioner/our-products/clariti-1-day-family/clariti-1-day",
          condition: "Product Details 표 · Material / H20 content 행",
          linkNote: "재질명과 함수율이 한 칸에 함께 표기됨"
        }
      ]
    },
    {
      id: "material",
      value: "somofilcon A / stenfilcon A",
      state: "conflict",
      flag: "공식 출처 간 값이 다름",
      sourceSummary: "글로벌 공식 자료·MFDS 원장은 somofilcon A / 한국 2023 사양서는 stenfilcon A",
      caution: "두 값 모두 실리콘 하이드로겔 재질명이지만 서로 다른 USAN 명칭입니다. 한국 사양서의 stenfilcon A는 같은 문서에서 마이데이®의 재질명으로도 쓰입니다. 어느 쪽이 맞는지 판단하지 않고 양쪽 원문을 그대로 둡니다. 한국 공식 제품 페이지는 재질 USAN을 적지 않고 실리콘 하이드로겔이라고만 표기합니다.",
      conflicts: [
        { source: "CooperVision 글로벌 공식 사양 · MFDS 허가 원장 모델명", value: "somofilcon A" },
        { source: "쿠퍼비전코리아 제품 사양서 2023 (Rev #4 09/2023)", value: "실리콘 하이드로겔 stenfilcon A" }
      ],
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (©2023 CooperVision SA09487 Rev #4 09/2023)",
          raw: "실리콘 하이드로겔 stenﬁlcon A",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "2쪽 clariti® 1 day sphere 행 · 렌즈 재질 Material USAN 열 (sphere·toric·multifocal 3개 행 모두 동일 표기)",
          linkNote: "PDF는 fi 합자 글리프(U+FB01)로 인쇄돼 추출 문자열이 stenﬁlcon A가 된다. 400% 렌더링 육안 대조로 stenfilcon A임을 확인"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "clariti® 1 day practitioner specs",
          raw: "somofilcon A / 56%",
          url: "https://coopervision.com/practitioner/our-products/clariti-1-day-family/clariti-1-day",
          condition: "Product Details 표 · Material / H20 content 행",
          linkNote: "글로벌 공식 전문가 사양"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "somoﬁlcon A / 56%",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 SPHERE LENSES 표 · clariti® 1 day sphere 행 · Material/ H20 Content 열 · 같은 행 FDA Group 5B SiHy",
          linkNote: "한국 사양서보다 나중 개정(05/2026)의 글로벌 문서"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "Somofilcon A 1day",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 19-346 호 · 모델명 원문 · 업체 제품 명칭 산소렌즈 clariti 1day · 93건",
          linkNote: "한국 허가 원장 모델명에 somofilcon 계열 재질명이 들어 있다. 다만 수허 15-322 호의 모델명은 Clariti 1day로 재질명이 없다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "클래리티® 원데이 한국 공식 제품 페이지",
          raw: "높은 산소 투과율을 (*별첨 1) 갖춘 실리콘 하이드로겔 소재로 만들어졌습니다.",
          url: "https://coopervision.co.kr/contact-lenses/clariti-1-day",
          condition: "재질 USAN 표기 없음",
          linkNote: "재질 계열만 확인되고 USAN 명칭은 확인되지 않음"
        }
      ]
    },
    {
      id: "dkt",
      value: "80 / 86",
      state: "conflict",
      flag: "공식 출처 간 값이 다름",
      sourceSummary: "한국 공식 페이지·한국 제품 목록 80(조건 미표기) / 한국 사양서·글로벌 사양 86 at -3.00D",
      caution: "80은 시험 도수·측정법·온도가 표기돼 있지 않고, 86은 -3.00D 기준입니다. 조건이 같은지 확인할 수 없어 두 값을 하나로 정규화하지 않습니다. 이 값은 Dk가 아니라 Dk/t이며 렌즈 두께에 좌우됩니다.",
      conflicts: [
        { source: "한국 공식 제품 페이지 · 한국 전체 제품 목록", value: "80 · 시험 조건 미표기" },
        { source: "쿠퍼비전코리아 제품 사양서 2023 · CooperVision 글로벌 사양", value: "86 at -3.00DS" }
      ],
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "클래리티® 원데이 한국 공식 제품 페이지",
          raw: "산소 투과율이 우수하고 (Dk/t 80) 부드러운 실리콘 하이드로겔 렌즈 소재로 편안한 착용감을 제공합니다",
          url: "https://coopervision.co.kr/contact-lenses/clariti-1-day",
          condition: "시험 도수·측정법·온도 표기 없음 · 페이지 하단 별첨 1에도 `2．80`으로만 표기",
          linkNote: "현재 한국 제품 페이지"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 전체 제품 목록",
          raw: "- 클래리티 [근시용 1. 56%, 2. 80] / [난시용 1. 56%, 2. 50]",
          url: "https://coopervision.co.kr/contact-lenses",
          condition: "별첨 1 · 시험 조건 미표기",
          linkNote: "한국 페이지 두 곳이 같은 80을 쓴다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (©2023 CooperVision SA09487 Rev #4 09/2023)",
          raw: "86",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "2쪽 clariti® 1 day sphere 행 · 산소 투과율 Oxygen transmissibility Dk/t † 열 · 각주 †: (@-3.00DS) x 10 -9 [(cm/sec) x (ml O₂)/(ml x mmHg)]",
          linkNote: "같은 한국 사양서인데 한국 제품 페이지의 80과 다르다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "clariti® 1 day practitioner specs",
          raw: "86 Dk/t (at -3.00D)",
          url: "https://coopervision.com/practitioner/our-products/clariti-1-day-family/clariti-1-day",
          condition: "Product Details 표 · Oxygen transmissibility 행",
          linkNote: "글로벌 공식 전문가 사양"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "86",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 SPHERE LENSES 표 · Oxygen Transmissibility DK/t** 열 · 각주 **: (@-3.00DS) x 10-9 [(cm/sec) x (ml O2)/(ml x mm Hg)]",
          linkNote: "좌표 추출과 렌더링 육안 대조로 열 귀속 확인"
        }
      ]
    },
    {
      id: "thickness",
      value: "공식 자료에서 확인되지 않음",
      state: "unknown",
      flag: "확인되지 않음",
      sourceSummary: "검토한 한국·글로벌 공식 자료 6종 어디에도 중심두께 항목이 없음",
      caution: "표기를 찾지 못했다는 뜻이며 값이 없다는 뜻이 아닙니다. Dk/t는 두께에 좌우되므로 두께 없이 Dk/t 숫자만 다른 제품과 비교하지 않습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (©2023 CooperVision SA09487 Rev #4 09/2023)",
          raw: "중심두께 열 없음 (두께·thickness 문자열 0건)",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "3쪽 전문 텍스트 추출 후 검색",
          linkNote: "한국 사양서 표의 열 구성 자체에 중심두께가 없다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "clariti® 1 day practitioner specs",
          raw: "Center Thickness 항목 없음 (thickness 문자열 0건)",
          url: "https://coopervision.com/practitioner/our-products/clariti-1-day-family/clariti-1-day",
          condition: "Product Details 표 전문 검색",
          linkNote: "바이오피니티 전문가 페이지에는 Center Thickness가 있으나 클래리티 페이지에는 없다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "중심두께 열 없음 (thickness 문자열 0건)",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "7쪽 전문 텍스트 추출 후 검색",
          linkNote: "글로벌 사양서에도 중심두께 열이 없다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "클래리티 원데이 한국 사용설명서 · 한국 제품 안내 자료",
          raw: "중심두께 표기 없음",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/clariti_1day_sphere_patient_instruction.pdf",
          condition: "2쪽 전문 텍스트 추출 후 검색 · 제품 안내 자료 PDF도 동일",
          linkNote: "한국 IFU는 제품별 문서가 아니라 매일착용 소프트콘택트렌즈 공통 문서다"
        }
      ]
    },
    {
      id: "replacement",
      value: "1일",
      state: "verified",
      sourceSummary: "한국 공식 제품 페이지·한국 사용설명서·한국 사양서·글로벌 사양에서 모두 확인",
      caution: "교체주기입니다. 착용방식은 별개이며, 한국 공식 페이지는 하루 착용하는 콘택트렌즈로 야간 취침시에는 착용을 하지 않습니다라고 명시합니다. 최종 착용방식은 안경사 또는 안과 전문인의 판단이 필요합니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "클래리티® 원데이 한국 공식 제품 페이지",
          raw: "교체 주기 / 매일",
          url: "https://coopervision.co.kr/contact-lenses/clariti-1-day",
          condition: "제품 속성 표기 · 같은 영역에 교정 근시·원시 표기",
          linkNote: "한국 유통 제품"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전 콘택트렌즈 사용방법 및 사용 시 주의사항 (매일착용 소프트콘택트렌즈)",
          raw: "사용 후 보관 및 관리 방법 - 일회용 렌즈이므로 하루 착용하며 재사용을 금한다.",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/clariti_1day_sphere_patient_instruction.pdf",
          condition: "1쪽 · 한국 공식 제품 페이지의 사용시 주의 사항 링크로 게시된 파일",
          linkNote: "파일명은 clariti_1day_sphere_patient_instruction.pdf이지만 내용은 제품명이 없는 공통 문서다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (©2023 CooperVision SA09487 Rev #4 09/2023)",
          raw: "매일착용 소프트렌즈 Daily wear; 1 day replacement",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "2쪽 clariti® 1 day sphere 행 · 착용기간 Wear Schedule & Replacement Frequency 열",
          linkNote: "착용방식(Daily wear)과 교체주기(1 day replacement)가 한 칸에 함께 표기됨"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "clariti® 1 day practitioner specs",
          raw: "Replacement schedule Daily · Wearing schedule Daily Disposable",
          url: "https://coopervision.com/practitioner/our-products/clariti-1-day-family/clariti-1-day",
          condition: "Product Details 표 · 교체주기와 착용방식이 별도 행",
          linkNote: "글로벌 공식 전문가 사양"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "매일착용소프트콘택트렌즈",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "수허 15-322 호 · 수허 19-346 호 소분류 품목 명칭 · 등급 2",
          linkNote: "허가 품목 분류 자체가 매일착용이다"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 15-322호 / 수허 19-346 호",
      state: "conflict",
      flag: "공식 출처 간 값이 다름",
      sourceSummary: "한국 공식 제품 목록은 수허 15-322호만 표기 / MFDS UDI에는 clariti 1day가 두 개의 허가번호에 걸쳐 등록",
      caution: "MFDS 허가 원장에서 clariti 1day 구면에 연결된 허가번호가 두 개입니다. 수허 15-322 호는 모델명이 Clariti 1day이고, 수허 19-346 호는 업체 제품 명칭이 산소렌즈 clariti 1day입니다. 실물 포장에 인쇄된 번호를 확인하지 못해 어느 쪽으로도 단정하지 않습니다. 한국 제품 페이지의 조합 -2026-13-073은 광고 사전심의 번호이며 허가번호가 아닙니다.",
      conflicts: [
        { source: "쿠퍼비전코리아 전체 제품 목록 · MFDS UDI 모델명 Clariti 1day", value: "수허 15-322호 (원장 표기 수허 15-322 호) · 120건" },
        { source: "MFDS UDI 업체 제품 명칭 산소렌즈 clariti 1day", value: "수허 19-346 호 · 182건 (모델명 Somofilcon A 1day 93건 · WATER FINE 89건)" }
      ],
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 전체 제품 목록",
          raw: "수허 15-322호 클래리티 원데이",
          url: "https://coopervision.co.kr/contact-lenses",
          condition: "제품 목록 하단 고지 문장 · 호 앞에 공백 없음",
          linkNote: "같은 문장에서 바이오피니티는 수허 08-131로 호 없이 적혀 있다. 같은 문장의 프로클리어 원데이 수허 07-568호는 MFDS 원장의 수허 07-856 호와 어긋난다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 15-322 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "itemPermitNo=수허 15-322 호 조회 120건 · distinct 신원 1건 (쿠퍼비전코리아(주) · 매일착용소프트콘택트렌즈 · 2등급 · 모델명 Clariti 1day · 업체 제품 명칭 산소렌즈) · 포장내수량 5/30/90",
          linkNote: "원장 표기는 호 앞에 공백이 있다. 업체명 원문은 쿠퍼비전코리아(주)이며 쿠퍼비젼코리아로는 0건이 조회된다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 19-346 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "itemPermitNo=수허 19-346 호 조회 182건 · distinct 신원 2건 (모델명 Somofilcon A 1day 93건 · 모델명 WATER FINE 89건, 둘 다 업체 제품 명칭 산소렌즈 clariti 1day) · 포장내수량 5/30/90",
          linkNote: "업체명 쿠퍼비전코리아 전체 17,003건 전수 집계에서 clariti 문자열이 나타나는 허가번호는 구면 계열 15-322·19-346, 토릭 계열 15-963·20-165, 멀티포컬 15-964다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "클래리티 원데이 한국 사용설명서",
          raw: "허가번호 표기 없음 (수허·허가 문자열 0건)",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/clariti_1day_sphere_patient_instruction.pdf",
          condition: "2쪽 전문 텍스트 추출 후 검색",
          linkNote: "한국 IFU는 허가번호 근거가 되지 못한다"
        }
      ]
    },
    {
      id: "uv",
      value: "UV 차단 적용 · 한국 사양서 Class 2",
      state: "verified",
      sourceSummary: "한국 페이지·한국 사양서·글로벌 사양 모두 UV 차단을 표기 · 차단율 수치는 어느 자료에도 없음",
      caution: "차단율 퍼센트는 검토한 어떤 공식 자료에도 없습니다. 한국 사양서의 Class 2는 자외선 차단 등급 표기입니다. 자외선 차단 콘택트렌즈는 눈과 주변 부위를 완전히 덮지 못하므로 선글라스나 고글을 대신할 수 없습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "클래리티® 원데이 한국 공식 제품 페이지",
          raw: "클래리티® 원데이는 매일 새 렌즈로 교체하는 하루 착용 콘택트렌즈로, UV 차단 기능이 적용되어 있으며, 높은 산소 투과율을 (*별첨 1) 갖춘 실리콘 하이드로겔 소재로 만들어졌습니다.",
          url: "https://coopervision.co.kr/contact-lenses/clariti-1-day",
          condition: "차단율 퍼센트 수치 0건",
          linkNote: "바이오피니티에서 한국 페이지와 한국 사양서가 충돌했던 것과 달리 이 제품은 양쪽 모두 UV 차단을 표기한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (©2023 CooperVision SA09487 Rev #4 09/2023)",
          raw: "Class 2",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "2쪽 clariti® 1 day sphere 행 · 자외선 차단 등급 UV Blocking ‡ & Class 열 · 각주 ‡: UV 흡수 콘택트렌즈는 눈과 주변 부위를 완전히 덮지 않기 때문에, 자외선 흡수 고글 또는 선글라스와 같은 보호용 UV 흡수 안경류를 대체하지 않습니다.",
          linkNote: "같은 사양서 3쪽 바이오피니티 행의 같은 열은 No이므로 열 귀속이 검증된다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "clariti® 1 day practitioner specs",
          raw: "UV protection Yes",
          url: "https://coopervision.com/practitioner/our-products/clariti-1-day-family/clariti-1-day",
          condition: "Product Details 표 · 차단율 수치 없음",
          linkNote: "글로벌 공식 전문가 사양"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "UV blocking*",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 clariti® 1 day sphere 행 Features/Design Technology 열 · 각주 *: WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area.",
          linkNote: "차단율 수치 없음"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전 콘택트렌즈 사용방법 및 사용 시 주의사항 (매일착용 소프트콘택트렌즈)",
          raw: "자외선 차단 기능의 콘택트렌즈는 자외선으로부터 눈이나 눈 주변부를 완전히 차단할 수 없으므로 자외선 차단용 고글이나 선글라스를 대신할 수 없다.",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/clariti_1day_sphere_patient_instruction.pdf",
          condition: "2쪽 경고 절",
          linkNote: "한국 공식 경고문 원문"
        }
      ]
    }
  ]
}
