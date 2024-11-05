import React, { useState } from "react";
import "./swiper-bundle.min.css";
import "./MySlideshow.css";
/*import "./MySlideshow.css"*/
import { Swiper, SwiperSlide } from "swiper/react";
import Buttons from "../Buttons/Buttons";
import Img1 from "../../assets/Social strategy-rafiki.svg";
import Img2 from "../../assets/Online ads-pana.svg";
function MySlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7; // จำนวนสไลด์ทั้งหมด
  return (
    <section className="insurance-container">
      <div className="insurance__section-heading">
        <di className="insurance__title">
          <span>เต็มที่กับ</span>
          <p className="new-line">ทุกช่วงชีวิต ด้วยแผนประกัน</p>
        </di>

        <a href="app-transactions.html" className="insurance__link">
          ครอบคลุมทุกความต้องการ ตอบโจทย์ทุกไลฟ์สไตล์
        </a>
      </div>

      <Swiper
        spaceBetween={50} // ระยะห่างระหว่าง slides
        slidesPerView={"auto"} // ให้แสดงผลอัตโนมัติตามความกว้างของ slide
        loop={false} // ไม่ให้วนกลับไปต้น // ทำให้ slide วนกลับไปต้น
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)} // เก็บข้อมูลตำแหน่งสไลด์ปัจจุบัน
      >
        <SwiperSlide className="insurance-slide">
          <div className="insurance-slide_card">
            <div className="insurance-slide__img-wrapper">
              <img src={Img1} alt="" />
            </div>
            <div className="text">
              <div className="insurance-slide_card__title">พ.ร.บ</div>
              <p className="insurance-box__content">คุ้นครองทันที</p>
            </div>
            <div className="insurance-button">
              {" "}
              <Buttons
                onClick={() => (window.location.href = "#/")}
                label="เช็กเบี้ยประกัน"
                variant="primary"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="insurance-slide">
          <div className="insurance-slide_card">
            <div className="insurance-slide__img-wrapper">
              <img src={Img1} alt="" />
            </div>
            <div className="text">
              <div className="insurance-slide_card__title">ต่อภาษี</div>
              <p className="insurance-box__content">คุ้นครองทันที</p>
            </div>
            <div className="insurance-button">
              {" "}
              <Buttons
                onClick={() => (window.location.href = "#/")}
                label="เช็กเบี้ยประกัน"
                variant="primary"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="insurance-slide">
          <div className="insurance-slide_card">
            <div className="insurance-slide__img-wrapper">
              <img src={Img1} alt="" />
            </div>
            <div className="text">
              <div className="insurance-slide_card__title">พ.ร.บ + ภาษี</div>
              <p className="insurance-box__content">คุ้นครองทันที</p>
            </div>
            <div className="insurance-button">
              {" "}
              <Buttons
                onClick={() => (window.location.href = "#/")}
                label="เช็กเบี้ยประกัน"
                variant="primary"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="insurance-slide">
          <div className="insurance-slide_card">
            <div className="insurance-slide__img-wrapper">
              <img src={Img1} alt="" />
            </div>
            <div className="text">
              <div className="insurance-slide_card__title">อุบัติเหตุ</div>
              <p className="insurance-box__content">คุ้นครองทันที</p>
            </div>
            <div className="insurance-button">
              {" "}
              <Buttons
                onClick={() => (window.location.href = "#/")}
                label="เร็วๆนี้"
                variant="comingSoon"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="insurance-slide">
          <div className="insurance-slide_card">
            <div className="insurance-slide__img-wrapper">
              <img src={Img1} alt="" />
            </div>
            <div className="text">
              <div className="insurance-slide_card__title">บ้าน/คอนโด</div>
              <p className="insurance-box__content">คุ้นครองทันที</p>
            </div>
            <div className="insurance-button">
              {" "}
              <Buttons
                onClick={() => (window.location.href = "#/")}
                label="เร็วๆนี้"
                variant="comingSoon"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="insurance-slide">
          <div className="insurance-slide_card">
            <div className="insurance-slide__img-wrapper">
              <img src={Img1} alt="" />
            </div>
            <div className="text">
              <div className="insurance-slide_card__title">สุขภาพ</div>
              <p className="insurance-box__content">คุ้นครองทันที</p>
            </div>
            <div className="insurance-button">
              {" "}
              <Buttons
                onClick={() => (window.location.href = "#/")}
                label="เร็วๆนี้"
                variant="comingSoon"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="insurance-slide">
          <div className="insurance-slide_card">
            <div className="insurance-slide__img-wrapper">
              <img src={Img1} alt="" />
            </div>
            <div className="text">
              <div className="insurance-slide_card__title">สัตว์เลี้ยง</div>
              <p className="insurance-box__content">คุ้นครองทันที</p>
            </div>
            <div className="insurance-button">
              {" "}
              <Buttons
                onClick={() => (window.location.href = "#/")}
                label="เร็วๆนี้"
                variant="comingSoon"
              />
            </div>
          </div>
        </SwiperSlide>
        {/* ใส่ SwiperSlide อื่น ๆ */}
      </Swiper>
       {/* ส่วนแสดงจำนวนสไลด์ที่เลื่อนไปแล้ว */}
       <div className="slide-indicator">
        เลื่อนไปแล้ว {currentSlide + 1} จาก {totalSlides} สไลด์
      </div>
    </section>
  );
}

export default MySlideshow;
