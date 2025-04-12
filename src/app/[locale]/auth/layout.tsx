import { ReactNode } from "react";

function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div>{children}</div>;
}

export default AuthLayout;
