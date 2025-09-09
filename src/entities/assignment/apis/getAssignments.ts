import type { Assignment } from '@/entities/assignment';
import { api } from '@/shared';

export const getAssignments = async (assignmentId: string) => {
  const response = await api
    .get(`assignment/${assignmentId}`)
    .json<{ data: Assignment[] }>();
  return response.data;
};
