import { Card } from '@/shared/ui/Card';
import type { Kpi } from '@/entities/kpi/types';
import { ICON_MAP } from '@/shared/constants/pages';
import type { KpiIconMap } from '@/shared/constants/pages';

interface KpiCardProps {
  kpi: Kpi;
}

export default function KpiCard({ kpi }: KpiCardProps) {
  const { title, value, diff } = kpi;
  const Icon = ICON_MAP[title as KpiIconMap];
  const isPositive = diff >= 0;

  return (
    <Card className="flex flex-col flex-1 min-w-[260px] gap-3 p-4 rounded-xl shadow-sm border-2 border-gray-100 bg-white">
      <div className="flex justify-between items-center gap-2">
        <span className="text-md text-gray-500 font-bold">{title}</span>
        <Icon className="w-8 h-8 text-gray-400" />
      </div>

      <div className="flex flex-col gap-1">
        <strong className="text-2xl font-semibold text-gray-800">
          {value}
        </strong>
        <span className="text-sm">
          {isPositive ? '+' : '-'}
          {Math.abs(diff)} 지난 달 대비
        </span>
      </div>
    </Card>
  );
}
