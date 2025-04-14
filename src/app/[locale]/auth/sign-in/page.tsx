import SignInPage from "@/features/auth/views/sign-in-page";

function SignIn() {
  console.log(process.env?.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN);
  console.log(process.env);
  console.log("asd");
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-4">
      <SignInPage />
    </div>
  );
}

export default SignIn;
