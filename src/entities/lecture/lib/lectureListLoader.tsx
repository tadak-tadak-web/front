import { getLectureList, lectureQueries } from '@/entities/lecture';
import type { QueryClient } from '@tanstack/react-query';

interface LectureListLoader {
  id: number;
  queryClient: QueryClient;
}
export async function lectureListLoader({
  id,
  queryClient,
}: LectureListLoader) {
  const data = await getLectureList(id);
  queryClient.setQueryData(lectureQueries.lectureList(id).queryKey, data);
  return data;
}
