# LensFact Real-Data Pilot

This directory contains a no-build static pilot for LensFact using verified public data for three transparent spherical contact-lens products distributed in Korea.

## Structure

- `index.html`: home page with a three-product package-label decoder.
- `knowledge/index.html`: content hub with one completed article and seven clearly marked pending topics.
- `knowledge/water-content-moisture.html`: evidence-based article about water content and perceived moisture.
- `compare/index.html`: accessible three-product official-spec comparison with conflicts and unknowns preserved.
- `assets/css/style.css`: shared responsive stylesheet.
- `assets/js/app.js`: vanilla JavaScript for menu, synchronized product selection, decoder details, disclosures, filters, and disabled ad slots.
- `assets/data/products.js`: repository-owned verified product values, evidence states, and official source URLs.
- `assets/data/fields.js`: common field terminology used across all products.
- `assets/data/articles.js`: content status and metadata.

## Run Locally

From the repository root:

```bash
python -m http.server 4174
```

Open `http://localhost:4174/site/index.html`.

## Data and Source Scope

The pilot covers ACUVUE OASYS 1-Day, DAILIES TOTAL1, and Biofinity transparent spherical products. Korean official product pages, Korean IFUs, CooperVision Korea's 2023 specification sheet, and the MFDS UDI lookup are used to identify Korean distribution and permit information. Manufacturer technical or professional specifications supply BC, DIA, water-content, Dk/t, and thickness values. Scientific literature supports the water-content article.

Source links are ordinary user-initiated external links. The pages load no external scripts, styles, images, analytics, advertising, APIs, or CDNs at runtime. `ADS_ENABLED=false` remains fixed and all ad-slot elements stay hidden.

## Remaining Limitations

- The MFDS detailed permit ledger has not yet been directly reconciled for `수허 16-499 호` and `수허 08-131`; the Korean IFU or official Korean product list is identified as the current evidence. Identifiers retain each source's original spacing and suffix.
- Biofinity's official sources disagree on Dk/t (`170` versus `171 at -3.00D`) and UV (`기술 적용` versus `No`). Both versions remain visible.
- DAILIES TOTAL1's core and surface water values use different locations and methods and are not combined into one number.
- Public specifications do not predict individual comfort, fitting, prescription, or wearing outcome. The pilot offers no recommendation, ranking, score, purchase link, or diagnosis.
- Only the water-content article is complete. The other seven hub topics remain non-linked `준비 중` cards.
