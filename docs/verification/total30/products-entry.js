// 토탈30® (TOTAL30®) — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/total30/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
//
// 이 제품의 특수성:
//  (1) 한국 공식 자료에 수치가 하나도 없다(프리시전원과 같음). 물성 6개 필드의 flag 는 전부 "글로벌 공식 자료"다.
//      프리시전원과 달리 UV 등급·재질 계열조차 한국 자료에 없다.
//  (2) 교체주기만은 한국 공식 페이지가 원문을 직접 인쇄한다(`30일까지 착용가능한 일일착용 소프트콘택트렌즈`).
//  (3) 워터 그라디언트 계열이라 코어/표면 함수율을 합치지 않는다. 표면 함수율은 공식 문서가 두 갈래로 적는다.
//
// raw 표기 주의:
//  - 미국 전문가 페이지는 `154 @ ‑3.00D`, `6‑ct.` 처럼 비분리 하이픈(U+2011)을 쓴다. 인쇄된 그대로 보존했다.
//  - 미국 PI PDF는 텍스트 레이어에 fi 합자(U+FB01)를 담고 있어 추출 문자열이 `lehﬁlcon A`다. 인쇄된 그대로 보존했다.
{
  id: "total30",
  slug: "total30",
  aliases: ["토탈30", "TOTAL30", "lehfilcon A"],
  name: "토탈30® / TOTAL30®",
  selectorLabel: "토탈30",
  maker: "Alcon",
  distributor: "한국알콘(주)",
  type: "근시·원시용 투명 구면 · 월간(30일) 교체",
  packageSpecs: [
    { value: "BC 8.4", label: "Base Curve · mm" },
    { value: "DIA 14.2", label: "Diameter · mm" },
    { value: "코어 55%", label: "표면 90% 이상" },
    { value: "Dk/t 154", label: "-3.00D · 측정법 미표기" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.4 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 미국 전문가 사양·미국 Package Insert·미국 Fitting Guide · 2026.08.28 확인",
      caution: "한국 공식 페이지 2종 어디에도 파라미터 표가 없어 글로벌 공식 자료가 유일한 근거입니다. 미국 Package Insert가 별도로 적는 Base Curve 8.0~9.2 mm는 재질 수준의 허용 범위이며 실제 판매 렌즈의 값이 아닙니다. 난시용 TOTAL30 for Astigmatism은 8.6 mm로 다릅니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30® 미국 전문가용 공식 사양 (US-T30-2400157)",
          raw: "Base Curve (mm)\n8.4",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/total30/",
          condition: "TOTAL30® contact lenses parameters 표 · Base Curve (mm) 행",
          linkNote: "한국알콘 소비자 사이트와 MFDS 허가 원장에서 한국 유통 제품 연결 확인"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30™ (lehfilcon A) Package Insert (파일명 W900436303-0322 · 본문 인쇄 Part #: W900460742-0323 · Date: March 2023)",
          raw: "• Base Curve: 8.4 mm",
          url: "https://alcon.widen.net/content/i5swbxmkgn/original/W900436303-0322-I-LEFCONA-US.pdf",
          condition: "Available Lens Parameters · TOTAL30™ (lehﬁlcon A) spherical contact lenses 항목 · 난시용(toric)은 8.6 mm로 별개",
          linkNote: "전문가 페이지의 인서트 링크에서 도달한 알콘 공식 PDF · 다초점(Multifocal)은 구면과 같은 8.4 mm"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30™ Professional Fitting and Information Guide (본문 인쇄 W900460744-0323)",
          raw: "• Base Curve: 8.4 mm",
          url: "https://alcon.widen.net/content/pjzohc8stm/original/W900436305-0322-FG-LEFCONA-US.pdf",
          condition: "Available Lens Parameters · 구면(spherical) 항목 · Package Insert와 값이 완전히 동일",
          linkNote: "같은 문서 Lens Parameter Ranges의 8.0~9.2 mm는 재질 수준 허용 범위이며 판매 값이 아니다"
        }
      ]
    },
    {
      id: "dia",
      value: "14.2 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 미국 전문가 사양·미국 Package Insert·미국 Fitting Guide · 2026.08.28 확인",
      caution: "한국 공식 자료에 직경 표기가 없어 글로벌 공식 자료가 유일한 근거입니다. Package Insert의 Diameter 13.0~15.0 mm는 재질 수준의 허용 범위이며 실제 판매 렌즈의 값이 아닙니다. 난시용 TOTAL30 for Astigmatism은 14.5 mm로 다릅니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30® 미국 전문가용 공식 사양 (US-T30-2400157)",
          raw: "Diameter (mm)\n14.2",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/total30/",
          condition: "TOTAL30® contact lenses parameters 표 · Diameter (mm) 행",
          linkNote: "국제 전문가 페이지의 파라미터 이미지도 DIAMETER (mm) 14.2로 같다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30™ (lehfilcon A) Package Insert (파일명 W900436303-0322 · 본문 인쇄 Part #: W900460742-0323 · Date: March 2023)",
          raw: "• Chord Diameter: 14.2 mm",
          url: "https://alcon.widen.net/content/i5swbxmkgn/original/W900436303-0322-I-LEFCONA-US.pdf",
          condition: "Available Lens Parameters · 구면(spherical) 항목 · 문서는 Diameter가 아니라 Chord Diameter로 적음",
          linkNote: "같은 문서의 난시용 항목은 Chord Diameter: 14.5 mm"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30™ Professional Fitting and Information Guide (본문 인쇄 W900460744-0323)",
          raw: "• Chord Diameter:  14.2 mm",
          url: "https://alcon.widen.net/content/pjzohc8stm/original/W900436305-0322-FG-LEFCONA-US.pdf",
          condition: "Available Lens Parameters · 구면(spherical) 항목",
          linkNote: "Package Insert와 값이 완전히 동일"
        }
      ]
    },
    {
      id: "water",
      value: "코어 55% / 표면 90% 이상",
      state: "verified",
      flag: "측정 위치별 별도 값 · 글로벌 공식 자료",
      sourceSummary: "코어와 표면 함수율을 하나의 값으로 합치지 않음 · 2026.08.28 확인",
      caution: "코어 함수율과 표면 함수율은 측정 위치가 다른 별개의 값이며 하나로 합치지 않습니다. 표면 함수율은 공식 자료에 따라 90% 이상(미국 Package Insert·Fitting Guide), 100%(미국 전문가 사양표), ~100%(국제 전문가 사양 이미지), nearly 100%(미국 전문가 페이지 본문)로 서로 다르게 적힙니다. 표시값은 규제 문서의 보수적 표기를 따랐습니다. 같은 55%도 전문가 사양표는 Core Water Content(코어)라고 부르고 Package Insert는 Water Content: 55% by weight in normal saline(렌즈 재질 전체)이라고 부릅니다. 한국 공식 자료에는 함수율 표기가 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30® 미국 전문가용 공식 사양 (US-T30-2400157)",
          raw: "Core Water Content\n55%",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/total30/",
          condition: "TOTAL30® contact lenses parameters 표 · Core Water Content 행 · 렌즈 코어",
          linkNote: "표면 함수율과 합치지 않음"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30™ Professional Fitting and Information Guide (본문 인쇄 W900460744-0323)",
          raw: "• Surface Water Content: ≥ 90%",
          url: "https://alcon.widen.net/content/pjzohc8stm/original/W900436305-0322-FG-LEFCONA-US.pdf",
          condition: "Lens Properties 절 · 같은 문서 본문은 The core lens material containing 55% water transitions through a water gradient to a hydrogel surface layer that exceeds 90% water. 및 Over 90% water at the surface of the lens to mimic the water content of the cornea. 로 적음",
          linkNote: "미국 Package Insert의 Lens Properties도 같은 값(Surface Water Content: ≥ 90%)을 적는다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30® 미국 전문가용 공식 사양 (US-T30-2400157)",
          raw: "Surface Water Content\n100%",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/total30/",
          condition: "같은 표의 Surface Water Content 행 · 같은 페이지 본문은 contact lenses feature a gradual transition in water content, from 55% at the core to nearly 100% water at the outermost surface 로 적고 각주에 *Based on in vitro measurements of unworn lenses. 를 붙임",
          linkNote: "규제 문서(≥ 90%)와 인쇄된 숫자가 다르다. 합치지 않고 병기함. 국제 전문가 사양 이미지는 ~100%로 적는다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30™ (lehfilcon A) Package Insert (파일명 W900436303-0322 · 본문 인쇄 Part #: W900460742-0323 · Date: March 2023)",
          raw: "• Water Content: 55% by weight in normal saline",
          url: "https://alcon.widen.net/content/i5swbxmkgn/original/W900436303-0322-I-LEFCONA-US.pdf",
          condition: "LENS PROPERTIES 절 · 측정 위치를 코어로 한정하지 않고 정상 식염수 중 중량비로 표기 · 같은 문서 PRODUCT DESCRIPTION은 a lens material that is approximately 55% water and 45% lehﬁlcon A 로 적음",
          linkNote: "전문가 사양표가 같은 55%를 코어 함수율로 부르는 것과 라벨이 다름"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "토탈30 한국 공식 제품 페이지",
          raw: "함수율 표기 없음 (함수율·수분함유 문자열 0건)",
          url: "https://www.myalcon.com/kr/contact-lenses/monthly/total30/",
          condition: "한국 공식 페이지 2종(제품 페이지·한달용 카테고리) HTML 태그 제거 후 전문 검색 · 55%·90%·100% 숫자도 0건",
          linkNote: "한국 자료에 값이 없다는 사실 자체를 기록. 값이 없음을 함수율이 없다는 뜻으로 해석하지 않음"
        }
      ]
    },
    {
      id: "material",
      value: "lehfilcon A",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 미국 전문가 사양·미국 Package Insert · 한국 자료에는 재질 표기가 전혀 없음",
      caution: "한국 공식 페이지에는 lehfilcon A라는 재질명은 물론 실리콘 하이드로겔이라는 재질 계열 표기조차 없습니다. MFDS 허가 원장의 모델명·업체 제품 명칭에도 재질명이 없고, 재질명으로 원장을 조회하면 0건입니다. 재질명과 재질 계열의 근거는 글로벌 공식 자료뿐입니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30® 미국 전문가용 공식 사양 (US-T30-2400157)",
          raw: "Material\nlehfilcon A",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/total30/",
          condition: "TOTAL30® contact lenses parameters 표 · Material 행",
          linkNote: "국제 전문가 페이지의 파라미터 이미지도 MATERIAL lehfilcon A로 같다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30™ (lehfilcon A) Package Insert (파일명 W900436303-0322 · 본문 인쇄 Part #: W900460742-0323 · Date: March 2023)",
          raw: "made of a lens material that is approximately 55% water and\n45% lehﬁlcon A, a silicone containing hydrogel",
          url: "https://alcon.widen.net/content/i5swbxmkgn/original/W900436303-0322-I-LEFCONA-US.pdf",
          condition: "PRODUCT DESCRIPTION 절 · 실리콘 하이드로겔 계열임을 문서가 직접 명시 · PDF 텍스트 레이어의 fi 합자(U+FB01)로 인해 추출 문자열은 lehﬁlcon A",
          linkNote: "같은 문서에 색소 Reactive Blue 247과 benzotriazole 계열 UV·UV-Vis 흡수 단량체 표기 병기"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "토탈30 한국 공식 제품 페이지·한달용 카테고리 페이지",
          raw: "재질 표기 없음 (lehfilcon·실리콘·하이드로겔 문자열 0건)",
          url: "https://www.myalcon.com/kr/contact-lenses/monthly/total30/",
          condition: "두 페이지 HTML 태그 제거 후 전문 검색 · 프리시전원 한국 페이지가 실리콘 하이드로겔이라는 계열까지는 밝혔던 것과 대조된다",
          linkNote: "한국 자료로는 재질 계열조차 확인되지 않음"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "TOTAL30",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 22-19 호 · 모델명 원문 · 업체 제품 명칭은 워터렌즈 한달용, Celligent™",
          linkNote: "이 원장에는 재질명이 들어 있지 않다. modelnm=Lehfilcon · lehfilcon · LEHFILCON 조회 모두 0건"
        }
      ]
    },
    {
      id: "dkt",
      value: "154",
      state: "verified",
      flag: "글로벌 공식 자료 · 측정법 미표기",
      sourceSummary: "Alcon 미국 전문가 사양 Dk/t 154 @ -3.00D · 2026.08.28 확인",
      caution: "-3.00D 기준 값입니다. 제조사가 Dk/t에 대해 측정법·경계 보정 여부·측정 온도를 밝히지 않았으므로, 시험 조건이 표기된 다른 제품의 Dk/t와 숫자만 직접 비교하지 않습니다. 같은 제조사의 Package Insert와 Fitting Guide가 밝힌 35℃·분극법 조건은 Dk/t(산소 전달률)가 아니라 Dk(산소 투과성)의 조건이며, 두 값을 섞거나 두께로 환산해 역산하지 않았습니다. Package Insert와 Fitting Guide에는 Dk/t 값 자체가 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30® 미국 전문가용 공식 사양 (US-T30-2400157)",
          raw: "Dk/t\n154 @ ‑3.00D",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/total30/",
          condition: "TOTAL30® contact lenses parameters 표 · Dk/t 행 · 표기된 조건은 시험도수 -3.00D뿐이며 측정법·보정·온도 표기 없음 · 원문은 비분리 하이픈(U+2011) 사용 · 같은 페이지 본문 각주는 **Dk/t @-3.00D = 154 로 적음",
          linkNote: "같은 표의 중심두께 0.08 (@ -3.00D, mm)와 같은 도수 조건. 국제 전문가 사양 이미지도 Dk/t 154 @ -3.00D로 같다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30™ (lehfilcon A) Package Insert (파일명 W900436303-0322 · 본문 인쇄 Part #: W900460742-0323 · Date: March 2023)",
          raw: "• Oxygen Permeability (Dk): 123 x 10-11 (cm2/sec) (ml O2 /ml x mm\nHg), measured at 35 °C (normalized Dk,\nPolarographic method)",
          url: "https://alcon.widen.net/content/i5swbxmkgn/original/W900436303-0322-I-LEFCONA-US.pdf",
          condition: "LENS PROPERTIES 절 · 이 값은 Dk/t가 아니라 재질의 Dk이며 조건은 35℃ 분극법 정규화 Dk · 문서에 Dk/t 값은 없다(154 문자열 0회)",
          linkNote: "Fitting Guide는 같은 값의 조건을 (Polarographic method)로만 적어 normalized Dk 표기가 빠져 있다. 두 표기를 합치지 않음"
        }
      ]
    },
    {
      id: "thickness",
      value: "0.08 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 미국 전문가 사양·미국 Package Insert·미국 Fitting Guide · 2026.08.28 확인",
      caution: "-3.00D 기준 중심두께입니다. 제조사가 도수에 따라 달라진다고 명시합니다. 난시용 TOTAL30 for Astigmatism은 0.10 mm로 다릅니다. 바이오피니티의 중심두께 0.08 mm는 2026-08-28 감사에서 공식 출처를 찾지 못해 철회된 값이므로, 이 값과 같은 근거를 가진 것으로 읽지 않습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30® 미국 전문가용 공식 사양 (US-T30-2400157)",
          raw: "Center Thickness (@ -3.00D, mm)\n0.08",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/total30/",
          condition: "TOTAL30® contact lenses parameters 표 · Center Thickness (@ -3.00D, mm) 행",
          linkNote: "같은 표의 Dk/t 154 @ -3.00D와 같은 도수 조건"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30™ (lehfilcon A) Package Insert (파일명 W900436303-0322 · 본문 인쇄 Part #: W900460742-0323 · Date: March 2023)",
          raw: "• Center Thickness: 0.08 mm @ -3.00 D (varies with power)",
          url: "https://alcon.widen.net/content/i5swbxmkgn/original/W900436303-0322-I-LEFCONA-US.pdf",
          condition: "Available Lens Parameters · 구면(spherical) 항목",
          linkNote: "같은 문서의 난시용 항목은 0.10 mm @ -3.00 D · 다초점은 구면과 같은 0.08 mm"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30™ Professional Fitting and Information Guide (본문 인쇄 W900460744-0323)",
          raw: "• Center Thickness:  0.08 mm @ -3.00 D (varies with power)",
          url: "https://alcon.widen.net/content/pjzohc8stm/original/W900436305-0322-FG-LEFCONA-US.pdf",
          condition: "Available Lens Parameters · 구면(spherical) 항목 · Package Insert와 값이 완전히 동일",
          linkNote: "Patient Information Booklet에는 중심두께 표기가 없다"
        }
      ]
    },
    {
      id: "replacement",
      value: "30일",
      state: "verified",
      flag: "한국 공식 원문 확인",
      sourceSummary: "한국 공식 제품 페이지의 30일까지 착용가능 표기 · 글로벌 공식 자료의 monthly 표기 · 2026.08.28 확인",
      caution: "30일은 교체주기입니다. 착용방식은 별개이며 안경사 또는 안과 전문인의 판단이 필요합니다. 한국 페이지의 일일착용, MFDS 소분류의 매일착용소프트콘택트렌즈, 제조사 사양표의 Daily wear only는 모두 교체주기가 아니라 착용방식(자는 동안 착용하지 않는 낮 시간 착용) 표기입니다. 제조사 Package Insert는 수면 중 착용의 안전성을 보인 연구가 수행되지 않았으므로 잘 때는 렌즈를 제거하도록 안내한다고 적습니다. 어떤 문구도 수면착용 허용으로 해석하지 않습니다. 알콘의 미국 전문가용 사양표에는 교체주기 행 자체가 없습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "토탈30 한국 공식 제품 페이지",
          raw: "이 제품은 ‘의료기기(매일착용소프트콘택트렌즈, 워터렌즈 한달용 : 난시/안과적 질환이 없는 눈의 근시 혹은 원시 시력 교정에 사용하는 30일까지 착용가능한 일일착용 소프트콘택트렌즈)’이며,",
          url: "https://www.myalcon.com/kr/contact-lenses/monthly/total30/",
          condition: "페이지 하단 의료기기 표시 문구 · 30일까지(사용기간)와 일일착용(착용방식)을 한 문장에서 구분해 적는다 · 같은 줄의 의료기기 광고심의필 62026-I10-11-1260 은 광고 사전심의 번호이며 허가번호가 아니다",
          linkNote: "한국 공식 자료가 30일을 직접 인쇄하는 유일한 문장"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "알콘 코리아 한달용 콘택트렌즈 카테고리 페이지",
          raw: "한달용 콘택트렌즈는 최대 한 달(30일)동안 재사용할 수 있는 콘택트렌즈입니다. 사용 기간이 지나면 새 렌즈로 반드시 교체해야 합니다.",
          url: "https://www.myalcon.com/kr/contact-lenses/monthly/",
          condition: "FAQ 한달용 콘택트렌즈는 얼마나 오래 착용할 수 있나요? 항목 · 이 카테고리에 워터렌즈 한달용이 등재돼 있다 · 제품 페이지의 같은 FAQ는 (30일) 없이 최대 한 달동안으로만 적는다",
          linkNote: "한국 페이지는 한달용·한 달·한 달(30일)·30일까지를 섞어 쓴다. 표기를 합치지 않고 원문을 그대로 남김"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "워터렌즈 한달용, Celligent™",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 22-19 호 · 업체 제품 명칭(prdtNmCn) 원문 · 같은 행의 소분류 품목 명칭은 매일착용소프트콘택트렌즈로 착용방식 분류이지 교체주기가 아니다",
          linkNote: "한글 판매명 워터렌즈 한달용이 허가 원장에 직접 등록돼 있어 한국 페이지 제품명과 원장이 같은 문자열로 연결된다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30™ (lehfilcon A) Package Insert (파일명 W900436303-0322 · 본문 인쇄 Part #: W900460742-0323 · Date: March 2023)",
          raw: "Lenses should be discarded and replaced with a new pair each month, or more\noften, if recommended by the eye care professional. Longer replacement periods\nhave not been studied and are not recommended by Alcon.",
          url: "https://alcon.widen.net/content/i5swbxmkgn/original/W900436303-0322-I-LEFCONA-US.pdf",
          condition: "Lens Replacement 절 · 같은 문서는 The lenses are to be prescribed for daily wear 로 착용방식을 별도 서술하고, Studies have not been conducted to show that ... contact lenses are safe to wear during sleep, therefore patients should be advised to remove their lenses while sleeping. 로 수면착용을 명확히 배제한다",
          linkNote: "글로벌 문서는 30일이 아니라 each month(한 달)로 적는다. 한국 표기와 글로벌 표기를 하나로 합치지 않음"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30® 국제 전문가 페이지 (UKIE-T30-2500001)",
          raw: "Replacement Frequency: monthly contact lenses for daily wear",
          url: "https://www.myalcon.com/international/professional/contact-lenses/monthly/total30/",
          condition: "제품 헤더 · 같은 줄에 Indications: myopia, hyperopia 병기 · 같은 페이지 파라미터 이미지 각주는 TOTAL30 are a monthly lens for daily wear. 로 교체주기와 착용방식을 한 문장에서 구분한다",
          linkNote: "이 페이지의 판매 국가 목록(Asia Pacific: Malaysia)에는 대한민국이 없다. 한국 유통 근거는 한국알콘 사이트와 MFDS 원장이며 목록의 부재를 미유통으로 해석하지 않았다"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 22-19 호",
      state: "verified",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 136건 전수 대조 · 2026.08.28 확인",
      caution: "구면·난시용·다초점의 허가번호가 모두 다릅니다. 이 번호는 구면 제품의 번호이며 워터렌즈 한달용 난시(TOTAL30 for Astigmatism)는 수허 22-101 호, 워터렌즈 한달용 멀티포컬(TOTAL30 Multifocal)은 수허 24-4 호로 별개입니다. 같은 워터 그라디언트 계열인 데일리스 토탈원은 수허 13-112 호로 또 별개입니다. 한국 페이지의 의료기기 광고심의필 62026-I10-11-1260 (유효기간 : 29.04.09까지) | KR-T30-2600008 은 광고 사전심의 번호이며 허가번호가 아닙니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 22-19 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "itemPermitNo=수허 22-19 호 단독 조회 136건이 모두 단일 신원(한국알콘(주) · 수입업 · 매일착용소프트콘택트렌즈 · 2등급 · 모델명 TOTAL30 · 업체 제품 명칭 워터렌즈 한달용, Celligent™)으로 연결 · distinct UDI-DI 136건 · 포장내수량 1이 68건, 6이 68건 · 코드체계 GS1 · 요양급여 대상 치료재료 여부 N",
          linkNote: "bplcNm=한국알콘 · modelnm=TOTAL 16,222건 전수 집계에서 난시용 수허 22-101 호(10,980건) · 다초점 수허 24-4 호(390건) · DAILIES TOTAL1 난시용 수허 20-63 호(4,716건)와 분리 확인. 구면은 136건뿐이다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회 — 모델명 표기 순회 기록",
          raw: "TOTAL30",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "모델명 검색은 대소문자를 구분한다. 구면 등록 모델명은 전부 대문자 TOTAL30이며 ™가 없다. Total30 · TOTAL 30 · Total 30 · total30 · 토탈30 조회는 모두 0건",
          linkNote: "modelnm=TOTAL30 조회 11,506건을 구면 건수로 읽으면 안 된다. 난시용 모델명 TOTAL30™ for Astigmatism의 부분 문자열이기도 해서 11,506 = 난시용 10,980 + 다초점 390 + 구면 136이다. 반대로 ™를 붙인 TOTAL30™ 11,370건에는 구면이 한 건도 없다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "토탈30 한국 공식 제품 페이지·한달용 카테고리 페이지",
          raw: "허가번호 표기 없음 (수허·허가번호 문자열 0건)",
          url: "https://www.myalcon.com/kr/contact-lenses/monthly/total30/",
          condition: "두 페이지 HTML 태그 제거 후 전문 검색 · 온라인 공개 한국어 IFU도 찾지 못함(알콘 공식 eIFU 포털은 authenticationMechanisms USERNAME_PASSWORD로 로그인 필요) · total.myalcon.com/kr 은 데일리스 토탈원 전용 사이트이고 토탈30 제품 페이지는 404",
          linkNote: "이 제품은 한국 IFU 경로가 없어 MFDS UDI가 허가번호의 유일한 근거"
        }
      ]
    },
    {
      id: "uv",
      value: "자외선 차단 1등급 (Class 1)",
      state: "verified",
      flag: "글로벌 공식 자료 · 한국 자료에 UV 표기 없음",
      sourceSummary: "미국 전문가 사양의 Class 1 UV blocking · 미국 Package Insert의 -3.00D 측정값 · 2026.08.28 확인",
      caution: "한국 공식 페이지에는 자외선·UV 표기가 아예 없습니다(프리시전원 한국 페이지가 자외선 차단 1등급이라고 적었던 것과 다릅니다). 등급 표기도 지역별로 다릅니다. 미국 전문가 사양은 Class 1 UV blocking, 국제 전문가 사양은 Class I UV absorption으로 적습니다. Package Insert의 UVA 93% · UVB 99%는 -3.00D 렌즈의 측정값이고, 같은 문서의 전 도수 범위 투과율 표기(UVB 1% 미만 · UVA 10% 미만)와도 성격이 다릅니다. 등급·측정값·투과율을 하나로 합치지 않습니다. 자외선 차단 콘택트렌즈는 눈과 주변을 완전히 덮지 못하므로 선글라스나 고글을 대신할 수 없습니다. 이 렌즈가 함께 표기하는 청색광(HEVL) 감소는 자외선 차단과 다른 항목이며, 제조사 스스로 450 nm 미만 청색광 34% 감소에 입증된 임상적 이익이 없다고 각주에 밝힙니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30® 미국 전문가용 공식 사양 (US-T30-2400157)",
          raw: "Light Properties\nClass 1 UV blocking* and Blue‑Violet Light Filtration**",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/total30/",
          condition: "TOTAL30® contact lenses parameters 표 · Light Properties 행 · 각주 *: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear, such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area. 각주 **: There is no demonstrated clinical benefit to a 34% reduction in blue-violet HEV light at wavelengths below 450nm.",
          linkNote: "차단율 퍼센트가 아니라 등급 표기다. 국제 전문가 사양 이미지는 같은 항목을 Class I UV absorption* and HEVL filtration**로 적는다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30™ (lehfilcon A) Package Insert (파일명 W900436303-0322 · 본문 인쇄 Part #: W900460742-0323 · Date: March 2023)",
          raw: "The thinnest lehﬁlcon A lenses (-3.00 diopters)\nblock 93% UVA radiation and 99% UVB radiation. The degree of UV radiation\nblockage will increase for thicker lenses.",
          url: "https://alcon.widen.net/content/i5swbxmkgn/original/W900436303-0322-I-LEFCONA-US.pdf",
          condition: "ACTIONS 절 · -3.00D 렌즈 기준 측정값 · 같은 문서 PRODUCT DESCRIPTION은 전 도수 범위에서 UVB 280~315 nm 투과 1% 미만, UVA 315~380 nm 투과 10% 미만으로 별도 표기 · 같은 절의 경고문은 WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing goggles or sunglasses ...",
          linkNote: "등급 표기(Class 1)와 다른 성격의 값이므로 합치지 않음"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "TOTAL30™ Professional Fitting and Information Guide (본문 인쇄 W900460744-0323)",
          raw: "• UV Transmittance:  tUVB < 1.0 % (average percent\ntransmittance over 280 nm to\n315 nm)\ntUVA < 10.0 % (average percent\ntransmittance over 315 nm to\n380 nm)",
          url: "https://alcon.widen.net/content/pjzohc8stm/original/W900436305-0322-FG-LEFCONA-US.pdf",
          condition: "Lens Properties 절 · 차단율이 아니라 투과율 표기이며 평균 투과율 기준이다",
          linkNote: "차단율(93%/99%)과 투과율(1% 미만/10% 미만)은 서로 다른 방향의 지표다. 같은 숫자로 환산해 적지 않았다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "토탈30 한국 공식 제품 페이지·한달용 카테고리 페이지",
          raw: "자외선 표기 없음 (자외선·UV 문자열 0건)",
          url: "https://www.myalcon.com/kr/contact-lenses/monthly/total30/",
          condition: "두 페이지 HTML 태그 제거 후 전문 검색 · 등급·차단율·청색광 표기 모두 0건",
          linkNote: "한국 자료에 UV 표기가 없다는 사실 자체를 기록. 없음을 UV 차단이 없다는 뜻으로 해석하지 않음"
        }
      ]
    }
  ]
}
