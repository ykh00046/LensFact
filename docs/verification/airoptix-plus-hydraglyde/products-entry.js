// 에어옵틱스 플러스 하이드라글라이드 (AIR OPTIX® plus HydraGlyde®) — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/airoptix-plus-hydraglyde/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
//
// 이 제품의 특수성 세 가지.
// 1. 한국 공식 제품 페이지가 존재하지 않는다. 유통 근거는 MFDS 원장 단독이다.
//    따라서 물성값(bc·dia·water·material·dkt·thickness)의 flag 는 전부 "글로벌 공식 자료"다.
// 2. 한국 판매명은 "에어옵틱스"가 아니라 "에어렌즈 하이드라"다(MFDS 원장 원문).
// 3. MFDS 소분류가 "연속착용소프트콘택트렌즈"(등급 3)이고 미국 자료에 연속착용 적응증이 있다.
//    이것은 교체주기가 아니며, 수면 중 착용 허가로 옮기지 않았다. replacement.caution 에 분리해 적었다.
{
  id: "airoptix-plus-hydraglyde",
  slug: "airoptix-plus-hydraglyde",
  aliases: ["에어옵틱스 플러스 하이드라글라이드", "AIR OPTIX plus HydraGlyde", "lotrafilcon B"],
  name: "에어옵틱스® 플러스 하이드라글라이드® / AIR OPTIX® plus HydraGlyde®",
  selectorLabel: "에어옵틱스 플러스",
  maker: "Alcon",
  distributor: "한국알콘(주)",
  type: "근시·원시용 투명 구면 · 1달 교체",
  packageSpecs: [
    { value: "BC 8.6", label: "Base Curve · mm" },
    { value: "DIA 14.2", label: "Diameter · mm" },
    { value: "함수율 33%", label: "표면 함수율 표기 없음" },
    { value: "Dk/t 138", label: "-3.00D · 측정법 미표기" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.6 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 미국 전문가 사양·미국 Package Insert · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지가 존재하지 않아 글로벌 공식 자료가 유일한 근거입니다. 미국 Package Insert가 별도로 적는 Base Curve Range 8.0~9.2 mm는 재질 수준의 허용 범위이며 실제 판매 렌즈의 값이 아닙니다. 난시용은 8.7 mm로 다릅니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX® plus HydraGlyde® 전문가용 공식 사양 (US-AHG-2100026)",
          raw: "Base Curve (mm)\n8.6",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/",
          condition: "사양표 Base Curve (mm) 행 · 같은 칸에 Base curve optimization is influenced by: Lens diameter / Modulus / Other material characteristics 병기 · 화면은 CSS로 대문자 표시되고 HTML 원본 표기는 Base Curve",
          linkNote: "MFDS 허가 원장에서 한국 유통 제품(수허 17-148 호) 연결 확인. 한국 공식 페이지는 존재하지 않는다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX™ (lotrafilcon B) Package Insert (W900331823 · effective as of December 2020)",
          raw: "• Base Curve: 8.6 mm",
          url: "https://alcon.widen.net/content/ign6plnntd/original/W900331823-WPI-LOTFB-US.pdf",
          condition: "Lens Parameters Available · AIR OPTIX™ plus HydraGlyde™ contact lenses (spherical) 항목 · 같은 문서의 난시용(toric)은 8.7 mm로 별개",
          linkNote: "이 문서는 AIR OPTIX AQUA를 포함한 6개 제품을 함께 다룬다. AQUA 구면은 한국 원장에 등록돼 있지 않다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX® plus HydraGlyde® 국제 전문가 페이지 파라미터 표 (UKIE-AHG-2500001)",
          raw: "BASE CURVE (mm)\n8.6",
          url: "https://www.myalcon.com/international/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/",
          condition: "파라미터 표가 텍스트가 아니라 이미지(AIR-OPTIX-plus-HydraGlyde-Table-Parameters-R.png, 2301×929)이므로 판독 결과이며 대조 근거로만 사용",
          linkNote: "이 페이지의 판매 국가 목록에 대한민국은 없다. 한국 유통 근거는 MFDS 원장이다"
        }
      ]
    },
    {
      id: "dia",
      value: "14.2 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 미국 전문가 사양·미국 Package Insert · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지가 존재하지 않아 글로벌 공식 자료가 유일한 근거입니다. Package Insert의 Diameter Range 13.0~15.0 mm는 재질 수준의 허용 범위이며 실제 판매 렌즈의 값이 아닙니다. 난시용은 14.5 mm로 다릅니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX® plus HydraGlyde® 전문가용 공식 사양 (US-AHG-2100026)",
          raw: "Diameter (mm)\n14.2",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/",
          condition: "사양표 Diameter (mm) 행",
          linkNote: "MFDS 허가 원장에서 한국 유통 제품(수허 17-148 호) 연결 확인"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX™ (lotrafilcon B) Package Insert (W900331823 · effective as of December 2020)",
          raw: "• Chord Diameter: 14.2 mm",
          url: "https://alcon.widen.net/content/ign6plnntd/original/W900331823-WPI-LOTFB-US.pdf",
          condition: "Lens Parameters Available · 구면(spherical) 항목 · 문서는 Diameter가 아니라 Chord Diameter로 적음",
          linkNote: "같은 문서의 난시용 항목은 Chord Diameter: 14.5 mm"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX® plus HydraGlyde® 국제 전문가 페이지 파라미터 표 (UKIE-AHG-2500001)",
          raw: "DIAMETER (mm)\n14.2",
          url: "https://www.myalcon.com/international/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/",
          condition: "파라미터 이미지 판독 결과이며 대조 근거로만 사용",
          linkNote: "미국 사양표와 값이 같다"
        }
      ]
    },
    {
      id: "water",
      value: "33%",
      state: "verified",
      flag: "글로벌 공식 자료 · 라벨 표기 상이",
      sourceSummary: "Alcon 미국 전문가 사양 Water Content 33% · 국제 사양표는 같은 값을 CORE WATER CONTENT로 부름",
      caution: "같은 33%를 미국 전문가 사양표는 Water Content, 국제 전문가 사양표는 CORE WATER CONTENT(코어)로 부릅니다. 숫자는 같지만 무엇을 잰 값인지에 대한 설명이 다릅니다. 같은 제조사의 프리시전원·데일리스 토탈원과 달리 이 제품에는 표면 함수율 표기가 어느 공식 자료에도 없으므로, 33%를 표면 함수율과 대비하거나 합쳐서 읽지 않습니다. 한국 공식 자료에는 함수율 표기가 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX® plus HydraGlyde® 전문가용 공식 사양 (US-AHG-2100026)",
          raw: "Water Content\n33%",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/",
          condition: "사양표 Water Content 행 · 측정 위치를 코어로 한정하지 않음 · 같은 표에 표면 함수율 행 없음",
          linkNote: "국제 사양표가 같은 값을 CORE WATER CONTENT로 부르는 것과 라벨이 다름"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX™ (lotrafilcon B) Package Insert (W900331823 · effective as of December 2020)",
          raw: "Water Content: 33% by weight in normal saline",
          url: "https://alcon.widen.net/content/ign6plnntd/original/W900331823-WPI-LOTFB-US.pdf",
          condition: "Lens Properties 절 · 정상 식염수 중 중량비 · 같은 문서 PRODUCT DESCRIPTION은 a lens material that is approximately 33% water and 67% lotrafilcon B로 적음",
          linkNote: "측정 위치를 코어로 한정하지 않는다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX® plus HydraGlyde® 국제 전문가 페이지 파라미터 표 (UKIE-AHG-2500001)",
          raw: "CORE WATER CONTENT\n33%",
          url: "https://www.myalcon.com/international/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/",
          condition: "파라미터 이미지 판독 결과 · 미국 사양표와 숫자는 같고 라벨만 코어로 한정됨 · 같은 표에도 표면 함수율 행은 없음",
          linkNote: "표면 함수율 값이 없으므로 코어와 표면을 대비하는 서술을 하지 않았다"
        }
      ]
    },
    {
      id: "material",
      value: "lotrafilcon B",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 미국 전문가 사양·미국 Package Insert · 한국 자료에는 재질 표기가 전혀 없음",
      caution: "한국 공식 제품 페이지가 존재하지 않아 한국 자료에는 재질 계열조차 적혀 있지 않습니다. MFDS 허가 원장의 모델명·업체 제품 명칭에도 재질명이 없고, 모델명 검색에서 lotrafilcon·Lotrafilcon·LOTRAFILCON 모두 0건입니다. 재질명의 근거는 글로벌 공식 자료뿐입니다. 제조사 문서는 이 재질을 실리콘 하이드로겔이 아니라 표면처리된 플루오로실리콘 함유 하이드로겔(a fluoro-silicone containing hydrogel which is surface treated)로 적습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX® plus HydraGlyde® 전문가용 공식 사양 (US-AHG-2100026)",
          raw: "Material\nlotrafilcon B",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/",
          condition: "사양표 Material 행 · 같은 표의 Surface 행은 SmartShield® Technology",
          linkNote: "MFDS 허가 원장에서 한국 유통 제품(수허 17-148 호) 연결 확인"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX™ (lotrafilcon B) Package Insert (W900331823 · effective as of December 2020)",
          raw: "made of a lens material that is approximately 33% water and 67% lotrafilcon B, a fluoro-silicone containing hydrogel which is surface treated",
          url: "https://alcon.widen.net/content/ign6plnntd/original/W900331823-WPI-LOTFB-US.pdf",
          condition: "PRODUCT DESCRIPTION 절 · 같은 문장에 색소 copper phthalocyanine(light blue handling tint) 표기 병기",
          linkNote: "이 문서는 lotrafilcon B 계열 6개 제품(AQUA·plus HydraGlyde·난시용 2종·다초점 2종)을 함께 다룬다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "AIR OPTIX plus HydraGlyde",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 17-148 호 · 모델명 원문 · 업체 제품 명칭은 에어렌즈 하이드라 SMART SHIELD",
          linkNote: "원장에 재질명이 들어 있지 않다. modelnm=lotrafilcon · Lotrafilcon · LOTRAFILCON 조회 모두 0건"
        }
      ]
    },
    {
      id: "dkt",
      value: "138",
      state: "verified",
      flag: "글로벌 공식 자료 · 측정법 미표기",
      sourceSummary: "Alcon 미국 전문가 사양 Dk/t 138 @ -3.00D · 2026.08.28 확인",
      caution: "-3.00D 기준 값입니다. 제조사가 Dk/t에 대해 측정법·경계 보정 여부·측정 온도를 밝히지 않았으므로, 시험 조건이 표기된 다른 제품의 Dk/t와 숫자만 직접 비교하지 않습니다. 같은 제조사의 Package Insert가 밝힌 35 °C 쿨로메트릭 조건은 Dk/t(산소 전달률)가 아니라 Dk(산소 투과성)의 조건이며, 두 값을 섞거나 재질 Dk와 중심두께로 Dk/t를 역산하지 않았습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX® plus HydraGlyde® 전문가용 공식 사양 (US-AHG-2100026)",
          raw: "Dk/t\n138 @ ‑3.00D",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/",
          condition: "사양표 Dk/t 행 · 표기된 조건은 시험도수뿐이며 측정법·보정·온도 표기 없음 · 원문의 하이픈은 일반 하이픈이 아니라 non-breaking hyphen(U+2011)",
          linkNote: "같은 표의 중심두께 0.08과 같은 도수 조건. 국제 전문가 페이지 파라미터 이미지도 Dk/t 138 @ -3.00D로 같다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX™ (lotrafilcon B) Package Insert (W900331823 · effective as of December 2020)",
          raw: "Oxygen Permeability (Dk): 110 x 10-11 (cm2/sec) (ml O2 /ml x mm Hg),\nmeasured at 35 °C (intrinsic Dk-Coulometric method)",
          url: "https://alcon.widen.net/content/ign6plnntd/original/W900331823-WPI-LOTFB-US.pdf",
          condition: "Lens Properties 절 · 이 값은 Dk/t가 아니라 재질의 Dk이며 조건은 35 °C 쿨로메트릭 고유 Dk · 문서에 Dk/t 값은 없음",
          linkNote: "Dk와 Dk/t를 구분해 기록. 두 값 사이 환산은 하지 않음"
        }
      ]
    },
    {
      id: "thickness",
      value: "0.08 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 미국 전문가 사양·미국 Package Insert · 2026.08.28 확인",
      caution: "-3.00D 기준 중심두께이며 제조사가 도수에 따라 달라진다고 명시합니다. 난시용은 0.102 mm로 다릅니다. 미국 전문가 페이지는 이 조건을 Center Thickness (3.00D, mm)로 마이너스 부호 없이 인쇄하고, 국제 사양표와 Package Insert는 -3.00D로 적습니다. 표기가 다를 뿐 같은 조건입니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX® plus HydraGlyde® 전문가용 공식 사양 (US-AHG-2100026)",
          raw: "Center Thickness (3.00D, mm)\n0.08",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/",
          condition: "사양표 Center Thickness 행 · 단위 표기 (3.00D, mm)에 마이너스 부호가 빠져 있으나 원문 그대로 기록 · 같은 표의 Dk/t 138 @ -3.00D와 같은 도수 조건",
          linkNote: "국제 전문가 페이지 파라미터 이미지는 같은 칸을 CENTER THICKNESS (-3.00D,mm) 0.08로 인쇄한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX™ (lotrafilcon B) Package Insert (W900331823 · effective as of December 2020)",
          raw: "• Center Thickness: 0.08 mm @ -3.00 D (varies with power)",
          url: "https://alcon.widen.net/content/ign6plnntd/original/W900331823-WPI-LOTFB-US.pdf",
          condition: "Lens Parameters Available · 구면(spherical) 항목 · 같은 제조사의 Professional Fitting and Information Guide(W900246931)는 어순을 바꿔 Center Thickness: Varies with power (0.08 mm @ -3.00 D)로 적음",
          linkNote: "같은 문서의 난시용 항목은 0.102 mm @ -3.00 D"
        }
      ]
    },
    {
      id: "replacement",
      value: "1달",
      state: "verified",
      flag: "글로벌 공식 자료 · 한국 자료에 교체주기 표기 없음",
      sourceSummary: "Alcon 미국·국제 전문가 사양과 미국 Package Insert가 월간 교체로 표기 · 한국 공식 페이지 없음",
      caution: "1달은 교체주기입니다. 착용방식은 별개이며 안경사 또는 안과 전문인의 판단이 필요합니다. 이 제품은 MFDS에 연속착용소프트콘택트렌즈(등급 3)로 등록돼 있고, 미국 Package Insert도 처방권자의 판단에 따라 최대 6박까지의 연속착용을 처방할 수 있다고 적습니다. 그러나 같은 문서는 연속착용 사용자의 미생물 각막염 위험이 매일착용 사용자보다 높고 그 위험이 첫 하룻밤부터 증가한다고 경고하며, 알콘의 국제 전문가 사양표에는 연속착용 문구 없이 Monthly replacement만 적혀 있습니다. 이 등록·적응증 표기는 어떤 경우에도 착용자가 렌즈를 끼고 자도 된다는 뜻이 아닙니다. 한국 공식 자료에는 이 제품의 교체주기·착용방식 안내가 존재하지 않습니다.",
      conflicts: [
        { source: "Alcon 미국 전문가 사양 (US-AHG-2100026) · Wear/Replacement Schedule 행", value: "Daily wear and up to 6 nights extended wear/monthly replacement" },
        { source: "Alcon 국제 전문가 사양 (UKIE-AHG-2500001) · WEAR/REPLACEMENT SCHEDULE 행", value: "Monthly replacement" }
      ],
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX® plus HydraGlyde® 전문가용 공식 사양 (US-AHG-2100026)",
          raw: "Wear/Replacement Schedule\nDaily wear and up to 6 nights extended wear/monthly replacement",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/",
          condition: "사양표 Wear/Replacement Schedule 행 · 착용방식과 교체주기가 한 칸에 슬래시로 붙어 인쇄됨 · 같은 회사 국제 사양표의 같은 행은 Monthly replacement뿐",
          linkNote: "이 문장의 앞부분은 착용방식이고 뒷부분이 교체주기다. 화면 값 1달은 뒷부분만을 옮긴 것이다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX™ (lotrafilcon B) Package Insert (W900331823 · effective as of December 2020)",
          raw: "Lenses should be discarded and replaced with a new pair each month, or more often, if recommended by the eye care professional.",
          url: "https://alcon.widen.net/content/ign6plnntd/original/W900331823-WPI-LOTFB-US.pdf",
          condition: "LENS WEAR AND REPLACEMENT SCHEDULES 절의 Lens Replacement 항목 · 같은 절이 착용방식을 Daily Wear / Extended Wear (greater than 24 hours, including while asleep)로 나누어 별도 서술",
          linkNote: "교체주기와 착용방식이 문서에서 분리돼 있다. 같은 문서 WARNINGS 절은 The risk of microbial keratitis … has been shown to be greater among users of extended wear lenses than among users of daily wear lenses로 경고한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX® plus HydraGlyde® 국제 전문가 페이지 (UKIE-AHG-2500001)",
          raw: "Replacement Frequency: monthly",
          url: "https://www.myalcon.com/international/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/",
          condition: "제품 헤더 · 같은 줄에 Indications: myopia, hyperopia 병기 · 같은 페이지 파라미터 이미지의 WEAR/REPLACEMENT SCHEDULE 행은 Monthly replacement 한 문장뿐이고 연속착용 문구가 없다",
          linkNote: "이 페이지의 판매 국가 목록에 대한민국은 없다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "연속착용소프트콘택트렌즈",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 17-148 호 · 소분류 품목 명칭 원문 · 등급 3 · 이 항목은 품목 분류이며 교체주기를 뜻하지 않는다",
          linkNote: "같은 한국알콘의 프리시전원·아쿠아렌즈는 매일착용(소프트)콘택트렌즈 2등급으로 분류가 다르다. 한국 공식 소비자 페이지가 없어 한국어 교체주기·착용방식 안내 문구는 확인하지 못했다"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 17-148 호",
      state: "verified",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 · 2026.08.28 확인",
      caution: "구면·난시용·다초점의 허가번호가 모두 다릅니다. 이 번호는 구면 제품의 번호이며 난시용은 수허 20-111 호, 다초점은 수허 20-72 호로 별개입니다. 같은 에어렌즈 계열의 AIR OPTIX Night & Day AQUA는 수허 10-857 호(치료용은 수허 11-365 호), AIR OPTIX AQUA Multifocal은 수허 11-81 호, 구형 난시용 Air Optix for Astigmatism은 수허 06-908 호로 전부 다릅니다. MFDS UDI 조회 응답에는 허가 취하·취소 여부를 나타내는 상태 필드가 없으므로, 이 기록은 2026-08-28 시점에 원장에서 조회된다는 사실까지만 말합니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 17-148 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=한국알콘 + modelnm=AIR OPTIX plus HydraGlyde 조회 5,392건 중 구면 부분집합 171건, itemPermitNo=수허 17-148 호 단독 조회 171건이 모두 단일 신원(한국알콘(주) · 수입업 · 연속착용소프트콘택트렌즈 · 3등급 · 모델명 AIR OPTIX plus HydraGlyde · 업체 제품 명칭 에어렌즈 하이드라 SMART SHIELD)으로 연결 · distinct UDI-DI 171건 · 포장내수량 6이 103건, 1이 68건",
          linkNote: "모델명 검색은 대소문자를 구분한다. AirOptix·AIROPTIX·air optix·Hydraglyde·HYDRAGLYDE는 모두 0건이고 정답 표기는 AIR OPTIX plus HydraGlyde다. 파스칼 표기 Air Optix 조회 9,464건은 전부 구형 난시용 수허 06-908 호이며 구면이 아니다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "한국알콘 소비자 사이트 사이트맵·한달용 카테고리",
          raw: "한국 공식 제품 페이지 없음 (사이트맵 66건에 air-optix·airoptix·hydraglyde 0건)",
          url: "https://www.myalcon.com/kr/contact-lenses/monthly/",
          condition: "sitemap.xml의 loc 66건 전수 확인 · 한달용 카테고리에 등재된 알콘 제품은 워터렌즈 한달용(TOTAL30) 계열 세 가지뿐 · 페이지 전문에서 AIR·에어·OPTIX·하이드라 0건 · 온라인 공개 한국어 IFU도 찾지 못함(알콘 eIFU 포털은 referer 검증·로그인 인증으로 차단)",
          linkNote: "이 제품은 한국 공식 페이지와 한국 IFU 경로가 모두 없어 MFDS UDI가 허가번호이자 한국 유통의 유일한 근거다"
        }
      ]
    },
    {
      id: "uv",
      value: "공식 자료에서 확인되지 않음",
      state: "unknown",
      flag: "확인되지 않음",
      sourceSummary: "검토한 네 종류 공식 자료 어디에도 자외선 차단 표기가 없음 · 2026.08.28 확인",
      caution: "자외선 차단 기능이 없다고 단정하지 않습니다. 이 기록이 말하는 것은 미국 전문가 사양표·국제 전문가 사양표·미국 Package Insert·Professional Fitting and Information Guide 네 문서 전문에서 UV·ultraviolet 문자열이 한 건도 확인되지 않았다는 사실뿐입니다. 한국 공식 제품 페이지는 존재하지 않고 MFDS UDI 원장에는 자외선 관련 항목 자체가 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX® plus HydraGlyde® 전문가용 공식 사양 (US-AHG-2100026)",
          raw: "사양표에 UV 항목 없음 (페이지 전문에서 UV·ultraviolet 0건)",
          url: "https://www.myalcon.com/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/",
          condition: "렌더링 후 표 셀 11개 전수 확인 · Material · Center Thickness · Water Content · Diameter · Handling Tint · Surface · Dk/t · Wear/Replacement Schedule · Power Range · Base Curve · Recommended Lens Care 외에 행이 없음",
          linkNote: "같은 제조사의 프리시전원 사양표에는 UV BLOCKER 행이 있다. 같은 회사가 UV 차단 제품에는 그것을 명시한다는 점은 정황일 뿐 근거가 아니다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "AIR OPTIX™ (lotrafilcon B) Package Insert (W900331823 · effective as of December 2020)",
          raw: "UV 관련 서술 없음 (문서 전문 73,743자에서 UV·ultraviolet 0건)",
          url: "https://alcon.widen.net/content/ign6plnntd/original/W900331823-WPI-LOTFB-US.pdf",
          condition: "PRODUCT DESCRIPTION의 첨가물 표기는 색소 copper phthalocyanine뿐이며 UV 흡수 단량체 언급이 없음 · ACTIONS 절에도 UV 차단율 서술 없음",
          linkNote: "프리시전원 PI가 benzotriazole UV-absorbing monomer와 차단율을 명시한 것과 대조된다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "한국알콘 소비자 사이트 한달용 카테고리",
          raw: "제품 페이지 없음 (자외선 표기 확인 불가)",
          url: "https://www.myalcon.com/kr/contact-lenses/monthly/",
          condition: "사이트맵 66건 전수 확인 결과 이 제품의 한국 공식 페이지가 존재하지 않음",
          linkNote: "프리시전원은 한국 브랜드 사이트에서 자외선 차단 1등급 표기를 확인할 수 있었으나 이 제품에는 그 경로가 없다"
        }
      ]
    }
  ]
}
