import { getLectureList } from '@/entities/lecture';
import { createUserKey } from '@/shared';
import { queryOptions } from '@tanstack/react-query';

export const lectureQueries = {
  lecture: () => [...createUserKey(), 'lecture'] as const,
  lectureList: (id: number) =>
    queryOptions({
      queryKey: [...lectureQueries.lecture(), id],
      queryFn: () => getLectureList(id),
    }),
};
