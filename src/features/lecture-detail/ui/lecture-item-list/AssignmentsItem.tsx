import { VideoCameraIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

interface AssignmentsItemProps {
  title: string;
  assignmentsId: string;
}
export default function AssignmentsItem({
  title,
  assignmentsId,
}: AssignmentsItemProps) {
  return (
    <li className="flex items-center text-gray-500 text-lg">
      <Link to={`assignments/${assignmentsId}`} className="flex items-center">
        <div className="size-10 lg:size-15 flex items-center justify-center rounded-[10px] bg-[#FFB2B2]">
          <VideoCameraIcon className="size-1/2 text-[#FF0000]" />
        </div>
        <h3 className="pl-5">{title}</h3>
      </Link>
    </li>
  );
}
