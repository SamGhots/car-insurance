import React from 'react';
import "../../components/layout-wrapper/layout-wrapper.css";
import HandleBack from "../../components/handleBack/handleBack"; /* ปุ่มย้อนกลับ */
import "./ResponsiveTable.css";

function MyPolicyPage() {
  // ข้อมูลตารางในรูปแบบของ array
  const tableData = [
    {
      orderCode: "#li7701",
      servicesUsede: "ต่อกรมธรรม์,ภาษี",
      endTime: "13:00(IST)",
      batchType: "Weekend",
      trainingMode: "Online Training",
      batchStatus: "[Open]",
    },
    // เพิ่มข้อมูลแถวที่ต้องการที่นี่
    {
      startDate: "2 Jan 2021",
      startTime: "10:00",
      endTime: "14:00(IST)",
      batchType: "Weekday",
      trainingMode: "In-Person Training",
      batchStatus: "[Closed]",
    },
    {
      startDate: "3 Jan 2021",
      startTime: "11:00",
      endTime: "15:00(IST)",
      batchType: "Weekend",
      trainingMode: "Online Training",
      batchStatus: "[Open]",
    },
    // สามารถเพิ่มแถวเพิ่มเติมตามต้องการ
  ];

  return (
    <>
      <HandleBack />
      {/* ปุ่มย้อนกลับ */}
      <div className="layout-wrapper desktop">
        <h1>Responsive Table</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>รหัสออเดอร์</th>
              <th>บริหารที่ใช้</th>
              <th>วันที่ออกใบเสร็จ</th>
              <th>-</th>
              <th>สถานะ</th>
              <th>ดาวน์โหลด</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td data-label="orderCode">{row.orderCode}</td>
                <td data-label="Start / End Time">{row.servicesUsede}</td>
                <td data-label="Batch Type">{row.batchType}</td>
                <td data-label="Training Mode">{row.trainingMode}</td>
                <td data-label="Batch Status" className='text_open'>{row.batchStatus}</td>
                <td data-label="#"><a href="#" className='btn'>Enroll Now</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyPolicyPage;
