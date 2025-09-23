import clsx from 'clsx';
import EnrollmentCard from './EnrollmentCard';
import type { Enrollment, Syllabus } from '@/entities/enrollment';

interface UnEnrolledListProps {
  lectures: Enrollment[];
  onAddLecture: (lectureId: number) => void;
  onPlanClick: (syllabus: Syllabus) => void;
}

export default function UnEnrolledList({
  lectures,
  onAddLecture,
  onPlanClick,
}: UnEnrolledListProps) {
  return (
    <section className={clsx('w-[750px]', 'space-y-6')}>
      <h1 className={clsx('text-3xl', 'font-semibold', 'text-gray-800')}>
        강의 목록
      </h1>

      {lectures.map(lecture => (
        <EnrollmentCard
          key={lecture.id}
          imageUrl={lecture.imageUrl}
          title={lecture.title}
          professor={lecture.professor}
          variant="enroll"
          onPlanClick={() => onPlanClick(lecture.syllabus)}
          onActionClick={() => onAddLecture(lecture.id)}
        />
      ))}
    </section>
  );
}
