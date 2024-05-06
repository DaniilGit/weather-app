import { getCityWeather } from '@/shared/api';
import { CityWeather } from '@/shared/types';
import { CitiesGrid } from '@/widgets/cities-grid';
import { Typography } from '@mui/material';
import { useQueries } from '@tanstack/react-query';

export const MainPage = () => {
  const popularCities = ['Paris', 'London', 'New York', 'Moscow', 'Berlin', 'Tokyo'];
  const { data: cities, isPending }: { data: (CityWeather | undefined)[]; isPending: boolean } = useQueries({
    queries: popularCities.map((city) => ({
      queryKey: ['cityWeather', city],
      queryFn: () => getCityWeather(city),
      refetchOnWindowFocus: false,
      retry: false,
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data?.data),
        isPending: results.some((result) => result.isPending),
      };
    },
  });

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Popular cities
      </Typography>
      <CitiesGrid cities={cities} isPending={isPending} />
    </>
  );
};
