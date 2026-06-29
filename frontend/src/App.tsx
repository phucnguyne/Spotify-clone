import './index.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import QuickAccess from './components/QuickAccess';
import TrendingCards from './components/TrendingCards';
import SongList from './components/SongList';
import Player from './components/Player';

export default function App() {
  return (
    <div className="sp">
      {/* Left sidebar */}
      <Sidebar />

      {/* Main scroll area */}
      <div className="main">
        <Topbar />
        <div className="main-content">
          <div className="section-title">Good evening</div>
          <QuickAccess />
          <TrendingCards />
          <SongList />
        </div>
      </div>

      {/* Bottom player bar — spans full width via grid-column: 1 / -1 */}
      <Player />
    </div>
  );
}