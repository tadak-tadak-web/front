import { postCheckId } from '@/entities/user/apis/postCheckId';
import { useMutation } from '@tanstack/react-query';

export function useCheckId() {
  const mutation = useMutation({
    mutationFn: postCheckId,
  });

  const handleCheckId = (id: string) => mutation.mutate(id);

  return { handleCheckId, ...mutation };
}
