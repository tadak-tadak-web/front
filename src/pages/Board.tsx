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
        <div
          className={clsx(
            'custom-editor-wrapper',
            'rounded-md',

            '[&_.ProseMirror]:min-h-[150px]',
            '[&_.ProseMirror]:p-3',
            '[&_.ProseMirror]:outline-none',

            '[&_pre]:bg-slate-800',
            '[&_pre]:text-slate-200',
            '[&_pre]:p-4',
            '[&_pre]:rounded-lg',
            '[&_pre]:overflow-x-auto',
            '[&_pre]:my-4',
            '[&_pre>code]:font-mono',
            '[&_pre>code]:text-sm',

            '[&_:not(pre)>code]:bg-gray-200',
            '[&_:not(pre)>code]:text-gray-800',
            '[&_:not(pre)>code]:rounded',
            '[&_:not(pre)>code]:px-1.5',
            '[&_:not(pre)>code]:py-1',
            '[&_:not(pre)>code]:text-[0.9em]',
            '[&_:not(pre)>code]:font-mono',

            // 링크(a) 스타일
            '[&_a]:text-blue-300',
            '[&_a]:underline',
            'hover:[&_a]:text-blue-600'
          )}
        >
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
        </div>
      </main>
    </div>
  );
}
