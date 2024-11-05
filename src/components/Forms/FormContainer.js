import React from 'react';
import { Stack } from '@mui/material';

const FormContainer = ({spacing= 3, paddingTop="30px",  paddingBottom="40px",children, padding = "20px", backgroundColor = "#ffffff", boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)",marginBottom ="60px" }) => {
  return (
    <Stack
      spacing={spacing}
      sx={{
        backgroundColor: backgroundColor,
        padding: padding,
        paddingBottom: paddingBottom,
        paddingTop: paddingTop,
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        boxShadow: boxShadow, // เพิ่มเงา
        marginBottom:marginBottom,
      }}
    >
      {children}
    </Stack>
  );
};

export default FormContainer;
