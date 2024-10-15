import React, { useState } from "react";

import ProgressBar from "../../components/ProgressBar/ProgressBar";
import "../../components/layout-wrapper/layout-wrapper.css";
import HandleBack from "../../components/handleBack/handleBack"; /* ปุ่มย้อนกลับ*/
import CarForms from "../../components/Forms/CarForms"  /* ฟอร์มข้อมูลรถยนต์ */

function CarInfo() {
  return (
    <div>
      <HandleBack />{/* ปุ่มย้อนกลับ */}
      <div className="layout-wrapper customize">
        <ProgressBar  type="act"/> {/* Bar บอกขั้นตอนว่าอยู่ไหน  ประเภท ข้อมูลที่เเสดงคือ พรบ*/}
        <CarForms /> 
      </div>
    </div>
  );
}

export default CarInfo;
