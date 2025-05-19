"use client";
import { Menu, MenuProps } from "antd";
import { useRouter } from "next/navigation";

function LinksList() {
  const { push } = useRouter();
  const links: MenuProps["items"] = [
    {
      label: "Home",
      icon: "",
      key: "/account/home",
    },
    {
      label: "Library",
      icon: "",
      key: "/account/library",
    },
    {
      label: "More Links",
      icon: "",
      key: "/account/more",
    },
    {
      label: "Settings",
      icon: "",
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
        defaultSelectedKeys={["/account/home"]}
        className="text-foreground border-0 bg-transparent"
        onClick={(e) => handleClick(e.key)}
      />
    </div>
  );
}

export default LinksList;
