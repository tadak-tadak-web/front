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
      <nav className="fixed top-1/2 -translate-y-1/2 right-2 3xl:right-10 2xl:right-20">
        <ul className="list-disc list-inside text-gray-500">
          <li className="py-3">
            <Link
              className={clsx(' hover:underline text-sm', '3xl:text-lg')}
              to="#weekly-lecture"
            >
              이번 주
              <span className={clsx('hidden ', '3xl:inline')}> 강의</span>
            </Link>
          </li>
          {lectureList.map(lecture => (
            <li key={lecture.id} className="py-1 m-0">
              <Link
                to={`#lecture-${lecture.id}`}
                className={clsx(' hover:underline text-sm', '3xl:text-lg')}
              >
                {lecture.week}주차
                <span className={clsx('hidden ', '3xl:inline')}>
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
