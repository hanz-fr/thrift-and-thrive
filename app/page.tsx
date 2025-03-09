'use client'

import React, { useEffect } from "react";

// import main component
import Homepage from "@/components/Homepage";

import LoginPage from "@/components/LoginPage";
import RegisterPage from "@/components/RegisterPage";
import ForgetPasswordPage from "@/components/ForgetPasswordPage";
import ResetPasswordPage from "@/components/ResetPasswordPage";

export default function Home() {

  return (
    <>
      <Homepage/>
    </>
  );
}
