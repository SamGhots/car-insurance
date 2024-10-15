import React, { useState } from "react";
import "./CarInfo.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import "../layout-wrapper/layout-wrapper.css";
import HandleBack from "../handleBack/handleBack"; /* ปุ่มย้อนกลับ*/
import CarBrandSelect from "../Forms/CarForms"  /* ฟอร์มข้อมูลรถยนต์ */

function CarInfo() {
  return (
    <div>
      <HandleBack />{/* ปุ่มย้อนกลับ */}
      <div className="car-info layout-wrapper">
        <ProgressBar /> {/* Bar บอกขั้นตอนว่าอยู่ไหน */}
        <CarBrandSelect /> /
      </div>
    </div>
  );
}

export default CarInfo;
