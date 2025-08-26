import { postCheckId } from '@/entities/user';
import { validateId } from '@/features/register';
import { useMutation } from '@tanstack/react-query';

export function useCheckId() {
  const mutation = useMutation({
    mutationFn: postCheckId,
  });

  const checkId = (id: string) => {
    if (!validateId(id)) return;
    mutation.mutate(id, {
      onSuccess(data) {
        if (!data.status) {
          alert('사용할 수 없는 아이디입니다.');
        }
      },
    });
  };

  return { checkId, ...mutation };
}
