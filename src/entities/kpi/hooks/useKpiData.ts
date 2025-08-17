import getKpiData from "@/entities/kpi/apis/getKpiData";
import { useQuery } from "@tanstack/react-query";

export const useKpiData = () => {
  return useQuery({
    queryKey: ["kpi"],
    queryFn: getKpiData,
  });
};
