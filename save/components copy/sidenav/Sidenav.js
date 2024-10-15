import React, { useState } from "react";
import "./Sidenav.css"; // ไฟล์ CSS แยกสำหรับ Sidenav
import logo from "../img/logo.svg"; // รูป logo ของ bard

const Sidenav = ({ isOpen, toggleSidenav }) => {
  const [isListOpen, setIsListOpen] = useState(false); // ควบคุมการเปิด/ปิดของรายการประกัน
  const [isPromoListOpen, setPromoListOpen] = useState(false); // ควบคุมการเปิด/ปิดของรายการโปรโมชั่น
  const [isArticleListOpen, setArticleListOpen] = useState(false); // ควบคุมการเปิด/ปิดของรายการบทความ
  const [isConsultationListOpen, setConsultationListOpen] = useState(false); // ควบคุมการเปิด/ปิดของรายการปรึกษาประกัน

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const togglePromoList = () => {
    setPromoListOpen(!isPromoListOpen);
  };

  const toggleArticleList = () => {
    setArticleListOpen(!isArticleListOpen);
  };

  const toggleConsultationList = () => {
    setConsultationListOpen(!isConsultationListOpen);
  };

  return (
    <>
      {/* Overlay background */}
      {isOpen && <div className="overlay" onClick={toggleSidenav}></div>}

      <div className={`sidenav ${isOpen ? "sidenav--open" : ""}`}>
        {/* ปุ่มปิด */}
        <div className="sidenav__container">
          <i
            className="close-btn fa-solid fa-xmark-large"
            onClick={toggleSidenav}
          ></i>
          <img src={logo} alt="Logo" />
        </div>

        <a href="#" onClick={toggleList} className="sidenav__toggle-link">
          <span>
            <i className="fa-solid fa-shield"></i> ซื้อประกันออนไลน์
          </span>
          <i
            className={`fa-solid fa-chevron-${isListOpen ? "down" : "up"}`}
          ></i>
        </a>

        {/* รายการที่แสดงเมื่อคลิกสำหรับประกัน */}
        <div className={`sidenav__dropdown-list ${isListOpen ? "open" : ""}`}>
          <ul>
            <li>
              <i className="fa-solid fa-car"></i>ประกัน พ.ร.บ.
            </li>
            <li>
              <i className="fa-solid fa-book"></i> ออกภาษี
            </li>
          </ul>
        </div>

        {/* ลิงก์สำหรับโปรโมชั่น */}
        <a href="#" onClick={togglePromoList} className="sidenav__toggle-link">
          <span>
            <i className="fa-solid fa-tags"></i> โปรโมชั่น
          </span>
          <i
            className={`fa-solid fa-chevron-${isPromoListOpen ? "down" : "up"}`}
          ></i>
        </a>

        {/* รายการที่แสดงเมื่อคลิกสำหรับโปรโมชั่น */}
        <div className={`sidenav__dropdown-list ${isPromoListOpen ? "open" : ""}`}>
          <ul>
            <li>
              <i className="fa-solid fa-percentage"></i> โปรโมชั่น 1
            </li>
            <li>
              <i className="fa-solid fa-star"></i> โปรโมชั่น 2
            </li>
            <li>
              <i className="fa-solid fa-bell"></i> โปรโมชั่น 3
            </li>
          </ul>
        </div>

        {/* ลิงก์สำหรับบทความ */}
        <a href="#" onClick={toggleArticleList} className="sidenav__toggle-link">
          <span>
            <i className="fa-solid fa-newspaper"></i> บทความ
          </span>
          <i
            className={`fa-solid fa-chevron-${isArticleListOpen ? "down" : "up"}`}
          ></i>
        </a>

        {/* รายการที่แสดงเมื่อคลิกสำหรับบทความ */}
        <div className={`sidenav__dropdown-list ${isArticleListOpen ? "open" : ""}`}>
          <ul>
            <li>
              <i className="fa-solid fa-file-alt"></i> บทความ 1
            </li>
            <li>
              <i className="fa-solid fa-file-alt"></i> บทความ 2
            </li>
            <li>
              <i className="fa-solid fa-file-alt"></i> บทความ 3
            </li>
          </ul>
        </div>

        {/* ลิงก์สำหรับปรึกษาประกันฟรี */}
        <a href="#" onClick={toggleConsultationList} className="sidenav__toggle-link">
          <span>
            <i className="fa-solid fa-comments"></i> ปรึกษาประกันฟรี
          </span>
          <i
            className={`fa-solid fa-chevron-${isConsultationListOpen ? "down" : "up"}`}
          ></i>
        </a>

        {/* รายการที่แสดงเมื่อคลิกสำหรับปรึกษาประกัน */}
        <div className={`sidenav__dropdown-list ${isConsultationListOpen ? "open" : ""}`}>
          <ul>
            <li>
              <i className="fa-solid fa-comment-dots"></i> ปรึกษาผ่านโทรศัพท์
            </li>
            <li>
              <i className="fa-solid fa-comment-dots"></i> ปรึกษาผ่านแชท
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
