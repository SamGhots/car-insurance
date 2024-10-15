import React from "react";
import { Stack } from "@mui/material"; // นำเข้า Stack จาก MUI

function ResponsiveStack({ isSmallScreen, children }) {
  // รับ props isSmallScreen และ children
  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"} // ใช้ isSmallScreen เพื่อตั้งค่า direction
      spacing={2}
      justifyContent="space-between"
    >
      {children} {/* แสดง children ที่ถูกส่งมา */}
    </Stack>
  );
}

export default ResponsiveStack;
