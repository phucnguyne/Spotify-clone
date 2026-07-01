import app from './app.js';
import { config } from './config.js';

app.listen(config.PORT, () => {
  console.log(`🎵  API running at http://localhost:${config.PORT} [${config.NODE_ENV}]`);
  console.log('   Routes:');
  console.log('     GET /health');
  console.log('     GET /api/home');
  console.log('     GET /api/songs');
  console.log('     GET /api/songs/:id');
  console.log('     GET /api/playlists');
  console.log('     GET /api/playlists/:id');
  console.log('     GET /api/search?q=');
});
