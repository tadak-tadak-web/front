import { lectureQueries } from '@/entities/lecture';
import { useRefMap } from '@/features/lecture-detail/hooks';
import { useHashScroll } from '@/features/lecture-detail/hooks/useHashScroll';
import { LectureDetailInfoCard } from '@/features/lecture-detail/ui/components';
import LectureItemList from '@/features/lecture-detail/ui/LectureItemList';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function LectureList() {
  const { data: lectureList } = useSuspenseQuery(lectureQueries.lectureList(2));
  const { refMap, registerRef } = useRefMap();
  useHashScroll(refMap, {
    behavior: 'smooth',
    block: 'start',
  });

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
}
