import type { Playlist } from '../types';

const playlists: Playlist[] = [
  { id: '1', name: 'Liked Songs',      meta: 'Playlist · 148 songs', emoji: '🎵', color: '#1db954' },
  { id: '2', name: 'Rock Classics',    meta: 'Playlist · You',       emoji: '🎸', color: '#4a00e0' },
  { id: '3', name: 'Morning Vibes',    meta: 'Playlist · You',       emoji: '🌅', color: '#ff6b35' },
  { id: '4', name: 'Chill Mix',        meta: 'Playlist · You',       emoji: '🌊', color: '#0077b6' },
  { id: '5', name: 'Late Night Study', meta: 'Playlist · You',       emoji: '🎧', color: '#7b2d8b' },
  { id: '6', name: 'Workout Beats',    meta: 'Playlist · You',       emoji: '❤️‍🔥', color: '#c62828' },
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Nav */}
      <div className="sidebar-box" style={{ padding: '8px 0' }}>
        <div className="nav-item active">
          <i className="ti ti-home" aria-hidden="true" />
          Home
        </div>
        <div className="nav-item">
          <i className="ti ti-search" aria-hidden="true" />
          Search
        </div>
      </div>

      {/* Library */}
      <div className="sidebar-box" style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div className="lib-header">
          <span>
            <i className="ti ti-books" style={{ fontSize: 18, verticalAlign: -2, marginRight: 6 }} aria-hidden="true" />
            Your library
          </span>
          <i className="ti ti-plus" aria-hidden="true" />
        </div>

        <div style={{ overflowY: 'auto', flex: 1 }}>
          {playlists.map((pl) => (
            <div className="playlist-item" key={pl.id}>
              <div className="playlist-thumb" style={{ background: pl.color }}>
                {pl.emoji}
              </div>
              <div className="playlist-info">
                <div className="playlist-name">{pl.name}</div>
                <div className="playlist-meta">{pl.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}