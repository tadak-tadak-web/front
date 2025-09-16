import { api } from '@/shared';
import type { Post } from '@/entities/board';

export const createPost = async (post: Post) => {
  const response = await api
    .post('board/posts', {
      json: post,
    })
    .json<{ data: Post }>();
  return response.data;
};
