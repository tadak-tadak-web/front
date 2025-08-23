import { type Lecture } from '@/entities/lecture';
import { withLectureList } from '@/features/lecture-detail/lib';
import { LectureDetailInfoCard } from '@/features/lecture-detail/ui/components';
import LectureItemList from '@/features/lecture-detail/ui/LectureItemList';
interface LectureListProps {
  registerRef: (node: HTMLElement | null, id: string) => void;
  lectureList: Lecture[];
}

const WrappedLectureList = withLectureList(function LectureList({
  registerRef,
  lectureList,
}: LectureListProps) {
  return (
    <>
      {lectureList.map((lecture) => (
        <section
          className="w-full lg:w-4xl mt-16"
          key={lecture.id}
          id={`lecture-${lecture.id}`}
          ref={(node) => {
            registerRef(node, `lecture-${lecture.id}`);
          }}
        >
          <header className="py-6 px-7 bg-yellow-50 rounded-t-2xl">
            <h2 className="text-2xl">{lecture.title}</h2>
          </header>
          <section className="bg-white w-full lg:w-4xl px-6 py-8">
            <LectureDetailInfoCard
              title={lecture.title}
              weekNumber={lecture.week}
              progress={lecture.progress}
              resourceCounts={{ ...lecture.stats }}
            />
            <LectureItemList
              videos={lecture.itemsByType.videos}
              assignments={lecture.itemsByType.assignments}
              materials={lecture.itemsByType.materials}
            />
          </section>
        </section>
      ))}
    </>
  );
});

export default WrappedLectureList;
