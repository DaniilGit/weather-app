import axios from "axios";
import getWeatherNextDays from "./getWeatherNextDays";

async function getWeather(nameCity, setData, data, standartSet, setError) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&lang=ru&units=metric&appid=e6ebd56804d0ed1639181c4a36c41c1c`
  ).catch (
    ex => {
      return false;
    }
  );

  if (!response) {
    setError(true)
    return;
  } else if (setError){
    setError(false);
  }

  let city = {
    name: response.data.city.name,
    currentDay: {
      temp: (response.data.list[0].main.temp).toFixed(0),
      tempMax: (response.data.list[0].main.temp_max).toFixed(0),
      tempMin: (response.data.list[0].main.temp_min).toFixed(0),
      weather: response.data.list[0].weather[0].description,
      wind: (response.data.list[0].wind.speed).toFixed(0),
      humidity: response.data.list[0].main.humidity,
    },
    nextDays: getWeatherNextDays(response.data.list),
  };

  setData({ ...data, newCity: city });
  
  if (standartSet) {
    let buffer = data.savedCities;
    buffer.push(city);
    setData({...data, savedCities: buffer});
  }

  localStorage.setItem("data", JSON.stringify(data));

}

export default getWeather;