export default function Topbar() {
  return (
    <div className="topbar">
      <div className="nav-arrows">
        <button className="nav-btn" aria-label="Go back">
          <i className="ti ti-arrow-left" aria-hidden="true" />
        </button>
        <button className="nav-btn" aria-label="Go forward">
          <i className="ti ti-arrow-right" aria-hidden="true" />
        </button>
      </div>

      <div className="search-box">
        <i className="ti ti-search" aria-hidden="true" />
        <input type="text" placeholder="What do you want to play?" />
      </div>

      <div className="user-area">
        <button className="btn-premium">Explore Premium</button>
        <div className="user-avatar">
          <i className="ti ti-user" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}