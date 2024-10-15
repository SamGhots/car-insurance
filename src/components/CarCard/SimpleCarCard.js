// SimpleCarCard.js
import React from 'react';
import './SimpleCarCard.css'; // สร้าง CSS แยกสำหรับ SimpleCarCard

const SimpleCarCard = ({ image, title, onClick }) => {
  return (
    <div className="simple-card" onClick={onClick}>
      <img src={image} alt={title} className="simple-card-image" />
      <div className="simple-card-content">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default SimpleCarCard;
