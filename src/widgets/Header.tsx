import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-bold text-gray-800">기초프로그래밍</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="#"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              강의
            </Link>
            <Link
              to="#"
              className="text-blue-600 border-b-2 border-blue-600 pb-3 font-bold"
            >
              Q&A
            </Link>
          </nav>
          <div className="w-10 h-10 bg-gray-200 rounded-full cursor-pointer"></div>
        </div>
      </div>
    </header>
  );
}
