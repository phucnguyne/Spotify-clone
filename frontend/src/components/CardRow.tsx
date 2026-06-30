import type { CardItem } from '@/types';
import { usePlayerStore } from '@/store/usePlayerStore';
import { songs } from '@/data/songs';
import { artFor, hashStr } from '@/utils/art';
import { PlayIcon } from '@/components/icons';

interface CardRowProps {
  title: string;
  items: CardItem[];
}

export default function CardRow({ title, items }: CardRowProps) {
  const { setView, playSong } = usePlayerStore();

  return (
    <>
      <div className="section-header">
        <div className="section-title">{title}</div>
        <button className="show-all">Show all</button>
      </div>
      <div className="cards-grid">
        {items.map((card) => {
          const repSong = songs[hashStr(card.id) % songs.length];
          return (
            <div className="card" key={card.id} onClick={() => setView('library')}>
              <div className="card-art-wrap">
                <div className="card-art" style={{ background: artFor(card.id) }} />
                <button
                  className="card-play"
                  aria-label={`Play ${card.name}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    playSong(repSong.id);
                  }}
                >
                  <PlayIcon />
                </button>
              </div>
              <div className="card-name">{card.name}</div>
              <div className="card-desc">{card.desc}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
