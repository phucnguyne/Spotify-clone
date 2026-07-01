// ── Domain models ─────────────────────────────────────────────
export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  dur: string;       // display "mm:ss"
  durationSec: number;
}

export interface Playlist {
  id: string;
  name: string;
  meta: string;
  pinned?: boolean;
  special?: boolean;
}

export interface PlaylistDetail extends Playlist {
  tracks: Song[];
}

export interface CardItem {
  id: string;
  name: string;
  desc: string;
}

export interface CardSection {
  title: string;
  items: CardItem[];
}

export interface PlayerState {
  nowPlaying: Song;
  isPlaying: boolean;
  progress: number;   // 0-100
  volume: number;     // 0-100
  shuffle: boolean;
  repeat: boolean;
}

export interface SearchResult {
  songs: Song[];
  playlists: Playlist[];
}

// ── API response envelope ──────────────────────────────────────
export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;
