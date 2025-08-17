import KpiCard from "./KpiCard";
import { KPIS } from "@/features/my-classroom/model";

export default function KpiRow() {
  return (
    <div className="flex flex-nowrap gap-5 overflow-x-auto">
      {KPIS.map(({ id, title, value, diff }) => (
        <KpiCard key={id} title={title} value={value} diff={diff} />
      ))}
    </div>
  );
}
