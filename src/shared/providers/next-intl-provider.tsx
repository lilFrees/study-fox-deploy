import { NextIntlClientProvider } from "next-intl";

async function NextIntlProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const messages = await import(`../../../messages/${locale}.json`);

  return (
    <NextIntlClientProvider messages={messages.default} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}

export default NextIntlProvider;
