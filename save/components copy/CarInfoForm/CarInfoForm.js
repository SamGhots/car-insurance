import React, { useState } from 'react';
import "./CarInfoForm.css";

function CarInfoForm() {
  const [carModel, setCarModel] = useState('');
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ประมวลผลข้อมูลที่กรอกในฟอร์มที่นี่
    console.log({ carModel, brand, year, licensePlate });
  };

  return (
    <form onSubmit={handleSubmit} className='car-info__form'>
      <div className='form-group'>
        <label htmlFor='carModel'>รุ่นรถ:</label>
        <input
          type='text'
          id='carModel'
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='brand'>ยี่ห้อรถ:</label>
        <input
          type='text'
          id='brand'
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='year'>ปีที่ผลิต:</label>
        <input
          type='number'
          id='year'
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          min='1900' // กำหนดค่าต่ำสุด
          max={new Date().getFullYear()} // กำหนดค่าสูงสุด
        />
      </div>

      <div className='form-group'>
        <label htmlFor='licensePlate'>หมายเลขทะเบียนรถ:</label>
        <input
          type='text'
          id='licensePlate'
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          required
        />
      </div>

      <button type='submit' className='submit-button'>ส่งข้อมูล</button>
    </form>
  );
}

export default CarInfoForm;
