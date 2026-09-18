import '../global.css';

import { PortalHost } from '@rn-primitives/portal';
import { Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme as useNativeWindColorScheme } from 'nativewind';
import { useEffect } from 'react';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { NAV_THEME } from '@/lib/theme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const { setColorScheme } = useNativeWindColorScheme();

  useEffect(() => {
    setColorScheme(colorScheme);
  }, [colorScheme, setColorScheme]);

  return (
    <ThemeProvider value={NAV_THEME[colorScheme]}>
      <AnimatedSplashOverlay />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ title: 'Page not found' }} />
      </Stack>
      <PortalHost />
    </ThemeProvider>
  );
}
