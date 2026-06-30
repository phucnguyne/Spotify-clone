import { playlists } from '@/data/playlists';
import { songs } from '@/data/songs';
import { usePlayerStore } from '@/store/usePlayerStore';
import { artFor, hashStr } from '@/utils/art';
import { PlayIcon } from '@/components/icons';

export default function QuickAccess() {
  const { setView, playSong } = usePlayerStore();
  const quick = playlists.slice(0, 6);

  return (
    <div className="quick-grid">
      {quick.map((p) => {
        const repSong = songs[hashStr(p.id) % songs.length];
        return (
          <div className="quick-item" key={p.id} onClick={() => setView('library')}>
            <div
              className={`quick-art${p.special ? ' round' : ''}`}
              style={{ background: p.special ? 'linear-gradient(135deg,#450af5,#c4efd9)' : artFor(p.id) }}
            />
            <span className="quick-name">{p.name}</span>
            <button
              className="quick-play"
              aria-label={`Play ${p.name}`}
              onClick={(e) => {
                e.stopPropagation();
                playSong(repSong.id);
              }}
            >
              <PlayIcon />
            </button>
          </div>
        );
      })}
    </div>
  );
}
