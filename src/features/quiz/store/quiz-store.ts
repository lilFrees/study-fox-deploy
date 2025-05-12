import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  IQuizCheckResponse,
  IQuestionWithAnswer,
  IQuizResponse,
  IStoredQuiz,
} from "../types";

export type TQuizState = "completed" | "pending" | "stale";

export interface IQuizStore {
  quiz: IStoredQuiz | null;
  setQuiz: (quiz: IQuizResponse | null) => void;
  currentQuestion: IQuestionWithAnswer | null;
  setCurrentQuestion: (question: IQuestionWithAnswer | null) => void;
  answerQuestion: (quizId: string, answer: string) => void;
  next: () => void;
  prev: () => void;
  status: TQuizState;
  setStatus: (status: TQuizState) => void;
  mode: "timed" | "normal" | null;
  setMode: (mode: "timed" | "normal" | null) => void;
  reset: () => void;
  result: IQuizCheckResponse | null;
  setResult: (result: IQuizCheckResponse | null) => void;
  restart: () => void;
}

export const useQuizStore = create<IQuizStore>()(
  persist(
    (set) => ({
      quiz: null,
      setQuiz: (quiz) => {
        const questions = quiz?.quizlist?.map((q, i) => ({
          ...q,
          questionNumber: i + 1,
          answer: null,
        }));
        set({ quiz: quiz ? { ...quiz, quizlist: questions || [] } : null });
      },
      answerQuestion: (quizId, answer) =>
        set((state) => ({
          quiz: {
            ...state.quiz!,
            quizlist:
              state.quiz?.quizlist?.map((q) =>
                q.quizId === quizId ? { ...q, answer } : q,
              ) || [],
          },
          currentQuestion:
            state.currentQuestion?.quizId === quizId
              ? { ...state.currentQuestion, answer }
              : state.currentQuestion,
        })),
      next: () =>
        set((state) => {
          const currentIndex =
            state.quiz?.quizlist.findIndex(
              (q) => q.quizId === state.currentQuestion?.quizId,
            ) || -1;
          const nextIndex = currentIndex + 1;
          if (nextIndex < (state.quiz?.quizlist.length || 0)) {
            return {
              currentQuestion: state.quiz?.quizlist[nextIndex],
            };
          }
          return {
            currentQuestion: state.currentQuestion,
          };
        }),
      prev: () =>
        set((state) => {
          const currentIndex =
            state.quiz?.quizlist.findIndex(
              (q) => q.quizId === state.currentQuestion?.quizId,
            ) || -1;
          const prevIndex = currentIndex - 1;
          if (prevIndex >= 0) {
            return {
              currentQuestion: state.quiz?.quizlist[prevIndex],
            };
          }
          return {
            currentQuestion: state.currentQuestion,
          };
        }),
      currentQuestion: null,
      setCurrentQuestion: (question) => set({ currentQuestion: question }),
      status: "stale",
      setStatus: (status) => set({ status }),
      mode: null,
      setMode: (mode) => set({ mode }),
      result: null,
      setResult: (result) => set({ result }),
      reset: () =>
        set({
          quiz: null,
          currentQuestion: null,
          status: "stale",
          result: null,
        }),
      restart: () =>
        set((state) => ({
          quiz: {
            ...state.quiz!,
            quizlist:
              state.quiz?.quizlist?.map((q) => ({
                ...q,
                answer: null,
              })) || [],
          },
          result: null,
          currentQuestion: null,
          status: "stale",
          mode: null,
        })),
    }),
    { name: "quiz-store" },
  ),
);
