import { IMockQuiz } from "../types/IMockQuiz";

export const mockQuizzes: IMockQuiz[] = [
  {
    id: 1,
    name: "Quiz 1",
    author: "Author 1",
    rating: 4.5,
    subject: "Math",
    questionCount: 10,
    saved: false,
  },
  {
    id: 2,
    name: "Quiz 2",
    author: "Author 2",
    rating: 4.0,
    subject: "Science",
    questionCount: 15,
    saved: true,
  },
  {
    id: 3,
    name: "Quiz 3",
    author: "Author 3",
    rating: 3.5,
    subject: "History",
    questionCount: 8,
    saved: false,
  },
  {
    id: 4,
    name: "Quiz 4",
    author: "Author 4",
    rating: 4.8,
    subject: "Geography",
    questionCount: 12,
    saved: true,
  },
];
