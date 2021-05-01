import React from "react";
import "./Modal.css";
import ModalWindow from "./ModalWindow";

function DetailedInfo(props) {
  let city = props.modal.city;
  let setModal = props.setModal;

  if (props.modal.isOpen) {

    return (
      <div className="container-modal">
        <div
          className="container-modal__button-back"
          onClick={() => setModal({...props.modal, isOpen: false})}
        >
          <svg viewBox="4085 152 98.5 126">
            <g transform="translate(3980)">
              <circle
                className="a"
                cx="39"
                cy="39"
                r="39"
                transform="translate(105 152)"
              ></circle>
              <line
                className="b"
                transform="translate(123.5 190.5)"
                x1="80"
              ></line>
              <line
                className="b"
                transform="translate(123.5 164.5)"
                x2="26"
                y1="26"
              ></line>
              <line
                className="c"
                transform="translate(123.5 190.5)"
                x1="26"
                y1="27"
              ></line>
            </g>
          </svg>
        </div>
        <ModalWindow city={city} nameClass={"modal-window"}/>
      </div>
    );
  } else return null;
}

export default DetailedInfo;
