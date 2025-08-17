import getKpi from "@/entities/kpi/apis/getKpi";
import { useQuery } from "@tanstack/react-query";

export const useKpi = () => {
  return useQuery({
    queryKey: ["kpi"],
    queryFn: getKpi,
  });
};
