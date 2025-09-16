import { api } from '@/shared';
import type { Post } from '@/entities/board';

export const editPost = async (id: number, post: Partial<Post>) => {
  const response = await api
    .put(`board/posts/${id}`, {
      json: post,
    })
    .json<{ data: Post }>();
  return response.data;
};
