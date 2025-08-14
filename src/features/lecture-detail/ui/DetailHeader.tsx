import { ContactButton } from '@/features/contact';
import { UserCircleIcon, UserIcon } from '@heroicons/react/20/solid';

export default function DetailHeader() {
  return (
    <header className="w-full lg:px-19 lg:py-5 bg-blue-400 h-25 lg:h-50">
      <div className="flex items-center h-full">
        <UserCircleIcon className="size-20 lg:size-40" fill="white" />
        <ul className="h-full flex flex-col justify-between py-2 lg:py-5 text-white ml-5">
          <li>
            <h1 className="text-2xl lg:text-4xl font-bold">
              웹 프론트엔드 기초
            </h1>
          </li>
          <li className="flex text-sm lg:text-xl items-center font-bold">
            <UserIcon className="size-5" />
            <span className="mx-2.5">김동현 교수</span>
            <div className="w-px h-6 bg-white mr-2.5" />
            <ContactButton />
          </li>
        </ul>
      </div>
    </header>
  );
}
