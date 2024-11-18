import { SetMetadata } from '@nestjs/common';

export const RATE_LIMIT_KEY = 'rateLimit';

export const RateLimit = (limit: number, windowMs: number) =>
  SetMetadata(RATE_LIMIT_KEY, { limit, windowMs });

export default function Component() {
  return null;
}