import { api } from "@/shared";
import type { Course } from "@/entities/course/types";

export default async function getCourse(): Promise<Course[]> {
  const response = await api
    .get("my-classroom/courses")
    .json<{ data: Course[] }>();
  return response.data;
}
