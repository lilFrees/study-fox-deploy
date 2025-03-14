import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center gap-10 px-2 text-center">
      <p className="text-lg">10K+ students trust Study Fox</p>
      <h1 className="w-max text-8xl font-light whitespace-pre-wrap">{t.rich("main.heading")}</h1>
      <p className="text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit{" "}
        veritatis pariatur deleniti
        <br /> necessitatibus ipsum quaerat in, hic reiciendis eius iste.
      </p>
    </div>
  );
}
