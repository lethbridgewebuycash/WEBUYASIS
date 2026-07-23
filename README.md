# We Buy As-Is — Website

A mobile-optimized, multi-page lead-generation website for a cash home buying business, styled around the provided logo (black / yellow / white).

## Pages
- `index.html` — Home (hero + lead form + value props + how it works + comparison + testimonial placeholders)
- `how-it-works.html` — Process detail
- `about.html` — Company story
- `faq.html` — FAQ accordion
- `contact.html` — Full contact/lead form
- `404.html` — Any broken/unbuilt link redirects here to the homepage

## Before going live — things to update

1. **Testimonials**: `index.html` has three placeholder testimonial cards (marked "Placeholder"). Replace with real client quotes, names, and star ratings once you have them. Do not publish invented reviews — this is a legal/FTC compliance issue (fake reviews are illegal to publish as genuine), not just a style choice.
2. **Copy**: Headlines, FAQ answers, and about-page copy are drafted defaults — edit to match your actual business details, licensing, and service area.
3. **Web3Forms key**: Your access key is already wired into both forms (`index.html` and `contact.html`). Every submission — name, email, address, condition, timeline, message — will be emailed to **Lethbridgewebuycash@gmail.com** automatically. Test it once live by submitting the form yourself.
4. **Domain / branding**: Update the `<title>` and `<meta name="description">` tags in each page if you register a custom domain.

## How to publish on GitHub Pages

1. Create a new GitHub repository (e.g. `webuyasis`).
2. Upload **all files in this folder**, keeping the folder structure (`css/`, `js/`, `images/` must stay as subfolders).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source: Deploy from a branch**, Branch: `main`, folder: `/ (root)`. Save.
5. GitHub will give you a live URL like `https://yourusername.github.io/webuyasis/` within a minute or two.
6. Optional: add a custom domain under the same Pages settings once you have one.

## Notes
- No phone number or physical address is included anywhere, per your request.
- The site is fully responsive — tested breakpoints at mobile (~375px), tablet (~768px), and desktop (1140px+).
- Sticky "Get My Free Cash Offer" bar appears on mobile only, for easy access to the form while scrolling.
