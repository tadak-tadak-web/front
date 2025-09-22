import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postEnrollment } from '@/entities/enrollment/apis/postEnrollment';
import { enrollmentQueries } from '@/entities/enrollment';

export const useSubmitEnrollment = () => {
  const queryClient = useQueryClient();
  const queryKey = enrollmentQueries.all().queryKey;

  return useMutation({
    mutationFn: postEnrollment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey,
      });
    },
  });
};
