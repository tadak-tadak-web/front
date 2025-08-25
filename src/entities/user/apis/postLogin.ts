import type { PostLoginRequest, User } from '@/entities/user';
import { api } from '@/shared';

export const postLogin = ({ id, password }: PostLoginRequest) =>
  api.post<User>('login', { json: { id, password } }).json();
