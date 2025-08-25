import { postRegister, type PostRegisterRequest } from '@/entities/user';
import { postCheckId } from '@/entities/user/apis/postCheckId';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
  const registerMutation = useMutation({ mutationFn: postRegister });
  const checkIdMutation = useMutation({ mutationFn: postCheckId });

  const handleCheckId = (id: string) => {
    checkIdMutation.mutate(id);
  };
  const handleRegister = ({ id, password }: PostRegisterRequest) => {
    registerMutation.mutate({ id, password });
  };

  return { handleRegister, registerMutation, handleCheckId, checkIdMutation };
};
