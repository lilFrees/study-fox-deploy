"use client";

import Logo from "@/shared/ui/logo";
import { Typography } from "antd";

function SignInPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between py-2">
        <Logo />
      </div>
      <div className="flex h-full w-full items-center justify-center pt-20">
        <Typography.Text className="text-5xl">Join Study Fox</Typography.Text>
      </div>
    </div>
  );
}

export default SignInPage;
