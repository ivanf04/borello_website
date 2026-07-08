---
name: verify
description: Build, run, and drive the Borello Ranch Estates Next.js site to verify changes end-to-end.
---

# Verifying the Borello Ranch Estates site

## Build & serve

```bash
cd borello_website          # the app lives one level below the repo root
npm run build
PORT=3789 npm start         # production server; dev server is `npm run dev`
```

Always start the server from `borello_website/` (the app dir). Starting it
from the repo root leaves a stale/broken server that 500s on chunks.
After a rebuild, kill anything on the port first: `lsof -ti :3789 | xargs kill`.

## Drive it

No Playwright. Use puppeteer-core against system Chrome
(`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`),
installed into the session scratchpad (`npm i puppeteer-core`).

Gotchas learned the hard way:

- `waitUntil: "networkidle0"` can hang; use `"load"` + ~2s settle before
  interacting (hydration must finish or clicks are no-ops).
- The hero is `min-h-svh`; use `fullPage: true` screenshots at a normal
  viewport (1440x900 / 390x844), never a giant `--window-size`.
- Listing images are lazy-loaded; they're blank in full-page captures
  unless scrolled into view first (element screenshots auto-scroll).
- React re-applies attributes on hydrated inputs — you cannot strip
  `type="email"`/`required` via DOM to reach server-side validation.
  Instead replay the form POST with curl: parse the form's hidden
  `$ACTION_*` inputs from the served HTML and send them as multipart
  fields along with the visible fields (see git history for a python
  one-liner). Response HTML contains the returned form state message.
- Lead submits log `New Borello Ranch inquiry: {...}` on the server —
  check the server log to confirm the action ran.

## Flows worth driving

1. Full-page screenshot desktop + mobile (layout regressions).
2. Contact form: empty submit (native `required` blocks), Select opens
   and trigger shows the *label* (needs `items` prop on `Select`),
   valid submit swaps form for the `role="status"` success panel.
3. No-JS/bad-email POST via curl → error message in response HTML.
