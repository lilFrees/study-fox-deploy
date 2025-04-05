"use client";

import { ConfigProvider } from "antd";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./theme-provider";

import "@ant-design/v5-patch-for-react-19";
import LoadingLogo from "../ui/loading-logo";

function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingLogo />;
  }

  const darkMode = theme === "dark";

  return (
    <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
      {children}
    </ConfigProvider>
  );
}

export default AntdConfigProvider;
