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
- Frontmatter: `title` (plain, under 60 chars), `description` (one sentence, what the page answers; it becomes the llms.txt line), optional `icon` (Lucide name).
- Open with 1 to 2 sentences saying what this is and why it matters.
- Then sections with `##` headings. Use `<Steps>` for procedures, `<Note>`/`<Tip>`/`<Warning>` sparingly, `<CardGroup>` for "next" links at the end.
- Metric pages: What it measures, How it is calculated (from pipeline code, in plain words), Where you see it, How to read it, What moves it.
- Internal links are root-relative without extension: `/metrics/visibility`.
- No screenshots yet (none exist). Do not reference images that are not in the repo.
