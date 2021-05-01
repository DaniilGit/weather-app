import React from "react";
import "./Cards.css";

function AddCard(props) {
  return (
    <div className="add-card" onClick={() => props.setSearch(true)}>
      <div className="add-card__header">Добавить город</div>
      <svg viewBox="1454.4 326.4 209.1 209.1" fill="#00ff9b">
        <defs>
          <filter
            filterUnits="userSpaceOnUse"
            height="209.1"
            id="Ellipse"
            width="209.1"
            x="1454.4"
            y="326.4"
          >
            <feOffset dy="3"></feOffset>
            <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
            <feFlood floodColor="#333" floodOpacity=".1"></feFlood>
            <feComposite in2="blur" operator="in"></feComposite>
            <feComposite in="SourceGraphic"></feComposite>
          </filter>
        </defs>
        <g filter="url(#Ellipse)">
          <circle
            cx="95.6"
            cy="95.6"
            fill="#f5f8ff"
            r="95.6"
            transform="translate(1463.4 332.4)"
          ></circle>
        </g>
        <rect
          height="142.9"
          rx="5"
          transform="translate(1552.6 358.1)"
          width="12.8"
        ></rect>
        <rect
          height="142.9"
          rx="5"
          transform="rotate(90 603.6 1026.8)"
          width="12.8"
        ></rect>
      </svg>
    </div>
  );
}

export default AddCard;