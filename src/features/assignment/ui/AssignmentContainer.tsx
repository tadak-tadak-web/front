import {
  assignmentQueries,
  createAssignment,
  type AssignmentFile,
} from '@/entities/assignment';
import { FileSubmitForm, FileList, AddFileButton } from '@/features/assignment';
import {
  useMutation,
  useSuspenseQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function AssignmentContainer() {
  const { assignmentId } = useParams() as { assignmentId: string };
  const { data } = useSuspenseQuery(assignmentQueries.all(assignmentId));
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: createAssignment,

    onMutate: async (newFile: File) => {
      const queryKey = assignmentQueries.all(assignmentId).queryKey;

      await queryClient.cancelQueries({ queryKey });

      const previousAssignments = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, oldData => {
        const optimisticAssignment: AssignmentFile = {
          id: `temp-${newFile.name}`,
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
      const queryKey = assignmentQueries.all(assignmentId).queryKey;
      if (context?.previousAssignments) {
        queryClient.setQueryData(queryKey, context.previousAssignments);
      }
    },
  });

  const handleUpload = async (files: FileList) => {
    const uploadPromises = [];
    for (const file of files) {
      const assignmentFile = await mutateAsync(file);
      uploadPromises.push(assignmentFile);
    }

    await Promise.allSettled(uploadPromises);
    queryClient.invalidateQueries({
      queryKey: assignmentQueries.all(assignmentId).queryKey,
    });
  };

  return (
    <section className="p-6 md:p-8 mb-4" aria-labelledby="submission-heading">
      <h2
        id="submission-heading"
        className="text-xl font-semibold text-gray-800 mb-6"
      >
        과제 제출
      </h2>
      {data.length !== 0 ? (
        <FileList assignmentsFileList={data} />
      ) : (
        <FileSubmitForm handleUpload={handleUpload} />
      )}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <AddFileButton
          onFilesSelected={file => {
            console.log(file);
          }}
        />
        <div className="flex items-center">
          <label
            htmlFor="score"
            className="block text-sm font-medium text-gray-700 mr-2"
          >
            점수
          </label>
          <input
            type="text"
            name="score"
            id="score"
            readOnly
            className="block w-20 rounded-md border-gray-300 shadow-sm sm:text-sm p-2"
          />
        </div>
      </div>
    </section>
  );
}
