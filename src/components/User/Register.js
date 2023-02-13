import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import CustInput from "../CustInput";

export default function Register() {
  const { signUp } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    signUp(data.email, data.password);
  };
  return (
    <div className="login-area">
      <h1 className="login-title"> User Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <CustInput
          type="text"
          name="email"
          label="Email"
          size="small"
          registerProperty={{
            ...register("email", { required: "Email is required" }),
          }}
          isError={!!errors?.email}
          errorMessage={errors?.email?.message}
          isRequired={true}
          placeholder="Enter email address"
        />
        <CustInput
          type="password"
          name="password"
          label="Password"
          size="small"
          registerProperty={{
            ...register("password", { required: "Password is required" }),
          }}
          isError={!!errors?.password}
          errorMessage={errors?.password?.message}
          isRequired={true}
          placeholder="Enter password"
        />
        <Button variant="contained" type="submit">
          Signup
        </Button>
      </form>
    </div>
  );
}
