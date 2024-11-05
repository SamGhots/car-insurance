import React from "react";
import "./CookiePolicyPage.css";
import Footer from "../../components/footer/footer";

function CookiePolicyPage() {
  return (
    <div>
      <div className="CookiePolicy-container">
        <header className="PolicyHeader">
          <h1>นโยบายการใช้คุกกี้</h1>
        </header>
        <div className="PolicyTime">
          <p>วันที่มีผลบังคับใช้: 1 มกราคม 2024</p>
        </div>
        <div className="PolicyContent">
         <p>
            เว็บไซต์ของเราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ เมื่อคุณเข้าเยี่ยมชมเว็บไซต์ คุกกี้จะถูกจัดเก็บในอุปกรณ์ของคุณเพื่อช่วยเราจดจำการตั้งค่าและปรับปรุงการทำงานของเว็บไซต์ให้เหมาะสมยิ่งขึ้น
          </p>
         </div>
         <header className="PolicyHeader">
         <h2>คุกกี้คืออะไร?</h2>
        </header>



        <div className="PolicyContent">
        <p>
            คุกกี้คือไฟล์ขนาดเล็กที่ถูกเก็บไว้ในอุปกรณ์ของคุณเมื่อคุณเข้าเยี่ยมชมเว็บไซต์ คุกกี้จะช่วยให้เว็บไซต์จดจำข้อมูลเกี่ยวกับการเยี่ยมชมของคุณ เช่น การตั้งค่าภาษาและความชอบส่วนตัว
          </p>
         </div>

         <header className="PolicyHeader">
         <h2>ประเภทของคุกกี้ที่เราใช้</h2>
        </header>
  
        <div className="PolicyContent">
          <ul>
            <li>
              <strong>คุกกี้ที่จำเป็น:</strong> คุกกี้เหล่านี้จำเป็นต่อการทำงานของเว็บไซต์และช่วยให้คุณสามารถเข้าถึงฟีเจอร์ต่าง ๆ ของเว็บไซต์ได้อย่างปลอดภัย
            </li>
            <li>
              <strong>คุกกี้เพื่อการวิเคราะห์:</strong> คุกกี้เหล่านี้ช่วยให้เรารวบรวมข้อมูลการใช้งานเว็บไซต์เพื่อนำมาวิเคราะห์และปรับปรุงการให้บริการ
            </li>
          </ul>
       
        
        </div>
        <header className="PolicyHeader">
        <h2>การจัดการคุกกี้</h2>
        </header>


        <div className="PolicyContent">
        <p>
            คุณสามารถตั้งค่าเบราว์เซอร์ของคุณเพื่อปิดการใช้งานคุกกี้บางประเภทหรือทั้งหมด แต่โปรดทราบว่าการปิดใช้งานคุกกี้อาจทำให้บางฟีเจอร์ของเว็บไซต์ใช้งานไม่ได้
          </p>
        </div>
      
      </div>
      <Footer />
    </div>
  );
}

export default CookiePolicyPage;
