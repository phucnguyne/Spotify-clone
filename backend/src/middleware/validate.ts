import type { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

type Target = 'body' | 'query' | 'params';

/**
 * validate('query', schema) — validates req.query through a Zod schema
 * and replaces req.query with the parsed (coerced) value.
 */
export function validate<T>(target: Target, schema: ZodSchema<T>) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[target]);
    if (!result.success) {
      next(result.error);
      return;
    }
    (req as unknown as Record<string, unknown>)[target] = result.data;
    next();
  };
}
