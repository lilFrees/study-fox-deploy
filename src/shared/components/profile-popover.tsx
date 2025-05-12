"use client";

import { App, Button, Popover, Typography } from "antd";
import { FaCircleUser } from "react-icons/fa6";
import { FaChevronDown, FaUser } from "react-icons/fa";
import { MdOutlineExitToApp } from "react-icons/md";

import { useAuthStore } from "../store/auth-store";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "@/features/auth/api/auth-handlers";
import Image from "next/image";

function ProfilePopover() {
  const { user } = useAuthStore();
  const { message } = App.useApp();

  const { mutate, isPending } = useMutation({
    mutationKey: ["logout"],
    mutationFn: signOut,
    onSuccess: () => {
      message.success("You have successfully logged out");
    },
  });

  if (user === null) {
    return null;
  }

  return (
    <Popover
      className="cursor-pointer"
      trigger="click"
      content={
        <div className="flex w-[200px] flex-col gap-4">
          <Button
            type="link"
            className="text-foreground hover:bg-foreground/5 flex items-center"
            href="/profile"
          >
            <FaUser /> Profile
          </Button>
          <Button
            type="link"
            className="text-foreground hover:bg-foreground/5"
            onClick={() => mutate()}
            loading={isPending}
          >
            <MdOutlineExitToApp />
            Logout
          </Button>
        </div>
      }
      placement="bottomRight"
    >
      <div className="flex items-center gap-2 select-none">
        <div className="h-[30px] w-[30px] overflow-hidden rounded-full">
          {user?.photoUrl ? (
            <Image
              src={user?.photoUrl}
              alt="Profile image"
              width={30}
              height={30}
            />
          ) : (
            <FaCircleUser className="text-[30px]" />
          )}
        </div>
        <Typography.Text>
          {user?.displayName || user?.username || "Your account"}
        </Typography.Text>
        <FaChevronDown className="text-[10px]" />
      </div>
    </Popover>
  );
}

export default ProfilePopover;
