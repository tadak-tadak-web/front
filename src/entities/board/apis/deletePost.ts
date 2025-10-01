import { api } from '@/shared';

export const deletePost = async (id: number) => {
  const response = await api
    .delete(`board/posts/${id}`)
    .json<{ message: string }>();
  return response.message;
};
