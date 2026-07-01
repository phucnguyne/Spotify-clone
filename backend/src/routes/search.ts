import { Router } from 'express';
import { z } from 'zod';
import { songs } from '../data/songs.js';
import { playlists } from '../data/playlists.js';
import { validate } from '../middleware/validate.js';
import { ok, fail } from '../middleware/respond.js';
import type { SearchResult } from '../types/index.js';

const router = Router();

const searchQuery = z.object({
  q: z.string().min(1, 'Query must not be empty').max(100),
});

// GET /api/search?q=glass
router.get('/', validate('query', searchQuery), (req, res) => {
  const { q } = req.query as z.infer<typeof searchQuery>;
  const term = q.toLowerCase();

  const matchedSongs = songs.filter(
    (s) =>
      s.title.toLowerCase().includes(term) ||
      s.artist.toLowerCase().includes(term) ||
      s.album.toLowerCase().includes(term),
  );

  const matchedPlaylists = playlists.filter((p) =>
    p.name.toLowerCase().includes(term),
  );

  if (!matchedSongs.length && !matchedPlaylists.length) {
    fail(res, 'NO_RESULTS', `No results for "${q}"`, 404);
    return;
  }

  const result: SearchResult = {
    songs: matchedSongs,
    playlists: matchedPlaylists,
  };
  ok(res, result);
});

export default router;
