// CarCard.js
import React from 'react';
import  "./CarCard.css"

const CarCard = ({ image, title, discount, price, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>
          <span className="discount">{discount}</span> เหลือ <span className="highlight">{price} / ปี</span>
        </p>
      </div>
    </div>
  );
};

export default CarCard;
