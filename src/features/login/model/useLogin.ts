import { login } from '@/entities/user';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  const mutation = useMutation({ mutationFn: login });
  return mutation;
};
