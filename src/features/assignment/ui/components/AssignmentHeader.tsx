export default function AssignmentHeader() {
  return (
    <header className="p-6 md:p-8 border-b">
      <p className="text-gray-500 text-sm font-medium">과제제출</p>
      <h1
        id="page-title"
        className="text-2xl font-bold text-gray-800 mt-4 mb-2"
      >
        웹 프론트엔드 기초
      </h1>
      <div className="flex items-center text-gray-600 text-sm">
        <span className="mr-2">N주차 과제</span>
        <span
          className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
          aria-label="제출 완료"
        >
          제출완료
        </span>
      </div>
      <p className="text-gray-500 text-sm mt-2">...</p>{' '}
      {/* 추가 정보 (예: 마감일 등) */}
    </header>
  );
}
