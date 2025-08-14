import type { User } from '@/entities/user';
import ky from 'ky';

interface LoginRequest {
  id: string;
  password: string;
}
export const login = ({ id, password }: LoginRequest) =>
  ky.post<User>('/login', { json: { id, password } }).json();
