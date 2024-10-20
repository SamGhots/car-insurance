import React from "react";
import "./ConnectOptions.css";
import { useNavigate } from "react-router-dom";
import line from "../../assets/LINE.png";
function ConnectOptions() {
  const navigate = useNavigate();
  return (
    <div className="connect-options">
      <h1>or connect with:</h1>
      <div className="connect-options__box">
        <div className="connect-options__box--item">
          <img src={line} alt="Separator line" />
        </div>
      </div>
      <p>
        Don't have an account?   <span    onClick={() => { navigate("/register-page"); }} // เปลี่ยนเส้นทางไปยังหน้า register
        style={{ cursor: "pointer", color: "#3FABD9" }} // เพิ่มสไตล์ให้ชัดเจนว่าเป็นลิงก์
      >
          Register
        </span>
      </p>
    </div>
  );
}

export default ConnectOptions;
