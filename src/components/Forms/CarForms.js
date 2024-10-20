/*ของ React */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/*material Ui*/
import {
  TextField,
  useMediaQuery,
  Autocomplete,
  MenuItem,
} from "@mui/material";

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

function CarForms() {
  const [formData, setFormData] = useState({
    carBrand: "", // ฟิลด์สำหรับเก็บยี่ห้อรถยนต์
    model: "", // ฟิลด์สำหรับเก็บรุ่นรถยนต์
    color: "", // ฟิลด์สำหรับเก็บสีรถยนต์
    registrationType: "", // ฟิลด์สำหรับเก็บชนิดทะเบียนรถยนต์
    licensePlate: "", // ฟิลด์สำหรับเก็บเลขทะเบียนรถ
    licensePlate2: "", // เพิ่มฟิลด์เลขทะเบียนรถ (กลุ่มที่ 2)
    registrationYear: "", // เพิ่มฟิลด์ปีที่จดทะเบียน
    engineSize: "", // เพิ่มฟิลด์ขนาดรถยนต์
    vehicleWeight: "", // เพิ่มฟิลด์นํ้าหนักรถ
    numberSeats: "", //เพิ่มฟิลด์จํานวนที่นั่ง
    chassisNumber: "", // /เพิ่มฟิลด์ หมายเลขตัวถัง
    provinceRegistration: "", //เพิ่มฟิลด์ จังหวัดที่ลงทะเบียน
    startDate: "", // เพิ่มฟิลด์ วันที่ต้องการเริ่มใช้งานเอกสาร
  });

  const [errors, setErrors] = useState({
    carBrand: false, // แสดงสถานะข้อผิดพลาดสำหรับฟิลด์ยี่ห้อรถยนต์
    model: false, // แสดงสถานะข้อผิดพลาดสำหรับฟิลด์รุ่นรถยนต์
    color: false, // แสดงสถานะข้อผิดพลาดสำหรับฟิลด์สีรถยนต์
    registrationType: false, // แสดงสถานะข้อผิดพลาดสำหรับฟิลด์ชนิดทะเบียนรถยนต์
    licensePlate: false, // แสดงสถานะข้อผิดพลาดสำหรับฟิลด์เลขทะเบียนรถ
    licensePlate2: false, // เพิ่มข้อผิดพลาดสำหรับเลขทะเบียนรถ (กลุ่มที่ 2)
    registrationYear: false, // เพิ่มข้อผิดพลาดฟิลด์ปีที่จดทะเบียน
    engineSize: false, //  เพิ่มข้อผิดพลาดฟิลด์ขนาดรถยนต์
    vehicleWeight: false, // เพิ่มข้อผิดพลาดฟิลด์นํ้าหนักรถ
    numberSeats: false, // เพิ่มข้อผิดพลาดฟิลด์จํานวนที่นั้ง
    chassisNumber: false, // เพิ่มข้อผิดพลาดฟิลด์หมายเลขตัวถัง
    provinceRegistration: false, // เพิ่มข้อผิดพลาดฟิลด์จังหวัดที่ลงทะเบียน
    startDate: false, // เพิ่มข้อผิดพลาดฟิลด์วันที่ต้องการเริ่มใช้งานเอกสาร
  });

  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:702px)"); // ตรวจสอบขนาดหน้าจอ
  
  const carModels = {
    Toyota: ["Camry", "Corolla", "Hilux"],
    Honda: ["Civic", "Accord", "CR-V"],
    Nissan: ["Altima", "370Z", "Rogue"],
    Mazda: ["Mazda3", "CX-5", "MX-5"],
    BMW: ["X5", "3 Series", "5 Series"],
  };

  const provinces = [
    "กรุงเทพมหานคร",
    "เชียงใหม่",
    "เชียงราย",
    "ขอนแก่น",
    "นครราชสีมา",
    "สงขลา",
    "สุราษฎร์ธานี",
    "เชียงตุง",
    "ตาก",
    "นครพนม",
    "นราธิวาส",
    "ประจวบคีรีขันธ์",
    "ปทุมธานี",
    "พังงา",
    "พัทลุง",
    "ภูเก็ต",
    "ลำปาง",
    "ลำพูน",
    "อุตรดิตถ์",
    "อุบลราชธานี",
    "เชียงใหม่",
    "ตรัง",
    "สุโขทัย",
    "อ่างทอง",
    "บุรีรัมย์",
    "สระบุรี",
    "นครศรีธรรมราช",
    "สมุทรปราการ",
    "สมุทรสงคราม",
    "ระนอง",
    "ราชบุรี",
    "เพชรบุรี",
    "ประจวบคีรีขันธ์",
    "สตูล",
    "ชัยภูมิ",
    "แม่ฮ่องสอน",
    "นครนายก",
    "พิษณุโลก",
    "เพชรบูรณ์",
    "บุรีรัมย์",
    "หนองคาย",
    "บึงกาฬ",
    "สุรินทร์",
    "พะเยา",
    "สิงห์บุรี",
    "กำแพงเพชร",
    "นครสวรรค์",
    "น่าน",
    "พะเยา",
    // ... เพิ่มจังหวัดอื่น ๆ ที่ต้องการ
  ];

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
      carBrand,
      model,
      color,
      registrationType,
      licensePlate,
      licensePlate2,
      registrationYear,
      engineSize,
      vehicleWeight,
      numberSeats,
      chassisNumber,
      provinceRegistration,
      startDate,
    } = formData;

    const newErrors = {
      carBrand: !carBrand,
      model: !model,
      color: !color,
      registrationType: !registrationType,
      licensePlate: false, // เริ่มต้นเป็น false เพื่อรอการตรวจสอบ
      licensePlate2: !licensePlate2, // ตรวจสอบฟิลด์ licensePlate2
      registrationYear: !registrationYear, // ตรวจสอบฟิลด์ ปีที่ลงทะเบียบ
      engineSize: !engineSize, // ตรวจสอบฟิลด์ ขนาดรถยนต์
      vehicleWeight: !vehicleWeight, // ตรวจสอบฟิลด์  นํ้าหนักรถ
      numberSeats: !numberSeats, // ตรวจสอบฟืวด์  จํานวนที่นั่ง
      chassisNumber: !chassisNumber, //  ตรวจสอบฟืวด์ หมายเลขตัวถัง
      provinceRegistration: !provinceRegistration, // ตรวจสอบฟืวด์ จังหวัดที่ลงทะเบียน
      startDate: !startDate, // ตรวจสอบฟิวด์
    };

    // ตรวจสอบเลขทะเบียนรถ
    const licensePlateRegex = /^[ก-ฮ0-9]{1,7}$/; // ตรวจสอบ  licensePlate
    const licensePlate2Regex = /^[ก-ฮ0-9]+$/; // ตรวจสอบ licensePlate2 (ไม่มีจำนวนจำกัด)

    // ตรวจสอบให้เป็นตัวเลข 4 หลัก (ปีที่จดลงทะเบียบ)
    const yearRegex = /^[0-9]{4}$/;

    // ตรวจสอบว่า engineSize เป็นตัวเลขเท่านั้น
    const engineSizeRegex = /^[0-9]+$/;

    // ตรวจสอบว่า  vehicleWeight เป็นตัวเลขเท่านั้น
    const vehicleWeightRegex = /^[0-9]+$/;

    //ตรวจสอบว่า numberSeats
    const numberSeatsRegex = /^[0-9]+$/;

    //ตรวจสอบว่า  หมายเลขตัวถัง
    const chassisNumberRegex = /^[A-Za-z0-9]+$/; // ตัวอักษรอังกฤษและตัวเลข

    // สร้าง regex สำหรับตรวจสอบชื่อจังหวัด
    const provinceRegistrationRegex = new RegExp(`^(${provinces.join("|")})$`);
    newErrors.provinceRegistration =
      !provinceRegistration ||
      !provinceRegistrationRegex.test(provinceRegistration);

    // ทำการตรวจสอบค่าต่าง ๆ
    newErrors.licensePlate =
      !licensePlate || !licensePlateRegex.test(licensePlate); // ตรวจสอบเลขทะเบียนรถ

    newErrors.licensePlate2 =
      !licensePlate2 || !licensePlate2Regex.test(licensePlate2); // ตรวจสอบเลขทะเบียนรถกลุ่ม 2

    newErrors.registrationYear =
      !registrationYear || !yearRegex.test(registrationYear); // ตรวจสอบปีที่จดทะเบียน

    newErrors.engineSize = !engineSize || !engineSizeRegex.test(engineSize); // ตรวจสอบว่ามีค่าหรือไม่และเป็นตัวเลข

    newErrors.vehicleWeight =
      !vehicleWeight || !vehicleWeightRegex.test(vehicleWeight); // ตรวจสอบว่ามีค่าว่างหรือเป็นตัวเลช

    newErrors.numberSeats = !numberSeats || !numberSeatsRegex.test(numberSeats); // ตรวจสอบว่ามีค่าว่างหรือเป็นตัวเลข
    setErrors(newErrors);

    newErrors.chassisNumber =
      !chassisNumber || !chassisNumberRegex.test(chassisNumber); // ตรวจสอบว่ามีค่าว่างหรือเป็นตัวเลขเเละอักษรอังกฤษ

    setErrors(newErrors);

    if (
      !newErrors.carBrand &&
      !newErrors.model &&
      !newErrors.color &&
      !newErrors.registrationType &&
      !newErrors.licensePlate &&
      !newErrors.licensePlate2 &&
      !newErrors.registrationYear && // ตรวจสอบปีที่จดทะเบียนด้วย
      !engineSize.engineSize && // ตรวจสอบขนาดรถยนต์
      !vehicleWeight.vehicleWeight && // ตรวจสอบนํ้าหนักรถ
      !chassisNumber.chassisNumber && // ตรวจสอบหมายเลขตัวถัง
      !provinceRegistration.provinceRegistration &&
      !startDate.startDate
    ) {
      console.log("ข้อมูลที่ส่ง:", formData);
      // ทำการส่งข้อมูลที่นี่

      navigate("/policy-ownerInfo");
    }
  };

  return (
    <div>
      {/* เพิ่มหัวข้อหลัก */}
      <MainTitle text="ข้อมูลรถยนต์" />
      <FormContainer>
        {/* เเถวที่ 1 */}
        <SectionTitle text="ข้อมูลรถยนต์" iconClass="fa-solid fa-car" />
        <ResponsiveStack isSmallScreen={isSmallScreen}>
          <SelectField
            label="ยี่ห้อรถยนต์"
            name="carBrand"
            value={formData.carBrand}
            onChange={handleChange}
            options={["Toyota", "Honda", "Nissan", "Mazda", "BMW"]}
            error={errors.carBrand}
          />
          <SelectField
            label="รุ่นรถยนต์"
            name="model"
            value={formData.model}
            onChange={handleChange}
            options={carModels[formData.carBrand] || []}
            error={errors.model}
            disabled={!formData.carBrand}
          />
        </ResponsiveStack>

        {/* เเถวที่2 */}
        <ResponsiveStack>
          <SelectField
            label="สีรถยนต์"
            name="color"
            value={formData.color}
            onChange={handleChange}
            options={[
              "แดง",
              "ฟ้า",
              "เขียว",
              "ดำ",
              "ขาว",
              "เหลือง",
              "ส้ม",
              "ม่วง",
              "น้ำเงิน",
              "ชมพู",
              "น้ำตาล",
              "เทา",
              "ทอง",
              "เงิน",
              "เบจ",
              "เขียวอ่อน",
              "เขียวเข้ม",
              "ฟ้าอ่อน",
              "ฟ้าเข้ม",
              "แดงเข้ม",
              "แดงอ่อน",
              "ขาวมุก",
              "ดำด้าน",
              "ดำเงา",
            ]}
            error={errors.color}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 48 * 5 + 8, // ปรับให้แสดงผลได้ 5 รายการ
                },
              },
            }}
          />
        </ResponsiveStack>

        {/* เพิ่มหัวข้อหมวดหมู่ */}

        <SectionTitle text=" ทะเบียนรถยนต์" iconClass="fa fa-id-card" />

        {/* เเถวที่3 */}
        <ResponsiveStack isSmallScreen={isSmallScreen}>
          <SelectField
            label="ชนิดทะเบียนรถยนต์"
            name="registrationType" // ชื่อฟิลด์ที่ต้องการ
            value={formData.registrationType} // ค่าของฟิลด์ที่เก็บใน state
            onChange={handleChange} // ฟังก์ชันที่ใช้จัดการการเปลี่ยนแปลง
            options={["ทะเบียนทั่วไป", "ทะเบียนขาว", "ทะเบียนแดง"]} // ตัวเลือกของฟิลด์
            error={errors.registrationType} // ข้อผิดพลาดที่เกิดขึ้น
          />
    

    <TextField
            label="ปีที่จดทะเบียน"
            name="registrationYear"
            value={formData.registrationYear} // เชื่อมโยงกับ state
            onChange={handleChange} // ฟังก์ชันจัดการการเปลี่ยนแปลง
            variant="outlined"
            fullWidth
            error={errors.registrationYear} // แสดงข้อผิดพลาด
            helperText={
              errors.registrationYear
                ? "กรุณากรอก (พ.ศ เท่านั้น เช่น 2567 )"
                : ""
            } // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
          />
        </ResponsiveStack>

        {/* เเถวที่4 */}
        <ResponsiveStack isSmallScreen={isSmallScreen}>
        <TextField
            label="เลขทะเบียนรถ (กลุ่มที่ 1)"
            name="licensePlate" // ตั้งชื่อฟิลด์ที่เก็บใน state
            value={formData.licensePlate} // ค่าของฟิลด์ที่เก็บใน state
            onChange={handleChange} // ฟังก์ชันที่ใช้จัดการการเปลี่ยนแปลง
            variant="outlined"
            fullWidth
            error={errors.licensePlate} // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
            helperText={
              errors.licensePlate
                ? !formData.licensePlate
                  ? "กรุณากรอก เลขทะเบียนรถ"
                  : "กรุณากรอกเลขทะเบียนรถ (ในรูปแบบที่ถูกต้อง)"
                : "" // ไม่มีข้อผิดพลาด
            } // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
          />
          <TextField
            label="เลขทะเบียนรถ (กลุ่มที่ 2)"
            name="licensePlate2" // ตั้งชื่อฟิลด์ที่เก็บใน state
            value={formData.licensePlate2} // ค่าของฟิลด์ที่เก็บใน state
            onChange={handleChange} // ฟังก์ชันที่ใช้จัดการการเปลี่ยนแปลง
            variant="outlined"
            fullWidth
            error={errors.licensePlate2} // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
            helperText={
              errors.licensePlate2
                ? !formData.licensePlate2
                  ? "กรุณากรอกเลขทะเบียนรถ (กลุ่มที่ 2)"
                  : "กรุณากรอกเลขทะเบียนรถ (ในรูปแบบที่ถูกต้อง)"
                : "" // ไม่มีข้อผิดพลาด
            } // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
          />
                <Autocomplete
            fullWidth
            options={provinces}
            renderInput={(params) => (
              <TextField
                {...params}
                label="จัดหวัดที่จดทะเบียน"
                name="provinceRegistration"
                value={formData.provinceRegistration} // เชื่อมโยงกับ state
                onChange={handleChange} // ฟังก์ชันจัดการการเปลี่ยนแปลง
                variant="outlined"
                error={errors.provinceRegistration} // แสดงข้อผิดพลาด
                helperText={
                  errors.provinceRegistration
                    ? !formData.provinceRegistration
                      ? "กรุณาเลือก จัดหวัดที่จดทะเบียน"
                      : "กรุณากรอกให้ถูกต้อง ไม่เว้นเพิ่มที่ว่าง"
                    : ""
                } // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
              />
            )}
            freeSolo
          />
    
        
    
        </ResponsiveStack>

        <SectionTitle text="ข้อมูลทางเทคนิค" iconClass="fa fa-cogs" />
        {/* เเถวที่5 */}
        <ResponsiveStack isSmallScreen={isSmallScreen}>
          <TextField
            label="ขนาดเครื่องยนต์ cc" // ป้ายฟิลด์
            name="engineSize" // ชื่อฟิลด์ที่เก็บใน state
            value={formData.engineSize} // ค่าของฟิลด์ที่เก็บใน state
            onChange={handleChange} // ฟังก์ชันที่ใช้จัดการการเปลี่ยนแปลง
            variant="outlined"
            fullWidth
            error={errors.engineSize} // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
            helperText={
              errors.engineSize
                ? !formData.engineSize
                  ? "กรุณากรอกขนาดเครื่องยนต์ cc"
                  : "กรุณากรอกขนาดเครื่องยนต์เป็นตัวเลข"
                : "" // ข้อความช่วยเหลือ
            }
          />
          <TextField
            label="นํ้าหนักรถ" // นํ้าหนักรถฟิลด์
            name="vehicleWeight"
            value={formData.vehicleWeight}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            error={errors.vehicleWeight}
            helperText={
              errors.vehicleWeight
                ? !formData.vehicleWeight
                  ? "กรุณากรอก นํ้าหนักรถ"
                  : "กรุณากรอก เป็นตัวเลข"
                : "" // ข้อความช่วยเหลือ
            }
          />
        </ResponsiveStack>

        <ResponsiveStack isSmallScreen={isSmallScreen}>
          <TextField
            label="จํานวนที่นั่ง" // ป้ายฟิลด์
            name="numberSeats" // ชื่อฟิลด์ที่เก็บใน state
            value={formData.numberSeats} // ค่าของฟิลด์ที่เก็บใน state
            onChange={handleChange} // ฟังก์ชันที่ใช้จัดการการเปลี่ยนแปลง
            variant="outlined"
            fullWidth
            error={errors.numberSeats} // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
            helperText={
              errors.numberSeats
                ? !formData.numberSeats
                  ? "กรุณากรอก จํานวนที่นั่ง"
                  : "กรุณากรอก เป็นตัวเลข"
                : "" // ข้อความช่วยเหลือ
            }
          />
          <TextField
            label="หมายเลขตัวถัง" // ป้ายฟิลด์
            name="chassisNumber" // ชื่อฟิลด์ที่เก็บใน state
            value={formData.chassisNumber} // ค่าของฟิลด์ที่เก็บใน state
            onChange={handleChange} // ฟังก์ชันที่ใช้จัดการการเปลี่ยนแปลง
            variant="outlined"
            fullWidth
            error={errors.chassisNumber} // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
            helperText={
              errors.chassisNumber
                ? !formData.chassisNumber
                  ? "กรุณากรอก หมายเลขตัวถัง"
                  : "กรุณากรอก (ต้องเป็นตัวเลขและตัวอักษร)"
                : ""
            }
          />
        </ResponsiveStack>

        <SectionTitle text="ข้อมูลการใช้งาน" iconClass="fa fa-info-circle" />
        <ResponsiveStack>
          <TextField
            label="วันที่ต้องการเริ่มใช้งานเอกสาร"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            error={errors.startDate} // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
            helperText={
              errors.startDate ? "กรุณากรอก วันที่ต้องการเริ่มใช้งานเอกสาร" : ""
            } // ข้อความช่วยเหลือเมื่อเกิดข้อผิดพลาด
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </ResponsiveStack>
      </FormContainer>

      <StickyFooter>
        {/* ปุ่มส่งข้อมูล */}
        <Buttons onClick={handleSubmit} variant="primary" label="บันทึก" />
      </StickyFooter>
    </div>
  );
}

export default CarForms;
