import type { CardSection } from '../types/index.js';

export const cardSections: CardSection[] = [
  {
    title: 'Made for you',
    items: [
      { id: 'dw',      name: 'Discover Weekly', desc: 'Your weekly mixtape of fresh music.' },
      { id: 'dm1',     name: 'Daily Mix 1',     desc: 'Nova Wren, Coral Drift, Halen Reyes and more' },
      { id: 'dm2',     name: 'Daily Mix 2',     desc: 'Marlow, Juno Park and more' },
      { id: 'focus',   name: 'Deep Focus',      desc: 'Calm beats for staying in the zone.' },
      { id: 'release', name: 'Release Radar',   desc: 'Catch all the latest music from artists you follow.' },
    ],
  },
  {
    title: 'Trending now',
    items: [
      { id: 'rock',      name: 'Rock Classics',    desc: 'Riffs that never get old.' },
      { id: 'chill',     name: 'Chill Hits',       desc: 'Kick back to the best new and recent chill hits.' },
      { id: 'throwback', name: 'Throwback Jams',   desc: 'Songs that bring you right back.' },
      { id: 'study',     name: 'Late Night Study', desc: 'Focus music for late-night sessions.' },
      { id: 'workout',   name: 'Workout Beats',    desc: 'High-energy tracks to push through.' },
    ],
  },
];
