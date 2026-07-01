import { Router } from 'express';
import { z } from 'zod';
import { songs } from '../data/songs.js';
import { validate } from '../middleware/validate.js';
import { ok, fail } from '../middleware/respond.js';

const router = Router();

// GET /api/songs
// Optional ?artist= and ?album= filters
const listQuery = z.object({
  artist: z.string().optional(),
  album:  z.string().optional(),
});

router.get('/', validate('query', listQuery), (req, res) => {
  const { artist, album } = req.query as z.infer<typeof listQuery>;

  let result = songs;
  if (artist) result = result.filter((s) => s.artist.toLowerCase().includes(artist.toLowerCase()));
  if (album)  result = result.filter((s) => s.album.toLowerCase().includes(album.toLowerCase()));

  ok(res, result);
});

// GET /api/songs/:id
router.get('/:id', (req, res) => {
  const song = songs.find((s) => s.id === req.params.id);
  if (!song) {
    fail(res, 'NOT_FOUND', `Song "${req.params.id}" not found`, 404);
    return;
  }
  ok(res, song);
});

export default router;
