// 마이데이® — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/myday/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
{
  id: "myday",
  slug: "myday",
  aliases: ["마이데이", "MyDay", "stenfilcon A"],
  name: "마이데이® / MyDay®",
  selectorLabel: "마이데이",
  maker: "CooperVision",
  distributor: "쿠퍼비전코리아(주)",
  type: "근시·원시용 투명 구면 · 비구면 디자인 · 1일 교체",
  packageSpecs: [
    { value: "BC 8.4", label: "Base Curve · mm" },
    { value: "DIA 14.2", label: "Diameter · mm" },
    { value: "54%", label: "Water content" },
    { value: "Dk/t 100", label: "@-3.00DS" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.4 mm",
      state: "verified",
      sourceSummary: "쿠퍼비전코리아 제품 사양서(2023 Rev #4)와 글로벌 공식 사양이 일치 · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지에는 BC 표기가 없어 한국 사양서 PDF가 한국 자료의 유일한 근거입니다. 공식 자료에 기재된 BC는 8.4 하나뿐이며 다른 BC의 유통 여부는 확인하지 못했습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "8.4",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 1 Day. 매일착용소프트렌즈 표 · MyDay® daily disposable 행(y0 192.1) · 내면곡률반경 Base Curve (mm) 열(x 435.5–467.7)",
          linkNote: "같은 표의 MyDay® toric 행은 8.6이므로 좌표로 행을 분리해 확인했다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "MyDay® 미국 전문가용 제품 페이지 Product Details",
          raw: "Base curve 8.4",
          url: "https://coopervision.com/practitioner/our-products/myday-family/myday",
          condition: "United States 지역 표기 페이지",
          linkNote: "한국 사양서 값과 일치"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "8.4",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 SPHERE LENSES 표 · MyDay® daily disposable 행(y0 256.0) · Base Curve (mm) 열(x 398.3–422.3)",
          linkNote: "세 자료 모두 8.4"
        }
      ]
    },
    {
      id: "dia",
      value: "14.2 mm",
      state: "verified",
      sourceSummary: "쿠퍼비전코리아 제품 사양서(2023 Rev #4)와 글로벌 공식 사양이 일치 · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지에는 직경 표기가 없어 한국 사양서 PDF가 한국 자료의 유일한 근거입니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "14.2",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 MyDay® daily disposable 행(y0 192.1) · 렌즈 직경 Diameter (mm) 열(x 488.6–520.6)",
          linkNote: "같은 표의 MyDay® toric 행은 14.5이므로 좌표로 행을 분리해 확인했다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "MyDay® 미국 전문가용 제품 페이지 Product Details",
          raw: "Diameter 14.2",
          url: "https://coopervision.com/practitioner/our-products/myday-family/myday",
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
          condition: "2쪽 MyDay® daily disposable 행(y0 256.0) · Dia (mm) 열(x 434.0–455.5)",
          linkNote: "세 자료 모두 14.2"
        }
      ]
    },
    {
      id: "water",
      value: "54%",
      state: "verified",
      sourceSummary: "한국 사양서·한국 공식 페이지·한국 제품 목록·글로벌 사양이 모두 54%",
      caution: "출처가 측정 위치(벌크·코어·표면)를 표기하지 않고 함수율 한 줄만 제시합니다. 코어와 표면을 나눠 표기하는 제품의 숫자와 같은 축에 놓고 비교하지 않습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "54",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 MyDay® daily disposable 행(y0 192.1) · 함수율 Water content (%) 열(x 607.4–631.5) · 측정 위치 표기 없음",
          linkNote: "열 이름이 함수율 Water content (%)이므로 단위는 %"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "마이데이® 한국 공식 제품 페이지",
          raw: "＊（별첨 1）마이데이® 원데이의 ［1．함수율과 2．산소 투과율（Dk/t）］은 아래와 같습니다． - 1．54%, 2．100",
          url: "https://coopervision.co.kr/contact-lenses/myday-family/myday",
          condition: "페이지 하단 각주 별첨 1 · 측정 위치 표기 없음",
          linkNote: "한국 표기값이 한국 사양서와 동일"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 전체 제품 목록",
          raw: "- 마이데이 [근시용 1. 54%, 2. 100] / [난시용 1. 54%, 2. 80] / [멀티포컬 1. 54%, 2. 100]",
          url: "https://coopervision.co.kr/contact-lenses",
          condition: "각주 별첨 1 · 근시용(구면) 값",
          linkNote: "난시용·멀티포컬과 구분해 근시용 값만 사용"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "MyDay® 미국 전문가용 제품 페이지 Product Details",
          raw: "Material / H 2 0 content  stenfilcon A / 54%",
          url: "https://coopervision.com/practitioner/our-products/myday-family/myday",
          condition: "재질과 함수율이 한 줄에 함께 표기됨",
          linkNote: "한국 값과 일치"
        }
      ]
    },
    {
      id: "material",
      value: "stenfilcon A",
      state: "verified",
      flag: "한국 허가 원장 미기재",
      sourceSummary: "한국 사양서와 글로벌 사양에서 확인. 한국 페이지는 실리콘 하이드로겔까지만 표기",
      caution: "MFDS 허가 원장의 구면 모델명은 MYDAY이고 재질명을 담지 않습니다. 재질명은 제조사 사양서로만 확인된 값입니다. 참고로 같은 업체의 마이데이 토릭·멀티포컬 모델명에는 Stenfilcon A가 들어 있습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "실리콘 하이드로겔 stenﬁlcon A",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 MyDay® daily disposable 행(y0 188.8·195.6) · 렌즈 재질 Material USAN 열(x 545.6–586.8)",
          linkNote: "PDF는 fi 합자 글리프(U+FB01)로 인쇄돼 추출 문자열이 stenﬁlcon A로 나온다. 인쇄된 단어는 stenfilcon A"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "마이데이® 한국 공식 제품 페이지",
          raw: "높은 함수율과 산소 투과율을 (* 별첨 1) 갖춘 실리콘 하이드로겔 소재를 적용하여",
          url: "https://coopervision.co.kr/contact-lenses/myday-family/myday",
          condition: "본문 서술 · 재질명 stenfilcon A 문자열은 페이지에 0건",
          linkNote: "한국 페이지는 재질 계열까지만 밝히고 USAN 재질명은 밝히지 않는다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "stenﬁlcon A / 54%",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 MyDay® daily disposable 행 · Material/H20 Content 열(x 295.8–344.3) · 같은 행 FDA Group 열은 5B SiHy",
          linkNote: "실리콘 하이드로겔 계열임을 FDA Group 표기로도 확인"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "MYDAY",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 14-2404 호 · 구면 제품 모델명 원문 · 재질명 미포함",
          linkNote: "같은 업체의 토릭은 Stenfilcon A 1day Toric, 멀티포컬은 Stenfilcon A 1day Multifocal로 등록돼 재질명을 담고 있다"
        }
      ]
    },
    {
      id: "dkt",
      value: "100",
      state: "verified",
      sourceSummary: "한국 사양서·한국 공식 페이지·한국 제품 목록·글로벌 사양이 모두 100",
      caution: "시험 도수 -3.00DS 기준 값입니다. 쿠퍼비전 공식 자료는 한국·미국 모두 측정법(분극법 등)·경계 보정 여부·온도를 표기하지 않습니다. 시험 조건 표기 수준이 다른 제품의 Dk/t와 숫자만 직접 비교하지 않습니다. Dk에서 Dk/t를 계산하지 않았습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "100",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 MyDay® daily disposable 행(y0 192.1) · 산소 투과율 Oxygen transmissibility Dk/t † 열(x 660.1–695.1) · 각주 †: (@-3.00DS) x 10-9 [(cm/sec) x (ml O )/(ml x mmHg)] — 인쇄물에서 -9는 위첨자, O 뒤의 2는 아래첨자",
          linkNote: "같은 표의 MyDay® toric 행은 80이므로 좌표로 행을 분리해 확인했다. 측정법·온도는 각주에 없음"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "마이데이® 한국 공식 제품 페이지",
          raw: "＊（별첨 1）마이데이® 원데이의 ［1．함수율과 2．산소 투과율（Dk/t）］은 아래와 같습니다． - 1．54%, 2．100",
          url: "https://coopervision.co.kr/contact-lenses/myday-family/myday",
          condition: "페이지 하단 각주 별첨 1 · 시험 도수·단위 표기 없음",
          linkNote: "한국 소비자 페이지는 조건 없이 숫자만 적는다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 전체 제품 목록",
          raw: "- 마이데이 [근시용 1. 54%, 2. 100] / [난시용 1. 54%, 2. 80] / [멀티포컬 1. 54%, 2. 100]",
          url: "https://coopervision.co.kr/contact-lenses",
          condition: "각주 별첨 1 · 근시용(구면) 값 · 시험 도수 표기 없음",
          linkNote: "난시용 80과 구분해 근시용 100만 사용"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "MyDay® 미국 전문가용 제품 페이지 Product Details",
          raw: "Oxygen transmissibility  100 Dk/t (at -3.00D)",
          url: "https://coopervision.com/practitioner/our-products/myday-family/myday",
          condition: "시험 도수만 표기 · 측정법·온도 없음",
          linkNote: "한국 사양서와 같은 값·같은 시험 도수"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision",
          document: "CooperVision Product Reference Guide (17345-6 05/2026)",
          raw: "100",
          url: "https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf",
          condition: "2쪽 MyDay® daily disposable 행(y0 256.0) · Oxygen Transmissibility DK/t** 열(x 464.8–525.6) · 각주 **: (@-3.00DS) x 10-9 [(cm/sec) x (ml O2)/(ml x mm Hg)].",
          linkNote: "한국 사양서와 동일한 각주 형식"
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
          raw: "중심두께 열 없음 (3쪽 전체에 두께 항목 부재)",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 표 열 구성: 제품명·정점 굴절력·원주 굴절력·원주 축·ADD 도수·디자인·착용기간·내면곡률반경·렌즈 직경·렌즈 재질·함수율·산소 투과율·자외선 차단 등급·가시성 색조",
          linkNote: "열 헤더 좌표를 전수 확인한 결과 두께 열이 존재하지 않음"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "MyDay® 미국 전문가용 제품 페이지 Product Details",
          raw: "thickness 문자열 0건",
          url: "https://coopervision.com/practitioner/our-products/myday-family/myday",
          condition: "2026.08.28 공개 HTML 전문 검색",
          linkNote: "같은 사이트의 바이오피니티 전문가 페이지에도 현재 thickness 문자열이 0건"
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
          document: "마이데이® 한국 공식 제품 페이지 · 한국 사용방법 PDF · 한국 제품 안내 PDF",
          raw: "중심두께 표기 없음",
          url: "https://coopervision.co.kr/contact-lenses/myday-family/myday",
          condition: "제품 페이지 텍스트, 사용방법 PDF 2쪽, 제품 안내 PDF 1쪽 전문 검색",
          linkNote: "한국 자료에도 두께 표기가 없어 미확인을 없음으로 해석하지 않음"
        }
      ]
    },
    {
      id: "replacement",
      value: "1일",
      state: "verified",
      sourceSummary: "한국 사양서·한국 공식 페이지·한국 사용방법 PDF·글로벌 사양에서 모두 확인",
      caution: "1일은 교체주기입니다. 착용방식은 별도 개념이며 공식 자료는 매일착용(Daily wear)으로 적습니다. 한국 페이지는 야간 취침 시 착용하지 않는다고 명시합니다. 최종 착용방식은 안경사 또는 안과 전문인의 판단이 필요합니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "마이데이® 한국 공식 제품 페이지",
          raw: "교체 주기 매일",
          url: "https://coopervision.co.kr/contact-lenses/myday-family/myday",
          condition: "제품 속성 표기 · 같은 영역에 교정 근시·원시 표기 · 별도 주의문구 ＊하루 착용하는 콘택트렌즈로 야간 취침시에는 착용을 하지 않습니다．",
          linkNote: "한국 유통 제품"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전 콘택트렌즈 사용방법 및 사용 시 주의사항 (매일착용 소프트콘택트렌즈)",
          raw: "사용 후 보관 및 관리 방법 - 일회용 렌즈이므로 하루 착용하며 재사용을 금한다.",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/MyDay_daily_disposable_patient_instruction%20%281%29.pdf",
          condition: "1쪽 · 마이데이® 한국 공식 제품 페이지의 제품 안내 자료 링크로 게시된 파일",
          linkNote: "쿠퍼비전 매일착용 소프트렌즈 공통 문서이며 제품명·허가번호·수치는 담고 있지 않다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "매일착용 소프트렌즈 Daily wear; 1 day replacement",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 MyDay® daily disposable 행(y0 178.0–206.4) · 착용기간 Wear Schedule & Replacement Frequency 열(x 373.1–415.7)",
          linkNote: "착용방식(Daily wear)과 교체주기(1 day replacement)가 한 열에 함께 표기됨"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "MyDay® 미국 전문가용 제품 페이지 Product Details",
          raw: "Replacement schedule  Daily / Wearing schedule  Daily Disposable",
          url: "https://coopervision.com/practitioner/our-products/myday-family/myday",
          condition: "교체주기와 착용방식이 별도 항목으로 분리돼 있음",
          linkNote: "교체주기와 착용방식을 구분해 기록"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 14-2404 호",
      state: "verified",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 174건 전수 대조 · 쿠퍼비전코리아 전체 제품 목록 표기와 일치",
      caution: "마이데이 계열은 구면·토릭·멀티포컬의 허가번호가 서로 다릅니다. 이 번호는 구면 제품의 번호입니다. 한국 제품 페이지의 조합 -2026-13-071과 제품 목록 페이지의 조합-2026-13-082는 광고 사전심의 번호이며 허가번호가 아닙니다. MFDS는 수허 14-2404 호로, 쿠퍼비전코리아 제품 목록은 수허 14-2404호로 적어 숫자와 호 사이 공백 표기가 다릅니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 14-2404 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=쿠퍼비전코리아 · modelnm=MYDAY 조회 174건, itemPermitNo=수허 14-2404 호 단독 조회 174건이 모두 단일 신원(쿠퍼비전코리아(주) · 매일착용소프트콘택트렌즈 · 2등급 · 모델명 MYDAY)으로 연결. 업체명 전체 조회는 17,003건. 포장내수량 분포 5(58건)·30(58건)·90(58건)",
          linkNote: "검색 함정 둘: 업체명은 쿠퍼비젼이 아니라 쿠퍼비전코리아(주)여야 하며(쿠퍼비젼코리아는 0건), 구면 모델명은 대문자 MYDAY여야 한다(MyDay·Myday·MyDay®·마이데이는 모두 0건). 토릭은 수허 18-281 호, 멀티포컬은 수허 21-108 호로 별개"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 전체 제품 목록",
          raw: "수허 14-2404호 마이데이 원데이",
          url: "https://coopervision.co.kr/contact-lenses",
          condition: "제품 목록 하단 각주 · 같은 각주에 수허 18-281호 마이데이 토릭, 수허 21-108호 마이데이 멀티포컬이 별도 기재",
          linkNote: "MFDS 원문과 번호는 같고 공백 표기만 다르다. 이 페이지는 같은 각주에서 바이오피니티만 수허 08-131로 호 없이 적어 표기가 일정하지 않다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전 콘택트렌즈 사용방법 및 사용 시 주의사항 (매일착용 소프트콘택트렌즈)",
          raw: "허가번호 표기 없음 (수허·제허·허가 문자열 0건)",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/MyDay_daily_disposable_patient_instruction%20%281%29.pdf",
          condition: "2쪽 전문 텍스트 추출 후 검색",
          linkNote: "이 IFU에는 허가번호·제품명·수치가 모두 없어 허가 근거로 쓸 수 없다"
        }
      ]
    },
    {
      id: "uv",
      value: "UV 차단 · Class 2",
      state: "verified",
      flag: "차단율 수치 없음",
      sourceSummary: "한국 사양서는 자외선 차단 등급 Class 2, 미국 전문가 사양은 UV Blocker Yes",
      caution: "공식 자료는 차단 등급과 유무만 밝히고 UVA·UVB 차단율 퍼센트는 어디에도 적지 않습니다. Class 2가 어떤 기준의 등급인지도 사양서가 정의하지 않으므로 정의를 추정해 붙이지 않습니다. 자외선 차단 콘택트렌즈는 눈과 주변 부위를 완전히 덮지 못하므로 자외선 차단용 고글이나 선글라스를 대신할 수 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전코리아 제품 사양서 (CVK Product Specifications · SA09487 Rev #4 09/2023)",
          raw: "Class 2",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf",
          condition: "1쪽 MyDay® daily disposable 행(y0 192.1) · 자외선 차단 등급 UV Blocking ‡ & Class 열(x 717.6–757.9) · 각주 ‡: UV 흡수 콘택트렌즈는 눈과 주변 부위를 완전히 덮지 않기 때문에, 자외선 흡수 고글 또는 선글라스와 같은 보호용 UV 흡수 안경류를 대체하지 않습니다.",
          linkNote: "같은 사양서 3쪽의 바이오피니티 계열은 같은 열이 No이므로 열 값이 제품마다 실제로 갈린다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "CooperVision US",
          document: "MyDay® 미국 전문가용 제품 페이지 Product Details",
          raw: "UV Blocker*  Yes",
          url: "https://coopervision.com/practitioner/our-products/myday-family/myday",
          condition: "각주 *: Warning: UV-absorbing contact lenses are not substitutes for protective UV-absorbing eyewear, such as UV-absorbing goggles or sunglasses, because they do not completely cover the eye and surrounding area.",
          linkNote: "등급 표기 없이 유무만 제시. 한국 사양서의 Class 2와 모순되지 않음"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "마이데이® 한국 공식 제품 페이지",
          raw: "UV 차단 기술이 적용되어 , 자외선으로부터 눈을 보호합니다 .",
          url: "https://coopervision.co.kr/contact-lenses/myday-family/myday",
          condition: "당신을 위한 기능 항목 · 차단율 퍼센트·등급 수치 0건",
          linkNote: "한국 소비자 페이지는 기능 유무만 서술한다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "쿠퍼비전코리아(주)",
          document: "쿠퍼비전 콘택트렌즈 사용방법 및 사용 시 주의사항 (매일착용 소프트콘택트렌즈)",
          raw: "자외선 차단 기능의 콘택트렌즈는 자외선으로부터 눈이나 눈 주변부를 완전히 차단할 수 없으므로 자외선 차단용 고글이나 선글라스를 대신할 수 없다.",
          url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/MyDay_daily_disposable_patient_instruction%20%281%29.pdf",
          condition: "2쪽 경고 항목",
          linkNote: "한국 IFU의 UV 경고문 원문"
        }
      ]
    }
  ]
}
