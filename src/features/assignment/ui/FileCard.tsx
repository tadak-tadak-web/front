import type { AssignmentFile } from '@/entities/assignment';
import { DocumentIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface FileCardProps {
  assignmentFile: AssignmentFile;
}

export default function FileCard({ assignmentFile }: FileCardProps) {
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
            <p className="text-primary-blue">{assignmentFile.fileSize}</p>
            <p className="text-gray-200">업로드 완료</p>
          </div>
        </div>
        <XCircleIcon className="size-9 text-red-500" />
      </div>
    </li>
  );
}
