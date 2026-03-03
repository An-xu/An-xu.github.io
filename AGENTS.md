# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16** static academic portfolio site (TypeScript, React 19, Tailwind CSS v4). No database or external services required.

### Quick reference

| Action | Command |
|---|---|
| Dev server | `npm run dev` (port 3000) |
| Lint | `npm run lint` |
| Build | `npm run build` |
| Static export | Output in `out/` via `output: 'export'` in `next.config.ts` |

### Notes

- The `legacy_jekyll/` directory is excluded from TypeScript and ESLint. It is kept for reference only — do not modify or build it.
- There are no automated tests configured in this project (no test script in `package.json`).
- The site is fully static (`output: 'export'`); there are no API routes or server-side features.
- ESLint produces 2 warnings in `src/components/ui/tilted-card.tsx` (unused vars) — these are pre-existing and not errors.
