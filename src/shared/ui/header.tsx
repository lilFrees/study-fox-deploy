"use client";

import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations();
  return (
    <div className="container mx-auto flex w-full items-center justify-between p-4">
      <h2 className="font-mono text-2xl">
        Study <span className="text-orange-500">Fox</span>
      </h2>
      <p>{t("locale")}</p>
    </div>
  );
}

export default Header;
