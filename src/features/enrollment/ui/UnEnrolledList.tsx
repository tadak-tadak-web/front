import clsx from 'clsx';
import EnrollmentCard from './EnrollmentCard';
import type { EnrollmentData } from '@/entities/enrollment';

interface UnEnrolledListProps {
  lectures: EnrollmentData[];
  onAddLecture: (lecture: EnrollmentData) => void;
}

export default function UnEnrolledList({
  lectures,
  onAddLecture,
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
          onPlanClick={() => alert('강의 계획서')}
          onActionClick={() => onAddLecture(lecture)}
        />
      ))}
    </section>
  );
}
