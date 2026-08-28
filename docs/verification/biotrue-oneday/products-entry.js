// 바이오트루 원데이® (Biotrue® ONEday) — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/biotrue-oneday/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
{
  id: "biotrue-oneday",
  slug: "biotrue-oneday",
  aliases: ["바이오트루 원데이", "Biotrue ONEday", "nesofilcon A"],
  name: "바이오트루 원데이® / Biotrue® ONEday",
  selectorLabel: "바이오트루 원데이",
  maker: "Bausch + Lomb",
  distributor: "(주)바슈롬코리아",
  type: "근시·원시용 투명 구면 · 1일 교체",
  packageSpecs: [
    { value: "BC 8.6", label: "Base Curve · mm" },
    { value: "DIA 14.2", label: "Diameter · mm" },
    { value: "78%", label: "Water content" },
    { value: "42", label: "Dk / Dk-t 라벨 충돌" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.6 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Bausch + Lomb 미국 공식 사양 3종에서 동일 · 2026.08.28 확인",
      caution: "한국 공식 자료(브랜드 페이지·제품 목록·기업 사이트)에는 파라미터 표가 없어 미국 공식 자료가 유일한 근거입니다. 한국에서 어떤 파라미터가 공급되는지는 확인하지 못했습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Biotrue® ONEday Package Insert / Fitting Guide (Rev. 2019-11 · 8101906)",
          raw: "Base Curve: 8.6mm",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/biotrue-one-day-pifg53.pdf",
          condition: "LENS PARAMETERS AVAILABLE 절 · 바로 아랫줄 8.4mm (Astigmatism)로 난시용과 구분 표기",
          linkNote: "MFDS 원장 모델명 nesofilcon A로 한국 유통 제품과 재질 연결 확인"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Biotrue® ONEday Contact Lens Parameters (BOD.0003.USA.23)",
          raw: "8.6 mm",
          url: "https://ecp.bauschcontactlenses.com/siteassets/pdf/biotrue-oneday-contact-lens-parameters.pdf",
          condition: "BASE CURVE 행 · BIOTRUE® ONEDAY(구면) 열 · 난시용 열은 8.4 mm",
          linkNote: "PDF 좌표가 한 줄로 뭉쳐 있어 열 귀속은 PI/FG의 명시적 난시용 구분과 대조해 확인"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Biotrue® ONEday 미국 ECP 제품 페이지 (MTB.0263.USA.22)",
          raw: "BASE CURVE 8.6 mm",
          url: "https://ecp.bauschcontactlenses.com/products/biotrue-oneday/",
          condition: "구면 전용 페이지의 Biotrue® ONEday contact lens parameters 표",
          linkNote: "페이지 고지: All information and materials on this site pertain to the U.S. only"
        }
      ]
    },
    {
      id: "dia",
      value: "14.2 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Bausch + Lomb 미국 공식 사양 3종에서 동일 · 2026.08.28 확인",
      caution: "한국 공식 자료에 직경 표기가 없어 미국 공식 자료가 유일한 근거입니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Biotrue® ONEday Package Insert / Fitting Guide (Rev. 2019-11 · 8101906)",
          raw: "Diameter: 14.2mm",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/biotrue-one-day-pifg53.pdf",
          condition: "LENS PARAMETERS AVAILABLE 절 · 바로 아랫줄 14.5mm (Astigmatism)로 난시용과 구분 표기",
          linkNote: "구면 제품의 값"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Biotrue® ONEday Contact Lens Parameters (BOD.0003.USA.23)",
          raw: "14.2 mm",
          url: "https://ecp.bauschcontactlenses.com/siteassets/pdf/biotrue-oneday-contact-lens-parameters.pdf",
          condition: "DIAMETER 행 · BIOTRUE® ONEDAY(구면) 열 · 난시용 열은 14.5 mm",
          linkNote: "멀티포컬 열도 14.2 mm"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Biotrue® ONEday 미국 ECP 제품 페이지 (MTB.0263.USA.22)",
          raw: "DIAMETER 14.2 mm",
          url: "https://ecp.bauschcontactlenses.com/products/biotrue-oneday/",
          condition: "구면 전용 페이지의 파라미터 표",
          linkNote: "미국 한정 고지가 붙은 페이지"
        }
      ]
    },
    {
      id: "water",
      value: "78%",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Package Insert / Fitting Guide의 Water Content 값과 측정 조건 문장 · 2026.08.28 확인",
      caution: "제조사는 이 값을 `멸균 식염수에 담근 상태의 중량 기준 78%`로 적습니다. 코어·표면을 나눠 표기하는 제품(데일리스 토탈원 등)의 숫자와 같은 축에 놓고 비교하지 않습니다. `각막과 같은 함수율`은 제조사 광고 문구이므로 값에 포함하지 않았습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Biotrue® ONEday Package Insert / Fitting Guide (Rev. 2019-11 · 8101906)",
          raw: "Water Content: 78%",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/biotrue-one-day-pifg53.pdf",
          condition: "DESCRIPTION 절 physical/optical properties 목록 · 같은 절 본문에 `is 78% water by weight when immersed in a sterile saline solution`",
          linkNote: "pypdf 추출 문자열은 자간 때문에 `W ater Content: 78%`로 나온다. 인쇄된 문자열은 Water Content다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Biotrue® ONEday Contact Lens Parameters (BOD.0003.USA.23)",
          raw: "78%",
          url: "https://ecp.bauschcontactlenses.com/siteassets/pdf/biotrue-oneday-contact-lens-parameters.pdf",
          condition: "WATER CONTENT 행 · 구면·난시용·멀티포컬 3열 모두 78%",
          linkNote: "측정 위치(벌크·코어·표면) 구분 표기는 없다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Biotrue® ONEday 미국 ECP 제품 페이지 (MTB.0263.USA.22)",
          raw: "WATER CONTENT 78%",
          url: "https://ecp.bauschcontactlenses.com/products/biotrue-oneday/",
          condition: "구면 전용 페이지의 파라미터 표",
          linkNote: "같은 페이지의 `same water content as the cornea (78%)`·`maintain nearly all their moisture for up to 16 hours`는 광고 문구여서 값으로 옮기지 않았다"
        }
      ]
    },
    {
      id: "material",
      value: "nesofilcon A",
      state: "verified",
      sourceSummary: "MFDS 한국 허가 원장 모델명과 미국 공식 사양이 동일한 재질명을 사용",
      caution: "제조사는 이 재질을 HyperGel®이라는 상표명으로도 부릅니다. 상표명은 재질명이 아닙니다. 실리콘 하이드로겔이 아닌 하이드로겔(hydrophilic copolymer) 계열입니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "nesofilcon A",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "itemPermitNo=수허 13-584 호 조회 378행 · 같은 UDI-DI에 모델명이 `Biotrue ONEday`와 `nesofilcon A` 두 개로 등록",
          linkNote: "한국 허가 원장에 재질명이 모델명으로 직접 등재돼 있다 — 이 제품에서 유일하게 한국 공식 자료가 뒷받침하는 값"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Biotrue® ONEday Package Insert / Fitting Guide (Rev. 2019-11 · 8101906)",
          raw: "The Bausch + Lomb Biotrue® ONEday lens material, HyperGel® (nesofilcon A), is a hydrophilic copolymer of 2-hydroxyethyl methacrylate and N-vinylpyrrolidone",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/biotrue-one-day-pifg53.pdf",
          condition: "DESCRIPTION 절 첫 문장",
          linkNote: "상표명 HyperGel®과 USAN 재질명 nesofilcon A를 같은 문장에서 구분"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Biotrue® ONEday Contact Lens Parameters (BOD.0003.USA.23)",
          raw: "nesofilcon A",
          url: "https://ecp.bauschcontactlenses.com/siteassets/pdf/biotrue-oneday-contact-lens-parameters.pdf",
          condition: "MATERIAL 행",
          linkNote: "PDF는 fi 합자 글리프로 인쇄돼 추출 문자열이 nesoﬁlcon A로 나온다. 인쇄된 단어는 nesofilcon A다"
        }
      ]
    },
    {
      id: "dkt",
      value: "42",
      state: "conflict",
      flag: "공식 자료 간 물리량 라벨 충돌",
      sourceSummary: "제조사 공식 자료 3종이 같은 숫자 42를 Dk / Dk/t / oxygen transmissibility로 서로 다르게 부른다",
      caution: "Dk(산소투과계수)와 Dk/t(산소투과율)는 두께로 나눈 관계여서 같은 숫자일 수 없습니다. 어느 쪽이 맞는지 판단하지 않고 세 원문을 그대로 병기합니다. 값을 환산하거나 유도하지 않았습니다. 조건이 다른 제품의 Dk/t와 숫자만 직접 비교하지 않습니다.",
      conflicts: [
        { source: "Package Insert / Fitting Guide (Rev. 2019-11)", value: "Oxygen Permeability (Dk): 42 x 10–11[cm3O2(STP) x cm]/(sec x cm2 x mmHg) @ 35°C (Polarographic Method)" },
        { source: "Contact Lens Parameters PDF (BOD.0003.USA.23)", value: "OXYGEN PERMEABILITY (Dk/t) — 42 @ -3.00D" },
        { source: "미국 ECP 제품 페이지 (MTB.0263.USA.22)", value: "OXYGEN TRANSMISSIBILITY (Dk/t) — 42 @ -3.00D" }
      ],
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Biotrue® ONEday Package Insert / Fitting Guide (Rev. 2019-11 · 8101906)",
          raw: "Oxygen Permeability (Dk):  42 x 10–11[cm3O2(STP) x cm]/(sec x cm2 x mmHg) @ 35°C (Polarographic Method)",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/biotrue-one-day-pifg53.pdf",
          condition: "DESCRIPTION 절 physical/optical properties 목록 · 분극법 · 35°C · 시험 도수 표기 없음",
          linkNote: "이 문서는 Dk라고 적으며 두께 조건이나 시험 도수를 붙이지 않는다. `10–11`의 `–11`과 `cm3`·`cm2`는 인쇄물에서 위첨자다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Biotrue® ONEday Contact Lens Parameters (BOD.0003.USA.23)",
          raw: "42 @ -3.00D",
          url: "https://ecp.bauschcontactlenses.com/siteassets/pdf/biotrue-oneday-contact-lens-parameters.pdf",
          condition: "행 라벨 원문은 OXYGEN PERMEABILITY (Dk/t) · 구면·난시용·멀티포컬 3열 모두 같은 값",
          linkNote: "같은 행에 permeability(Dk)와 Dk/t가 함께 적혀 있어 라벨 자체가 모순된다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Biotrue® ONEday 미국 ECP 제품 페이지 (MTB.0263.USA.22)",
          raw: "OXYGEN TRANSMISSIBILITY (Dk/t) 42 @ -3.00D",
          url: "https://ecp.bauschcontactlenses.com/products/biotrue-oneday/",
          condition: "구면 전용 페이지의 파라미터 표 · 측정법·온도 표기 없음",
          linkNote: "같은 표의 중심두께 0.10 mm @ -3.00D와 함께 해석해야 한다"
        }
      ]
    },
    {
      id: "thickness",
      value: "0.10 mm",
      state: "verified",
      flag: "글로벌 공식 자료 · 시험 도수 확인",
      sourceSummary: "미국 ECP 페이지와 파라미터 PDF가 -3.00D 기준 0.10 mm로 일치",
      caution: "-3.00D 기준 중심두께입니다. 같은 제조사의 Package Insert는 두께를 단일값이 아니라 `0.05mm to 0.75mm (도수에 따라 변함)` 범위로 적고, 자외선 투과 프로파일 각주에서는 `-1.25D에서 공칭 0.1 mm`라고 적습니다. 조건이 다른 값이므로 하나로 합치지 않았습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Biotrue® ONEday 미국 ECP 제품 페이지 (MTB.0263.USA.22)",
          raw: "CENTER THICKNESS 0.10 mm @ -3.00D",
          url: "https://ecp.bauschcontactlenses.com/products/biotrue-oneday/",
          condition: "구면 전용 페이지의 파라미터 표 · Dk/t 42 @ -3.00D와 같은 시험 도수",
          linkNote: "Dk/t 조건과 연결해 해석"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Biotrue® ONEday Contact Lens Parameters (BOD.0003.USA.23)",
          raw: "0.10 mm @ -3.00D",
          url: "https://ecp.bauschcontactlenses.com/siteassets/pdf/biotrue-oneday-contact-lens-parameters.pdf",
          condition: "CENTER THICKNESS 행 · 구면·난시용·멀티포컬 3열 모두 같은 값",
          linkNote: "웹 페이지 값과 일치"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Biotrue® ONEday Package Insert / Fitting Guide (Rev. 2019-11 · 8101906)",
          raw: "Center Thickness: 0.05mm to 0.75mm (varies with power)",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/biotrue-one-day-pifg53.pdf",
          condition: "LENS PARAMETERS AVAILABLE 절 · 단일값이 아니라 도수에 따른 범위",
          linkNote: "같은 문서의 자외선 프로파일 각주는 `Nominal Center Thickness 0.1 mm (-1.25D)`로 다른 시험 도수를 쓴다"
        }
      ]
    },
    {
      id: "replacement",
      value: "1일",
      state: "verified",
      sourceSummary: "제조사 공식 문서 2종의 single-use disposable 표기와 한국 브랜드 페이지의 하루용 분류",
      caution: "교체주기입니다. 착용방식(착용 시간·수면 착용 여부)은 별도 개념이며 안경사 또는 안과 전문인의 판단이 필요합니다. 미국 파라미터 표의 `Daily wear`는 착용방식 표기이고 교체주기 행은 그 표에 아예 없습니다. MFDS 소분류 `매일착용소프트콘택트렌즈`도 착용 구분이지 교체주기가 아닙니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Biotrue® ONEday Package Insert / Fitting Guide (Rev. 2019-11 · 8101906)",
          raw: "The lens is to be prescribed for single-use disposable wear and is to be discarded after each removal.",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/biotrue-one-day-pifg53.pdf",
          condition: "DESCRIPTION 절 마지막 문장 · WEARING SCHEDULE 절에도 같은 문장 반복",
          linkNote: "같은 절이 `The wearing and replacement schedules should be determined by the eye care practitioner.`로 시작한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Biotrue® ONEday Patient Information Booklet (8101804 · Effective as of July 2017)",
          raw: "The lens has been prescribed for single-use disposable wear, and is to be discarded after each removal.",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/biotrue-one-day-pib.pdf",
          condition: "WEARING RESTRICTIONS AND INDICATIONS 절 마지막 문장",
          linkNote: "미국 ECP 페이지의 Patient Information Booklet 링크(biotrue-one-day-pib63.pdf)와 바이트 동일 문서"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "바이오트루 원데이 근시용 한국 브랜드 제품 페이지",
          raw: "하루용 투명렌즈/근시용",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=99",
          condition: "제품 분류 표기 · 상위 카테고리는 `데일리 투명렌즈`",
          linkNote: "한국 페이지에 `1일 교체`라는 문자열은 없다. 한국 유통 근거로만 사용"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "매일착용소프트콘택트렌즈",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "itemPermitNo=수허 13-584 호 · 378행 전부 동일 소분류 · 등급 2",
          linkNote: "소분류 품목 명칭은 교체주기가 아니라 착용 구분이다"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 13-584 호",
      state: "verified",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 · 2026.08.28 확인",
      caution: "바이오트루 계열은 구면·난시용·멀티포컬의 허가번호가 서로 다릅니다. 이 번호는 구면 제품의 번호입니다. 난시용은 수허 16-386 호, 멀티포컬(For Presbyopia)은 수허 16-17 호입니다. 한국 브랜드 페이지의 `제 2009-3220033-00028호`는 의료기기 판매업 신고번호이며 품목 허가번호가 아닙니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 13-584 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=바슈롬 · modelnm=Biotrue 조회 2,933건 전수 집계에서 구면은 189건이 모두 이 번호. itemPermitNo=수허 13-584 호 단독 조회는 378행(= UDI-DI 189 × 모델명 2개)이며 업체명·업체구분·소분류·등급·업체 제품 명칭이 전부 동일",
          linkNote: "업체 제품 명칭 원문 `바이오트루 원데이 렌즈, 수분 렌즈, 하이퍼겔 렌즈` · 업체명 `(주)바슈롬코리아` · 업체구분 `수입업` · 등급 2 · 포장내수량 5/30/90"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "바이오트루 원데이 근시용 한국 브랜드 제품 페이지",
          raw: "허가번호 표기 없음 (`수허`·`허가번호` 문자열 0건)",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=99",
          condition: "curl HTML 전문 검색과 브라우저 렌더링 텍스트 양쪽에서 확인",
          linkNote: "한국어 IFU PDF도 찾지 못해 MFDS UDI가 유일한 허가번호 근거"
        }
      ]
    },
    {
      id: "uv",
      value: "UVB 투과율 5% 미만 (280~315nm) / UVA 투과율 50% 미만 (316~380nm)",
      state: "verified",
      flag: "글로벌 공식 자료 · 차단율이 아닌 투과율 표기",
      sourceSummary: "Package Insert / Fitting Guide 원문. 미국 파라미터 표와 웹 페이지는 체크 표시뿐이고 수치가 없음",
      caution: "제조사가 인쇄한 값은 `투과율(transmittance)`입니다. 이를 `95% 이상 차단`처럼 차단율로 바꿔 적는 것은 유도이므로 하지 않았습니다. 미국 파라미터 표와 ECP 페이지의 UV PROTECTION 칸은 체크 표시 이미지(대체 텍스트 없음)이고 수치가 없습니다. 한국 공식 자료에는 UV 표기 자체가 없어 한국 표기값은 확인하지 못했습니다. 자외선 차단 콘택트렌즈는 눈과 주변을 완전히 덮지 못하므로 선글라스나 고글을 대신할 수 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Biotrue® ONEday Package Insert / Fitting Guide (Rev. 2019-11 · 8101906)",
          raw: "The transmittance characteristics are less than 5% in the UVB range of 280nm to 315nm and less than 50% in the UVA range of 316nm to 380nm.",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/biotrue-one-day-pifg53.pdf",
          condition: "DESCRIPTION 절 · 바로 앞 문장 `A benzotriazole UV-absorbing monomer is incorporated into the manufacturing process to block Ultraviolet (UV) radiation.` · 같은 문서 HOW THE LENS WORKS 절에 같은 문장 반복",
          linkNote: "경고 원문 `UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear, such as UV-absorbing goggles or sunglasses, because they do not completely cover the eye and surrounding area.`"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Biotrue® ONEday 미국 ECP 제품 페이지 (MTB.0263.USA.22)",
          raw: "UV PROTECTION** — 값 칸은 <img src=\"/siteassets/img/check-mark.svg\" alt=\"\">",
          url: "https://ecp.bauschcontactlenses.com/products/biotrue-oneday/",
          condition: "파라미터 표 UV PROTECTION 행 · 차단율·투과율 수치 0건",
          linkNote: "값이 이미지이고 대체 텍스트가 비어 있어 표에서는 수치를 얻을 수 없다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "바이오트루 원데이 근시용 한국 브랜드 제품 페이지",
          raw: "UV·자외선 표기 없음 (`자외선` 0건, `UV` 0건)",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=99",
          condition: "curl HTML 전문 검색과 브라우저 렌더링 텍스트 양쪽에서 확인 · 상세정보는 이미지 1장 전용",
          linkNote: "한국 표기 수치는 미확인 상태이며 없음으로 단정하지 않는다"
        }
      ]
    }
  ]
}
