# Dashboard components

This folder contains presentation components used only by Dashboard: its branded header, financial summaries, budget overview, spending breakdown, and unpaid-bills summary. They receive computed values through props and do not fetch or mutate data.

The route owns the selected month and composes these sections. Read-only fixtures live in `src/data/dashboard-samples.ts`; calculations live in `src/lib/analytics.ts`.

Generic month selection, pie-chart geometry, and rounded text live outside this folder. Budget progress uses React Native Reusables' `Progress` directly. All surfaces and controls reuse the installed primitives in `src/components/ui`; those primitives keep their existing defaults.

Remaining budget is monthly budget minus recorded spending. Income is separate. Paid bills are represented by expense transactions; unpaid bills are shown separately to avoid double counting.

Run `npm run test:analytics`, `npm run typecheck`, and `npm run theme:check` when changing calculations or theme integration.
