// CookiePopup.jsx
import React, { useState, useEffect } from "react";
import "./CookiePopup.css";
import Cokkie from "../../assets/cookie.png"

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem("cookieAccepted");
    if (!isAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <>
        <div className="overlay" onClick={handleDecline}></div> {/* Overlay div */}
        <div className="cookie-popup">
          <button className="close-button-cookie-popup" onClick={handleClose}><i class="fa-regular fa-circle-xmark"></i></button> {/* Close button */}
          <div className="cookie-popup-img">
            <img src={Cokkie} alt="" />
          </div>
          <h1>เว็บไซต์นี้ใช้คุกกี้</h1>
          <div className="cookie-popup-title">
            
            <p>
              เราใช้คุกกี้เพื่อนำเสนอเนื้อหาและโฆษณา คลิกเพื่อดูข้อมูลเพิ่มเติม
              <a href="#/cookie-policy-page">นโยบายคุกกี้</a> เเละ <a href="#/cookie-privacy-policy-page">นโยบายความเป็นส่วนตัว</a>
            </p>
          </div>
          <div className="cookie-popup-button">
            <button onClick={handleAccept}>ยินยอม</button>
          </div>
        </div>
      </>
    )
  );
};

export default CookiePopup;
