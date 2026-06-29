export interface Playlist {
  id: string;
  name: string;
  meta: string;
  emoji: string;
  color: string;
}

export interface QuickAccessItem {
  id: string;
  name: string;
  emoji: string;
  color: string;
  bg: string;
}

export interface Card {
  id: string;
  name: string;
  desc: string;
  emoji: string;
  bg: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  emoji: string;
  bg: string;
  playing?: boolean;
}