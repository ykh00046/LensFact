// 메니콘 미루 원데이 (Miru 1day Menicon Flat Pack) — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/miru-1day/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
//
// 이 제품의 특수성:
//  (1) 한국 공식 페이지가 재질·함수율·BC·직경을 한국어로 직접 인쇄한다. 지금까지 검증한 제품 중
//      쿠퍼비전 계열 다음으로 한국 근거가 강하다. 소비자 판과 전문가 판이 따로 있고 라벨이 다르다.
//  (2) 반대로 Dk/t·중심두께·UV는 한국·글로벌 어느 자료에도 없다. 그리고 그 부재는 자료 부실이 아니라
//      제조사가 형제 제품(Miru 1day UpSide·Miru 1month)에는 같은 표 서식으로 그 세 행을 인쇄하면서
//      이 제품 표에서만 행 자체를 뺀 결과다. 세 필드를 unknown 으로 두고 그 대조를 caution 에 적었다.
//  (3) 한국 유통사 법인명은 (주)매니콘코리아다. 메가 아니라 매다. 메니콘 으로는 MFDS 조회 0건.
//  (4) MFDS 등록 모델명은 1day  Flat Pack 이며 Miru 가 없고 공백이 두 칸이다.
//  (5) 일본에 같은 재질·같은 규제 판매명(메니콘1DAY 플랫팩) 제품이 있고 Dk·중심두께·UV를 인쇄하지만,
//      별개 국가 허가이고 도수 범위가 다르며 Dk는 Dk/t가 아니다. 값으로 쓰지 않고 참고 레코드로만 남겼다.
//
// raw 표기 주의:
//  - 한국 소비자 페이지의 소재 값은 끝부분 구성됨) 이 span 4개로 쪼개져 있다. 렌더링 문자열 그대로 적었다.
//  - CENTRAFORMTM 은 ™ 기호가 아니라 문자 TM 으로 인쇄돼 있다.
//  - 2020년판 IFU PDF는 텍스트 레이어가 탭 문자로 저장돼 있다. 인용은 탭을 공백 하나로 옮겼고,
//    같은 문장이 정상 공백으로 저장된 2024년판 IFU로 교차 확인했다.
{
  id: "miru-1day",
  slug: "miru-1day",
  aliases: ["메니콘 미루 원데이", "Miru 1day", "hioxifilcon A"],
  name: "Miru 1day Menicon Flat Pack",
  selectorLabel: "미루 원데이",
  maker: "Menicon",
  distributor: "(주)매니콘코리아",
  type: "근시·원시용 투명 구면 · 1일 교체",
  packageSpecs: [
    { value: "BC 8.6", label: "Base Curve · mm" },
    { value: "DIA 14.2", label: "Diameter · mm" },
    { value: "57%", label: "Water content" },
    { value: "Dk/t 미표기", label: "공식 자료에 항목 없음" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.6 mm",
      state: "verified",
      flag: "한국 공식 원문 확인",
      sourceSummary: "메니콘코리아 소비자·전문가 제품 페이지 · Menicon 글로벌 전문가 사양 · 2026.08.28 확인",
      caution: "한국 공식 페이지 두 곳이 8.6mm를 한국어로 직접 인쇄합니다. 다만 미국 지역 사이트(meniconamerica.com)만 8.4 mm, 8.6 mm 두 값을 적고 한국·글로벌·영국·스페인·싱가포르·말레이시아는 모두 8.6 mm 하나입니다. 지역별 공급 파라미터 차이로 보이며 두 값을 합치지 않았습니다. 같은 제품군의 다초점(multifocal)은 제조사 자료에서 8.4mm로 별개이고, 한국 라인업에는 플랫팩 다초점·난시용이 없습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day Flat Pack 한국 공식 소비자 제품 페이지",
          raw: "기본 커브\n8.6mm",
          url: "https://www.menicon.co.kr/consumer/products/disposable-lenses/miru-1day-flat-pack",
          condition: "제품 세부 정보 > 렌즈 매개 변수 표 · 기본 커브 행 · 같은 표의 Power 범위는 +4.00D ~ +0.50D(-0.25D 단계) / -0.50D ~ -6.00D(-0.25D 단계) / -6.50D ~ -10.00D(-0.50D 단계)",
          linkNote: "한국 공식 페이지가 수치를 직접 인쇄하는 드문 사례. 글로벌 전문가 페이지의 8.6 mm와 값이 같다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day Flat Pack 한국 공식 전문가용 제품 페이지",
          raw: "기본 커브\n8.6mm",
          url: "https://www.menicon.co.kr/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "같은 사이트의 professional 판 · 소비자 판과 라벨은 다르지만(함수율/수분 함량, 색상/취급 색조) 숫자는 완전히 동일",
          linkNote: "docs/PRODUCT_CANDIDATES_20.md 표 B에는 소비자 페이지만 적혀 있었다. 이번 검증에서 새로 확인한 한국 공식 출처"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Miru 1day Flat Pack 글로벌 전문가용 제품 페이지",
          raw: "Base curve\n8.6 mm",
          url: "https://www.menicon.com/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "Product details > Lens parameters 표 · Base curve 행 · 페이지 하단 표기는 © 2026 Menicon. All rights reserved. 이며 별도 문서 관리번호는 인쇄하지 않는다",
          linkNote: "영국·스페인·싱가포르·말레이시아 지역 사이트도 같은 8.6 mm(스페인은 8,6 mm)"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Miru 1day Flat Pack CONVENIENCE Trade Sales Aid (Dec 2024)",
          raw: "Base curve      sphere & toric \nmultifocal\n8.6mm\n8.4mm",
          url: "https://www.menicon.com/hubfs/00%20Global%20official%20website/Professional%20website/Dispo/Miru%20Flat%20Pack/J000750%201day%20Miru%20Flat%20Pack%20CONVENIENCE%20Trade%20Sales%20Aid%20-%20Dec%202024.pdf",
          condition: "11쪽 PDF의 Product Specifications > Parameters 절 · 구면과 난시용은 8.6mm, 다초점만 8.4mm로 구분해 적는다 · 한국 사이트도 같은 파일을 브로셔로 게시(md5 동일)",
          linkNote: "같은 표가 직경을 구면 14.2mm / 난시용 14.5mm / 다초점 14.4mm로 나눠 적어 구면 값을 잘못 옮길 위험이 낮다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Miru 1day Flat Pack 미국 지역 사이트 제품 페이지",
          raw: "Base curve\n8.4 mm, 8.6 mm",
          url: "https://www.meniconamerica.com/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "같은 표 서식의 미국판 · 같은 페이지의 포장 표기도 30 and 90 lens pack 으로 한국(렌즈 팩 30개)과 다르다",
          linkNote: "한국 값에 합치지 않고 지역 차이로 병기. 재질·함수율·직경은 미국판도 한국과 동일하다"
        }
      ]
    },
    {
      id: "dia",
      value: "14.2 mm",
      state: "verified",
      flag: "한국 공식 원문 확인",
      sourceSummary: "메니콘코리아 소비자·전문가 제품 페이지 · Menicon 글로벌 전문가 사양 · 2026.08.28 확인",
      caution: "확인한 8개 지역 공식 페이지와 제조사 사양 자료 전부가 14.2 mm로 같습니다. 같은 제품군의 난시용은 14.5mm, 다초점은 14.4mm로 다르며 한국 라인업에는 두 변형이 없습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day Flat Pack 한국 공식 소비자 제품 페이지",
          raw: "직경\n14.2mm",
          url: "https://www.menicon.co.kr/consumer/products/disposable-lenses/miru-1day-flat-pack",
          condition: "제품 세부 정보 > 렌즈 매개 변수 표 · 직경 행",
          linkNote: "한국 전문가 페이지도 같은 14.2mm"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day Flat Pack 한국 공식 전문가용 제품 페이지",
          raw: "직경\n14.2mm",
          url: "https://www.menicon.co.kr/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "professional 판 렌즈 매개 변수 표 · 직경 행",
          linkNote: "소비자 판과 숫자가 완전히 동일"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Miru 1day Flat Pack 글로벌 전문가용 제품 페이지",
          raw: "Diameter\n14.2 mm",
          url: "https://www.menicon.com/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "Product details > Lens parameters 표 · Diameter 행",
          linkNote: "영문 IFU에는 DIA 기호 정의만 있고 값이 없다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Miru 1day Flat Pack CONVENIENCE Trade Sales Aid (Dec 2024)",
          raw: "Diameter        sphere  \ntoric \nmultifocal\n14.2mm\n14.5mm\n14.4mm",
          url: "https://www.menicon.com/hubfs/00%20Global%20official%20website/Professional%20website/Dispo/Miru%20Flat%20Pack/J000750%201day%20Miru%20Flat%20Pack%20CONVENIENCE%20Trade%20Sales%20Aid%20-%20Dec%202024.pdf",
          condition: "Product Specifications > Parameters 절 · 구면(sphere) 값이 14.2mm",
          linkNote: "난시용·다초점 값을 구면에 옮기지 않기 위한 근거"
        }
      ]
    },
    {
      id: "water",
      value: "57%",
      state: "verified",
      flag: "한국 공식 원문 확인",
      sourceSummary: "메니콘코리아 소비자·전문가 제품 페이지 · 영문 IFU · 2026.08.28 확인",
      caution: "렌즈 전체(벌크) 함수율입니다. 한국 소비자 페이지는 수분 함량, 한국 전문가 페이지는 함수율이라는 서로 다른 라벨로 같은 57%를 적습니다. 한국·글로벌 자료 어디에도 측정법 표기가 없습니다. 데일리스 토탈원·토탈30처럼 코어와 표면을 나눠 적는 워터 그라디언트 계열이 아니라 단일 함수율 표기입니다. 함수율이 높다는 사실만으로 촉촉함이나 산소 전달을 판단할 수 없으며, 이 렌즈는 하이드로겔이라 실리콘 하이드로겔 제품의 함수율과 같은 축에서 비교되지 않습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day Flat Pack 한국 공식 소비자 제품 페이지",
          raw: "수분 함량\n57%",
          url: "https://www.menicon.co.kr/consumer/products/disposable-lenses/miru-1day-flat-pack",
          condition: "제품 세부 정보 > 특성 표 · 수분 함량 행 · 측정법·측정 위치 표기 없음",
          linkNote: "같은 사이트 전문가 판은 같은 값을 함수율이라는 라벨로 적는다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day Flat Pack 한국 공식 전문가용 제품 페이지",
          raw: "함수율\n57%",
          url: "https://www.menicon.co.kr/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "professional 판 특성 표 · 함수율 행",
          linkNote: "소비자 판의 수분 함량과 라벨만 다르고 값은 같다. 두 표기를 합치지 않고 각각 인용"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Instructions for Use RA1DAYPI002 (Date of Issue 2020-01 · 한국 공식 사이트 게시본)",
          raw: "hioxifilcon A (57% water) is a blue tinted soft hydrogel contact lens with 57% water content.",
          url: "https://www.menicon.co.kr/hubfs/00%20Global%20official%20website/Professional%20website/Dispo/Miru%20Flat%20Pack/English_IFU_RA1DAYPI002.pdf",
          condition: "INTRODUCTION 절 · 이 IFU는 재질명 자체에 (57% water)를 붙여 부른다 · 같은 문서가 Miru 1day UpSide의 midafilcon A (56% water)도 함께 다루므로 재질명으로 갈라 읽어야 한다 · PDF 텍스트 레이어는 단어 사이가 탭 문자로 저장돼 있어 인용은 탭을 공백 하나로 옮겼다",
          linkNote: "한국 사이트가 게시한 IFU는 한국어가 아니라 영문 문서이며 EU Importer·Authorized Representative만 인쇄돼 있다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Instructions for Use RA1DAYPI007 (Date of Issue 2024-06 · 글로벌 IFU 라이브러리 현행판)",
          raw: "• hioxifilcon A (57% water) is a blue tinted soft hydrogel contact lens with 57% water content.",
          url: "https://www.menicon.com/hubfs/00%20Global%20official%20website/Professional%20website/IFU/Daily/RA1DAYPI007-20240830MEN.pdf",
          condition: "INTRODUCTION 절 · 2020년판과 같은 문장이며 이 판은 텍스트 레이어가 정상 공백으로 저장돼 있어 교차 확인이 가능하다 · 한국 사이트는 여전히 2020년판을 링크한다",
          linkNote: "같은 상세 페이지에 EU 22개 언어판이 걸려 있으나 한국어판은 없다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Miru 1day Flat Pack 글로벌 전문가용 제품 페이지",
          raw: "Water content\n57%",
          url: "https://www.menicon.com/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "Product details > Characteristics 표 · Water content 행 · 영국·미국·스페인·싱가포르·말레이시아 지역판도 모두 57%",
          linkNote: "Trade Sales Aid의 Water content sphere, toric & multifocal 57% 표기와도 일치"
        }
      ]
    },
    {
      id: "material",
      value: "hioxifilcon A",
      state: "verified",
      flag: "한국 공식 원문 확인",
      sourceSummary: "메니콘코리아 소비자·전문가 제품 페이지가 재질명을 직접 인쇄 · 2026.08.28 확인",
      caution: "하이드로겔입니다. 실리콘 하이드로겔이 아닙니다. 한국 전문가 페이지가 hioxifilcon A(하이드로겔)로 계열을 직접 적고, 영문 IFU도 a blue tinted soft hydrogel contact lens라고 씁니다. 같은 IFU가 함께 다루는 형제 제품 Miru 1day UpSide의 midafilcon A는 실리콘 하이드로겔이므로 두 제품을 섞지 않아야 합니다. MFDS 허가 원장에는 재질명이 들어 있지 않고 재질명으로 조회하면 0건입니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day Flat Pack 한국 공식 전문가용 제품 페이지",
          raw: "소재\nhioxifilcon A(하이드로겔)",
          url: "https://www.menicon.co.kr/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "제품 세부 정보 > 특성 표 · 소재 행 · 재질명과 재질 계열을 한국어로 함께 인쇄한다",
          linkNote: "한국 공식 자료가 재질 계열까지 밝히는 사례. 토탈30·프리시전원 한국 페이지에는 재질 표기가 아예 없었다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day Flat Pack 한국 공식 소비자 제품 페이지",
          raw: "소재\nhioxifilcon A(안구에 직접 부착하여 시력보정용으로 사용하는 친수성 단량체 Hydroxyethyl Methacrylate(HEMA) 및 Glycerol monomethacrylate(GMA)로 구성됨)",
          url: "https://www.menicon.co.kr/consumer/products/disposable-lenses/miru-1day-flat-pack",
          condition: "제품 세부 정보 > 특성 표 · 소재 행 · 전문가 판과 달리 구성 단량체를 풀어 적는다 · HTML에서 끝부분 구 · 성 · 됨 · ) 이 각각 span 으로 쪼개져 있어 태그 제거 방식에 따라 구 성 됨 ) 으로 벌어져 보인다",
          linkNote: "같은 두 단량체(HEMA·GMA)를 메니콘 일본의 동계열 제품 페이지도 구성 모노머로 적는다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Instructions for Use RA1DAYPI002 (Date of Issue 2020-01 · 한국 공식 사이트 게시본)",
          raw: "hioxifilcon A (57% water) is a blue tinted soft hydrogel contact lens with 57% water content.",
          url: "https://www.menicon.co.kr/hubfs/00%20Global%20official%20website/Professional%20website/Dispo/Miru%20Flat%20Pack/English_IFU_RA1DAYPI002.pdf",
          condition: "INTRODUCTION 절 · 같은 문서가 midafilcon A (56% water) is a blue tinted soft silicone hydrogel contact lens 로 형제 제품을 실리콘 하이드로겔이라 구분해 적는다 · 텍스트 레이어의 탭 문자는 공백 하나로 옮겼다",
          linkNote: "한 IFU가 두 재질을 함께 다루므로 문장마다 재질명을 보고 갈라 읽어야 한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Miru 1day Flat Pack 글로벌 전문가용 제품 페이지",
          raw: "Material\nhioxifilcon A (hydrogel)",
          url: "https://www.menicon.com/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "Product details > Characteristics 표 · Material 행 · 영국·미국·싱가포르·말레이시아판도 동일, 스페인판은 hioxifilcon A (hidrogel)",
          linkNote: "한국 전문가 페이지의 하이드로겔 표기와 일치"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "1day  Flat Pack",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 15-476 호의 모델명 원문 · 업체 제품 명칭(prdtNmCn)은 비어 있다 · 원장에 재질명 표기 없음",
          linkNote: "modelnm=hioxifilcon · Hioxifilcon · HIOXIFILCON 조회 모두 0건. 바이오트루가 nesofilcon A를 모델명으로 함께 등록한 것과 대조된다"
        }
      ]
    },
    {
      id: "dkt",
      value: "공식 자료에서 확인되지 않음",
      state: "unknown",
      flag: "확인되지 않음",
      sourceSummary: "한국·글로벌 공식 자료 11종을 검토했으나 Dk/t 항목 자체가 없음 · 2026.08.28 확인",
      caution: "표기를 찾지 못했다는 뜻이며 산소가 통하지 않는다는 뜻이 아닙니다. 중요한 것은 부재의 성격입니다. 메니콘은 같은 사이트, 같은 표 서식으로 형제 제품에는 Dk/t를 인쇄합니다. 메니콘코리아 한국 페이지는 Miru 1day UpSide에 Dk/t @ -3.00D 91 × 10-9, Miru 1month Menicon에 161 × 10-9을 한국어로 적습니다. 그런데 이 제품 표에는 Dk/t 행이 아예 없습니다. 한국 소비자·전문가 페이지, 글로벌·영국·미국·스페인·싱가포르·말레이시아 지역 페이지, 영문 IFU 2판, Trade Sales Aid 어디에도 Dk나 oxygen 문자열이 0건입니다. 메니콘 일본이 같은 재질의 자국 승인 제품에 대해 적는 산소투과계수 19.4 × 10-11은 Dk(산소 투과성)이지 Dk/t(산소 전달률)가 아니며, 별개 국가 허가에 도수 범위도 다릅니다. Dk를 두께로 나눠 Dk/t를 만들지 않았습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day Flat Pack 한국 공식 소비자·전문가 제품 페이지",
          raw: "Dk/t 항목 없음 (Dk·산소·투과 문자열 0건)",
          url: "https://www.menicon.co.kr/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "두 페이지 HTML 태그 제거 후 전문 검색 · 제품 세부 정보 표의 행 구성은 소재 / 함수율 / 색상 / 디자인 / 제조 / 기본 커브 / 직경 / Power 범위 / 렌즈 마킹 / 자료 / 사용 가능한 패키지 뿐이다",
          linkNote: "값이 비어 있는 게 아니라 행 자체가 없다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day UpSide 한국 공식 소비자 제품 페이지 (대조군)",
          raw: "Dk/t @ -3.00D\n91 × 10-9 (cm/sec)･( mLO2/ (mL × mmHg))",
          url: "https://www.menicon.co.kr/consumer/products/disposable-lenses/miru-1day-upside",
          condition: "같은 사이트 형제 제품(midafilcon A · 실리콘 하이드로겔)의 같은 표 서식 · 같은 표에 중심 두께 0.07mm 와 UV 필터 클래스 2(UV-A 84% / UV-B 96%) 행도 있다 · Miru 1month Menicon 한국 전문가 페이지는 Dk/t @ -3.00D 161 × 10-9 을 적는다",
          linkNote: "이 제품의 Dk/t 부재가 한국 자료 부실 때문이 아니라 제품별 선택임을 보여주는 대조 근거. 이 값은 다른 제품의 값이며 본 제품의 값이 아니다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Miru 1day Flat Pack 글로벌 전문가용 제품 페이지 · Trade Sales Aid (Dec 2024) · IFU RA1DAYPI002 / RA1DAYPI007",
          raw: "Dk/t 항목 없음 (Dk·oxygen·transmissib 문자열 0건)",
          url: "https://www.menicon.com/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "글로벌 제품 페이지 HTML 전문 검색 · 11쪽 Trade Sales Aid PDF 전문 검색 · 2쪽 IFU 2판 전문 검색 모두 0건 · 영국·미국·스페인·싱가포르·말레이시아 지역 페이지도 0건",
          linkNote: "제조사가 이 제품에 대해 Dk도 Dk/t도 공개하지 않는다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "메니콘 일본 Magic 제품 페이지 (규제 판매명 メニコン１ＤＡＹ　フラットパック · 승인번호 22100BZX01098000)",
          raw: "酸素透過係数\n19.4×10-11 （cm2/sec）・(mLO2/(mL×mmHg))　ISO18369-4",
          url: "https://www.menicon.co.jp/products/lense/1day/magic/",
          condition: "物性値 표 · 이 값은 Dk(산소 투과성)이며 Dk/t가 아니다. 같은 사이트의 메니콘1DAY 페이지는 酸素透過率（Dk/t） 26.3 처럼 Dk/t를 따로 표기하므로 제조사가 두 물리량을 구분해 적는다는 사실이 같은 사이트 안에서 확인된다 · 같은 표의 USAN은 hioxifilconA, 含水率 57%, ベースカーブ 8.6mm, 直径 14.2mm 로 한국 값과 일치하지만 球面度数는 -0.50D~-10.00D 로 플러스 도수가 없어 한국·글로벌 공급 범위와 다르다",
          linkNote: "일본은 별개 국가 허가이고 메니콘이 두 등록의 렌즈가 동일 사양이라고 밝힌 문서를 확인하지 못했다. 이 값을 본 제품의 Dk/t로 쓰지 않았고 두께로 환산하지도 않았다"
        }
      ]
    },
    {
      id: "thickness",
      value: "공식 자료에서 확인되지 않음",
      state: "unknown",
      flag: "확인되지 않음",
      sourceSummary: "한국·글로벌 공식 자료 11종을 검토했으나 중심두께 항목 자체가 없음 · 2026.08.28 확인",
      caution: "표기를 찾지 못했다는 뜻이며 값이 없다는 뜻이 아닙니다. Dk/t 항목도 없으므로 두께를 역산할 수도, 두께로 Dk/t를 만들 수도 없습니다. Dk/t와 마찬가지로 메니콘은 형제 제품에는 중심 두께를 인쇄합니다. 메니콘코리아 한국 페이지는 Miru 1day UpSide에 중심 두께 0.07mm를 적지만 이 제품 표에는 그 행이 없습니다. 메니콘 일본이 같은 재질의 자국 승인 제품에 적는 中心厚 0.10mm(-3.00D)는 별개 국가 허가의 값이며 도수 범위도 다르므로 본 제품의 값으로 쓰지 않았습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day Flat Pack 한국 공식 소비자·전문가 제품 페이지",
          raw: "중심두께 항목 없음 (두께·중심두께 문자열 0건)",
          url: "https://www.menicon.co.kr/consumer/products/disposable-lenses/miru-1day-flat-pack",
          condition: "두 페이지 HTML 태그 제거 후 전문 검색 · 제품 세부 정보 표에 중심 두께 행이 없다",
          linkNote: "미확인을 값 없음으로 단정하지 않음"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Miru 1day Flat Pack 글로벌 전문가용 제품 페이지 · Trade Sales Aid (Dec 2024) · IFU RA1DAYPI002 / RA1DAYPI007",
          raw: "중심두께 항목 없음 (thickness 문자열은 난시용 디자인 설명 minimal average thickness profile 에만 등장하고 수치가 없음)",
          url: "https://www.menicon.com/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "글로벌 제품 페이지·11쪽 Trade Sales Aid·2쪽 IFU 2판 전문 검색 · 영국·미국·스페인·싱가포르·말레이시아 지역 페이지도 0건",
          linkNote: "IFU의 심볼 정의표에는 DIA·BC 기호 설명만 있고 두께 항목이 없다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day UpSide 한국 공식 전문가용 제품 페이지 (대조군)",
          raw: "중심 두께\n0.07 mm",
          url: "https://www.menicon.co.kr/professional/products/disposable-lenses/miru-1day-upside",
          condition: "같은 사이트 형제 제품의 같은 표 서식 · 이 값은 midafilcon A 제품의 값이며 본 제품의 값이 아니다",
          linkNote: "같은 사이트의 Miru 1month Menicon 전문가 페이지는 중심 두께 0.8 mm 로 적는데 글로벌판은 0.08 mm 다. 메니콘코리아 페이지 값을 단독 근거로 쓸 때 자릿수 검증이 필요하다는 사례"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "메니콘 일본 Magic 제품 페이지 (규제 판매명 メニコン１ＤＡＹ　フラットパック · 승인번호 22100BZX01098000)",
          raw: "中心厚\n0.10mm(-3.00D)",
          url: "https://www.menicon.co.jp/products/lense/1day/magic/",
          condition: "製作範囲 近視用 표 · 같은 표의 USAN hioxifilconA · 含水率 57% · ベースカーブ 8.6mm · 直径 14.2mm 는 한국 값과 일치하나 球面度数에 플러스 도수가 없다",
          linkNote: "별개 국가 허가의 값이므로 참고 레코드로만 남겼다. 이 값으로 Dk/t를 계산하지 않았다"
        }
      ]
    },
    {
      id: "replacement",
      value: "1일",
      state: "verified",
      flag: "한국 공식 원문 확인",
      sourceSummary: "메니콘코리아 제품 페이지의 매일 교체 표기 · 영문 IFU의 교체 문장 · MFDS 소분류 · 2026.08.28 확인",
      caution: "1일은 교체주기입니다. 착용방식은 별개이며 안경사 또는 안과 전문인의 판단이 필요합니다. 제조사 IFU는 하루가 끝나면 렌즈를 빼서 버리고 다음 날 아침에 새 렌즈로 바꾸라고 적고, 렌즈를 낀 채 잠들지 말라고 따로 경고합니다. 단회용 렌즈를 재사용하면 눈 문제 위험이 커진다고도 밝힙니다. 한국 페이지의 매일 교체는 착용 일정 블록의 자료라는 행 라벨 아래 있는데, 글로벌 페이지도 같은 자리에 Material이라는 라벨을 붙여 두었습니다. 라벨과 값이 어긋난 템플릿 오류로 보이며, 그래서 교체주기의 1차 근거는 IFU 문장으로 두었습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Instructions for Use RA1DAYPI002 (Date of Issue 2020-01 · 한국 공식 사이트 게시본)",
          raw: "WEARING RESTRICTIONS\nRemove and discard the contact lenses at the end of each day and replace with fresh lenses each morning. Reuse of the single-use contact lenses increase the risk of eye problems.",
          url: "https://www.menicon.co.kr/hubfs/00%20Global%20official%20website/Professional%20website/Dispo/Miru%20Flat%20Pack/English_IFU_RA1DAYPI002.pdf",
          condition: "WEARING RESTRICTIONS 절 · 같은 문서 INDICATIONS 절은 hioxifilcon A (57% water) is intended for single use daily wear only 로 단회 사용과 낮 시간 착용을 함께 적고, PRECAUTIONS 절은 Do not sleep while still wearing the contact lenses. 로 수면착용을 배제한다 · 텍스트 레이어의 탭 문자는 공백 하나로 옮겼다",
          linkNote: "한국 사이트가 게시한 IFU이지만 문서 자체는 영문이며 한국 허가 정보는 담고 있지 않다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Instructions for Use RA1DAYPI007 (Date of Issue 2024-06 · 글로벌 IFU 라이브러리 현행판)",
          raw: "Remove and discard the contact lenses at the end of each day and replace with fresh lenses each morning. Reuse of the single-use contact lenses increase the risk of eye problems.",
          url: "https://www.menicon.com/hubfs/00%20Global%20official%20website/Professional%20website/IFU/Daily/RA1DAYPI007-20240830MEN.pdf",
          condition: "WEARING RESTRICTIONS 절 · 2020년판과 문장이 같고 이 판은 텍스트 레이어가 정상 공백이라 교차 확인이 가능하다",
          linkNote: "한국 사이트는 2020년판을 링크하고 있고 이 2024년판은 글로벌 IFU 라이브러리에서만 제공된다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day Flat Pack 한국 공식 소비자 제품 페이지",
          raw: "착용 일정\n자료\n매일 교체",
          url: "https://www.menicon.co.kr/consumer/products/disposable-lenses/miru-1day-flat-pack",
          condition: "제품 세부 정보 > 착용 일정 블록 · 행 라벨이 자료로 인쇄돼 있으며 글로벌 페이지의 같은 행 라벨은 Material 이다 · 한국 전문가 페이지도 같은 라벨과 같은 값",
          linkNote: "라벨 오류를 근거로 값을 의심하지는 않았고, 교체주기 판단의 1차 근거는 IFU 문장으로 두었다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "매일착용소프트콘택트렌즈",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 15-476 호 행의 소분류 품목 명칭 원문 · 등급 2 · 업체구분 수입업 · 이 분류는 착용방식(자는 동안 착용하지 않는 낮 시간 착용)이지 교체주기가 아니다",
          linkNote: "MFDS 소분류만으로는 1일 교체를 알 수 없다. 교체주기는 제조사 IFU와 한국 페이지가 말한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Miru 1day Flat Pack CONVENIENCE Trade Sales Aid (Dec 2024)",
          raw: "Wear schedule\nModality sphere, toric & multifocal Daily Wear",
          url: "https://www.menicon.com/hubfs/00%20Global%20official%20website/Professional%20website/Dispo/Miru%20Flat%20Pack/J000750%201day%20Miru%20Flat%20Pack%20CONVENIENCE%20Trade%20Sales%20Aid%20-%20Dec%202024.pdf",
          condition: "Product Specifications > Wear schedule 절 · Daily Wear 는 착용방식이며 이 문서에는 교체주기 행이 따로 없다 · 한국 사이트도 같은 파일을 브로셔로 게시(md5 동일)",
          linkNote: "착용방식과 교체주기를 섞지 않기 위해 원문 라벨 그대로 기록"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 15-476 호",
      state: "verified",
      flag: "MFDS 원장 대조 완료",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 154건 전수 대조 · 2026.08.28 확인",
      caution: "메니콘의 한국 허가는 하나의 번호가 서로 다른 제품 브랜드를 묶는 구조입니다. 이 번호는 1일 교체 구면 플랫팩만의 번호이고, Miru 1day UpSide는 수허 19-300 호로 별개입니다. Miru 1M은 수허 15-319 호를 메니콘 프리미오와 함께 쓰고, Miru 1MT는 수허 15-405 호를 프리미오 토릭과 함께 씁니다. 허가번호 하나가 제품 하나를 뜻하지 않습니다. 한국 공식 제품 페이지에는 허가번호 표기가 전혀 없어 MFDS 원장이 유일한 근거입니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 15-476 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "itemPermitNo=수허 15-476 호 단독 조회 154건이 모두 단일 신원((주)매니콘코리아 · 수입업 · 매일착용소프트콘택트렌즈 · 2등급 · 모델명 1day  Flat Pack · 업체 제품 명칭 없음)으로 연결 · distinct UDI-DI 154건 · 포장내수량 6이 77건, 30이 77건 · 코드체계 GS1 · 요양급여 대상 치료재료 여부 N",
          linkNote: "bplcNm=매니콘 전체 16,401건 전수 집계에서 Miru 1MT 수허 15-405 호 · PremiO Toric 수허 15-405 호 · Miru 1M 수허 15-319 호 · PremiO 수허 15-319 호 · Miru UpSide 수허 19-300 호와 분리 확인. 구면 플랫팩은 154건뿐이다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회 — 업체명 표기 순회 기록",
          raw: "(주)매니콘코리아",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "업체명 조회에서 매니콘 · 매니콘코리아 · (주)매니콘코리아 는 각각 16,401건이고 메니콘 · 메니콘코리아 · 한국메니콘 · (주)메니콘코리아 · 메니콘코리아(주) · 매니콘코리아(주) · 한국매니콘 은 모두 0건 · 영문 Menicon · MENICON · menicon 도 업체명 칸에서 0건 · 대조군 bplcNm=한국알콘 46,382건으로 UTF-8 인코딩 정상 확인",
          linkNote: "한국 유통사 법인명은 (주)매니콘코리아이며 메가 아니라 매다. 브랜드 한글 표기(메니콘)와 법인 등록명(매니콘)이 다르다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회 — 모델명 표기 순회 기록",
          raw: "1day  Flat Pack",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "등록 모델명에는 Miru 가 없고 1day 와 Flat 사이에 공백이 두 칸이다. 1day Flat Pack(공백 한 칸) · Miru 1day · MIRU 1DAY · Miru Flat Pack · MIRU 1day Flat Pack 조회는 모두 0건 · Flat Pack 조회 154건과 1day  Flat Pack 조회 154건이 같은 집합 · modelnm=Miru 14,233건은 Miru 1MT · Miru 1M · Miru UpSide 뿐이고 플랫팩은 들어 있지 않다",
          linkNote: "docs/PRODUCT_CANDIDATES_20.md 표 A 18번의 검색 키워드 중 Miru 1day 는 0건이고 Flat Pack 만 맞는다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day Flat Pack 한국 공식 소비자·전문가 제품 페이지",
          raw: "허가번호 표기 없음 (수허·허가·의료기기·심의 문자열 0건)",
          url: "https://www.menicon.co.kr/consumer/products/disposable-lenses/miru-1day-flat-pack",
          condition: "두 페이지 HTML 태그 제거 후 전문 검색 · 한국 사이트가 게시한 IFU는 EU 시장용 영문 문서(Manufacturer: Menicon Co., Ltd. / Authorized Representative: Menicon Holdings B.V. / 심볼 정의표에 EU Importer)로 한국 허가 정보를 담지 않는다 · 온라인 공개 한국어 IFU를 찾지 못했다",
          linkNote: "이 제품은 한국 IFU 경로가 없어 MFDS UDI가 허가번호의 유일한 근거"
        }
      ]
    },
    {
      id: "uv",
      value: "공식 UV 표기 확인되지 않음",
      state: "unknown",
      flag: "확인되지 않음",
      sourceSummary: "한국·글로벌 공식 자료 11종을 검토했으나 UV 항목 자체가 없음 · 2026.08.28 확인",
      caution: "UV 차단이 없다고 단정하지 않습니다. 검토한 공식 자료가 이 제품의 UV를 말하지 않는다는 사실만 적습니다. 부재의 성격은 Dk/t와 같습니다. 메니콘코리아 한국 페이지는 형제 제품 Miru 1day UpSide에 UV 필터 클래스 2(UV-A 84% / UV-B 96%)를 한국어로 인쇄하지만 이 제품 표에는 UV 행이 아예 없습니다. 한국 소비자·전문가 페이지, 글로벌·영국·미국·스페인·싱가포르·말레이시아 지역 페이지, 영문 IFU 2판, Trade Sales Aid 전문에서 UV와 자외선이 각각 0건입니다. 메니콘 일본이 같은 재질의 자국 승인 제품에 대해 UV 차단 기능 없음이라고 적기는 하지만, 별개 국가 허가이고 도수 범위도 달라 한국 유통 제품의 UV를 없음으로 단정하는 근거로 쓰지 않았습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day Flat Pack 한국 공식 소비자·전문가 제품 페이지",
          raw: "UV 항목 없음 (자외선·UV 문자열 0건)",
          url: "https://www.menicon.co.kr/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "두 페이지 HTML 태그 제거 후 전문 검색 · 제품 세부 정보 표에 UV 필터 행이 없다",
          linkNote: "미확인을 UV 기능 없음으로 해석하지 않음"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)매니콘코리아",
          document: "Miru 1day UpSide 한국 공식 소비자 제품 페이지 (대조군)",
          raw: "UV 필터\n클래스 2(UV-A 84% / UV-B 96%)",
          url: "https://www.menicon.co.kr/consumer/products/disposable-lenses/miru-1day-upside",
          condition: "같은 사이트 형제 제품의 같은 표 서식 · 이 값은 midafilcon A 제품의 값이며 본 제품의 값이 아니다 · Miru 1month Menicon 페이지에는 UV 필터 행이 없다",
          linkNote: "이 제품의 UV 부재가 한국 자료 부실 때문이 아니라 제품별 선택임을 보여주는 대조 근거"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "Miru 1day Flat Pack 글로벌 전문가용 제품 페이지 · Trade Sales Aid (Dec 2024) · IFU RA1DAYPI002 / RA1DAYPI007",
          raw: "UV 항목 없음 (UV 문자열 0건)",
          url: "https://www.menicon.com/professional/products/disposable-lenses/miru-1day-flat-pack",
          condition: "글로벌 제품 페이지 HTML · 11쪽 Trade Sales Aid PDF · 2쪽 IFU 2판 전문 검색 모두 0건 · 영국·미국·스페인·싱가포르·말레이시아 지역 페이지도 0건",
          linkNote: "제조사가 이 제품에 대해 UV 등급도 차단율도 투과율도 공개하지 않는다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Menicon",
          document: "메니콘 일본 Magic 제품 페이지 (규제 판매명 メニコン１ＤＡＹ　フラットパック · 승인번호 22100BZX01098000)",
          raw: "UVカット機能\nなし",
          url: "https://www.menicon.co.jp/products/lense/1day/magic/",
          condition: "製作範囲 近視用 표 · 같은 표의 USAN hioxifilconA · 含水率 57% · ベースカーブ 8.6mm · 直径 14.2mm 는 한국 값과 일치하나 球面度数에 플러스 도수가 없다 · 같은 페이지는 視感透過率 94%以上 ISO18369-3 도 함께 적는데 이는 가시광 투과율이지 자외선 차단이 아니다",
          linkNote: "별개 국가 허가의 표기이므로 참고 레코드로만 남겼다. 한국 유통 제품의 UV를 없음으로 단정하지 않았다"
        }
      ]
    }
  ]
}
