import { useEffect, useRef, useState } from 'react';
import { usePlayerStore } from '@/store/usePlayerStore';
import { ArrowLeftIcon, ArrowRightIcon, SearchIcon } from '@/components/icons';

export default function Topbar() {
  const { view, searchQuery, setSearchQuery } = usePlayerStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (view === 'search') inputRef.current?.focus();
  }, [view]);

  useEffect(() => {
    const main = document.querySelector('.main');
    if (!main) return;
    const onScroll = () => setScrolled(main.scrollTop > 10);
    main.addEventListener('scroll', onScroll);
    return () => main.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`topbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-arrows">
        <button className="nav-btn" aria-label="Go back" disabled>
          <ArrowLeftIcon />
        </button>
        <button className="nav-btn" aria-label="Go forward">
          <ArrowRightIcon />
        </button>

        {view === 'search' ? (
          <div className="search-box">
            <SearchIcon style={{ width: 16, height: 16 }} />
            <input
              ref={inputRef}
              type="text"
              placeholder="What do you want to play?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        ) : (
          <div className="tabbar">
            <button className="pill active">All</button>
            <button className="pill">Music</button>
            <button className="pill">Podcasts</button>
          </div>
        )}
      </div>

      <div className="user-area">
        <button className="btn-premium">Explore Premium</button>
        <button className="user-avatar" aria-label="Account">U</button>
      </div>
    </div>
  );
}
