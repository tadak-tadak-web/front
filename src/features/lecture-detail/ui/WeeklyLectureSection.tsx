import { type Lecture } from '@/entities/lecture';
import {
  LectureDetailInfoCard,
  LectureItemList,
  withLectureList,
} from '@features/lecture-detail';
import { useParams } from 'react-router-dom';

interface WeeklyLectureSectionProps {
  lectureList: Lecture[];
  registerRef: (node: HTMLElement | null, id: string) => void;
}

const WrappedWeeklyLectureSection = withLectureList(
  function WeeklyLectureSection({
    registerRef,
    lectureList,
  }: WeeklyLectureSectionProps) {
    const { id } = useParams();
    const weeklyLecture =
      lectureList.find((lecture) => lecture.week === Number(id)) ?? null;

    if (!weeklyLecture) return null;

    return (
      <section
        className="w-full lg:w-4xl mt-16"
        ref={(node) => registerRef(node, `weekly-lecture`)}
      >
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
);

export default WrappedWeeklyLectureSection;
