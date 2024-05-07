import { useId } from 'react';
import { CityCard } from '@/entities/city';
import { City } from '@/shared/types';
import { Grid } from '@mui/material';

export const CitiesGrid = ({ cities, isPending }: { cities: City[]; isPending: boolean }) => {
  return (
    <Grid container spacing={2}>
      {cities.map((city) =>
        city || isPending ? (
          <Grid key={useId()} item xs={12} sm={6} md={4}>
            <CityCard city={city} />
          </Grid>
        ) : null,
      )}
    </Grid>
  );
};
