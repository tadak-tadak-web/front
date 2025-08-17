import { authHandlers } from "@/mocks/auth.mock";
import { kpiHandlers } from "@/mocks/kpi.mock";
export const handlers = [...authHandlers, ...kpiHandlers];
