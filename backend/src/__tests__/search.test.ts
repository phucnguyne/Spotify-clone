import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../app.js';

describe('GET /api/search', () => {
  it('finds songs by title', async () => {
    const res = await request(app).get('/api/search?q=glass');
    expect(res.status).toBe(200);
    expect(res.body.data.songs.length).toBeGreaterThan(0);
    expect(res.body.data.songs[0].title).toBe('Glass Horizon');
  });

  it('finds playlists by name', async () => {
    const res = await request(app).get('/api/search?q=chill');
    expect(res.status).toBe(200);
    expect(res.body.data.playlists.length).toBeGreaterThan(0);
  });

  it('returns 404 when nothing matches', async () => {
    const res = await request(app).get('/api/search?q=zzznomatch');
    expect(res.status).toBe(404);
    expect(res.body.error.code).toBe('NO_RESULTS');
  });

  it('returns 422 when q is missing', async () => {
    const res = await request(app).get('/api/search');
    expect(res.status).toBe(422);
    expect(res.body.error.code).toBe('VALIDATION_ERROR');
  });
});
