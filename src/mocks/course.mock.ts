import type { Course } from "@/entities/course/types";
import { http, HttpResponse } from "msw";

export const courseData: Course[] = [
  {
    id: 1,
    title: "재미있는 리액트 - 상태관리",
    instructor: "김기현 교수자",
    category: "프로그래밍",
    progress: 25,
    currentLecture: 5,
    totalLecture: 20,
    nextLectureTitle: "useState, useEffect를 이용한 상태관리",
    thumbnailUrl: "/images/course-thumb-placeholder.png",
  },
  {
    id: 2,
    title: "초보자를 위한 자바스크립트",
    instructor: "이은지 강사",
    category: "프로그래밍",
    progress: 40,
    currentLecture: 8,
    totalLecture: 20,
    nextLectureTitle: "함수와 클로저 개념 정리",
    thumbnailUrl: "/images/course-thumb-placeholder.png",
  },
  {
    id: 3,
    title: "중수를 위한 자바스크립트",
    instructor: "이은지 강사",
    category: "프로그래밍",
    progress: 40,
    currentLecture: 8,
    totalLecture: 20,
    nextLectureTitle: "함수와 클로저 개념 정리",
    thumbnailUrl: "/images/course-thumb-placeholder.png",
  },
  {
    id: 4,
    title: "고수를 위한 자바스크립트",
    instructor: "이은지 강사",
    category: "프로그래밍",
    progress: 40,
    currentLecture: 8,
    totalLecture: 20,
    nextLectureTitle: "함수와 클로저 개념 정리",
    thumbnailUrl: "/images/course-thumb-placeholder.png",
  },
];

export const courseHandlers = [
  http.get("/api/my-classroom/courses", ({ cookies }) => {
    if (cookies.sessionId === "abc123") {
      return HttpResponse.json({
        data: courseData,
      });
    }

    return HttpResponse.json(
      {
        data: null,
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }),
];
