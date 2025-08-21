import { delay, http, HttpResponse } from 'msw';
// lectures.mock.ts
const LECTURE_MOCKS = [
  {
    id: 1,
    week: 1,
    title: '운영체제와 컴퓨터 시스템 개요',
    thumbnailUrl: '/images/os-week1.png',
    progress: 100,
    stats: { videos: 2, assignments: 1, materials: 1 },
    items: [
      { id: 'v1', type: 'video', title: '강의 1', completed: true },
      { id: 'v2', type: 'video', title: '강의 2', completed: true },
      { id: 'm1', type: 'material', title: '자료 1', completed: true },
      { id: 'a1', type: 'assignment', title: '과제 1', completed: true },
    ],
  },
  {
    id: 2,
    week: 2,
    title: '프로세스와 스레드',
    thumbnailUrl: '/images/os-week2.png',
    progress: 80,
    stats: { videos: 3, assignments: 1, materials: 1 },
    items: [
      { id: 'v1', type: 'video', title: '강의 1', completed: true },
      { id: 'v2', type: 'video', title: '강의 2', completed: true },
      { id: 'v3', type: 'video', title: '강의 3', completed: false },
      { id: 'm1', type: 'material', title: '자료 1', completed: false },
      { id: 'a1', type: 'assignment', title: '과제 1', completed: false },
    ],
  },
  {
    id: 3,
    week: 3,
    title: '프로세스 동기화',
    thumbnailUrl: '/images/os-week3.png',
    progress: 60,
    stats: { videos: 2, assignments: 1, materials: 2 },
    items: [
      { id: 'v1', type: 'video', title: '강의 1', completed: true },
      { id: 'v2', type: 'video', title: '강의 2', completed: false },
      { id: 'm1', type: 'material', title: '자료 1', completed: true },
      { id: 'm2', type: 'material', title: '자료 2', completed: false },
      { id: 'a1', type: 'assignment', title: '과제 1', completed: false },
    ],
  },
  {
    id: 4,
    week: 4,
    title: 'CPU 스케줄링',
    thumbnailUrl: '/images/os-week4.png',
    progress: 40,
    stats: { videos: 3, assignments: 1, materials: 0 },
    items: [
      { id: 'v1', type: 'video', title: '강의 1', completed: true },
      { id: 'v2', type: 'video', title: '강의 2', completed: false },
      { id: 'v3', type: 'video', title: '강의 3', completed: false },
      { id: 'a1', type: 'assignment', title: '과제 1', completed: false },
    ],
  },
  {
    id: 5,
    week: 5,
    title: '메모리 관리 기초',
    thumbnailUrl: '/images/os-week5.png',
    progress: 20,
    stats: { videos: 2, assignments: 0, materials: 1 },
    items: [
      { id: 'v1', type: 'video', title: '강의 1', completed: true },
      { id: 'v2', type: 'video', title: '강의 2', completed: false },
      { id: 'm1', type: 'material', title: '자료 1', completed: false },
    ],
  },
  {
    id: 6,
    week: 6,
    title: '가상 메모리',
    thumbnailUrl: '/images/os-week6.png',
    progress: 0,
    stats: { videos: 3, assignments: 1, materials: 1 },
    items: [
      { id: 'v1', type: 'video', title: '강의 1', completed: false },
      { id: 'v2', type: 'video', title: '강의 2', completed: false },
      { id: 'v3', type: 'video', title: '강의 3', completed: false },
      { id: 'm1', type: 'material', title: '자료 1', completed: false },
      { id: 'a1', type: 'assignment', title: '과제 1', completed: false },
    ],
  },
  {
    id: 7,
    week: 7,
    title: '파일 시스템',
    thumbnailUrl: '/images/os-week7.png',
    progress: 0,
    stats: { videos: 2, assignments: 1, materials: 1 },
    items: [
      { id: 'v1', type: 'video', title: '강의 1', completed: false },
      { id: 'v2', type: 'video', title: '강의 2', completed: false },
      { id: 'm1', type: 'material', title: '자료 1', completed: false },
      { id: 'a1', type: 'assignment', title: '과제 1', completed: false },
    ],
  },
  {
    id: 8,
    week: 8,
    title: '입출력 시스템',
    thumbnailUrl: '/images/os-week8.png',
    progress: 0,
    stats: { videos: 3, assignments: 1, materials: 2 },
    items: [
      { id: 'v1', type: 'video', title: '강의 1', completed: false },
      { id: 'v2', type: 'video', title: '강의 2', completed: false },
      { id: 'v3', type: 'video', title: '강의 3', completed: false },
      { id: 'm1', type: 'material', title: '자료 1', completed: false },
      { id: 'm2', type: 'material', title: '자료 2', completed: false },
      { id: 'a1', type: 'assignment', title: '과제 1', completed: false },
    ],
  },
];

export const lectureHandlers = [
  http.get('/api/lecture/:id', async ({ cookies }) => {
    if (cookies.sessionId === 'abc123') {
      return HttpResponse.json({ data: LECTURE_MOCKS });
    }
    await delay(10000);
    return HttpResponse.json(
      {
        data: null,
        message: 'Unauthorized',
      },
      { status: 401 }
    );
  }),
];
