import React from "react";
import "./LoginPage.css";
import Logo from "../../components/Logos/Logo"; // นำเข้าคอมโพเนนต์โลโก้
import CarIllustration from "../../components/Illustrations/CarIllustration"; // นำเข้าคอมโพเนนต์ภาพประกอบรถ
import LogInForms from "../../components/Forms/LogInForms";
import ConnectOptions from "../../components/ConnectOptions/ConnectOptions";
function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <Logo /> {/* แสดงโลโก้ */}
          <CarIllustration /> {/* แสดงภาพประกอบรถ */}
        </div>
        <LogInForms />
        <ConnectOptions />
      </div>
    </div>
  );
}

export default LoginPage;
