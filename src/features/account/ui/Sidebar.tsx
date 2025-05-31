"use client";

import { Button } from "antd";
import LogoutIcon from "@/assets/icons/logout";
import LinksList from "./LinksList";
import ProfileDisplay from "./ProfileDisplay";

import useAuthHandlers from "@/features/auth/model/useAuthHandlers";

function Sidebar() {
  const { logoutMutation } = useAuthHandlers();
  return (
    <div className="sticky top-0 flex max-h-screen basis-1/3 flex-col gap-5 py-10">
      <ProfileDisplay />
      <LinksList />
      <Button
        className="mt-auto"
        size="large"
        type="dashed"
        onClick={() => logoutMutation.mutate()}
        danger
      >
        <LogoutIcon className="text-2xl text-inherit" />
        Logout
      </Button>
    </div>
  );
}

export default Sidebar;
