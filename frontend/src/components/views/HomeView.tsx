import QuickAccess from '../QuickAccess';
import CardRow from '../CardRow';
import TrackList from '../TrackList';
import { cardSections } from '../../data/cardSections';
import { songs } from '../../data/songs';

function greeting(): string {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

export default function HomeView() {
  return (
    <>
      <div className="page-title">{greeting()}</div>
      <QuickAccess />

      {cardSections.map((section) => (
        <CardRow key={section.title} title={section.title} items={section.items} />
      ))}

      <div className="section-header">
        <div className="section-title">Recently played</div>
        <button className="show-all">Show all</button>
      </div>
      <TrackList songs={songs.slice(0, 5)} />
    </>
  );
}
