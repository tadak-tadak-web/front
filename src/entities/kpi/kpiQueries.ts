import { queryOptions } from '@tanstack/react-query';
import getKpi from './apis/getKpi';

export const kpiQueries = {
  kpiData: () =>
    queryOptions({
      queryKey: ['kpiData'],
      queryFn: getKpi,
    }),
};
