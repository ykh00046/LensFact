# LensFact Real-Data Pilot

This directory contains a no-build static pilot for LensFact using verified public data for nine transparent spherical contact-lens products distributed in Korea.

## Structure

This directory is the web root. Every internal link is relative, so the site works from any root path.

- `index.html`: home page. Between the hero and the preset decoder sits `#input-decoder`, the "내 포장지 숫자 입력" form: the reader types the figures printed on their own package (BC, DIA, 함수율, Dk/t, 재질명, 교체주기 — all optional, at least one required) and gets each figure's meaning plus a factual placement statement against `products.js` and a `표기 일치` product list. Values are computed in the page only: nothing is stored and nothing is sent. Below it, the nine-product package-label decoder stays as the preset path. The "현재 수록된 N개 제품" figure is filled in from `products.js` at runtime (`[data-product-count]`), so it cannot drift from the data.
- `products/index.html`: product list rendered from `products.js`, with a static card fallback.
- `products/<slug>.html`: one page per product (`acuvue-oasys-1-day`, `dailies-total1`, `biofinity`, `acuvue-moist-1-day`, `myday`, `clariti-1-day`, `acuvue-oasys-2-week`, `precision1`, `biotrue-oneday`). Thin HTML shell plus `<main data-product-page="<id>">`; `initProductPage()` renders every field with its full source list open, and a `<noscript>` table carries all values and the first source per field for crawlers and no-JS readers.
- `knowledge/index.html`: content hub with one completed article and seven clearly marked pending topics.
- `knowledge/water-content-moisture.html`: evidence-based article about water content and perceived moisture.
- `compare/index.html`: accessible official-spec comparison rendered from `assets/data/products.js`. A checkbox picker (`fieldset` "비교할 제품 선택") chooses up to 4 products (default: the first 3); the selection persists in the URL query `?p=<id>,<id>` so a comparison is linkable, and `<noscript>` keeps the full all-product table and evidence list.
- `about/index.html`: what the site does and does not do, operator conflict-of-interest disclosure, contact.
- `policy/editorial.html`: editorial policy, evidence states, medical boundary, correction procedure.
- `policy/methodology.html`: source hierarchy, meaning of `raw`/`condition`/`verifiedAt`, why values are not merged.
- `policy/privacy.html`: privacy policy for the current no-cookie, no-analytics, no-ads site.
- `robots.txt`, `sitemap.xml`: discovery files. Both still contain the `DOMAIN-TBD` placeholder origin.
- `assets/css/style.css`: shared responsive stylesheet.
- `assets/js/app.js`: vanilla JavaScript for menu, the home input decoder, synchronized product selection, decoder details, disclosures, filters, the comparison table, the product list and product pages, and disabled ad slots.
- `assets/data/products.js`: repository-owned verified product values, evidence states, and official source URLs, plus each product's `slug` and `aliases` (Korean sales name, English global name, material name).
- `assets/data/fields.js`: common field terminology used across all products.
- `assets/data/articles.js`: content status and metadata.

## Run Locally

From this directory:

```bash
cd site && python -m http.server 4174
```

Open `http://localhost:4174/`.

## Pre-publish checklist

The site currently ships with a placeholder origin and a preview-only `robots.txt`. Work through this list before making the site public.

1. **Replace `DOMAIN-TBD` with the real origin.** List every file that still contains it:

   ```bash
   grep -rln DOMAIN-TBD site/
   ```

   Expected: the eighteen pages (`index.html`, `products/index.html`, `products/acuvue-oasys-1-day.html`, `products/dailies-total1.html`, `products/biofinity.html`, `products/acuvue-moist-1-day.html`, `products/myday.html`, `products/clariti-1-day.html`, `products/acuvue-oasys-2-week.html`, `products/precision1.html`, `products/biotrue-oneday.html`, `compare/index.html`, `knowledge/index.html`, `knowledge/water-content-moisture.html`, `about/index.html`, `policy/editorial.html`, `policy/methodology.html`, `policy/privacy.html`), plus `sitemap.xml`, `robots.txt`, and this README.
