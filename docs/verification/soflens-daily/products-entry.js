// 소프렌 데일리 근시용 (Bausch + Lomb SofLens® daily disposable) — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/soflens-daily/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
{
  id: "soflens-daily",
  slug: "soflens-daily",
  aliases: ["소프렌 데일리", "SofLens daily disposable", "hilafilcon B"],
  name: "소프렌 데일리 근시용 / SofLens® daily disposable",
  selectorLabel: "소프렌 데일리",
  maker: "Bausch + Lomb",
  distributor: "(주)바슈롬코리아",
  type: "근시용 투명 구면 · 1일 교체",
  packageSpecs: [
    { value: "BC 8.6", label: "Base Curve · mm" },
    { value: "DIA 14.2", label: "Diameter · mm" },
    { value: "59%", label: "Water content" },
    { value: "Dk/t 미표기", label: "Dk 22만 인쇄" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.6 mm",
      state: "verified",
      sourceSummary: "한국 공식 제품 페이지 사양표와 미국 Package Insert / Fitting Guide가 일치 · 2026.08.28 확인",
      caution: "한국 공식 값은 제품 페이지 `상세정보`의 이미지 안에 인쇄돼 있습니다. 이미지에 대체 텍스트가 없어 페이지 HTML 텍스트로는 검색되지 않으며, 확인하려면 이미지를 열어 하단 `제품 상세 안내` 표를 봐야 합니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "소프렌 데일리 근시용 한국 브랜드 제품 페이지 · 상세정보 이미지 (effb4f4341da8.jpg · md5 81bfe603ca85c38db27475fdb42e3ec1)",
          raw: "8.6mm",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=102",
          condition: "상세정보 탭 `제품 상세 안내` 표 · 행 라벨 원문 `베이스 커브`",
          linkNote: "이미지 원본 https://cdn.imweb.me/upload/S2023010385e2991530ec3/effb4f4341da8.jpg · 1020×2180px · 육안 확대 판독. 페이지 HTML 본문에는 `8.6` 문자열이 0건이다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "SofLens® daily disposable Package Insert / Fitting Guide (SL7 494 · 8046303 · effective as of February 2015)",
          raw: "Base Curve: 8.6mm",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/soflens-daily-disposable-pifg.pdf",
          condition: "LENS PARAMETERS AVAILABLE 절 · 구면 전용 문서여서 난시용 값을 괄호로 병기하는 줄이 없다",
          linkNote: "미국 ECP 사이트에는 이 제품의 개별 파라미터 페이지가 없다(soflens-daily-disposable 경로는 404)"
        }
      ]
    },
    {
      id: "dia",
      value: "14.2 mm",
      state: "verified",
      sourceSummary: "한국 공식 제품 페이지 사양표와 미국 Package Insert / Fitting Guide가 일치 · 2026.08.28 확인",
      caution: "한국 공식 값은 제품 페이지 `상세정보` 이미지 안에 인쇄돼 있습니다. 페이지 HTML 텍스트로는 검색되지 않습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "소프렌 데일리 근시용 한국 브랜드 제품 페이지 · 상세정보 이미지 (effb4f4341da8.jpg · md5 81bfe603ca85c38db27475fdb42e3ec1)",
          raw: "14.2mm",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=102",
          condition: "상세정보 탭 `제품 상세 안내` 표 · 행 라벨 원문 `직경`",
          linkNote: "육안 확대 판독. 페이지 HTML 본문에는 `14.2` 문자열이 0건이다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "SofLens® daily disposable Package Insert / Fitting Guide (SL7 494 · 8046303 · effective as of February 2015)",
          raw: "Diameter: 14.2mm",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/soflens-daily-disposable-pifg.pdf",
          condition: "LENS PARAMETERS AVAILABLE 절",
          linkNote: "구면 전용 문서"
        }
      ]
    },
    {
      id: "water",
      value: "59%",
      state: "verified",
      sourceSummary: "한국 공식 제품 페이지 사양표와 미국 Package Insert / Fitting Guide가 일치 · 2026.08.28 확인",
      caution: "제조사는 이 값을 `멸균 식염수에 담근 상태의 중량 기준 59%`로 적습니다. 렌즈 전체(벌크) 기준 표기이며, 코어·표면을 나눠 적는 제품(데일리스 토탈원 등)의 숫자와 같은 축에 놓고 비교하지 않습니다. 하이드로겔 계열이므로 실리콘 하이드로겔 제품의 함수율과도 같은 축에서 읽으면 안 됩니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "소프렌 데일리 근시용 한국 브랜드 제품 페이지 · 상세정보 이미지 (effb4f4341da8.jpg · md5 81bfe603ca85c38db27475fdb42e3ec1)",
          raw: "59%",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=102",
          condition: "상세정보 탭 `제품 상세 안내` 표 · 행 라벨 원문 `함수율` · 측정 위치(벌크·코어·표면) 구분 표기는 없다",
          linkNote: "육안 확대 판독. 페이지 HTML 본문에는 `함수율`·`59%` 문자열이 각 0건이다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "SofLens® daily disposable Package Insert / Fitting Guide (SL7 494 · 8046303 · effective as of February 2015)",
          raw: "Water Content: 59%",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/soflens-daily-disposable-pifg.pdf",
          condition: "DESCRIPTION 절 physical / optical properties 목록 · 같은 절 본문에 `is 59% water by weight when immersed in a sterile saline solution`",
          linkNote: "pypdf 추출 문자열은 자간 때문에 `W ater Content: 59%`로 나온다. 인쇄된 문자열은 Water Content다"
        }
      ]
    },
    {
      id: "material",
      value: "hilafilcon B",
      state: "verified",
      sourceSummary: "미국 Package Insert / Fitting Guide의 재질명과 한국 공식 페이지 표기가 같은 이름 · 2026.08.28 확인",
      caution: "실리콘 하이드로겔이 아니라 하이드로겔(hydrophilic copolymer) 계열입니다. 한국 공식 페이지의 사양표는 첫 글자를 대문자로 쓴 `Hilafilcon B`로, 같은 이미지 안 포장 사진은 `hilafilcon B`로 인쇄합니다. 값의 차이가 아니라 표기 차이입니다. MFDS 허가 원장에는 재질명이 등재돼 있지 않아, 바이오트루 원데이와 달리 한국 허가 원장이 재질명을 뒷받침하지 않습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "SofLens® daily disposable Package Insert / Fitting Guide (SL7 494 · 8046303 · effective as of February 2015)",
          raw: "The lens is made from the hilafilcon B material, a hydrophilic copolymer of 2-hydroxyethyl methacrylate and N-vinyl pyrrolidone, and is 59% water by weight when immersed in a sterile saline solution.",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/soflens-daily-disposable-pifg.pdf",
          condition: "DESCRIPTION 절 두 번째 문장",
          linkNote: "같은 절 첫 문장은 제품명을 `SofLens daily disposable (hilafilcon B) Visibility Tinted Contact Lens`로 적는다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "소프렌 데일리 근시용 한국 브랜드 제품 페이지 · 상세정보 이미지 (effb4f4341da8.jpg · md5 81bfe603ca85c38db27475fdb42e3ec1)",
          raw: "Hilafilcon B",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=102",
          condition: "상세정보 탭 `제품 상세 안내` 표 · 행 라벨 원문 `재질` · 첫 글자가 대문자다",
          linkNote: "같은 이미지의 포장 사진에는 `SofLens® daily disposable (hilafilcon B)`로 소문자 h가 인쇄돼 있다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "재질명 표기 없음 (modelnm=hilafilcon / Hilafilcon / hilafilcon B / HILAFILCON 조회 각 0건)",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=바슈롬 고정 · 대소문자 4가지 변형 모두 0건 · 음성 대조 modelnm=ZZZZZ도 0건",
          linkNote: "바이오트루 원데이는 같은 UDI-DI에 `nesofilcon A`가 모델명으로 등록돼 있었다. 같은 제조사라도 제품마다 등록 방식이 다르다"
        }
      ]
    },
    {
      id: "dkt",
      value: "공식 자료에서 확인되지 않음",
      state: "unknown",
      flag: "확인되지 않음",
      sourceSummary: "검토한 한국·글로벌 공식 자료 어디에도 Dk/t 표기가 없음. 제조사가 인쇄한 것은 Dk 하나뿐",
      caution: "표기를 찾지 못했다는 뜻이며 값이 없다는 뜻이 아닙니다. 제조사 Package Insert가 인쇄한 값은 `Oxygen Permeability: 22 x 10⁻¹¹ [cm³O₂(STP) x cm]/(sec x cm² x mmHg) @35˚C (분극법)`이며, 이는 산소투과계수 Dk의 단위입니다. Dk를 두께로 나눠 Dk/t를 만드는 유도는 하지 않았습니다. 게다가 이 제품은 단일 시험도수 중심두께도 공개돼 있지 않아 나눌 두께 자체가 없습니다. 다른 제품의 Dk/t 숫자와 이 제품의 22를 같은 열에서 비교하지 마십시오.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "SofLens® daily disposable Package Insert / Fitting Guide (SL7 494 · 8046303 · effective as of February 2015)",
          raw: "Oxygen Permeability:  22 x 10–11[cm3O2(STP) x cm]/(sec x cm2 x mmHg) @35˚ C (Polarographic Method)",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/soflens-daily-disposable-pifg.pdf",
          condition: "DESCRIPTION 절 physical / optical properties 목록 · 라벨 원문에 `(Dk)`도 `(Dk/t)`도 붙어 있지 않다 · 문서 전체에서 `Dk` 문자열 0건",
          linkNote: "`10–11`의 `–11`과 `cm3`·`cm2`는 인쇄물에서 위첨자다. 바이오트루 원데이는 같은 자리에 `Oxygen Permeability (Dk):`라고 적었다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "소프렌 데일리 근시용 한국 브랜드 제품 페이지 · 상세정보 이미지 (effb4f4341da8.jpg · md5 81bfe603ca85c38db27475fdb42e3ec1)",
          raw: "산소 관련 항목 없음 (`제품 상세 안내` 표의 행은 재질·함수율·베이스 커브·직경·도수범위·착용 주기·포장 단위 7개뿐)",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=102",
          condition: "이미지 육안 확대 판독 · 페이지 HTML 본문에도 `Dk`·`산소` 문자열 각 0건",
          linkNote: "한국어 IFU·사양서 PDF는 찾지 못했다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Bausch + Lomb Contact Lens Parameters (미국 ECP 파라미터 일람)",
          raw: "Find lens parameters for Bausch + Lomb brands in one place, including INFUSE®, Biotrue® ONEday, and ULTRA®.",
          url: "https://ecp.bauschcontactlenses.com/products/parameters/",
          condition: "수록 제품은 INFUSE·Biotrue ONEday·ULTRA 계열뿐 · `SofLens`·`hilafilcon` 문자열 0건",
          linkNote: "개별 제품 경로 /products/soflens-daily-disposable/ 는 HTTP 404. 바이오트루에서 Dk/t 값을 얻었던 문서가 이 제품에는 존재하지 않는다"
        }
      ]
    },
    {
      id: "thickness",
      value: "0.05 mm ~ 0.75 mm (도수에 따라 변함)",
      state: "verified",
      flag: "글로벌 공식 자료 · 단일 시험도수 값 없음",
      sourceSummary: "미국 Package Insert / Fitting Guide가 인쇄한 유일한 중심두께 표기 · 2026.08.28 확인",
      caution: "제조사가 인쇄한 값은 도수 전 구간을 덮는 범위 하나뿐이며, `-3.00D 기준` 같은 단일 시험도수 값은 어떤 공식 자료에도 없습니다. 따라서 다른 제품의 단일 시험도수 중심두께 숫자와 직접 비교할 수 없습니다. 한국 공식 페이지의 사양표에도 중심두께 항목이 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "SofLens® daily disposable Package Insert / Fitting Guide (SL7 494 · 8046303 · effective as of February 2015)",
          raw: "Center Thickness: 0.05mm to 0.75mm (varies with power)",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/soflens-daily-disposable-pifg.pdf",
          condition: "LENS PARAMETERS AVAILABLE 절 · 단일값이 아니라 도수에 따른 범위",
          linkNote: "바이오트루 원데이는 별도의 ECP 웹 페이지·파라미터 PDF가 `0.10 mm @ -3.00D`를 인쇄했지만, 이 제품에는 그 문서가 없다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "소프렌 데일리 근시용 한국 브랜드 제품 페이지 · 상세정보 이미지 (effb4f4341da8.jpg · md5 81bfe603ca85c38db27475fdb42e3ec1)",
          raw: "중심두께 항목 없음",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=102",
          condition: "`제품 상세 안내` 표 7개 행에 두께 항목이 없음 · 이미지 육안 확대 판독",
          linkNote: "페이지 HTML 본문에도 두께 관련 문자열이 0건이다"
        }
      ]
    },
    {
      id: "replacement",
      value: "1일",
      state: "verified",
      sourceSummary: "한국 공식 제품 페이지의 `1일 교체용` 표기와 미국 공식 문서 2종의 single-use disposable 표기 · 2026.08.28 확인",
      caution: "교체주기입니다. 착용방식(착용 시간·수면 착용 여부)은 별도 개념이며 안경사 또는 안과 전문인의 판단이 필요합니다. MFDS 소분류 `매일착용 소프트 콘택트렌즈`는 착용 구분이지 교체주기가 아닙니다. 미국 Package Insert의 `Daily Wear` 절 제목도 착용방식 표기입니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "소프렌 데일리 근시용 한국 브랜드 제품 페이지 · 상세정보 이미지 (effb4f4341da8.jpg · md5 81bfe603ca85c38db27475fdb42e3ec1)",
          raw: "1일 교체용",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=102",
          condition: "상세정보 탭 `제품 상세 안내` 표 · 행 라벨 원문 `착용 주기`",
          linkNote: "같은 이미지의 고지 원문은 `매일착용소프트콘택트렌즈 / 무수정체안 및 질병이 없는 수정체안의 굴절이상(근시)의 교정을 위해 사용하는 일회용 단일초점렌즈`다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "SofLens® daily disposable Package Insert / Fitting Guide (SL7 494 · 8046303 · effective as of February 2015)",
          raw: "The lens is to be prescribed for single-use disposable wear, and is to be discarded after each removal.",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/soflens-daily-disposable-pifg.pdf",
          condition: "INDICATIONS 절 마지막 문장 · WEARING SCHEDULE 절에도 같은 문장 반복",
          linkNote: "같은 절이 `The wearing and replacement schedules should be determined by the eye care professional.`로 시작한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "SofLens® daily disposable Patient Information Booklet (SL7 495 · 8046405 · Effective as of February 2015)",
          raw: "Your Bausch + Lomb SofLens® daily disposable (hilafilcon B) Visibility Tinted Contact Lenses have been prescribed for single-use disposable wear, and should be discarded each time lenses are removed from your eyes.",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/soflens-daily-disposable-pib.pdf",
          condition: "INTRODUCTION 절",
          linkNote: "이 소책자에는 물성 수치가 전혀 없다(Water·Dk·thickness·59 각 0건). 교체 표기 근거로만 사용"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "매일착용 소프트 콘택트렌즈",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "itemPermitNo=수허 09-975 호 · 201행 전부 동일 소분류 · 등급 2",
          linkNote: "소분류 품목 명칭은 교체주기가 아니라 착용 구분이다. 표기에 공백이 있어(`매일착용 소프트 콘택트렌즈`) 바이오트루 원데이의 `매일착용소프트콘택트렌즈`와 문자열이 다르다"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 09-975 호",
      state: "verified",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 · 2026.08.28 확인",
      caution: "소프렌 계열은 제품마다 허가번호가 다릅니다. 이 번호는 소프렌 데일리 구면(근시용)의 번호이며, 난시용은 수허 11-407 호, 소프렌 59는 수허 06-1131 호, 소프렌 38은 수허 01-919 호입니다. 또한 이 허가는 소프렌 데일리 전용이 아니라 `트루핏 원데이(Truefit)`와 함께 묶여 있어, 번호만으로 소프렌 데일리 단독 품목을 분리할 수 없습니다. 한국 브랜드 페이지의 `제 2009-3220033-00028호`는 의료기기 판매업 신고번호이고, 상세 이미지의 `62026-I10-12-1415`는 의료기기 광고 사전심의 번호입니다. 둘 다 품목 허가번호가 아닙니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 09-975 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=바슈롬 · modelnm=Daily 조회 573건 전수 집계에서 구면은 201건이 모두 이 번호(난시용 372건은 수허 11-407 호). itemPermitNo=수허 09-975 호 단독 조회는 201행이며 distinct UDI-DI도 201, 업체명·업체구분·소분류·등급·모델명·업체 제품 명칭이 전부 동일",
          linkNote: "업체 제품 명칭 원문 `소프렌 데일리, 수분쿠션 렌즈, 저자극 렌즈, 트루핏 원데이, Truefit` · 모델명 원문 `Daily Disposable`(브랜드명 SofLens가 들어 있지 않다) · 업체명 `(주)바슈롬코리아` · 업체구분 `수입업` · 등급 2 · 포장내수량 10/30/90"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회 — 모델명 `SofLens` 조회 결과",
          raw: "SofLens 38(polymacon) / SofLens 59",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=바슈롬 · modelnm=SofLens 조회 208건 전수 집계 · distinct 2건(수허 01-919 호 옵티마 FW·소프렌 38 156건 / 수허 06-1131 호 소프렌 59 52건)",
          linkNote: "`SofLens`로 조회하면 이 제품은 나오지 않는다. 원장 모델명이 `Daily Disposable`이기 때문이다. 이름이 비슷한 소프렌 38·59의 번호를 데일리에 붙이면 안 된다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "소프렌 데일리 근시용 한국 브랜드 제품 페이지",
          raw: "허가번호 표기 없음 (`수허`·`허가`(허가번호 표기) 문자열 0건)",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=102",
          condition: "curl HTML 전문 검색과 상세정보 이미지 육안 판독 양쪽에서 확인",
          linkNote: "한국어 IFU PDF도 찾지 못해 MFDS UDI가 유일한 허가번호 근거"
        }
      ]
    },
    {
      id: "uv",
      value: "공식 자료에서 확인되지 않음",
      state: "unknown",
      flag: "확인되지 않음",
      sourceSummary: "검토한 한국·글로벌 공식 자료 3종 어디에도 UV 관련 문장·수치가 없음",
      caution: "표기를 찾지 못했다는 뜻이며 `UV 차단이 없다`고 단정한 것이 아닙니다. 같은 제조사의 바이오트루 원데이 Package Insert는 같은 DESCRIPTION 절에 자외선 흡수 단량체 문단과 투과율 수치를 인쇄하지만, 이 제품의 문서에는 그 문단 자체가 없고 착색 안료(Reactive Blue Dye 246)만 언급합니다. 환자용 소책자에도 다른 제품에는 있는 UV 경고문이 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "SofLens® daily disposable Package Insert / Fitting Guide (SL7 494 · 8046303 · effective as of February 2015)",
          raw: "This lens is tinted blue with Reactive Blue Dye 246.",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/soflens-daily-disposable-pifg.pdf",
          condition: "DESCRIPTION 절 · 이 문장 앞뒤에 자외선 관련 문장이 없다 · 문서 전문에서 `UV` 0건, `ultraviolet` 0건, `UV-absorbing` 0건",
          linkNote: "`transmittance`는 `Light Transmittance: C.I.E. Y value - approximately 95%` 1건뿐이며 가시광 투과율이지 자외선 투과율이 아니다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "SofLens® daily disposable Patient Information Booklet (SL7 495 · 8046405 · Effective as of February 2015)",
          raw: "UV·ultraviolet 문자열 0건 (UV 경고 문단 없음)",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/soflens-daily-disposable-pib.pdf",
          condition: "12쪽 전문 검색",
          linkNote: "바이오트루 원데이 환자용 소책자에는 `WARNING: UV absorbing contact lenses are NOT substitutes for protective UV absorbing eyewear …` 경고가 있다. 이 문서에는 없다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "소프렌 데일리 근시용 한국 브랜드 제품 페이지 · 상세정보 이미지 (effb4f4341da8.jpg · md5 81bfe603ca85c38db27475fdb42e3ec1)",
          raw: "UV·자외선 표기 없음 (`자외선` 0건 · `제품 상세 안내` 표에 UV 행 없음)",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=102",
          condition: "curl HTML 전문 검색과 상세정보 이미지 육안 확대 판독 양쪽에서 확인",
          linkNote: "한국 표기 자체가 존재하지 않는다"
        }
      ]
    }
  ]
}
