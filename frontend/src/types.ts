export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  dur: string; // mm:ss display
  durationSec: number;
}

export interface Playlist {
  id: string;
  name: string;
  meta: string;
  pinned?: boolean;
  special?: boolean; // e.g. "Liked Songs" gets a distinct gradient tile
}

export interface CardItem {
  id: string; // matches a playlist id so it can be opened
  name: string;
  desc: string;
}

export type ViewName = 'home' | 'search' | 'library';
