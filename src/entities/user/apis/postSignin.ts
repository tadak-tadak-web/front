import type { SignInRequest, User } from '@/entities/user';
import { api } from '@/shared';

export const postSignin = ({ id, password }: SignInRequest) =>
  api.post<User>('login', { json: { id, password } }).json();
