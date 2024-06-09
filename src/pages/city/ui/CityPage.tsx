import { CityForecast, CityWeather } from '@/entities/city';
import { getCityForecast, getCityWeather } from '@/shared/api';
import { City } from '@/shared/types';
import { Grid } from '@mui/material';
import { useQueries } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { CityPageError } from './CityPageError';

export const CityPage = () => {
  const { slug } = useParams();

  const { city, error } = useQueries({
    queries: [
      {
        queryKey: ['weather', slug],
        queryFn: () => getCityWeather(slug || ''),
        refetchOnWindowFocus: false,
        retry: false,
      },
      {
        queryKey: ['forecast', slug],
        queryFn: () => getCityForecast(slug || ''),
        refetchOnWindowFocus: false,
        retry: false,
      },
    ],
    combine: (results): { city: City; error: AxiosError | null } => {
      return {
        city: {
          weather: results[0].data?.data,
          forecast: results[1].data?.data,
        },
        error: (results[0].error || results[1].error) as AxiosError | null,
      };
    },
  });

  if (error) return <CityPageError error={error} />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <CityWeather weather={city.weather} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <CityForecast forecast={city.forecast} />
      </Grid>
    </Grid>
  );
};
