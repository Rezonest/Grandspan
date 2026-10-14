# Grandspan Engineering & Projects website

React + Vite. Every page is prerendered to static HTML at build time, then hydrated,
so pages keep their original `.html` URLs, load with full content, and navigate
client-side once JavaScript is running.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload (pages render client-side) |
| `npm run build` | Client build, server build, then prerender every route into `dist/` |
| `npm run preview` | Serve `dist/` locally to check the production build |
| `npm run map:data` | Regenerate `src/data/worldMap.js` after editing locations in `scripts/build-map-data.mjs` |

Deploy the `dist/` folder as static files.

## Layout

```
index.html               HTML template; <!--app-head--> and <!--app-html--> are filled at build
public/                  Copied as-is: images (public/assets), robots.txt, sitemap.xml, manifest
src/
  main.jsx               Browser entry: hydrates prerendered pages
  entry-server.jsx       Build-time renderer used by scripts/prerender.mjs
  routes.js              URL -> page map; each page is a separate lazy-loaded chunk
  router.jsx             Minimal router: <Link>, history, scroll and hash handling
  head.js                Per-page <title>, meta, canonical and JSON-LD
  App.jsx                Layout: header, page, footer
  components/            Header, Footer, CtaBand, EnquiryForm, WorldMap, ArrowIcon
  pages/                 One component per page; each exports `meta` for its <head>
  data/worldMap.js       Generated map geometry (do not edit by hand)
  styles.css             Site stylesheet
scripts/                 prerender.mjs, build-map-data.mjs (+ source map data)
```

## Adding a page

1. Create `src/pages/MyPage.jsx` exporting `meta` (`path`, `title`, `description`, `robots`, `jsonLd`) and a default component.
2. Add the path to `routes` and `prerenderRoutes` in `src/routes.js`.
3. Add it to `public/sitemap.xml` and the nav/footer if needed.

Use `<Link to="/page.html">` for internal links, so navigation stays client-side.

## Images

Large photos have an `-800.webp` variant used through `srcSet` on small screens.
When replacing one of those images, regenerate its 800px-wide variant too.
