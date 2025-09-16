import clsx from 'clsx';
import { Header } from '@/widgets';
import { PostForm, PostList } from '@/features/board';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/shared';

export default function Board() {
  return (
    <div className={clsx('bg-gray-50', 'min-h-screen', 'font-sans')}>
      <Header />
      <main className={clsx('max-w-4xl', 'mx-auto', 'p-4', 'sm:p-6')}>
        <h2 className="text-2xl font-bold text-gray-900 mb-5">게시판</h2>
        <PostForm />
        <Suspense
          fallback={
            <div className="w-full flex justify-center">
              <LoadingSpinner />
            </div>
          }
        >
          <PostList />
        </Suspense>
      </main>
    </div>
  );
}
