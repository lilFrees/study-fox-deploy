"use client";

import { dataURLToFile } from "@/shared/helpers";
import { useAuthStore } from "@/shared/store/auth-store";
import { useUploadedFileStore } from "@/shared/store/uploaded-file-store";
import { useQuery } from "@tanstack/react-query";
import { Button, Typography } from "antd";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { generateQuizWithContext, generateQuizWithFile } from "../api";
import { useQuizStore } from "../store/quiz-store";

function QuizPreparePage() {
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { push } = useRouter();
  const { textContent, file } = useUploadedFileStore();
  const { setMode, setStatus, setQuiz } = useQuizStore();
  const { user } = useAuthStore();

  const progress = useMotionValue(0);
  const progressTransform = useTransform(progress, (latest) => latest);

  const {} = useQuery({
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
          setIsSuccess(true);
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
          setIsSuccess(true);
        });

        return response;
      }
    },
    throwOnError: true,
    refetchOnWindowFocus: false,
    retry: 0,
    gcTime: 0,
  });

  useEffect(() => {
    progressTransform.on("change", (latest) => {
      setLoadingProgress(latest);
    });

    const progressControl = animate(progress, isSuccess ? 100 : 80, {
      duration: isSuccess ? 2 : 10,
      ease: "easeIn",
    });

    return () => {
      progressControl.stop();
    };
  }, [progressTransform, progress, isSuccess]);

  return (
    <div>
      <AnimatePresence mode="wait">
        {loadingProgress < 100 && (
          <motion.div
            className="container mt-40 flex h-full w-full flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Typography.Title
              level={2}
              className="text-primary font-sans text-[64px] uppercase"
            >
              Study Fox
            </Typography.Title>
            <Typography.Text className="animate-pulse font-sans text-xl uppercase">
              quiz is generating...
            </Typography.Text>
            <div className="relative mt-10 h-[20px] w-[500px] animate-pulse overflow-hidden rounded-xl bg-[#222]">
              <motion.div
                className="from-primary absolute h-full bg-gradient-to-r to-amber-500"
                style={{ width: `${loadingProgress.toFixed(3)}%` }}
              />
            </div>
          </motion.div>
        )}
        {loadingProgress === 100 && (
          <motion.div
            className="container mt-16 flex h-full w-full flex-col items-center justify-center gap-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Typography.Text className="text-2xl">
              ✅Your quiz is ready
            </Typography.Text>
            <Typography.Title level={2} className="text-[40px] font-bold">
              👇Click below to start
            </Typography.Title>
            <div className="flex w-full items-center justify-center gap-12">
              <Button
                size="large"
                type="primary"
                className="w-full max-w-[450px] border-0 bg-slate-200 text-lg text-black hover:bg-slate-300"
                onClick={() => {
                  setMode("timed");
                  setStatus("pending");
                  push("/quiz-play?mode=timed");
                }}
              >
                ⏲️Timed Mode
              </Button>
              <Button
                size="large"
                type="primary"
                className="w-full max-w-[450px] border-0 bg-slate-200 text-lg text-black hover:bg-slate-300"
                onClick={() => {
                  setMode("normal");
                  setStatus("pending");
                  push("/quiz-play?mode=normal");
                }}
              >
                🧠Normal Mode
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default QuizPreparePage;
