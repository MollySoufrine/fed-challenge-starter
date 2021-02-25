import React from "react";
import Avatar from "../Avatar/Avatar";
import DetailsBtn from "../DetailBtn/Btn";
import "./card.css";

function Card({ data, onCardChange }) {
  return (
    <div className="card">
      <img alt={data.image} src={data.image} />

      <div className="card-body">
        <h3 className="headline">{data.headline}</h3>
        <Avatar />
        <DetailsBtn data={data} key={data.id} onClick={onCardChange} />
      </div>
    </div>
  );
}

export default Card;
