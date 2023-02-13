import { TextField } from "@mui/material";
import React from "react";

export default function CustInput({ label, size, type, placeholder, isRequired, defaultValue, name }) {
  return (
    <TextField
      className="input-field"
      type={type}
      name={name}
      fullWidth
      size={size}
      required={isRequired}
      label={label}
      defaultValue={defaultValue}
    />
  );
}
