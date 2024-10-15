import React from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate
import "./SelectService.css";
import "../layout-wrapper/layout-wrapper.css";
import icon1 from "../img/icon1.svg";
import icon2 from "../img/icon2.svg";
import icon3 from "../img/icon3.svg";

function SelectService() {
  const navigate = useNavigate(); // ใช้ useNavigate

  const handleCardClick = () => {
    navigate("/buy-insurance"); // นำทางไปยังหน้า BuyInsurance
  };

  return (
    <div className="select-service layout-wrapper">
      <h1>เลือกบริการที่ต้องการ</h1>
      <div className="select-service__card-container">
        <div className="select-service__card" onClick={handleCardClick}>
          <div className="select-service__content">
            <img src={icon1} alt=""  className="select-service__card-image"/>
            <p>ออก พรบ</p>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>

        <div className="select-service__card" onClick={handleCardClick}>
          <div className="select-service__content">
            <img src={icon2} alt="" className="select-service__card-image" />
            <p>ต่อภาษี</p>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>

        <div className="select-service__card" onClick={handleCardClick}>
          <div className="select-service__content">
            <img src={icon3} alt="" className="select-service__card-image"/>
            <p>ต่อภาษี เเละออก พรบ</p>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}

export default SelectService;
