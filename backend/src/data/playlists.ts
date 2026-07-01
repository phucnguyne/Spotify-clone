import type { Playlist, PlaylistDetail } from '../types/index.js';
import { songs } from './songs.js';

export const playlists: Playlist[] = [
  { id: 'liked',    name: 'Liked Songs',     meta: 'Playlist · 84 songs', pinned: true, special: true },
  { id: 'dw',       name: 'Discover Weekly', meta: 'Playlist · Spotify' },
  { id: 'dm1',      name: 'Daily Mix 1',     meta: 'Playlist · Spotify' },
  { id: 'focus',    name: 'Deep Focus',      meta: 'Playlist · You' },
  { id: 'rock',     name: 'Rock Classics',   meta: 'Playlist · You' },
  { id: 'chill',    name: 'Chill Hits',      meta: 'Playlist · You' },
  { id: 'throwback',name: 'Throwback Jams',  meta: 'Playlist · You' },
  { id: 'study',    name: 'Late Night Study', meta: 'Playlist · You' },
  { id: 'workout',  name: 'Workout Beats',   meta: 'Playlist · You' },
];

/** Map playlist id → song ids that belong to it */
const playlistTracks: Record<string, string[]> = {
  liked:     ['1', '3', '5'],
  dw:        ['2', '4', '6', '7'],
  dm1:       ['1', '2', '3'],
  focus:     ['4', '6', '8'],
  rock:      ['5', '6', '7'],
  chill:     ['1', '3', '8'],
  throwback: ['2', '5', '7'],
  study:     ['4', '6', '8'],
  workout:   ['1', '2', '5', '7'],
};

export function getPlaylistDetail(id: string): PlaylistDetail | undefined {
  const pl = playlists.find((p) => p.id === id);
  if (!pl) return undefined;
  const ids = playlistTracks[id] ?? [];
  const tracks = ids.map((sid) => songs.find((s) => s.id === sid)).filter(Boolean) as typeof songs;
  return { ...pl, tracks };
}
