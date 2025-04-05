import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Raleway } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import { routing } from "@/i18n/routing";
import Header from "@/shared/ui/header";

import AntdConfigProvider from "@/shared/providers/antd-config-provider";
import NextIntlProvider from "@/shared/providers/next-intl-provider";
import NextThemeProvider from "@/shared/providers/next-theme-provider";
import "../globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Study Fox",
  description: "Boost your academic performance using ",
};

export default async function LocalalizedLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${raleway.variable} bg-background font-mono antialiased`}
      >
        <NextIntlProvider locale={locale}>
          <NextThemeProvider>
            <AntdConfigProvider>
              <Header />
              {children}
            </AntdConfigProvider>
          </NextThemeProvider>
        </NextIntlProvider>
      </body>
    </html>
  );
}
