import { clsx } from 'clsx';

interface LectureInfoProps {
  title: string;
  professor: string;
  variant: 'enroll' | 'enrolled';
}

export default function LectureInfo({
  title,
  professor,
  variant,
}: LectureInfoProps) {
  return (
    <div className={clsx('flex flex-col justify-center flex-grow min-w-0')}>
      <h2
        className={clsx(
          'truncate text-gray-900 font-semibold',
          variant === 'enroll' ? 'text-xl' : 'text-lg'
        )}
      >
        {title}
      </h2>
      <p className={clsx('text-sm text-gray-500 mt-1')}>{professor} 교수</p>
    </div>
  );
}
