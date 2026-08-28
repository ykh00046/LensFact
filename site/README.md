# LensFact Real-Data Pilot

This directory contains a no-build static pilot for LensFact using verified public data for three transparent spherical contact-lens products distributed in Korea.

## Structure

This directory is the web root. Every internal link is relative, so the site works from any root path.

- `index.html`: home page with a three-product package-label decoder.
- `knowledge/index.html`: content hub with one completed article and seven clearly marked pending topics.
- `knowledge/water-content-moisture.html`: evidence-based article about water content and perceived moisture.
- `compare/index.html`: accessible three-product official-spec comparison rendered from `assets/data/products.js`, with a `<noscript>` static fallback.
- `about/index.html`: what the site does and does not do, operator conflict-of-interest disclosure, contact.
- `policy/editorial.html`: editorial policy, evidence states, medical boundary, correction procedure.
- `policy/methodology.html`: source hierarchy, meaning of `raw`/`condition`/`verifiedAt`, why values are not merged.
- `policy/privacy.html`: privacy policy for the current no-cookie, no-analytics, no-ads site.
- `robots.txt`, `sitemap.xml`: discovery files. Both still contain the `DOMAIN-TBD` placeholder origin.
- `assets/css/style.css`: shared responsive stylesheet.
- `assets/js/app.js`: vanilla JavaScript for menu, synchronized product selection, decoder details, disclosures, filters, the comparison table, and disabled ad slots.
- `assets/data/products.js`: repository-owned verified product values, evidence states, and official source URLs.
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

   Expected: the eight pages (`index.html`, `compare/index.html`, `knowledge/index.html`, `knowledge/water-content-moisture.html`, `about/index.html`, `policy/editorial.html`, `policy/methodology.html`, `policy/privacy.html`), plus `sitemap.xml`, `robots.txt`, and this README.
2. **Fill in the contact email.** `about/index.html` contains the literal placeholder `문의 이메일: [배포 전 입력]`. Publishing with the placeholder in place is not acceptable.
3. **Flip `robots.txt`.** Change `Disallow: /` to `Allow: /` and uncomment the `Sitemap:` line once the domain is final and the content is ready to be indexed.
4. **Register the site with search engines by meta tag only.** Google Search Console and Naver Search Advisor both allow verification through an HTML meta tag; use that method. Do not add a verification script — the site loads no external scripts, and that constraint stays.
5. **Verify 390px on a real device.** Check the header menu (open, Escape, click outside), the comparison table's horizontal scroll region, and that no page scrolls horizontally.
6. **Re-check `verifiedAt` dates.** If a source has changed since the last check, follow the correction procedure in `policy/editorial.html` before publishing.

## Data and Source Scope

The pilot covers ACUVUE OASYS 1-Day, DAILIES TOTAL1, and Biofinity transparent spherical products. Korean official product pages, Korean IFUs, CooperVision Korea's 2023 specification sheet, and the MFDS UDI lookup are used to identify Korean distribution and permit information. Manufacturer technical or professional specifications supply BC, DIA, water-content, Dk/t, and thickness values. Scientific literature supports the water-content article.

Source links are ordinary user-initiated external links. The pages load no external scripts, styles, images, analytics, advertising, APIs, or CDNs at runtime. `ADS_ENABLED=false` remains fixed and all ad-slot elements stay hidden.

## Remaining Limitations

- The MFDS detailed permit ledger has not yet been directly reconciled for `수허 16-499 호` and `수허 08-131`; the Korean IFU or official Korean product list is identified as the current evidence. Identifiers retain each source's original spacing and suffix.
- Biofinity's official sources disagree on Dk/t (`170` versus `171 at -3.00D`) and UV (`기술 적용` versus `No`). Both versions remain visible.
- DAILIES TOTAL1's core and surface water values use different locations and methods and are not combined into one number.
- Public specifications do not predict individual comfort, fitting, prescription, or wearing outcome. The pilot offers no recommendation, ranking, score, purchase link, or diagnosis.
- Only the water-content article is complete. The other seven hub topics remain non-linked `준비 중` cards.
