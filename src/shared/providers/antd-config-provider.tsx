"use client";

import { ConfigProvider } from "antd";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import { darkTheme, lightTheme } from "./theme-provider";

import "@ant-design/v5-patch-for-react-19";

function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const memoTheme = useMemo(() => theme, [theme]);

  return (
    <ConfigProvider
      theme={!memoTheme || memoTheme === "dark" ? darkTheme : lightTheme}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdConfigProvider;
