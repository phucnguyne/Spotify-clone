import { Router } from 'express';
import { playlists } from '../data/playlists.js';
import { songs } from '../data/songs.js';
import { cardSections } from '../data/cardSections.js';
import { ok } from '../middleware/respond.js';

const router = Router();

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

// GET /api/home
// Returns everything the Home view needs in one shot
router.get('/', (_req, res) => {
  ok(res, {
    greeting: getGreeting(),
    quickAccess: playlists.slice(0, 6),
    cardSections,
    recentlyPlayed: songs.slice(0, 5),
  });
});

export default router;
