import { queryOptions } from '@tanstack/react-query';
import { getUser } from '@entities/user';

export const userQueries = {
  me: () =>
    queryOptions({
      queryKey: ['me'],
      queryFn: () => getUser(),
      gcTime: Infinity,
      staleTime: Infinity,
    }),
};
