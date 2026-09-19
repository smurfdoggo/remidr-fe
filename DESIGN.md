---
name: Remidr
description: Friendly monthly finance overview in Ink Blue and Warm Ivory.
colors:
  primary: "#3559C7"
  background: "#F7F6F2"
  foreground: "#202735"
  card: "#FFFFFF"
  secondary: "#EEEDE8"
  muted-foreground: "#606775"
  accent: "#EAF0FF"
  destructive: "#B42332"
  border: "#DFE2E8"
  income: "#16704A"
  expense: "#B4533C"
  due-soon: "#936000"
  chart-5: "#74518C"
  dark-background: "#151922"
  dark-foreground: "#F2F3F7"
  dark-card: "#202735"
  dark-primary: "#9DB5FF"
  dark-secondary: "#2B3343"
  dark-muted-foreground: "#B4BDCF"
  dark-accent: "#28375C"
  dark-accent-foreground: "#B8CAFF"
  dark-destructive: "#FF9BA5"
  dark-border: "#46536B"
  dark-income: "#72D4A5"
  dark-expense: "#F2A38D"
  dark-due-soon: "#E9BF68"
  dark-chart-5: "#C5A4DF"
typography:
  display:
    fontFamily: "NunitoBold"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: "60px"
    fontFeature: "tabular-nums"
  headline:
    fontFamily: "NunitoBold"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: "36px"
    letterSpacing: "-0.025em"
  title:
    fontFamily: "NunitoBold"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "32px"
    fontFeature: "tabular-nums"
  body:
    fontFamily: "NunitoRegular"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
  label:
    fontFamily: "NunitoSemibold"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "20px"
    fontFeature: "tabular-nums"
  button-label:
    fontFamily: "NunitoRegular"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "20px"
rounded:
  control: "8px"
  inset: "12px"
  surface: "16px"
  dialog: "24px"
  pill: "9999px"
spacing:
  one: "4px"
  two: "8px"
  three: "12px"
  four: "16px"
  five: "20px"
  six: "24px"
components:
  dashboard-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.surface}"
    padding: "20px"
  budget-header:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.card}"
    rounded: "{rounded.surface}"
    padding: "24px"
  month-control:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    height: "48px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.card}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
    height: "48px"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
    height: "48px"
  progress-track:
    backgroundColor: "rgba(255,255,255,0.20)"
    rounded: "{rounded.pill}"
    height: "8px"
---
# Design System: Remidr

## Overview

**Creative North Star: "Ink Blue + Warm Ivory"**

Remidr's approved visual identity combines a confident blue budget runway with a warm, quiet canvas and friendly rounded typography. The Dashboard makes one oversized remaining-budget amount the focal point, then keeps its plan progress and supporting financial context in one continuous reading path.

This document records the current Dashboard and shared color theme from source. Dashboard composition stays local to that surface; the shared palette applies across the app. Nunito is loaded inside the Dashboard provider and is not a global replacement for installed React Native Reusables typography. Native rendering has not been validated on this Windows host.

**Key Characteristics:**
- One blue budget runway with an oversized remaining amount.
- Rounded Nunito text within Dashboard boundaries.
- Flat 16px Dashboard surfaces on a tonal light or dark canvas.
- Labeled progress, open income/spent stats, and tabular financial numerals.
- Compact solid pie paired with category names and amounts.

## Colors

Ink Blue anchors the identity; Warm Ivory and white separate the light canvas and surfaces.

### Primary
- **Ink Blue** (`primary`): primary actions, selected navigation labels, and the fixed brand runway.
- **Soft Blue** (`accent`): quiet blue tonal emphasis outside the runway.

### Secondary
- **Financial Green** (`income`): income semantics and chart segments.
- **Terracotta** (`expense`): spending semantics and chart segments.
- **Amber** (`due-soon`): unpaid bill semantics and chart segments.
- **Plum** (`chart-5`): additional chart category distinction.
- **Alert Red** (`destructive`): destructive semantics and the `overdue` alias used for over-budget messaging.

