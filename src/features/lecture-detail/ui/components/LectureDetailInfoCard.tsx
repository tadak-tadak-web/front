import { LectureProgressBar } from '@/features/lecture-detail';

interface LectureResourceCounts {
  videos: number;
  assignments: number;
  materials: number;
}

interface LectureDetailInfoCardProps {
  weekNumber: number;
  title: string;
  progress: number;
  resourceCounts: LectureResourceCounts;
}

export default function LectureDetailInfoCard({
  title,
  weekNumber,
  progress,
  resourceCounts,
}: LectureDetailInfoCardProps) {
  return (
    <article className="flex w-full" aria-label={`강의 정보 - ${title}`}>
      <img
        className="h-auto max-w-full hidden lg:block "
        src="/강의 썸네일.png"
        alt={`${title} 썸네일`}
      />
      <div className="flex ml-0 lg:ml-8 w-full flex-col justify-between">
        <main className="flex justify-between items-center w-full mb-3 lg:mb-0">
          <h2 className="text-xl lg:text-3xl font-bold">{weekNumber}주차</h2>
          <dl className="text-sm text-gray-500 space-x-2 flex">
            <div>
              <dt className="sr-only">영상</dt>
              <dd>영상 {resourceCounts.videos}</dd>
            </div>
            <span className="text-gray-500">/</span>
            <div>
              <dt className="sr-only">과제</dt>
              <dd>과제 {resourceCounts.assignments}</dd>
            </div>
            <span className="text-gray-500">/</span>
            <div>
              <dt className="sr-only">자료</dt>
              <dd>자료 {resourceCounts.materials}</dd>
            </div>
          </dl>
        </main>

        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full mb-3">
            <h3 className="text-2xl">{title}</h3>
            <p className="text-2xl font-bold self-end lg:self-auto">
              {progress}%
            </p>
          </div>
          <LectureProgressBar progress={progress} />
        </div>
      </div>
    </article>
  );
}
