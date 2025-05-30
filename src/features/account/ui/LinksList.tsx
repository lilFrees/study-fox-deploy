"use client";
import CalendarEditIcon from "@/assets/icons/calendar";
import CommandIcon from "@/assets/icons/command";
import FolderIcon from "@/assets/icons/folder";
import HomeIcon from "@/assets/icons/home";
import SettingsIcon from "@/assets/icons/settings";
import { Menu, MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";

function LinksList() {
  const { push } = useRouter();
  const pathname = usePathname();

  const activeTab = "/" + pathname.split("/").slice(2, 4).join("/");

  const links: MenuProps["items"] = [
    {
      label: "Home",
      icon: <HomeIcon className="text-2xl" />,
      key: "/account/home",
    },
    {
      label: "Library",
      icon: <FolderIcon className="text-2xl" />,
      key: "/account/library",
    },
    {
      label: "Classroom",
      icon: <CalendarEditIcon className="text-2xl" />,
      key: "/account/classroom",
    },
    {
      label: "More Links",
      icon: <CommandIcon className="text-2xl" />,
      key: "/account/more",
    },
    {
      label: "Settings",
      icon: <SettingsIcon className="text-2xl" />,
      key: "/account/settings",
    },
  ];

  const handleClick = (key: string) => {
    push(key);
  };

  return (
    <div className="space-y-5">
      <Menu
        items={links}
        activeKey="/account/home"
        defaultSelectedKeys={[activeTab]}
        className="text-foreground [&_.ant-menu-item]:text-foreground [&_.ant-menu-item-selected]:bg-foreground/10 border-0 bg-transparent [&_.ant-menu-item]:flex [&_.ant-menu-item]:h-auto [&_.ant-menu-item]:items-center [&_.ant-menu-item]:px-5 [&_.ant-menu-item]:py-1"
        onClick={(e) => handleClick(e.key)}
      />
    </div>
  );
}

export default LinksList;
