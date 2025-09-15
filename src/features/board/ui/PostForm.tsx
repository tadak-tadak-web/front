import {
  PhotoIcon,
  PaperClipIcon,
  LinkIcon,
  CodeBracketIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';

export default function PostForm() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
      <textarea
        className="w-full text-gray-700 placeholder-gray-400 border-none focus:ring-0 resize-none"
        rows={3}
        placeholder="글을 작성하세요"
      ></textarea>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-1 text-gray-500">
          <div className="flex items-center gap-1 text-gray-500">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <PhotoIcon className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <PaperClipIcon className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <LinkIcon className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <CodeBracketIcon className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <EllipsisHorizontalIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors">
          업로드
        </button>
      </div>
    </div>
  );
}
