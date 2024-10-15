import React from 'react';
import './Buttons.css';

function Buttons({ onClick, label }) {
  return (
    <button className='button' onClick={onClick}> 
      <p className="content">{label}</p>
    </button>
  );
}

export default Buttons;
