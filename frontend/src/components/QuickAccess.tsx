import type { QuickAccessItem } from '../types';

const items: QuickAccessItem[] = [
  { id: '1', name: 'Liked Songs',      emoji: '💚',  color: '#1db954', bg: '#1a2a1a' },
  { id: '2', name: 'Rock Classics',    emoji: '🎸',  color: '#4a00e0', bg: '#1a1a2a' },
  { id: '3', name: 'Morning Vibes',    emoji: '🌅',  color: '#ff6b35', bg: '#2a1a10' },
  { id: '4', name: 'Chill Mix',        emoji: '🌊',  color: '#0077b6', bg: '#10201a' },
  { id: '5', name: 'Late Night Study', emoji: '🎧',  color: '#7b2d8b', bg: '#201520' },
  { id: '6', name: 'Workout Beats',    emoji: '🔥',  color: '#c62828', bg: '#200a0a' },
];

export default function QuickAccess() {
  return (
    <div className="quick-grid">
      {items.map((item) => (
        <div className="quick-item" key={item.id} style={{ background: item.bg }}>
          <div className="quick-thumb" style={{ background: item.color }}>
            {item.emoji}
          </div>
          <span className="quick-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
}