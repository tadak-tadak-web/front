import type { PostRegisterRequest, User } from '@/entities/user';
import { api } from '@/shared';

export const postRegister = ({ id, password }: PostRegisterRequest) =>
  api.post('user/register', { json: { id, password } }).json<User>();
