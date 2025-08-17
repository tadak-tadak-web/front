import { KpiRow, CourseRow } from "@/features/my-classroom/ui";

export default function MyClassroom() {
  return (
    <div className="flex flex-col gap-y-20">
      <KpiRow />
      <CourseRow />
    </div>
  );
}
