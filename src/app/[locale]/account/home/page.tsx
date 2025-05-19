import { cookies } from "next/headers";

import { redirect } from "next/navigation";

import Dashboard from "@/features/account/home/ui/Dashboard";

async function ProfilePage() {
  const cookieStore = await cookies();
  const user = cookieStore.get("user");
  if (!user) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="container mx-auto">
      <Dashboard />
    </div>
  );
}

export default ProfilePage;
