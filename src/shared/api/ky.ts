// src/shared/api/ky.ts
import ky from 'ky';

export const api = ky.create({
  prefixUrl: `${window.location.origin}/api`,
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  retry: { limit: 0 },
});
