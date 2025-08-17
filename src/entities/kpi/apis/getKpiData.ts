import { api } from "@/shared";
import type { Kpi } from "@/entities/kpi/types";

export default async function getKpiData(): Promise<Kpi[]> {
  const response = await api.get("kpi").json<{ data: Kpi[] }>();
  return response.data;
}
