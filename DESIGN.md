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
  brand-decoration: "#829CEE"
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
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "48px"
  headline:
    fontFamily: "NunitoBold"
    fontSize: "30px"
    lineHeight: "36px"
    letterSpacing: "-0.025em"
  title:
    fontFamily: "NunitoBold"
    fontSize: "20px"
    lineHeight: "28px"
    letterSpacing: "-0.025em"
  amount:
    fontFamily: "NunitoBold"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "32px"
  body:
    fontFamily: "NunitoRegular"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
  label:
    fontFamily: "NunitoSemibold"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "24px"
  button-label:
    fontFamily: "NunitoRegular"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "20px"
rounded:
  control: "8px"
  inset: "12px"
  surface: "24px"
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
    padding: "24px 24px 64px"
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
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    height: "12px"
---
# Design System: Remidr

## Overview

**Creative North Star: "Ink Blue + Warm Ivory"**

Remidr's approved visual identity combines a confident blue budget header with a warm, quiet canvas and friendly rounded typography. The Dashboard uses compact, rounded surfaces to make financial amounts easy to scan; its remaining-budget figure has the strongest visual emphasis.

This document records the current Dashboard and shared color theme from source. Dashboard composition stays local to that surface; the shared palette applies across the app. Nunito is loaded inside the Dashboard provider and is not a global replacement for installed React Native Reusables typography. Native rendering has not been validated on this Windows host.

**Key Characteristics:**
- Strong blue budget header and tonal light/dark canvases.
- Rounded Nunito text within Dashboard boundaries.
- Overlapping summary cards and flat supporting cards.
- Compact solid pie paired with category names and amounts.

## Colors

Ink Blue anchors the identity; Warm Ivory and white separate the light canvas and surfaces.

### Primary
- **Ink Blue** (`primary`): primary actions, progress fill, selected navigation labels, and the fixed brand header.
- **Soft Blue** (`accent`): progress track and positive remaining-budget inset.
- **Periwinkle** (`brand-decoration`): the header's clipped geometric accent.

### Secondary
- **Financial Green** (`income`): income totals and chart segments.
- **Terracotta** (`expense`): spending totals and chart segments.
- **Amber** (`due-soon`): unpaid bill totals and chart segments.
- **Plum** (`chart-5`): additional chart category distinction.
- **Alert Red** (`destructive`): destructive semantics and the `overdue` alias used for over-budget messaging.

### Neutral
- **Warm Ivory** (`background`): light canvas.
- **White** (`card`): light cards, popovers, primary foreground, and fixed brand-header foreground.
- **Ink** (`foreground`): light text and light card/popover/secondary foreground.
- **Warm Gray** (`secondary`): secondary controls and the `muted` alias.
- **Slate** (`muted-foreground`): supporting descriptions.
- **Cool Border** (`border`): borders and the `input` alias.

Dark colors are the corresponding `dark-*` frontmatter entries. Dark primary foreground uses dark background; dark card/popover/secondary foreground uses dark foreground. Dark accent foreground has its own token. The dark theme lightens financial and chart colors for legibility.

**The Fixed Brand Header Rule.** Brand header, white header text, and periwinkle decoration remain the same in both themes. Theme primary changes in dark mode; brandHeader does not.

The canonical source is `src/constants/theme-tokens.json`. `npm run theme:generate` generates the HSL channel variables in `src/global.css`; Tailwind and native theme values derive from this source. Do not edit generated HSL values independently. Chart aliases use primary, income, expense, dueSoon, and chart5, in that order in the shared theme; the Dashboard legend deliberately starts with expense.

## Typography

**Display Font:** NunitoBold (loaded Nunito 700 asset).
**Body Font:** NunitoRegular (loaded Nunito 400 asset).
**Label Font:** NunitoSemibold (loaded Nunito 600 asset).

**Character:** Rounded letterforms soften financial data without weakening its hierarchy. The font-family names in frontmatter are the Expo registration names, not browser-installed family names.

### Hierarchy
- **Display:** remaining-budget amount or no-budget message.
- **Headline:** Dashboard title; inherits the h1 variant's weight and tight tracking with a local size override.
- **Title:** supporting card headings; inherits the h4 variant's semibold CSS weight while selecting the bold font asset.
- **Amount:** income and spending summary values; also the month-dialog heading through h3.
- **Body:** budget context, category amounts, and supporting explanations.
- **Label:** summary labels and category names; header budget label uses an enlarged body size (18px / 28px).
- **Button label:** inherits the primitive button text context; month chooser explicitly selects the bold asset. Font-family asset selection and primitive CSS font weights are separate mechanisms.

**The Dashboard Font Boundary Rule.** Use AppText and the DashboardFontContext for Dashboard text. Leave installed ui/text and ui/button primitives intact. Before fonts finish loading, AppText retains the primitive's platform fallback.

