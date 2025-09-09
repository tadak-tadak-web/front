import type { Assignment } from '@/entities/assignment';
import { api } from '@/shared';

export const createAssignment = async (file: File) => {
  const response = await api
    .post('assignment', {
      body: file,
      headers: {
        'Content-Type': file.type,
      },
    })
    .json<{ data: Assignment }>();
  return response.data;
};
