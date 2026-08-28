// 프리시전원® (PRECISION1®) — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/precision1/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
//
// 이 제품의 특수성: 한국 공식 자료에 수치가 하나도 없다.
// 물성값(bc·dia·water·material·dkt·thickness)의 flag 는 전부 "글로벌 공식 자료"다.
{
  id: "precision1",
  slug: "precision1",
  aliases: ["프리시전원", "PRECISION1", "verofilcon A"],
  name: "프리시전원® / PRECISION1®",
  selectorLabel: "프리시전원",
  maker: "Alcon",
  distributor: "한국알콘(주)",
  type: "근시·원시용 투명 구면 · 1일 교체",
  packageSpecs: [
    { value: "BC 8.3", label: "Base Curve · mm" },
    { value: "DIA 14.2", label: "Diameter · mm" },
    { value: "코어 51%", label: "표면 80% 초과" },
    { value: "Dk/t 100", label: "-3.00D · 측정법 미표기" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.3 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 글로벌 전문가 사양·미국 Package Insert · 2026.08.28 확인",
      caution: "한국 공식 페이지 4종 어디에도 파라미터 표가 없어 글로벌 공식 자료가 유일한 근거입니다. 미국 Package Insert가 별도로 적는 Base Curve Range 8.0~9.2 mm는 재질 수준의 허용 범위이며 실제 판매 렌즈의 값이 아닙니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1® 전문가용 공식 사양 (US-PR1-2200002)",
          raw: "BASE CURVE (mm)\n8.3",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/precision1/",
          condition: "Technical Specifications 표 · BASE CURVE (mm) 행 · 같은 표에 8.3 mm 선택 근거(138 eyes, n=69, 각막 곡률 36.75D~48.25D) 설명 병기",
          linkNote: "한국알콘 소비자 사이트와 MFDS 허가 원장에서 한국 유통 제품 연결 확인"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1™ (verofilcon A) Package Insert (W900331896 · effective as of March 2021)",
          raw: "• Base Curve: 8.3 mm",
          url: "https://alcon.widen.net/content/6h4uwcilld/original/W900331896-I-VEROFA-PREC1-US.pdf",
          condition: "LENS PARAMETERS AVAILABLE · PRECISION1™ (verofilcon A) contact lenses (spherical) 항목 · 난시용(toric)은 8.5 mm로 별개",
          linkNote: "전문가 페이지의 Product Inserts 링크에서 도달한 알콘 공식 PDF"
        }
      ]
    },
    {
      id: "dia",
      value: "14.2 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 글로벌 전문가 사양·미국 Package Insert · 2026.08.28 확인",
      caution: "한국 공식 자료에 직경 표기가 없어 글로벌 공식 자료가 유일한 근거입니다. Package Insert의 Diameter Range 13.0~15.0 mm는 재질 수준의 허용 범위이며 실제 판매 렌즈의 값이 아닙니다. 난시용 프리시전 원 난시는 14.5 mm로 다릅니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1® 전문가용 공식 사양 (US-PR1-2200002)",
          raw: "DIAMETER (mm)\n14.2",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/precision1/",
          condition: "Technical Specifications 표 · DIAMETER (mm) 행",
          linkNote: "한국알콘 소비자 사이트와 MFDS 허가 원장에서 한국 유통 제품 연결 확인"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1™ (verofilcon A) Package Insert (W900331896 · effective as of March 2021)",
          raw: "• Chord Diameter: 14.2 mm",
          url: "https://alcon.widen.net/content/6h4uwcilld/original/W900331896-I-VEROFA-PREC1-US.pdf",
          condition: "LENS PARAMETERS AVAILABLE · 구면(spherical) 항목 · 문서는 Diameter가 아니라 Chord Diameter로 적음",
          linkNote: "같은 문서의 난시용 항목은 Chord Diameter: 14.5 mm"
        }
      ]
    },
    {
      id: "water",
      value: "코어 51% / 표면 80% 초과",
      state: "verified",
      flag: "측정 위치별 별도 값 · 글로벌 공식 자료",
      sourceSummary: "코어와 표면 함수율을 하나의 값으로 합치지 않음 · 2026.08.28 확인",
      caution: "코어 함수율과 표면 함수율은 측정 위치가 다른 별개의 값이며 하나로 합치지 않습니다. 같은 51%를 전문가 사양표는 CORE WATER CONTENT(코어)라고 부르고 미국 Package Insert는 Water Content: 51% by weight in normal saline(렌즈 재질 전체)이라고 부릅니다. 숫자는 같지만 무엇을 잰 값인지에 대한 설명이 다릅니다. 한국 공식 자료에는 함수율 표기가 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1® 전문가용 공식 사양 (US-PR1-2200002)",
          raw: "CORE WATER CONTENT\n51%",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/precision1/",
          condition: "Technical Specifications 표 · CORE WATER CONTENT 행 · 렌즈 코어",
          linkNote: "표면 함수율과 합치지 않음"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1® 전문가용 공식 사양 (US-PR1-2200002)",
          raw: "SMARTSURFACE® TECHNOLOGY\nSURFACE WATER CONTENT\n>80%",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/precision1/",
          condition: "Technical Specifications 표 · SMARTSURFACE® TECHNOLOGY / SURFACE WATER CONTENT 행 · 렌즈 표면",
          linkNote: "코어값과 합치지 않음. 데일리스 토탈원과 같은 워터 그라디언트 계열의 표기 방식"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1™ (verofilcon A) Package Insert (W900331896 · effective as of March 2021)",
          raw: "Water Content: 51% by weight in normal saline",
          url: "https://alcon.widen.net/content/6h4uwcilld/original/W900331896-I-VEROFA-PREC1-US.pdf",
          condition: "Lens Properties 절 · 측정 위치를 코어로 한정하지 않고 정상 식염수 중 중량비로 표기 · 같은 문서 PRODUCT DESCRIPTION은 a lens material that is 51% water and 49% verofilcon A로 적음",
          linkNote: "전문가 사양표가 같은 51%를 코어 함수율로 부르는 것과 라벨이 다름"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "프리시전원 한국 브랜드 사이트 제품 소개",
          raw: "함수율 표기 없음 (함수율·수분함유 문자열 0건)",
          url: "https://precision.myalcon.com/kr/about-precision1/",
          condition: "한국 공식 페이지 4종(원데이 카테고리·브랜드 루트·제품 소개·사용 안내) HTML 태그 제거 후 전문 검색",
          linkNote: "한국 자료에 값이 없다는 사실 자체를 기록. 값이 없음을 함수율이 없다는 뜻으로 해석하지 않음"
        }
      ]
    },
    {
      id: "material",
      value: "verofilcon A",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 글로벌 전문가 사양·미국 Package Insert · 한국 자료는 재질 계열까지만 표기",
      caution: "한국 공식 페이지는 실리콘 하이드로겔이라는 재질 계열까지만 밝히고 verofilcon A라는 재질명은 적지 않습니다. MFDS 허가 원장의 모델명·업체 제품 명칭에도 재질명이 없습니다. 재질명의 근거는 글로벌 공식 자료뿐입니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1® 전문가용 공식 사양 (US-PR1-2200002)",
          raw: "MATERIAL\nverofilcon A",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/precision1/",
          condition: "Technical Specifications 표 · MATERIAL 행",
          linkNote: "한국알콘 소비자 사이트와 MFDS 허가 원장에서 한국 유통 제품 연결 확인"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1™ (verofilcon A) Package Insert (W900331896 · effective as of March 2021)",
          raw: "made from a lens material that is 51% water and 49% verofilcon A, a silicone containing hydrogel",
          url: "https://alcon.widen.net/content/6h4uwcilld/original/W900331896-I-VEROFA-PREC1-US.pdf",
          condition: "PRODUCT DESCRIPTION 절 · 실리콘 하이드로겔 계열임을 문서가 직접 명시",
          linkNote: "같은 문서에 색소 Reactive Blue 247과 benzotriazole 계열 UV 흡수 단량체 표기 병기"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "프리시전원 한국 브랜드 사이트",
          raw: "실리콘 하이드로겔 재질에 수분표면 기술 (SMARTSURFACE™)까지 결합되어 긴 하루도 촉촉한 프리시전 원을 만나봐!",
          url: "https://precision.myalcon.com/kr/",
          condition: "한국 페이지가 밝히는 것은 재질 계열까지이며 verofilcon 문자열은 0건",
          linkNote: "재질 계열은 한국 자료로 확인되고 재질명은 글로벌 자료로만 확인됨"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "Precision1",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 19-380 호 · 모델명 원문 · 업체 제품 명칭은 Smart surface",
          linkNote: "아큐브 모이스트와 달리 이 원장에는 재질명이 들어 있지 않다. modelnm=Verofilcon 및 verofilcon 조회 모두 0건"
        }
      ]
    },
    {
      id: "dkt",
      value: "100",
      state: "verified",
      flag: "글로벌 공식 자료 · 측정법 미표기",
      sourceSummary: "Alcon 글로벌 전문가 사양 Dk/t 100 @ −3.00D · 2026.08.28 확인",
      caution: "-3.00D 기준 값입니다. 제조사가 Dk/t에 대해 측정법·경계 보정 여부·측정 온도를 밝히지 않았으므로, 시험 조건이 표기된 다른 제품의 Dk/t와 숫자만 직접 비교하지 않습니다. 같은 제조사의 미국 Package Insert가 밝힌 35℃·쿨로메트릭 조건은 Dk/t(산소 전달률)가 아니라 Dk(산소 투과성)의 조건이며, 두 값을 섞거나 두께로 환산해 역산하지 않았습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1® 전문가용 공식 사양 (US-PR1-2200002)",
          raw: "DK/T\n100 @ −3.00D",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/precision1/",
          condition: "Technical Specifications 표 · DK/T 행 · 표기된 조건은 시험도수 −3.00D뿐이며 측정법·보정·온도 표기 없음",
          linkNote: "같은 표의 중심두께 0.09 mm (-3.00D)와 같은 도수 조건"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1™ (verofilcon A) Package Insert (W900331896 · effective as of March 2021)",
          raw: "Oxygen Permeability (Dk): 90  x 10 -11 (cm2/sec) (ml O2 /ml x mm Hg),\n  measured at 35 ˚C (intrinsic Dk-Coulometric\n  method)",
          url: "https://alcon.widen.net/content/6h4uwcilld/original/W900331896-I-VEROFA-PREC1-US.pdf",
          condition: "Lens Properties 절 · 이 값은 Dk/t가 아니라 재질의 Dk이며 조건은 35℃ 쿨로메트릭 고유 Dk · 문서에 Dk/t 값은 없음",
          linkNote: "Dk와 Dk/t를 구분해 기록. 두 값 사이 환산은 하지 않음"
        }
      ]
    },
    {
      id: "thickness",
      value: "0.09 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 글로벌 전문가 사양·미국 Package Insert · 2026.08.28 확인",
      caution: "-3.00D 기준 중심두께입니다. 제조사가 도수에 따라 달라진다고 명시합니다. 난시용 프리시전 원 난시는 0.10 mm로 다릅니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1® 전문가용 공식 사양 (US-PR1-2200002)",
          raw: "CENTER THICKNESS (-3.00D, mm)\n0.09",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/precision1/",
          condition: "Technical Specifications 표 · CENTER THICKNESS (-3.00D, mm) 행",
          linkNote: "같은 표의 Dk/t 100 @ −3.00D와 같은 도수 조건"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1™ (verofilcon A) Package Insert (W900331896 · effective as of March 2021)",
          raw: "• Center Thickness: 0.09 mm @ -3.00 D (varies with power)",
          url: "https://alcon.widen.net/content/6h4uwcilld/original/W900331896-I-VEROFA-PREC1-US.pdf",
          condition: "LENS PARAMETERS AVAILABLE · 구면(spherical) 항목 · 같은 문서 투과율 곡선 각주는 the thinnest marketed lens (-3.00 D, 0.090 mm center thickness)로 적음",
          linkNote: "같은 문서의 난시용 항목은 0.10 mm @ -3.00 D"
        }
      ]
    },
    {
      id: "replacement",
      value: "1일",
      state: "verified",
      sourceSummary: "한국알콘 원데이 카테고리 등재 · MFDS 소분류 매일착용소프트콘택트렌즈 · 글로벌 공식 자료",
      caution: "1일은 교체주기입니다. 착용방식은 별개이며 안경사 또는 안과 전문인의 판단이 필요합니다. 제조사 Package Insert는 수면 중 착용의 안전성을 보인 연구가 수행되지 않았으므로 잘 때는 렌즈를 제거하도록 안내한다고 적습니다. 알콘의 전문가용 사양표에는 교체주기 행 자체가 없습니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "매일착용소프트콘택트렌즈",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 19-380 호 · 소분류 품목 명칭 원문 · 등급 2",
          linkNote: "한국 허가 원장이 매일착용 품목으로 등록. 같은 원장에서 PRECISION7은 연속착용 소프트 콘택트렌즈·3등급으로 별개"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "프리시전원 한국 브랜드 사이트 제품 소개",
          raw: "프리시전 원 원데이 콘택트렌즈 수분표면 기술인 SMARTSURFACE™ Technology(스마트 서페이스 테크놀로지)로 긴 하루도 촉촉하고 편안하게!",
          url: "https://precision.myalcon.com/kr/about-precision1/",
          condition: "한국 페이지가 제품을 원데이 콘택트렌즈로 표기 · 한국알콘 원데이 카테고리 페이지에도 프리시전 원이 등재",
          linkNote: "한국 공식 URL https://www.myalcon.com/kr/contact-lenses/daily/precision1/ 은 이 주소로 리다이렉트됨"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1™ (verofilcon A) Package Insert (W900331896 · effective as of March 2021)",
          raw: "Verofilcon A contact lenses are intended to be worn once (daily disposable wear) and then discarded at the end of each wearing period.",
          url: "https://alcon.widen.net/content/6h4uwcilld/original/W900331896-I-VEROFA-PREC1-US.pdf",
          condition: "WEARING SCHEDULE 관련 절 · 같은 문서는 Studies have not been conducted to show that verofilcon A contact lenses are safe to wear during sleep로 착용방식을 별도 서술",
          linkNote: "교체주기와 착용방식이 문서에서 분리돼 있음"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1® 국제 전문가 페이지 (UKIE-PR1-2500008)",
          raw: "Replacement Frequency: daily",
          url: "https://www.myalcon.com/international/professional/contact-lenses/daily/precision1/",
          condition: "제품 헤더 · 같은 줄에 Indications: myopia, hyperopia 병기",
          linkNote: "이 페이지의 판매 국가 목록에는 대한민국이 없다. 한국 유통 근거는 한국알콘 사이트와 MFDS 원장이다"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 19-380 호",
      state: "verified",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 · 2026.08.28 확인",
      caution: "구면과 난시용의 허가번호가 다릅니다. 이 번호는 구면 제품의 번호이며 프리시전 원 난시는 수허 21-47 호로 별개입니다. 이름이 비슷한 일주일용 PRECISION7은 연속착용 소프트 콘택트렌즈·3등급으로 수허 25-76 호, 난시용은 수허 25-83 호입니다. 한국 페이지의 조합-2022-11-085 KR-PR1-2200010은 광고 사전심의 번호이며 허가번호가 아닙니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 19-380 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=한국알콘 · modelnm=Precision1 조회 186건, itemPermitNo=수허 19-380 호 단독 조회 186건이 모두 단일 신원(한국알콘(주) · 수입업 · 매일착용소프트콘택트렌즈 · 2등급 · 모델명 Precision1 · 업체 제품 명칭 Smart surface)으로 연결 · 포장내수량 5/30/90 각 62건",
          linkNote: "모델명 검색은 대소문자를 구분한다. PRECISION1(전부 대문자)은 0건이며 정답 표기는 Precision1이다. 대문자 PRECISION 조회 4,460건은 전부 일주일용 PRECISION7 계열이다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "프리시전원 한국 공식 페이지 4종",
          raw: "허가번호 표기 없음 (수허·허가번호 문자열 0건)",
          url: "https://precision.myalcon.com/kr/about-precision1/",
          condition: "원데이 카테고리·브랜드 루트·제품 소개·사용 안내 페이지 HTML 태그 제거 후 전문 검색 · 온라인 공개 한국어 IFU도 찾지 못함(알콘 공식 eIFU 포털은 로그인 인증 필요)",
          linkNote: "이 제품은 한국 IFU 경로가 없어 MFDS UDI가 허가번호의 유일한 근거"
        }
      ]
    },
    {
      id: "uv",
      value: "자외선 차단 1등급 (UVA 90% 이상 / UVB 99% 이상)",
      state: "verified",
      flag: "한국은 등급만 · 차단율은 글로벌 공식 자료",
      sourceSummary: "한국 페이지는 자외선 차단 1등급, 글로벌 사양은 Class 1 UV blocker (≥90% of UVA, ≥99% of UVB)",
      caution: "한국 공식 페이지는 등급(1등급)만 밝히고 차단율 퍼센트는 밝히지 않습니다. 글로벌 사양표의 90% 이상·99% 이상은 Class 1 등급의 기준선이고, 미국 Package Insert의 UVA 93%·UVB 99%는 -3.00D 렌즈의 측정값입니다. 등급 기준과 측정값을 하나로 합치지 않습니다. 자외선 차단 콘택트렌즈는 눈과 주변을 완전히 덮지 못하므로 선글라스나 고글을 대신할 수 없습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "프리시전원 한국 브랜드 사이트 제품 소개",
          raw: "자외선 차단 1등급이라는 사실⁷,⁸",
          url: "https://precision.myalcon.com/kr/about-precision1/",
          condition: "각주 7은 ANSI Z80.20-2016 Ophthalmic contact lens UV transmittance, 각주 8은 ISO 18369-2:2017 · 페이지에 차단율 퍼센트 수치 0건",
          linkNote: "한국 자료에서 확인된 유일한 규격 표기"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1® 전문가용 공식 사양 (US-PR1-2200002)",
          raw: "UV BLOCKER*\nClass 1 UV blocker (≥90% of UVA, ≥99% of UVB)",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/precision1/",
          condition: "Technical Specifications 표 · UV BLOCKER 행 · 각주 *: UV‑blocking contact lenses are NOT substitutes for protective UV‑blocking eyewear such as UV‑blocking goggles or sunglasses because they do not completely cover the eye and surrounding area.",
          linkNote: "Class 1 등급의 기준선 표기이며 특정 도수의 측정값이 아님. 한국 페이지의 1등급과 같은 등급을 가리킴"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "PRECISION1™ (verofilcon A) Package Insert (W900331896 · effective as of March 2021)",
          raw: "The thinnest verofilcon A lenses (-3.00 diopters) block 93% UVA radiation and 99% UVB radiation. The degree of UV radiation blockage will increase for thicker lenses.",
          url: "https://alcon.widen.net/content/6h4uwcilld/original/W900331896-I-VEROFA-PREC1-US.pdf",
          condition: "ACTIONS 절 · -3.00D 렌즈 기준 측정값 · 같은 문서 PRODUCT DESCRIPTION은 전 도수 범위에서 UVB 280~315 nm 투과 1% 미만, UVA 316~380 nm 투과 10% 미만으로 별도 표기",
          linkNote: "등급 기준선(≥90%/≥99%)과 다른 성격의 값이므로 합치지 않음"
        }
      ]
    }
  ]
}
