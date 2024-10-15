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
import FileUpload from '../FileUpload/FileUpload';

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
    const {  /* ลบได้เลย ข้างใน*/
     
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

    const newErrors = { /* ลบได้เลย ข้างใน*/
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
      subdistrict: !subdistrict,
    };

    //  กําหนดความถูกต้อง

    // ตรวจสอบค่าว่าง เเละความถูกต้อง


    if (
   
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
        <ResponsiveStack>
          <TextField
            label="ความจุกระบอกสูบ (ซีซี)"
            name="engineCapacity"
            value={formData.engineCapacity}
            onChange={handleChange}
            error={errors.engineCapacity}
            fullWidth
            helperText={
              errors.engineCapacity
                ? !formData.engineCapacity
                  ? "กรุณากรอกความจุกระบอกสูบ"
                  : "กรุณากรอกความจุกระบอกสูบในรูปแบบที่ถูกต้อง"
                : "" // ไม่มีข้อผิดพลาด
            } // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
          ></TextField>
        </ResponsiveStack>
        <SectionTitle
          text="ปีล่าสุดที่ชำระภาษี"
          iconClass="fa-solid fa-calendar-check"
        />
        <ResponsiveStack isSmallScreen={isSmallScreen}>
          <TextField
            label="วันที่จดทะเบียน"
            type="date" // กำหนดประเภทเป็นวันที่
            name="registrationDate" // ชื่อฟิลด์
            value={formData.registrationDate} // ค่าปัจจุบันจากฟอร์ม
            onChange={handleChange} // ฟังก์ชันจัดการการเปลี่ยนแปลง
            error={errors.registrationDate} // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
            helperText={
              errors.registrationDate ? "กรุณากรอกวันที่จดทะเบียน" : ""
            } // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <TextField
            label="ปีล่าสุดที่จ่าย"
            type="date" // กำหนดประเภทเป็นวันที่
            name="lastPaidYear" // ชื่อฟิลด์
            value={formData.lastPaidYear} // ค่าปัจจุบันจากฟอร์ม
            onChange={handleChange} // ฟังก์ชันจัดการการเปลี่ยนแปลง
            error={errors.lastPaidYear} // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
            helperText={errors.lastPaidYear ? "กรุณากรอกปีล่าสุดที่จ่าย" : ""} // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </ResponsiveStack>

        <ResponsiveStack isSmallScreen={isSmallScreen}>
          <TextField
            label="วันที่ต้องการทําการจ่ายภาษี"
            type="date" // กำหนดประเภทเป็นวันที่
            name="paymentDate" // ชื่อฟิลด์
            value={formData.paymentDate} // ค่าปัจจุบันจากฟอร์ม
            onChange={handleChange} // ฟังก์ชันจัดการการเปลี่ยนแปลง
            error={errors.paymentDate} // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
            helperText={
              errors.paymentDate ? "กรุณากรอกวันที่ต้องการทําการจ่ายภาษี" : ""
            } // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />

          <TextField
            label="เวลาที่ต้องการทําการ"
            type="time" // กำหนดประเภทเป็นเวลา
            name="paymentTime" // ชื่อฟิลด์ (เปลี่ยนเป็น "paymentTime" เพื่อชัดเจนว่าเป็นเวลา)
            value={formData.paymentTime} // ค่าปัจจุบันจากฟอร์ม
            onChange={handleChange} // ฟังก์ชันจัดการการเปลี่ยนแปลง
            error={errors.paymentTime} // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
            helperText={
              errors.paymentTime ? "กรุณากรอกเวลาที่ต้องการทําการ" : ""
            } // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </ResponsiveStack>
        <SectionTitle text="การจัดส่ง" iconClass="fa-solid fa-truck-fast" />
        <ResponsiveStack>
          <SelectField
            label="ประเภทการจัดส่ง"
            name="deliveryType" // ชื่อฟิลด์
            value={formData.deliveryType} // ค่าปัจจุบันจากฟอร์ม
            onChange={handleChange} // ฟังก์ชันจัดการการเปลี่ยนแปลง
            options={[
              "จัดส่งภายในประเทศ",
              "จัดส่งต่างประเทศ",
              "จัดส่งด่วน",
              "จัดส่งธรรมดา",
            ]} // ตัวเลือกที่ให้ผู้ใช้เลือก
            error={errors.deliveryType} // ข้อผิดพลาด (ถ้ามี)
            fullWidth // ทำให้ฟิลด์มีความกว้างเต็ม
          />
        </ResponsiveStack>
        <FileUpload/>
      </FormContainer>

      <StickyFooter>
        <Buttons onClick={handleSubmit} variant="primary" label="บันทึก" />
      </StickyFooter>
    </div>
  );
}

export default TaxPaymentForms;
