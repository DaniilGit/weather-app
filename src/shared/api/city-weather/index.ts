import { api } from '../instance';

export const getCityWeather = (city: string) => api.get('/weather', { params: { q: city } });
