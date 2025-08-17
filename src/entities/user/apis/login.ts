import type { LoginRequest, User } from '@/entities/user';
import { api } from '@/shared';

export const login = ({ id, password }: LoginRequest) =>
  api.post<User>('login', { json: { id, password } }).json();
