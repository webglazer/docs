# WebGlazer docs: writing rules

Reference sites: https://cloro.dev/docs (layout, landing cards, quickstart shape) and https://docs.peec.ai (marketer-facing order: quickstart, one page per metric, setup guides, reading results). Both run on Mintlify, like this repo.

## Readers
1. Marketers and agency staff using the dashboard at app.webglazer.com. Not developers.
2. AI agents reading the `.md` copy of each page. Every page must make sense on its own, with no "as mentioned above".

## Facts
- Every product fact comes from the code on the default branch: `C:\Users\chann\Desktop\WebGlazer\graph-heads\<repo>` (dashboard, pipeline, mcp, landing-page). Read only; never edit those clones.
- Use the exact UI labels from the dashboard code (button text, tab names, menu items) in **bold**.
- Never invent numbers, prices, limits, engine lists or plan names. If the code does not settle something, write the page without it and add an MDX comment `{/* VERIFY: what is unknown, where you looked */}`.
- Do not document admin-only, staff-only, dev-only or internal features (e.g. `/admin`, `/loading-preview`, manual trials).

## Voice
- Plain, direct English. Second person ("you"). Short sentences.
- No em dashes. No AI filler words (delve, crucial, robust, comprehensive, seamless, leverage, unlock, empower, landscape, pivotal, foster, showcase, vibrant).
- Lead with what the reader can do or learn. One idea per paragraph.
- American spelling in prose (color, analyze, organize). Quote UI labels exactly, even when the UI uses British spelling (for example **Uncategorised**, "Analysing competitors & sentiment").

## Page shape
- Frontmatter: `title` (plain, under 60 chars), `description` (one sentence, what the page answers; it becomes the llms.txt line), optional `icon` (Lucide name), and `related` (the 3 most useful next pages as root-relative paths; Mintlify shows them as **Related topics** at the bottom of the page).
- Open with 1 to 2 sentences saying what this is and why it matters.
- Then sections with `##` headings. Use `<Steps>` for procedures, `<Note>`/`<Tip>`/`<Warning>` sparingly, and tables when the reader compares items (plans, roles, metrics). No Mermaid: show a flow as `<Steps>`, a small table, or a dashboard image.
- A "Next steps" section of stacked full-width cards is allowed at the end of a page (`<CardGroup cols={1}>` with `<Card title icon href horizontal>` and a one-line description), as on `quickstart.mdx`, `concepts.mdx` and `index.mdx`. Keep `related` as well.
- Metric pages: What it measures, How it is calculated (from pipeline code, in plain words), Where you see it, How to read it, What moves it.
- Internal links are root-relative without extension: `/metrics/visibility`.
- Dashboard images live in `images/dashboard/`, one or two per page, each in a `<Frame caption="...">` with a plain `<img src="/images/dashboard/..." alt="..." />` (static paths get the `/docs` base added; template-literal paths do not).
  - Real screenshots (`wg-*.webp`) come from the linear.app sample project published on the blog. Caption: "Sample data based on a linear.app project". Only use one if it still matches the current dashboard code.
  - Mockups (`mock-*.webp`) are rendered from `_mockups/*.html` (excluded by `.mintignore`), built from the dashboard's real components and tokens with the same sample data. Caption: "Illustration with sample data". No real customer data, no personal names except generic ones like "Alex", only example.com emails, no real tokens.
  - WebP, max 1600 px wide, under about 200 KB.

## Design
- Stock Mintlify `luma` theme, copied from https://www.mintlify.com/docs (open-source config: github.com/mintlify/docs). Only the WebGlazer logo, colors, font and links differ. Colors: `primary` and `dark` are ink `#0A0A0A` (light-mode accent and buttons); `light` is brand sky `#00BCFF` so the active sidebar and TOC items stand out in dark mode.
- No custom page chrome. `style.css` only hides the Mintlify Assistant entry points (assistant is off on the free plan). `fonts.css` loads Geist the same way Mintlify's `fonts.css` loads Inter.
- Home page (`index.mdx`): `mode: "frame"` hero copied from Mintlify's index (centered title, background art, 2-column image cards). Card art lives in `images/hero/` as light and dark SVG pairs.
