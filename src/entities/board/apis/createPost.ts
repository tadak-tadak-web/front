import { api } from '@/shared';
import type { CreatePostRequest, Post } from '@/entities/board';

export const createPost = async (data: CreatePostRequest) => {
  const response = await api
    .post('board/posts', {
      json: { ...data },
    })
    .json<{ data: Post }>();
  return response.data;
};
