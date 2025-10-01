import { assignmentHandler } from '@/mocks/assignment.mock';
import { authHandlers } from '@/mocks/auth.mock';
import { boardHandlers } from '@/mocks/board.mock';
import { courseHandlers } from '@/mocks/course.mock';
import { enrollmentHandlers } from '@/mocks/enrollment.mock';
import { kpiHandlers } from '@/mocks/kpi.mock';
import { lectureHandlers } from '@/mocks/lecture.mock';
export const handlers = [
  ...authHandlers,
  ...kpiHandlers,
  ...courseHandlers,
  ...lectureHandlers,
  ...assignmentHandler,
  ...boardHandlers,
  ...enrollmentHandlers,
];
