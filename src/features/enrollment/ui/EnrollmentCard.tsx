import clsx from 'clsx';

interface LectureCardProps {
  imageUrl: string;
  title: string;
  professor: string;
  variant: 'enroll' | 'enrolled';
  onPlanClick?: () => void;
  onActionClick?: () => void;
}

export default function LectureCard({
  imageUrl,
  title,
  professor,
  variant,
  onPlanClick,
  onActionClick,
}: LectureCardProps) {
  return (
    <div
      className={clsx(
        'flex',
        'items-center',
        'gap-6',
        'p-5',
        'bg-white',
        'rounded-xl',
        'shadow-sm',
        'ring-1',
        'ring-gray-200',
        'hover:shadow-md',
        'transition',
        'w-full'
      )}
    >
      {/* 이미지 */}
      <img
        src={imageUrl}
        alt="교수 프로필"
        className={clsx('w-[80px]', 'h-[80px]', 'rounded-full', 'object-cover')}
      />

      {/* 텍스트 + 버튼 영역 */}
      <div
        className={clsx(
          'flex',
          'justify-between',
          'items-center',
          'w-full',
          'gap-4',
          'min-w-0'
        )}
      >
        {/* 텍스트 */}
        <div
          className={clsx(
            'flex',
            'flex-col',
            'justify-center',
            'flex-grow',
            'min-w-0'
          )}
        >
          <h2
            className={clsx(
              'truncate',
              'text-gray-900',
              'font-semibold',
              variant === 'enroll' ? 'text-xl' : 'text-lg'
            )}
          >
            {title}
          </h2>
          <p className={clsx('text-sm', 'text-gray-500', 'mt-1')}>
            {professor} 교수
          </p>
        </div>

        {/* 버튼 */}
        {variant === 'enroll' ? (
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
        )}
      </div>
    </div>
  );
}
