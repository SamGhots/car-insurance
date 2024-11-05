import React from "react";
import "./SectionIntroduce.css";
import CarWrapper  from "../../assets/driving-car.svg"
import CarWrapper2  from "../../assets/driving-rafiki 387ADF.svg"
import Buttons from "../Buttons/Buttons";
function SectionIntroduce() {
  const handleScroll = () => {
    // ใช้ querySelector เพื่อเลือก class section-introduce
    const section = document.querySelector('.insurance-container');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="section-introduce">
      <div className="intro-container">
        <div className="intro-text-box">
          <div className="intro-main-title">มั่นใจในอนาคต</div>
          <div className="intro-sub-title">ด้วยประกันที่ตอบโจทย์คุณ</div>
          <div className="intro-slogan">จากบริษัททิพยประกันภัยอันดับ1
          ครอบคลุมทุกความต้องการ</div>

          {/* icon เพื่อการตกเเต่ง */}
          <i className="fa-sharp fa-regular fa-sparkles icon-expand"></i>




          <div className="icon-"></div>
          <div className="intro-btn-container">
          <Buttons   onClick={handleScroll}  label="รับแผนที่ใช่ในไม่กี่ขั้นตอน" variant="primary slideDown" fontSize='18px' width="260px" height="60px"/>
          </div>
        </div>
        <div className="banner-lottie-wrapper"> <img src={CarWrapper2}  alt="Car driving illustration"  /></div>
      
      </div>
    </div>
  );
}

export default SectionIntroduce;
