import { useState } from 'react';
import { playlists } from '@/data/playlists';
import { usePlayerStore } from '@/store/usePlayerStore';
import { artFor } from '@/utils/art';
import { HomeIcon, SearchIcon, LibraryIcon, PlusIcon } from '@/components/icons';

export default function Sidebar() {
  const { view, setView } = usePlayerStore();
  const [libFilter, setLibFilter] = useState('');

  const visible = playlists.filter((p) => p.name.toLowerCase().includes(libFilter.toLowerCase()));
  const pinned = visible.filter((p) => p.pinned);
  const rest = visible.filter((p) => !p.pinned);
  const list = [...pinned, ...rest];

  return (
    <div className="sidebar">
      {/* Primary nav */}
      <div className="sidebar-box" style={{ padding: '8px 0' }}>
        <button className={`nav-item${view === 'home' ? ' active' : ''}`} onClick={() => setView('home')}>
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className={`nav-item${view === 'search' ? ' active' : ''}`} onClick={() => setView('search')}>
          <SearchIcon />
          <span>Search</span>
        </button>
      </div>

      {/* Library */}
      <div className="sidebar-box" style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div className="lib-header">
          <button
            className={`lib-header-btn${view === 'library' ? ' active' : ''}`}
            onClick={() => setView('library')}
          >
            <LibraryIcon style={{ width: 18, height: 18, marginRight: 6, verticalAlign: -3 }} />
            <span>Your Library</span>
          </button>
          <button className="icon-btn" aria-label="Create playlist">
            <PlusIcon />
          </button>
        </div>

        <div className="lib-search">
          <div className="lib-search-inner">
            <SearchIcon style={{ width: 16, height: 16 }} />
            <input
              placeholder="Search in library"
              value={libFilter}
              onChange={(e) => setLibFilter(e.target.value)}
            />
          </div>
        </div>

        <div style={{ overflowY: 'auto', flex: 1 }}>
          {list.map((pl) => (
            <button className="playlist-item" key={pl.id} onClick={() => setView('library')}>
              <div
                className={`playlist-thumb${pl.special ? ' round' : ''}`}
                style={{ background: pl.special ? 'linear-gradient(135deg,#450af5,#c4efd9)' : artFor(pl.id) }}
              />
              <div className="playlist-info">
                <div className="playlist-name">{pl.name}</div>
                <div className="playlist-meta">{pl.meta}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
