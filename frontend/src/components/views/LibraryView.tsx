import { usePlayerStore } from '../../store/usePlayerStore';
import { playlists } from '../../data/playlists';
import { songs } from '../../data/songs';
import { artFor } from '../../utils/art';
import TrackList from '../TrackList';

export default function LibraryView() {
  const { liked, setView } = usePlayerStore();
  const likedSongs = songs.filter((s) => liked.has(s.id));

  return (
    <>
      <div className="page-title">Your Library</div>

      {likedSongs.length > 0 ? (
        <TrackList songs={likedSongs} />
      ) : (
        <div className="empty">
          <div className="empty-title">Songs you like will appear here</div>
          Tap the heart on any song to save it.
        </div>
      )}

      <div className="section-header" style={{ marginTop: 24 }}>
        <div className="section-title">Playlists</div>
      </div>
      <div className="cards-grid">
        {playlists
          .filter((p) => !p.special)
          .map((p) => (
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
  );
}
