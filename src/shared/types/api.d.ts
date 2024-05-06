export type CityWeather = {
  id: number;
  name: string;
  dt: number;
  timezone: number;
  visibility: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: Weather[];
  clouds: {
    all: number;
  };
  coord: Coord;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
};

export type CityForecast = {
  cod: string;
  message: number;
  cnt: number;
  city: {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: Weather[];
    clouds: {
      all: number;
    };
    pop: number;
    sys: {
      pod: string;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
  };
};

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Coord = {
  lon: number;
  lat: number;
};
