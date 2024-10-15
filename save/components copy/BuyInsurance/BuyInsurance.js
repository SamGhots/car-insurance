import React from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate
import "./BuyInsurance.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import "../layout-wrapper/layout-wrapper.css";
import icon1 from "../img/car1.svg"; // นำเข้ารูปภาพ
import icon2 from "../img/car2.svg";
import icon3 from "../img/car3.svg";
import icon4 from "../img/car4.svg";
import icon5 from "../img/car5.svg";

function BuyInsurance() {
  const navigate = useNavigate(); // สร้างฟังก์ชันนำทาง

  const handleCardClick = (path) => {
    navigate(path); // นำทางไปยังเส้นทางที่ถูกส่งเข้ามา
  };

  return (
    <div className="buy-insurance layout-wrapper">
      <ProgressBar />

      <div className="buy-insurance__title">
        <h1>ประเภทรถของคุณคือ?</h1>
        <p>เฉพาะรถยนต์ส่วนบุคคลเท่านั้น และมีผลในการต่อภาษีประจำปี</p>
      </div>

      <div className="container-card">
        <div className="card" onClick={() => handleCardClick("/car-info")}>
          <img src={icon1} alt="Icon 1" className="card-image" />
          <div className="card-content">
            <h3>รถเก๋ง</h3>
            <p>
           <span className="discount">645</span> เหลือ <span className="highlight">499 / ปี</span>
            </p>
          </div>
        </div>

        <div className="card" onClick={() => handleCardClick("/truck-info")}>
          <img src={icon2} alt="Icon 2" className="card-image" />
          <div className="card-content">
            <h3>รถบรรทุก</h3>
            <p>
            <span className="discount">800</span> เหลือ <span className="highlight">750 / ปี</span>
            </p>
          </div>
        </div>

        <div className="card" onClick={() => handleCardClick("/van-info")}>
          <img src={icon3} alt="Icon 3" className="card-image" />
          <div className="card-content">
            <h3>รถตู้</h3>
            <p>
            <span className="discount">900</span> เหลือ <span className="highlight">888 / ปี</span>
            </p>
          </div>
        </div>

        <div className="card" onClick={() => handleCardClick("/pickup-info")}>
          <img src={icon4} alt="Icon 4" className="card-image" />
          <div className="card-content">
            <h3>รถกระบะ 2 ประตู</h3>
            <p>
            <span className="discount">  980</span> เหลือ <span className="highlight">960 / ปี</span>
            </p>
          </div>
        </div>

        <div className="card" onClick={() => handleCardClick("/motorbike-info")}>
          <img src={icon5} alt="Icon 5" className="card-image" />
          <div className="card-content">
            <h3>รถจักรยานยนต์</h3>
            <p>
            <span className="discount"> 645</span> เหลือ <span className="highlight">499 / ปี</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyInsurance;
