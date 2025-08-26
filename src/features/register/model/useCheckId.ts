import { postCheckId } from '@/entities/user/apis/postCheckId';
import { useMutation } from '@tanstack/react-query';

export function useCheckId() {
  const mutation = useMutation({
    mutationFn: postCheckId,
  });

  return { ...mutation };
}
