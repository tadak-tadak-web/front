import { useSuspenseQuery } from '@tanstack/react-query';
import CourseCard from './CourseCard';
import { courseQueries } from '@/entities/course';

export default function CourseRow() {
  const { data } = useSuspenseQuery(courseQueries.courseData());

  return (
    <div className="grid [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] gap-5 px-1 py-4">
      {data.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
