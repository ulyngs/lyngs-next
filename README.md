# ulriklyngs.com (Next.js)

Personal site rebuild of [ulriklyngs.com](https://ulriklyngs.com), ported from the Hugo/blogdown site in `lyngs-hugo`, with a visual language inspired by [digitalhabits.org](https://digitalhabits.org).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Content from Markdown/MDX posts + CSV data (synced from Google Sheets in the Hugo site)

## Develop

```bash
npm install
npm run dev
```

## Content sources

| Path | Source |
|------|--------|
| `data/*.csv` | Copied from `lyngs-hugo/data/` (projects, publications, CV) |
| `content/posts/*.mdx` | Converted from `lyngs-hugo/content/post/*.Rmd` |
| `public/` | Static assets from `lyngs-hugo/static/` |

To refresh structured data after updating the Google Sheet / Hugo CSVs, copy the CSVs into `data/` again.

## Routes

- `/` — Home
- `/publications/` — Publications
- `/cv/` — CV
- `/blog/` — Blog index
- `/post/:year/:month/:day/:slug/` — Blog posts (URLs preserved from Hugo)
