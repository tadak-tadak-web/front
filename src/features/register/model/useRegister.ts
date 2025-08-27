import { type PostRegisterRequest, postRegister } from '@/entities/user';
import { validatePassword } from '@/features/register/lib';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const navigate = useNavigate();
  const mutation = useMutation({ mutationFn: postRegister });

  const register = ({ id, password }: PostRegisterRequest) => {
    if (!validatePassword(password)) {
      alert('비밀번호는 영문자와 숫자를 포함한 8~20자리여야 합니다.');
      return;
    }

    mutation.mutate(
      { id, password },
      {
        onSuccess(data) {
          if (data.message === 'Signup successful') {
            navigate('/');
          }
        },
      }
    );
  };

  return { register, ...mutation };
};
