import { MegaphoneIcon } from '@heroicons/react/24/outline';

export default function AnnouncementButton() {
  return (
    <button className="bg-white size-full flex justify-center items-center cursor-pointer">
      <div className="flex flex-col items-center">
        <span className="bg-[#FFCDCD] rounded-full flex items-center justify-center size-10 lg:w-22.5 lg:h-22.5">
          <MegaphoneIcon className="size-1/2" stroke="white" />
        </span>
        <span className="text-sm lg:text-xl font-bold pt-4.5">강의 공지</span>
      </div>
    </button>
  );
}
