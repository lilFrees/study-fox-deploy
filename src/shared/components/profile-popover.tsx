"use client";

import { Button, Popover, Typography } from "antd";
import { FaChevronDown, FaUser } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineExitToApp } from "react-icons/md";

import useAuthHandlers from "@/features/auth/model/useAuthHandlers";
import Image from "next/image";
import { useAuthStore } from "../../entities/user/model/useAuthStore";

function ProfilePopover() {
  const { user } = useAuthStore();

  const { logoutMutation } = useAuthHandlers();

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
            href="/account/home"
          >
            <FaUser /> Profile
          </Button>
          <Button
            type="link"
            className="text-foreground hover:bg-foreground/5"
            onClick={() => logoutMutation?.mutate()}
            loading={logoutMutation?.isPending}
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
