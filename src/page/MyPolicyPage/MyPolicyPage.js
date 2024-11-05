import React, { useState } from "react";
import "../../components/layout-wrapper/layout-wrapper.css";
import HandleBack from "../../components/handleBack/handleBack"; /* ปุ่มย้อนกลับ */
import "./ResponsiveTable.css";
import CustomerMenu from "../../components/CustomerMenu/CustomerMenu";
function MyPolicyPage() {
  // ข้อมูลตารางในรูปแบบของ array
  const initialTableData = [
    {
      orderCode: "#li01",
      servicesUsede: "ต่อกรมธรรม์เเละภาษี",
      startDate: "3 มีนาคม 2577",
      status: "รอตรวจสอบ",
    },
    {
      orderCode: "#li02",
      servicesUsede: "ต่อกรมธรรม์",
      startDate: "6 มีนาคม 2577",
      status: "ตรวจสอบเเล้ว",
    },

    {
      orderCode: "#li03",
      servicesUsede: "ภาษี",
      startDate: "8 มีนาคม 2577",
      status: "ตรวจสอบเเล้ว",
    },
    {
      orderCode: "#li04",
      servicesUsede: "ภาษี",
      startDate: "9 มีนาคม 2577",
      status: "ตรวจสอบเเล้ว",
    },
    {
      orderCode: "#li05",
      servicesUsede: "ภาษี",
      startDate: "10 มีนาคม 2577",
      status: "ตรวจสอบเเล้ว",
    },

    {
      orderCode: "#li06",
      servicesUsede: "ภาษี",
      startDate: "11 มีนาคม 2577",
      status: "ตรวจสอบเเล้ว",
    },
    {
      orderCode: "#li07",
      servicesUsede: "ต่อกรมธรรม์เเละภาษี",
      startDate: "3 มีนาคม 2577",
      status: "รอตรวจสอบ",
    },
    {
      orderCode: "#li08",
      servicesUsede: "ต่อกรมธรรม์",
      startDate: "6 มีนาคม 2577",
      status: "ตรวจสอบเเล้ว",
    },

    {
      orderCode: "#li09",
      servicesUsede: "ภาษี",
      startDate: "8 มีนาคม 2577",
      status: "ตรวจสอบเเล้ว",
    },
    {
      orderCode: "#li10",
      servicesUsede: "ภาษี",
      startDate: "9 มีนาคม 2577",
      status: "ตรวจสอบเเล้ว",
    },
    {
      orderCode: "#li11",
      servicesUsede: "ภาษี",
      startDate: "10 มีนาคม 2577",
      status: "ตรวจสอบเเล้ว",
    },

    {
      orderCode: "#li12",
      servicesUsede: "ภาษี",
      startDate: "11 มีนาคม 2577",
      status: "ตรวจสอบเเล้ว",
    },

    // เพิ่มข้อมูลแถวที่ต้องการที่นี่

    // สามารถเพิ่มแถวเพิ่มเติมตามต้องการ
  ];
  const [tableData, setTableData] = useState(initialTableData);
  const [isAscending, setIsAscending] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(10); // จำนวนรายการที่แสดง
  const [currentPage, setCurrentPage] = useState(1); // หน้าปัจจุบัน
  const [searchTerm, setSearchTerm] = useState("");
  const sortTableByOrderCode = () => {
    const sortedData = [...tableData].sort((a, b) => {
      if (isAscending) {
        return a.orderCode.localeCompare(b.orderCode);
      } else {
        return b.orderCode.localeCompare(a.orderCode);
      }
    });
    setTableData(sortedData);
    setIsAscending(!isAscending);
  };

  // ฟังก์ชันจัดการเปลี่ยนจำนวนรายการที่แสดง
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // รีเซ็ตหน้าเมื่อเปลี่ยนจำนวนรายการ
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredData = tableData.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // คำนวณข้อมูลที่จะแสดงในตาราง
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <HandleBack />
      {/* ปุ่มย้อนกลับ */}
      <div className="layout-wrapper desktop custom">
        <div className="policy-container">
          <CustomerMenu />
          <div className="policy__table-box">
            <div className="table-title">
              <i class="fa-solid fa-user"></i>
              <p>กรมธรรม์ของฉัน</p>
            </div>

            {/* Dropdown สำหรับเลือกจำนวนรายการ */}
            <div className="items-per-page">
              <div>
              <label htmlFor="itemsPerPage">แสดง:</label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                {/* เพิ่มตัวเลือกสำหรับทั้งหมด */}
                <option value={tableData.length}>
                  ทั้งหมด({tableData.length})
                </option>
              </select>
              <span> รายการ</span>
              </div>
        

              {/* ช่องค้นหา */}
              <div className="search-bar">
                <i className="fa-solid fa-magnifying-glass"></i>{" "}
                {/* ไอคอนแว่นขยาย */}
                <input
                  type="text"
                  placeholder="ค้นหา..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="search-input"
                />
              </div>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th
                    onClick={sortTableByOrderCode}
                    style={{ cursor: "pointer" }}
                  >
                    <span>รหัสออเดอร์ </span>
                    <i
                      className={`fa-solid ${
                        isAscending ? "fa-caret-up" : "fa-caret-down"
                      }`}
                    ></i>
                  </th>
                  <th
                    onClick={sortTableByOrderCode}
                    style={{ cursor: "pointer" }}
                  >
                    <span> บริหารที่ใช้</span>{" "}
                    <i
                      className={`fa-solid ${
                        isAscending ? "fa-caret-up" : "fa-caret-down"
                      }`}
                    ></i>{" "}
                  </th>
                  <th
                    onClick={sortTableByOrderCode}
                    style={{ cursor: "pointer" }}
                  >
                    <span>วันที่ออกใบเสร็จ</span>{" "}
                    <i
                      className={`fa-solid ${
                        isAscending ? "fa-caret-up" : "fa-caret-down"
                      }`}
                    ></i>
                  </th>
                  <th
                    onClick={sortTableByOrderCode}
                    style={{ cursor: "pointer" }}
                  >
                    <span>สถานะ</span>{" "}
                    <i
                      className={`fa-solid ${
                        isAscending ? "fa-caret-up" : "fa-caret-down"
                      }`}
                    ></i>
                  </th>
                  <th>
                    <span>เอกสารใบคําสั่งซื้อ</span>{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td data-label="รหัสออเดอร์">
                      <span
                        className="order-icon"
                        onClick={sortTableByOrderCode}
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className={`fa-solid ${
                            isAscending ? "fa-caret-up" : "fa-caret-down"
                          }`}
                        ></i>
                      </span>
                      {row.orderCode}
                    </td>

                    <td data-label="บริหารที่ใช้">
                      {" "}
                      <span
                        className="order-icon"
                        onClick={sortTableByOrderCode}
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className={`fa-solid ${
                            isAscending ? "fa-caret-up" : "fa-caret-down"
                          }`}
                        ></i>
                      </span>
                      {row.servicesUsede}
                    </td>
                    <td data-label="วันที่ออกใบเสร็จ">
                      {" "}
                      <span
                        className="order-icon"
                        onClick={sortTableByOrderCode}
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className={`fa-solid ${
                            isAscending ? "fa-caret-up" : "fa-caret-down"
                          }`}
                        ></i>
                      </span>
                      {row.startDate}
                    </td>

                    <td data-label="สถานะ">
                      <p
                        className={
                          row.status === "ตรวจสอบเเล้ว"
                            ? "status-checked-bg"
                            : "status-pending-bg"
                        }
                      >
                        {row.status}
                      </p>
                      <span
                        className="order-icon"
                        onClick={sortTableByOrderCode}
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className={`fa-solid ${
                            isAscending ? "fa-caret-up" : "fa-caret-down"
                          }`}
                        ></i>
                      </span>
                    </td>
                    <td data-label="เอกสารใบคําสั่งซื้อ">
                      <a href="#/receipt-page-taxAndLaw" className="btn">
                        PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPolicyPage;
