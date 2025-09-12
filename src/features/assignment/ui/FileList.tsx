import type { AssignmentFile } from '@/entities/assignment';
import { FileCard } from '@/features/assignment';

interface AssignmentFileListProps {
  assignmentsFileList: AssignmentFile[];
}
export default function FileList({
  assignmentsFileList,
}: AssignmentFileListProps) {
  return (
    <ul className="overflow-y-auto">
      {assignmentsFileList.map(assignmentFile => (
        <FileCard key={assignmentFile.id} assignmentFile={assignmentFile} />
      ))}
    </ul>
  );
}
