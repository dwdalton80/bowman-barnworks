# Bowman Barnworks Website Administrator Guide

**Prepared for:** Bowman Barnworks administrative handoff  
**Current founder:** Bart Bowman  
**Service area shown on the site:** Calera, Oklahoma  
**Application type:** Static React marketing website

## 1. Purpose and operating model

The Bowman Barnworks website is a single-page marketing experience designed to make the company feel established, hands-on, and grounded in a rural Oklahoma setting. Its central messages are durable craftsmanship, practical structures, custom woodworking, and outdoor living. The page is intentionally editorial rather than template-driven: it uses a visual narrative from the sunset hero through company values, project evidence, founder story, a trust section, services, FAQs, and an inquiry form.

The project is a static Vite application. It has no database, no user login, no protected dashboard, and no server-side contact capture. The contact form opens a prepared email to `bartbowman@gmail.com`. This makes the current site simple to host but means visitors need an email program configured on their device. The form’s handoff logic is in `handleInquirySubmit` inside `client/src/pages/Home.tsx`.

## 2. Technical architecture

| Layer | Current choice | Administrator notes |
| --- | --- | --- |
| Framework | React 19 with TypeScript | The main website uses one `Home` component. |
| Build system | Vite | Use `pnpm dev` for local work and `pnpm build` for production output. |
| Styling | Tailwind CSS 4 plus custom CSS | Utility classes build component layout. Brand-wide typography, textures, and animation live in `client/src/index.css`. |
| Icons | Lucide React | Icons are imported in `Home.tsx`. Use matching Lucide icons for future additions. |
| Routing | Single-page application | `App.tsx` renders `Home.tsx`; add routes only when genuine additional pages are needed. |
| Media | Local static images for GitHub handoff | Place self-hosted images in `client/public/images/`, then reference them with `/images/<filename>`. |
| Form handling | `mailto:` handoff | Safe for static hosting; replace with a secure form provider only when the business wants direct submission. |

### Primary file map

| Path | Responsibility | Change examples |
| --- | --- | --- |
| `client/src/pages/Home.tsx` | All page content, image references, gallery data, FAQ data, form state, and CTA behavior | Update gallery captions, Bart’s quote, email address, form labels, or services. |
| `client/src/index.css` | Fonts, color tokens, textured surfaces, animated script underlines, global layouts, motion behavior | Rebrand colors, change font pairings, change button motion, or tune mobile spacing. |
| `client/src/App.tsx` | Root application component | Add a route wrapper only if new pages are introduced. |
| `client/index.html` | Browser title and search description | Update title, meta description, favicon, and verification tags. |
| `client/public/images/` | Self-hosted production image library | Replace or add photo files for external hosting. |
| `docs/ASSET-MANIFEST.md` | Image index and replacement rules | Update whenever a photo is added, removed, or renamed. |

## 3. Visual identity

The site is based on a **Western heritage** aesthetic. It combines sunset amber, dark saddle brown, aged-wood texture, parchment backgrounds, and real project photography. The tone should remain warm, tangible, rural, and competent rather than nostalgic or decorative for its own sake.

### Typography system

| Role | Font | Current use | Maintenance guidance |
| --- | --- | --- | --- |
| Display slab serif | Bree Serif | Hero title, section headings, service names, gallery project names, principle titles | Use for compact, high-impact words or short titles. Avoid using it for long paragraphs. |
| Script accent | Yellowtail | Script words in headings, “Built to Last,” “From the ground up,” and related accents | Use sparingly. It has an animated underline in `index.css`; do not use it for paragraphs or forms. |
| Narrative serif | DM Serif Text | Hero supporting line, company story, founder quote, contact-form introduction, trust copy | Use for storytelling or quotes. Maintain comfortable line height. |
| Condensed utility type | Oswald | Eyebrows, navigation, labels, image captions, metadata, buttons | Use uppercase with letter spacing for a practical workshop-label effect. |
| Interface/body type | Source Sans 3 | Inputs, supporting labels, non-story utility copy | Keep it for task-oriented UI text and longer low-emphasis content. |

