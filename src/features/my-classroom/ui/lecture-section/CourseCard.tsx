import type { Course } from "@/entities/course/types";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  const {
    title,
    instructor,
    category,
    progress,
    currentLecture,
    totalLecture,
    nextLectureTitle,
    thumbnailUrl,
  } = course;

  return (
    <div className="w-full h-[460px] rounded-xl shadow bg-white flex flex-col justify-between">
      <div
        className="w-full h-[160px] bg-gray-200 rounded-t-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      />

      <div className="flex flex-col justify-between p-5 space-y-3 flex-1">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-lg truncate">{title}</div>
          <div className="text-xs border border-gray-300 rounded-full px-2 py-0.5">
            {category}
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <div className="w-5 h-5 rounded-full bg-gray-300" />
          <div>{instructor}</div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center gap-2 text-sm text-gray-600">
            <span>진행도</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div
              className="h-full bg-gray-600 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center gap-2 text-xs text-gray-400">
            <span>
              {currentLecture}/{totalLecture}강
            </span>
            <span>강의 목표: {totalLecture}강</span>
          </div>
        </div>

        <div className="text-sm text-gray-700">
          다음 강의: {nextLectureTitle}
        </div>

        <button className="mt-4 w-full py-2 bg-black text-white text-sm rounded-md">
          ▶ 계속해서 수강하기
        </button>
      </div>
    </div>
  );
}
