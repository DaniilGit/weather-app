import React from "react";
import "./Content.css";

function getMonths() {
  let date = new Date().getMonth();
  let months = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];

  return months[date];
}

function getDayOfWeek() {
  let date = new Date().getDay();
  let days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  return days[date];
}

function TodayDate() {
  let date = new Date();
  return (
    <>
      <div>{getDayOfWeek()} {date.getDate()} {getMonths()}</div>
    </>
  );
}

export default TodayDate;