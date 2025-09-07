export default function CommentForm() {
  return (
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
        className="inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-r-md shadow-sm text-white bg-primary-blue
                         hover:bg-secondary-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        게시
      </button>
    </form>
  );
}
