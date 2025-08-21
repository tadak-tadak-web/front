import type { Lecture } from '@/entities/lecture';
import { api } from '@/shared';

export const getLectureList = async (id: number): Promise<Lecture[]> => {
  const res = await api.get(`lecture/${id}`).json<{ data: Lecture[] }>();
  return res.data;
};
