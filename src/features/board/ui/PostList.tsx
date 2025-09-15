import type { Post } from '@/entities/board';
import { PostCard } from '@/features/board';

const MOCK_POSTS: Post[] = [
  {
    id: 1,
    author: '공교수',
    avatar: 'https://i.pravatar.cc/150?u=gong',
    time: '3시간 전',
    content: '학사일정표 2학기 것 올리니 참고하세요',
    imageUrl: ['https://placehold.co/600x400'],
    likes: 20,
    comments: 2,
  },
  {
    id: 2,
    author: '김기현',
    avatar: 'https://i.pravatar.cc/150?u=kim',
    time: '1년 전',
    content: '교수님 학사일정표 올려주세요',
    imageUrl: null,
    likes: 0,
    comments: 0,
  },
];

export default function PostList() {
  return (
    <div className="space-y-4">
      {MOCK_POSTS.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
