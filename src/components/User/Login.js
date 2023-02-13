import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import CustInput from "../CustInput";

export default function Login() {
  const { login } = useAuth();
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    login(data.email, data.password).then((res) => {
      console.log("res", res);
    });
  };
  return (
    <div className="login-area">
      <h1 className="login-title"> User Login</h1>
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
          Login
        </Button>
      </form>
    </div>
  );
}