All fonts are imported from Google Fonts at the top of `client/src/index.css`. For performance-sensitive production work, consider self-hosting the selected font files. If fonts change, preserve the role distinction rather than applying a single font to every element.

### Color system

| Token or recurring color | Approximate use | Meaning |
| --- | --- | --- |
| `#f5ead2` | Parchment page surfaces | Warm, usable background for content and narrative sections. |
| `#ead8b9` | Secondary cream panels | Subtle visual separation for trust and story content. |
| `#24140f` / `#2b1710` | Dark brown, near-black wood | Hero overlays, form section, gallery field, and footer. |
| `#5a2f20` | Mid brown | Shadows, wood-adjacent detail, and framing. |
| `#9a3f1b` | Saddle/rust brown | Metadata, lines, links, and founder accents. |
| `#b85a20` | Rust orange | Active highlights, labels, borders, and details. |
| `#e3a14c` / `#f2be6b` | Sunset gold | Primary CTA, script accent, and selected highlights. |
| `#fff3d8` | Cream-white | Text on dark wood surfaces. |

Do not replace the textured dark sections with flat black or the light surfaces with pure white. The contrast between stained wood, parchment, and sunset gold is central to the design.

## 4. Page layout and content map

The page is arranged in the following order. Preserve this narrative sequence unless the business changes its marketing priority.

| Section | Location / identifier | Purpose | Key editable content |
| --- | --- | --- | --- |
| Header and hero | `#top` | Establishes the brand, location, visual style, main CTA, and homepage message | Hero image, title, supporting sentence, quote, navigation labels. |
| Heritage strip | Immediately after hero | Reinforces material values with `Wood · Steel · Heritage · Home` and “Built to Last” | Material words and script phrase. |
| Company approach | `#approach` | Explains the company’s values and three foundations | Narrative copy and three value labels. |
| Gallery | `#work` | Shows nine high-resolution project images with hover descriptions | `projects` array near the top of `Home.tsx`. |
| Our Story | `#story` | Introduces local approach, red barn image, Bart photo, quote, signature, and CTA | Story paragraphs, quote, Bart’s role, photo captions. |
| Why Choose Us | `#why-choose` | Presents three trust-building craftsmanship principles | Icon imports, principle titles, and descriptions. |
| Services | Following trust section | Displays Rustic Structures, Custom Carpentry, and Home Improvement against a windmill photo | `services` array near the top of `Home.tsx`. |
| FAQ | Following services | Handles standard first-contact questions | The three question-and-answer strings in `Home.tsx`. |
| Unified contact and inquiry | `#contact` | Combines lead details, Bart’s email, street address, Facebook link, and the project form in one final destination | Form labels, options, recipient address, contact details, and mailto body. |
| Footer | Page end | Repeats core brand line and copyright | Shortest and lowest-priority content. |

## 5. Hero section management

The live hero uses the supplied sunset image featuring a windmill, gazebo, and homestead. It is intentionally positioned with `object-[62%_center]` so the windmill and building remain visible on the right while the dark gradient preserves readable text on the left.

When replacing this image, use a landscape photograph of at least 1600 px wide. Choose a photo with visual interest on the right side and cleaner negative space on the left. The hero has a strong dark left-to-right gradient. Do not remove the overlay without testing both navigation and heading contrast on the actual image.

## 6. Gallery management

The gallery data is the `projects` array in `Home.tsx`. Each project object includes four fields: `title`, `type`, `image`, and `description`. The gallery cards link to the public Facebook page because individual project detail pages are not currently implemented.

The cards use responsive hover and keyboard focus effects. On desktop, title information shifts upward and a concise description appears. On touch layouts, description text remains available without requiring hover. Preserve the `aria-label` made from the title and description when adding new entries.

Use high-resolution images only. The initial Facebook thumbnails were replaced because they appeared pixelated. For consistent framing, favor portrait or landscape images that can tolerate an `object-cover` crop. If an image needs a different crop, adjust its individual class only after checking desktop and mobile.

