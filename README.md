# We Buy As-Is — Website (v2, "Closing Ledger" redesign)

A mobile-optimized, multi-page lead-generation website for a cash home buying business.

## What changed in this redesign

- **"Client Experiences" section removed** from `index.html` entirely (was placeholder testimonials).
- **Full visual reform.** The old design used the black/yellow "bandit sign" look common to this
  industry (Oswald caps, hard drop-shadow buttons, flat blocks). This version keeps the same brand
  colors at heart (ink black + gold from the logo) but reinterprets them as a warm, paper-and-brass
  "closing ledger" identity — serif display type (Fraunces), a monospace type for data/labels (IBM
  Plex Mono), a torn-receipt lead form card, and original hand-drawn line-art (no stock photography,
  so there's nothing to license or that could break as a dead hotlink).
- **"Us vs. A Traditional Listing" is now a full comparison panel**, not a plain table: animated bar
  charts for time-to-close and fees, an eight-point feature checklist, and a side-by-side "net
  proceeds" equation strip that visually walks through what gets subtracted from a traditional sale
  versus a cash offer.
- **Conversion/UX principles applied throughout:**
  - The lead form is now two short steps instead of one long one (address + condition first, contact
    info second) — lower-friction first step increases the odds someone starts and finishes it.
  - The comparison section anchors the traditional-listing costs and timeline before showing the
    alternative.
  - Copy leans on loss-aversion framing (what you avoid) alongside gain framing (what you get),
    without invented statistics, fake urgency, or fake reviews.
  - Reassurance microcopy ("no obligation," "we never sell your information") sits right next to
    every submit button.
- **Site is set to not be indexed by search engines**: every page has `<meta name="robots" content="noindex, nofollow">`
  and there's a `robots.txt` at the root disallowing all crawlers. Note: this only asks well-behaved
  search engines not to index it — it does **not** password-protect the site. Anyone with the direct
  URL can still open it. If you need it actually private, that requires hosting-level access control
  (not something GitHub Pages does natively).

## Pages
- `index.html` — Home (hero + 2-step lead form + value props + how it works + comparison)
- `how-it-works.html` — Process detail
- `about.html` — Company story
- `faq.html` — FAQ accordion
- `contact.html` — Full contact/lead form
- `404.html` — Any broken/unbuilt link redirects here to the homepage

## Before going live — things to update

1. **Copy**: Headlines, FAQ answers, and about-page copy are drafted defaults — edit to match your
   actual business details, licensing, and service area.
2. **Web3Forms key**: Your access key is already wired into both forms (`index.html` and
   `contact.html`), unchanged from before. Every submission — name, email, address, condition,
   timeline, message — will be emailed to **Lethbridgewebuycash@gmail.com** automatically. Test it
   once live by submitting the form yourself.
3. **Domain / branding**: Update the `<title>` and `<meta name="description">` tags in each page if
   you register a custom domain.
4. **Search visibility**: if you later *want* the site to be searchable on Google, remove the
   `<meta name="robots">` tag from each page and delete/empty `robots.txt`.

## How to publish on GitHub Pages

1. Create a new GitHub repository (e.g. `webuyasis`).
2. Upload **all files in this folder**, keeping the folder structure (`css/`, `js/`, `images/` must
   stay as subfolders).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source: Deploy from a branch**, Branch: `main`, folder:
   `/ (root)`. Save.
5. GitHub will give you a live URL like `https://yourusername.github.io/webuyasis/` within a minute
   or two.
6. Optional: add a custom domain under the same Pages settings once you have one.

## Notes
- No phone number or physical address is included anywhere, per your request.
- The site is fully responsive — tested breakpoints at mobile (~375px), tablet (~768px), and desktop
  (1140px+).
- Sticky "Get My Free Cash Offer" bar appears on mobile only, for easy access to the form while
  scrolling.
- Reduced-motion is respected: bar-chart and scroll-reveal animations are skipped for users with
  `prefers-reduced-motion` enabled.
