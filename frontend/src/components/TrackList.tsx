import type { Song } from '@/types';
import { usePlayerStore } from '@/store/usePlayerStore';
import { artFor } from '@/utils/art';
import { PlayIcon, PauseIcon, HeartIcon } from '@/components/icons';

interface TrackListProps {
  songs: Song[];
}

export default function TrackList({ songs }: TrackListProps) {
  const { nowPlaying, isPlaying, liked, playSong, toggleLike } = usePlayerStore();

  return (
    <div className="tracklist">
      <div className="trow trow-head">
        <div style={{ textAlign: 'center' }}>#</div>
        <div>Title</div>
        <div>Album</div>
        <div />
        <div style={{ textAlign: 'right' }}>⏱</div>
      </div>

      {songs.map((song, idx) => {
        const playing = nowPlaying.id === song.id;
        const isLiked = liked.has(song.id);
        return (
          <div
            className={`trow${playing ? ' playing' : ''}`}
            key={song.id}
            onClick={() => playSong(song.id)}
          >
            <div className="trow-idx">{idx + 1}</div>
            <div className="trow-playicon">
              {playing && isPlaying ? <PauseIcon /> : <PlayIcon />}
            </div>

            <div className="trow-title-wrap">
              <div className="trow-art" style={{ background: artFor(song.id + song.title) }} />
              <div>
                <div className="trow-title">{song.title}</div>
                <div className="trow-artist">{song.artist}</div>
              </div>
            </div>

            <div className="trow-album">{song.album}</div>

            <button
              className={`trow-heart${isLiked ? ' liked' : ''}`}
              aria-label={isLiked ? `Remove ${song.title} from Liked Songs` : `Save ${song.title} to Liked Songs`}
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(song.id);
              }}
            >
              <HeartIcon />
            </button>

            <div className="trow-dur">{song.dur}</div>
          </div>
        );
      })}
    </div>
  );
}
