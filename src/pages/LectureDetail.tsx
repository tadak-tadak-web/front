import { DetailHeader, WeeklyLectureSection } from '@/features/lecture-detail';
import { LectureNav } from '@/widgets';

export default function LectureDetail() {
  return (
    <>
      <DetailHeader />
      <section className="lg:bg-[#f9f8f6] px-7 lg:px-7 bg-white w-full h-full flex flex-col items-center justify-center">
        <LectureNav />
        <WeeklyLectureSection />
      </section>
    </>
  );
}
