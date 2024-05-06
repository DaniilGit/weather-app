import { CityCard } from '@/entities/city';
import { CityWeather } from '@/shared/types';
import { Grid } from '@mui/material';

export const CitiesGrid = ({ cities, isPending }: { cities: (CityWeather | undefined)[]; isPending: boolean }) => {
  return (
    <Grid container spacing={2}>
      {cities.map((city) =>
        city || isPending ? (
          <Grid key={city?.id} item xs={12} sm={6} md={4}>
            <CityCard city={city} />
          </Grid>
        ) : null,
      )}
    </Grid>
  );
};
