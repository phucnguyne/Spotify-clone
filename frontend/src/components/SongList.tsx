import type { Song } from '../types';

const songs: Song[] = [
  { id: '1', title: 'Blinding Lights', artist: 'The Weeknd',                    album: 'After Hours',              duration: '3:20', emoji: '🎵', bg: '#1db954', playing: true },
  { id: '2', title: 'Levitating',      artist: 'Dua Lipa',                      album: 'Future Nostalgia',         duration: '3:23', emoji: '🎶', bg: '#2a1a3a' },
  { id: '3', title: 'Bad Guy',         artist: 'Billie Eilish',                 album: 'WHEN WE ALL FALL ASLEEP',  duration: '3:14', emoji: '🌟', bg: '#3a1a1a' },
  { id: '4', title: 'Stay',            artist: 'The Kid LAROI, Justin Bieber',  album: 'F*CK LOVE 3',             duration: '2:21', emoji: '💎', bg: '#1a3a3a' },
  { id: '5', title: 'Peaches',         artist: 'Justin Bieber ft. Daniel Caesar', album: 'Justice',               duration: '3:18', emoji: '🔮', bg: '#3a2a1a' },
];

export default function SongList() {
  return (
    <>
      <div className="section-header">
        <div className="section-title">Recently played</div>
        <button className="show-all">Show all</button>
      </div>

      <div className="song-list">
        {/* Header row */}
        <div className="song-row song-row-header">
          <div style={{ textAlign: 'center' }}>#</div>
          <div>Title</div>
          <div>Album</div>
          <div style={{ textAlign: 'right' }}>
            <i className="ti ti-clock" style={{ fontSize: 14 }} aria-hidden="true" />
          </div>
        </div>

        {/* Song rows */}
        {songs.map((song, idx) => (
          <div className={`song-row${song.playing ? ' playing' : ''}`} key={song.id}>
            <div className="song-num">
              {song.playing ? (
                <i className="ti ti-player-play-filled" style={{ fontSize: 14 }} aria-hidden="true" />
              ) : (
                idx + 1
              )}
            </div>

            <div className="song-info">
              <div className="song-thumb" style={{ background: song.bg }}>
                {song.emoji}
              </div>
              <div>
                <div className="song-title" style={song.playing ? { color: '#1db954' } : undefined}>
                  {song.title}
                </div>
                <div className="song-artist">{song.artist}</div>
              </div>
            </div>

            <div className="song-album">{song.album}</div>
            <div className="song-dur">{song.duration}</div>
          </div>
        ))}
      </div>
    </>
  );
}