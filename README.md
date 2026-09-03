# Bowman Barnworks Website

This repository contains the static marketing website for **Bowman Barnworks**, a Calera, Oklahoma construction and home-improvement company. The site presents the company’s rustic structures, custom carpentry, outdoor living work, founder story, and project inquiry flow in a Western-heritage visual system.

> **Current website behavior:** The site is a client-side React application. The project inquiry form does not save submissions to a database. It opens a pre-addressed email to `bartbowman@gmail.com` with the visitor’s form details.

## Administrator start here

The current site is implemented as a Vite, React, TypeScript, and Tailwind CSS application. The primary page is [`client/src/pages/Home.tsx`](client/src/pages/Home.tsx). Global visual tokens, font imports, typography utilities, background textures, motion rules, and layout helpers are in [`client/src/index.css`](client/src/index.css).

| Administrative task | Primary file or location | Notes |
| --- | --- | --- |
| Change headings, descriptions, services, gallery captions, founder quote, or form labels | `client/src/pages/Home.tsx` | The complete public website is rendered from one page component. |
| Change logo, colors, typography, animated script underlines, wood textures, or shared responsive styles | `client/src/index.css` | Google Fonts are imported at the top of this file. |
| Add or replace photos for a standard Vite/GitHub deployment | `client/public/images/` | Asset migration and filename mapping are defined in [`docs/ASSET-MANIFEST.md`](docs/ASSET-MANIFEST.md). |
| Change page title or meta description | `client/index.html` | Update the document title and description together. |
| Change routes or add new pages | `client/src/App.tsx` and `client/src/pages/` | The current site is a one-page experience. |
| Update the project inquiry recipient | `client/src/pages/Home.tsx` | Search for `bartbowman@gmail.com` and update the `mailto:` destination. |

## Local development

### Prerequisites

Use Node.js 22 or later and pnpm 10 or later. The project lockfile expects pnpm.

```bash
pnpm install
pnpm dev
```

The development server is served by Vite. Open the local URL printed in the terminal after the command starts.

### Quality checks

Run both checks before merging or deploying an update.

```bash
pnpm check
pnpm build
```

`pnpm check` runs TypeScript without emitting files. `pnpm build` creates the production bundle in `dist/`.

## Deployment and image storage

The working Manus project stores images under `/manus-storage/...`, which is appropriate for its managed preview. A standard GitHub or third-party hosting deployment should use the self-contained images in `client/public/images/`, referenced as `/images/<filename>`.

The GitHub handoff copy therefore includes image files in `client/public/images/` and rewrites all asset references away from managed storage. Do not remove these files unless the corresponding JSX reference is replaced. The full mapping between visual sections, public filenames, and original source files is in [`docs/ASSET-MANIFEST.md`](docs/ASSET-MANIFEST.md).

## Project inquiry form

The founder-note **Start a Project** button smoothly scrolls visitors to the section with `id="project-inquiry"`. The form captures name, email address, optional phone number, project type, and project details. On submission, `handleInquirySubmit` builds a `mailto:` URL addressed to Bart Bowman.

This approach is static-site safe and requires no server credentials. It relies on the visitor having a configured email client. For direct form delivery, replace the handler with a provider such as Formspree, Netlify Forms, Resend through a serverless function, or a CRM integration. Do not put API credentials in this static client repository.

## Documentation

| Document | Purpose |
| --- | --- |
| [`docs/ADMINISTRATOR_GUIDE.md`](docs/ADMINISTRATOR_GUIDE.md) | Complete design, content, layout, form, asset, and maintenance handoff. |
| [`docs/ASSET-MANIFEST.md`](docs/ASSET-MANIFEST.md) | Image inventory, current placement, filenames, and replacement guidance. |

## Content accuracy and future maintenance

The founder is **Bart Bowman**. The founder quote currently reads: “We build every project with one goal: make it honest, useful, and ready for the long haul.” Replace the quote only after receiving approved final wording from Bart.

All project names and descriptions are presentational labels for the current gallery. Confirm project titles, locations, services, and permissions before publishing changes that make more specific client claims.

## References

[1]: https://vite.dev/guide/ "Vite Guide"
[2]: https://react.dev/learn "React Documentation"
[3]: https://tailwindcss.com/docs/installation/using-vite "Tailwind CSS with Vite"
[4]: https://docs.github.com/en/pages "GitHub Pages documentation"
