// 프로클리어® 원데이 — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/proclear-1-day/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
{
  id: "proclear-1-day",
  slug: "proclear-1-day",
  aliases: ["프로클리어 원데이", "Proclear 1 day", "omafilcon A"],
  name: "프로클리어® 원데이 / Proclear® 1 day",
  selectorLabel: "프로클리어 원데이",
  maker: "CooperVision",
  distributor: "쿠퍼비전코리아(주)",
  type: "근시·원시용 투명 구면 · 비구면 디자인 · 1일 교체",
  packageSpecs: [
    { value: "BC 8.7", label: "Base Curve · mm" },
    { value: "DIA 14.2", label: "Diameter · mm" },
    { value: "60%", label: "Water content" },
    { value: "Dk/t 28", label: "@-3.00DS" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.7 mm",
      state: "verified",
      sourceSummary: "쿠퍼비전코리아 제품 사양서(2023 Rev #4)와 글로벌 공식 사양 2종이 모두 8.7 · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지에는 BC 표기가 없어 한국 사양서 PDF가 한국 자료의 유일한 근거입니다. 공식 자료에 기재된 BC는 8.7 하나뿐이며 다른 BC의 유통 여부는 확인하지 못했습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "8.7",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 1 Day. 매일착용소프트렌즈 표 · Proclear® 1 day 행(제품명 y0 358.4 · 값 y0 350.7 · 표 구분선 312.0~396.8 구간) · 내면곡률반경 Base Curve (mm) 열(x 435.5–467.7)",
          linkNote: "같은 표의 마이데이 구면 행은 8.4이므로 좌표로 행을 분리해 확인했고, 해당 행을 500% 렌더링해 육안 대조했다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Proclear® 1 day 미국 전문가용 제품 페이지 Product Details",
          raw: "Base curve 8.7",
          url: "https://coopervision.com/practitioner/our-products/proclear-family/proclear-1-day",
          condition: "United States 지역 표기 페이지",
          linkNote: "한국 사양서 값과 일치"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "8.7",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 SPHERE LENSES 표 1-Day Disposables 구획 · Proclear® 1 day 행(y0 405.6) · Base Curve (mm) 열(x 398.3–422.3)",
          linkNote: "세 자료 모두 8.7"
        }
      ]
    },
    {
      id: "dia",
      value: "14.2 mm",
      state: "verified",
      sourceSummary: "쿠퍼비전코리아 제품 사양서(2023 Rev #4)와 글로벌 공식 사양 2종이 모두 14.2 · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지에는 직경 표기가 없어 한국 사양서 PDF가 한국 자료의 유일한 근거입니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "14.2",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 Proclear® 1 day 행(값 y0 350.7) · 렌즈 직경 Diameter (mm) 열(x 488.6–520.6)",
          linkNote: "500% 렌더링 육안 대조 완료"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Proclear® 1 day 미국 전문가용 제품 페이지 Product Details",
          raw: "Diameter 14.2",
          url: "https://coopervision.com/practitioner/our-products/proclear-family/proclear-1-day",
          condition: "United States 지역 표기 페이지",
          linkNote: "한국 사양서 값과 일치"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "14.2",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 Proclear® 1 day 행(y0 405.6) · Dia (mm) 열(x 434.0–455.5)",
          linkNote: "세 자료 모두 14.2"
        }
      ]
    },
    {
      id: "water",
      value: "60%",
      state: "verified",
      sourceSummary: "한국 사양서와 글로벌 공식 사양 2종이 모두 60% · 한국 소비자 페이지에는 표기 없음",
      caution: "쿠퍼비전코리아 전체 제품 목록의 별첨 1(제품별 함수율·Dk/t) 목록에 프로클리어가 들어 있지 않아, 한국 소비자 페이지에는 이 제품의 함수율이 어디에도 표기되지 않습니다. 출처가 측정 위치(벌크·코어·표면)를 밝히지 않으므로 코어와 표면을 나눠 표기하는 제품의 숫자와 같은 축에 놓고 비교하지 않습니다. 미국 페이지의 96% hydration for 12 hours or more는 함수율과 다른 개념의 광고 문구이므로 이 값에 섞지 않았습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "60",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 Proclear® 1 day 행(값 y0 350.7) · 함수율 Water content (%) 열(x 607.4–631.5) · 측정 위치 표기 없음",
          linkNote: "열 이름이 함수율 Water content (%)이므로 단위는 %"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Proclear® 1 day 미국 전문가용 제품 페이지 Product Details",
          raw: "Material / H 2 0 content  omafilcon A / 60%",
          url: "https://coopervision.com/practitioner/our-products/proclear-family/proclear-1-day",
          condition: "재질과 함수율이 한 줄에 함께 표기됨",
          linkNote: "한국 사양서 값과 일치"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "omaﬁlcon A / 60%",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 Proclear® 1 day 행 · Material/H20 Content 열(x 295.8–344.3)",
          linkNote: "PDF는 fi 합자 글리프(U+FB01)로 인쇄돼 추출 문자열이 omaﬁlcon으로 나온다. 인쇄된 단어는 omafilcon A"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 전체 제품 목록",
          raw: "*(별첨 1)제품별 [1. 함수율과 2. 산소 투과율(Dk/t)]은 아래와 같습니다. - 마이데이 … - 클래리티 … - 바이오피니티 …",
          url: "https://coopervision.co.kr/contact-lenses",
          condition: "각주 별첨 1 · 마이데이·클래리티·바이오피니티만 기재되고 프로클리어 항목은 없음",
          linkNote: "한국 소비자 페이지에 이 제품의 함수율 표기가 없다는 사실 자체를 기록한 출처"
        }
      ]
    },
    {
      id: "material",
      value: "omafilcon A",
      state: "verified",
      flag: "한국 허가 원장 미기재",
      sourceSummary: "한국 사양서는 PC-하이드로겔 omafilcon A · 글로벌 사양 2종도 omafilcon A · 한국 제품 페이지에는 재질 표기 없음",
      caution: "이 제품은 실리콘 하이드로겔이 아니라 하이드로겔 계열입니다. 한국 사양서는 재질 계열을 PC-하이드로겔로, 글로벌 사양서는 FDA Group을 2로 적고 SiHy 표기를 붙이지 않습니다. 같은 표의 마이데이·클래리티는 5B SiHy입니다. MFDS 허가 원장의 모델명 Proclear 1 Day에는 재질명이 들어 있지 않아 재질명은 제조사 사양서로만 확인된 값입니다. 같은 브랜드의 월간 제품(Proclear sphere·toric·XR)은 omafilcon B이므로 섞지 않습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "PC-하이드로겔 omaﬁlcon A",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 Proclear® 1 day 행(y0 347.1·354.3) · 렌즈 재질 Material USAN 열(x 545.6–586.8)",
          linkNote: "PDF는 fi 합자 글리프(U+FB01)로 인쇄돼 추출 문자열이 omaﬁlcon A가 된다. 인쇄된 단어는 omafilcon A. 같은 표의 마이데이 행은 실리콘 하이드로겔 stenfilcon A로 계열 표기가 다르다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Proclear® 1 day 미국 전문가용 제품 페이지 Product Details",
          raw: "omafilcon A / 60%",
          url: "https://coopervision.com/practitioner/our-products/proclear-family/proclear-1-day",
          condition: "Product Details 표 · Material / H20 content 행",
          linkNote: "한국 사양서의 USAN 명칭과 일치"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "2",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 Proclear® 1 day 행(y0 405.6) · FDA Group 열(x 360.8–385.4) · 같은 행 Material/H20 Content 열은 omaﬁlcon A / 60%",
          linkNote: "같은 표의 마이데이·클래리티 행은 5B와 SiHy가 함께 적히는데 이 행에는 SiHy 표기가 없다. 하이드로겔 계열임을 뒷받침한다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "Proclear 1 Day",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 07-856 호 · 구면 제품 모델명 원문 · 재질명 미포함",
          linkNote: "modelnm=Omafilcon·omafilcon 조회는 모두 0건이다. 같은 업체의 마이데이 토릭(Stenfilcon A 1day Toric)처럼 모델명에 재질명이 들어간 등록도 있어 규칙이 제품마다 다르다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "프로클리어® 원데이 한국 공식 제품 페이지",
          raw: "친수성 렌즈로 장시간 편안하게 만들어줍니다.",
          url: "https://coopervision.co.kr/contact-lenses/proclear-1-day",
          condition: "본문 서술 · omafilcon 0건 · 하이드로겔 0건",
          linkNote: "한국 소비자 페이지는 재질 계열도 USAN 명칭도 밝히지 않는다"
        }
      ]
    },
    {
      id: "dkt",
      value: "28",
      state: "verified",
      sourceSummary: "한국 사양서와 글로벌 공식 사양 2종이 모두 28 · 시험 도수 -3.00DS",
      caution: "시험 도수 -3.00DS 기준 값입니다. 쿠퍼비전 공식 자료는 한국·미국 모두 측정법(분극법 등)·경계 보정 여부·온도를 표기하지 않습니다. 시험 조건 표기 수준이 다른 제품의 Dk/t와 숫자만 직접 비교하지 않습니다. Dk에서 Dk/t를 계산하지 않았고, 중심두께가 확인되지 않으므로 두께 조건 없이 읽어야 합니다. 한국 소비자 페이지에는 이 제품의 Dk/t가 표기되지 않습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "28",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 Proclear® 1 day 행(값 y0 350.7) · 산소 투과율 Oxygen transmissibility Dk/t † 열(x 660.1–695.1) · 각주 †: (@-3.00DS) x 10-9 [(cm/sec) x (ml O )/(ml x mmHg)] — 인쇄물에서 -9는 위첨자, O 뒤의 2는 아래첨자",
          linkNote: "같은 표의 마이데이 구면 행은 100이므로 좌표로 행을 분리해 확인했다. 측정법·온도는 각주에 없음"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Proclear® 1 day 미국 전문가용 제품 페이지 Product Details",
          raw: "Oxygen transmissibility  28 Dk/t (at -3.00D)",
          url: "https://coopervision.com/practitioner/our-products/proclear-family/proclear-1-day",
          condition: "시험 도수만 표기 · 측정법·온도 없음",
          linkNote: "한국 사양서와 같은 값·같은 시험 도수"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "28",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 Proclear® 1 day 행(y0 405.6) · Oxygen Transmissibility DK/t** 열(x 464.8–525.6) · 각주 **: (@-3.00DS) x 10-9 [(cm/sec) x (ml O2)/(ml x mm Hg)].",
          linkNote: "한국 사양서와 동일한 각주 형식"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 전체 제품 목록",
          raw: "*(별첨 1)제품별 [1. 함수율과 2. 산소 투과율(Dk/t)]은 아래와 같습니다. - 마이데이 … - 클래리티 … - 바이오피니티 …",
          url: "https://coopervision.co.kr/contact-lenses",
          condition: "각주 별첨 1 · 프로클리어 항목 없음",
          linkNote: "마이데이·클래리티에서 한국 페이지 값과 사양서 값이 갈렸던 것과 달리, 이 제품은 한국 페이지에 비교 대상 숫자 자체가 없다"
        }
      ]
    },
    {
      id: "thickness",
      value: "공식 자료에서 중심두께 표기 확인되지 않음",
      state: "unknown",
      flag: "확인되지 않음",
      sourceSummary: "한국·글로벌 공식 자료 6종을 검토했으나 중심두께 항목 자체가 없음",
      caution: "표기를 찾지 못했다는 뜻이며 두께가 없다는 뜻이 아닙니다. Dk/t에서 두께를 역산하지 않습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "중심두께 열 없음 (3쪽 전체에서 thickness 0건 · 두께 0건)",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 표 열 구성: 제품명·정점 굴절력·원주 굴절력·원주 축·ADD 도수·디자인·착용기간·내면곡률반경·렌즈 직경·렌즈 재질·함수율·산소 투과율·자외선 차단 등급·가시성 색조",
          linkNote: "열 헤더 좌표를 전수 확인한 결과 두께 열이 존재하지 않음"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Proclear® 1 day 미국 전문가용 제품 페이지 Product Details",
          raw: "thickness 문자열 0건",
          url: "https://coopervision.com/practitioner/our-products/proclear-family/proclear-1-day",
          condition: "2026.08.28 공개 HTML과 브라우저 렌더링 전문 검색",
          linkNote: "같은 사이트의 마이데이·클래리티·바이오피니티 전문가 페이지에도 현재 thickness 문자열이 0건"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "thickness 문자열 0건 (7쪽 전문)",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "7쪽 전체 텍스트 추출 후 검색",
          linkNote: "글로벌 공식 사양서에도 중심두께 열이 없음"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "프로클리어® 원데이 한국 공식 제품 페이지 · 한국 사용설명서 PDF · 한국 제품 안내 PDF",
          raw: "중심두께 표기 없음 (두께 0건)",
          url: "https://coopervision.co.kr/contact-lenses/proclear-1-day",
          condition: "제품 페이지 텍스트, 사용설명서 PDF 2쪽, 제품 안내 PDF 1쪽 전문 검색",
          linkNote: "한국 자료에도 두께 표기가 없어 미확인을 없음으로 해석하지 않음"
        }
      ]
    },
    {
      id: "replacement",
      value: "1일",
      state: "verified",
      sourceSummary: "한국 사양서·한국 공식 페이지·한국 사용설명서·한국 제품 안내·글로벌 사양·MFDS 품목 분류에서 모두 확인",
      caution: "1일은 교체주기입니다. 착용방식은 별도 개념이며 공식 자료는 매일착용(Daily wear)으로 적습니다. 한국 페이지는 야간 취침 시 착용하지 않는다고 명시합니다. 최종 착용방식은 안경사 또는 안과 전문인의 판단이 필요합니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "프로클리어® 원데이 한국 공식 제품 페이지",
          raw: "교체 주기 매일",
          url: "https://coopervision.co.kr/contact-lenses/proclear-1-day",
          condition: "제품 속성 표기 · 같은 영역에 교정 근시·원시 표기 · 본문 주의문구 (* 하루 착용하는 콘택트렌즈로 야간 취침시에는 착용을 하지 않습니다.)",
          linkNote: "한국 유통 제품"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전 콘택트렌즈 사용방법 및 사용 시 주의사항 (매일착용 소프트콘택트렌즈)",
          raw: "사용 후 보관 및 관리 방법 - 일회용 렌즈이므로 하루 착용하며 재사용을 금한다.",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/Proclear_1day_sphere_patient_instruction.pdf",
          condition: "1쪽 · 프로클리어® 원데이 한국 공식 제품 페이지의 사용자 정보 책자 링크로 게시된 파일",
          linkNote: "쿠퍼비전 매일착용 소프트렌즈 공통 문서이며 제품명·허가번호·수치는 담고 있지 않다. 마이데이·클래리티 IFU와 같은 본문이다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "매일착용 소프트렌즈 Daily wear; 1 day replacement",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 Proclear® 1 day 행(y0 343.9–365.0) · 착용기간 Wear Schedule & Replacement Frequency 열(x 373.1–415.7)",
          linkNote: "착용방식(Daily wear)과 교체주기(1 day replacement)가 한 열에 함께 표기됨"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Proclear® 1 day 미국 전문가용 제품 페이지 Product Details",
          raw: "Replacement schedule  Daily / Wearing schedule  Daily Disposable",
          url: "https://coopervision.com/practitioner/our-products/proclear-family/proclear-1-day",
          condition: "교체주기와 착용방식이 별도 항목으로 분리돼 있음",
          linkNote: "교체주기와 착용방식을 구분해 기록"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "매일착용 소프트 콘택트렌즈",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "수허 07-856 호 95건의 소분류 품목 명칭 · 등급 2",
          linkNote: "허가 품목 분류 자체가 매일착용이다. 같은 업체 멀티포컬의 소분류는 공백 없는 매일착용소프트콘택트렌즈로 표기가 갈린다"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 07-856 호 / 수허 07-568호",
      state: "conflict",
      flag: "공식 출처 간 값이 다름",
      sourceSummary: "MFDS 원장은 수허 07-856 호 (95건 단일 신원) / 쿠퍼비전코리아 전체 제품 목록 각주는 수허 07-568호",
      caution: "두 한국 공식 자료가 서로 다른 번호를 인쇄합니다. MFDS 의료기기 UDI 조회에서 수허 07-856 호는 95건이 모두 쿠퍼비전코리아(주)·매일착용 소프트 콘택트렌즈·2등급·모델명 Proclear 1 Day 한 신원으로 연결되지만, 제품 목록 각주의 수허 07-568호로는 0건이 조회됩니다. 실물 포장에 인쇄된 번호를 확인하지 못해 어느 쪽도 지우지 않았습니다. 다만 화면의 문자열을 그대로 MFDS 조회창에 넣어 검색이 재현되는 쪽은 수허 07-856 호뿐입니다. 한국 제품 페이지의 조합-2026-13-078과 제품 목록의 조합-2026-13-082는 광고 사전심의 번호이며 허가번호가 아닙니다. 프로클리어 계열은 구면과 멀티포컬의 허가번호가 서로 다르며 이 번호는 구면 제품의 번호입니다.",
      conflicts: [
        { source: "MFDS 의료기기 UDI 표준코드 조회 (원장)", value: "수허 07-856 호 · 95건 · 모델명 Proclear 1 Day" },
        { source: "쿠퍼비전코리아 전체 제품 목록 각주", value: "수허 07-568호 · 같은 번호로 MFDS 조회 시 0건" }
      ],
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 07-856 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "itemPermitNo=수허 07-856 호 단독 조회 95건, bplcNm=쿠퍼비전코리아 + modelnm=Proclear 1 Day 조회 95건이 모두 단일 신원(쿠퍼비전코리아(주) · 매일착용 소프트 콘택트렌즈 · 2등급 · 모델명 Proclear 1 Day · 업체 제품 명칭 비어 있음)으로 연결. 포장내수량 분포 5(33건)·30(33건)·90(29건). 업체명 전체 17,003건 전수 집계에서 Proclear 문자열은 이 번호와 멀티포컬 수허 14-720 호 두 곳에만 나타난다",
          linkNote: "검색 함정 셋: 업체명은 쿠퍼비전코리아(주)여야 하고(쿠퍼비젼코리아는 0건), 구면 모델명은 Day의 D가 대문자인 Proclear 1 Day여야 하며(Proclear 1 day는 멀티포컬 114건만, PROCLEAR·proclear는 0건), 재질명 Omafilcon·omafilcon으로는 0건이다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 전체 제품 목록",
          raw: "수허 07-568호 프로클리어 원데이",
          url: "https://coopervision.co.kr/contact-lenses",
          condition: "제품 목록 하단 고지 문장 · 같은 문장에 수허 14-720호 프로클리어 멀티포컬이 별도 기재 · itemPermitNo=수허 07-568 호로 MFDS 조회 시 0건",
          linkNote: "같은 문장에서 마이데이·클래리티는 호 앞 공백 없이, 바이오피니티는 호 자체 없이 적혀 있어 표기 방식이 제품마다 일정하지 않다. 이 각주를 단독 허가 근거로 쓰지 않는다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전 콘택트렌즈 사용방법 및 사용 시 주의사항 (매일착용 소프트콘택트렌즈)",
          raw: "허가번호 표기 없음 (수허·제허·허가 문자열 0건)",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/Proclear_1day_sphere_patient_instruction.pdf",
          condition: "2쪽 전문 텍스트 추출 후 검색",
          linkNote: "이 IFU에는 허가번호·제품명·수치가 모두 없어 허가 근거로 쓸 수 없다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "프로클리어® 원데이 한국 공식 제품 페이지",
          raw: "*위의 제품은 ‘의료기기’이며, 사용상의 주의사항과 사용 방법을 잘 읽고 사용하세요. (심의번호: 조합-2026-13-078, 유효기간: 2029-04-28)",
          url: "https://coopervision.co.kr/contact-lenses/proclear-1-day",
          condition: "페이지 하단 고지 · 수허 문자열 0건",
          linkNote: "조합-2026-13-078은 광고 사전심의 번호이며 허가번호가 아니다"
        }
      ]
    },
    {
      id: "uv",
      value: "UV 차단 없음 (한국 사양서 표기 No)",
      state: "verified",
      flag: "차단 기능 표기 없음",
      sourceSummary: "한국 사양서의 자외선 차단 등급 열이 No · 글로벌 공식 자료 2종에는 UV 항목 자체가 없음",
      caution: "한국 사양서의 No가 이 제품의 유일한 명시적 UV 표기입니다. 미국 전문가 페이지에는 마이데이·클래리티에 있는 UV 행이 아예 없고, 글로벌 사양서의 특징 열에도 UV blocking 항목이 없습니다. 두 글로벌 자료는 No와 모순되지 않지만 그 자체로 없음을 확인해 주지도 않습니다. Class 표기나 차단율 퍼센트는 어느 공식 자료에도 없습니다. 한국 사용설명서의 자외선 경고문은 쿠퍼비전 매일착용 소프트렌즈 공통 문서의 일반 경고이며 이 제품이 UV를 차단한다는 표기가 아닙니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "No",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 Proclear® 1 day 행(값 y0 350.7) · 자외선 차단 등급 UV Blocking ‡ & Class 열(x 717.6–757.9)",
          linkNote: "같은 표 같은 열에서 마이데이 구면 행은 Class 2이므로 열 값이 제품마다 실제로 갈린다. 500% 렌더링 육안 대조로 No임을 확인했다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Proclear® 1 day 미국 전문가용 제품 페이지 Product Details",
          raw: "UV 행 없음 (Product Details 항목: Material / H20 content · Replacement schedule · Oxygen transmissibility · Revenue carton size · Base curve · Diameter · Sphere power · Wearing schedule · Technology)",
          url: "https://coopervision.com/practitioner/our-products/proclear-family/proclear-1-day",
          condition: "curl과 브라우저 렌더링 양쪽에서 확인 · 본문의 UV 1건은 하단 Also of Interest: The Importance of UV Protection 링크 문구",
          linkNote: "같은 사이트의 마이데이 페이지에는 UV Blocker* Yes, 클래리티 페이지에는 UV protection Yes 행이 있다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "• Aberration Neutralizing System™ / • PC Technology™",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 Proclear® 1 day 행 Features/Design Technology 열(x 678.3–752.5) 전체 항목 · UV blocking* 항목 없음",
          linkNote: "같은 표의 마이데이·클래리티 행에는 • UV blocking* 항목이 있고 2쪽 각주 *의 UV 경고문이 그 항목에 붙는다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "프로클리어® 원데이 한국 공식 제품 페이지 · 한국 제품 안내 PDF",
          raw: "UV 0건 · 자외선 0건",
          url: "https://coopervision.co.kr/contact-lenses/proclear-1-day",
          condition: "제품 페이지 전문 검색(curl·브라우저 렌더링) 및 제품 안내 PDF 1쪽 전문 검색",
          linkNote: "마이데이 한국 페이지의 UV 차단 기술이 적용되어 같은 문구가 이 제품 페이지에는 없다"
        }
      ]
    }
  ]
}
