import { useQuizStore } from "@/entities/quiz/model/useQuizStore";
import { useTimeStore } from "@/entities/quiz/model/useTimeStore";
import { useUploadedFileStore } from "@/shared/store/uploaded-file-store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function useAppReset() {
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
}

export default useAppReset;
