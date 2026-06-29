import type { Card } from '../types';

const cards: Card[] = [
  { id: '1', name: 'Daily Mix 1',      desc: 'Dua Lipa, The Weeknd, Billie Eilish and more',      emoji: '🎵', bg: '#1a3a2a' },
  { id: '2', name: 'Top 50 Vietnam',   desc: 'The most played tracks in Vietnam this week',        emoji: '🎶', bg: '#2a1a3a' },
  { id: '3', name: 'Hot Hits Global',  desc: 'The hottest tracks around the world right now',      emoji: '🔥', bg: '#3a2a1a' },
  { id: '4', name: 'Chill Hits',       desc: 'Kick back to the best new and recent chill hits',    emoji: '🌙', bg: '#1a2a3a' },
  { id: '5', name: 'Pop Rising',       desc: 'The future pop stars of tomorrow, today',            emoji: '💫', bg: '#3a1a1a' },
];

interface CardGridProps {
  title: string;
  cards: Card[];
}

function CardGrid({ title, cards }: CardGridProps) {
  return (
    <>
      <div className="section-header">
        <div className="section-title">{title}</div>
        <button className="show-all">Show all</button>
      </div>
      <div className="cards-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-img" style={{ background: card.bg }}>
              {card.emoji}
              <button className="play-btn" aria-label={`Play ${card.name}`}>
                <i className="ti ti-player-play-filled" aria-hidden="true" />
              </button>
            </div>
            <div className="card-name">{card.name}</div>
            <div className="card-desc">{card.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function TrendingCards() {
  return <CardGrid title="Trending now" cards={cards} />;
}