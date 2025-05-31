import Sidebar from "@/features/account/ui/Sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const user = cookieStore.get("user");
  if (!user) {
    cookieStore.delete("access_token");
    cookieStore.delete("user");

    redirect("/auth/sign-in");
  }

  return (
    <div className="relative min-h-screen">
      <div className="container flex grow gap-5">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
