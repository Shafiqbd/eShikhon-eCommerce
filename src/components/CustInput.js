import { TextField } from "@mui/material";
import React from "react";

export default function CustInput({ label, size, type, placeholder, isRequired, defaultValue }) {
  return <TextField type={type} size={size} required={isRequired} label={label} defaultValue={defaultValue} />;
}
