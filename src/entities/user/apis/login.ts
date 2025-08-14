import type { User } from '@/entities/user';
import ky from 'ky';

export const login = () =>
  ky
    .post<User>('/login', { json: { username: 'john', password: 'secret' } })
    .json();
