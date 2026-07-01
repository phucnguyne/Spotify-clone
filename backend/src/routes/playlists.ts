import { Router } from 'express';
import { playlists, getPlaylistDetail } from '../data/playlists.js';
import { ok, fail } from '../middleware/respond.js';

const router = Router();

// GET /api/playlists
router.get('/', (_req, res) => {
  ok(res, playlists);
});

// GET /api/playlists/:id  — includes tracks array
router.get('/:id', (req, res) => {
  const detail = getPlaylistDetail(req.params.id);
  if (!detail) {
    fail(res, 'NOT_FOUND', `Playlist "${req.params.id}" not found`, 404);
    return;
  }
  ok(res, detail);
});

export default router;
