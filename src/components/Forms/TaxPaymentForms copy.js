/*ของ React */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
/*material Ui*/
import { Stack, useMediaQuery, Autocomplete, TextField } from "@mui/material";

/*เเสดงผลฟอร์ม ui*/
import FormContainer from "./FormContainer.js"; /* โครงสร้างฟอร์ม */
import MainTitle from "./MainTitleTypography.js"; /* หัวข้อหลัก */
import SectionTitle from "./SectionTitleTypography.js"; /* หัวข้อรอง */

/*เเสดงปุ่มกด ui*/
import Buttons from "../Buttons/Buttons.js";
import StickyFooter from "../StickyFooter/StickyFooter.js";

// นำเข้า SelectField คอมโพเนนต์เพื่อใช้ในการแสดงฟิลด์แบบเลือก (dropdown)
// ซึ่งสามารถกำหนดตัวเลือก, จัดการค่า, แสดงข้อผิดพลาด และรองรับสถานะ disabled ได้
import SelectField from "./SelectField";

import ResponsiveStack from "./ResponsiveStack.js";

function TaxPaymentForms() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:536px)"); // ตรวจสอบขนาดหน้าจอ

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (value) {
      setErrors({ ...errors, [name]: false });
    }
  };
  const handleSubmit = () => {
    const {
      prefix,
      name,
      surname,
      insuranceType,
      idType,
      idCardNumber,
      expirationDate,
      address,
      postalCode,
      province,
      district,
      subdistrict,
    } = formData;

    const newErrors = {
      prefix: !prefix,
      name: !name,
      surname: !surname,
      insuranceType: !insuranceType,
      idType: !idType,
      idCardNumber: !idCardNumber,
      expirationDate: !expirationDate,
      address: !address,
      postalCode: !postalCode,
      province: !province,
      district: !district,
      subdistrict:!subdistrict
    };

    //  กําหนดความถูกต้อง
    const nameRegex = /^[ก-ฮA-Za-z]+$/; // รองรับเฉพาะอักษรไทยและอังกฤษ
    const surnameRegex = /^[ก-ฮA-Za-z]+$/; // รองรับเฉพาะอักษรไทยและอังกฤษ
    const idCardNumberRegex = /^\d{13}$/; // รองรับเฉพาะตัวเลข 13 หลัก
    const postalCodeRegex = /^[0-9]{5}$/; // รองรับเฉพาะตัวเลข 5 หลัก
    const districtRegex = /^[ก-ฮA-Za-z\s]+$/; // รองรับเฉพาะอักษรไทย (ก-ฮ) และอังกฤษ (A-Z, a-z) และเว้นวรรค
    const subdistrictRegex = /^[ก-ฮA-Za-z\s]+$/; // รองรับเฉพาะอักษรไทย (ก-ฮ) และอังกฤษ (A-Z, a-z) และเว้นวรรค
    // ตรวจสอบค่าว่าง เเละความถูกต้อง
    newErrors.name = !name || !nameRegex.test(name);
    newErrors.surname = !surname || !surnameRegex.test(surname);
    newErrors.idCardNumber =
      !idCardNumber || !idCardNumberRegex.test(idCardNumber);
    newErrors.postalCode = !postalCode || !postalCodeRegex.test(postalCode);

    newErrors.district = !district || !districtRegex.test(district); // ตรวจสอบว่าค่าว่างหรือไม่และตรงตามรูปแบบ
    newErrors.subdistrict = !subdistrict || !subdistrictRegex.test(subdistrict);
    setErrors(newErrors);

    if (
      !newErrors.prefix &&
      !newErrors.name &&
      !newErrors.surname &&
      !newErrors.insuranceType &&
      !newErrors.idType &&
      !newErrors.idCardNumber &&
      !expirationDate.expirationDate &&
      !address.address &&
      !province.province &&
      !district.district &&
      !subdistrict.subdistrict
    ) {
      console.log("ข้อมูลที่ส่ง:", formData);
      // ทำการส่งข้อมูลที่นี่

      navigate("/payment-page");
    }
  };
  return (
    <div>
      <MainTitle text="ข้อมูลการชำระภาษี" />

      <FormContainer>
        <SectionTitle text="ข้อมูลเครื่องยนต์" iconClass="fa-solid fa-car" />
   
  

 
    
      </FormContainer>

      <StickyFooter>
        <Buttons onClick={handleSubmit}  variant="primary" label="บันทึก" />
      </StickyFooter>
    </div>
  );
}

export default TaxPaymentForms;
