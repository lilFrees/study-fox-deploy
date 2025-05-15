import { useUploadedFileStore } from "@/shared/store/uploaded-file-store";
import { useQuery } from "@tanstack/react-query";
import {
  generateQuizWithContext,
  generateQuizWithFile,
} from "../api/generateQuiz";
import { useAuthStore } from "@/entities/user/model/useAuthStore";
import { useQuizStore } from "@/entities/quiz/model/useQuizStore";
import { dataURLToFile } from "@/shared/helpers";

function useQuizGeneration() {
  const { file, textContent } = useUploadedFileStore();
  const { user } = useAuthStore();
  const { setQuiz } = useQuizStore();
  const { isLoading, isSuccess } = useQuery({
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

  return { isSuccess, isLoading };
}

export default useQuizGeneration;
