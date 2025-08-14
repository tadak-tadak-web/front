import type { LoginRequest, User } from '@/entities/user';
import ky from 'ky';

export const login = ({ id, password }: LoginRequest) =>
  ky.post<User>('/login', { json: { id, password } }).json();
