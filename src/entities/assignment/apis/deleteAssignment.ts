import type { AssignmentFile } from '@/entities/assignment';
import { api } from '@/shared';

export const deleteAssignment = async (assignmentId: string) => {
  const response = await api
    .delete(`assignment/${assignmentId}`)
    .json<{ data: AssignmentFile }>();

  return response.data;
};
