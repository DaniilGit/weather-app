import { CityForecast, CityWeather } from './api';

export interface City {
  weather?: CityWeather | undefined;
  forecast?: CityForecast | undefined;
}
