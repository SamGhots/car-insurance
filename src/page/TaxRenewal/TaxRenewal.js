import React from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate
import PageTitle from "../../components/PageTitle/PageTitle";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import "../../components/layout-wrapper/layout-wrapper.css";
import icon1 from "../../assets/car1.svg"; // นำเข้ารูปภาพ
import icon2 from "../../assets/car2.svg";
import icon3 from "../../assets/car3.svg";
import SimpleCarCard from "../../components/CarCard/SimpleCarCard";

function TaxRenewal() {
  const navigate = useNavigate(); // สร้างฟังก์ชันนำทาง

  const handleCardClick = (path) => {
    navigate(path); // นำทางไปยังเส้นทางที่ถูกส่งเข้ามา
  };
  return (
    <div className="layout-wrapper customize">
      <ProgressBar type="tax" />
      <PageTitle title="ประเภทรถของคุณคือ?" />
      <div className="container-card customize">
      <SimpleCarCard 
        image={icon1}
        title="รถเก๋ง"
        onClick={() => handleCardClick("/tax-payment-page")}
      />
      <SimpleCarCard 
        image={icon2}
        title="รถบรรทุก"
        onClick={() => handleCardClick("/tax-payment-page")}
      />
        <SimpleCarCard 
        image={icon3}
        title="รถตู้"
        onClick={() => handleCardClick("/tax-payment-page")}
      />
      {/* เพิ่ม SimpleCarCard อื่น ๆ ตามต้องการ */}
    </div>
    </div>
  );
}

export default TaxRenewal;
