import { api } from '@/shared';
import type { EditPostRequest, Post } from '@/entities/board';

export const editPost = async (data: EditPostRequest) => {
  const response = await api
    .put(`board/posts/${data.id}`, {
      json: data,
    })
    .json<{ data: Post }>();
  return response.data;
};
