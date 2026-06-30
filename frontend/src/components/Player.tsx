import { useEffect, useRef } from 'react';
import { usePlayerStore } from '@/store/usePlayerStore';
import { artFor } from '@/utils/art';
import {
  HeartIcon,
  ShuffleIcon,
  PrevIcon,
  PlayIcon,
  PauseIcon,
  NextIcon,
  RepeatIcon,
  QueueIcon,
  VolumeIcon,
} from '@/components/icons';

function fmtTime(totalSec: number): string {
  const m = Math.floor(totalSec / 60);
  const s = Math.floor(totalSec % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function Player() {
  const {
    nowPlaying,
    isPlaying,
    progress,
    volume,
    liked,
    shuffle,
    repeat,
    togglePlay,
    next,
    prev,
    tick,
    seekTo,
    setVolume,
    toggleLike,
    toggleShuffle,
    toggleRepeat,
  } = usePlayerStore();

  const seekRef = useRef<HTMLDivElement>(null);
  const volRef = useRef<HTMLDivElement>(null);

  // advance playback once per second while playing
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [isPlaying, tick]);

  const curSec = nowPlaying.durationSec * (progress / 100);
  const isLiked = liked.has(nowPlaying.id);

  const handleSeekClick = (e: React.MouseEvent) => {
    const el = seekRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    seekTo(pct);
  };

  const handleVolClick = (e: React.MouseEvent) => {
    const el = volRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    setVolume(pct);
  };

  return (
    <div className="player">
      {/* Now playing */}
      <div className="now-playing">
        <div className="now-thumb" style={{ background: artFor(nowPlaying.id + nowPlaying.title) }} />
        <div className="now-info">
          <div className="now-title">{nowPlaying.title}</div>
          <div className="now-artist">{nowPlaying.artist}</div>
        </div>
        <button
          className={`now-heart${isLiked ? ' liked' : ''}`}
          aria-label={isLiked ? 'Remove from Liked Songs' : 'Save to Liked Songs'}
          onClick={() => toggleLike(nowPlaying.id)}
        >
          <HeartIcon />
        </button>
      </div>

      {/* Playback controls */}
      <div className="controls">
        <div className="ctrl-btns">
          <button
            className={`ctrl-btn${shuffle ? ' toggled' : ''}`}
            aria-label="Shuffle"
            onClick={toggleShuffle}
          >
            <ShuffleIcon />
          </button>
          <button className="ctrl-btn" aria-label="Previous" onClick={prev}>
            <PrevIcon />
          </button>
          <button
            className="play-main"
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onClick={togglePlay}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button className="ctrl-btn" aria-label="Next" onClick={next}>
            <NextIcon />
          </button>
          <button
            className={`ctrl-btn${repeat ? ' toggled' : ''}`}
            aria-label="Repeat"
            onClick={toggleRepeat}
          >
            <RepeatIcon />
          </button>
        </div>

        <div className="progress-bar">
          <span className="time">{fmtTime(curSec)}</span>
          <div
            className="progress-track"
            ref={seekRef}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            onClick={handleSeekClick}
          >
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="time right">{nowPlaying.dur}</span>
        </div>
      </div>

      {/* Volume + extras */}
      <div className="vol-area">
        <button aria-label="Queue">
          <QueueIcon />
        </button>
        <button aria-label="Volume">
          <VolumeIcon />
        </button>
        <div className="vol-slider" ref={volRef} onClick={handleVolClick}>
          <div className="vol-fill" style={{ width: `${volume}%` }} />
        </div>
      </div>
    </div>
  );
}
