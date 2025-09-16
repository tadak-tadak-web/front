import { http, HttpResponse } from 'msw';

import type { Post } from '@/entities/board/types/post';

const mockPosts: Post[] = [
  {
    id: 1,
    author: '홍길동',
    avatar: '/images/avatar1.png',
    content: '첫 번째 게시글입니다.',
    imageUrl: ['/images/post1-1.png', '/images/post1-2.png'],
    likes: 10,
    comments: 2,
    createdAt: '2024-09-16T10:00:00Z',
    updatedAt: '2024-09-16T10:00:00Z',
  },
  {
    id: 2,
    author: '김철수',
    avatar: '/images/avatar2.png',
    content: '두 번째 게시글입니다.',
    imageUrl: null,
    likes: 5,
    comments: 0,
    createdAt: '2024-09-15T09:00:00Z',
    updatedAt: '2024-09-15T09:00:00Z',
  },
];

// 유저 인증 모킹 (간단히 쿠키로 판별)
function getUserIdFromCookie(cookies: Record<string, string>) {
  // 예시: sessionId가 있으면 '홍길동'으로 간주
  if (cookies.sessionId === 'abc123') return '홍길동';
  if (cookies.sessionId === 'def456') return '김철수';
  return null;
}

export const boardHandlers = [
  // 게시글 등록(Post)
  http.post<object, Post>('/api/board/posts', async ({ request, cookies }) => {
    const userId = getUserIdFromCookie(cookies);
    const body = await request.json();
    const newPost: Post = {
      id: mockPosts.length + 1,
      author: userId ?? body.author ?? '익명',
      avatar: body.avatar ?? '',
      content: body.content ?? '',
      imageUrl: body.imageUrl ?? null,
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockPosts.unshift(newPost);
    return HttpResponse.json({ data: newPost }, { status: 201 });
  }),

  // 게시글 목록 조회
  http.get('/api/board/posts', () => {
    return HttpResponse.json({ data: mockPosts });
  }),

  // 게시글 수정(PUT)
  http.put<object, Partial<Post>>(
    '/api/board/posts/:id',
    async ({ params, request, cookies }) => {
      const userId = getUserIdFromCookie(cookies);
      const { id } = params as { id: string };
      const body = await request.json();
      const postIdx = mockPosts.findIndex(p => p.id === Number(id));
      if (postIdx === -1) {
        return HttpResponse.json({ message: 'Not found' }, { status: 404 });
      }
      if (mockPosts[postIdx].author !== userId) {
        return HttpResponse.json(
          { message: '권한이 없습니다.' },
          { status: 403 }
        );
      }
      mockPosts[postIdx] = {
        ...mockPosts[postIdx],
        ...body,
        updatedAt: new Date().toISOString(),
      };
      return HttpResponse.json({ data: mockPosts[postIdx] });
    }
  ),

  // 게시글 삭제(DELETE)
  http.delete('/api/board/posts/:id', ({ params, cookies }) => {
    const userId = getUserIdFromCookie(cookies);
    const { id } = params;
    const postIdx = mockPosts.findIndex(p => p.id === Number(id));
    if (postIdx === -1) {
      return HttpResponse.json({ message: 'Not found' }, { status: 404 });
    }
    if (mockPosts[postIdx].author !== userId) {
      return HttpResponse.json(
        { message: '권한이 없습니다.' },
        { status: 403 }
      );
    }
    mockPosts.splice(postIdx, 1);
    return HttpResponse.json({ message: '삭제되었습니다.' });
  }),
];
