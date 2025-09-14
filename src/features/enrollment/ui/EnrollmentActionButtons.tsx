import clsx from 'clsx';

interface EnrollmentActionButtonsProps {
  variant: 'enroll' | 'enrolled';
  onPlanClick?: () => void;
  onActionClick?: () => void;
}

export default function EnrollmentActionButtons({
  variant,
  onPlanClick,
  onActionClick,
}: EnrollmentActionButtonsProps) {
  return variant === 'enroll' ? (
    <div
      className={clsx(
        'flex',
        'flex-nowrap',
        'items-center',
        'gap-2',
        'whitespace-nowrap',
        'flex-shrink-0'
      )}
    >
      <button
        onClick={onPlanClick}
        className={clsx(
          'px-4',
          'py-2',
          'bg-gray-100',
          'text-gray-700',
          'text-sm',
          'font-medium',
          'rounded-md',
          'hover:bg-gray-200',
          'transition'
        )}
      >
        강의 계획서
      </button>
      <button
        onClick={onActionClick}
        className={clsx(
          'px-4',
          'py-2',
          'bg-blue-700',
          'text-white',
          'text-sm',
          'font-medium',
          'rounded-md',
          'hover:bg-blue-600',
          'transition'
        )}
      >
        추가
      </button>
    </div>
  ) : (
    <div className={clsx('flex-shrink-0')}>
      <button
        onClick={onActionClick}
        className={clsx(
          'px-4',
          'py-2',
          'text-sm',
          'font-medium',
          'rounded-md',
          'whitespace-nowrap',
          'transition',
          'text-white',
          'bg-red-500',
          'hover:bg-red-600'
        )}
      >
        삭제
      </button>
    </div>
  );
}
