"use client";

import { useQuizStore } from "@/features/quiz/store/quiz-store";
import { useTimeStore } from "@/features/quiz/store/time-store";
import BgEclipse from "@/shared/icons/bg-shape";
import { useUploadedFileStore } from "@/shared/store/uploaded-file-store";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import MainHeading from "../containers/main-heading";
import { usePathname } from "@/i18n/navigation";

function MainPage() {
  const { theme } = useTheme();
  const { reset } = useQuizStore();
  const { setTime } = useTimeStore();
  const { setTextContent, setFile } = useUploadedFileStore();
  const path = usePathname();

  useEffect(() => {
    reset();
    setTime(null);
    setTextContent(null);
    setFile(null);
  }, [reset, setFile, setTextContent, setTime, path]);

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
