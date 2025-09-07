import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

export default function AssignmentForm() {
  return (
    <form>
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 mb-2">
          파일 업로드
        </label>
        <div
          className="mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md
                           hover:border-blue-400 transition-colors duration-200 cursor-pointer relative"
        >
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="space-y-1 text-center">
            <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none  focus-within:ring-blue-500"
              >
                <span>파일 선택</span>
              </label>
              <p className="pl-1">또는 파일을 드래그하세요.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <button
          type="button"
          className="justify-center py-2 px-4 text-white border-blue-300 border-b-4 shadow-sky-950 shadow- text-sm font-medium rounded-md  bg-primary-blue
                           hover:bg-secondary-blue  focus:outline-none hover:border-secondary-blue mb-4 md:mb-0"
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
            readOnly
            className="block w-20 rounded-md border-gray-300 shadow-sm sm:text-sm p-2"
          />
        </div>
      </div>
    </form>
  );
}
