"use client";

import { useEffect, useState } from "react";

import { App, ConfigProvider } from "antd";
import { useTheme } from "next-themes";

import { darkTheme, lightTheme } from "./theme-provider";
import LoadingLogo from "../ui/loading-logo";

import "@ant-design/v5-patch-for-react-19";

function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingLogo />;
  }

  const darkMode = theme === "dark" || theme === "system";

  return (
    <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
      <App className="h-full">{children}</App>
    </ConfigProvider>
  );
}

export default AntdConfigProvider;
