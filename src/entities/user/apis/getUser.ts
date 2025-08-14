import type { User } from '@/entities/user';
import ky from 'ky';

export const getUser = (uid: string) => ky.get<User>(`/user/${uid}`).json();
