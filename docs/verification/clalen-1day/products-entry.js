// 클라렌 오투오투 원데이 그랩수 플러스 (Clalen O2O2 1Day / Grab Soo Plus)
// products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/clalen-1day/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
//
// 이 엔트리의 값은 전부 공개 자료 원문이다. 공개되지 않은 사양서·품질문서·시험성적서는 사용하지 않았다.
//
// 이 제품의 특수성:
//  (1) 국내 제조 제품이다. 허가번호 접두사가 수입허가 수허 가 아니라 제조허가 제허 다.
//      MFDS 원장 업체구분도 제조업 이다. 저장소에 실린 첫 제허 계열 제품이다.
//  (2) 수치를 인쇄하는 유일한 한국 자료가 제품 상세 이미지 한 장이다. 텍스트 레이어가 없다.
//      제품 페이지 HTML 본문에는 Dk/t·UV·중심두께·허가번호·제조사가 모두 0건이다.
//  (3) 그 상세 이미지에는 제조사 이름이 한 번도 나오지 않고, MFDS 원장에는 수치가 없다.
//      둘을 잇는 것은 모델명 Clalen O2O2 1Day 와 제품명 Grab Soo Plus 두 문자열의 일치,
//      그리고 인터로조 기업 사이트가 clalen.com 을 자사 브랜드 경로로 링크한다는 사실뿐이다.
//      세 다리를 전부 출처로 실었다.
//  (4) clalen.com 을 운영하는 법인은 제조사가 아니라 (주)메디엔토다. 두 사이트 어느 쪽도
//      법인 관계를 서술하지 않는다. 관계를 추정하지 않고 링크 사실만 근거로 삼았다.
//  (5) 제품 페이지의 사양 표는 원데이 구면·원데이 토릭·한달용 구면·한달용 토릭 네 제품이
//      공유하는 한 줄이다(lensModel.id 30). 실제로 원데이는 Dk/t 106, 한달용은 103으로 다르다.
//      그래서 BC·직경·함수율·재질의 첫 출처를 페이지 표가 아니라 제품별 상세 이미지에 뒀다.
//  (6) 플러스 도수 SKU가 하나도 없다. 근시용 이며 근시·원시용 이 아니다.
//
// raw 표기 주의:
//  - 상세 이미지에는 텍스트 레이어가 없다. raw 는 이미지 판독 결과이며, 같은 문자열이 두 곳 이상에
//    인쇄된 항목은 서로 대조해 확인했다. 이 사실을 각 레코드 linkNote 에 적었다.
//  - 베이스커브에 mm 를 인쇄하는 공식 자료가 하나도 없다. 값에 단위를 붙이지 않았다.
//  - 산소전달률 은 표 라벨, Dk/t 는 본문 라벨이다. 같은 이미지 안에서 @-3.00 과 @-03.00 두 표기가 쓰인다.
//    두 원문을 합치지 않고 각각 남겼다.
//  - selectorLabel 을 클라렌 원데이 로 하지 않았다. 같은 사이트에 클라렌 원데이 라는
//    별개 제품(하이드로겔, 함수율 58%)이 실제로 존재해 이름이 충돌한다.
{
  id: "clalen-1day",
  slug: "clalen-1day",
  aliases: [
    "Clalen O2O2 1Day",
    "오투오투 원데이 그랩수 플러스",
    "Grab Soo Plus",
    "Clalen",
    "Silicone hydrogel"
  ],
  name: "클라렌 오투오투 원데이 그랩수 플러스",
  selectorLabel: "클라렌 오투오투 원데이",
  maker: "(주)인터로조",
  distributor: "(주)인터로조",
  type: "근시용 투명 구면 · 1일 교체",
  packageSpecs: [
    { value: "BC 8.6", label: "Base Curve · 단위 미표기" },
    { value: "DIA 14.2", label: "Diameter · mm" },
    { value: "45%", label: "Water content" },
    { value: "Dk/t 106", label: "@-3.00 · 시험조건 미표기" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.6",
      state: "verified",
      flag: "한국 공식 원문 확인 · 단위 미표기",
      sourceSummary: "클라렌 공식 제품 상세 이미지 · 클라렌 공식 제품 페이지 · 2026.08.28 확인",
      caution: "베이스커브에 단위를 인쇄한 공식 자료가 하나도 없습니다. 상세 이미지는 직경 / 베이스커브 : 14.2 / 8.6 으로, 제품 페이지 표는 베이스커브 8.6 으로 적으며 둘 다 mm 표기가 없습니다. 같은 자료가 직경에는 mm 를 붙이므로, 단위를 저희가 채워 넣지 않고 인쇄된 그대로 둡니다. 또한 제품 페이지 표의 값은 원데이 구면·원데이 토릭·한달용 구면·한달용 토릭 네 제품이 공유하는 하나의 사양 레코드에서 나오므로, 제품별 근거로는 상세 이미지를 먼저 봅니다. 제조사가 이 제품에 다른 베이스커브를 함께 공급하는지 여부는 확인된 공식 자료에 없습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 상세 이미지 (O2O2-1Day_detail.png)",
          raw: "직경 / 베이스커브\n14.2 / 8.6",
          url: "https://clalencdn.com/products/details/O2O2-1Day_detail.png",
          condition: "Information 표 · 직경 / 베이스커브 행 · 같은 표의 착용도수범위는 -0.50D~-5.00D (0.25D 단위) / -5.50D~-12.00D (0.50D 단위) · 1000×8594px · 5,510,255 bytes",
          linkNote: "이 이미지는 제품 페이지 레코드의 description 이 가리키는 유일한 상세 콘텐츠다. 텍스트 레이어가 없어 인용은 육안 판독 결과이며, 같은 8.6 이 표의 두 곳에 나오지 않아 제품 페이지 표와 교차 확인했다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 페이지",
          raw: "베이스커브\n8.6",
          url: "https://www.clalen.com/products/56",
          condition: "제품 사양 표 · 베이스커브 행 · 같은 표의 직경(전체)은 14.2mm(14.2mm) 로 mm 를 붙인다 · HTTP 200 · 154,751 bytes · 헤드리스 브라우저 렌더링 결과와 일치",
          linkNote: "이 표의 값은 lensModel.id 30 을 공유하는 네 제품(원데이 구면·토릭, 한달용 구면·토릭)에 같은 줄로 표시된다. 제품별로 따로 입력된 값이 아니다"
        }
      ]
    },
    {
      id: "dia",
      value: "14.2 mm",
      state: "verified",
      flag: "한국 공식 원문 확인",
      sourceSummary: "클라렌 공식 제품 상세 이미지 · 클라렌 공식 제품 페이지 · 2026.08.28 확인",
      caution: "제품 페이지가 직경(전체) 14.2mm(14.2mm) 로 같은 숫자를 두 번 인쇄합니다. 이 사이트의 컬러렌즈 페이지에서는 이 칸이 전체 직경(그래픽 직경) 두 값을 담는데, 투명 렌즈에는 그래픽 직경이 없어 같은 값이 반복됩니다. 서로 다른 두 측정값이 아닙니다. 상세 이미지는 직경 / 베이스커브 : 14.2 / 8.6 로 단위 없이 적습니다. 제품 페이지 표의 값은 네 제품이 공유하는 사양 레코드에서 나오므로 제품별 근거로는 상세 이미지를 먼저 봅니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 상세 이미지 (O2O2-1Day_detail.png)",
          raw: "직경 / 베이스커브\n14.2 / 8.6",
          url: "https://clalencdn.com/products/details/O2O2-1Day_detail.png",
          condition: "Information 표 · 직경 / 베이스커브 행 · 이 표기에는 mm 단위가 없다",
          linkNote: "mm 단위는 제품 페이지 표의 14.2mm(14.2mm) 에서만 인쇄된다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 페이지",
          raw: "직경(전체)\n14.2mm(14.2mm)",
          url: "https://www.clalen.com/products/56",
          condition: "제품 사양 표 · 직경(전체) 행 · 괄호 안 값은 같은 숫자의 반복이며 그래픽 직경 칸이 비어 있다는 뜻이다",
          linkNote: "이 사이트의 컬러렌즈(예: 오투오투 컬러 원데이)는 같은 칸에 서로 다른 두 숫자를 넣는다. 투명 렌즈에서는 같은 값이 반복된다"
        }
      ]
    },
    {
      id: "water",
      value: "45%",
      state: "verified",
      flag: "한국 공식 원문 확인 · 측정 기준 미표기",
      sourceSummary: "클라렌 공식 제품 상세 이미지 · 클라렌 공식 제품 페이지 · 2026.08.28 확인",
      caution: "이 숫자가 렌즈 전체(벌크) 함수율인지 코어·표면 함수율인지 어느 공식 자료도 밝히지 않습니다. 측정법·규격 표기도 없습니다. 라벨도 자료마다 다릅니다. 상세 이미지는 함수율, 제품 페이지 표는 수분함유량, 같은 사이트의 다른 투명 원데이(클라렌 원데이)는 수분함유율 이라고 적습니다. 세 표기는 값이 다른 것이 아니라 한 사업자가 같은 항목을 여러 이름으로 적는 문제입니다. 제품 페이지 표의 45% 는 원데이·한달용·토릭 네 제품이 공유하는 사양 레코드의 값입니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 상세 이미지 (O2O2-1Day_detail.png)",
          raw: "함수율\n45%",
          url: "https://clalencdn.com/products/details/O2O2-1Day_detail.png",
          condition: "Information 표 상단 3열(재질 / 산소전달률 / 함수율) 중 세 번째 열 · 측정 위치·측정법·규격 표기 없음",
          linkNote: "같은 이미지 본문에는 함수율을 언급하는 문장이 없다. 해시태그 #촉촉함 은 물성값이 아니라 광고 문구이므로 근거로 쓰지 않았다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 페이지",
          raw: "수분함유량\n45%",
          url: "https://www.clalen.com/products/56",
          condition: "제품 사양 표 · 수분함유량 행 · 상세 이미지의 함수율 45% 와 값은 같고 라벨이 다르다",
          linkNote: "이 값은 lensModel.id 30 을 공유하는 네 제품에 같은 줄로 표시된다"
        }
      ]
    },
    {
      id: "material",
      value: "Silicone hydrogel (실리콘 하이드로겔)",
      state: "verified",
      flag: "재질 계열만 확인 · 채택명 미표기",
      sourceSummary: "클라렌 공식 제품 상세 이미지 · 클라렌 공식 제품 페이지 · 2026.08.28 확인",
      caution: "확인된 것은 재질 계열까지입니다. filcon 으로 끝나는 USAN 채택명(예: senofilcon A, comfilcon A)을 인쇄한 공식 자료가 하나도 없습니다. MFDS 의료기기 UDI 표준코드 조회에는 재질 칸 자체가 없고, 인터로조 기업 사이트는 하드렌즈에만 채택명(hexafocon A 등)을 적으며 소프트렌즈 제품 목록을 두지 않습니다. 제품 페이지 표는 소재 실리콘 이라고만 적어 상세 이미지의 Silicone hydrogel 보다 짧습니다. 두 표기가 다른 재질을 뜻하지는 않지만 같은 문자열도 아닙니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 상세 이미지 (O2O2-1Day_detail.png)",
          raw: "재질\nSilicone hydrogel",
          url: "https://clalencdn.com/products/details/O2O2-1Day_detail.png",
          condition: "Information 표 상단 3열 중 첫 번째 열 · 같은 이미지 본문은 실리콘 하이드로겔 재질로 촉촉하고, 편안하게! 와 높은 산소전달률의 실리콘 하이드로겔 재질 로 한글 계열명을 적고, 제품 상자 이미지에는 SILICONE HYDROGEL LENS 가 인쇄돼 있다",
          linkNote: "같은 이미지 안에 계열명이 영문·한글·상자 인쇄 세 곳에 나와 판독을 교차 확인할 수 있었다. 채택명은 세 곳 어디에도 없다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 페이지",
          raw: "소재\n실리콘",
          url: "https://www.clalen.com/products/56",
          condition: "제품 사양 표 · 소재 행 · 이 사이트의 소재 필터는 실리콘 / 하이드로겔 두 값만 쓴다(하이드로겔 제품인 클라렌 원데이·아이리스 원데이는 하이드로겔 로 표시)",
          linkNote: "이 페이지 HTML 전문에서 하이드로겔 은 0건, filcon 도 0건이다. 계열명을 끝까지 적는 것은 상세 이미지뿐이다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "(주)인터로조",
          document: "인터로조 기업 사이트 제품군 페이지",
          raw: "재질 항목 없음 (오투오투·소프트·실리콘·하이드로겔·filcon 문자열 각 0건)",
          url: "https://www.interojo.com/kr/products",
          condition: "HTML 98,205 bytes 전문 검색 · 이 페이지가 인쇄하는 구분/내용 사양표 6개는 전부 하드렌즈·각막굴절교정렌즈이며 그중 REL 만 hexafocon A 라는 채택명을 적는다 · 사이트맵 70건 전수 확인에서도 소프트렌즈 제품 페이지가 없다",
          linkNote: "채택명 부재가 자료를 못 찾은 결과가 아니라, 제조사 기업 사이트가 소프트렌즈를 다루지 않는 구조 때문임을 보이는 대조 근거"
        }
      ]
    },
    {
      id: "dkt",
      value: "106 (@-3.00)",
      state: "verified",
      flag: "한국 공식 원문 확인 · 시험조건 미표기",
      sourceSummary: "클라렌 공식 제품 상세 이미지 (표·본문 2곳) · 2026.08.28 확인",
      caution: "값은 역산하지 않았고 공식 자료에 인쇄된 그대로입니다. 다만 조건이 거의 없습니다. 시험도수 -3.00D 말고는 측정법·온도·경계보정 여부가 인쇄돼 있지 않아, 시험조건을 밝힌 다른 제품의 Dk/t와 같은 자리에 놓고 크기를 비교할 수 없습니다. 표기도 흔들립니다. 같은 이미지 안에서 표는 산소전달률 106(@-3.00), 본문은 Dk/t 106 (@-03.00) 로 적습니다. 라벨이 산소전달률 인 쪽에는 단위가 없어, 그것이 Dk 인지 Dk/t 인지는 본문 표기로만 알 수 있습니다. 그리고 이 값은 마케팅 상세 이미지에만 있고 기술 사양서에는 없으며, 같은 사이트의 구조화된 제품 데이터는 이 항목을 비워 둡니다(dkT: null, 사이트 제품 44건 전부). 중심두께가 확인되지 않으므로 두께 조건 없이 읽어야 합니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 상세 이미지 (O2O2-1Day_detail.png)",
          raw: "산소전달률\n106(@-3.00)",
          url: "https://clalencdn.com/products/details/O2O2-1Day_detail.png",
          condition: "Information 표 상단 3열 중 두 번째 열 · 라벨은 산소전달률 이며 Dk/t 라는 단위 표기가 이 칸에는 없다 · 괄호 안은 시험도수만 적혀 있고 측정법·온도·경계보정 표기가 없다",
          linkNote: "한달용 자매 제품(Clalen O2O2 M, 제허 21-237 호)의 같은 표는 103(@-3.00) 으로 다른 값을 인쇄한다. 두 제품이 사이트 구조화 데이터에서는 같은 사양 레코드를 쓰는데도 실제 값이 다르다는 사실을 여기서 확인했다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 상세 이미지 (O2O2-1Day_detail.png) · Point 02 절",
          raw: "높은 산소전달률 Dk/t 106 (@-03.00)로 오랜시간 촉촉하고\n편안한 착용감을 제공합니다.",
          url: "https://clalencdn.com/products/details/O2O2-1Day_detail.png",
          condition: "같은 이미지의 Point 02 · 높은 산소전달률의 실리콘 하이드로겔 재질 제목 아래 본문 · 시험도수 표기가 표의 @-3.00 과 달리 @-03.00 이다",
          linkNote: "값 106 이 같은 문서 두 곳에 인쇄돼 이미지 판독을 자체 교차 확인할 수 있었다. 이 문장이 Dk/t 라는 단위를 밝히는 유일한 표기다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 페이지 (구조화 제품 데이터)",
          raw: "\"dkT\":null",
          url: "https://www.clalen.com/products/56",
          condition: "페이지가 실어 보내는 제품 레코드의 specifications 절 · 전문: \"specifications\":{\"bc\":8.6,\"dia\":14.2,\"graphicDia\":null,\"waterContent\":45,\"dkT\":null,\"uvBlockRate\":null,\"material\":\"실리콘\"} · 사이트맵이 나열하는 제품 44건 전수 조회에서 44건 모두 dkT 가 null",
          linkNote: "같은 사이트가 같은 제품의 같은 항목을 이미지에는 인쇄하고 데이터에는 비워 둔다. 값을 부정하는 근거가 아니라, 이 수치의 1차 출처가 기술 데이터가 아니라 이미지라는 사실을 보이는 기록이다"
        }
      ]
    },
    {
      id: "thickness",
      value: "공식 자료에서 확인되지 않음",
      state: "unknown",
      flag: "확인되지 않음",
      sourceSummary: "한국 공식 자료 4종을 검토했으나 중심두께 항목 자체가 없음 · 2026.08.28 확인",
      caution: "중심두께가 없다는 뜻이 아니라, 검토한 공식 자료가 이 제품의 중심두께를 말하지 않는다는 뜻입니다. 클라렌 공식 제품 페이지, 제품 상세 이미지 전체, 인터로조 기업 사이트, MFDS 의료기기 UDI 원장 어디에도 두께·중심두께·thickness 항목이 없습니다. Dk/t 는 두께에 좌우되는 값인데 그 두께를 확인할 수 없으므로, Dk/t 106 은 두께 조건 없이 읽어야 합니다. 두께를 Dk/t에서 역산하지 않았습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 페이지 · 공식 제품 상세 이미지",
          raw: "중심두께 항목 없음 (제품 페이지 HTML 전문에서 두께 0건 · 상세 이미지 Information 표에 두께 행 없음)",
          url: "https://www.clalen.com/products/56",
          condition: "제품 페이지 HTML 154,751 bytes 전문 검색에서 두께 0건 · 상세 이미지(1000×8594px)를 1200px 8개 구간으로 잘라 전부 판독했으나 두께·thickness·중심 표기가 없다 · Information 표는 재질/산소전달률/함수율/UV차단여부/직경·베이스커브/포장단위/착용주기/착용도수범위 8행이 전부다",
          linkNote: "미확인을 두께 없음 으로 해석하지 않음"
        },
        {
          sourceType: "MFDS 원장",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회 · 제허 21-680 호",
          raw: "중심두께 항목 없음 (조회 응답 필드에 물성값 칸이 없음)",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "이 조회 화면의 응답 필드는 업체명·업체구분·소분류 품목 명칭·등급·품목허가번호·모델명·업체 제품 명칭·코드체계·UDI-DI·포장내수량·요양급여 대상 여부·사용자 멸균 여부·Kit 여부가 전부이며 재질·함수율·BC·직경·Dk/t·두께·UV 칸이 없다",
          linkNote: "이 부재는 이 제품의 사정이 아니라 조회 화면의 구조다. 다른 제품에서도 같다"
        }
      ]
    },
    {
      id: "replacement",
      value: "1일",
      state: "verified",
      flag: "한국 공식 원문 확인",
      sourceSummary: "클라렌 공식 제품 상세 이미지 · 클라렌 공식 제품 페이지 · 2026.08.28 확인",
      caution: "같은 페이지의 착용 권장 시간 8시간 은 하루에 몇 시간 착용하기를 권하는 값이지 교체주기가 아닙니다. 두 값을 섞어 읽지 마십시오. MFDS 원장의 소분류 매일착용 소프트 콘택트렌즈 는 착용방식 분류이지 교체주기가 아니므로 교체주기의 근거로 쓰지 않았습니다. 같은 회사의 한달 교체 제품(Clalen O2O2 M)도 같은 소분류로 등록돼 있습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 상세 이미지 (O2O2-1Day_detail.png)",
          raw: "착용주기\n1일 착용",
          url: "https://clalencdn.com/products/details/O2O2-1Day_detail.png",
          condition: "Information 표 · 착용주기 행 · 같은 표의 포장단위는 10개입 · 한달용 자매 제품의 같은 행은 한달 착용 이다",
          linkNote: "제품 상자 이미지에도 1 Day 와 1 day 가 인쇄돼 있다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 페이지",
          raw: "타입\n하루용",
          url: "https://www.clalen.com/products/56",
          condition: "제품 사양 표 · 타입 행 · 같은 페이지 상단 배지에는 1day 가 표시되고, 같은 표의 착용 권장 시간 행은 8시간 이다",
          linkNote: "이 사이트는 교체주기를 타입 이라는 라벨로 적는다. 한달용 자매 제품의 같은 행은 한달용 이다"
        }
      ]
    },
    {
      id: "permit",
      value: "제허 21-680 호",
      state: "verified",
      flag: "MFDS 원장 원문 확인",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 원장 397건 전수 집계 · 2026.08.28 확인",
      caution: "국내 제조 제품이라 접두사가 수입허가 수허 가 아니라 제조허가 제허 입니다. 원장의 업체구분도 제조업 입니다. 접두사를 확인하지 않으면 다른 회사의 허가를 이 제품의 허가로 읽게 됩니다. 실제로 같은 번호 21-680 이 제신 21-680 호 로도 존재하며 그것은 전혀 다른 회사의 다른 품목입니다. 그리고 클라렌 공식 페이지와 상세 이미지에는 허가번호가 인쇄돼 있지 않습니다. 상세 이미지 하단의 조합-2025-36-003 은 광고 사전심의번호이지 품목허가번호가 아니므로 이 필드에 넣지 않았습니다. 한국어 사용설명서를 온라인에서 찾지 못해, 이 번호의 근거는 MFDS 원장 하나뿐이며 제조사 문서와의 교차 대조를 하지 못했습니다.",
      sources: [
        {
          sourceType: "MFDS 원장",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회 · itemPermitNo=제허 21-680 호",
          raw: "제허 21-680 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 단독 조회 397건 전수 집계 · distinct 신원 1건 · (주)인터로조 | 제조업 | 매일착용 소프트 콘택트렌즈 | 등급 2 | 제허 21-680 호 | Clalen O2O2 1Day | 산소콘택트렌즈, O2O2 Clear Lens, Winc Clear Air Plus 1Day, Grab Soo Plus, 라일리 아쿠아플러스, LIGHLY AQUAPLUS, CleanFit O2 clear(클린핏 오투 클리어), oravis 1Day (오라비스 원데이) · distinct UDI-DI 397건 · 포장내수량 30/2/5/10/90/4/40/1 · 코드체계 GS1 · 업체명 기준 조회 12,314건에서 걸러낸 397건과 완전히 같은 집합",
          linkNote: "모델명 Clalen O2O2 1Day 조회 784건 중 387건은 토릭(제허 22-455 호)이므로 모델명만으로는 구면이 분리되지 않는다. 같은 회사의 Clalen O2O2(제허 11-609 호)·Clalen O2O2 M(제허 21-237 호)과도 별개 허가다. 하나의 허가 아래 여덟 개의 판매명이 등록돼 있어 허가번호 하나가 판매 제품 하나를 뜻하지 않는다"
        },
        {
          sourceType: "MFDS 원장",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회 · itemPermitNo=21-680 (접두사 없이)",
          raw: "(주)인터로조 | 제허 21-680 호 397건 · 주식회사 블라썸클라우드 | 제신 21-680 호 24건",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "접두사 없이 21-680 으로 조회하면 421건이 나오고 서로 다른 두 회사의 두 허가로 갈린다 · 제인 21-680 호 와 수허 21-680 호 는 각각 0건",
          linkNote: "접두사가 값의 일부임을 보이는 대조 근거. 화면 표시값은 원장 표기 제허 21-680 호 를 그대로 따랐다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 상세 이미지 (O2O2-1Day_detail.png)",
          raw: "모델명 : Clalen O2O2 1Day 제품명 : Grab Soo Plus\n조합-2025-36-003 (유효기간 : 2028-10-16)\n이 제품은 '의료기기'이며, '사용상의 주의사항'과 '사용방법'을 잘 읽고 사용하십시오.",
          url: "https://clalencdn.com/products/details/O2O2-1Day_detail.png",
          condition: "이미지 최하단 표기 · 허가번호는 인쇄돼 있지 않고 조합-2025-36-003 은 광고 사전심의번호다 · 제품 페이지 HTML 전문에서 허가·제허·수허·의료기기 문자열은 각 0건",
          linkNote: "이 두 문자열이 MFDS 원장의 모델명·업체 제품 명칭과 글자 그대로 일치해, 수치 자료와 허가 원장을 잇는 유일한 연결이 된다. 반대로 모델명 칸에 Grab Soo Plus 를 넣으면 0건이다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "(주)인터로조",
          document: "인터로조 기업 사이트 상단 내비게이션 Products 그룹",
          raw: "<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.clalen.com\">클라렌</a>",
          url: "https://www.interojo.com/kr",
          condition: "같은 앵커가 상단 메뉴·푸터·모바일 메뉴 3곳에 반복되고 본문 Discover 버튼도 같은 주소를 가리킨다 · 본문 원문: 클라렌은 인터로조의 대표 콘택트렌즈 브랜드로, 진보된 렌즈 설계 기술과 일상적인 아이케어 경험이 만나는 지점에 있습니다.",
          linkNote: "clalen.com 의 푸터 운영 법인은 (주)메디엔토 이며 제품 페이지에 인터로조 문자열이 0건이다. 제조사 사이트가 이 주소를 자사 브랜드 경로로 링크한다는 사실이, 클라렌 페이지를 제조사 공식 자료로 볼 수 있는 근거다. 두 사이트 어느 쪽도 법인 관계를 서술하지 않으므로 관계를 추정하지 않았다"
        }
      ]
    },
    {
      id: "uv",
      value: "Class 1 · UVA 90.5% / UVB 99% 이상 차단",
      state: "verified",
      flag: "한국 공식 원문 확인 · 측정 규격 미표기",
      sourceSummary: "클라렌 공식 제품 상세 이미지 (표·본문·상자 3곳) · 2026.08.28 확인",
      caution: "차단율은 인쇄된 그대로입니다. 다만 Class 1 이 어느 규격의 등급인지, 차단율의 측정 파장 범위가 얼마인지 어느 공식 자료도 밝히지 않습니다. 다른 제품에서는 측정 범위 UVA 316~380nm, UVB 280~315nm 같은 각주가 함께 인쇄되는데 이 제품에는 없습니다. 그래서 다른 제품의 UV 표기와 나란히 놓고 크기를 비교할 수 없습니다. 같은 사이트의 구조화된 제품 데이터는 이 항목을 비워 둡니다(uvBlockRate: null, 사이트 제품 44건 전부). UV 차단 콘택트렌즈는 선글라스나 보호안경을 대신하지 않습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 상세 이미지 (O2O2-1Day_detail.png) · Point 03 절",
          raw: "Class 1 UV차단 기능\n\n야외활동 및 실내 자외선으로부터 눈을 보호합니다.\n(UVA 90.5% UVB 99% 이상 차단)",
          url: "https://clalencdn.com/products/details/O2O2-1Day_detail.png",
          condition: "Point 03 절 · 차단율의 측정 파장 범위·시험 규격·시험 기관 표기 없음 · UVB 99% 이상 은 이상 이라는 하한 표현이고 UVA 90.5% 는 단일값이다",
          linkNote: "차단율 숫자를 인쇄하는 유일한 자료다. Information 표는 등급만 적고 차단율을 적지 않는다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 상세 이미지 (O2O2-1Day_detail.png) · Information 표",
          raw: "UV차단여부\nYes (Class 1)",
          url: "https://clalencdn.com/products/details/O2O2-1Day_detail.png",
          condition: "Information 표 · UV차단여부 행 · 이 칸에는 차단율이 없고 등급만 있다 · 제품 상자 이미지에는 CLASS 1 UV BLOCKING 이 인쇄돼 있다",
          linkNote: "Class 1 이 표·본문·상자 세 곳에 인쇄돼 이미지 판독을 교차 확인할 수 있었다. 같은 사이트의 하이드로겔 투명 원데이(클라렌 원데이)는 같은 칸에 등급 없이 Yes 만 적어 표기 수준이 제품마다 다르다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "클라렌 (clalen.com)",
          document: "클라렌 오투오투 원데이 그랩수 플러스 공식 제품 페이지 (구조화 제품 데이터)",
          raw: "\"uvBlockRate\":null",
          url: "https://www.clalen.com/products/56",
          condition: "페이지가 실어 보내는 제품 레코드의 specifications 절 · 같은 페이지 HTML 154,751 bytes 전문에서 UV 0건, 자외선 0건 · 사이트맵이 나열하는 제품 44건 전수 조회에서 44건 모두 uvBlockRate 가 null",
          linkNote: "값을 부정하는 근거가 아니라, UV 표기가 기술 데이터가 아니라 상세 이미지에만 존재한다는 사실을 보이는 기록이다"
        }
      ]
    }
  ]
}
