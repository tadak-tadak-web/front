import { queryOptions } from '@tanstack/react-query';
import getCourse from './apis/getCourse';

export const courseQueries = {
  courseData: () =>
    queryOptions({
      queryKey: ['courseData'],
      queryFn: getCourse,
    }),
};
