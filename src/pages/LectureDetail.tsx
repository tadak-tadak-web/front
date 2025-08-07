import { DetailHeader, WeeklyLectureSection } from '@/features/lecture-detail';
import { LectureNav } from '@/widgets';

export default function LectureDetail() {
  return (
    <>
      <DetailHeader />
      <section className="bg-[#f9f8f6] w-full h-full flex flex-col items-center justify-center">
        <LectureNav />
        <WeeklyLectureSection />
      </section>
    </>
  );
}
