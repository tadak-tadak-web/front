import { api } from '@/shared';

export const getLectureList = (id: number) => {
  return api.get(`api/lecture/${id}`).json;
};
