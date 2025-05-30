"use client";

import { Button } from "antd";
import LinksList from "./LinksList";
import ProfileDisplay from "./ProfileDisplay";
import LogoutIcon from "@/assets/icons/logout";

function Sidebar() {
  return (
    <div className="sticky top-0 flex max-h-screen basis-1/3 flex-col gap-5 py-10">
      <ProfileDisplay />
      <LinksList />
      <Button className="mt-auto" size="large" type="dashed">
        <LogoutIcon className="text-2xl text-inherit" />
        Logout
      </Button>
    </div>
  );
}

export default Sidebar;
