import type { SignupRequest, User } from '@/entities/user';
import { api } from '@/shared';

export const postSignup = (user: SignupRequest) =>
  api.post('user', { json: user }).json<User>();
