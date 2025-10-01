import { api } from '@/shared';
import type { Post } from '@/entities/board';

export const getPosts = async () => {
  const response = await api.get('board/posts').json<{ data: Post[] }>();
  return response.data;
};
