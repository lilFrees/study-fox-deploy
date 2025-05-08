import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IQuestion, IQuestionWithAnswer } from "../types";

export type QuizState = "completed" | "pending" | "stale";

const sampleQuiz = [
  {
    quizId: "1e467fc1-952d-4cb9-ab16-a8a1ba4ad648",
    question:
      "What type of business communication involves interactions that travel up the hierarchy of a company?",
    choices: [
      "A. Downward communication",
      "B. Lateral communication",
      "C. External communication",
      "D. Upward communication",
    ],
  },
  {
    quizId: "33fec742-e904-46ac-88ae-4982b929b6f7",
    question:
      "Which type of business communication allows management to distribute information, delegate responsibilities, and enforce standards?",
    choices: [
      "A. Upward communication",
      "B. Lateral communication",
      "C. External communication",
      "D. Downward communication",
    ],
  },
  {
    quizId: "b828febb-5527-4b1e-84c4-b355f8a5ba9d",
    question:
      "What is the purpose of lateral communication in an organization?",
    choices: [
      "A. To share information from employees to managers",
      "B. To foster collaboration and coordination",
      "C. To communicate with external stakeholders",
      "D. To enforce company policies",
    ],
  },
  {
    quizId: "f392430b-858c-4d93-a383-95eef2050e27",
    question:
      "Which type of business communication involves interactions with parties outside of the organization?",
    choices: [
      "A. Upward communication",
      "B. Lateral communication",
      "C. External communication",
      "D. Downward communication",
    ],
  },
  {
    quizId: "7b7766ab-de68-4739-a444-ab51ec2ca4d1",
    question:
      "What is a potential weakness of upward communication in a business setting?",
    choices: [
      "A. Lack of collaboration",
      "B. Slow dissemination of information",
      "C. Increased competition",
      "D. Lack of formality",
    ],
  },
  {
    quizId: "216ce0bb-e814-4175-b83c-4a0a29854b0f",
    question:
      "In which type of business communication might employees feel frustrated or undervalued if there is no upward communication?",
    choices: [
      "A. Downward communication",
      "B. Lateral communication",
      "C. External communication",
      "D. Upward communication",
    ],
  },
  {
    quizId: "9b8b28f7-30f2-4ad3-b3a8-f380161ebf01",
    question: "What is a strength of lateral communication in an organization?",
    choices: [
      "A. Encourages competition",
      "B. Promotes team silos",
      "C. Fosters collaboration and knowledge sharing",
      "D. Hinders productivity",
    ],
  },
  {
    quizId: "6f8c95f7-3b0f-46f7-a6ee-69031c69b3db",
    question:
      "Which type of business communication helps build a positive company culture by fostering open communication?",
    choices: [
      "A. Downward communication",
      "B. Lateral communication",
      "C. External communication",
      "D. Upward communication",
    ],
  },
  {
    quizId: "d6f3eac1-2efb-4162-8462-453ad5840260",
    question:
      "What is a potential benefit of engaging in effective business communication within an organization?",
    choices: [
      "A. Decreased employee satisfaction",
      "B. Increased employee turnover",
      "C. Improved business operations",
      "D. Reduced collaboration",
    ],
  },
  {
    quizId: "8e126ce0-54ab-46eb-b6c3-7e1e873a8a9c",
    question:
      "Why is external communication important for a business's success?",
    choices: [
      "A. To hinder customer relationships",
      "B. To build a negative company reputation",
      "C. To promote company growth and success",
      "D. To discourage innovation",
    ],
  },
];

export interface QuizStore {
  questions: IQuestionWithAnswer[];
  setQuestions: (questions: IQuestion[]) => void;
  currentQuestion: IQuestionWithAnswer | null;
  setCurrentQuestion: (question: IQuestionWithAnswer | null) => void;
  answerQuestion: (quizId: string, answer: string) => void;
  next: () => void;
  prev: () => void;
  status: QuizState;
  setStatus: (status: QuizState) => void;
  mode: "timed" | "normal" | null;
  setMode: (mode: "timed" | "normal" | null) => void;
}

export const useQuizStore = create<QuizStore>()(
  persist(
    (set) => ({
      questions: sampleQuiz.map((q, i) => ({
        ...q,
        answer: null,
        questionNumber: i + 1,
      })),
      setQuestions: (questions) =>
        set({
          questions: questions.map((q, i) => ({
            ...q,
            answer: null,
            questionNumber: i + 1,
          })),
        }),
      answerQuestion: (quizId, answer) =>
        set((state) => ({
          questions: state.questions.map((q) =>
            q.quizId === quizId ? { ...q, answer } : q,
          ),
          currentQuestion:
            state.currentQuestion?.quizId === quizId
              ? { ...state.currentQuestion, answer }
              : state.currentQuestion,
        })),
      next: () =>
        set((state) => {
          const currentIndex = state.questions.findIndex(
            (q) => q.quizId === state.currentQuestion?.quizId,
          );
          const nextIndex = currentIndex + 1;
          if (nextIndex < state.questions.length) {
            return {
              currentQuestion: state.questions[nextIndex],
            };
          }
          return {
            currentQuestion: state.currentQuestion,
          };
        }),
      prev: () =>
        set((state) => {
          const currentIndex = state.questions.findIndex(
            (q) => q.quizId === state.currentQuestion?.quizId,
          );
          const prevIndex = currentIndex - 1;
          if (prevIndex >= 0) {
            return {
              currentQuestion: state.questions[prevIndex],
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
    }),
    { name: "quiz-store" },
  ),
);
