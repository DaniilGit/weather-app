import { CityForecast } from '@/shared/types';
import { ForecastItem } from '@/shared/types/api';
import dayjs from 'dayjs';

export const splitForecastList = (forecast: CityForecast | undefined) => {
  if (!forecast) {
    return [];
  }

  const list = forecast.list;
  const groups = list.reduce(
    (acc, item) => {
      const date = dayjs(item.dt * 1000).format('YYYY-MM-DD');
      if (!acc[date]) acc[date] = [];
      acc[date].push(item);
      return acc;
    },
    {} as Record<string, ForecastItem[]>,
  );

  return Object.values(groups);
};
