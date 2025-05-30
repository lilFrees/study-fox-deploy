import SignUpPage from "@/features/auth/ui/SignUpPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function SignUp() {
  const cookiesStore = await cookies();

  if (cookiesStore.get("access_token") && cookiesStore.get("user")) {
    redirect("/account/home");
  }

  return (
    <div className="flex h-screen w-full items-center justify-center p-4">
      <SignUpPage />
    </div>
  );
}

export default SignUp;
