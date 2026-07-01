import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../app.js';

describe('GET /api/songs', () => {
  it('returns all songs', async () => {
    const res = await request(app).get('/api/songs');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBe(8);
  });

  it('filters by artist', async () => {
    const res = await request(app).get('/api/songs?artist=nova');
    expect(res.status).toBe(200);
    const songs = res.body.data;
    expect(songs.every((s: { artist: string }) => s.artist.toLowerCase().includes('nova'))).toBe(true);
  });

  it('filters by album', async () => {
    const res = await request(app).get('/api/songs?album=Afterglow');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBe(2);
  });
});

describe('GET /api/songs/:id', () => {
  it('returns a single song', async () => {
    const res = await request(app).get('/api/songs/1');
    expect(res.status).toBe(200);
    expect(res.body.data.title).toBe('Midnight Static');
  });

  it('returns 404 for unknown id', async () => {
    const res = await request(app).get('/api/songs/999');
    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
    expect(res.body.error.code).toBe('NOT_FOUND');
  });
});
