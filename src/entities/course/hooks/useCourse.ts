import { useQuery } from "@tanstack/react-query";
import getCourseData from "@/entities/course/apis/getCourseData";

export function useCourse() {
  return useQuery({
    queryKey: ["courseData"],
    queryFn: getCourseData,
  });
}
