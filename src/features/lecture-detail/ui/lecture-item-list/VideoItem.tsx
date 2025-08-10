import { VideoCameraIcon } from '@heroicons/react/24/outline';

interface VideoItemProps {
  title: string;
  isWatched: boolean;
}

export default function VideoItem({ title, isWatched }: VideoItemProps) {
  const bgColor = isWatched ? 'bg-[#B2FFBD]' : 'bg-[#FFB2B2]';
  const iconColor = isWatched ? 'text-[#1B5E20]' : 'text-[#B71C1C]';
  return (
    <li className="flex items-center text-gray-500 text-lg">
      <div
        className={`size-10 lg:size-15 flex items-center justify-center rounded-[10px] ${bgColor}`}
      >
        <VideoCameraIcon className={`size-1/2 ${iconColor}`} />
      </div>
      <p className="pl-5">{title}</p>
    </li>
  );
}
