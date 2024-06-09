import { CitySearch } from '@/features/search';
import { getCityWeather } from '@/shared/api';
import { CityWeather, City } from '@/shared/types';
import { CitiesGrid } from '@/widgets/cities-grid';
import { Box, Typography } from '@mui/material';
import { useQueries } from '@tanstack/react-query';
import { useEffect } from 'react';

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

  useEffect(() => {
    console.log(1);
  });

  return (
    <>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Search city
        </Typography>
        <CitySearch />
      </Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Popular cities
      </Typography>
      <CitiesGrid cities={cities} isPending={isPending} />
    </>
  );
};
