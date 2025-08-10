import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function QnAButton() {
  return (
    <button className="bg-white size-full flex justify-center items-center cursor-pointer">
      <div className="flex flex-col items-center">
        <span className="bg-[#FFEACD] rounded-full flex items-center justify-center size-10 lg:size-22.5">
          <QuestionMarkCircleIcon className="size-1/2" stroke="white" />
        </span>
        <span className="text-sm lg:text-xl font-bold pt-4.5">질의 응답</span>
      </div>
    </button>
  );
}
