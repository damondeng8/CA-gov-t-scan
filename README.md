# Civic Ledger (v1)

Evidence-first Canadian public-spending explorer MVP focused on **federal housing spending**.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Recharts
- Supabase Postgres

## Routes

- `/` Home
- `/explore` Explore entities
- `/entity/[slug]` Entity detail
- `/compare` Compare entities
- `/methodology` Methodology
- `/story/[slug]` Story card

## Quick start

```bash
npm install
npm run dev
```

## Notes

- This prototype is read-only.
- Calculations are deterministic and server-side (`lib/calculations.ts`).
- AI is used only for plain-language summaries from precomputed values (`lib/summary-prompt.ts`).
- Data source metadata is centralized in `lib/sources.ts`.
