import { lectureQueries } from '@/entities/lecture';
import {
  LectureDetailInfoCard,
  LectureItemList,
} from '@features/lecture-detail';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function WeeklyLectureSection() {
  const { data: weeklyLecture } = useSuspenseQuery({
    ...lectureQueries.lectureList(2),
    select: (lectures) => lectures.find((l) => l.week === 2) ?? null,
  });

  if (!weeklyLecture) return null;

  return (
    <section className="w-full lg:w-4xl mt-16">
      <header className="py-6 px-7 bg-yellow-50 rounded-t-2xl">
        <h2 className="text-2xl">이번 주 강의</h2>
      </header>
      <section className="bg-white w-full lg:w-4xl px-6 py-8">
        <LectureDetailInfoCard
          title="운영체제를 공부해야하는 이유"
          weekNumber={weeklyLecture.week}
          progress={weeklyLecture.progress}
          resourceCounts={{ ...weeklyLecture.stats }}
        />
        <LectureItemList
          videos={weeklyLecture.itemsByType.videos}
          assignments={weeklyLecture.itemsByType.assignments}
          materials={weeklyLecture.itemsByType.materials}
        />
      </section>
    </section>
  );
}
