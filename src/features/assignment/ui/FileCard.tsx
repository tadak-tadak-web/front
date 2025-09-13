import { deleteAssignment, type AssignmentFile } from '@/entities/assignment';
import { StatusDisplay } from '@/features/assignment';
import { formatFileSize } from '@/shared';
import { DocumentIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useMutation } from '@tanstack/react-query';

interface FileCardProps {
  assignmentFile: AssignmentFile;
}

export default function FileCard({ assignmentFile }: FileCardProps) {
  const { mutate } = useMutation({
    mutationFn: deleteAssignment,
  });
  const handleMutate = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      mutate(assignmentFile.id);
    }
  };

  return (
    <li
      className="border border-black rounded-lg px-5 py-2.5 my-2"
      key={assignmentFile.id}
    >
      <div className="flex items-center">
        <DocumentIcon className="size-9" />
        <div className="flex-1 pl-5">
          <span>{assignmentFile.fileName}</span>
          <div className="flex gap-2">
            <p className="text-primary-blue">
              {formatFileSize(assignmentFile.fileSize)}
            </p>
            <StatusDisplay status={assignmentFile.status} />
          </div>
        </div>
        <button
          type="button"
          className="p-2 cursor-pointer"
          onClick={handleMutate}
        >
          <XCircleIcon className="size-9 text-red-500" />
        </button>
      </div>
    </li>
  );
}
