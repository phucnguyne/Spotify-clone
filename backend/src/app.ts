import express from 'express';
import cors from 'cors';
import { config } from './config.js';
import apiRouter from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// ── Middleware ─────────────────────────────────────────────────
app.use(cors({ origin: config.ALLOWED_ORIGINS, credentials: true }));
app.use(express.json());

// ── Health check ───────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', env: config.NODE_ENV });
});

// ── API routes ─────────────────────────────────────────────────
app.use('/api', apiRouter);

// ── 404 catch-all ─────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: 'Route not found' } });
});

// ── Global error handler (must be last) ───────────────────────
app.use(errorHandler);

export default app;
