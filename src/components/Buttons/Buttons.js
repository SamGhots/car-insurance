import React from 'react';
import './Buttons.css';

function Buttons({ onClick, label, variant ,height = '50px' }) {
  return (
    <button className={`button ${variant}`} onClick={onClick} style={{ height }}> 
      <p className="content">{label}</p>
    </button>
  );
}

export default Buttons;
