import { useSuspenseQuery } from "@tanstack/react-query";
import { kpiQueries } from "@/entities/kpi/kpiQueries";

export function useKpi() {
  return useSuspenseQuery(kpiQueries.kpiData());
}
