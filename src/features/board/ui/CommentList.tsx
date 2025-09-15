import { CommentCard } from '@/features/board';
import type { Comment } from '@/entities/board';

const MOCK_COMMENTS: Comment[] = [
  {
    postId: 1,
    id: 101,
    author: '김민준',
    avatar: 'https://i.pravatar.cc/150?u=minjun',
    content: '정말 유용한 정보네요! 감사합니다.',
  },
  {
    postId: 1,
    id: 102,
    author: '이서연',
    avatar: 'https://i.pravatar.cc/150?u=seoyeon',
    content: '혹시 관련해서 참고할 만한 다른 자료도 있을까요?',
  },
  {
    postId: 1,
    id: 103,
    author: '박지훈',
    avatar: 'https://i.pravatar.cc/150?u=jihoon',
    content: '덕분에 과제 잘 해결했습니다. 👍',
  },
  {
    postId: 1,
    id: 104,
    author: '최수아',
    avatar: 'https://i.pravatar.cc/150?u=suah',
    content: '설명이 정말 명확하고 이해하기 쉬워요.',
  },
];
export default function CommentList() {
  return (
    <div className="border-t border-gray-200 mt-4 pt-2">
      <div>
        {MOCK_COMMENTS.map(comment => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
