import { KpiRow, CourseRow } from "@/features/my-classroom/ui";
import { LoadingSpinner } from "@/shared";
import { Suspense } from "react";

export default function MyClassroom() {
  return (
    <div className="flex flex-col gap-y-20">
      <Suspense fallback={<LoadingSpinner />}>
        <KpiRow />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CourseRow />
      </Suspense>
    </div>
  );
}
