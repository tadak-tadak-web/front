import { api } from '@/shared';

export const postCheckId = (id: string) =>
  api.post('user/check-id', { json: { id } }).json<{ status: boolean }>();
