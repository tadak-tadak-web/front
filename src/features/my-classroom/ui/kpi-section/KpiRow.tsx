import { useKpi } from "@/entities/kpi/hooks/useKpi";
import KpiCard from "./KpiCard";

export default function KpiRow() {
  const { data } = useKpi();

  return (
    <div className="flex flex-nowrap gap-5 overflow-x-auto">
      {(data ?? []).map((kpi) => (
        <KpiCard key={kpi.id} kpi={kpi} />
      ))}
    </div>
  );
}
