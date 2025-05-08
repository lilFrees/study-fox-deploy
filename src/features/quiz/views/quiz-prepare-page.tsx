"use client";

import { useAuthStore } from "@/shared/store/auth-store";
import { useUploadedFileStore } from "@/shared/store/uploaded-file-store";
import { useQuery } from "@tanstack/react-query";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { generateQuizWithContext, generateQuizWithFile } from "../api";
import QuizLoading from "../components/quiz-loading";
import { Button, Typography } from "antd";
import { useEffect, useState } from "react";
import { useQuizStore } from "../store/quiz-store";
import { useRouter } from "next/navigation";

function QuizPreparePage() {
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  const { push } = useRouter();
  const { textContent, file } = useUploadedFileStore();
  const { setQuestions, setMode, setStatus } = useQuizStore();
  const { user } = useAuthStore();

  const progress = useMotionValue(0);
  const progressTransform = useTransform(progress, (latest) => latest);

  const { isSuccess, isLoading } = useQuery({
    queryKey: ["quiz"],
    queryFn: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 5 * 1000);
      });
      // if (textContent) {
      //   const response = generateQuizWithContext({
      //     username: user?.username || "",
      //     context: textContent,
      //     quizCount: 10,
      //   });

      //   response.then((r) => setQuestions(r));

      //   return response;
      // }
      // else if (file) {
      //   const formData = new FormData();
      //   formData.append("file", file.url);
      //   formData.append("quizCount", "10");
      //   return generateQuizWithFile({
      //     username: user?.username || "",
      //     data: formData,
      //   });
      // }
    },

    retry: 0,
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
        {loadingProgress < 100 ? (
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
        ) : (
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
                className="w-full max-w-[450px] border-0 bg-slate-200 text-lg text-black hover:bg-slate-300/70"
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
                className="w-full max-w-[450px] border-0 bg-slate-200 text-lg text-black hover:bg-slate-300/70"
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
