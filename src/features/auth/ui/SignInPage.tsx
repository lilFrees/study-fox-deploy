"use client";

import { useEffect } from "react";

import AuthCard from "./form/AuthCard";
import FormFooter from "./form/FormFooter";
import FormHeading from "./form/FormHeading";
import SignInForm from "./form/SignInForm";

import { useAuthStore } from "@/entities/user/model/useAuthStore";

function SignInPage() {
  const { setUser } = useAuthStore();

  useEffect(() => {
    localStorage.removeItem("access_token");
    setUser(null);
  }, [setUser]);

  return (
    <AuthCard>
      <FormHeading type="sign-in" />

      <SignInForm />

      <FormFooter type="sign-in" />
    </AuthCard>
  );
}

export default SignInPage;
