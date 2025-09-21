import type { Enrollment } from '@/entities/enrollment';
import { http, HttpResponse } from 'msw';

export const ENROLLMENT_MOCKS: Enrollment[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/81',
    title: '데이터베이스 시스템',
    professor: '이민수',
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/82',
    title: '네트워크 보안',
    professor: '박철수',
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/83',
    title: '컴퓨터 구조',
    professor: '홍길동',
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/84',
    title: '프론트엔드 개발',
    professor: '조은하',
  },
  {
    id: 5,
    imageUrl: 'https://picsum.photos/85',
    title: '알고리즘 기초',
    professor: '정현욱',
  },
  {
    id: 6,
    imageUrl: 'https://picsum.photos/86',
    title: '컴퓨터 비전',
    professor: '이화영',
  },
];

export const enrollmentHandlers = [
  http.get('/api/enrollment', ({ cookies }) => {
    if (cookies.sessionId === 'abc123') {
      return HttpResponse.json({
        data: ENROLLMENT_MOCKS,
      });
    }

    return HttpResponse.json(
      {
        data: null,
        message: 'Unauthorized',
      },
      { status: 401 }
    );
  }),
];
