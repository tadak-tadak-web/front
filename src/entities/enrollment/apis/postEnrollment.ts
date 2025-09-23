import { api } from '@/shared';

export const postEnrollment = async (lectureIds: number[]) => {
  const response = await api
    .post('enrollment/submit', { json: { lectureIds } })
    .json<{ message: string }>();
  return response;
};
