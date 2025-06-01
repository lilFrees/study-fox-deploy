"use client";

import { Button } from "antd";
import { useTheme } from "next-themes";
import { AiFillMoon, AiFillSun } from "react-icons/ai";

function DarkModeBtn() {
  const { setTheme, theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      type="text"
      className="h-8 w-8 border p-0"
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
    >
      {isDark ? (
        <AiFillMoon className="text-[20px]" />
      ) : (
        <AiFillSun className="text-[20px]" />
      )}
    </Button>
  );
}

export default DarkModeBtn;
