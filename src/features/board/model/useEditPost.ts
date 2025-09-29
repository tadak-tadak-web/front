import { boardQueries, editPost } from '@/entities/board';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditPost = () => {
  const queryClient = useQueryClient();
  const queryKey = boardQueries.postList().queryKey;
  const { mutate: editMutate } = useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return { editMutate };
};
