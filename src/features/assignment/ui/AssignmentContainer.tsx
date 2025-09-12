import { assignmentQueries } from '@/entities/assignment';
import { FileSubmitForm, FileList, AddFileButton } from '@/features/assignment';
import { useUploadAssignment } from '@/features/assignment/model';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function AssignmentContainer() {
  const { assignmentId } = useParams() as { assignmentId: string };
  const { data } = useSuspenseQuery({
    ...assignmentQueries.all(assignmentId),
    select: list => {
      return list.map(data => ({ ...data, status: data.status || 'success' }));
    },
  });
  const { handleUpload } = useUploadAssignment(assignmentId);

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
        <AddFileButton onFilesSelected={handleUpload} />
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
