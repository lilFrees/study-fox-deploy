"use client";

import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { useTimerResultType } from "react-timer-hook/dist/types/src/useTimer";
import { getQuizResult } from "../api";
import QuizCompleteLoading from "../components/quiz-complete-loading";
import { IQuizStore, useQuizStore } from "../store/quiz-store";
import { useTimeStore } from "../store/time-store";
import { IQuizCheckParams } from "../types";

interface QuizPlayContextType {
  store: IQuizStore;
  timerStore?: useTimerResultType;
  checkQuizMutation: UseMutationResult<
    AxiosResponse<any, any>,
    Error,
    IQuizCheckParams,
    unknown
  >;
}

const QuizPlayContext = createContext<QuizPlayContextType | null>(null);

export default function QuizPlayProvider({
  children,
}: {
  children: ReactNode;
}) {
  const store = useQuizStore();
  const { time, setTime } = useTimeStore();

  useEffect(() => {
    if (time === null && store.mode === "timed") {
      const currentTime = new Date();
      currentTime.setMinutes(currentTime.getMinutes() + 10);
      setTime(currentTime);
    }
  }, [setTime, time, store.mode]);

  const timerStore = useTimer({
    expiryTimestamp: time ? new Date(time) : new Date(),
    autoStart: true,
  });

  const checkQuizMutation = useMutation({
    mutationKey: ["quiz-result"],
    mutationFn: getQuizResult,
    onSuccess: (data) => {
      console.log("Quiz result:", data);
    },
  });

  if (timerStore.totalSeconds === 0 && store.mode === "timed") {
    return <QuizCompleteLoading />;
  }

  return (
    <QuizPlayContext.Provider value={{ store, timerStore, checkQuizMutation }}>
      {children}
    </QuizPlayContext.Provider>
  );
}

export function useQuizContext() {
  const context = useContext(QuizPlayContext);

  if (!context) {
    throw new Error("useQuizContext must be used within a QuizPlayProvider");
  }

  return context;
}
