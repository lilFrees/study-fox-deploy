import SignInPage from "@/features/auth/ui/SignInPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function SignIn() {
  const cookiesStore = await cookies();

  if (cookiesStore.get("access_token") && cookiesStore.get("user")) {
    redirect("/account/home");
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-4">
      <SignInPage />
    </div>
  );
}

export default SignIn;
