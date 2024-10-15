import React from "react";
import { TextField, MenuItem } from "@mui/material";

function SelectField({ label, name, value, onChange, options, error, disabled }) {
  return (
    <TextField
      select
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      variant="outlined"
      required
      fullWidth
      error={error}
      helperText={error ? "กรุณาเลือก " + label : ""}
      disabled={disabled}
      InputProps={{
        sx: {
          "&.Mui-disabled": {
            color: "gray",
            backgroundColor: "#f0f0f0",
          },
          "&.Mui-error": {
            backgroundColor: "transparent",
          },
          "&.Mui-error.Mui-disabled": {
            backgroundColor: "#f0f0f0",
          },
        },
      }}
    >
      <MenuItem value="">
        <em>กรุณาเลือก</em>
      </MenuItem>
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default SelectField;
