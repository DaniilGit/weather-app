import React from "react";
import WeatherIcon from "../../Icons/WeatherIcons";
import "./Modal.css";
import "../../../../node_modules/animate.css/animate.css";

function NextDay(props) {
  let day = props.day;
  return (
    <div className="day">
      <div className="day__title">{day.day}</div>
      <WeatherIcon weather={day.weather} nameClass={"day__icon"} />
      <div className="day__temp">{day.temp}°</div>
      <div className="day__weather">{day.weather}</div>
    </div>
  );
}

function ModalWindow(props) {
  let city = props.city;
  return (
    <div className={props.nameClass}>
      <div className="block-top">
        <div className="block-top-left">
          <div className="block-top-left__temp">{city.currentDay.temp}°</div>
          <div className="block-top-left__weather">{city.currentDay.weather}</div>
          <div className="block-top-left__other">
            <div className="block-top-left__humidity">
              <div>Влажность</div>
              {city.currentDay.humidity}%
            </div>
            <div className="block-top-left__wind">
              <div>Ветер</div>
              {city.currentDay.wind} м/c
            </div>
          </div>
        </div>
        <div className="block-top-right">
          <div className="block-top-right__name-city">{city.name}</div>
        </div>
      </div>
      <div className="block-bottom">
        <div className="next-days">
          {city.nextDays.map(item => {
            return <NextDay day={item} key={item.day} />;
          })}
        </div>
      </div>
    </div>
  )
}

export default ModalWindow;