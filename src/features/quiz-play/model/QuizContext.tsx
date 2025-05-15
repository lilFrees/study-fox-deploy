"use client";

import { useMutation, UseMutationResult } from "@tanstack/react-query";
import dayjs from "dayjs";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { useTimerResultType } from "react-timer-hook/dist/types/src/useTimer";
import { getQuizResult } from "../api/checkResults";
import QuizCompleteLoading from "../ui/loading-score";
import {
  IQuizStore,
  useQuizStore,
} from "../../../entities/quiz/model/useQuizStore";
import { useTimeStore } from "../../../entities/quiz/model/useTimeStore";
import {
  IQuizCheckParams,
  IQuizCheckResponse,
} from "../../../entities/quiz/types";
import QuizResults from "../ui/display-score";

interface QuizPlayContextType {
  store: IQuizStore;
  timerStore?: useTimerResultType;
  checkQuizMutation: UseMutationResult<
    IQuizCheckResponse,
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
  const { setStatus, status, setResult } = store;

  useEffect(() => {
    if (time === null) {
      const curr = dayjs().add(10, "minutes").toDate();
      setTime(curr);
    }
  }, [setTime, time]);

  const currentTime = dayjs().add(10, "minutes").toDate();

  const timerStore = useTimer({
    expiryTimestamp: new Date(time || currentTime),
    autoStart: true,
  });

  const checkQuizMutation = useMutation({
    mutationKey: ["quiz-result"],
    mutationFn: getQuizResult,
    onSuccess: (data) => {
      setStatus("completed");
      setResult(data);
    },
  });

  if (status === "completed") {
    return <QuizResults />;
  }

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
