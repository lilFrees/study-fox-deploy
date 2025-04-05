"use client";

import { Typography } from "antd";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center gap-10 px-2 text-center">
      <p className="text-foreground text-lg">{t("main.trust")}</p>
      <Typography.Title
        level={1}
        className="w-max text-8xl font-light whitespace-pre-wrap"
      >
        {t.rich("main.heading")}
      </Typography.Title>
      <Typography.Paragraph className="text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit{" "}
        veritatis pariatur deleniti
        <br /> necessitatibus ipsum quaerat in, hic reiciendis eius iste.
      </Typography.Paragraph>
    </div>
  );
}
