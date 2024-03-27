import React from "react";
import './index.css';

function Card(props) {
  const {title, image, price } = props.data.attributes
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <h2>{title}</h2>
        <p>${price}</p>
      </div>
    </>
  );
}

export default Card;
