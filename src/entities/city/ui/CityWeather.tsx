import dayjs from 'dayjs';
import { CityWeather as CityWeatherType } from '@/shared/types';
import { Air, Visibility } from '@mui/icons-material';
import { Box, Card, Divider, Skeleton, Typography } from '@mui/material';

export const CityWeather = ({ weather }: { weather: CityWeatherType | undefined }) => {
  return (
    <Card variant="outlined" sx={{ flex: 1 }}>
      <Box sx={{ p: 1.5 }}>
        {weather ? (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h4" component="div">
              {weather.name}, {weather.sys.country}
            </Typography>
            <Typography variant="h6" component="div">
              {dayjs(weather.dt * 1000).format('dddd DD.MM.YY')}
            </Typography>
          </Box>
        ) : (
          <Skeleton variant="rounded" width={'100%'} height={40} />
        )}
      </Box>
      <Divider />
      <Box sx={{ px: 1.5, pt: 1 }}>
        {weather ? (
          <>
            <Typography variant="h6" component="div">
              Weather
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
              <Typography sx={{ fontWeight: 'bold' }}>{weather.weather[0].description}</Typography>
            </Box>
          </>
        ) : (
          <Skeleton variant="rounded" width={'100%'} height={50} />
        )}
      </Box>
      <Box sx={{ px: 1.5, py: 1 }}>
        {weather ? (
          <Box>
            <Typography variant="h6" component="div" sx={{ mb: 0.5 }}>
              Temperatures
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  Current: <Typography sx={{ fontWeight: 'bold' }}>{weather.main.temp} °C</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  Feels like: <Typography sx={{ fontWeight: 'bold' }}> {weather.main.feels_like} °C</Typography>
                </Box>
              </Box>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  Min: <Typography sx={{ fontWeight: 'bold' }}>{weather.main.temp_min} °C</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  Max: <Typography sx={{ fontWeight: 'bold' }}>{weather.main.temp_max} °C</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <Skeleton variant="rounded" width={'100%'} height={50} />
        )}
      </Box>
      <Box sx={{ px: 1.5, py: 1 }}>
        {weather ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box>
              <Typography variant="h6" component="div" sx={{ mb: 0.5 }}>
                Wind
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Air />
                {weather.wind.speed} m/s
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="div" sx={{ mb: 0.5 }}>
                Visibility
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Visibility />
                {weather.visibility} m
              </Typography>
            </Box>
          </Box>
        ) : (
          <Skeleton variant="rounded" width={'100%'} height={50} />
        )}
      </Box>
    </Card>
  );
};
