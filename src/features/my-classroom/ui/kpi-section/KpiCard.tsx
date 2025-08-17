import {
  BookOpenIcon,
  ClipboardDocumentListIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/shared/ui/Card";
import type { Kpi } from "@/entities/kpi/types";

interface KpiCardProps {
  kpi: Kpi;
}

const iconMap: Record<string, React.ElementType> = {
  "진행한 강의": BookOpenIcon,
  "완료한 강의": ClipboardDocumentListIcon,
  "학습 시간": AcademicCapIcon,
  "제출한 과제": DocumentCheckIcon,
};

export default function KpiCard({ kpi }: KpiCardProps) {
  const { title, value, diff } = kpi;
  const Icon = iconMap[title] || BookOpenIcon;
  const isPositive = diff >= 0;

  return (
    <Card className="flex flex-col flex-1 min-w-[260px] gap-3 p-4 rounded-xl shadow-sm border-2 border-gray-200 bg-white">
      <div className="flex justify-between items-center gap-2">
        <span className="text-md text-gray-500 font-bold">{title}</span>
        <Icon className="w-8 h-8 text-gray-400" />
      </div>

      <div className="flex flex-col gap-1">
        <strong className="text-2xl font-semibold text-gray-800">
          {value}
        </strong>
        <span className="text-sm">
          {isPositive ? "+" : "-"}
          {Math.abs(diff)} 지난 달 대비
        </span>
      </div>
    </Card>
  );
}
