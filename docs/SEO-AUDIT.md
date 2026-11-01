# SEO audit: lintlab.in

Audited 2026-11-02, before and after the move to the Astro site.

## Summary

The old site was one good-looking page that search engines could barely read: its
title was just "Lint", it had no description, no sitemap and no structured data, and
it shared its name with a common programming term ("lint", "linter"). It had one URL
to rank, so it could only ever rank for its own name, and not even reliably for that.

The new site fixes the technical problems in code. What's left is off-site work only
you can do (listed at the bottom).

## Findings on the old site and what changed

| # | Issue (old site) | Impact | Fix in the new site |
|---|------------------|--------|---------------------|
| 1 | `<title>Lint</title>`, nothing else | High | Every page has a unique title with keywords, e.g. "Lint · Security R&D lab in Gwalior, India" |
| 2 | No meta description | High | Unique description per page; work and posts use their own summary |
| 3 | Brand name collides with "lint/linter" (code tools) | High | "Lint" is always paired with "security R&D lab", "Gwalior", "Lint Lab"; `alternateName: Lint Lab` in structured data |
| 4 | Single page, single URL | High | 16 pages: each product, service area, post, the student program, about and contact can rank for its own queries |
| 5 | No structured data | High | JSON-LD on every page: `Organization` (address, founder, Udyam ID, `sameAs`), `WebSite`, `BreadcrumbList`; plus `Service`, `CreativeWork`, `BlogPosting` and `FAQPage` where they fit |
| 6 | No `robots.txt` or sitemap (both 404) | Medium | `robots.txt` + auto-generated `sitemap-index.xml` |
| 7 | No canonical URL; `www` and apex both resolve | Medium | `<link rel="canonical">` on every page pointing at `https://lintlab.in/...` |
| 8 | No Open Graph / social preview | Medium | OG + Twitter tags and a 1200×630 share image (`/og.png`) |
| 9 | No favicon (404) | Low | SVG + ICO favicons, Apple touch icon, web manifest |
| 10 | No 404 page (GitHub default) | Low | Custom 404 with links back into the site, `noindex` |
| 11 | No `<main>`, no `<body>`, no skip link | Low | Proper landmarks, skip link, breadcrumb nav, one `h1` per page |
| 12 | No content beyond the home page | High | `/writing/` with RSS: write-ups are what will bring search traffic over time |
| 13 | No local signals | Medium | Locality, city, PIN in structured data and on the contact/about pages; `geo.region` meta |
| 14 | No trust signals | Medium | Udyam number with a link to the government verify page; `security.txt` |
| 15 | Fonts loaded in the body after the CSS | Low | Moved into `<head>` with preconnect |

## Keywords to target

Pick one main query per page. Search volume for these is small, which is good: a young
site can win them.

| Page | Main query | Supporting |
|------|------------|------------|
| Home | security R&D lab Gwalior | cybersecurity company Gwalior, Madhya Pradesh |
| `/services/` | web application security audit India | VAPT for startups, security review |
| `/work/router-reverse-engineering/` | router firmware reverse engineering | UART SPI flash dump, Beetel 777VR1 firmware |
| `/work/lint-contest-platform/` | secure coding contest platform for colleges | HackerRank alternative India |
| `/work/securecode/` | secure coding assessment platform | |
| `/lab/` | cybersecurity internship Gwalior | cybersecurity projects for students with certificate |
| `/writing/` posts | long-tail technical how-tos | |

## Do these yourself (not code)

1. **Google Search Console.** Add `lintlab.in` as a Domain property (DNS TXT record at
   your domain registrar), then submit `https://lintlab.in/sitemap-index.xml`.
2. **Bing Webmaster Tools.** Import from Search Console in one click.
3. **Google Business Profile.** Create one for "Lint" in Gwalior as a service-area
   business (you can hide the street address). This is the biggest local SEO win.
4. **Make the email real.** Check that `hello@lintlab.in` actually receives mail
   (Cloudflare Email Routing or Zoho Mail free plan both work).
5. **LinkedIn company page.** Put `https://lintlab.in` as the website and use the same
   description. Same for GitHub org `LintLabBuild` (Settings → Profile → URL).
6. **Write.** One honest technical post a month (router RE progress, a sandboxing
   lesson, a bug you found in your own platform) beats any amount of tuning.
7. **Backlinks.** College department pages, hackathon pages (SIH), and dev.to/Medium
   cross-posts with a canonical link back to lintlab.in.

## Check after going live

- [Rich Results Test](https://search.google.com/test/rich-results) on `/`, `/lab/` and a post.
- [PageSpeed Insights](https://pagespeed.web.dev/) on `/` (target: 95+ on all four).
- Share a link on LinkedIn/WhatsApp and confirm the preview image shows.
