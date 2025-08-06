import { DetailHeader } from '@/features/lecture-detail';
import { LectureNav } from '@/widgets';

export default function LectureDetail() {
  return (
    <>
      <DetailHeader />
      <section className="bg-[#f9f8f6] w-full h-full flex justify-center">
        <LectureNav />
      </section>
    </>
  );
}
