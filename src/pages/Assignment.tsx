import { AssignmentHeader } from '@/features/assignment';

export default function Assignment() {
  return (
    <main className="min-h-screen bg-gray-100 p-8" aria-labelledby="page-title">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <AssignmentHeader />
        <section
          className="p-6 md:p-8 mb-4"
          aria-labelledby="submission-heading"
        >
          <h2
            id="submission-heading"
            className="text-xl font-semibold text-gray-800 mb-6"
          >
            과제 제출
          </h2>
          <form>
            {/* 파일 업로드 영역 */}
            <div className="mb-6">
              <label
                htmlFor="file-upload"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                파일 업로드
              </label>
              <div
                className="mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md
                           hover:border-blue-400 transition-colors duration-200 cursor-pointer"
              >
                {/* ... (내부 SVG 및 텍스트는 이전과 동일) ... */}
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m-4-4v2M16 16h2v2h-2v-2z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>파일 선택</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">또는 파일을 드래그하세요.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 제출 관련 액션 버튼 및 점수 입력 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <button
                type="button"
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white
                           hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-4 md:mb-0"
              >
                다운로드
              </button>
              <div className="flex items-center">
                <label
                  htmlFor="score"
                  className="block text-sm font-medium text-gray-700 mr-2"
                >
                  점수
                </label>
                <input
                  type="text"
                  name="score"
                  id="score"
                  className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                />
              </div>
            </div>
          </form>
        </section>

        {/* 댓글 섹션 */}
        <section
          className="p-6 md:p-8 border-t"
          aria-labelledby="comments-heading"
        >
          <h2
            id="comments-heading"
            className="text-xl font-semibold text-gray-800 mb-6"
          >
            댓글
          </h2>

          {/* 댓글 입력 폼 */}
          <form className="flex mb-6">
            <label htmlFor="comment-input" className="sr-only">
              댓글 입력
            </label>
            <input
              id="comment-input"
              type="text"
              placeholder="댓글을 입력하세요"
              className="flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5"
            />
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-r-md shadow-sm text-white bg-blue-600
                         hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              게시
            </button>
          </form>

          {/* 댓글 목록 */}
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
            {/* 추가 댓글은 이 <article>을 반복하여 렌더링 */}
          </div>
        </section>
      </div>
    </main>
  );
}
