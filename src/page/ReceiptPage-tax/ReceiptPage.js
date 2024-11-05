import React from "react";
import "../../components/layout-wrapper/layout-wrapper.css";
import HandleBack from "../../components/handleBack/handleBack"; /* ปุ่มย้อนกลับ*/
import Buttons from "../../components/Buttons/Buttons";
import Receipt from "../../components/Receipt/Receipt";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import OrderDetailsTax from "../../components/OrderDetailsTax/OrderDetailsTax";
import html2pdf from "html2pdf.js"; // นำเข้าไลบรารี html2pdf.js

function ReceiptPage() {
  const generatePDF = () => {
    const element = document.getElementById("receipt-content");

    // ตรวจสอบขนาดหน้าจอ หากเป็นมือถือ ให้แสดง `#receipt-content` ชั่วคราว
    if (window.innerWidth <= 658) {
      element.style.display = "block";
    }

    const opt = {
      filename: "ใบเสร็จ.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    // สร้าง PDF และซ่อน `#receipt-content` อีกครั้งหลังจากเสร็จสิ้น
    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .then(() => {
        if (window.innerWidth <= 658) {
          element.style.display = "none"; // ซ่อนอีกครั้งหลังจากสร้าง PDF
        }
      });
  };

  return (
    <div>
      <HandleBack />
      <div className="layout-wrapper customize">
        <div className="button-container-right">
          <Buttons
            iconClass="fa-solid fa-download"
            variant="primary"
            width="119px"
            height="51px"
            label="โหลดใบเสร็จ"
            fontSize="14px"
            onClick={generatePDF}
          />
        </div>
        <div id="receipt-content" style={{ display: window.innerWidth <= 658 ? "none" : "flex" }}>
          <Receipt />
       
          <OrderDetailsTax />
        </div>
      </div>
    </div>
  );
}

export default ReceiptPage;
