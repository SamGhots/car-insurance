import React from 'react';
import './PageTitle.css'; // สร้างไฟล์ CSS สำหรับการจัดการสไตล์ของคอมโพเนนต์นี้

const PageTitle = ({ title, description }) => {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default PageTitle;
