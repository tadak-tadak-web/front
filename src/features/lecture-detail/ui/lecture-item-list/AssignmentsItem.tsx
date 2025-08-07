import { VideoCameraIcon } from '@heroicons/react/24/outline';

export default function AssignmentsItem({ title }: { title: string }) {
  return (
    <li className="flex items-center text-gray-500 text-lg">
      <div className="size-10 lg:size-15 flex items-center justify-center rounded-[10px] bg-[#FFB2B2]">
        <VideoCameraIcon className="size-1/2 text-[#FF0000]" />
      </div>
      <h3 className="pl-5">{title}</h3>
    </li>
  );
}
