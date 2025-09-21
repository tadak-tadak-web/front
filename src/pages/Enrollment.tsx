import { UnEnrolledList, EnrolledList } from '@/features/enrollment/ui';
import { ENROLLMENT_MOCKS } from '@/mocks/enrollment.mock';
import { useEnrollment } from '@/features/enrollment/model';
import clsx from 'clsx';

export default function Enrollment() {
  const { selectedIds, addEnrollment, removeEnrollment, clearAll } =
    useEnrollment();

  // 선택 여부에 따라 나눔
  const unEnrolledLectures = ENROLLMENT_MOCKS.filter(
    lec => !selectedIds.includes(lec.id)
  );
  const enrolledLectures = ENROLLMENT_MOCKS.filter(lec =>
    selectedIds.includes(lec.id)
  );

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
          lectures={unEnrolledLectures}
          onAddLecture={addEnrollment}
        />
        <EnrolledList
          lectures={enrolledLectures}
          onDeleteLecture={removeEnrollment}
          onRemoveAll={clearAll}
        />
      </div>
    </div>
  );
}
