import React from 'react';
import { Stack } from '@mui/material';

const FormContainer = ({ children }) => {
  return (
    <Stack
      spacing={3}
      sx={{
        backgroundColor: "#ffffff",
        padding: "20px",
        paddingBottom: "90px",
        paddingTop: "30px",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </Stack>
  );
};

export default FormContainer;
