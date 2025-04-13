"use client";

import Providers from "@/shared/providers";
import { Button, Typography } from "antd";
import { Plus_Jakarta_Sans, Raleway } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

function NotFoundPage() {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${raleway.variable} bg-background font-mono antialiased`}
      >
        <Providers>
          <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
            <Typography.Title className="text-4xl">
              Page not found
            </Typography.Title>
            <Button type="primary" href="/">
              Go back home
            </Button>
          </div>
        </Providers>
      </body>
    </html>
  );
}

export default NotFoundPage;
