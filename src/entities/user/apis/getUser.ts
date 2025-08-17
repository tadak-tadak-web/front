import type { User } from '@/entities/user';
import { api } from '@/shared';

export const getUser = () => api.get<{ data: User }>('user').json();
