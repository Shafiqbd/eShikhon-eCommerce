import { TextField } from "@mui/material";
import React from "react";

export default function CustInput({
  label,
  isError,
  errorMessage,
  size,
  type,
  placeholder,
  isRequired,
  defaultValue,
  name,
  registerProperty,
}) {
  return (
    <div>
      <TextField
        className="input-field"
        type={type}
        name={name}
        fullWidth
        size={size}
        required={isRequired}
        label={label}
        defaultValue={defaultValue}
        helperText={errorMessage}
        onWheel={(e: any) => e.target.blur()}
        {...registerProperty}
      />
    </div>
  );
}
