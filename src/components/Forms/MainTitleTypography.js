import React from 'react'
import { Typography } from "@mui/material";

function MainTitleTypography({ text}) {
  return (
    <Typography
    variant="h1"
    sx={{
      fontSize: "23px",
      fontWeight: "bold",
      textAlign: "center",
      background: "var(--accent-color)",
      color: "#ffffff",
      padding: "20px",
      width: "100%",
      margin: 0,
      boxSizing: "border-box",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)", // เพิ่มเงา
      fontFamily: '"Prompt", sans-serif', // ใช้ฟอนต์ Prompt
    }}
  >
   {text}
  </Typography>
  )
}

export default MainTitleTypography