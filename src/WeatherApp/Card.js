import React from "react";
import "../styles/Cards.css";
import Icon from "@material-ui/core/Icon";
import WeatherIcon from "./WeatherIcons";
import ButtonDelete from "./ButtonDelete";

function showDetailedWeather(setModal, foundCard, city) {
  if (!foundCard)
    setModal({isOpen: true, city: city});
}

function Card(props) {
  let city = props.city;

  return (
    <div className="container-card">
      <div
        className={props.nameClass}
        onClick={() => showDetailedWeather(props.setModal, props.foundCard, city)}
      >
        <div className="card__name-city">
          {city.name}</div>
        <WeatherIcon
          weather={city.currentDay.weather}
          nameClass={"card__icon-weather"}
        />
        <div className="card__temp">{city.currentDay.temp}°</div>
        <div className="card__weather">{city.currentDay.weather}</div>
        <div className="block-min-max">
          <div className="block-min">
            <Icon className="block-min__temp-icon">arrow_drop_down</Icon>
            <div className="block-min__temp">{city.currentDay.tempMin}°</div>
            <span>Min</span>
          </div>
          <div className="block-max">
            <Icon className="block-max__temp-icon">arrow_drop_up</Icon>
            <div className="block-max__temp">{city.currentDay.tempMax}°</div>
            <span>Max</span>
          </div>
        </div>
      </div>
      {
        props.close && <ButtonDelete city={city} setDeleteCheck={props.setDeleteCheck}/>
      }
    </div>
  );
}

export default Card;
