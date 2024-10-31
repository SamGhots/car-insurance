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

function PolicyOwnerForms() {
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

      navigate("/paymen-page-taxAndLaw");
    }
  };
  return (
    <div>
      <MainTitle text="ข้อมูลเจ้าของกรมธรรม์" />

      <FormContainer>
        <SectionTitle text="ข้อมูลส่วนตัว" iconClass="fa-solid fa-user" />
        <ResponsiveStack>
          <SelectField
            label="คำนำหน้าชื่อ"
            name="prefix"
            value={formData.prefix}
            onChange={handleChange}
            options={["นาย", "นาง", "นางสาว"]}
            error={errors.prefix}
            fullWidth
          />
        </ResponsiveStack>
        <ResponsiveStack isSmallScreen={isSmallScreen}>
          <TextField
            label="ชื่อ"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            fullWidth
            helperText={
              errors.name
                ? !formData.name
                  ? "กรุณากรอก ชื่อ"
                  : "กรุณากรอก (ในรูปแบบที่ถูกต้อง)"
                : "" // ไม่มีข้อผิดพลาด
            } // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
          ></TextField>
          <TextField
            label="นามสกุล"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            error={errors.surname}
            fullWidth
            helperText={
              errors.surname
                ? !formData.surname
                  ? "กรุณากรอก นามสกุล"
                  : "กรุณากรอก (ในรูปแบบที่ถูกต้อง)"
                : "" // ไม่มีข้อผิดพลาด
            } // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
          ></TextField>
        </ResponsiveStack>
        <SectionTitle
          text="ข้อมูลผู้เอาประกัน"
          iconClass="fa-solid fa-user-shield"
        />
        <ResponsiveStack>
          <SelectField
            label="ประเภทของผู้เอาประกัน"
            name="insuranceType" // ชื่อฟิลด์
            value={formData.insuranceType} // ค่าปัจจุบันจากฟอร์ม
            onChange={handleChange} // ฟังก์ชันจัดการการเปลี่ยนแปลง
            options={["บุคคลธรรมดา", "นิติบุคคล", "บริษัทประกัน"]} // ตัวเลือกที่ให้ผู้ใช้เลือก
            error={errors.insuranceType} // ข้อผิดพลาด (ถ้ามี)
            fullWidth // ทำให้ฟิลด์มีความกว้างเต็ม
          />
          <SelectField
            label="ประเภทของเอกสารประจำตัว"
            name="idType" // ชื่อฟิลด์
            value={formData.idType} // ค่าปัจจุบันจากฟอร์ม
            onChange={handleChange} // ฟังก์ชันจัดการการเปลี่ยนแปลง
            options={["บัตรประชาชน", "ใบขับขี่", "หนังสือเดินทาง"]} // ตัวเลือกที่ให้ผู้ใช้เลือก
            error={errors.idType} // ข้อผิดพลาด (ถ้ามี)
            fullWidth // ทำให้ฟิลด์มีความกว้างเต็ม
          />
        </ResponsiveStack>
        <ResponsiveStack isSmallScreen={isSmallScreen}>
          <TextField
            label="หมายเลขบัตรประชาชน"
            name="idCardNumber" // ชื่อฟิลด์
            value={formData.idCardNumber} // ค่าปัจจุบันจากฟอร์ม
            onChange={handleChange} // ฟังก์ชันจัดการการเปลี่ยนแปลง
            error={errors.idCardNumber} // ข้อผิดพลาด (ถ้ามี)
            fullWidth // ทำให้ฟิลด์มีความกว้างเต็ม
            helperText={
              errors.idCardNumber // ตรวจสอบข้อผิดพลาดสำหรับหมายเลขบัตรประชาชน
                ? !formData.idCardNumber // ถ้าไม่มีการกรอกหมายเลข
                  ? "กรุณากรอก หมายเลขบัตรประชาชน" // ข้อความช่วยเหลือเมื่อไม่มีการกรอก
                  : "กรุณากรอก ให้ถูกต้อง 13หลัก" // ข้อความช่วยเหลือเมื่อกรอกไม่ถูกต้อง
                : "" // ไม่มีข้อผิดพลาด
            } // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
          />

          <TextField
            label="วันหมดอายุ"
            type="date" // กำหนดประเภทเป็นวันที่
            name="expirationDate" // ชื่อฟิลด์
            value={formData.expirationDate} // ค่าปัจจุบันจากฟอร์ม
            onChange={handleChange} // ฟังก์ชันจัดการการเปลี่ยนแปลง
            error={errors.expirationDate} // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
            helperText={
              errors.expirationDate ? "กรุณากรอกวันหมดอายุให้ถูกต้อง" : "" // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
            }
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </ResponsiveStack>
        <SectionTitle
          text="ข้อมูลที่อยู่"
          iconClass="fa-solid fa-location-dot"
        />
        <ResponsiveStack>
          <TextField
            label="ที่อยู่ตามบัตรประชาชน"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
            helperText={errors.address ? "กรุณากรอกที่อยู่ตามบัตร" : ""} // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
            multiline // ทำให้สามารถกรอกข้อความหลายบรรทัดได้
            rows={2} // จำนวนบรรทัดเริ่มต้นที่แสดง
            fullWidth
          />
        </ResponsiveStack>
        <ResponsiveStack isSmallScreen={isSmallScreen}>
          <TextField
            label="รหัสไปรษณีย์"
            name="postalCode" // ชื่อฟิลด์
            value={formData.postalCode} // ค่าปัจจุบันจากฟอร์ม
            onChange={handleChange} // ฟังก์ชันจัดการการเปลี่ยนแปลง
            error={errors.postalCode} // ข้อผิดพลาด (ถ้ามี)
            fullWidth // ทำให้ฟิลด์มีความกว้างเต็ม
            helperText={
              errors.postalCode // ตรวจสอบข้อผิดพลาดสำหรับรหัสไปรษณีย์
                ? !formData.postalCode // ถ้าไม่มีการกรอกหมายเลข
                  ? "กรุณากรอกรหัสไปรษณีย์" // ข้อความช่วยเหลือเมื่อไม่มีการกรอก
                  : "กรุณากรอกให้ถูกต้อง (รหัสไปรษณีย์ต้องเป็นตัวเลข 5 หลัก)" // ข้อความช่วยเหลือเมื่อกรอกไม่ถูกต้อง
                : "" // ไม่มีข้อผิดพลาด
            } // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
          />
          <SelectField
            label="จังหวัด" // ชื่อฟิลด์ที่จะแสดงให้ผู้ใช้เห็น
            name="province" // ชื่อฟิลด์สำหรับการจัดการค่าของจังหวัด
            value={formData.province} // ค่าปัจจุบันจากฟอร์มที่เก็บจังหวัด
            onChange={handleChange} // ฟังก์ชันที่ใช้ในการจัดการการเปลี่ยนแปลงเมื่อผู้ใช้เลือกจังหวัด
            options={[
              "กรุงเทพมหานคร",
              "เชียงใหม่",
              "เชียงราย",
              "ภูเก็ต",
              "นครราชสีมา",
              // เพิ่มจังหวัดอื่น ๆ ที่คุณต้องการให้ผู้ใช้เลือก
            ]} // ตัวเลือกที่ให้ผู้ใช้เลือก
            error={errors.province} // ข้อผิดพลาด (ถ้ามี) สำหรับฟิลด์จังหวัด
            fullWidth // ทำให้ฟิลด์มีความกว้างเต็ม
          />
        </ResponsiveStack>
        <ResponsiveStack isSmallScreen={isSmallScreen}>
          <TextField
            label="เขต/อำเภอ" // ชื่อฟิลด์ที่จะแสดงให้ผู้ใช้เห็น
            name="district" // ชื่อฟิลด์สำหรับการจัดการค่าของเขต/อำเภอ
            value={formData.district} // ค่าปัจจุบันจากฟอร์มที่เก็บเขต/อำเภอ
            onChange={handleChange} // ฟังก์ชันที่ใช้ในการจัดการการเปลี่ยนแปลงเมื่อผู้ใช้กรอกข้อมูล
            error={errors.district} // ข้อผิดพลาด (ถ้ามี) สำหรับฟิลด์เขต/อำเภอ
            fullWidth // ทำให้ฟิลด์มีความกว้างเต็ม
            helperText={
              // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
              errors.district // ตรวจสอบข้อผิดพลาดสำหรับเขต/อำเภอ
                ? !formData.district // ถ้าไม่มีการกรอก
                  ? "กรุณากรอกเขต/อำเภอ" // ข้อความช่วยเหลือเมื่อไม่มีการกรอก
                  : "กรุณากรอก (ในรูปแบบที่ถูกต้อง)" // ข้อความช่วยเหลือเมื่อกรอกไม่ถูกต้อง
                : "" // ไม่มีข้อผิดพลาด
            }
          />
          <TextField
            label="แขวง/ตำบล" // ชื่อฟิลด์ที่จะแสดงให้ผู้ใช้เห็น
            name="subdistrict" // ชื่อฟิลด์สำหรับการจัดการค่าของแขวง/ตำบล
            value={formData.subdistrict} // ค่าปัจจุบันจากฟอร์มที่เก็บแขวง/ตำบล
            onChange={handleChange} // ฟังก์ชันที่ใช้ในการจัดการการเปลี่ยนแปลงเมื่อผู้ใช้กรอกข้อมูล
            error={errors.subdistrict} // ข้อผิดพลาด (ถ้ามี) สำหรับฟิลด์แขวง/ตำบล
            fullWidth // ทำให้ฟิลด์มีความกว้างเต็ม
            helperText={
              // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
              errors.subdistrict // ตรวจสอบข้อผิดพลาดสำหรับแขวง/ตำบล
                ? !formData.subdistrict // ถ้าไม่มีการกรอก
                  ? "กรุณากรอก แขวง/ตำบล" // ข้อความช่วยเหลือเมื่อไม่มีการกรอก
                  : "กรุณากรอก (ในรูปแบบที่ถูกต้อง)" // ข้อความช่วยเหลือเมื่อกรอกไม่ถูกต้อง
                : "" // ไม่มีข้อผิดพลาด
            }
          />
        </ResponsiveStack>
        
      </FormContainer>

      <StickyFooter>
        <Buttons onClick={handleSubmit}  variant="primary" label="บันทึก" />
      </StickyFooter>
    </div>
  );
}

export default PolicyOwnerForms;
