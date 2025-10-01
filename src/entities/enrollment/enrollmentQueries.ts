import { getEnrollment } from './apis/getEnrollment';

export const enrollmentQueries = {
  all: () => ({
    queryKey: ['enrollment'],
    queryFn: getEnrollment,
  }),
};
