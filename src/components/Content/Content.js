import React from "react";
import "./Content.css";
import WeatherIcon from "../Icons/WeatherIcons";
import BlockCards from "./Cards/BlockCards";
import DetailedInfo from "./DetailedInfo/DetailedInfo";
import TodayDate from "./TodayDate";
import Search from "./Search/Search";

function changeTheme(e) {
  if (!e.target.checked) {
    document.getElementById('root').classList.toggle("darkTheme");
  } else {
    document.getElementById('root').classList.toggle("darkTheme");
  }
}

function Content(props) {
  const [modal, setModal] = React.useState({
    isOpen: false,
    city: "",
  });
  const [search, setSearch] = React.useState(false);

  return (
    <div className="container-main">
      <div className="header">
        <div className="header__title">
          <div className="header__name">Weather App</div>
          <WeatherIcon weather={"обл"} nameClass={"header__icon"} />
        </div>
        <div className="header__center">
          <TodayDate/>
        </div>
        <div className="block-button">
          <label className="switch">
            <input type="checkbox" onChange={changeTheme}/>
            <span className="slider"></span>
          </label>
        </div>
      </div>
      {search && <Search setSearch={setSearch}/>}
      {
        !search && (
          modal.isOpen ? (
            <DetailedInfo modal={modal} setModal={setModal} />
          ) : (
            <BlockCards cities={props.cities} modal={modal} setModal={setModal} setSearch={setSearch}/>
          )
        )
      }
    </div>
  );
}

export default Content;