import { getCityWeather } from '@/shared/api';
import { CityWeather, City } from '@/shared/types';
import { CitiesGrid } from '@/widgets/cities-grid';
import { Typography } from '@mui/material';
import { useQueries } from '@tanstack/react-query';

export const MainPage = () => {
  const popularCities = ['Paris', 'London', 'New York', 'Moscow', 'Berlin', 'Tokyo'];
  const { cities, isPending } = useQueries({
    queries: popularCities.map((city) => ({
      queryKey: ['weather', city],
      queryFn: () => getCityWeather(city),
      refetchOnWindowFocus: false,
      retry: false,
    })),
    combine: (results): { cities: City[]; isPending: boolean } => {
      return {
        cities: results.map((result) => {
          return {
            weather: result.data?.data as CityWeather | undefined,
          };
        }),
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
