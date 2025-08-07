import { BookOpenIcon } from '@heroicons/react/24/outline';

export default function NoteButton() {
  return (
    <button className="bg-white size-full flex justify-center items-center cursor-pointer">
      <div className="flex flex-col items-center">
        <span className="bg-[#FFCDCD] rounded-full flex items-center justify-center size-10 lg:size-22.5">
          <BookOpenIcon className="size-1/2" stroke="white" />
        </span>
        <span className="text-sm lg:text-xl  font-bold pt-4.5">강의 노트</span>
      </div>
    </button>
  );
}
