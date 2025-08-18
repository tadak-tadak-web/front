import { useSuspenseQuery } from "@tanstack/react-query";
import { courseQueries } from "@/entities/course/courseQueries";

export function useCourse() {
  return useSuspenseQuery(courseQueries.courseData());
}
