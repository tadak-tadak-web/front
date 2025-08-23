import { type Lecture } from '@/entities/lecture';
import { withLectureList } from '@/features/lecture-detail';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface LectureSidebarNavProps {
  lectureList: Lecture[];
}

const WrappedLectureSidebarNav = withLectureList(function LectureSidebarNav({
  lectureList,
}: LectureSidebarNavProps) {
  return (
    <>
      <nav className="fixed top-1/2 -translate-y-1/2 right-2 lg:right-10">
        <ul className="list-disc list-inside text-gray-500">
          <li className="py-3">
            <Link
              className={clsx(' hover:underline text-sm', 'lg:text-lg')}
              to="#weekly-lecture"
            >
              이번 주<span className={clsx('hidden ', 'lg:inline')}> 강의</span>
            </Link>
          </li>
          {lectureList.map((lecture) => (
            <li key={lecture.id} className="py-1 m-0">
              <Link
                to={`#lecture-${lecture.id}`}
                className={clsx(' hover:underline text-sm', 'lg:text-lg')}
              >
                {lecture.week}주차
                <span className={clsx('hidden ', 'lg:inline')}>
                  :{lecture.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
});

export default WrappedLectureSidebarNav;
