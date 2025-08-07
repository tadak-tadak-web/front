import {
  LectureDetailInfoCard,
  LectureItemList,
} from '@features/lecture-detail';

export default function WeeklyLectureSection() {
  return (
    <section className="w-full lg:w-4xl mt-16">
      <header className="py-6 px-7 bg-[#FFFACD] rounded-t-2xl">
        <h2 className="text-2xl">이번 주 강의</h2>
      </header>
      <section className="bg-white w-full lg:w-4xl px-6 py-8">
        <LectureDetailInfoCard
          title="운영체제를 공부해야하는 이유"
          weekNumber={16}
          progress={50}
          resourceCounts={{ videos: 3, assignments: 1, materials: 2 }}
        />
        <LectureItemList
          videos={['강의 1', '강의 2', '강의 3']}
          assignments={['과제 1']}
          materials={['자료 1', '자료 2']}
        />
      </section>
    </section>
  );
}
