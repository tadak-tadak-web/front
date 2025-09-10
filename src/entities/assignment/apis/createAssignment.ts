import type { AssignmentFile } from '@/entities/assignment';
import { api } from '@/shared';

export const createAssignment = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file, file.name);

  const response = await api
    .post('assignment', {
      body: formData,
    })
    .json<{ data: AssignmentFile }>();

  return response.data;
};
