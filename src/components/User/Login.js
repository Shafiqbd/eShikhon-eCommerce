import { Button } from "@mui/material";
import React from "react";
import CustInput from "../CustInput";

export default function Login() {
  return (
    <div className="login-area">
      <h1 className="login-title"> User Login</h1>
      <CustInput
        type="text"
        name="email"
        label="Email"
        size="small"
        isRequired={true}
        placeholder="Enter email address"
      />
      <CustInput
        type="password"
        name="password"
        label="Password"
        size="small"
        isRequired={true}
        placeholder="Enter password"
      />
      <CustInput
        type="password"
        name="Confirmpassword"
        label="Confirm Password"
        size="small"
        isRequired={true}
        placeholder="Enter confirm password"
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
    </div>
  );
}
