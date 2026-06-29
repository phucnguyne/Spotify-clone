export default function Player() {
  return (
    <div className="player">
      {/* Now playing */}
      <div className="now-playing">
        <div className="now-thumb">🎵</div>
        <div className="now-info">
          <div className="now-title">Blinding Lights</div>
          <div className="now-artist">The Weeknd</div>
        </div>
        <button className="now-heart" aria-label="Like song">
          <i className="ti ti-heart" aria-hidden="true" />
        </button>
        <button className="now-pip" aria-label="Picture in picture">
          <i className="ti ti-picture-in-picture" aria-hidden="true" />
        </button>
      </div>

      {/* Playback controls */}
      <div className="controls">
        <div className="ctrl-btns">
          <button className="ctrl-btn" aria-label="Shuffle">
            <i className="ti ti-arrows-shuffle" aria-hidden="true" />
          </button>
          <button className="ctrl-btn" aria-label="Previous">
            <i className="ti ti-player-skip-back-filled" aria-hidden="true" />
          </button>
          <button className="play-main" aria-label="Pause">
            <i className="ti ti-player-pause-filled" aria-hidden="true" />
          </button>
          <button className="ctrl-btn" aria-label="Next">
            <i className="ti ti-player-skip-forward-filled" aria-hidden="true" />
          </button>
          <button className="ctrl-btn" aria-label="Repeat">
            <i className="ti ti-repeat" aria-hidden="true" />
          </button>
        </div>

        <div className="progress-bar">
          <span className="time">1:08</span>
          <div className="progress-track" role="progressbar" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-fill" />
          </div>
          <span className="time right">3:20</span>
        </div>
      </div>

      {/* Volume + extras */}
      <div className="vol-area">
        <button aria-label="Queue">
          <i className="ti ti-queue" aria-hidden="true" />
        </button>
        <button aria-label="Device">
          <i className="ti ti-device-speaker" aria-hidden="true" />
        </button>
        <button aria-label="Volume">
          <i className="ti ti-volume" aria-hidden="true" />
        </button>
        <div className="vol-slider">
          <div className="vol-fill" />
        </div>
        <button aria-label="Full screen">
          <i className="ti ti-arrows-maximize" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}