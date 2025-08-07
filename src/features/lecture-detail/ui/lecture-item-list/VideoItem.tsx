interface VideoItemProps {
  title: string;
  isWatched: boolean;
}

export default function VideoItem({ title, isWatched }: VideoItemProps) {
  return (
    <li className="flex items-center text-gray-500 text-lg">
      <VideoIcon isWatched={isWatched} />
      <p className="pl-5">{title}</p>
    </li>
  );
}

function VideoIcon({ isWatched }: { isWatched: boolean }) {
  const bgColor = isWatched ? 'bg-[#B2FFBD]' : 'bg-[#FFB2B2]';
  const iconColor = isWatched ? 'text-[#1B5E20]' : 'text-[#B71C1C]';

  return (
    <div
      className={`size-10 lg:size-15 flex items-center justify-center rounded-[10px] ${bgColor}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`size-1/2 ${iconColor}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    </div>
  );
}
