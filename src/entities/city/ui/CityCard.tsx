import { City } from '@/shared/types';
import { Box, Card, Chip, Skeleton, Typography, Divider, IconButton } from '@mui/material';
import { Air, Thermostat, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const CityCard = ({ city }: { city: City }) => {
  return (
    <Card variant="outlined">
      <Box sx={{ p: 1.5 }}>
        {city.weather ? (
          <Typography variant="h5" component="div">
            {city.weather.name}, {city.weather.sys.country}
          </Typography>
        ) : (
          <Skeleton variant="rounded" width={100} height={32} />
        )}
      </Box>
      <Divider />
      <Box sx={{ px: 1.5, pt: 1 }}>
        {city.weather ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <img src={`https://openweathermap.org/img/wn/${city.weather.weather[0].icon}.png`} />
            <Typography variant="h6">{city.weather.main.temp} °C</Typography>
          </Box>
        ) : (
          <Skeleton variant="rounded" width={140} height={50} />
        )}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, px: 1.5, py: 1 }}>
        {city.weather ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} flexWrap={'wrap'}>
              <Chip label={`min: ${city.weather.main.temp_min} °C`} size="small" icon={<Thermostat />} />
              <Chip label={`max: ${city.weather.main.temp_max} °C`} size="small" icon={<Thermostat />} />
              <Chip label={`${city.weather.wind.speed} m/s`} size="small" icon={<Air />} />
            </Box>
            <Link to={`/city/${city.weather.name.toLowerCase()}`}>
              <IconButton>
                <ArrowForward />
              </IconButton>
            </Link>
          </>
        ) : (
          <Skeleton variant="rounded" width={'100%'} height={56} />
        )}
      </Box>
    </Card>
  );
};
