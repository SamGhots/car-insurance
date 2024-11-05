import React, { useState } from "react";
import "./swiper-bundle.min.css";
import "./MySlideshow.css";
/*import "./MySlideshow.css"*/
import { Swiper, SwiperSlide } from "swiper/react";
import Buttons from "../Buttons/Buttons";
import Img1 from "../../assets/traffic fine-pana (1).svg";
import Img2 from "../../assets/Tax-pana.svg";
import Img3 from "../../assets/house party-amico.svg";
import Img4 from "../../assets/Car crash-pana.svg";
import Img5 from "../../assets/Tax-amico.svg";
import Imgุ6 from "../../assets/Pediatrician-amico.svg";
import Imgุ7 from "../../assets/Cat and dog-pana.svg";
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
        loop={true} // วนลูปกลับไปต้น
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex); // ใช้ realIndex เพื่อให้ได้ตำแหน่งที่ถูกต้องเมื่อ loop
        }}
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
                onClick={() => (window.location.href = "#/select-service-page")}
                label="เช็กเบี้ยประกัน"
                variant="primary"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="insurance-slide">
          <div className="insurance-slide_card">
            <div className="insurance-slide__img-wrapper">
              <img src={Img2} alt="" />
            </div>
            <div className="text">
              <div className="insurance-slide_card__title">ต่อภาษี</div>
              <p className="insurance-box__content">คุ้นครองทันที</p>
            </div>
            <div className="insurance-button">
              {" "}
              <Buttons
                onClick={() => (window.location.href = "#/select-service-page")}
                label="เช็กเบี้ยประกัน"
                variant="primary"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="insurance-slide">
          <div className="insurance-slide_card">
            <div className="insurance-slide__img-wrapper">
              <img src={Img5} alt="" />
            </div>
            <div className="text">
              <div className="insurance-slide_card__title">พ.ร.บ + ภาษี</div>
              <p className="insurance-box__content">คุ้นครองทันที</p>
            </div>
            <div className="insurance-button">
              {" "}
              <Buttons
                onClick={() => (window.location.href = "#/select-service-page")}
                label="เช็กเบี้ยประกัน"
                variant="primary"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="insurance-slide">
          <div className="insurance-slide_card">
            <div className="insurance-slide__img-wrapper">
              <img src={Img4} alt="" />
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
              <img src={Img3} alt="" />
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
              <img src={Imgุ6} alt="" />
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
              <img src={Imgุ7} alt="" />
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

    {/* แสดงแถบสัญลักษณ์เพื่อบอกตำแหน่งของสไลด์ */}
    <div className="slide-indicator">
        {Array.from({ length: totalSlides }, (_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
          ></span>
        ))}
      </div>

    </section>
  );
}

export default MySlideshow;