2. **Fill in the contact email.** `about/index.html` contains the literal placeholder `문의 이메일: [배포 전 입력]`. Publishing with the placeholder in place is not acceptable.
3. **Flip `robots.txt`.** Change `Disallow: /` to `Allow: /` and uncomment the `Sitemap:` line once the domain is final and the content is ready to be indexed.
4. **Register the site with search engines by meta tag only.** Google Search Console and Naver Search Advisor both allow verification through an HTML meta tag; use that method. Do not add a verification script — the site loads no external scripts, and that constraint stays.
5. **Verify 390px on a real device.** Check the header menu (open, Escape, click outside), the comparison table's horizontal scroll region, and that no page scrolls horizontally. The product pages must be checked too.
6. **Re-check the product pages against `products.js`.** Every value, condition, source URL and `verifiedAt` on `products/<slug>.html` comes from `products.js`; the `<noscript>` fallback is a static copy, so re-generate or re-read it whenever product data changes.
7. **Re-check `verifiedAt` dates.** If a source has changed since the last check, follow the correction procedure in `policy/editorial.html` before publishing.

## Data and Source Scope

The pilot covers ACUVUE OASYS 1-Day, DAILIES TOTAL1, Biofinity, 1-DAY ACUVUE MOIST, MyDay, clariti 1 day, ACUVUE OASYS 2-Week, PRECISION1, and Biotrue ONEday transparent spherical products. Korean official product pages, Korean IFUs, CooperVision Korea's 2023 specification sheet, Alcon's and Bausch + Lomb's US professional specifications and package inserts, and the MFDS UDI lookup are used to identify Korean distribution and permit information. Manufacturer technical or professional specifications supply BC, DIA, water-content, Dk/t, and thickness values. Scientific literature supports the water-content article.

Source links are ordinary user-initiated external links. The pages load no external scripts, styles, images, analytics, advertising, APIs, or CDNs at runtime. `ADS_ENABLED=false` remains fixed and all ad-slot elements stay hidden.

## Remaining Limitations

