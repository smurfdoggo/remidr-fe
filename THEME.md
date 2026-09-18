# Remidr theme

Ink Blue + Warm Ivory is the light palette. Dark mode uses ink surfaces and lighter accents.

## Changing colors

Edit `src/constants/theme-tokens.json`, the shared source for both themes, then run `npm run theme:generate` to update NativeWind's HSL variables in `src/global.css`. Keep the generated CSS committed. `npm run theme:check` detects stale CSS.

`src/lib/theme.ts` exposes `THEME` and navigation colors. `src/constants/theme.ts` exposes the same colors with compatibility aliases used by existing themed components. Typography and spacing remain there.

## Using colors

- Use `bg-background`, `bg-card`, and `text-foreground` for surfaces and content.
- Use `bg-primary text-primary-foreground` for primary actions.
- Use `bg-accent text-accent-foreground` for selected items.
- Use `text-income`, `text-expense`, `text-due-soon`, and `text-overdue` for financial status. Pair them with labels or signs.
- Use `text-destructive` for validation errors and destructive actions.
- Use `text-chart-1` through `text-chart-5` for chart categories, with labels or distinct markers.
- For React Native styles, use `useTheme()` or `THEME[scheme]` instead of literal colors.

Income also represents paid bills. Expenses are routine transactions; overdue uses the error color. Verify contrast when introducing new foreground/background combinations.
