import React from 'react';
import './StickyFooter.css';

function StickyFooter({ children, backgroundColor }) {
  const footerStyle = {
    backgroundColor: backgroundColor || 'rgb(255 255 255 / 58%)', // ใช้ค่าสีที่ส่งเข้ามาหรือใช้สีพื้นฐานถ้าไม่มี
  };

  return (
    <div className='sticky-footer' style={footerStyle}>
      {children} {/* วางเนื้อหาที่นี่ */}
    </div>
  );
}

export default StickyFooter;
