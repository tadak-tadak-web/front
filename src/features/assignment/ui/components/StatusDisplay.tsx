// FileCard.tsx 파일 상단이나 별도의 파일에 만들어도 좋습니다.
import {
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
export default function StatusDisplay({ status }: { status?: string }) {
  if (status === 'uploading') {
    return (
      <div className="flex items-center gap-1 text-sm text-gray-500">
        <ArrowPathIcon className="size-4 animate-spin" />
        <span>업로드 중...</span>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex items-center gap-1 text-sm text-red-500">
        <ExclamationCircleIcon className="size-4" />
        <span>업로드 실패</span>
      </div>
    );
  }

  // 'success' 상태 또는 status 값이 없을 때
  return (
    <div className="flex items-center gap-1 text-sm text-green-600">
      <CheckCircleIcon className="size-4" />
      <span>제출 완료</span>
    </div>
  );
}
