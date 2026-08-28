// 울트라 원데이 (Bausch + Lomb ULTRA ONE DAY · 미국명 INFUSE® One-Day) — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/ultra-one-day/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
{
  id: "ultra-one-day",
  slug: "ultra-one-day",
  aliases: ["울트라 원데이", "Bausch + Lomb ULTRA ONE DAY", "INFUSE One-Day", "kalifilcon A"],
  name: "울트라 원데이 / Bausch + Lomb ULTRA ONE DAY (미국명 INFUSE® One-Day)",
  selectorLabel: "울트라 원데이",
  maker: "Bausch + Lomb",
  distributor: "(주)바슈롬코리아",
  type: "근시·원시용 투명 구면 · 1일 교체",
  packageSpecs: [
    { value: "BC 8.6", label: "Base Curve · mm" },
    { value: "DIA 14.2", label: "Diameter · mm" },
    { value: "55%", label: "Water content" },
    { value: "134", label: "Dk/t at -3.00D" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.6 mm",
      state: "verified",
      flag: "한국·글로벌 공식 자료 일치",
      sourceSummary: "한국 브랜드 페이지 상세 이미지의 사양표와 Bausch + Lomb 미국 공식 사양 4종이 같은 값 · 2026.08.28 확인",
      caution: "한국 페이지는 이 값을 본문 텍스트가 아니라 상세정보 탭의 이미지 1장 안에 인쇄합니다. 이미지에는 대체 텍스트가 없어 페이지 텍스트 검색으로는 `베이스`·`커브`가 0건입니다. 단위 표기는 한국 `8.6mm`(붙임)와 미국 `8.6 mm`(띄움)로 다릅니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "울트라 원데이 한국 브랜드 제품 페이지 상세정보 이미지",
          raw: "베이스 커브  8.6mm",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=98",
          condition: "`제품 상세 안내` 표 2행 좌측 · 이미지 https://cdn.imweb.me/upload/S2023010385e2991530ec3/1618649b99469.jpg (1020×2106px, 대체 텍스트 없음)",
          linkNote: "페이지 HTML 텍스트에는 이 값이 없다. 이미지를 원본 해상도로 확대해 읽었다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Bausch + Lomb INFUSE® Package Insert / Fitting Guide (Rev. 2023-07 · 8191603)",
          raw: "Base Curve: 8.6mm",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/bausch-lomb-infuse-package-insert-fitting-guide73.pdf",
          condition: "CONTACT LENS PARAMETERS AVAILABLE 절 · 구면·난시용·멀티포컬 공통 문서에서 BC는 변형별 구분 표기가 없다",
          linkNote: "같은 절의 Diameter만 14.5mm (Astigmatism)로 난시용을 따로 적는다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "BAUSCH + LOMB INFUSE® ONE-DAY Contact Lens Parameters (INF.0007.USA.24)",
          raw: "8.6 mm",
          url: "https://ecp.bauschcontactlenses.com/siteassets/pdf/infuse-oneday-contact-lens-parameters.pdf",
          condition: "BASE CURVE 행 · INFUSE®(구면)·FOR ASTIGMATISM·MULTIFOCAL 3열 모두 8.6 mm",
          linkNote: "PDF 텍스트 좌표가 한 줄(y=14.0)로 뭉쳐 있어 열 귀속은 구면 전용 웹 페이지와 대조해 확인"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "INFUSE® One-Day 미국 ECP 제품 페이지 (MTB.0263.USA.22)",
          raw: "BASE CURVE 8.6 mm",
          url: "https://ecp.bauschcontactlenses.com/products/infuse-one-day/",
          condition: "구면 전용 페이지의 INFUSE® contact lens parameters 표",
          linkNote: "페이지 고지: All information and materials on this site pertain to the U.S. only"
        }
      ]
    },
    {
      id: "dia",
      value: "14.2 mm",
      state: "verified",
      flag: "한국·글로벌 공식 자료 일치",
      sourceSummary: "한국 브랜드 페이지 상세 이미지의 사양표와 Bausch + Lomb 미국 공식 사양 4종이 같은 값 · 2026.08.28 확인",
      caution: "난시용(울트라 원데이 난시용)은 14.5 mm로 다릅니다. 이 값은 구면 제품의 값입니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "울트라 원데이 한국 브랜드 제품 페이지 상세정보 이미지",
          raw: "직경  14.2mm",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=98",
          condition: "`제품 상세 안내` 표 2행 우측 · 상세정보 탭 이미지 안",
          linkNote: "페이지 HTML 텍스트에는 `직경` 0건, `14.2` 0건이다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Bausch + Lomb INFUSE® Package Insert / Fitting Guide (Rev. 2023-07 · 8191603)",
          raw: "Diameter: 14.2mm",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/bausch-lomb-infuse-package-insert-fitting-guide73.pdf",
          condition: "CONTACT LENS PARAMETERS AVAILABLE 절 · 바로 아랫줄 14.5mm (Astigmatism)로 난시용과 구분 표기",
          linkNote: "구면 제품의 값"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "BAUSCH + LOMB INFUSE® ONE-DAY Contact Lens Parameters (INF.0007.USA.24)",
          raw: "14.2 mm",
          url: "https://ecp.bauschcontactlenses.com/siteassets/pdf/infuse-oneday-contact-lens-parameters.pdf",
          condition: "DIAMETER 행 · 추출 순서 `14.2 mm · 14.5 mm · 14.2 mm` 중 첫 번째(구면) 열",
          linkNote: "난시용 열 14.5 mm는 미국 파라미터 일람 페이지의 난시용 절에도 단독으로 인쇄돼 열 귀속이 확정된다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "INFUSE® One-Day 미국 ECP 제품 페이지 (MTB.0263.USA.22)",
          raw: "DIAMETER 14.2 mm",
          url: "https://ecp.bauschcontactlenses.com/products/infuse-one-day/",
          condition: "구면 전용 페이지의 파라미터 표",
          linkNote: "미국 한정 고지가 붙은 페이지"
        }
      ]
    },
    {
      id: "water",
      value: "55%",
      state: "verified",
      flag: "한국·글로벌 공식 자료 일치",
      sourceSummary: "한국 브랜드 페이지 상세 이미지의 `함수율 55%`와 Package Insert / Fitting Guide의 측정 조건 문장 · 2026.08.28 확인",
      caution: "제조사는 이 값을 `식염수에 담근 상태의 중량 기준 55%`로 적습니다. 코어·표면을 나눠 표기하는 제품(데일리스 토탈원 등)의 숫자와 같은 축에 놓고 비교하지 않습니다. 미국 페이지의 `95% maintained for 16 hours`는 사내 자료(Data on file) 기반 광고 문구이므로 값에 포함하지 않았습니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "울트라 원데이 한국 브랜드 제품 페이지 상세정보 이미지",
          raw: "함수율  55%",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=98",
          condition: "`제품 상세 안내` 표 1행 우측 · 측정 위치(벌크·코어·표면) 구분 표기는 없다",
          linkNote: "페이지 HTML 텍스트에는 `함수율` 0건이다. 값은 상세정보 이미지 안에만 있다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Bausch + Lomb INFUSE® Package Insert / Fitting Guide (Rev. 2023-07 · 8191603)",
          raw: "Water Content: 55%",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/bausch-lomb-infuse-package-insert-fitting-guide73.pdf",
          condition: "DESCRIPTION 절 physical/optical properties 목록 · 같은 절 첫 문장에 `is 55% water by weight when immersed in a saline solution`",
          linkNote: "pypdf 추출 문자열은 자간 때문에 `W ater Content: 55%`로 나온다. 인쇄된 문자열은 Water Content다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "BAUSCH + LOMB INFUSE® ONE-DAY Contact Lens Parameters (INF.0007.USA.24)",
          raw: "55%",
          url: "https://ecp.bauschcontactlenses.com/siteassets/pdf/infuse-oneday-contact-lens-parameters.pdf",
          condition: "WATER CONTENT 행 · 구면·난시용·멀티포컬 3열 모두 55%",
          linkNote: "측정 위치 구분 표기는 없다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "INFUSE® One-Day 미국 ECP 제품 페이지 (MTB.0263.USA.22)",
          raw: "WATER CONTENT 55%",
          url: "https://ecp.bauschcontactlenses.com/products/infuse-one-day/",
          condition: "구면 전용 페이지의 파라미터 표",
          linkNote: "같은 페이지의 `55% Moisture1 With 95% maintained for 16 hours1`는 광고 문구여서 값으로 옮기지 않았다"
        }
      ]
    },
    {
      id: "material",
      value: "kalifilcon A",
      state: "verified",
      flag: "한국 브랜드 페이지 철자 오기 있음",
      sourceSummary: "MFDS 한국 허가 원장 모델명과 미국 공식 사양이 같은 재질명을 사용 · 2026.08.28 확인",
      caution: "한국 브랜드 페이지의 상세 이미지는 이 재질을 `kalificon A`로, `l` 하나가 빠진 철자로 인쇄합니다. MFDS 한국 허가 원장과 미국 공식 자료 4종은 모두 `kalifilcon A`이고, MFDS에서 `kalificon`으로 조회하면 0건입니다. 재질이 다르다는 뜻이 아니라 브랜드 페이지의 표기 오류입니다. 이 재질은 실리콘 하이드로겔이며, 같은 `울트라` 이름을 쓰는 월간 제품의 재질 `samfilcon A`와는 다른 재질입니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "kalifilcon A",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "itemPermitNo=수허 20-222 호 조회 180행 전부의 모델명 · 같은 행의 업체 제품 명칭은 `Ultra Oneday, 울트라 원데이`",
          linkNote: "한국 허가 원장이 재질명을 모델명으로 등재하고 있어, 한국 판매명 `울트라 원데이`와 미국 판매명 `INFUSE® One-Day`를 잇는 유일한 공식 연결 고리다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "울트라 원데이 한국 브랜드 제품 페이지 상세정보 이미지",
          raw: "재질  kalificon A (실리콘 하이드로겔)",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=98",
          condition: "`제품 상세 안내` 표 1행 좌측 · 인쇄된 철자를 그대로 옮긴 것이며 `l`이 빠져 있다",
          linkNote: "재질 계열 표기 `(실리콘 하이드로겔)`은 미국 일람 페이지의 `Silicone Hydrogel Daily Disposable`과 일치한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Bausch + Lomb INFUSE® Package Insert / Fitting Guide (Rev. 2023-07 · 8191603)",
          raw: "The Bausch + Lomb INFUSE® lens material, kalifilcon A, is a hydrophilic copolymer of 2-hydroxyethyl methacrylate and N-vinylpyrrolidone",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/bausch-lomb-infuse-package-insert-fitting-guide73.pdf",
          condition: "DESCRIPTION 절 첫 문장",
          linkNote: "같은 문서는 제품명을 `Bausch + Lomb INFUSE® (kalifilcon A) One-Day Soft (Hydrophilic) Contact Lens`로 적는다. `ULTRA ONE DAY`라는 문자열은 이 문서에 없다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "BAUSCH + LOMB INFUSE® ONE-DAY Contact Lens Parameters (INF.0007.USA.24)",
          raw: "kalifilcon A",
          url: "https://ecp.bauschcontactlenses.com/siteassets/pdf/infuse-oneday-contact-lens-parameters.pdf",
          condition: "MATERIAL 행 · 3열 모두 동일",
          linkNote: "PDF는 fi 합자 글리프로 인쇄돼 추출 문자열이 kaliﬁlcon A로 나온다. 인쇄된 단어는 kalifilcon A다"
        }
      ]
    },
    {
      id: "dkt",
      value: "134",
      state: "verified",
      flag: "글로벌 공식 자료 · 시험 도수 -3.00D",
      sourceSummary: "미국 ECP 제품 페이지·파라미터 PDF·파라미터 일람 페이지가 모두 `OXYGEN TRANSMISSIBILITY (Dk/t) 134 @ -3.00D` · 2026.08.28 확인",
      caution: "`-3.00D 기준 Dk/t`입니다. 같은 제조사의 Package Insert는 다른 물리량인 `Oxygen Permeability (Dk)`를 `107 x 10⁻¹¹ … @ 35°C (분극법)`으로 따로 적습니다. Dk와 Dk/t는 두께로 나눈 관계여서 서로 다른 값이며, 본 검증은 둘을 환산하거나 유도하지 않았습니다. 주의: 숫자 `107`은 같은 문서군에서 두 가지 뜻으로 쓰입니다 — 구면 렌즈의 Dk이면서, 난시용 렌즈의 Dk/t(`107 @ -3.00D`)이기도 합니다. 한국 공식 자료에는 Dk·Dk/t 표기가 전혀 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "INFUSE® One-Day 미국 ECP 제품 페이지 (MTB.0263.USA.22)",
          raw: "OXYGEN TRANSMISSIBILITY (Dk/t) 134 @ -3.00D",
          url: "https://ecp.bauschcontactlenses.com/products/infuse-one-day/",
          condition: "구면 전용 페이지의 파라미터 표 · 같은 표의 중심두께는 0.08 mm @ -3.00D · 측정법·온도 표기 없음",
          linkNote: "같은 페이지 본문의 `134 Dk/t†`에는 각주 `†Oxygen transmissibility @ -3.00D.`가 붙는다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "BAUSCH + LOMB INFUSE® ONE-DAY Contact Lens Parameters (INF.0007.USA.24)",
          raw: "134 @ -3.00D",
          url: "https://ecp.bauschcontactlenses.com/siteassets/pdf/infuse-oneday-contact-lens-parameters.pdf",
          condition: "행 라벨 원문 OXYGEN TRANSMISSIBILITY (Dk/t) · 추출 순서 `134 @ -3.00D · 107 @ -3.00D · 134 @ -3.00D` 중 첫 번째(구면) 열",
          linkNote: "두 번째 열(난시용)의 107 @ -3.00D는 미국 파라미터 일람 페이지의 난시용 절에도 단독으로 인쇄돼 열 귀속이 확정된다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "Bausch + Lomb 미국 파라미터 일람 페이지",
          raw: "OXYGEN TRANSMISSIBILITY (Dk/t) 134 @ -3.00D",
          url: "https://ecp.bauschcontactlenses.com/products/parameters/",
          condition: "`INFUSE® One-Day Silicone Hydrogel Daily Disposable` 절 · 같은 페이지의 난시용 절은 107 @ -3.00D",
          linkNote: "구면과 난시용을 별개 절로 인쇄하는 유일한 웹 자료다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Bausch + Lomb INFUSE® Package Insert / Fitting Guide (Rev. 2023-07 · 8191603)",
          raw: "Oxygen Permeability (Dk):  107 x 10–11 [cm3O2(STP) x cm]/(sec x cm2 x mmHg) @ 35°C (Polarographic Method)",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/bausch-lomb-infuse-package-insert-fitting-guide73.pdf",
          condition: "DESCRIPTION 절 physical/optical properties 목록 · 분극법 · 35°C · 시험 도수 표기 없음 · 라벨은 Dk이지 Dk/t가 아니다",
          linkNote: "표시값 134와 다른 물리량이므로 값으로 쓰지 않고 조건 비교용으로만 남긴다. `10–11`의 `–11`과 `cm3`·`cm2`는 인쇄물에서 위첨자다"
        }
      ]
    },
    {
      id: "thickness",
      value: "0.08 mm",
      state: "verified",
      flag: "글로벌 공식 자료 · 시험 도수 -3.00D",
      sourceSummary: "미국 ECP 페이지·파라미터 PDF·파라미터 일람 페이지가 -3.00D 기준 0.08 mm로 일치 · 2026.08.28 확인",
      caution: "-3.00D 기준 중심두께입니다. 같은 제조사의 Package Insert는 두께를 단일값이 아니라 `0.05mm to 0.75mm (도수에 따라 변함)` 범위로 적고, 자외선 투과 프로파일 각주에서는 `-1.00D에서 공칭 0.08 mm`라고 **다른 시험 도수**로 적습니다. 숫자가 같아도 조건이 다르므로 하나로 합치지 않았습니다. 한국 공식 자료에는 중심두께 항목이 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "INFUSE® One-Day 미국 ECP 제품 페이지 (MTB.0263.USA.22)",
          raw: "CENTER THICKNESS 0.08 mm @ -3.00D",
          url: "https://ecp.bauschcontactlenses.com/products/infuse-one-day/",
          condition: "구면 전용 페이지의 파라미터 표 · Dk/t 134 @ -3.00D와 같은 시험 도수",
          linkNote: "Dk/t 조건과 연결해 해석"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "BAUSCH + LOMB INFUSE® ONE-DAY Contact Lens Parameters (INF.0007.USA.24)",
          raw: "0.08 mm @ -3.00D",
          url: "https://ecp.bauschcontactlenses.com/siteassets/pdf/infuse-oneday-contact-lens-parameters.pdf",
          condition: "CENTER THICKNESS 행 · 추출 순서 `0.08 mm @ -3.00D · 0.10 mm @ -3.00D · 0.08 mm @ -3.00D` 중 구면 열 · 난시용은 0.10 mm",
          linkNote: "난시용 0.10 mm는 미국 파라미터 일람 페이지의 난시용 절에도 단독으로 인쇄된다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Bausch + Lomb INFUSE® Package Insert / Fitting Guide (Rev. 2023-07 · 8191603)",
          raw: "Center Thickness: 0.05mm to 0.75mm (varies with power)",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/bausch-lomb-infuse-package-insert-fitting-guide73.pdf",
          condition: "CONTACT LENS PARAMETERS AVAILABLE 절 · 단일값이 아니라 도수에 따른 범위",
          linkNote: "같은 문서의 자외선 프로파일 각주는 `Kalifilcon A (55% water) Soft Contact Lens, -1.00D Power, Nominal Center Thickness 0.08 mm`로 다른 시험 도수를 쓴다"
        }
      ]
    },
    {
      id: "replacement",
      value: "1일",
      state: "verified",
      sourceSummary: "제조사 공식 문서 2종의 single-use disposable 표기와 한국 브랜드 페이지의 하루용 분류 · 2026.08.28 확인",
      caution: "교체주기입니다. 착용방식(착용 시간·수면 착용 여부)은 별도 개념이며 안경사 또는 안과 전문인의 판단이 필요합니다. 미국 파라미터 표의 `Daily wear`는 착용방식 표기이고 교체주기 행은 그 표에 아예 없습니다. MFDS 소분류 `매일착용 소프트 콘택트렌즈`도 착용 구분이지 교체주기가 아닙니다. 한국 상세 이미지의 `활동시간 동안 착용하고 야간 취침 시에 착용하지 않는다`도 착용방식 문장입니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Bausch + Lomb INFUSE® Package Insert / Fitting Guide (Rev. 2023-07 · 8191603)",
          raw: "The lens is to be prescribed for single-use disposable wear and is to be discarded after each removal.",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/bausch-lomb-infuse-package-insert-fitting-guide73.pdf",
          condition: "DESCRIPTION 절 마지막 문장 · WEARING SCHEDULE 절 Daily Wear 항목에도 같은 문장 반복",
          linkNote: "같은 절이 `The wearing and replacement schedules should be determined by the eye care practitioner.`로 시작한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Bausch + Lomb INFUSE® Patient Information Booklet (Rev. 2023-07 · 8191702)",
          raw: "The lens has been prescribed for single-use disposable wear and is to be discarded after each removal.",
          url: "https://ecp.bauschcontactlenses.com/siteassets/pdf/infuse-patient-information-booklet.pdf",
          condition: "INDICATIONS 절 · 이 소책자에는 물성 수치가 전혀 없어 교체 표기만 근거로 쓴다",
          linkNote: "pi.bausch.com 아래에는 이 소책자가 없고 ECP siteassets 경로에만 있다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "울트라 원데이 한국 브랜드 제품 페이지",
          raw: "하루용 투명렌즈/근시용",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=98",
          condition: "제품 분류 표기 · 상위 카테고리는 `데일리 투명렌즈`",
          linkNote: "한국 페이지에 `1일 교체`라는 문자열은 없다. 한국 유통 근거로만 사용"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "매일착용 소프트 콘택트렌즈",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "itemPermitNo=수허 20-222 호 · 180행 전부 동일 소분류 · 등급 2",
          linkNote: "소분류 품목 명칭은 교체주기가 아니라 착용 구분이다. 같은 원장 안에 공백 없는 `매일착용소프트콘택트렌즈` 표기도 함께 존재한다"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 20-222 호",
      state: "verified",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 · 2026.08.28 확인",
      caution: "울트라 원데이 계열은 구면·난시용·멀티포컬의 허가번호가 서로 다릅니다. 이 번호는 구면 제품의 번호입니다. 멀티포컬은 수허 22-32 호, 난시용은 수허 26-23 호입니다. 이름이 비슷한 월간 제품 `울트라`는 재질이 samfilcon A로 다르고 허가번호도 수허 25-122 호·수허 15-1250 호로 별개입니다. 한국 브랜드 페이지의 `제 2009-3220033-00028호`는 의료기기 판매업 신고번호, `62026-I10-12-1425`는 광고 사전심의 번호이며 둘 다 품목 허가번호가 아닙니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 20-222 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=바슈롬 30,826건 전수 집계(distinct 신원 24건)에서 업체 제품 명칭이 `Ultra Oneday, 울트라 원데이`인 항목은 이 번호 하나뿐(180행). itemPermitNo=수허 20-222 호 단독 조회는 화면 원문 `총 180건이 조회됐습니다.`이며 distinct UDI-DI도 180으로 행 수와 같다",
          linkNote: "업체 제품 명칭 원문 `Ultra Oneday, 울트라 원데이` · 모델명 `kalifilcon A` · 업체명 `(주)바슈롬코리아` · 업체구분 `수입업` · 소분류 `매일착용 소프트 콘택트렌즈` · 등급 2 · 포장내수량 5/30/90 각 60행 · 코드체계 GS1"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "울트라 원데이 한국 브랜드 제품 페이지",
          raw: "허가번호 표기 없음 (`수허`·`허가` 문자열 0건)",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=98",
          condition: "curl HTML 전문 검색과 상세정보 이미지 판독 양쪽에서 확인",
          linkNote: "한국어 IFU PDF도 찾지 못해 MFDS UDI가 유일한 허가번호 근거"
        }
      ]
    },
    {
      id: "uv",
      value: "UVB 투과율 5% 미만 (280~315nm) / UVA 투과율 50% 미만 (316~380nm)",
      state: "verified",
      flag: "글로벌 공식 자료 · 차단율이 아닌 투과율 표기",
      sourceSummary: "Package Insert / Fitting Guide 원문. 미국 파라미터 표와 웹 페이지는 체크 표시뿐이고 수치가 없음 · 2026.08.28 확인",
      caution: "제조사가 인쇄한 값은 `투과율(transmittance)`입니다. 이를 `95% 이상 차단`처럼 차단율로 바꿔 적는 것은 유도이므로 하지 않았습니다. 미국 파라미터 표·ECP 페이지·일람 페이지의 UV PROTECTION 칸은 체크 표시 이미지(대체 텍스트 없음)이고 수치가 없습니다. 한국 자료에는 포장 사진의 `UV PROTECT™` 표시만 있고 수치가 없어 한국 표기값은 확인하지 못했습니다. 자외선 차단 콘택트렌즈는 눈과 주변을 완전히 덮지 못하므로 선글라스나 고글을 대신할 수 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch & Lomb Incorporated",
          document: "Bausch + Lomb INFUSE® Package Insert / Fitting Guide (Rev. 2023-07 · 8191603)",
          raw: "The transmittance characteristics are less than 5% in the UVB range of 280nm to 315nm and less than 50% in the UVA range of 316nm to 380nm.",
          url: "https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/bausch-lomb-infuse-package-insert-fitting-guide73.pdf",
          condition: "DESCRIPTION 절 · 바로 앞 문장 `A benzotriazole UV-absorbing monomer is incorporated into the manufacturing process to block Ultraviolet (UV) radiation.` · 같은 문서 HOW THE LENS WORKS 절에 같은 문장 반복",
          linkNote: "경고 원문 `UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear, such as UV-absorbing goggles or sunglasses, because they do not completely cover the eye and surrounding area.` · pypdf 추출에서는 자간 때문에 `UV A range`로 나오지만 인쇄된 문자열은 UVA range다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Bausch + Lomb",
          document: "INFUSE® One-Day 미국 ECP 제품 페이지 (MTB.0263.USA.22)",
          raw: "UV PROTECTION¶ — 값 칸은 <img src=\"/siteassets/img/check-mark.svg\" alt=\"\">",
          url: "https://ecp.bauschcontactlenses.com/products/infuse-one-day/",
          condition: "파라미터 표 UV PROTECTION 행 · 차단율·투과율 수치 0건",
          linkNote: "값이 이미지이고 대체 텍스트가 비어 있어 표에서는 수치를 얻을 수 없다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)바슈롬코리아",
          document: "울트라 원데이 한국 브랜드 제품 페이지 상세정보 이미지",
          raw: "UV PROTECT™",
          url: "https://www.bauschlomb.co.kr/cleardaily/?idx=98",
          condition: "상세정보 이미지 안의 제품 포장 사진에 인쇄된 문구 · `제품 상세 안내` 사양표에는 UV 행이 없다",
          linkNote: "한국 자료의 UV 수치는 미확인 상태이며 `없음`으로 단정하지 않는다. 페이지 HTML 텍스트에는 `자외선` 0건이다"
        }
      ]
    }
  ]
}
