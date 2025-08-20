import { authHandlers } from '@/mocks/auth.mock';
import { courseHandlers } from '@/mocks/course.mock';
import { kpiHandlers } from '@/mocks/kpi.mock';
export const handlers = [...authHandlers, ...kpiHandlers, ...courseHandlers];
