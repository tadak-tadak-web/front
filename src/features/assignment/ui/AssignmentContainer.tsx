import { assignmentQueries } from '@/entities/assignment';
import { FileSubmitForm, FileList } from '@/features/assignment';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function AssignmentContainer() {
  const { assignmentId } = useParams() as { assignmentId: string };
  const { data } = useSuspenseQuery(assignmentQueries.all(assignmentId));

  return (
    <section className="p-6 md:p-8 mb-4" aria-labelledby="submission-heading">
      <h2
        id="submission-heading"
        className="text-xl font-semibold text-gray-800 mb-6"
      >
        과제 제출
      </h2>
      {data ? <FileList assignmentsFileList={data} /> : <FileSubmitForm />}
    </section>
  );
}