### Neutral
- **Warm Ivory** (`background`): light canvas.
- **White** (`card`): light cards, popovers, primary foreground, and brand-runway foreground.
- **Ink** (`foreground`): light text and light card/popover/secondary foreground.
- **Warm Gray** (`secondary`): secondary controls and the `muted` alias.
- **Slate** (`muted-foreground`): supporting descriptions.
- **Cool Border** (`border`): borders and the `input` alias.

Dark colors are the corresponding `dark-*` frontmatter entries. The brand runway remains Ink Blue with white content in both themes, while theme primary changes in dark mode. Dark card/popover/secondary foreground uses dark foreground, and dark accent foreground has its own token. The dark theme lightens financial and chart colors for legibility.

**The Fixed Brand Runway Rule.** Keep the Dashboard's budget runway Ink Blue with white content in both themes. Use transparency from white for its controls, dividers, and progress track.

The canonical source is `src/constants/theme-tokens.json`. `npm run theme:generate` generates the HSL channel variables in `src/global.css`; Tailwind and native theme values derive from this source. Do not edit generated HSL values independently. Chart aliases use primary, income, expense, dueSoon, and chart5 in the shared theme; the Dashboard legend deliberately starts with expense.

## Typography

**Display Font:** NunitoBold (loaded Nunito 700 asset).
**Body Font:** NunitoRegular (loaded Nunito 400 asset).
**Label Font:** NunitoSemibold (loaded Nunito 600 asset).

**Character:** Rounded letterforms soften financial data without weakening its hierarchy. Financial amounts and percentages use tabular numerals so values align and remain steady as they change. The font-family names in frontmatter are Expo registration names, not browser-installed family names.

### Hierarchy
- **Display (700, 60px / 60px):** the remaining-budget amount or no-budget state; it may scale down to 68% to stay on one line.
- **Headline (700, 30px / 36px):** the Dashboard title, with tight tracking.
- **Title (700, 24px / 32px):** income, spent, unpaid-bill, and prominent section totals.
- **Body (400, 16px / 24px):** budget context, category descriptions, and supporting explanations.
- **Label (600, 14px / 20px):** runway endpoints and percentages; the runway status label uses an enlarged 18px body size.
- **Button label (500, 14px / 20px):** inherited primitive button text; the month chooser explicitly selects the bold asset.

**The Dashboard Font Boundary Rule.** Use AppText and the DashboardFontContext for Dashboard text. Leave installed ui/text and ui/button primitives intact. Before fonts finish loading, AppText retains the primitive's platform fallback.

**The Financial Numeral Rule.** Apply tabular numerals to currency totals, runway endpoints, and percentage labels; narrative copy stays proportional.

## Layout

Dashboard is a centered, scrollable single column with 16px horizontal gutters, a maximum content width of 800px, and 20px section gaps. Top padding is the safe-area inset plus 16px; bottom clearance is the safe-area inset plus 110px.

The header is a single continuous budget runway. Its month controls lead into the remaining amount, spent/limit endpoints, progress, used/safe-to-spend percentages, and an open two-column income/spent row divided by 1px rules. Unpaid commitments remain a short explicit note beneath those stats.

The spending pie defaults to 156px. Pie and legend sit side by side only when window width is at least 600px and fontScale is at most 1.2; otherwise they stack. Category names can grow while amounts remain alongside. The month dialog caps width at 448px, uses a wrapping three-column month grid (30% item width), and caps its month scroll area at 300px.

## Elevation & Depth

Dashboard depth is primarily tonal: the Ink Blue runway, white or dark cards, Soft Blue unpaid-bill panel, and thin dividers establish hierarchy. Dashboard content surfaces are flat and borderless. Buttons retain the installed primitive's small shadow where that variant provides one; the month modal uses a translucent black scrim.

