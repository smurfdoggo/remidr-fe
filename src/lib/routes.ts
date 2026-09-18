import type { Href } from 'expo-router';

// SDK 57 export and dev commands disagree on generated index-route types.
// The index screen is served at / in both runtimes; keep this assertion here.
export const DASHBOARD_HREF = '/' as Href;
