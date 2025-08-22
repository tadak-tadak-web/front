import { type Lecture } from '@/entities/lecture';
import { withLectureList } from '@/features/lecture-detail';
import { Link } from 'react-router-dom';

interface LectureSidebarNavProps {
  lectureList: Lecture[];
}
const WrappedLectureSidebarNav = withLectureList(function LectureSidebarNav({
  lectureList,
}: LectureSidebarNavProps) {
  return (
    <ul className="fixed top-1/2 right-10 -translate-y-1/2">
      {lectureList.map((lecture) => (
        <li key={lecture.id}>
          <Link to={`#lecture-${lecture.id}`}>{lecture.title}</Link>
        </li>
      ))}
    </ul>
  );
});

export default WrappedLectureSidebarNav;
