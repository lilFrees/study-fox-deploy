import AntdConfigProvider from "./antd-config-provider";
import NextIntlProvider from "./next-intl-provider";
import NextThemeProvider from "./next-theme-provider";
import QueryProvider from "./query-provider";

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
        <QueryProvider>
          <AntdConfigProvider>{children}</AntdConfigProvider>
        </QueryProvider>
      </NextThemeProvider>
    );
  }

  return (
    <NextIntlProvider locale={locale}>
      <NextThemeProvider>
        <QueryProvider>
          <AntdConfigProvider>{children}</AntdConfigProvider>
        </QueryProvider>
      </NextThemeProvider>
    </NextIntlProvider>
  );
}

export default Providers;
