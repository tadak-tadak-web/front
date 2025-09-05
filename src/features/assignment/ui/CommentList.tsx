export default function CommentList() {
  return (
    <div className="space-y-4">
      <article className="flex items-start">
        <div className="flex-shrink-0">
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600 font-bold">
            JS
          </div>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">학생이름</p>
          <p className="text-sm text-gray-600">댓글 내용</p>
        </div>
      </article>
    </div>
  );
}
