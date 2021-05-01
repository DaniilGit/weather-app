function getDaysOfTheWeek(listDays, result) {
  let date = new Date().getDay();
  let cnt = 1;
  let days = [
    "ВС",
    "ПН",
    "ВТ",
    "СР",
    "ЧТ",
    "ПТ",
    "СБ",
  ];

  for (let i = 0; i < result.length; i++) {
    if (date + cnt > 6) {
      date = 0;
      cnt = 0;
    }
    result[i].day = days[date + cnt];
    cnt++;
  }
}

function getTemp(listDays, result) {
  let sumTemp = 0;
  let cnt = 0;

  for (let i = 0; i < listDays.length; i++) {
    if (cnt === 8 || i === listDays.length - 1) {
      result.push({
        day: "",
        weather: "",
        temp: (sumTemp / cnt).toFixed(0),
      });
      sumTemp = 0;
      cnt = 0;
    }
    sumTemp += listDays[i].main.temp;
    cnt++;
  }
}

function getWeather(listDays, result) {
  let cnt = 0;
  for (let i = 7; i < listDays.length; i += 7) {
    result[cnt].weather = listDays[i].weather[0].description;
    cnt++;
  }
}

function getWeatherNextDays(listDays) {
  let buffer = listDays[0].dt_txt.slice(0, 10);
  let bufferDays = [];
  let result = [];

  for (let i = 0; i < listDays.length; i++) {
    if (buffer !== listDays[i].dt_txt.slice(0, 10)) {
      bufferDays.push(listDays[i]);
    }
  }

  getTemp(bufferDays, result);
  getDaysOfTheWeek(bufferDays, result);
  getWeather(listDays, result);

  return result;
}

export default getWeatherNextDays;
