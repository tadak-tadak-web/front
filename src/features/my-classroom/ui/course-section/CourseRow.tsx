import CourseCard from "./CourseCard";
import { useCourse } from "@/entities/course/hooks/useCourse";

export default function CourseRow() {
  const { data } = useCourse();

  return (
    <div className="grid [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] gap-5 px-1 py-4">
      {(data ?? []).map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
