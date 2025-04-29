"use client";

import { queryClient } from "@/config/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
