import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { DASHBOARD_HREF } from '@/lib/routes';

export default function NotFoundScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Page not found</ThemedText>
      <ThemedText>This page does not exist.</ThemedText>
      <Link href={DASHBOARD_HREF} replace asChild>
        <ThemedText type="linkPrimary">Go to Dashboard</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.four,
    gap: Spacing.three,
  },
});
