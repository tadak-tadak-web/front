import { queryOptions } from '@tanstack/react-query';
import { getUser } from '@entities/user';

export const userQueries = {
  all: () => ['user'] as const,
  detail: (uid: string) =>
    queryOptions({
      queryKey: [...userQueries.all(), uid],
      queryFn: () => getUser(uid),
    }),
};
