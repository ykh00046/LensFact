# Video reference: 바이브코딩 정보 사이트의 애드센스 현실

- Source: https://www.youtube.com/watch?v=doK20DKfy-o
- Title: `웹사이트 애드센스 부업 현실적인 수입 알려드립니다.`
- Channel: `AI로 만드는 1인 비즈니스 | 타니`
- Uploaded: 2026-08-06
- Duration: 16:05
- Reviewed: 2026-08-27

## Verdict

LensFact에는 영상의 **작게 공개하고 실제 검색 반응을 확인하는 방식**만 채택한다. 다섯 사이트와 약 200페이지를 먼저 만드는 방식은 채택하지 않는다.

이 영상의 가장 중요한 근거는 큰 수익 사례가 아니라 실패 사례다. 발표자는 5개 사이트 중 1개만 AdSense 승인을 받았고, 나머지 4개는 `가치가 별로 없는 콘텐츠`를 이유로 거절됐다고 설명한다. 승인된 사이트도 URL 구조 변경 후 Google 색인 문제가 생겼다고 한다. LensFact는 이를 반대로 설계해야 한다.

## Material reviewed

- YouTube metadata and description
- Korean auto-caption (`ko-orig`) cleaned into 360 timestamped segments
- Transcript coverage: 00:00:00–00:16:02, video duration 00:16:05
- Representative frames covering market estimates, sitemap failure, AdSense result, URL migration, search inflow, revenue, and 90-day trend
- Current official Google Search and AdSense guidance

The standard transcript API returned no transcript. `yt-dlp` exposed Korean automatic captions, which were downloaded and deduplicated. Obvious ASR errors such as product names were not used as evidence.

## Confirmed from the video

### 1. Research estimates are not operating revenue

- 02:13–04:48: the presenter uses third-party traffic estimates and an AdSense calculator to estimate other sites' revenue.
- 03:40–04:27: `vclock.kr` is presented as an example. The transcript cites Similarweb estimates of roughly 900k visits in May and 830k in June 2026, then a calculator estimate of KRW 20–30 million per month.
- The presenter explicitly says this is an estimate, not the site's actual revenue.

Decision: do not use competitor traffic calculators as a business case. They are useful only for rough keyword and competitor screening.

### 2. One additional user value is a practical differentiation target

- 04:51–05:17: the presenter rejects the goal of beating every competitor in every way and instead aims to improve at least one user pain point.

Decision: keep LensFact's narrow edge: package/spec interpretation with source provenance, conflict display, and consumer-language explanation.

### 3. Publishing and discovery cost more than the build demo suggests

- 05:22–06:52: Next.js and AI-assisted iteration are used to build five sites and roughly 200 pages.
- 07:14–09:34: domain purchase, deployment, Search Console, Naver Search Advisor, Daum, Bing, sitemap handling, and AdSense review are described as repeated operational work. The presenter says deployment and discovery preparation sometimes took more time than development.

Decision: treat build, operations, discovery, and monetization as four separate gates. A rendered site proves only the build gate.

### 4. Page volume did not produce AdSense approval

- 09:38–10:17: the presenter reports 1 approved site and 4 rejected sites. The rejection reason shown in the presentation is `가치가 별로 없는 콘텐츠`.
- The captured frames are presenter-made summary slides, not the raw AdSense review screens.

Decision: do not mass-generate articles. Every LensFact page must add specialist interpretation, source comparison, measurement limits, or an original evidence structure.

### 5. URL changes can damage discovery when migration is incomplete

- 10:25–11:06: the presenter says multilingual support changed URL paths and that redirects and the new structure were not properly organized. Google traffic then became nearly absent.
- Current Google guidance confirms that URL changes should use an old-to-new URL map, server-side permanent redirects, updated internal links and sitemap, and monitoring in Search Console.

Decision: freeze LensFact's Korean route structure before public indexing. Do not add multilingual routes in the pilot. Any later route change requires an explicit redirect map and migration test.

### 6. Naver may be a material Korean discovery channel

- 11:08–12:34: the presenter attributes emerging traffic and revenue to Naver while Google exposure remained weak.

Decision: register both Google Search Console and Naver Search Advisor at launch. Submission itself is not success; impressions and indexed URLs are the discovery evidence.

### 7. Revenue and traffic numbers are self-reported and internally unclear

- 11:35: a summary slide displays `최근 30일 실제 수익 US$17.70`.
- 11:40–11:45: the next summary slide displays `최근 30일 실제 수익 US$22.05`.
- 12:10–12:20: another slide labels `방문자 6.3천` and `페이지뷰 56.6만` with an upward chart.
- 13:45: a stylized 90-day upward chart is shown.

These are not raw AdSense, Search Console, Naver, or analytics dashboards. The same stated 30-day period changes from USD 17.70 to USD 22.05 within five seconds, and the labeled pageviews imply about 89.84 pageviews per visitor. The description summarizes the result as approximately USD 20. Therefore the direction is a presenter claim; the exact revenue, attribution, and metric definitions are not independently verified.

Decision: do not use this revenue figure in LensFact forecasting.

## Current official-source checks

- Google AdSense says a site needs unique content relevant to visitors, clear navigation, and a good user experience. It specifically asks publishers to contribute original specialist knowledge, improvement ideas, reviews, or personal thoughts when external sources are used.
- Google AdSense guidance says pages need enough unique and valuable content to give users a reason to visit and return, and warns against duplicate or lightly modified content.
- Google Search guidance says generative AI may help research and structure original content, but generating many pages without added value may violate the scaled-content-abuse policy.
- Google Search migration guidance says URL changes require mapping old URLs to new URLs, permanent redirects, updated sitemaps/internal links, and Search Console monitoring.

Official references:

- https://support.google.com/adsense/answer/7299563
- https://support.google.com/adsense/answer/10015918
- https://support.google.com/adsense/answer/10502938
- https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes

## LensFact adoption

### Adopt now

1. One site and one narrow consumer problem.
2. Stable Korean URL structure before indexing.
3. Google and Naver discovery setup at launch.
4. Original expert value on every page: source mapping, conflicts, measurement conditions, interpretation limits, and correction history.
5. Separate acceptance gates for build, operations, discovery, and monetization.

### Reject

1. Five-site portfolio experimentation before one site works.
2. Roughly 200 AI-assisted pages before validating user demand.
3. Third-party traffic and revenue estimates as proof of business viability.
4. AdSense application before original content and discovery are established.
5. Multilingual URL expansion during the pilot.

## Next bounded pilot

1. Publish-ready data for three real Korean-distributed clear spherical lenses.
2. One reviewed pillar article: `함수율이 높으면 더 촉촉한 렌즈일까요?`
3. Lock route conventions for product/spec and knowledge pages.
4. Generate and validate `sitemap.xml`, `robots.txt`, canonical URLs, and social metadata.
5. Deploy one preview with rollback available.
6. After factual and legal review, connect the custom domain and register Google Search Console and Naver Search Advisor.
7. Measure indexed URLs and impressions before increasing page count.
8. Keep `ADS_ENABLED=false` until the site has verified discovery and a body of reviewed, original content.

## Pass criteria

- No sample product values remain on public pages.
- Every product fact has source URL, source type, and verification date.
- The first article contains original specialist interpretation rather than a generic rewrite.
- Public routes are stable and included in a valid sitemap.
- Google and Naver can fetch the same canonical pages.
- Expansion is justified by real impressions, search queries, decoder use, or correction feedback—not by a revenue calculator.
