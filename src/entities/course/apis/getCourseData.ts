import { api } from "@/shared";
import type { Course } from "@/entities/course/types";

export default async function getCourseData(): Promise<Course[]> {
  const response = await api.get("course").json<{ data: Course[] }>();
  return response.data;
}
