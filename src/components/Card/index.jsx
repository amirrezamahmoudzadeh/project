import React from "react";
import "./Card.css";

function Card({ id, select, onChangeColor }) {
  return (
    <div
      className="card"
      id={id}
      onClick={() => onChangeColor(id)}
      style={{ backgroundColor: select ? "pink" : "skyblue" }}
    ></div>
  );
}

export default Card;
