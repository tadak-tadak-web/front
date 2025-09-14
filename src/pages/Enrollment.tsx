import { UnEnrolledList, EnrolledList } from '@/features/enrollment/ui';
import { enrollmentMockData } from '@/mocks/enrollment.mock';
import { useEnrollment } from '@/features/enrollment/model';
import clsx from 'clsx';

export default function Enrollment() {
  const {
    availableLectures,
    enrolledLectures,
    handleAddLecture,
    handleDeleteLecture,
    handleRemoveAll,
  } = useEnrollment(enrollmentMockData);

  return (
    <div
      className={clsx(
        'w-screen',
        'overflow-x-auto',
        'bg-gray-50',
        'min-h-screen'
      )}
    >
      <div
        className={clsx(
          'flex',
          'flex-nowrap',
          'gap-6',
          'px-6',
          'py-8',
          'min-w-[1280px]',
          'items-start'
        )}
      >
        <UnEnrolledList
          lectures={availableLectures}
          onAddLecture={handleAddLecture}
        />
        <EnrolledList
          lectures={enrolledLectures}
          onDeleteLecture={handleDeleteLecture}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
}
