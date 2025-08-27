import { getUser } from '@/entities/user/apis';
import { createUserKey } from '@/shared';
import type { QueryClient } from '@tanstack/react-query';

export async function userLoader(queryClient: QueryClient) {
  const data = await getUser();
  queryClient.setQueryData(createUserKey(), data);
  return data;
}
