// 아큐브 오아시스® (2주) — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/acuvue-oasys-2-week/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
{
  id: "acuvue-oasys-2-week",
  slug: "acuvue-oasys-2-week",
  aliases: ["아큐브 오아시스", "ACUVUE OASYS 2-Week", "senofilcon A"],
  name: "아큐브 오아시스®",
  selectorLabel: "아큐브 오아시스 2주",
  maker: "Johnson & Johnson Vision",
  distributor: "(주)한국존슨앤드존슨비전",
  type: "근시·원시용 투명 구면 · 2주 교체",
  packageSpecs: [
    { value: "BC 8.4 / 8.8", label: "Base Curve · mm" },
    { value: "DIA 14.0", label: "Diameter · mm" },
    { value: "38%", label: "Water content" },
    { value: "Dk/t 147", label: "-3.00D · 35℃" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.4 mm / 8.8 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 3쪽 ACUVUE® OASYS 열 · 2026.08.28 확인",
      caution: "한국 공식 페이지와 한국 사용설명서에는 파라미터 표가 없어 글로벌 기술 사양이 유일한 근거입니다. 한국에서 두 BC가 모두 유통되는지는 확인하지 못했습니다. 한국 제품 페이지 HTML에 보이는 8.4·8.8 문자열은 로고 SVG의 좌표이며 스펙이 아닙니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "8.4/14.0  ·  8.8/14.0",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® OASYS 열(좌표 x≈152–203) · Parameters BC (mm) / Dia (mm) 행",
          linkNote: "같은 쪽 ACUVUE® VITA® 열도 8.4/14.0 · 8.8/14.0이라 좌표로 열을 고정해 구분했다. 한국 공식 제품 페이지와 MFDS UDI 원장에서 한국 유통 제품 연결 확인"
        }
      ]
    },
    {
      id: "dia",
      value: "14.0 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 3쪽 ACUVUE® OASYS 열 · 2026.08.28 확인",
      caution: "한국 공식 자료에 직경 표기가 없어 글로벌 기술 사양이 유일한 근거입니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "8.4/14.0  ·  8.8/14.0",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® OASYS 열 · Parameters BC (mm) / Dia (mm) 행 · 두 BC 모두 직경 14.0",
          linkNote: "한국 공식 제품 페이지와 MFDS UDI 원장에서 한국 유통 제품 연결 확인"
        }
      ]
    },
    {
      id: "water",
      value: "38%",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 Water Content 행 · 2026.08.28 확인",
      caution: "출처는 측정 위치(벌크·코어·표면)를 표기하지 않고 Water Content 한 줄만 제시합니다. 측정 위치를 나눠 표기하는 제품의 숫자와 같은 축에 놓고 비교하지 않습니다. 실리콘 하이드로겔이므로 함수율이 낮다는 것이 산소 전달이 낮다는 뜻은 아닙니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "38%",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® OASYS 열 · Water Content 행 · 측정 위치 별도 표기 없음",
          linkNote: "senofilcon A 실리콘 하이드로겔 사양. 같은 쪽 ACUVUE® VITA® 열은 41%로 다르다"
        }
      ]
    },
    {
      id: "material",
      value: "senofilcon A",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 Lens Material 행 · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지·한국 사용설명서·MFDS 허가 원장 어디에도 재질명 표기가 없어 글로벌 기술 사양이 유일한 근거입니다. 원데이 아큐브 모이스트와 달리 이 제품은 한국 등록 모델명에 재질명이 들어 있지 않습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "senofilcon A",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® OASYS 열 · Lens Material 행",
          linkNote: "PDF는 fi 합자 글리프(U+FB01)로 인쇄돼 추출 문자열이 senoﬁlcon A로 나온다. 인쇄된 단어는 senofilcon A다. 같은 쪽 ACUVUE® VITA®는 senofilcon C로 다른 재질이다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "ACUVUE® OASYS® Brand Contact Lenses with HYDRACLEAR® PLUS (재질명 표기 없음)",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "modelnm=senofilcon 조회 0건 · 등록 모델명과 업체 제품 명칭에 재질명 문자열 없음",
          linkNote: "한국 원장에서는 재질명을 확인할 수 없다"
        }
      ]
    },
    {
      id: "dkt",
      value: "147 × 10⁻⁹",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 · 시험도수와 측정 조건 확인",
      caution: "-3.00D 렌즈 중심, 분극법, boundary·edge 보정 Dk, 35℃ 조건의 값입니다. 조건이 다른 Dk/t와 숫자만 직접 비교하지 않습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "147 x 10-9 (-3.00D)",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® OASYS 열 · Dk/t Value1 (edge corrected) 행 · 각주 1: Oxygen transmissibility measured via polarographic method at centre -3.00D lens using boundary corrected, edge corrected Dk value. Units (cm/sec) (ml O2/ml x mm Hg) at 35° C.",
          linkNote: "같은 표의 중심두께 0.070 mm @ -3.00D와 함께 해석. 인쇄물에서 -9는 위첨자다"
        }
      ]
    },
    {
      id: "thickness",
      value: "0.070 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 Center Thickness 행 · 2026.08.28 확인",
      caution: "-3.00D 기준 중심두께입니다. 도수가 달라지면 두께도 달라집니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "0.070",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® OASYS 열 · Center Thickness (mm @ -3.00D) 행",
          linkNote: "Dk/t 시험 조건과 연결"
        }
      ]
    },
    {
      id: "replacement",
      value: "2주",
      state: "verified",
      flag: "착용방식 표기 별도",
      sourceSummary: "한국 공식 제품 페이지 2주 착용 표기 · 글로벌 기술 사양 Recommended Replacement 행",
      caution: "한국 공식 자료에는 `2주 착용`만 있고 `2주 교체`라는 문자열이 없습니다. 한국 사용설명서에는 교체주기 문장 자체가 없습니다. 글로벌 기술 사양은 착용방식에 따라 권장 교체주기를 다르게 적습니다(연속착용 1주 / 일일착용 2주). 착용방식과 교체주기는 다른 개념이며, `Extended Wear` 표기를 수면착용 허용으로 해석하지 않습니다. 착용방식은 안경사 또는 안과 전문인의 판단 사항입니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "아큐브 오아시스® 한국 공식 제품 페이지",
          raw: "2주 착용",
          url: "https://acuvue.co.kr/products/acuvue-oasys",
          condition: "제품 배지 표기 · 같은 줄에 근시/원시 표기 · 전역 내비게이션 착용 주기 분류에서도 2주 착용",
          linkNote: "이 페이지에 `2주 교체` 문자열은 없다. 연속착용·수면착용 언급도 0건"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "아큐브 오아시스® 한국 사용설명서",
          raw: "교체주기 문장 없음 (`2주` 문자열 0건)",
          url: "https://acuvue.co.kr/files/patient-instruction-guides/Oasys_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf",
          condition: "4쪽 전문 텍스트 추출(5,361자) 후 검색 · `교체` 2회는 마른 렌즈 폐기와 렌즈 케이스 교체 문장",
          linkNote: "재사용 렌즈라 세척·소독·보관 절만 있고, 모이스트·오아시스 원데이 IFU에 있던 1일 교체 문장에 해당하는 표현이 없다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "1 Week EW or 2 Weeks DW",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® OASYS 열 · Recommended Replacement 행 · 별도 행인 Wearing Schedule은 Extended Wear / Daily Wear",
          linkNote: "교체주기와 착용방식이 표에서 서로 다른 행으로 분리돼 있다. 한국 공식 자료에는 연속착용 표기가 없다"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 05-310 호 / 수허 08-938 호",
      state: "conflict",
      flag: "동일 제품에 허가번호 2건",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회에서 2주 구면에 허가번호 2건이 확인됨 · 2026.08.28",
      caution: "두 허가번호가 완전히 동일한 고유식별자(UDI-DI) 377개에 연결돼 있어 한쪽으로 좁히지 못했습니다. 한국 사용설명서에는 허가번호가 없고 MFDS UDI 화면에는 허가 상태(유효·취하) 열이 없어 확인이 여기서 멈췄습니다. 오아시스 계열은 2주 구면·2주 난시용·트랜지션스·원데이·원데이 난시용·MAX 4종의 허가번호가 모두 다릅니다. 한국 제품 페이지의 52025-I10-31-3479는 광고 사전심의 번호이며 허가번호가 아닙니다.",
      conflicts: [
        { source: "MFDS UDI · 2024-05-29~31 등록분 · 업체 제품 명칭에 (아큐브 오아시스®) 포함", value: "수허 05-310 호" },
        { source: "MFDS UDI · 2021~2023 등록분 · 업체 제품 명칭에 한국어 제품명 없음", value: "수허 08-938 호" }
      ],
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 05-310 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=한국존슨앤드존슨비전 + modelnm=ACUVUE® OASYS® Brand Contact Lenses with HYDRACLEAR® PLUS 조회 377건, itemPermitNo=수허 05-310 호 조회 377건이 모두 단일 신원((주)한국존슨앤드존슨비전 · 수입업 · 매일착용소프트콘택트렌즈 · 2등급)으로 연결 · 등록일자 조회에서 377건 전부 2024-05-29~31 구간",
          linkNote: "업체 제품 명칭 원문 `ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS (아큐브 오아시스®)` — 한국 제품 페이지 제품명 표기와 문자열이 일치한다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 08-938 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "itemPermitNo=수허 08-938 호 조회 377건 · 05-310과 UDI-DI 집합 대조 결과 교집합 377 / 차집합 0 · 등록일자 조회에서 2021년 372건, 2022년 4건, 2023년 1건",
          linkNote: "업체 제품 명칭 원문 `ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS` — 한국어 제품명이 붙어 있지 않다. 모델명에 ® 기호가 없어 ® 포함 검색으로는 잡히지 않는다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "아큐브 오아시스® 한국 사용설명서",
          raw: "허가번호 표기 없음 (수허·허가 문자열 0건)",
          url: "https://acuvue.co.kr/files/patient-instruction-guides/Oasys_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf",
          condition: "4쪽 전문 텍스트 추출 후 검색",
          linkNote: "이 IFU에는 허가번호가 없어 MFDS UDI가 유일한 근거다. 파일럿의 오아시스 원데이는 IFU 원문에 수허 16-499 호가 있었으나 이 문서에는 없다"
        }
      ]
    },
    {
      id: "uv",
      value: "UVB >99.9% / UVA 약 96% 차단",
      state: "verified",
      flag: "글로벌 공식 자료 · 한국 표기 미확인",
      sourceSummary: "ACUVUE 글로벌 기술 사양 원문값. 한국 페이지의 UV 수치는 이미지 전용이라 확인하지 못함",
      caution: "한국 공식 페이지의 기술·특징 영역이 이미지 전용이어서 한국 표기 수치를 추출하지 못했습니다. 아큐브 오아시스 원데이에서는 한국 표기(UVB 99% 이상 / UVA 90%)와 글로벌 표기(UVB >99.9% / UVA 96%)가 달랐으므로 이 제품에서도 지역 차이 가능성은 배제되지 않았습니다. 원데이 아큐브 모이스트와 달리 이 제품은 MFDS 등록 모델명에 with UV Blocker 문구가 없어 UV 차단 기능 자체의 한국 원장 근거도 없습니다. 자외선 차단 콘택트렌즈는 눈과 주변을 완전히 덮지 못하므로 선글라스나 고글을 대신할 수 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "Blocks >99.9% of UVB & ~96% of UVA",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® OASYS 열 · Approximate UV Blocking 행 · 각주 †: WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area.",
          linkNote: "표 제목이 Approximate UV Blocking이므로 근사값 표기다. UVA 값에는 원문에 ~ 기호가 붙어 있고 UVB에만 부등호가 붙는다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "아큐브 오아시스® 한국 공식 제품 페이지",
          raw: "2. UVA 316~380nm, UVB 280~315nm 범위에서 측정",
          url: "https://acuvue.co.kr/products/acuvue-oasys",
          condition: "페이지 텍스트에 UV 차단 퍼센트 수치 0건 · 기술·특징 설명이 이미지(content-sm.webp, features-sm.webp) 전용이라 수치 추출 불가",
          linkNote: "각주와 자외선 차단 경고문은 있으나 차단율 수치가 없다. 한국 표기 수치는 미확인 상태이며 없음으로 단정하지 않는다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "ACUVUE® OASYS® Brand Contact Lenses with HYDRACLEAR® PLUS",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 05-310 호 모델명 원문 · with UV Blocker 문구 없음",
          linkNote: "모이스트(수허 06-1 호)의 모델명에는 Visibility Tinted with UV Blocker가 있었으나 이 제품 모델명에는 UV 관련 문구가 없다"
        }
      ]
    }
  ]
}