- Permit display values follow the MFDS UDI ledger string; each manufacturer document keeps its own spelling verbatim in its `raw` record, so the same number can appear with and without a space or a trailing `호` depending on the source.
- Biofinity's official sources disagree on Dk/t (`170` versus `171 at -3.00D`) and UV (`기술 적용` versus `No` versus no UV row at all on the US practitioner page). All versions remain visible.
- Biofinity's and MyDay's centre thickness are `unknown`: no reviewed official source states the value. Dk/t depends on thickness, so both Dk/t figures are read without that condition.
- Two corrections were applied on 2026-08-28 and logged in `docs/verification/CORRECTIONS.md`: Biofinity's centre thickness `0.08 mm` was withdrawn for lack of a reproducible source, and CooperVision Korea's legal name was fixed from `쿠퍼비젼코리아(주)` to `쿠퍼비전코리아(주)`.
- A source-by-source audit of the three pilot products on 2026-08-28 (`docs/verification/audit-pilot-2026-08-28/`) replaced four unreproducible `raw` quotations (ACUVUE OASYS 1-Day material and replacement, Biofinity replacement, DAILIES TOTAL1 replacement), moved both outstanding permit records onto the MFDS UDI ledger (`수허 16-499 호` 497 records, `수허 08-131 호` 94 records — Biofinity's displayed value gained its `호`), corrected eight further `raw`/`document` strings to the printed originals, and re-dated every touched record to `2026-08-28`. All of it is logged in `docs/verification/CORRECTIONS.md`.
- DAILIES TOTAL1's core and surface water values use different locations and methods and are not combined into one number.
- Public specifications do not predict individual comfort, fitting, prescription, or wearing outcome. The pilot offers no recommendation, ranking, score, purchase link, or diagnosis.
- 1-DAY ACUVUE MOIST's BC, DIA, water content, Dk/t, centre thickness and UV figures come from the global ACUVUE technical specification guide; no Korean official source states them, and the Korean page's UV percentages are image-only, so the Korean wording stays unverified.
- MyDay's UV entry is a grade (`UV 차단 · Class 2`), not a blocking percentage, and the specification sheet does not define which standard the grade belongs to.
- clariti 1 day's material name disagrees between official sources: the global specifications and the MFDS model name say `somofilcon A`, CooperVision Korea's 2023 sheet prints `stenfilcon A`. No correction notice was found, so both values stay visible.
- clariti 1 day's Dk/t disagrees as well: the Korean product page and the Korean product list both say `80` with no test condition, while the Korean 2023 sheet and the global specifications say `86` at `-3.00DS`.
- clariti 1 day's centre thickness is `unknown`: none of the six reviewed official documents lists the item at all.
- MFDS UDI carries a second registration, `수허 19-346 호` (models `Somofilcon A 1day` and `WATER FINE`), under the same company product name `산소렌즈 clariti 1day`. The page shows `수허 15-322 호`, the number on which the Korean official product list and the MFDS model name `Clariti 1day` agree, and records the second registration as a separate source that has to be checked against the physical package.
- clariti 1 day's Korean IFU PDF is a shared daily-wear soft lens document; it carries no product name, material, permit number, or figure.
- ACUVUE OASYS 2-Week's permit is a `conflict`: MFDS UDI carries two registrations, `수허 05-310 호` (377 records registered 2024-05-29~31, company product name contains `(아큐브 오아시스®)`) and `수허 08-938 호` (the same 377 UDI-DI codes, registered 2021~2023, no Korean product name). The intersection is 377 and the difference is 0, so neither could be ruled out; the physical package has to be checked. Model-name search is ® sensitive — `ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS` returns only 08-938 and the ®-bearing spelling returns only 05-310.
- ACUVUE OASYS 2-Week's replacement value is `2주`. Korean official sources print `2주 착용` and never `2주 교체`; the Korean IFU has no replacement sentence at all. The global specification sheet splits the row into `Recommended Replacement` (`1 Week EW or 2 Weeks DW`) and a separate `Wearing Schedule`, so the two concepts stay separate and no sleep-wear reading is implied. Every physical figure for this product comes from the global specification guide; no Korean official source states a parameter.
- PRECISION1's water content stays split as `코어 51% / 표면 80% 초과`, the same treatment as DAILIES TOTAL1. The same 51% is called `CORE WATER CONTENT` on the professional specification sheet and plain `Water Content … by weight in normal saline` in the US package insert. No Korean official source states any figure for this product, so every physical value carries the `글로벌 공식 자료` flag.
- PRECISION1's Dk/t `100` is printed with the test power (`@ −3.00D`) but no method, boundary correction, or temperature. The 35℃ coulometric condition in the same maker's package insert belongs to Dk, not Dk/t, and the two are not converted into each other.
- Biotrue ONEday's Dk/t is a `conflict`: three manufacturer documents print the same number `42` under different labels — `Oxygen Permeability (Dk)` in the package insert, `OXYGEN PERMEABILITY (Dk/t)` in the parameters PDF, and `OXYGEN TRANSMISSIBILITY (Dk/t)` on the US ECP page. Dk and Dk/t differ by thickness and cannot be the same number; no conversion was made and all three wordings stay visible.
- Biotrue ONEday's `type` says `근시용` only: the Korean brand page classifies it as `하루용 투명렌즈/근시용`, and whether the plus powers in the US range are supplied in Korea was not confirmed. Its UV entry is a transmittance figure (`UVB 투과율 5% 미만 / UVA 투과율 50% 미만`), not a blocking percentage, and was not restated as one.
- Only the water-content article is complete. The other seven hub topics remain non-linked `준비 중` cards.
