import { api } from '../instance';

export const getCityForecast = (city: string) => api.get('/forecast', { params: { q: city } });
