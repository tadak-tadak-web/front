import { boardQueries, deletePost } from '@/entities/board';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  const queryKey = boardQueries.postList().queryKey;
  const { mutate: deleteMutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
  return { deleteMutate };
};
