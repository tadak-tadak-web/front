import { useKpi } from "@/entities/kpi/hooks/useKpi";
import KpiCard from "./KpiCard";
import { LoadingSpinner } from "@/shared";

export default function KpiRow() {
  const { data, isLoading } = useKpi();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-nowrap gap-5 overflow-x-auto">
      {(data ?? []).map((kpi) => (
        <KpiCard key={kpi.id} kpi={kpi} />
      ))}
    </div>
  );
}
