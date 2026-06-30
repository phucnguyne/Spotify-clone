import { create } from 'zustand';
import type { Song, ViewName } from '../types';
import { songs } from '../data/songs';

interface PlayerState {
  view: ViewName;
  searchQuery: string;
  nowPlaying: Song;
  isPlaying: boolean;
  progress: number; // 0-100
  volume: number; // 0-100
  liked: Set<string>;
  shuffle: boolean;
  repeat: boolean;

  setView: (view: ViewName) => void;
  setSearchQuery: (q: string) => void;
  playSong: (id: string) => void;
  togglePlay: () => void;
  next: () => void;
  prev: () => void;
  tick: () => void; // advance progress by ~1s, called by an interval
  seekTo: (pct: number) => void;
  setVolume: (pct: number) => void;
  toggleLike: (id: string) => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  view: 'home',
  searchQuery: '',
  nowPlaying: songs[0],
  isPlaying: false,
  progress: 28,
  volume: 70,
  liked: new Set(['1']),
  shuffle: false,
  repeat: false,

  setView: (view) => set({ view }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),

  playSong: (id) => {
    const song = songs.find((s) => s.id === id) ?? songs[0];
    set({ nowPlaying: song, progress: 0, isPlaying: true });
  },

  togglePlay: () => set((s) => ({ isPlaying: !s.isPlaying })),

  next: () => {
    const { nowPlaying, shuffle } = get();
    const idx = songs.findIndex((s) => s.id === nowPlaying.id);
    const nextIdx = shuffle ? Math.floor(Math.random() * songs.length) : (idx + 1) % songs.length;
    set({ nowPlaying: songs[nextIdx], progress: 0 });
  },

  prev: () => {
    const { nowPlaying } = get();
    const idx = songs.findIndex((s) => s.id === nowPlaying.id);
    const prevIdx = (idx - 1 + songs.length) % songs.length;
    set({ nowPlaying: songs[prevIdx], progress: 0 });
  },

  tick: () => {
    const { progress, nowPlaying, repeat } = get();
    const step = 100 / nowPlaying.durationSec;
    const newProgress = progress + step;
    if (newProgress >= 100) {
      if (repeat) {
        set({ progress: 0 });
      } else {
        get().next();
      }
      return;
    }
    set({ progress: newProgress });
  },

  seekTo: (pct) => set({ progress: Math.min(100, Math.max(0, pct)) }),
  setVolume: (pct) => set({ volume: Math.min(100, Math.max(0, pct)) }),

  toggleLike: (id) =>
    set((s) => {
      const liked = new Set(s.liked);
      if (liked.has(id)) liked.delete(id);
      else liked.add(id);
      return { liked };
    }),

  toggleShuffle: () => set((s) => ({ shuffle: !s.shuffle })),
  toggleRepeat: () => set((s) => ({ repeat: !s.repeat })),
}));
