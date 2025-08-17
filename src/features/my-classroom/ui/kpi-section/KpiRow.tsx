import { useKpiData } from "@/entities/kpi/hooks/useKpiData";
import KpiCard from "./KpiCard";
import { LoadingSpinner } from "@/shared";

export default function KpiRow() {
  const { data, isLoading } = useKpiData();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-nowrap gap-5 overflow-x-auto">
      {(data ?? []).map(({ id, title, value, diff }) => (
        <KpiCard key={id} title={title} value={value} diff={diff} />
      ))}
    </div>
  );
}
