# Pretty Pastels by Muskaan

Portfolio and booking website for Pretty Pastels by Muskaan, a Delhi-based makeup artist specialising in corporate glitter bars, brand activations, bridal makeup and occasion glam.

## Live website

The current production website is deployed at:

https://pretty-pastels-muskaan.sanskar-bansal910520.chatgpt.site

## What is included

- animated, responsive editorial landing page
- corporate Glitter Bar service story
- live Instagram portfolio embeds
- bridal, editorial and party makeup services
- WhatsApp enquiry form with a pre-filled booking brief
- direct Instagram, email, phone and WhatsApp links
- accessible mobile navigation, FAQ interactions and reduced-motion support
- automatic GitHub Pages deployment workflow

## GitHub Pages

The repository includes a ready-to-run workflow at `.github/workflows/pages.yml`.
It prepares the static version under `github-pages/` and publishes it whenever
the `main` branch is updated.

After pushing the repository:

1. Open **Settings → Pages** in GitHub.
2. Set **Source** to **GitHub Actions** if it is not already selected.
3. Open **Actions** and wait for **Deploy to GitHub Pages** to finish.

The live URL will appear in the completed workflow and in the repository's Pages settings.

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

The main implementation lives in:

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`

The no-build GitHub Pages version lives in:

- `github-pages/index.html`
- `github-pages/script.js`

## Contact details used on the website

- Instagram: https://www.instagram.com/prettypastelsbymuskaan/
- WhatsApp / phone: +91 97118 95250
- Email: Prettypastelsbymuskaan@gmail.com
