import { useQuery } from "@tanstack/react-query";
import { courseQueries } from "@/entities/course/courseQueries";

export function useCourse() {
  return useQuery(courseQueries.courseData());
}
