import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import { type Post } from '@/entities/board';
import {
  CommentForm,
  CommentList,
  Editor,
  PostDropdown,
  useDeletePost,
  useEditPost,
} from '@/features/board';
import { formatRelativeTime } from '@/shared';
import { useAuth } from '@/entities/user/hooks/useAuth';
import { useState } from 'react';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [editedContent, setEditedContent] = useState(post.content);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { editMutate } = useEditPost();
  const { deleteMutate } = useDeletePost();
  const user = useAuth();

  const isAuthor = user.id === post.authorId;

  const handleDelete = () => {
    if (confirm('정말로 이 게시물을 삭제하시겠습니까?')) {
      deleteMutate(post.id);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editMutate(
      {
        content: editedContent,
        authorId: user.id,
        author: user.nickname,
        id: post.id,
      },
      {
        onSettled() {
          setIsEditing(false);
        },
      }
    );
  };

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
        <div className="relative">
          {isAuthor && (
            <button
              className=" text-gray-400 hover:text-gray-600"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <EllipsisHorizontalIcon className="relative right-5 w-5" />
            </button>
          )}
          <PostDropdown
            isDropdownOpen={isDropdownOpen}
            setIsEditing={setIsEditing}
            handleDelete={handleDelete}
          />
        </div>
      </div>

      <div className="ml-15 pl-1">
        <form className="text-gray-800 mb-3" onSubmit={handleSubmit}>
          <Editor
            onChange={setEditedContent}
            isEditable={isEditing}
            value={editedContent}
          />
        </form>
        <div className="flex items-center justify-end gap-4 px-5 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <HeartIcon className="h-4 w-4" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center  gap-1">
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
