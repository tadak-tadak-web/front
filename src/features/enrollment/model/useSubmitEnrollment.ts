import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postEnrollment } from '@/entities/enrollment/apis/postEnrollment';

export const useSubmitEnrollment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postEnrollment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enrollment'] });
    },
  });
};
