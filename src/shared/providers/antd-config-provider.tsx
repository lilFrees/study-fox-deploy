"use client";

import { ConfigProvider } from "antd";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./theme-provider";

import "@ant-design/v5-patch-for-react-19";

function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [darkMode, setDarkMode] = useState<boolean>(theme === "dark");

  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  return (
    <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
      {children}
    </ConfigProvider>
  );
}

export default AntdConfigProvider;
