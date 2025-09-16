import { api } from '@/shared';
import type { Post } from '@/entities/board';

export const createPost = async (content: string) => {
  const response = await api
    .post('board/posts', {
      json: { content },
    })
    .json<{ data: Post }>();
  return response.data;
};