**The Flat Dashboard Surface Rule.** Keep Dashboard runway, spending, and unpaid-bill surfaces shadowless. Use tonal contrast and rules for separation.

## Shapes

Dashboard runway and supporting surfaces use a consistent 16px radius (`surface`). The month dialog keeps a broader 24px radius (`dialog`). Month-header controls and progress bars use `pill`; dialog action controls retain the primitive's 8px `control` radius. Shared primitive radius remains the generated 10px base, and Dashboard overrides do not redefine it.

## Components

### Buttons
Month-header controls are translucent-white pill buttons with minimum 48px touch dimensions. Month chevrons and year step controls use 20px SVG vectors with rounded 2.5px strokes. Apply uses the primary variant; Cancel, year controls, and unselected months use outline. The selected month uses primary and exposes its selected accessibility state. Web hover and active treatments come from the installed Button primitive; keyboard focus uses a 3px ring at 50% ring-color opacity. Disabled controls inherit 50% opacity.

### Cards / Containers
The spending card and unpaid-bill summary use 16px corners and 20px padding. The spending card is a flat card-colored surface; unpaid bills use the accent surface. The header is one 16px Ink Blue surface with 24px padding. Internal gaps vary from 8px to 20px according to information density.

### Navigation
NativeTabs has exactly Dashboard and Explore. Its background follows the theme canvas, indicator follows secondary, and selected label follows primary. Labels and icons remain platform managed; navigation is outside the Dashboard Nunito provider. The sidecar's navigation sample is a schematic color and boundary illustration, not a native rendering specification.

### Budget Runway and Progress
The runway's remaining budget means configured monthly budget minus recorded spending. Income minus expenses is separate, and unpaid bills are separate commitments. Preserve the distinct no-budget and over-budget messages. When a budget exists, label both progress endpoints (`spent` and `limit`) and both percentages (`used` and `safe to spend`). Progress clamps finite values into 0–100%, exposes an accessible label/value, and animates for 500ms with exponential ease-out. Reduced-motion settings remove the web transition and assign the native width directly. The sample-data disclosure describes data provenance, not a reusable chip style.

### Spending Breakdown
Use a solid 156px pie with explicit legend labels and currency amounts. Nonfinite or nonpositive slices are omitted; a single category renders a full circle. The chart exposes percentage descriptions to accessibility. White slice seams are an implementation detail present in both themes, not a required rule for future dark charts.

### Component Boundaries
The screen owns selected month, font loading, safe-area scrolling, and analytics composition. DashboardHeader owns the full budget runway, including month selection, progress, income/spent stats, and commitment note. SpendingBreakdown and UnpaidBillsSummary render the two supporting sections. MonthPicker owns its modal draft selection and commits only on Apply; PieChart and Progress remain reusable rendering helpers. Keep money formatting, monthly calculations, and SelectedMonth/shiftMonth in their existing library helpers. Shared ui primitives stay reusable; apply surface-specific styling through local props.

## Do's and Don'ts

### Do:
- **Do** edit the canonical theme JSON and regenerate its CSS projection.
- **Do** keep Dashboard Nunito typography inside its provider and AppText wrapper.
- **Do** use tabular numerals for financial values and percentage endpoints.
- **Do** preserve labeled progress, safe-area scrolling, wrapping, large-font stacking, and reduced-motion behavior.

### Don't:
- **Don't** treat income minus expenses as remaining monthly budget.
- **Don't** subtract unpaid commitments from recorded spending.
- **Don't** split the runway's budget, progress, or income/spent context across separate summary surfaces.
- **Don't** promote Dashboard header composition into a requirement for every screen.
- **Don't** modify installed React Native Reusables primitives to reproduce this Dashboard.

Not canonized: primitive weight/font-asset mismatches and white dark-chart seams are recorded rather than normalized into future rules. Source inspection does not establish native rendering quality.
