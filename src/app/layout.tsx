import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  console.log(process.env.FIREBASE_API_KEY, "asd");

  return children;
}
