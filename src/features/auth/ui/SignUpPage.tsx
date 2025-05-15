"use client";

import AuthCard from "./form/AuthCard";
import FormFooter from "./form/FormFooter";
import FormHeading from "./form/FormHeading";
import SignUpForm from "./form/SignUpForm";

function SignUpPage() {
  return (
    <AuthCard>
      <FormHeading type="sign-up" />

      <SignUpForm />

      <FormFooter type="sign-up" />
    </AuthCard>
  );
}

export default SignUpPage;
