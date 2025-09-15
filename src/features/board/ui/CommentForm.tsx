import clsx from 'clsx';

export default function CommentForm() {
  return (
    <form>
      <div className="mt-4 border-t border-gray-100 pt-4">
        <input
          type="text"
          placeholder="댓글을 작성하세요..."
          className={clsx(
            'w-full',
            'border-2 border-gray-200',
            'rounded-xl',
            'px-4 py-2',
            'text-sm',
            'focus:outline-none',
          )}
        />
      </div>
    </form>
  );
}
