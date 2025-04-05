"use client";

import { ThemeProvider } from "next-themes";

function NextThemeProvider({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

export default NextThemeProvider;
