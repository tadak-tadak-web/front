import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  assignmentQueries,
  createAssignment,
  type AssignmentFile,
} from '@/entities/assignment';

export const useUploadAssignment = (assignmentId: string) => {
  const queryClient = useQueryClient();
  const queryKey = assignmentQueries.all(assignmentId).queryKey;

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createAssignment,

    onMutate: async (newFile: File) => {
      await queryClient.cancelQueries({ queryKey });

      const previousAssignments =
        queryClient.getQueryData<AssignmentFile[]>(queryKey);

      queryClient.setQueryData<AssignmentFile[]>(queryKey, oldData => {
        const optimisticAssignment: AssignmentFile = {
          id: `temp-${newFile.name}-${Date.now()}`,
          fileName: newFile.name,
          fileSize: newFile.size,
          fileContent: '',
          status: 'uploading',
        };
        return oldData
          ? [...oldData, optimisticAssignment]
          : [optimisticAssignment];
      });

      return { previousAssignments };
    },

    onError: (_err, _newFile, context) => {
      if (context?.previousAssignments) {
        queryClient.setQueryData(queryKey, context.previousAssignments);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const handleUpload = async (files: FileList | File[]) => {
    const filesToUpload = Array.from(files);
    const uploadPromises = filesToUpload.map(file => mutateAsync(file));

    await Promise.allSettled(uploadPromises);
  };

  return { handleUpload, isPending };
};
