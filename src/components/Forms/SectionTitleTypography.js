import React from "react";
import { Typography } from "@mui/material";

const SectionTitleTypography = ({ text, iconClass }) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: "19px",
        fontFamily: '"Prompt", sans-serif',
        display: "flex",
        gap: "8px",
      }}
    >
      <i
        className={iconClass}
        style={{ fontSize: "23px", color: "#3FABD9" }}
      ></i>
      {text}
    </Typography>
  );
};

export default SectionTitleTypography;
