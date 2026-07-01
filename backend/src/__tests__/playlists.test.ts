import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../app.js';

describe('GET /api/playlists', () => {
  it('returns all playlists', async () => {
    const res = await request(app).get('/api/playlists');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBe(9);
  });
});

describe('GET /api/playlists/:id', () => {
  it('returns playlist with tracks', async () => {
    const res = await request(app).get('/api/playlists/liked');
    expect(res.status).toBe(200);
    const pl = res.body.data;
    expect(pl.name).toBe('Liked Songs');
    expect(Array.isArray(pl.tracks)).toBe(true);
    expect(pl.tracks.length).toBeGreaterThan(0);
  });

  it('returns 404 for unknown playlist', async () => {
    const res = await request(app).get('/api/playlists/ghost');
    expect(res.status).toBe(404);
    expect(res.body.error.code).toBe('NOT_FOUND');
  });
});
