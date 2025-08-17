import { useQuery } from "@tanstack/react-query";
import getCourse from "@/entities/course/apis/getCourse";

export function useCourse() {
  return useQuery({
    queryKey: ["courseData"],
    queryFn: getCourse,
  });
}
