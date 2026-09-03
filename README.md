# Bowman Barnworks Website

Static marketing website for **Bowman Barnworks**, a Calera, Oklahoma construction and
home-improvement company. Built with **Vite + React + TypeScript + Tailwind CSS** and
deployed to **GitHub Pages** at **https://bowmanbarnworks.com**.

> **Contact form behavior:** the project inquiry form does not save submissions to a
> database. It opens a pre-addressed email to `bartbowman@gmail.com` with the visitor's
> form details and shows an on-page confirmation that the draft is ready to review and
> send. To capture submissions directly, swap `handleInquirySubmit` in
> [`client/src/pages/Home.tsx`](client/src/pages/Home.tsx) for a form provider
> (Formspree, Web3Forms, a serverless function, etc.). Do not put API credentials in
> this repository.

## Project layout

| Path | Purpose |
| --- | --- |
| `client/index.html` | HTML shell — page `<title>`, meta description, favicon, social tags. |
| `client/src/pages/Home.tsx` | The entire page: content, gallery data, FAQ data, form logic, CTAs. |
| `client/src/index.css` | Fonts (Google Fonts), color tokens, typography utilities, textures, motion. |
| `client/src/main.tsx` / `App.tsx` | React entry point. |
| `client/public/images/` | All site images, served at `/images/<filename>`. |
| `client/public/CNAME` | Custom domain for GitHub Pages (`bowmanbarnworks.com`). |
| `.github/workflows/deploy.yml` | Builds and publishes to GitHub Pages on every push to `main`. |
| `docs/` | Administrator guide and image manifest. |

## Local development

Requires **Node.js 20+** (CI uses 22).

```bash
npm install
npm run dev      # start the dev server, open the printed URL
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
```

## Deployment (GitHub Pages)

Deployment is automatic. On every push to `main`, the workflow in
`.github/workflows/deploy.yml` runs `npm ci && npm run build` and publishes `dist/` to
GitHub Pages.

One-time repository setup:

1. **Settings → Pages → Build and deployment → Source:** select **GitHub Actions**.
2. Push to `main` (or run the workflow manually from the **Actions** tab). The first
   run creates the `github-pages` environment and publishes the site.

### Custom domain

`client/public/CNAME` already contains `bowmanbarnworks.com`, so the build ships a
`CNAME` file and GitHub Pages picks it up automatically. At your DNS provider, add:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `dwdalton80.github.io.` |

(GitHub's apex-domain IPs — confirm against the current list in
[GitHub's Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).)
After DNS propagates, enable **Enforce HTTPS** in Settings → Pages.

### Hosting without a custom domain

If you ever serve from the project URL `https://dwdalton80.github.io/bowman-barnworks/`
instead of the custom domain, add a repository variable **`BASE_PATH`** =
`/bowman-barnworks/` (Settings → Secrets and variables → Actions → Variables). The build
reads it via `vite.config.ts`. Note that image paths written as `/images/...` string
literals in `Home.tsx` would also need a base prefix in that mode; the custom-domain
setup (base `/`) needs no code changes.

## Editing content

Almost everything is in `client/src/pages/Home.tsx`:

- **Gallery:** the `projects` array near the top.
- **Services:** the `services` array.
- **FAQ:** the three question/answer strings.
- **Inquiry recipient:** search for `bartbowman@gmail.com`.
- **Headings, founder quote, contact details:** inline in the JSX.

Colors, fonts, and textures live in `client/src/index.css`. Images go in
`client/public/images/` — see [`docs/ASSET-MANIFEST.md`](docs/ASSET-MANIFEST.md).

Run `npm run build` before committing to catch type errors.

## Origin

This site was first prototyped with Manus. This repository is the standalone,
self-hosted rebuild: Manus runtime plugins, the unused Express server, the component
library, and client-side routing were removed, leaving the single-page site and a plain
static build.
