# Remidr frontend

Expo SDK 57 with Expo Router and TypeScript.

## Getting started

```bash
npm install
npm start
```

Use `npm run android`, `npm run ios`, or `npm run web` to open a platform. Run `npm run typecheck` to check TypeScript.

## Component library

React Native Reusables is configured with NativeWind v4. Component source lives in `src/components/ui`; Button, Text, Card, Input, and Label are included.

```bash
npm run ui:add -- dialog
npm run ui:doctor
```

Use the library's Text component inside Button so the text inherits the button variant styles:

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

<Button onPress={() => {}}>
  <Text>Save reminder</Text>
</Button>
```

Theme variables live in `src/global.css`, with navigation colors in `src/lib/theme.ts` and Tailwind mappings in `tailwind.config.js`. The root layout includes the portal host and follows system appearance. Restart Metro with `npx expo start --clear` after changing styling configuration.

## File structure

```text
remidr-fe/
|-- src/
|   |-- app/                  # Routes and navigation layouts only
|   |   |-- (tabs)/           # Main tab group; hidden from URL paths
|   |   |   |-- _layout.tsx   # Platform-specific tab navigator
|   |   |   |-- index.tsx     # Home: /
|   |   |   `-- explore.tsx   # Explore: /explore
|   |   |-- _layout.tsx       # Theme provider, splash overlay, root Stack
|   |   `-- +not-found.tsx    # Unmatched routes with a link to Home
|   |-- components/          # Shared UI and platform-specific components
|   |   `-- ui/              # Reusable UI primitives
|   |-- hooks/               # Shared hooks
|   |-- constants/           # Theme colors, spacing, fonts
|   |-- lib/                 # Reusables theme and class-name helper
|   `-- global.css           # Tailwind directives, theme tokens, web font variables
|-- assets/                  # Images and Expo icons
|-- scripts/                 # Development utilities
|-- app.json                 # Expo configuration
`-- tsconfig.json            # TypeScript configuration and aliases
```

Keep the existing `src/` convention: Expo Router discovers `src/app` automatically. Do not add a second root-level `app/` directory. Shared components, hooks, API clients, and utilities belong outside `src/app` so they do not become routes.

The root layout owns app-wide providers and stack navigation. The `(tabs)` layout owns the Home and Explore tabs. `components/app-tabs.tsx` provides native tabs; `components/app-tabs.web.tsx` provides the web navigator. Existing URLs remain `/` and `/explore`.

Imports use `@/components/...`, `@/hooks/...`, and `@/constants/...` for `src/` files. Use `@/assets/...` for root assets.

## Adding screens

- Add a tab screen in `src/app/(tabs)/`, then register it in both platform versions of `components/app-tabs`.
- Add a screen outside the tab navigator directly in `src/app/`, or create a route group with its own `_layout.tsx`.
- When authentication screens are implemented, place them in `src/app/(auth)/login.tsx` and `register.tsx`, with a group `_layout.tsx` for their Stack. Their URLs will be `/login` and `/register`. Add session handling and route protection when authentication is connected.
- As feature logic grows, put it in `src/features/<feature>/` and keep route files focused on rendering screens and navigation. Add `src/services/` for API clients when needed.

Navigate with Expo Router:

```tsx
import { Link, router } from 'expo-router';

<Link href="/explore">Explore</Link>
router.push('/explore');
router.back();
```

Route groups organize navigation without adding a URL segment. Layouts configure navigation rather than creating pages. See the [Expo Router layout guide](https://docs.expo.dev/router/basics/navigation-layouts/).

`npm run reset-project` archives or deletes `src/` and `scripts/`, then generates a minimal `src/app` starter. It intentionally resets this organization; it is not needed for normal development.
