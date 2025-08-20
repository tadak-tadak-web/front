import KpiCard from './KpiCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import { kpiQueries } from '@/entities/kpi';

export default function KpiRow() {
  const { data } = useSuspenseQuery(kpiQueries.kpiData());

  return (
    <div className="flex flex-nowrap gap-5 overflow-x-auto">
      {data.map(kpi => (
        <KpiCard key={kpi.id} kpi={kpi} />
      ))}
    </div>
  );
}
