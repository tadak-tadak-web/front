import { getAssignments } from '@/entities/assignment';
import { queryOptions } from '@tanstack/react-query';

export const assignmentQueries = {
  all: (assignmentId: string) =>
    queryOptions({
      queryKey: ['assignments', assignmentId],
      queryFn: () => getAssignments(assignmentId),
    }),
};
