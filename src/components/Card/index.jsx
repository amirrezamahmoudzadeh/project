import React from "react";
import "./Card.css";

function Card({ id, isSelected, onChangeColor }) {
  return (
    <div
      className="card"
      id={id}
      onClick={() => onChangeColor(id)}
      style={{ backgroundColor: isSelected ? "pink" : "skyblue" }}
    ></div>
  );
}

export default Card;
