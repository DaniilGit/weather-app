import React from "react";
import "../styles/Cards.css";
import Card from "./Card";
import AddCard from "./AddCard";
import "../../node_modules/animate.css/animate.css";

function BlockCards(props) {
  let cities = props.cities;
  const [deleteCheck, setDeleteCheck] = React.useState(false);

  if (deleteCheck)
    setDeleteCheck(false);

  return (
    <div className="container-cards">
      {cities.map(item => {
        return (
          <Card
            city={item}
            key={item.name}
            modal={props.modal}
            close={true}
            setModal={props.setModal}
            nameClass={"card"}
            setDeleteCheck={setDeleteCheck}
          />
        );
      })}
      <AddCard setSearch={props.setSearch}/>
    </div>
  );
}

export default BlockCards;