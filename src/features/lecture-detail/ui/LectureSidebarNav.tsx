import { lectureQueries } from '@/entities/lecture';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

export default function LectureSidebarNav() {
  const { data: lectureList } = useSuspenseQuery(lectureQueries.lectureList(2));

  return (
    <ul className="fixed top-1/2 right-10 -translate-y-1/2">
      {lectureList.map((lecture) => (
        <li key={lecture.id}>
          <Link to={`#lecture-${lecture.id}`}>{lecture.title}</Link>
        </li>
      ))}
    </ul>
  );
}
