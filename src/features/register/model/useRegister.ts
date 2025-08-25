import { postRegister, type PostRegisterRequest } from '@/entities/user';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
  const mutation = useMutation({ mutationFn: postRegister });

  const onSubmit = ({ id, password }: PostRegisterRequest) =>
    mutation.mutate({ id, password });
  return { onSubmit, mutation };
};
