import type { Comment } from '@/entities/board';
interface CommentCardProps {
  comment: Comment;
}

export default function CommentCard({ comment }: CommentCardProps) {
  return (
    <div className="flex items-start gap-3 py-3">
      <img
        src={comment.avatar}
        alt={comment.author}
        className="h-8 w-8 rounded-full mt-1"
      />
      <div className="flex-1">
        <div className="bg-gray-50 rounded-xl px-3 py-2">
          <p className="text-sm font-semibold text-gray-800">
            {comment.author}
          </p>
          <p className="text-sm text-gray-700">{comment.content}</p>
        </div>
      </div>
    </div>
  );
}
