"use client";

import { useEffect } from "react";

import AuthCard from "./form/AuthCard";
import FormFooter from "./form/FormFooter";
import FormHeading from "./form/FormHeading";
import SignUpForm from "./form/SignUpForm";

import { useAuthStore } from "@/entities/user/model/useAuthStore";

function SignUpPage() {
  const { setUser } = useAuthStore();
  useEffect(() => {
    localStorage.removeItem("access_token");
    setUser(null);
  }, [setUser]);

  return (
    <AuthCard>
      <FormHeading type="sign-up" />

      <SignUpForm />

      <FormFooter type="sign-up" />
    </AuthCard>
  );
}

export default SignUpPage;
