import {
  DetailHeader,
  LectureList,
  LectureSidebarNav,
  useHashScroll,
  useRefMap,
  WeeklyLectureSection,
} from '@/features/lecture-detail';
import { LectureNav } from '@/widgets';

export default function LectureDetail() {
  const { refMap, registerRef } = useRefMap();
  useHashScroll(refMap, {
    behavior: 'smooth',
    block: 'start',
  });

  return (
    <>
      <DetailHeader />
      <section className="lg:bg-[#f9f8f6] px-7 lg:px-7 bg-white w-full h-full flex flex-col items-center justify-center">
        <LectureNav />
        <WeeklyLectureSection registerRef={registerRef} />
        <LectureList registerRef={registerRef} />
      </section>
      <LectureSidebarNav />
    </>
  );
}
