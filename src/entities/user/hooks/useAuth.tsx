import type { User } from '@/entities/user/types';
import { useOutletContext } from 'react-router-dom';

export const useAuth = () => {
  const user = useOutletContext<User>();
  if (!user)
    throw new Error('useAuth는 RequireAuth 하위에서만 사용해야 합니다.');
  return user;
};
