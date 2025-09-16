import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Header() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation();
  const handleBack = () => {
    navigate(-1);
  };

  const lecturePath = `/lecture/${id}`;
  const boardPath = `/lecture/${id}/board`;
  const noticePath = `/lecture/${id}/notice`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="text-gray-600 p-2 rounded-full hover:bg-gray-100"
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-bold text-gray-800">
              <Link to={lecturePath}>기초프로그래밍</Link>
            </h1>
            <nav className="hidden md:flex items-center gap-6 ml-20">
              <Link
                to={boardPath}
                className={clsx('px-4', {
                  'font-bold border-b-2 border-blue-600 pb-2':
                    pathname === boardPath,
                })}
              >
                게시판
              </Link>
              <Link
                to={boardPath}
                className={clsx('px-4', {
                  'font-bold border-b-2 border-blue-600 pb-2':
                    pathname === noticePath,
                })}
              >
                공지사항
              </Link>
            </nav>
          </div>

          <div className="w-10 h-10 bg-gray-200 rounded-full cursor-pointer"></div>
        </div>
      </div>
    </header>
    <header className="h-16 bg-white shadow-sm sticky top-0 z-10">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex justify-between items-center">
          <div className="h-full flex items-center gap-4">
            <button
              onClick={handleBack}
              className="text-gray-600 p-2 rounded-full hover:bg-gray-100"
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-bold text-gray-800">
              <Link to={lecturePath}>기초프로그래밍</Link>
            </h1>
            <nav className="hidden md:flex items-center gap-6 ml-20 h-full">
              <Link
                to={boardPath}
                className={clsx(
                  'px-4 h-full flex items-center justify-center',
                  {
                    'font-bold border-b-2 border-blue-600':
                      pathname === boardPath,
                  }
                )}
              >
                게시판
              </Link>
              <Link
                to={noticePath}
                className={clsx(
                  'px-4 h-full flex items-center justify-center',
                  {
                    'font-bold border-b-2 border-blue-600':
                      pathname === noticePath,
                  }
                )}
              >
                공지사항
              </Link>
            </nav>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
