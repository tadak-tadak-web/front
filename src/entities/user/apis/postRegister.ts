import type { PostRegisterRequest, User } from '@/entities/user';
import { api } from '@/shared';

export const postRegister = (user: PostRegisterRequest) =>
  api.post('user', { json: user }).json<User>();
