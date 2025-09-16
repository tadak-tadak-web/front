import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import type { Post } from '@/entities/board';
import { CommentForm, CommentList } from '@/features/board';
import { formatRelativeTime } from '@/shared';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md p-5">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <img
            src={post.avatar}
            alt={post.author}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-bold text-gray-800">{post.author}</p>
            <p className="text-xs text-gray-500">
              {formatRelativeTime(post.createdAt, post.updatedAt)}
            </p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <EllipsisHorizontalIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="ml-15 pl-1">
        <p className="text-gray-800 mb-3">{post.content}</p>
        {post.imageUrl &&
          post.imageUrl.map((url, index) => (
            <div className="max-w-xs mb-3" key={url}>
              <img
                src={url}
                alt={`게시물 이미지 ${index + 1}`}
                className="rounded-lg border"
              />
            </div>
          ))}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <HeartIcon className="h-4 w-4" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4" />
            <span>{post.comments}</span>
          </div>
        </div>
      </div>
      <CommentList />
      <CommentForm />
    </article>
  );
}
