import { postLogin, type PostLoginRequest } from '@/entities/user';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();
  const mutation = useMutation({ mutationFn: postLogin });

  const handleMutate = ({ id, password }: PostLoginRequest) => {
    mutation.mutate(
      { id, password },
      {
        onSuccess: data => {
          navigate('/');
        },
        onError: error => {},
      }
    );
  };
  return { ...mutation, handleMutate };
};
