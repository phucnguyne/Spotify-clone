import type { Response } from 'express';
import type { ApiSuccess, ApiError } from '../types/index.js';

export function ok<T>(res: Response, data: T, status = 200): void {
  const body: ApiSuccess<T> = { success: true, data };
  res.status(status).json(body);
}

export function fail(
  res: Response,
  code: string,
  message: string,
  status = 400,
): void {
  const body: ApiError = { success: false, error: { code, message } };
  res.status(status).json(body);
}
