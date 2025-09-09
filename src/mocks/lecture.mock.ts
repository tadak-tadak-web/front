import { http, HttpResponse } from 'msw';
// lectures.mock.ts
export const LECTURE_MOCKS = [
  {
    id: 1,
    week: 1,
    title: '운영체제와 컴퓨터 시스템 개요',
    thumbnailUrl: '/images/os-week1.png',
    progress: 100,
    itemsByType: {
      videos: [
        { id: 'l1-v1', title: '강의 1', completed: true },
        { id: 'l1-v2', title: '강의 2', completed: true },
      ],
      materials: [{ id: 'l1-m1', title: '자료 1', completed: true }],
      assignments: [{ id: 'l1-a1', title: '과제 1', completed: true }],
    },
    stats: { videos: 2, assignments: 1, materials: 1 },
  },
  {
    id: 2,
    week: 2,
    title: '프로세스와 스레드',
    thumbnailUrl: '/images/os-week2.png',
    progress: 80,
    itemsByType: {
      videos: [
        { id: 'l2-v1', title: '강의 1', completed: true },
        { id: 'l2-v2', title: '강의 2', completed: true },
        { id: 'l2-v3', title: '강의 3', completed: false },
      ],
      materials: [{ id: 'l2-m1', title: '자료 1', completed: false }],
      assignments: [{ id: 'l2-a1', title: '과제 1', completed: false }],
    },
    stats: { videos: 3, assignments: 1, materials: 1 },
  },
  {
    id: 3,
    week: 3,
    title: '프로세스 동기화',
    thumbnailUrl: '/images/os-week3.png',
    progress: 60,
    itemsByType: {
      videos: [
        { id: 'l3-v1', title: '강의 1', completed: true },
        { id: 'l3-v2', title: '강의 2', completed: false },
      ],
      materials: [
        { id: 'l3-m1', title: '자료 1', completed: true },
        { id: 'l3-m2', title: '자료 2', completed: false },
      ],
      assignments: [{ id: 'l3-a1', title: '과제 1', completed: false }],
    },
    stats: { videos: 2, assignments: 1, materials: 2 },
  },
  {
    id: 4,
    week: 4,
    title: 'CPU 스케줄링',
    thumbnailUrl: '/images/os-week4.png',
    progress: 40,
    itemsByType: {
      videos: [
        { id: 'l4-v1', title: '강의 1', completed: true },
        { id: 'l4-v2', title: '강의 2', completed: false },
        { id: 'l4-v3', title: '강의 3', completed: false },
      ],
      materials: [],
      assignments: [{ id: 'l4-a1', title: '과제 1', completed: false }],
    },
    stats: { videos: 3, assignments: 1, materials: 0 },
  },
  {
    id: 5,
    week: 5,
    title: '메모리 관리 기초',
    thumbnailUrl: '/images/os-week5.png',
    progress: 20,
    itemsByType: {
      videos: [
        { id: 'l5-v1', title: '강의 1', completed: true },
        { id: 'l5-v2', title: '강의 2', completed: false },
      ],
      materials: [{ id: 'l5-m1', title: '자료 1', completed: false }],
      assignments: [],
    },
    stats: { videos: 2, assignments: 0, materials: 1 },
  },
  {
    id: 6,
    week: 6,
    title: '가상 메모리',
    thumbnailUrl: '/images/os-week6.png',
    progress: 0,
    itemsByType: {
      videos: [
        { id: 'l6-v1', title: '강의 1', completed: false },
        { id: 'l6-v2', title: '강의 2', completed: false },
        { id: 'l6-v3', title: '강의 3', completed: false },
      ],
      materials: [{ id: 'l6-m1', title: '자료 1', completed: false }],
      assignments: [{ id: 'l6-a1', title: '과제 1', completed: false }],
    },
    stats: { videos: 3, assignments: 1, materials: 1 },
  },
  {
    id: 7,
    week: 7,
    title: '파일 시스템',
    thumbnailUrl: '/images/os-week7.png',
    progress: 0,
    itemsByType: {
      videos: [
        { id: 'l7-v1', title: '강의 1', completed: false },
        { id: 'l7-v2', title: '강의 2', completed: false },
      ],
      materials: [{ id: 'l7-m1', title: '자료 1', completed: false }],
      assignments: [{ id: 'l7-a1', title: '과제 1', completed: false }],
    },
    stats: { videos: 2, assignments: 1, materials: 1 },
  },
  {
    id: 8,
    week: 8,
    title: '입출력 시스템',
    thumbnailUrl: '/images/os-week8.png',
    progress: 0,
    itemsByType: {
      videos: [
        { id: 'l8-v1', title: '강의 1', completed: false },
        { id: 'l8-v2', title: '강의 2', completed: false },
        { id: 'l8-v3', title: '강의 3', completed: false },
      ],
      materials: [
        { id: 'l8-m1', title: '자료 1', completed: false },
        { id: 'l8-m2', title: '자료 2', completed: false },
      ],
      assignments: [{ id: 'l8-a1', title: '과제 1', completed: false }],
    },
    stats: { videos: 3, assignments: 1, materials: 2 },
  },
];
export const lectureHandlers = [
  http.get('/api/lecture/:id', async ({ cookies }) => {
    if (cookies.sessionId === 'abc123') {
      return HttpResponse.json({ data: LECTURE_MOCKS });
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
