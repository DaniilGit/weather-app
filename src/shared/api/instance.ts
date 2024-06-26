import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params: {
    units: 'metric',
    appid: import.meta.env.VITE_API_KEY,
  },
});
