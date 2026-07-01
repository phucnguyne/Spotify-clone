import type { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { fail } from './respond.js';

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof ZodError) {
    fail(res, 'VALIDATION_ERROR', err.errors.map((e) => e.message).join(', '), 422);
    return;
  }

  const status: number = (err as { status?: number }).status ?? 500;
  const message: string = err instanceof Error ? err.message : 'Internal server error';

  console.error('[error]', err);
  fail(res, 'INTERNAL_ERROR', message, status);
};
