import type { User } from '@/entities/user';
import ky from 'ky';

export const getUser = () => ky.get<User>('/user').json();
