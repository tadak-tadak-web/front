import { queryOptions } from '@tanstack/react-query';
import { getUser } from '@entities/user';
import { createUserKey } from '@/shared';

export const userQueries = {
  me: () =>
    queryOptions({
      queryKey: createUserKey(),
      queryFn: () => getUser(),
      gcTime: Infinity,
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }),
};
