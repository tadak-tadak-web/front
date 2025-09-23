import { api } from '@/shared';
import type { Enrollment } from '@/entities/enrollment';

export const getEnrollment = async () => {
  const response = await api.get('enrollment').json<{ data: Enrollment[] }>();
  return response.data;
};
