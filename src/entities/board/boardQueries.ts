import { getPosts } from '@/entities/board/apis';
import { createUserKey } from '@/shared';
import { queryOptions } from '@tanstack/react-query';

export const boardQueries = {
  board: () => [...createUserKey(), 'board'] as const,
  postList: () =>
    queryOptions({
      queryKey: [...boardQueries.board(), 'list'],
      queryFn: () => getPosts(),
    }),
};
