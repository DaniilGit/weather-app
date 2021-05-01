import React, {useEffect} from "react";
import getWeather from "./getWeather.js";
import Content from "../Content/Content";
import Context from "./Context";

function App(props) {
  const [data, setData] = React.useState({
    newCity: {},
    savedCities: []
  });

  function getStandardCities() {
    const cities = ["Лондон", "Москва", "Пекин", "Вашингтон"];

    cities.forEach(item => {
      getWeather(item, setData, data, true);
    });
  }

  useEffect(() => {
    if (JSON.parse (localStorage.getItem ("data")))
      setData(JSON.parse(localStorage.getItem ("data")));
    else
      getStandardCities();
  }, []);

  return (
    <Context.Provider value={{data, setData}}>
        <Content cities={data.savedCities}/>
    </Context.Provider>
  );
}

export default App;
