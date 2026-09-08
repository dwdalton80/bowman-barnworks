# Bowman Barnworks Website

Static marketing website for **Bowman Barnworks**, a Calera, Oklahoma construction and
home-improvement company. Built with **Vite + React + TypeScript + Tailwind CSS** and
deployed to **GitHub Pages** at **https://dwdalton80.github.io/bowman-barnworks/**.
(The `bowmanbarnworks.com` custom domain is on hold — see “Moving back to a custom
domain” below.)

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
| `client/public/images/` | All site images. Reference them in code via `asset("/images/<file>")` so they resolve under the deploy base path. |
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

The site is served from the project URL `https://dwdalton80.github.io/bowman-barnworks/`.
The deploy workflow builds with `BASE_PATH=/bowman-barnworks/` so every asset resolves
under that subpath; images are referenced through the `asset()` helper in `Home.tsx`,
and Vite rewrites the paths in `index.html`.

### Moving back to a custom domain

To point `bowmanbarnworks.com` (or any domain) at this site again:

1. Recreate `client/public/CNAME` with one line: the bare domain (`bowmanbarnworks.com`).
2. Set the repo variable **`BASE_PATH`** to `/` (Settings → Secrets and variables →
   Actions → Variables), so the build serves from the domain root. With no variable set
   the workflow defaults to `/bowman-barnworks/`.
3. In **Settings → Pages**, enter the custom domain.
4. At your DNS provider, add four apex `A` records to GitHub's Pages IPs
   (`185.199.108.153`–`185.199.111.153`) and a `www` `CNAME` to `dwdalton80.github.io.`
   — confirm the current values in
   [GitHub's Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
5. Once DNS resolves, enable **Enforce HTTPS**.

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
