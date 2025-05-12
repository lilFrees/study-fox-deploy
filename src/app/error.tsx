"use client";

import Providers from "@/shared/providers";
import { IError } from "@/shared/types";
import { Button, Typography } from "antd";
import { AxiosError } from "axios";
import { Plus_Jakarta_Sans, Raleway } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

function ErrorPage({
  error,
}: {
  error: (Error & { digest?: string }) | AxiosError<IError>;
}) {
  const mainError =
    (error as AxiosError<IError>)?.response?.data?.message ||
    error?.message ||
    "Something went wrong";
  const description =
    (error as AxiosError<IError>)?.response?.data?.cause ||
    "Please try again later";
  return (
    <html suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${raleway.variable} bg-background font-mono antialiased`}
      >
        <Providers>
          <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
            <Typography.Title
              className="line-clamp-3 max-w-[30ch] text-center text-4xl"
              title={mainError}
            >
              {mainError}
            </Typography.Title>
            <Typography.Text className="text-lg" title={description}>
              {description}
            </Typography.Text>
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

export default ErrorPage;
