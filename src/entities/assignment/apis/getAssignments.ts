import type { AssignmentFile } from '@/entities/assignment';
import { api } from '@/shared';

export const getAssignments = async (assignmentId: string) => {
  const response = await api
    .get(`assignment/${assignmentId}`)
    .json<{ data: AssignmentFile[] | null }>();
  return response.data;
};
