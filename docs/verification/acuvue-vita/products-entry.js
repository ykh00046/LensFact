// 아큐브 비타® (1달) — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/acuvue-vita/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
{
  id: "acuvue-vita",
  slug: "acuvue-vita",
  aliases: ["아큐브 비타", "ACUVUE VITA", "senofilcon C"],
  name: "아큐브 비타®",
  selectorLabel: "아큐브 비타",
  maker: "Johnson & Johnson Vision",
  distributor: "(주)한국존슨앤드존슨비전",
  type: "근시·원시용 투명 구면 · 1달 교체",
  packageSpecs: [
    { value: "BC 8.4 / 8.8", label: "Base Curve · mm" },
    { value: "DIA 14.0", label: "Diameter · mm" },
    { value: "41%", label: "Water content" },
    { value: "Dk/t 147", label: "-3.00D · 35℃" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.4 mm / 8.8 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 3쪽 ACUVUE® VITA® 열 · 2026.08.28 확인",
      caution: "한국 공식 페이지와 한국 사용설명서에는 파라미터 표가 없어 글로벌 기술 사양이 유일한 근거입니다. 한국에서 두 BC가 모두 유통되는지는 확인하지 못했습니다. 한국 제품 페이지 HTML에 보이는 8.4·8.8 문자열은 로고 SVG의 좌표이며 스펙이 아닙니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "8.4/14.0  ·  8.8/14.0",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® VITA® 열(좌표 x≈547–580) · Parameters BC (mm) / Dia (mm) 행",
          linkNote: "같은 쪽 ACUVUE® OASYS 열도 8.4/14.0 · 8.8/14.0으로 완전히 같아 좌표로 열을 고정해 구분했다. 한국 공식 제품 페이지와 MFDS UDI 원장에서 한국 유통 제품 연결 확인"
        }
      ]
    },
    {
      id: "dia",
      value: "14.0 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 3쪽 ACUVUE® VITA® 열 · 2026.08.28 확인",
      caution: "한국 공식 자료에 직경 표기가 없어 글로벌 기술 사양이 유일한 근거입니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "8.4/14.0  ·  8.8/14.0",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® VITA® 열 · Parameters BC (mm) / Dia (mm) 행 · 두 BC 모두 직경 14.0",
          linkNote: "같은 쪽 ACUVUE® VITA® for ASTIGMATISM 열은 8.6/14.5로 다르다. 난시용은 별도 허가 제품이며 이 값과 섞지 않았다"
        }
      ]
    },
    {
      id: "water",
      value: "41%",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 Water Content 행 · 2026.08.28 확인",
      caution: "출처는 측정 위치(벌크·코어·표면)를 표기하지 않고 Water Content 한 줄만 제시합니다. 측정 위치를 나눠 표기하는 제품의 숫자와 같은 축에 놓고 비교하지 않습니다. 실리콘 하이드로겔이므로 함수율이 높다는 것이 산소 전달이 높다는 뜻은 아닙니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "41%",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® VITA® 열 · Water Content 행 · 측정 위치 별도 표기 없음",
          linkNote: "senofilcon C 실리콘 하이드로겔 사양. 같은 쪽 ACUVUE® OASYS 열은 38%로 다르다. 함수율은 비타 열과 오아시스 열을 가르는 몇 안 되는 값 중 하나다"
        }
      ]
    },
    {
      id: "material",
      value: "senofilcon C",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 Lens Material 행 · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지·한국 사용설명서·MFDS 허가 원장 어디에도 재질명 표기가 없어 글로벌 기술 사양이 유일한 근거입니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "senofilcon C",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® VITA® 열 · Lens Material 행",
          linkNote: "PDF는 fi 합자 글리프(U+FB01)로 인쇄돼 추출 문자열이 senoﬁlcon C로 나온다. 인쇄된 단어는 senofilcon C다. 같은 쪽 ACUVUE® OASYS는 senofilcon A로 다른 재질이다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "ACUVUE VITA Brand Contact Lenses (재질명 표기 없음)",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "modelnm=senofilcon · senofilcon C · Senofilcon 조회 모두 0건 · 등록 모델명과 업체 제품 명칭에 재질명 문자열 없음",
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
          condition: "3쪽 ACUVUE® VITA® 열 · Dk/t Value1 (edge corrected) 행 · 각주 1: Oxygen transmissibility measured via polarographic method at centre -3.00D lens using boundary corrected, edge corrected Dk value. Units (cm/sec) (ml O2/ml x mm Hg) at 35° C.",
          linkNote: "같은 표의 중심두께 0.070 mm @ -3.00D와 함께 해석. 인쇄물에서 -9는 위첨자다. 같은 쪽 ACUVUE® OASYS 열도 147 x 10-9 (-3.00D)로 값이 같아 좌표로 열을 고정해 구분했다"
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
          condition: "3쪽 ACUVUE® VITA® 열 · Center Thickness (mm @ -3.00D) 행",
          linkNote: "Dk/t 시험 조건과 연결. 같은 쪽 ACUVUE® OASYS 열도 0.070으로 값이 같아 좌표로 열을 고정해 구분했다"
        }
      ]
    },
    {
      id: "replacement",
      value: "1달",
      state: "verified",
      flag: "착용방식 표기 별도",
      sourceSummary: "한국 공식 제품 페이지 1달 착용 표기 · 글로벌 기술 사양 Recommended Replacement 행",
      caution: "한국 공식 자료에는 `1달 착용`만 있고 `1달 교체`·`1개월 교체`·`30일`이라는 문자열이 없습니다. 한국 사용설명서에는 교체주기 문장 자체가 없습니다. 글로벌 기술 사양은 교체주기(`1 Month DW`)와 착용방식(`Daily Wear`)을 서로 다른 행으로 나눠 적습니다. 착용방식과 교체주기는 다른 개념이며, `Daily Wear` 표기를 수면착용 허용 또는 불허의 선언으로 해석하지 않습니다. 착용방식은 안경사 또는 안과 전문인의 판단 사항입니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "아큐브 비타® 한국 공식 제품 페이지",
          raw: "1달 착용",
          url: "https://acuvue.co.kr/products/acuvue-vita",
          condition: "제품 배지 표기 · 같은 줄에 근시/원시 표기 · 전역 내비게이션 착용 주기 분류에서도 1달 착용",
          linkNote: "이 페이지에 `교체` 문자열은 0건이다. 헤드라인은 `한 달 착용에도 촉촉하게!`이며 연속착용·수면착용 언급도 0건"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "아큐브 비타® 한국 사용설명서",
          raw: "교체주기 문장 없음 (`1개월`·`1달`·`한 달`·`30일` 문자열 0건)",
          url: "https://acuvue.co.kr/files/patient-instruction-guides/Vita_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf",
          condition: "3쪽 전문 텍스트 추출(5,306자) 후 검색 · `교체` 2회는 마른 렌즈 폐기와 렌즈 케이스 교체 문장",
          linkNote: "재사용 렌즈라 세척·소독·보관 절만 있고, 모이스트·오아시스 원데이 IFU에 있던 1일 교체 문장에 해당하는 표현이 없다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "1 Month DW",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® VITA® 열 · Recommended Replacement 행 · 별도 행인 Wearing Schedule은 Daily Wear 한 줄뿐이며 Extended Wear 표기가 없다",
          linkNote: "4쪽 본문에 제품명을 지목한 문장이 있다: `ACUVUE® VITA® Brand Contact Lenses are available by prescription only for vision correction as a daily wear lens with one-month recommended replacement.` 오아시스 2주와 달리 연속착용 표기가 없다"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 16-568 호",
      state: "verified",
      flag: "MFDS 원장 표기",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 248건 전수 대조 · 2026.08.28",
      caution: "한국 사용설명서에는 허가번호가 없어 MFDS UDI 원장이 유일한 근거입니다. 아큐브 비타 난시용은 `수허 18-97 호`로 허가번호가 다른 별개 제품이며 이 값과 섞지 않았습니다. 한국 제품 페이지의 52025-I10-31-3477은 광고 사전심의 번호이며 허가번호가 아닙니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 16-568 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=한국존슨앤드존슨비전 + modelnm=VITA 조회 248건, itemPermitNo=수허 16-568 호 조회 248건이 모두 단일 신원((주)한국존슨앤드존슨비전 · 수입업 · 매일착용소프트콘택트렌즈 · 2등급)으로 연결 · distinct 1건 · UDI-DI 248개 전부 고유 · 포장내수량 6(124건)·12(124건) · 등록일자 조회에서 248건 전부 2021년 · 업체명만으로 조회한 51,144건 전수 집계(distinct 19건)에서도 비타 구면 등록은 이 1건뿐",
          linkNote: "업체 제품 명칭 원문 `ACUVUE VITA Brand Contact Lenses (아큐브 비타)` — 한국 제품 페이지 하단 제품명 표기와 문자열이 그대로 일치한다. 등록 모델명에는 ®·™이 없어 `ACUVUE® VITA®` 검색으로는 0건이다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회 — 난시용(대상 아님) 분리 확인",
          raw: "수허 18-97 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "modelnm=Vita(파스칼 표기) 조회 4,950건 전수 집계 distinct 1건 · 모델명 원문 `ACUVUE® Vita™ Brand Contact Lenses for Astigmatism`",
          linkNote: "구면과 난시용은 서로 다른 허가번호다. 모델명 검색이 대소문자를 구분해 `VITA`는 구면만, `Vita`는 난시용만 잡는다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "아큐브 비타® 한국 사용설명서",
          raw: "허가번호 표기 없음 (`수허`·`허가` 문자열 0건)",
          url: "https://acuvue.co.kr/files/patient-instruction-guides/Vita_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf",
          condition: "3쪽 전문 텍스트 추출 후 검색",
          linkNote: "이 IFU에는 허가번호가 없어 MFDS UDI가 유일한 근거다"
        }
      ]
    },
    {
      id: "uv",
      value: "UVB >99% / UVA >93% 차단",
      state: "verified",
      flag: "글로벌 공식 자료 · 한국 표기 미확인",
      sourceSummary: "ACUVUE 글로벌 기술 사양 원문값. 한국 페이지의 UV 수치는 이미지 전용이라 확인하지 못함",
      caution: "한국 공식 페이지의 기술·특징 영역이 이미지 전용이어서 한국 표기 수치를 추출하지 못했습니다. 아큐브 오아시스 원데이에서는 한국 표기(UVB 99% 이상 / UVA 90%)와 글로벌 표기(UVB >99.9% / UVA 96%)가 달랐으므로 이 제품에서도 지역 차이 가능성은 배제되지 않았습니다. MFDS 등록 모델명에도 with UV Blocker 같은 문구가 없어 UV 차단 기능 자체의 한국 원장 근거는 없습니다. 자외선 차단 콘택트렌즈는 눈과 주변을 완전히 덮지 못하므로 선글라스나 고글을 대신할 수 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "Blocks >99% of UVB & >93% of UVA",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "3쪽 ACUVUE® VITA® 열 · Approximate UV Blocking 행 · 각주 †: WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area.",
          linkNote: "표 제목이 Approximate UV Blocking이므로 근사값 표기다. 같은 쪽 ACUVUE® OASYS 열은 Blocks >99.9% of UVB & ~96% of UVA로 값과 부호가 모두 다르다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "아큐브 비타® 한국 공식 제품 페이지",
          raw: "3. UVA 316~380nm, UVB 280~315nm 범위에서 측정",
          url: "https://acuvue.co.kr/products/acuvue-vita",
          condition: "페이지 텍스트에 UV 차단 퍼센트 수치 0건 · 기술·특징 설명이 이미지(content-sm.webp, features-sm.webp) 전용이라 수치 추출 불가",
          linkNote: "각주와 자외선 차단 경고문은 있으나 차단율 수치가 없다. 한국 표기 수치는 미확인 상태이며 없음으로 단정하지 않는다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "ACUVUE VITA Brand Contact Lenses",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 16-568 호 모델명 원문 · with UV Blocker 문구 없음",
          linkNote: "모이스트(수허 06-1 호)의 모델명에는 Visibility Tinted with UV Blocker가 있었으나 이 제품 모델명에는 UV 관련 문구가 없다"
        }
      ]
    }
  ]
}
