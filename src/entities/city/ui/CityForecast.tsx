import React from 'react';
import dayjs from 'dayjs';
import { CityForecast as CityForecastType } from '@/shared/types';
import { AppBar, Box, Card, Divider, Skeleton, Tab, Tabs, Typography } from '@mui/material';
import { CustomTabPanel } from '@/shared/ui';
import { splitForecastList } from '../lib/splitForecastList';

export const CityForecast = ({ forecast }: { forecast: CityForecastType | undefined }) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  const groups = splitForecastList(forecast);

  return (
    <Card variant="outlined" sx={{ flex: 1 }}>
      <Box sx={{ p: 1.5 }}>
        <Typography variant="h4" component="div">
          Forecast
        </Typography>
      </Box>
      <Divider />
      {forecast ? (
        <>
          <AppBar position="static">
            <Tabs value={activeTabIndex} onChange={(_, value) => setActiveTabIndex(value)} textColor="inherit" variant="fullWidth">
              {groups.map((group) => (
                <Tab key={group[0].dt} label={dayjs(group[0].dt * 1000).format('dddd DD.MM')} sx={{ fontSize: 13, p: 0.7 }} />
              ))}
            </Tabs>
          </AppBar>
          {groups.map((group, index) => (
            <CustomTabPanel key={group[0].dt} activeTabIndex={activeTabIndex} index={index}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, px: 1.5, py: 2, textAlign: 'center' }}>
                {group.map((item) => (
                  <Box key={item.dt} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, flex: 1 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>{dayjs(item.dt * 1000).format('HH:mm')}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                      <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
                      <Typography sx={{ fontWeight: 'bold', fontSize: 14, minHeight: '45px' }}>{item.weather[0].description}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Typography sx={{ fontWeight: 'bold', fontSize: 14 }}>{item.main.temp.toFixed(1)} °C</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Typography sx={{ fontWeight: 'bold', fontSize: 14 }}>{item.wind.speed.toFixed(1)} m/s</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CustomTabPanel>
          ))}
        </>
      ) : (
        <Box sx={{ p: 1.5 }}>
          <Skeleton variant="rounded" width={'100%'} height={240} />
        </Box>
      )}
    </Card>
  );
};
