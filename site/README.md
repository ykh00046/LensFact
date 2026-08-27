# LensFact Static Prototype

This directory contains a no-build static prototype for LensFact.

## Structure

- `index.html`: home page with the package-label decoder.
- `knowledge/index.html`: content hub with sample article data.
- `knowledge/water-content-moisture.html`: full sample article for the water-content topic.
- `compare/index.html`: minimal official-spec comparison stub with sample table data.
- `assets/css/style.css`: shared responsive stylesheet.
- `assets/js/app.js`: vanilla JavaScript for menu, decoder, disclosures, filters, and neutral ad-reserve placeholders.
- `assets/data/fields.js`: sample decoder field data.
- `assets/data/articles.js`: sample content-list data.

## Run Locally

From the repository root:

```bash
python -m http.server 4174
```

Open `http://localhost:4174/site/index.html`.

## Sample Data

All lens names, manufacturers, source records, dates, and URLs in this prototype are sample data. User-facing pages mark them with `화면 예시입니다`, `예시 확인일`, and `example.invalid` addresses. The prototype makes no external network requests and contains no active ad code.
