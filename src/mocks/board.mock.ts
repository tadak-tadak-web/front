import { http, HttpResponse } from 'msw';

import type { Post } from '@/entities/board/types/post';

const mockPosts: Post[] = [
  {
    id: 1,
    author: '홍길동',
    avatar: '/images/avatar1.png',
    content: '첫 번째 게시글입니다.',
    imageUrl: [
      'data:image/jpeg;base64,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',
      '/images/post1-2.png',
    ],
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
  http.post('/api/files/upload', async ({ request, cookies }) => {
    // 1. 유저 인증 확인
    const userId = getUserIdFromCookie(cookies);
    if (!userId) {
      return HttpResponse.json(
        { message: '권한이 없습니다.' },
        { status: 403 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file'); // 클라이언트에서 'file'이라는 키로 보냈다고 가정

    // 3. 파일 유효성 검사
    if (!file || !(file instanceof File)) {
      return HttpResponse.json(
        { message: '파일이 올바르지 않습니다.' },
        { status: 400 }
      );
    }

    // 4. 모킹: 실제 업로드 대신, 가짜 URL 생성
    // 파일 이름과 현재 시간을 조합하여 고유한 URL처럼 보이게 만듭니다.
    const mockFileUrl = `/uploads/mock-${Date.now()}-${file.name}`;

    console.log(`[MSW] Mock file uploaded: ${file.name} -> ${mockFileUrl}`);

    // 5. 성공 응답 반환 (업로드된 파일의 URL 포함)
    return HttpResponse.json(
      {
        data: {
          url: mockFileUrl,
        },
      },
      { status: 201 } // 201 Created
    );
  }),
];
