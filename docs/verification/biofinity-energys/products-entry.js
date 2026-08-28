// 바이오피니티 에너지스™ — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/biofinity-energys/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
{
  id: "biofinity-energys",
  slug: "biofinity-energys",
  aliases: ["바이오피니티 에너지스", "Biofinity Energys", "comfilcon A"],
  name: "바이오피니티 에너지스™ / Biofinity Energys®",
  selectorLabel: "바이오피니티 에너지스",
  maker: "CooperVision",
  distributor: "쿠퍼비전코리아(주)",
  type: "근시·원시용 투명 구면 · 비구면 디자인 · 월간 교체",
  packageSpecs: [
    { value: "BC 8.6", label: "Base Curve · mm" },
    { value: "DIA 14.0", label: "Diameter · mm" },
    { value: "48%", label: "Water content" },
    { value: "Dk/t 170 / 110 / 171", label: "공식 출처 간 값이 다름" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.6 mm",
      state: "verified",
      sourceSummary: "쿠퍼비전코리아 제품 사양서(2023 Rev #4)와 글로벌 공식 사양이 일치 · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지에는 BC 표기가 없어 한국 사양서 PDF가 한국 자료의 유일한 근거입니다. 공식 자료에 기재된 BC는 8.6 하나뿐이며 다른 BC의 유통 여부는 확인하지 못했습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "8.6",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "3쪽 Frequently Replaced Product. 연속착용소프트렌즈 표 · Bioﬁnity Energys® 행(값 y0 399.8) · 내면곡률반경 Base Curve (mm) 열(x 435.5–467.7)",
          linkNote: "같은 표의 바이오피니티 토릭 행은 8.7이므로 좌표로 행을 분리해 확인했다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Biofinity Energys® 미국 전문가용 제품 페이지 Product Details",
          raw: "Base curve 8.6",
          url: "https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-energys",
          condition: "United States 지역 표기 페이지",
          linkNote: "한국 사양서 값과 일치"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "8.6",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "3쪽 SPHERE LENSES 표 · Monthly Replacement Lenses 구획 · Bioﬁnity Energys® 행(값 y0 357.5) · Base Curve (mm) 열(x 387.2–410.8)",
          linkNote: "세 자료 모두 8.6"
        }
      ]
    },
    {
      id: "dia",
      value: "14.0 mm",
      state: "verified",
      sourceSummary: "한국 사양서·글로벌 사양서가 14.0, 미국 전문가 페이지는 14로 인쇄 · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지에는 직경 표기가 없어 한국 사양서 PDF가 한국 자료의 유일한 근거입니다. 미국 전문가 페이지는 같은 값을 14로 적습니다. 소수점 표기만 다르고 값은 같습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "14.0",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "3쪽 Bioﬁnity Energys® 행(값 y0 399.8) · 렌즈 직경 Diameter (mm) 열(x 488.6–529.8)",
          linkNote: "같은 표의 바이오피니티 토릭 행은 14.5이므로 좌표로 행을 분리해 확인했다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Biofinity Energys® 미국 전문가용 제품 페이지 Product Details",
          raw: "Diameter 14",
          url: "https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-energys",
          condition: "United States 지역 표기 페이지 · 소수점 없이 14로 인쇄",
          linkNote: "인쇄 표기를 그대로 옮겼다. 14.0으로 고쳐 적지 않았다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "14.0",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "3쪽 Bioﬁnity Energys® 행(값 y0 357.5) · Dia (mm) 열(x 422.2–443.8)",
          linkNote: "한국 사양서와 동일 표기"
        }
      ]
    },
    {
      id: "water",
      value: "48%",
      state: "verified",
      sourceSummary: "한국 사양서·한국 제품 페이지·한국 제품 목록·글로벌 사양이 모두 48%",
      caution: "출처가 측정 위치(벌크·코어·표면)를 표기하지 않고 함수율 한 줄만 제시합니다. 코어와 표면을 나눠 표기하는 제품의 숫자와 같은 축에 놓고 비교하지 않습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "48",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "3쪽 Bioﬁnity Energys® 행(값 y0 399.8) · 함수율 Water content (%) 열(x 607.4–639.3) · 측정 위치 표기 없음",
          linkNote: "열 이름이 함수율 Water content (%)이므로 단위는 %"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "바이오피니티 에너지스™ 한국 공식 제품 페이지",
          raw: "＊（별첨 1）바이오피니티 에너지스™의 ［1．함수율과 2．산소 투과율（Dk/t）］은 아래와 같습니다． - 1．48%, 2．110",
          url: "https://coopervision.co.kr/contact-lenses/biofinity-energys",
          condition: "페이지 하단 각주 별첨 1 · 측정 위치 표기 없음",
          linkNote: "이 각주의 함수율 48%는 다른 출처와 일치한다. 같은 각주의 Dk/t 110은 dkt 필드의 충돌 항목으로 별도 기록했다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 전체 제품 목록",
          raw: "- 바이오피니티 [근시용 1. 48%, 2. 170] / [난시용 1. 48%, 2. 110] / [에너지스 1. 48%, 2. 170]",
          url: "https://coopervision.co.kr/contact-lenses",
          condition: "각주 별첨 1 · 에너지스 값",
          linkNote: "근시용·난시용과 구분해 에너지스 값만 사용"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Biofinity Energys® 미국 전문가용 제품 페이지 Product Details",
          raw: "Material / H 2 0 content  comfilcon A / 48%",
          url: "https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-energys",
          condition: "재질과 함수율이 한 줄에 함께 표기됨",
          linkNote: "한국 값과 일치"
        }
      ]
    },
    {
      id: "material",
      value: "comfilcon A",
      state: "verified",
      flag: "한국 허가 원장 미기재",
      sourceSummary: "한국 사양서와 글로벌 사양에서 확인. 한국 페이지는 실리콘 하이드로겔까지만 표기",
      caution: "MFDS 허가 원장의 모델명은 Biofinity Energys이고 재질명을 담지 않습니다. 재질명은 제조사 사양서로만 확인된 값입니다. 바이오피니티 구면과 같은 재질 계열이지만 허가번호와 광학 디자인은 서로 다른 제품입니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "실리콘 하이드로겔 comﬁlcon  A",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "3쪽 Bioﬁnity Energys® 행(y0 396.5·403.3) · 렌즈 재질 Material USAN 열(x 554.7–577.6)",
          linkNote: "PDF는 fi 합자 글리프(U+FB01)로 인쇄돼 추출 문자열이 comﬁlcon  A(공백 2칸)로 나온다. 인쇄된 단어는 comfilcon A"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "바이오피니티 에너지스™ 한국 공식 제품 페이지",
          raw: "높은 함수율과 산소 투과율을 (* 별첨 1) 갖춘 실리콘 하이드로겔 소재를 적용해 일상적인 착용 환경에서도 편안한 착용감을 염두에 두고 개발되었습니다.",
          url: "https://coopervision.co.kr/contact-lenses/biofinity-energys",
          condition: "본문 서술 · 재질명 comfilcon 문자열은 페이지에 0건",
          linkNote: "한국 페이지는 재질 계열까지만 밝히고 USAN 재질명은 밝히지 않는다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "comﬁlcon A / 48%",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "3쪽 Bioﬁnity Energys® 행 · Material/H20 Content 열(x 295.6–336.4) · 같은 행 FDA Group 열은 5C SiHy",
          linkNote: "실리콘 하이드로겔 계열임을 FDA Group 표기로도 확인"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "Biofinity Energys",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 17-239 호 · 모델명 원문 · 재질명 미포함",
          linkNote: "modelnm=Comfilcon 조회는 0건이다. 이 업체 원장에서 재질명을 담은 모델명은 마이데이 토릭·멀티포컬과 클래리티 계열뿐이다"
        }
      ]
    },
    {
      id: "dkt",
      value: "170 / 110 / 171",
      state: "conflict",
      flag: "공식 출처 간 값이 다름",
      sourceSummary: "한국 제품 페이지 본문 170 · 같은 페이지 각주 110 · 한국 제품 목록 170 · 한국 2023 사양서와 글로벌 사양 171",
      caution: "한국 공식 제품 페이지 한 장 안에서 본문은 170, 하단 각주는 110으로 서로 다릅니다. 한국 2023 사양서와 글로벌 공식 사양은 -3.00DS 기준 171입니다. 170과 110에는 시험 조건 표기가 없습니다. 세 값을 하나로 정규화하지 않습니다. Dk에서 Dk/t를 계산하지 않았습니다.",
      conflicts: [
        { source: "한국 공식 제품 페이지 본문 · 한국 전체 제품 목록 각주", value: "170 · 시험 조건 미표기" },
        { source: "한국 공식 제품 페이지 하단 별첨 1 각주", value: "110 · 시험 조건 미표기" },
        { source: "쿠퍼비전코리아 2023 제품 사양서 · 미국 전문가 페이지 · 글로벌 Product Reference Guide 05/2026", value: "171 at -3.00DS" }
      ],
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "바이오피니티 에너지스™ 한국 공식 제품 페이지 (본문)",
          raw: "높은 산소 투과율로 (Dk/t 170) 눈에 필요한 산소를 충분히 제공하여 , 선명한 시야를 유지합니다 .",
          url: "https://coopervision.co.kr/contact-lenses/biofinity-energys",
          condition: "주요 제품 특징 항목 · 시험 도수·단위 표기 없음",
          linkNote: "curl 원본 HTML과 브라우저 렌더링 innerText 양쪽에서 확인"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "바이오피니티 에너지스™ 한국 공식 제품 페이지 (하단 각주)",
          raw: "＊（별첨 1）바이오피니티 에너지스™의 ［1．함수율과 2．산소 투과율（Dk/t）］은 아래와 같습니다． - 1．48%, 2．110",
          url: "https://coopervision.co.kr/contact-lenses/biofinity-energys",
          condition: "페이지 하단 각주 별첨 1 · 시험 도수·단위 표기 없음",
          linkNote: "같은 페이지 본문의 170과 다른 숫자다. 두 문자열 모두 curl 원본과 브라우저 렌더링에서 확인했다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 전체 제품 목록",
          raw: "- 바이오피니티 [근시용 1. 48%, 2. 170] / [난시용 1. 48%, 2. 110] / [에너지스 1. 48%, 2. 170]",
          url: "https://coopervision.co.kr/contact-lenses",
          condition: "각주 별첨 1 · 에너지스 값 · 시험 도수 표기 없음",
          linkNote: "이 페이지는 에너지스를 170으로 적어 제품 페이지 각주의 110과 어긋난다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "171",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "3쪽 Bioﬁnity Energys® 행(값 y0 399.8) · 산소 투과율 Oxygen transmissibility Dk/t † 열(x 660.1–701.9) · 각주 †: (@-3.00DS) x 10-9 [(cm/sec) x (ml O )/(ml x mmHg)] — 인쇄물에서 -9는 위첨자, O 뒤의 2는 아래첨자",
          linkNote: "같은 표의 바이오피니티 토릭 행은 116이므로 좌표로 행을 분리해 확인했다. 측정법·온도는 각주에 없음"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Biofinity Energys® 미국 전문가용 제품 페이지 Product Details",
          raw: "Oxygen transmissibility  171 Dk/t (at -3.00D)",
          url: "https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-energys",
          condition: "시험 도수만 표기 · 측정법·온도 없음",
          linkNote: "한국 2023 사양서와 같은 값·같은 시험 도수"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "171",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "3쪽 Bioﬁnity Energys® 행(값 y0 357.5) · Oxygen Transmissibility DK/t** 열(x 456.6–517.4) · 각주 **: (@-3.00DS) x 10-9 [(cm/sec) x (ml O2)/(ml x mm Hg)].",
          linkNote: "한국 사양서와 동일한 각주 형식"
        }
      ]
    },
    {
      id: "thickness",
      value: "0.08 mm at -3.00D",
      state: "verified",
      flag: "글로벌 공식 자료 단독 근거",
      sourceSummary: "미국 전문가용 제품 페이지 Center thickness 행에서만 확인 · 한국 자료에는 항목 자체가 없음",
      caution: "이 값의 근거는 미국 전문가 페이지 한 곳뿐입니다. 한국 사양서·한국 제품 페이지·한국 사용방법 PDF·한국 제품 안내 PDF·글로벌 Product Reference Guide에는 중심두께 항목 자체가 없습니다. Dk/t에서 두께를 역산하지 않았습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Biofinity Energys® 미국 전문가용 제품 페이지 Product Details",
          raw: "Center thickness  0.08 @ -3.00D",
          url: "https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-energys",
          condition: "United States 지역 표기 페이지 · 원본 HTML의 label Center thickness / item 0.08 @ -3.00D 로도 확인",
          linkNote: "같은 사이트의 바이오피니티 구면·XR 전문가 페이지에는 2026.08.28 현재 thickness 문자열이 0건인데, 에너지스 페이지에는 남아 있다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "중심두께 열 없음 (3쪽 전체에 thickness 0건 · 두께 0건 · 중심 0건)",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "3쪽 표 열 구성: 제품명·정점 굴절력·원주 굴절력·원주 축·ADD 도수·디자인·착용기간·내면곡률반경·렌즈 직경·렌즈 재질·함수율·산소 투과율·자외선 투과율·가시성 색조",
          linkNote: "열 헤더 좌표를 전수 확인한 결과 두께 열이 존재하지 않음. 한국 자료에는 대조할 값이 없다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "thickness 문자열 0건 (7쪽 전문)",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "7쪽 전체 텍스트 추출 후 검색",
          linkNote: "글로벌 공식 사양서에도 중심두께 열이 없어 교차 확인이 되지 않는다"
        }
      ]
    },
    {
      id: "replacement",
      value: "30일",
      state: "verified",
      sourceSummary: "쿠퍼비전코리아 2023 제품 사양서 30 days replacement · 한국 페이지 매월 · 글로벌 Monthly",
      caution: "30일은 교체주기입니다. MFDS는 이 제품을 연속착용소프트콘택트렌즈·등급 3으로 등록하지만 이는 허가 품목 분류이며 수면착용 허용을 뜻하지 않습니다. 한국 제품 페이지는 야간 취침 시 착용하지 않는다고 명시하고, 한국 사용방법 PDF는 매일착용을 권장하며 연속착용은 전문가가 점진적으로 권유할 수 있다고 적습니다. 연속착용 최대 기간 표기는 한국 사양서 14 days/13 nights, 한국 사용방법 PDF 2주까지, 글로벌 사양서 up to 6 nights / 7 days로 서로 다릅니다. 최종 착용방식은 안경사 또는 안과 전문인의 판단이 필요합니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "연속착용 소프트렌즈 30 days  replacement Extended wear 14 days/13 nights;",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "3쪽 Bioﬁnity Energys® 행(y0 389.3–410.5) · 착용기간 Wear Schedule & Replacement Frequency 열(x 373.1–415.7)",
          linkNote: "착용방식(연속착용 소프트렌즈 · Extended wear)과 교체주기(30 days replacement)가 한 칸에 함께 인쇄돼 있다. 추출 문자열의 30 days 뒤 공백 2칸은 인쇄물 그대로다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "바이오피니티 에너지스™ 한국 공식 제품 페이지",
          raw: "교체 주기 매월",
          url: "https://coopervision.co.kr/contact-lenses/biofinity-energys",
          condition: "제품 헤더 표기 · 같은 영역에 교정 근시·원시 표기 · 별도 주의문구 ＊눈에 착용하는 콘택트렌즈로 야간 취침시에는 착용을 하지 않습니다．",
          linkNote: "이 페이지에는 30일 문자열이 없다. 한국어 표기는 매월이다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전 콘택트렌즈 사용방법 및 사용 시 주의사항 (연속착용 소프트콘택트렌즈)",
          raw: "• 렌즈 착용과 교체 기간은 안경사나 안과의사에 의해 결정된다. • 매일착용 시에는 한달, 연속착용 시에는 2주까지 연속착용이 가능하다.  그러나 모든 착용자가 최대기간을 착용할 수 있는 것은 아니며 매일착용을 권장한다.",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/Biofinity_Energys_patient_instruction.pdf",
          condition: "1쪽 착용 기간 항목 · 바이오피니티 에너지스™ 한국 공식 제품 페이지의 사용시 주의 사항 링크로 게시된 파일",
          linkNote: "쿠퍼비전 연속착용 소프트콘택트렌즈 공통 문서이며 제품명·허가번호·수치는 담고 있지 않다. 한국어 교체 표현은 한달이다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 전체 제품 목록",
          raw: "한달착용",
          url: "https://coopervision.co.kr/contact-lenses",
          condition: "바이오피니티 에너지스™ 제품 카드의 product-tag",
          linkNote: "같은 목록 하단에 **모든 콘택트렌즈는 야간 취침 시 착용하지 마십시오. 문구가 있다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Biofinity Energys® 미국 전문가용 제품 페이지 Product Details",
          raw: "Replacement schedule  Monthly / Extended wear  Yes",
          url: "https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-energys",
          condition: "교체주기와 연속착용 가부가 별도 항목으로 분리돼 있음",
          linkNote: "Extended wear Yes는 착용방식 항목이며 수면착용 허용 표시로 옮겨 적지 않는다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "Daily Wear or Extended Wear up to 6 nights / 7 days",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "3쪽 SPHERE LENSES 표 Monthly Replacement Lenses 구획 · Bioﬁnity Energys® 행 · Wear Schedule 열(x 237.6–273.1)",
          linkNote: "구획 이름이 Monthly Replacement Lenses다. 연속착용 기간 표기가 한국 2023 사양서(14 days/13 nights)와 다르다"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 17-239 호",
      state: "verified",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 65건 전수 대조 · 쿠퍼비전코리아 전체 제품 목록 표기와 일치",
      caution: "에너지스는 바이오피니티 구면·XR과 허가번호를 공유하지 않는 별도 등록 제품입니다. 바이오피니티 구면·XR은 수허 08-131 호, 바이오피니티 토릭은 수허 10-1406 호입니다. 한국 제품 목록은 수허 17-239호로, MFDS는 수허 17-239 호로 적어 숫자와 호 사이 공백 표기가 다릅니다. 한국 제품 페이지의 조합 -2026-13-076과 제품 목록의 조합-2026-13-082는 광고 사전심의 번호이며 허가번호가 아닙니다. MFDS 소분류 연속착용소프트콘택트렌즈·등급 3은 허가 품목 분류이며 수면착용 허용을 뜻하지 않습니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 17-239 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=쿠퍼비전코리아 · modelnm=Biofinity Energys 조회 65건을 pageSize=500 한 페이지로 전수 집계. distinct 신원 1건(연속착용소프트콘택트렌즈 · 등급 3 · 업체 제품 명칭 디지털 렌즈 · 쿠퍼비전코리아(주) · 수허 17-239 호 · 모델명 Biofinity Energys). 포장내수량 전 행 6. 화면 문구 총 65건이 조회됐습니다.",
          linkNote: "modelnm=Biofinity 조회 4,551건은 토릭 4,392(수허 10-1406 호) + 에너지스 65(수허 17-239 호) + 구면 64와 XR 30(수허 08-131 호)으로 정확히 나뉜다. 검색 함정: 업체명은 쿠퍼비젼이 아니라 쿠퍼비전코리아(주)여야 하고(쿠퍼비젼코리아 0건), 모델명은 파스칼 표기 Biofinity Energys여야 한다(BIOFINITY ENERGYS·biofinity energys·에너지스·바이오피니티 에너지스·Biofinity Energys® 모두 0건). 업체명 없이 모델명만으로는 0건"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 전체 제품 목록",
          raw: "수허 17-239호 바이오피니티 에너지스",
          url: "https://coopervision.co.kr/contact-lenses",
          condition: "제품 목록 하단 각주 · 같은 각주에 수허 08-131 바이오피니티 & 바이오피니티 XR, 수허 10-1406호 바이오피니티 토릭 & 바이오피니티 토릭 XR이 별도 기재",
          linkNote: "MFDS 원문과 번호는 같고 공백 표기만 다르다. 이 각주가 에너지스를 바이오피니티·XR과 분리해 적는다는 점이 MFDS 원장과 일치한다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전 콘택트렌즈 사용방법 및 사용 시 주의사항 (연속착용 소프트콘택트렌즈)",
          raw: "허가번호 표기 없음 (수허·제허·허가 문자열 0건)",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/Biofinity_Energys_patient_instruction.pdf",
          condition: "2쪽 전문 텍스트 추출 후 검색 · 제품명 Biofinity·바이오피니티·에너지스도 모두 0건",
          linkNote: "이 IFU에는 허가번호·제품명·수치가 모두 없어 허가 근거로 쓸 수 없다"
        }
      ]
    },
    {
      id: "uv",
      value: "공식 자료 간 충돌",
      state: "conflict",
      flag: "공식 출처 간 표기가 다름",
      sourceSummary: "한국 제품 페이지는 UV 차단 기술 적용을 서술 · 한국 2023 사양서는 자외선 투과율 열에 No · 글로벌 자료에는 UV 항목 자체가 없음",
      caution: "UV 차단이 있다고도 없다고도 단정하지 않습니다. 어느 공식 자료에도 UVA·UVB 차단율 퍼센트나 차단 등급 수치가 없습니다. 자외선 차단 콘택트렌즈는 눈과 주변 부위를 완전히 덮지 못하므로 자외선 차단용 고글이나 선글라스를 대신할 수 없습니다.",
      conflicts: [
        { source: "바이오피니티 에너지스™ 한국 공식 제품 페이지", value: "UV 차단 기술이 적용되어 , 자외선으로부터 눈을 보호합니다 ." },
        { source: "쿠퍼비전코리아 2023 제품 사양서", value: "자외선 투과율 UV Blocking & Class 열 = No" },
        { source: "미국 전문가 페이지 · 글로벌 Product Reference Guide 05/2026", value: "UV 항목 자체가 없음" }
      ],
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "바이오피니티 에너지스™ 한국 공식 제품 페이지",
          raw: "UV 차단 기술이 적용되어 , 자외선으로부터 눈을 보호합니다 .",
          url: "https://coopervision.co.kr/contact-lenses/biofinity-energys",
          condition: "주요 제품 특징 항목 · 차단율 퍼센트·등급 수치 0건",
          linkNote: "한국 소비자 페이지는 기능 유무만 서술한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "No",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "3쪽 Bioﬁnity Energys® 행(값 y0 399.8) · 자외선 투과율 UV Blocking ‡ & Class 열(x 721.0–754.5) · 각주 ‡: UV 흡수 콘택트렌즈는 눈과 주변 부위를 완전히 덮지 않기 때문에, 자외선 흡수 고글 또는 선글라스와 같은 보호용 UV 흡수 안경류를 대체하지 않습니다.",
          linkNote: "같은 표의 바이오피니티 구면·XR·토릭 행도 모두 No이고, 1쪽 마이데이 행은 Class 2이므로 이 열은 제품마다 실제로 갈린다. 3쪽 열 이름만 자외선 투과율이고 1·2쪽은 자외선 차단 등급이다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "Biofinity Energys® 미국 전문가용 제품 페이지 Product Details",
          raw: "UV 문자열 0건 (UV Blocker 행 없음)",
          url: "https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-energys",
          condition: "2026.08.28 공개 HTML 전수 검색",
          linkNote: "같은 사이트의 마이데이 전문가 페이지에는 UV Blocker* Yes 행이 있으므로, 행이 없다는 것은 표기 자체가 없다는 뜻이다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "Bioﬁnity Energys® 행 Features 목록에 UV blocking 항목 없음 (• Aquaform® Technology · • DigitalBoost® Technology · • Optimum modulus · • High oxygen transmissibility)",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "3쪽 Bioﬁnity Energys® 행 Features/Design Technology 열(x 664.5–738.7)",
          linkNote: "같은 쪽의 Avaira Vitality® 행에는 • UV blocking* 항목이 있다. 쪽 하단의 UV 경고 각주는 그 행에 붙는다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전 콘택트렌즈 사용방법 및 사용 시 주의사항 (연속착용 소프트콘택트렌즈)",
          raw: "자외선 문자열 0건",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/Biofinity_Energys_patient_instruction.pdf",
          condition: "2쪽 전문 텍스트 추출 후 검색",
          linkNote: "매일착용판 공통 IFU에는 있던 자외선 차단 경고 항목이 이 연속착용판에는 없다"
        }
      ]
    }
  ]
}
