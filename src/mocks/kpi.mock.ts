import type { Kpi } from '@/entities/kpi/types';
import { http, HttpResponse } from 'msw';

export const kpiMockData: Kpi[] = [
  {
    id: 'progress',
    title: '진행한 강의',
    value: 3,
    diff: 1,
  },
  {
    id: 'completed',
    title: '완료한 강의',
    value: 2,
    diff: -1,
  },
  {
    id: 'submitted',
    title: '학습 시간',
    value: 5,
    diff: 0,
  },
  {
    id: 'certified',
    title: '제출한 과제',
    value: 3,
    diff: 1,
  },
];

export const kpiHandlers = [
  http.get('/api/my-classroom/kpis', ({ cookies }) => {
    if (cookies.sessionId === 'abc123') {
      return HttpResponse.json({
        data: kpiMockData,
      });
    }

    return HttpResponse.json(
      {
        data: null,
        message: 'Unauthorized',
      },
      { status: 401 },
    );
  }),
];
