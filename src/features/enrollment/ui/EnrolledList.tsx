import EnrollmentCard from './EnrollmentCard';
import type { EnrollmentData } from '@/entities/enrollment';
import clsx from 'clsx';

interface EnrolledListProps {
  lectures: EnrollmentData[];
  onDeleteLecture: (lecture: EnrollmentData) => void;
  onRemoveAll: () => void;
}

export default function EnrolledList({
  lectures,
  onDeleteLecture,
  onRemoveAll,
}: EnrolledListProps) {
  function handleRegisterClick(lectures: EnrollmentData[]) {
    if (lectures.length === 0) {
      alert('강의를 선택하세요!');
      return;
    }

    const lectureList = lectures.map(l => `- ${l.title}`).join('\n');
    alert(`다음 강의를 신청합니다:\n${lectureList}`);
  }

  return (
    <aside className={clsx('w-[460px]', 'flex-shrink-0', 'space-y-6')}>
      <div className={clsx('flex', 'justify-between', 'items-center', 'mr-2')}>
        <h2 className={clsx('text-3xl', 'font-semibold', 'text-gray-800')}>
          선택한 강의
        </h2>
        {lectures.length > 0 && (
          <button
            onClick={onRemoveAll}
            className={clsx(
              'px-3',
              'py-1',
              'bg-red-500',
              'text-white',
              'text-sm',
              'rounded-md',
              'hover:bg-red-600',
              'transition'
            )}
          >
            모두 삭제
          </button>
        )}
      </div>

      {lectures.map(lecture => (
        <EnrollmentCard
          key={lecture.id}
          imageUrl={lecture.imageUrl}
          title={lecture.title}
          professor={lecture.professor}
          variant="enrolled"
          onActionClick={() => onDeleteLecture(lecture)}
        />
      ))}

      <button
        onClick={() => handleRegisterClick(lectures)}
        className={clsx(
          'w-full',
          'py-3',
          'bg-blue-700',
          'text-white',
          'font-semibold',
          'rounded-md',
          'hover:bg-black',
          'transition'
        )}
      >
        등록하기
      </button>
    </aside>
  );
}
