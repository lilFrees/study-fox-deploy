"use client";

import AuthCard from "./form/AuthCard";
import FormFooter from "./form/FormFooter";
import FormHeading from "./form/FormHeading";
import SignInForm from "./form/SignInForm";

function SignInPage() {
  return (
    <AuthCard>
      <FormHeading type="sign-in" />

      <SignInForm />

      <FormFooter type="sign-in" />
    </AuthCard>
  );
}

export default SignInPage;
