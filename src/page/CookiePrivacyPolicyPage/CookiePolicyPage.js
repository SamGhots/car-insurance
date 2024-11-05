import React from "react";
import "./CookiePolicyPage.css";
import Footer from "../../components/footer/footer";

function CookiePolicyPage() {
  return (
    <div>
      <div className="CookiePolicy-container">
        <header className="PolicyHeader">
          <h1>นโยบายการใช้คุกกี้ในการประมวลผลข้อมูลส่วนบุคคล</h1>
        </header>
        <div className="PolicyTime">
          <p>วันที่มีผลบังคับใช้: 1 มกราคม 2024</p>
        </div>
        <div className="PolicyContent">
          <p>
            เว็บไซต์ของเรามีการใช้คุกกี้เพื่อช่วยประมวลผลข้อมูลส่วนบุคคล โดยมีวัตถุประสงค์เพื่อปรับปรุงประสบการณ์การใช้งานของคุณและทำให้เราสามารถนำเสนอเนื้อหาที่ตรงกับความสนใจของคุณมากขึ้น
          </p>
        </div>
        
        <header className="PolicyHeader">
          <h2>คุกกี้คืออะไร?</h2>
        </header>
        <div className="PolicyContent">
          <p>
            คุกกี้คือไฟล์ขนาดเล็กที่เก็บข้อมูลบนอุปกรณ์ของคุณเมื่อคุณเข้าเยี่ยมชมเว็บไซต์ของเรา คุกกี้เหล่านี้จะช่วยให้เราจดจำการตั้งค่าและพฤติกรรมการใช้งานของคุณเพื่อปรับปรุงการให้บริการ
          </p>
        </div>

        <header className="PolicyHeader">
          <h2>ประเภทของคุกกี้ที่เราใช้ในการประมวลผลข้อมูล</h2>
        </header>
        <div className="PolicyContent">
          <ul>
            <li>
              <strong>คุกกี้ที่จำเป็น:</strong> คุกกี้เหล่านี้เป็นคุกกี้พื้นฐานที่จำเป็นต่อการใช้งานเว็บไซต์อย่างปลอดภัย
            </li>
            <li>
              <strong>คุกกี้เพื่อการปรับเปลี่ยนตามผู้ใช้:</strong> คุกกี้เหล่านี้ช่วยให้เว็บไซต์สามารถจดจำความชอบและการตั้งค่าส่วนตัวของคุณได้ เพื่อปรับการนำเสนอเนื้อหาให้ตรงตามความสนใจ
            </li>
            <li>
              <strong>คุกกี้เพื่อการวิเคราะห์:</strong> เราใช้คุกกี้เหล่านี้ในการรวบรวมข้อมูลการใช้งานของผู้เข้าชม เพื่อให้เราสามารถพัฒนาและปรับปรุงการให้บริการได้ดียิ่งขึ้น
            </li>
          </ul>
        </div>

        <header className="PolicyHeader">
          <h2>การจัดการคุกกี้และความยินยอม</h2>
        </header>
        <div className="PolicyContent">
          <p>
            คุณสามารถตั้งค่าเบราว์เซอร์เพื่อปฏิเสธคุกกี้ได้ หากคุณต้องการยกเลิกการอนุญาตคุกกี้บางประเภท โปรดทราบว่าการปิดใช้งานคุกกี้อาจส่งผลกระทบต่อการใช้งานบางฟีเจอร์ของเว็บไซต์
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CookiePolicyPage;