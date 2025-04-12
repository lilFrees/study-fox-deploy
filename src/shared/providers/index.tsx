import AntdConfigProvider from "./antd-config-provider";
import NextIntlProvider from "./next-intl-provider";
import NextThemeProvider from "./next-theme-provider";

function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale?: string;
}) {
  if (!locale) {
    return (
      <NextThemeProvider>
        <AntdConfigProvider>{children}</AntdConfigProvider>
      </NextThemeProvider>
    );
  }

  return (
    <NextIntlProvider locale={locale}>
      <NextThemeProvider>
        <AntdConfigProvider>{children}</AntdConfigProvider>
      </NextThemeProvider>
    </NextIntlProvider>
  );
}

export default Providers;