## 7. Founder block and signature

The founder note uses a supplied photograph of Bart Bowman. It is deliberately cropped using `object-[center_18%]` to keep Bart’s head visible in the 4:3 frame. The quote is presentational and should be replaced only with approved final wording.

The signature beneath Bart’s name is a **brand-style graphical signature**, not a legally verified signature. It is rendered from the `bart-bowman-signature.png` asset. Replace it with an authentic scanned signature only if Bart explicitly provides one and approves its use on the public site.

The **Start a Project** button below the signature calls `scrollTo("project-inquiry")`. Its hover state uses a 200 ms lift, rust fill, text-color transition, and diagonal arrow movement. Preserve the visible `focus-visible` styling for keyboard accessibility.

## 8. Unified contact and inquiry administration

The form is intentionally honest about its behavior: it says that submitting opens a pre-addressed email to Bart. After a valid submit, an accessible on-page status message confirms that the email draft is ready and tells the visitor to review and send it. The `handleInquirySubmit` function encodes the visitor’s details into the email subject and message body. This state confirms draft preparation only; it does not confirm that the visitor actually sent the email.

| Field | Requirement | Current purpose |
| --- | --- | --- |
| Name | Required | Identifies the prospective client. |
| Email address | Required | Gives Bart a direct reply route. |
| Phone | Optional | Allows a quicker follow-up when supplied. |
| Project type | Required selection with default | Categorizes the request. |
| Project details | Required | Captures location, timing, and the visitor’s initial scope. |
| Email-draft confirmation | Automatic after valid submit | Confirms that the pre-addressed email draft is ready. It does not confirm delivery or sending. |

If direct submission is required, use a form provider or serverless function. A production integration should include spam prevention, a success state, an error state, data-retention terms, and no client-exposed credentials. Do not attempt to send email through a browser-only API key.

## 9. Accessibility and interaction requirements

The current interface uses semantic buttons, labels, required field controls, image alt text, and focus styles. Continue these practices whenever modifying the site.

The script underline animation and CTA transitions include a `prefers-reduced-motion` override. Any new motion should use `transform` and `opacity`, should remain under roughly 300 ms for standard interactions, and must not hide content or block keyboard users.

## 10. External deployment checklist

Before moving the project from Manus to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or another host, complete the following steps.

| Step | Required action |
| --- | --- |
| 1 | Copy the images listed in `docs/ASSET-MANIFEST.md` into `client/public/images/`. |
| 2 | Replace every `/manus-storage/...` reference in `Home.tsx` with the corresponding `/images/...` reference. |
| 3 | Run `pnpm install`, `pnpm check`, and `pnpm build` locally or in continuous integration. |
| 4 | Configure the host to publish the Vite output at `dist/public`. |
| 5 | Test every smooth-scroll CTA, the Facebook link, email link, and inquiry form on a phone and desktop browser. |
| 6 | Add a custom domain only after the production deployment passes a visual and functional check. |
| 7 | Replace `mailto:` form handoff with a managed form endpoint if the business wants submitted records without the visitor’s email client. |

## 11. Recommended editorial process

Keep changes small and verifiable. For routine content changes, edit the page content, run `pnpm check`, run `pnpm build`, and inspect desktop and mobile. For photo replacements, update the asset manifest in the same commit. For design updates, verify sufficient text contrast against every image and textured background.

The source code is compact by design. Avoid splitting the page into a large component system unless the site grows into genuinely distinct sections or additional pages. The most valuable future expansion is likely a dedicated project-detail format with location, scope, materials, process photos, and a direct inquiry CTA.

## References

[1]: https://vite.dev/guide/ "Vite Guide"
[2]: https://react.dev/learn "React Documentation"
[3]: https://tailwindcss.com/docs/installation/using-vite "Tailwind CSS with Vite"
[4]: https://developer.mozilla.org/en-US/docs/Web/API/Window/location "MDN Window location"
[5]: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/ "WAI-ARIA Authoring Practices: Keyboard Interface"
