"use client";

import { useAuthStore } from "@/entities/user/model/useAuthStore";
import { Typography } from "antd";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";

function ProfileDisplay() {
  const { user } = useAuthStore();
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 h-14 w-14 shrink-0 overflow-hidden rounded-xl">
        {user?.photoUrl ? (
          <Image
            src={user?.photoUrl}
            alt="Photo display"
            width={56}
            height={56}
            className="h-full w-full rounded-xl object-cover"
          />
        ) : (
          <FaUser />
        )}
      </div>
      <div className="space-y-1 *:block">
        <Typography.Text className="text-2xl font-semibold">
          {user?.displayName || user?.username || ""}
        </Typography.Text>
        <Typography.Text className="text-base font-medium">
          Basic User
        </Typography.Text>
      </div>
    </div>
  );
}

export default ProfileDisplay;
