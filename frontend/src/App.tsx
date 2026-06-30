import './index.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Player from './components/Player';
import HomeView from './components/views/HomeView';
import SearchView from './components/views/SearchView';
import LibraryView from './components/views/LibraryView';
import { usePlayerStore } from './store/usePlayerStore';

export default function App() {
  const view = usePlayerStore((s) => s.view);

  return (
    <div className="sp">
      {/* Left sidebar */}
      <Sidebar />

      {/* Main scroll area */}
      <div className="main">
        <Topbar />
        <div className="main-content">
          {view === 'home' && <HomeView />}
          {view === 'search' && <SearchView />}
          {view === 'library' && <LibraryView />}
        </div>
      </div>

      {/* Bottom player bar — spans full width via grid-column: 1 / -1 */}
      <Player />
    </div>
  );
}