import { useUploadedFileStore } from "@/shared/store/uploaded-file-store";
import { useQuery } from "@tanstack/react-query";
import {
  generateQuizWithContext,
  generateQuizWithFile,
} from "../api/generateQuiz";
import { useAuthStore } from "@/entities/user/model/useAuthStore";
import { useQuizStore } from "@/entities/quiz/model/useQuizStore";
import { dataURLToFile } from "@/shared/helpers";
import { useEffect, useState } from "react";
import { animate, useMotionValue, useTransform } from "motion/react";

function useQuizGeneration() {
  const { file, textContent } = useUploadedFileStore();
  const { user } = useAuthStore();
  const { setQuiz } = useQuizStore();

  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const motionProgress = useMotionValue(0);
  const progressTransform = useTransform(motionProgress, (latest) => latest);

  const { isSuccess } = useQuery({
    queryKey: ["quiz"],
    queryFn: () => {
      // return new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve(true);
      //   }, 5 * 1000);
      // });
      if (textContent) {
        const response = generateQuizWithContext({
          username: user?.username || "",
          context: textContent,
          quizCount: 10,
        });

        response.then((r) => {
          setQuiz(r);
        });

        return response;
      } else if (file) {
        const fileFromURL = dataURLToFile(file.url);
        const formData = new FormData();
        formData.append("quizFile", fileFromURL);
        formData.append("quizCount", "10");
        const response = generateQuizWithFile({
          username: user?.username || "",
          data: formData,
        });

        response.then((r) => {
          setQuiz(r);
        });

        return response;
      }
    },
    enabled: !!textContent || !!file,
    // throwOnError: true,
    refetchOnWindowFocus: false,
    retry: 0,
    gcTime: 0,
  });

  useEffect(() => {
    progressTransform.on("change", (latest) => {
      setLoadingProgress(latest);
    });

    const control = animate(motionProgress, isSuccess ? 100 : 80, {
      duration: isSuccess ? 2 : 10,
      ease: "easeIn",
    });

    return () => {
      control.stop();
    };
  }, [motionProgress, progressTransform, isSuccess]);

  return { isSuccess, loadingProgress };
}

export default useQuizGeneration;
