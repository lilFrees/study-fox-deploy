"use client";

import BgEclipse from "@/shared/icons/bg-shape";
import MainHeading from "../components/main-heading";
import { useTheme } from "next-themes";

function MainPage() {
  const { theme } = useTheme();
  return (
    <div className="container mx-auto mt-10 flex gap-5 px-2">
      <MainHeading />
      <div className="flex basis-1/2 items-center justify-center self-center">
        <BgEclipse
          gradientcolor={theme === "dark" ? "blue" : "orange"}
          className="blur-[90px]"
        />
      </div>
    </div>
  );
}

export default MainPage;
