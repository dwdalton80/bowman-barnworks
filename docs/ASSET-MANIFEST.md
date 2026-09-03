# Bowman Barnworks Asset Manifest

This manifest records every visual asset referenced by the website and is the source of truth for administrators replacing images.

All images are self-hosted in `client/public/images/` and referenced as `/images/<filename>`. The "managed-storage reference" column below is kept only as a record of where each asset originated in the original Manus prototype.

## Brand and feature images

| Site placement | Current managed-storage reference | Original / local source | Public deployment filename | Required public reference | Notes |
| --- | --- | --- | --- | --- | --- |
| Header logo | `/manus-storage/bowman-logo_292214b6.png` | `/home/ubuntu/webdev-static-assets/bowman-logo.png` | `bowman-logo.png` | `/images/bowman-logo.png` | Use the original supplied logo. Keep it square because the header displays it in a circle. |
| Homepage hero | `/manus-storage/bowman-sunset-windmill-hero_48fab5e4.png` | `/home/ubuntu/webdev-static-assets/bowman-sunset-windmill-hero.png` | `bowman-sunset-windmill-hero.png` | `/images/bowman-sunset-windmill-hero.png` | Supplied sunset windmill, gazebo, and homestead image. Use a left-side text overlay and preserve right-side scenery. |
| Our Story feature | `/manus-storage/782169030_122102269161450155_9143806664749168109_n_a19fcfb2.jpg` | `/home/ubuntu/upload/782169030_122102269161450155_9143806664749168109_n.jpg` | `gallery-red-barn.jpg` | `/images/gallery-red-barn.jpg` | High-resolution red barn image. Also used in the gallery. |
| Founder photograph | `/manus-storage/founder-bowman_3cb83ead.jpg` | `/home/ubuntu/webdev-static-assets/founder-bowman.jpg` | `bart-bowman-founder.jpg` | `/images/bart-bowman-founder.jpg` | Bart Bowman with a child on a rope swing. Keep the `object-position` near `center 18%` when using a 4:3 crop. |
| Founder signature graphic | `/manus-storage/bart-bowman-signature_b6fb183e.png` | `/home/ubuntu/webdev-static-assets/bart-bowman-signature.png` | `bart-bowman-signature.png` | `/images/bart-bowman-signature.png` | Brand-style signature graphic. It is not a legal signature. Replace only with Bart-approved artwork. |
| Services background | `/manus-storage/785739228_122103325737450155_6631801641441347963_n_023918ae.jpg` | `/home/ubuntu/upload/785739228_122103325737450155_6631801641441347963_n.jpg` | `windmill-services.jpg` | `/images/windmill-services.jpg` | Dusk windmill image behind the service cards. A dark overlay is required for text contrast. |

## Gallery images

| Gallery title | Original / local source | Public deployment filename | Required public reference | Current visual description |
| --- | --- | --- | --- | --- |
| Silo Porch Retreat | `/home/ubuntu/upload/778517811_122102269545450155_5211125629519547398_n.jpg` | `gallery-silo-porch.jpg` | `/images/gallery-silo-porch.jpg` | A grain silo adapted into a shaded porch setting. |
| Stone Hearth | `/home/ubuntu/upload/778816634_122102269173450155_7679161475322909139_n.jpg` | `gallery-stone-hearth.jpg` | `/images/gallery-stone-hearth.jpg` | Floor-to-ceiling stone fireplace in an open living space. |
| Covered Back Porch | `/home/ubuntu/upload/779995995_122102269245450155_4586310947028846175_n.jpg` | `gallery-covered-porch.jpg` | `/images/gallery-covered-porch.jpg` | Covered timber porch with a view. |
| Windmill After Dark | `/home/ubuntu/upload/782169029_122102269029450155_7821976447098357105_n.jpg` | `gallery-windmill-dusk.jpg` | `/images/gallery-windmill-dusk.jpg` | Windmill and finished homestead at evening. |
| The Red Barn | `/home/ubuntu/upload/782169030_122102269161450155_9143806664749168109_n.jpg` | `gallery-red-barn.jpg` | `/images/gallery-red-barn.jpg` | Red custom barn with covered bays. |
| Curved Staircase | `/home/ubuntu/upload/782344947_122102269605450155_957201122473267065_n.jpg` | `gallery-curved-staircase.jpg` | `/images/gallery-curved-staircase.jpg` | Interior staircase with timber and iron detailing. |
| Barn Entry Details | `/home/ubuntu/upload/784251184_122102269383450155_7847349741142418159_n.jpg` | `gallery-barn-entry.jpg` | `/images/gallery-barn-entry.jpg` | Exterior entry using stone, board-and-batten, and awnings. |
| Fire Tower Platform | `/home/ubuntu/upload/786242300_122103985113450155_6114300609553173332_n.jpg` | `gallery-fire-tower.jpg` | `/images/gallery-fire-tower.jpg` | Tall timber observation platform. |
| Built for the Land | `/home/ubuntu/upload/787996953_122103031653450155_2089265229261216050_n.jpg` | `gallery-land-view.jpg` | `/images/gallery-land-view.jpg` | Elevated view of structures in the surrounding property. |

## Asset replacement process

Use images with permission from Bowman Barnworks or the original owner. Use high-resolution files whenever possible. For the gallery, use files at least 1600 px on the long edge so the `object-cover` crop remains sharp on desktop. Keep file names descriptive, lower case, and hyphenated.

After adding a replacement image to `client/public/images/`, update its `image` value in the `projects` array or its image element in `client/src/pages/Home.tsx`. Update this manifest in the same Git commit. Run `npm run build`, then check the gallery on both a wide desktop screen and a mobile screen.

## Retired and reference-only images

The initial generic generated hero image and low-resolution Facebook thumbnails are not part of the independent asset package. Do not restore them. They were replaced by supplied high-resolution Bowman Barnworks imagery.

## References

[1]: https://vite.dev/guide/assets "Vite Static Asset Handling"
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit "MDN CSS object-fit"
[3]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img "MDN img element"