## Layout

Dashboard is a centered, scrollable single column, with horizontal gutters (16px), maximum content width (768px), and section gaps (20px). Top padding is the safe-area inset plus 16px; bottom clearance is the safe-area inset plus 110px.

The blue header has generous bottom space. Income and spending cards overlap it by 40px, are inset 12px from its edges, have a 12px gap, and wrap with a minimum width of 130px per card. This composition is Dashboard-specific.

The spending pie defaults to 156px. Pie and legend sit side by side only when window width is at least 600px and fontScale is at most 1.2; otherwise they stack. Category names can grow while amounts remain alongside. The month dialog caps width at 448px, uses a wrapping three-column month grid (30% item width), and caps its month scroll area at 300px.

## Elevation & Depth

Depth combines tonal separation, card overlap, and a restrained primitive shadow. Summary cards retain Card's small black-at-5%-opacity shadow; budget, spending, and bill cards explicitly remove it. Buttons retain the installed primitive's small shadow where that variant provides one. Header decoration is clipped, inert, and hidden from accessibility.

**The Supporting Surface Rule.** Supporting Dashboard cards stay borderless and shadowless. Preserve the subtle overlap shadow on financial summaries rather than applying it to every section.

## Shapes

Dashboard surfaces and the month dialog use broad rounded corners (`surface`). Remaining-budget status insets use `inset`; month-header controls and progress bars use `pill`. Dialog action controls retain the primitive's `control` radius. Shared primitive radius remains the generated base radius (10px); Dashboard surface overrides do not redefine that shared base.

## Components

### Buttons
Month-header controls are secondary pill buttons with minimum 48px touch dimensions. Month chevrons and year step controls use 20px SVG vectors with rounded 2.5px strokes, colored from secondary foreground and foreground respectively. Apply uses the primary variant; Cancel, year controls, and unselected months use outline. The selected month uses primary and exposes its selected accessibility state. Web hover and active treatments come from the installed Button primitive: primary at 90% opacity, secondary at 80%, outline to accent; keyboard focus uses a 3px ring at 50% ring-color opacity. Disabled controls inherit 50% opacity.

### Cards / Containers
Supporting cards use the dashboard-card frontmatter token, 16px internal gaps for budget/spending and 8px for bills. Financial summary cards use 16px horizontal and 20px vertical padding and an 8px internal gap. Amounts use financial semantic colors rather than the brand accent indiscriminately.

### Navigation
NativeTabs has exactly Dashboard and Explore. Its background follows the theme canvas, indicator follows secondary, and selected label follows primary. Labels and icons remain platform-managed; navigation is outside the Dashboard Nunito provider. The sidecar's navigation sample is a schematic color/boundary illustration, not a native rendering specification.

### Budget Header and Progress
Header remaining budget means configured monthly budget minus recorded spending. Income minus expenses is a separate balance, and unpaid bills are separate commitments. Preserve the distinct no-budget and over-budget messages. Progress clamps finite values into 0–100% and has an accessible label/value. The sample-data disclosure describes data provenance, not a reusable chip style.

### Spending Breakdown
Use a solid pie with explicit legend labels and currency amounts. Nonfinite or nonpositive slices are omitted; a single category renders a full circle. The chart exposes percentage descriptions to accessibility. White slice seams are an implementation detail present in both themes, not a required rule for future dark charts.

### Component Boundaries
The screen owns selected month, font loading, safe-area scrolling, and analytics composition. Dashboard components receive computed data and render one section each. MonthPicker owns its modal draft selection and commits only on Apply; PieChart is a reusable rendering helper. BudgetOverview uses the Reusables Progress primitive directly. Keep money formatting, monthly calculations, and SelectedMonth/shiftMonth in their existing library helpers; MonthPicker reexports the month helper contract. Route links use the central DASHBOARD_HREF adapter for the actual / route. Shared ui primitives stay reusable; apply surface-specific styling through local props.

## Do's and Don'ts

### Do:
- **Do** edit the canonical theme JSON and regenerate its CSS projection.
- **Do** keep Dashboard Nunito typography inside its provider and AppText wrapper.
- **Do** use financial semantic colors and readable labels together.
- **Do** preserve safe-area scrolling, wrapping, and large-font stacking.

### Don't:
- **Don't** treat income-minus-expenses as remaining monthly budget.
- **Don't** subtract unpaid commitments from recorded spending.
- **Don't** promote Dashboard header composition into a requirement for every screen.
- **Don't** modify installed React Native Reusables primitives to reproduce this Dashboard.

Not canonized: primitive weight/font-asset mismatches and white dark-chart seams are recorded rather than normalized into future rules. Source inspection does not establish native rendering quality.


