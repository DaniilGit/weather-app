import React from "react";
import "../styles/Search.css"
import Card from "./Card";
import Loader from "./Loader";
import Icon from "@material-ui/core/Icon";
import getWeather from "./function/getWeather";
import Context from "./Context";
import ModalWindow from "./ModalWindow";

function Search(props) {
  const [city, setCity] = React.useState();
  const {data, setData} = React.useContext(Context);
  const [error, setError] = React.useState(false);

  function isEmpty(obj) {
    for (let key in obj)
      return true;
    return false;
  }

  function getInputValue(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  function searchCity(e) {
    e.preventDefault();
    getWeather(city, setData, data, false, setError);
  }
  
  return (
    <div className="container-search">
      <div className="block-search">
        <div className="block-left">
          <div className="block-left__header">Поиск городов</div>
          <form className="form-search">
            <input className="form-search__input" onChange={getInputValue} placeholder="Введите название города..."></input>
            <button className="form-search__button" onClick={searchCity}>
              <Icon className="form-search__icon">search</Icon>
            </button>
          </form>
          <div className="block-left__styles-points">O O O</div>
          <div className="main-content">
            {
              !error
                ? ( 
                  isEmpty(data.newCity)
                    ? <>
                        <Card 
                          city={data.newCity} 
                          key={data.newCity.name} 
                          foundCard={true}
                          close={false} 
                          nameClass={"card found-card"}/>
                        <button 
                          className="block-left__button-add" 
                          onClick={() => {
                            let buffer = data.savedCities;
                            buffer.push(data.newCity); buffer = data.savedCities;
                            setData({...data, savedCities: buffer});
                            localStorage.setItem("data", JSON.stringify(data));
                          }}>
                            Добавить город
                          </button>
                      </>
                    : <Loader/>
                )
                : <div className="block-unknown-city">
                    <div className="block-unknown-city__error">Такого города нет</div>
                    <Icon className="block-unknown-city__icon">mood_bad</Icon>
                  </div>
            }
          </div>
        </div>
        {
          isEmpty(data.newCity) && !error && (
            <div className="block-right">
              <ModalWindow city={data.newCity} nameClass={"modal-window modal-search"}/>
            </div>
          )
        }
        <button className="button-close" onClick={() => {
            props.setSearch(false);
            setData({ ...data, newCity: "" });
          }}>
            <Icon className="form-search__icon">close</Icon>
        </button>
      </div>
    </div>
  )
}

export default Search;