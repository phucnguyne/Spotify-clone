import type { Playlist } from '@/types';

export const playlists: Playlist[] = [
  { id: 'liked', name: 'Liked Songs', meta: 'Playlist · 84 songs', pinned: true, special: true },
  { id: 'dw', name: 'Discover Weekly', meta: 'Playlist · Spotify' },
  { id: 'dm1', name: 'Daily Mix 1', meta: 'Playlist · Spotify' },
  { id: 'dm2', name: 'Daily Mix 2', meta: 'Playlist · Spotify' },
  { id: 'focus', name: 'Deep Focus', meta: 'Playlist · You' },
  { id: 'rock', name: 'Rock Classics', meta: 'Playlist · You' },
  { id: 'chill', name: 'Chill Hits', meta: 'Playlist · You' },
  { id: 'throwback', name: 'Throwback Jams', meta: 'Playlist · You' },
  { id: 'study', name: 'Late Night Study', meta: 'Playlist · You' },
  { id: 'workout', name: 'Workout Beats', meta: 'Playlist · You' },
];
