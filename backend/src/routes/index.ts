import { Router } from 'express';
import songsRouter     from './songs.js';
import playlistsRouter from './playlists.js';
import searchRouter    from './search.js';
import homeRouter      from './home.js';

const router = Router();

router.use('/songs',     songsRouter);
router.use('/playlists', playlistsRouter);
router.use('/search',    searchRouter);
router.use('/home',      homeRouter);

export default router;
