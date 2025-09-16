import { boardQueries } from '@/entities/board';
import { PostCard } from '@/features/board';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function PostList() {
  const { data: postList } = useSuspenseQuery(boardQueries.postList());
  return (
    <div className="space-y-4">
      {postList.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
