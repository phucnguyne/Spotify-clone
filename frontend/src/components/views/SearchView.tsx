import { usePlayerStore } from '../../store/usePlayerStore';
import { playlists } from '../../data/playlists';
import { songs } from '../../data/songs';
import { artFor } from '../../utils/art';
import TrackList from '../TrackList';

export default function SearchView() {
  const { searchQuery, setView } = usePlayerStore();
  const q = searchQuery.trim().toLowerCase();

  if (!q) {
    return (
      <>
        <div className="page-title">Search</div>
        <div className="cards-grid">
          {playlists.slice(0, 5).map((p) => (
            <div className="card" key={p.id} onClick={() => setView('library')}>
              <div className="card-art-wrap">
                <div className="card-art" style={{ background: artFor(p.id) }} />
              </div>
              <div className="card-name">{p.name}</div>
              <div className="card-desc">Browse</div>
            </div>
          ))}
        </div>
      </>
    );
  }

  const matchSongs = songs.filter((s) => `${s.title}${s.artist}${s.album}`.toLowerCase().includes(q));
  const matchPlaylists = playlists.filter((p) => p.name.toLowerCase().includes(q));

  if (!matchSongs.length && !matchPlaylists.length) {
    return (
      <div className="empty">
        <div className="empty-title">No results for "{searchQuery}"</div>
        Try searching again using a different spelling or keyword.
      </div>
    );
  }

  return (
    <>
      <div className="page-title">Results for "{searchQuery}"</div>

      {matchPlaylists.length > 0 && (
        <>
          <div className="section-header">
            <div className="section-title">Playlists</div>
          </div>
          <div className="cards-grid">
            {matchPlaylists.map((p) => (
              <div className="card" key={p.id} onClick={() => setView('library')}>
                <div className="card-art-wrap">
                  <div className="card-art" style={{ background: artFor(p.id) }} />
                </div>
                <div className="card-name">{p.name}</div>
                <div className="card-desc">{p.meta}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {matchSongs.length > 0 && (
        <>
          <div className="section-header">
            <div className="section-title">Songs</div>
          </div>
          <TrackList songs={matchSongs} />
        </>
      )}
    </>
  );
}
