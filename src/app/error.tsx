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
              Something went wrong
            </Typography.Title>
            <div className="flex items-center gap-5">
              <Button type="dashed" href="/" size="large">
                Go back home
              </Button>
              <Button
                type="dashed"
                size="large"
                onClick={() => window.location.reload()}
              >
                Refresh
              </Button>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

export default NotFoundPage;
