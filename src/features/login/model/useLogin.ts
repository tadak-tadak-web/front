import { login, type LoginRequest } from '@/entities/user';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();
  const mutation = useMutation({ mutationFn: login });

  const handleMutate = ({ id, password }: LoginRequest) => {
    mutation.mutate(
      { id, password },
      {
        onSuccess: data => {
          navigate('/');
          console.log('Login successful:', data);
        },
        onError: error => {
          console.error('Login failed:', error);
        },
      },
    );
  };
  return { ...mutation, handleMutate };
};
