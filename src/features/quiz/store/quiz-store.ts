import { create } from "zustand";
import { IQuestion } from "../types";

export type QuizState = "completed" | "pending" | "stale";

export interface QuizStore {
  questions: IQuestion[];
  setQuestions: (questions: IQuestion[]) => void;
  status: QuizState;
  setStatus: (status: QuizState) => void;
  mode: "timed" | "normal" | null;
  setMode: (mode: "timed" | "normal" | null) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  questions: [],
  setQuestions: (questions) => set({ questions }),
  status: "stale",
  setStatus: (status) => set({ status }),
  mode: null,
  setMode: (mode) => set({ mode }),
}));
