import { api } from '@/shared';

export const createFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await api
    .post('files/upload', {
      body: formData,
    })
    .json<{ data: { url: string } }>();

  return response.data;
};
