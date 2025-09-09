import type { Assignment } from '@/entities/assignment';
import { api } from '@/shared';

export const deleteAssignment = async (assignmentId: string) => {
  const response = await api
    .delete(`assignment/${assignmentId}`)
    .json<{ data: Assignment }>();

  return response.data;
};
